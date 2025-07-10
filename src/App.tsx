import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login, Registration } from './pages/index.ts'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/home" element={<>home</>} />
          <Route path="/leads" element={<>leads</>} />
          <Route path="/perfil" element={<>perfil</>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
