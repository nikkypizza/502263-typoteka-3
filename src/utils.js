'use strict';

const fs = require(`fs`);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [arr[i], arr[randomPosition]] = [arr[randomPosition], arr[i]];
  }

  return arr;
};

const getDeclension = (number, titlesArr) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titlesArr[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};

const getRandomArrElements = (arr, maxAmount = arr.length - 1) => shuffle(arr).slice(0, getRandomInt(1, maxAmount));

const createFileFs = (fileName, content) => {
  fs.writeFile(fileName, JSON.stringify(content), (err) => {
    if (err) {
      return console.error(err);
    }
    return console.info(`Файл ${fileName} создан. Количество публикаций: ${content.length}.`);
  });
};

module.exports = {
  getRandomInt,
  shuffle,
  getDeclension,
  getRandomArrElements,
  createFileFs
};
