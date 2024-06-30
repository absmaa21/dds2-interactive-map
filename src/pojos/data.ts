import {Area, Unit} from "@/pojos/enums";

interface Marker {
    "name": string,
    "area": Area,
    "location": { x: number, y: number },
}

export interface Data {
    "last-update": number,
    "version": number,
    "game-version": string,
    "hideouts": Hideout[],
    "shops": Shop[],
    "equip-shops": Shop[],
    "pawn-shops": Shop[],
    "anchor-spots": Marker[],
    "bosses": Boss[],
    "cloth-shops": Shop[],
    "restaurants": Shop[],
    "dealer-spots": Marker[],
    "medic-points": MedicPoint[],
}

export interface Shop extends Marker {
    "check-possible": boolean,
    "discounts": number[],
    "items": Item[],
}

export interface Item {
    "name": string,
    "price": number,
    "amount": number,
    "unit": Unit,
    "quantity": number[],
}

export interface Hideout extends Marker {
    "price": number,
    "visibility:": number,
    "security": number,
    "comfort": number,
    "running-water": boolean,
    "phoneline": boolean,
    "garden": boolean,
}

export interface Boss extends Marker {
    "demands": DrugDemand[]
}

export interface MedicPoint extends Marker {
    "price": number,
}

export interface DrugDemand {
    "name": string,
    "price-per-g": number,
}

const data: Data
    = {
    "last-update": 1719601311809,
    "version": 1,
    "game-version": "1.0.4",
    "hideouts": [
        {
            "name": "Bunker",
            "area": Area.SMALL_ISLAND,
            "location": { x: 0.324095, y: 0.941388},
            "price": 0,
            "visibility:": 0,
            "security": 0,
            "comfort": 0,
            "running-water": false,
            "phoneline": false,
            "garden": false,
        },
        {
            "name": "Cottage",
            "area": Area.ARCHI,
            "location": { x: 0.567675, y: 0.962162},
            "price": 0,
            "visibility:": 0,
            "security": 0,
            "comfort": 0,
            "running-water": false,
            "phoneline": false,
            "garden": false,
        },
        {
            "name": "Cottage",
            "area": Area.ARCHI,
            "location": { x: 0.448032, y: 0.944473},
            "price": 230000,
            "visibility:": 0,
            "security": 0,
            "comfort": 0,
            "running-water": true,
            "phoneline": true,
            "garden": true,
        },
        {
            "name": "House",
            "area": Area.ARCHI,
            "location": { x: 0.503991, y: 0.85865},
            "price": 400000,
            "visibility:": 0,
            "security": 0,
            "comfort": 0,
            "running-water": true,
            "phoneline": true,
            "garden": false,
        },
        {
            "name": "Cottage",
            "area": Area.CALLEJON,
            "location": { x: 0.513261, y: 0.793076},
            "price": 385000,
            "visibility:": 0,
            "security": 0,
            "comfort": 0,
            "running-water": true,
            "phoneline": true,
            "garden": false,
        },
        {
            "name": "House",
            "area": Area.ARCHI,
            "location": { x: 0.440135, y: 0.843888},
            "price": 190000,
            "visibility:": 0,
            "security": 0,
            "comfort": 0,
            "running-water": false,
            "phoneline": false,
            "garden": true,
        },
        {
            "name": "Apartment",
            "area": Area.CALLEJON,
            "location": { x: 0.530426, y: 0.700723},
            "price": 350000,
            "visibility:": 0,
            "security": 0,
            "comfort": 0,
            "running-water": true,
            "phoneline": true,
            "garden": false,
        },
        {
            "name": "Cottage",
            "area": Area.CALLEJON,
            "location": { x: 0.494035, y: 0.709475},
            "price": 300000,
            "visibility:": 0,
            "security": 0,
            "comfort": 0,
            "running-water": true,
            "phoneline": true,
            "garden": false,
        },
        {
            "name": "Barak",
            "area": Area.CALLEJON,
            "location": { x: 0.505193, y: 0.691973},
            "price": 250000,
            "visibility:": 0,
            "security": 0,
            "comfort": 0,
            "running-water": false,
            "phoneline": false,
            "garden": false,
        },
        {
            "name": "Cottage",
            "area": Area.CALLEJON,
            "location": { x: 0.559092, y: 0.719605},
            "price": 390000,
            "visibility:": 0,
            "security": 0,
            "comfort": 0,
            "running-water": false,
            "phoneline": true,
            "garden": false,
        },
        {
            "name": "House",
            "area": Area.FARMERS_ISLAND,
            "location": { x: 0.669464, y: 0.840969},
            "price": 610000,
            "visibility:": 0,
            "security": 0,
            "comfort": 0,
            "running-water": false,
            "phoneline": false,
            "garden": true,
        },
    ],
    "shops": [
        {
            "name": "Shop",
            "area": Area.SMALL_ISLAND,
            "check-possible": false,
            "location": {
                "x": 0.334738,
                "y": 0.883381
            },
            "discounts": [0.0, 0.1, 0.2],
            "items": [
                {
                    "name": "Small water bottle",
                    "price": 300,
                    "amount": 500,
                    "unit": Unit.LIQUID,
                    "quantity": [10, 30]
                },
                {
                    "name": "Sausage",
                    "price": 500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [5, 10]
                },
                {
                    "name": "Beer",
                    "price": 500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [5,10]
                },
                {
                    "name": "Cigarette pack",
                    "price": 3750,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1,2]
                },
                {
                    "name": "Bus ticket",
                    "price": 20,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [15,15]
                },
                {
                    "name": "Plastic baggies",
                    "price": 1,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [100,300]
                },
                {
                    "name": "Plastic bag",
                    "price": 250,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [5,5],
                }
            ]
        },
        {
            "name": "General Store",
            "area": Area.ARCHI,
            "check-possible": false,
            "location": {
                "x": 0.477041,
                "y": 0.914439
            },
            "discounts": [
                0.0,
                0.1
            ],
            "items": [
                {
                    "name": "Small water bottle",
                    "price": 300,
                    "amount": 500,
                    "unit": Unit.LIQUID,
                    "quantity": [
                        8
                    ]
                },
                {
                    "name": "Sausage",
                    "price": 500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        20
                    ]
                },
                {
                    "name": "Cigarette pack",
                    "price": 3750,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        2
                    ]
                },
                {
                    "name": "Bus ticket",
                    "price": 20,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        25
                    ]
                },
                {
                    "name": "Plastic baggies",
                    "price": 1,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [500]
                },
                {
                    "name": "Plastic bag",
                    "price": 250,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [5],
                },
                {
                    "name": "Chocolate bar",
                    "price": 300,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1]
                },
                {
                    "name": "Small backpack",
                    "price": 1500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1]
                },
                {
                    "name": "Small flashlight",
                    "price": 3000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        1
                    ]
                },
                {
                    "name": "Fertilizer",
                    "price": 1750,
                    "amount": 1000,
                    "unit": Unit.MASS,
                    "quantity": [
                        5
                    ]
                },
                {
                    "name": "Crowbar",
                    "price": 6000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        1
                    ]
                },
                {
                    "name": "Ethanol",
                    "price": 480,
                    "amount": 200,
                    "unit": Unit.LIQUID,
                    "quantity": [
                        10
                    ]
                },
                {
                    "name": "Vinegar",
                    "price": 500,
                    "amount": 500000,
                    "unit": Unit.LIQUID,
                    "quantity": [
                        10
                    ]
                },
                {
                    "name": "Keychain",
                    "price": 1500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        3
                    ]
                },
                {
                    "name": "Rolling papers",
                    "price": 10,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        20
                    ]
                },
                {
                    "name": "Duct tape",
                    "price": 5,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        100
                    ]
                },
                {
                    "name": "Stretch foil",
                    "price": 10,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        80
                    ]
                },
                {
                    "name": "Cash large",
                    "price": 1,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        100000
                    ]
                }
            ]
        },
        {
            "name": "Botanist",
            "area": Area.ARCHI,
            "check-possible": false,
            "location": {
                "x": 0.550338,
                "y": 0.942071
            },
            "discounts": [
                0.0,
                0.1,
                0.15,
                0.2
            ],
            "items": [
                {
                    "name": "Plastic baggies",
                    "price": 1,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        100,
                        200,
                        300
                    ]
                },
                {
                    "name": "Fertilizer",
                    "price": 1750,
                    "amount": 1000,
                    "unit": Unit.MASS,
                    "quantity": [
                        2,
                        2,
                        3
                    ]
                },
                {
                    "name": "Rolling papers",
                    "price": 8,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        40,
                        60,
                        80
                    ]
                },
                {
                    "name": "Indica Seed",
                    "price": 3000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        5,
                        7,
                        12
                    ]
                },
                {
                    "name": "Weed Indica",
                    "price": 9000,
                    "amount": 10,
                    "unit": Unit.MASS,
                    "quantity": [
                        1,
                        2,
                        3
                    ]
                },
                {
                    "name": "UV bulb large",
                    "price": 9400,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        1,
                        2,
                        2
                    ]
                },
                {
                    "name": "Hydroponic elements",
                    "price": 9000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        1,
                        2,
                        2
                    ]
                },
                {
                    "name": "Flower pot",
                    "price": 2000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        1,
                        2,
                        2
                    ]
                },
                {
                    "name": "Empty glass pipe",
                    "price": 5,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        10,
                        20,
                        30
                    ]
                },
                {
                    "name": "Vial",
                    "price": 2,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        10,
                        20,
                        30
                    ]
                },
                {
                    "name": "Led bulb small",
                    "price": 3700,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        0,
                        1,
                        1
                    ]
                },
                {
                    "name": "Fan",
                    "price": 2250,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [
                        0,
                        2,
                        3
                    ]
                }
            ]
        },
        {
            "name": "Fuel depot",
            "area": Area.ARCHI,
            "check-possible": true,
            "location": {
                x: 0.520985,
                y: 0.879266
            },
            "discounts": [0.0, 0.1],
            "items": [
                {
                    "name": "Bus ticket",
                    "price": 20,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [5],
                },
                {
                    "name": "Small flashlight",
                    "price": 3000,
                    "amount": 2,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Keychain",
                    "price": 1500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Gasoline 4l",
                    "price": 6000,
                    "amount": 4000,
                    "unit": Unit.LIQUID,
                    "quantity": [8],
                },
                {
                    "name": "Gasoline 11l",
                    "price": 16500,
                    "amount": 11000,
                    "unit": Unit.LIQUID,
                    "quantity": [2],
                },
            ]
        }, // Finished
        {
            "name": "Mechanic",
            "area": Area.ARCHI,
            "check-possible": true,
            "location": {
                x: 0.51635,
                y: 0.953064
            },
            "discounts": [0.0, 0.05],
            "items": [
                {
                    "name": "Small flashlight",
                    "price": 3000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Crowbar",
                    "price": 6000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Keychain",
                    "price": 1500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Gasoline 4l",
                    "price": 6000,
                    "amount": 4000,
                    "unit": Unit.LIQUID,
                    "quantity": [1],
                },
                {
                    "name": "Metal parts",
                    "price": 950,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [8],
                },
                {
                    "name": "Electric wires",
                    "price": 1000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [8],
                },
            ]
        },
        {
            "name": "Marcus",
            "area": Area.SMALL_ISLAND,
            "check-possible": false,
            "location": {
                x: 0.323065,
                y: 0.944824
            },
            "discounts": [0.0, 0.1, 0.15, 0.2],
            "items": [
                {
                    "name": "Plastic baggies",
                    "price": 1,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [50, 100, 150],
                },
                {
                    "name": "Vial",
                    "price": 2,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [30, 50, 80],
                },
                {
                    "name": "Ethanol",
                    "price": 480,
                    "amount": 200,
                    "unit": Unit.LIQUID,
                    "quantity": [30, 50, 80],
                },
                {
                    "name": "Acetone",
                    "price": 3000,
                    "amount": 1000,
                    "unit": Unit.LIQUID,
                    "quantity": [0,2,3],
                },
                {
                    "name": "Amphetamine 10g",
                    "price": 12000,
                    "amount": 10,
                    "unit": Unit.MASS,
                    "quantity": [3,5,6],
                },
                {
                    "name": "Phenylethylamine",
                    "price": 2400,
                    "amount": 200,
                    "unit": Unit.LIQUID,
                    "quantity": [10,12,15],
                },
                {
                    "name": "Acetic acid",
                    "price": 200,
                    "amount": 100,
                    "unit": Unit.LIQUID,
                    "quantity": [10,20,30],
                },
                {
                    "name": "Amphetamine 50g",
                    "price": 61000,
                    "amount": 50,
                    "unit": Unit.MASS,
                    "quantity": [0,1,1],
                },
            ]
        },
        {
            "name": "Mini market",
            "area": Area.CALLEJON,
            "check-possible": true,
            "location": {
                x: 0.511544,
                y: 0.817107
            },
            "discounts": [0.0, 0.05, 0.1],
            "items": [
                {
                    "name": "Small water bottle",
                    "price": 300,
                    "amount": 500,
                    "unit": Unit.LIQUID,
                    "quantity": [10, 15, 20],
                },
                {
                    "name": "Beer",
                    "price": 500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [10, 15, 20],
                },
                {
                    "name": "Cigarette pack",
                    "price": 3750,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [8, 12, 18],
                },
                {
                    "name": "Bus ticket",
                    "price": 20,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [50, 50, 50],
                },
                {
                    "name": "Plastic baggies",
                    "price": 1,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [500, 1000, 1500],
                },
                {
                    "name": "Plastic bag",
                    "price": 250,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [10, 10, 10],
                },
                {
                    "name": "Chocolate bar",
                    "price": 300,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [5, 10, 15],
                },
                {
                    "name": "Small backpack",
                    "price": 1500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [3, 5, 7],
                },
                {
                    "name": "Small flashlight",
                    "price": 3000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2, 4, 6],
                },
                {
                    "name": "Fertilizer",
                    "price": 1200,
                    "amount": 1000,
                    "unit": Unit.MASS,
                    "quantity": [3,6,9],
                },
                {
                    "name": "Crowbar",
                    "price": 6000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1, 2, 3],
                },
                {
                    "name": "Ethanol",
                    "price": 480,
                    "amount": 200,
                    "unit": Unit.LIQUID,
                    "quantity": [0, 20, 30],
                },
                {
                    "name": "Vinegar",
                    "price": 500,
                    "amount": 500000,
                    "unit": Unit.LIQUID,
                    "quantity": [10, 20, 30],
                },
                {
                    "name": "Keychain",
                    "price": 1500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [3, 4, 5],
                },
                {
                    "name": "Rolling papers",
                    "price": 10,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [40, 60, 80],
                },
                {
                    "name": "Duct tape",
                    "price": 5,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [100, 500, 1000],
                },
                {
                    "name": "Stretch foil",
                    "price": 10,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [80, 450, 950],
                },
                {
                    "name": "Cash large",
                    "price": 1,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [100000, 200000, 300000],
                },
                {
                    "name": "Empty glass pipe",
                    "price": 4,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [10, 20, 30],
                },
                {
                    "name": "Plastic baggies",
                    "price": 1,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [50, 100, 150],
                },
                {
                    "name": "Medium water bottle",
                    "price": 1300,
                    "amount": 5000,
                    "unit": Unit.LIQUID,
                    "quantity": [5,10,15],
                },
                {
                    "name": "Packet of Sugar",
                    "price": 1200,
                    "amount": 1000,
                    "unit": Unit.MASS,
                    "quantity": [10,15,20],
                },
                {
                    "name": "Packet of flour",
                    "price": 550,
                    "amount": 1000,
                    "unit": Unit.MASS,
                    "quantity": [10,15,20],
                },
                {
                    "name": "Packet of salt",
                    "price": 450,
                    "amount": 1000,
                    "unit": Unit.MASS,
                    "quantity": [10,15,20],
                },
                {
                    "name": "Poppy seed pack",
                    "price": 3200,
                    "amount": 100,
                    "unit": Unit.MASS,
                    "quantity": [2,4,6],
                },
                {
                    "name": "Cacao powder",
                    "price": 1500,
                    "amount": 500,
                    "unit": Unit.MASS,
                    "quantity": [8,12,18],
                },
                {
                    "name": "Ethanol",
                    "price": 480,
                    "amount": 200,
                    "unit": Unit.LIQUID,
                    "quantity": [10,20,30],
                },
                {
                    "name": "Tabacco pack",
                    "price": 4500,
                    "amount": 50,
                    "unit": Unit.MASS,
                    "quantity": [3,4,7],
                },
                {
                    "name": "Acetone",
                    "price": 3000,
                    "amount": 1000,
                    "unit": Unit.LIQUID,
                    "quantity": [1,3,5],
                },
                {
                    "name": "Fertilizer XL",
                    "price": 8750,
                    "amount": 5000,
                    "unit": Unit.MASS,
                    "quantity": [2,3,4],
                },
                {
                    "name": "Synthetic fertilizer",
                    "price": 1200,
                    "amount": 3000,
                    "unit": Unit.MASS,
                    "quantity": [3,5,9],
                },
                {
                    "name": "Cooking pot",
                    "price": 2500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [3,4,5],
                },
                {
                    "name": "Flashlight",
                    "price": 4500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1,1,2],
                },
                {
                    "name": "Wire cutters",
                    "price": 3500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2,2,3],
                },
                {
                    "name": "Map",
                    "price": 2300,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2,4,6],
                },
                {
                    "name": "Bandage",
                    "price": 8000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [3,5,7],
                },
                {
                    "name": "Mobile phone",
                    "price": 19000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [0,1,2],
                },
            ]
        },
        {
            "name": "Farm Shop",
            "area": Area.FARMERS_ISLAND,
            "check-possible": false,
            "location": {
                x: 0.64715,
                y: 0.810239
            },
            "discounts": [0.0, 0.1],
            "items": [
                {
                    "name": "UV bulb large",
                    "price": 9000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [5],
                },
                {
                    "name": "Hydroponic elements",
                    "price": 9000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [5],
                },
                {
                    "name": "Flower pot",
                    "price": 2000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [5],
                },
                {
                    "name": "Packet of flour",
                    "price": 550,
                    "amount": 1000,
                    "unit": Unit.MASS,
                    "quantity": [50],
                },
                {
                    "name": "Fertilizer XL",
                    "price": 8500,
                    "amount": 5000,
                    "unit": Unit.MASS,
                    "quantity": [5],
                },
                {
                    "name": "Synthetic Fertilizer",
                    "price": 1200,
                    "amount": 3000,
                    "unit": Unit.MASS,
                    "quantity": [3],
                },
                {
                    "name": "Ergot rye",
                    "price": 1800,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [50],
                },
                {
                    "name": "Shovel",
                    "price": 9000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Pitchfork",
                    "price": 10000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
            ]
        },
        {
            "name": "Fuel depot",
            "area": Area.CALLEJON,
            "check-possible": true,
            "location": {
                x: 0.52562,
                y: 0.737114
            },
            "discounts": [0.0],
            "items": [
                {
                    "name": "Small flashlight",
                    "price": 3000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Crowbar",
                    "price": 6000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Gasoline 4l",
                    "price": 6000,
                    "amount": 4000,
                    "unit": Unit.LIQUID,
                    "quantity": [10],
                },
                {
                    "name": "Gasoline 11l",
                    "price": 16500,
                    "amount": 11000,
                    "unit": Unit.LIQUID,
                    "quantity": [3],
                },
                {
                    "name": "Metal parts",
                    "price": 900,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [10],
                },
                {
                    "name": "Electric wires",
                    "price": 1000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [8],
                },
                {
                    "name": "Wire cutters",
                    "price": 4500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Map",
                    "price": 2500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2],
                },
            ]
        },
        {
            "name": "Hardware store",
            "area": Area.CALLEJON,
            "check-possible": false,
            "location": {
                x: 0.531799,
                y: 0.698493
            },
            "discounts": [0.0, 0.1],
            "items": [
                {
                    "name": "Glasses",
                    "price": 1100,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2],
                },
                {
                    "name": "Beanie",
                    "price": 400,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2],
                },
                {
                    "name": "Baseball cap",
                    "price": 300,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [3],
                },
                {
                    "name": "T-shirt",
                    "price": 450,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2],
                },
                {
                    "name": "Pants",
                    "price": 1500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2],
                },
                {
                    "name": "Sport pants",
                    "price": 1700,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Sweatshirt",
                    "price": 1850,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Sneakers",
                    "price": 2250,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Fannypack",
                    "price": 1100,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2],
                },
                {
                    "name": "Balaclava",
                    "price": 1000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Bus ticket",
                    "price": 20,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [25],
                },
                {
                    "name": "Plastic baggies",
                    "price": 1,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [500],
                },
                {
                    "name": "Plastic bag",
                    "price": 250,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [5],
                },
                {
                    "name": "Small backpack",
                    "price": 1500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2],
                },
                {
                    "name": "Small flashlight",
                    "price": 3000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2],
                },
                {
                    "name": "Duct tape",
                    "price": 5,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [100],
                },
                {
                    "name": "Stretch foil",
                    "price": 10,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [80],
                },
                {
                    "name": "Cash large",
                    "price": 1,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [100000],
                },
                {
                    "name": "Vial",
                    "price": 2,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [50],
                },
                {
                    "name": "Metal parts",
                    "price": 1000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [8],
                },
                {
                    "name": "Electric wires",
                    "price": 1000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [8],
                },
                {
                    "name": "Flashlight",
                    "price": 4000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2],
                },
                {
                    "name": "Wire cutters",
                    "price": 4500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Map",
                    "price": 2300,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Bandage",
                    "price": 8000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2],
                },
                {
                    "name": "Mobile phone",
                    "price": 19000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Firecracker",
                    "price": 3000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [3],
                },
            ]
        },
        {
            "name": "General Store",
            "area": Area.CALLEJON,
            "check-possible": false,
            "location": {
                x: 0.515492,
                y: 0.69317
            },
            "discounts": [0.0, 0.1],
            "items": [
                {
                    "name": "Small water bottle",
                    "price": 300,
                    "amount": 500,
                    "unit": Unit.LIQUID,
                    "quantity": [10],
                },
                {
                    "name": "Medium water bottle",
                    "price": 1300,
                    "amount": 5000,
                    "unit": Unit.LIQUID,
                    "quantity": [3],
                },
                {
                    "name": "Beer",
                    "price": 500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [6],
                },
                {
                    "name": "Packet of soda",
                    "price": 700,
                    "amount": 1000,
                    "unit": Unit.MASS,
                    "quantity": [10],
                },
                {
                    "name": "Fertilizer",
                    "price": 1750,
                    "amount": 1000,
                    "unit": Unit.MASS,
                    "quantity": [5],
                },
                {
                    "name": "Cigarette pack",
                    "price": 3750,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [4],
                },
                {
                    "name": "Tabacco pack",
                    "price": 4500,
                    "amount": 50,
                    "unit": Unit.MASS,
                    "quantity": [2],
                },
                {
                    "name": "Acetone",
                    "price": 3000,
                    "amount": 1000,
                    "unit": Unit.LIQUID,
                    "quantity": [5],
                },
                {
                    "name": "Ethanol",
                    "price": 480,
                    "amount": 200,
                    "unit": Unit.LIQUID,
                    "quantity": [10],
                },
                {
                    "name": "Keychain",
                    "price": 1500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Cooking pot",
                    "price": 3000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [3],
                },
                {
                    "name": "Small flashlight",
                    "price": 3000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2],
                },
                {
                    "name": "Gasoline 4l",
                    "price": 6000,
                    "amount": 4000,
                    "unit": Unit.LIQUID,
                    "quantity": [2],
                },
                {
                    "name": "Bandage",
                    "price": 8000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Map",
                    "price": 2000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2],
                },
                {
                    "name": "Bus ticket",
                    "price": 20,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [100],
                },
                {
                    "name": "Rolling papers",
                    "price": 10,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [140],
                },
                {
                    "name": "Plastic baggies",
                    "price": 1,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1000],
                },
                {
                    "name": "Duct tape",
                    "price": 5,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [100],
                },
                {
                    "name": "Stretch foil",
                    "price": 10,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [80],
                },
                {
                    "name": "Plastic bag",
                    "price": 250,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [5],
                },
                {
                    "name": "Cash large",
                    "price": 1,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [100000],
                },
            ]
        },
        {
            "name": "Hardware store",
            "area": Area.JUNGLE,
            "check-possible": false,
            "location": {
                x: 0.582094,
                y: 0.637036
            },
            "discounts": [0.0, 0.1],
            "items": [
                {
                    "name": "Cooking pot",
                    "price": 3000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Hammer",
                    "price": 10000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Crowbar",
                    "price": 11000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2],
                },
                {
                    "name": "Wrench",
                    "price": 14000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Shovel",
                    "price": 9000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Multitool",
                    "price": 5300,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Wire cutters",
                    "price": 4500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Bolt cutter",
                    "price": 9000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Knife",
                    "price": 15000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Keychain",
                    "price": 1500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [3],
                },
                {
                    "name": "Small flashlight",
                    "price": 3000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2],
                },
                {
                    "name": "Flashlight",
                    "price": 4000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2],
                },
                {
                    "name": "HID flashlight",
                    "price": 5400,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Field boots",
                    "price": 8900,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2],
                },
                {
                    "name": "Fannypack",
                    "price": 1000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [3],
                },
                {
                    "name": "Medium backpack",
                    "price": 3000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Acetone",
                    "price": 7200,
                    "amount": 5000,
                    "unit": Unit.LIQUID,
                    "quantity": [1],
                },
                {
                    "name": "Ammonia",
                    "price": 6000,
                    "amount": 5000,
                    "unit": Unit.LIQUID,
                    "quantity": [1],
                },
                {
                    "name": "Methanol",
                    "price": 1150,
                    "amount": 300,
                    "unit": Unit.LIQUID,
                    "quantity": [1],
                },
                {
                    "name": "Methanol",
                    "price": 1150,
                    "amount": 5000,
                    "unit": Unit.LIQUID,
                    "quantity": [1],
                },
                {
                    "name": "Led bulb small",
                    "price": 1650,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [4],
                },
                {
                    "name": "Led bulb large",
                    "price": 3900,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [3],
                },
                {
                    "name": "UV bulb large",
                    "price": 9400,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [5],
                },
                {
                    "name": "Hydroponic elements",
                    "price": 9000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [4],
                },
                {
                    "name": "Flower pot",
                    "price": 2000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [5],
                },
                {
                    "name": "Fan",
                    "price": 2250,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2],
                },
                {
                    "name": "Disarming card",
                    "price": 35000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Firecracker",
                    "price": 1000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [10],
                },
                {
                    "name": "Metal parts",
                    "price": 1000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [10],
                },
                {
                    "name": "Electric wires",
                    "price": 1000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [10],
                },
                {
                    "name": "Combat ration",
                    "price": 13000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [10],
                },
                {
                    "name": "Vial",
                    "price": 2,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [50],
                },
                {
                    "name": "Rolling papers",
                    "price": 10,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [20],
                },
                {
                    "name": "Duct tape",
                    "price": 5,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [100],
                },
                {
                    "name": "Stretch foil",
                    "price": 10,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [80],
                },
                {
                    "name": "Plastic baggies",
                    "price": 1,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [500],
                },
                {
                    "name": "Bus ticket",
                    "price": 20,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [25],
                },
                {
                    "name": "Plastic bag",
                    "price": 250,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [5],
                },
                {
                    "name": "Cash large",
                    "price": 1,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [100000],
                },
            ],
        },
        {
            "name": "Poppy store",
            "area": Area.FARMERS_ISLAND,
            "check-possible": false,
            "location": { x: 0.646806, y: 0.846119 },
            "discounts": [0.0, 0.1, 0.2],
            "items": [
                {
                    "name": "Poppy head young",
                    "price": 550,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [100, 200, 300],
                },
                {
                    "name": "Poppy seed pack",
                    "price": 3200,
                    "amount": 100,
                    "unit": Unit.MASS,
                    "quantity": [30, 50, 70],
                },
                {
                    "name": "Poppy seed pack",
                    "price": 31000,
                    "amount": 1000,
                    "unit": Unit.MASS,
                    "quantity": [2, 4, 6],
                },
                {
                    "name": "Fertilizer",
                    "price": 8500,
                    "amount": 5000,
                    "unit": Unit.MASS,
                    "quantity": [5, 8, 13],
                },
                {
                    "name": "Synthetic fertilizer",
                    "price": 1200,
                    "amount": 300,
                    "unit": Unit.MASS,
                    "quantity": [3, 5, 9],
                },
                {
                    "name": "UV bulb large",
                    "price": 9000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [5, 8, 10],
                },
                {
                    "name": "Flower pot",
                    "price": 2000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [5, 10, 15],
                },
                {
                    "name": "Hydroponic elements",
                    "price": 9000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1, 2, 3],
                },
                {
                    "name": "Shovel",
                    "price": 9000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1, 2, 3],
                },
                {
                    "name": "Pitchfork",
                    "price": 10000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1, 2, 3],
                },
            ]
        }, // Finished
        {
            "name": "Moonshiner",
            "area": Area.JUNGLE,
            "check-possible": false,
            "location": { x: 0.533344, y: 0.6414999 },
            "discounts": [0.0, 0.1],
            "items": [
                {
                    "name": "Ethanol",
                    "price": 450,
                    "amount": 200,
                    "unit": Unit.LIQUID,
                    "quantity": [100],
                },
                {
                    "name": "Acetic acid",
                    "price": 200,
                    "amount": 100,
                    "unit": Unit.LIQUID,
                    "quantity": [50],
                },
                {
                    "name": "Acetone",
                    "price": 12000,
                    "amount": 5000,
                    "unit": Unit.LIQUID,
                    "quantity": [1],
                },
            ]
        },
    ],
    "equip-shops": [], // 0.460048, 0.796165
    "pawn-shops": [
        {
            "name": "Pawn Shop",
            "area": Area.CALLEJON,
            "check-possible": false,
            "location": {
                "x": 0.519784,
                "y": 0.823289
            },
            "discounts": [
                0.0,
                0.1
            ],
            "items": [
                {
                    "name": "Plastic bag",
                    "price": 500,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [5],
                },
                {
                    "name": "Cash large",
                    "price": 1,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [100000],
                },
                {
                    "name": "Dog Tag",
                    "price": 3600,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [2],
                },
                {
                    "name": "Watch",
                    "price": 12000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Bracelet",
                    "price": 9000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
                {
                    "name": "Gold Chain",
                    "price": 18000,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [1],
                },
            ],
        }
    ],
    "anchor-spots": [
        {
            "name": "",
            "area": Area.SMALL_ISLAND,
            "location": { x: 0.324438, y: 0.874443}
        },
        {
            "name": "",
            "area": Area.SMALL_ISLAND,
            "location": { x: 0.346754, y: 0.955467}
        },
        {
            "name": "",
            "area": Area.ARCHI,
            "location": { x: 0.56819, y: 0.965747}
        },
        {
            "name": "",
            "area": Area.ARCHI,
            "location": { x: 0.519097, y: 0.968514}
        },
        {
            "name": "",
            "area": Area.ARCHI,
            "location": { x: 0.464167, y: 0.964047}
        },
        {
            "name": "",
            "area": Area.ARCHI,
            "location": { x: 0.474123, y: 0.906375}
        },
        {
            "name": "",
            "area": Area.ARCHI,
            "location": { x: 0.434986, y: 0.84114}
        },
        {
            "name": "",
            "area": Area.CALLEJON,
            "location": { x: 0.477556, y: 0.783806}
        },
        {
            "name": "",
            "area": Area.CALLEJON,
            "location": { x: 0.534889, y: 0.780031}
        },
        {
            "name": "",
            "area": Area.ARCHI,
            "location": { x: 0.527336, y: 0.883024}
        },
        {
            "name": "",
            "area": Area.CALLEJON,
            "location": { x: 0.555831, y: 0.724064}
        },
        {
            "name": "",
            "area": Area.CALLEJON,
            "location": { x: 0.565443, y: 0.694888}
        },
        {
            "name": "",
            "area": Area.CALLEJON,
            "location": { x: 0.49455, y: 0.724927 },
        },
        {
            "name": "",
            "area": Area.CALLEJON,
            "location": { x: 0.541927, y: 0.668623 },
        },
        {
            "name": "",
            "area": Area.FARMERS_ISLAND,
            "location": { x: 0.599946, y: 0.834961 },
        },
        {
            "name": "",
            "area": Area.FARMERS_ISLAND,
            "location": { x: 0.683711, y: 0.837708 },
        },
        {
            "name": "",
            "area": Area.FARMERS_ISLAND,
            "location": { x: 0.661225, y: 0.770931 },
        },
    ],
    "bosses": [
        {
            "name": "Llanzo Jean-Louis",
            "area": Area.ARCHI,
            "location": { x: 0.46966, y: 0.951346 },
            "demands": [
                {
                    "name": "Marijuana",
                    "price-per-g": 1900,
                },
                {
                    "name": "Amphetamine",
                    "price-per-g": 2500,
                },
                {
                    "name": "Methamphetamine",
                    "price-per-g": 3000,
                },
            ],
        },
        {
            "name": "Pedro Alvarez",
            "area": Area.CALLEJON,
            "location": { x: 0.561667, y: 0.69935 },
            "demands": [
                {
                    "name": "Marijuana",
                    "price-per-g": 1500,
                },
                {
                    "name": "Amphetamine",
                    "price-per-g": 2000,
                },
                {
                    "name": "Methamphetamine",
                    "price-per-g": 3000,
                },
                {
                    "name": "Opium",
                    "price-per-g": 2200,
                },
            ],
        },
    ],
    "cloth-shops": [
        {
            "name": "Second hand store",
            "area": Area.CALLEJON,
            "location": { x: 0.457301, y: 0.791532 },
            "check-possible": false,
            "discounts": [0.0, 0.1],
            "items": [],
        }
    ],
    "restaurants": [
        {
            "name": "Brisa Marina",
            "area": Area.ARCHI,
            "location": { x: 0.47172, y: 0.882158 },
            "check-possible": false,
            "discounts": [0.0],
            "items": [
                {
                    "name": "Small water bottle",
                    "price": 500,
                    "amount": 500,
                    "unit": Unit.LIQUID,
                    "quantity": [10],
                },
                {
                    "name": "Beer",
                    "price": 700,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [6],
                },
                {
                    "name": "Limonada de Coco",
                    "price": 700,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [10],
                },
            ],
        },
        {
            "name": "Cerveza en la Playa",
            "area": Area.CALLEJON,
            "location": { x: 0.544502, y: 0.726813 },
            "check-possible": false,
            "discounts": [0.0, 0.1],
            "items": [
                {
                    "name": "Small water bottle",
                    "price": 500,
                    "amount": 500,
                    "unit": Unit.LIQUID,
                    "quantity": [10],
                },
                {
                    "name": "Beer",
                    "price": 700,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [6],
                },
                {
                    "name": "Limonada de Coco",
                    "price": 700,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [10],
                },
            ],
        },
        {
            "name": "La Guarida",
            "area": Area.CALLEJON,
            "location": { x: 0.516865, y: 0.702614 },
            "check-possible": false,
            "discounts": [0.0, 0.1],
            "items": [
                {
                    "name": "Small water bottle",
                    "price": 500,
                    "amount": 500,
                    "unit": Unit.LIQUID,
                    "quantity": [10],
                },
                {
                    "name": "Beer",
                    "price": 700,
                    "amount": 1,
                    "unit": Unit.ITEM,
                    "quantity": [6],
                },
            ],
        },
    ],
    "dealer-spots": [
        {
            "name": "",
            "area": Area.SMALL_ISLAND,
            "location": { x: 0.375077, y: 0.883202 },
        },
        {
            "name": "",
            "area": Area.SMALL_ISLAND,
            "location": { x: 0.3495, y: 0.911694 },
        },
        {
            "name": "",
            "area": Area.SMALL_ISLAND,
            "location": { x: 0.345552, y: 0.866389 },
        },
        {
            "name": "",
            "area": Area.ARCHI,
            "location": { x: 0.448547, y: 0.918045 },
        },
        {
            "name": "",
            "area": Area.ARCHI,
            "location": { x: 0.537979, y: 0.955811 },
        },
        {
            "name": "",
            "area": Area.ARCHI,
            "location": { x: 0.567503, y: 0.952725 },
        },
        {
            "name": "",
            "area": Area.ARCHI,
            "location": { x: 0.506909, y: 0.868619 },
        },
        {
            "name": "",
            "area": Area.CALLEJON,
            "location": { x: 0.518067, y: 0.817795 },
        },
        {
            "name": "",
            "area": Area.CALLEJON,
            "location": { x: 0.553084, y: 0.705014 },
        },
        {
            "name": "",
            "area": Area.CALLEJON,
            "location": { x: 0.500043, y: 0.709828 },
        },
        {
            "name": "",
            "area": Area.CALLEJON,
            "location": { x: 0.500558, y: 0.698657 },
        },
        {
            "name": "",
            "area": Area.JUNGLE,
            "location": { x: 0.580549, y: 0.640639 },
        },
        {
            "name": "",
            "area": Area.CALLEJON,
            "location": { x: 0.534546, y: 0.700207 }
        },
        {
            "name": "",
            "area": Area.CALLEJON,
            "location": { x: 0.54742, y: 0.724239 }
        },
    ],
    "medic-points": [
        {
            "name": "",
            "area": Area.ARCHI,
            "location": { x: 0.449062, y: 0.92164 },
            "price": 0,
        },
        {
            "name": "",
            "area": Area.JUNGLE,
            "location": { x: 0.568876, y: 0.640814 },
            "price": 0,
        },
        {
            "name": "",
            "area": Area.CALLEJON,
            "location": { x: 0.524418, y: 0.712051 },
            "price": 0,
        },
    ],
}

// cloth stores
// 0.457301, 0.790327

export default data
