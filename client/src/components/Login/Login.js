import React from 'react'
import GoogleAPI from '../utils/GoogleAPI'


export default function Login(){
    return(
<div className="container-sm border mt-4 p-4">
<form>
    <h1 className="mx-auto text-center mb-6">Log In</h1>
  <div className="form-group row mt-4">
    <label for="exampleInputEmail1" className='col-2 text-right'>Email address:</label>
    <input type="email" className="form-control col-9 " id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group row mt-4">
    <label for="exampleInputPassword1" className="col-2 text-right">Password:</label>
    <input type="password" className="form-control col-9" id="exampleInputPassword1"/>
  </div>
  <div className='row justify-content-md-center mb-4'>  
      <button type="submit" className="btn btn-primary justify-content-md-center">Sign in</button>
  </div>
</form>
<div className='row justify-content-md-center'>
<div className=""><span className='pr-3'>Or sign in with Google:</span>
<GoogleAPI/>
</div>
</div>
</div>

    )
}
