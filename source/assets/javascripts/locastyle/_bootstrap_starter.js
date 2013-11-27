//
// Execução de funções do Bootstrap
// Se tiver alguma função do bootstrap que precisa ser iniciada logo de cara, use aqui.
var locastyle = locastyle || {};

locastyle.bootstrap = (function() {
  'use strict';

  function init(){
    startTooltip();
    startPopover();
  }

  function startTooltip() {
   $("[data-toggle='tooltip']").tooltip();
  }

  function startPopover() {
    var $popovers = $("[data-toggle='popover']");
    $("[data-toggle='popover'][data-inherit]").on('shown.bs.popover', function (e) {
      var inheritedProperty = $(this).data('inherit');
      var apply = $(this).data('inherit-apply') || 'color';
      if( $(this).attr('class').match(/(ico)/) ){
        var inheritedValue = window.getComputedStyle(this,':before')[inheritedProperty]; // ie9+
      } else {
        var inheritedValue = $(this).css(inheritedProperty);
      }
      var $popover = $(this).data('bs.popover')
      $popover.$tip.find('.popover-title').css( apply, inheritedValue );
      $($popover.$tip[0]).find('a').css('color', inheritedValue );
      if( apply === 'background'){
        $popover.$tip.find('.popover-title').css( 'color', 'white' );
      }
    });
    $popovers.popover();
  }

  return {
    init: init
  };

}());
