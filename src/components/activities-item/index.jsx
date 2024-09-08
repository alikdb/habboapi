import PropTypes from "prop-types";
import dayjs from "dayjs";
import cx from "classix";
import { timeAgo } from "~/utils/functions";
const ActivitiesItem = ({ data }) => {
  const isnew = dayjs().diff(dayjs(data.created_at), "day") < 1;
  return (
    <div
      className={cx(
        "shadow bg-zinc-100 px-2 py-3 grid rounded",
        isnew && "bg-green-500",
      )}
    >
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
