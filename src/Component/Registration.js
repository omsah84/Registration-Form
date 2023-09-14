import React from 'react'

function Registration(props) {
  return (
    <div className='container card mt-5 p-3 registration-form'>
      <h2 className='text-center'>Registration Form</h2>
      <form onSubmit={props.submit}>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' required className='form-control'/>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' required className='form-control'/>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' required className='form-control'/>
        </div>
        <button type='submit' className='btn btn-primary  w-100 mt-1' >Submit</button>
        <button type='button' className='btn btn-success w-100 mt-1' >Sign in by Google</button>
        <button type='button' className='btn btn-danger  w-100 mt-1' >Sign in by FaceBook</button>
      </form>
    </div>
  )
}

export default Registration
