"use strict";

var arr = [1, 3, 4, 5, 6]; // const newArr = arr.map(function(item){
//     return item * 2;
// });
// const newArr = arr.map((item) => {
//     return item * 2;
// });
// const newArr = arr.map(item => {
//     return item * 2;
// });

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return {
    name: 'Guilherme'
  };
};

console.log(teste());
