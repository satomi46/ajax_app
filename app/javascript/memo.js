function post (){
  const submit = document.getElementById("submit")
  submit.addEventListener("click", (e) => { // これがアロー関数！？
    e.preventDefault(); // デフォルトのデータ送信を無効化、Ajax通信のみデータ送信するように
    const form = document.getElementById("form");
    const formData = new FormData(form); // FormDataメソッドでformの値を変数formDataに代入
    const XHR = new XMLHttpRequest(); // new XMLHttpRequestメソッドでAjax通信のためのオブジェクトを生成=変数XHR
    XHR.open("POST", "/posts", true); // HTTPメソッドはPOST、パスは/posts、非同期通信はtrue
    XHR.responseType = "json"; // JSONでレスポンスを返しますよ
    XHR.send(formData); // サーバーにリクエストを送信。XMLHttpRequestオブジェクトが使えるメソッド
  });
};

window.addEventListener('load', post);