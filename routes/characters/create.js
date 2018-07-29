const Promise = require('bluebird');

const validateCharaName = name => typeof name === 'string' && name.replace(' ', '').length > 3;

module.exports = (knex, Channel) => {
  return params => {
    const channelName = params.name;

    return Promise.try(() => {
      if (!validateChannelName(channelName))
        throw new Error('channelName must be provided, and be at least two characters');
    })
      .then(() =>
        knex('channels').insert({
          name: channelName.toLowerCase(),
        }),
      )
      .then(() => {
        return knex('channels')
          .where({
            name: channelName.toLowerCase(),
          })
          .select();
      })
      .then(channels => {
        const channel = new Channel(channels.pop());
        return channel;
      }) // create a channel model out of the plain database response
      .catch(err => {
        // sanitize known errors
        if (err.message.match('duplicate key value')) throw new Error('That channel already exists');

        // throw unknown errors
        throw err;
      });
  };
};
