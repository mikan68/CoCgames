//ログアウト処理
function logout() {
    
    var res = confirm("ログアウトしてもいいですか？");
    if( res == true ) {
        //ログアウト前に更新*********************
        userUpdate();
        //****************************************
        window.localStorage.clear();
        location.href = "./index.html";   
    }
  
}

//usersテーブル更新
function userUpdate(){
    var loginUser = JSON.parse(localStorage.getItem('loginUser')); //login user情報
    var id = loginUser["id"];
    var mainChara = JSON.parse(localStorage.getItem('mainChara'));
    var sp = JSON.parse(localStorage.getItem('sp'));
    
    db.transaction(function (tx) {
        tx.executeSql('update users set summon_point = ? where id = ?', [sp, id])
        tx.executeSql('update users set mainChara = ? where id = ?', [mainChara, id])
    })
}