1. How to create an https server?
https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/

2. Access static file via http server

```bash
npm install http-server -g
```

- Run http server:

From this repo root directory:

```bash
http-server
```


- Run https server:

From this repo root directory:

```bash
http-server -S -C cert.pem -o
```

