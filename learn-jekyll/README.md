[Jekyll](https://jekyllrb.com/) Jekyll is a simple, blog-aware, static site generator perfect for personal, project, or organization sites.

This folder files is generated using `jekyll new learn-jekyll`.

## How to setup on MacOSX

```
brew install ruby
export PATH="/usr/local/opt/ruby/bin:$PATH"
gem install bundler jekyll
jekyll --version
```

NOTE: Homebrew install gem in location where it is not in PATH, so
we need to manually fix it.

```
gem which jekyll
# => /usr/local/lib/ruby/gems/2.7.0/gems/jekyll-4.1.1/lib/jekyll.rb
# Look for the executable then link it
ln -s /usr/local/lib/ruby/gems/2.7.0/gems/jekyll-4.1.1/exe/jekyll /usr/local/opt/ruby/bin
jekyll --version
```

## Run it

	bundle exec jekyll serve

## To add blog post

Just create Markdown file under `_posts` folder.

## Bulk Test

`python3 generate-posts.py _posts`

## Reviews (based on based installation)

- Server is fast to start up and run
- Live file reload

- There is no default pagination
- How to see/search by categories
