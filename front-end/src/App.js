import './sass/style.scss';
import { Outlet, Link } from 'react-router-dom';
import logo from './images/Logo.png'
import shoppingcart from './images/shopcart.png'

function App() {


  return (
    <>
    <div className='containermain'>
      <nav className='topnav'>
        <img src={logo} width='80' alt='logo' id='logo'/>
        <Link className='links' to="/"> Home</Link> / 
        <Link className='links' to="/dictionary"> Dictionary</Link> / 
        <Link className='links' to='/allShops'> All Shops</Link> / 
        <Link className='links' to='/allUsers'> All Users</Link> / 
        <Link className='links' to='/createUser'> Create User</Link> / 
        <Link className='links' to='/createWord'> Create Word</Link> / 
        <Link className='links' to='createShop'> Create Shop</Link> / 
        <Link className='links' to='/login'> Login</Link> / 
        <img src={shoppingcart} width='25' alt='shopping cart' id='shoppingcart'/>
      </nav>
    </div>
    <br/>
      <Outlet />
    </>
  );
}

export default App;
