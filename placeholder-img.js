// 任意尺寸随机图片
javascript:(function() {  var width = prompt("请输入图片的宽度（像素）：");  var height = prompt("请输入图片的高度（像素）：");  if (width && height) {    window.location.href = "https://unsplash.it/" + width + "/" + height + "/";  }})();
