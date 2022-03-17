import { useState } from 'react';
import { Link } from 'react-router-dom'
import { NavigatorWrapper } from './Header.styles';
import { MainSection } from './Header';
import ListItem from './ListItem';

interface NavigationProps {
    toggle: boolean
}

const Navigation = ({ toggle }: NavigationProps) => {

    const [activePage, setActivePage] = useState<MainSection>('');

    let counter = 0;

    return (
        <NavigatorWrapper toggle={toggle}>
            <ul id="primary-navigation" className="underline-indicators">
                <ListItem
                    routeName=''
                    activePage={activePage}
                    setActivePage={setActivePage}
                    counter={counter++}
                />

                <ListItem
                    routeName='destination'
                    activePage={activePage}
                    setActivePage={setActivePage}
                    counter={counter++}
                />

                <ListItem
                    routeName='crew'
                    activePage={activePage}
                    setActivePage={setActivePage}
                    counter={counter++}
                />

                <ListItem
                    routeName='technology'
                    activePage={activePage}
                    setActivePage={setActivePage}
                    counter={counter++}
                />
            </ul>
        </NavigatorWrapper>
    )
}

export default Navigation