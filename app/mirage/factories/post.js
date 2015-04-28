// Importing the Mirage Factory, see more here:
// https://github.com/samselikoff/ember-cli-mirage
import Mirage from 'ember-cli-mirage';

// I've installed a shim to faker (you can see its implementation
// here: https://github.com/johnotander/ember-faker).
//
// Faker is available as a global, and I've used it as such, but in
// order to use it like it was a module I needed to use the shim
// you've seen.  This is however available globally, but since I'm
// importing it I don't have to add it to the .jshintrc file
import faker from 'faker';

// This is our Post factory.  We can seed Ember's store by running
// ```
// server.create('post');
// ```
// Inside our tests to generate dummy information that our tests can
// use without having to muck around with  our own JSON
export default Mirage.Factory.extend({
  title: () => { return faker.hacker.phrase(); },
  body: () => { return faker.lorem.sentences(Math.floor(Math.random() * 50)); },
  authorName: () => {
    // This is a template string.  For more information see here:
    // https://babeljs.io/docs/learn-es6/#template-strings
    return `${faker.name.prefix()} ${faker.name.firstName()} ${faker.name.lastName()} ${faker.name.suffix()}`;
  },
});
