import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const Home = () => <h2>메인페이지</h2>
const About = () => <h2>소개페이지</h2>
const Contact = () => <h2>연락처페이지</h2>

const Step03 = () => {
  return (
    <>
        <div className='bg-gray-400 p-4'>LOGO</div>
        <nav>
            <ul className='flex gap-4 bg-red-200 p-4'>
                <li>
                    <Link to='/'>홈</Link>
                </li>
                <li>
                    <Link to='/about'>소개</Link>
                </li>
                <li>
                    <Link to='/contact'>연락처</Link>
                </li>
            </ul>
            <div className='bg-gray-200 p-4'>공통으로 보이는 영역</div>
        </nav>

        {/* 라우트 설정 : 페이지가 보이는 영역 */}
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>

        <div className='bg-gray-200 p-4'>Footer</div>
    </>
  )
}

export default Step03