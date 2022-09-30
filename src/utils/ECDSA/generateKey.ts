async function generateKey() {
  return window.crypto.subtle
    .generateKey(
      {
        name: 'ECDSA',
        namedCurve: 'P-256', // can be "P-256", "P-384", or "P-521"
      },
      true, // whether the key is extractable (i.e. can be used in exportKey)
      ['sign', 'verify'], // can be any combination of "sign" and "verify"
    )
    .then(function (key) {
      return key.privateKey
    })
    .catch(function (err) {
      console.error(err)
    })
}

export { generateKey }
