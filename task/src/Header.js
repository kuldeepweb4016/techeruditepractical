import { Link, useNavigate } from "react-router-dom";
import { useContext }from 'react'
import { loginContext }from './datashareContext'
function Header() {

  const{customerlocalstorage,setCustomerlocalstorage,setAdminlocalstorage,setAdminstatus,setCustomerstatus,adminlocalstorage}= useContext(loginContext)

  const navigat= useNavigate('')
  
  function hadlelogout(){
    setCustomerlocalstorage(localStorage.removeItem('username'))
    setCustomerstatus(localStorage.removeItem('status'))
    navigat('/')
  }
  function hadleloadminlogout(){
    setAdminlocalstorage(localStorage.removeItem('admin'))
    setAdminstatus(localStorage.removeItem('status'))
    navigat('/admin/singin')
  }
    return ( 
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  
    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
    {customerlocalstorage ? 
    <>
    <Link  className="btn btn-primary px-5" to="/" >customer</Link>
  <button type="button" className="btn btn-danger"  onClick={hadlelogout} >logout</button>
  </>
  :
  <>
  <Link  className="btn btn-primary px-5" to="/" >customer</Link>
<Link  className="btn btn-primary px-5"  to="/admin/singin" >Admin</Link>
</>
  }
{adminlocalstorage ? 
<>
<Link  className="btn btn-primary px-5"  to="/admin/singin" >Admin</Link>
  <button type="button" className="btn btn-danger"  onClick={hadleloadminlogout} >logout</button>

</>
:
<>
<Link  className="btn btn-primary px-5" to="/" >customer</Link>
<Link  className="btn btn-primary px-5"  to="/admin/singin" >Admin</Link>
</>
}



    </div>
  </div>
</nav>
        </>
     );
}

export default Header;