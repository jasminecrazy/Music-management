
			
				<div class="inner-content">

					<div class="music-left">
						<!--banner-section-->
						<div class="banner-section">
							<div class="banner">
								<div class="callbacks_container">
									<ul class="rslides callbacks callbacks1" id="slider4">
										<li>
											<div class="banner-img">
												<img
													src="${pageContext.request.contextPath }/assets/images/11.jpg"
													class="img-responsive" alt="">
											</div>
											<div class="banner-info">
												

											</div>

										</li>
										<li>
											<div class="banner-img">
												<img
													src="${pageContext.request.contextPath }/assets/images/22.jpg"
													class="img-responsive" alt="">
											</div>
											<div class="banner-info">
												

											</div>


										</li>
										<li>
											<div class="banner-img">
												<img
													src="${pageContext.request.contextPath }/assets/images/33.jpg"
													class="img-responsive" alt="">
											</div>
											<div class="banner-info">
											
												<h3>Let Your Home</h3>
												<p>
													Album by <span>Rock star</span>
												</p>
											</div> <!-- /w3layouts-agileits -->
										</li>
									</ul>
								</div>
								<!--banner-->
								<script
									src="${pageContext.request.contextPath }/assets/js/responsiveslides.min.js"></script>
								<script>
									// You can also use "$(window).load(function() {"
									$(function() {
										// Slideshow 4
										$("#slider4")
												.responsiveSlides(
														{
															auto : true,
															pager : true,
															nav : true,
															speed : 500,
															namespace : "callbacks",
															before : function() {
																$('.events')
																		.append(
																				"<li>before event fired.</li>");
															},
															after : function() {
																$('.events')
																		.append(
																				"<li>after event fired.</li>");
															}
														});

									});
								</script>
								<div class="clearfix"></div>
							</div>
						</div>
						<!--//End-banner-->
						<!--albums-->
						<!-- pop-up-box -->

						<script
							src="${pageContext.request.contextPath }/assets/js/jquery.magnific-popup.js"
							type="text/javascript"></script>
						<script>
							$(document).ready(function() {
								$('.popup-with-zoom-anim').magnificPopup({
									type : 'inline',
									fixedContentPos : false,
									fixedBgPos : true,
									overflowY : 'auto',
									closeBtnInside : true,
									preloader : false,
									midClick : true,
									removalDelay : 300,
									mainClass : 'my-mfp-zoom-in'
								});
							});
						</script>
						<!--//pop-up-box -->
						<div class="albums">
							<div class="tittle-head">
								<h3 class="tittle">
									New Releases <span class="new">New</span>
								</h3>
								<a href="#/song"><h4 class="tittle">See all</h4></a>
								<div class="clearfix"></div>
							</div>
							<div class="col-md-3 content-grid" data-ng-repeat="x in list_song|limitTo:8">
								<a class="play-icon popup-with-zoom-anim" href="#/detailSong/{{list_song.indexOf(x)}}"><img
									src="${pageContext.request.contextPath }/assets/images/{{x.picture}}" width="300" height="200" title="allbum-name">{{x.songName}}</a>
							</div>
							
							<div class="clearfix"></div>
						</div>
						<!--//End-albums-->
						<!--//discover-view-->

						
						<!--//discover-view-->
					</div>
					<!--//music-left-->
					<!--/music-right-->
					<div class="music-right">
		<!--/video-main-->
		<div class="video-main">
			<div class="video-record-list">
				<div id="jp_container_1" class="jp-video jp-video-270p"
					role="application" aria-label="media player">
					<div class="jp-type-playlist">


						<div class="jp-playlist">
						<h3>Maybe you like</h3>
							<ul style="display: block;" data-ng-repeat="x in list_song|limitTo:limit">
								<li class="">
									<div>
										<a href="javascript:;" class="jp-playlist-item-remove"
											style="display: none;"></a> <a href="#/detailSong/{{list_song.indexOf(x)}}"
											class="jp-playlist-item jp-playlist-current" tabindex="0">
											{{x.songName}} <span class="jp-artist">by
												{{x.author.authorname}}</span>
										</a>
									</div>
								</li>

							</ul>
						</div>

					</div>
				</div>
			</div>
		</div>
		<!-- script for play-list -->
		<link
			href="${pageContext.request.contextPath }/assets/css/jplayer.blue.monday.min.css"
			rel="stylesheet" type="text/css" />
		<script type="text/javascript"
			src="${pageContext.request.contextPath }/assets/js/jquery.jplayer.min.js"></script>
		<script type="text/javascript"
			src="${pageContext.request.contextPath }/assets/js/jplayer.playlist.min.js"></script>

		<!-- //script for play-list -->



		<div class="review-slider">
			<div class="tittle-head">
				<!-- <h3 class="tittle">Featured Albums <span class="new"> New</span></h3> -->
				<div class="clearfix"></div>
			</div>
			<ul id="flexiselDemo1">
				<li><a href="single.html"><img src="images/v1.jpg" alt="" /></a>
					<div class="slide-title">
						<h4>Adele21
					</div>
					<div class="date-city">
						<h5>Jan-02-16</h5>
						<div class="buy-tickets">
							<a href="single.html">READ MORE</a>
						</div>
					</div></li>
				<li><a href="single.html"><img src="images/v2.jpg" alt="" /></a>
					<div class="slide-title">
						<h4>Adele21</h4>
					</div>
					<div class="date-city">
						<h5>Jan-02-16</h5>
						<div class="buy-tickets">
							<a href="single.html">READ MORE</a>
						</div>
					</div></li>
				<li><a href="single.html"><img src="images/v3.jpg" alt="" /></a>
					<div class="slide-title">
						<h4>Shomlock</h4>
					</div>
					<div class="date-city">
						<h5>Jan-02-16</h5>
						<div class="buy-tickets">
							<a href="single.html">READ MORE</a>
						</div>
					</div></li>
				<li><a href="single.html"><img src="images/v4.jpg" alt="" /></a>
					<div class="slide-title">
						<h4>Stuck on a feeling</h4>
					</div>
					<div class="date-city">
						<h5>Jan-02-16</h5>
						<div class="buy-tickets">
							<a href="single.html">READ MORE</a>
						</div>
					</div></li>
				<li><a href="single.html"><img src="images/v5.jpg" alt="" /></a>
					<div class="slide-title">
						<h4>Ricky Martine</h4>
					</div>
					<div class="date-city">
						<h5>Jan-02-16</h5>
						<div class="buy-tickets">
							<a href="single.html">READ MORE</a>
						</div>
					</div></li>
				<li><a href="single.html"><img src="images/v6.jpg" alt="" /></a>
					<div class="slide-title">
						<h4>Ellie Goluding</h4>
					</div>
					<div class="date-city">
						<h5>Jan-02-16</h5>
						<div class="buy-tickets">
							<a href="single.html">READ MORE</a>
						</div>
					</div></li>
				<li><a href="single.html"><img src="images/v6.jpeg" alt="" /></a>
					<div class="slide-title">
						<h4>Fifty Shades</h4>
					</div>
					<div class="date-city">
						<h5>Jan-02-16</h5>
						<div class="buy-tickets">
							<a href="single.html">READ MORE</a>
						</div>
					</div></li>
			</ul>
			<script type="text/javascript">
				$(window).load(function() {

					$("#flexiselDemo1").flexisel({
						visibleItems : 5,
						animationSpeed : 1000,
						autoPlay : true,
						autoPlaySpeed : 3000,
						pauseOnHover : false,
						enableResponsiveBreakpoints : true,
						responsiveBreakpoints : {
							portrait : {
								changePoint : 480,
								visibleItems : 2
							},
							landscape : {
								changePoint : 640,
								visibleItems : 3
							},
							tablet : {
								changePoint : 800,
								visibleItems : 4
							}
						}
					});
				});
			</script>
			<script type="text/javascript"
				src="${pageContext.request.contextPath }/assets/js/jquery.flexisel.js"></script>
		</div>
	</div>
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
	