'use strict';

exports = module.exports = function(app, mongoose) {
  //embeddable docs first
 // require('./schema/Note')(app, mongoose);
 // require('./schema/Status')(app, mongoose);
  //require('./schema/StatusLog')(app, mongoose);
  //require('./schema/Category')(app, mongoose);
  
  //then regular docs
  require('./schema/User')(app, mongoose);
  require('./schema/Project')(app, mongoose);
  require('./schema/Group')(app, mongoose);
  require('./schema/Account')(app, mongoose);
};

