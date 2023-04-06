import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import './css/ItemDetailContainer.css';


const ItemDetailContainer = () => {

  const [productDetail, setProductDetail] = useState([]);
	const [loading, setLoading] = useState (true);
	const {id} = useParams();
		
	useEffect(() => {
		const db = getFirestore();
		const collectionDetailRef = doc(db, 'products', id);
		getDoc(collectionDetailRef).then((res) => {
			if (res.exists()) {
				setProductDetail({ id: res.id, ...res.data() });
				setLoading(false);
			} 
		})
	}, [id]);

	return (
		<div 
		className='itemDetailContainer' >
			{ 
			loading 
			? 
			<p>...</p> 
			: 
			<ItemDetail 
			productDetail={productDetail} 
			/> 
			}
		</div> 
	);
}

export default ItemDetailContainer;