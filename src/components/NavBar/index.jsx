import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logoOffsideSvg } from '../../assets/logo';
import { CartWidget } from '../CartWidget';
import './css/NavBar.css';

const pages = ['home', 'camisetas', 'pelotas', 'botines'];

const NavBar = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
    position="static" 
    sx={{ 
      backgroundColor:'#282828'
    }} >
      <Container 
      maxWidth="xl" >
        <Toolbar 
        disableGutters >
          <Box 
          className='buttonLogoContainer' >
            <Button>
              <Link 
              to={'/home'} >
                <img 
                className='logo' 
                src={logoOffsideSvg} 
                alt="logo-offside" 
                />
              </Link>
            </Button>
          </Box>
          <Typography 
          variant="h5"
          noWrap
          sx={{
            mr: 2,
            display: { 
              xs: 'none', 
              md: 'flex' 
            },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            textDecoration: 'none',
          }} >
            <Link 
            className='brand' 
            to= {"/home"} >
              ff-side
            </Link>
          </Typography>
          <Box 
          sx={{ 
            flexGrow: 1, 
            display: { 
              xs: 'flex', 
              md: 'none' 
            } 
          }}>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit" >
              <MenuIcon 
              sx={{ 
                color: '#f6b3dc' 
                }} 
              />
            </IconButton>
            <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { 
                xs: 'block', 
                md: 'none' 
              },
              '& .MuiPaper-root': {
                height: '100vh',
                width: '40vw',
                backgroundColor: '#282828',
                boxShadow: 'none',
                left: '0px !important',
                top: '62px !important'
              },
              '& .MuiList-root': {
                height: '100%',
                padding: '0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly'
              },
              '& .MuiMenuItem-root': {
                fontSize: { 
                  xs: '1rem', 
                  sm: '1.4rem'
                },
                fontWeight: '400',
                textTransform: 'uppercase'
              }
            }} >
            {pages.map((page) => (
              <MenuItem 
              key={page} 
              onClick={handleCloseNavMenu} >
                <Link 
                className='categoryMenu' 
                to={`/${page}`} >
                  {page}
                </Link>
              </MenuItem>
            ))}
            </Menu>
          </Box>
          <Box 
          className='buttonLogo2Container' >
            <Button>
              <Link 
              to={'/home'} >
                <img 
                className='phoneLogo' 
                src={logoOffsideSvg} 
                alt="logo-offside" 
                />
              </Link>
            </Button>
          </Box>
          <Typography
          variant="h5"
          noWrap
          sx={{
            mr: 2,
            display: { 
              xs: 'flex', 
              md: 'none' 
            },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            textDecoration: 'none',
          }} >
            <Link 
            className='brand' 
            to= {"/home"} >
              ff-side
            </Link>
          </Typography>
          <Box 
          sx={{ 
            flexGrow: 1, 
            display: { 
              xs: 'none', 
              md: 'flex', 
              justifyContent: 'space-evenly' 
            } 
          }}>
            {pages.map((page) => (
              <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ 
                my: 2, 
                color: 'transparent', 
                display: 'block', 
                fontSize: '18px', 
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'transparent'
                },
                '&:hover .categoryName': {
                  color: '#f6b3dc',
                  backgroundColor: 'transparent'
                }
              }} >
                <Link 
                className='categoryName' 
                to={`/${page}`} >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
          <Box 
          sx={{ 
            flexGrow: 0 
          }}>
            <CartWidget/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;


