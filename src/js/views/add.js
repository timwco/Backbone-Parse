import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Person from '../models/person';

let addHTML = `
<form id="addForm">
  <input type="text" class="name" placeholder="Your Name" />
  <input type="text" class="age" placeholder="Your Age" />
  <button>Add User</button>
</form>
`;

let AddView = Backbone.View.extend({

  className: 'add-page',

  events: {
    'submit #addForm' : 'addNewPerson'
  },

  template: _.template(addHTML),

  initialize: function (args) {
    this.collection = args.collection;
    this.render();
  },

  render: function () {
    $('#container').html(this.el);

    this.$el.append(this.template);
  },

  addNewPerson: function (event) {
    event.preventDefault();

    let form = $(event.target);

    let nameVal = form.find('.name').val();
    let ageVal = form.find('.age').val();

    let newPerson = new Person({
      name: nameVal,
      age: Number(ageVal)
    });

    this.collection.add(newPerson).save();

    console.log(this.collection);

  }

});

export default AddView;
