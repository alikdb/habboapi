import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import PropTypes from "prop-types";
const timeAgo = (time, type = "date") => {
  let date;

  if (type === "date") {
    date = dayjs(time).format("DD/MM/YYYY HH:mm:ss");
  }

  if (type === "unix") {
    date = dayjs.unix(time).format("DD/MM/YYYY HH:mm:ss");
  }

  const monthDiff = dayjs().diff(date, "month");
  console.log(monthDiff);
  if (monthDiff < 6) {
    return dayjs(time).fromNow();
  } else if (monthDiff < 12) {
    return dayjs(date).format("DD MMMM");
  } else {
    return dayjs(date).format("DD.MM.YYYY");
  }
};

timeAgo.propTypes = {
  time: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["date", "unix"]),
};

export { timeAgo };
