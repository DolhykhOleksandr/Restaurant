// import {
//   Box,
//   Button,
//   Card,
//   Divider,
//   Grid2,
//   Modal,
//   TextField,
// } from "@mui/material";
// import React from "react";
// import { CartItem } from "./CartItem";
// import { CardAddress } from "./CardAddress";
// import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
// import { Field, Form, Formik } from "formik";
// import * as Yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { cartTotal } from "./totalPay";
// import { createOrder } from "../State/Order/Action";

// export const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   outline: "none",
//   boxShadow: 24,
//   p: 4,
// };

// const initialValues = {
//   fullName: "",
//   streetAddress: "",
//   postalCode: "",
//   city: "",
//   state: "",
// };

// // const validationSchema = Yup.object().shape({
// //   fullName: Yup.string().required("Full Name is required"),
// //   streetAddress: Yup.string().required("Street address is required"),
// //   postalCode: Yup.string()
// //     .matches(/^\d{5}$/, "Pincode must be exactly 5 digits")
// //     .required("Pincode is required"),
// //   city: Yup.string().required("City is required"),
// //   state: Yup.string().required("State is required"),
// // });

// const Cart = () => {
//   const createOrderUsingSelectedAddress = () => {};
//   const handleOpenAddressModal = () => setOpen(true);
//   const [open, setOpen] = React.useState(false);
//   const { cart } = useSelector((store) => store);
//   const dispatch = useDispatch();
//   const handleClose = () => setOpen(false);

//   const handleSubmit = (values) => {
//     const data = {
//       jwt: localStorage.getItem("jwt"),
//       order: {
//         deliveryAddress: {
//           fullName: values.fullName,
//           streetAddress: values.streetAddress,
//           city: values.city,
//           state: values.state,
//           postalCode: values.postalCode,
//           country: "ukraine",
//         },
//       },
//     };
//     dispatch(createOrder(data));
//     console.log("form value", values);
//   };

//   return (
//     <>
//       <main className="lg:flex justify-between">
//         <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
//           {cart.cartItems.map((item) => (
//             <CartItem item={item} key={item.id} />
//           ))}
//           <Divider />
//           <div className="billDetails px-5 text-black font-semi-bold">
//             <p className="font-bold py-5 text-black">Bill Details</p>
//             <div className="space-y-3">
//               <div className="flex justify-between text-black">
//                 <p>Item Total</p>
//                 <p>${cartTotal(cart.cartItems)}</p>
//               </div>
//               <div className="flex justify-between text-black">
//                 <p>Delivery payment </p>
//                 <p>$20</p>
//               </div>
//               <div className="flex justify-between text-black">
//                 <p>Restaurant Charges</p>
//                 <p>$10</p>
//               </div>
//               <Divider />
//             </div>
//             <div className="flex justify-between text-black font-bold ">
//               <p>Total Price</p>
//               <p>${cartTotal(cart.cartItems) + 30}</p>
//             </div>
//           </div>
//         </section>
//         <Divider orientation="vertical" flexItem />
//         <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
//           <div>
//             <h1 className="text-center font-semibold text-2xl py-10">
//               Choose Delivery Address
//             </h1>
//             <div className="flex gap-5 flex-wrap justify-center">
//               {[1].map((item) => (
//                 <CardAddress
//                   handleSelectAddress={createOrderUsingSelectedAddress}
//                   item={item}
//                   showButton={true}
//                   key={item}
//                 />
//               ))}
//               <Card className="flex gap-5 w-64 p-5">
//                 <AddLocationAltIcon />
//                 <div className="space-y-3 text-black">
//                   <h1 className="font-semibold text-lg text-gray-50">
//                     Add New Address
//                   </h1>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     onClick={handleOpenAddressModal}
//                   >
//                     Add
//                   </Button>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Formik
//             initialValues={initialValues}
//             // validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ errors, touched }) => (
//               <Form>
//                 <Grid2 container spacing={2}>
//                   <Grid2 item xs={12}>
//                     <Field
//                       as={TextField}
//                       name="fullName"
//                       label="Full Name"
//                       fullWidth
//                       variant="outlined"
//                       error={!!errors.fullName && touched.fullName}
//                       helperText={touched.fullName && errors.fullName}
//                     />
//                   </Grid2>

//                   <Grid2 item xs={12}>
//                     <Field
//                       as={TextField}
//                       name="streetAddress"
//                       label="Street Address"
//                       fullWidth
//                       variant="outlined"
//                       error={!!errors.streetAddress && touched.streetAddress}
//                       helperText={touched.streetAddress && errors.streetAddress}
//                     />
//                   </Grid2>

//                   <Grid2 item xs={12}>
//                     <Field
//                       as={TextField}
//                       name="postalCode"
//                       label="Postal Code"
//                       fullWidth
//                       variant="outlined"
//                       error={!!errors.postalCode && touched.postalCode}
//                       helperText={touched.postalCode && errors.postalCode}
//                     />
//                   </Grid2>

//                   <Grid2 item xs={12}>
//                     <Field
//                       as={TextField}
//                       name="city"
//                       label="City"
//                       fullWidth
//                       variant="outlined"
//                       error={!!errors.city && touched.city}
//                       helperText={touched.city && errors.city}
//                     />
//                   </Grid2>

//                   <Grid2 item xs={12}>
//                     <Field
//                       as={TextField}
//                       name="state"
//                       label="State"
//                       fullWidth
//                       variant="outlined"
//                       error={!!errors.state && touched.state}
//                       helperText={touched.state && errors.state}
//                     />
//                   </Grid2>

//                   <Grid2 item xs={12}>
//                     <Button fullWidth variant="contained" type="submit" color="primary">
//                       Submit
//                     </Button>
//                   </Grid2>
//                 </Grid2>
//               </Form>
//             )}
//           </Formik>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default Cart;
import {
  Box,
  Button,
  Card,
  Divider,
  Grid2,
  Modal,
  TextField,
} from "@mui/material";
import React from "react";
import { CartItem } from "./CartItem";
import { CardAddress } from "./CardAddress";
import HomeIcon from "@mui/icons-material/Home";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { AddLocation } from "@mui/icons-material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { cartTotal } from "./totalPay";
import { createOrder } from "../State/Order/Action";



export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};
const initialValues = {
  streetAddress: "",
  city: "",
  state: "",
  postalCode: ""
};

const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Street address is required"),
  postalCode: Yup.string()
    .matches(/^\d{5}$/, "Postalcode must be exactly 5 digits")
    .required("Postalcode is required"),

  city: Yup.string().required("City is required"),
  state: Yup.string().required("State  is required"),
});

const Cart = () => {
  const createOrderUsingSelectedAddress = () => { };
  const handleOpenAddressModal = () => setOpen(true);
  const [open, setOpen] = React.useState(false);
  const { cart, auth } = useSelector(store => store)
  const dispatch = useDispatch()
  const handleClose = () => setOpen(false);
  const handleSubmit = (values) => {
    const data = {
      jwt: localStorage.getItem("jwt"),
      order: {
        restaurantId: cart.cartItems[0].food?.restaurant.id,
        deliveryAddress: {
          fullName: auth.user?.fullName,
          streetAddress: values.streetAddress,
          city: values.city,
          state: values.state,
          postalCode: values.postalCode,
          country: "ukraine"
        }
      }
    }
    dispatch(createOrder(data))
    console.log("form value", values)
  };
  return (
    <>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {cart.cartItems.map((item) => (
            <CartItem item={item} />
          ))}
          <Divider />
          <div className="billDetails px-5 text-black font-semi-bold">
            <p className="font-bold py-5 text-black ">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-black">
                <p>Item Total</p>
                <p>${cartTotal(cart.cartItems)}</p>
              </div>
              <div className="flex justify-between text-black">
                <p>Delivery payment </p>
                <p>$20</p>
              </div>
              <div className="flex justify-between text-black">
                <p>Restaurant Charges</p>
                <p>$10</p>
              </div>
              <Divider />
            </div>
            <div className="flex justify-between text-black font-bold ">
              <p>Total Price</p>
              <p>${cartTotal(cart.cartItems) + 30}</p>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">
              Choose Delivery Address
            </h1>
            <div className="flex gap-5 flex-wrap justify-center">
              {[1].map((item) => (
                <CardAddress
                  handleSelectAddress={createOrderUsingSelectedAddress}
                  item={item}
                  showButton={true}
                />
              ))}
              <Card className="flex gap-5 w-64 p-5">
                <AddLocationAltIcon />
                <div className="space-y-3 text-black">
                  <h1 className="font-semibold text-lg text-gray-50">
                    Add New Address
                  </h1>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleOpenAddressModal}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Grid2 container spacing={2}>
                  <Grid2 size={12}>
                    <Field
                      as={TextField}
                      name="streetAddress"
                      label="Street Address"
                      fullWidth
                      variant="outlined"
                      error={!!errors.fullName && touched.fullName}
                      helperText={touched.fullName && errors.fullName}
                    // error={!!ErrorMessage("streetAddress")}
                    // helperText={
                    //   <ErrorMessage name="streetAddress">
                    //     {(msg) => typeof msg === 'string' ? <span className="text-red-600">{msg}</span> : null}
                    //   </ErrorMessage>
                    // }
                    />
                    <Grid2 size={12}>
                      <Field
                        as={TextField}
                        name="postalCode"
                        label="Postal Code"
                        fullWidth
                        variant="outlined"
                        error={!!errors.postalCode && touched.postalCode}
                        helperText={touched.postalCode && errors.postalCode}
                      />
                      <Grid2 size={12}>
                        <Field
                          as={TextField}
                          name="city"
                          label="City"
                          fullWidth
                          variant="outlined"
                          error={!!errors.city && touched.city}
                          helperText={touched.city && errors.city}
                        />
                      </Grid2>
                      <Grid2 size={12}>
                        <Field
                          as={TextField}
                          name="state"
                          label="State"
                          fullWidth
                          variant="outlined"
                          error={!!errors.state && touched.state}
                          helperText={touched.state && errors.state}
                        />
                      </Grid2>
                    </Grid2>
                  </Grid2>
                  <Grid2 size={12}>
                    <Button fullWidth variant="contained" type="submit" color="primary">
                      Submit
                    </Button>
                  </Grid2>
                </Grid2>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;