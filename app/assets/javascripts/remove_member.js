$(document).on('turbolinks:load', function(){
  $(function(){
      $("#member").on("click", ".js-remove-btn", function(){
        console.log("OK");
        $(this).parent().remove();
      })
  });
});