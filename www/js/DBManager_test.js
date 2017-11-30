var name = 'cctdb'
var version = '1.0'
var description = 'Web SQL Database'
var size = 2 * 1024 * 1024
var db = openDatabase(name, version, description, size)

// db.transaction(function (tx) {
//   tx.executeSql('CREATE TABLE user(id integer UNIQUE primary key autoincrement not null,name varchar not null,pass varchar not null,login_id varchar UNIQUE not null)');
//   tx.executeSql("insert into user values('1','admin','password','admin');");
//   tx.executeSql("insert into user values('2','AraiSekai','0608','sekai');");
// });

// db.transaction(function (tx) {
//    tx.executeSql('CREATE TABLE play_character(pc_id integer UNIQUE primary key autoincrement not null,pc_name varchar not null,rank int not null,str int UNIQUE not null,dex int not null,pc_int int not null,con int not null,app int not null,pow int not null,siz int not null,edu int not null,profile text,characteristic01 int,characteristic02 int,characteristic03 int,pl text not null)');
//    tx.executeSql("insert into play_character values('1','睦亮太郎','2','15','13','15','9','9','12','12','15','35歳医師','23','15','22','みかん')");
// });