app
		.controller(
				'genreCtrl',
				function($scope,$rootScope, $http, $filter, $resource, uiGridConstants) {
					$scope.list_Song = [];
					$rootScope.listName = [];
					var baseUrl = "http://localhost:8080/MusicServer/api/";
					      
					// get Genre List
					function GetListGenre() {
						$scope.list = [];
						var Genre = $resource(baseUrl+'genre');
						Genre.query().$promise.then(function(listGenre) {

							$scope.list = listGenre;
							$scope.gridOptions.data = listGenre;

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
									name : 'genreId',
									displayName : 'Genre ID'
								},
								{
									name : 'genreName',
									displayName : 'Genre Name'
								},
								{
									name : 'Action',
									enableSorting : false,
									enableFiltering : false,
									cellTemplate : '<button class="btn btn-primary btn-sm" ng-click="grid.appScope.GetGenre(row.entity)" data-tooltip ="tooltip" title="Edit"	data-toggle="modal" data-target="#myModal_Edit"><span class="glyphicon glyphicon-edit"></span></button>'
											+ '<button ng-click="grid.appScope.deleteGenre(row.entity)" data-toggle="modal" class="btn btn-danger btn-sm" data-tooltip ="tooltip" title="Delete" data-target="#myModal_delete"><span class="glyphicon glyphicon-remove"></span></button>'
								} ]
					};

					var alertDuration = 1800;
					// Check genreId
					function id_duplicate_Add(id) {
						var flag = true;
						$scope.list
								.forEach(function(item, index) {
									if (item.genreId === id) {
										$scope.duplicateAlert = "There already exists a song with this ID";

										flag = false;
									}
								});
						return flag;
					}
					// Hide alert when using same SongID
					$scope.hideDuplicateAlert = function() {
						$scope.duplicateAlert = " ";
					}

					// Add new Genre
					$scope.add = function() {
						if (id_duplicate_Add(document.getElementById("genreId").value)) {

							$http(
									{
										method : "POST",
										url : baseUrl+"genre",
										data : {
											
											genreName : $scope.add_genreName

										},

										dataType : "json",
										headers : {
											'Content-Type' : 'application/json; charset=UTF-8'
										}
									})
									.then(
											function(result) {
												if (result.status == 201) {

													$("#myModal_Add").modal(
															"hide");
													GetListGenre();
													alertAddSucess();

												}

											},
											function(response) {
												alertFailMessage("Oops! Something went wrong, please check your input again.");
												console.log('Fail');
											});
						}

					}
					// Load song data to edit form

					$scope.GetGenre = function(data) {
						$http.get(
								baseUrl+"genre/"
										+ data.id).then(function(response) {
							genreID = data.id
							$scope.edit_genreId = response.data.genreId;
							$scope.edit_genreName = response.data.genreName;

							$scope.edit_id = data.id;
							$scope.editForm.genreId.$setUntouched();
							$scope.editForm.genreName.$setUntouched();

						});

					}
					// Update song information
					$scope.update = function() {

						var genreData = {
							id : genreID,
							genreId : $scope.edit_genreId,
							genreName : $scope.edit_genreName
						};

						$http(
								{
									method : "PUT",
									url : baseUrl+"genre",
									data : genreData,
									dataType : "json",
									headers : {
										'Content-Type' : 'application/json; charset=UTF-8'
									}
								})
								.then(
										function(result) {
											$("#myModal_Edit").modal("hide");
											GetListGenre();
											alertEditSucess();
										},
										function(response) {
											alertFailMessage("Oops! Something went wrong, please check your input again.");

										});
					}
					// get data for delete
					var datadelete = "";
					// get data for delete
					$scope.deleteGenre = function(data) {
						datadelete = data;
					}
					// Delete Song
					$scope.deleteGenres = function() {
						$http(
								{
									method : "DELETE",
									url : baseUrl+"genre/"
											+ datadelete.id
								}).then(function(result) {
							if (result.status == 202) {
								$('#myModal_delete').modal('hide');
								GetListGenre();
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
						$scope.add_genreId = "";
						$scope.add_genreName = "";
						$scope.frmFormAdd.genreId.$setUntouched();
						$scope.frmFormAdd.genreName.$setUntouched();
						

					}
					function getRandomInt(min, max) {
						return Math.floor(Math.random() * (max - min + 1))
								+ min;
					}
					// Auto fill in add form
					$scope.autoAdd = function(keyEvent) {
						if (keyEvent.keyCode == 81 && keyEvent.altKey) {
							var random = getRandomInt(1, 100);
							$scope.add_genreId = "A" + random;
							$scope.add_genreName = "Tiếng Anh";

						}
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
				});