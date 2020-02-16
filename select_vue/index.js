var tab = new Vue({
  el: '#select',
  data: {
    selected: 'cat1',
    selectorshow: false,
    selectors: [
      { id: 1, text: "カテゴリ1", value: "cat1" },
      { id: 2, text: "カテゴリ2", value: "cat2" },
      { id: 3, text: "カテゴリ3", value: "cat3" },
    ]
  }
});
