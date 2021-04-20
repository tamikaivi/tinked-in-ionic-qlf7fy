export class ZoneModel {
    uuid: string;
    name: string;
}

export class CityModel {
    uuid: string;
    name: string;
    zones?: Array<ZoneModel>;
}

export class CountryModel {
    uuid: string;
    name: string;
    cities: Array<CityModel>;
}

export const LOCATION_TREE: Array<CountryModel> = [
    {
        uuid: '1',
        name: 'Bolivia',
        cities: [
            {
                uuid: '1.1',
                name: 'La Paz'
            },
            {
                uuid: '1.2',
                name: 'Cochabamba'
            },
            {
                uuid: '1.3',
                name: 'Santa Cruz'
            }
        ]
    },
    {
        uuid: '2',
        name: 'Colombia',
        cities: [
            {
                uuid: '2.1',
                name: 'Bogotá'
            },
            {
                uuid: '2.2',
                name: 'Medellín'
            },
            {
                uuid: '2.3',
                name: 'Barranquilla'
            }
        ]
    }
];


