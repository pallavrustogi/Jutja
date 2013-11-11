/**
 * DashboardController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  
  main: function (req, res) {
      if( req.session.authenticated){

    res.render('dashboard/home');
      }
      else res.redirect('/');
  },
    timeline: function (req, res) {
      if( req.session.authenticated){

    res.render('dashboard/timeline');
      }
      else res.redirect('/');
  },
    todo: function (req, res) {
      if( req.session.authenticated){

    res.render('dashboard/todo');
      }
      else res.redirect('/');
  }
  
  

};
