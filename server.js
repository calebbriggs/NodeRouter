var http = require('http')
    , httpProxy = require('http-proxy');

httpProxy.createServer({
    hostnameOnly: true,
    router: {
        'barbstudios.com': 'barbstudios.com:3000',
        'www.barbstudios.com': 'barbstudios.com:3000',
        'bible.barbstudios.com' : 'barbstudios.com:81',
        'www.bible.barbstudios.com' : 'barbstudios.com:81'
    }
}).listen(80);
