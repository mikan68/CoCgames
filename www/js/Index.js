var name = 'cctdb'
var version = '1.0'
var description = 'Web SQL Database'
var size = 2 * 1024 * 1024
var db = openDatabase(name, version, description, size)

var id = localStorage.getItem('loginUserID');
var name = localStorage.getItem('loginUserName');
// localStorage.removeItem('loginUserID');
//localStorage.removeItem('loginUserName');

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
        tx.executeSql('SELECT * FROM user WHERE login_id = ? AND pass = ?', [loginID,pass],
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
            alert("IDとパスワードが一致しません。");
        })
    })
    location.href = "./index.html";
  
}