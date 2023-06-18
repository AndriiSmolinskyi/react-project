import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Delivery.scss'

export const Delivery = ({ handleSubmit }) => {
   const initialValues = {
     firstName: '',
     lastName: '',
     phone: '',
     country: '',
     city: '',
     street: ''
   };
 
   const validationSchema = Yup.object().shape({
     firstName: Yup.string().required('First Name is required'),
     lastName: Yup.string().required('Last Name is required'),
     phone: Yup.string().required('Phone is required'),
     country: Yup.string().required('Country is required'),
     city: Yup.string().required('City is required'),
     street: Yup.string().required('Street is required')
   });
 
   return (
     <div className='delivery'>      
       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} className="delivery__formik">
         {({ isSubmitting }) => (
           <Form className='delivery__form'>
            <h2 className='delivery__title'>Delivery</h2>
             <div className='delivery__form__item'>
               <label htmlFor="firstName" className='item__text'>First Name:</label>
               <Field type="text" name="firstName" className="item__field"/>
               <ErrorMessage name="firstName" component="div" className="error-message"/>
             </div>
             <div className='delivery__form__item'>
               <label htmlFor="lastName" className='item__text'>Last Name:</label>
               <Field type="text" name="lastName" className="item__field"/>
               <ErrorMessage name="lastName" component="div" className="error-message" />
             </div>
             <div className='delivery__form__item'>
               <label htmlFor="phone" className='item__text'>Phone:</label>
               <Field type="text" name="phone" className="item__field"/>
               <ErrorMessage name="phone" component="div" className="error-message" />
             </div>
             <div className='delivery__form__item'>
               <label htmlFor="country" className='item__text'>Country:</label>
               <Field type="text" name="country" className="item__field"/>
               <ErrorMessage name="country" component="div" className="error-message" />
             </div>
             <div className='delivery__form__item'>
               <label htmlFor="city" className='item__text'>City:</label>
               <Field type="text" name="city" className="item__field"/>
               <ErrorMessage name="city" component="div" className="error-message" />
             </div>
             <div className='delivery__form__item'>
               <label htmlFor="street" className='item__text'>Street:</label>
               <Field type="text" name="street" className="item__field"/>
               <ErrorMessage name="street" component="div" className="error-message" />
             </div>
             <button type="submit" disabled={isSubmitting} className='item__btn__form'>
               Submit
             </button>
           </Form>
         )}
       </Formik>
     </div>
   );
};

