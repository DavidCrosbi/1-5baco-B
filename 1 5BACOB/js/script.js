//pokemon
var pokemon = angular.module("Wars", [])
         

pokemon.controller("rr", function($scope,$rootScope,$http){
	$scope.ListadoPokemon = [];
  numero=1;numero<=20;numero++){
          

	for( var i=1;i<800; i++) {
		$http ({
   	      method : "GET",
   	      url: "https://pokeapi.co/api/v2/pokemon/"+numero
          
   }).then(function Dato(x){
   	  $scope.ListadoPokemon.push(x); 
      //console.log($scope.ListadoPokemon);
      for ( var i=1;i<numero;i++) {
        if (1<10) {
          $scope.ListadoPokemon[i].data.sprites.font_default = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/00.png'
        } else if (i >=10 && i <100) {
          $scope.ListadoPokemon[i].data.sprites.font_default = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/00.png'
        } else if (i >=100){
          $scope.ListadoPokemon[i].data.sprites.font_default = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/00.png'

        }       
      }
   })
 }

    })
	

