import { getRandomPositiveInteger } from "../utils";

const FILE_NAMES = [
  "6123150777.webp",
  "6126039472.webp",
  "6126040354.webp",
  "6128597660.webp",
  "6134992334.webp",
  "6136170572.webp",
  "6136172483.webp",
  "6140906765.webp",
  "6142673815.webp",
  "6142681673.webp",
  "6142683276.webp",
  "6148226736.webp",
];

const API = "https://random-data-api.com/api/food/random_food?size=30";

const setMockData = (product) => {
  product.image = FILE_NAMES[getRandomPositiveInteger(0, FILE_NAMES.length - 1)];
  product.price = getRandomPositiveInteger(100, 800);
};

export const fetchProductList = async () => {
  try {
    const rawData = await fetch(API);

    if (rawData.ok) {
      const data = await rawData.json();
      data.forEach(setMockData);
      return data;
    }
  } catch (err) {
    console.error("halt!", err);
  }
};
