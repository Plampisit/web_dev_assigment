import { useContext, useState } from "react";
import { ImageContext } from "../web";
import { SearchContext } from "../web";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData } = useContext(ImageContext);
  const { updateSearch, updatePage } = useContext(SearchContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleEnterSearch = (e) => {
    if ((e.key === "Enter") & !!searchValue) {
      fetchData(
        `search/photos?page=1&per_page=8&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
      updateSearch({ search: searchValue  });
      updatePage({ page: 8 });
    }
  };

  return (
    <div>
      <input
        className="bg-white border border-black text-m  w-full indent-2 outline-none rounded-tl rounded-bl "
        type="text"
        placeholder="Search for images"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
    </div>
  );
};

export default SearchField;