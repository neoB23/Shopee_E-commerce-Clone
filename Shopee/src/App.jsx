import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import SubNav from './components/SubNav';
import Landing from './components/Landing';
import Footer from './components/Footer';
// import Login from './components/subcomponents/Login';

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
    <Nav/>
    <SubNav />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Landing /></MainLayout>} />
        {/* <Route path="/Login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
