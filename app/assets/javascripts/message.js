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
                  <div class="main__contents--messages" data-id="${message.id}"} >
                  ${message.body}
                  ${img}
                  </div>
                </div>`
    return html;                
  } 
  
  let reloadMessages = function(){
    last_message_id = $(".main__contents--messages:last").data("id");
    
      $.ajax({
        url:      "api/messages",
        type:     "GET",
        dataType: "json",
        data:     {id: last_message_id},
        processData: false,
        contentType: false
      })
      .done(function(datas){
        
        insertHTML = ""
        datas.forEach(function(data){
          console.log(data.id);
        });
      })
      .fail(function(){
        console.log("NG");
      })
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
      reloadMessages();
    })
    .fail(function(){
      alert('error');
    })  
    .always(function(data){
      $('.submit-btn').prop('disabled', false);
    })  
  });
  setInterval(reloadMessages, 2000);
});
});