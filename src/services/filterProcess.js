export const filterData = (data, processNumber) =>
  data.filter(
    (item) => item.cnj === processNumber
  );
