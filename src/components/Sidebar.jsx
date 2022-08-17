import React, { useState } from 'react';
import {
    FaHome,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const iconBasedProps = {
        color: "#0655FF",
        width: "20px",
        height: "20px",
    }

    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome {...iconBasedProps}/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt {...iconBasedProps}/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar {...iconBasedProps}/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt {...iconBasedProps}/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag {...iconBasedProps}/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList {...iconBasedProps}/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "350px" : "70px"}} className="sidebar">
               <div className="top_section">
                    <div style={{display: isOpen ? "block" : "none"}} className="app_name">My App</div>
                    <div className="bars">
                       <FaBars onClick={toggle} color="#0655FF"/>
                   </div> 
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div> 
                          
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;