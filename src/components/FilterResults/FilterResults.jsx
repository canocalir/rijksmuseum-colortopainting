import { useState } from "react"

const FilterResults = ({artistData, data, setData}) => {
  const {0: artist, 2: date, 3:place } = artistData

  const [filters, setFilters] = useState({
    artist: '',
    century: '',
    places: ''
  })
  const [filteredData, setFilteredData] = useState([])

  const filterDataHandler = (e) => {
    
    setFilters({...filters, [e.target.name]: e.target.value})
    setFilteredData(data.filter((art) => {
      return(
        art
      )
    }))
  }
  console.log(data)
  return (
    <div>
      <select onChange={filterDataHandler} placeholder="select" name="artist" id="artist">
        <option defaultValue={'All'} value="all">All</option>
        {artist?.facets?.map((art, index) => (
          <option key={index} value={art?.key}>{art?.key}</option>
        ))}
      </select>
      <select onChange={filterDataHandler} name="century" id="century">
      <option defaultValue={'All'} value="all">All</option>
      {date?.facets?.map((art, index) => (
          <option key={index} value={art?.key}>{art?.key}</option>
        ))}
      </select>
      <select onChange={filterDataHandler} name="places" id="places">
      <option defaultValue={'All'} value="all">All</option>
      {place?.facets?.map((art, index) => (
          <option key={index} value={art?.key}>{art?.key}</option>
        ))}
      </select>
    </div>
  )
}

export default FilterResults