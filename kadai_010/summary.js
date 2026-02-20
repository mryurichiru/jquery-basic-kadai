$(function () {

  //id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click', function () {
    //id属性がtargetの要素のcolorプロパティを青に変更
    $('#target').css('color', 'blue');
  });

  //id属性がchange-textの要素がクリックされたら
  $('#change-text').on('click', function () {
    //id属性がtargetの要素の内容をHello!に変更
    $('#target').text('Hello!');
  });

  //id属性がfade-outの要素がクリックされたら
  $('#fade-out').on('click', function () {
    //id属性がtargetの要素をフェードアウト
    $('#target').fadeOut();
  });

  //id属性がfade-in要素がクリックされたら
  $('#fade-in').on('click', function () {
    //id属性がtargetの要素をフェードイン
    $('#target').fadeIn();
  });
});
