const fetchActivities = async ({ page, itemsPerPage }) => {
  const url =
    import.meta.env.VITE_API_URL +
    `activities?page=${page}&limit=${itemsPerPage}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { fetchActivities };
