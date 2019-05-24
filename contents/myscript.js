console.log('contents log');


let idx = location.pathname.indexOf('/dp/');
if ( idx > 0 ) {
    history.replaceState('', '', location.pathname.substr(idx));
}