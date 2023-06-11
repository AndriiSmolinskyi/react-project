import './reset.css';
import './App.scss';
import { Home } from './components/Home/Home';
import { Like } from './components/Like/Like';
import { Notif } from './components/Notif/Notif';
import { Cart } from './components/Cart/Cart';
import { Header } from './components/Header/Header';
import { Account } from './components/Account/Account';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='body'>
      <Header className="header" />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/like" element={<Like />} />
        <Route path="/notif" element={<Notif />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;

