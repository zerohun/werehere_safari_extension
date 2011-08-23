if(window.top === window){
  safari.self.addEventListener("message", handleMessage, false);
  $("body").append("<iframe id='post_url' src='http://localhost:3000/histories/new'></iframe>")
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
  win.postMessage(url, "http://localhost:3000");
  //$("body").prepend("<p>sent success</p>");
}


