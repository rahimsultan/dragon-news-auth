import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import InputField from '../../Components/InputField/InputField'
import useAuth from '../../Hooks/useAuth'

const Login = () => {
  // context
  const {logIn} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // login user 
  const logInUser=(e)=>{
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')

    logIn(email, password)
    .then(res=>{
      console.log(res.user);

      navigate(location?.state ? location.state : '/')
    })
    .catch(error =>{
      console.log(error.message);
    })


  }
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={logInUser} className="space-y-6" action="#" method="POST">

        <InputField info={{name: 'email', label:'Email address', placeholder: "enter your email", type:'email'}}/>
        <InputField info={{name: 'password', label:'Password', placeholder: "enter your password", type:'text'}}/>


        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Don't Have Account?{' '}
        <Link to={'/registration'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Create A New One
        </Link>
      </p>
    </div>
  </div>
  </>
  )
}

export default Login