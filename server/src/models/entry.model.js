// entry-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const entry = new Schema({
    stationId: { type: Schema.Types.ObjectId, ref: 'station', required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('entry', entry);
};
