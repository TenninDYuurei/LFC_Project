import { Component } from 'react';
import navLinks from './links';
import QuickLink from './quickLinks';

//Quicklink comp is in quicklink.js
//navlinks is in links.js, where all the links for header are defined


class NavBar extends Component{
    constructor() {
        super()
        this.state = {
            navLinks
        }
    }
    
    render() {


        const navbar = this.state.navLinks.map((navArray) => {
            return <QuickLink
                key={navArray.id}
                url={navArray.url}
                target={navArray.target}
                class="headerLink"
                />
        });
 
       return  <div  className="navbar">
                {navbar}
               </div>
            
    }
}

export default NavBar