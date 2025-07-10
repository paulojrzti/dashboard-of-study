import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<>login</>} />
          <Route path="/cadastro" element={<>cadastro</>} />
          <Route path="/home" element={<>home</>} />
          <Route path="/leads" element={<>leads</>} />
          <Route path="/perfil" element={<>perfil</>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
