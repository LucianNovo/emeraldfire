EmberFirebaseChat.Message = DS.Firebase.Model.extend({
  sender: DS.attr('string'),
  content: DS.attr('string'),
  timestamp: DS.attr('date')
});
