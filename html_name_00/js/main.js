// jsを記述する際はここに記載していく

var show = 3; //最初に表示する件数
var num = 3;  //clickごとに表示したい件数
var contents = '.NEWS-item'; // 対象のlist
$(contents + ':nth-child(n + ' + (show + 1) + ')').addClass('is-hidden');
$('.btn-more').on('click', function () {
  $(contents + '.is-hidden').slice(0, num).removeClass('is-hidden');
  if ($(contents + '.is-hidden').length == 0) {
    $('.btn-more').fadeOut();
  }
});

let words = document.querySelectorAll(".word");
words.forEach(word => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach(letter => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

var airhorn = vr.video({
  element: '#airhorn',//出力させる場所につけるID名
  align: {x: 0.5, y: 0.5}, //コンテナ内のビデオの位置を定義。align: {x: 0.5, y: 0.5}中央に表示されるビデオになります。
  sources: 'assets/videos/airhorn.mp4', //動画のパス
  poster: 'assets/images/airhorn.jpg',//ビデオが読み込まれている間に表示される画像のパス
  mobilePoster: 'assets/images/airhorn-mobile.jpg', //画面幅がmobileBreak値のものよりも小さいデバイスに表示される画像。
  autoplay: true,
  loop: true,
  mute: true,
  mobileBreak: 480, //モバイルレイアウトの最大画面幅を決定します。画面の幅がmobileBreak値以下の場合、ビデオは代わり<img>にposter/ mobilePostersourceを使用して静的にレンダリングされます。
});
airhorn.init();
