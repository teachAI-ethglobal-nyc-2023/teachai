import { ZERO_BI } from "../constants";
import { User } from "../../../generated/schema";
import { Address } from '@graphprotocol/graph-ts';

export function getUser(address: Address): User {

    let user = User.load(address);

    if (!user) {
        user = new User(address);
        user.inferenceCount = ZERO_BI
        user.feedbackCount = ZERO_BI
        user.save();
    }
    return user as User;
}