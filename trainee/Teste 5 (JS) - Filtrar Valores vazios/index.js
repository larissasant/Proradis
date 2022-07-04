

function myFunction (a){


//TO DO

return a;

}


const A = [1,2,3,null,4,null,5];
const B = [1,2,3,null,4,null,5,-1,6,7];
const C = [1,2,3,null,4,null,5,6,7,8,9];
const D = [1,2,3,null,4,null,5];

var A_Vazio = A.filter(function(A) {
    return A > 0 && A < 6;
});

var B_Vazio = B.filter(function(B) {
    return B > 0 && B < 6;
});

  var C_Vazio = C.filter(function(C) {
      return C > 0 && C < 6;
  });

 var D_Vazio = D.filter(function(D) {
     return D > 0 && D < 6;;
 });

console.log(A_Vazio);
console.log(B_Vazio);
console.log(C_Vazio);
console.log(D_Vazio);



