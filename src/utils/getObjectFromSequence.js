const getObjectFromSequence = (seq) => {
    const seqArray = seq.split("");
    let resultObject = {};
    seqArray.forEach((digit, i) => {
      resultObject[digit] = i;
    });
    return resultObject;
  };
  
  export default getObjectFromSequence;
  