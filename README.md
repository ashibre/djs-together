<p align="center">
<h1><strong>Discord.js Together</strong></h1>

[![NPM](https://nodei.co/npm/djs-together.png)](https://nodei.co/npm/djs-together)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)


A simple package for [Discord.JS](https://www.npmjs.com/package/discord.js) for creating activities invites.

# 📌 Installing

With NPM
```
npm install djs-together
```

*Note: This package uses 13.2.0 Discord.js Version*

# 🔌 Usage

For creating any invite, you can only do that with [VoiceChannel](https://discord.js.org/#/docs/main/stable/class/VoiceChannel) structure, in other words **you can't create this invites in [StageChannels](https://discord.js.org/#/docs/main/stable/class/StageChannel).**

Example coding:
```js
const { Client } = require('discord.js');
const client = new Client(/*Your options here.*/);
require('djs-together') //You have to do that to apply djs-together functions.

client.on('ready', () => {
    const channel = client.channels.cache.get('Your voice channel ID.');
    channel.createYoutubeTogetherInvite()
    .then(invite => console.log(invite.url));
});

//You also can use this in a message event.
client.on('messageCreate', message => {
    if(message.content === "start") {

        // message version
        message.member.voice.channel.createYoutubeTogetherInvite()
        .then(invite => message.reply(invite.url));

        //embed version
        message.member.voice.channel.createYoutubeTogetherInvite()
        .then(invite => {
            let embed = new Discord.MessageEmbed()
                .setDescription(`${invite.url}`)
            message.reply({ embeds: [embed]})
        });
    }
});

client.login('TOKEN-HERE');
```

# 📚 Documentation

*Note: All functions returns a promise with [Invite](https://discord.js.org/#/docs/main/stable/class/Invite) structure.*

```js
/**
 * Create a youtube together invite.
 * 
 * @param {Object} options - You can pass parameter "dev" for creating a development youtube together,
 * all the other options you can find [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createYoutubeTogetherInvite(options)

/**
 * Create a poker invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createPokerInvite(options)

/**
 * Create a betrayal invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createBetrayalInvite(options)

/**
 * Create a fishing invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createFishingInvite(options)

/**
 * Create a chess invite.
 * 
 * @param {Object} options - You can pass parameter "dev" for creating a development chess,
 * all the other options you can find [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createChessInvite(options)

/**
 * Create a letter tile invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createLetterTileInvite(options)

/**
 * Create a word snack invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createWordSnackInvite(options)

/**
 * Create a doodle crew invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createDoodleCrewInvite(options)
/**
 * Create a Ankword invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createAnkwordInvite(options)
/**
 * Create a Spell Cast invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createSpellcastInvite(options)
/**
 * Create a Checherks in the parks invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createCheckersInvite(options)
/**
 * Create a Putt party invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createPuttpartyInvite(options)
```
