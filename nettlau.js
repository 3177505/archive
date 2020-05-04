// const form = document.querySelector('form');
// const input = document.querySelector('input[type="file"]');
// const button = document.querySelectorAll('#button');
// const container = document.querySelector('#content');
//
// const sizeLimit = 5 * 1024 * 1024; // 5mb in bytes
//
// input.onchange = () => {
// 	const file = input.files[0];
// 	if (!file) { return; }
// 	if (file.size > sizeLimit) {
// 		alert('This file is too big.');
// 		return;
// 	}
// 	container.innerText = 'Enjoy your file.';
// 	form.submit();
//
// 	// return to start
// 	// TODO: make this a localStorage flag for the exhibition
// 	setTimeout(
// 		() => { window.location.reload(); },
// 		7000
// 	);
// };
//
// button.forEach((b) => {
// 	b.onclick = () => input.click();
// });

//blob saving
// var saveData = (function () {
//     var a = document.createElement("a");
//     document.body.appendChild(a);
//     a.style = "display: none";
//     return function (data, fileName) {
//         var json = JSON.stringify(data),
//             blob = new Blob([json], {type: "projects/p_13/4.jpg"}),
//             url = window.URL.createObjectURL(blob);
//         a.href = url;
//         a.download = fileName;
//         a.click();
//         window.URL.revokeObjectURL(url);
//     };
// }());
//
// var data = { x: 42, s: "hello, world", d: new Date() },
//     fileName = "projects/p_13/4.jpg";
//
// saveData(data, fileName);


var canvas = document.getElementById("my-canvas");
var ctx = canvas.getContext("2d");
var pixel_size = 1;

function draw() {
    console.log("draw");

    canvas.toBlob(function(blob) {
      saveAs(blob, 'mypng.png');
    });
}
window.requestAnimationFrame(draw);
