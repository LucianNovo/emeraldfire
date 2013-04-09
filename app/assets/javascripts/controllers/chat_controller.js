EmberFirebaseChat.ChatController = Ember.Controller.extend({
  needs: ['auth'],

  authBinding: "controllers.auth",

  init: function() {
    // forces auth init
    this.get("controllers.auth");
  },

  newMessage: function(sender, message) {
    var msg = EmberFirebaseChat.Message.createRecord({
      sender: sender,
      content: message
    });

    EmberFirebaseChat.store.commit();
  },

  login: function() {
    this.get("controllers.auth").login();
  }
});

