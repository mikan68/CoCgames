function Normal(){
    sp_plus(1); //召喚数+1
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
    sp_plus(10); //召喚数に+10
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
    updateBondsPoint(10); //絆ポイントに+10
    sessionStorage.setItem('normalList', JSON.stringify(normalList));
}

//rank→percent
function Percent(sum,rank){
    if(rank == 1){
        sum += 1000;
        return sum;
    }else if(rank == 2){
        sum += 300;
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
    //console.log(hitID);
    updatePossessionFlagAndDate(hitID);
    updateNumberOfSummons(hitID);
}

function updateBondsPoint(num){ //絆ポイント更新
    var mainChara = JSON.parse(localStorage.getItem('mainChara'));
    var possessionCharaList = JSON.parse(localStorage.getItem('possessionCharaList'));
    var pcl = [];
    for( var i=0; i<possessionCharaList.length; i++ ){
        var chara = {};
        chara["id"] = possessionCharaList[i]["id"];
        if(mainChara == possessionCharaList[i]["id"]){
            chara["bondsPoint"] = possessionCharaList[i]["bondsPoint"] + num;
        }else{
            chara["bondsPoint"] = possessionCharaList[i]["bondsPoint"];
        }
        chara["numberOfSummons"] = possessionCharaList[i]["numberOfSummons"];
        chara["evolutionaryStage"] = possessionCharaList[i]["evolutionaryStage"];
        chara["possessionFlag"] = possessionCharaList[i]["possessionFlag"];
        chara["summonDate"] = possessionCharaList[i]["summonDate"];
        pcl.push(chara);
    }
    localStorage.setItem('possessionCharaList', JSON.stringify(pcl));
}

function updatePossessionFlagAndDate(hitID){ //所持フラグ、召喚日更新
    var possessionCharaList = JSON.parse(localStorage.getItem('possessionCharaList'));
    for ( var i=0; i<possessionCharaList.length; i++ ) {
        if(hitID == possessionCharaList[i]["id"] && possessionCharaList[i]["possessionFlag"] == 0){ //未所持
            var pcl = [];
            for( var j=0; j<possessionCharaList.length; j++ ){
                var chara = {};
                if(hitID == possessionCharaList[j]["id"]){
                    chara["id"] = possessionCharaList[j]["id"];
                    chara["bondsPoint"] = 0;
                    chara["numberOfSummons"] = 0;
                    chara["evolutionaryStage"] = 1;
                    chara["possessionFlag"] = 1;
                    chara["summonDate"] = new Date();

                    pcl.push(chara);
                }else{
                    chara["id"] = possessionCharaList[j]["id"];
                    chara["bondsPoint"] = possessionCharaList[j]["bondsPoint"];
                    chara["numberOfSummons"] = possessionCharaList[j]["numberOfSummons"];
                    chara["evolutionaryStage"] = possessionCharaList[j]["evolutionaryStage"];
                    chara["possessionFlag"] = possessionCharaList[j]["possessionFlag"];
                    chara["summonDate"] = possessionCharaList[j]["summonDate"];

                    pcl.push(chara);
                }
                localStorage.setItem('possessionCharaList', JSON.stringify(pcl));
            }
        }
    }
}

function updateNumberOfSummons(hitID){ //召喚回数更新
    var possessionCharaList = JSON.parse(localStorage.getItem('possessionCharaList'));
    var pcl = [];
    for( var i=0; i<possessionCharaList.length; i++ ){
        var chara = {};
        chara["id"] = possessionCharaList[i]["id"];
        chara["bondsPoint"] = possessionCharaList[i]["bondsPoint"];
        if(hitID == possessionCharaList[i]["id"]){
            chara["numberOfSummons"] = possessionCharaList[i]["numberOfSummons"] + 1;
            chara["possessionFlag"] = 1;
        }else{
            chara["numberOfSummons"] = possessionCharaList[i]["numberOfSummons"];
            chara["possessionFlag"] = possessionCharaList[i]["possessionFlag"];
        }
        chara["evolutionaryStage"] = possessionCharaList[i]["evolutionaryStage"];
        chara["summonDate"] = possessionCharaList[i]["summonDate"];
        pcl.push(chara);
    }
    localStorage.setItem('possessionCharaList', JSON.stringify(pcl));
}