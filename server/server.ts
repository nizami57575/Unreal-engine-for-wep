import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    // Tüm oyunculara pozisyon bilgisini yayınla (Broadcast)
    wss.clients.forEach(client => {
      if (client !== ws) client.send(data);
    });
  });
});

