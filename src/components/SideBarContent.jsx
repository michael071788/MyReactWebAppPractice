import "./../styles/Custom.scss"
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import {
  FaHome,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
} from "react-icons/fa";

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



const SideBarContent = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const _menuItemText = {
        color: "#21232A",

    }

    return (
        <div className="sidebar">
            <ProSidebar image={false} rtl={rtl} collapsed={isOpen} breakPoint="md">
                <SidebarHeader>
                <div style={{
                        display: "flex",
                        padding: "25px 20px 25px 35px",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        }}
                        onClick={toggle}>
                            <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                            letterSpacing: "1px", cursor: "pointer",
                            fontWeight: 750,
                            fontFamily: "sans-serif",
                            ..._menuItemText }}>MY WEB APP</div>
                    </div>
                </SidebarHeader>
                <SidebarContent>

                {
                   menuItem.map((item, index)=>(
                    <Menu iconShape="circle">
                        <MenuItem className="myLink" icon={item.icon}><div style={_menuItemText}>{item.name} <Link to={item.path} /></div></MenuItem>
                    </Menu>
                   ))
               }


                 {/* <Menu iconShape="circle">
                    <SubMenu suffix={<span className="red">3</span>}title={"With Suffix"}icon={<FaRegLaughWink  color={_iconColor}  />}>
                        <MenuItem>Sub Menu 1</MenuItem>
                        <MenuItem>Sub Menu 2</MenuItem>
                        <MenuItem>Sub Menu 3</MenuItem>
                    </SubMenu>
                    <SubMenu prefix={<span className="badge red">3</span>} title={"With Prefix"} icon={<FaHeart  color={_iconColor}  />} >
                        <MenuItem>Sub Menu 1</MenuItem>
                        <MenuItem>Sub Menu 2</MenuItem>
                        <MenuItem>Sub Menu 3</MenuItem>
                    </SubMenu>
                    <SubMenu title={"Multi Level"} icon={<FaList  color={_iconColor}  />}>
                        <MenuItem>Sub Menu 1</MenuItem>
                        <MenuItem>Sub Menu2 </MenuItem>
                        <SubMenu title={"Sub Menu 3"}>
                            <MenuItem>Sub Menu 3.1 </MenuItem>
                            <MenuItem>Sub Menu 3.2 </MenuItem>
                            <SubMenu title={"Sub Menu 3.3"}>
                                <MenuItem>Sub Menu 3.3.1</MenuItem>
                                <MenuItem>Sub Menu 3.3.2</MenuItem>
                                <MenuItem>Sub Menu 3.3.3</MenuItem>
                            </SubMenu>
                        </SubMenu>
                    </SubMenu>
                </Menu>  */}
                </SidebarContent>

                <SidebarFooter style={{ textAlign: "center" }}>
                {/* <div
                className="sidebar-btn-wrapper"
                style={{
                padding: "20px 24px",
                }}
                >
                <a
                href="https://github.com/azouaoui-med/react-pro-sidebar"
                target="_blank"
                className="sidebar-btn"
                rel="noopener noreferrer"
                >
                <FaGithub />
                <span
                style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                }}
                >
                View Source
                </span>
                </a>
                </div> */}
                </SidebarFooter>
            </ProSidebar>
        </div>
        

    );
};

export default SideBarContent;