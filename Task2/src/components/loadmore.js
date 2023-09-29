import { useContext} from "react";
import { ImageContext } from "../web";
import { SearchContext } from "../web";

const More = () => {
  const { length, fetchData } = useContext(ImageContext);
  const { search, page, updatePage } = useContext(SearchContext);

  const handleButtonSearch = () => {

    if (page.page <= length + 8) {
      console.log("total  " + length);
      console.log("page.page  " + page.page);

      updatePage({ page: page.page + 8 });
      fetchData(
        `search/photos?page=1&per_page=${
          page.page + 8
        }&query=${search.search}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
    } else {
    }
  };

  return (
    <div className="flex items-center pb-10">
      {length === 0 ? (<></>):(
      <div className="max-w-md mx-auto w-full">
        {page.page <= length + 8 ? (
          <button
            onClick={handleButtonSearch}
            className="bg-gray-500  border border-white text-m  w-full indent-2 outline-none rounded-tl rounded-bl text-center"
          >
            Load More
          </button>
        ) : (
          <h5 className="text-center">
            No images found from this keyword {search.search}
          </h5>
        )}
      </div>
      )}
    </div>
  );
};

export default More;