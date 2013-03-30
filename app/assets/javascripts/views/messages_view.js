EmberFirebaseChat.MessagesView = Ember.View.extend({
  newMessage: function() {
    var user = this.$("#user").val();
    var msg = this.$("#message").val();

    if (user && msg)
      this.get("controller").newMessage(user, msg);
  },
});

