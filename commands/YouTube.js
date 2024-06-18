const { king } = require("../france/king");
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const fs = require('fs');
const yt=require("../france/dl/ytdl-core.js")
const ffmpeg = require("fluent-ffmpeg");
const yts1 = require("youtube-yts");
//var fs =require("fs-extra")

king({
  nomCom: "play",
  categorie: "Search",
  reaction: "💿"
}, async (origineMessage, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;
     
  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ")
    const search = await yts(topo);
    const videos = search.videos;

    if (videos && videos.length > 0 && videos[0]) {
      const urlElement = videos[0].url;
          
       let infoMess = {
          image: {url : videos[0]. thumbnail},
         caption : `*FLASH-MD SONG DOWNLOADER*\n
╭───────────────◆
│⿻ *Title:* ${videos[0].title}
│⿻ *Duration:* ${videos[0].timestamp}
│⿻ *Viewers:* ${videos[0].views}
│⿻ *Uploaded:* ${videos[0].ago}
│⿻ *Author:* ${videos[0].author.name}
╰────────────────◆
⦿ *Direct Link:* ${videos[0].url}

╭────────────────◆
│ *_Powered by ©France King._*
╰─────────────────◆`
       }

      

      

      
       zk.sendMessage(origineMessage,infoMess,{quoted:ms}) ;
      // Obtenir le flux audio de la vidéo
      const audioStream = ytdl(urlElement, { filter: 'audioonly', quality: 'highestaudio' });

      // Nom du fichier local pour sauvegarder le fichier audio
      const filename = 'audio.mp3';

      // Écrire le flux audio dans un fichier local
      const fileStream = fs.createWriteStream(filename);
      audioStream.pipe(fileStream);

      fileStream.on('finish', () => {
        // Envoi du fichier audio en utilisant l'URL du fichier local
      

     zk.sendMessage(origineMessage, { document: { url:"audio.mp3"},mimetype:'audio/mp3' }, { quoted: ms,ptt: false });
        console.log("Sending audio file completed !");

     
      });

      fileStream.on('error', (error) => {
        console.error('Error Occurred while writing audio file :', error);
        repondre('An error occurred while writing the audio file.');
      });
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error while searching or downloading video :', error);
    
    repondre('An error occurred while searching or downloading the video.');
  }
});

  

king({
  nomCom: "video",
  categorie: "Search",
  reaction: "🎥"
}, async (origineMessage, zk, commandeOptions) => {
  const { arg, ms, repondre } = commandeOptions;

  if (!arg[0]) {
    repondre("insert video name");
    return;
  }

  const topo = arg.join(" ");
  try {
    const search = await yts(topo);
    const videos = search.videos;

    if (videos && videos.length > 0 && videos[0]) {
      const Element = videos[0];

      let InfoMess = {
        image: { url: videos[0].thumbnail },
        caption: `*FLASH-MD VIDEO DOWNLOADER*\n
╭───────────────◆
│⿻ *Title:* ${Element.title}
│⿻ *Duration:* ${Element.timestamp}
│⿻ *Viewers:* ${Element.views}
│⿻ *Uploaded:* ${Element.ago}
│⿻ *Author:* ${Element.author.name}
╰────────────────◆
⦿ *Direct Link:* ${Element.url}

╭───────────────◆
│ *_Powered by ©France King._*
╰────────────────◆ `
      };

      zk.sendMessage(origineMessage, InfoMess, { quoted: ms });

      // Obtenir les informations de la vidéo à partir du lien YouTube
      const videoInfo = await ytdl.getInfo(Element.url);
      // Format vidéo avec la meilleure qualité disponible
      const format = ytdl.chooseFormat(videoInfo.formats, { quality: '18' });
      // Télécharger la vidéo
      const videoStream = ytdl.downloadFromInfo(videoInfo, { format });

      // Nom du fichier local pour sauvegarder la vidéo
      const filename = 'video.mp4';

      // Écrire le flux vidéo dans un fichier local
      const fileStream = fs.createWriteStream(filename);
      videoStream.pipe(fileStream);

      fileStream.on('finish', () => {
        // Envoi du fichier vidéo en utilisant l'URL du fichier local
        zk.sendMessage(origineMessage, { video: { url :"./video.mp4"} , caption:
          "╭───────────────◆\n│ *FLASH-MD DOWNLOADER*\n╰────────────────◆", gifPlayback: false }, { quoted: ms });
      });


      fileStream.on('error', (error) => {
        console.error('Error while writing video file :', error);
        repondre('An error occurred while writing the video file.');
      });
    } else {
      repondre('No video found');
    }
  } catch (error) {
    console.error('Error searching or downloading video :', error);
    repondre('An error occurred while searching or downloading the video.');
  }
});


king({
  nomCom: "mygroups",
  categorie: "User",
  reaction: "💿"
}, async (senn, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;
     
let getGroupzs = await zk.groupFetchAllParticipating();
            let groupzs = Object.entries(getGroupzs)
                .slice(0)
                .map((entry) => entry[1]);
            let anaa = groupzs.map((v) => v.id);
            let jackhuh = `*GROUPS AM IN*\n\n`
            repondre(`You are Currently in ${anaa.length} groups, Flash MD will send that list in a moment. . .`)
            for (let i of anaa) {
                let metadat = await zk.groupMetadata(i);
               
                jackhuh += `*GROUP NAME:*- ${metadat.subject}\n`
                jackhuh += `*MEMBERS:*- ${metadat.participants.length}\n`
                jackhuh += `*GROUP ID:*- ${i}\n\n`

            }
          await repondre(jackhuh)

}
);




