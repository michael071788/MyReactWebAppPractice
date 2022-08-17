import React from 'react';
import SideBarContent from "./SideBarContent"

const LayoutAdmin = ({children}) => {
    return (
        <div className="container">
           <SideBarContent />

           <main>{children}</main>
        </div>
    );
};

export default LayoutAdmin;