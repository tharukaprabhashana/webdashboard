import React from 'react'
import './LoginSignup.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'; // Import Firebase auth


function SignUp() {
    const navigator = useNavigate();
    const clickSignIn = ()=>{
        navigator("/SignIn");
    }

    const onSignUp = (e) => {
      e.preventDefault();
      // get user info
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      const conpassword = document.getElementById('confirm-signup-password').value;


      if(password == conpassword){
        // sign up the user
        auth.createUserWithEmailAndPassword(email, password, conpassword)
        .then(cred => {
          console.log('User signed up:', cred.user);  
          navigator("/");
        }).catch(err => {
            console.error("Error signing up:", err);
        });
      }else{
        alert("Password doesn't match the confirm password!");
      }

      
  }
    
  return (
    <div className='login-signup-container' id="modal-signup">
    <div className='container'>
        <div className='left'>
            <>
            <h1 style={{textAlign:'center',color:'rgba(25, 25, 113, 0.933)'}}>Sign up</h1>
            </>

            <form id="signup-form">
            <div className='input'>
            <>
            <img src='https://img.icons8.com/?size=100&id=77883&format=png&color=000000' style={{width:'20px'}} />
             
          <input type="email" id="signup-email" placeholder="Email" style={{width:'50%',height:'30px',border:'none',borderRadius:'4px ',boxShadow:' 0 1px 2px rgba(0, 0, 0, 0.56)'}}  /><br />
            </>
            <br />
            <>
            <img src='https://img.icons8.com/?size=100&id=59855&format=png&color=000000' style={{width:'20px'}}/>
            <input type='password' id="signup-password" placeholder="Password" style={{width:'50%',height:'30px',border:'none',borderRadius:'4px ',boxShadow:' 0 1px 2px rgba(0, 0, 0, 0.56)'}}/>
            </>
            <br /><br />
            <>
            <img src='https://img.icons8.com/?size=100&id=59855&format=png&color=000000' style={{width:'20px'}}/>
            <input type='password' id="confirm-signup-password" placeholder="Confirm Password" style={{width:'50%',height:'30px',border:'none',borderRadius:'4px ',boxShadow:' 0 1px 2px rgba(0, 0, 0, 0.56)'}}/>
            </>
            <br /><br />
            <>
            <button
            style={{
                width: '80px',
                height: '30px',
                backgroundColor: 'rgba(25, 25, 113, 0.933)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                cursor: 'pointer',
                margin: '10px auto',
              }} onClick={(e)=>onSignUp(e)}
            >Sign up</button>
            </> 
            </div>
            </form>
            

        </div>
        <div className='right'>
            <>
            <h1>Hello,Friend!</h1>
            </>
            <>
            <p>If you have an account Sign in</p>
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
                margin:'10px auto'
              }} onClick={()=>clickSignIn()}
            >Sign in</button>
        </div>
    </div>
    </div>
  )
}


export default SignUp
