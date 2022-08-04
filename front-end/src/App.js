import './sass/style.scss';
import { Outlet, Link } from 'react-router-dom';
import logo from './images/Logo.png'


function App() {


  return (
    <>
      <nav>
        <img src={logo} width='115' alt='logo'/>
        <Link to="/">Home</Link> / 
        <Link to="/dictionary">Dictionary</Link> / 
        <Link to='/allShops'>All Shops</Link> / 
        <Link to='/login'>Login</Link> / 
        <Link to='/allUsers'>All Users</Link> / 
      </nav>
      <Outlet />
    </>
  );
}

export default App;
