/* eslint-disable prettier/prettier */
import { Message } from './Message'

export class Request extends Message { }

export class GetBlockRequest extends Request {
  blockID: string = ''
}

export class GetNextBlockRequest extends Request {
  blockID: string = ''
}

export class GetLastBlockRequest extends Request { }

export class GetGenesisRequest extends Request { }

export class PostBlockRequest extends Request {
  block: any = null
}

export class GetPendingTransactionsRequest extends Request { }
export class PostTransactionRequest extends Request {
  transaction: any = null
}

export class GetServersRequest extends Request { }

export class PostServersRequest extends Request {
  servers: string[] = []
}

export class GetNodeTypeRequest extends Request { }
export class GetDifficultyRequest extends Request { }
export class GetBalanceRequest extends Request {
  owner: string = ''
}
export class GetServerAddressRequest extends Request { }

export class GetTransactionRequest extends Request {
  transactionSignature: string = ''
  pending: boolean = false
}
