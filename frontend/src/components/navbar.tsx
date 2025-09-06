// import milnaLogo from '../assets/milna-sans.png'
import cart from '../assets/cart.gif'
import user from '../assets/user.png'

export default function Navbar() {
    return (
        <nav className="bg-white fixed w-full z-20 top-0 start-0">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      {/* <img src={milnaLogo} className="w-[60px] h-[60px]" alt="Milna Logo"/> */}
      <span className="self-center text-2xl font-semibold whitespace-nowrap">Milna Gourmet</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <div className='flex space-x-3 rtl:space-x-reverse'>
        <div className='relative'> 
            <img src={cart} alt="Cart" className='w-[28px] h-[32px]' />
            <span className='text-sm rounded-full bg-red-500 text-white w-4 h-4 flex items-center justify-center absolute top-0 right-0'>0</span>
        </div>
        <div className='relative'>
            <img src={user} alt="User" className='w-[28px] h-[32px]' />
        </div>
      </div>
     
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
      <li>
        <a href="#" className="block py-2 px-3 text-[#868C96] bg-[#2EB6BC] rounded-sm md:bg-transparent md:text-[#2EB6BC] md:p-0" aria-current="page">Accueil</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-[#868C96] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#2EB6BC] md:p-0">Menu</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-[#868C96] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#2EB6BC] md:p-0">À propos</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-[#868C96] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#2EB6BC] md:p-0">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    )

}