var id = localStorage.getItem('loginUserID');
var name = localStorage.getItem('loginUserName');
// localStorage.removeItem('loginUserID');
// localStorage.removeItem('loginUserName');

//ログイン情報の確認
$( function() {
    $('#loginImg').click( function () {        
        if(id == null || name == null){
            $('#sampleModal').modal();
        }else{
            location.href = "./main.html";
        }
	});
});
$( function() {
    $('#loginImg2').click( function () {        
        if(id == null || name == null){
            $('#sampleModal').modal();
        }else{
            location.href = "./main.html";
        }
    });
});

//ログイン処理
function login() {
  
    var loginID = document.getElementById("loginID").value;
    var pass = document.getElementById("pass").value;
    
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM users WHERE login_id = ? AND pass = ?', [loginID,pass],
        function (tx, results) {
            // SUCCESS
            for (i = 0; i < results.rows.length; i++){
                //console.log(results.rows.item(i).login_id)
                localStorage.setItem('loginUserID', results.rows.item(i).id);
                localStorage.setItem('loginUserName', results.rows.item(i).name);
                
                location.href = "./main.html";
            }
        },function(err){
            // ERROR
            console.log(err);
        })
    })
    location.href = "./index.html";
  
}

//新規登録※テスト環境(userテーブル)でテスト中
function start(){
    var loginID = document.getElementById("loginID2").value;
    var pass = document.getElementById("pass2").value;
    var name = document.getElementById("name").value;
    
    db.transaction(function (tx){
      tx.executeSql('insert into user (name, pass, login_id) values (?,?,?)', [name, pass, loginID])
    })
    
    db.transaction(function (tx){
        tx.executeSql('select * from user where login_id = ?', [loginID],
            function (tx, results){
                for (i = 0; i < results.rows.length; i++){
                    var Check = results.rows.item(i).id;
                }
                if(typeof Check === 'undefined'){
                    console.log("false");
                }else{
                    console.log("true");
                    localStorage.setItem('loginUserID', Check);
                    localStorage.setItem('loginUserName', name);
                
                    location.href = "./main.html";
                }
            }
        )
    })
}


