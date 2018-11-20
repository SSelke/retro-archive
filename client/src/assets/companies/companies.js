const Nintendo = {
    name: "Nintendo",
    founded: "September 23, 1889",
    consoles: [
        {
            "id": 5,
            "name": "Wii",
            gameCount: 979
        },
        {
            "id": 41,
            "name": "Wii U",
            gameCount: 1166
        },
        {
            "id": 4,
            "name": "N64",
            gameCount: 422
        },
        {
            "id": 130,
            "name": "Switch",
            gameCount: 815
        },
        {
            "id": 21,
            "name": "GameCube",
            gameCount: 659
        },
        {
            "id": 18,
            "name": "NES",
            gameCount: 1449
        },
        {
            "id": 19,
            "name": "SNES",
            gameCount: 1619
        }
    ]

}

const Xbox = {
    name: "Xbox",
    consoles: [
        {
            "id": 11,
            "name": "Xbox",
            gameCount: 954
        },
        {
            "id": 12,
            "name": "Xbox 360",
            gameCount: 1939
        },
        {
            "id": 49,
            "name": "Xbox One",
            gameCount: 1876
        }
    ]
}

const Sony = {
    name: "Sony",
    consoles: [
        {
            "id": 7,
            "name": "PlayStation",
            gameCount: 1731
        }, 
        {
            "id": 8,
            "name": "PlayStation 2",
            gameCount: 2348
        },
        {
            "id": 9,
            "name": "PlayStation 3",
            gameCount: 2326
        },
        {
            "id": 48,
            "name": "PlayStation 4",
            gameCount: 2469
        },
        {
            "id": 38,
            "name": "PSP",
            gameCount: 1076
        },
        {
            "id": 46,
            "name": "PS Vita",
            gameCount: 798
        }
    ]
}

const Atari = {
    name: "Atari",
    consoles: [
        {
            "id": 66,
            "name": "Atari 5200",
            gameCount: 81
        },
        {
            "id": 59,
            "name": "Atari 2600",
            gameCount: 529
        },
        {
            "id": 60,
            "name": "Atari 7800",
            gameCount: 60
        },
        {
            "id": 61,
            "name": "Atari Lynx",
            gameCount: 52
        },
        {
            "id": 62,
            "name": "Atari Jaguar",
            gameCount: 49
        }
    ]
}

const Sega = {
    name: "Sega",
    consoles: [
        {
            "id": 29,
            "name": "Sega Genesis",
            gameCount: 941
        },
        {
            "id": 78,
            "name": "Sega CD",
            gameCount: 200
        },
        {
            "id": 32,
            "name": "Sega Saturn",
            gameCount: 36
        },
        {
            "id": 30,
            "name": "Sega 32X",
            gameCount: 405
        },
        {
            "id": 64,
            "name": "Sega Master System",
            gameCount: 305
        },
        {
            "id": 35,
            "name": "Sega Game Gear",
            gameCount: 309
        }
    ]
}

export const findCompany = (company) => {
    switch (company) {
        case 'Nintendo':
            return Nintendo
        case 'Xbox':
            return Xbox
        case 'Sony':
            return Sony
        case 'Atari':
            return Atari
        case 'Sega':
            return Sega
        default:
            return null;
    }
}