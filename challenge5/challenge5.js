const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
console.log(calcAverage(3, 4, 5)); // Logs the average of 3, 4, and 5

const scoreDolphins = calcAverage(30, 14, 69);
const scoreKoalas = calcAverage(12, 23, 99);
console.log(scoreDolphins, scoreKoalas); // Logs the average scores of Dolphins and Koalas

const winner = function (averageDolphins, averageKoalas) {
    if (averageDolphins >= 2 * averageKoalas) {
        console.log(`Dolphins win (${averageDolphins} vs. ${averageKoalas})`);
    } else if (averageKoalas >= 2 * averageDolphins) {
        console.log(`Koalas win (${averageKoalas} vs. ${averageDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
winner(scoreDolphins, scoreKoalas);