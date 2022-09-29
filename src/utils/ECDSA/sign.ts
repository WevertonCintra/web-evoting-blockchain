function sign(privateKey: any, data: any) {
  window.crypto.subtle
    .sign(
      {
        name: 'ECDSA',
        hash: { name: 'SHA-256' }, // can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
      },
      privateKey, // from generateKey or importKey above
      data, // ArrayBuffer of data you want to sign
    )
    .then(function (signature) {
      // returns an ArrayBuffer containing the signature
      console.log(new Uint8Array(signature))
    })
    .catch(function (err) {
      console.error(err)
    })
}

export { sign }
