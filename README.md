# Bloggity

Bloggity is a tool designed to help teach [Ember](http://emberjs.com) and [EmberCLI](http://ember-cli.com) by making
a blog

Right now this only covers the creation of the index and show pages of
our (very simple) blog.  This is a repo to facilitate this
[meetup](http://www.meetup.com/EmberJax/events/221439735/)

More to come!

## How To

After you've installed (see below)... You should run the following
command from your terminal:

```sh
git checkout start_here
```

This will put the repo into a failing state.

Run the following command to prove this:

```sh
ember test
```

You should see a lot of output describing your tests followed by
something that looks like this:

![](https://i.imgur.com/YNPo7pr.png)

These are your failing tests.  It is your job to fix them. :)

## Now the fun stuff

The tests we have so far are listed below.  Each of the following
bullets are the tagged commit that makes the test pass. If you'd like
to see the commit that makes a test pass simply execute the following:

```sh
git show -v <tag>
```

Where `<tag>` is the name of the tag you'd like to see (listed below)

Alternatively, if you'd like to skip ahead to that passing test you
can execute:

```sh
git checkout <tag>
```

Where `<tag>` is the name of the tag you'd like to see (listed below)

### Tags and some info

- *passing\_api\_namespace*
  - Our API is namespaced.  The fixture information that has been set
    up requires that the namespace is set to 'api'.  This is very
    similar to the real world constraints of a backend team.
- *passing\_model\_post*
  - This is a model test that proves that we are able to create a
    post record that includes a `title` field, a `body` field, and an
    `authorName` field
- *passing\_posts_route*
  - This is a route test that proves that our `posts` route's model
    hook finds all the posts available before rendering a template
- *passing\_index_redirect*
  - This is an acceptance test that proves that when you visit the
    `"/"`  you a redirected to `"/posts"`.
- *passing\_post\_show*
  - This is an acceptance test that proves that when you visit
    `/posts/:id` with a known id you'll be on a page that displays
    that posts' information.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).
