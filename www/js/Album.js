//メインミュージック設定
function setMusic(){
    var res = confirm("メイン画面BGMに設定しますか？");
    if( res == true ) {
        // OK
        // location.href = "./index.html";   
    }
    else {
    }
}

//メインキャラクターの変更
function changeMainChara(charaId){    
    sessionStorage.setItem('mainChara', JSON.stringify(charaId));
    db.transaction(function (tx){
      tx.executeSql('update users set mainChara = ? where id = ?', [charaId, id])
    })
    alert("メインキャラに設定しました。");
}