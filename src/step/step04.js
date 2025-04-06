import React, { useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'

const UserDetail = () => {
    const { id } = useParams();
    return <h2>마이페이지 : 사용자ID : { id }</h2>
}

const Step04 = () => {
    const [userId, setUserId] = useState([1, 2, 3]);
    return (
        <>
            <nav>
                <ul className='flex gap-4 bg-red-200 p-4'>
                    {
                        userId.map((v, i)=>(
                            <li key={v}>
                                <Link to={`/users/${v}`}>{v}번 유저</Link>
                            </li>
                        ))
                    }
                </ul>
                <div>공통으로 보이는 영역</div>
            </nav>
            <Routes>
                <Route path="/users/:id" element={<UserDetail/>} />
            </Routes>
        </>
    )
}

export default Step04