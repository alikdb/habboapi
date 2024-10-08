import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";
import uniqid from "uniqid";
import cx from "classix";
import { parseISO, format } from "date-fns";

const BadgesItem = ({ data }) => {
  const formatDate = (date) => {
    const formatD = parseISO(date);
    return format(formatD, "dd.MM.yyyy");
  };

  const badgeUniqueId = uniqid();
  return (
    <div
      className={cx(
        badgeUniqueId,
        data.is_new && "!bg-green-500",
        "items-center bg-zinc-300 hover:bg-transparent hover:shadow-none border-2 border-transparent hover:border-zinc-300 transition-colors rounded inline-flex h-12 justify-center mb-1 mr-0 mt-0 p-2 text-center align-middle w-12 shadow mx-1",
      )}
    >
      <div>
        <img
          src={data.image}
          alt={data.code}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "/images/badge_404.png";
          }}
        />
      </div>

      <Tooltip
        anchorSelect={`.${badgeUniqueId}`}
        render={() => (
          <div>
            {data.code} <br /> {data.name} <br /> {data.hotel} <br />{" "}
            {formatDate(data.created_at)}
          </div>
        )}
      />
    </div>
  );
};

BadgesItem.propTypes = {
  data: PropTypes.object,
};

export default BadgesItem;
