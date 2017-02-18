document.addEventListener('DOMContentLoaded', function() {

    var addLines = '[class*="rf-"] { outline: 3px solid red; }',
        removeLines = 'not:[class*="rf-"] { outline: 3px solid red; }';

    var showLinesBtn = document.getElementById('showLines'),
        hideLinesBtn = document.getElementById('hideLines');

        showLinesBtn.addEventListener('click', function() {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.executeScript({file: 'add.js'});
            });
        }, false);

        hideLinesBtn.addEventListener('click', function() {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.executeScript({file: 'remove.js'});
            });
        }, false);
}, false);