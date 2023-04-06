import { ErrorMessage, useField } from 'formik';
import './css/FormInput.css';
 
const FormInput = ({ label, placeholder, ...props }) => {

  const [field] = useField(props);

  return (
    <div>
      <label 
      className="formLabel" >
        {label}
      </label>
      <input
      placeholder={placeholder}
      className="formInput"
      {...field} {...props}
      autoComplete='off'
      />
      <ErrorMessage name={field.name} render={msg => <div className="errorMsg">{msg}</div>}/>
    </div>
  );
}

export default FormInput;