import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGifs(category).then((response) => setImages(response));
    setIsLoading(false);
  }, []);

  return {
    images: images,
    isLoading,
  };
};
