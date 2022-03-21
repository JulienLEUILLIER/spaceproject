import { NavigatorWrapper } from './Header.styles';
import NavLinkItem from './NavLinkItem';

export type MainSection = '' | 'home' | 'destination' | 'crew' | 'technology';

interface NavigationProps {
    toggle: boolean
}

const Navigation = ({ toggle }: NavigationProps) => {

    let counter = 0;

    return (
        <NavigatorWrapper toggle={toggle}>
            <ul id="primary-navigation" className="underline-indicators">
                <NavLinkItem routeName={''} counter={counter++} />

                <NavLinkItem routeName={'destination'} counter={counter++} />

                <NavLinkItem routeName={'crew'} counter={counter++} />

                <NavLinkItem routeName={'technology'} counter={counter++} />
            </ul>
        </NavigatorWrapper>
    )
}

export default Navigation