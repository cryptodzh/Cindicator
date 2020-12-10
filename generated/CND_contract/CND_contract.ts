// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ClaimedTokens extends ethereum.Event {
  get params(): ClaimedTokens__Params {
    return new ClaimedTokens__Params(this);
  }
}

export class ClaimedTokens__Params {
  _event: ClaimedTokens;

  constructor(event: ClaimedTokens) {
    this._event = event;
  }

  get _token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _controller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class NewCloneToken extends ethereum.Event {
  get params(): NewCloneToken__Params {
    return new NewCloneToken__Params(this);
  }
}

export class NewCloneToken__Params {
  _event: NewCloneToken;

  constructor(event: NewCloneToken) {
    this._event = event;
  }

  get _cloneToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _snapshotBlock(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CND_contract extends ethereum.SmartContract {
  static bind(address: Address): CND_contract {
    return new CND_contract("CND_contract", address);
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  approve(_spender: Address, _amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_spender),
      ethereum.Value.fromUnsignedBigInt(_amount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(
    _spender: Address,
    _amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_spender),
      ethereum.Value.fromUnsignedBigInt(_amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  creationBlock(): BigInt {
    let result = super.call("creationBlock", "creationBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_creationBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "creationBlock",
      "creationBlock():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transferFrom(_from: Address, _to: Address, _amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    _from: Address,
    _to: Address,
    _amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  balanceOfAt(_owner: Address, _blockNumber: BigInt): BigInt {
    let result = super.call(
      "balanceOfAt",
      "balanceOfAt(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_blockNumber)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOfAt(
    _owner: Address,
    _blockNumber: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOfAt",
      "balanceOfAt(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_blockNumber)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  version(): string {
    let result = super.call("version", "version():(string)", []);

    return result[0].toString();
  }

  try_version(): ethereum.CallResult<string> {
    let result = super.tryCall("version", "version():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  createCloneToken(
    _cloneTokenName: string,
    _cloneDecimalUnits: i32,
    _cloneTokenSymbol: string,
    _snapshotBlock: BigInt,
    _transfersEnabled: boolean
  ): Address {
    let result = super.call(
      "createCloneToken",
      "createCloneToken(string,uint8,string,uint256,bool):(address)",
      [
        ethereum.Value.fromString(_cloneTokenName),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_cloneDecimalUnits)),
        ethereum.Value.fromString(_cloneTokenSymbol),
        ethereum.Value.fromUnsignedBigInt(_snapshotBlock),
        ethereum.Value.fromBoolean(_transfersEnabled)
      ]
    );

    return result[0].toAddress();
  }

  try_createCloneToken(
    _cloneTokenName: string,
    _cloneDecimalUnits: i32,
    _cloneTokenSymbol: string,
    _snapshotBlock: BigInt,
    _transfersEnabled: boolean
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createCloneToken",
      "createCloneToken(string,uint8,string,uint256,bool):(address)",
      [
        ethereum.Value.fromString(_cloneTokenName),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_cloneDecimalUnits)),
        ethereum.Value.fromString(_cloneTokenSymbol),
        ethereum.Value.fromUnsignedBigInt(_snapshotBlock),
        ethereum.Value.fromBoolean(_transfersEnabled)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  balanceOf(_owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(_owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  parentToken(): Address {
    let result = super.call("parentToken", "parentToken():(address)", []);

    return result[0].toAddress();
  }

  try_parentToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("parentToken", "parentToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  generateTokens(_owner: Address, _amount: BigInt): boolean {
    let result = super.call(
      "generateTokens",
      "generateTokens(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_generateTokens(
    _owner: Address,
    _amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "generateTokens",
      "generateTokens(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupplyAt(_blockNumber: BigInt): BigInt {
    let result = super.call(
      "totalSupplyAt",
      "totalSupplyAt(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_blockNumber)]
    );

    return result[0].toBigInt();
  }

  try_totalSupplyAt(_blockNumber: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalSupplyAt",
      "totalSupplyAt(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_blockNumber)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(_to: Address, _amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_to),
      ethereum.Value.fromUnsignedBigInt(_amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(_to: Address, _amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_to),
      ethereum.Value.fromUnsignedBigInt(_amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transfersEnabled(): boolean {
    let result = super.call(
      "transfersEnabled",
      "transfersEnabled():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_transfersEnabled(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transfersEnabled",
      "transfersEnabled():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  IS_CND_CONTRACT_MAGIC_NUMBER(): BigInt {
    let result = super.call(
      "IS_CND_CONTRACT_MAGIC_NUMBER",
      "IS_CND_CONTRACT_MAGIC_NUMBER():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_IS_CND_CONTRACT_MAGIC_NUMBER(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "IS_CND_CONTRACT_MAGIC_NUMBER",
      "IS_CND_CONTRACT_MAGIC_NUMBER():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  parentSnapShotBlock(): BigInt {
    let result = super.call(
      "parentSnapShotBlock",
      "parentSnapShotBlock():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_parentSnapShotBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "parentSnapShotBlock",
      "parentSnapShotBlock():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approveAndCall(
    _spender: Address,
    _amount: BigInt,
    _extraData: Bytes
  ): boolean {
    let result = super.call(
      "approveAndCall",
      "approveAndCall(address,uint256,bytes):(bool)",
      [
        ethereum.Value.fromAddress(_spender),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromBytes(_extraData)
      ]
    );

    return result[0].toBoolean();
  }

  try_approveAndCall(
    _spender: Address,
    _amount: BigInt,
    _extraData: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "approveAndCall",
      "approveAndCall(address,uint256,bytes):(bool)",
      [
        ethereum.Value.fromAddress(_spender),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromBytes(_extraData)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  destroyTokens(_owner: Address, _amount: BigInt): boolean {
    let result = super.call(
      "destroyTokens",
      "destroyTokens(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_destroyTokens(
    _owner: Address,
    _amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "destroyTokens",
      "destroyTokens(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  allowance(_owner: Address, _spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(_owner), ethereum.Value.fromAddress(_spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(
    _owner: Address,
    _spender: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(_owner), ethereum.Value.fromAddress(_spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenFactory(): Address {
    let result = super.call("tokenFactory", "tokenFactory():(address)", []);

    return result[0].toAddress();
  }

  try_tokenFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall("tokenFactory", "tokenFactory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  controller(): Address {
    let result = super.call("controller", "controller():(address)", []);

    return result[0].toAddress();
  }

  try_controller(): ethereum.CallResult<Address> {
    let result = super.tryCall("controller", "controller():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ChangeControllerCall extends ethereum.Call {
  get inputs(): ChangeControllerCall__Inputs {
    return new ChangeControllerCall__Inputs(this);
  }

  get outputs(): ChangeControllerCall__Outputs {
    return new ChangeControllerCall__Outputs(this);
  }
}

export class ChangeControllerCall__Inputs {
  _call: ChangeControllerCall;

  constructor(call: ChangeControllerCall) {
    this._call = call;
  }

  get _newController(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeControllerCall__Outputs {
  _call: ChangeControllerCall;

  constructor(call: ChangeControllerCall) {
    this._call = call;
  }
}

export class CreateCloneTokenCall extends ethereum.Call {
  get inputs(): CreateCloneTokenCall__Inputs {
    return new CreateCloneTokenCall__Inputs(this);
  }

  get outputs(): CreateCloneTokenCall__Outputs {
    return new CreateCloneTokenCall__Outputs(this);
  }
}

export class CreateCloneTokenCall__Inputs {
  _call: CreateCloneTokenCall;

  constructor(call: CreateCloneTokenCall) {
    this._call = call;
  }

  get _cloneTokenName(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _cloneDecimalUnits(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _cloneTokenSymbol(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _snapshotBlock(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _transfersEnabled(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }
}

export class CreateCloneTokenCall__Outputs {
  _call: CreateCloneTokenCall;

  constructor(call: CreateCloneTokenCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class GenerateTokensCall extends ethereum.Call {
  get inputs(): GenerateTokensCall__Inputs {
    return new GenerateTokensCall__Inputs(this);
  }

  get outputs(): GenerateTokensCall__Outputs {
    return new GenerateTokensCall__Outputs(this);
  }
}

export class GenerateTokensCall__Inputs {
  _call: GenerateTokensCall;

  constructor(call: GenerateTokensCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class GenerateTokensCall__Outputs {
  _call: GenerateTokensCall;

  constructor(call: GenerateTokensCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ApproveAndCallCall extends ethereum.Call {
  get inputs(): ApproveAndCallCall__Inputs {
    return new ApproveAndCallCall__Inputs(this);
  }

  get outputs(): ApproveAndCallCall__Outputs {
    return new ApproveAndCallCall__Outputs(this);
  }
}

export class ApproveAndCallCall__Inputs {
  _call: ApproveAndCallCall;

  constructor(call: ApproveAndCallCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _extraData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ApproveAndCallCall__Outputs {
  _call: ApproveAndCallCall;

  constructor(call: ApproveAndCallCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DestroyTokensCall extends ethereum.Call {
  get inputs(): DestroyTokensCall__Inputs {
    return new DestroyTokensCall__Inputs(this);
  }

  get outputs(): DestroyTokensCall__Outputs {
    return new DestroyTokensCall__Outputs(this);
  }
}

export class DestroyTokensCall__Inputs {
  _call: DestroyTokensCall;

  constructor(call: DestroyTokensCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DestroyTokensCall__Outputs {
  _call: DestroyTokensCall;

  constructor(call: DestroyTokensCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ClaimTokensCall extends ethereum.Call {
  get inputs(): ClaimTokensCall__Inputs {
    return new ClaimTokensCall__Inputs(this);
  }

  get outputs(): ClaimTokensCall__Outputs {
    return new ClaimTokensCall__Outputs(this);
  }
}

export class ClaimTokensCall__Inputs {
  _call: ClaimTokensCall;

  constructor(call: ClaimTokensCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ClaimTokensCall__Outputs {
  _call: ClaimTokensCall;

  constructor(call: ClaimTokensCall) {
    this._call = call;
  }
}

export class EnableTransfersCall extends ethereum.Call {
  get inputs(): EnableTransfersCall__Inputs {
    return new EnableTransfersCall__Inputs(this);
  }

  get outputs(): EnableTransfersCall__Outputs {
    return new EnableTransfersCall__Outputs(this);
  }
}

export class EnableTransfersCall__Inputs {
  _call: EnableTransfersCall;

  constructor(call: EnableTransfersCall) {
    this._call = call;
  }

  get _transfersEnabled(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class EnableTransfersCall__Outputs {
  _call: EnableTransfersCall;

  constructor(call: EnableTransfersCall) {
    this._call = call;
  }
}
