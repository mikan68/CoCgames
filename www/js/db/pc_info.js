// This is a JavaScript file

//pc_infoDBの作成
db.transaction(function(tx){
    tx.executeSql(`
      create table if not exists pc_info (
        id integer not null,
        get_flag blob not null,
        summon_cnt integer not null,
        s_pic01 text not null,
        s_pic02 text not null,
        s_pic03 text not null,
        i_pic01 text not null,
        i_pic02 text not null,
        i_pic03 text not null,
        c_pic01 text not null,
        c_pic02 text not null,
        c_pic03 text not null,
      )
    `)
})