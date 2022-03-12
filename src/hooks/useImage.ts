import { useState, useEffect } from "react";

type PossibleViews = 'desktop' | 'tablet' | 'mobile'

export type BackgroundsProps = {[k in PossibleViews]: string}

const initialState: BackgroundsProps = {
  desktop: "",
  tablet: "",
  mobile: "",
};

const useImage = (routeComponent: JSX.Element) => {
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [images, setImages] = useState<BackgroundsProps>(initialState);

  const routeName = routeComponent.type.name;

  useEffect(() => {
    const fetchImage = async () => {
      try {

        const currentBackgrounds: BackgroundsProps = {
          desktop: "",
          tablet: "",
          mobile: "",
        }
  
        const possibleViews: PossibleViews[] = ['desktop', 'tablet', 'mobile'];
  
        for(const view of possibleViews) {
          currentBackgrounds[`${view}`] = (await import(`../components/${routeName}/images/background-${routeName.toLowerCase()}-${view}.jpg`)).default;
        }
        
        setImages(currentBackgrounds);

      } catch(error) {
        setError(error);

      } finally {
        setLoading(false);
      }
    };

    fetchImage();
    
  }, [routeComponent]);

  return images;
};

export default useImage;
