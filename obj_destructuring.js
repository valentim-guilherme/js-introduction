const usuario = {
    name: 'Guilherme',
    idade: 26,
    endereco: {
        cidade: 'Belo Horizonte',
        estado: 'MG'
    }
};

// const name = usuario.name;
// const idade = usuario.idade;
// const cidade = endereco.cidade;

// console.log(cidade);


//Now with obj destructuring

const { name, idade, endereco: {cidade}} = usuario;

console.log(cidade);



////////////////////////////////////////////////////////////////////////////////

// function mostraName(usuario){
//     console.log(usuario.name);
// }

//Now with obj destructuring

function mostraName({name, idade}){
    console.log(name, idade);
}

mostraName(usuario);