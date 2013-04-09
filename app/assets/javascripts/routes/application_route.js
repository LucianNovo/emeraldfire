EmberFirebaseChat.IndexRoute = Ember.Route.extend({
  renderTemplate: function(controller, model) {
    var chatController = this.controllerFor('chat');
    chatController.set("content", EmberFirebaseChat.Message.find());

    this.render('chat', {
      controller: chatController
    });
  }
});

