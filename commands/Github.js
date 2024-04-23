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
const public repo = gitdata.repos_url;
const public gists = gitdata.gists_url;
const followers = gitdata.followers;
const following = gitdata.following
const updated at = gitdata.updated_at;
const created at = gitdata.created_at;

         await repondre(`°GITHUB USER INFO°

         
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


});
