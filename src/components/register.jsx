import React ,{useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  registerUserFail, registerUserStart, registerUserSuccess } from '../slices/auth'
import AuthService from '../service/auth'


const Register = () => {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPossword]=useState('')

  const {isLoading}=useSelector(state=>state.auth)
  console.log(isLoading);

  const dispatch=useDispatch()

  const registerHandler=async (e)=>{
    e.preventDefault()
    dispatch(registerUserStart())
    const user={userName:name,email:email,password:password}
    try {
      const response=await AuthService.userRegister(user)
      console.log(response);
      dispatch(registerUserSuccess())
      
    } catch (error) {
      dispatch(registerUserFail())
      
    }

  }
  return (
    <>
    <div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">

    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Sign up to your account
    </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
          write your name
        </label>
        <div className="mt-2">
          <input
          onChange={(e)=>setName(e.target.value)}
            id="text"
            name="text"
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
                 onChange={(e)=>setPossword(e.target.value)}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          onClick={registerHandler}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {isLoading?'loading...':'Sign up'}
        
        </button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      sign up with{' '}
      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
        google
      </a>
    </p>
  </div>
</div>
    </>
  )
}

export default Register