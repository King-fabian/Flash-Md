
































const _0x475d9e=_0x54af;function _0x54af(_0x7e6d7b,_0x324a56){const _0x4d415e=_0x4d41();return _0x54af=function(_0x54af2a,_0x2e1fca){_0x54af2a=_0x54af2a-0x17c;let _0x411f03=_0x4d415e[_0x54af2a];return _0x411f03;},_0x54af(_0x7e6d7b,_0x324a56);}(function(_0x2b7eb1,_0x5ecef1){const _0x522384=_0x54af,_0x4ba7f4=_0x2b7eb1();while(!![]){try{const _0x520bef=parseInt(_0x522384(0x1a2))/0x1+parseInt(_0x522384(0x18d))/0x2*(parseInt(_0x522384(0x19d))/0x3)+-parseInt(_0x522384(0x1a3))/0x4+-parseInt(_0x522384(0x18a))/0x5*(parseInt(_0x522384(0x182))/0x6)+-parseInt(_0x522384(0x185))/0x7*(-parseInt(_0x522384(0x18b))/0x8)+-parseInt(_0x522384(0x19c))/0x9+parseInt(_0x522384(0x193))/0xa*(parseInt(_0x522384(0x188))/0xb);if(_0x520bef===_0x5ecef1)break;else _0x4ba7f4['push'](_0x4ba7f4['shift']());}catch(_0x2d8c03){_0x4ba7f4['push'](_0x4ba7f4['shift']());}}}(_0x4d41,0x6d362));const {king}=require(_0x475d9e(0x1a6)),s=require(_0x475d9e(0x195)),fs=require('fs');function getDescriptionFromEnv(_0x540f38){const _0x5aac96=_0x475d9e;filePath=_0x5aac96(0x194);const _0x2fb026=fs['readFileSync'](filePath,_0x5aac96(0x187)),_0x94eef1=JSON[_0x5aac96(0x1a9)](_0x2fb026),_0x7ed924=_0x94eef1['env'][_0x540f38];return _0x7ed924&&_0x7ed924['description']?_0x7ed924['description']:'The\x20environment\x20variable\x20description\x20was\x20not\x20found.';}king({'nomCom':_0x475d9e(0x1ab),'categorie':'HEROKU'},async(_0x4175bd,_0x165dc2,_0x4c72c7)=>{const _0x3f5e14=_0x475d9e,{ms:_0x17eca2,repondre:_0x52092f,superUser:_0x4dc369,auteurMessage:_0x29341a}=_0x4c72c7;if(!_0x4dc369){_0x52092f(_0x3f5e14(0x1aa));return;};let _0x1033ce=[{'nom':_0x3f5e14(0x1b5),'choix':['on',_0x3f5e14(0x1b0)]},{'nom':_0x3f5e14(0x1a5),'choix':['on',_0x3f5e14(0x1b0)]},{'nom':_0x3f5e14(0x183),'choix':['on',_0x3f5e14(0x1b0)]},{'nom':_0x3f5e14(0x1b2),'choix':[_0x3f5e14(0x1b6),_0x3f5e14(0x198)]},{'nom':'STARTING_MESSAGE','choix':['on',_0x3f5e14(0x1b0)]},{'nom':_0x3f5e14(0x18c),'choix':['on',_0x3f5e14(0x1b0)]},{'nom':'PRESENCE','choix':[_0x3f5e14(0x1b1),_0x3f5e14(0x17d),_0x3f5e14(0x1b4),_0x3f5e14(0x1a7)]},{'nom':_0x3f5e14(0x1b7),'choix':['on',_0x3f5e14(0x1b0)]}],_0x514865=_0x3f5e14(0x18f);for(v=0x0;v<_0x1033ce[_0x3f5e14(0x181)];v++){_0x514865+=v+0x1+_0x3f5e14(0x19e)+_0x1033ce[v][_0x3f5e14(0x197)]+'*\x0a';}_0x514865+=_0x3f5e14(0x17e);let _0x3ea0b1=await _0x165dc2[_0x3f5e14(0x1af)](_0x4175bd,{'text':_0x514865},{'quoted':_0x17eca2});console[_0x3f5e14(0x199)](_0x3ea0b1);let _0x4868dd=await _0x165dc2[_0x3f5e14(0x192)]({'chatJid':_0x4175bd,'sender':_0x29341a,'timeout':0xea60,'filter':_0x3f3bff=>_0x3f3bff[_0x3f5e14(0x1ae)][_0x3f5e14(0x189)]&&_0x3f3bff['message']['extendedTextMessage'][_0x3f5e14(0x1b3)][_0x3f5e14(0x1a0)]==_0x3ea0b1[_0x3f5e14(0x19b)]['id']&&_0x3f3bff[_0x3f5e14(0x1ae)]['extendedTextMessage'][_0x3f5e14(0x1ad)]>0x0&&_0x3f3bff[_0x3f5e14(0x1ae)][_0x3f5e14(0x189)][_0x3f5e14(0x1ad)]<=_0x1033ce[_0x3f5e14(0x181)]}),_0x52a975=_0x4868dd['message'][_0x3f5e14(0x189)][_0x3f5e14(0x1ad)]-0x1,{nom:_0x110314,choix:_0x4c58c5}=_0x1033ce[_0x52a975],_0x48d759='\x20\x20\x20\x20╭──────༺♡༻──────╮\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Flash-Md\x20settings\x0a\x20\x20\x20\x20╰──────༺♡༻──────╯\x0a\x0a';_0x48d759+='*Variable\x20Name*\x20:'+_0x110314+'\x0a',_0x48d759+='*Description*\x20:'+getDescriptionFromEnv(_0x110314)+'\x0a\x0a',_0x48d759+=_0x3f5e14(0x1b9);for(i=0x0;i<_0x4c58c5[_0x3f5e14(0x181)];i++){_0x48d759+=_0x3f5e14(0x1ac)+(i+0x1)+_0x3f5e14(0x17f)+_0x4c58c5[i]+'\x0a';}_0x48d759+=_0x3f5e14(0x190);let _0x1a52dc=await _0x165dc2['sendMessage'](_0x4175bd,{'text':_0x48d759},{'quoted':_0x4868dd}),_0x3b4b70=await _0x165dc2['awaitForMessage']({'chatJid':_0x4175bd,'sender':_0x29341a,'timeout':0xea60,'filter':_0x319df8=>_0x319df8[_0x3f5e14(0x1ae)]['extendedTextMessage']&&_0x319df8[_0x3f5e14(0x1ae)]['extendedTextMessage'][_0x3f5e14(0x1b3)]['stanzaId']==_0x1a52dc[_0x3f5e14(0x19b)]['id']&&_0x319df8[_0x3f5e14(0x1ae)][_0x3f5e14(0x189)][_0x3f5e14(0x1ad)]>0x0&&_0x319df8[_0x3f5e14(0x1ae)][_0x3f5e14(0x189)][_0x3f5e14(0x1ad)]<=_0x4c58c5['length']}),_0x6212c3=_0x3b4b70['message'][_0x3f5e14(0x189)][_0x3f5e14(0x1ad)]-0x1;const _0x131b4f=require('heroku-client'),_0x7f76e6=new _0x131b4f({'token':s[_0x3f5e14(0x191)]});let _0x22dce0=_0x3f5e14(0x184)+s['HEROKU_APP_NAME'];await _0x7f76e6['patch'](_0x22dce0+_0x3f5e14(0x1a1),{'body':{[_0x110314]:_0x4c58c5[_0x6212c3]}}),await _0x52092f(_0x3f5e14(0x19a));});function changevars(_0x423587,_0x4b1735){const _0x3c65bd=_0x475d9e;king({'nomCom':_0x423587,'categorie':_0x3c65bd(0x1b8)},async(_0x48d756,_0x44cccc,_0x134f15)=>{const _0x27672f=_0x3c65bd,{arg:_0xcefbf5,superUser:_0x22266a,repondre:_0x516958}=_0x134f15;if(!_0x22266a){_0x516958(_0x27672f(0x1aa));return;};if(s[_0x27672f(0x1a8)]==null||s[_0x27672f(0x191)]==null){_0x516958(_0x27672f(0x1a4));return;};if(!_0xcefbf5[0x0]){_0x516958(getDescriptionFromEnv(_0x4b1735));return;};const _0x926c31=require(_0x27672f(0x17c)),_0x7ecbeb=new _0x926c31({'token':s[_0x27672f(0x191)]});let _0xdad8c7='/apps/'+s['HEROKU_APP_NAME'];await _0x7ecbeb[_0x27672f(0x196)](_0xdad8c7+'/config-vars',{'body':{[_0x4b1735]:_0xcefbf5[_0x27672f(0x19f)]('\x20')}}),await _0x516958(_0x27672f(0x19a));});};changevars(_0x475d9e(0x1ba),_0x475d9e(0x18e)),changevars(_0x475d9e(0x186),_0x475d9e(0x180));function _0x4d41(){const _0x41995a=['\x20\x20\x20\x20╭──────༺♡༻──────╮\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Flash-Md\x20Settings\x0a\x20\x20\x20\x20╰──────༺♡༻──────╯\x0a\x0a','\x0a└──────\x20⋆⋅☆⋅⋆\x20──────┘\x0a\x0a*Now\x20reply\x20this\x20message\x20with\x20the\x20number\x20that\x20matches\x20your\x20choice.*','HEROKU_APY_KEY','awaitForMessage','370OgvKyn','./app.json','../set','patch','nom','private','log','That\x20Heroku\x20variable\x20is\x20changing,\x20The\x20bot\x20is\x20restarting....','key','3511683jZuAWA','6jnKyun','-\x20*','join','stanzaId','/config-vars','793792CJDUgE','2494044AElXKR','Fill\x20in\x20the\x20HEROKU_APP_NAME\x20and\x20HEROKU_API_KEY\x20environment\x20variables','AUTO_SAVE_STATUS','../france/king','nothing','HEROKU_APP_NAME','parse','This\x20command\x20is\x20for\x20my\x20owner\x20only!','settings','*\x20*','text','message','sendMessage','off','always\x20online','BOT_MODE','contextInfo','recording','AUTO_VIEW_STATUS','public','CHAT_BOT','HEROKU','┌──────\x20⋆⋅☆⋅⋆\x20──────┐\x0a\x0a','setprefix','heroku-client','typing','\x0a*Please\x20Choose\x20a\x20variable\x20by\x20its\x20number*','*\x20=>\x20','BOT_MENU_LINKS','length','210sNsxHd','PM_PERMIT','/apps/','1757KAygIk','menulinks','utf-8','262999xwWPIg','extendedTextMessage','106760EnGiUm','16264NLecNu','AUTO_READ_MESSAGES','19640vYNABi','PREFIX'];_0x4d41=function(){return _0x41995a;};return _0x4d41();}



