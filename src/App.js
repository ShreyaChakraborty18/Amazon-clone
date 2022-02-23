import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Footer from "./Footer";
import Confirm from "./Confirm";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import firebase from 'firebase/compat/app';

// import React from "react";
// import "./App.css";

// import Home from "./Home";
const promise = loadStripe('pk_test_51KVrYoSDtij3xFbwg8bKqM39XOfFo13zBZJowoR3IXTxGnpNIvcClDOvtGyRcAAqfXy0aVod1DsIoHEqoLo9hmpO00hvFPpmXp')

function App() {
const [{}, dispatch]= useStateValue();

useEffect(()=> {
  //will only run once when the app component loads....

  auth.onAuthStateChanged(authUser => {
    console.log('THE USER IS >>>> ', authUser);
    if(authUser){
      //the user just logged in or the user was logged in
      dispatch({
        type: 'SET_USER',
        user: authUser
      })

    }else{
      //the user is logged out
      dispatch({
        type: 'SET_USER',
        user: null,
      })
    }
  })
}, [])

  return (
    //BEM 
    <Router>
      <div className="App">

        <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/orders" element={[ <Header/>, <Orders />]}></Route>
        <Route path="/" element={[<Header />, <Home />, <Footer/>]}></Route>

          <Route path="/checkout" element={[<Header/>, <Checkout />]}></Route>
          {/* <Route path="/payment" element={[<Header/>, <Payment />]}></Route> */}
          <Route path="/payment" element={[<Header />, <Elements stripe={promise}><Payment /></Elements>]} />
          <Route path="/confirm" element={ <Confirm/>}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

// function App() {
//   return (
    
//       <Router>
//         <div className="app">
//         <Switch>

//           <Route path="/">
//             <Header />
//             <Home />
//           </Route>

//           <Route path="/Login">
//             <Login />
//           </Route>

//           <Route path='/checkout'>
//             <Header/>
//             <Checkout/>
//           </Route>

//         </Switch>
//         </div>
//       </Router>
//   );
// }
// export default App;