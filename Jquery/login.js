$(document).ready(()=>{
    // login button
    $('#login').click((event)=>{
        // event.preventDefault();
        // console.log(event);
        // console.log('login clicked');
        let user = $('#username').val();
        let pwd = $('#password').val();
        
        if(user == ""){
            // cease the default behavior submit button
            event.preventDefault();
            $('#username').focus();
            $('#username').addClass('input-error');
            $('#error-message').text('Username cannot be left blank');
        }else if(pwd == ""){
            // cease the default behavior submit button
            event.preventDefault();
            $('#password').addClass('input-error');
            $('#password').focus();
            $('#error-message').text('Password cannot be left blank');
        }
        $('#uname').html(user);
    });
});






































/*$(document).ready(()=>
$('#login').click((event)=>{
    let user=$('#username').val();
    let password=$('#password').val();
    console.log('user');
if(user=="")
{
    event.preventDefault();
    $('#username').focus();
    $('#username').addClass('input-error');
    $('error-message').text('username cannot be left blank');
}else if(pwd=="")
{
    event.preventDefault();
    $('#password').addClass('input-error');
    $('#password').focous();
    $('#error-message').text('Password cannot be left blank');

}

});
});*/