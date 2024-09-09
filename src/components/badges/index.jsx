import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BadgesItem from "../badges-item";
import { fetchBadges } from "~/requests/fetch-badges";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import LoadingItem from "../loading-item";

const LARGE_ITEMS_PER_PAGE = 120;
const SMALL_ITEMS_PER_PAGE = 36;

const BadgesComponent = ({ type = "large" }) => {
  const [badges, setBadges] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [lastPage, setLastPage] = useState(0);
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["badges", currentPage],
    queryFn: async () => {
      const data = await fetchBadges({
        page: currentPage,
        itemsPerPage: LARGE_ITEMS_PER_PAGE,
        search: "",
      });
      setLastPage(data.last_page);
      return data.badges;
    },
    enabled: true,
  });
  useEffect(() => {
    refetch(); // Herhangi bir değişiklikte (sayfa veya arama terimi) yeniden çek
  }, [currentPage, refetch]);

  useEffect(() => {
    if (data?.length > 0) {
      if (type === "small") {
        setBadges(data.slice(0, SMALL_ITEMS_PER_PAGE));
      } else {
        setBadges(data);
      }
    }
    return () => {};
  }, [data, type]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber.selected + 1);
  };

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
          data.map((badge) => <BadgesItem data={badge} key={badge.code} />)}
      </div>
      <div className="flex justify-center mt-4">
        {type === "large" && (
          <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageChange}
            pageRangeDisplayed={4}
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
