# Smart Contracts

## Functions 

### Admin

`updateModel`: we need a way to pass in a value that specifies which model is being used to server inferences. assuming the model is on cartesi, this can be a `voucher` that is emitted after a model tuning occurs. if we run the model on a remote server, this could possibly be the cid indicating where the weights are stored on `IPFS`. regardless, we need a simple way to indicate what model is being used by the contract. 

function(s): 

```sol
function updateModel(
    string model, 
    address owner, 
    string title
) {

    // update global params 
    model = model
    ...

}
```

event(s): 

```sol
    logModel (
        bytes indexed model, # unique identifier of the model
        address indexed owner, # Owner of the model (address)
        string indexed title, # Title of the model
    )
```

`setRate`: we need a way to set the cost per prompt for the model. ideally, this will also specify the ERC20 that is being accepted for the prompts. 

function(s): 

```sol
function setRate(
    uint rate, 
    address asset, 
) {

    // update global params 
    rate = rate
    ...
}
```

event(s): 

```sol
    logRate (
        int indexed rate, # the payment rate per prompt
        address indexed asset, # the asset that we are accepting for the prompt 
    )
```

Nice-to-Have(s): 

- [ ] allow the admin to specify multiple assets that they will accept at various rates

### Public

`userPrompt`: we need a way to allow the user to pass data to the model as a prompt. when the user supplies the prompt, they will also make a payment (specified by `setRate`). 

function(s): 

```sol
function userPrompt(
    string prompt, 
    address asset, 
) {

    // require user payment at set rate 
    
    // emit data
    emit logPrompt(
        model, 
        prompt, 
        msg.sender
    )
}
```

event(s): 

```sol
    logPrompt (
        bytes indexed model, # unique identifier of the model. specified by `updateModel`
        string indexed prompt, # string of the prompt
        int indexed promptID, # the unique id associated with the prompt
    )
```

`createInference`: we need a way to return text predictions given a successful prompt. to map prompts to inferences, we can require the responsder to pass in the prompt id associated with the initial prompt that it is responding to. 

function(s): 

```sol
function createInference(
    uint promptID, 
    string textOne, 
    string textTwo
) {

    emit logInference(
        promptID, 
        textOne, 
        textTwo
    )
}
```

event(s): 

```sol
    logInference (
        uint indexed prompt, # Unique ID of the prompt # TODO: determine if this is the best type to use 
        string indexed textOne, # String of the first response
        string indexed textTwo, # String of the second response
    )    
```

`inferenceFeedback`: we need a way to allow the user to provide feedback to a given inference. to map the inference to feedback, we can simply require the user providing feedback to provide the prompt id that led to the creation of the inference. 

```sol
function inferenceFeedback(
    uint promptID, 
    bool isOneBetter,
) {

    emit logFeedback(
        promptID, 
        isOneBetter, 
    )
}
```

event(s): 

```
    logFeedback (
        string indexed promptID, # the unique identifier of the prompt
        boolean indexed isOneBetter, # Boolean of whether the first response is better
    )
```

Nice-to-Have(s): 

- [ ] currently, we are simply creating a trail of transaction hashes through which we can connect prompt -> inference -> feedback. this could be handled in a much smarter way with a series of mappings within the smart contract itself. then, within the events, we could simply reference a unique id indicating which sequence it is attached to. 
    - [ ] alternatively, another simple solution would be to keep a counter that increments with each prompt. this would allow the trail of events to allows map to the counter associated with the prompt. within both functions and events, this would replace the need to record the transaction hash, instead just requiring the prompts unique identifier. 
- [ ] currently, there is no aspect of security to the contract. this allows anyone to provide feedback to an inference, and does not limit the amount of feedback that an inference can get.
    - [ ] initially, we could simply only permit one feedback per inference. this could be tracked through a mapping of {prompt_id: bool (indicating feedback or not)}
    - [ ] additionally, we could require a check that the user submitting feedback is the user that submitted the prompt. 

### Nice-to-Have(s): 

`dataUpload`: this would allow a user to specify that they have uploaded a dataset to IPFS that is an aggregate of some underlying grouping of feedbacks. in its v0 state, this would simply be a function that allows the user to pass an `IPFS CID` pointing to where the data is stored. 

event(s): 
```
    logDataUpload (
        string indexed CID, # the IPFS CID where the data is pinned
        address indexed user, # the user that specified that they have pinned the data to an IPFS instance
    )
```

the `IPFS` data would ideally comply with the following format: 

```json
{
    "graphQL": "<query string used to collect the data>", 
    "publisher": "0xpublisher_address",
    "data": {
        "model": "<unique model id>",
        "modelOwner": "0xmodel_owner_address",
        "prompt": "the user prompt to the model",
        "promptOwner": "the user the paid for the prompt",
        "inferenceOne": "the first inference the model produces as a result of the prompt",
        "inferenceTwo": "the second inference the model produces as a result of the prompt",
        "isOneBetter": "boolean of whether the first response is better",
        "feedbackOwner": "the user that provided the feedback on the inferences"
    }
}
```

`permitDataUser`: this would be a possible application of a data DAO, and would most likely require some substantial modifications to the system to make it viable. this would be a system through which you can permission access to the IPFS instance that has been created through `dataUpload`. it could involve a litany of things and we should probably discuss how this could be implemented before proceeding. 