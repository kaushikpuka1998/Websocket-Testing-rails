function createSocket() {
  const socket = new WebSocket('ws://localhost:3000/cable');

    socket.onopen = () => {
      console.log('WebSocket Client Connected');
      const msg = {
    command: 'subscribe',
    identifier: JSON.stringify({ channel: 'AlertsChannel', id: 1 }),
    };

    socket.send(JSON.stringify(msg));
  };

  socket.onmessage = function (event) {
    
    const data= JSON.parse(event.data)
    if (data.type == "ping") {
      return;
    }
    else if (event.data){
      console.log("Data:", event.data);
    }
  }

  socket.onclose = function (event) {
    console.log('WebSocket Client Closed');
  }

  socket.onerror = function(error) {
    console.log('WebSocket Error:: ' + error);
  }
}

createSocket();
