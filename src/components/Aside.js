import React, { useEffect, useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
  FaBars,
} from "react-icons/fa";

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    console.log("isOpen:", isOpen);
  }, [isOpen]);

  return (
    <ProSidebar image={false} rtl={rtl} collapsed={isOpen} breakPoint="md">
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          onClick={toggle}
        >
          SIDE BAR TITLE
          <FaBars onClick={toggle} color="#0655FF" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">new</span>}
          >
            Dashboard
          </MenuItem>
          <MenuItem icon={<FaGem />}> components</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={"With Suffix"}
            icon={<FaRegLaughWink />}
          >
            <MenuItem>Sub Menu 1</MenuItem>
            <MenuItem>Sub Menu 2</MenuItem>
            <MenuItem>Sub Menu 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={"With Prefix"}
            icon={<FaHeart />}
          >
            <MenuItem>Sub Menu 1</MenuItem>
            <MenuItem>Sub Menu 2</MenuItem>
            <MenuItem>Sub Menu 3</MenuItem>
          </SubMenu>
          <SubMenu title={"Multi Level"} icon={<FaList />}>
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
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
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
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
