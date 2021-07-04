// // var val1 = "var変数";
// // console.log(val1);
// // // var変数は上書き、再宣言可能
// // val1 = "var変数を上書き";
// // console.log(val1);

// // let val2 = "let変数";
// // console.log(val2);

// // val2 = "let変数を上書き";
// // console.log(val2);
// // // let val2 = "let変数を再宣言";

// // const val3 = "const変数";
// // val3 = "const";

// // const name = "じゃけぇ";
// // const age = 28;

// // const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// // console.log(message1);

// // //テンプレート文字列を利用
// // const message2 = `私の名前は${name}です。年齢は${age}です`;
// // console.log(message2);

// // function func1(str) {
// //   return str;
// // }
// // const func1 = function (str) {
// //   return str;
// // };
// // console.log(func1("func1です"));

// // const func2 = (str) => {
// //   return str;
// // };

// // const func3 = (num1, num2) => {
// //   return num1 + num2;
// // };
// // console.log(func3(10, 30));

// // const myProfile = {
// //   name: "ジャケぇ",
// //   age: 28
// // };

// // const message1 = `名前は${myProfile.name}です。${myProfile.age}です。`;
// // console.log(message1);

// // const { name, age } = myProfile;
// // const message2 = `名前は${name}です。${age}です。`;
// // console.log(message2);

// // const myProfile = ["ジャケ", 28];
// // const message3 = `名前は${myProfile[0]}`;

// //デフォルト値

// // const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}`);
// // sayHello();

// //スポレッド構文...
// // const arr1 = [1, 2];
// // // console.log(...arr1);

// // const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// // sumFunc(...arr1);

// //まとめる
// // const arr2 = [1, 2, 3, 4, 5];
// // const [num1, num2, ...arr3] = arr2;
// // console.log(num1);
// // console.log(arr3);

// //配列のコピー、結合
// // const arr4 = [10, 20];
// // const arr5 = [30, 40];
// // console.log([...arr4, ...arr5]);

// //map,filterを利用
// const nameArr = ["たなか", "山田", "aa"];
// // for (let index = 0; index < nameArr.length; index++) {
// //   console.log(nameArr[index]);
// // }
// // const nameArr2 = nameArr.map((name) => {
// //   return name + "くん";
// // });
// // console.log(nameArr2);

// // const numArr = [1, 2, 3, 4, 5];
// // const newNumArr = numArr.filter((num) => {
// //   return num % 2 === 1;
// // });
// // console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "aa") {
//     return name;
//   } else {
//     return name + "さん";
//   }
// });
// console.log(newNameArr);

//三項演算子

// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

const num = 1300;
// console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);
