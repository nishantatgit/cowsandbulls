function compareSequenceObjects(a, b) {
    const bKeys = Object.keys(b);
    let cows = 0;
    let bulls = 0;
    for (let i = 0; i < bKeys.length; i++) {
      const key = bKeys[i];
      if (a[key] !== undefined) {
        if (a[key] === b[key]) {
          bulls += 1;
        } else {
          cows += 1;
        }
      }
    }
    return {
      cows,
      bulls
    };
  }

  export default compareSequenceObjects;