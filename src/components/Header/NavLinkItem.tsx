import { NavLink } from 'react-router-dom'
import { MainSection } from './Navigation';

interface NavLinkItemProps {
    routeName: MainSection;
    counter: number;
}

const NavLinkItem = ({ routeName, counter }: NavLinkItemProps) => {
    return (
        <NavLink
            to={`/${routeName}`}
            className={({ isActive }) => isActive ? 'active' : ''}>
            <li className='ff-sans-cond uppercase text-white letter-spacing-2'>
                <span aria-hidden="true">0{counter}</span>{routeName === '' ? 'home' : routeName}
            </li>
        </NavLink>
    )
}

export default NavLinkItem;