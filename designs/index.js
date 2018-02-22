$(function(){

  AOS.init({
    duration: 1200,
  })

  $('.navLogo').hide();

  $(window).on('scroll',function(e){
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    
    console.log(scroll);
    
    if(scroll >= 100){
      $('.titleWelcome').hide();
      $('.navLogo').css('display','inline');
      $('.navBar').addClass(['scrolled','scrolledshadow']);
      $('.navli').css('color','black');
  
    }else{
      $('.titleWelcome').show();
      $('.navLogo').css('display','none');
      $('.navBar').removeClass(['scrolled','scrolledshadow']);
      $('.navli').css('color','white');
    }
  })
  


});

function openNav() {
  $("#mySidenav").css('width', '250px');
}

function closeNav() {
  $("#mySidenav").css('width','0');
}