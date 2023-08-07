// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

// function toggleMe(a){
//     var e=document.getElementById(a);
//     if(!e)return true;
//     if(e.style.display=="none"){
//       e.style.display="block"
//     } else {
//       e.style.display="none"
//     }
//     return true;
//   }

function displayRadioValue(w) {
let div = document.querySelector(`.${w}`)
 console.log(div.firstElementChild.firstElementChild.firstElementChild)
let radi =div.firstElementChild.firstElementChild.firstElementChild 
radi.checked = true
  var ele = document.getElementsByName('fav_language')
  for (i = 0; i < ele.length; i++) {
    // radi.checked = true
  if(ele[i].checked){
    console.log(ele[i].parentElement.parentElement.previousElementSibling);
    let v = ele[i].parentElement.parentElement.nextElementSibling
    v.style.display="block"
    // ele[i].style. backgroundColor='green';
    ele[i].parentElement.parentElement.style.border='none'
    ele[i].parentElement.parentElement.parentElement.style.cssText = 'border: 2px solid green; border-radius: 5px;';

    // ele[i].parentElement.parentElement.parentElement.style.backgroundColor="rgb(217, 235, 211)"

    div.style.backgroundColor="#E8F9FD"

  }
  else{
    console.log(ele[1].parentElement.parentElement.previousElementSibling);
    let v = ele[i].parentElement.parentElement.nextElementSibling
    ele[i].parentElement.parentElement.parentElement.style.border='none'
    ele[i].parentElement.parentElement.style.border='1px solid silver'


    ele[i].parentElement.parentElement.parentElement.style.background="white"
    v.style.display="none"

    // div.style.backgroundColor="white"
  }
}




  // for (i = 0; i < ele.length; i++) {
  //     if (ele[i].checked)
  //         document.getElementById("result").innerHTML
  //             = "Gender: " + ele[i].value;
  // }
}

