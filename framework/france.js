var tabCmds = [];
let cm = [];
function france(obj, fonctions) {

    infoComs.fonction = fonctions;
    cm.push(infoComs);
    // console.log('chargement...')
    return infoComs;
}
module.exports = { france, Module: france, cm };
