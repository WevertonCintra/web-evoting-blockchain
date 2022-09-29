export interface CryptoKeyPairProps {
  privateKey: CryptoKey
  publicKey: CryptoKey
}

export abstract class Transaction {
  signature: string = ''
  nonce: number = 0
  timestamp: bigint = 0n
  sender: string = ''
  index: number = 0

  constructor(nonce: number, timestamp: Date) {
    this.timestamp = BigInt(Math.floor(timestamp.getTime() / 1000))
    this.nonce = nonce
  }

  toBytes(): ArrayBuffer {
    const senderBytes = Uint8Array.from(atob(this.sender), (c) =>
      c.charCodeAt(0),
    )
    const content = this.getContent()

    const buffer = new Uint8Array(12 + senderBytes.length + content.length)
    const dv = new DataView(buffer)
    dv.setUint32(0, this.nonce, true)
    dv.setBigInt64(4, this.timestamp, true)

    buffer.set(senderBytes, 12)
    buffer.set(content, 12 + senderBytes.length)

    return buffer
  }

  abstract getContent(): Uint8Array

  toBase64(result: ArrayBuffer): string {
    let binary = ''
    const bytes = new Uint8Array(result)
    const len = bytes.byteLength
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return window.btoa(binary)
  }

  fromBase64(result: string): ArrayBuffer {
    return Uint8Array.from(atob(this.sender), (c) => c.charCodeAt(0))
  }

  async sing(sender: string, key: CryptoKeyPairProps) {
    const raw = await window.crypto.subtle.exportKey('raw', key.publicKey)
    this.sender = this.toBase64(raw)

    const data = this.toBytes()
    const signature = await window.crypto.subtle.sign(
      {
        name: 'ECDSA',
        hash: { name: 'SHA-512' },
      },
      key.privateKey,
      data,
    )

    this.signature = this.toBase64(signature)
  }

  async isSigned(): Promise<boolean> {
    const publicKeyRaw = this.fromBase64(this.sender)
    const signature = this.fromBase64(this.signature)

    const publicKey = await window.crypto.subtle.importKey(
      'raw',
      publicKeyRaw,
      {
        name: 'ECDSA',
        namedCurve: 'secp384r1',
      },
      false,
      ['verify'],
    )

    const data = this.toBytes()

    return await window.crypto.subtle.verify(
      {
        name: 'ECDSA',
        hash: { name: 'SHA-512' },
      },
      publicKey,
      signature,
      data,
    )
  }
}
