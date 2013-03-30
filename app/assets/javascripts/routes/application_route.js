EmberFirebaseChat.IndexRoute = Ember.Route.extend({
  renderTemplate: function(controller, model) {
    var messagesController = this.controllerFor('messages');
    messagesController.set("content", EmberFirebaseChat.Message.find());

    this.render('messages', {
      controller: messagesController
    });
  }
});

