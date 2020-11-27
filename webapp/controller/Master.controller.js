sap.ui.define([
	"ZHELI_UI5_CONTROLS/controller/BaseController",
	"sap/ui/Device",
	"ZHELI_UI5_CONTROLS/model/models"
], function(Controller, Device, models) {
	"use strict";

	return Controller.extend("ZHELI_UI5_CONTROLS.controller.Master", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZHELI_UI5_CONTROLS.view.Master
		 */
		onInit: function() {
			this.getOwnerComponent().getRouter().getRoute("master").attachPatternMatched(this._onRouteMatched, this);
			this.getView().setModel(models.createMasterTreeModel(), "TreeData");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZHELI_UI5_CONTROLS.view.Master
		 */
		onBeforeRendering: function() {

		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZHELI_UI5_CONTROLS.view.Master
		 */
		onAfterRendering: function() {

		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZHELI_UI5_CONTROLS.view.Master
		 */
		onExit: function() {

		},
		_onRouteMatched: function(oEvent) {
			/*
			 * Navigate to the first item by default only on desktop and tablet (but not phone). 
			 * Note that item selection is not handled as it is
			 * out of scope of this sample
			 */
			if (!Device.system.phone) {
				this.getOwnerComponent().getRouter()
					.navTo("detail", {
						path: 0
					}, true);
			}
		},
		onDetailPress: function(oEvent) {
			var oObj = oEvent.getSource();
			var sPath = oObj.getBindingContextPath();
			var itemData = this.getView().getModel("TreeData").getProperty(sPath);
			if (itemData.leaf) {
				this.navTo(itemData.name);
			}else{
				this.showError("请点击下级菜单");
			}
			
		}
		

	});

});