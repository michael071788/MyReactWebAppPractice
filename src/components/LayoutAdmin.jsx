import React from 'react';
import SideBarContent from "./SideBarContent"
import HeaderBarContent from './HeaderBarContent';


const LayoutAdmin = ({children}) => {
    return (
        <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
           <SideBarContent />
            <div style={{display: "flex", flexDirection: "column", width: "100%",backgroundColor: "transparent"}}>
             <HeaderBarContent />


               <div style={{backgroundColor: "transparent"}}>
               {children}
               </div> 
            
                {/* <div style={{ display: "flex", width: "100%", backgroundColor: "red"}}>
                    <div></div>
                </div> */}
            </div>
          
        </div>
    );
};

export default LayoutAdmin;