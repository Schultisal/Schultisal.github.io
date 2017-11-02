$(function() {
// slide-toggle/dropdown button?

  $(".dropbtn").click(myDropdown);


    function myDropdown() {
      $("#myDropdown a").slideToggle();
      console.log('clicked button');
    };

 });