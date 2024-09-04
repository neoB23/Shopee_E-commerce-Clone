import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Navigation/Nav';
import SubNav from './components/SubNavigation/SubNav';
import Landing from './components/Landing';
import Footer from './components/Footer/Footer';
import Login from './components/Authentication/Login';
import Info from './components/Info';
import LoginNav from './components/Navigation/LoginNav';

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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Landing /><Info/></MainLayout>} />
        <Route path="/Login" element={<SubNavLayout><Login /></SubNavLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
