import {Link} from 'react-router-dom'

export default function Navigation(){
   return(
      <div className="navbar">
      <Link className="icon" to="/">Home</Link>
      <Link className="icon" to="/Login">Login</Link>
      <Link className="icon" to="/Products">Products</Link>
      <Link className="icon" to="/Cart">Cart</Link>
      </div>
      )
}



















