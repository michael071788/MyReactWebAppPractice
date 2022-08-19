import React from 'react';
import SideBarContent from "./SideBarContent"


const LayoutAdmin = ({children}) => {
    return (
        <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
           <SideBarContent />
            <div style={{display: "flex", flexDirection: "column", width: "100%",backgroundColor: "transparent"}}>
                
                
               <div style={{backgroundColor: "transparent",
                display: "flex",
                height: "69px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingRight: "25px",
                }}>User Bar</div> 
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