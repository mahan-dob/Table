
// function google(){
//     alert('redy');
//     window.location.href = "https://google.com";
// }

// setTimeout(google,3000)

// let newWindow = window.open("https://google.com", "_blank");

// function closeWin (){
//     window.close(newWindow)
// }

// setTimeout(closeWin,5000)

// window.scrollTo({
//     top:1000
// })

// const nodeslen = document.body.childNodes.length;

// for (let index = 0; index < nodeslen; index++) {
//     console.log(document.body.childNodes[index]);
// }


// let isred=true;
// function setColor (){
//     if(isred){
//         document.body.style.background="#ef0000";
//         isred=false;
//     }else{
//         document.body.style.background="#00b";
//         isred=true;
//     }
// }

// setInterval(setColor,2000);

// document.getElementById("test").style="    background: red;";


let rows = document.querySelectorAll("table tbody tr");

for (let i = 0; i < rows.length; i++) {
  let cell = rows[i].children[i];
  if (cell) {
    cell.style.background = "#1c1c1c66";
  }
}

