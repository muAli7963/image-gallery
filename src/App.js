import { useState, useEffect } from "react";
import ImageCard from "./imageCard";
import ImageSearch from "./imageSearch";
import "./styles.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=20160996-f49ec44133cf90f41f7c943e5&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      });
  }, [term]);

  return (
    <div className="app">
      <ImageSearch searchTerm={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="no-image">no images found</h1>
      )}
      {isLoading ? (
        <h2 className="loading-text">Loading...</h2>
      ) : (
        <div className="container">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}
