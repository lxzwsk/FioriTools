sap.ui.define([
	"ZHELI_UI5_CONTROLS/controller/BaseController"
], function(Controller) {
	"use strict";

	return Controller.extend("ZHELI_UI5_CONTROLS.controller.AnalyticalTable_Basic", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZHELI_UI5_CONTROLS.view.AnalyticalTable_Basic
		 */
			onInit: function() {
				var oPage = this.getView().getAggregation("content")[0];
				var oBar = new sap.m.Toolbar();
				//var oBar = oPage.getAggregation("subHeader");
				var oButton = new sap.m.Button({
					text:"HideMaster",
					icon:"sap-icon://full-screen"
				});
				debugger;
				oButton.attachPress(this.onHideMaster);
				oBar.addAggregation("content",oButton);
				oPage.addAggregation("content",oBar);
				
				
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZHELI_UI5_CONTROLS.view.AnalyticalTable_Basic
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZHELI_UI5_CONTROLS.view.AnalyticalTable_Basic
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZHELI_UI5_CONTROLS.view.AnalyticalTable_Basic
		 */
		//	onExit: function() {
		//
		//	}
		onSearch:function(oEvent){
			debugger;
			var tab = this.getView().byId("Meetups.Table");
			tab.rebindTable();
		},
		onMeetupsBeforeRebindTable:function(oEvent){
			debugger;
		}

	});

});