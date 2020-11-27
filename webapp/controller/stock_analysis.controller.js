sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"ZHELI_UI5_CONTROLS/model/stockhelp"
], function(Controller, JSONModel, StockHelp) {
	"use strict";

	return Controller.extend("ZHELI_UI5_CONTROLS.controller.stock_analysis", {

		urlParams: {
			symbol: "sz300387",
			scale: 5,
			ma: 5,
			datalen: 5,
			template: "?symbol={symbol}&scale={scale}&ma={ma}&datalen={datalen}"
		},
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZHELI_UI5_CONTROLS.view.stock_analysis
		 */
		onInit: function() {

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZHELI_UI5_CONTROLS.view.stock_analysis
		 */
		onBeforeRendering: function() {

		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZHELI_UI5_CONTROLS.view.stock_analysis
		 */
		onAfterRendering: function() {

		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZHELI_UI5_CONTROLS.view.stock_analysis
		 */
		onExit: function() {

		},
		onAnalysisPress: function() {

			var aStocks = this._filterStockNo();
			var strType = this.byId("iStockType").getValue();
			var that = this;
			aStocks.forEach(function(ele) {
				var url = that._buildUrlParams(strType + "" + ele.stockNo);
				var help = new StockHelp();
				help.getHistoryData(url);
			});
		},
		_buildUrlParams: function(strStockNo) {
			var strUrl = "";
			var strParams = "";
			if (this.byId("iScale").getValue()) {
				this.urlParams.scale = this.byId("iScale").getValue();
			}
			if (this.byId("iMa").getValue()) {
				this.urlParams.ma = this.byId("iMa").getValue();
			}
			if (this.byId("iLen").getValue()) {
				this.urlParams.datalen = this.byId("iLen").getValue();
			}
			strParams = this.urlParams.template.replace("{symbol}", strStockNo).replace("{scale}", this.urlParams.scale);
			strParams = strParams.replace("{ma}", this.urlParams.ma).replace("{datalen}", this.urlParams.datalen);
			strUrl = this.byId("iUrl").getValue() + strParams;
			return strUrl;

		},
		_filterStockNo: function() {
			var oAllStocks = this.getOwnerComponent().getStocks();
			var strStartNo = this.byId("iStockStart").getValue();
			var strEndNo = this.byId("iStockEnd").getValue();
			var aResult = oAllStocks.stock.filter(function(ele) {
				return ele.stockNo >= strStartNo && ele.stockNo <= strEndNo;
			});
			return aResult;
		}

	});

});