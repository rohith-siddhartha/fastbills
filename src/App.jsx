import { Home } from '@mui/icons-material'
import { Layout } from './components/Layout/Layout'
import { Register } from './components/Pages/Register'
import { Routes, Route } from 'react-router-dom'
import { ContactPage } from './components/Pages/ContactPage'
import { Pricing } from './components/Pages/Pricing'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="register" element={<Register/>} />
        <Route path="product" element={<Home/>} />
        <Route path="pricing" element={<Pricing/>} />
        <Route path="about" element={<Home/>} />
        <Route path="contact-us" element={<ContactPage/>} />
      </Route>
    </Routes>
  )
}

export default App
