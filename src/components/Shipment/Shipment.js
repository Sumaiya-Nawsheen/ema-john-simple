import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css'

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form className = "ship-form" onSubmit ={handleSubmit(onSubmit)}>
      <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name"/>
      {errors.name && <span className="error">This name is required</span>}
      
      <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your email"/>
      {errors.email && <span className="error">This email is required</span>}
      
      <input name="address" ref={register({ required: true })} placeholder="Your Address" />
      {errors.address && <span className="error">This address is required</span>}
      
      <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
      {errors.phone && <span className="error">This phone number is required</span>}
      
      <input type="submit" />
    </form>
  );
};

export default Shipment;