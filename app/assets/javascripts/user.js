$(document).on('turbolinks:load', function(){
$(function(){
  
  let search_list = $("#user-search-result");
  function appendmenber(data) {
    let html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${data.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${data.id}" data-user-name="${data.name}">追加</div>
                </div>`   
    search_list.append(html);                     
  }
  function noMenberMessage(msg) {
    let html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${msg}</p>
                </div>`   
    search_list.append(html);   
  }
  
    $(".chat-group-form__search").on("keyup", function(){
      let input = $("#user-search-field").val();
      $.ajax({
        data: { keyword: input },
        dataType: "json",
        type: "GET",
        url: "/users"
      })
      .done(function(jdata){
        $("#user-search-result").empty();
        if (jdata.length !== 0){
          jdata.forEach(function(jdata){
            appendmenber(jdata);
          });
          if (input.length == 0){
            $("#user-search-result").empty();
          }
        }
        else {
          noMenberMessage("該当するメンバー無し");
        }
      })  
      .fail(function(){
        alert("error");
      });
    });
  });
});