
import Login  from './pages/Login';
import {useSelector , useDispatch} from 'react-redux'
import AllRoutes from './routes';
import {getUserData} from './actions/userActions'
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch();
  const { authenticatedUser } = useSelector((state) => state.user);
  useEffect(()=>{
    dispatch(getUserData());
  },[dispatch])
  
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
