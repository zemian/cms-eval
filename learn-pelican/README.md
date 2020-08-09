This project is generated using `pelican-quickstart`.

## Setup

1. Install `pip install pelican Markdown`
2. Run `pelican-quickstart`
3. Run `pelican --listen content`
5. Open http://localhost:8000/

## Issues

With `Python 3.8.3` and `pelican 4.2.0` the `--autoreload` option is not working
together with `--listen` option.
Error with `CRITICAL: TypeError: cannot pickle 'generator' object`.

https://github.com/getpelican/pelican/issues/2674
