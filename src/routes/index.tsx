import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<SignUp />} />
      <Route path="/acesso" element={<SignIn />} />
    </Routes>
  )
}
