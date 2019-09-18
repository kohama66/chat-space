$(document).on('turbolinks:load', function(){
$(function(){
  
  let search_list = $("#chat-group-form__field");
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
  
    $("#new_group").on("keyup", function(){
      let input = $(".chat__group_name").val();
      
      $.ajax({
        data: { keyword: input },
        dataType: "json",
        type: "GET",
        url: "/users"
      })
      .done(function(data){
        console.log(input.length);
        $("#chat-group-form__field").empty();
        if (data.length !== 0){
          data.forEach(function(data){
            appendmenber(data);
          });
          if (input.length == 0){
            $("#chat-group-form__field").empty();
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