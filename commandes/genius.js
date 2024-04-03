const { france } = require('../framework/france');
const { default: axios } = require('axios');



france({ nomCom: "fact", reaction: "😁", categorie: "NEW" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    
        const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        const response(`*Fact:* ${data.fact}\n\n*Powered by FLASH-MD*`)   
    }

) 
