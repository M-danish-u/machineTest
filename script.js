function displayRadioValue(w) {
  let div = document.querySelector(`.${w}`);
  console.log(div.firstElementChild.firstElementChild.firstElementChild);
  let radi = div.firstElementChild.firstElementChild.firstElementChild;
  radi.checked = true;
  var ele = document.getElementsByName("fav_language");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      console.log(ele[i].parentElement.parentElement.previousElementSibling);
      let v = ele[i].parentElement.parentElement.nextElementSibling;
      v.style.display = "block";
      ele[i].parentElement.parentElement.style.border = "none";
      ele[i].parentElement.parentElement.parentElement.style.cssText =
        "border: 2px solid green; border-radius: 5px;";

      div.style.backgroundColor = "#E8F9FD";
    } else {
      console.log(ele[1].parentElement.parentElement.previousElementSibling);
      let v = ele[i].parentElement.parentElement.nextElementSibling;
      ele[i].parentElement.parentElement.parentElement.style.border = "none";
      ele[i].parentElement.parentElement.style.border = "1px solid silver";

      ele[i].parentElement.parentElement.parentElement.style.background =
        "white";
      v.style.display = "none";
    }
  }
}
