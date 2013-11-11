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
	lastchanged:'string',
	nodes: 'json',
        owner: 'array',
        viewer: 'array',
        editor: 'array'
	

  },
	beforeCreate: function(values, next) {
		values.owner.push(values.lastchanged);
		next();
	}


};
