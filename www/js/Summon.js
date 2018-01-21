function Normal(){
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