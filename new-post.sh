#! /usr/bin/bash
read -p "title: " title
read -p "title slug: " title_slug
read -p "description: " description
# echo $title $title_slug $description
if [[ -d "content/posts/${title_slug}" ]] ; then
    echo "already exit"
    return 1;
else
    mkdir "content/posts/${title_slug}"
    file_name="content/posts/${title_slug}/${title_slug}.md"
    iso_date_time=$(date +"%Y-%m-%dT%H:%M:%S")
    # echo $file_name $iso_date_time
    cat << EOF >  $file_name
---
title: $title
date: ${iso_date_time}.000Z
description: $description
--- 

EOF

fi
