sap.ui.define(["sap/ui/comp/filterbar/FilterBar", "sap/ui/layout/GridRenderer"], function(FilterBar, GridRenderer) {
	"use strict";
	var oFilterBar = FilterBar.extend("ZHELI_UI5_CONTROLS.Control.MyFilterBar", {
		metadata: {
			properties: {
				"fieldName": "string"
			}
		},
		renderer: GridRenderer.render
	});
	oFilterBar.prototype.getFilterData = function() {
		var oData = [];
		var aItems = this.getFilterItems();
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
		});
		return oData;

	};

	oFilterBar.prototype._getControlData = function(oControl) {
		if (!oControl) return;

		switch (oControl.getMetadata().getName()) {
			case "sap.m.MultiInput":
				return this._getValueToJson(oControl.getTokens());
			case "sap.m.Select":
				return this._getValueToJson(oControl.getSelectedItem());
			case "sap.m.ComboBox":
				return this._getValueToJson(oControl.getSelectedItem());
			case "sap.m.MultiComboBox":
				return this._getValueToJson(oControl.getSelectedItems());
			default:
				return this._getValueToJson(oControl.getValue());

		}
	};
	oFilterBar.prototype._getValueToJson = function(oValue) {
		var oJson = [];
		if (!oValue) return;

		if (typeof oValue === "undefined") return;

		switch (typeof oValue) {
			case "string":
				if (oValue.indexOf("*") > -1) {
					oJson.push({
						SIGN: "I",
						OPTION: "CP",
						LOW: oValue
					});
				} else {
					oJson.push({
						SIGN: "I",
						OPTION: "EQ",
						LOW: oValue
					});
				}
				break;
			case "number":
				oJson.push({
					SIGN: "I",
					OPTION: "EQ",
					LOW: oValue
				});
				break;
			case "object":

				if (oValue instanceof Array) {
					oValue.forEach(function(ele) {
						oJson.push({
							SIGN: "I",
							OPTION: "EQ",
							LOW: ele.getKey()
						});
					});
				} else {
					if (oValue.getKey) {
						oJson.push({
							SIGN: "I",
							OPTION: "EQ",
							LOW: oValue.getKey()
						});
					} else {
						oJson.push({
							SIGN: "I",
							OPTION: "EQ",
							LOW: oValue
						});
					}
				}
		}

		if (oJson.length > 0) {
			return oJson;
		} else {
			return;
		}

	};

	return oFilterBar;
});