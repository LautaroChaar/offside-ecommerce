import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../../../context/CartContext/CartContext";
 
const ItemCount = ({ stock, initial, onAdd, productDetail }) => {

  const [count, setCount] = useState(initial);
  const { addItem, getQuantity, increaseCartCount } = useContext(cartContext);
  const prevAddedQuantity = getQuantity(productDetail.id);

  const buyButton = count === 0 
  ? 
  <Button 
  variant="text" 
  sx={{ 
    visibility: "hidden"
  }}>
    <Link 
    className="buyBtn" 
    to={"/cart"} >
      Comprar
    </Link>  
  </Button>
  :
  <Button 
  variant="contained" 
  sx={{ 
    backgroundColor: "#2e2e2e",
    boxShadow: 'none', 
    fontFamily: 'Ubuntu, Sans serif',
    width: '100%',
    '& .buyBtnLink': {
      textDecoration: 'none',
      color: '#b7b7b7',
    }, 
    '&:hover': { 
      backgroundColor: 'transparent', 
      boxShadow: 'none'
    },
    '&:hover .buyBtnLink': { 
      color: '#f6b3dc', 
      fontWeight: 'bold' 
    },
  }} 
  onClick={() => {
    const totalQuantity = prevAddedQuantity + count;
      if (totalQuantity <= stock && count !== 0) {
        initial += count;
        onAdd(initial);
        increaseCartCount(initial);
        addItem(productDetail, count);
        setCount(0);
      }
    }
  } >
    <Link 
    className="buyBtnLink" 
    to={"/cart"} >
      Comprar
    </Link>
  </Button>;

  return (
    <Box>
      <ButtonGroup 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column' 
      }} >
        <Box 
        sx={{ 
          display: 'flex'
        }} >
          <Button
          variant="text"
          aria-label="reduce"
          sx={{
            '&:hover .removeIcon': {
              color: '#f6b3b3'
            }
          }}
          onClick={() => {
            setCount(Math.max(count - 1, 0));
          }} >
            <RemoveIcon 
            className="removeIcon"
            fontSize="small" 
            sx={{ 
              color: "#b7b7b7" 
            }} 
            />
          </Button>
          <Typography 
          sx={{ 
            margin: '12px', 
            color: '#b7b7b7', 
            fontFamily: 'Ubuntu, Sans serif',
            fontWeight: 'bold' 
          }} >
            {count}
          </Typography>
          <Button
          variant="text"
          aria-label="increase"
          sx={{
            '&:hover .addIcon': {
              color: '#b3f6bb'
            }
          }}
          onClick={() => {
            if (prevAddedQuantity + count < stock) {
              setCount(count + 1);
            }
          }} >
            <AddIcon 
            className="addIcon"
            fontSize="small" 
            sx={{ 
              color: "#b7b7b7" 
            }}
            />
          </Button>
          <Button
          sx={{
            '&:hover .addCartIcon': {
              color: '#f6b3dc'
            }
          }}
          onClick={() => {
            const totalQuantity = prevAddedQuantity + count;
            if (totalQuantity <= stock && count !== 0) {
              initial += count;
              onAdd(initial);
              increaseCartCount(initial);
              addItem(productDetail, count);
              setCount(0);
            }
          }}
          variant="text" >
            <AddShoppingCartIcon
            className="addCartIcon"
            fontSize="small"
            sx={{ 
              color: "#b7b7b7" 
            }}
            />
          </Button>
        </Box>
        {buyButton}
      </ButtonGroup>
    </Box>
  );
}

export default ItemCount;