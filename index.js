// Add your functions here
function map(sourceArray,fun){
return sourceArray.map(fun);
}


function reduce(sourceArray,fun, startingPoint=0){
  let newarr;
  if(startingPoint!==0){
   newarr= sourceArray.reduce(fun,startingPoint);}
  else{
   newarr= sourceArray.reduce(fun);
  }
  return newarr;
}
