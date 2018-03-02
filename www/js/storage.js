var id = localStorage.getItem('loginUserID'); //ユーザID
var name = localStorage.getItem('loginUserName'); //ユーザネーム
var mainChara; //メイン画面配置キャラ
var charaList1 = []; //play_character、pc_info情報
var characteristic = []; //characteristic情報(特徴表)


db.transaction(function (tx){
    tx.executeSql('select * from users where id =' + id + ';', [],
        function (tx, results){
            mainChara = results.rows.item(0).mainChara;
            sessionStorage.setItem('mainChara', JSON.stringify(mainChara));
        }
    )
})

db.transaction(function (tx){
    tx.executeSql('select * from play_character inner join pc_info on play_character.pc_id = pc_info.id;', [],
        function (tx, results){
            charaList1 = [];
            for (i = 0; i < results.rows.length; i++){
                
                var chara = {};
                chara["id"] = results.rows.item(i).id;
                
                //play_character
                chara["name"] = results.rows.item(i).pc_name;
                chara["rank"] = results.rows.item(i).rank;
                chara["str"] = results.rows.item(i).str;
                chara["dex"] = results.rows.item(i).dex;
                chara["int"] = results.rows.item(i).pc_int;
                chara["con"] = results.rows.item(i).con;
                chara["app"] = results.rows.item(i).app;
                chara["pow"] = results.rows.item(i).pow;
                chara["siz"] = results.rows.item(i).siz;
                chara["edu"] = results.rows.item(i).edu;
                chara["profile"] = results.rows.item(i).profile;
                chara["characteristic01"] = results.rows.item(i).characteristic01;
                chara["characteristic02"] = results.rows.item(i).characteristic02;
                chara["characteristic03"] = results.rows.item(i).characteristic03;
                chara["pl"] = results.rows.item(i).pl;
                
                //pc_info
                chara["s_pic01"] = results.rows.item(i).s_pic01;
                chara["s_pic02"] = results.rows.item(i).s_pic02;
                chara["s_pic03"] = results.rows.item(i).s_pic03;
                chara["i_pic01"] = results.rows.item(i).i_pic01;
                chara["i_pic02"] = results.rows.item(i).i_pic02;
                chara["i_pic03"] = results.rows.item(i).i_pic03;
                chara["c_pic01"] = results.rows.item(i).c_pic01;
                chara["c_pic02"] = results.rows.item(i).c_pic02;
                chara["c_pic03"] = results.rows.item(i).c_pic03;
                chara["talk_01"] = results.rows.item(i).talk_01;
                chara["talk_02"] = results.rows.item(i).talk_02;
                chara["talk_03"] = results.rows.item(i).talk_03;
                chara["talk5_01"] = results.rows.item(i).talk5_01;
                chara["talk5_02"] = results.rows.item(i).talk5_02;
                chara["talk5_03"] = results.rows.item(i).talk5_03;
                chara["talk10_01"] = results.rows.item(i).talk10_01;
                chara["talk10_02"] = results.rows.item(i).talk10_02;
                chara["talk10_03"] = results.rows.item(i).talk10_03;
                chara["song"] = results.rows.item(i).song;

                charaList1.push(chara);
            }
            sessionStorage.setItem('charaList', JSON.stringify(charaList1));
        }
    )
})
charaList1 = JSON.parse(sessionStorage.getItem('charaList'));
// console.log(charaList1);
// console.log(charaList1[0]["name"]);
// console.log(charaList1.length);

db.transaction(function (tx){
    tx.executeSql('select * from characteristic;', [],
        function (tx, results){
            characteristic = [];
            for (i = 0; i < results.rows.length; i++){
                
                var charaIstic = {};
                charaIstic["c_id"] = results.rows.item(i).rowid;
                charaIstic["c_name"] = results.rows.item(i).c_name;
                charaIstic["c_detail"] = results.rows.item(i).c_detail;

                characteristic.push(charaIstic);
            }
            sessionStorage.setItem('characteristic', JSON.stringify(characteristic));
        }
    )
})
characteristic = JSON.parse(sessionStorage.getItem('characteristic'));
//console.log(characteristic);
