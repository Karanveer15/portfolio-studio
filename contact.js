var $ = function(id) 
{ 
return document.getElementById(id);
};
var validate = function()
{
	        let name=document.getElementById('name').value.trim();
            let email=document.getElementById('email').value.trim();
            let number=document.getElementById('number').value.trim();
            let location=document.getElementById('location').value.trim();
			let select=document.getElementById('select').value.trim();
            if(name=='' )
			{
                alert('Please enter your full name');
                return false;
            }
			if(email=='')
			{
				alert("Please enter your email ");
				return false;
			}
			 if(number=='')
			{
				alert("Please enter your working mobile number");
				return false;
			}
			if(location=='')
			{
				alert("Please enter a location of wedding");
				return false;
			}
			if(select=='Select an Option')
			{
				alert("Please choose an event");
				return false;
			}
			else
			{
                alert('Thank you!. We will contact you soon.');
                return true;
            }
};
window.onload = function()
{
	$("submit").onclick = validate;
	$("name").focus();
};

