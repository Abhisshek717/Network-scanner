const express = require('express');
const wifi = require('node-wifi');

const app = express();

app.use(express.static('public'));

// Initialize wifi module
wifi.init({
  iface: null // network interface, choose a random wifi interface if set to null
});

// Route for getting the list of networks
app.get('/networks', (req, res) => {
  // Scan networks
  wifi.scan((error, networks) => {
    if (error) {
      console.log(error);
      res.status(500).send({ error: 'Failed to scan networks' });
    } else {
      // Sort networks by quality ascending
      networks.sort((a, b) => a.quality - b.quality);
      console.log(networks);
      res.send(networks);
    }
  });
});

// Set up interval to fetch networks every 10 seconds
setInterval(() => {
  wifi.scan((error, networks) => {
    if (error) {
      console.log(error);
    } else {
      // Sort networks by quality ascending
      networks.sort((a, b) => a.quality - b.quality);
      console.log(networks);
    }
  });
}, 10000);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
