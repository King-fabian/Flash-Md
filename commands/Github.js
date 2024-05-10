const axios = require('axios');
const fs = require('fs');
const {france} = require('../framework/france');
const { writeFile } = require('fs/promises')

france({ nomCom: "github",
        reaction: "📃",
        categorie: "Search" }, async (dest, zk, commandeOptions) => {

    const { repondre, prefixe, arg, ms } = commandeOptions;  
      const question = arg.join(' ');
if (!question) return repondre("Give me a valid github username like: "  + prefixe + "github franceking1");

            const response = await fetch(`https://api.github.com/users/${question}`);

        const data = await response.json();
const id = data.id;  
const nickname = data.name;
const username = data.login;
const bio = data.bio;
const company = data.company;
const location = data.location;
const email = data.email;
const blog = data.blog;
const repos = data.repos_url;
const gists = data.gists_url;
const followers = data.followers;
const following = data.following;


         await repondre(`
         °GITHUB USER INFO°
       
🚩 Id : ${id}
🔖 Name : ${nickname}
🔖 Username : ${username}
✨ Bio : ${bio}
🏢 Company : ${company}
📍 Location : ${location}
📧 Email : ${email}
📰 Blog : ${blog}
🔓 Public Repo : ${repos}
🔐 Public Gists : ${gists}
👪 Followers : ${followers}
🫶 Following : ${following}`);


});
