import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton, styled } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext/CartContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const CartWidget = () => {
  
  const { cartCount } = useContext(cartContext);
  
  return (
    <IconButton 
    aria-label="cart" 
    size="large" >
      <Link 
      to={"/cart"} >
        <StyledBadge 
        badgeContent={cartCount} 
        color="secondary" >
          <ShoppingCartIcon 
          sx={{ 
            fontSize: 30, 
            color: '#f6b3dc' 
          }}
          />
        </StyledBadge>
      </Link>
    </IconButton>
  );
};

export default CartWidget;
