import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

// Our Home View

let personHTML = '<li> <%= name %> </li>';

let HomeView = Backbone.View.extend({

  className: 'people-list',
  tagName: 'ul',

  template: _.template(personHTML),

  initialize: function (args) {

    this.collection = args.collection;

    this.render();

  },

  render: function () {

    var self = this;

    $('#container').html(this.el);

    _.each(this.collection.models,  function (person) {

      self.$el.append(self.template(person.attributes));

    });

  }

});

export default HomeView;
