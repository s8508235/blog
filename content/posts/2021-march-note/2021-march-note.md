---
title: 2021 March note
date: 2021-03-26T19:00:01.000Z
description: webrtc/linux/network reading
--- 
## 聲明
我想筆記摘要是作給未來的自己用的，不過如果剛好有人看到我的筆記去讀原文的話，那是再好不過。<del>有人只看筆記不看課本的嗎</del>

如果有錯也歡迎糾正，謝謝指教。

## Reading
- [Why video chat is a hard technical problem](https://dev.to/lazerwalker/why-video-chat-is-a-hard-technical-problem-43gj)
  - 本文主要是開發 webrtc 會遇到的問題
  - 瀏覽器支援不一
  - 需要自己的後端並且可能需要面對過多 peer to peer 連線 ( Websocket -> STUN -> SFU)
  - 應該也是因為這樣才會有第三方 SDK 在做這些事情吧
- [TLS 1.3 / QUIC 與 HTTP/3 對效能的改善](https://hkt999.medium.com/tls-1-3-quic-%E8%88%87-http-3-%E5%B0%8D%E6%95%88%E8%83%BD%E7%9A%84%E6%94%B9%E5%96%84-a37b2ddcfc95)
  - 本文主要是 QUIC 介紹
  - [latency](https://www.igvita.com/2012/07/19/latency-the-new-web-performance-bottleneck) 影響
  - 基於 UDP
  - TLS 1.3 的 handshake 會先 Client HELLO (CHLO) 來節省 RTT
  - QUIC 的 handshake 類似 TLS 1.3 ( inchoate CHLO 似乎有可能一次傳不完)
  - 解決 TCP retransmission ambiguity problem
  - 這個[pdf](https://www.uio.no/studier/emner/matnat/ifi/INF5072/v18/2018_jan25_quic_sferlin.pdf)有詳盡的介紹

- [Persistent "pipes" in Linux](https://gist.github.com/CAFxX/571a1558db9a7b393579)
  - persistent pipe ([pipe](https://man7.org/linux/man-pages/man2/pipe.2.html) 為 Linux 重新導向資料的方法) 
  - hole punching 為 Linux [fallocate](https要://man7.org/linux/man-pages/man2/fallocate.2.html) 提供的特性，可以標注一個檔案哪段不要 (the logical size of the file does not change; only the physical size (the number of blocks) may change)
  - 利用這個特性把檔案當作 queue 來使用且 lseek 可以跳過 hole

- [Why kafka is so fast](https://medium.com/swlh/why-kafka-is-so-fast-bde0d987cd03)
  - 實時並不代表快，而是可預測
  - 針對吞吐量去最佳化
  - log-structured -> append-only log -> sequential 很多系統也都採用，有興趣可參考[此書](https://www.databass.dev)
  - record batch 像 [redis pipeline](https://redis.io/topics/pipelining) 一樣，遇到網路問題的話還是要為了減少 RTT 還做 batch
  - cheap consumers 不移除 message 而是增加 offset，並依靠之前的 sequential read
  - unflushed buffered writes 不會 fsync -> \
  disk-backed in-memory queue ->\
  一個 ack 的 write 並不代表 durability ->\
  用 replica 來 cover
  - 
- RCU
  - [Linux 核心設計: RCU 同步機制](https://hackmd.io/@sysprog/linux-rcu)
  - [What is RCU, Fundamentally?](http://lwn.net/Articles/262464/)
  - [What is RCU? Part 2: Usage](https://lwn.net/Articles/263130/)
  - [RCU part 3: the RCU API](https://lwn.net/Articles/264090/)
  - [Linux中的RCU的那點事](https://www.huaweicloud.com/articles/74854d8cc300d73a76b7b526044f6709.html)
  -  one writer multiple readers. mainly require 3 mechanisms to implement it.
        1. Publish-Subscribe Mechanism (insertion)
        1. Wait For Pre-Existing RCU Readers to Complete (deletion)
        1. Maintain Multiple Versions of Recently Updated Objects (reader update)
  - RCU 並不保證一定能讀到新增的節點或不讀到要被刪除的節點 (grace period)
  - RCU 讓 reader 不需要 lock 和不需要擔心 [memory barrier](https://en.wikipedia.org/wiki/Memory_barrier) (為了 instruction pipeline 效能提昇而讓 instruction 亂序執行， memory barrier 是為了避免亂序而使用) 且有不錯的效能