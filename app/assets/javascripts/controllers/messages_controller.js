EmberFirebaseChat.MessagesController = Ember.Controller.extend({

  newMessage: function(sender, message) {
    var msg = EmberFirebaseChat.Message.createRecord({
      sender: sender,
      content: message
    });

    EmberFirebaseChat.store.commit();
  }
});

