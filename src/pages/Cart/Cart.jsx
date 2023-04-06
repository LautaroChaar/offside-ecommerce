import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { cartContext } from "../../context/CartContext/CartContext";
import './css/Cart.css';

const Cart = () => {

  const { cart, removeProduct, clear, totalToPay } = useContext(cartContext);

  let totalCartProducts = cart.length === 0 
  ? 
  <Box 
  className='cartContainer' 
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px'
  }} >
    <Box 
    component='section' 
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      backgroundColor: '#282828',
      padding: '12px',
      borderRadius: '8px'
    }} 
    className='cartSection' >
      <Typography 
      variant='h2' 
      sx={{  
        fontSize: { 
          xs: '1rem', 
          sm:'1.2rem', 
          md: '1.4rem'
        },  
        fontWeight: 'bold', 
        margin: '10px' 
      }} >
        CARRITO
      </Typography>
      <Typography 
      variant='h3' 
      sx={{ 
        fontSize: { 
          xs: '1rem', 
          sm:'1.2rem', 
          md: '1.4rem'
        }, 
        fontWeight: 'bold', 
        margin: '10px' 
      }} >
        No hay productos agregados al carrito.
      </Typography>
      <Button 
      color='secondary' 
      className='cartSectionButton' 
      sx={{ 
        width: 'fit-content',
        '&:hover': { 
          backgroundColor: 'transparent'
        }
      }} >
        <Link 
        className='cartSectionLink' 
        to= "/" >
          Ir a comprar
        </Link>
      </Button>
    </Box>
  </Box> 
  : 
  <Box 
  className='cartContainer' 
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px'
  }} >
    <Box 
    component='section' 
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      backgroundColor: '#282828',
      padding: '12px',
      borderRadius: '8px'
    }} >
      <Typography 
      variant='h2' 
      sx={{ 
        fontSize: { 
          xs: '1rem', 
          sm:'1.2rem', 
          md: '1.4rem'
        }, 
        fontFamily: 'Ubuntu, Sans serif',
        fontWeight: '500', 
        margin: '10px' 
      }} >
        CARRITO
      </Typography>
      <table 
      className='table' >
        <thead 
        className='tableRowHead' >
          <tr>
            <th>
              <Typography 
              variant='h3' 
              sx={{ 
                color: '#f6b3dc',
                fontFamily: 'Ubuntu, Sans serif', 
                fontSize: { 
                  xs: '.8rem', 
                  md: '1.2rem' 
                }, 
                fontWeight: '400'
              }} >
                Cantidad
              </Typography>
            </th>
            <th/>
            <th 
            className='categoryProduct' >
              <Typography 
              variant='h3' 
              sx={{ 
                color: '#f6b3dc', 
                fontFamily: 'Ubuntu, Sans serif',
                fontSize: { 
                  xs: '.8rem', 
                  md: '1.2rem' 
                }, 
                fontWeight: '400'
              }} >
                Categoria
              </Typography>
            </th>
            <th>
              <Typography 
              variant='h3' 
              sx={{ 
                color: '#f6b3dc',
                fontFamily: 'Ubuntu, Sans serif', 
                fontSize: { 
                  xs: '.8rem', 
                  md: '1.2rem' 
                }, 
                fontWeight: '400'
              }} >
                Producto
              </Typography>
            </th>
            <th 
            className='unitPriceProduct' >
              <Typography 
              variant='h3' 
              sx={{ 
                color: '#f6b3dc', 
                fontFamily: 'Ubuntu, Sans serif',
                fontSize: { 
                  xs: '.8rem', 
                  md: '1.2rem' 
                }, 
                fontWeight: '400'
              }} >
                P/unitario
              </Typography>
            </th>
            <th>
              <Typography 
              variant='h3' 
              sx={{ 
                color: '#f6b3dc', 
                fontFamily: 'Ubuntu, Sans serif',
                fontSize: { 
                  xs: '.8rem', 
                  md: '1.2rem' 
                }, 
                fontWeight: '400'
              }} >
                P/total
              </Typography>
            </th>
            <th/>
          </tr>
        </thead>
        {cart.map(product => (
          <tbody 
          key={product.id} >
            <tr 
            className='tableRow' >
              <td>
                {product.quantity}
              </td>
              <td>
                <img 
                className='cartImgProducts' 
                src={product.image} 
                alt={product.image} 
                />
              </td>
              <td 
              className='categoryProduct' >
                {product.category}
              </td>
              <td>
                {product.title}
              </td>
              <td 
              className='unitPriceProduct' >
                ${product.price}
              </td>
              <td>
                ${product.price * product.quantity}
              </td>
              <td>
                <Button 
                color="error" 
                onClick={() => {
                  removeProduct(product)
                }}>
                  <DeleteForeverIcon 
                  sx={{ 
                    color: "#f6b3b3" 
                  }}
                  />
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </Box>
    <Box 
    sx={{ 
      minWidth: '200px', 
      width: { 
        md: '50%' 
      } 
    }} >
      <Typography 
      variant='h4' 
      sx={{ 
        fontSize: {
          xs: '1rem', 
          sm: '1.2rem', 
          md: '1.5rem' 
        }, 
        fontWeight: '400',
        fontFamily: 'Ubuntu, Sans serif',
        margin: '10px'
      }}>
        Total a pagar : ${totalToPay} 
      </Typography>
      <ButtonGroup>
        <Button 
        variant="text" 
        color="secondary" 
        className='cartSectionButton' >
          <Link 
          className='cartSectionLink' 
          to= "/checkout">
            Finalizar Compra
          </Link>
        </Button>
        <Button 
        variant="text" 
        color='error' 
        onClick={() => clear()} >
          <Typography 
          sx={{
            fontSize: {
              xs: '.8rem', 
              sm: '1rem', 
              md: '1.2rem'
            }, 
            color: '#f6b3b3', 
            fontWeight: 'bold',
            textTransform:'capitalize' 
          }} >
            Vaciar Carrito
          </Typography>
        </Button>
      </ButtonGroup>
    </Box>
  </Box>

  return (
    <Box>
      {totalCartProducts}
    </Box>
  );
}

export default Cart;