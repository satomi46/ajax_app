function post (){
  const submit = document.getElementById("submit")
  submit.addEventListener("click", (e) => { // これがアロー関数か！？
    e.preventDefault(); // デフォルトのデータ送信を無効化、Ajax通信のみデータ送信するように
    const form = document.getElementById("form");
    const formData = new FormData(form); // FormDataメソッドでformの値を変数formDataに代入
    const XHR = new XMLHttpRequest(); // new XMLHttpRequestメソッドでAjax通信のためのオブジェクトを生成=変数XHR
    XHR.open("POST", "/posts", true); // HTTPメソッドはPOST、パスは/posts、非同期通信はtrue
    XHR.responseType = "json"; // JSONでレスポンスを返しますよ
    XHR.send(formData); // サーバーにリクエストを送信。XMLHttpRequestオブジェクトが使えるメソッド

    XHR.onload = () => { //通信が成功したときの処理
      const item = XHR.response.post; //レスポンスの中から投稿されたメモの情報を抽出しitemへ格納
      const html = `
      <div class="post">
        <div class="post-date">
          投稿日時：${item.created_at}
        </div>
        <div class="post-content">
          ${item.content}
        </div>
      </div>`;
    };
  });
};

window.addEventListener('load', post);