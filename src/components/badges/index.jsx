import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BadgesItem from "../badges-item";
import { fetchBadges } from "~/requests/fetch-badges";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import LoadingItem from "../loading-item";

import { useBreakpoint } from "~/hooks/use-breakpoint.js";

const BadgesComponent = ({ type = "large" }) => {
  const { breakpoint } = useBreakpoint();
  let LARGE_ITEMS_PER_PAGE = 0;
  let SMALL_ITEMS_PER_PAGE = 0;

  if (breakpoint === "desktop") {
    LARGE_ITEMS_PER_PAGE = 120;
    SMALL_ITEMS_PER_PAGE = 36;
  } else {
    LARGE_ITEMS_PER_PAGE = 60;
    SMALL_ITEMS_PER_PAGE = 12;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [badges, setBadges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastPage, setLastPage] = useState(0);

  const handlePageChange = (pageNumber) => {
    setIsLoading(true);
    setCurrentPage(pageNumber.selected + 1);
  };

  const getBadges = async (page, itemsPerPage, search) => {
    const response = await fetchBadges(page, itemsPerPage, search);
    return response;
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const badgesData = await getBadges(currentPage, LARGE_ITEMS_PER_PAGE, "");
      setBadges(badgesData.badges);
      setLastPage(badgesData.last_page);
      setIsLoading(false);
    };
    fetchData();
  }, [currentPage]);

  return (
    <div className="relative block rounded shadow bg-white p-5 my-5 via-blue-500 to-purple-600">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="flex justify-between">
        <div className="text-xl font-semibold">Last Badges</div>
        <div>
          {type === "small" && (
            <Link to="/badges" className="text-blue-500">
              See all
            </Link>
          )}
        </div>
      </div>

      <hr className="my-4" />

      <div>
        {isLoading && <LoadingItem />}
        {!isLoading &&
          type !== "small" &&
          badges.map((badge, index) => <BadgesItem data={badge} key={index} />)}

        {!isLoading &&
          type == "small" &&
          badges
            .slice(0, SMALL_ITEMS_PER_PAGE)
            .map((badge, index) => <BadgesItem data={badge} key={index} />)}
      </div>
      <div className="flex justify-center mt-4">
        {type === "large" && (
          <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageChange}
            pageRangeDisplayed={3}
            marginPagesDisplayed={breakpoint === "desktop" ? 3 : 1}
            pageCount={lastPage}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        )}
      </div>
    </div>
  );
};

BadgesComponent.propTypes = {
  type: PropTypes.string,
};

export default BadgesComponent;
