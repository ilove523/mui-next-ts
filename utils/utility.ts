export const flat = (arr: any[]): any[] => {
  return arr.reduce((acc, val) => {
    return acc.concat(val);
  });
};
