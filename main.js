$(function(){
   $('.form__msg').submit(function () {
        let formID = $(this).attr('id'),
            formNm = $('#' + formID),
            message = $(formNm).find(".form__message"),
            formTitle = $(formNm).find(".form__title");
        $.ajax({
            type: "POST",
            url: './send_message_to_telegram.php',
            data: formNm.serialize(),
            success: function (data) {
              message.html(data);
              formTitle.css("display","none");
              setTimeout(function(){
                formTitle.css("display","block");
                message.html('');
                $('input').not(':input[type=submit]').val('');
                $('.input__theme').val('');
              }, 1000);
            },
            error: function (jqXHR, text, error) {
                message.html(error);
                formTitle.css("display","none");
                setTimeout(function(){
                  formTitle.css("display","block");
                  message.html('');
                  $('input').not(':input[type=submit]').val('');
                  $('.input__theme').val('');
                }, 1000);
            }
        });
        return false;
    }); 
})