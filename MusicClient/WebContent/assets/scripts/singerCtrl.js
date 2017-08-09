app
		.controller(
				'singerCtrl',
				function($scope, $rootScope, $http, $filter, $resource,
						uiGridConstants) {
					$scope.list_Song = [];
					$rootScope.listName = [];
					var baseUrl = "http://localhost:8080/MusicServer/api/";

					// get singer List
					function GetListSinger() {
						$scope.list = [];
						var Singer = $resource(baseUrl + 'singer');
						Singer.query().$promise.then(function(listSinger) {

							$scope.list = listSinger;
							$scope.gridOptions.data = listSinger;

						});

					}
					GetListSinger();
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
									name : 'singerId',
									displayName : 'Singer ID'
								},
								{
									name : 'singerName',
									displayName : 'Singer Name'
								},
								{
									name : 'description',
									displayName : 'Description'
								},
								{
									name : 'Action',
									enableSorting : false,
									enableFiltering : false,
									cellTemplate : '<button class="btn btn-primary btn-sm" ng-click="grid.appScope.GetSinger(row.entity)" data-tooltip ="tooltip" title="Edit"	data-toggle="modal" data-target="#myModal_Edit"><span class="glyphicon glyphicon-edit"></span></button>'
											+ '<button ng-click="grid.appScope.deleteSinger(row.entity)" data-toggle="modal" class="btn btn-danger btn-sm" data-tooltip ="tooltip" title="Delete" data-target="#myModal_delete"><span class="glyphicon glyphicon-remove"></span></button>'
								} ]
					};

					var alertDuration = 1800;

					

					// Add new singer
					$scope.add = function() {

						$http(
								{
									method : "POST",
									url : baseUrl + "singer",
									data : {

										singerName : $scope.add_singerName,
										description : $scope.add_description

									},

									dataType : "json",
									headers : {
										'Content-Type' : 'application/json; charset=UTF-8'
									}
								})
								.then(
										function(result) {
											if (result.status == 201) {

												$("#myModal_Add").modal("hide");
												GetListSinger();
												alertAddSucess();

											}

										},
										function(response) {
											alertFailMessage("Oops! Something went wrong, please check your input again.");
											console.log('Fail');
										});
					}

					// Load song data to edit form

					$scope.GetSinger = function(data) {
						$http
								.get(baseUrl + "singer/" + data.id)
								.then(
										function(response) {
											singerID = data.id
											$scope.edit_singerId = response.data.singerId;
											$scope.edit_singerName = response.data.singerName;
											$scope.edit_description = response.data.description;
											$scope.edit_id = data.id;
											$scope.editForm.singerId
													.$setUntouched();
											$scope.editForm.singerName
													.$setUntouched();
											$scope.editForm.description
													.$setUntouched();

										});

					}
					// Update song information
					$scope.update = function() {

						var singerData = {
							id : singerID,
							singerId : $scope.edit_singerId,
							singerName : $scope.edit_singerName,
							description : $scope.edit_description
						};

						$http(
								{
									method : "PUT",
									url : baseUrl + "singer",
									data : singerData,
									dataType : "json",
									headers : {
										'Content-Type' : 'application/json; charset=UTF-8'
									}
								})
								.then(
										function(result) {
											$("#myModal_Edit").modal("hide");
											GetListSinger();
											alertEditSucess();
										},
										function(response) {
											alertFailMessage("Oops! Something went wrong, please check your input again.");

										});
					}
					// get data for delete
					var datadelete = "";
					// get data for delete
					$scope.deleteSinger = function(data) {
						datadelete = data;
					}
					// Delete Song
					$scope.deleteSingers = function() {
						$http({
							method : "DELETE",
							url : baseUrl + "singer/" + datadelete.id
						}).then(function(result) {
							if (result.status == 202) {
								$('#myModal_delete').modal('hide');
								GetListSinger();
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
						$scope.add_singerId = "";
						$scope.add_singerName = "";
						$scope.frmFormAdd.singerId.$setUntouched();
						$scope.frmFormAdd.singerName.$setUntouched();

					}
					function getRandomInt(min, max) {
						return Math.floor(Math.random() * (max - min + 1))
								+ min;
					}
					// Auto fill in add form
					$scope.autoAdd = function(keyEvent) {
						if (keyEvent.keyCode == 81 && keyEvent.altKey) {
							var random = getRandomInt(1, 100);
							$scope.add_singerId = "A" + random;
							$scope.add_singerName = "Tiếng Anh";

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