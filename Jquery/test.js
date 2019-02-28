$(document).ready(()=>{
    console.log(`Hey`);
    $('#reg').click(()=>{
        $('#content').slideToggle('slow');
        $('#reg').hide();
    });
    $('#uname').mouseover(()=>{
        //$('#uname').css({'background-color':''})
        $('#uname').animate(
            {
                fontSize:'20px',
                opacity:0.4

            },500)
    });
    $('#uname').mouseout(()=>{
        $('#uname').animate(
            {
                fontSize:'13px',
                opacity:1


            },500)
    });
    $('#mail').mouseover(()=>{
        $('#mail').animate(
            {
                fontSize:'20px',
                opacity:0.4


            },500)
    });
    $('#mail').mouseout(()=>{
        $('#mail').animate(
            {
                fontSize:'13px',
                opacity:1


            },500)
    });
    $('#pswd').mouseover(()=>{
        $('#pswd').animate(
            {
                fontSize:'20px',
                opacity:0.4


            },500)
    });
    $('#pswd').mouseout(()=>{
        $('#pswd').animate(
            {
                fontSize:'13px',
                opacity:1


            },500)
    });

    $('#register').click((event)=>{
  
        let uname=$('#uname').val();
        let mail=$('#mail').val();
        let pswd=$('#pswd').val();
        let mptrn="[0-9 a-z]+@[a-z A-Z]+\\.[a-z A-Z]";
    
        let pptrn="[0-9 +a-z A-Z]";
    
        if(uname==""||mail==""||pswd=="")
        {
            event.preventDefault();
            $('#error-message').focus();
            $('#error-message').text('user name, password and mailid  cannot be left blank')

        }
        else if(!mail.match(mptrn))
        {
            event.preventDefault();
            $('#error-message').focus();
            $('#error-message').text('enter valid email id');
        }

        
        else if(!pswd.match(pptrn))
        {
            event.preventDefault();
            $('#error-message').focus();
            $('#error-message').text('Password must contain atleast  number,lowercase and uppercase letters')
        }
        

        

    });


});