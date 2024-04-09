
import './App.css';
import Login from './components/login/Login';
import Signin from './components/login/Signin';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Createacc from './components/Createacc';
import Userinfo from './components/login/Userinfo';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element ={<Login/>}> 

    </Route>
    <Route path='/signin' element ={<Signin/>}> 

    </Route>
    <Route path='/Register' element={<Createacc/>}>
    </Route>
    <Route path='/Userinfo' element={<Userinfo/>}>
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
