const fetchActivities = async ({ page, itemsPerPage }) => {
  const url = `http://localhost:3000/activities?page=${page}&limit=${itemsPerPage}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { fetchActivities };
