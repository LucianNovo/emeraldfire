// EmberFirebaseChat.AuthController = Ember.Controller.extend({
//   authed: false,
//   hasName: false,

//   init: function() {
//     this.authClient = new FirebaseAuthClient(EmberFirebaseChat.store.adapter.fb, function(err, user) {
//       if (!err) {
//         if (user) {
//           this.set("user", EmberFirebaseChat.User.find(user.id));

//           var user = this.get("user");
//           user.one("didLoad", function() {
//             if (user.get("nickname")) {
//               this.set("hasName", true);
//             }
//             this.set("authed", true);
//           }.bind(this));
//         }
//       }
//     }.bind(this));
//   },

//   pickName: function(name) {
//     this.get("user").set("nickname", name);
//     EmberFirebaseChat.store.commit();
//     this.set("hasName", true);
//   },

//   login: function() {
//     this.authClient.login("persona");
//   }
// });
