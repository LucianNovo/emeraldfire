//= require lib/firebase_adapter

EmberFirebaseChat.store = DS.Store.create({
  revision: 11,
  adapter: DS.Firebase.Adapter.create({
    dbName: "emberchat"
  })
});
