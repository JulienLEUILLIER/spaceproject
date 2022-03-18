import { MainSection } from './Navigation';
import { Link } from 'react-router-dom';

interface ListItemsProps {
    routeName: MainSection;
    activePage: MainSection;
    counter: number;
}

const ListItem = ({ routeName, activePage, counter }: ListItemsProps) => {

    return (
        <li className={activePage === routeName ? 'active' : ''}>
            <span aria-hidden="true">0{counter}</span>{routeName === '' ? 'home' : routeName}
        </li>
    )
}

export default ListItem;