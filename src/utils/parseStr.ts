const parseFromArray = <T>(array: T[], target: T) => {
  const isContain = array.includes(target);

  if (isContain) {
    return isContain;
  }
};

export default parseFromArray;
