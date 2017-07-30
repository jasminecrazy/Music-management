app.controller('indexCtrl', function($scope, $http, $resource, $routeParams) {
	var baseUrl = "http://localhost:8080/MusicServer/api/";
	$scope.limit = 3;
	// get Genre List
	function GetListAlbum() {
		$scope.list = [];
		var Album = $resource(baseUrl + 'album');
		Album.query().$promise.then(function(listAlbum) {

			$scope.list = listAlbum;
		});

	}
	GetListAlbum();
	// get singer List
	function GetListSinger() {
		$scope.list_singer = [];
		var Singer = $resource(baseUrl + 'singer');
		Singer.query().$promise.then(function(listSinger) {

			$scope.list_singer = listSinger;

		});

	}
	GetListSinger();
	function GetListSong() {
		$scope.list_song = [];
		var Song = $resource(baseUrl + 'song');
		Song.query().$promise.then(function(listSong) {

			$scope.list_song = listSong;

		});

	}
	GetListSong();
	// get Genre List
	function GetListGenre() {
		$scope.list_genre = [];
		var Genre = $resource(baseUrl + 'genre');
		Genre.query().$promise.then(function(listGenre) {

			$scope.list_genre = listGenre;
			
			
		});
		

	}
	GetListGenre();
	$scope.genreDetail = function(data)
	{
		$scope.list_detail = [];	
		$http.get(
				baseUrl+"song/getGenre/"
						+ data.id).then(function(response) {
		
		for(var i =0;i<response.data.length;i++)
			{
			
			$scope.list_detail = response.data[i];
			console.log($scope.list_detail);
			
			}
		

		});
	}
});