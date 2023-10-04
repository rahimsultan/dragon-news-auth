import { useLoaderData } from "react-router-dom"
import LeftSide from '../../Components/LeftSIde/LeftSide'
import NewsFeed from '../../Components/NewsFeed/NewsFeed'
import RightSide from '../../Components/RightSIde/RightSide'


const Home = () => {
    const newses = useLoaderData()
  return (
    <div className='max-w-7xl mx-auto lg:px-8 px-4'>
        
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 relative'>
            <div className='sticky top-0'>
                <LeftSide newses={newses}/>
            </div>
            <div className='col-span-2 overflow-y-auto'>
                <NewsFeed newses={newses}/>
            </div>
            <div className='sticky top-0'>
                <RightSide/>
            </div>
        </div>
    </div>
  )
}

export default Home