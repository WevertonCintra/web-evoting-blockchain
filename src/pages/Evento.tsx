import {useState} from 'react'

function Evento()
{
    function CadastrarUsuario(e){
        e.preventDefault()
        console.log(nome + ' Cadastrado Com Sucesso!')
    }

    const [nome, setNome] = useState()

    return (
    <div>
        <h1>Cadastrar Usuário</h1>
        <form onSubmit={CadastrarUsuario}>
            <label>Nome do Usuário:</label>
            <input id='nome' name='nome' type='text' 
            onChange={(e) => setNome(e.target.value)}/>
            <button type="submit">Cadastrar</button>
        </form>
    </div>
    )
}

export default Evento