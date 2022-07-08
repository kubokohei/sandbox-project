import "./styles.css";

const onClickAdd = () => {
  // テキストボックスを取得し、初期化する
  const text = document.getElementById("addForm").value;
  document.getElementById("addForm").value = "";

  // div生成、横並びのクラス付与
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成、TODOの文言追加
  const li = document.createElement("li");
  li.innerText = text;

  // button（完了）タグ生成
  const buttonComplete = document.createElement("button");
  buttonComplete.innerText = "完了";

  // 完了ボタンにイベントハンドラを追加
  buttonComplete.addEventListener("click", () => {
    // 完了リストに追加する
    // div生成
    const div = document.createElement("div");
    div.className = "list-row";
    // li生成
    const li = document.createElement("li");
    li.innerText = text;
    // button（戻す）生成
    const buttonBack = document.createElement("button");
    buttonBack.innerText = "戻す";

    // 戻すボタンにイベントハンドラを追加
    buttonBack.addEventListener("click", () => {
      // 完了リストから削除する
      const deleteTarget = buttonBack.parentNode;
      document.getElementById("complete-area").removeChild(deleteTarget);

      // 未完了リストに追加
      // div生成、横並びのクラス付与
      const div = document.createElement("div");
      div.className = "list-row";

      // liタグ生成、TODOの文言追加
      const li = document.createElement("li");
      li.innerText = text;

      // button（完了）タグ生成
      const buttonComplete = document.createElement("button");
      buttonComplete.innerText = "完了";

      // divタグの子要素に各要素を追加
      div.appendChild(li);
      div.appendChild(buttonComplete);
      div.appendChild(buttonDelete);
      // 未完了リストに追加
      document.getElementById("incomplete-list").appendChild(div);
    });

    div.appendChild(li);
    div.appendChild(buttonBack);
    document.getElementById("complete-area").appendChild(div);

    // 未完了リストから削除する
    const deleteTarget = buttonComplete.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // button（削除）タグ生成
  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "削除";

  // 削除ボタンにイベントハンドラを追加
  buttonDelete.addEventListener("click", () => {
    // 押下された削除ボタンの親タグ（div）を未完了リストから削除
    const deleteTarget = buttonDelete.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を追加
  div.appendChild(li);
  div.appendChild(buttonComplete);
  div.appendChild(buttonDelete);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// addButtonが押下された際にonClickAddメソッドを呼び出す
document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
