// TODO: write your code here

export default function sorting(obj, [...rest]) {
  const arr = [];
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      arr.push({ key: prop, value: obj[prop] });
    }
  }
  arr.sort((a, b) => {
    const indexFirst = rest.indexOf(a.key);
    const indexSecond = rest.indexOf(b.key);
    console.log(indexFirst, indexSecond);
    if (indexFirst >= 0 && indexSecond < 0) return indexSecond - indexFirst;
    if (indexFirst < 0 && indexSecond >= 0) return indexSecond - indexFirst;
    if (indexFirst < 0 && indexSecond < 0) {
      const alfa = a.key.toLocaleLowerCase();
      const beta = b.key.toLocaleLowerCase();
      if (alfa < beta) return -1;
      if (alfa > beta) return 1;
    }
    return indexFirst - indexSecond;
  });
  return arr;
}
const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
console.log(sorting(obj, ['level', 'health', 'attack', 'defence', 'name']));
console.log(JSON.stringify(sorting(obj, ['level', 'health', 'attack', 'defence', 'name']))); // , `name`, `defence`
