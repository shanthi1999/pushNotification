var push = require('web-push');

var vapIdKeys = {
    publicKey: 'BFEP9S8ttQFtNvua6k3nxOqQgdxJgTdSEa215k4xhDtwMez5sClY0xZ1GDMqhoksKTGVfqVEsk1ckYyvaXzWwu0',  privateKey: 'FlNPe6vO3wb1G4CqtmSokvzlnQk3dt8u_4eeKmK9NSQ'
  }
console.log(vapIdKeys)

push.setVapidDetails('mailto:shanthibabu1999@gmail.com',vapIdKeys.publicKey,vapIdKeys.privateKey);

let sub = {}

push.sendNotification(sub, 'test message');
