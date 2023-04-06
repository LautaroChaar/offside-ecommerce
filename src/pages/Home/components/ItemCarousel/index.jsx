import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './css/ItemCarousel.css';

const ItemCarousel = ({ id, title, category, image, price, stock }) => {

  return (
    <Box 
    component='article' 
    className='itemCarousel' 
    sx={{ 
      border: '4px solid #FFF', 
      boxShadow: 'rgb(0 0 0) 0px 3px 8px' 
    }} >
			<Card 
      sx={{ 
        height: '100%'
      }} >
				<CardContent 
        className= 'bgItemCarousel'
        sx={{
				backgroundColor: '#282828',
				display: 'flex',
				justifyContent: 'space-evenly'
				}} >
					<Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center' 
            }} >
						<img 
            className='imgItemCarousel' 
            src={image} 
            alt={image} 
            />
					</Box>
					<Box 
          sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start'
					}} >
						<Typography 
						variant='h2' 
						sx={{
						  color: '#FFF2E6',
    				  fontSize: '1rem',
              fontFamily: 'Ubuntu, Sans serif',
    				  fontWeight: 'bold',
    				  margin: '0',
    				  textTransform: 'uppercase' 
            }}
						>
              {title}
            </Typography>
						<Typography 
						variant='h3' 
						sx={{
						color: '#b7b7b7',
    				fontSize: {xs: '.9rem', lg: '1.2rem' },
    				fontWeight: 'bold',
            fontFamily: 'Ubuntu, Sans serif',
    				margin: '2px'
						}}
						className='categoryItemCarousel' >
              Categoria : {category}
            </Typography>
						<Typography 
            sx={{
						color: '#b7b7b7',
    				fontSize: {xs: '.9rem', lg: '1.2rem'},
    				fontWeight: 'bold',
            fontFamily: 'Ubuntu, Sans serif',
    				margin: '2px'
						}} 
						className='stockItemCarousel' >
              Stock : {stock} 
            </Typography>
						<Typography 
            sx={{
						color: '#b7b7b7',
    				fontSize: {xs: '.9rem', lg: '1.2rem' },
    				fontWeight: 'bold',
            fontFamily: 'Ubuntu, Sans serif',
    				margin: '2px'
						}} 
						className= 'priceItemCarousel' >
              Precio : 
              <Typography 
              variant='p' 
              sx={{ 
                fontSize: { xs: '1rem'},
                fontFamily: 'Ubuntu, Sans serif',
              }} 
              className='priceItemCarouselSpan' >
                ${price}
              </Typography>
            </Typography>
					</Box>
					<Button 
          variant="contained"  
          className='btnItemCarousel' 
          sx={{ 
            backgroundColor: "#2e2e2e", 
            marginTop: '14px', 
            boxShadow: 'none', 
            '&:hover': { 
              backgroundColor: 'transparent', 
              boxShadow: 'none'
            },
            '&:hover .itemCarouselLink': { 
              color: '#f6b3dc', 
              fontWeight: 'bold'
            }, 
          }} >
						<Link 
            className='itemCarouselLink' 
            to={`/product/${id}`} >
              VER DETALLE
            </Link>
					</Button>
				</CardContent>
			</Card>
		</Box>
  );
}

export default ItemCarousel;