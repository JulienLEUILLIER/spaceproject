import { MainSection } from "./Header";
import { Link } from 'react-router-dom';

interface ListItemsProps {
    routeName: MainSection;
    activePage: MainSection;
    setActivePage: React.Dispatch<React.SetStateAction<MainSection>>;
    counter: number;
}

const ListItem = ({ routeName, activePage, setActivePage, counter }: ListItemsProps) => {

    return (
        <li
            className={activePage === routeName ? 'active' : ''}>
            <Link
                to={`/${routeName}`}
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                onClick={() => setActivePage(routeName)}>
                <span aria-hidden="true">0{counter}</span>{routeName === '' ? 'home' : routeName}
            </Link>
        </li>
    )
}

export default ListItem;