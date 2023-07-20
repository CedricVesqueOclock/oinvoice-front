import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';

import { Outlet } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
