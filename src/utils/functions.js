import { format, formatDistanceToNow, differenceInMonths } from "date-fns";
import { fromUnixTime, parseISO } from "date-fns"; // Unix ve ISO formatları için
import { tr } from "date-fns/locale"; // Türkçe dil desteği için

import PropTypes from "prop-types";

const timeAgo = (time, type = "date") => {
  let date;

  // Tarih tipi "date" olduğunda ISO formatını kullanıyoruz
  if (type === "date") {
    date = parseISO(time); // "time" string'i ISO formatında olmalı
  }

  // Tarih tipi "unix" olduğunda Unix timestamp'i normal tarihe çeviriyoruz
  if (type === "unix") {
    date = fromUnixTime(time); // Unix timestamp'i kullanarak tarih oluşturma
  }

  const monthDiff = differenceInMonths(new Date(), date);

  if (monthDiff < 6) {
    // return formatDistanceToNow(date, { addSuffix: true, locale: tr });
    return formatDistanceToNow(date, { addSuffix: true });
  } else if (monthDiff < 12) {
    //return format(date, "dd MMMM", { locale: tr });
    return format(date, "dd MMMM");
  } else {
    // return format(date, "dd.MM.yyyy", { locale: tr });
    return format(date, "dd.MM.yyyy");
  }
};

timeAgo.propTypes = {
  time: PropTypes.string.isRequired, // "date" tipi ISO string olmalı
  type: PropTypes.oneOf(["date", "unix"]),
};

export { timeAgo };
