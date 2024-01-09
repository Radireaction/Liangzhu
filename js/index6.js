

window.onload = () => {
  var urlParams = new URLSearchParams(window.location.search);
  var i = parseInt(urlParams.get('i'));
  function pint(el, text) {
    return new Promise((resolve, reject) => {

      let x = 1
      const id = setInterval(() => {
        if(x >= text.length) {
          clearInterval(id)
          resolve(undefined)
        }
        el.innerText = text.slice(0, x++)
      }, 120)
    })
  }

  function waitClick() {
    return new Promise((resolve, reject) => {
      document.addEventListener('click', () => {
        resolve(undefined)
      }, {
        once: true,
      })
    })
  }

  function wait(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(undefined)
      }, time)
    })
  }

  let b = false
  const sortable = new Sortable(document.querySelector('.list'), {
    // handle: '.handler',
    dataIdAttr: 'data-key',
    animation: 600,
    onEnd: async () => {
      const list = sortable.toArray()
      document.querySelectorAll(`.list p`).forEach((item, index) => {
        let key = item.getAttribute('data-key')
        if(index == key){
          item.classList.add('ok')
        }else{
          item.classList.remove('ok')
        }
      })
      list.forEach((item, index) => document.querySelector(`.list .data${ item }`).style.zIndex = 10 - index + '')
      for(let x = 0; x < list.length; x++) {
        if(x != list[x]) return
      }
      if(b === true) return
      b = true
      document.querySelector('.warp .text').style.opacity = 1
      await pint(document.querySelector('.view1 .text'), '莫角山宫殿是中国最早的、规模最大的史前宫殿区。古城遗址建于 沼泽湿地之上，以莫角山台地为中心，从外城、内城、宫殿区逐层升高堆筑高度营建城市，体现了良渚先民们“三重空间、以中为尊、崇尚高耸”的城市规划 理念，以及“藏礼于城”的意识形态，并呈现出早期国家的形态。')
      await waitClick()
      const el = document.querySelector('.view2')
      el.style.zIndex = '1'
      el.style.opacity = '1'
      await pint(document.querySelector('.view2 .text2'), '考古学家推测这里可能是一个中心城址，是良渚文化的政治、经济、文化中心。莫角山遗址的发现对研究良诸文化的聚落形态、社会性质，以及探索中华文明的起源提供重季的者点率愁，30万平方米，占据了古城十分之一的面积。《吕氏春秋》记载:“古之王者，择天下之中而立国择国之中而立宫。”古城宣熙区的设计明显体现了以中为尊，以高为崇的理念。')
      await waitClick()
      const el2 = document.querySelector('.view3')
      el2.style.zIndex = '2'
      el2.style.opacity = '1'
    },
  })
}
