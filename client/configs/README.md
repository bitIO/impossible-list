Contain all of the application-wide configuration for your app. This is where
we'll put our Application Context, which is a file containing variables that are
available to your entire app.

The context file returns an object containing a bunch of stuff we need for our
app. Then we take all that stuff and initialize everything in main.js.

What kind of 'stuff' am I talking about? Here are a few things that are
typically included in a context file:

* Our collections
* Core ES2015 modules we need (Meteor, FlowRouter, ReactiveDict, Tracker)
