import { useState } from 'react';
import { Link } from 'react-router-dom'
import { NavigatorWrapper } from './Header.styles';
import ListItem from './ListItem';

export type MainSection = '' | 'home' | 'destination' | 'crew' | 'technology';

interface NavigationProps {
    toggle: boolean
}

const Navigation = ({ toggle }: NavigationProps) => {

    const [activePage, setActivePage] = useState<MainSection>('');

    let counter = 0;

    return (
        <NavigatorWrapper toggle={toggle}>
            <ul id="primary-navigation" className="underline-indicators">
            <Link
                to={`/`}
                className={activePage === '' ? 'active' : ''}
                onClick={() => setActivePage('')}>
                <ListItem
                    routeName=''
                    counter={counter++}
                />
            </Link>

            <Link
                to={`/destination`}
                className={activePage === 'destination' ? 'active' : ''}
                onClick={() => setActivePage('destination')}>
                <ListItem
                    routeName='destination'
                    counter={counter++}
                />
            </Link>

            <Link
                to={`/crew`}
                className={activePage === 'crew' ? 'active' : ''}
                onClick={() => setActivePage('crew')}>
                <ListItem
                    routeName='crew'
                    counter={counter++}
                />
            </Link>

            <Link
                to={`/technology`}
                className={activePage === 'technology' ? 'active' : ''}
                onClick={() => setActivePage('technology')}>
                <ListItem
                    routeName='technology'
                    counter={counter++}
                />
            </Link>
            </ul>
        </NavigatorWrapper>
    )
}

export default Navigation