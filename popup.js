var save_btn = document.getElementById("save");
var show_btn = document.getElementById("show");
var name_ele = document.getElementById("id_username");
var pass_ele = document.getElementById("id_password");

show_btn.addEventListener("click",function(e){
  _current = pass_ele.getAttribute("type");
  if (_current == 'text') {
    pass_ele.setAttribute("type", "password");
    this.innerHTML = '查看密码';
  }else{
    pass_ele.setAttribute("type","text");
    this.innerHTML = '隐藏密码';
  }
})

save_btn.addEventListener("click",function(e){
  var login_name = name_ele.value;
  var login_pass = pass_ele.value;
  chrome.storage.sync.set({'login_name': login_name},function(){console.log("保存完毕");});
  chrome.storage.sync.set({'login_pass': login_pass},function(){console.log("保存完毕");});
})

chrome.storage.sync.get(["login_name", "login_pass"], function(data){
  var _name = data['login_name'];
  var _pass = data['login_pass'];
    if (_name && _pass){
      name_ele.value = _name;
      pass_ele.value = _pass;
      save_btn.innerHTML = '更新';
    }
});
