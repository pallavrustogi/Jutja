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
    
    view: function (req, res) {
    res.render('project/view');
  },
    new: function (req, res) {
    res.render('project/new');
  }
  
  

};
