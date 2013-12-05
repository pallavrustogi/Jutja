/**
 * ProjectController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  
  create: function (req, res) {
    var owner = req.session.User.id;
    var name = req.param('pname');
    var description = req.param('pdesc');
 //   var nodes = req.param('last-name');
   
      //a check required here to see if the user has project with same name .
       
      //save project
       Project.create({
                   name: name,
                   description: description,
                    owner: [owner] ,
                    viewer: [owner],
                    editor: [owner]
                }).exec(function(err, project){
                    if (err) return res.send('An error occured', 500);
                    // Send back the generated project
                    return res.json(project);
                })

       
  },
    //view will show your all projects
    view: function (req, res) {
    var user = req.session.User.id;
    Project.find()
    .where({owner: user})
    .sort('name')
    .exec(function(err, projects) {
        res.json(projects);
    });
        
  },
    //this deletes a single project
    delete: function (req, res) {
    var projectid = req.param('id');
    var userid = req.session.User.id;
    Project.destroy({
    id: projectid,
    owner: {
    contains: userid
}}).done(function(err) {
    if(err) {
        res.json({'value': 'Project Not Found'});
    } else {
        res.json({'value': projectid+" was deleted"});
    }
});
    
  }
  
  

};
