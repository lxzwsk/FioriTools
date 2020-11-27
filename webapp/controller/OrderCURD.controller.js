sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"ZHELI_UI5_CONTROLS/data/OrdersCURD",
	"sap/ui/model/json/JSONModel"
], function(Controller, OrderData, JSONModel) {
	"use strict";

	return Controller.extend("ZHELI_UI5_CONTROLS.controller.OrderCURD", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZHELI_UI5_CONTROLS.view.OrderCURD
		 */
		onInit: function() {
			var jsonModel = new JSONModel();
			jsonModel.setData(OrderData[0]);
			this.getView().setModel(jsonModel);
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZHELI_UI5_CONTROLS.view.OrderCURD
		 */
		onBeforeRendering: function() {

		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZHELI_UI5_CONTROLS.view.OrderCURD
		 */
		onAfterRendering: function() {

		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZHELI_UI5_CONTROLS.view.OrderCURD
		 */
		onExit: function() {

		},
		onItemClose:function(){
			return false;
		}

	});

});