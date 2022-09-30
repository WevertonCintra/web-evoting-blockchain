import { useNavigate } from 'react-router-dom'

import { generateKey } from '../../utils/ECDSA/generateKey'
import { importKey } from '../../utils/ECDSA/importKey'

import * as S from './styles'

export function SignIn() {
  const navigate = useNavigate()

  async function showFile(event: any) {
    event.preventDefault()
    const reader = new FileReader()
    reader.onload = async (event) => {
      const text = event.target?.result
      if (!text) return
    }
    reader.readAsText(event.target.files[0])
  }

  function redirect() {
    navigate('/registro')
  }

  return (
    <S.Container>
      <div>
        <label htmlFor="fileUpload" style={{ cursor: 'pointer' }}>
          Carregue o arquivo com a chave privada
        </label>
        <input
          type="file"
          id="fileUpload"
          style={{ display: 'none' }}
          onChange={(e) => showFile(e)}
        />
      </div>

      <button type="button" onClick={() => {}}>
        Entrar
      </button>
    </S.Container>
  )
}
