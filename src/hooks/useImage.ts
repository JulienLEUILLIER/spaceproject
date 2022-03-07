import { useState, useEffect } from "react";

export interface ImagesProps {
  desktop: string;
  tablet: string;
  mobile: string;
}

const useImage = (routeComponent: JSX.Element) => {
  const routeName = routeComponent.type.name;

  const initialState: ImagesProps = {
    desktop: "",
    tablet: "",
    mobile: "",
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();
  const [images, setImages] = useState<ImagesProps>(initialState);

  useEffect(() => {
    const fetchImage = async () => {
      const desktop = await import(
        `../components/${routeName}/images/background-${routeName.toLowerCase()}-desktop.jpg`
      );
      const tablet = await import(
        `../components/${routeName}/images/background-${routeName.toLowerCase()}-tablet.jpg`
      );
      const mobile = await import(
        `../components/${routeName}/images/background-${routeName.toLowerCase()}-mobile.jpg`
      );
      
      setImages({
        desktop: desktop.default,
        tablet: tablet.default,
        mobile: mobile.default,
      });
    };
    fetchImage();
  }, [routeComponent]);

  return images;
};

export default useImage;
