---
date: '2023-06-29T18:57:11+08:00'
draft: false
title: 'Hyper V Wireguard'
summary: add hyper v vm and setup wireguard server
---
## Prerequisite knowledge
- Hyper V
- Wireguard

## Step 1 新增 VM
[新增 hyper-v VM](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/get-started/create-a-virtual-machine-in-hyper-v)
(個人是使用 ubuntu server)

[並使用 external switch](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/get-started/create-a-virtual-switch-for-hyper-v-virtual-machines)

## Step 2 安裝 wireguard
新增 user 等 linux 設定這邊跳過，需要的話請參考[鳥哥私房菜](https://linux.vbird.org/linux_basic/centos7/0410accountmanager.php)
```sh
sudo apt install wireguard
```
## Step 3 設定 server
[生成 wireguard config](https://www.wireguardconfig.com/) (記得不要關掉，後面還會用到)

加上 DNS 後(建議)將 server config 存成 `wg0.conf` 並使用

```sh
wg-quick up ./wg0.conf
```

開啟 server (wg-quick 需要 sudo)。

如網路沒通，需要在 `wg0.conf` 的`[Interface]`中加上

```conf
PreUp = sysctl -w net.ipv4.ip_forward=1
PreUp = sysctl -w net.ipv6.conf.all.forwarding=1
```
讓網路能夠 forward (或直接跑這兩個指令，只需要設定一次)。

## Step 3.5 查看 server
到這邊 server 的部分就結束了，
可以使用
```
watch -n 1 sudo wg
```
來看 wireguard 的情況。

## Step 4 client 安裝
在需要的機器上下載 [wireguard 用戶端](https://www.wireguard.com/install/)

並將 client config (生成 wireguard config 部分) 存成 `wg0.conf` 將其匯入用戶端便可使用


## Optional
因為通常家裡都是浮動 IP，所以需要 DDNS，

這邊使用 [DuckDNS](https://www.duckdns.org/)，記得先安裝 curl
```sh
sudo apt install curl
```

註冊完後可以有 5 個 DDNS 的名額，依照[linux cron 的步驟](https://www.duckdns.org/install.jsp)設定，
(DuckDNS 很貼心都有換成你自己的 token 和 domain)

並可得到 `xxx.duckdns.org` 的 domain，將其輸入在 Endpoint 的地方即可( port 要留著)。

## Final words
將之前寫的 [AWS wireguard setup](https://github.com/s8508235/wireguard-terraform-install) 用 windows hyper-v 實現一次，
後來才發現有別人寫好的 [windows solution](https://github.com/micahmo/WgServerforWindows)，有興趣的可以研究一下。