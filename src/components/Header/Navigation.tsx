import { Link } from 'react-router-dom'
import { NavigatorWrapper } from './Header.styles';

interface NavigationProps {
    headings: string[];
    toggle: boolean
}

const Navigation = ({ headings, toggle }: NavigationProps) => {

    return (
        <NavigatorWrapper toggle={toggle}>
            <ul id="primary-navigation" className="underline-indicators">
                <li className='active'><Link to={'/'} className="ff-sans-cond uppercase text-white letter-spacing-2"><span>00</span>{headings[0]}</Link></li>
                <li><Link to={'/destination'} className="ff-sans-cond uppercase text-white letter-spacing-2"><span>01</span>{headings[1]}</Link></li>
                <li><Link to={'/crew'} className="ff-sans-cond uppercase text-white letter-spacing-2"><span>02</span>{headings[2]}</Link></li>
                {headings[3] && <li><Link to={'/technology'} className="ff-sans-cond uppercase text-white letter-spacing-2"><span>03</span>{headings[3]}</Link></li>}

            </ul>
        </NavigatorWrapper>
    )
}

export default Navigation