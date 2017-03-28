// 7
$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
  $('.row-offcanvas').toggleClass('active');
  });
});

// 8
$(function(){

  $('#tesis').click(function(e){
    e.preventDefault();
      $('#mytabs a[href="#tesis_tab"]').tab('show');
  })

  $('#libro').click(function(e){
    e.preventDefault();
      $('#mytabs a[href="#libro_tab"]').tab('show');
  })

  $('#cap').click(function(e){
    e.preventDefault();
      $('#mytabs a[href="#cap_tab"]').tab('show');
  })

  $('#investigacion').click(function(e){
    e.preventDefault();
      $('#mytabs a[href="#inv_tab"]').tab('show');
  })

  $('#arbitrados').click(function(e){
    e.preventDefault();
      $('#mytabs a[href="#arb_tab"]').tab('show');
  })

  $('#indexados').click(function(e){
    e.preventDefault();
      $('#mytabs a[href="#index_tab"]').tab('show');
  })
  $('#ponencia').click(function(e){
    e.preventDefault();
      $('#mytabs a[href="#pon_tab"]').tab('show');
  })

  $('#material').click(function(e){
    e.preventDefault();
      $('#mytabs a[href="#mat_tab"]').tab('show');
  })

  $('#profesor').click(function(e){
    e.preventDefault();
      $('#mytabs a[href="#prof_tab"]').tab('show');
  })

})
