import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import NewsCard from './NewsCard/NewsCard';


const LeftSide = ({newses}) => {
    

    // store category item from api
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data => setCategories(data))
    },[])

  return (
    <div>
        <h2 className='text-xl font-bold px-3'>ALL Category</h2>
        <div className='px-4 flex flex-col py-4'>
            {
                categories.map(cat => <NavLink className='block active:bg-slate-200 active:text-black p-2 px-10 rounded-sm text-slate-500 font-semibold' key={cat.id} >{cat.name}</NavLink>)
            }
        </div>
        <div>
            {
                newses.slice(1,4).map(news=><NewsCard key={news._id} news={news}/>)
            }
        </div>
    </div>
  )
}

export default LeftSide