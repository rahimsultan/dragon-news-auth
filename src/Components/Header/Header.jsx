import moment from 'moment'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='text-center mt-12 mb-8'>
        <img className='mx-auto mb-5' src={logo} alt="" />
        <p className='text-slate-600 mb-3 font-semibold'>Journalism Without Fear or Favour</p>
        <p className='font-semibold text-slate-600'>{moment().format('dddd MMMM DD, yyyy')}</p>
    </div>
  )
}

export default Header