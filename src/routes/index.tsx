import { Routes, Route } from 'react-router-dom'


import Home from '../pages/Home'
import Login from'../pages/Login'
import Cadastro from '../pages/Cadastro'
import Evento from '../pages/Evento'
import RegisterVoting from '../pages/RegisterVoting'
import ProgressVoting from '../pages/ProgressVoting'
import Vote from '../pages/Vote'
import RegisterVotingOpt from '../pages/RegisterVotingOpt'


import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import VotesView from '../pages/VotesView'
import ListVotes from '../pages/ListVotes'
import VerifyVotes from '../pages/VerifyVotes'
import RegisterVotingEnd from '../pages/RegisterVotingEnd'
import MyWallet from '../pages/MyWallet'
import FinishedVoting from '../pages/FinishedVoting'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/evento" element={<Evento />} />
      <Route path="/registerVoting" element={<RegisterVoting />} />
      <Route path='/registerVotingOptions' element={<RegisterVotingOpt />} />
      <Route path="/progressVoting" element={<ProgressVoting />} />
      <Route path="/verifyVotes" element={<VerifyVotes />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/Listvotes" element={<ListVotes />} />
      <Route path="/votesView" element={<VotesView />} />
      <Route path="/registerVotingEnd" element={<RegisterVotingEnd />} />
      <Route path="/minhaCarteira" element={<MyWallet />} />
      <Route path="/votacoesFinalizadas" element={<FinishedVoting />} />

      <Route path="/registro" element={<SignUp />} />
      <Route path="/acesso" element={<SignIn />} />

    </Routes>
  )
}
