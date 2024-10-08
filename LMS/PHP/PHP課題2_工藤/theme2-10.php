<?php
// 以下は1980から2080までの数字を順番に表⽰するプログラムです。
// うるう年を判定するよう条件を追加し、例のように表⽰してください。
// 判定は関数に記述し、関数を呼び出して結果表⽰すること
// 表⽰例）
// 1900年
// 1901年
// 1903年
// 1904年はうるう年です。
// .
// .
// 1999年
// 2000年はうるう年です。
// .
// .
// 以下省略
// ＜うるう年の条件＞
//⻄暦年が4で割り切れる年はうるう年
// ただし、⻄暦年が100で割り切れる年はうるう年ではない
//  ただし、⻄暦年が400で割り切れる年はうるう年
function isLeapYear($year) {
// この関数に判定処理を記述
return $year % 4 == 0 && $year % 100 != 0 || $year % 400 == 0;
}


?>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>うるう年判定</title>
</head>
<body>
<!-- ここに表⽰例の通り表⽰ -->
<?php
for ($i=1980; $i<=2080; $i++) printf('%d%s<br>', $i, isLeapYear($i) ? 'はうるう年です。' : '');
?>
</body>
</html>