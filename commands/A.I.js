const { france } = require('../framework/france');
const traduire = require("../framework/traduction") ;
const { default: axios } = require('axios');
//const conf = require('../set');




france({nomCom:"flash",reaction:"📡",categorie:"IA"},async(dest,zk,commandeOptions)=>{

  const {repondre,ms,arg}=commandeOptions;
  
    if(!arg || !arg[0])
    {return repondre("YEES!\n _I'm listening to you._")}
    //var quest = arg.join(' ');
  try{
    
    
const message = await traduire(arg.join(' '),{ to : 'en'});
 console.log(message)
fetch(`http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=${message}`)
.then(response => response.json())
.then(data => {
  const botResponse = data.cnt;
  console.log(botResponse);

  traduire(botResponse, { to: 'en' })
    .then(translatedResponse => {
      repondre(translatedResponse);
    })
    .catch(error => {
      console.error('Error when translating into French :', error);
      repondre('Error when translating into French');
    });
})
.catch(error => {
  console.error('Error requesting BrainShop :', error);
  repondre('Error requesting BrainShop');
});

  }catch(e){ repondre("oops an error : "+e)}
    
  
  });  



  france({ nomCom: "dalle", reaction: "📡", categorie: "IA" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    try {
      if (!arg || arg.length === 0) {
        return repondre(`Please enter the necessary information to generate the image.`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const image = arg.join(' ');
      const response = await fetch(`https://api.maher-zubair.tech/ai/dalle?q=${image}`);
      
      const data = await response.json();
      let caption = '*powered by FLASH-MD*';
      
      if (data.status && data.owner && data.data) {
        // Utiliser les données retournées par le service
        const image = data.data;
        zk.sendMessage(dest, { image: { url: imageUrl }, caption: caption }, { quoted: ms });
      } else {
        repondre("Error during image generation.");
      }
    } catch (error) {
      console.error('Erreur:', error.message || 'Une erreur s\'est produite');
      repondre("Oops, an error occurred while processing your request");
    }
  });
  
  france({ nomCom: "gpt", reaction: "📡", categorie: "IA" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    
      if (!arg || arg.length === 0) {
        return repondre(`Please ask a question.`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const question = arg.join(' ');
     const response = await fetch(`https://api.maher-zubair.tech/ai/chatgptv4?q=${question}`);
const data = await response.json();

await repondre(data.result);
console.log(data.completion); 


  });

france({ nomCom: "gemini", reaction: "📡", categorie: "IA" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    
      if (!arg || arg.length === 0) {
        return repondre(`Hello am *FLASH-MD* an Ai developed by France King, what help can I offer you today?.`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const gemi = arg.join(' ');
     const response = await fetch(`https://api.maher-zubair.tech/ai/gemini?q=${gemi}`);
const data = await response.json();

await repondre(data.result);
console.log(data.completion); 


  });

france({ nomCom: "calc", reaction: "📡", categorie: "General" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    
      if (!arg || arg.length === 0) {
        return repondre(`Please insert maths calculations like 100000+2024.\nUse "(/)" for division and "(*)" for multiplication or letter x`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const cal = arg.join(' ');
     const response = await fetch(`https://api.maher-zubair.tech/ai/mathssolve?q=${cal}`);
const data = await response.json();

await repondre(data.result);
console.log(data.completion); 


  });

france({ nomCom: "spotify", reaction: "🎶", categorie: "General" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    
      if (!arg || arg.length === 0) {
        return repondre(`insert a song name`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const pin = arg.join(' ');
     const response = await fetch(`https://api.maher-zubair.tech/search/spotify?q=${pin}`);
const data = await response.json();

await repondre(data.result);
console.log(data.completion); 


  });

