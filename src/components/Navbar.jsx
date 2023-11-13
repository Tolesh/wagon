import React, { useEffect, useState } from "react"
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography, 
    styled,
    ListItemButton,
    ListItemText,
    Avatar
} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// rotas
import { Link } from 'react-router-dom';
import logo from '../assets/WagoniumEnd.gif'
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "../NavbarAndMenu/Menu";
import { Navigation } from "../NavbarAndMenu/Nav";
import ScrollspyNav from "react-scrollspy-nav";
import './Navbar.css'

// personalizacao


const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
});
const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));


//rotas
const menuItems = [
    { id: 1, title: 'Home', link: '/' },
  ];


const Navbar = () => {

  
    return (
        <AppBar 
        component="nav" 
        position="sticky"
        sx={{ 
            backgroundColor: '#221F2E', 
        }}
        elevation={0}
        >
            <StyledToolbar>
            <ScrollspyNav
                    // scrollTargetIds={["section_1", "section_2", "section_3"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                    
                >
      
        
          <a href={'/'} className="navigation-link">
          <Typography
                variant="h6"
                component="h2"
            
                >
                    <Avatar
                    
                        src={logo} 
                        sx={{ width: '30%', height: '30%' }}
                    />
                </Typography>
                </a>  
                </ScrollspyNav>
                
                
                
              {/* <Box sx={{display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem /> 
                </Box>
                <ListMenu>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text}>
                                <ListItemButton component={Link} to={item.to}
                                sx={{
                                    color: '#fff',
                                    "&:hover": {
                                        backgroundColor: 'transparent',
                                        color: '#F8F8F8',
                                    }
                                }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu> */}
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
