
//読み込み完了した時
$(window).on('load', function () {
  console.log('loadイベントが発生しました');
});
//scrollした時
$(function () {
  $(document).on('scroll', function () {
    console.log('scrollイベントが発生しました');
  });
})