import sys
from datetime import date, timedelta

dir = sys.argv[1]
start_date = date(2020, 1, 1)

def create_post(seq):
	fdate = (start_date - timedelta(days=seq)).strftime("%Y-%m-%d")
	fname = "{}/{}-bulktest-{}.md".format(dir, fdate, seq)
	print(f"Generating file: {fname}")
	with open(fname, 'w') as f:
		f.write(f"""---
date: {fdate}
tag: 
	- test
title: Bulk Test No. {seq}
---

> This is just a test


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel diam purus. Curabitur ut nisi lacus.

* [http://example.org](http://example.org)
* [Example.org](http://example.org)


```js
console.log("Hello World");

```
""")

for i in range(1, 1000):
	create_post(i)
