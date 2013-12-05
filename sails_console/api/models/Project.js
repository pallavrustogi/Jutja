/**
 * Project
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */                                                         
module.exports = {

  attributes: {
  	
  	name: {
	    type: 'string',
	    required: true
	},

  	description: {
	   type:  'string',
	   required: true
	    },
	nodes: 'json',
    owner:'array',
    viewer: 'json',
    editor: 'json'
	

  },
	beforeCreate: function(values, next) {
		//console.log(values);
        //console.log(session);
        //values.owner = values.session.User.id;
		next();
	}


};
