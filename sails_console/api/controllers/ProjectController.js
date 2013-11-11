/**
 * ProjectController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  
  create: function (req, res) {
       if( req.session.authenticated){
    res.render('project/create');
       } else res.redirect('/');
  },
    view: function (req, res) {
         if( req.session.authenticated){
    res.render('project/view');
         } else res.redirect('/');
  }
    
  
  

};
