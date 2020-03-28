import React from 'react';
// import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
 
export default function GoogleAPI(){
const responseGoogle = (response) => {
  console.log(response);
}
// ReactDOM.render(
//     <GoogleLogin
//       clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//       render={renderProps => (
//         <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
//       )}
//       buttonText="Login"
//       onSuccess={responseGoogle}
//       onFailure={responseGoogle}
//       cookiePolicy={'single_host_origin'}
//     />,
//     document.getElementById('googleButton')
//   );
return(
<GoogleLogin
    clientId="219685980163-qk7mlm0ctvdake0oj5u9h66ofdi9m0tg.apps.googleusercontent.com"
    buttonText="Sign in"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}z
    onclick={responseGoogle}
  />
)
 }

