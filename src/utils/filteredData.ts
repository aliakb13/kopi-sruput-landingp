import getData from "./data";

const coffeData = getData().filter((menu) => menu.tag === "kopi sruput");
const teaData = getData().filter((menu) => menu.tag === "teh sruput");
const chickenData = getData().filter((menu) => menu.tag === "ayam d kremes");

export { coffeData, teaData, chickenData };
