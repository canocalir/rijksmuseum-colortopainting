import { useContext, useEffect, useState } from "react";
import { SelectBoxArtist, SelectBoxPlace } from "./styled";
import {LanguageContext} from '../../context/LanguageContext'
const FilterResults = ({
  artistData,
  data,
  setData,
  setFilteredData,
  filteredData,
}) => {
  const { 0: artist, 3: place } = artistData;
  const { dictionary } = useContext(LanguageContext);
  const [filters, setFilters] = useState({
    artist: "",
    places: "",
  });

  const filterSetHandler = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    filterDataHandler();
  };

  useEffect(() => {
    filterDataHandler();
  }, [filters]);

  const filterDataHandler = () => {
    setFilteredData(
      data.filter((art) => {
        return (
          filters?.artist === art?.principalOrFirstMaker ||
          filters?.places === art?.productionPlaces[0]
        );
      })
    );
  };

  return (
    <div>
      <SelectBoxArtist
        onChange={filterSetHandler}
        placeholder="select"
        name="artist"
        id="artist"
      >
        <option defaultValue={"all"} value="all">
          {dictionary.filterAll}
        </option>
        {artist?.facets?.map((art, index) => (
          <option key={index} value={art?.key}>
            {art?.key}
          </option>
        ))}
      </SelectBoxArtist>
      <SelectBoxPlace onChange={filterSetHandler} name="places" id="places">
        <option defaultValue={"all"} value="all">
        {dictionary.filterAll}
        </option>
        {place?.facets?.map((art, index) => (
          <option key={index} value={art?.key}>
            {art?.key}
          </option>
        ))}
      </SelectBoxPlace>
    </div>
  );
};

export default FilterResults;
