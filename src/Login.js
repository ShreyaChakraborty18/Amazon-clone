import React, { useState } from 'react'
import './Login.css'
import { Link , useNavigate } from 'react-router-dom';
import { auth } from "./firebase";



function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //firebase login stuff
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            navigate('/');
        })
        .catch(error=> alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if(auth){
                navigate('/');
            }
            //it successfully creates a new user with email and password
            // console.log(auth);
        })
        .catch(error => alert(error.message))
    }


  return (
    <div className='login'>
        <Link to='/'>
        <img 
            className="login_logo"
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Anazon_logo.svg.png' 
            />
         </Link>

         <div className='login_container'>
             <h1>Sign-in</h1>

             <form>
                 <h5>E-mail</h5>
                 <input type='text' value={email} onChange=
                 {e => setEmail(e.target.value)} />

                 <h5>Password</h5>
                 <input type='password' value={password} onChange=
                 {e => setPassword(e.target.value)} />
                
                <button type='submit' onClick={signIn}
                 className='login_signInButton'>Sign in</button>
             </form>

             <p>
                By signing-in you agree to the Amazon Fake Clone Conditions of 
                use and sale.Please see our privacy notice,our cookies notice 
                and our interest-based ads notice.
             </p>

    
             <p className="login_redirect">New Here? </p>
             <button onClick={register}
             className='login_registerButton'>Create your Amazon account</button>
         </div>
    </div>
  )
}

export default Login