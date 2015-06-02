## Online resume

Get a clean and modern website for your online resume. The design is a rewritten version of [Styleshout](http://www.styleshout.com/free-templates/ceevee/) using Zurb Foundation

Features:
* HTML5 and CSS3 (based on Zurb Foundation)
* Responsive
* Fontawesome icon fonts
* @font-face custom web fonts
* Cross browser compatible

Visit the online demo at [mpilon.fr](http://www.mpilon.fr)

## How to build your own version

### 0. Requirements
#### Ruby
You need to install the Ruby standard library first (cf. [Ruby Installation](https://www.ruby-lang.org/en/documentation/installation/)). This library includes RubyGems in order to manage Ruby packages.

To install a gem (Ruby package), run the command:
```
$ gem install <gem_name>
```

You may need to run this command using sudo.

Use the previous command for the gems: *bundler* & *middleman*.

#### Node and bower
Please make sure you have NodeJS and npm installed first. (cf. [Node Installation](https://github.com/joyent/node/wiki/Installation))

Then install *Bower* by running the command:
```
$ npm install -g bower
```

You may need to run this command using sudo.

### 1. Get the code

Clone the repo with git. Command:
```
$ git clone https://github.com/merildev/mpilon.fr.git
```

Then navigate into the created folder.

### 2. Install the dependencies
#### Bundle
Make sure you have all the prerequisites, then install the required gems from the Gemfile. Command:
```
$ bundle install
```

#### Bower
Execute the command:
```
$ bower install
```

### 3. Run the server
Everything is ready now! Run the server using the command:
```
$ bundle exec middleman
```

Now use your favorite browser to navigate [here](http://0.0.0.0:4567) - *default middleman port*

### 4. Folders
TODO

## Thanks to
[François F.](https://www.flickr.com/photos/bananaboy24/) for the header photo.

[Styleshout](http://www.styleshout.com) for the CSS template.