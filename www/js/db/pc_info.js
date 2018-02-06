db.transaction(function (tx){
    tx.executeSql('drop table pc_info')
})

//pc_infoDBの作成
db.transaction(function(tx){
    tx.executeSql(`
      create table if not exists pc_info (
        id integer not null,
        s_pic01 text not null,
        s_pic02 text not null,
        s_pic03 text not null,
        i_pic01 text not null,
        i_pic02 text not null,
        i_pic03 text not null,
        c_pic01 text not null,
        c_pic02 text not null,
        c_pic03 text not null,
        talk_01 text not null,
        talk_02 text not null,
        talk_03 text not null,
        talk5_01 text not null,
        talk5_02 text not null,
        talk5_03 text not null,
        talk10_01 text not null,
        talk10_02 text not null,
        talk10_03 text not null,
        song text not null
      )
    `)
})

//データの確認
db.transaction(function (tx){
    tx.executeSql('select * from pc_info', [],
        function (tx, results){
            for (i = 0; i < results.rows.length; i++){
                var Check = results.rows.item(i).id;
                //console.log(Check);
            }
            if(typeof Check === 'undefined'){
                pcfInsert();
            }
        }
    )
})

//テーブルにレコードを追加する
//tx.executeSql('insert into pc_info(id,s_pic01,s_pic02,s_pic03,i_pic01,i_pic02,i_pic03,c_pic01,c_pic02,c_pic03,talk_01,talk_02,talk_03,talk5_01,talk5_02,talk5_03,talk10_01,talk10_02,talk10_03)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[1,'s_pic01','s_pic02','s_pic03','i_pic01','i_pic02','i_pic03','c_pic01','c_pic02','c_pic03','talk_01','talk_02','talk_03','talk5_01','talk5_02','talk5_03','talk10_01','talk10_02','talk10_03'])
function pcfInsert(){
    db.transaction(function (tx){
        tx.executeSql('insert into pc_info(id,s_pic01,s_pic02,s_pic03,i_pic01,i_pic02,i_pic03,c_pic01,c_pic02,c_pic03,talk_01,talk_02,talk_03,talk5_01,talk5_02,talk5_03,talk10_01,talk10_02,talk10_03,song)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[1,'https://drive.google.com/uc?id=1tqMJe9YsY0AQttz2zGRHAas4oM0jJrMx','https://drive.google.com/uc?id=1R9T-RS6Rn7kleKoriNGNcgDyQfA6ObCs','https://drive.google.com/uc?id=1KSDNXGlxNVvnFZYU5dcmgk5U5l6koIj4','https://drive.google.com/uc?id=10ZY2C3pd91fPoWkRMjMvhhPpbXkQojOO','https://drive.google.com/uc?id=1T9DBVK8GDftUDwpp4Rafc451mHo0SYPO','https://drive.google.com/uc?id=1SL1Z3_6_heFgjQoYppGBIT5vNQ2OXtN-','https://drive.google.com/uc?id=1lhCbhc-aA2dOIuNRlDtrT3YEwdTgXOym','https://drive.google.com/uc?id=1yhx0F-RdjueOWEJ4HNXLqH4jEEkBbgMf','https://drive.google.com/uc?id=1Kg0ffeVQzLcIeIvPlwJLhCHY8xh9PVRr','ど、どうも…','桐原さん、人見知りだけどとても良い人なんですよ','蛇は苦手ですね…','お役に立てていますか？','体調が優れない時は言ってくださいね','お、斧…なぜだかしっくりきます…','talk10_01','talk10_02','talk10_03','0'])
        tx.executeSql('insert into pc_info(id,s_pic01,s_pic02,s_pic03,i_pic01,i_pic02,i_pic03,c_pic01,c_pic02,c_pic03,talk_01,talk_02,talk_03,talk5_01,talk5_02,talk5_03,talk10_01,talk10_02,talk10_03,song)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[2,'https://drive.google.com/uc?id=1Wc-U8885CQNcJmaiz5XDfLXG72A_0j1_','https://drive.google.com/uc?id=15SVHJPUGjpplAJXfaRd4daieAV1gg1H-','https://drive.google.com/uc?id=1gl_fix_B6ovQyzHtE6wNtQKL0FeHhyvt','https://drive.google.com/uc?id=1kLgeqnSJdCp5T5tSkgSp64PZVnRBbeqO','https://drive.google.com/uc?id=10I5ay_D6albmknb04UrCNQfeSttIBFKK','https://drive.google.com/uc?id=1LtN9naZr8B82NtGRrM9ffiMWBarFVBh_','https://drive.google.com/uc?id=19go55XV-JimNdT70ExplXmDSFCZ0xCQo','https://drive.google.com/uc?id=1o7wc2rzk4SwutQR8iLX8NKVwdGZQNwoX','https://drive.google.com/uc?id=19hkfdJbGyIsYKjoRa9-emlQGMDu293O_','本がたくさん…ここは天国か何かかしら？','絵本の読み聞かせでもしましょうか？','ここには銛は…ないのね…','talk5_01','talk5_02','talk5_03','talk10_01','talk10_02','talk10_03','https://drive.google.com/uc?id=16SKVJwX0g5zDWp0APulHhUf4YjiJhELu'])
        tx.executeSql('insert into pc_info(id,s_pic01,s_pic02,s_pic03,i_pic01,i_pic02,i_pic03,c_pic01,c_pic02,c_pic03,talk_01,talk_02,talk_03,talk5_01,talk5_02,talk5_03,talk10_01,talk10_02,talk10_03,song)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[3,'https://drive.google.com/uc?id=1lWc1jEbs5M2dEHRzUliHmSzzg81HZ2vO','https://drive.google.com/uc?id=1vBtlosjnY2Faa0Bof99xvuH3ZxNeREm8','https://drive.google.com/uc?id=1BR_grM72JFuUIkSgHvwbi3LV_H3PcIN6','https://drive.google.com/uc?id=1d7eXep-PcD3eLskTRCtiBKUwux1NlLbx','https://drive.google.com/uc?id=1d7eXep-PcD3eLskTRCtiBKUwux1NlLbx','https://drive.google.com/uc?id=19ke-iC7by-gXtDjIWRAq6WRczT9_fwYH','https://drive.google.com/uc?id=1R2D4bVI3CN3-v7QZB_zpBMXIbH31YNtn','https://drive.google.com/uc?id=1sJoSDQ1K7OGxx7YzjWTmCBxBaYCJmpZb','https://drive.google.com/uc?id=1rnFpzauU1uRwytzVLmVp_i0xIS5nuls4','何見てんのよ','用なんてないから、すっこんでなさい','私に頼まないで。頼むならセシルに頼みなさい','talk5_01','talk5_02','talk5_03','talk10_01','talk10_02','talk10_03','https://drive.google.com/uc?id=1d4iwBkjkO7blxSiD8hT8TKzf0X3vPby0'])
        
    })
}