import { Message } from './Message'

export class Response extends Message {
  ok: boolean = true
  message: string = ''
}

export class BlockResponse extends Response {
  block: any = null
}

export class ServersResponse extends Response {
  servers: string[] = []
}

export class NodeTypeResponse extends Response {
  isFullNode: boolean = false
}

export class ServerAddressResponse extends Response {
  uri: string = ''
}

export class PendingTransactionsResponse extends Response {
  transactions: [] = []
}

export class DifficultyReponse extends Response {
  difficulty: number = 2
}

export class BalanceResponse extends Response {
  balance: any = null
}

export class TransactionResponse extends Response {
  transaction: any = null
}
