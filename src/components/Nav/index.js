import React,  { Component }  from "react";
import './style.css';



class Nav extends Component {



  componentDidMount() {

    
  }


render ()
{

return(
<div>
	<nav className="sticky navbar navbar-expand-lg navbar-dark bg-dark">
	  <a className="navbar-brand" href="#">Economy SF</a>
	  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
	    <span className="navbar-toggler-icon"></span>
	  </button>
	  <div className="collapse navbar-collapse" id="navbarNavDropdown">
	    <ul className="navbar-nav">
	      <li className="nav-item active">
	        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
	      </li>
	     
	      <li className="nav-item dropdown">
	        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          Services
	        </a>
	        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	          <a className="dropdown-item" href="#">Residential</a>
	          <a className="dropdown-item" href="#">Commercial</a>
	          <a className="dropdown-item" href="#">Sewer</a>
	          <a className="dropdown-item" href="#">Drain Cleaning</a>
	        </div>
	      </li>
	       <li className="nav-item">
	        <a className="nav-link" href="#">About Us</a>
	      </li>
	    </ul>
	  </div>
	</nav>
</div>

);
}

}

export default Nav;