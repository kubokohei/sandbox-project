import "./styles.css";

const onClickAdd = () => {
  // テキストボックスを取得し、初期化する
  const inputText = document.getElementById("addForm").value;
  document.getElementById("addForm").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = "";
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
