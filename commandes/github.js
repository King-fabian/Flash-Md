"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/zokou");
const axios = require ("axios")

 france({ nomCom: "github",
        reaction: "🍳",
        categorie: "NEW" }, async (dest, zk, commandeOptions) => {
    
    const { repondre, arg, ms } = commandeOptions; 

         if (!question) return repondre(`Give me a user name like ${prefix}github franceking1`)

         const response  = await fetch(`https://api.github.com/users/${question}`)
    const data = await response.json();
 } catch (error) {
        reply(`*_I Didn't get any results, Provide valid user name!_*`);

   const gitdata = `ㅤㅤ*[ GITHUB USER INFO ]

🚩 Id : ${gitdata.id}
🔖 Nickname : ${gitdata.name}
🔖 Username : ${gitdata.login}
✨ Bio : ${gitdata.bio}
🏢 Company : ${gitdata.company}
📍 Location : ${gitdata.location}
📧 Email : ${gitdata.email}
📰 Blog : ${gitdata.blog}
🔓 Public Repo : ${gitdata.repos_url}
🔐 Public Gists : ${gitdata.gists_url}
💕 Followers : ${gitdata.followers}
👉 Following : ${gitdata.following}
🔄 Updated At : ${gitdata.updated_at}
🧩 Created At : ${gitdata.created_at}`


await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });

} else {
console.log("Could not fetch data")

}


});
