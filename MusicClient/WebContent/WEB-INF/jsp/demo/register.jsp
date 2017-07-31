

<div class="inner-content">
	<div class="">
		<!--//pop-up-box -->
		<div class="sign-grids">
			<div class="sign text-center">

				<div class="sign-right" class="text-center">
					<form name="registerForm">

						<h3>Create your account</h3>
						<input type="text" placeholder="Enter username"
							onfocus="this.value = '';" ng-keyup="hideDuplicateAlert()"
							onblur="if (this.value == '') {this.value = 'Username';}"
							required="true" ng-model="username" name="username" id="username">
						<div ng-messages="registerForm.username.$error">
							<div ng-message="required"
								ng-show="registerForm.username.$touched">
								<span style="color: red">This field is required</span>
							</div>
							<span ng-show="duplicateAlert != ''" ng-bind="duplicateAlert"
								style="color: red"></span>
						</div>
						<input type="text" placeholder="Enter fullname"
							onfocus="this.value = '';"
							onblur="if (this.value == '') {this.value = 'Full name';}"
							required="true" ng-model="fullname" name="fullname">
						<div ng-messages="registerForm.fullname.$error">
							<div ng-message="required"
								ng-show="registerForm.fullname.$touched">
								<span style="color: red">This field is required</span>
							</div>
						</div>
						<input type="text" placeholder="Enter mobile phone"
							onfocus="this.value = '';"
							onblur="if (this.value == '') {this.value = 'Mobile phone';}"
							required="true" ng-model="phone" name="phone">
						<div ng-messages="registerForm.phone.$error">
							<div ng-message="required" ng-show="registerForm.phone.$touched">
								<span style="color: red">This field is required</span>
							</div>
						</div>
						<input type="text" placeholder="Enter email"
							onfocus="this.value = '';"
							onblur="if (this.value == '') {this.value = 'Email';}"
							required="true" ng-model="email" name="email">
						<div ng-messages="registerForm.email.$error">
							<div ng-message="required" ng-show="registerForm.email.$touched">
								<span style="color: red">This field is required</span>
							</div>
						</div>
						<input type="password" placeholder="Enter password"
							onfocus="this.value = '';"
							onblur="if (this.value == '') {this.value = 'Password';}"
							required="true" ng-model="password" name="password">
						<div ng-messages="registerForm.password.$error">
							<div ng-message="required"
								ng-show="registerForm.password.$touched">
								<span style="color: red">This field is required</span>
							</div>
						</div>
						<input type="password" placeholder="Re enter password"
							onfocus="this.value = '';"
							onblur="if (this.value == '') {this.value = 'RePassword';}"
							required="true" ng-model="repass" name="repass"
							match-password="password">
						<div ng-messages="registerForm.repass.$error">
							<div ng-message="required" ng-show="registerForm.repass.$touched">
								<span style="color: red">This field is required</span>
								<div ng-message="matchPassword">
									<p style="color: red">Must match the previous field</p>
								</div>
							</div>
						</div>
						<input type="submit" value="CREATE ACCOUNT" ng-click="Register()" ng-disabled="registerForm.username.$error.required||registerForm.phone.$error.required||registerForm.fullname.$error.required||registerForm.email.$error.required">
					</form>
				</div>
				<div class="clearfix"></div>
			</div>

		</div>
		<!--//End-albums-->
	</div>
	<!--//music-left-->
	<!--/music-right-->

	<div class="clearfix"></div>
	<!--body wrapper end-->
	<!-- /w3l-agile -->
</div>
<!--body wrapper end-->
<!--  <div class="footer">
			    				<div class="footer-grid">
			    					<h3>Navigation</h3>
			    					<ul class="list1">
			    					  <li><a href="index.html">Home</a></li>
			    					  <li><a href="radio.html">All Songs</a></li>
			    					  <li><a href="browse.html">Albums</a></li>
			    					  <li><a href="radio.html">New Collections</a></li>
			    					  <li><a href="blog.html">Blog</a></li>
			    					  <li><a href="contact.html">Contact</a></li>
			    				    </ul>
			    				</div>
			    				
			    					  
			    					 
			    					 <div class="clearfix"> </div>
			    				</div> -->

<!--footer section start-->

<!--footer section end-->
<!-- /w3l-agile -->
<!-- main content end-->
