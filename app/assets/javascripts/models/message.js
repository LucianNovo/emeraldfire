EmberFirebaseChat.Message = DS.Firebase.LiveModel.extend({
  sender: DS.attr('string'),
  content: DS.attr('string'),
  timestamp: DS.attr('date')
});
