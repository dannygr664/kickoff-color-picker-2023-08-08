import { useState, useEffect } from "react";
import axios from "axios";

import PaletteForm from "../components/paletteForm";
import Palette from "../components/palette";
import SearchBar from "../components/searchBar";

const Home = () => {
  const [palettes, setPalettes] = useState([]);

  const refreshPalettes = async (searchQuery = "") => {
    const params = searchQuery ? { searchQuery } : {};

    const { status, data } = await axios.get("/api/palette", { params });

    if (status == 200) {
      setPalettes(data);
    }
  };

  useEffect(() => {
    const _refreshPalettes = async () => {
      const { status, data } = await axios.get("/api/palette");

      if (status == 200) {
        setPalettes(data);
      }
    };
    _refreshPalettes();
  }, []);

  return (
    <>
      <h1>Kickoff Color Picker</h1>
      <PaletteForm refreshPalettes={refreshPalettes} />
      <SearchBar refreshPalettes={refreshPalettes} />
      {palettes.map(
        ({
          id,
          name,
          red1,
          green1,
          blue1,
          red2,
          green2,
          blue2,
          red3,
          green3,
          blue3,
          red4,
          green4,
          blue4,
          red5,
          green5,
          blue5,
        }) => (
          <Palette
            key={id}
            refreshPalettes={refreshPalettes}
            id={id}
            name={name}
            red1={red1}
            green1={green1}
            blue1={blue1}
            red2={red2}
            green2={green2}
            blue2={blue2}
            red3={red3}
            green3={green3}
            blue3={blue3}
            red4={red4}
            green4={green4}
            blue4={blue4}
            red5={red5}
            green5={green5}
            blue5={blue5}
          />
        )
      )}
    </>
  );
};

export default Home;
