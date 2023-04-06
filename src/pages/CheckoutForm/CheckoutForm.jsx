import { Box, Button, Typography } from '@mui/material';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Form, Formik } from 'formik';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { object, string } from 'yup';
import { cartContext } from "../../context/CartContext/CartContext";
import { FormInput } from "./components";
import './css/CheckoutForm.css';

const CheckoutForm = () => {

  const { cart, totalToPay, clear } = useContext(cartContext);

  const navigate = useNavigate();

  function handleClickOrder(values) {
    if (cart.length < 1) {
      Swal.fire({
        icon:'error',
        title: 'Algo ha ocurrido!',
        text: `El carro de compras se encuentra vacio`,
        background: '#111111',
        color: '#b7b7b7',
        confirmButtonColor: '#4e4e4e',
        confirmButtonText: 'Cerrar'
      });
    } else {
      const { nombre, apellido, telefono, email } = values;
      const order = {
        buyer: { nombre, apellido , telefono, email },
        cart,
        price: totalToPay,
        date: new Date().toLocaleString()
      };
      const db = getFirestore();
      const ordersRef = collection(db, "orders");
      addDoc(ordersRef, order);
      Swal.fire({
        icon:'success',
        title: 'Listo',
        text: `Su pedido ha sido realizado con exito!`,
        background: '#111111',
        color: '#b7b7b7',
        confirmButtonColor: '#4e4e4e',
        confirmButtonText: 'Cerrar'
      });
      clear();
      navigate('/home');
    }
  }

  const validateSchema = object({
    nombre: string()
    .max(15, 'Puede contener máximo 15 caracteres')
    .required('*Nombre requerido'),
    apellido: string()
    .max(20, 'Puede contener máximo 20 caracteres')
    .required('*Apellido requerido'),
    telefono: string()
    .matches(/^\d{8,12}$/, 'Debe tener entre 8 y 12 números')
    .required('*Teléfono requerido'),
    email: string()
    .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email inválido')
    .required('*Email requerido')
  });
  

  return (
    <Box 
    className="formContainer" 
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '20px'
    }}>
      <Typography 
      variant="h2" 
      sx={{ 
        fontSize: {
          xs: '1rem', 
          sm: '1.2rem', 
          md: '1.4rem'
          }, 
        margin: '10px', 
        fontWeight: '500', 
        color: '#b7b7b7' 
      }} >
        Complete el formulario para realizar su pedido
      </Typography>
      <Formik
      initialValues={{
        nombre:'',
        apellido:'',
        telefono:'',
        email:'',
      }}
      validationSchema={validateSchema}
      onSubmit={ (values) => handleClickOrder(values) }
      >{ formik => (
        <Form 
        className="orderForm" >
          <FormInput 
          label='Nombre' 
          name='nombre'
          placeholder="Nombre" 
          type='text' 
          />
          <FormInput 
          label='Apellido' 
          name='apellido' 
          placeholder="Apellido"
          type='text' 
          />
          <FormInput 
          label='Teléfono' 
          name='telefono' 
          placeholder="xxxxxxxxxx"
          type='text' 
          />
          <FormInput 
          label='Email' 
          name='email'
          placeholder="Example@example.com" 
          type='email' 
          />
          <Button 
          sx={{
            border: 'none',
            background: 'none',
            marginTop: '20px',
            color: '#b7b7b7',
            textTransform: 'capitalize',
            fontSize: {
              sx: '1.2rem',
              sm: '1.4rem'
            },
            '&:hover': { 
              backgroundColor: 'transparent',
              color: '#b3f6bb',
            },
          }} 
          type="submit" >
            Solicitar Pedido
          </Button>
        </Form>
      ) }
      </Formik>
    </Box>
  );
}

export default CheckoutForm;
