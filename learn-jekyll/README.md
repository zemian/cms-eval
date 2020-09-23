[Jekyll](https://jekyllrb.com/) Jekyll is a simple, blog-aware, static site generator perfect for personal, project, or organization sites.

This folder files is generated using `jekyll new learn-jekyll`.

## How to Install Latest Jekyll

```
brew install ruby
export PATH="/usr/local/opt/ruby/bin:$PATH"
gem install --user-install bundler jekyll
export PATH=$HOME/.gem/ruby/2.7.0/bin:$PATH
jekyll --version

jekyll new my-site
```

NOTE: If you are installing globally, you need to fix the path to jekyll executable:
```
gem which jekyll
# => /usr/local/lib/ruby/gems/2.7.0/gems/jekyll-4.1.1/lib/jekyll.rb
# Look for the executable then link it
ln -s /usr/local/lib/ruby/gems/2.7.0/gems/jekyll-4.1.1/exe/jekyll /usr/local/opt/ruby/bin
jekyll --version
```

## Installing specific (older version of jekyll)

If you want to use GitHub Pages, it recommend to use older jekyll. You can get this by first
install the latest jekyll, generate a project as above, then modify the `Gemfile` for jekyll 
to use a specific version.

Example:

1. Modify `Gemfile` with:

	`gem "jekyll", "= 3.9.0"`

2. Instsall missing dependencies:

	`bundle add kramdown-parser-gfm`

3. Now run it:

	`bundle exec jekyll serve`	

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

## GitHub and Jykyll

https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site-with-jekyll

