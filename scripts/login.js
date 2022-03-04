$("#loginBtn").click(function(){
    if ($("#loginInput").val() == '')
    {
        alert('The login field must be filled in.');
    }

    if ($("#passwordInput").val() == '')
    {
        alert('The password field must be filled in.');
    }
});

// $(document).ready(function () {
//     $(".load2").click(function () {
//         alert('jQuery подключен и отлично работает!');
//     });
// });