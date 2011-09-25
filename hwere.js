if(window.top === window){
  safari.self.addEventListener("message", handleMessage, false);
  $("body").prepend("<iframe id='post_url' src='http://werehere.herokuapp.com/histories/new'></iframe>")
  $("iframe#post_url").load(function(event){
    safari.self.tab.dispatchMessage("topwindow_onload");
  });

}
function handleMessage(msgEvent){
  var messageName = msgEvent.name;
  var messageData = msgEvent.message;
  if(messageName == "postURL")
   postURL(messageData)
}

function postURL(url){
  //$("body").prepend("<p>event success</p>");
  var win = $("iframe#post_url")[0].contentWindow;
  win.postMessage(url, "http://werehere.herokuapp.com/");
  //$("body").prepend("<p>sent success</p>");
}


