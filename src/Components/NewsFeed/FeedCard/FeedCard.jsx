import { AiFillStar, AiOutlineEye } from 'react-icons/ai';
import { BsBookmarkCheck } from 'react-icons/bs';
import { GoShareAndroid } from 'react-icons/go';
import { Link } from 'react-router-dom';

const FeedCard = ({news}) => {

    const {total_view, title, _id, rating, image_url, details, author} = news
  return (
    <div className='rounded-md overflow-hidden border mb-5'>
        <div className='bg-slate-300 p-3 flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img className='w-[50px]' src={author.img} alt="" />
                <div>
                    <p className='font-semibold'>{author.name ?author.name : 'Adam' }</p>
                    <span className='text-slate-500'>{author.published_date ? author.published_date.slice(0,10) : '00-00-0000'}</span>
                </div>
            </div>
            <div className='flex items-center gap-3 text-xl text-slate-600'>
                <BsBookmarkCheck className='cursor-pointer'/>
                <GoShareAndroid className='cursor-pointer'/>
            </div>
        </div>
        <div className='p-3'>
            <h1 className='text-xl font-bold py-2'>{title}</h1>
            <div className='rounded-md my-2'>
            <img className='w-full' src={image_url} alt="" />
            </div>
            <p className='text-slate-500 mb-2'>{details.length > 200 ? details.slice(0,200) +'...' : details }</p>
            <Link to={`/news/${_id}`} className='text-[#F75B5F] font-semibold '>Read More</Link>
            <hr className='my-2'/>
            <div className='flex justify-between items-center'>
                <span className='flex items-center gap-3 text-slate-600 font-semibold'>
                    <div className='flex items-center gap-1 text-xl text-[#FF8C47]'>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                    </div>{rating.number}</span>
                <span className='flex items-center gap-2 font-semibold text-slate-600'><AiOutlineEye className='text-xl'/>{total_view}</span>
            </div>
        </div>
    </div>
  )
}

export default FeedCard