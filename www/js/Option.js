//ログアウト処理
function logout() {
    
    var res = confirm("ログアウトしてもいいですか？");
    if( res == true ) {
        // OK
        //ここでuserテーブル更新させる************
        
        //****************************************
        window.localStorage.clear();
        location.href = "./index.html";   
    }
    else {
    }
  
}