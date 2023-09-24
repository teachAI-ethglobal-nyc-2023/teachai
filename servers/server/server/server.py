import json
import time
import logging
from typing import Optional, Dict, List, Union

import pandas as pd

from subgrounds.pagination import ShallowStrategy
from subgrounds import Subgrounds, Subgraph, SyntheticField

logger = logging.getLogger(__name__)

# Stop subgrounds from logging kak
logging.getLogger("subgrounds").setLevel(logging.WARNING)

class TrainData: 

    def __init__(
        self,
        url: str,
    ) -> None:
        self.sg = Subgrounds()
        self.train = self._initialize_subgraph(url=url)
        self.data = None

    def _initialize_subgraph(self, url: str, attempts: int = 3):

        subgraph = None

        for attempt in range(attempts):
            try:
                subgraph = self.sg.load_subgraph(url=url)
                break
            except Exception as e:
                logger.debug(f"Exception loading subgraph: {e}")
                continue

        if subgraph is None:
            raise ValueError(f"subgraph_url: {url} failed to load properly")

        return subgraph
    
    def get_prompts(self):

        prompts = self.train.Query.prompts(
            first=1000
        )

        fields = [
            prompts.id,
            prompts.transaction.id,
            prompts.model.id,
            prompts.text,
            prompts.optionOne,
            prompts.optionTwo, 
            prompts.isOneBetter, 
            prompts.hasFeedback
        ]

        df = self.sg.query_df(
            fields, pagination_strategy=ShallowStrategy
        )

        return df 
    
    def get_new_prompts(self, old_df, new_df): 

        unique_rows = new_df[~new_df['prompts_id'].isin(old_df['prompts_id'])]

        return unique_rows
                


def __main__():

    subgraph = 'https://api.thegraph.com/subgraphs/name/denverbaumgartner/teachai'
    td = TrainData(url=subgraph)

    # collect the data 
    td.data = td.get_prompts()
    print("collected a total of {} prompts".format(len(td.data)))
    print(td.data)
    
    while True: 

        # wait 5 seconds
        time.sleep(1)
        print("checking for new prompts")

        # collect the data again
        new_data = td.get_prompts()

        # find the difference between the two
        new_prompts = td.get_new_prompts(td.data, new_data)

        # if there are new prompts, send them to the model
        if len(new_prompts) > 0: 
            print(new_prompts)
            td.data = pd.concat([td.data, new_data]).drop_duplicates(keep=False).reset_index(drop=True)


if __name__ == '__main__':
    __main__()