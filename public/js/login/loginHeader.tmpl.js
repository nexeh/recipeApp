<div class="row">
	<div class="col-md-12" controller="loginController">
		Login via
		<div class="social-buttons">
			<a href="#" class="btn btn-fb"><i class="fa fa-facebook"></i> Facebook</a>
			<a href="#" class="btn btn-tw"><i class="fa fa-twitter"></i> Twitter</a>
			<a href="/auth/google" class="btn btn-gp"><i class="fa fa-google"></i> Google</a>
		</div>
        or
		 <form class="form" role="form" ng-submit="login()" accept-charset="UTF-8" id="login-nav">
				<div class="form-group">
					 <label class="sr-only" for="exampleInputEmail2">Email address</label>
					 <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email address" required ng-model="loginForm.email">
				</div>
				<div class="form-group">
					 <label class="sr-only" for="exampleInputPassword2">Password</label>
					 <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" required ng-model="loginForm.password">
                     <div class="help-block text-right"><a href="">Forget the password ?</a></div>
				</div>
				<div class="form-group">
					 <button type="submit" class="btn btn-primary btn-block">Sign in</button>
				</div>
				<div class="checkbox">
					 <label>
					 <input type="checkbox"> keep me logged-in
					 </label>
				</div>
		 </form>
	</div>
	<div class="bottom text-center">
		New here ? <a href="signup"><b>Join Us</b></a>
	</div>
</div>