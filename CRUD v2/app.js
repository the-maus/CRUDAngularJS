function CrudController($scope) {
    $scope.usuarios = [
        {id:0, nome: 'Matheus', idade: 32, endereco: 'Rua avenida, nº 23'}
    ];

    $scope.addUsuario = function () {
	    if($scope.usuario.id == null){
	    	var id = $scope.usuarios.length > 0 ? ($scope.usuarios[$scope.usuarios.length-1].id + 1) : 1;
		    $scope.usuarios.push({id: id,
		    					  nome: $scope.usuario.nome,
		                          idade: $scope.usuario.idade,
		                      	  endereco: $scope.usuario.endereco});
		}else{
			for(var i=0; i<$scope.usuarios.length; i++){
				var usuario = $scope.usuarios[i];

				if($scope.usuario.id == usuario.id){
					usuario.nome = $scope.usuario.nome;
					usuario.idade = $scope.usuario.idade;
					usuario.endereco = $scope.usuario.endereco;
					break;
				}
			}
		}

	    $scope.usuario.id = $scope.usuario.nome = $scope.usuario.idade = $scope.usuario.endereco = null;
	};

	$scope.editarUsuario = function (usuario) {
	    $scope.usuario.id = usuario.id;
	    $scope.usuario.nome = usuario.nome;
	    $scope.usuario.idade = usuario.idade;
	    $scope.usuario.endereco = usuario.endereco;
	};

	$scope.excluirUsuario = function (u) {
	    for(var i=0; i<$scope.usuarios.length; i++){
			var usuario = $scope.usuarios[i];
			if(u.id == usuario.id){
				$scope.usuarios.splice(i, 1);
				break;
			}
		}
	};

	$scope.usuario = {id:null, nome:'', idade:'', endereco:''}
}

