const axios = require('axios');
const fs = require('fs');
const {france} = require('../framework/france');
const { writeFile } = require('fs/promises')

france({ nomCom: "github",
        reaction: "📃",
        categorie: "Search" }, async (dest, zk, commandeOptions) => {

    const { repondre, arg, ms } = commandeOptions;  
      const question = arg.join(' ');
if (!question) return repondre("Give me a valid github username like franceking1");

            const response = await fetch(`https://api.github.com/users/${question}`);

        const data = await response.json();
const id = gitdata.id;  
const nickname = gitdata.name;
const username = gitdata.login;
const bio = gitdata.bio;
const company = gitdata.company;
const location = gitdata.location;
const email = gitdata.email;
const blog = gitdata.blog;
const repos = gitdata.repos_url;
const gists = gitdata.gists_url;
const followers = gitdata.followers;
const following = gitdata.following


         await repondre(`°GITHUB USER INFO°

         
🚩 Id : ${id}
🔖 Nickname : ${nickname}
🔖 Username : ${username}
✨ Bio : ${bio}
🏢 Company : ${company}
📍 Location : ${location}
📧 Email : ${email}
📰 Blog : ${blog}
🔓 Public Repo : ${repos}
🔐 Public Gists : ${gists}
💕 Followers : ${followers}
👉 Following : ${following}`);


});
