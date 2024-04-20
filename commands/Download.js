const { mediafireDl } = require("../framework/dl/Function");
const {france} = require('../framework/france');
const fs = require('fs');
const getFBInfo = require("@xaviabot/fb-downloader");
const { default: axios } = require('axios');


france({nomCom : "insta" , categorie : "Download"},async (dest , zk , commandeOptions)=>{
  const {ms,repondre,arg} = commandeOptions;

let goat = arg.join(' ')

  if (!arg[0]) { repondre('Please insert an Instagram video link');return};

try {
    const flash = await fetch(`https://api.maher-zubair.tech/download/instagram?url=${goat}`);
    const data = await flash.json();

    if (data && data.result && data.result.data && data.result.data.length > 0) {
        const media = data.result.data[0];
        if (media.type === 'video') {
            zk.sendMessage(dest, { video: { url: media.url }, caption: "Here is your Instagram Video.\n _Downloaded by_ *FLASH-MD*", gifPlayback: false }, { quoted: ms });
        } else {
            zk.sendMessage(dest, { image: { url: media.url }, caption: "Here is your Instagram Image!\n _Downloaded by_ *FLASH-MD*" });
        }
    } else {
        throw new Error("No media found in the response data");
    }
} catch (e) {
    console.error("An error occurred while downloading:", e);
}

});


france({nomCom : "mediafire" , categorie : "Download"},async (dest , zk , commandeOptions)=>{

  const {ms,repondre,arg} = commandeOptions ;

  let link = arg.join(' ')

  if (!arg[0]) { repondre('Provide mediafire link\n\nmediafire <valid mediafire link>');return}; 

  try {
     
    
        const fileInfo = await mediafireDl(link);

if (fileInfo[0].size.split('MB')[0] >= 100) {
            return m.reply('File big eh');
        }

await zk.sendMessage(
            dest,
            {
                document: {
                    url: fileInfo[0].link,
                },
                fileName: fileInfo[0].nama,
                mimetype: fileInfo[0].mime,
                caption: `FLASH-MD Downloader: ${fileInfo[0].nama}`,  
            },
            { quoted: ms }
        );

    
  
  } catch (e) {repondre("I am unable to download the file. \n " + e)}
  
});



france({
  nomCom: "fb",
  categorie: "Download",
  reaction: "📽️"
},
async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    repondre('Insert a public facebook video link!');
    return;
  }

  const queryURL = arg.join(" ");

  try {
     getFBInfo(queryURL)
    .then((result) => {
       let caption = `
        titre: ${result.title}
        Lien: ${result.url}
      `;
       zk.sendMessage(dest,{image : { url : result.thumbnail}, caption : caption},{quoted : ms}) ;
       zk.sendMessage(dest, { video: { url: result.hd  }, caption: 'facebook video Downloader.\n Powered by *FLASH-MD*' }, { quoted: ms });
      
    })
    .catch((error) => {console.log("Error:", error)
                      repondre('try fb2 on this link')});


   
  } catch (error) {
    console.error('An Error occurred while your downloading video :', error);
    repondre('An Error Occurred while Downloading your video' , error);
  }
});


france({nomCom : "tiktok" , categorie : "Download"},async (dest , zk , commandeOptions)=>{
  const {ms,repondre,arg} = commandeOptions;

let tk = arg.join(' ')

  if (!arg[0]) { repondre('Please insert a Tik Tok link to be downloaded');return};

try {
    const tok = await fetch(`https://api.maher-zubair.tech/download/tiktok2?url=${tk}`);
    const data = await tok.json();

    if (data && data.result && data.result.data && data.result.data.length > 0) {
        const media = data.result.data[0];
        if (media.type === 'video') {
            zk.sendMessage(dest, { video: { url: media.url }, caption: "Here is your Tik Tok Video.\n _Downloaded by_ *FLASH-MD*", gifPlayback: false }, { quoted: ms });
        } else {
            zk.sendMessage(dest, { image: { url: media.url }, caption: "Here is your Tik Tok Image!\n _Downloaded by_ *FLASH-MD*" });
        }
    } else {
        throw new Error("No media found in the response data");
    }
} catch (e) {
    console.error("An error occurred while downloading:", e);
}

});

france({
  nomCom: "fb2",
  categorie: "Download",
  reaction: "📽️"
},
async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    repondre('Insert a public facebook video link! !');
    return;
  }

  const queryURL = arg.join(" ");

  try {
     getFBInfo(queryURL)
    .then((result) => {
       let caption = `
        titre: ${result.title}
        Lien: ${result.url}
      `;
       zk.sendMessage(dest,{image : { url : result.thumbnail}, caption : caption},{quoted : ms}) ;
       zk.sendMessage(dest, { video: { url: result.sd  }, caption: 'facebook video downloader powered by *FLASH-MD*' }, { quoted: ms });
      
    })
    .catch((error) => {console.log("Error:", error)
                      repondre(error)});


   
  } catch (error) {
    console.error('An Error occurred while downloading your video:', error);
    repondre('An error occurred while downloading your video.' , error);
  }
}); 

france({ nomCom: "twitter", categorie: "Download" }, async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg } = commandeOptions;
    let meta = arg.join(' ');

    if (!arg[0]) {
        repondre('Please insert a Twitter video or link');
        return;
    }


try {
    
        const xx = await fetch(`https://api.maher-zubair.tech/download/twitter?url=${meta}`);
        const data = await xx.json();

        if (data && data.data && data.data.HD) {
            const medi = data.data.HD;
           
                zk.sendMessage(dest, { video: { url: medi }, caption: "Here is your Twitter Video.\n _Downloaded by_ *FLASH-MD*", gifPlayback: false }, { quoted: ms });
           
        } catch (e) { repondre("I am unable to download your media. \n " + e)}
       
            
        
    
});
