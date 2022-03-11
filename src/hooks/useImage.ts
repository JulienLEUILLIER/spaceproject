import { useState, useEffect } from "react";

type PossibleViews = 'desktop' | 'tablet' | 'mobile'

export type BackgroundsProps = {[k in PossibleViews]: string}

const useImage = (routeComponent: JSX.Element) => {
  const routeName = routeComponent.type.name;

  const initialState: BackgroundsProps = {
    desktop: "",
    tablet: "",
    mobile: "",
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();
  const [images, setImages] = useState<BackgroundsProps>(initialState);

  useEffect(() => {
    const fetchImage = async () => {

      const currentBackgrounds: BackgroundsProps = {
        desktop: "",
        tablet: "",
        mobile: "",
      }

      const possibleViews: PossibleViews[] = ['desktop', 'tablet', 'mobile'];

      for(const view of possibleViews) {
         let currentBackground = currentBackgrounds[`${view}`] = await import(`../components/${routeName}/images/background-${routeName.toLowerCase()}-${view}.jpg`);

         currentBackgrounds[`${view}`] = currentBackground.default;
      }
      setImages(currentBackgrounds);
    };

    fetchImage();
    
  }, [routeComponent]);

  return images;
};

export default useImage;
