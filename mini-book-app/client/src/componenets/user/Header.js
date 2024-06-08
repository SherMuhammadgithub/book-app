import { Link } from "react-router-dom";
import { Button, Navbar } from 'flowbite-react';
import { useUser } from './UserContext';
export default function Header({ image }) {
  const { user } = useUser();
  return (
    <section className="">
      <div className="   bg-red-600 text-white p-3 text-center w-full text-lg " style={{ letterSpacing: "3px" }}>
        <h1 className="font-[Lobster]" style={{letterSpacing:"4px"}}>{user ? user.id : 'Unknown User'}</h1>
      </div>
      <Navbar fluid rounded className='font-serif shadow-lg'>
        <Link to={'/'}> <Navbar.Brand>
          <img src={image} className=" h-12 w-12 md:h-20 md:w-20 rounded-full" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white font-[Lobster]">LibertyBooks</span>
        </Navbar.Brand></Link>
        <div className="flex md:order-3 space-x-2 items-center">
          <a href={'/login'} > <button className="bg-red-500 hover:bg-red-800 py-2 px-4 text-white rounded-md text-sm">{user ? "Logout" : "Login"}</button></a>
        </div>
      </Navbar >
    </section>
  )
}
