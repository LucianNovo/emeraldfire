//=require moment.min

Ember.Handlebars.registerBoundHelper('formatTimestamp', function(date, options) {
  if (!date) return;
  if (date.constructor != Date) throw new Error("Only Date objects can be passed to formatTimestamp");

  return moment(date).format(options.hash.fmtString);
});
