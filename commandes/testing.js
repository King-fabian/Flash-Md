/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

//---------------------------------------------------------------------------
const france = require('../framework')
france.nomCom({
        pattern: "running",
        desc: "To check ping",
        categorir: "NEW",
        filename: __filename,
    },
    async(dest, zk) => {
        var inital = new Date().getTime();
        const { key } = await repondre = zk.sendMessage(dest, {text: '```Ping!!!```'});
        var final = new Date().getTime();
       // await Secktor.sleep(1000)
       response = await zk.sendMessage(dest, {text: '*Pong*\n *' + (final - inital) + ' ms* ', edit: key});
    }
); 
