$(document).on('turbolinks:load', function(){
$(function(){
  function buildHTML(message){
    
    let img = message.image ? `<img src= ${ message.image }` : "";
    let html = `<div class="main__contents">
                  <div class="main__contents--talkr">
                    ${message.name}
                  </div>
                  <div class="main__contents--time">
                    ${message.created_at}
                  </div>
                  <div class="main__contents--messages">
                  ${message.body}
                  ${img}
                  </div>
                </div>`
    return html;                
  } 
  $('.new_message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $(".main__display").append(html)
      $(".new_message")[0].reset();
      $('.main__display').animate({scrollTop: $('.main__display')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
    })  
    .always(function(data){
      $('.submit-btn').prop('disabled', false);
    })  
  });
});
});