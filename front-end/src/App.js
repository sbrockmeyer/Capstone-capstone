import './sass/style.scss';
import { Outlet, Link } from 'react-router-dom';
import logo from './images/Logo.png'


function App() {


  return (
    <>
    <div className='containermain'>
        <img src={logo} width='80' alt='logo'/>

      <nav className='topnav'>
        <Link className='links' to="/"> Home</Link> / 
        <Link className='links' to="/dictionary"> Dictionary</Link> / 
        <Link className='links' to='/allShops'> All Shops</Link> / 
        <Link className='links' to='/allUsers'> All Users</Link> / 
        <Link className='links' to='/createUser'> Create User</Link> / 
        <Link className='links' to='/createWord'> Create Word</Link> / 
        <Link className='links' to='createShop'> Create Shop</Link> / 
        <Link className='links' to='/login'> Login</Link> / 
      </nav>
    </div>
    <br/>
      <Outlet />
    </>
  );
}

export default App;
