import React from 'react';
import SideBarContent from "./SideBarContent"
import HeaderContent from './HeaderContent';

const LayoutAdmin = ({children}) => {
    return (
        <div className="container">
           <SideBarContent />

        <div style={{ display: "flex", flexDirection: "column", width: "100%"}}>
            <div style={{display: "flex", justifyContent: "flex-end", padding: "15px", boxShadow: "0px 0px 4px #D9DDE7"}}>
                AAAAAAAAAAAAAAA
            </div>
            <div style={{display: "flex",justifyContent: "stretch", height: "100%"}}>
            <div>{children}</div>
            </div>
            
            </div>
           
        </div>
    );
};

export default LayoutAdmin;