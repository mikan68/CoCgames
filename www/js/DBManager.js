var name = 'cctdb'
var version = '1.0'
var description = 'Web SQL Database'
var size = 2 * 1024 * 1024
var db = openDatabase(name, version, description, size)

 db.transaction(function (tx) {
   tx.executeSql('CREATE TABLE user(id integer UNIQUE primary key autoincrement not null,name varchar not null,pass varchar not null,login_id varchar UNIQUE not null)');
   tx.executeSql("insert into user values('1','admin','password','admin')");
   tx.executeSql("insert into user values('2','AraiSekai','0608','sekai')");
   tx.executeSql("insert into user values('3','KamataMikoto','0910','mikoto')");
   tx.executeSql("insert into user values('4','HirokawaYuki','0606','yuki')");
 });

 db.transaction(function (tx) {
    //tx.executeSql("INSERT INTO play_character VALUES('id','charaName','1','str','dex','int','con','app','pow','siz','edu','profile','特徴01','特徴02','特徴03','pl')");
    tx.executeSql('CREATE TABLE play_character(pc_id integer UNIQUE primary key autoincrement not null,pc_name varchar not null,rank int not null,str int UNIQUE not null,dex int not null,pc_int int not null,con int not null,app int not null,pow int not null,siz int not null,edu int not null,profile text,characteristic01 int,characteristic02 int,characteristic03 int,pl text not null)');
    tx.executeSql("INSERT INTO play_character VALUES('1','睦亮太郎','1','15','13','15','9','9','12','12','15','35歳医師','23','15','22','みかん')");
    tx.executeSql("INSERT INTO play_character VALUES('2','狩野陽子','1','13','10','14','12','14','14','11','16','昔大学で心理学を専攻していた図書館司書さん。休日は海で素潜りに明け暮れる銛ガール。とったどー！言わせたい。彩花ちゃんは図書館のバイトちゃん。','50','0','0','みかん')");
    tx.executeSql("INSERT INTO play_character VALUES('3','Amber=Sutton(アンバー サットン)','2','10','11','15','13','15','10','9','14','イギリスの名の知れた考古学者。自分の思う通りにいかないと気が済まない傲慢な性格。','72','0','0','みかん')");
 });