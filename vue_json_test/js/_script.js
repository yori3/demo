/* チェック項目 */
var html = "";
var htmlResult = "";
var data;
$.ajax({
  type: "GET",
  url: 'js/question.json',
  dataType: 'json',
  data: data,
}).done(function (json) {
  for (var i = 0; i < json.length; i++) {
    html += '<div class="check_box question_box" id="q' + json[i]["id"] + '">';
    html += '<h3 class="check_qNum">Q' + json[i]["num"] + '</h3>';
    html += '<p class="check_question">' + json[i]["question"] + '</p>';
    html += '<div class="check_questionBtn">';
    var selectLen = json[i]["links"].length;
    for (var j = 0; j < selectLen; j++) {
      html += '<div class="btn"><a href="" data-box="q' + json[i]["links"][j]["link"] + '" class="btn_body check_btn">' + json[i]["links"][j]["select"] + '</a></div>';
    }
    if (json[i]["notes"] != "") {
      html += '<p class="check_notes">' + json[i]["notes"] + '</p>';
    }
    html += '</div>';
    html += '</div>';

  }
  $('.question_wrap').append(html);
}).fail(function () {
  console.log('ERROR')
});

//結果
$.ajax({
  type: "GET",
  url: 'js/result.json',
  dataType: 'json',
  data: data,
}).done(function (jsonResult) {
  for (var resultNum = 0; resultNum < jsonResult.length; resultNum++) {
    htmlResult += '<div class="result_box_inner result_' + jsonResult[resultNum]["id"] + '" id="qresult_' + jsonResult[resultNum]["id"] + '">';
    htmlResult += '<h3 class="result_ttl">';
    htmlResult += '<strong>' + jsonResult[resultNum]["title"] + '</strong><br>';
    htmlResult += '</h3>';
    htmlResult += '<p class="result_text">' + jsonResult[resultNum]["text"] + '</p>';
    htmlResult += '</div>';
    htmlResult += '</div>';
  }
  $('.result_box').prepend(htmlResult);
  $('.result_box_inner').hide();
}).fail(function () {
  console.log('ERROR')
});

$(document).on('click', '.check_btn', function (e) {
  e.preventDefault();
  const nextBox = $(this).data('box');
  $(this).parents('.check_box').removeClass('is-show').addClass('is-hide');
  if (!nextBox.match(/result/)) {
    $('#' + nextBox).addClass('is-show');
  } else {
    $('#' + nextBox).show();
    $('.result_box').addClass('is-show');
  }
});