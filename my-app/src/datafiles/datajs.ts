const datajs = [
    ['console.log()', '()の中をコンソールに表示する'],
    ['for文', '繰り返す'],
    ['if文', '条件分岐する'],
    ['function( () ⇒ {} )', '同じ処理をまとめる関数を定義する'],
    ['return', '関数の戻り値を返す。その時点で関数は終了する。処理を終了するまで待つ'],
    ['async / await', '非同期関数を定義する。APIを叩くときなど時間がかかる処理に使われることが多い'],
    ['axios.post() / axios.get()', 'webの通信（HTTPプロトコル）の処理をする。POSTはデータを送り、GETはデータを受け取る'],
    ['try catch', 'tryで実行する処理にエラーが発生した場合、catch以下を実行する。上二つとそれなりにセットで使われる'],
    ['require', 'モジュールをコード内で使えるようにする。npm install したライブラリを使用するときに使われることが多い'],
    ['new', 'インスタンスを生成する。インスタンスは色々な機能を持った関数の塊群のようなイメージ']
];

export { datajs };