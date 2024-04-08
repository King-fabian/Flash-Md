const {france} = require("../framework/france");
const speed = require(performance-now);

france({ nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '🚨', 
    fromMe: 'true', 

       
    },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
      let timestamp = speed() 
      let latency = (speed() - timestamp).toFixed(4)
    

await zk.sendMessage(dest, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `Pong! Latency: ${latency} ms` 
        }
      }
    }, {})

  })

