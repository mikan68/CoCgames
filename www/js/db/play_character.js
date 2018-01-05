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
            
    })
}