const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'senhordk13',
		password: 'oauth:rsg35ud0kjsmcerhj1oq2krkn7u82u'
	},
	channels: [ 'blxckoutz' ]
});

client.on('message', (channel, state, message, self) => {
  if (self) return;
  if (channels[`${channel}`]) return;
  channels[`${channel}`] = channel;
  console.log(`Joined ${channel}!`);
});

client.connect();