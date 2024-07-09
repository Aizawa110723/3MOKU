// const A = document.querySelector('#A');
// const B = document.querySelector('#B');
// const C = document.querySelector('#C');
// const D = document.querySelector('#D');
// const E = document.querySelector('#E');
// const F = document.querySelector('#F');
// const G = document.querySelector('#G');
// const H = document.querySelector('#H');
// const I = document.querySelector('#I');

// // ↓共通のカウンター
// let count = 0;

// A.addEventListener('click', () => {
//     count++;
//     // 奇数偶数の判定
//     if (count%2===1){
//         A.textContent = '〇';
//     } else {
//         A.textContent = '×';
//     }
// });

// B.addEventListener('click', () => {
//     count++;
//     if (count%2===1){
//         B.textContent = '〇';
//     } else {
//         B.textContent = '×';
//     }
// });

// C.addEventListener('click', () => {
//     count++;
//     if (count%2===1){
//         C.textContent = '〇';
//     } else {
//         C.textContent = '×';
//     }
// });

// D.addEventListener('click', () => {
//     count++;
//     if (count%2===1){
//         D.textContent = '〇';
//     } else {
//         D.textContent = '×';
//     }
// });

// E.addEventListener('click', () => {
//     count++;
//     if (count%2===1){
//         E.textContent = '〇';
//     } else {
//         E.textContent = '×';
//     }
// });
// F.addEventListener('click', () => {
//     count++;
//     if (count%2===1){
//         F.textContent = '〇';
//     } else {
//         F.textContent = '×';
//     }
// });
// G.addEventListener('click', () => {
//     count++;
//     if (count%2===1){
//         G.textContent = '〇';
//     } else {
//         G.textContent = '×';
//     }
// });
// H.addEventListener('click', () => {
//     count++;
//     if (count%2===1){
//         H.textContent = '〇';
//     } else {
//         H.textContent = '×';
//     }
// });
// I.addEventListener('click', () => {
//     count++;
//     if (count%2===1){
//         I.textContent = '〇';
//     } else {
//         I.textContent = '×';
//     }
// });


// これは配列が返る
const masu = document.querySelectorAll('.board div');
console.log(masu);

let count = 0;

for (let i = 0; i < 9; i++) {

    masu[i].addEventListener('click', () => {
        count++;
        if (count % 2 === 1) {
            // 奇数偶数の判定
            masu[i].textContent = '〇';
        } else {
            masu[i].textContent = '×';
        }
    });

};
