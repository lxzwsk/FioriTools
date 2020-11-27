sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"ZHELI_UI5_CONTROLS/Control/MyObject",
	"sap/ui/model/json/JSONModel"
], function(Controller, myObject, JSONModel) {
	"use strict";

	return Controller.extend("ZHELI_UI5_CONTROLS.controller.CustControl_Basic", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZHELI_UI5_CONTROLS.view.CustControl_Basic
		 */
		onInit: function() {
			var oLabel = this.byId("myLabel");
			oLabel.attachAlarm(function(oEvent) {
				//debugger;
			});
			oLabel.attachError(function(oEvent) {
				//debugger;
			});
			oLabel.setValue(6);
			oLabel.checkValue();

			oLabel.setValue(120);
			oLabel.checkValue();

			var jsonModel = new JSONModel();
			jsonModel.setJSON(this.getOwnerComponent().getStocks());
			this.getView().setModel(jsonModel, "stocks");

			//var myObject = new ZHELI_UI5_CONTROLS.Control.MyObject("1bc");

		}

	});

});