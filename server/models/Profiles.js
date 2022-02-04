const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  first_name: String,
  last_name: String,
  location: String,
});

mongoose.model("profiles", profileSchema);

// module.exports = Profile;

// [
//   {
//     "id": "01507581-9d12-a4c4-06bb-19d539a11189",
//     "name": "Item for TEAMS",
//     "created": "2021-10-20T18:25:43.511Z",
//     "due": "2022-11-23T23:05:03.352Z",
//     "completed": true
//   },
//   {
//     "id": "19d539a11189-bb60-u663-8sd4-01507581",
//     "name": "Item for MANAGERS",
//     "created": "2021-10-20T18:25:43.511Z",
//     "due": "2021-11-23T23:05:03.352Z",
//     "completed": true
//   },
//   {
//     "id": "19d539a11189-4a60-3a4c-4434-01507581",
//     "name": "Item for BUSINESS OWNERS",
//     "created": "2021-11-23T14:35:01.752Z",
//     "due": "2021-10-20T18:25:43.511Z",
//     "completed": false
//   },
//   {
//     "id": "7895as2s4c-4a60-3a4c-7acc-895as1cc85",
//     "name": "Item for COACHES",
//     "created": "2021-11-23T14:35:01.752Z",
//     "due": "2029-02-20T18:25:43.511Z",
//     "completed": false
//   }
// ]
