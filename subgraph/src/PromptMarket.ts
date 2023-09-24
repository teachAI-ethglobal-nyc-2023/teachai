import { ZERO_BI, ONE_BI } from "./utils/constants";
import { getUser } from "./utils/entities/user";
import { getTransaction } from "./utils/entities/transaction";
import { User, Transaction, Model, Prompt, Inference, Feedback, CID } from "../generated/schema";
import { logModel, logPrompt, logInference, logFeedback, logBroadcast } from '../generated/PromptMarket/PromptMarketContract';
import { Bytes } from "@graphprotocol/graph-ts";

export function handleLogModel(event: logModel): void {
    /**
     * logModel (
     * bytes indexed model, # IPFS hash of the model
     * address indexed owner, # Owner of the model (address)
     * string indexed title, # Title of the model
     * )
     */

    // load the transaction entity
    let transaction = getTransaction(event)

    // load the user entity 
    let user = getUser(event.transaction.from)

    // attempt to load the model entity
    let model = Model.load(Bytes.fromByteArray(Bytes.fromBigInt(event.params.modelNumber))) // double check this is Bytes type after ABI codegen 

    if (!model) {
        // create the model entity
        model = new Model(Bytes.fromByteArray(Bytes.fromBigInt(event.params.modelNumber)))
        model.transaction = transaction.id
        model.eventIndex = event.logIndex
        model.title = event.params.modelTitle.toString()
        model.user = user.id
        model.promptCount = ZERO_BI
        model.inferenceCount = ZERO_BI
        model.feedbackCount = ZERO_BI
        model.save()
    } else {
        model.transaction = transaction.id
        model.eventIndex = event.logIndex
        model.title = event.params.modelTitle.toString()
        model.user = user.id
        model.save()
    }
}

export function handleLogPrompt(event: logPrompt): void {
    /**
     * logPrompt (
     * bytes indexed model, # IPFS hash of the model
     * string indexed prompt, # String of the prompt
     * )
     */

    // load the transaction entity
    let transaction = getTransaction(event)

    // load the user entity
    let user = getUser(event.transaction.from)

    // attempt to load the prompt entity
    let prompt = Prompt.load(Bytes.fromByteArray(Bytes.fromBigInt(event.params.promptNumber)))

    // attempt to load the model 
    let model = Model.load(Bytes.fromByteArray(Bytes.fromBigInt(event.params.modelNumber)))

    if (!model) {
        // TODO: gracefully fail by creating a logModel event and passing to handleLogModel
        model = new Model(Bytes.fromByteArray(Bytes.fromBigInt(event.params.modelNumber)))
        model.transaction = transaction.id
        model.eventIndex = event.logIndex
        model.title = "filler_title"
        model.user = user.id
        model.promptCount = ZERO_BI
        model.inferenceCount = ZERO_BI
        model.feedbackCount = ZERO_BI
        model.save()
    }

    if (!prompt) {
        // create the prompt entity
        prompt = new Prompt(Bytes.fromByteArray(Bytes.fromBigInt(event.params.promptNumber)))
        prompt.transaction = transaction.id
        prompt.eventIndex = event.logIndex
        prompt.model = model.id
        prompt.user = user.id
        prompt.text = event.params.question
        prompt.optionOne = event.params.option1
        prompt.optionTwo = event.params.option2
        prompt.isOneBetter = true
        prompt.hasFeedback = false
        prompt.save()

        // update the model entity
        model.promptCount = model.promptCount.plus(ONE_BI)
        model.save()
    } else {
        prompt.transaction = transaction.id
        prompt.eventIndex = event.logIndex
        prompt.model = model.id
        prompt.user = user.id
        prompt.text = event.params.question
        prompt.optionOne = event.params.option1
        prompt.optionTwo = event.params.option2
        prompt.isOneBetter = true
        prompt.hasFeedback = false
        prompt.save()
    }
}

export function handleLogInference(event: logInference): void {
    /**
     * logInference (
     * string indexed prompt, # Transaction hash of the prompt
     * string indexed textOne, # String of the first response
     * string indexed textTwo, # String of the second response
     * )
     */

    // load the transaction entity
    let transaction = getTransaction(event)

    // load the user entity
    let user = getUser(event.transaction.from)

    // attempt to load the prompt entity
    let prompt = Prompt.load(Bytes.fromByteArray((Bytes.fromBigInt(event.params.promptNumber))))

    if (!prompt) {
        // TODO: gracefully fail by creating a logPrompt event and passing to handleLogPrompt
        return 
    }

    // attempt to load the model entity
    let model = Model.load(prompt.model)

    if (!model) {
        // TODO: gracefully fail by creating a logModel event and passing to handleLogModel
        return 
    } 

    

    // attempt to load the inference entity
    let inference = Inference.load(Bytes.fromByteArray((Bytes.fromBigInt(event.params.promptNumber))))

    if (!inference) {
        // create the inference entity
        inference = new Inference(Bytes.fromByteArray((Bytes.fromBigInt(event.params.promptNumber))))
        inference.transaction = transaction.id
        inference.eventIndex = event.logIndex
        inference.model = model.id
        inference.prompt = prompt.id
        inference.user = user.id
        inference.textOne = event.params.textOne
        inference.textTwo = event.params.textTwo
        inference.save()

        // update the model entity
        model.inferenceCount = model.inferenceCount.plus(ONE_BI)
        model.save()
    } else {
        inference.transaction = transaction.id
        inference.eventIndex = event.logIndex
        inference.model = model.id
        inference.prompt = prompt.id
        inference.user = user.id
        inference.textOne = event.params.textOne
        inference.textTwo = event.params.textOne
        inference.save()
    }
    prompt.inference = inference.id
    prompt.optionOne = event.params.textOne
    prompt.optionTwo = event.params.textTwo
    prompt.save()
}

export function handleLogFeedback(event: logFeedback): void {
    /**
     * logFeedback (
     * string indexed inference, # Transaction hash of the inference
     * boolean indexed isOneBetter, # Boolean of whether the first response is better
     * )
     */

    // load the transaction entity
    let transaction = getTransaction(event)

    // load the user entity
    let user = getUser(event.transaction.from)

    // attempt to load the prompt entity
    let prompt = Prompt.load(Bytes.fromByteArray(Bytes.fromBigInt(event.params.promptNumber)))

    if (!prompt) {
        // TODO: gracefully fail by creating a logPrompt event and passing to handleLogPrompt
        return 
    }

    let inference = Inference.load(Bytes.fromByteArray(Bytes.fromBigInt(event.params.promptNumber)))

    if (!inference) {
        // TODO: gracefully fail by creating a logInference event and passing to handleLogInference
        return 
    }

    // attempt to load the model entity
    let model = Model.load(prompt.model)

    if (!model) {
        // TODO: gracefully fail by creating a logModel event and passing to handleLogModel
        return 
    }

    // attempt to load the feedback entity
    let feedback = Feedback.load(event.transaction.hash)

    if (!feedback) {
        // create the feedback entity
        feedback = new Feedback(event.transaction.hash)
        feedback.transaction = transaction.id
        feedback.eventIndex = event.logIndex
        feedback.model = model.id
        feedback.user = user.id
        feedback.prompt = prompt.id
        feedback.inference = inference.id
        feedback.isOneBetter = event.params.isOneBetter
        feedback.save()

        // update the model entity
        model.feedbackCount = model.feedbackCount.plus(ONE_BI)
        model.save()

        // update the prompt entity
        prompt.feedback = feedback.id
        prompt.isOneBetter = event.params.isOneBetter
        prompt.hasFeedback = true
        prompt.save()
    } else {
        feedback.transaction = transaction.id
        feedback.eventIndex = event.logIndex
        feedback.model = model.id
        feedback.user = user.id
        feedback.prompt = prompt.id
        feedback.inference = inference.id
        feedback.isOneBetter = event.params.isOneBetter
        feedback.save()

        // update the prompt entity
        prompt.feedback = feedback.id
        prompt.isOneBetter = event.params.isOneBetter
        prompt.hasFeedback = true
        prompt.save()
    }
}

export function handleLogBroadcast(event: logBroadcast): void {

    // load the transaction entity
    let transaction = getTransaction(event)

    // load the user entity
    let user = getUser(event.transaction.from)

    // create the CID entity
    let cid = new CID(event.params.cid) 
    cid.transaction = transaction.id
    cid.eventIndex = event.logIndex
    cid.user = user.id
    cid.save()
}