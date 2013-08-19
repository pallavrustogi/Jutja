
$(document).ready(function(){
	
	var lv = new LoginValidator();
	var lc = new LoginController();
	//var av = new AccountValidator();
	//var hc = new HomeController();

// main login form //

	$('#login-form1').ajaxForm({
		beforeSubmit : function(formData, jqForm, options){
			console.log('beforeSubmit in login.js');
			if (lv.validateForm() == false){
				//console.log('form invalid');
				return false;
			} 	else{
			// append 'remember-me' option to formData to write local cookie //
				//formData.push({name:'remember-me', value:$("input:checkbox:checked").length == 1})
				var queryString = $.param(formData);
				//alert('About to submit: \n\n' + queryString);
				//console.log('form valid',queryString);

				return true;
			}
		},
		success	: function(responseText, status, xhr, $form){
			//console.log('success in login.js');
			if (status == 'success') lv.showLoginError('Thank You', 'Thank you for subscribing.');
			else lv.showLoginError('Thank You', 'something went wrong');
		},
		error : function(e){
			if (e.responseText == 'email-taken'){
			    lv.showLoginError('Already Registered', 'You are already registered with us');
			}
		}
	}); 
	$('#user-tf').focus();
	$('#btn-login').html('Submit');
// login retrieval form via email //
	
	var ev = new EmailValidator();
	
	$('#get-credentials-form').ajaxForm({
		url: '/lost-password',
		beforeSubmit : function(formData, jqForm, options){
			if (ev.validateEmail($('#email-tf').val())){
				ev.hideEmailAlert();
				return true;
			}	else{
				ev.showEmailAlert("<b> Error!</b> Please enter a valid email address");
				return false;
			}
		},
		success	: function(responseText, status, xhr, $form){
			ev.showEmailSuccess("Check your email on how to reset your password.");
		},
		error : function(){
			ev.showEmailAlert("Sorry. There was a problem, please try again later.");
		}
	});
	
})