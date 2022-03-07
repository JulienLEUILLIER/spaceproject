import { useState, useEffect } from "react";

export interface ImagesProps {
  desktop: string;
  tablet: string;
  mobile: string;
}

const useImage = (routeComponent: JSX.Element) => {

  const routeName = routeComponent.type.name.toLowerCase();

  const initialState: ImagesProps = {
      desktop: '',
      tablet: '',
      mobile : '',
  } 

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();
  const [images, setImages] = useState<ImagesProps>(initialState);

  useEffect(() => {
    const fetchImage = async () => {
      const response =
      {
        desktop: await require(`../../public/assets/${routeName}/background-${routeName}-desktop.jpg`),
        tablet: await require(`../../public/assets/${routeName}/background-${routeName}-tablet.jpg`),
        mobile: await require(`../../public/assets/${routeName}/background-${routeName}-mobile.jpg`),
      }
      setImages(response);
    };
    fetchImage();
  }, [routeComponent]);

  return images;
};

export default useImage;
