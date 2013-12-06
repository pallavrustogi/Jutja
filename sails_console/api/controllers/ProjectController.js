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
        
  }, //editbasic info
    editinfo: function (req, res) {
     var orignalowner = req.session.User.id;
    var pname = req.param('pname');
    var pdesc = req.param('pdesc');
    var projectid = req.param('pid');
        if(typeof pname != 'undefined'){
            if(typeof pdesc != 'undefined'){
    Project.update({
        id: projectid
    },{
        name: pname,
        description: pdesc
    }, function(err, project) {
        //error handling
          if (err) {
    return res.json({'value': 'There was a error in updating'});
  // Updated user successfully!
  } else {
    res.json(project);
  }
});
            }} else { 
                res.json({'value':'all the variables not defined'})}
        
        
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
