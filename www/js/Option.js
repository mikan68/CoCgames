//ログアウト処理
function logout() {
    
    var res = confirm("ログアウトしてもいいですか？");
    if( res == true ) {
        // OKなら移動
        window.localStorage.clear();
        location.href = "./index.html";   
    }
    else {
    }
  
}