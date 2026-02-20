$(function () {
  //class属性がbtnの要素がクリックされたら
  $('.btn').on('click', function () {

    //class属性text-boxのvalue要素に「クリックしました！」と表示
    $('.text-box').val('クリックしました！');
  });
});