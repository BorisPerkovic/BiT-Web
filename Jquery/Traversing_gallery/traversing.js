$(document).ready(function () {

  $("#selectImg").click( function() {
    
    function removeAddClass() {
      $selected.removeClass("selected");
      $firstChildren.addClass("selected");
    }
    var $selected = $(".selected");
    var $gallery = $selected.parent();
    var $firstSibling = $gallery.siblings('div').first();
    var $children = $firstSibling.children();
    var $firstChildren = $children.eq(1);
    removeAddClass();

  });
  
  
});