import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box, Button, MobileStepper, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ItemCarousel from '../ItemCarousel';
import './css/Carousel.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = ({ productList }) => {
 
  const bestSellers = productList.filter( item => item.bestsellers === true);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = bestSellers.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box 
    className='carouselContainer' 
    sx={{ 
      flexGrow: 1 
    }} >
      <Paper
      square
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 50,
        bgcolor: 'transparent',
      }} >
        <Typography 
        sx={{
          fontWeight: 'bold',
				  width: '100%',
          fontSize: '1.2rem',
          fontFamily: 'Ubuntu, Sans serif',
          color: '#fff',
          marginBottom: '6px',
        }} >
          Productos + vendidos
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents >
        {bestSellers.map((item, index) => (
          <div 
          key={item.id} 
          className='itemLista' >
            {Math.abs(activeStep - index) <= 2 ? (
            <ItemCarousel 
            id={item.id} 
            title={item.title} 
            category={item.category} 
            image={item.image} 
            price={item.price} 
            stock={item.stock} 
            initial={item.initial}
            />
          ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
      sx={{
        bgcolor: 'transparent'
      }}
      className='stepperStyle'
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          sx={{
            color:'#b7b7b7'
          }} >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button 
        size="small" 
        onClick={handleBack} 
        disabled={activeStep === 0} 
        sx={{
          color:'#b7b7b7'
        }} >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </Button>
      }
      />
    </Box>
  );
}

export default Carousel;