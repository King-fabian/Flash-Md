const { king } = require('../france/king');
const s = require('../set')


king(
    {
        nomCom : "setvar",
        categorie : "HEROKU"
    }, async (dest , zk , commandeOptions) =>{

       const {ms,repondre,superUser , arg} = commandeOptions ;
       
       if(!superUser){repondre('Only bot creator or bot owner can use this command!');return};
       if(!arg[0] || !(arg.join('').split('='))) {repondre('Bad format ; This is the Example of using This command:\nSetvar OWNER_NAME=France King');return};
     
    const text = arg.join(" ")
     const Heroku = require("heroku-client");
   
     const heroku = new Heroku({
        token: s.HEROKU_APY_KEY,
      });

     let baseURI = "/apps/" + s.HEROKU_APP_NAME;
        await heroku.patch(baseURI + "/config-vars", {
          body: {
                  [text.split('=')[0]]: text.split('=')[1],
          },
        });
        await repondre('That Heroku var is changing,The bot is Rebooting....')
    }
);

king(
    {
        nomCom : "allvar",
        categorie : "HEROKU"
    }, async (dest , zk , commandeOptions) =>{

       const {ms,repondre,superUser , arg} = commandeOptions ;
       
       if(!superUser){repondre('only mods can use this commande');return}; 
      
            const Heroku = require("heroku-client");

			const heroku = new Heroku({
				token: s.HEROKU_APY_KEY,
			});
			let baseURI = "/apps/" + s.HEROKU_APP_NAME;

            let h = await heroku.get(baseURI+'/config-vars')
let str = '*FLASH-MD HEROKU VARIABLES*\n\n'
for (vr in h) {
str+= '⚡ *'+vr+'* '+'= '+h[vr]+'\n'
}
 repondre(str)


}

);       


    king(
        {
            nomCom : "getvar",
            categorie : "HEROKU"
        }, async (dest , zk , commandeOptions) =>{
    
           const {ms,repondre,superUser , arg} = commandeOptions ;
           
           if(!superUser){repondre('Only Mods can use this command');return}; 
           if(!arg[0]) {repondre('insert the variable name in capital letter'); return} ;
      
           try {
            const Heroku = require("heroku-client");
               
            const heroku = new Heroku({
              token: s.HEROKU_APY_KEY,
            });
            let baseURI = "/apps/" + s.HEROKU_APP_NAME;
        let h = await heroku.get(baseURI+'/config-vars')
        for (vr in h) {
        if( arg.join(' ') ===vr ) return  repondre( vr+'= '+h[vr]) 	;
        } 
        
        } catch(e) {repondre('Error' + e)}
   
        });
//------------testing update-------------

/*king(
        {
            nomCom : "update",
            categorie : "heroku"
        }, async (dest , zk , commandeOptions) =>{
    
           const {ms,repondre,superUser} = commandeOptions ;
           
           if(!superUser){repondre('Only Mods can use this command');return}; 
           
            const Heroku = require("heroku-client");
               
            const heroku = new Heroku({
              token: s.HEROKU_APY_KEY,
            });


	    const git = simpleGit();    
await git.fetch();        
              var commits = await git.log(['main' + '..origin/' +'main']);

if (commits.total === 0) {        
                repondre('✅ Your bot is up to date with main branch!') }

else {        
                    var app = await heroku.get('/apps/' + s.HEROKU_APP_NAME) 

git.fetch('upstream', 'main');        
                  git.reset('hard', ['FETCH_HEAD']);

var git_url = app.git_url.replace(        
                    "https://", "https://api:" + s.HEROKU_APY_KEY + "@"        
                  ) 

try {        
                    await git.addRemote('heroku', git_url);        
                  } catch (error) { repondre('An error occurred while pushing latest commits to your bot. Redeploy the bot manually.'); }  


await git.push('heroku', 'main');   

await repondre('✅ Your bot has been updated.\n\nRestarting bot...')       
                        
}
};*/
