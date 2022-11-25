function  returnsANamedFunction()
{
   const innerFunction = function(){
      console.log('Howdy patner!')
   };
   return innerFunction
}
function  receivesAFunction(callback)
{
   callback();
}
function returnsAnAnonymousFunction()
{   
   return function(){
      console.log('Hello Again');
   }
}