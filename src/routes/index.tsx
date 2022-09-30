import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from'../pages/Login'
import Cadastro from '../pages/Cadastro'
import Evento from '../pages/Evento'
import RegisterVoting from '../pages/RegisterVoting'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/evento" element={<Evento />} />
      <Route path="/registerVoting" element={<RegisterVoting />} />
    </Routes>
  )
}
