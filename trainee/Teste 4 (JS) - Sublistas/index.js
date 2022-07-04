



const A = [1, 2, 3];
const B = [1, 2, 3];


for(var i=0; i < A.length; i++)
var array = A[i];

if (A[i] == B[i]){
    console.log("A é igual a B");
}

else if (B.includes(array)){
    console.log("A é uma sublista de B");
}
else{
    console.log("Não existem elementos iguais");   
}
