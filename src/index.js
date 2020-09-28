import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MyHello from "./MyHello";
import * as serviceWorker from "./serviceWorker";
import MyType from "./MyType";
import MyAttrMulti from "./MyAttrMulti";
import MyHelloContent from "./MyHelloContent";
import MyBook from "./MyBook";
import MyHelloDef from "./MyHelloDef";
import MyArticle from "./MyArticle";
import MyEvent from "./MyEvent";
import MyPool from "./MyPool";
import MyState from "./MyState";
import MyParent from "./MyParent";
import MyForm from "./MyForm";

const data = {
  name: "山田権左衛門",
  age: 18,
  sex: "男",
};

const book = {
  isbn: "WGS-JST-001",
  title: "速習 webpack",
  price: 454,
  published: "WINGSプロジェクト",
};

const articles = [
  {
    url: "https://www.atmarkit.co.jp/ait/series/9383/",
    title: "Angular TIPS",
    description:
      "人気のJavaScriptフレームワーク「Angular」の目的別リファレンス",
    isNew: true,
  },
];

const list = articles.map((article) => (
  <MyArticle {...article} key={article.url} />
));

ReactDOM.render(
  <div>
    <App />
    <MyHello name="uk" />
    <MyType value="山田" />
    <MyType value={"鈴木"} />
    <MyType value={108} />
    <MyType value={true} />
    <MyType value={["うめ", "もも", "さくら"]} />
    <MyType value={() => console.log("Hoge")} />
    <MyAttrMulti {...data} />
    <MyHelloContent>
      <b>山田</b>
    </MyHelloContent>
    <MyBook info={book} />
    <MyHelloDef />
    <dl>{list}</dl>
    <MyEvent greet="Hello" />
    <MyPool />
    <MyState />
    <MyParent />
    <MyForm />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
