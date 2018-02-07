// db.transaction(function (tx){
//     tx.executeSql('drop table users')
// })

//usersDBの作成
db.transaction(function(tx){
    tx.executeSql(`
      create table if not exists users (
        id integer primary key autoincrement,
        name varchar not null,
        pass varchar not null,
        login_id varchar UNIQUE not null,
        summon_point int not null
      )
    `)
})

//usersデータの確認
db.transaction(function (tx){
    tx.executeSql('select * from users', [],
        function (tx, results){
            for (i = 0; i < results.rows.length; i++){
                var Check = results.rows.item(i).id;
            }
            if(typeof Check === 'undefined'){
                userInsert();
            }
        }
    )
})
//usersテーブルにレコードを追加する
function userInsert(){
    db.transaction(function (tx){
      tx.executeSql('insert into users (name,pass,login_id,summon_point) values (?,?,?,?)', ['admin','pass','admin',0])
      tx.executeSql('insert into users (name,pass,login_id,summon_point) values (?,?,?,?)', ['AraiSekai','0608','sekai',0])
      tx.executeSql('insert into users (name,pass,login_id,summon_point) values (?,?,?,?)', ['KamataMikoto','0910','mikoto',0])
      tx.executeSql('insert into users (name,pass,login_id,summon_point) values (?,?,?,?)', ['HirokawaYuki','0606','yuki',0])
    })
}