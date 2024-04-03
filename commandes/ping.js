const { france } = require("../framework/france") 

france({ nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '🚨', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    var inital = (new Date).getTime;
        const repondre = await zk.sendMessage(dest.chat, {text: '```Ping!!!```'});
        var final = (new Date).getTime;
         const response =  zk.sendMessage(dest.chat, {text: '*Pong*\n *' + (final - inital) + ' ms* ', edit: key});
  }
)
