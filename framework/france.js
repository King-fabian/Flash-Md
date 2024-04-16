var tabCmds = [];
let cm = [];
function france(obj, fonctions) {
    let infoComs = obj;
    if (!obj.categorie) {
        infoComs.categorie = "";
    }
    if (!obj.reaction) {
        infoComs.reaction = "";
    }
    infoComs.fonction = fonctions;
    cm.push(infoComs);
    // console.log('chargement...')
    return infoComs;
}
module.exports = { france, Module: france, cm };
