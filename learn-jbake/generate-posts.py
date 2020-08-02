import sys, os, os.path
from datetime import date, timedelta

dir = sys.argv[1]
start_date = date(2020, 1, 1)

def create_post(seq):
	dt = (start_date - timedelta(days=seq))
	fyear = dt.strftime("%Y")
	fdate = dt.strftime("%Y-%m-%d")
	fname = "{}/{}/{}-test-{}.md".format(dir, fyear, fdate, seq)

	subdir = "{}/{}".format(dir, fyear)
	if not os.path.exists(subdir):
		os.makedirs(subdir)

	print(f"Generating file: {fname}")
	with open(fname, 'w') as f:
		f.write(f"""---
title=Bulk Test No. {seq}
date={fdate}
type=post
tags=blog
status=published
~~~~~~

> This is just a test


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel diam purus. Curabitur ut nisi lacus.

* [http://example.org](http://example.org)
* [Example.org](http://example.org)


```javascript
console.log("Hello World");

```

""")

for i in range(1, 1000):
	create_post(i)