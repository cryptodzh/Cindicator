import { BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CND_contract,
  ClaimedTokens,
  Transfer,
  NewCloneToken,
  Approval
} from "../generated/CND_contract/CND_contract"
import { client, transfer, approval, claim} from "../generated/schema"

export function handleClaimedTokens(event: ClaimedTokens): void {
  let entity = claim.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new claim(event.transaction.hash.toHex())
  }
  entity.amount=event.params._amount
  entity.save()
}


export function handleNewCloneToken(event: NewCloneToken): void {}

export function handleApproval(event: Approval): void {
  let own=get_client(event.params._owner)
  let spender=get_client(event.params._owner)
  let entity = approval.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new approval(event.transaction.hash.toHex())
  }
  entity.owner=own.id
  entity.spender=spender.id
  entity.value=event.params._amount
  entity.save()
}

export function handleTransfer(event: Transfer): void {
  let sender = get_client(event.params._from)
  sender.transfers_count=sender.transfers_count+BigInt.fromI32(1)
  sender.save()
  let reciever = get_client(event.params._to)
  let entity = transfer.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new transfer(event.transaction.hash.toHex())
  }
  entity.amount=event.params._amount
  entity.from=sender.id
  entity.to=reciever.id
  entity.timestamp=event.block.timestamp
  entity.save()
}


export function get_client(address: Address): client {
  let Client = client.load(address.toHexString())
  if (Client == null) {
    Client = new client(address.toHexString())
    Client.transfers_count = BigInt.fromI32(0)
    Client.save();
  }
  return Client as client;
}
