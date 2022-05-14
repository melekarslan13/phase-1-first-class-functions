function receivesAFunction(callback){

callback();



}
function returnsANamedFunction(){

return function add(){

console.log("ı am called")

}



}
function returnsAnAnonymousFunction(){

return function(){console.log("ı am called")}


}
