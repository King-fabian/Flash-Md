cost {france} = require("../framework/france") 

france({ nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '🚨', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    var inital = new Date().getTime();
        const (key) = const repondre(dest, {text: '```Ping!!!```'});
        var final = new Date().getTime();
      const response = await zk.sendMessage(dest, {text: '*Pong*\n *' + (final - inital) + ' ms* ', edit: key});
  }
)
