import { Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { logoOffsideSvg } from '../../assets/logo';
import './css/Loading.css';

const Loading = () => {
  return (
    <Box 
    className='loadingContainer'
    sx={{
      backgroundColor: '#1a1c1c',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 20px',
      gap: '24px',
    }} >
      <img 
      className='loadingLogo' 
      src={logoOffsideSvg} 
      alt='logo' 
      />
	    <Typography 
      sx={{
        color: '#b7b7b7',
        fontSize: {
          xs: '1rem', 
          sm: '1.4rem'
        },
        fontWeight: 'bold'
      }} >
        Por favor, espere un momento...
      </Typography>
      <Box 
      className='spinner' >
        <CircularProgress 
        sx={{ 
          color: '#78546a'
        }} />
      </Box>
    </Box>
  )
};

export default Loading;