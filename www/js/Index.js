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

//ログイン処理(usersテーブル使用)
function login() {
  
    var loginID = document.getElementById("loginID").value;
    var pass = document.getElementById("pass").value;
    
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM users WHERE login_id = ? AND pass = ?', [loginID,pass],
            function (tx, results) {
                // SUCCESS
                //****************************************************************
                var loginUser = {};
                loginUser["id"] = results.rows.item(0).id;
                loginUser["name"] = results.rows.item(0).name;
                loginUser["pass"] = results.rows.item(0).pass;
                loginUser["login_id"] = results.rows.item(0).login_id;
                localStorage.setItem('loginUser', JSON.stringify(loginUser));
            
                sp = results.rows.item(0).summon_point;
                mainChara = results.rows.item(0).mainChara;
                localStorage.setItem('sp', JSON.stringify(sp));
                localStorage.setItem('mainChara', JSON.stringify(mainChara));
                //*****************************************************************
                location.href = "./main.html";
            },function(err){
                // ERROR
                console.log(err);
            }
        )
    })
    location.href = "./index.html";
  
}

//新規登録(usersテーブル使用)
function start(){
    var loginID = document.getElementById("loginID2").value;
    var pass = document.getElementById("pass2").value;
    var name = document.getElementById("name").value;
    
    db.transaction(function (tx){
        tx.executeSql('insert into users (name, pass, login_id, summon_point, mainChara) values (?,?,?,?,?)', [name, pass, loginID, 0, 0])
        tx.executeSql('select * from users where login_id = ?', [loginID],
            function (tx, results){
                var Check = results.rows.item(0).id;
                //console.log(Check);
                if(typeof Check === 'undefined'){
                    console.log("false");
                }else{
                    console.log("true");
                    //****************************************************************
                    var loginUser = {};
                    loginUser["id"] = Check;
                    loginUser["name"] = name;
                    loginUser["pass"] = results.rows.item(0).pass;
                    loginUser["login_id"] = results.rows.item(0).login_id;
                    localStorage.setItem('loginUser', JSON.stringify(loginUser));
            
                    sp = results.rows.item(0).summon_point;
                    mainChara = results.rows.item(0).mainChara;
                    localStorage.setItem('sp', JSON.stringify(sp));
                    localStorage.setItem('mainChara', JSON.stringify(mainChara));
                    //****************************************************************
                    location.href = "./main.html";
                }
            }
        )
    })
}


