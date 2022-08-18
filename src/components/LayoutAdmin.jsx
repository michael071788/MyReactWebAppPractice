import React from 'react';
import SideBarContent from "./SideBarContent"


const LayoutAdmin = ({children}) => {
    return (
        <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
           <SideBarContent />

            <div style={{ display: "flex", width: "100%", backgroundColor: "transparent"}}>
            AAAAAAAAAAAAAAA
            
            </div>
        </div>
    );
};

export default LayoutAdmin;