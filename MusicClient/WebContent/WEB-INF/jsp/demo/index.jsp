<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML>
<html>
<head>
<title>Music</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="application/x-javascript">
	

	 addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } 


</script>
<!-- Bootstrap Core CSS -->
<link
	href="${pageContext.request.contextPath }/assets/css/bootstrap.min.css"
	rel="stylesheet" />

<!-- Font Awesome -->
<link
	href="${pageContext.request.contextPath }/assets/css/font-awesome.min.css"
	rel="stylesheet" />


<!-- Custom CSS -->
<link href="${pageContext.request.contextPath }/assets/css/style4.css"
	rel='stylesheet' type='text/css' />

<!-- jQuery -->
<!-- lined-icons -->
<link rel="stylesheet"
	href="${pageContext.request.contextPath }/assets/css/icon-font.css"
	type='text/css' />
<!-- //lined-icons -->
<link
	href="${pageContext.request.contextPath }/assets/css/sweetalert.css"
	rel="stylesheet" />
<!-- Meters graphs -->

<link
	href="${pageContext.request.contextPath }/assets/css/popuo-box.css"
	rel="stylesheet" type="text/css" media="all" />
<style type="text/css">
.menu ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
}

.menu ul li {
	float: left;
	margin-right: 20px;
}

.menu ul li a {
	display: inline-block;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
}

.menu ul li a:hover {
	background-color: #111;
}

.menu li ul a {
	background: #444;
	width: 200px;
	text-align: left;
}

.menu li ul {
	position: absolute;
	display: none;
	width: 200px;
}

.menu li ul li {
	float: none;
}

.menu li:hover ul {
	display: block;
}
</style>

</head>
<!-- /w3layouts-agile -->
<body class="sticky-header left-side-collapsed" onload="initMap()"
	data-ng-app="myApp" data-ng-controller="indexCtrl">
	<section>
		<!-- left side start-->
		<div class="left-side sticky-left-side">

			<!--logo and iconic logo start-->
			<div class="logo">
				<h1>
					<a href="#/">Musi<span>c</span></a>
				</h1>
			</div>
			<div class="logo-icon text-center">
				<a href="#/">M </a>
			</div>
			<!-- /w3l-agile -->
			<!--logo and iconic logo end-->
			<div class="left-side-inner">

				<!--sidebar nav start-->
				<ul class="nav nav-pills nav-stacked custom-nav">
					<li class="active"><a href="#/"><i class="lnr lnr-home"></i><span>Home</span></a></li>


					<li><a href="#/singer"><i class="lnr lnr-users"></i> <span>Artists</span></a></li>
					<li><a href="#/"><i class="lnr lnr-music-note"></i> <span>Albums</span></a></li>
					<li class="menu-list"><a href="" ng-click="openDialog()"><i
							class="lnr lnr-heart"></i> <span>My Favourite</span></a>
						<ul class="sub-menu-list">
							<li><a ng-click="openDialog()">All Songs</a></li>
						</ul></li>

				</ul>
				<!--sidebar nav end-->
			</div>
		</div>

		<!-- /w3layouts-agile -->
		<!-- app-->
		<div class="modal fade" id="myModal1" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel">
			<div class="modal-dialog facebook" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="app-grids">
							<div class="app">
								<div class="col-md-5 app-left mpl">
									<h3>Mosaic mobile app on your smartphone!</h3>
									<p>Download and Avail Special Songs Videos and Audios.</p>
									<div class="app-devices">
										<h5>Gets the app from</h5>
										<a href="#"><img src="images/1.png" alt=""></a> <a
											href="#"><img src="images/2.png" alt=""></a>
										<div class="clearfix"></div>
									</div>
								</div>
								<div class="col-md-7 app-image">
									<img src="images/apps.png" alt="">
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- //app-->
		<!-- /w3l-agile -->
		<!-- signup -->
		<div class="modal fade" id="myModal5" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content modal-info">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body modal-spa">
						<div class="sign-grids">
							<div class="sign">

								<div class="sign-right">
									<form action="#" method="post">

										<h3>Create your account</h3>
										<input type="text" value="Name" onfocus="this.value = '';"
											onblur="if (this.value == '') {this.value = 'Name';}"
											required=""> <input type="text" value="Mobile number"
											onfocus="this.value = '';"
											onblur="if (this.value == '') {this.value = 'Mobile number';}"
											required=""> <input type="text" value="Email id"
											onfocus="this.value = '';"
											onblur="if (this.value == '') {this.value = 'Email id';}"
											required=""> <input type="password" value="Password"
											onfocus="this.value = '';"
											onblur="if (this.value == '') {this.value = 'Password';}"
											required=""> <input type="submit"
											value="CREATE ACCOUNT">
									</form>
								</div>
								<div class="clearfix"></div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- //signup -->
		<!-- /w3l-agile -->
		<!-- left side end-->
		<!-- main content start-->
		<div class="main-content">
			<!-- header-starts -->
			<div class="header-section">
				<!--toggle button start-->
				<a class="toggle-btn  menu-collapsed"><i class="fa fa-bars"></i></a>
				<!--toggle button end-->
				<!--notification menu start -->
				<div class="menu-right">
					<div class="profile_details">
						<div class="col-md-4 serch-part list-wrapper">
							<div>
								<form action="#" method="post">

									<input placeholder="Search"
										class="search form-control input-md"
										ng-keydown="checkKeyDown($event)"
										ng-keyup="checkKeyUp($event)" ng-model="searchText"
										ng-change="search()" type="search" name="search" id="search">
									<ul class="suggestions-list">
										<li ng-repeat="suggestion in suggestions track by $index"
											ng-class="{active : selectedIndex === $index}"
											ng-click="AssignValueAndHide($index)" ng-bind="suggestion"></li>
									</ul>
									<input class="sb-search-submit" type="submit" value="">
									<span class="sb-icon-search" ng-click="Search()"> </span>
								</form>
							</div>
						</div>
						<!-- search-scripts -->
						<script
							src="${pageContext.request.contextPath }/assets/js/classie.js"></script>
						<script
							src="${pageContext.request.contextPath }/assets/js/uisearch.js"></script>
						<script>
							new UISearch(document.getElementById('sb-search'));
						</script>
						<!-- //search-scripts -->
						<!---->
						<div class="col-md-5 ">
							<div class="menu" style="padding: 7px;">
								<ul>
									<li><a href="#/">Album</a>
										<ul>
											<li data-ng-repeat="x in list"><a
												href="#/detail/{{x.id}}" ng-click="albumDetail(x)">{{x.albumName}}</a></li>

										</ul></li>
									<li><a href="#/singer">Singer</a></li>
									<li><a href="#/song">Songs</a></li>
									<li><a href="#/genre">Genre</a>
										<ul>
											<li data-ng-repeat="x in list_genre"><a
												href="#/detail/{{x.id}}" ng-click="genreDetail(x)">{{x.genreName}}</a></li>

										</ul></li>
								</ul>
							</div>
							<!---->


						</div>
						<div class="col-md-3 login-pop">
							<div id="loginpop">
								<a href="#" id="loginButton"><span>Login <i
										class="arrow glyphicon glyphicon-chevron-right"></i></span></a><!-- <a
									class="top-sign" href="#" data-toggle="modal"
									data-target="#myModal5"><i class="fa fa-sign-in"></i></a> -->
								<div id="loginBox">
									<form action='<c:url value="/j_spring_security_check"></c:url>'
										method="post" id="loginForm">
										<fieldset id="body">
											<fieldset>
												<label for="username">Username</label> <input type="text"
													name="username" id="email">
											</fieldset>
											<fieldset>
												<label for="password">Password</label> <input
													type="password" name="password" id="password">
											</fieldset>
											<input type="submit" id="login" value="Sign in"> <label
												for="checkbox"><span><a href="#/register" style="font-weight: bold">Create new account</a></span>
											</label>
										</fieldset>
										<span><a href="#">Forgot your password?</a></span>
									</form>
								</div>                                                                                                                                                                                                                                                                                                                                                                                 
							</div>

						</div>
						<div class="clearfix"></div>
					</div>
					<!---->
				</div>
				<div class="clearfix"></div>
			</div>
			<!--notification menu end -->
			<!-- //header-ends -->
			<!-- /w3l-agileits -->
			<!-- //header-ends -->
			<div id="page-wrapper">
				<div class="ng-view"></div>
			</div>
		</div>

	</section>
	<script
		src="${pageContext.request.contextPath }/assets/js/jquery-2.1.4.js"></script>
	<!-- Bootstrap -->
	<script
		src="${pageContext.request.contextPath }/assets/js/bootstrap.min.js"></script>

	<!-- Angular JS -->
	<script type="text/javascript"
		src="${pageContext.request.contextPath }/assets/js/angular.min.js"></script>


	<script type="text/javascript"
		src="${pageContext.request.contextPath }/assets/js/angular-route.min.js"></script>
	<script type="text/javascript"
		src="${pageContext.request.contextPath }/assets/js/angular-ui.min.js"></script>
	<script type="text/javascript"
		src="${pageContext.request.contextPath }/assets/js/angular-resource.min.js"></script>
	<script type="text/javascript"
		src="${pageContext.request.contextPath }/assets/js/angular-messages.min.js"></script>
	<script type="text/javascript"
		src="${pageContext.request.contextPath }/assets/js/ui-bootstrap-tpls.min.js"></script>
	<script
		src="${pageContext.request.contextPath }/assets/js/jquery.nicescroll.js"></script>
	<script src="${pageContext.request.contextPath }/assets/js/scripts.js"></script>
	<!-- Bootstrap Core JavaScript -->
	<script type="text/javascript"
		src="${pageContext.request.contextPath }/assets/js/sweetalert-dev.js"></script>
	<script
		src="${pageContext.request.contextPath }/assets/js/bootstrap.min.js"></script>
	<script type="text/javascript"
		src="${pageContext.request.contextPath }/assets/scripts/myApp.js"></script>

	<script type="text/javascript"
		src="${pageContext.request.contextPath }/assets/scripts/indexCtrl.js"></script>
	<script src="${pageContext.request.contextPath }/assets/js/ui-grid.js"></script>
</body>
</html>