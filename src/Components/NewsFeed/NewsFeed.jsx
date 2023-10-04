import React from 'react'
import FeedCard from './FeedCard/FeedCard'

const NewsFeed = ({newses}) => {
  return (
    <div>
        <h2 className='text-xl font-semibold mb-3'>Dragon News Home</h2>
        <div>
          {
            newses.map(news => <FeedCard key={news._id} news={news}/>)
          }
        </div>
    </div>
  )
}

export default NewsFeed