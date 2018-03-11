//メインミュージック設定
function setMusic(){
    var res = confirm("メイン画面BGMに設定しますか？");
    if( res == true ) {
        // OK
        // location.href = "./index.html";   
    }
    else {
    }
}

//メインキャラクターの変更
function changeMainChara(charaId){    
    localStorage.setItem('mainChara', JSON.stringify(charaId));
    db.transaction(function (tx){
      tx.executeSql('update users set mainChara = ? where id = ?', [charaId, id])
    })
    alert("メインキャラに設定しました。");
}

//
function evolutionaryStageIcon(id, eFlag, pFlag){
    
    if(pFlag == 0){
        return  '<a class="thumbnail" data-toggle="modal" data-target="#chara"><img src="https://drive.google.com/uc?id=1u9FL2LckaqPNW0Lh52K5npoI0Kx2Q1KF"></a>';
    }else if(eFlag == 1 && pFlag == 1){
        return '<a class="thumbnail" data-toggle="modal" data-target="#chara' + id + '"><img src="' + charaList1[id]["i_pic01"] + '"></a>';
    }else if(eFlag == 2 && pFlag == 1){
        return '<a class="thumbnail" data-toggle="modal" data-target="#chara' + id + '"><img src="' + charaList1[id]["i_pic02"] + '"></a>';
    }else{
        return '<a class="thumbnail" data-toggle="modal" data-target="#chara' + id + '"><img src="' + charaList1[id]["i_pic03"] + '"></a>';
    }
}

//絆レベル表記
function bondsPointLevel(bp){
    var num = Math.floor(bp/2000);
    return num;
}

//絆情報表記
function bondsPointInfo(bp,id,level){
    if(level == 1 && bp >= 2000){
        return charaList1[id]["profile_1"];    
    }else if(level == 1 && bp <= 2000){
        return "解法条件：絆レベル1";
    }else if(level == 2 && bp >= 4000){
        return charaList1[id]["profile_2"];    
    }else if(level == 2 && bp <= 4000){
        return "解法条件：絆レベル2";
    }else if(level == 3 && bp >= 6000){
        return charaList1[id]["profile_3"];    
    }else if(level == 3 && bp <= 6000){
        return "解法条件：絆レベル3";
    }else if(level == 4 && bp >= 8000){
        return charaList1[id]["profile_4"];    
    }else if(level == 4 && bp <= 8000){
        return "解法条件：絆レベル4";
    }else if(level == 5 && bp >= 10000){
        return charaList1[id]["profile_5"];    
    }else if(level == 5 && bp <= 10000){
        return "解法条件：絆レベル5";
    }
    
}

//絆会話表記
function bondsPointTalk(bp,id,level){
    if(level == 5 && bp >= 5000){
        return charaList1[id]["talk5_01"] +'<br>・'+ charaList1[id]["talk5_02"] +'<br>・'+ charaList1[id]["talk5_03"] ;
    }else if(level == 5 && bp <= 5000){
        return "解法条件：絆レベル5";
    }else if(level == 10 && bp >= 10000){
        return charaList1[id]["talk10_01"] +'<br>・'+ charaList1[id]["talk10_02"] +'<br>・'+ charaList1[id]["talk10_03"] ;
    }else{
        return "解法条件：絆レベル10";
    }
}

//カード進化表記
function evolutionaryStageCard(id,level,flagLevel){
    if(level == 2 && flagLevel == 2){
        return '<img src="' + charaList1[id]["c_pic02"] + '" alt="Second slide">';
    }else if(level == 2 && flagLevel != 2){
        return '<img src="https://drive.google.com/uc?id=1RbtX0YjPTPfNQ9A0LetHQWEnSlocpRGn" alt="Second slide">';
    }else if(level == 3 && flagLevel == 3){
        return '<img src="' + charaList1[id]["c_pic03"] + '" alt="Third slide">';
    }else{
        return '<img src="https://drive.google.com/uc?id=1RbtX0YjPTPfNQ9A0LetHQWEnSlocpRGn" alt="Third slide">';
    }
}