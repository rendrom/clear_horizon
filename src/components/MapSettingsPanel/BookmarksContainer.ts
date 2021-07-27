import './BookmarksContainer.css';

import { NgwMap } from '@nextgis/ngw-map';
import { ResourceHierarchy, FeatureItem } from '@nextgis/ngw-connector';
import { GeoJSON, Map } from 'leaflet';
import { Polygon } from 'geojson';
import { Bookmark } from '../../interfaces';

export interface BookmarksContainerOptions {
  ngwMap: NgwMap<Map>;
  bookmarks: ResourceHierarchy[];
}

export class BookmarksContainer {
  private readonly ngwMap: NgwMap<Map>;
  private _container: HTMLElement;

  constructor(private options: BookmarksContainerOptions) {
    this.ngwMap = options.ngwMap;
    this._container = this._createContainer();
  }

  getContainer(): HTMLElement {
    return this._container;
  }

  _createContainer(): HTMLElement {
    const container = document.createElement('div');
    container.className = 'bookmarks-contentainer panel-content-padding ';

    const bookmarksContainer = document.createElement('div');
    bookmarksContainer.className = 'bookmarks-contentainer__layers';
    this.options.bookmarks.forEach((b) => {
      this.ngwMap.connector
        .get('resource.item', null, { id: b.id })
        .then((resource) => {
          if (resource.feature_layer) {
            const labelField = resource.feature_layer.fields.find(
              (x) => x.label_field,
            );
            if (labelField) {
              this.ngwMap
                .fetchNgwLayerItems<Bookmark, Polygon>({ resourceId: b.id })
                .then((items) => {
                  items.forEach((x) => {
                    const elem = this._createBookmarkItem(
                      x,
                      labelField.keyname as keyof Bookmark,
                    );
                    container.appendChild(elem);
                  });
                });
            }
          }
        });
    });
    container.appendChild(bookmarksContainer);

    return container;
  }

  _createBookmarkItem<B extends Bookmark = Bookmark>(
    bookmark: FeatureItem<B, Polygon>,
    nameField: keyof B = 'name',
  ): HTMLElement {
    const elem = document.createElement('div');
    elem.className = 'tree-container__item bookmark';
    const bookmarkBlock = document.createElement('div');
    const nameValue = bookmark.fields[nameField];
    bookmarkBlock.innerHTML = String(nameValue);
    bookmarkBlock.onclick = () => {
      const geoJson = new GeoJSON(bookmark.geom);
      const lMap = this.ngwMap.mapAdapter.map;
      lMap && lMap.fitBounds(geoJson.getBounds());
    };
    elem.appendChild(bookmarkBlock);
    return elem;
  }
}
