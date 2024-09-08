const fetchBadges = async ({ page, itemsPerPage, search }) => {
  console.log(page, itemsPerPage, search);
  const url = `http://localhost:3000/badges?page=${page}&limit=${itemsPerPage}&term=${search}&hotel=com.tr`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { fetchBadges };
