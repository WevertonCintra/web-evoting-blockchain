import { Message } from './messages/Message'
import {
  Request,
  GetServersRequest,
  GetBlockRequest,
  GetNextBlockRequest,
  GetLastBlockRequest,
  GetGenesisRequest,
  GetPendingTransactionsRequest,
  GetTransactionRequest,
  PostBlockRequest,
  PostTransactionRequest,
  PostServersRequest,
  GetDifficultyRequest,
  GetBalanceRequest,
} from './messages/Request'
import {
  Response,
  NodeTypeResponse,
  ServersResponse,
  BlockResponse,
  PendingTransactionsResponse,
  TransactionResponse,
  DifficultyReponse,
  BalanceResponse,
} from './messages/Response'

export class P2P {
  readonly socket: WebSocket
  requests: { [key: string]: (param: any) => void } = {}
  socketQueueId = 0

  constructor() {
    this.socket = new WebSocket('ws://127.0.0.1:1234/')
    this.socket.onmessage = (arg) => this.onMessage(arg)
  }

  private async onMessage(msg: MessageEvent<string>) {
    const data = JSON.parse(msg.data)
    console.log('Receive message: ' + msg.data)

    const type: string = data.type
    if (type.endsWith('Response')) {
      this.receiveResponse(data)
      return
    }

    switch (data.type) {
      case 'GetNodeTypeRequest':
        this.sendResponse(new NodeTypeResponse())
        break
    }
  }

  private sendMessage(message: Message) {
    const json = JSON.stringify(message)
    console.log('Send: ' + json)
    this.socket.send(json)
  }

  private sendResponse(response: Response) {
    this.sendMessage(response)
  }

  private receiveResponse(response: Response) {
    for (const key in this.requests) {
      if (key.startsWith(response.type)) {
        this.requests[key](response)
      }
    }
  }

  private async request(request: Request, response: Response) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.sendMessage(request)

      const requests = this.requests
      const id = response.type + this.socketQueueId++
      try {
        const result = await new Promise(function (resolve, reject) {
          requests[id] = resolve

          setTimeout(() => {
            reject(new Error('Timeout'))
          }, 5000)
        })
        return result
      } finally {
        delete this.requests[id]
      }
    } else {
      console.log('The connection is closed!')
      return null
    }
  }

  async getServers() {
    return await this.request(new GetServersRequest(), new ServersResponse())
  }

  async getBlock(blockId: string) {
    const request = new GetBlockRequest()
    request.blockID = blockId
    return await this.request(request, new BlockResponse())
  }

  async getNextBlock(blockId: string) {
    const request = new GetNextBlockRequest()
    request.blockID = blockId
    return await this.request(request, new BlockResponse())
  }

  async getLastBlock() {
    return await this.request(new GetLastBlockRequest(), new BlockResponse())
  }

  async getGenesis() {
    return await this.request(new GetGenesisRequest(), new BlockResponse())
  }

  async getPendingTransaction() {
    return await this.request(
      new GetPendingTransactionsRequest(),
      new PendingTransactionsResponse(),
    )
  }

  async getTransaction(transactionSignature: string, pending: boolean) {
    const request = new GetTransactionRequest()
    request.transactionSignature = transactionSignature
    request.pending = pending
    return await this.request(request, new TransactionResponse())
  }

  async postBlock(block: any) {
    const request = new PostBlockRequest()
    request.block = block
    return await this.request(request, new Response())
  }

  async postTransaction(transaction: any) {
    const request = new PostTransactionRequest()
    request.transaction = transaction
    return await this.request(request, new Response())
  }

  async postServers(servers: string[]) {
    const request = new PostServersRequest()
    request.servers = servers
    return await this.request(request, new Response())
  }

  async getDifficulty() {
    return await this.request(
      new GetDifficultyRequest(),
      new DifficultyReponse(),
    )
  }

  async getBalance(owner: string) {
    const request = new GetBalanceRequest()
    request.owner = owner
    return await this.request(request, new BalanceResponse())
  }
}
