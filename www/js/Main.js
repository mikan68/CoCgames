//現在時刻表示
function set2fig(num) {
   // 桁数が1桁だったら先頭に0を加えて2桁に調整
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}
function showClock2() {
   var nowTime = new Date();
   var nowHour = set2fig( nowTime.getHours() );
   var nowMin  = set2fig( nowTime.getMinutes() );
   var nowSec  = set2fig( nowTime.getSeconds() );
   var msg = "<span class='glyphicon glyphicon-time' aria-hidden='true'></span>  " + nowHour + ":" + nowMin + ":" + nowSec;
   document.getElementById("RealtimeClockArea2").innerHTML = msg;
}
setInterval('showClock2()',1000);

//召喚数(SummonPoint)
db.transaction(function (tx){
    tx.executeSql('select * from users where id =' + id + ';', [],
        function (tx, results){
            var sp = results.rows.item(0).summon_point;
            document.getElementById("summonPoint").innerHTML = "SummonPoint : " + sp;
        }
    )
})

//メインキャラ会話
function ramdomTalk(talkNum){
    var talkAll = [ charaList1[mainChara-1]["talk_01"], charaList1[mainChara-1]["talk_02"], charaList1[mainChara-1]["talk_03"]] ;
    var talk = talkAll[ talkNum ] ;
    return talk;
}
