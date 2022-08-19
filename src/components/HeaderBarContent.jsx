import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));


const HeaderBarContent = () => {
    return(  <div style={{backgroundColor: "transparent",
    display: "flex",
    height: "69px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: "25px",
    }}>User Bar aaa</div> );

};

export default HeaderBarContent;