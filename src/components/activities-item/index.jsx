import PropTypes from "prop-types";
import cx from "classix";
import { timeAgo } from "~/utils/functions";
const ActivitiesItem = ({ data }) => {
  // todo add is new
  const isnew = false;
  return (
    <div className={cx("shadow bg-zinc-100 px-2 py-3 grid rounded")}>
      <span className={cx("text-lg text-zinc-700", isnew && "!text-zinc-100")}>
        {data.count} {data.name} added
      </span>
      <span className={cx("text-sm text-zinc-500", isnew && "!text-zinc-100")}>
        {timeAgo(data.created_at)}
      </span>
    </div>
  );
};

ActivitiesItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ActivitiesItem;
