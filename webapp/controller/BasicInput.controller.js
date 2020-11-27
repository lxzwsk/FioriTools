sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/FilterType",
	"sap/m/MessageBox",
	"sap/ui/model/odata/v2/ODataModel",
	"../data/BaseCURD_DEMO"
], function(Controller, Filter, FilterOperator, FilterType, MessageBox, ODataModel, DemoData) {
	"use strict";

	var jsonMateData = DemoData.matedata;
	var sTest = "123456";

	return Controller.extend("ZHELI_UI5_CONTROLS.controller.BasicInput", {
		
		onBtn1Press: function(oEvent) {
			var obj = this.byId("DP3");
			obj.setEnabled(true);
		},
		onValueHelpRequest: function(oEvent) {
			MessageBox.show("ddddddddddd");
		},
		onSearch: function(oEvent) {
			var oData = [];
			var oSource = oEvent.getSource();
			var oMateData = jsonMateData;
			oData = oSource.getFilterData();
			var oDataModel = this.getView().getModel("CURD_DEMO");
			var sObjectPath = oDataModel.createKey("SearchHelpValueSet", {
				FieldName: oSource.getFieldName()
			});
			var oFilterData = new Filter({
				path: "Condition",
				operator: FilterOperator.EQ,
				value1: JSON.stringify(oData)
			});

/*			oDataModel.read("/" + sObjectPath, {
				urlParameters: {
					"$format": "json"
				},
				filters: [oFilterData],
				success: this._readSuccess.bind(this),
				error: this._readError.bind(this)
			});*/

			/*var aItems = oSource.getFilterItems();
			var that = this;
			aItems.forEach(function(item) {
				var oControl = item.getControl();
				var oJsonData = that._getControlData(oControl);
				if (oJsonData) {
					oData.push({
						name: item.getLabel(),
						value: oJsonData
					});
				}
			});*/
		},
		_readSuccess: function(oData) {

		},
		_readError: function(oError) {

		},

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZHELI_UI5_CONTROLS.view.BasicInput
		 */
		onInit: function() {
			MessageBox.show(typeof jsonMateData);
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZHELI_UI5_CONTROLS.view.BasicInput
		 */
		onBeforeRendering: function() {

		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZHELI_UI5_CONTROLS.view.BasicInput
		 */
		onAfterRendering: function() {

		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZHELI_UI5_CONTROLS.view.BasicInput
		 */
		onExit: function() {

		}

	});

});