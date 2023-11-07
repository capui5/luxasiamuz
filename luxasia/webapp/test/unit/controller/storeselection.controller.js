/*global QUnit*/

sap.ui.define([
	"luxasia/controller/storeselection.controller"
], function (Controller) {
	"use strict";

	QUnit.module("storeselection Controller");

	QUnit.test("I should test the storeselection controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
