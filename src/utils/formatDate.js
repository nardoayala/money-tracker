const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (month >= 10) {
    return `${year}-${month}-0${day}`;
  }
  return `${year}-0${month}-0${day}`;
};

export default formatDate;
