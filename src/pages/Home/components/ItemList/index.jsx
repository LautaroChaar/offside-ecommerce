import { Box } from '@mui/material';
import Item from '../Item';

export default function ItemList({ productList }) {

  return (
    <Box 
		sx={{
			display: 'flex',
    	flexDirection: 'row',
    	flexWrap: 'wrap',
    	justifyContent: 'center',
    	maxWidth: '750px',
    	gap: '26px',
	  }} >
			{
				productList.map((item) => (
					<Item 
					key={item.id} 
					id={item.id} 
					title={item.title} 
					category={item.category} 
					image={item.image} 
					price={item.price} 
					stock={item.stock} 
					initial={item.initial} 
					/>
				))
			}
    </Box>
  )
}