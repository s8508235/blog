---
title: Openssl escape character
date: 2022-01-08T14:33:27.000Z
description: Be careful about the escape character as Linux input
--- 
First of all, I pick [HTTP signature](https://datatracker.ietf.org/doc/html/draft-cavage-http-signatures-12) as my authorization method.

I use [Vegeta](https://github.com/tsenart/vegeta) to load test my API service.

When writing a script for target generation, I need to make a signature for each request.

So I used `openssl` to generate it.
```
echo -n "${message}" | openssl dgst -sha256 -hmac "${secret}" -binary | base64
```
But I did not pass my authenticator.

After some trying(use other language to reproduce what happened), I found that message used for generation was weird.(check the byte)

Go:
```go
import (
	"crypto/hmac"
	"crypto/sha256"
	b64 "encoding/base64"
)
// https://go.dev/play/p/JaDyZh_wNqn
func hmacSha256(data string, secret string) string {
	h := hmac.New(sha256.New, []byte(secret))
	h.Write([]byte(data))
	return b64.URLEncoding.EncodeToString(h.Sum(nil))
}
```

Node:
```javascript
var crypto = require('crypto');
function hmacSha256(message, secret) {
    hmac = crypto.createHmac('sha256', secret);
    hmac.update(message);
    return hmac.digest('base64')
}
```

When make `a\nmessage` as argument in Linux, it would be the same as `a\\nmessage`.

Use 
```
echo -e -n "${message}" | openssl dgst -sha256 -hmac "${secret}" -binary | base64
``` 
instead.

This was why my target generation script didn't pass the authenticator.

I had definitely known how the escape character works, but I didn't check it in the first place.

When using escape character as Linux input, you should be careful about it.

Openssl might be a misplace but never mind. I found the problem from it.

Just write a note to remember the time wasted on it.