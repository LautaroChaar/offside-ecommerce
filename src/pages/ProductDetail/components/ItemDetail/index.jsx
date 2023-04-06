import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import ItemCount from '../ItemCount';
import './css/ItemDetail.css';

const ItemDetail = ({ productDetail }) => {

	const onAdd = (initial) => {
		Swal.fire({
			icon:'success',
			title: 'Listo',
			text: `Agregaste ${initial} producto/s al carrito de compra.`,
			background: '#111111',
			color: '#b7b7b7',
			confirmButtonColor: '#4e4e4e',
			confirmButtonText: 'Cerrar'
		})
	};

  return (
	  <Box 
    component='article' 
    sx={{ 
      padding: '24px' 
    }} >
	  	<Card>
	  		<CardContent 
	  		sx={{
	  			display: 'flex',
	  			flexDirection: 'column',
	  			justifyContent: 'space-evenly',
	  			alignItems: 'center',
	  			backgroundColor: '#282828',
	  			border: '4px solid #FFF',
	  			boxShadow: 'rgb(0 0 0) 0px 3px 8px',
	  			maxWidth: '715px'
	  		}} >
	  			<Box 
	  			sx={{ 
	  				display: 'flex',
      			flexDirection:{ 
              xs: 'column', 
              sm: 'row' 
            },
	  				justifyContent: { 
              sm: 'space-evenly' 
            },
	  				alignItems: { 
              sm: 'center' 
            },
      			height: '100%',
      			width: '100%'
	  			}} >
	  				<Box>
	  					<img 
              className='itemDetaiImg' 
              src={productDetail.image} 
              alt={productDetail.image}
              />
	  				</Box>
	  				<Box>
	  					<Typography 
              variant='h2' 
              sx={{ 
                color: '#FFF2E6', 
                fontWeight: 'bold', 
                fontSize: '1.2rem', 
                margin: '4px',
                fontFamily: 'Ubuntu, Sans serif', 
              }} >
                {productDetail.title}
              </Typography>
	  					<Typography 
              variant='h3' 
              sx={{ 
                color: '#b7b7b7', 
                fontWeight: 'bold', 
                fontSize: '1.2rem', 
                margin: '4px',
                fontFamily: 'Ubuntu, Sans serif', 
              }} >
                {productDetail.category}
              </Typography>
	  					<Typography 
              variant='h4' 
              sx={{ 
                color: '#b7b7b7', 
                fontWeight: 'bold', 
                fontSize: '1.2rem', 
                margin: '4px',
                fontFamily: 'Ubuntu, Sans serif', 
              }} >
                Stock : {productDetail.stock}
              </Typography>
	  					<Typography 
              variant='h5' 
              sx={{ 
                color: '#b7b7b7', 
                fontWeight: 'bold', 
                fontSize: '1.4rem',
                fontFamily: 'Ubuntu, Sans serif', 
                margin: '4px' 
              }} >
                ${productDetail.price}
              </Typography>
	  					<CardActions 
              sx={{ 
                justifyContent: 'center', 
                backgroundColor: '#282828' 
                }} >
	  						<ItemCount 
                stock= {productDetail.stock} 
                initial= {productDetail.initial} 
                onAdd={onAdd} 
                productDetail={productDetail} >
                </ItemCount>
	  					</CardActions>
	  				</Box>
	  			</Box>
	  			<Box>
	  				<Typography 
            variant='h6' 
            sx={{ 
              color: '#FFF2E6', 
              fontSize: '1.2rem', 
              margin: '10px',
              fontFamily: 'Ubuntu, Sans serif', 
            }} >
              Descripcion
            </Typography>
	  				<Typography 
            sx={{ 
              color: '#b7b7b7', 
              fontSize: '1rem',
              fontFamily: 'Ubuntu, Sans serif', 
            }} >
              {productDetail.description}
            </Typography>
	  			</Box>
	  		</CardContent>
	  	</Card>
	  </Box>
  );
}

export default ItemDetail;