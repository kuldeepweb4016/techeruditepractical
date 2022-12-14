import { BrowserRouter as Router,Route ,Routes } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Singup from './Singup';
import Adminsingin from './Adminsingin';
import Adminsingup from './Adminsingup';
import { loginContext } from './datashareContext'
import { useState } from 'react';
import Adminhome from './Adminhome';
import Homepage from './Homepage';
function App() {
  const[customerlocalstorage,setCustomerlocalstorage]= useState(localStorage.getItem('username'))
  const[customerstatus,setCustomerstatus]= useState(localStorage.getItem('status'))


  const[adminlocalstorage,setAdminlocalstorage]= useState(localStorage.getItem('admin'))
  const[adminstatus,setAdminstatus]= useState(localStorage.getItem('status'))

  return ( 
    <Router>
    <>
       <loginContext.Provider value={{customerlocalstorage,setCustomerlocalstorage,customerstatus,
    setCustomerstatus,adminlocalstorage,setAdminlocalstorage,adminstatus,setAdminstatus
    
    }} >
    <Routes>
    
<Route path='/customer/singin' element={<Login/>}></Route>
<Route path='/' element={<Homepage/>}></Route>
<Route path='/customer/singup' element={ <Singup/> } ></Route>
<Route path='/admin/singin' element={<Adminsingin/>} ></Route>
<Route path='/admin/singup' element={<Adminsingup/>} ></Route>
<Route path='/adminhome' element={<Adminhome/>} ></Route>
<Route path='/home' element={<Home/>} ></Route>

    </Routes>
  </loginContext.Provider>
    </>
    </Router>
   );
}

export default App;