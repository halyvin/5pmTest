/**
 * WhatsApp Sharing Button


 */

 window.onload = function() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var android = /(android)/i.test(navigator.userAgent);

    if (iOS || android) {
        var link = window.location.href;

        // WhatsApp
        var whazzappBtnWrap = document.createElement("span");
        whazzappBtnWrap.setAttribute('class', 'b-share-btn__wrap');

        var whazzappBtn = document.createElement("a");
        whazzappBtn.setAttribute('href', 'whatsapp://send?text=' + link);
        whazzappBtn.setAttribute('data-action', 'share/whatsapp/share');
        whazzappBtn.setAttribute('class', 'customSharing _wa');
        whazzappBtnWrap.appendChild(whazzappBtn);

        // Telegram
        var telegramBtnWrap = document.createElement("span");
        telegramBtnWrap.setAttribute('class', 'b-share-btn__wrap');

        var telegramBtn = document.createElement("a");
        telegramBtn.setAttribute('href', 'tg://msg?text=' + link);
        telegramBtn.setAttribute('title', 'telegram sharing');
        telegramBtn.setAttribute('class', 'customSharing _tg');
        telegramBtnWrap.appendChild(telegramBtn);

        // Insetring
        document.getElementsByClassName('b-share')[0].appendChild(whazzappBtnWrap);
        document.getElementsByClassName('b-share')[0].appendChild(telegramBtnWrap);
        if (document.getElementsByClassName('b-share')[1]) { // тут не угадаешь :)
            document.getElementsByClassName('b-share')[1].appendChild(whazzappBtnWrap)
            document.getElementsByClassName('b-share')[1].appendChild(telegramBtnWrap)
        }
    }
};