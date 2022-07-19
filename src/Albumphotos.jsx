import axios from "axios";
import { useEffect, useState } from "react";

const Albumphotos = () => {
  const [albums, setAlbums] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos/1")
      .then((response) => {
        setAlbums(response.data);
      });
  }, []);
  if (albums == null) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div>
        <h2>{albums.albumId}</h2>
        <h2>{albums.title}</h2>
        <img src={albums.url} alt="" />
      </div>
    );
  }
};

export default Albumphotos;
