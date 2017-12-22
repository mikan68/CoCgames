var name = 'cctdb'
var version = '1.0'
var description = 'Web SQL Database'
var size = 2 * 1024 * 1024
var db = openDatabase(name, version, description, size)

//usersDBの作成
db.transaction(function(tx){
    tx.executeSql(`
      create table if not exists users (
        id integer primary key autoincrement,
        name varchar not null,
        pass varchar not null,
        login_id varchar UNIQUE not null
      )
    `)
})

//userデータの確認
db.transaction(function (tx){
    tx.executeSql('select * from user', [],
        function (tx, results){
            for (i = 0; i < results.rows.length; i++){
                var Check = results.rows.item(i).id;
            }
            console.log(Check);
            if(typeof Check === 'undefined'){
                test();
            }
        }
    )
})

//usersテーブルにレコードを追加する
db.transaction(function (tx){
    // tx.executeSql('insert into users (name,pass,login_id) values (?,?,?)', ['admin','pass','admin'])
    // tx.executeSql('insert into users (name,pass,login_id) values (?,?,?)', ['AraiSekai','0608','sekai'])
    // tx.executeSql('insert into users (name,pass,login_id) values (?,?,?)', ['KamataMikoto','0910','mikoto'])
    // tx.executeSql('insert into users (name,pass,login_id) values (?,?,?)', ['HirokawaYuki','0606','yuki'])
})

function test(){
    console.log("test");
    // db.transaction(function (tx){
    //     tx.executeSql('insert into users (name,pass,login_id) values (?,?,?)', ['admin','pass','admin'])
    //     tx.executeSql('insert into users (name,pass,login_id) values (?,?,?)', ['AraiSekai','0608','sekai'])
    //     tx.executeSql('insert into users (name,pass,login_id) values (?,?,?)', ['KamataMikoto','0910','mikoto'])
    //     tx.executeSql('insert into users (name,pass,login_id) values (?,?,?)', ['HirokawaYuki','0606','yuki'])
    // })
}
