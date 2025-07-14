import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
import Landing from "./pages/landing.jsx"
import { Route ,Routes ,BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
function App()
{
    const [users,setusers] = useState([
        {
            user:"john",
            pass:"123"
        }
    ])
     return(
     <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login users={users} setusers={setusers} />}></Route>
            <Route path='/signup' element={<Signup users={users} setusers={setusers} />}></Route>
            <Route path='/landing' element={<Landing/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>)
}

export default App;
