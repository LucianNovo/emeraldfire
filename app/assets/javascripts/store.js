//= require lib/firebase_adapter

EmberFirebaseChat.store = DS.Store.create({
  revision: 12,
  adapter: DS.Firebase.Adapter.create({
    dbName: window.DB_NAME  // populated by <script> tag in rails application view
  })
});
