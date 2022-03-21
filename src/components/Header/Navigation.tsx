import { NavigatorWrapper } from './Header.styles';
import { NavLink } from 'react-router-dom';

export type MainSection = '' | 'home' | 'destination' | 'crew' | 'technology';

interface NavigationProps {
    toggle: boolean
}

const Navigation = ({ toggle }: NavigationProps) => {

    const routes: MainSection[] = ['', 'destination', 'crew', 'technology']
    
    return (
        <NavigatorWrapper toggle={toggle}>
            <ul id="primary-navigation" className="underline-indicators">
                {routes.map((route, counter) => (
                    <NavLink
                        to={`/${route}`}
                        key={counter}
                        className={({ isActive }) => isActive ? 'active' : ''}>
                        <li className='ff-sans-cond uppercase text-white letter-spacing-2'>
                            <span aria-hidden="true">0{counter}</span>{route === '' ? 'home' : route}

                        </li>
                    </NavLink>
                ))}
            </ul>
        </NavigatorWrapper>
    )
}

export default Navigation