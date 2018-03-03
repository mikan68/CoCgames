// db.transaction(function (tx){
//     tx.executeSql('drop table pc_info2')
// })

//pc_infoDBの作成
db.transaction(function(tx){
    tx.executeSql(`
      create table if not exists pc_info2 (
        id integer not null,
        bp integer not null,
        nos integer not null,
        es integer not null,
        pf integer not null,
        sd text
      )
    `)
})

db.transaction(function (tx){
    tx.executeSql('insert into pc_info2(id,bp,nos,es,pf,sd) select 1,0,0,1,0,"00-00-00" where not exists(select 1 from pc_info2 where id = 1);',[])    
    tx.executeSql('insert into pc_info2(id,bp,nos,es,pf,sd) select 2,0,0,1,0,"00-00-00" where not exists(select 1 from pc_info2 where id = 2);',[])
    tx.executeSql('insert into pc_info2(id,bp,nos,es,pf,sd) select 3,0,0,1,0,"00-00-00" where not exists(select 1 from pc_info2 where id = 3);',[])
})


