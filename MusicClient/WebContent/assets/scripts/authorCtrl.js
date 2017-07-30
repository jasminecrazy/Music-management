app
		.controller(
				'authorCtrl',
				function($scope, $http, $filter, $resource, uiGridConstants) {
					
					
					var baseUrl = "http://localhost:8080/MusicServer/api/";
					      
					// get author List
					function GetListAuthor() {
						$scope.list = [];
						var Author = $resource(baseUrl+'author');
						Author.query().$promise.then(function(listAuthor) {

							$scope.list = listAuthor;
							$scope.gridOptions.data = listAuthor;

						});

					}
					GetListAuthor();
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
									name : 'authorId',
									displayName : 'Author ID'
								},
								{
									name : 'authorname',
									displayName : 'Author Name'
								},
								{
									name : 'Action',
									enableSorting : false,
									enableFiltering : false,
									cellTemplate : '<button class="btn btn-primary btn-sm" ng-click="grid.appScope.GetAuthor(row.entity)" data-tooltip ="tooltip" title="Edit"	data-toggle="modal" data-target="#myModal_Edit"><span class="glyphicon glyphicon-edit"></span></button>'
											+ '<button ng-click="grid.appScope.deleteAuthor(row.entity)" data-toggle="modal" class="btn btn-danger btn-sm" data-tooltip ="tooltip" title="Delete" data-target="#myModal_delete"><span class="glyphicon glyphicon-remove"></span></button>'
								} ]
					};

					var alertDuration = 1800;
					// Check authorId
					function id_duplicate_Add(id) {
						var flag = true;
						$scope.list
								.forEach(function(item, index) {
									if (item.authorId === id) {
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

					// Add new author
					$scope.add = function() {
							$http(
									{
										method : "POST",
										url : baseUrl+"author",
										data : {
											authorname : $scope.add_authorName
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
													GetListAuthor();
													alertAddSucess();
												}
											},
											function(response) {
												alertFailMessage("Oops! Something went wrong, please check your input again.");
												console.log('Fail');
											});
						

					}
					// Load song data to edit form

					$scope.GetAuthor = function(data) {
						$http.get(
								baseUrl+"author/"
										+ data.id).then(function(response) {
							authorID = data.id
							$scope.edit_authorId = response.data.authorId;
							$scope.edit_authorName = response.data.authorname;

							$scope.edit_id = data.id;
							$scope.editForm.authorId.$setUntouched();
							$scope.editForm.authorName.$setUntouched();

						});

					}
					// Update song information
					$scope.update = function() {

						var authorData = {
							id : authorID,
							authorId : $scope.edit_authorId,
							authorname : $scope.edit_authorName
						};

						$http(
								{
									method : "PUT",
									url : baseUrl+"author",
									data : authorData,
									dataType : "json",
									headers : {
										'Content-Type' : 'application/json; charset=UTF-8'
									}
								})
								.then(
										function(result) {
											$("#myModal_Edit").modal("hide");
											GetListAuthor();
											alertEditSucess();
										},
										function(response) {
											alertFailMessage("Oops! Something went wrong, please check your input again.");

										});
					}
					// get data for delete
					var datadelete = "";
					// get data for delete
					$scope.deleteAuthor = function(data) {
						datadelete = data;
					}
					// Delete Song
					$scope.deleteAuthors = function() {
						$http(
								{
									method : "DELETE",
									url : baseUrl+"author/"
											+ datadelete.id
								}).then(function(result) {
							if (result.status == 202) {
								$('#myModal_delete').modal('hide');
								GetListAuthor();
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
						$scope.add_authorId = "";
						$scope.add_authorName = "";
						
						$scope.frmFormAdd.authorName.$setUntouched();
						

					}
					function getRandomInt(min, max) {
						return Math.floor(Math.random() * (max - min + 1))
								+ min;
					}
					// Auto fill in add form
					$scope.autoAdd = function(keyEvent) {
						if (keyEvent.keyCode == 81 && keyEvent.altKey) {
							var random = getRandomInt(1, 100);
							$scope.add_authorId = "A" + random;
							$scope.add_authorName = "Tiếng Anh";

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