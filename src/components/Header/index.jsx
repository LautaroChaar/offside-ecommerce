import { Typography } from '@mui/material';
import NavBar from '../NavBar';
import './css/Header.css';


const Header = () => {
  
  return (
    <header 
    className="appHeader">
      <NavBar/>
      <Typography 
      variant='h1' 
      sx={{
        color: '#b7b7b7',
        margin: '0',
        padding: '8px',
        backgroundColor: '#282828',
        fontSize: {
          xs: '1rem', 
          md: '1.4rem'
        },
        fontWeight: '400',
        fontFamily: 'Ubuntu, Sans serif',
        borderTop: '2px solid #b7b7b7',
        borderBottom: '2px solid #b7b7b7'
      }} >
        Estamos siempre un paso adelante
      </Typography>
    </header>
  )
}

export default Header;
