app
		.controller(
				'indexCtrl',
				function($scope, $rootScope,$location,$routeParams, $http, $filter, $resource,
						uiGridConstants) {
					var baseUrl = "http://localhost:8080/MusicServer/api/";
					$scope.limit = 5;
					$scope.list_Song = [];
					const alertDuration = 2800;
					$rootScope.listName = [];
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
							$rootScope.listName = [];
							for (var i = 0; i < listSong.length; i++) {
								$scope.listName
										.push($scope.list_song[i].songName)

							}

						});

					}
					GetListSong();
				
					// Sort Array
					$rootScope.listName.sort();
					// Define Suggestions List
					$rootScope.suggestions = [];
					// Define Selected Suggestion Item
					$rootScope.selectedIndex = -1;

					// Function To Call On ng-change
					$rootScope.search = function() {
						$rootScope.suggestions = [];
						var myMaxSuggestionListLength = 0;
						for (var i = 0; i < $rootScope.listName.length; i++) {
							var searchItemsSmallLetters = angular
									.lowercase($rootScope.listName[i]);
							var searchTextSmallLetters = angular
									.lowercase($scope.searchText);
							if (searchItemsSmallLetters
									.indexOf(searchTextSmallLetters) !== -1) {
								$rootScope.suggestions
										.push(searchItemsSmallLetters);
								myMaxSuggestionListLength += 1;
								if (myMaxSuggestionListLength == 5) {
									break;
								}
							}
						}
					}

					// Keep Track Of Search Text Value During The Selection From
					// The Suggestions List
					$rootScope
							.$watch(
									'selectedIndex',
									function(val) {
										if (val !== -1) {
											$scope.searchText = $rootScope.suggestions[$rootScope.selectedIndex];
										}
									});

					// Text Field Events
					// Function To Call on ng-keydown
					$rootScope.checkKeyDown = function(event) {
						if (event.keyCode === 40) {// down key, increment
							// selectedIndex
							event.preventDefault();
							if ($rootScope.selectedIndex + 1 !== $rootScope.suggestions.length) {
								$rootScope.selectedIndex++;
							}
						} else if (event.keyCode === 38) { // up key, decrement
							// selectedIndex
							event.preventDefault();
							if ($rootScope.selectedIndex - 1 !== -1) {
								$rootScope.selectedIndex--;
							}
						} else if (event.keyCode === 13) { // enter key, empty
							// suggestions array
							event.preventDefault();
							$rootScope.suggestions = [];
						}
					}
					// Function To Call on ng-keyup
					$rootScope.checkKeyUp = function(event) {
						if (event.keyCode !== 8 || event.keyCode !== 46) {// delete
							// or
							// backspace
							if ($scope.searchText == "") {
								$rootScope.suggestions = [];
							}
						}
					}
					// ======================================

					// List Item Events
					// Function To Call on ng-click
					$rootScope.AssignValueAndHide = function(index) {
						$scope.searchText = $rootScope.suggestions[index];
						$rootScope.suggestions = [];
					}
					// ======================================
					// get Genre List
					function GetListGenre() {
						$scope.list_genre = [];
						var Genre = $resource(baseUrl + 'genre');
						Genre.query().$promise.then(function(listGenre) {

							$scope.list_genre = listGenre;

						});

					}
					GetListGenre();
					$scope.genreDetail = function(data) {
						$scope.list_detail = [];
						$http
								.get(baseUrl + "song/getGenre/" + data.id)
								.then(
										function(response) {

											for (var i = 0; i < response.data.length; i++) {

												$scope.list_detail[i] = response.data[i];
												console
														.log($scope.list_detail[i]);
											}

										});
					}
					$scope.albumDetail = function(data) {
						$scope.list_detail = [];
						$http
								.get(baseUrl + "song/getAlbum/" + data.id)
								.then(
										function(response) {

											for (var i = 0; i < response.data.length; i++) {

												$scope.list_detail[i] = response.data[i];
												console
														.log($scope.list_detail[i]);
											}

										});
					}
					function DetailSong() {
						var detail = $resource(baseUrl + 'song');
						$scope.detailSong = [];
						detail.query().$promise.then(function(data) {

							$scope.detailSong = data;

							$scope.whichSong = $routeParams.id;

						});
					}
					DetailSong();
					// Detail Song
					$scope.SongsDetail = function(data) {
						$scope.list_song_detail = [];
						$http
								.get(baseUrl + "song/" + data.id)
								.then(
										function(response) {

											for (var i = 0; i < response.data.length; i++) {

												$scope.list_song_detail[i] = response.data[i];
												console
														.log($scope.list_song_detail[i]);
											}

										});

					}
					$scope.detailSinger = function(data) {
						$rootScope.list_detailSinger = [];
						$http
								.get(baseUrl + "song/getSinger/" + data.id)
								.then(
										function(response) {

											for (var i = 0; i < response.data.length; i++) {

												$rootScope.list_detailSinger[i] = response.data[i];

											}

										});
					}
					//Get list song after genre
					$scope.detailGenre = function(data) {
						$rootScope.list_detailGenre = [];
						$http
								.get(baseUrl + "song/getGenre/" + data.id)
								.then(
										function(response) {

											for (var i = 0; i < response.data.length; i++) {

												$rootScope.list_detailGenre[i] = response.data[i];

											}

										});
					}
					$scope.Search = function() {
						$http.get(baseUrl + "song/search/" + $scope.searchText)
								.then(function(response) {

									$scope.list_searchSong = response.data;
									console.log($scope.list_searchSong);
									$location.path('search');
								});
					}
					//Open dialog request Login
					$scope.openDialog = function()
					{
						alertLogin();
					}
					function alertLogin() {
						swal({
							title : "",
							text : "Please login to add music to playlist",
							type : "info",
							timer : alertDuration,
							showCancelButton: true,
							showConfirmButton : false
						});
					}
					$scope.list_user = [];
					// get User List
					function GetListUser() {
						$scope.list_user = [];
						var User = $resource(baseUrl+'/user');
						User.query().$promise.then(function(listUser) {

							$scope.list_user = listUser;
							

						});

					}
			GetListUser();		
					//Check duplicate username
					function id_duplicate_Add(id) {
						var flag = true;
						$scope.list_user
								.forEach(function(item, index) {
									if (item.username === id) {
										$scope.duplicateAlert = "There already exists a user with this username";

										flag = false;
									}
								});
						return flag;
					}
					// Hide alert when using same username
					$scope.hideDuplicateAlert = function() {
						$scope.duplicateAlert = " ";
					}
					//Register
					$scope.Register = function(){
						if (id_duplicate_Add(document
								.getElementById("username").value)) {
							$http(
									{
										method : "POST",
										url : baseUrl+"/user",
										data : {
											username : $scope.username,
											fullname : $scope.fullname,
											password : $scope.password,
											role : {
												'id' : 2
											},
											enabled : true,
											phone : $scope.phone,
											email :$scope.email
										},

										dataType : "json"
									})
									.then(
											function(result) {
												if (result.status == 201) {

													
													alertAddSucess();
													
												}

											},
											function(response) {
												alertFailMessage("Oops! Something went wrong, please check your input again.");
												console.log('Fail');
											});
						}
					}
					// Alert when adding successfully
					function alertAddSucess() {
						swal({
							title : "",
							text : "Register successfully.",
							type : "success",
							timer : 2000,
							showConfirmButton : false
						});
					}
					// Phân trang
					$scope.currentPage = 1;
					// max size of the pagination bar
					$scope.maxPaginationSize = 10;
					$scope.itemsPerPage = 15;
					$scope.updatePageIndexes = function() {
						var totalPages = Math.ceil($scope.list_song.length
								/ $scope.maxPaginationSize);
						if (totalPages <= 10) {
							// less than 10 total pages so show all
							$scope.firstIndex = 1;
							$scope.lastIndex = totalPages;
						} else {
							// more than 10 total pages so calculate start and
							// end pages
							if ($scope.currentPage <= 6) {
								$scope.firstIndex = 1;
								$scope.lastIndex = 10;
							} else if ($scope.currentPage + 4 >= totalPages) {
								$scope.firstIndex = totalPages - 9;
								$scope.lastIndex = totalPages;
							} else {
								$scope.firstIndex = $scope.currentPage - 5;
								$scope.lastIndex = $scope.currentPage + 4;
							}
						}
						$scope.firstIndex = ($scope.currentPage - 1)
								* $scope.itemsPerPage;
						$scope.lastIndex = $scope.currentPage
								* $scope.itemsPerPage;
					};
					$scope.updatePageIndexes();

					$scope.showList = function(school, index) {
						return ((index >= $scope.firstIndex) && (index < $scope.lastIndex));
					}
				});