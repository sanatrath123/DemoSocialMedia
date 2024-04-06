import React from 'react'
import {useForm} from "react-hook-form"
const Login = () => {



  const {register , handleSubmit}= useForm()
  return (
    <div className='flex justify-center align-middle bg-gray-300 w-40 h-96 '>
<form className='' onSubmit={handleSubmit((data)=>{
  console.log(data)
})}>
  <input type="text" className='bg-red-300'
  {...register("Firstname", {required:true})}
  />
  <input type="text"
  {...register("lastname", {required:true, minLength:4})}
  />
  <button className='p-4 bg-blue-500' type='submit'></button>
</form>
    </div>
  )
}

export default Login