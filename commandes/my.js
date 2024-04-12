const { france } = require('../framework/france');
france(
    {
        nomCom : 'test',
        categorie : 'General'
        
    },async (dest,zk,commandeOptions) => {

 const {ms , arg, repondre,superUser} = commandeOptions;

  const data = await getBuffer("https://i.ibb.co/tHWJrz3/IMG-20231128-WA0005.jpg");
  const response = {
    'title': "I'm Alive Now",
    'body': "Flash-Md",
    'thumbnail': _0x554062,
    'mediaType': 0x1,
    'mediaUrl': "https://i.imgur.com/6jdTPZz.mp4",
    'sourceUrl': "https://github.com/franceking1/Flash-Md",
    'showAdAttribution': false,
    'renderLargerThumbnail': false
  };
  await zk.sendMessage(dest, {
    'audio': {
      'url': "https://i.imgur.com/6jdTPZz.mp4"
    },
    'mimetype': "audio/mp4",
    'ptt': true,
    'contextInfo': {
      'externalAdReply': _0x19f988
    }
  }, {
    'quoted': _0x3eb68d.quoted || ''
  });
});
