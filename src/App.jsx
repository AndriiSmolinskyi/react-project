import './reset.css';
import './App.scss';
import { Home } from './components/Home/Home';
import { Like } from './components/Like/Like';
import { Notif } from './components/Notif/Notif';
import { Cart } from './components/Cart/Cart';
import { Header } from './components/Header/Header';
import { Account } from './components/Account/Account';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/LoginPage/LoginPage';
import { RegisterPage } from './components/RegisterPage/RegisterPage';
import { ShoesFull } from 'components/ShoesFull/ShoesFull';

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
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/shoesfull/:id" element={<ShoesFull/>}/>
      </Routes>
    </div>
  );
}

export default App;

