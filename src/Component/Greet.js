import React from 'react'

export default function Greet(props) {
  return (
    <div className='container card mt-5 p-3 registration-form text-center'>
      <h2>{props.name}</h2>
      <h2>Thank you for your Registration.</h2>
    </div>
  )
}
