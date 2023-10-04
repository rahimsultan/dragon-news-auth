import React from 'react'
import InsightCard from './InsightCard'

const EditorInsight = () => {
  return (
    <div>
        <h2 className='text-xl font-bold mt-8 mb-4 text-slate-700'>Editor Insight</h2>
        <div className='grid md:grid-cols-3 grid-cols-2 gap-5 '>
            <InsightCard />
            <InsightCard />
            <InsightCard />
        </div>
    </div>
  )
}

export default EditorInsight