sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function(Controller, Filter, FilterOperator, JSONModel, MessageBox) {
	"use strict";

	return Controller.extend("ZHELI_UI5_CONTROLS.controller.Odata_CURD_Demo", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZHELI_UI5_CONTROLS.view.Odata_CURD_Demo
		 */
		onInit: function() {

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZHELI_UI5_CONTROLS.view.Odata_CURD_Demo
		 */
		onBeforeRendering: function() {

		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZHELI_UI5_CONTROLS.view.Odata_CURD_Demo
		 */
		onAfterRendering: function() {
			this.oDataModel = this.getView().getModel("OData_Demo");
			this.oDataModel.read("/methodSet");
		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZHELI_UI5_CONTROLS.view.Odata_CURD_Demo
		 */
		onExit: function() {

		},
		onRefresh: function(oEvent) {
			//var oDataModel = this.getView().getModel("OData_Demo");
			//oDataModel.destroy();
		},
		onDisable: function(oEvent) {
			var oBtn = oEvent.getSource();

			var sText = oBtn.getText();
			this.oDataModel.setTokenHandlingEnabled(sText === "Enable");
			if (sText === "Disable") {
				oBtn.setText("Enable");
			} else {
				oBtn.setText("Disable");
			}
		},
		onCallFunction:function(oEvent){
			this.oDataModel.callFunction("/Assigment",{
				method:"POST",
				urlParameters:{
					MatchedContent:"abc",
					NoMatchContent:"123"
				}
			});
			this.oDataModel.submitChanges();
		}
		,
		onSelect: function(oEvent) {
			var sMethodId = this._getMethodId();
			if (!sMethodId) {
				MessageBox.error("Please select METHOD_ID");
				return;
			}
			var iTop = this.byId("iTop").getValue();
			var oFilter =
				new Filter({
					path: 'Method_id',
					operator: FilterOperator.EQ,
					value1: sMethodId
				});

			this.oDataModel.read("/ml_inferenceSet", {
				filters: [oFilter],
				urlParameters: {
					$top: iTop
				},
				success: this.getDataSuccess.bind(this),
				error: this.getDataError.bind(this)
			});
		},
		onSave: function(oEvent) {
			var jsonData = JSON.parse(this.byId("trJson").getValue());
			if (jsonData) {
				if (jsonData.Timestamp) {
					jsonData.Timestamp = new Date(jsonData.Timestamp);
				}
				this.oDataModel.setUseBatch(false);
				this.oDataModel.create("/ml_inferenceSet", jsonData, {
					headers: {
						"Content-Type": "application/json; charset=utf-8"
					},
					error: this.errorHandler.bind(this),
					success: this.successHandler.bind(this),
					changeSetId: Math.random() * 100000000
				});
				/*
				oDataModel.submitChanges({
					error: this.errorHandler.bind(this),
					success: this.successHandler.bind(this)
				});*/

			} else {
				MessageBox.error("Please enter data");
			}
		},
		errorHandler: function(oError) {
			var jsonErr = JSON.parse(oError.responseText);
			var strMessage = `code:${jsonErr.error.code},message:${jsonErr.error.message.value}`;
			MessageBox.error(strMessage);
		},
		successHandler: function(oData) {
			if (oData.DocnrBegin) {
				var strMessage = `${oData.Message},DOCNR:${oData.DocnrBegin}---${oData.DocnrEnd}`;
				MessageBox.success(strMessage);
			}
		},
		getDataSuccess: function(oData) {
			this.oTestData = {};
			if (oData && oData.results && oData.results.length > 0) {
				var oResult = oData.results[0];
				for (var i in oResult) {
					if (i !== "__metadata") {
						this.oTestData[i] = oResult[i];
					}
				}
				var jsonModel = new JSONModel();
				jsonModel.setJSON(this.oTestData.Content);
				this.getView().setModel(jsonModel, "ICADOCM");

				this.byId("trJson").setValue(JSON.stringify(this.oTestData));
			}
		},
		getDataError: function(oError) {
			MessageBox.error(oError.responseText);
		},
		_getMethodId: function() {
			var oMethod = this.byId("cboxMethodId");
			if (oMethod) {
				return oMethod.getSelectedKey();
			}
		},
		methodFormatter: function(id, desc) {
			return '(' + id + ') ' + desc;
		}

	});

});