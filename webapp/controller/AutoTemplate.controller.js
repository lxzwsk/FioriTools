sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"ZHELI_UI5_CONTROLS/util"
], function(Controller, MessageToast, util) {
	"use strict";
	var iFixedRows = 3;

	return Controller.extend("ZHELI_UI5_CONTROLS.controller.AutoTemplate", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZHELI_UI5_CONTROLS.view.AutoTemplate
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZHELI_UI5_CONTROLS.view.AutoTemplate
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZHELI_UI5_CONTROLS.view.AutoTemplate
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZHELI_UI5_CONTROLS.view.AutoTemplate
		 */
		//	onExit: function() {
		//
		//	}
		onBuildSmartFilterBarConfigure: function() {
			var oDdic = this._getDataSource();
			if (oDdic) {
				var strConfigure = this._buildFilterConfigure(oDdic, 2, "");
				this._getResult().setValue(strConfigure);

			} else {
				MessageToast.show("数据有误，请检查");
			}

		},
		onCopy: function() {
			var strResult = this._getResult().getValue();
			util.copyStringToClipboard(strResult, "copy success", " copy failure");
		},
		onDataSourceAddRows: function() {
			var oDataSource = this.byId("TDataSource");
			this._addRows(oDataSource);
		},
		onDataSourceSubRows: function() {
			var oDataSource = this.byId("TDataSource");
			this._subRows(oDataSource);
		},
		onResultAddRows: function() {
			var oResult = this.byId("TResult");
			this._addRows(oResult);
		},
		onResultSubRows: function() {
			var oResult = this.byId("TResult");
			this._subRows(oResult);
		},
		_getResult: function() {
			return this.byId("TResult");
		},
		_getDataSource: function() {
			var oControl = this.byId("TDataSource");
			var strDataSource = oControl.getValue();
			try {
				var jsonData = JSON.parse(strDataSource);
				return jsonData;
			} catch (error) {
				MessageToast.show(error.Message);
			}
		},
		_getFilterConfigureTemplate: function(fieldName, controlType, filterType, index, mandatory, show) {
			var result = "<smartfilterbar:ControlConfiguration groupId=\"_BASIC\" displayBehaviour=\"idAndDescription\" ";
			if (!fieldName) {
				return undefined;
			}
			if (controlType) {
				result += " controlType=\"" + controlType + "\" ";
			}

			if (filterType) {
				result += " filterType=\" " + filterType + "\" ";
			} else {
				result += " filterType=\"single\" ";
			}

			if (index) {
				result += " index=\"" + index + "\"";
			}

			if (mandatory === "mandatory") {
				result += " mandatory=\"mandatory\" ";
			} else {
				result += " mandatory=\"" + mandatory + "\" ";
			}

			if (show) {
				result += " visible=\"true\" ";
			} else {
				result += " visible=\"false\" ";
			}

			result += " id=\"filter." + fieldName + "\" ";
			result += " key=\"" + fieldName + "\" ";

			result += " /> \r\n";
			return result;
		},
		_buildFilterConfigure: function(ddic, startIndex, keyPrefix) {
			var result = "";
			for (var field in ddic) {
				result += this._getFilterConfigureTemplate(keyPrefix + ddic[field], null, null, startIndex, "auto", false);
				startIndex++;
			}
			return result;
		},
		_addRows: function(oControl) {
			var iCountRows = oControl.getRows();
			oControl.setRows(iCountRows + iFixedRows);
		},
		_subRows: function(oControl) {
			var iCountRows = oControl.getRows();
			if (iCountRows > iFixedRows) {
				oControl.setRows(iCountRows - iFixedRows);
			}
		}

	});

});