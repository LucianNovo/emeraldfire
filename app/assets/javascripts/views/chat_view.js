EmberFirebaseChat.ChatView = Ember.View.extend({
  autoScroll: function() {
    if (this.state == "inDOM") {
      // Ember.run.next waits until the DOM has been updated :)
      Ember.run.next(this, function() {
        var container = this.$(".chat-messages").get(0);
        console.log(container.scrollHeight);
        container.scrollTop = container.scrollHeight;
      });
    }
  }.observes("controller.content.length"),
});

