const data = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}

const firstQuestion = document.querySelector('#q1')
const secondQuestion = document.querySelector('#q2')
const thirdQuestion = document.querySelector('#q3')

const showProductName = () => {
    firstQuestion.innerHTML = `Название товара: <b>${data.displayedName.displayedName.value}</b>`;
}

const showNotEmptyShops = () => { 
    const shopsInRegion = Object.values(data.stock.stocks)[0]  
    const allShops = Object.keys(shopsInRegion).map((key) => [Number(key), shopsInRegion[key]]);
    const allShopsArray = allShops.map(elem => {
        if (elem[1] > 0) 
        return elem[0]
    })
    const filterShopsArray = allShopsArray.filter(elem => elem > 0)
    secondQuestion.innerHTML = `Магазины с товарами: <b>${filterShopsArray}</b>`;
}

const showMaxShopGoods = () => {
    const shopsInRegion = Object.values(data.stock.stocks)[0]  
    const shopsArray = (Object.keys(shopsInRegion))
    const goodsArray = (Object.values(shopsInRegion))
    const maxNumber = (Math.max(...goodsArray))
    const maxNumberIndex = goodsArray.indexOf(`${maxNumber}`)
    const maxGoodsShop = shopsArray[maxNumberIndex]

    thirdQuestion.innerHTML = `В магазины № <b>${maxGoodsShop}</b> Товара <b>${data.displayedName.displayedName.value}</b> больше всего <b>${maxNumber} шт.</b>`;
}

showProductName();
showNotEmptyShops();
showMaxShopGoods();