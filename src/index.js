import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';

window.$word1 = 'Word 1'
window.$def1 = ''
window.$word2 = 'Word 2'
window.$def2 = ''
window.$word3 = 'Word 3'
window.$def3 = ''
window.$word4 = 'Word 4'
window.$def4 = ''
window.$word5 = 'Word 5'
window.$def5 = ''
window.$word6 = 'Word 6'
window.$def6 = ''
window.$word7 = 'Word 7'
window.$def7 = ''
window.$word8 = 'Word 8'
window.$def8 = ''
window.$word9 = 'Word 9'
window.$def9 = ''
window.$word10 = 'Word 10'
window.$def10 = ''

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root')
);
registerServiceWorker();
