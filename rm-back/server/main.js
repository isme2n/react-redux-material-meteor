// import core tools
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'


// We can publish some data (here all)
// we will be able to subscribe to the data later in the client app
// remember that this is not secured, all can subscribe to all data from the client side, just demo purposes
//
// Read more: http://guide.meteor.com/data-loading.html

Meteor.publish('users', function () {
  return Meteor.users.find({_id: this.userId});
});

// We can also use server side methods and call them from our client app
// here we just fetch all documents from the collection
// again, remember that this is not secured, all can call it from the client side, just demo purposes
//
// Read more: http://guide.meteor.com/methods.html
Meteor.methods({



});



// Example user - just a simple example without validation etc.
// Read more at: https://guide.meteor.com/accounts.html
Meteor.startup(() => {
  const theOnlyUser = Meteor.users.find().fetch();
  if (!theOnlyUser.length) {
    Accounts.createUser({
      username: 'admin',
      password: 'pass'
    });
  }
});
