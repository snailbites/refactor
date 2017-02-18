    var css = '[class*="rf-"] { outline: 3px solid red; }',
        body = document.body || document.getElementsByTagName('body')[0],
        style = document.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    body.appendChild(style);
