/* ==========================================================================
   IMA+ 研修サイト 共通スクリプト
   役割：iPhone／Androidの手動切替のみ（SPEC v0.2 6-1・第8節）
   - 自動判定はしない／選択は保存しない（再読み込みで選ぶ前の状態に戻る）
   - JavaScriptが動かない環境では、両方のOSの手順がそのまま表示される
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var status = document.getElementById('os-status');
  var buttons = document.querySelectorAll('[data-os-select]');
  var labels = { iphone: 'iPhone', android: 'Android' };

  // JavaScriptが動く環境であることをCSSへ伝える（切替ボタンを表示する）
  root.classList.remove('no-js');
  root.classList.add('js');

  function selectOs(os) {
    if (!labels[os]) {
      return;
    }

    // ページ内のすべての手順を同じOSにそろえる
    root.setAttribute('data-os', os);

    // すべての切替ボタンの状態をそろえる
    Array.prototype.forEach.call(buttons, function (button) {
      var pressed = button.getAttribute('data-os-select') === os;
      button.setAttribute('aria-pressed', pressed ? 'true' : 'false');
    });

    // 読み上げ環境へ短く知らせる
    if (status) {
      status.textContent = labels[os] + 'の手順を表示しています';
    }
  }

  Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener('click', function () {
      selectOs(button.getAttribute('data-os-select'));
    });
  });
})();
