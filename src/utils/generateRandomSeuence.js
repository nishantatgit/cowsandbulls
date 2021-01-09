function generateRandomSequence(noOfDigits = 4) {
    let sequence = "";
    const generated = {};
    for (let i = 0; i < noOfDigits; i++) {
      let random = Math.floor(Math.random() * 10);
  
      // try generating random digit until it does not match
      // from existing one
      while (generated[random]) {
        random = Math.floor(Math.random() * 10);
      }
      generated[random] = true;
      sequence += random;
    }
    return sequence;
  }
  
  export default generateRandomSequence;