var name = 'cctdb'
var version = '1.0'
var description = 'Web SQL Database'
var size = 2 * 1024 * 1024
var db = openDatabase(name, version, description, size)

//userデータの確認
db.transaction(function (tx){
    tx.executeSql('select * from users', [],
        function (tx, results){
            var elem = document.getElementById("test");
            for (i = 0; i < results.rows.length; i++){
                var id = results.rows.item(i).id;
                var name = results.rows.item(i).name;
                var pass = results.rows.item(i).pass;
                var loginID = results.rows.item(i).login_id;
                
                elem.innerHTML += "・"+ id + "．" + name + "．" + pass + "．" + loginID + "<br>";
            }
        }
    )
})