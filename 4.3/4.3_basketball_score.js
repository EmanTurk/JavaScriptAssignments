const johnScores = [89, 120, 103];
const mikeScores = [116, 94, 123];

const calculateAverage = (scores) => {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
};

const johnAverage = calculateAverage(johnScores);
const mikeAverage = calculateAverage(mikeScores);

if (johnAverage > mikeAverage) {
  console.log(`John's team wins with an average score of ${johnAverage}`);
} else if (mikeAverage > johnAverage) {
  console.log(`Mike's team wins with an average score of ${mikeAverage}`);
} else {
  console.log(`It's a draw with an average score of ${johnAverage}`);
}

const maryScores = [97, 134, 105];
const maryAverage = calculateAverage(maryScores);

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
  console.log(`John's team wins with an average score of ${johnAverage}`);
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
  console.log(`Mike's team wins with an average score of ${mikeAverage}`);
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
  console.log(`Mary's team wins with an average score of ${maryAverage}`);
} else {
  console.log(`It's a draw with an average score of ${johnAverage}`);
}
