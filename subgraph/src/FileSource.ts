import { CID } from "../generated/schema";
import { ipfs } from '@graphprotocol/graph-ts'

export function handleCID(hash: string): void {

    let data = ipfs.cat(hash)
    if (!data) {
        return 
    } else {
        let loaded = data.toString()

        let cid = CID.load(hash)
        if (!cid) {
            return 
        } else {
            cid.data = loaded
            cid.save()
        }
    }
}