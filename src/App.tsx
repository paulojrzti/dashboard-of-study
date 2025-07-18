import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login, Registration, Home, Leads, Profile } from './pages/index.ts'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/perfil" element={<Profile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
