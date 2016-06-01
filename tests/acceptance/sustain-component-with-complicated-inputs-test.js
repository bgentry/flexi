import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | sustain with complicated inputs');

test('visiting /tests/sustain-component-with-complicated-inputs', function(assert) {
  visit('/tests/sustain-component-with-complicated-inputs');

  andThen(function() {
    debugger;
    assert.equal(currentURL(), '/tests/sustain-component-with-complicated-inputs', 'We transitioned to the initial route');

    assert.equal(find('p.task-name').eq(0).text(), 'Named task', 'We rendered the positional param named "task"');
    assert.equal(find('h2.display-name').eq(0).text(), 'Named task', 'We rendered the named attribute');
  });
});
