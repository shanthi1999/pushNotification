var push = require('web-push');

var vapIdKeys = {
    publicKey: 'BFEP9S8ttQFtNvua6k3nxOqQgdxJgTdSEa215k4xhDtwMez5sClY0xZ1GDMqhoksKTGVfqVEsk1ckYyvaXzWwu0',  privateKey: 'FlNPe6vO3wb1G4CqtmSokvzlnQk3dt8u_4eeKmK9NSQ'
  }
console.log(vapIdKeys)

push.setVapidDetails('mailto:shanthibabu1999@gmail.com',vapIdKeys.publicKey,vapIdKeys.privateKey);

let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/fmSD4xXJk2Y:APA91bFt1pE8xYqXuEumhWD9aR4uxdEdbQgI-oaVhfXg9NtTe2tkhVSgBRWVwwieTxOCLQBHG3rxeciOdBCara61FjVcCMyd3NYloVoadHAnJlwX6A55EoAEO6tNTPhnC8_QySn109-c",
           expirationTime:null,
           keys:{
               p256dh:"BNqNxycDYjW8xSHToxuMTcZXlykfoL9l_Fa9ooT58wcOzGo5UtBQlZNDx3z_VtTEb-Bjc0urtmM0EhYlgw8fCEA",
               auth:"KzCU5ZShfP10Xo53NYRjug"
           }}
push.sendNotification(sub, 'test message');
