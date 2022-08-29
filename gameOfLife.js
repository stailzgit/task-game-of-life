const GameOfLife = (str) => {
  const mas = str.split("_").map((item) => item.split(""));

  const countLiveCeils = (n, m, mas) => {
    let countLive = 0;
    for (let i = n - 1; i <= n + 1; i++) {
      for (let j = m - 1; j <= m + 1; j++) {
        if (i < 0 || j < 0) continue;
        if (i >= mas.length || j >= mas[0].length) continue;
        if (i === n && j === m) continue;

        if (Math.abs(i - n) <= 1 && Math.abs(j - m) <= 1) {
          if (mas[i][j] === "1") {
            countLive++;
          }
        }
      }
    }
    return countLive;
  };

  let resultMas = Array.from(Array(mas.length), () => new Array(mas[0].length));

  for (let i = 0; i < mas.length; i++) {
    for (let j = 0; j < mas[i].length; j++) {
      const count = countLiveCeils(i, j, mas);
      resultMas[i][j] = mas[i][j];

      if (mas[i][j] === "0") {
        if (count >= 3) {
          resultMas[i][j] = "1";
        }
      } else {
        if (count <= 1) resultMas[i][j] = "0";
        else if (count <= 3) resultMas[i][j] = "1";
        else if (count >= 4) resultMas[i][j] = "0";
      }
    }
  }
  return resultMas.map((item) => item.join("")).join("_");
};

console.log(GameOfLife("000_111_000"));

module.exports = { GameOfLife };
