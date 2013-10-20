'use strict';

exports = module.exports = function(app, mongoose) {
  var GroupSchema = new mongoose.Schema({
    _id: { type: String },
    name: { type: String, default: '' },
    permissions: [{ name: String, permit: Boolean }]
  });
  //GroupSchema.plugin(require('./plugins/pagedFind'));
  GroupSchema.index({ name: 1 }, { unique: true });
  GroupSchema.set('autoIndex', (app.get('env') === 'development'));
  app.db.model('Group', GroupSchema);
};

