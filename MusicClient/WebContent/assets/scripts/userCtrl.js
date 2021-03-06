app
		.controller(
				'userCtrl',
				function($scope, $http, $filter, $resource, uiGridConstants) {
					$scope.list = [];
var baseUrl = "http://localhost:8080/MusicServer/api";
					// get User List
					function GetListUser() {
						$scope.list = [];
						var User = $resource(baseUrl+'/user');
						User.query().$promise.then(function(listUser) {

							$scope.list = listUser;
							$scope.gridOptions.data = listUser;

						});

					}
					GetListUser();
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
									name : 'fullname',
									displayName : 'Fullname'
								},
								{
									name : 'username',
									displayName : 'Username'
								},
								{
									name : 'role.roleName',
									displayName : 'Role'
								},
								{
									name:'email',
									displayName:'Email'
								},
								{
									name:'phone',
									displayName:'Phone'
								},

								{
									name : 'enabled',
									displayName : 'Status',
									visible : true,
									cellTemplate : '<div class="ui-grid-cell-contents">{{row.entity.enabled == 0 ? "Inactive" : "Active"}}</div>',
									filter : {
										type : uiGridConstants.filter.SELECT,
										selectOptions : [ {
											value : 'true',
											label : 'Active'
										}, {
											value : 'false',
											label : 'Inactive'
										} ]
									}
								},
								{
									name : 'Action',
									enableSorting : false,
									enableFiltering : false,
									cellTemplate : '<button class="btn btn-primary btn-sm" ng-click="grid.appScope.GetUser(row.entity)" data-tooltip ="tooltip" title="Edit"	data-toggle="modal" data-target="#myModal_edit"><span class="glyphicon glyphicon-edit"></span></button>'
											+ '<button ng-click="grid.appScope.deleteUser(row.entity)" data-toggle="modal" class="btn btn-danger btn-sm" data-tooltip ="tooltip" title="Delete" data-target="#myModal_delete"><span class="glyphicon glyphicon-remove"></span></button>'
								} ]
					};
					var alertDuration = 1800;
					// Check username
					function id_duplicate_Add(id) {
						var flag = true;
						$scope.list
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
					// Add new user
					$scope.save = function(close) {
						if (id_duplicate_Add(document
								.getElementById("username").value)) {
							$http(
									{
										method : "POST",
										url : baseUrl+"/user",
										data : {
											username : $scope.add_username,
											fullname : $scope.add_fullname,
											password : $scope.add_password,
											role : {
												'id' : $scope.add_role
											},
											enabled : $scope.status,
											phone : $scope.add_phone,
											email :$scope.add_email
										},

										dataType : "json"
									})
									.then(
											function(result) {
												if (result.status == 201) {

													GetListUser();
													alertAddSucess();
													if (close == true) {
														$("#myModal_add")
																.modal("hide");
													}
												}

											},
											function(response) {
												alertFailMessage("Oops! Something went wrong, please check your input again.");
												console.log('Fail');
											});
						}

					}
					// Reset form add
					$scope.resetFormAdd = function() {
						$scope.add_username = "";
						$scope.add_fullname = "";
						$scope.add_password = "";
					$scope.add_email = "";
					$scope.add_phone ="";
						$scope.frmUserAdd.fullname.$setUntouched();
						$scope.frmUserAdd.username.$setUntouched();
						$scope.frmUserAdd.password.$setUntouched();
						$scope.frmUserAdd.email.$setUntouched();
						$scope.frmUserAdd.phone.$setUntouched();
					}
					function getRandomInt(min, max) {
						return Math.floor(Math.random() * (max - min + 1))
								+ min;
					}
					// Auto fill in add form
					$scope.autoAdd = function(keyEvent) {
						if (keyEvent.keyCode == 81 && keyEvent.altKey) {
							var random = getRandomInt(1, 10000);
							$scope.add_username = "Jackson" + random;
							$scope.add_fullname = "Jackson Samatha";
							$scope.add_password = "123456";
							$scope.add_email ="suongpham@gmail.com";
							$scope.add_phone = "012233";

						}
					}
					// Load data to edit form
					$scope.GetUser = function(data) {
						$http.get(
								baseUrl+"/user/"
										+ data.id).then(function(response) {
							userID = data.id;
							$scope.edit_username = response.data.username;
							$scope.edit_fullname = response.data.fullname
							$scope.edit_status = response.data.enabled;
							$scope.edit_id = data.id;
							$scope.edit_role = response.data.role.id;
							$scope.edit_password = response.data.password;
							$scope.edit_phone = response.data.phone;
							$scope.edit_email = response.data.email;
							$scope.editForm.fullname.$setUntouched();
							$scope.editForm.username.$setUntouched();
							$scope.editForm.password.$setUntouched();

						});

					}
					// Edit user information
					$scope.update = function() {

						var userData = {
							id : userID,
							username : $scope.edit_username,
							fullname : $scope.edit_fullname,
							enabled : ($scope.edit_status == null ? false
									: ($scope.edit_status == false ? false
											: true)),
							password : $scope.edit_password,
							email:$scope.edit_email,
							phone : $scope.edit_phone,
							role : {
								'id' : $scope.edit_role
							}
						};

						$http(
								{
									method : "PUT",
									url : baseUrl+"/user",
									data : userData,
									dataType : "json",
									headers : {
										'Content-Type' : 'application/json; charset=UTF-8'
									}
								})
								.then(
										function(result) {
											$("#myModal_edit").modal("hide");
											GetListUser();
											alertEditSucess();
										},
										function(response) {
											alertFailMessage("Oops! Something went wrong, please check your input again.");

										});
					}
					var deleteUser = "";
					// get data for delete
					$scope.deleteUser = function(data) {
						deleteUser = data;
					}
					// Delete user
					$scope.deleteUsers = function() {
						$http(
								{
									method : "DELETE",
									url : baseUrl+"/user/"
											+ deleteUser.id
								}).then(function(result) {
							if (result.status == 202) {
								$('#myModal_delete').modal('hide');
								GetListUser();
								alertDeleteSucess();

							}
						});
					}
					// Form Reset
					$scope.ResetPass = function() {
						$http
								.get(
										"http://localhost:8080/WebServer/api/user/"
												+ $scope.edit_id)
								.then(
										function(response) {
											userID = $scope.edit_id;
											$scope.reset_username = response.data.username;
											$scope.reset_id_role = response.data.role.id;
											$scope.reset_fullname =response.data.fullname;
											$scope.reset_status = response.data.enabled
										

										});
					}
					// Reset password for user

					$scope.ResetPassword = function() {

						var dataUser = {
							id : userID,
							password : $scope.newPassword,
							role : {
								'id' : $scope.reset_id_role
							},
							username:$scope.reset_username,
							fullname:$scope.reset_fullname,
							enabled :$scope.reset_role
						};
						$http(
								{
									method : "PUT",
									url : "http://localhost:8080/WebServer/api/user/resetpass",
									data : dataUser,
									dataType : "json"
								}).then(function(result) {
							$("#myModal_confirmReset").modal("hide");
							resetAlert();
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
					function alertFailMessage(message) {
						swal({
							title : "",
							text : message,
							type : "error",
							timer : alertDuration,
							showConfirmButton : false
						});
					}
					function resetAlert() {
						swal({
							title : "",
							text : "Reset successfully.",
							type : "success",
							timer : 2000,
							showConfirmButton : false
						});
					}

				});