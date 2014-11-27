Posts = new Mongo.Collection('posts');
Posts.attachSchema(new SimpleSchema({
  name: {
    type: String,
    optional: false,
    label: "Title",
    max: 20
  },
  summary: {
    type: String,
    optional: false,
    max: 500
  }
}));
