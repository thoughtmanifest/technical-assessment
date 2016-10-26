'use strict';

describe('teams', () => {

  beforeEach(module('teams'));

  describe('Teams Component', () => {
    var ctrl;

    beforeEach(inject(function($componentController) {
      ctrl = $componentController('teamsList');
    }));

    it('should have a default sort order of +name (i.e. ascending)', function() {
      // I'm only checking that the databound `sort` value is changed.
      // I'm not actually checking what the collection order is since
      // I'm using the built-in `orderBy` convention of +fieldName and -fieldName
      // and checking the actual collection on the client would just be
      // testing the Angular Framework and not my code.
      expect(ctrl.sort).toEqual('+name');
      ctrl.sortBy('desc');
      expect(ctrl.sort).toEqual('-name');
      ctrl.sortBy('asc');
      expect(ctrl.sort).toEqual('+name');
    });
  });
});
