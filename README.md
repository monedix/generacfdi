# Generacfdi

One of the first to offer stamping services on npmjs

Test npm package for consuming Real Virtual’s stamping services

## Installing

```bash
npm install generacfdi
```

Once the package is installed, you can import the library using import or require approach:

ES Modules 

```bash
import generacfdi from 'generacfdi';
```

```bash
import { GetTicket } from 'generacfdi';
```

CommonJS

```bash
const generacfdi = require('generacfdi');
```

```bash
const GetTicket = require('generacfdi').GetTicket;
```


To use the stamping services in production, you must be our client and have a stamping username and password.

Example

If you wish to stamp your invoice, you must convert your XML to base64 and use:

```bash
GetTicket('username', 'pass', 'XMLBase64')
```