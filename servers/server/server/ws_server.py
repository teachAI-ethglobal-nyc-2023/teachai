import os
import json
import time
import logging
import asyncio
import websockets
from typing import Optional, Dict, List, Union


import pandas as pd

from subgrounds.pagination import ShallowStrategy
from subgrounds import Subgrounds, Subgraph, SyntheticField

from web3 import Web3

from dotenv import load_dotenv
load_dotenv()  

logger = logging.getLogger(__name__)

# Stop subgrounds from logging kak
logging.getLogger("subgrounds").setLevel(logging.WARNING)

POLYGON_MUMBAI = os.environ.get('POLYGON_MUMBAI')
DEV_WALLET = os.environ.get("DEV_WALLET")
DEV_KEY = os.environ.get("DEV_KEY")

class Execute:

    def __init__(
            self,
            POLYGON_MUMBAI, 
            DEV_WALLET, 
            DEV_KEY
        ) -> None:
        w3 = Web3(Web3.HTTPProvider(POLYGON_MUMBAI))
        self.w3 = w3
        self.wallet = w3.to_checksum_address(DEV_WALLET)
        self.key = DEV_KEY

        with open('PromptMarketContract.json') as f:
            contract_json = json.load(f)

        addy = self.w3.to_checksum_address('0x76cb33a84cb5cae9283c9cafe6a24a457ee812f4')

        self.contract = w3.eth.contract(address=addy, abi=contract_json)

    def send_inference(self, prompt_id, text_one, text_two): 

        txn_nonce = self.w3.eth.get_transaction_count(DEV_WALLET)
        gas_price = self.w3.eth.gas_price
        gas=3000000
        txn = {'chainId': 80001, 'gas' : gas, 'gasPrice': gas_price, 'nonce': txn_nonce}

        inference = self.contract.functions.createInference(prompt_id, text_one, text_two).build_transaction(txn)
        signed_inference = self.w3.eth.account.sign_transaction(inference, DEV_KEY)
        sent_inference = self.w3.eth.send_raw_transaction(signed_inference.rawTransaction)
        self.w3.eth.wait_for_transaction_receipt(sent_inference)

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
                
async def send_websocket_request(text):
    uri = "wss://example.com/ws"  # Replace with your WebSocket server URL

    async with websockets.connect(uri) as websocket:
        # Prepare your WebSocket request data using the passed variables
        websocket_request = {
            "text": text
        }

        # Convert the request data to JSON
        websocket_request_json = json.dumps(websocket_request)

        # Send the WebSocket request
        await websocket.send(websocket_request_json)
        print("Sent WebSocket request:", websocket_request_json)

        # Listen for the WebSocket response
        response = await websocket.recv()
        print("Received WebSocket response:", response)

async def main():

    subgraph = 'https://api.thegraph.com/subgraphs/name/denverbaumgartner/teachai'
    td = TrainData(url=subgraph)
    ex = Execute(POLYGON_MUMBAI=POLYGON_MUMBAI, DEV_WALLET=DEV_WALLET, DEV_KEY=DEV_KEY)

    # collect the data 
    td.data = td.get_prompts()
    print("collected a total of {} prompts".format(len(td.data)))
    print(td.data)
    
    while True: 

        # wait 5 seconds
        time.sleep(3)
        print("checking for new prompts")

        # collect the data again
        new_data = td.get_prompts()

        # find the difference between the two
        new_prompts = td.get_new_prompts(td.data, new_data)

        # if there are new prompts, send them to the model
        if len(new_prompts) > 0: 
            print(new_prompts)

            prompt_ids = [int(x, 16) for x in new_prompts['prompts_id'].tolist()]
            prompt_text = new_prompts['prompts_text'].tolist()
            for i in range(len(prompt_text)):
                
                current_id = prompt_ids[i]
                current_text = prompt_text[i]

                print(prompt_ids[i])
                print(prompt_text[i])

                # send to model
                response = await send_websocket_request(current_text)
                
                # get response
        
                # post the response to chain 

            td.data = pd.concat([td.data, new_data]).drop_duplicates(keep=False).reset_index(drop=True)

if __name__ == '__main__':
    asyncio.run(main())