// var checkbtn = new Vue({
//   el: '#checkbtn',
//   methods: {
//     check: function (event) {
//       console.log('check')
//       // const nextBox = this.getAttribute('data-box');
//       // this.closest('.check_box').classList.remove('is-show');
//       // this.closest('.check_box').classList.add('is-hide');
//       // const checkBox = document.getElementById(nextBox);
//       // const resultBox = document.getElementsByClassName('result_box');
//       // if (!nextBox.match(/result/)) {
//       //   checkBox.classList.add('is-show');
//       // } else {
//       //   checkBox.style.display = 'block';
//       //   resultBox[0].classList.add('is-show');
//       // }
//     }
//   }
// })

/* チェック項目 */
const vm = new Vue({
  el: '#question',
  data: {
    posts: []
  },
  created() {
    axios.get('js/question.json')
    .then(response => { this.posts = response.data; })
    .catch(error => {
      window.alert(error);
    } );
  }, methods: {
    check: function (i,j) {
      const thisBoxNum = 'q' + i;
      const nextBoxNum = 'q' + j;
      const thisBoxObj = document.getElementsByClassName(thisBoxNum);
      const nextBoxObj = document.getElementById(nextBoxNum);
      console.log();
      thisBoxObj[0].classList.remove('is-show');
      thisBoxObj[0].classList.add('is-hide');
      const resultBox = document.getElementsByClassName('result_box');
      const clslist = String(nextBoxObj.classList);
      if (!clslist.match(/result/)) {
        nextBoxObj.classList.add('is-show');
      } else {
        nextBoxObj.style.display = 'block';
        resultBox[0].classList.add('is-show');
      }
    }
  }
});

//結果
const vm02 = new Vue({
  el: '#result',
  data: {
    results: []
  },
  created() {
    axios.get('js/result.json')
    .then(response => { this.results = response.data; })
    .catch(error => {
      window.alert(error);
    });
  }
});

//開始ボタン
const startbtn = document.getElementsByClassName('startbtn');
document.addEventListener('click',function(e){
  e.preventDefault();
  thisbtn = e.target;
  if (thisbtn === startbtn[0]){
    thisbtn.closest('.check_box').classList.remove('is-show');
    thisbtn.closest('.check_box').classList.add('is-hide');
    const checkBox = document.getElementById('q1');
    checkBox.classList.add('is-show');
  }
});
