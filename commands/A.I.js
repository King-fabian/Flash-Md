const { king } = require('../france/king');
const traduire = require("../france/traduction") ;
const { default: axios } = require('axios');
//const conf = require('../set');




king({nomCom:"flash",reaction:"📡",categorie:"AI"},async(dest,zk,commandeOptions)=>{

  const {repondre,ms,arg}=commandeOptions;
  
    if(!arg || !arg[0])
    {return repondre("YEES!\n _I'm listening to you._")}
    //var quest = arg.join(' ');
  try{
    
    
const message = arg.join(' ');
 const response = await fetch(`http://api.brainshop.ai/get?bid=181821&key=ltFzFIXrtj2SVMTX&uid=[uid]&msg=${message}`);
    const data = await response.json();
await repondre(data.cnt);
    
} catch {
repondre('something went wrong...')

}
  
  });  



  king({ nomCom: "dalle", reaction: "📡", categorie: "AI" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    try {
      if (!arg || arg.length === 0) {
        return repondre(`Please enter the necessary information to generate the image.`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const image = arg.join(' ');
      const data = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${image}`;
      
    
      let caption = '*powered by FLASH-MD*';
     
     
        zk.sendMessage(dest, { image: { url: data }, caption: caption }, { quoted: ms });
      
    } catch (error) {
      console.error('Erreur:', error.message || 'Une erreur s\'est produite');
      repondre("Oops, an error occurred while processing your request");
    }
  });
  
  king({ nomCom: "gpt", reaction: "📡", categorie: "AI" }, async (dest, zk, commandeOptions) => {
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

king({ nomCom: "gemini", reaction: "🤗", categorie: "AI" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    
      if (!arg || arg.length === 0) {
        return repondre(`Hello am *FLASH-MD.* an Ai developed by France King.\n\n What help can I offer you today?.`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const gemi = arg.join(' ');
     const response = await fetch(`https://api.maher-zubair.tech/ai/chatgpt3?q=${gemi}`);
const data = await response.json();

await repondre(data.result);
console.log(data.completion); 


  });

king({ nomCom: "calc", reaction: "🔢", categorie: "General" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    
      if (!arg || arg.length === 0) {
        return repondre(`Please insert maths calculations like 100000+2024.\n\nNOTE: Use "(/)" for division and "(*)" for multiplication or letter x`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const cal = arg.join(' ');
     const response = await fetch(`https://api.maher-zubair.tech/ai/mathssolve?q=${cal}`);
const data = await response.json();

await repondre(data.result);
console.log(data.completion); 


  });

king({ nomCom: "gpt4", reaction: "📡", categorie: "AI" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    try {
      if (!arg || arg.length === 0) {
        return repondre(`Please ask a question.`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const question = arg.join(' ');
      const response = await axios.get(`https://api.vihangayt.com/ai/gemini?q=${question}`);
      
      const data = response.data;
      if (data) {
        repondre(data.data);
      } else {
        repondre("Error during response generation.");
      }
    } catch (error) {
      console.error('Erreur:', error.message || 'Une erreur s\'est produite');
      repondre("Oops, an error occurred while processing your request.");
    }
  });


king({ nomCom: "best-wallp", reaction: "🙌", categorie: "FLASH-MD PICS" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  const response = await fetch('https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc');
const data = await response.json();
  const url =data.urls.regular
  //citel.reply ('url here :'+url);

                let buttonMessaged = {
                    image: { url: url },
                    caption: `*POWERED BY FLASH-MD*`,
                    
                   
                };
                return await zk.sendMessage(dest, buttonMessaged , {quoted : ms});


}
   );
king({ nomCom: "random", reaction: "🥂", categorie: "FLASH-MD PICS" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  const response = await fetch('https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc');
const data = await response.json();
  const url =data.urls.regular
  //citel.reply ('url here :'+url);

                let buttonMessaged = {
                    image: { url: url },
                    caption: `*POWERED BY FLASH-MD*`,
                    
                   
                };
                return await zk.sendMessage(dest, buttonMessaged , {quoted : ms});


}
   );

king({ nomCom: "nature", reaction: "🦗", categorie: "FLASH-MD PICS" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  const response = await fetch('https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc');
const data = await response.json();
  const url =data.urls.regular
  //citel.reply ('url here :'+url);

                let buttonMessaged = {
                    image: { url: url },
                    caption: `*POWERED BY FLASH-MD*`,
                    
                   
                };
                return await zk.sendMessage(dest, buttonMessaged , {quoted : ms});


}
   );


king({ nomCom: "time", reaction: "⌚", categorie: "General" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;

try {
  
    
      if (!arg || arg.length === 0) {
        return repondre(`Enter a name of a given country in short form...\neg: KE to represent Kenya or IN to represent India`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const cal = arg.join(' ');
     const response = await fetch(`https://levanter.onrender.com/time?code=${cal}`);
const data = await response.json();

const timeD = data.result[0].time;

await repondre(timeD);

} catch (e) { repondre("That country name is incorrect!") }


  });

          king({ nomCom: "hack", reaction: "👿", categorie: "General" }, async (dest, zk, commandeOptions) => {
    const { repondre } = commandeOptions;

await repondre("```Injecting malware```")

await sleep(1000)

await repondre("```hacking into device \n 0%```")

await sleep(1000)

await repondre("```transfering photos \n █ 10%```")

await sleep(1000)
          });
