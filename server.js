var http = require('http')
    , httpProxy = require('http-proxy');

httpProxy.createServer({
    router: {
        'barbstudios.com': 'barbstudios.com:3000',
        'www.barbstudios.com': 'barbstudios.com:3000',
        'bible.barbstudios.com' : 'barbstudios.com:3001',
        'www.bible.barbstudios.com' : 'barbstudios.com:3001'
    }
}).listen(80);
