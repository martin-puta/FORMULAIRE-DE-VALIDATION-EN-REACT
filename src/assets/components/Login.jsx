import React, { useState } from 'react'
import Validation from './Validation'

function Login() {
    const [values , setValues ]= useState({
        name :'',
        email :'',
        password : ''
    })
    const [errors , setErrors] = useState({})

    function handleInput (event){
        const newObj= {...values, [event.target.name]: event.target.values}
        setValues(newObj)
    }
    function handleValidation (event){
        event.preventDefault()
        setErrors(Validation(values))
    }

  return (
    <div className='contenaire-princial'>
        <div className="sign-up-forms">
            <h4>Form Validation</h4>
        </div>
    <form action="" className='forms-input' onSubmit={handleValidation}>
      <label htmlFor="">Name</label>
      <input type="text" placeholder='Enter name'
      name='name' onChange={handleInput} />
      {errors.name && <p style={{color:"red"}}>{errors.name}</p>}

      <label htmlFor="">Email</label>
      <input type="email" placeholder='Enter email'
      name='email'  onChange={handleInput} />
       {errors.email && <p style={{color:"red"}}>{errors.email}</p>}

      <label htmlFor="password">Password</label>
      <input type="password" placeholder='Enter password'
      name='password'  onChange={handleInput} />
       {errors.password && <p style={{color:"red"}}>{errors.password}</p>}

     <div className="btn-validation">
        <button className='btn-validation'>Valider</button>
     </div>
    </form>
    </div>
  )
}

export default Login