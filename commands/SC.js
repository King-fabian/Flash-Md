"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "fmd",reaction: "😌"}, async (dest, zk, commandeOptions) => {


const githubRepo = 'https://api.github.com/repos/franceking1/Flash-Md';

const img = 'https://telegra.ph/file/7cc6e55a2ea3d8cd7f30e.jpg';

    const response = await fetch(githubRepo); 
        const data = await response.json(); 
 
        if (data) {
            const repoInfo = {
                stars: data.stargazers_count,
                forks: data.forks_count,
                
                
               
            };


const gitdata = `
*A Total of ${repoInfo.forks} People are using FLASH-MD.*

*${repoInfo.stars} People have starred it as a sign of Loving it.*

*KEEP USING FLASH-MD* 

             *Made With* 🤍`;




await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });

} else {
console.log("Could not fetch data")

}


});

   /*let z = 'Hello This is  *FLASH-MD* \n\n ' + "The Following is *FLASH-MD Repo.*";
    let d = './Sprinter';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/f1f2303ff4e39b0a3b6b3.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");*/ 
