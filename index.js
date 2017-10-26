const express = require('express');
const app = express();

var coupons = [
    {
        "brand": "Brand0",
        "value": 49
    },
    {
        "brand": "Brand0",
        "value": 48
    },
    {
        "brand": "Brand0",
        "value": 86
    },
    {
        "brand": "Brand1",
        "value": 18
    },
    {
        "brand": "Brand1",
        "value": 53
    },
    {
        "brand": "Brand1",
        "value": 36
    },
    {
        "brand": "Brand10",
        "value": 50
    },
    {
        "brand": "Brand10",
        "value": 66
    },
    {
        "brand": "Brand11",
        "value": 97
    },
    {
        "brand": "Brand11",
        "value": 21
    },
    {
        "brand": "Brand12",
        "value": 89
    },
    {
        "brand": "Brand12",
        "value": 45
    },
    {
        "brand": "Brand13",
        "value": 13
    },
    {
        "brand": "Brand13",
        "value": 30
    },
    {
        "brand": "Brand14",
        "value": 21
    },
    {
        "brand": "Brand14",
        "value": 41
    },
    {
        "brand": "Brand15",
        "value": 99
    },
    {
        "brand": "Brand15",
        "value": 76
    },
    {
        "brand": "Brand16",
        "value": 85
    },
    {
        "brand": "Brand16",
        "value": 26
    },
    {
        "brand": "Brand17",
        "value": 70
    },
    {
        "brand": "Brand17",
        "value": 19
    },
    {
        "brand": "Brand18",
        "value": 59
    },
    {
        "brand": "Brand18",
        "value": 13
    },
    {
        "brand": "Brand19",
        "value": 44
    },
    {
        "brand": "Brand19",
        "value": 20
    },
    {
        "brand": "Brand2",
        "value": 43
    },
    {
        "brand": "Brand2",
        "value": 95
    },
    {
        "brand": "Brand2",
        "value": 27
    },
    {
        "brand": "Brand20",
        "value": 49
    },
    {
        "brand": "Brand21",
        "value": 88
    },
    {
        "brand": "Brand22",
        "value": 74
    },
    {
        "brand": "Brand23",
        "value": 18
    },
    {
        "brand": "Brand24",
        "value": 64
    },
    {
        "brand": "Brand25",
        "value": 64
    },
    {
        "brand": "Brand26",
        "value": 61
    },
    {
        "brand": "Brand27",
        "value": 61
    },
    {
        "brand": "Brand28",
        "value": 40
    },
    {
        "brand": "Brand29",
        "value": 22
    },
    {
        "brand": "Brand3",
        "value": 49
    },
    {
        "brand": "Brand3",
        "value": 71
    },
    {
        "brand": "Brand3",
        "value": 78
    },
    {
        "brand": "Brand30",
        "value": 30
    },
    {
        "brand": "Brand31",
        "value": 27
    },
    {
        "brand": "Brand32",
        "value": 52
    },
    {
        "brand": "Brand33",
        "value": 18
    },
    {
        "brand": "Brand34",
        "value": 94
    },
    {
        "brand": "Brand35",
        "value": 72
    },
    {
        "brand": "Brand36",
        "value": 78
    },
    {
        "brand": "Brand37",
        "value": 71
    },
    {
        "brand": "Brand38",
        "value": 45
    },
    {
        "brand": "Brand39",
        "value": 59
    },
    {
        "brand": "Brand4",
        "value": 30
    },
    {
        "brand": "Brand4",
        "value": 22
    },
    {
        "brand": "Brand4",
        "value": 68
    },
    {
        "brand": "Brand5",
        "value": 64
    },
    {
        "brand": "Brand5",
        "value": 72
    },
    {
        "brand": "Brand5",
        "value": 22
    },
    {
        "brand": "Brand6",
        "value": 58
    },
    {
        "brand": "Brand6",
        "value": 63
    },
    {
        "brand": "Brand6",
        "value": 23
    },
    {
        "brand": "Brand7",
        "value": 31
    },
    {
        "brand": "Brand7",
        "value": 65
    },
    {
        "brand": "Brand7",
        "value": 54
    },
    {
        "brand": "Brand8",
        "value": 14
    },
    {
        "brand": "Brand8",
        "value": 98
    },
    {
        "brand": "Brand8",
        "value": 90
    },
    {
        "brand": "Brand9",
        "value": 33
    },
    {
        "brand": "Brand9",
        "value": 15
    },
    {
        "brand": "Brand9",
        "value": 27
    }
];

app.get('/coupons', function (req, res) {
    var responseArray = coupons;
    if(req.query.brand && req.query.value){
        responseArray = [];

        for(var i = 0; i < coupons.length; i++){
            if(coupons[i].brand === req.query.brand && coupons[i].value === parseInt(req.query.value)){
                responseArray.push(coupons[i]);
            }
        }
    }else if(req.query.brand){
        responseArray = [];

        for(var i = 0; i < coupons.length; i++){
            if(coupons[i].brand === req.query.brand){
                responseArray.push(coupons[i]);
            }
        }
    }else if(req.query.value){
        responseArray = [];

        for(var i = 0; i < coupons.length; i++){
            if(coupons[i].value === parseInt(req.query.value)){
                responseArray.push(coupons[i]);
            }
        }
    }

    if(req.query.limit){
        responseArray = coupons.slice(0,req.query.limit);
    }

    res.json(responseArray);
});

app.get('/get-coupon', function(req, res){
    res.json(coupons.pop());
});

app.listen(3000, function () {
    console.log('Perkbox task 2 server running in port 3000!')
});