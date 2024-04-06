cost france = require("../framework") 

france({ nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '🚨', 
    fromMe: 'true', 

       
  },
  async(Void, citel) => {
    var inital = new Date().getTime();
        const { key } = await Void.sendMessage(citel.chat, {text: '```ᴘɪɴɢ ᴋɪɴɢ-ᴍᴅ..```'});
        var final = new Date().getTime();
       // await Secktor.sleep(1000)
       return await Void.sendMessage(citel.chat, {text: '_𝙆𝙞𝙣𝙜 𝙥𝙤𝙣𝙜_\n *' + (final - inital) + ' ms* ', edit: key});
    }
);
