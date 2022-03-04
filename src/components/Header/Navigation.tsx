import React from 'react'
import { Link } from 'react-router-dom'

interface NavigationProps {
    headings: string[];
}

const Navigation = ({headings}: NavigationProps) => {
    
    return (
        <nav>
            <ul className="primary-navigation underline-indicators flex">
                <li className='active'><Link to={'/'} className="ff-sans-cond uppercase text-white letter-spacing-2"><span>00</span>{headings[0]}</Link></li>
                <li><Link to={'/destination'} className="ff-sans-cond uppercase text-white letter-spacing-2"><span>01</span>{headings[1]}</Link></li>
                <li><Link to={'/crew'} className="ff-sans-cond uppercase text-white letter-spacing-2"><span>02</span>{headings[2]}</Link></li>
                <li><Link to={'/crew'} className="ff-sans-cond uppercase text-white letter-spacing-2"><span>03</span>{headings[3]}</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation