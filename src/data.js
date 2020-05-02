var data = [ 
];

var structures = [
    {
        name: "Single Spike",
        probability: 100,
        data: [
            {
                type: "SPIKE",
                initialGridUnit: 0,
                id: null
            }
        ]
    },
    {
        name: "Double Spike",
        probability: 100,
        data: [
            {
                type: "SPIKE",
                initialGridUnit: 0,
                id: null
            },
            {
                type: 'SPIKE',
                initialGridUnit: 1,
                id: null
            }
        ]
    },
    {
        name: "Triple Spike",
        probability: 50,
        data: [
            {
                type: "SPIKE",
                initialGridUnit: 0,
                id: null
            },
            {
                type: 'SPIKE',
                initialGridUnit: 1,
                id: null
            },
            {
                type: 'SPIKE',
                initialGridUnit: 2,
                id: null
            }
        ]
    },
    {
        name: "Spike Staircase",
        probability: 20,
        data: [
            {
                type: "BLOCK",
                initialGridUnit: 0,
                gridUnitsHigh: 0,
                id: null,
                lava: "START"
            },
            {
                type: "BLOCK",
                initialGridUnit: 4.5,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 7,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 7,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 9.5,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 15,
                gridUnitsHigh: 0,
                id: null,
                lava: "END"
            }
        ]
    },
    {
        name: "Block Triple Spike",
        probability: 50,
        data: [
            {
                type: "BLOCK",
                initialGridUnit: 0,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 1,
                id: null
            },
            {
                type: 'SPIKE',
                initialGridUnit: 2,
                id: null
            },
            {
                type: 'SPIKE',
                initialGridUnit: 3,
                id: null
            }
        ]
    },
    {
        name: "Block Quadruple Spike",
        probability: 40,
        data: [
            {
                type: "BLOCK",
                initialGridUnit: 0,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 1,
                id: null
            },
            {
                type: 'SPIKE',
                initialGridUnit: 2,
                id: null
            },
            {
                type: 'SPIKE',
                initialGridUnit: 3,
                id: null
            },
            {
                type: 'SPIKE',
                initialGridUnit: 4,
                id: null
            }
        ]
    },
    {
        name: "Spike Block Spike",
        probability: 50,
        data: [
            {
                type: "SPIKE",
                initialGridUnit: 0,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 1,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 3,
                id: null
            }
        ]
    },
    {
        name: "Long Staircase",
        probability: 5,
        data: [
            {
                type: "BLOCK",
                initialGridUnit: 0,
                gridUnitsHigh: 0,
                id: null,
                lava: "START"
            },
            {
                type: "BLOCK",
                initialGridUnit: 4,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 8,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 12,
                gridUnitsHigh: 3,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 13,
                gridUnitsHigh: 3,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 14,
                gridUnitsHigh: 3,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 15,
                gridUnitsHigh: 3,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 16,
                gridUnitsHigh: 3,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 16,
                gridUnitsHigh: 4,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 17,
                gridUnitsHigh: 3,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 17,
                gridUnitsHigh: 4,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 18,
                gridUnitsHigh: 3,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 18,
                gridUnitsHigh: 4,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 19,
                gridUnitsHigh: 3,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 20,
                gridUnitsHigh: 3,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 21,
                gridUnitsHigh: 3,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 25,
                gridUnitsHigh: 4,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 31,
                gridUnitsHigh: 3,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 37,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 40,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 41,
                gridUnitsHigh: 3,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 41,
                gridUnitsHigh: 4,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 43,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 48,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 52,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 55,
                gridUnitsHigh: 0,
                id: null,
                lava: "END"
            }
        ]
    },
    {
        name: "Block Lava",
        probability: 50,
        data: [
            {
                type: "BLOCK",
                initialGridUnit: 0,
                gridUnitsHigh: 0,
                id: null,
                lava: "START"
            },
            {
                type: "BLOCK",
                initialGridUnit: 5,
                gridUnitsHigh: 0,
                id: null,
                lava: "END"
            }
        ]
    },
    {
        name: "Over Spike",
        probability: 30,
        data: [
            {
                type: "BLOCK",
                initialGridUnit: 0,
                gridUnitsHigh: 0,
                id: null,
                lava: "START"
            },
            {
                type: "BLOCK",
                initialGridUnit: 3,
                gridUnitsHigh: 1.5,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 4,
                gridUnitsHigh: 1.5,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 5,
                gridUnitsHigh: 1.5,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 6,
                gridUnitsHigh: 1.5,
                id: null,
                lava: "END"
            },
            {
                type: "SPIKE",
                initialGridUnit: 6,
                gridUnitsHigh: 2.5,
                id: null
            }
        ]
    },
    {
        name: "Spike Between Block",
        probability: 30,
        data: [
            {
                type: "SPIKE",
                initialGridUnit: 0,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 1.5,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 4,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 6.5,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 8,
                gridUnitsHigh: 0,
                id: null
            }
        ]
    },
    {
        name: "Double Block Over Lava",
        probability: 5,
        data: [
            {
                type: "BLOCK",
                initialGridUnit: 0,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 1,
                gridUnitsHigh: 0,
                id: null,
                lava: "START"
            },
            {
                type: "BLOCK",
                initialGridUnit: 4,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 5,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 8,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 9,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 15,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 16,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 19,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 20,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 23,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 24,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 29,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 30,
                gridUnitsHigh: 1,
                id: null,
                lava: "END"
            },
            {
                type: "SPIKE",
                initialGridUnit: 31,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 32,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 33,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 34,
                gridUnitsHigh: 0,
                id: null
            }
        ]
    },
    {
        name: "Up Down Up Down",
        probability: 5,
        data: [
            {
                type: "BLOCK",
                initialGridUnit: 0,
                gridUnitsHigh: 0,
                id: null,
                lava: "START"
            },
            {
                type: "BLOCK",
                initialGridUnit: 4,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 8,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 11,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 15,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 21,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 25,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 31,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 35,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 38,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 42,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 45,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 49,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 55,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 59,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 62,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 63,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 63,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 64,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 64,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 67,
                gridUnitsHigh: 0,
                id: null,
                lava: "END"
            },
            {
                type: "SPIKE",
                initialGridUnit: 68,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 69,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 70,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 71,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 75,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 76,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 77,
                gridUnitsHigh: 0,
                id: null
            }
        ]
    },
    {
        name: "Lava Jump",
        probability: 10,
        data: [
            {
                type: "BLOCK",
                initialGridUnit: 0,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 1,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 2,
                gridUnitsHigh: 0,
                id: null,
                lava: "START"
            },
            {
                type: "SPIKE",
                initialGridUnit: 2,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 5,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 10,
                gridUnitsHigh: 1,
                id: null,
                lava: "END"
            },
            {
                type: "LAVA",
                initialGridUnit: 10,
                id: null
            },
            {
                type: "LAVA",
                initialGridUnit: 11,
                id: null
            },
            {
                type: "LAVA",
                initialGridUnit: 12,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 15,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 17,
                gridUnitsHigh: 1,
                id: null
            }
        ]
    },
    {
        name: "Triple Over Lava",
        probability: 3,
        data: [
            {
                type: "BLOCK",
                initialGridUnit: 0,
                gridUnitsHigh: 0,
                id: null,
                lava: "START"
            },
            {
                type: "BLOCK",
                initialGridUnit: 4,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 5,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 6,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 6,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 7,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 7,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 8,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 8,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 9,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 12,
                gridUnitsHigh: 0,
                id: null,
                lava: "END"
            },
            {
                type: "SPIKE",
                initialGridUnit: 13,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 14,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 15,
                gridUnitsHigh: 0,
                id: null
            }
        ]
    },
    {
        name: "Double Spike over Blocks",
        probability: 10,
        data: [
            {
                type: "BLOCK",
                initialGridUnit: 0,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 1,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 1,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 2,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 2,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 3,
                gridUnitsHigh: 0,
                id: null
            }
        ]
    },
    {
        name: "Spike Space Spike",
        probability: 60,
        data: [
            {
                type: "SPIKE",
                initialGridUnit: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 2,
                id: null
            }
        ]
    },
    {
        name: "Double Spike Double",
        probability: 5,
        data: [
            {
                type: "SPIKE",
                initialGridUnit: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 1,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 4,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 5,
                id: null
            }
        ]
    },
    {
        name: "Spike Drop",
        probability: 3,
        data: [
            {
                type: "BLOCK",
                initialGridUnit: 0,
                gridUnitsHigh: 0,
                id: null,
                lava: "START"
            },
            {
                type: "BLOCK",
                initialGridUnit: 4,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 7,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 12,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 16,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 20,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 21,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 22,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 23,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 24,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 25,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 26,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 27,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 22,
                gridUnitsHigh: 3,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 23,
                gridUnitsHigh: 3,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 24,
                gridUnitsHigh: 2,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 33,
                gridUnitsHigh: 0,
                id: null,
                lava: "END"
            },
            {
                type: "BLOCK",
                initialGridUnit: 34,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 35,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 34,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 35,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 38,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 39.5,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "BLOCK",
                initialGridUnit: 40.5,
                gridUnitsHigh: 0,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 39.5,
                gridUnitsHigh: 1,
                id: null
            },
            {
                type: "SPIKE",
                initialGridUnit: 40.5,
                gridUnitsHigh: 1,
                id: null
            }
        ]
    }
];


var backgroundColors = [
    {
        name: "Blue",
        c1: [0, 32, 37],
        c2: [37, 123, 140]
    },
    {
        name: "Yellow",
        c1: [46, 40, 8],
        c2: [165, 145, 35]
    },
    {
        name: "Green",
        c1: [13, 40, 15],
        c2: [71, 206, 82]
    },
    {
        name: "Purple",
        c1: [28, 13, 45],
        c2: [156, 76, 244]
    },
    {
        name: "Pink",
        c1: [48, 10, 45],
        c2: [255, 53, 241]
    }
];
