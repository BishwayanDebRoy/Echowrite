import React from 'react'
import { Container,Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems=[
        {
            name: 'Home',
            slug: "/",
            active: true
          }, 
          {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]
  return (
    <header className='navbar py-3 shadow '>
      <Container>
        <nav className='flex'>
          <div className='mr-4 flex items-center gap-2'>
            <Link to='/'>
              <Logo   className='w-9 h-9 object-contain' />
                <p className='text-white text-[18px] font-bold cursor-pointer flex'>Echowrite Blogapp</p>
              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-yellow-300 hover:text-blue-00 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header