
function LoginValidator(){

// bind a simple alert window to this controller to display any errors //

	this.loginErrors = $('.modal-alert');
	this.loginErrors.modal({ show : false, keyboard : true, backdrop : true });

	this.showLoginError = function(t, m)
	{
		$('.modal-alert .modal-header h3').text(t);
		$('.modal-alert .modal-body p').text(m);
		this.loginErrors.modal('show');
	}
	this.validateEmail = function(e)
	{
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(e);
	}

}



LoginValidator.prototype.validateForm = function()
{
	console.log('LoginValidator in loginValidator.js');
	if ($('#user-tf').val() == ''){
		this.showLoginError('Whoops!', 'Please enter a valid username');
		return false;
	}	else if ($('#email-tf').val() == ''){
		this.showLoginError('Whoops!', 'Please enter a valid email');
		return false;
	}	else if (this.validateEmail($('#email-tf').val())==false){
			this.showLoginError('Whoops!', 'Please enter a valid email');
		return false;
	}
		else{
		
		return true;
	}
}