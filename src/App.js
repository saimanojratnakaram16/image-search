import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";
export const App = () => {
  const [imagesList, setImagesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (searchTerm) => {
    setLoading(true);
    const res = await searchImages(searchTerm);
    setImagesList(res);
    setLoading(false);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      { loading ? <div className="loader"> loading images...</div> :
      <ImageList imagesList={imagesList} />}
    </div>
  );
};
