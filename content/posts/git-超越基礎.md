---
date: '2024-12-28T17:59:27+08:00'
draft: false
title: 'Git 基礎之上'
slug: "git-基礎之上"
summary: '介紹一些進階的 git command 用法'
---
在 [Git - Beyond the Basics](https://4zm.org/2024/12/18/git-beyond-the-basics.html) 一文中介紹了十個 git command，這邊挑自己覺得有趣的來紀錄一下。

## git log

可以用 git log 來找一個指定 file 裡面 function 的改動(顯示 log 和 diff)。~~但好像不能找 python class 裡面的 function~~
```
git log -L :setup:cmd/leetcode-picker/main.go
```

可以用 `-S` 來找特定 string 的新增和刪除。
```
git log -S tree
```

## git blame
第一次知道 blame 也有 ignore 可以設定。
```
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

## git branch
git branch 預設是按字母順序，可以改成日期，非常方便。
```
git config --global branch.sort -committerdate
```

## git maintenance
第一次知道的 command，根據[官方描述](https://git-scm.com/docs/git-maintenance#_description)，
> Git commands that add repository data, such as git add or git fetch, are optimized for a responsive user experience. These commands do not take time to optimize the Git data, since such optimizations scale with the full size of the repository while these user commands each perform a relatively small action.

`git add` 和 `git fetch` 為了響應式的使用者體驗，並沒有花時間最佳化 Git data，因為這些最佳化會隨著整個 repository 的規模而擴展，而同時這些使用者的命令每次執行的動作相對較小。

這個 command 會執行各種 tasks 來最佳化 Git data，~~由於都不熟就不介紹了~~，其中有和 [git gc](https://git-scm.com/docs/git-gc)一樣，會清理不必要的文件並最佳化 local repository 的task gc 。


## git rerere
省時間幫手，要是再次遇到完全相同的 merge conflict 時，Git 能夠學會如何解決它並繼續進行。
```
git config --global rerere.enabled true
```

## git worktrees
可以不用再很麻煩的把 branch 切來切去了，直接把 branch 放去別的資料夾，省掉一些 file 搬來搬去的功夫。
```
git worktree add -b new-branch ../new-repo-dir
```

## 結語
~~這不是大部分都不知道嗎~~