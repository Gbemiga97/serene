import { IoCloseOutline } from 'react-icons/io5'


const MobileNav = ({setMobileNav}) => {
  return (
    <nav className="text-white">
        <button 
        onClick={() => setMobileNav(false)}
        className='cursor-pointer'>
        <IoCloseOutline className='text-4xl' />
        </button>
    </nav>
  )
}

export default MobileNav