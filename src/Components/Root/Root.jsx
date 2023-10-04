
import Marquee from "react-fast-marquee"
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-8 px-4">
        <Header/>
        <div className='flex items-center gap-5 bg-slate-200 p-3 rounded-sm'>
            <button className='bg-red-700 px-3 py-1 text-white'>Latest</button>
            <Marquee pauseOnHover={true} speed={80}>
                <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Marquee>
        </div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Root