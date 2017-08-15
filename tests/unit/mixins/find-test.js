import Ember from 'ember';
import FindMixin from 'diplomski-projekat/mixins/find';
import { module, test } from 'qunit';

module('Unit | Mixin | find');

// Replace this with your real tests.
test('it works', function(assert) {
  let FindObject = Ember.Object.extend(FindMixin);
  let subject = FindObject.create();
  assert.ok(subject);
});
