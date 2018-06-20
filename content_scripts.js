var DoLogin = (username, password) => {
  var LoginForm = document.forms[0];
  if(LoginForm){
    LoginForm.username.value = username;
    LoginForm.password.value = password;
    LoginForm.submit();
  }
}

var ToClick = ele => {
  var e = document.createEvent('MouseEvent');
  e.initEvent('click', false, false);
  ele.dispatchEvent(e);
}

var DoContinue = function(){
  var inputs = document.querySelectorAll('input');
  inputs.forEach(function(input){
    if (input.value.toLowerCase() == 'continue'){
      ToClick(input);
    }
  });
}

chrome.storage.sync.get(["login_name", "login_pass"], function(data){
  var _name = data['login_name'];
  var _pass = data['login_pass'];
    if (_name && _pass){
      if (window.location.host == 'auth.nfjd.gmcc.net'){
        DoLogin(_name, _pass);
      }
  }
});

setInterval(function(){
    var ttl = document.getElementById("liveclock2");
    var signindiv = document.getElementById("signindiv");
    if (((ttl) && (ttl.innerText.search("00:00:00") > 0)) || (signindiv)) {
        window.location.href = "https://auth.nfjd.gmcc.net/dana-na/auth/url_default/welcome.cgi";
    } else {
        
        console.log('Internal Online...');
        window.onbeforeunload=null; onbeforeunload=null; onunload=null, window.onunload=null;
        console.log(window.onbeforeunload+','+window.onunload);
    }
    DoContinue();
},1000 * 60)