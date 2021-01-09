function getResultString(resultObject, sequenceLength = 4) {
    const { bulls, cows } = resultObject;
    return `${bulls} bull${bulls !== 1 ? "s" : ""} ${cows} cow${
      cows !== 1 ? "s" : ""
    } ${bulls === sequenceLength ? "(Win!)" : ""}`;
  }
  
export default getGResultString;