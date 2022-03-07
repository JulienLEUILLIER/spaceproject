import { useState, useEffect } from "react";

export interface ImagesProps {
  desktop: string;
  tablet: string;
  mobile: string;
}

const useImage = (routeComponent: JSX.Element) => {

  const routeName = routeComponent.type.name.toLowerCase();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();
  const [image, setImage] = useState('')

  useEffect(() => {
    const fetchImage = async () => {
      const response =
        await require(`../../public/assets/${routeName}/background-${routeName}-desktop.jpg`);

      setImage(response);
    };
    fetchImage();
  }, [routeComponent]);

  return {
    desktop: image,
    tablet: "",
    mobile: "",
  };
};

export default useImage;
