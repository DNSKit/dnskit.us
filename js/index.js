$(document).ready(function(){
  if($("dns")){
    for(var key in dns){
      $("dns").append("<p><b>" + dns[key][0] + "</b>, <b>" + dns[key][1] + "</b> - " + dns[key][2] + "</p>");
    }
  }
});
