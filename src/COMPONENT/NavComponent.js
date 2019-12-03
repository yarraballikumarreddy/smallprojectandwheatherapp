import React from 'react'
import { Link,NavLink } from 'react-router-dom';

function NavComponent() {

    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link " href=''><NavLink  to='/Add' class="nav-link navbar-dark">Add</NavLink></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href='' ><NavLink to='/Listofstudent' class="nav-link navbar-dark">ListOfData</NavLink></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href='' ><NavLink to='/Signup' class="nav-link navbar-dark">SIGNUP</NavLink></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href='' ><NavLink to='/Login' class="nav-link navbar-dark">LOGIN</NavLink></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href='' > <NavLink to='/Logout' class="nav-link navbar-dark">LOGOUT</NavLink> </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href='' > <NavLink to='/Wether' class="nav-link navbar-dark">WETHER</NavLink> </a>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default NavComponent
