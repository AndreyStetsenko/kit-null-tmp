import 'jquery';
import '@popperjs/core';
import 'bootstrap';
import crossBrowser from './modules/crossBrowser';

export default function header() {
    crossBrowser();

    window.addEventListener('error', (e) => {
        const { message, filename, lineno, colno, error } = e;
        console.log([message, filename, lineno, colno, error]);
    });
}
