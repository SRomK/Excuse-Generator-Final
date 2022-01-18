const who = ["The dog", "My grandma", "His toad", "My cat"];
const action = ["ate", "peed", "poop", "destroy"];
const what = ["my cup of coffe", "the bike", "the wall"];
const when = [
  "before dinner",
  "right on time",
  "when I finished",
  "during my class",
  "while I was reading"
];
const data = [who, action, what, when];

const RandomIndex = arr => Math.floor(Math.random() * arr.length);
const RandomItem = (arr, i) => arr[i];

//RandomItem(action, RandomIndex(action)); ----> para test

const generateExcuse = dataArr => {
  let excuse = "";
  for (let v of dataArr) {
    excuse += `${RandomItem(v, RandomIndex(v))} `;
  }
  return excuse;
};

console.log(generateExcuse(data));

window.onload = function() {
  const excuseDom = document.querySelector("#excuse");
  excuseDom.innerHTML = generateExcuse(data);
};
