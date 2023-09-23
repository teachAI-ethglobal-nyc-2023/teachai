import { ZERO_BI, ONE_BI } from "../src/utils/constants";
import { getUser } from "../src/utils/entities/user";
import { getTransaction } from "../src/utils/entities/transaction";
import { User, Transaction, Model, Prompt, Inference, Feedback } from "../../../generated/schema";
import { logModel, logPromp, logInference, logFeedback } from '../../generated/TeachAI/TeachAI';

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
    let model = Model.load(event.params.model) // double check this is Bytes type after ABI codegen 

    if (!model) {
        // create the model entity
        model = new Model(event.params.model)
        model.transaction = transaction.id
        model.eventIndex = event.logIndex
        model.title = event.params.title
        model.owner = user.id
        model.promptCount = ZERO_BI
        model.inferenceCount = ZERO_BI
        model.feedbackCount = ZERO_BI
        model.save()
    } else {
        model.transaction = transaction.id
        model.eventIndex = event.logIndex
        model.title = event.params.title
        model.owner = user.id
        model.save()
    }

    return model
}

export function handleLogPrompt(event: logPromp): void {
    /**
     * logPrompt (
     * bytes indexed model, # IPFS hash of the model
     * string indexed prompt, # String of the prompt
     * address indexed user, # the user making the prompt request
     * )
     */

    // attempt to load the model 
    let model = Model.load(event.params.model)

    if (!model) {
        // TODO: gracefully fail by creating a logModel event and passing to handleLogModel
        return 
    }

    // load the transaction entity
    let transaction = getTransaction(event)

    // load the user entity
    let user = getUser(event.transaction.from)

    // attempt to load the prompt entity
    let prompt = Prompt.load(event.transaction.hash)

    if (!prompt) {
        // create the prompt entity
        prompt = new Prompt(event.transaction.hash)
        prompt.transaction = transaction.id
        prompt.eventIndex = event.logIndex
        prompt.model = model.id
        prompt.user = user.id
        prompt.text = event.params.prompt
        prompt.save()

        // update the model entity
        model.promptCount = model.promptCount.plus(ONE_BI)
        model.save()
    } else {
        prompt.transaction = transaction.id
        prompt.eventIndex = event.logIndex
        prompt.model = model.id
        prompt.user = user.id
        prompt.text = event.params.prompt
        prompt.save()
    }

    return
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
    let prompt = Prompt.load(event.params.prompt)

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
    let inference = Inference.load(event.transaction.hash)

    if (!inference) {
        // create the inference entity
        inference = new Inference(event.transaction.hash)
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
        inference.textTwo = event.params.textTwo
        inference.save()
    }
    prompt.inference = inference.id
    prompt.save()

    return
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

    // attempt to load the inference entity
    let inference = Inference.load(event.params.inference)

    if (!inference) {
        // TODO: gracefully fail by creating a logInference event and passing to handleLogInference
        return 
    }

    // attempt to load the model entity
    let model = Model.load(inference.model)

    if (!model) {
        // TODO: gracefully fail by creating a logModel event and passing to handleLogModel
        return 
    }

    // attempt to load the prompt entity
    let prompt = Prompt.load(inference.prompt)

    if (!prompt) {
        // TODO: gracefully fail by creating a logPrompt event and passing to handleLogPrompt
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
        prompt.save()
    }

    return
}