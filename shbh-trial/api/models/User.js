/*---------------------
	:: User
	-> model
---------------------*/
module.exports = {

	attributes: {

		// Simple attribute:
		// name: 'STRING',

		// Or for more flexibility:
		// phoneNumber: {
		//	type: 'STRING',
		//	defaultsTo: '555-555-5555'
		// }
		
		name: {
			type: 'STRING'
		},


		email: {
			type: 'STRING'
		}
	}

};
