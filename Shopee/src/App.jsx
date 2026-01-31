import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Navigation/Nav';
import SubNav from './components/SubNavigation/SubNav';
import Landing from './components/Landing';
import Footer from './components/Footer/Footer';
import Login from './components/Authentication/Login';
import Info from './components/Info';
import LoginNav from './components/Navigation/LoginNav';
import Category from './components/Section/category';
import Discovery from './components/Section/discovery';
import Cart from './components/Section/cart';
import Checkout from './components/Section/Checkout';
import OrderConfirmation from './components/Section/OrderConfirmation';
import Signup from './components/Authentication/Signup';

const MainLayout = ({ children }) => (
  <>
    <Nav />
    <SubNav />
    {children}
    <Footer />
  </>
);

const SubNavLayout = ({ children }) => (
  <>
    <LoginNav/>
    {children}
    <Footer />
  </>
);
const AddtoCart = ({children}) => (
  <>
  <Nav/>
  {children}
  <Footer/>
  </>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Landing /><Category/><Discovery/><Info/></MainLayout>} />
        <Route path="/Login" element={<SubNavLayout><Login /></SubNavLayout>} />
        <Route path="/Signup" element={<SubNavLayout><Signup /></SubNavLayout>} />
        <Route path="/Cart" element={<AddtoCart><Cart/></AddtoCart>}/>
        <Route path="/Checkout" element={<AddtoCart><Checkout/></AddtoCart>}/>
        <Route path="/OrderConfirmation" element={<AddtoCart><OrderConfirmation/></AddtoCart>}/>
      </Routes>
    </Router>
  );
}

export default App;