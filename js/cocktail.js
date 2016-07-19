var prize = {
	day1: 300,
	day2: 400,
	day3: 500,
	day4: 600,
	day5: 700,
	day6: 800,
	day7: 900,
	day8: 1000,
	day9: 1100
};

function day2open(){ // day1
// ローカルストレージに保存する
        var day2cookie = 'day2/day2.html';

        localStorage.setItem("openday2", day2cookie); // ステージ2を解禁
        var cassisorange = "cocktail/cassisorange.html";
        localStorage.setItem("cocktail1", cassisorange); // 基本報酬のレシピ
        
        var point = 0;
        var newpoint = point + prize['day1'];     //ここの300という値はステージごとの報酬ポイントです。

        localStorage.setItem("received2","取得済み");
        localStorage.setItem("point", newpoint); // 計算結果を器に入れる。
        
        alert(prize['day1'] + "ポイント獲得");                            
        alert("新しいステージが解禁されました！");
        alert("コレクションに“カシスオレンジ”が追加されました！");
        
        $("#point").css("display", "none");

        
}

    
function day3open(){ // day2
// ローカルストレージに保存する
        var day3cookie = 'day3/day3.html';

        localStorage.setItem("openday3", day3cookie); // ステージ4を解禁
        var kahluamilk = "cocktail/kahluamilk.html";
        localStorage.setItem("cocktail2", kahluamilk); // 基本報酬のレシピ
        
        var point = 0;
        point = localStorage.getItem("point"); // 現在のポイント数を取得。
        point = parseInt(point);    // int型に変換
        var newpoint = point + prize['day2'];     //ここの300という値はステージごとの報酬ポイントです。

        localStorage.setItem("received3","取得済み");
        localStorage.setItem("point", newpoint); // 計算結果を器に入れる。

        alert(prize['day2'] + "ポイント獲得");                            
        alert("新しいステージが解禁されました！");
        alert("コレクションに“カルーアミルク”が追加されました！")
        
        $("#point").css("display", "none");

}

function day4open(){ // day3 = taikai1 day4の解禁
// ローカルストレージに保存する
        var day4cookie = 'day4/day4.html'; // day4の解禁
        localStorage.setItem("openday4", day4cookie); 
    
        var tourcookie = 'tour/tour1.html';// taikai1の解禁
        localStorage.setItem("opentour",tourcookie);
    
        var screwdriver = "cocktail/screwdriver.html";
        localStorage.setItem("cocktail3",screwdriver); // 基本報酬のレシピ
        
        var point = 0;
        point = localStorage.getItem("point"); // 現在のポイント数を取得。
        point = parseInt(point);    // int型に変換
        var newpoint = point + prize['day3'];     //ここの300という値はステージごとの報酬ポイントです。

        localStorage.setItem("received4","取得済み");
        localStorage.setItem("point", newpoint); // 計算結果を器に入れる。
        alert(prize['day3'] + "ポイント獲得");                                   
        alert("新しいステージが解禁されました！");
        alert("コレクションに“スクリュードライバー”が追加されました！")
        alert("大会が遊べるようになりました！")
}

function day5open(){ //day4
// ローカルストレージに保存する
        var day5cookie = 'day5/day5.html';

        localStorage.setItem("openday5", day5cookie); // ステージ4を解禁
        var moscowmule = "cocktail/moscowmule.html";
        localStorage.setItem("cocktail4", moscowmule); // 基本報酬のレシピ
        
        var point = 0;
        point = localStorage.getItem("point"); // 現在のポイント数を取得。
        point = parseInt(point);    // int型に変換
        var newpoint = point + prize['day4'];     //ここの300という値はステージごとの報酬ポイントです。

        localStorage.setItem("received5","取得済み");
        localStorage.setItem("point", newpoint); // 計算結果を器に入れる。
		alert(prize['day4'] + "ポイント獲得");                                   
        alert("新しいステージが解禁されました！");
        alert("コレクションに“モスコミュール”が追加されました！")
}

function day6open(){
// ローカルストレージに保存する
        var day6cookie = 'day6/day6.html';

        localStorage.setItem("openday6", day6cookie); // ステージ4を解禁
        var cocktail = "cocktail/clumberrysoda.html";
        localStorage.setItem("cocktail5", clumberrysoda); // 基本報酬のレシピ
        
        var point = 0;
        point = localStorage.getItem("point"); // 現在のポイント数を取得。
        point = parseInt(point);    // int型に変換
        var newpoint = point + prize['day5'];     //ここの300という値はステージごとの報酬ポイントです。

        localStorage.setItem("received6","取得済み");
        localStorage.setItem("point", newpoint); // 計算結果を器に入れる。
		alert(prize['day5'] + "ポイント獲得");                                                          
        alert("新しいステージが解禁されました！");
        alert("コレクションに“クランベリーソーダ”が追加されました！")
}

function day7open(){
// ローカルストレージに保存する
        var day6cookie = 'day7/day7.html';

        localStorage.setItem("openday7", day6cookie); // ステージ4を解禁
        var glad_eye = "cocktail/glad_eye.html";
        localStorage.setItem("cocktail", glad_eye); // 基本報酬のレシピ
                               
        var point = 0;
        point = localStorage.getItem("point"); // 現在のポイント数を取得。
        point = parseInt(point);    // int型に変換
        var newpoint = point + prize['day6'];     //ここの300という値はステージごとの報酬ポイントです。

        localStorage.setItem("received7","取得済み");
        localStorage.setItem("point", newpoint); // 計算結果を器に入れる。
        
		alert(prize['day6'] + "ポイント獲得");                                                    
        alert("新しいステージが解禁されました！");
        alert("コレクションに“グラッドアイ”が追加されました！")
}

function day8open(){
// ローカルストレージに保存する
        var day7cookie = 'day8/day8.html';

        localStorage.setItem("openday8", day7cookie); // ステージ4を解禁
        var black_devil = "cocktail/black_devil.html";
        localStorage.setItem("cocktail", black_devil); // 基本報酬のレシピ
                               
        var point = 0;
        point = localStorage.getItem("point"); // 現在のポイント数を取得。
        point = parseInt(point);    // int型に変換
        var newpoint = point + prize['day7'];     //ここの300という値はステージごとの報酬ポイントです。

        localStorage.setItem("received8","取得済み");
        localStorage.setItem("point", newpoint); // 計算結果を器に入れる。  
        
        alert(prize['day7'] + "ポイント獲得");                                                                 
        alert("新しいステージが解禁されました！");
        alert("コレクションに“ブラックデビル”が追加されました！")
}

function day9open(){
// ローカルストレージに保存する
        var day8cookie = 'day9/day9.html';

        localStorage.setItem("openday9", day8cookie); // ステージ4を解禁
        var king_alfonso = "cocktail/king_alfonso.html";
        localStorage.setItem("cocktail", king_alfonso); // 基本報酬のレシピ
        
        var point = 0;
        point = localStorage.getItem("point"); // 現在のポイント数を取得。
        point = parseInt(point);    // int型に変換
        var newpoint = point + prize['day8'];     //ここの300という値はステージごとの報酬ポイントです。

        localStorage.setItem("received9","取得済み");
        localStorage.setItem("point", newpoint); // 計算結果を器に入れる。
          
        alert(prize['day8'] + "ポイント獲得");                                                                 
        alert("新しいステージが解禁されました！");
        alert("コレクションに“キングアルフォンソ”が追加されました！")
}

$(document).ready(function() {
				$("#os-phrases > h2").lettering('words').children("span").lettering().children("span").lettering(); 
			})
			
function cookiesakujo(){
        localStorage.removeItem("openstage2");
        alert("クッキーを削除しました");
}
