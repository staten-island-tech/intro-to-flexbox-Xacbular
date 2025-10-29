function sportsBall(scores) {
  let min = scores[0];
  let max = scores[0];
  let changemin = 0;
  let changemax = 0;
  scores.forEach((score) => {
    if (min > score) {
      const min = score;
      const changemin = 1;
    }
    if (max > score) {
      const max = score;
      const changemax = 1;
    }
  });
  console.log("min:" + changemin, "Max:" + changemax);
  console.log(min);
}
sportsBall([12, 24, 10, 24]);