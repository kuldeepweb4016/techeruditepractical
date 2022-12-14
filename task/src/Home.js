import { useContext } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { loginContext }from './datashareContext'
function Home() {
    const{customerlocalstorage,singinlocalstorage,setCustomerlocalstorage,setCustomerstatus}= useContext(loginContext)
    const navigat = useNavigate()
    function hadlelogout(){
        setCustomerlocalstorage(localStorage.removeItem('username'))
        setCustomerstatus(localStorage.removeItem('status'))
        navigat('/customer/singin')
      }

    return ( 
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  
    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">



    {customerlocalstorage ? 
    <>
    <Link  className="btn btn-primary px-5" to="/" >Home page</Link>
  <button type="button" className="btn btn-danger"  onClick={hadlelogout} >logout</button>
  </>
  :
  <>
  <Link  className="btn btn-primary px-5"  to="/" >Home page</Link>
</>
  }


    </div>
  </div>
</nav>

        <h1 className='text-center py-5' >Customer page</h1>
        {customerlocalstorage || singinlocalstorage ?
    <h3 className="text-center" >hello  {customerlocalstorage}{singinlocalstorage} </h3>
    :
    <h3 className="text-center">you have not rights this page ! please <Link to="/" >Sing in</Link>  </h3>
    }
        
        </>
     );
}

export default Home;