import {Link} from "react-router-dom"
function Homepage() {
    return ( 
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 text-center mt-5 ">
                <Link to="/customer/singin "><button className="btn btn-primary  w-75  px-5 ">Customer Login</button></Link>
                </div>
                <div className="col-md-6 text-center mt-5">
                <Link to="/admin/singin"><button className="btn btn-primary  w-75  px-5">Admin Login</button></Link>
                </div>
            </div>
        </div>
       
        </>
     );
}

export default Homepage;