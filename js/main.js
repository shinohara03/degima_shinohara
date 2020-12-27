// 画像がクリックされた時の処理です。
$('img.panel-thumbnail').click(function() {
    var $imagePanel = $('.js-panel-select');
  
    // 現在の選択を解除します。
    $imagePanel.find('img.panel-thumbnail.checked').removeClass('checked');
  
    // チェックを入れた状態にします。
    $(this).addClass('checked');
  });

  // チェックボックスのクリックを無効化します。
$('.js-panel-select .disabled_checkbox').click(function() {
    return false;
  });