---
title: 使用 cgroups 來限制資源
date: 2020-11-19T22:52:32.169Z
description: cgroups 是 control groups，為 linux 核心的一個功能
---

來限制 memory 來簡單示範一下 cgroups

### Disclaimer
我不知道這是不是正確的作法，因為從 docker 得到了 cgroups 相關知識，用來這邊，那麼進入正文

---
### Installation
```
apt install cgroup-tools
```

or
``` 
yum install libcgroup
yum install libcgroup-tools
```
### 建立 cgroup

```cgcreate  -g subsystems:path``` <del>詳情請洽 red hat 官網</del>

關於 subsystem 也可以去 `/sys/fs/cgroup` 下面看內建的

也會看到其他教學是直接在 `/sys/fs/cgroup/` 下直接加資料夾，也會自動幫你加完相關檔案

```
sudo cgcreate -g memory:/mem_test
```

### 增加限制

可以看到在新增 cgroup 後，可以發現 `/sys/fs/cgroup/memory/memory_test` 下面多了一些檔案

這邊主要看 `memory.limit_in_bytes` 和 `memory.usage_in_bytes` 就好，

用 
```
cat /sys/fs/cgroup/memory/memory_test/memory.limit_in_bytes
``` 
或 
```
cgget -g memory:mem_test | grep memory.limit_in_bytes
``` 
來查看設定，接著是用 
```
cgset -r memory.limit_in_bytes=100G mem_test
``` 
<del>為什麼這邊不一樣啊! <small>如果沒有變的話就加上 sudo </small></del>

### 執行程式

`cgexec -g memory:/mem_test command [argument]`

例如:
```
cgexec -g memory:/mem_test ping 8.8.8.8
```

### 觀察

可以使用以下指令來看在這個 cgroup 執行的 process
```
systemd-cgls memory:/mem_test
``` 

看在 cgroup 使用的 memory <del>應該有更好的方法，歡迎提供</del>

```
watch -n 1 "cgget -g memory:mem_test | grep memory.usage_in_bytes"
``` 


### 刪除 cgroup

```
sudo cgdelete memory:/mem_test
```

### Conclusion

這樣就完成簡單的限制資源，還有其他 subsystem ( cpu, blkio, devices 等等) 可以實作，也可以互相組合，雖然是被大量應用在各種容器技術中，但也是可以簡單拿出來用用看。<del>大概吧</del>

### Reference
- [Red hat Resource management Chapter 2](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/resource_management_guide/ch-using_control_groups)