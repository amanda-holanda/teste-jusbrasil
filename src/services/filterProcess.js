export const filterData = (data, tribunalOrigin, processNumber) =>
  data.filter(
    (item) => item.tribunal === tribunalOrigin || item.cnj === processNumber
  );
