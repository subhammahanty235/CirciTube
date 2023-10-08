import logo from './logo.svg';
import './App.css';
import Login  from './pages/Login';
import {useSelector} from 'react-redux'
import HomePage from './pages/HomePage';
import AllRoutes from './routes';
function App() {

  const { authenticatedUser } = useSelector((state) => state.user);


  return (

    <>
    {
      authenticatedUser ?
      <AllRoutes/>:
      <Login/>

    }
    </>

    
  );
}

export default App;
