import PropTypes from "prop-types";
import { parseISO, differenceInDays } from "date-fns";
import cx from "classix";
import { timeAgo } from "~/utils/functions"; // date-fns ile optimize edilmiş timeAgo fonksiyonu

const ActivitiesItem = ({ data }) => {
  const createdAt = parseISO(data.created_at); // ISO formatını Date objesine çeviriyoruz
  const isNew = differenceInDays(new Date(), createdAt) < 1; // 1 günden eski olup olmadığını kontrol ediyoruz

  return (
    <div
      className={cx(
        "shadow bg-zinc-100 px-2 py-3 grid rounded",
        isNew && "!bg-green-500"
      )}
    >
      <span className={cx("text-lg text-zinc-700", isNew && "!text-zinc-100")}>
        {data.count} {data.name} added
      </span>
      <span className={cx("text-sm text-zinc-500", isNew && "!text-zinc-100")}>
        {timeAgo(data.created_at)} {/* Relative zaman formatı */}
      </span>
    </div>
  );
};

ActivitiesItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ActivitiesItem;
