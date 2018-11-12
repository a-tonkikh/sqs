var mail = $('input[name=mail]').val();
var send = true;
if (mail == "") {
  send = false;
}

dannie = {'user_mail':mail};

if(send)
{
$.post('send.php', dannie, function(otvet){
rezultat = '<div>'+otvet.text+'</div>';
$("#form_result").hide().html(rezultat).slideDown();
}, 'json');
}
