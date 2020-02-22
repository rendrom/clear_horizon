import { AppOptions } from './src/App';

const options: AppOptions = {
  mapOptions: {
    target: 'map',
    bounds: [45, 46, 47, 49],
    // baseUrl: location.protocol + '//clear-horizon.nextgis.com',
    baseUrl: 'https://clear-horizon.nextgis.com',
    resources: [
      {
        resourceId: 1,
        fit: true,
        adapterOptions: { selectable: true }
      }
    ]
  },
  basemaps: [
    {
      qmsId: 1135
    },
    {
      qmsId: 487
    }
  ],
  userFires: {
    resource: 'userfirepoints',
    id: 'USERFIRE',
    adapterOptions: { paint: { color: 'rgb(100,20,40)' } }
  },
  fires: [
    {
      resourceId: 103,
      id: 'MODIS',
      adapterOptions: { paint: { color: 'red' } }
    },
    {
      resourceId: 105,
      id: 'VIIRS',
      adapterOptions: { paint: { color: 'orange' } }
    }
  ]
};

export default options;
