sap.ui.defing(["sap/m/HBox", "sap/m/Label", "sap/m/Input", "sap/m/ComboBox", "sap/m/MultiInput", "sap/m/MultiComboBox"], function(HBox,
	Label, Input, ComboBox, MultiInput, MultiComboBox) {
	"use strict";

	var oContainer = HBox.extend("ZHELI_UI5_CONTROLS.Control.MyField", {
		metadata: {
			properties: {
				"fieldName": "string",
				"label": "string",
				"dataType": "string",
				"controlType": "string"
			}
		}
	});

	oContainer.property.init = function() {
		var oControl;
		var oLabel = new Label();
		oLabel.setLabel(this.getLabel());
		this.insertItem(oLabel);
		switch (this.getDataType()) {
			case "dropdownlist":
				break;
			case "checkbox":
				break;
			default:
				oControl = new Input();
				break;
		}
	};
	return oContainer;
});