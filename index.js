const tmi = require('tmi.js');

const opts = {
  connection: { reconnect: true },
  identity: {
    username: 'senhordk13',
    password: 'oauth:rsg35ud0kjsmcerhj1oq2krkn7u82u'
  },
  channels: ['blxckoutz'],
};

const client = new tmi.client(opts);

client.on('connected', (ip, port) => {
  console.log(`O bot entrou no endereço: ${ip}:${port}`);
});

const channels = {};

client.on('message', (channel, state, message, self) => {
  if (self) return;
  if (channels[`${channel}`]) return;
  channels[`${channel}`] = channel;
  console.log(`Joined ${channel}!`);
});

client.connect();
