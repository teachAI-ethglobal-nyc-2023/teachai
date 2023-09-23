import { ZERO_BI } from "../src/utils/constants";
import { getUser } from "../src/utils/entities/user";
import { getTransaction } from "../src/utils/entities/transaction";
import { User, Transaction, Model, Prompt, Inference } from "../../../generated/schema";
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
     * string indexed prompt, # String of the prompt
     * bytes indexed model, # IPFS hash of the model
     * )
     */

    // attempt to load the model 
    let model = Model.load(event.params.model)

    if (!model) {
        // gracefully fail by creating 
    }

    // load the transaction entity
    let transaction = getTransaction(event)

    // load the user entity
    let user = getUser(event.transaction.from)

    // attempt to load the prompt entity
    let prompt = Prompt.load(event.params.prompt)

    if (!prompt) {
        // create the prompt entity
        prompt = new Prompt(event.params.prompt)
        prompt.transaction = transaction.id
        prompt.eventIndex = event.logIndex
        prompt.text = event.params.prompt
        prompt.owner = user.id
        prompt.inferenceCount = ZERO_BI
        prompt.feedbackCount = ZERO_BI
        prompt.save()
    } else {
        prompt.transaction = transaction.id
        prompt.eventIndex = event.logIndex
        prompt.text = event.params.prompt
        prompt.owner = user.id
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

    return

}

export function handleLogFeedback(event: logFeedback): void {

    /**
     * logFeedback (
     * string indexed inference, # Transaction hash of the inference
     * boolean indexed isOneBetter, # Boolean of whether the first response is better
     * )
     */

    return

}

export function handleOffer(event: emitOffer): void {
    
    // get the transaction entity
    let transaction = getTransaction(event)

    // load the maker and from entities (users)
    let maker = getUser(event.params.maker)
    let from = event.transaction.from == event.params.maker ? maker : getUser(event.transaction.from)

    // load the pair entity
    let pair = getPair(event.params.pay_gem, event.params.buy_gem)

    // calculate the price of the offer (pay_amt / buy_amt)
    let price = event.params.pay_amt.toBigDecimal().div(event.params.buy_amt.toBigDecimal())

    // make the offer entity
    let offer = new Offer(event.params.id)
    offer.transaction = transaction.id
    offer.timestamp = event.block.timestamp
    offer.index = event.logIndex
    offer.maker = maker.id
    offer.from_address = from.id
    offer.pair = pair.id
    offer.pay_gem = event.params.pay_gem
    offer.buy_gem = event.params.buy_gem
    offer.pay_amt = event.params.pay_amt
    offer.buy_amt = event.params.buy_amt
    offer.paid_amt = ZERO_BI
    offer.bought_amt = ZERO_BI
    offer.price = price
    offer.open = true
    offer.save()
}