module.exports = function(app){
    var rootResCon = require('../controllers/rootResourcesController');

    app.route('/rootResources')
    .get(rootResCon.getAllResources)
}