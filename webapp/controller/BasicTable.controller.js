sap.ui.define([
	"ZHELI_UI5_CONTROLS/controller/BaseController",
	"ZHELI_UI5_CONTROLS/model/models"
], function(Controller, models) {
	"use strict";

	return Controller.extend("ZHELI_UI5_CONTROLS.controller.BasicTable", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZHELI_UI5_CONTROLS.view.BasicTable
		 */
		onInit: function() {
			this.getView().setModel(models.createProductModel());
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZHELI_UI5_CONTROLS.view.BasicTable
		 */
		onBeforeRendering: function() {

		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZHELI_UI5_CONTROLS.view.BasicTable
		 */
		onAfterRendering: function() {

		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZHELI_UI5_CONTROLS.view.BasicTable
		 */
		onExit: function() {

		},
		onPress:function(){
			var tab = this.byId("Tab1");
			var item = tab.getItems();
		},
		onDropStart:function(oEvent){
			var oDraggedRow = oEvent.getParameter("target");
			var oDragSession = oEvent.getParameter("dragSession");

			// keep the dragged row context for the drop action
			oDragSession.setComplexData("draggedRowContext", oDraggedRow.getBindingContext());
		},
		onDropTable1:function(oEvent){
			
		}

	});

});