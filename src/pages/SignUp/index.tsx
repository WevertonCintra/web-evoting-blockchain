import { generateKey } from '../../utils/ECDSA/generateKey'
import { exportKey } from '../../utils/ECDSA/exportKey'

import * as S from './styles'

export function SignUp() {
  async function generateFileKey() {
    const keyGenerate = await generateKey()
    const keyExport = await exportKey(keyGenerate)
    const json = JSON.stringify(keyExport)

    const element = document.createElement('a')
    const file = new Blob([json], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'key.txt'
    document.body.appendChild(element)
    element.click()
  }

  return (
    <S.Container>
      <button onClick={generateFileKey}>Gerar chave privada</button>
    </S.Container>
  )
}
