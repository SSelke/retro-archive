const Nintendo = {
    name: "Nintendo",
    founded: "September 23, 1889",
    consoles: [
        {
            "id": 5,
            "name": "Wii",
            gameCount: 979,
            color: '#e4000f',
            url: '//image.flaticon.com/icons/svg/809/809867.svg'
        },
        {
            "id": 41,
            "name": "Wii U",
            gameCount: 1166,
            color: '#e4000f',
            url: '//image.flaticon.com/icons/svg/39/39462.svg'
        },
        {
            "id": 4,
            "name": "N64",
            gameCount: 422, 
            color: '#e4000f',
            url: '//image.flaticon.com/icons/svg/37/37766.svg'
        },
        {
            "id": 130,
            "name": "Switch",
            gameCount: 815, 
            color: '#e4000f',
            url: '//image.flaticon.com/icons/svg/813/813515.svg'
        },
        {
            "id": 21,
            "name": "GameCube",
            gameCount: 659, 
            color: '#e4000f',
            url: '//image.flaticon.com/icons/svg/38/38392.svg'
        },
        {
            "id": 18,
            "name": "NES",
            gameCount: 1449, 
            color: '#e4000f',
            url: '//image.flaticon.com/icons/svg/39/39608.svg'
        },
        {
            "id": 19,
            "name": "SNES",
            gameCount: 1619, 
            color: '#e4000f',
            url: '//image.flaticon.com/icons/svg/39/39735.svg'
        }
    ]

}

const Xbox = {
    name: "Xbox",
    consoles: [
        {
            "id": 11,
            "name": "Xbox",
            gameCount: 954,
            color: '#0e7a0d',
            url: '//image.flaticon.com/icons/svg/39/39504.svg'
        },
        {
            "id": 12,
            "name": "Xbox 360",
            gameCount: 1939,
            color: '#0e7a0d',
            url: '//image.flaticon.com/icons/svg/39/39454.svg'
        },
        {
            "id": 49,
            "name": "Xbox One",
            gameCount: 1876,
            color: '#0e7a0d',
            url: '//image.flaticon.com/icons/svg/37/37942.svg'
        }
    ]
}

const Sony = {
    name: "Sony",
    consoles: [
        {
            "id": 7,
            "name": "PlayStation",
            gameCount: 1731,
            url: '//image.flaticon.com/icons/svg/489/489763.svg'
        }, 
        {
            "id": 8,
            "name": "PlayStation 2",
            gameCount: 2348,
            url: '//image.flaticon.com/icons/svg/588/588366.svg'
        },
        {
            "id": 9,
            "name": "PlayStation 3",
            gameCount: 2326,
            url: '//image.flaticon.com/icons/svg/65/65834.svg'
        },
        {
            "id": 48,
            "name": "PlayStation 4",
            gameCount: 2469,
            url: '//image.flaticon.com/icons/svg/65/65877.svg'
        },
        {
            "id": 38,
            "name": "PSP",
            gameCount: 1076,
            url: '//image.flaticon.com/icons/svg/588/588359.svg'
        },
        {
            "id": 46,
            "name": "PS Vita",
            gameCount: 798,
            url: '//image.flaticon.com/icons/svg/588/588368.svg'
        }
    ]
}

const Atari = {
    name: "Atari",
    consoles: [
        {
            "id": 66,
            "name": "Atari 5200",
            gameCount: 81,
            color: '#644240',
            url: '//image.flaticon.com/icons/svg/813/813422.svg'
        },
        {
            "id": 59,
            "name": "Atari 2600",
            gameCount: 529,
            color: '#644240',
            url: '//image.flaticon.com/icons/svg/813/813422.svg'
        },
        {
            "id": 60,
            "name": "Atari 7800",
            gameCount: 60,
            color: '#644240',
            url: '//image.flaticon.com/icons/svg/813/813422.svg'
        },
        {
            "id": 61,
            "name": "Atari Lynx",
            gameCount: 52,
            color: '#644240',
            url: '//image.flaticon.com/icons/svg/813/813422.svg'
        },
        {
            "id": 62,
            "name": "Atari Jaguar",
            gameCount: 49,
            color: '#644240',
            url: '//image.flaticon.com/icons/svg/813/813422.svg'
        }
    ]
}

const Sega = {
    name: "Sega",
    consoles: [
        {
            "id": 29,
            "name": "Sega Genesis",
            gameCount: 941,
            color: '#17569b',
            url: '//image.flaticon.com/icons/svg/588/588335.svg'
        },
        {
            "id": 78,
            "name": "Sega CD",
            gameCount: 200,
            color: '#17569b',
            url: '//image.flaticon.com/icons/svg/588/588335.svg'
        },
        {
            "id": 32,
            "name": "Sega Saturn",
            gameCount: 36,
            color: '#17569b',
            url: '//image.flaticon.com/icons/svg/588/588335.svg'
        },
        {
            "id": 30,
            "name": "Sega 32X",
            gameCount: 405,
            color: '#17569b',
            url: '//image.flaticon.com/icons/svg/588/588335.svg'
        },
        {
            "id": 64,
            "name": "Sega Master System",
            gameCount: 305,
            color: '#17569b',
            url: '//image.flaticon.com/icons/svg/588/588335.svg'
        },
        {
            "id": 35,
            "name": "Sega Game Gear",
            gameCount: 309,
            color: '#17569b',
            url: '//image.flaticon.com/icons/svg/588/588335.svg'
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