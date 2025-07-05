import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PricingCards from './components/Home'
import WorkshopSelector from './components/Products'
import GitexRegistrationForm from './components/Form1'
import PromoCode from './components/PromoCode'
import GitexTicket from './components/GitexTicket'
import SuccessPage from './components/Success'
import GitexRegistrationForm1 from './components/Form1'
import GitexRegistrationForm4 from './components/Form4'
import GitexRegistrationForm2 from './components/Form2'
import GitexRegistrationForm3 from './components/Form3'
import ProductsSelector from './components/Products2'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PricingCards />} path='/' />
        <Route element={<WorkshopSelector />} path='/products' />
                <Route element={<WorkshopSelector />} path='/products' />
        <Route element={<ProductsSelector />} path='/products2' />

        <Route element={<GitexRegistrationForm1 />} path='/form1' />
        <Route element={<GitexRegistrationForm1 />} path='/form1' />
        <Route element={<GitexRegistrationForm2 />} path='/form2' />
        <Route element={<GitexRegistrationForm3 />} path='/form3' />
        <Route element={<GitexRegistrationForm4 />} path='/form4' />

        <Route element={<PromoCode />} path='/promo' />
        <Route element={<GitexTicket />} path='/ticket' />
        <Route element={<SuccessPage />} path='/success' />

      </Routes>
    </Router>
  )
}

export default App
