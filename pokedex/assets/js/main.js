const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url).then((response) => {

    return response.json();

}).then(function(response){

    console.log(response.results);

})
.catch(function(error){

    console.error(error);

}).finally(function(){

    console.log('Requisição concluída');

});