import { useContext } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { loginContext }from './datashareContext'
function Adminhome() {
    const{adminlocalstorage,setAdminlocalstorage,setAdminstatus}= useContext(loginContext)
    const navigat = useNavigate()
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



{adminlocalstorage ? 
<>
<Link  className="btn btn-primary px-5"  to="/" >Home page</Link>
  <button type="button" className="btn btn-danger"  onClick={hadleloadminlogout} >logout</button>

</>
:
<>
<Link  className="btn btn-primary px-5"  to="/" >Home page</Link>
</>
}



    </div>
  </div>
</nav>

        <h1 className="text-center py-5" >Admin page</h1>
        {adminlocalstorage ?
    <h3 className="text-center" >hello  {adminlocalstorage}</h3>
    :
    <h3 className="text-center" >you have not rights this page ! please <Link to="/admin/singin" >Sing in</Link>  </h3>
    }
        
        </>
     );
}

export default Adminhome;