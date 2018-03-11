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

//play_characterデータの確認
db.transaction(function (tx){
    tx.executeSql('select * from play_character', [],
        function (tx, results){
            var elem = document.getElementById("pc");
            for (i = 0; i < results.rows.length; i++){
                var id = results.rows.item(i).pc_id;
                var name = results.rows.item(i).pc_name;
                
                elem.innerHTML += "・"+ id + "．" + name + "<br>";
            }
        }
    )
})

//特徴表データの確認
// db.transaction(function (tx){
//     tx.executeSql('select * from characteristic', [],
//         function (tx, results){
//             var elem = document.getElementById("ci");
//             for (i = 0; i < results.rows.length; i++){
//                 var name = results.rows.item(i).c_name;
//                 var detail = results.rows.item(i).c_detail;
//                 
//                 elem.innerHTML += "【"+ (i+1) + "．" + name + "】<br>" + detail + "<br>";
//             }
//         }
//     )
// })