<sub>[node-mongo-cli](https://github.com/moatorres/node-mongo-cli)</sub>

### Node Mongo CLI 📡 

Node CLI Application example for managing cameras on MongoDB Atlas. Uses Mongoose, Commander.js and Inquirer.js

`Version 1.0.0`

### Usage

#### Installation

Install the dependencies

```sh
$ npm install
```

#### Create Symlink

```sh
$ npm link
```

#### Commands

- List Cameras: `$ node-mongo-cli list`

- Add Camera: `$ node-mongo-cli add`

- Find Camera by Model (string): `$ node-mongo-cli find Canon`

- Update Camera (ObjectId): `$ node-mongo-cli update 5f6636607a225da7614ab8a7`

- Remove Camera (ObjectId): `$ node-mongo-cli remove 5f6636607a225da7614ab8a7`

### Author

[Moa Torres](https://www.github.com/moatorres)

### License

This project is licensed under the MIT License
