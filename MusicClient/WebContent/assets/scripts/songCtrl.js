app
		.controller(
				'songCtrl',
				function($scope, $http, $filter, $resource, uiGridConstants) {
					var baseUrl = "http://localhost:8080/MusicServer/api/";
					// get List Songs
					function GetListSong() {
						$scope.list = [];
						var Song = $resource(baseUrl+'song');
						Song.query().$promise.then(function(listSong) {

							$scope.list = listSong;
							$scope.gridOptions.data = listSong;

						});

					}
					GetListSong();
					
					// Get list album
					  function GetListAlbum() 
					  {
							 $scope.list_album = []; var
							  Album =
							  $resource(baseUrl+'album');
							  Album.query().$promise.then(function(listAlbum)
								{
								  	$scope.list_album = listAlbum;
							  	});
					  }
					  GetListAlbum();
					  // Get list singer
					  function GetListSinger() 
					  {
							  $scope.list_singer = []; var
							  Singer =
							  $resource(baseUrl+'singer');
							  Singer.query().$promise.then(function(listSinger) 
							{
								  $scope.list_singer = listSinger;		  
							});
					  }
					  GetListSinger();
					  //Get List Author
					  function GetListAuthor() 
					  {
							  $scope.list_author = []; var
							  Author =
							  $resource(baseUrl+'author');
							  Author.query().$promise.then(function(listAuthor) 
							{
								  $scope.list_author = listAuthor;		  
							});
					  }
					  GetListAuthor();
					  //Get List Genre
					  function GetListGenre() 
					  {
							  $scope.list_genre = []; var
							  Genre =
							  $resource(baseUrl+'genre');
							  Genre.query().$promise.then(function(listGenre) 
							{
								  $scope.list_genre = listGenre;		  
							});
					  }
					  GetListGenre();
					
					$scope.gridOptions = {
						noUnselect : true,
						multiSelect : false,
						enableRowSelection : true,
						enableRowHeaderSelection : false,
						enableSelectAll : false,
						enableGridMenu : true,
						enableFiltering : true,
						enableColumnResize : true,
						enableColumnMenus : false,
						paginationPageSizes : [ 15, 30, 50, 100 ],
						paginationPageSize : 15,
						columnDefs : [
								{
									name : 'id',
									displayName : 'No.'
								},
								{
									name : 'songId',
									displayName : 'SongId'
								},
								{
									name : 'songName',
									displayName : 'SongName'
								},
						
									 
								{
									name : 'lyric',
									displayName : 'Lyric'
								},
								{
									name : 'album.albumName',
									displayName : 'Album'
								},
								{
									name : 'author.authorname',
									displayName:'Author'
								},
								{
									name : 'singer.singerName',
									displayName:'Singer'
								},
								{
									name : 'genre.genreName',
									displayName:'Genre'
								},
								

								{
									name : 'Action',
									enableSorting : false,
									enableFiltering : false,
									cellTemplate : '<button class="btn btn-primary btn-sm" ng-click="grid.appScope.GetSong(row.entity)" data-tooltip ="tooltip" title="Edit"	data-toggle="modal" data-target="#myModal_Edit"><span class="glyphicon glyphicon-edit"></span></button>'
										
											+ '<button ng-click="grid.appScope.deleteSong(row.entity)" data-toggle="modal" class="btn btn-danger btn-sm" data-tooltip ="tooltip" title="Delete" data-target="#myModal_delete"><span class="glyphicon glyphicon-remove"></span></button>'
											
								} ]
					};
					
					const alertDuration = 1800;
					
					
					
					// Add new Song
					$scope.add = function(close) {
						
								
								$http(
										{
											method : "POST",
											url : baseUrl+"song",
											data : {
												
												songName : $scope.add_songName,
												lyric : $scope.add_lyric,
												author:$scope.add_authorName,
												album:$scope.add_albumName,
												genre:$scope.add_genreName,
												singer: $scope.add_singerName
											},
											dataType : "json",
											headers: { 'Content-Type': 'application/json; charset=UTF-8'}
										})
										.then(
												function(result) {
													if (result.status == 201) {

														GetListSong();
														alertAddSucess();
														if (close == true) {
															$("#myModal_Add")
																	.modal("hide");
														}
													}

												},
												function(response) {
													alertFailMessage("Oops! Something went wrong, please check your input again.");
													console.log('Fail');
												});
							}
						
							
						
							
							

					
					// Load song data to edit form
	
					$scope.GetSong = function(data) {
						$http
								.get(
										baseUrl+"song/"
												+ data.id)
								.then(
										function(response) {
										songID= data.id
											$scope.edit_songId = response.data.songId;
											$scope.edit_songName = response.data.songName
											$scope.edit_lyric = response.data.lyric;
											$scope.edit_id = data.id;
											
											$scope.editForm.songId.$setUntouched();
											$scope.editForm.songName.$setUntouched();
											$scope.editForm.lyric.$setUntouched();
											/*$scope.editForm.author.$setUntouched();
											$scope.editForm.youtube.$setUntouched();*/
											
											for (var i = 0; i < $scope.list_genre.length; i++) {
								                if (response.data.genre.genreId == $scope.list_genre[i].genreId) {
								                    $scope.edit_genreName = $scope.list_genre[i];
								                    break;
}}
											for (var i = 0; i < $scope.list_album.length; i++) {
								                if (response.data.album.albumId == $scope.list_album[i].albumId) {
								                    $scope.edit_albumName = $scope.list_album[i];
								                    break;
}}
											for (var i = 0; i < $scope.list_author.length; i++) {
								                if (response.data.author.authorId == $scope.list_author[i].authorId) {
								                    $scope.edit_authorName = $scope.list_author[i];
								                    break;
}}
											for (var i = 0; i < $scope.list_singer.length; i++) {
								                if (response.data.singer.singerId == $scope.list_singer[i].singerId) {
								                    $scope.edit_singerName = $scope.list_singer[i];
								                    break;
}}
											
											
										
										});

					}
					// Update song information
					$scope.update = function () {
						
			   	var songData={
			   			id:songID,
			   			songName:$scope.edit_songName,
			   			songId:$scope.edit_songId,
			   			lyric:$scope.edit_lyric,
			   			author:$scope.edit_authorName,
			   			singer:$scope.edit_singerName,
			   			genre:$scope.edit_genreName,
			   			album:$scope.edit_albumName
			   		
			   				};
			   	
			       $http({
			          method: "PUT",
			          url: baseUrl+"song",
			          data: songData,
			          dataType: "json",
			          headers: { 'Content-Type': 'application/json; charset=UTF-8'}
			       })
			          .then(function (result) {
			           	  $("#myModal_Edit").modal("hide");
			           	GetListSong();
			           	alertEditSucess();
			        }, function(response) {
							alertFailMessage("Oops! Something went wrong, please check your input again.");

			        });
			  }  
				
					// get data for delete
					var deleteSong ="";
					// get data for delete
					$scope.deleteSong = function(data)
					{
						deleteSong = data;
					}
					// Delete Song
					$scope.deleteSongs = function()
					{
						$http(
								{
									method : "DELETE",
									url : baseUrl+"song/"
											+ deleteSong.id
								}).then(function(result) {
							if (result.status == 202) {
								$('#myModal_delete').modal('hide');
								GetListSong();
								alertDeleteSucess();

							}
						});
					}
					
					
					// Alert when adding successfully
					function alertAddSucess() {
						swal({
							title : "",
							text : "Add successfully.",
							type : "success",
							timer : 2000,
							showConfirmButton : false
						});
					}
					// alert when delete sucessfully
					function alertDeleteSucess() {
						swal({
							title : "",
							text : "Delete successfully.",
							type : "success",
							timer : alertDuration,
							showConfirmButton : false
						});
					}
					// alert when edit successfully
					function alertEditSucess() {
						swal({
							title : "",
							text : "Edit successfully.",
							type : "success",
							timer : alertDuration,
							showConfirmButton : false
						});
					}
					function alertFailMessage(message) {
						swal({
							title : "",
							text : message,
							type : "error",
							timer : alertDuration,
							showConfirmButton : false
						});
					}
					// alert when have some input not right format
					function alertFail() {
						swal({
							title : "",
							text : "Opps! Something went wrong, please check your input again.",
							type : "error",
							timer : alertDuration,
							showConfirmButton : false
						})
						setTimeout(function() {
							location.reload();
						}, alertDuration);
					}
					// Reset form add
					$scope.ResetForm = function() {
						$scope.add_songId = "";
						$scope.add_songName = "";
						$scope.add_lyric = "";
						$scope.add_authorName="";
					
						
						
						$scope.frmFormAdd.songName.$setUntouched();
						$scope.frmFormAdd.lyric.$setUntouched();
						$scope.frmFormAdd.authorName.$setUntouched();
						
						$scope.frmFormAdd.albumName.$setUntouched();
					}
					function getRandomInt(min, max) {
						return Math.floor(Math.random() * (max - min + 1))
								+ min;
					}
					// Auto fill in add form
					$scope.autoAdd = function(keyEvent) {
						if (keyEvent.keyCode == 81 && keyEvent.altKey) {
							var random = getRandomInt(10000, 59999);
							$scope.add_songId = random;
							$scope.add_songName = "Just the way you are";
							$scope.add_lyric = " And I see your name that nothing that I would change";
							$scope.add_author="Bruno Mars";
							$scope.add_youtubelink = "https://www.youtube.com/watch?v=KtyB1UTaoaE";
						}
					}
				});