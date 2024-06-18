
const { mediafireDl } = require("../france/dl/Function");
const {king} = require('../france/king');
const fs = require('fs');
const getFBInfo = require("@xaviabot/fb-downloader");
const { default: axios } = require('axios');


king({ nomCom: "image-dl", categorie: "Download" }, async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg } = commandeOptions;
    let input = arg.join(' ');

if (!arg[0]) {
        repondre('Give me any social media image link!');
        return;
    }

try {


const load = await fetch(`https://nobs-api.onrender.com/dipto/alldl?url=${input}`);
       const data = await load.json();

//let final = data.result;
  const final = data.result; 

zk.sendMessage(dest, { image: { url: final}, caption: "_╰►IMAGE DOWNLOADED BY_ *FLASH-MD*", gifPlayback: false }, { quoted: ms });
    
   } catch (e) { repondre("A fatal error has occured... \n " + e)}
       
            
        
    
});






king({nomCom : "insta" , categorie : "Download"},async (dest , zk , commandeOptions)=>{
  const {ms,repondre,arg} = commandeOptions ;

  let link = arg.join(' ')

  if (!arg[0]) { repondre('provide an instragam link ');return}; 

  try {
     
    let igvid = await fetch('https://api.vihangayt.com/downloader/ig?url?=${link}')

    if (igvid.data.data.data[0].type == 'video') {
    zk.sendMessage(dest,{video : {url : igvid.data.data.data[0].url},caption : "Here is your Instagram video.\nPowered by *FLASH-MD*",gifPlayback : false },{quoted : ms}) 
    }
    else {
        zk.sendMessage(dest,{image : {url : igvid.data.data.data[0].url},caption : "Here is your Instagram image.\nPowered by *FLASH-MD*"})
    }
  
  } catch (e) {repondre("An error Occurred while downloading your media.\n*KEEP USING FLASH-MD*" + e)}
  
});
/*

king({nomCom : "insta" , categorie : "Download"},async (dest , zk , commandeOptions)=>{
  const {ms,repondre,arg} = commandeOptions;

let link = arg.join(' ')

  if (!arg[0]) { repondre('Please insert an Instagram video link');return};

try {
    const red = await axios.get(`https://api-aswin-sparky.koyeb.app/api/downloader/igdl?=${link}`);
    const data = await red.json();

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

*/

king({ nomCom: "video-dl", categorie: "Download" }, async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg } = commandeOptions;
    let input = arg.join(' ');

if (!arg[0]) {
        repondre('Give me any social media video link!');
        return;
    }

try {


const load = await fetch(`https://nobs-api.onrender.com/dipto/alldl?url=${input}`);
       const data = await load.json();

//let final = data.result;
  const final = data.result; 

zk.sendMessage(dest, { video: { url: final}, caption: "_╰►VIDEO DOWNLOADED BY_ *FLASH-MD*", gifPlayback: false }, { quoted: ms });
    
   } catch (e) { repondre("A fatal error has occured... \n " + e)}
       
            
        
    
});




/*king({ nomCom: "media", categorie: "Download" }, async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg } = commandeOptions;
    let input = arg.join(' ');

    if (!arg[0]) {
        repondre('Give me any social media video link!');
        return;
    }

    try {
        const load = await axios.get(`https://noobs-apis.onrender.com/dipto/alldl?url=${input}`);
        const data = load.data;
        let final = data.result;

        let fileExtension = final.includes('.jpg') ? 'jpg' : 'mp4';
        const mediaResponse = await axios.get(final, { responseType: 'arraybuffer' });
        const mediaPath = `./downloaded_media.${fileExtension}`;
        await writeFile(mediaPath, mediaResponse.data);

        const messageOptions = {
            caption: "Media downloaded by flash md",
            gifPlayback: false
        };

        if (fileExtension === 'mp4') {
            messageOptions.video = { url: mediaPath };
        } else if (fileExtension === 'jpg') {
            messageOptions.image = { url: mediaPath };
        }

        await zk.sendMessage(dest, messageOptions, { quoted: ms });

    } catch (e) {
        repondre("A fatal error has occurred...\n" + e);
    }
});

*/


king({ nomCom: "twitter", categorie: "Download" }, async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg } = commandeOptions;
    let linkz = arg.join(' ');

    if (!arg[0]) {
        repondre('Please insert a *TWITTER Video Link* for *FLASH-MD* to download ');
        return;
    }


try {
    
        const blue = await fetch(`https://api.maher-zubair.tech/download/twitter?url=${linkz}`);
        const data = await blue.json();

        if (data && data.data && data.data.HD) {
            const medi = data.data.HD;
           
                zk.sendMessage(dest, { video: { url: medi }, caption: "Here is your Twitter Video.\n _Downloaded by_ *FLASH-MD*", gifPlayback: false }, { quoted: ms });

}
           
        } catch (e) { repondre("I am unable to download your media. \n " + e)}
       
            
        
    
});




/*king({nomCom : "tiktok" , categorie : "Download"},async (dest , zk , commandeOptions)=>{
  const {ms,repondre,arg} = commandeOptions;

let linkx = arg.join(' ')

  if (!arg[0]) { repondre('Please insert a Tik Tok video link');return};


const green = await fetch(`https://api.vihangayt.com/downloader/tiktok2?url=${linkx}`);
    const data = await green.json();

try {

if (data && data.result && data.result.url && data.result.url.nowm) {

const nowm = data.result.url.nowm;

zk.sendMessage(dest, { video: { url: nowm }, caption: "Here is your Tiktok Video.\n _Downloaded by_ *FLASH-MD*", gifPlayback: false }, { quoted: ms });
}


} catch (e) {repondre("I am unable to download the file. \n " + e)}



}); 

*/

king({nomCom : "mediafire" , categorie : "Download"},async (dest , zk , commandeOptions)=>{
  const {ms,repondre,arg} = commandeOptions ;

  let link = arg.join(' ')

  if (!arg[0]) { repondre('Provide mediafire link\n\nmediafire <valid mediafire link>');return}; 

  try {
     
    
        const fileInfo = await mediafireDl(link);

if (fileInfo[0].size.split('MB')[0] >= 100) {
            return m.reply('File tooooo big');
        }

await zk.sendMessage(
            dest,
            {
                document: {
                    url: fileInfo[0].link,
                },
                fileName: fileInfo[0].nama,
                mimetype: fileInfo[0].mime,
                caption: `Downloaded by FLASH-MD: ${fileInfo[0].nama}`,  
            },
            { quoted: ms }
        );

    
  
  } catch (e) {repondre("I am unable to download the file. \n " + e)}
  
});




king({
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
        *Title:* ${result.title}

        
        *Direct Link:* ${result.url}
      `;
       zk.sendMessage(dest,{image : { url : result.thumbnail}, caption : caption},{quoted : ms}) ;
       zk.sendMessage(dest, { video: { url: result.hd  }, caption: 'facebook video downloader\n powered by *FLASH-MD*' }, { quoted: ms });
      
    })
    .catch((error) => {console.log("Error:", error)
                      repondre('try fbdl2 on this link')});


   
  } catch (error) {
    console.error('An error occurred while *FLASH-MD* was downloading your media:', error);
    repondre('An error occurred while downloading your media.' , error);
  }
});



king({ nomCom: "tik", categorie: "Download", reaction: "🎵" }, async (dest, zk, commandeOptions) => {
  const { arg, ms, prefixe,repondre } = commandeOptions;
  if (!arg[0]) {
    repondre(`how to use this command:\n ${prefixe}tiktok tiktok_video_link`);
    return;
  }

  const videoUrl = arg.join(" ");

 let data = await axios.get('https://api.vihangayt.com/downloader/tiktok2?url='+ videoUrl) ;

  let tik = data.data.data

      // Envoi du message avec le thumbnail de la vidéo
      const caption = `
Author: ${tik.author}
Description: ${tik.desc}
      `;

         
      zk.sendMessage(dest, { video: { url: tik.links[0].a} , caption : caption },{quoted : ms});    

  
});

king({
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
        *Title:* ${result.title}

        
        *Direct Link:* ${result.url}
      `;
       zk.sendMessage(dest,{image : { url : result.thumbnail}, caption : caption},{quoted : ms}) ;
       zk.sendMessage(dest, { video: { url: result.sd  }, caption: 'facebook video downloader powered by *FLASH-MD*' }, { quoted: ms });
      
    })
    .catch((error) => {console.log("Error:", error)
                      repondre(error)});


   
  } catch (error) {
    console.error('An error occurred while Flash-Md was downloading your media:', error);
    repondre('An error occurred while Flash-Md was downloading your media.' , error);
  }
});
