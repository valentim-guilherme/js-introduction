// REST

const usuario = {
    name: 'Guilherme',
    idade: 26,
    empresa: '#be'
};

const {name, ...resto} = usuario;

console.log(name);
console.log(resto);


// now for vectors

const arr = [1,2,3,4];

const [a,b, ...resti] = arr;

console.log(a);
console.log(resti);


// now for functions parameters

function soma(a, b, c, d){
    return a + b + c + d;
}
console.log(soma(1,3,5,4));


function somaREST(...params){
    return params.reduce((total, next) => total + next)
}
console.log(somaREST(1,3,5,4));


// SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

// now for obj

const usuario1 = {
    name: 'Guilherme',
    idade: 26,
    empresa: '#be'
};

const usuario2 = { ...usuario1, name: 'Pedro'};

console.log(usuario2);

