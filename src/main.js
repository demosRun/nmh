function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false})

var numList = {}

setTimeout(() => {
  autoScale({
    deviseW: 750,
    deviseH: 1508,
    center: 'middle',
    scroll: false,
    type: 'scale',
    box: '.scale-box'
  })
  // 获取投票
  $.getJSON("http://19diaocha.people.cn/json.php?type=713&callback=?", (data) => {
    data.forEach(element => {
      numList[element.vid] = parseInt(element.bnum)
    });
    // this.data.num = data[0].bnum
  })
}, 100);