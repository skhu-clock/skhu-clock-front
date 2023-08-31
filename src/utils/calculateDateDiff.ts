const calcuateDateDIff = (startDate: string) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const startDateWithoutYear = startDate.slice(5);
  const startDateWithYear = currentYear + startDateWithoutYear;
  const startDateObj = new Date(startDateWithYear);
  const diffDate = new Date().getTime() - startDateObj.getTime();
  return Math.abs(diffDate / (1000 * 60 * 60 * 24)).toFixed(0);
};

export default calcuateDateDIff;
