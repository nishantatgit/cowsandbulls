function compareSequenceObjects(a, b) {
    const aKeys = Object.keys(a);
    let cows = 0;
    let bulls = 0;
    for (let i = 0; i < aKeys.length; i++) {
      const key = aKeys[i];
      if (b[key] !== undefined) {
        if (b[key].some(value => a[key].some(aValue => aValue === value))) {
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