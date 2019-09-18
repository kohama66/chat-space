$(document).on('turbolinks:load', function(){
  $(function(){
    
    let search_list = $("#chat-group-form__field--right");
    function addNewMnmber(name, id) {
      let html =  `<div class='chat-group-user'>
                    <input name='group[user_ids][]' type='hidden' value='${id}'>
                    <p class='chat-group-user__name'>${name}</p>
                    <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                  </div>`
      search_list.append(html)
    }
    
    
    
    $("#new_group").on("click", ".user-search-add", function(){
      $(this).parent().remove();
      newMemberId = $(this).attr("data-user-id");
      newMemberName = $(this).attr("data-user-name");
      $.ajax({
        data: { 
          newMemberId,
          newMemberName 
        },
        dataType: "json",
        type: "GET",
        url: "/users"
      })
      .done(function(jdata){
        addNewMnmber(newMemberName, newMemberId);
        // jdata.forEach(function(jdata){
        //   addNewMnmber(newMember);
        // });
      })
      .fail(function(){
        console.log("ng");
      })
    });
  
  
  });
});