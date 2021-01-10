const getObjectFromSequence = (seq) => {
    const seqArray = seq.split("");
    let resultObject = {};
    seqArray.forEach((digit, i) => {
      if(resultObject[digit] !== undefined){
        resultObject[digit].push(i);
      } else {
        resultObject[digit] = [i];
      }
    });
    return resultObject;
  };
  
  export default getObjectFromSequence;
  