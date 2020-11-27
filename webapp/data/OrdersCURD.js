sap.ui.define([], function() {
	return [{
		orderno: 1000001,
		customer: 1000,
		descript: 'nothing',
		createData: '2019-05-20',
		createTime: '09:20:10',
		vipno: 99999,
		discount: 0.85,
		items: [{
			orderno: 1000001,
			itemno: "0001",
			productNo: "1000001",
			productName: "铅笔刀",
			brand: "三凌",
			supplier: "10001",
			barcode: "69001001",
			inPrice: 1.1,
			vipPrice: 1.5,
			outPrice: 2.1,
			qty: 30,
			unit: '支',
			wares: 'CNY',
			planline: [{
				orderno: 1000001,
				itemno: "0001",
				lineno: "0001",
				batch: 1001,
				qty: 10

			}, {
				orderno: 1000001,
				itemno: "0001",
				lineno: "0002",
				batch: 1002,
				qty: 10
			}, {
				orderno: 1000001,
				itemno: "0001",
				lineno: "0003",
				batch: 1003,
				qty: 10
			}]
		}, {
			orderno: 1000001,
			itemno: "0002",
			productNo: "1000002",
			productName: "水彩笔",
			brand: "晨光",
			supplier: "10001",
			barcode: "69001002",
			inPrice: 2.1,
			vipPrice: 2.6,
			outPrice: 3.1,
			qty: 30,
			unit: '支',
			wares: 'CNY',
			planline: [{
				orderno: 1000001,
				itemno: "0002",
				lineno: "0001",
				batch: "2001",
				qty: 15
			}, {
				orderno: 1000001,
				itemno: "0002",
				lineno: "0002",
				batch: "2002",
				qty: 15
			}]

		}]
	}, {
		orderno: 1000002,
		customer: 1001,
		descript: 'nothing',
		createData: '2019-05-20',
		createTime: '09:27:10',
		vipno: 99998,
		discount: 0.80,
		items: [{
			orderno: 1000002,
			itemno: "0001",
			productNo: "2000001",
			productName: "洗衣机",
			brand: "海尔",
			supplier: "20001",
			barcode: "69002001",
			inPrice: 3880,
			vipPrice: 4599,
			outProce: 4999,
			qty: 50,
			unit: '台',
			wares: 'CNY',
			planline: [{
				orderno: 1000002,
				itemno: "0001",
				lineno: '0001',
				batch: 9001,
				qty: 20
			}, {
				orderno: 1000002,
				itemno: "0001",
				lineno: "0001",
				batch: 9002,
				qty: 30
			}]

		}]
	}];
});