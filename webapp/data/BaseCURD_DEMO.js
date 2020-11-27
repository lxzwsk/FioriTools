sap.ui.define([], function() {
	return {
		"matedata": {
			"header": {
				"general": {
					"label": "general",
					"description": "general",
					"fields": {
						"OrderNo": {
							"fieldType": "string",
							"length": "30",
							"label": "OrderNo",
							"description": "Order No",
							"show": true,
							"modify": true
						},
						"CompNo": {
							"fieldType": "string",
							"length": "30",
							"label": "CompNo",
							"description": "Company No",
							"show": true,
							"modify": true
						}
					}
				}
			},
			"items": {
				"OrderNo": {
					"fieldType": "string",
					"length": 30,
					"label": "OrderNo",
					"description": "Order No",
					"show": true,
					"modify": true
				},
				"ItemNo": {
					"fieldType": "number",
					"length": 6,
					"label": "ItemNo",
					"description": "ItemNo",
					"show": true,
					"modify": true
				},
				"ProductNo": {
					"fieldType": "string",
					"length": 20,
					"label": "ProductNo",
					"description": "ProductNo",
					"show": true,
					"modify": true
				},
				"Quantity": {
					"fieldType": "number",
					"length": 10,
					"label": "Quantity",
					"description": "Quantity",
					"show": true,
					"modify": true
				},
				"UNIT": {
					"fieldType": "string",
					"length": 5,
					"label": "UNIT",
					"description": "UNIT",
					"show": true,
					"modify": true
				},
				"PRICE": {
					"fieldType": "number",
					"length": 10,
					"label": "Price",
					"description": "Price",
					"show": true,
					"modify": true
				},
				"Currency": {
					"fieldType": "string",
					"length": 10,
					"label": "Currency",
					"description": "Currency",
					"show": true,
					"modify": true
				}
			},
			"searchs": [{
				"fieldName": "CompNo",
				"tableName": "T880",
				"subFieldItems": [{
					"fieldName": "RCOMP",
					"fieldType": "string",
					"length": 6,
					"input": true,
					"output": true,
					"return": true,
					"label": "Company"
				}, {
					"fieldName": "NAME1",
					"fieldType": "string",
					"length": 30,
					"input": true,
					"output": true,
					"label": "Company name"
				}, {
					"fieldName": "CNTRY",
					"fieldType": "string",
					"length": 3,
					"input": true,
					"output": true,
					"label": "Country of Company"
				}, {
					"fieldName": "NAME2",
					"fieldType": "string",
					"length": 30,
					"input": true,
					"output": true,
					"label": "Name of company 2"
				}]
			}]
		}
	};
});