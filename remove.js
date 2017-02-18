var body = document.body || document.getElementsByTagName('body')[0],
    els = document.getElementsByTagName('style');

body.removeChild(els[els.length - 1]);