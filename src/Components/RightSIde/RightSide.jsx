import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoGoogle, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import qzone1 from '../../assets/qzone1.png';
import qzone2 from '../../assets/qzone2.png';
import qzone3 from '../../assets/qzone3.png';
import Banner from './Banner/Banner';

const RightSide = () => {

    const location = useLocation()
    const {user} = useAuth()

  return (
    <div>
        <div className={user? 'hidden' : ''}>
        <h2 className='text-2xl font-bold p-3'>Login With</h2>
        <div className='p-3'>
            <button
                type="button"
                className="flex mb-3 items-center gap-2 w-full justify-center rounded-md border border-red-600 px-3 py-2 text-lg font-semibold text-red-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
                <BiLogoGoogle/>
                Login with Google
            </button>
            <button
                type="button"
                className="flex items-center gap-2 w-full justify-center rounded-md border border-green-600 px-3 py-2 text-lg font-semibold text-green-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
                <AiOutlineGithub/>
                Login with Github
            </button>
        </div>
        </div>
        <div className='my-5'>
            <h2 className='text-2xl font-bold p-3'>Find Us On</h2>
            <div className='p-3'>
                <a className='flex items-center gap-2 border p-2 rounded-t-lg' href="#">
                    <div className='w-8 h-8 bg-slate-200 rounded-full flex justify-center items-center'>
                    <BiLogoFacebook className='text-lg text-blue-500'/>
                    </div>
                    Facebook
                </a>
                <a className='flex items-center gap-2 border-x p-2' href="#">
                    <div className='w-8 h-8 bg-slate-200 rounded-full flex justify-center items-center'>
                    <BiLogoTwitter className='text-lg text-blue-500'/>
                    </div>
                     Twitter
                </a>
                <a className='flex items-center gap-2 border p-2 rounded-b-lg' href="#">
                    <div className='w-8 h-8 bg-slate-200 rounded-full flex justify-center items-center'>
                    <BiLogoInstagram className='text-lg text-blue-500'/>
                    </div>
                     Instgram
                </a>
            </div>
        </div>
        <div className='bg-slate-200 rounded-sm'>
            <h2 className='p-3 text-2xl font-bold'>Q-Zone</h2>
            <div className='py-5 space-y-2'>
                <img className='mx-auto' src={qzone1} alt="" />
                <img className='mx-auto' src={qzone2} alt="" />
                <img className='mx-auto' src={qzone3} alt="" />
            </div>
        </div>
        <div>
            {
                location.pathname === '/' && <Banner/>
            }
        </div>
    </div>
  )
}

export default RightSide