import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import Equipo from "./pages/Equipo/Equipo"
import Crud from "./pages/Crud/Crud"
import CreatePage from "./pages/Crud/CreatePage"
import QueryPage from "./pages/Crud/QueryPage"
import UpdatePage from "./pages/Crud/UpdatePage"
import DeletePage from "./pages/Crud/DeletePage"
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