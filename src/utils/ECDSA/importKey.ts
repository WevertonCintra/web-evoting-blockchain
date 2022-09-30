async function importKey() {
  return window.crypto.subtle
    .importKey(
      'jwk', // can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
      {
        // this is an example jwk key, other key types are Uint8Array objects
        kty: 'EC',
        crv: 'P-256',
        x: 'zCQ5BPHPCLZYgdpo1n-x_90P2Ij52d53YVwTh3ZdiMo',
        y: 'pDfQTUx0-OiZc5ZuKMcA7v2Q7ZPKsQwzB58bft0JTko',
        ext: true,
      },
      {
        // these are the algorithm options
        name: 'ECDSA',
        namedCurve: 'P-256', // can be "P-256", "P-384", or "P-521"
      },
      false, // whether the key is extractable (i.e. can be used in exportKey)
      ['verify'], // "verify" for public key import, "sign" for private key imports
    )
    .then(function (publicKey) {
      // returns a publicKey (or privateKey if you are importing a private key)
      console.log(publicKey)
    })
    .catch(function (err) {
      console.error(err)
    })
}

export { importKey }
