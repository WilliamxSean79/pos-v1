module.exports = function main() {
    function loadAllGoods() {
        return [{
                Barcode: 'ITEM000000',
                Name: 'Coca-Cola',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000000',
                Name: 'Coca-Cola',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000000',
                Name: 'Coca-Cola',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000000',
                Name: 'Coca-Cola',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000000',
                Name: 'Coca-Cola',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000001',
                Name: 'Sprite',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000001',
                Name: 'Sprite',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000004',
                Name: 'Battery',
                Unit: 'a',
                Price: 2.00
            }
        ]
    }
    let goodsInfo = loadAllGoods();
let buyerInfo = [];
let count = 0;
let count1 = 0;
for(let i = 1; i < goodsInfo.length; i++) {
    buyerInfo[count1] = {};
    if (goodsInfo[i].Barcode == goodsInfo[i-1].Barcode){
        count++;}
    else if (goodsInfo[i].Barcode != goodsInfo[i-1].Barcode){
        buyerInfo[count1] = goodsInfo[i-1];
        buyerInfo[count1].Count = count+1;
        buyerInfo[count1].Subtotal = (count+1) *goodsInfo[i-1].Price;
        count = 0;
        count1++;
        if(i == goodsInfo.length -1){
            buyerInfo[count1] = goodsInfo[i];
            buyerInfo[count1].Count = count+1;
            buyerInfo[count1].Subtotal = (count+1) *goodsInfo[i].Price;
        }
    }
}
let total = 0;
for(i=0; i<buyerInfo.length; i++) {
    total += buyerInfo[i].Subtotal;
}
console.log('***<store earning no money>Receipt ***\n'+
'   Name: '+buyerInfo[0].Name+', Quantity: '+buyerInfo[0].Count+' bottles, Unit price: '+buyerInfo[0].Price.toFixed(2)+' (yuan), Subtotal: '+buyerInfo[0].Subtotal.toFixed(2)+' (yuan)'+'\n'+
'   Name: '+buyerInfo[1].Name+', Quantity: '+buyerInfo[1].Count+' bottles, Unit price: '+buyerInfo[1].Price.toFixed(2)+' (yuan), Subtotal: '+buyerInfo[1].Subtotal.toFixed(2)+' (yuan)'+'\n'+
'   Name: '+buyerInfo[2].Name+', Quantity: '+buyerInfo[2].Count+', Unit price: '+buyerInfo[2].Price.toFixed(2)+' (yuan), Subtotal: '+buyerInfo[2].Subtotal.toFixed(2)+' (yuan)'+'\n'+
'   ----------------------\n' +'   Total: '+total.toFixed(2)+' (yuan)\n' +'   **********************\n');
};