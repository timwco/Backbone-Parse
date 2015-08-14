import $ from 'jquery';
import Backbone from 'backbone';
import People from './collections/people';
import MainRouter from './routers/main';


$.ajaxSetup({

  headers: {
      'X-Parse-Application-Id' : 'QFzL6dvSMF3A7ETPAeKnc3qUldxY9MWErYLzzZ9q',
      'X-Parse-REST-API-Key' : 'zqevTiePiRoUjeXF6ye1d8HCl4aMbcxmWkRPPGbk'
  }

});


let allPeople = new People();

allPeople.fetch().done( function () {

  new MainRouter({ collection: allPeople });
  Backbone.history.start();

});
