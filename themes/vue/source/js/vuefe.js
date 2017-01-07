var funcGetSelectText = function(){
  var txt = '';
  if(document.selection){
    txt = document.selection.createRange().text;//ie
  }else{
    txt = document.getSelection();
  }
  return txt.toString();
}

var container = container || document;
container.onmouseup = function(){
  var txt = funcGetSelectText();
  if(txt)
  {
  console.log('vuefe.cn : ' + txt);
  }
}


/**
 * vuefe.com auto signup
 */
var store = window.localStorage;

var autoSignUp = function() {
  if (!store.vuefecom_ip || !store.vuefecom_tempToken) {
    axios.post('https://vuefecom.leanapp.cn/api/user/signuptemp')
    .then(function(res) {
      if (res.data.code === 0) {
        store.vuefecom_ip = res.data.data.ip;
        store.vuefecom_tempToken = res.data.data.tempToken;
      }
    });
  } else {
    console.log('已经登录');
  }
}

autoSignUp();