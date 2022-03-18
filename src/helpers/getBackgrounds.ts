import crewBackgrounds from '../components/Crew/crewBackgrounds';
import destinationBackgrounds from '../components/Destination/destinationBackgrounds';
import homeBackgrounds from '../components/Home/homeBackgrounds'; 
import technologyBackgrounds from '../components/Technology/technologyBackgrounds';

export type PossibleViews = "desktop" | "tablet" | "mobile";

export type BackgroundsProps = { [k in PossibleViews]: string };

const backgrounds = {
    home: homeBackgrounds,
    destination: destinationBackgrounds,
    crew: crewBackgrounds,
    technology: technologyBackgrounds,
}

export default backgrounds;

