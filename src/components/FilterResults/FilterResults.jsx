import { useContext, useEffect, useState } from "react";
import { EmptyWhiteSpace, FilterAreaContainer, SelectBoxArtist, SelectBoxPlace } from "./styled";
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
  }, [filters]); // eslint-disable-line 

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
    <FilterAreaContainer>
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
      <EmptyWhiteSpace></EmptyWhiteSpace>
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
    </FilterAreaContainer>
  );
};

export default FilterResults;
