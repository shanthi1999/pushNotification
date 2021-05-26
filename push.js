var push = require('web-push');

var vapIdKeys = {
    publicKey: 'BFEP9S8ttQFtNvua6k3nxOqQgdxJgTdSEa215k4xhDtwMez5sClY0xZ1GDMqhoksKTGVfqVEsk1ckYyvaXzWwu0',  privateKey: 'FlNPe6vO3wb1G4CqtmSokvzlnQk3dt8u_4eeKmK9NSQ'
  }
console.log(vapIdKeys)

push.setVapidDetails('mailto:shanthibabu1999@gmail.com',vapIdKeys.publicKey,vapIdKeys.privateKey);

let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/cdEfyFDFZTA:APA91bGmRouDukhAQRHTcR0fsdSzE05_cyb27u3SSmhdW1ziIAxp5gDsMWbvd8EB4QPHBMrQZ9EWsjv2rLDVfaM_t12OsJgRP2gr8zUcvOWNcNgd5IUC3aXh2ZQEX7GcnabN5iZHoRJx",
    expirationTime:null,
    keys:{
        p256dh:"BCDZ4uVJf5oMoHGiPLigYPsUW4Vxoc73ry4uEGL2HynU-JObih8ZcwCGtVmrVNs3XBb7bp-8zsoSDcUAeDakYBw",
          auth:"K1cQMNMSQWUXydI1hl8w2A"
    }}

push.sendNotification(sub, 'test message');
