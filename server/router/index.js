'use strict'

const routes = [
  require('./routes/clinicManagementRoutes'),
  require('./routes/doctorManagementRoutes'),
  // require('./routes/doctorAssignmentRoute'),

];

// Add access to the app and db objects to each route
// module.exports = function router(app, db) {
//   return routes.forEach((route) => {
//     routes(app, db);
//   });
// };