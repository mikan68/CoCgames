function Normal(){
    sp_plus(1);
    
    charaList1 = JSON.parse(sessionStorage.getItem('charaList'));
    var sumRank = 0;
    
    for(var i=0; i<charaList1.length; i++){
        sumRank = Percent(sumRank,charaList1[i]["rank"]);
    }
    var hitRand = Math.floor( Math.random() * sumRank ) ;
    
    var sumPer = 0;
    for(var j=0; j<charaList1.length; j++){        
        sumPer = Percent(sumPer,charaList1[j]["rank"]);
        var hitItem = charaList1[j];
        if(hitRand < sumPer){ break; }
    }
    console.log(hitItem);
}

//10連
function Normal10(){
    //召喚数に+10
    sp_plus(10);
    
    charaList1 = JSON.parse(sessionStorage.getItem('charaList'));
    var normalList = [];
    
    for(var k=0; k<10; k++){
        
        var sumRank = 0;
    
        for(var i=0; i<charaList1.length; i++){
            sumRank = Percent(sumRank,charaList1[i]["rank"]);
        }
        var hitRand = Math.floor( Math.random() * sumRank ) ;
    
        var sumPer = 0;
        for(var j=0; j<charaList1.length; j++){        
            sumPer = Percent(sumPer,charaList1[j]["rank"]);
            var hitItem = charaList1[j];
            if(hitRand < sumPer){ break; }
        }
        updatePC(hitItem["id"]);
        normalList.push(hitItem);
    }
    sessionStorage.setItem('normalList', JSON.stringify(normalList));
}

//rank→percent
function Percent(sum,rank){
    if(rank == 1){
        sum += 100;
        return sum;
    }else if(rank == 2){
        sum += 30;
        return sum;
    }else{
        sum += 1;
        return sum;
    }
}

//召喚ポイント加算
function sp_plus(num){
    var sp = JSON.parse(localStorage.getItem('sp'));
    sp += num;
    localStorage.setItem('sp', JSON.stringify(sp));
}


//PC情報更新
function updatePC(hitID){
    console.log(hitID);
    db.transaction(function (tx){
        tx.executeSql('select * from pc_info2 where id = ?', [hitID],
            function (tx, results){
                var hitID2 = results.rows.item(0).id;
                var pf = results.rows.item(0).pf;
                
                //??????????????????
                console.log("pf:" + results.rows.item(0).pf);
                // if(pf==0){ //所持フラグ：0
                //     console.log("hitID2"+hitID2);
                //     updatePF(hitID2);
                // }
            }
        )
    })
}

//所持フラグアップデート
function updatePF(hitID3){
    db.transaction(function (tx){
      //tx.executeSql('update pc_info2 set pf = ? where id = ?', [1, hitID3])
    })
    //console.log(hitId);
}

