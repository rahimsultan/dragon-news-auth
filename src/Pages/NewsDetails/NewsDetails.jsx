import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useLoaderData, useParams } from 'react-router-dom';
import EditorInsight from '../../Components/EditorInsight/EditorInsight';
import RightSide from '../../Components/RightSIde/RightSide';

const NewsDetails = () => {
    const {newsId} = useParams()
    const newses = useLoaderData()
    const [item, setItem] = useState({})

    useEffect(()=>{
        const find = newses.find(news=> news._id === newsId)
        setItem(find)
    },[])
    // console.log(item);
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-5 max-w-7xl lg:px-8 px-4 mx-auto'>
        <div className='col-span-3'>
            <h2 className='text-2xl font-semibold text-slate-600 my-4'>Dragon News</h2>
            <div className='border rounded-md p-6'>
                <div>
                    <img className='mx-auto w-full' src={item.image_url} alt="" />
                </div>
                <h1 className='text-xl font-bold py-2'>{item.title}</h1>
                <p className='text-slate-600'>{item.details}</p>
                <button className='bg-[#D72050] flex items-center gap-2 px-3 py-2 mt-4 text-white'> <BsArrowLeft className='text-xl'/> All news in this category</button>
            </div>
            <div>
                <EditorInsight/>
            </div>
        </div>
        <div>
            <RightSide/>
        </div>
    </div>
  )
}

export default NewsDetails