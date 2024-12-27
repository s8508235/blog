---
date: '{{ .Date }}'
draft: false
title: '{{ replace .File.ContentBaseName "-" " " | humanize | title }}'
slug: "{{ replaceRE `^[0-9]{8}-` "" .File.ContentBaseName }}"
summary: ''
---
