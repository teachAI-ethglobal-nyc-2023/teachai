# Smart Contracts

## Functions 

### Admin

`updateModel`: we need a way to pass in a value that specifies which model is being used to server inferences. assuming the model is on cartesi, this can be a `voucher` that is emitted after a model tuning occurs. if we run the model on a remote server, this could possibly be the cid indicating where the weights are stored on `IPFS`. regardless, we need a simple way to indicate what model is being used by the contract. 

event(s): 

```sol
    logModel (
        bytes indexed model, # IPFS hash of the model
        address indexed owner, # Owner of the model (address)
        string indexed title, # Title of the model
    )
```

### Public

`userPrompt`: we need a way to allow the user to pass data to the model as a prompt 