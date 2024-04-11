const { france } = require("../framework/france");
const moment = require("moment-timezone");
const exec = require("child-process");
const speed = require("performance-now");



france({ nomCom: 'speed',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '⚙️', 
    fromMe: 'true', 


  },

async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre, flashspeed} = commandeOptions;



  let pingMsg = await zk.sendMessage(dest, {text: 'Pinging...'}, {quoted: Edited})

  let timestamp = speed()

    let latency = (speed() - timestamp).toFixed(4)

    await zk.relayMessage(dest, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `Pong! Latency: ${latency} ms` 
        }
      }
   );
