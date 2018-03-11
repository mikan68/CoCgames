//ログアウト処理
function logout() {
    
    var res = confirm("ログアウトしてもいいですか？");
    if( res == true ) {
        //ログアウト前に更新*********************
        userUpdate();
        pc_info2Update();
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

//pc_info2更新***キャラ追加ごとに記述が必要
function pc_info2Update(){
    var possessionCharaList = JSON.parse(localStorage.getItem('possessionCharaList'));
    console.log(typeof(possessionCharaList[0]["bondsPoint"]));
    
    db.transaction(function (tx) {
        tx.executeSql('update pc_info2 set bp = ?, nos = ?, es = ?,sd = ? where id = ?;', [possessionCharaList[0]["bondsPoint"], possessionCharaList[0]["numberOfSummons"], possessionCharaList[0]["evolutionaryStage"],possessionCharaList[0]["summonDate"], possessionCharaList[0]["id"]])
        tx.executeSql('update pc_info2 set bp = ?, nos = ?, es = ?,sd = ? where id = ?;', [possessionCharaList[1]["bondsPoint"], possessionCharaList[1]["numberOfSummons"], possessionCharaList[1]["evolutionaryStage"],possessionCharaList[1]["summonDate"], possessionCharaList[1]["id"]])
        tx.executeSql('update pc_info2 set bp = ?, nos = ?, es = ?,sd = ? where id = ?;', [possessionCharaList[2]["bondsPoint"], possessionCharaList[2]["numberOfSummons"], possessionCharaList[2]["evolutionaryStage"],possessionCharaList[2]["summonDate"], possessionCharaList[2]["id"]])
    })
    
    // for(var i=0; i<possessionCharaList.length; i++ ){
    //     var id = possessionCharaList[i]["id"];
    //     var boundsPoint = possessionCharaList[i]["bondsPoint"];
    //     var evolutionaryStage = possessionCharaList[i]["evolutionaryStage"];
    //     var numberOfSummons = possessionCharaList[i]["numberOfSummons"];
    //     var possessionFlag = possessionCharaList[i]["possessionFlag"];
    //     var summonDate = possessionCharaList[i]["summonDate"];
    //     
    //     db.transaction(function (tx) {
    //         tx.executeSql('update pc_info2 set bp = ? where id = ?;', [bondsPoint, id])
    //         tx.executeSql('update pc_info2 set nos = ? where id = ?', [numberOfSummons, id])
    //         tx.executeSql('update pc_info2 set es = ? where id = ?', [evolutionaryStage, id])
    //         tx.executeSql('update pc_info2 set pf = ? where id = ?', [possessionFlag, id])
    //         tx.executeSql('update pc_info2 set sd = ? where id = ?', [summonDate, id])
    //     })
    // }
}





