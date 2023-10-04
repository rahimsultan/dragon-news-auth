import { GoCalendar } from 'react-icons/go'
import banner from '../../assets/1.png'

const InsightCard = () => {
  return (
    <div className="mx-auto p-2 shadow-md rounded-md">
    <div>
      <img src={banner} alt="" />
    </div>
    <h2 className="text-xl font-semibold mb-5 mt-2">
      {'21 The Most Stylish Wedding Guest Dresses For Spring'}
    </h2>
    <div className="flex items-center justify-between">
      <span className="font-semibold">{'sports'}</span>
      <span className="flex items-center gap-2">
        {" "}
        <GoCalendar /> {'Jan 4, 2022'}
      </span>
    </div>
  </div>
  )
}

export default InsightCard