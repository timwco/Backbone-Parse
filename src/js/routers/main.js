import Backbone from 'backbone';
import HomeView from '../views/home';
import AddView from '../views/add';


let MainRouter = Backbone.Router.extend({

  routes: {

    '' : 'home',
    'add' : 'addPerson'

  },

  initialize: function (args) {
    this.collection = args.collection;
  },

  home: function () {
    new HomeView({ collection: this.collection });
  },

  addPerson: function () {
    new AddView({ collection: this.collection });
  }

});

export default MainRouter;
