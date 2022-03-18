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
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                onClick={() => setActivePage('')}>
                <ListItem
                    routeName=''
                    activePage={activePage}
                    counter={counter++}
                />
            </Link>

            <Link
                to={`/destination`}
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                onClick={() => setActivePage('')}>
                <ListItem
                    routeName='destination'
                    activePage={activePage}
                    counter={counter++}
                />
            </Link>

            <Link
                to={`/crew`}
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                onClick={() => setActivePage('')}>
                <ListItem
                    routeName='crew'
                    activePage={activePage}
                    counter={counter++}
                />
            </Link>

            <Link
                to={`/technology`}
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                onClick={() => setActivePage('')}>
                <ListItem
                    routeName='technology'
                    activePage={activePage}
                    counter={counter++}
                />
            </Link>
            </ul>
        </NavigatorWrapper>
    )
}

export default Navigation