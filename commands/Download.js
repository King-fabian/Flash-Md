const { mediafireDl } = require("../framework/dl/Function");
const {france} = require('../framework/france');
const fs = require('fs');
const getFBInfo = require("@xaviabot/fb-downloader");
const { default: axios } = require('axios');

france({nomCom : "insta" , categorie : "Download"},async (dest , zk , commandeOptions)=>{
  const {ms,repondre,arg} = commandeOptions ;

  let king = arg.join(' ')

  if (!arg[0]) { repondre('Please insert an Instagram video link');return}; 

  try {
     
    let igvid = await fetch('https://api.maher-zubair.tech/download/instagram?url=${king}')

    if (igvid.data.data.data[0].type == 'video') {
    zk.sendMessage(dest,{video : {url : igvid.data.data.data[0].url},caption : "Here is your Instagram Video.\n _Downloaded by_ *FLASH-MD*",gifPlayback : false },{quoted : ms}) 
    }
    else {
        zk.sendMessage(dest,{image : {url : igvid.data.data.data[0].url},caption : "Here is your Instagram Image!\n _Downloaded by_ *FLASH-MD*"})
    }
  
  } catch (e) {repondre("An error occurred while downloading your media\n " + e)}
  
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




france({ nomCom: "tiktok", categorie: "Download", reaction: "🎵" }, async (dest, zk, commandeOptions) => {
  const { arg, ms, prefixe,repondre } = commandeOptions;
  if (!arg[0]) {
    repondre(`Voici comment utiliser la commande:\n ${prefixe}veiller lien_video_tiktok`);
    return;
  }

  const videoUrl = arg.join(" ");
  mumaker.tiktok(videoUrl)
    .then((data) => {
      const thumbnail = data.thumbnail;
      const author = data.author;
      const description = data.description;
      const media = Array.isArray(data.media) ? data.media.join(", ") : data.media;
      const music = data.music;
      const like = data.like;
      const comment = data.comment;
      const share = data.share;

      // Envoi du message avec le thumbnail de la vidéo
      const caption = `
        Auteur: ${author}
        Description: ${description}
        Média: ${media}
        Musique: ${music}
        J'aime: ${like}
        Commentaire: ${comment}
        Partages: ${share}
      `;

      
      zk.sendMessage(dest, { image: { url: thumbnail }, caption: caption},{quoted : ms});

      // Envoi de la vidéo sans commentaire
      zk.sendMessage(dest, { video: { url: data.media } });

      // Envoi des autres informations
      
    })
    .catch((err) => {
      console.error("Une erreur s'est produite :", err);
    });
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
