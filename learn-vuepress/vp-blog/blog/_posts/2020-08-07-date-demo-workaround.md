---
title: Date Demo Workaround
date: 2020-08-07T00:00:00-05:00
---

## Workaround fix

With the workaround (using full timezone in frontmatter), we should see url path with http://localhost:8080/2020/08/07/date-demo2/

You must set the timezone in frontmatter to match your locale: `date: 2020-08-07T00:00:00-05:00`

See https://yaml.org/type/timestamp.html

and https://vuepress-theme-blog.ulivz.com/config/front-matter.html#date
