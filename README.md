Perkbox test 2
===================


This is the result of the task 2 of the PerkBox test. Done with node.js and Express


Requirements
-------------

- Node.js 6
- npm

Installation
-------------
- run `npm install`
- run `node index.js` to have a server using the port 3000. http://localhost:3000


Endpoinds
---------
- **GET** `/coupons`: Returns a json array with coupons.
	- The following parameters can be added to the query
		- brand: `/coupons?brand=Brand1`
	    - value: `/coupons?value=10`
	    - limit: `/coupons?limit=10`
 The parameters and be used together separating them with the **&** symbol.
- **GET** `/get-coupon` . Returns one coupon and it removes it from the database
