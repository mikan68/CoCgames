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
        profile_1 text not null,
        profile_2 text not null,
        profile_3 text not null,
        profile_4 text not null,
        profile_5 text not null,
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
                //console.log(Check);
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
        tx.executeSql('insert into play_character(pc_id,pc_name,rank,str,dex,pc_int,con,app,pow,siz,edu,profile,profile_1,profile_2,profile_3,profile_4,profile_5,characteristic01,characteristic02,characteristic03,pl) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [1,'睦亮太郎',1,15,13,15,9,9,12,12,15,'胃が痛い医大生','【親の七光り】医者の家系。物心つく頃から医者となる為に育てられてきた。','【天才】元々体を動かすことより、思案に暮れることの方が多かった。趣味は読書。','恵まれた家庭環境に内向的な性格など、様々な要因が重なり多くの友人には恵まれなかった。周囲は劣等感を刺激され、幼少時の彼に強く当たるようになる。','【影が薄い】平均より少し低い容姿は、周囲から誹られる対象の1つとなる。これにより本人のコンプレックスとなってしまった。','そんな中でできた友人は何よりも代え難い宝となる。友人が危険に晒された時、自分の身を擲ってでも助けに向かうだろう。',23,15,22,2])
        tx.executeSql('insert into play_character(pc_id,pc_name,rank,str,dex,pc_int,con,app,pow,siz,edu,profile,profile_1,profile_2,profile_3,profile_4,profile_5,characteristic01,characteristic02,characteristic03,pl) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [2,'狩野陽子',2,13,10,14,12,14,14,11,16,'図書館司書さん','絆情報Lv.1','絆情報Lv.2','絆情報Lv.3','絆情報Lv.4','絆情報Lv.5',50,0,0,2])    
        tx.executeSql('insert into play_character(pc_id,pc_name,rank,str,dex,pc_int,con,app,pow,siz,edu,profile,profile_1,profile_2,profile_3,profile_4,profile_5,characteristic01,characteristic02,characteristic03,pl) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [3,'アンバー=サットン',3,10,11,15,13,15,10,9,14,'イギリス在住のそれなりに名の知れた考古学者。','絆情報Lv.1','絆情報Lv.2','絆情報Lv.3','絆情報Lv.4','絆情報Lv.5',72,0,0,2])
    })
}