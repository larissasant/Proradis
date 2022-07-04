


let carros = [
    { 
        nome: "Peugeot",
        preco: "50000.99"
    },
    { 
        nome: "Honda",
        preco: "80500.70"
    },
    { 
        nome: "Fox",
        preco: "70000.50"
    },
    { 
        nome: "Gol",
        preco: "45000.65"
    },            
    
]

console.log("Lista de carros: " + JSON.stringify(carros));


//TO DO
//Ordenar do menor preço para o maior 
console.log("Lista de carros ordenados por preço: ");

const p = carros.sort((a,b)=>{
    return a.preco-b.preco;
});
console.log(p);

//TO DO
//Ordenar por ordem alfabética
console.log("Lista de carros ordenados por nome: ");

const n = carros.sort((a,b)=>{
    return a.nome.localeCompare(b.nome);
});
console.log(n);


