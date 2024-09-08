const fetchBadges = async ({ page, itemsPerPage, search }) => {
  console.log();
  const url =
    import.meta.env.VITE_API_URL +
    `badges?page=${page}&limit=${itemsPerPage}&term=${search}&hotel=com.tr`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { fetchBadges };
