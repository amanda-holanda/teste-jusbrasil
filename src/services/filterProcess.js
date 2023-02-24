export const filterData = (data, processNumber) =>
  data.find(
    (item) => item.cnj === processNumber
  );
