import { Box } from '@mui/material';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../../../../components/Loading';
import Carousel from '../Carousel';
import ItemList from '../ItemList';
import './css/ItemListContainer.css';

const ItemListContainer = () => {

	const [productList, setProductList] = useState([]);
	const { section } = useParams();
	const [loading, setLoading] = useState (true);
	
	useEffect (() => {
		const db = getFirestore();
		let collectionRef;

		!section || section === 'home' 
		?
		collectionRef = collection(db, 'products')
		:
		collectionRef = query(collection(db, 'products'), where ('category', '==', section));

		getDocs(collectionRef).then((res) => {
			const collection = res.docs.map( (item) => ({...item.data(), id: item.id }) );
			setProductList(collection);
			setLoading(false);
		})	
	}, [section]);

  return (
		<>
			{ loading 
				? 
				<Loading/>
				:  
				<Box 
				sx={{
					padding: '20px',
    			display: 'flex',
    			justifyContent: 'center',
    			alignItems: 'center',
    			gap: '30px'
				}} 
				className='listContainer' >
					<Box 
					component='section' >
						<Carousel 
						productList={productList} 
						/>
					</Box>
					<Box 
					component='section' >
						<ItemList 
						productList={productList} 
						/>
					</Box>
				</Box>
			}
		</>
  );
}

export default ItemListContainer;
