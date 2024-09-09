import { useQuery } from "@tanstack/react-query";
import { fetchActivities } from "~/requests/fetch-activities";
import { useState } from "react";
import { Link } from "react-router-dom";
import ActivitiesItem from "../activities-item";
import LoadingItem from "../loading-item";
import PropTypes from "prop-types";

const LARGE_ITEMS_PER_PAGE = 10;

const ActivitiesComponent = ({ type = "small" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      const data = await fetchActivities({
        page: currentPage,
        itemsPerPage: LARGE_ITEMS_PER_PAGE,
      });
      setLastPage(data.last_page);
      return data.data;
    },
  });
  return (
    <div className="relative block rounded shadow bg-white p-5 my-5 via-blue-500 to-purple-600">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="flex justify-between">
        <div className="text-xl font-semibold">Last Activities</div>
        <div>
          {type === "small" && (
            <Link to="/activities" className="text-blue-500">
              See all
            </Link>
          )}
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-y-2">
        {isLoading && <LoadingItem />}

        {data?.map((activity) => (
          <ActivitiesItem key={activity.id} data={activity} />
        ))}
      </div>
    </div>
  );
};

ActivitiesComponent.propTypes = {
  type: PropTypes.oneOf(["small", "large"]),
};

export default ActivitiesComponent;
