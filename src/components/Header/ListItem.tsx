import { MainSection } from './Navigation';

interface ListItemsProps {
    routeName: MainSection;
    counter: number;
}

const ListItem = ({ routeName, counter }: ListItemsProps) => {

    return (
        <li className='ff-sans-cond uppercase text-white letter-spacing-2'>
            <span aria-hidden="true">0{counter}</span>{routeName === '' ? 'home' : routeName}
        </li>
    )
}

export default ListItem;