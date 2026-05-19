import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import Equipo from "./pages/Equipo/Equipo"
import Crud from "./pages/crud/Crud"
import CreatePage from "./pages/crud/CreatePage"
import QueryPage from "./pages/crud/QueryPage"
import UpdatePage from "./pages/crud/UpdatePage"
import DeletePage from "./pages/crud/DeletePage"
import MainLayout from "./layout/MainLayout"
import LoginPage from "./pages/auth/LogingPage."
import RegisterPage from "./pages/auth/RegisterPage"

function App() {
  
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Equipo" element={<Equipo />} />
          <Route path="/crud" element={<Crud/>} />
          <Route path="/crud/create" element={<CreatePage/>} />
          <Route path="/crud/query" element={<QueryPage/>} />
          <Route path="/crud/update" element={<UpdatePage/>} />
          <Route path="/crud/delete" element={<DeletePage/>} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

        </Routes>
      </MainLayout>
    </Router>
    
  )
}

export default App