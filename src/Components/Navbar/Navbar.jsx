import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import userimg from '../../assets/user.png'

const Navbar = () => {
  // constext 
  const {user, logOut} = useAuth()
  const navigate = useNavigate()

  const handleLogOut= ()=>{
    logOut()
    .then(()=>{
      console.log('log out successfull');
      navigate('/login')
    })
    .catch(error =>{
      console.log(error.message);
    })
  }
  return (
    <div className='grid md:grid-cols-3 grid-cols-2 items-center my-5'>
        <div className='hidden md:block'></div>
        <div className='text-center'>
            <ul className='flex gap-4 font-semibold text-center place-content-center'>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/'}>About</NavLink></li>
                <li><NavLink to={'/'}>Career</NavLink></li>
            </ul>
        </div>
        <div className='flex items-center gap-3 place-content-end'>
            <img className='max-w-[45px]' src={userimg} alt="" />
            {
              user ? <button onClick={handleLogOut} className='bg-slate-700 text-white px-4 py-1 font-semibold'>Log Out</button> 
              : <Link to={'/login'}><button className='bg-slate-700 text-white px-4 py-1 font-semibold'>Login</button></Link>
            }
            
        </div>
    </div>
  )
}

export default Navbar