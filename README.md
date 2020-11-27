# Permission Calculator

## Problem

Example you have a user who have permission code : `67538161`

Now you a router that need this permissions :

```js
    const PAGE_PERMISSIONS_REQUIRE = {
        CREATE_POST : 0x10,
        CREATE_PAGE : 0x20,
        CREATE_USER : 0x40,
        CHANGE_PASSWORD: 0x80,
        GET_PASSWORD : 0x40000,
    }
```
## How code values generate

Lets take a look you will understand :3
**0x1 0x2 0x4 0x8 0x10 0x20 0x40 0x80 0x100 0x200 ...**

## Install and import

#### Run install 

```bash
    npm i whoishina/percal
```

#### Require as module

```js
    const {isHasPermission, getArrayPermission, toHexArray } = require("percal")
```



