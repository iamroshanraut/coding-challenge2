//Coding Challenge

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => {
    if (age <= 2) {
      return 2 * age;
    } else {
      return 16 + age * 4;
    }
  });
  
  const adults = humanAge.filter(hAge=> hAge >= 18);
  
  const avgAge = adults.reduce((acc , age) => acc + age , 0) / adults.length;
//   const avgAge = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,0
//   );
  
  return avgAge;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1 , avg2);
