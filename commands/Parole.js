const {france} =require("../framework/france");
const axios =require("axios");
const Genius = require("genius-lyrics"); 
 const Client = new Genius.Client("jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO");



france({ nomCom: "poll",
        reaction: "✨",
        categorie: "General" }, async (dest, zk, commandeOptions) => {
    
    const { repondre, arg, ms } = commandeOptions; 
const polll = arg.join(' ');



let [poll, opt] = polll.split("/")

if (polll.split("/") < 2)
                return repondre(`Incorrect format.\nExample: poll what is 1+1/2, 3, 4`);

let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await zk.sendMessage(dest, {
                poll: {
                    name: poll,
                    values: options
                }
            })

})

 france({ nomCom: "fact",
        reaction: "✌️",
        categorie: "User" }, async (dest, zk, commandeOptions) => {
    
    const { repondre, arg, ms } = commandeOptions; 



const response = await fetch('https://nekos.life/api/v2/fact');


const data = await response.json();

repondre(`◆━━━━━━✦FACT✦━━━━━━◆  
*◇* ${data.fact}




*◇* Powered by *France King*

╔═════◇
║◇ *KEEP USING FLASH-MD*
╚════════════════════>  `);


})

france({ nomCom: "quotes",
        reaction: "🗿",
        categorie: "User" }, async (dest, zk, commandeOptions) => {
    
    const { repondre, arg, ms } = commandeOptions; 


const response = await fetch('https://favqs.com/api/qotd');
const data = await response.json();
const flashhh= `
◆━━━━━━✦QUOTE✦━━━━━━◆ 
◇ _${data.quote.body}_\n

◇ *AUTHOR:* ${data.quote.author}




◇ _Powered by:_ *France King*


╔═════◇
║◇ *KEEP USING FLASH-MD*
╚════════════════════> `;
repondre(flashhh);

})
france({ nomCom: "define",
        reaction: "😁",
        categorie: "Search" }, async (dest, zk, commandeOptions) => {
    
    const { repondre, arg, ms } = commandeOptions;  
        
if (!arg || arg.length === 0) return repondre("provide a term");

         const ques = arg.join(' ');

        try{
            let { data } = await axios.get(`http://api.urbandictionary.com/v0/define?term=${ques}`)
            var textt = `
 Word: ${ques}
 Definition: ${data.list[0].definition.replace(/\[/g, "").replace(/\]/g, "")}
 Example: ${data.list[0].example.replace(/\[/g, "").replace(/\]/g, "")}`
            return repondre(textt)
                    } catch {
                        return repondre(`No result for ${ques}`)
                    }

})

        
france({ nomCom: "lyrics",
        reaction: "✨",
        categorie: "Search" }, async (dest, zk, commandeOptions) => {
    
    const { repondre, arg, ms } = commandeOptions;  
        
   try {

    if (!arg || arg.length === 0) return repondre("please provide me the song name");

         const question = arg.join(' ');

 
  
 const searches = await Client.songs.search(question); 
 const firstSong = searches[0]; 
 const lyrics = await firstSong.lyrics(); 
 await zk.sendMessage(dest, { text: lyrics}, { quoted: ms }); 
 } catch (error) { 
             reply(`I did not find any lyrics for ${text}. Try searching a different song.`); 
             console.log(error); 
         } 



        })

      
