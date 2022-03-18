import crewBackgrounds from '../components/Crew/crewBackgrounds';
import destinationBackgrounds from '../components/Destination/destinationBackgrounds';
import homeBackgrounds from '../components/Home/homeBackgrounds'; 
import technologyBackgrounds from '../components/Technology/technologyBackgrounds';

export type PossibleViews = "desktop" | "tablet" | "mobile";
export type BackgroundsProps = { [k in PossibleViews]: string };

export type PossibleRoutes = "home" | "destination" | "crew" | "technology";
export type RoutesProps = { [k in PossibleRoutes]: BackgroundsProps };

const backgrounds: RoutesProps = {
    home: homeBackgrounds,
    destination: destinationBackgrounds,
    crew: crewBackgrounds,
    technology: technologyBackgrounds,
}

export default backgrounds;

