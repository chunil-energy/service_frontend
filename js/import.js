window.addEventListener('load', function () {
  var allElements = document.getElementsByTagName('*')
  Array.prototype.forEach.call(allElements, function (el) {
    var imp = el.dataset.imp
    if (imp) {
      var xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          el.outerHTML = this.responseText
        }
      }
      xhttp.open('GET', imp, true)
      xhttp.send()
    }
  })
})
