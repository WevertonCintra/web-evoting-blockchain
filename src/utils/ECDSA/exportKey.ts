function exportKey(publicKey: any) {
  window.crypto.subtle
    .exportKey(
      'jwk', // can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
      publicKey, // can be a publicKey or privateKey, as long as extractable was true
    )
    .then(function (keydata) {
      // returns the exported key data
      console.log(keydata)
    })
    .catch(function (err) {
      console.error(err)
    })
}

export { exportKey }
