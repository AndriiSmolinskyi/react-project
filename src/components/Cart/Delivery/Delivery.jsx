import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
     <div>
       <h2>Delivery</h2>
       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
         {({ isSubmitting }) => (
           <Form>
             <div>
               <label htmlFor="firstName">First Name:</label>
               <Field type="text" name="firstName" />
               <ErrorMessage name="firstName" component="div" className="error-message" />
             </div>
             <div>
               <label htmlFor="lastName">Last Name:</label>
               <Field type="text" name="lastName" />
               <ErrorMessage name="lastName" component="div" className="error-message" />
             </div>
             <div>
               <label htmlFor="phone">Phone:</label>
               <Field type="text" name="phone" />
               <ErrorMessage name="phone" component="div" className="error-message" />
             </div>
             <div>
               <label htmlFor="country">Country:</label>
               <Field type="text" name="country" />
               <ErrorMessage name="country" component="div" className="error-message" />
             </div>
             <div>
               <label htmlFor="city">City:</label>
               <Field type="text" name="city" />
               <ErrorMessage name="city" component="div" className="error-message" />
             </div>
             <div>
               <label htmlFor="street">Street:</label>
               <Field type="text" name="street" />
               <ErrorMessage name="street" component="div" className="error-message" />
             </div>
             <button type="submit" disabled={isSubmitting}>
               Submit
             </button>
           </Form>
         )}
       </Formik>
     </div>
   );
 };

// export const Delivery = ({ handleSubmit }) => {
//   const initialValues = {
//     firstName: '',
//     lastName: '',
//     phone: '',
//     country: '',
//     city: '',
//     street: ''
//   };

//   const validationSchema = Yup.object().shape({
//     firstName: Yup.string().required('First Name is required'),
//     lastName: Yup.string().required('Last Name is required'),
//     phone: Yup.string().required('Phone is required'),
//     country: Yup.string().required('Country is required'),
//     city: Yup.string().required('City is required'),
//     street: Yup.string().required('Street is required')
//   });

//   return (
//     <div>
//       <h2>Delivery</h2>
//       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
//         {({ isSubmitting }) => (
//           <Form>
//             <div>
//               <label htmlFor="firstName">First Name:</label>
//               <Field type="text" name="firstName" />
//               <ErrorMessage name="firstName" component="div" className="error-message" />
//             </div>
//             <div>
//               <label htmlFor="lastName">Last Name:</label>
//               <Field type="text" name="lastName" />
//               <ErrorMessage name="lastName" component="div" className="error-message" />
//             </div>
//             <div>
//               <label htmlFor="phone">Phone:</label>
//               <Field type="text" name="phone" />
//               <ErrorMessage name="phone" component="div" className="error-message" />
//             </div>
//             <div>
//               <label htmlFor="country">Country:</label>
//               <Field type="text" name="country" />
//               <ErrorMessage name="country" component="div" className="error-message" />
//             </div>
//             <div>
//               <label htmlFor="city">City:</label>
//               <Field type="text" name="city" />
//               <ErrorMessage name="city" component="div" className="error-message" />
//             </div>
//             <div>
//               <label htmlFor="street">Street:</label>
//               <Field type="text" name="street" />
//               <ErrorMessage name="street" component="div" className="error-message" />
//             </div>
//             <button type="submit" disabled={isSubmitting}>
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };