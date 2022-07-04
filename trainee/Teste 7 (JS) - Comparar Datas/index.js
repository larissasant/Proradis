function myFunction (a,b){
    var diferenca = new Date( b-a );

    var resultado =  diferenca.getUTCHours() + ":";
    resultado += diferenca.getUTCMinutes() + ":";
    resultado += diferenca.getUTCSeconds() + "";


valor = resultado.toString().split(":")

for(var i=0; i<valor; i++);

if (valor[0] == 1){
    if(valor[1]==0){
        return true;
    }else{
        return false;
    }
}
else if(valor[0] == 0){
    return true;
} 
else{
    return false
}
}

console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
//console.log(myFunction(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 09:00:00')));
//console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00')));
//console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00')));
