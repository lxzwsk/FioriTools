sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/input",
	"sap/ui/model/json/JSONModel",
	"sap/m/TabContainerItem",
	"sap/m/DatePicker",
	"sap/m/DateTimeField",
	"sap/m/Button",
	"sap/ui/core/Control"
], function(Controller, Input, JSONModel, Item, DatePicker, DateTimeField, Button,Control) {
	"use strict";

	DatePicker.prototype.invalidate = function(oOrigin) {

		//Control.prototype.invalidate.apply(this, arguments);

		var oDom = this.getDomRef();
		if (oDom) {
			var aInputs = oDom.getElementsByTagName("INPUT");
			aInputs[0].disabled = true;
		}

		// 	// 	//DatePicker._selectDate.call(this);
	};
	Input.prototype.invalidate = function(){
		Control.prototype.invalidate.apply(this,arguments);
		//this.setValue("123");
	};
    
	return Controller.extend("ZHELI_UI5_CONTROLS.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZHELI_UI5_CONTROLS.view.Detail
		 */
		onInit: function() {
			var oPerson = new JSONModel({
				"Persons": [{
					"FirstName": "He",
					"LastName": "Li",
					"Name": "HELI",
					"Pay": "60000"
				}, {
					"FirstName": "Xing",
					"LastName": "Zhuang",
					"Name": "XingZhuang",
					"Pay": "65000"
				}, {
					"FirstName": "He",
					"LastName": "HaoXuan",
					"Name": "HeHaoXuan",
					"Pay": "5000"
				}]
			});
			this.getView().setModel(oPerson);

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZHELI_UI5_CONTROLS.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZHELI_UI5_CONTROLS.view.Detail
		 */
		onAfterRendering: function() {
			var oInput = this.getView().byId("dpInput");
			var oDom = oInput.getDomRef();
			var aInputs = oDom.getElementsByTagName("INPUT");
			aInputs[0].onfocus = function() {
				this.disabled = true;
			};
		},
		onChage: function(oEvent) {
			// var oInput = oEvent.getSource();
			// var oDom = oInput.getDomRef();
			// var aInput = oDom.getElementsByTagName("INPUT");
			// aInput[0].disabled = true;
		},
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZHELI_UI5_CONTROLS.view.Detail
		 */
		//	onExit: function() {
		//
		//	}
		onIconTabBarSelect: function(oEvent) {
			var oIconTabBar = oEvent.getSource();
			//oIconTabBar.destoryContent();
			var strKey = "i" + oEvent.getParameter("key");
			var aContent = oIconTabBar.getContent();
			if (!aContent.find(function(ele) {
					return ele.getId() === strKey;
				})) {
				oIconTabBar.addContent(new Input(strKey, {
					value: "this is " + oEvent.getParameter("key")
				}));
			}
		},
		onItemClose: function(oEvent) {
			var oItem = oEvent.getParameter("item");
			if (oItem.getKey() === "defItem") {
				oEvent.bCancelBubble = true;
				oEvent.bPreventDefault = true;
			}
			//return false;
		},
		onAddNewButtonPress: function(oEvent) {
			var strGuid = "";
			var oItem = new Item(strGuid, {});
			this.byId("tabContainer1").addItem(oItem);
		},
		onBtnPress:function(oEvent){
			var oBtn = this.getView().byId("txtPay");
			var iWidth = oBtn.getWidth();
			console.log(iWidth);
		}

	});

});