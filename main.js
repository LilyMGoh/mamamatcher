var mamamatcher = angular.module("mamamatcher", []);

mamamatcher.animation("animation", function(){
  return removeClass: function(element, className, done){ }
});

mamamatcher.controller("MainCtrl", ['$scope', function($scope){
  $scope.showStart = true;
  // $scope.open = '';

  $scope.shake = function(arr){
    return _.shuffle(arr)
  }

  $scope.init = function(){
    $scope.showStart = false;
    var rabbitsNum = 7;
    $scope.cards = [];
    for(var i = 0; i <= rabbitsNum; i += 1){
      $scope.cards.push({"id": i, "imageUrl": "images/rabbits/rabbit-" + i});
      $scope.cards.push({"id": i, "imageUrl": "images/rabbits/rabbit-" + i});
    };
    $scope.cards = $scope.shake($scope.cards);
  };

  $scope.select = function(id){
    var test = 1;
    console.log(id);
    if( id === test){
      $animate.....
    }
  }

}]);


