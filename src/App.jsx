import './reset.css'
import './App.scss';
import { Home } from './components/Home/Home';
import { Like } from './components/Like/Like';
import { Notif } from './components/Notif/Notif';
import { Cart } from './components/Cart/Cart';
import { Header } from './components/Header/Header';
import { Account } from './components/Account/Account';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (    
    <>  
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/like" element={<Like />} />
        <Route path="/notif" element={<Notif />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

