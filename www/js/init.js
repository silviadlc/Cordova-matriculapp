(function($){
  $(function(){
      
    //init GUI
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
  	// els tabs necessiten ser swipeable

    var options = { "swipeable": true };
    var el = document.getElementById('tabs');
    var tabsInstance = M.Tabs.init(el, options);
  }); // end of document ready
})(jQuery); // end of jQuery name space

function showInfo() {
  jQuery.each( info.modules, function(i, mp) {
    $('.collapsible').first().append('<li><div class="collapsible-header">'+mp.code+' - '+mp.name+'</div><div class="collapsible-body"><div class="row"></div></div></li>');

    jQuery.each( mp.ufs, function(j, uf) {
      $('.row').last().append('<label><div class="col s6 m4" style="color:black;"><input class="ufs" type="checkbox"><span>'+uf.code+' - '+uf.name+'</span></div></label>');
    })
  });
}


document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
    showInfo();
}