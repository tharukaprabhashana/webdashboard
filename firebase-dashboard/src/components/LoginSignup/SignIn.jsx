import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'; // Import Firebase auth

function SignIn() {
  const [error, setError] = useState(''); // Initialize useState
  const navigator = useNavigate();

  const clickSignUp = () => {
    navigator("/SignUp");
  }

  const onSignIn = (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
      .then(cred => {
        console.log('User signed in:', cred.user);
        navigator("/");
      })
      .catch(err => {
        console.error("Error signing in:", err);
        if (err.code === 'auth/user-not-found') {
          setError("User not found. Please sign up first.");
        } else {
          setError("Error signing in. Please check your credentials.");
        }
      });
  }

  return (
    <div className='login-signup-container' id="modal-login">
      <div className='container'>
        <div className='left'>
          <>
            <h1 style={{textAlign: 'center', color: 'rgba(25, 25, 113, 0.933)'}}>Sign in</h1>
          </>

          <form id="login-form">
            <div className='input'>
              <>
                <img src='https://img.icons8.com/?size=100&id=77883&format=png&color=000000' style={{width: '20px'}} />
                <input type='text' id="login-email" placeholder="Email" style={{width: '50%', height: '30px', border: 'none', borderRadius: '4px', boxShadow: ' 0 1px 2px rgba(0, 0, 0, 0.56)'}} /><br />
              </>
              <br />
              <>
                <img src='https://img.icons8.com/?size=100&id=59855&format=png&color=000000' style={{width: '20px'}}/>
                <input type='password' id="login-password" placeholder="Password" style={{width: '50%', height: '30px', border: 'none', borderRadius: '4px', boxShadow: ' 0 1px 2px rgba(0, 0, 0, 0.56)'}}/>
              </>
              <br /><br />
              <>
                {error && <p style={{ color: 'red' ,margin: 20 }}>{error}</p>}
                <button
                  style={{
                    margin: 'auto',
                    width: '80px',
                    height: '30px',
                    backgroundColor: 'rgba(25, 25, 113, 0.933)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '16px',
                    cursor: 'pointer'
                  }} onClick={(e) => onSignIn(e)}
                >Sign in</button>
              </>
            </div>
          </form>
        </div>
        <div className='right'>
          <>
            <h1>Hello, Friend!</h1>
          </>
          <>
            <p>Enter your personal details and start <br /> journey with us</p>
          </>
          <br />
          <button
            style={{
              width: '80px',
              height: '30px',
              backgroundColor: 'white',
              color: 'rgba(25, 25, 113, 0.933)',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer',
              margin: "auto"
            }} onClick={() => clickSignUp()}
          >Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default SignIn;
