$("#registerBtn").click(function(){
    if ($("#emailInput").val() == '')
    {
        alert('The login field must be filled in.');
    }
    
    if ($("#passwordInput").val() == '')
    {
        alert('The password field must be filled in.');
    }
    
    if ($("#repeatPasswordInput").val() == '')
    {
        alert('The repeat password field must be filled in.');
    }

    if (($("#passwordInput").val().length < 8) || ($("#passwordInput").val().length > 16))
    {
        alert('The password field must be 8-16 characters long.');
    }

    if ($("#passwordInput").val() != $("#repeatPasswordInput").val())
    {
        alert("Passwords don't match.");
    }
});