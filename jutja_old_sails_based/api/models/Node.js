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
        projectid: {
	    type:  'string',
	    required: false
	},
	parentid: {
	    type:  'string',
	    required: false
	},
	nodes: 'json',
        owner: 'json',
        viewer: 'json',
        editor: 'json'
    }

};