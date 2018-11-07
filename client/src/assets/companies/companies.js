const Nintendo = {
    name: "Nintendo",
    founded: "September 23, 1889",
    consoles: [
        {
            "id": 5,
            "name": "Wii"
        },
        {
            "id": 41,
            "name": "Wii U"
        },
        {
            "id": 4,
            "name": "N64"
        },
        {
            "id": 130,
            "name": "Switch"
        },
        {
            "id": 21,
            "name": "GameCube"
        },
        {
            "id": 18,
            "name": "NES"
        },
        {
            "id": 19,
            "name": "SNES"
        }
    ]

}

const Xbox = {
    name: "Xbox",
    consoles: [
        {
            "id": 11,
            "name": "Xbox"
        },
        {
            "id": 12,
            "name": "Xbox 360"
        },
        {
            "id": 49,
            "name": "Xbox One"
        }
    ]
}

const Sony = {
    name: "Sony",
    consoles: [
        {
            "id": 7,
            "name": "PlayStation"
        }, 
        {
            "id": 8,
            "name": "PlayStation 2"
        },
        {
            "id": 9,
            "name": "PlayStation 3"
        },
        {
            "id": 48,
            "name": "PlayStation 4"
        },
        {
            "id": 38,
            "name": "PSP"
        },
        {
            "id": 46,
            "name": "PS Vita"
        }
    ]
}

const Atari = {
    name: "Atari",
    consoles: [
        {
            "id": 66,
            "name": "Atari 5200"
        },
        {
            "id": 59,
            "name": "Atari 2600"
        },
        {
            "id": 60,
            "name": "Atari 7800"
        },
        {
            "id": 61,
            "name": "Atari Lynx"
        },
        {
            "id": 62,
            "name": "Atari Jaguar"
        }
    ]
}

const Sega = {
    name: "Sega",
    consoles: [
        {
            "id": 29,
            "name": "Sega Genesis"
        },
        {
            "id": 78,
            "name": "Sega CD"
        },
        {
            "id": 32,
            "name": "Sega Saturn"
        },
        {
            "id": 30,
            "name": "Sega 32X"
        },
        {
            "id": 64,
            "name": "Sega Master System"
        },
        {
            "id": 35,
            "name": "Sega Game Gear"
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