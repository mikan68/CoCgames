db.transaction(function (tx){
    tx.executeSql('drop table play_character')
})

//play_characterDBの作成
db.transaction(function(tx){
    tx.executeSql(`
      create table if not exists play_character (
        pc_id integer not null,
        pc_name varchar not null,
        rank integer not null,
        str integer not null,
        dex integer not null,
        pc_int integer not null,
        con integer not null,
        app integer not null,
        pow integer not null,
        siz integer not null,
        edu integer not null,
        profile text not null,
        characteristic01 integer not null,
        characteristic02 integer not null,
        characteristic03 integer not null,
        pl integer not null
      )
    `)
})

//play_characterデータの確認
db.transaction(function (tx){
    tx.executeSql('select * from play_character', [],
        function (tx, results){
            for (i = 0; i < results.rows.length; i++){
                var Check = results.rows.item(i).pc_id;
                console.log(Check);
            }
            if(typeof Check === 'undefined'){
                charaInsert();
            }
        }
    )
})

//play_characterテーブルにレコードを追加する
function charaInsert(){
    db.transaction(function (tx){
        tx.executeSql('insert into play_character(pc_id,pc_name,rank,str,dex,pc_int,con,app,pow,siz,edu,profile,characteristic01,characteristic02,characteristic03,pl) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [1,'睦亮太郎',1,15,13,15,9,9,12,12,15,'胃が痛い医大生',23,15,22,2])
        tx.executeSql('insert into play_character(pc_id,pc_name,rank,str,dex,pc_int,con,app,pow,siz,edu,profile,characteristic01,characteristic02,characteristic03,pl) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [2,'狩野陽子',1,13,10,14,12,14,14,11,16,'図書館司書さん',50,0,0,2])    
        tx.executeSql('insert into play_character(pc_id,pc_name,rank,str,dex,pc_int,con,app,pow,siz,edu,profile,characteristic01,characteristic02,characteristic03,pl) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [3,'アンバー=サットン',1,10,11,15,13,15,10,9,14,'イギリス在住のそれなりに名の知れた考古学者。<br>自分の思う通りにいかないと気が済まない傲慢な性格。<br>資産家の娘であり、学者である両親の影響か珍しいものが大好きで手元に置きたがる。',72,0,0,2])
    })
}