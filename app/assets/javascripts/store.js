//= require lib/firebase_adapter

EmberFirebaseChat.store = DS.Store.create({
  revision: 12,
  adapter: DS.Firebase.Adapter.create({
    dbName: "emberchat"
  })
});
