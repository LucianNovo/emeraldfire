EmberFirebaseChat.InputView = Ember.View.extend({
  authedBinding: "controllers.auth.authed",

  postMessage: function() {
    // temporary
    var user = this.get("controller.controllers.auth.user.nickname");
    var msg = this.$("#message").val();

    if (user && msg) {
      this.get("controller").newMessage(user, msg);
      this.$("#message").val("");
    }
  },

  pickName: function() {
    var name = this.$("#username").val();

    if (name) {
      this.get("controller.controllers.auth").pickName(name);
    }
  }
});
