// Number
export const indexConverter = (prevIndex, nextIndex) => {
  if (prevIndex % 10 === 0) {
    return nextIndex - prevIndex;
  }
  if (nextIndex === 20) {
    return 14 - prevIndex;
  } else if (nextIndex === 30) {
    return 25 - prevIndex;
  } else if (nextIndex === 40) {
    return 33 - prevIndex;
  } else if (nextIndex === 50) {
    return 44 - prevIndex;
  }
};
