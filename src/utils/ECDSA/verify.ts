function verify(publicKey: any, signature: any, data: any) {
  window.crypto.subtle
    .verify(
      {
        name: 'ECDSA',
        hash: { name: 'SHA-256' }, // can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
      },
      publicKey, // from generateKey or importKey above
      signature, // ArrayBuffer of the signature
      data, // ArrayBuffer of the data
    )
    .then(function (isvalid) {
      // returns a boolean on whether the signature is true or not
      console.log(isvalid)
    })
    .catch(function (err) {
      console.error(err)
    })
}

export { verify }
