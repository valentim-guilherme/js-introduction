class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(data);
    }
}


class TodoList extends List {
    constructor(){
        super();

        this.usuario = 'Guilherme';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo 2');
    MinhaLista.mostraUsuario('Novo todo 2');
}
