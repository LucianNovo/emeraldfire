EmberFirebaseChat.Message = DS.Firebase.Model.extend({
  sender: DS.attr('string'),
  content: DS.attr('string'),
  timestamp: DS.attr('date')
});

// EmberFirebaseChat.Message = DS.Firebase.Model.extend({
//   last_player: DS.attr('string'),
//	 last_play: DS.attr('string'),
//   content: DS.attr('string'),
//   timestamp: DS.attr('date')
// });
