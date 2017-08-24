var textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', autosize);

remove_change_work();

function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

function fake_click() {
  var inp = document.createElement("input");
  // inp.setAttribute("multiple","");
  var inp_attr = ["type"];
  var inp_val = ["file"];
  for (var i = 0; i<inp_attr.length;i++) {
    inp.setAttribute(inp_attr[i],inp_val[i]);
  }
  inp.addEventListener("click", function () {
    this.addEventListener("change", function(){
      var match = this.value.split(/(\\|\/)/g).pop();
      var appendix = document.getElementById("button_block");
      var rand = Math.floor(Math.random() * (1000000 - 0)) + 0;
      var x = '<div id="_' + rand + '"' + ' class="file-item"><img class="file-logo" src="./src/file.svg"/><span class="file-name">' + match + '</span><img class="delete" src="./src/delete.svg" onclick="remove_file()"/></div>';
      appendix.insertAdjacentHTML('beforebegin',x);
    });
  });
  inp.click();
}

function remove_file() {
  var cont = document.getElementById("file_container");
  cont.onclick = function(e) {
  if (!e.target.classList.contains('delete')) return;
  var x = e.target.parentNode;
  x.remove();
}}

function change_work() {
  var x = document.getElementById('work_type_block');
  x.classList.add("show");
}

function remove_change_work() {
  var x = document.querySelector('#work_type_block');
  x.addEventListener("click", function (e){
    var target = e.target.textContent;
    var input = document.querySelector('.main-type-1 #item-content');
    var block = document.getElementById('work_type_block');
    if (e.target.tagName !== "P") {
          block.classList.remove("show");
    }
    else {
      block.classList.remove("show");
      input.value = target;
    }
  });
}
