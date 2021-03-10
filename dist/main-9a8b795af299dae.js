(self.webpackChunkclear_horizon=self.webpackChunkclear_horizon||[]).push([[659],{64752:function(t,e){"use strict";e.Z={mapOptions:{target:"map",bounds:[45,46,47,49],baseUrl:"https://clear-horizon.nextgis.com",resources:[{resource:1,fit:!0,adapterOptions:{selectable:!0}}]},basemaps:[{qmsId:1135},{qmsId:487}],userFires:{resource:"userfirepoints",id:"USERFIRE",adapterOptions:{paint:{color:"rgb(100,20,40)"}}},fires:[{resource:103,id:"MODIS",adapterOptions:{paint:{color:"red"}}},{resource:105,id:"VIIRS",adapterOptions:{paint:{color:"orange"}}}]}},93846:function(){document.addEventListener("DOMContentLoaded",(function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach((function(t){t.addEventListener("click",(function(){var e=t.dataset.target,n=document.getElementById(e);t.classList.toggle("is-active"),n&&n.classList.toggle("is-active")}))}))}))},99164:function(t,e,n){"use strict";n(81486),n(35666);var o=n(40203),r=n(72010),i=n.n(r),a=n(52728),s=n.n(a),c=n(79408),p=n(57836),l=n(81129),u=n(26964),h=n(19317),d=n(68956),f=n.n(d);var m,g=function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function s(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((o=o.apply(t,e||[])).next())}))},v=function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},y=function(){function t(t){this.ngwMap=t,this._resourceItems={}}return t.prototype.setNgwMap=function(t){this.ngwMap=t},t.prototype.createPopupContent=function(t,e){var n=document.createElement("div"),o=document.createElement("div");o.className="properties";var r=Object.keys(t.properties).map((function(e){return{key:e,value:t.properties[e]}}));if(o.innerHTML=this.createPropertiesHtml(r),e){var i=document.createElement("div");i.appendChild(o),n.innerHTML="Загрузка",this.updateElementContent(i,e,t).then((function(){n.innerHTML="",n.appendChild(i)}))}else n.appendChild(o);return n},t.prototype.createPropertiesHtml=function(t){var e="";return t.forEach((function(t){var n=t.key,o=t.value;"object"==typeof o&&o&&("year"in o?o=[o.day,o.month,o.year].join("."):"hour"in o&&(o=[o.hour,o.minute].join(":"))),e+='\n      <div class="columns is-mobile">\n        <div class="column is-two-fifths">'+n+'</div>\n        <div class="column">'+function(t){return"string"==typeof t&&(e=t,new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e))?'<a href="'+t+'" target="_blank">'+t+"</a>":t;var e}(o)+"</div>\n      </div>\n      "})),e},t.prototype.updateElementContent=function(t,e,n){return g(this,void 0,void 0,(function(){var o,r,i,a;return v(this,(function(s){switch(s.label){case 0:return[4,this._getResourceItem(e)];case 1:return(o=s.sent()).feature_layer&&(r=[],o.feature_layer.fields.forEach((function(t){if(t.grid_visibility){var e=n.properties[t.keyname];e&&r.push({key:t.display_name,value:e})}})),i=this.createPropertiesHtml(r),(a=t.getElementsByClassName("properties")[0])&&(a.innerHTML=i)),[2,o]}}))}))},t.prototype._addPhotos=function(t,e,n,o){return g(this,void 0,void 0,(function(){var r,i,a,s,c,p,l;return v(this,(function(u){switch(u.label){case 0:(r=document.createElement("div")).className="carousel attachment",i=0,a=e,u.label=1;case 1:return i<a.length?(s=a[i],(c=document.createElement("figure")).className="image is-300x300",[4,this._loadImage(s,{width:300,height:300,id:n,fid:o})]):[3,4];case 2:p=u.sent(),(l=document.createElement("img")).src=p,c.appendChild(l),r.appendChild(c),u.label=3;case 3:return i++,[3,1];case 4:return t.appendChild(r),f().attach(r),[2]}}))}))},t.prototype._getResourceItem=function(t){return g(this,void 0,void 0,(function(){var e;return v(this,(function(n){switch(n.label){case 0:return this._resourceItems[t]?[3,2]:[4,this.ngwMap.connector.get("resource.item",null,{id:t})];case 1:e=n.sent(),this._resourceItems[t]=e,n.label=2;case 2:return[2,this._resourceItems[t]]}}))}))},t.prototype._loadImage=function(t,e){var n=this;return new Promise((function(o,r){var i=e.width,a=e.height,s="/api/resource/"+e.id+"/feature/"+e.fid+"/attachment/"+t.id+"/image"+(i&&a?"?size="+i+"x"+a:"");n.ngwMap.connector.makeQuery(s,{},{responseType:"blob"}).then((function(t){var e=new FileReader;e.readAsDataURL(t),e.onloadend=function(){o(e.result)}})).catch((function(t){r(t)}))}))},t}(),_=n(86273),w=n.n(_),b=function(){function t(t){this.options=t,this._container=document.createElement("div"),this.status=void 0===this.options.open||this.options.open,this._updateContainer(),this.options.parent&&this.options.parent.appendChild(this.getContainer())}return t.prototype.getContainer=function(){return this._container},t.prototype.open=function(){this._content.innerHTML||this._updateContent(),this._toggle&&(this._toggle.innerHTML=this._getToggleButtonHtml("fas fa-chevron-up")),this.status=!0},t.prototype.close=function(){this._cleanContent(),this._toggle&&(this._toggle.innerHTML=this._getToggleButtonHtml("fas fa-chevron-down")),this.status=!1},t.prototype.toggle=function(){this.status?this.close():this.open()},t.prototype._getToggleButtonHtml=function(t){return'\n    <a class="button is-small">\n    <span class="icon is-small">\n      <i class="'+t+'"></i>\n    </span>\n    </a>\n    '},t.prototype._updateContainer=function(){if(this._container.innerHTML="",this.options.title){var t=this._createHeader();this._container.appendChild(t)}var e=document.createElement("div");e.className="panel-content",this._content=e,this._container.appendChild(e),this.status?this.open():this.close()},t.prototype._createHeader=function(){var t=this,e=document.createElement("div");e.className="level is-mobile panel-header";var n=document.createElement("div");n.className="level-left";var o=document.createElement("div");o.className="level-item panel-header__title",o.innerHTML=this.options.title,n.appendChild(o);var r=document.createElement("div");r.className="level-right";var i=document.createElement("div");return i.className="level-item panel-header__toggle",r.appendChild(i),i.onclick=function(){t.toggle()},this._toggle=i,e.appendChild(n),e.appendChild(r),e},t.prototype._cleanContent=function(){this._content.innerHTML=""},t.prototype._updateContent=function(){this._cleanContent();var t="function"==typeof this.options.content?this.options.content():this.options.content;return this._content.appendChild(t),this._content},t}(),C=n(7466),M=function(){function t(t){var e=this._createTreeItem(t);e&&(this._container=e)}return t.prototype.getContainer=function(){return this._container},t.prototype._createTreeBranch=function(t){var e=this,n=document.createElement("div");return n.className="tree-container__item-children",t.forEach((function(t){if(t.item){var o=e._createTreeItem(t);o&&n.appendChild(o)}})),n},t.prototype._createTreeItem=function(t){var e=t.item;if(!e)return!1;var n=document.createElement("div");if(n.className="tree-container__item",e.display_name){var o=document.createElement("input");o.setAttribute("type","checkbox");var r="layer"!==e.item_type||e.layer_enabled;o.checked=r;var i=t.properties.property("visibility");i&&(i.emitter.on("change",(function(t){o.checked=t.value})),o.onclick=function(){i.set(o.checked,{propagation:C.y9.keys.pressed("ctrl")})});var a=document.createElement("span");a.innerHTML=e.display_name,n.appendChild(o),n.appendChild(a)}if("group"===e.item_type||"root"===e.item_type&&e.children.length){var s=t.tree.getChildren(),c=this._createTreeBranch(s.reverse());n.appendChild(c)}return n},t}(),k=function(){function t(t){this.options=t,this.ngwMap=t.ngwMap,this._container=this._createContainer()}return t.prototype.getContainer=function(){return this._container},t.prototype._createContainer=function(){var t=this,e=document.createElement("div");e.className="fires-contentainer panel-content-padding ";var n=document.createElement("div");return n.className="fires-contentainer__layers",this.options.fires.forEach((function(e){t._createFireItem(e,n)})),e.appendChild(n),e},t.prototype._createFireItem=function(t,e){var n=this,o=document.createElement("div");o.className="tree-container__item";var r=this.ngwMap.getLayer(t.id);if(r&&r.item){var i=r.item,a=document.createElement("input");a.setAttribute("type","checkbox"),a.checked=!0,a.onclick=function(){n.ngwMap.toggleLayer(t.id,a.checked)};var s=document.createElement("span"),c=i.resource.display_name.split("__")[0];s.innerHTML=c.replace("fires","").trim();var p=this._createSymbol(t);o.appendChild(a),o.appendChild(p),o.appendChild(s),e.appendChild(o)}},t.prototype._createSymbol=function(t){var e,n=document.createElement("span");n.className="item-symbol";var o=(null===(e=t.adapterOptions)||void 0===e?void 0:e.paint).color;return"string"==typeof o&&(n.style.color=o,n.style.borderColor=o,n.style.backgroundColor=o),n},t}(),E=(m=function(t,e){return(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}m(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),L=[["24","24 часа"],["48","48 часов"],["72","72 часа"],["168","неделя"]],T=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return E(e,t),e.prototype._createContainer=function(){var e=t.prototype._createContainer.call(this),n=this._createSelector();return e.insertBefore(n,e.firstChild),e},e.prototype._createSelector=function(){var t=this,e=document.createElement("div"),n=document.createElement("label");n.appendChild(document.createTextNode("Просмотр термоточек: "));var o=document.createElement("select");return L.forEach((function(t){var e=document.createElement("option");e.value=t[0],e.text=t[1],o.appendChild(e)})),o.onchange=function(){t.options.fires.forEach((function(e){t.ngwMap.getLayer(e.id).propertiesFilter([["timestamp","ge",Math.floor(Date.now()/1e3)-3600*Number(o.value)]])}))},n.appendChild(o),e.appendChild(n),e},e}(k),N=function(){function t(t){var e=this;this.options=t,this.ngwMap=t.ngwMap,this._container=this._createContainer(),this.ngwMap.emitter.on("layer:add",(function(t){e.ngwMap.isBaseLayer(t)&&e._updateBaseMapContainer()}))}return t.prototype.getContainer=function(){return this._container},t.prototype._createContainer=function(){var t=document.createElement("div");t.className="basemaps-contentainer panel-content-padding control";var e=document.createElement("div");return e.className="basemaps-contentainer__layers",this._baseMapsContainer=e,t.appendChild(e),this._updateBaseMapContainer(),t},t.prototype._updateBaseMapContainer=function(){var t=this;this._baseMapsContainer.innerHTML="",this._createBaseMapItem(),this.ngwMap.getBaseLayers().forEach((function(e){var n=t.ngwMap.getLayer(e);n&&t._createBaseMapItem(n)}))},t.prototype._createBaseMapItem=function(t){var e=this,n=document.createElement("div");n.className="control";var o=document.createElement("label");o.className="radio basemap-container__item";var r=document.createElement("input");r.setAttribute("type","radio"),r.setAttribute("name","basemap"),r.checked=this.ngwMap.isLayerVisible(t),r.onclick=function(){t?e.ngwMap.toggleLayer(t.id,r.checked):e.ngwMap.hideLayer(e.ngwMap.getActiveBaseLayer())};var i=t&&(t.name||t.options.name)||"Blank",a=document.createTextNode(i);o.appendChild(r),o.appendChild(a),n.appendChild(o),this._baseMapsContainer.appendChild(n)},t}(),O=n(45243),I=function(){function t(t){this.options=t,this.ngwMap=t.ngwMap,this._container=this._createContainer()}return t.prototype.getContainer=function(){return this._container},t.prototype._createContainer=function(){var t=this,e=document.createElement("div");e.className="bookmarks-contentainer panel-content-padding ";var n=document.createElement("div");return n.className="bookmarks-contentainer__layers",this.options.bookmarks.forEach((function(n){t.ngwMap.connector.get("resource.item",null,{id:n.id}).then((function(o){var r=o.feature_layer.fields.find((function(t){return t.label_field}));t.ngwMap.getNgwLayerItems({resourceId:n.id}).then((function(n){n.forEach((function(n){var o=t._createBookmarkItem(n,r.keyname);e.appendChild(o)}))}))}))})),e.appendChild(n),e},t.prototype._createBookmarkItem=function(t,e){var n=this;void 0===e&&(e="name");var o=document.createElement("div");o.className="tree-container__item bookmark";var r=document.createElement("div");return r.innerHTML=t.fields[e],r.onclick=function(){var e=new O.GeoJSON(t.geom);n.ngwMap.mapAdapter.map.fitBounds(e.getBounds())},o.appendChild(r),o},t}(),B=function(){return(B=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},x={target:"tree"},F=function(){function t(t,e){if(this.actionMap=t,this.options=B(B({},x),e),"string"==typeof this.options.target){var n=document.getElementById(this.options.target);if(!n)throw new Error("No element with ID #"+this.options.target+" in document for webmap tree");this._target=n}else this.options.target instanceof HTMLElement&&(this._target=this.options.target);this.sidebar=new(w())(this._target,{closeButton:!1,position:"left",autoPan:!1}),this.sidebar.addTo(this.actionMap.ngwMap.mapAdapter.map),this.ngwLayers=this.options.ngwLayers,this._container=this._createContainer(),this.options.status||this.hide(),this._target.appendChild(this._container)}return t.prototype.show=function(){this._container.classList.remove("hidden"),this.sidebar.show()},t.prototype.hide=function(){this.sidebar.hide(),this._container.classList.add("hidden")},t.prototype._createContainer=function(){var t=this,e=document.createElement("div");return e.className="tree-container",void 0!==this.options.width&&(e.style.width=this.options.width+"px"),this.options.userFires&&new b({title:"Пожары",content:function(){return t._createUserFiresContainer()},parent:e}),this.options.fires&&new b({title:"Термоточки (FIRMS)",content:function(){return t._createFiresContainer()},parent:e}),new b({title:"Базовые слои",content:function(){return t._createNgwLayers()},open:!1,parent:e}),new b({title:"Подложки",content:function(){return t._createBasemapsContainer()},open:!1,parent:e}),new b({title:"Закладки",content:function(){return t._createBookmarksContainer()},open:!1,parent:e}),e},t.prototype._createNgwLayers=function(){var t=document.createElement("div");for(var e in t.className="webmap-tree-container",this.ngwLayers){var n=this.ngwLayers[e],o=new M(n.layer.layer).getContainer();o&&t.appendChild(o)}return t},t.prototype._createBookmarksContainer=function(){var t=document.createElement("div"),e=this.options.bookmarks;if(e){var n=new I({bookmarks:e,ngwMap:this.options.ngwMap});t.appendChild(n.getContainer())}return t},t.prototype._createUserFiresContainer=function(){var t=document.createElement("div"),e=[this.options.userFires];if(e){var n=new k({fires:e,ngwMap:this.options.ngwMap});t.appendChild(n.getContainer())}return t},t.prototype._createFiresContainer=function(){var t=document.createElement("div"),e=this.options.fires;if(e){var n=new T({fires:e,ngwMap:this.options.ngwMap});t.appendChild(n.getContainer())}return t},t.prototype._createBasemapsContainer=function(){var t=document.createElement("div");if(this.options.fires){var e=new N({ngwMap:this.options.ngwMap});t.appendChild(e.getContainer())}return t},t}(),P=n(17187),H=function(){function t(t,e){var n=this;this.actionMap=t,this.html='<i class="fas fa-map-pin btn-control-icon "></i>',this.title={off:"Полученить координаты с карты",on:"Выключить режим получения координат с карты"},this.addClass="toggle-control webmap-tree-control",this.addClassOn="active",this.status=!1,this.emitter=new P.EventEmitter,this._toggle=e.toggle,this.actionMap.ngwMap.addLayer("GEOJSON",{id:"show-coordinate-click",visibility:!0,paint:{radius:6},popup:!0,popupOptions:{createPopupContent:function(t){return n._createPopupContent(t.feature.geometry.coordinates.map((function(t){return t.toFixed(5)})))}}}).then((function(t){t&&(n._layer=t)}))}return t.prototype.onClick=function(t){this.toggleControl(t)},t.prototype.show=function(){var t=this;this.actionMap.ngwMap.setCursor("crosshair"),this._removeClickListener(),this.__onMapClick=function(e){return t._onMapClick(e)},this.actionMap.ngwMap.emitter.on("click",this.__onMapClick)},t.prototype.hide=function(){this.actionMap.ngwMap.setCursor("default"),this._removeClickListener(),this.actionMap.ngwMap.clearLayerData(this._layer)},t.prototype._removeClickListener=function(){this.__onMapClick&&(this.actionMap.ngwMap.emitter.off("click",this.__onMapClick),this.__onMapClick=null)},t.prototype._onMapClick=function(t){var e={type:"Feature",properties:{},geometry:{type:"Point",coordinates:[t.latLng.lng,t.latLng.lat]}};this.actionMap.ngwMap.setLayerData(this._layer,e)},t.prototype.toggleControl=function(t){(t=void 0!==t?t:!this.status)?this.show():this.hide(),this.status=t,this._toggle&&this._toggle(t),this.emitter.emit("status",this.status)},t.prototype._createPopupContent=function(t){var e=t[0],n=t[1],r=document.createElement("div"),i=n+", "+e;return r.innerHTML='\n    <span>Широта/Долгота:</span>\n    <span class="lat-lng-coord"> '+i+'</span>\n    <a href="#" class="copy-to-clipboard">\n    <i class="far fa-clipboard"></i>\n    </a>',r.getElementsByClassName("copy-to-clipboard")[0].onclick=function(){o.TU.copy(i)},r},t}(),S=function(){return(S=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},j=function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function s(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((o=o.apply(t,e||[])).next())}))},A=function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},R=function(){function t(t){this.options=t,this._promises={},this._stopToggleControlsCb=[],this.popup=new y(this.ngwMap)}return t.prototype.create=function(t){return j(this,void 0,void 0,(function(){var e,n,o,r=this;return A(this,(function(i){switch(i.label){case 0:return e=S({},t.mapOptions),this.ngwMap=new c.Z8(S({mapAdapter:new u.Z,controls:[],minZoom:4,runtimeParams:[new h.Z]},e)),this.ngwMap.setCursor("default"),this.popup.setNgwMap(this.ngwMap),t.basemaps&&this.ngwMap.onLoad().then((function(){return t.basemaps.forEach((function(t,e){r.ngwMap.addBaseLayer("QMS",S(S({},t),{visibility:0===e}))}))})),this.ngwMap.getPaintFunctions={base:l.q},this.ngwMap.addControl("ZOOM","top-left"),this._createLocateControl(),this.ngwMap.addControl("ATTRIBUTION","bottom-right",{customAttribution:['<a href="https://nextgis.com" target="_blank">©NextGIS</a>']}),this._createShareControl(),[4,this.ngwMap.getNgwLayers()];case 1:return n=i.sent(),o=[],Object.values(n).forEach((function(t){var e=t.layer.item&&t.layer.item.webmap&&t.layer.item.webmap.bookmark_resource;e&&o.push(e)})),[4,this._addUserFires(t.userFires)];case 2:return i.sent(),[4,this._addFires(t.fires)];case 3:return i.sent(),this._createGetCoordinateControl(),this._addTreeControl({ngwLayers:n,fires:t.fires,userFires:t.userFires,bookmarks:o}),this.ngwMap.addControl(this._crateMeasureControl(),"top-left"),this._addEventsListeners(),[2]}}))}))},t.prototype._locate=function(){var t=this;this.ngwMap.locate({setView:!1},{locationfound:function(e){var n=e.lngLat;t.ngwMap.setCenter(n)}})},t.prototype._createAuthControl=function(t){return j(this,void 0,void 0,(function(){var e,n,o,r=this;return A(this,(function(i){return e=document.getElementsByClassName("js-auth-btn")[0],n=function(){return!(!r.ngwMap.connector||!r.ngwMap.connector.user)},o=function(){t.logout(),window.location.reload()},e.innerHTML=n()?"Выйти":"Войти",e.style.display="block",e.addEventListener("click",o),[2]}))}))},t.prototype._createShareControl=function(){var t=this,e=document.getElementsByClassName("js-modal")[0],n=document.getElementsByClassName("js-modal-close")[0],o=document.getElementsByClassName("js-share-modal-content")[0],r=document.getElementsByClassName("js-share-input")[0];n.addEventListener("click",(function(){o.innerHTML="",e.classList.remove("is-active")}));var a=this.ngwMap.createButtonControl({html:'<i class="fas fa-share-alt btn-control-icon "></i>',onClick:function(){var n,a;n=location.href,a=t._createShareModalContent(n),r.value=n,o.innerHTML=a,i().update(),e.classList.add("is-active")}});this.ngwMap.addControl(a,"bottom-right")},t.prototype._createGetCoordinateControl=function(){return j(this,void 0,void 0,(function(){var t,e,n=this;return A(this,(function(o){switch(o.label){case 0:return t=new H(this,{toggle:function(t){t?(n._stopToggleControlsFor("coordinate"),n.ngwMap.disableSelection()):n.ngwMap.enableSelection()}}),[4,this.ngwMap.createToggleControl(t)];case 1:return e=o.sent(),this.ngwMap.addControl(e,"top-left"),this._stopToggleControlsCb.push({name:"coordinate",stop:function(){return e.onClick(!1)}}),[2]}}))}))},t.prototype._createLocateControl=function(){var t=this,e=this.ngwMap.createButtonControl({html:'<i class="fas fa-location-arrow btn-control-icon"></i>',title:"Найти меня на карте",onClick:function(){return t._locate()}});this.ngwMap.addControl(e,"top-left")},t.prototype._createShareModalContent=function(t){return'<div class="buttons share-btn js-share-btn" data-url="'+t+'" data-title="" data-desc="">\n      '+[{id:"tw",name:"Twitter",icon:"fab fa-twitter"},{id:"vk",name:"VK",icon:"fab fa-vk"},{id:"fb",name:"Facebook",icon:"fab fa-facebook-square"}].map((function(t){return'<a class="button is-primary" data-id="'+t.id+'">\n                    <span class="icon">\n                        <i class="'+t.icon+'"></i>\n                    </span>\n                    <span>'+t.name+"</span>\n                </a>"})).join("")+"\n    </div>"},t.prototype._addUserFires=function(t,e){return j(this,void 0,void 0,(function(){var n;return A(this,(function(o){return t&&(n=t.adapterOptions.paint,this.ngwMap.addNgwLayer({resource:t,id:t.id,adapterOptions:S({paint:S(S({},n),{stroke:!0,fillOpacity:.6,radius:5}),selectable:!0,selectedPaint:S(S({},n),{stroke:!0,fillOpacity:.9,radius:7})},e)})),[2]}))}))},t.prototype._addFires=function(t){return j(this,void 0,void 0,(function(){var e,n,o;return A(this,(function(r){switch(r.label){case 0:if(!t)return[3,4];e=0,n=t,r.label=1;case 1:return e<n.length?(o=n[e],[4,this._addUserFires(o,{propertiesFilter:[["timestamp","ge",Math.floor(Date.now()/1e3)-3600*Number(this.options.timedelta)]]})]):[3,4];case 2:r.sent(),r.label=3;case 3:return e++,[3,1];case 4:return[2]}}))}))},t.prototype._addTreeControl=function(t){return j(this,void 0,void 0,(function(){var e,n,o,r,i,a=this;return A(this,(function(s){switch(s.label){case 0:return e=document.getElementsByClassName("js-sidebar")[0],n=function(){return e.classList.contains("is-active")},o=function(){return e.classList.add("is-active")},r=function(){return e.classList.remove("is-active")},[4,this.ngwMap.onLoad()];case 1:return s.sent(),this.tree=new F(this,S(S({},t),{ngwMap:this.ngwMap})),i=function(t){(t=void 0!==t?t:n())?(a._stopToggleControlsFor("tree"),a.tree.show(),o()):(a.tree.hide(),r())},e.addEventListener("click",(function(){i()})),setTimeout((function(){i()}),500),this._stopToggleControlsCb.push({name:"tree",stop:function(){return i(!1)}}),[2]}}))}))},t.prototype._clean=function(){this._promises.getFeaturePromise&&this._promises.getFeaturePromise.cancel&&this._promises.getFeaturePromise.cancel(),this.ngwMap.removeLayer("highlight")},t.prototype._highlighNgwLayer=function(t){var e=this;this._clean();var n=(0,p.RP)(t)[0];if(n){var o=n.resourceId;this.ngwMap.fetchIdentifyItem(t,{extensions:["attachment"]}).then((function(t){t.toGeojson().then((function(r){e.ngwMap.addLayer("GEOJSON",{id:"highlight",data:r,visibility:!0,paint:{color:"green",stroke:!0,fillOpacity:"0.8"},selectOnHover:!0,popup:!0,popupOptions:{createPopupContent:function(r){if(r.feature){var i=e.popup.createPopupContent(r.feature,o);return t.extensions.attachment&&t.extensions.attachment.length&&e.popup._addPhotos(i,t.extensions.attachment,n.resourceId,n.featureId),i}}}})}))}))}},t.prototype._stopToggleControlsFor=function(t){this._stopToggleControlsCb.forEach((function(e){e.name!==t&&e.stop()}))},t.prototype._addEventsListeners=function(){var t=this;this.ngwMap.emitter.on("click",(function(){t.ngwMap.cancelPromise("identify","select")})),this.ngwMap.emitter.on("ngw:select",(function(e){return t._highlighNgwLayer(e)}))},t.prototype._crateMeasureControl=function(){var t=this,e=new(s())({showBearings:!0,bearingTextIn:"In",bearingTextOut:"Out",tooltipTextFinish:"Кликните чтобы <b>завершить изменрение</b><br>",tooltipTextDelete:"SHIFT + клик чтобы <b>удалить точку</b>",tooltipTextMove:"Клик + тянуть чтобы <b>передвинуть точку</b><br>",tooltipTextResume:"<br>CTRL + клик чтобы <b>продолжить линию</b>",tooltipTextAdd:"CTRL + клик чтобы <b>добавить точку</b>",measureControlTitleOn:"Перейти в режим измерения",measureControlTitleOff:"Выйти из режима измерений",measureControlLabel:'<i class="fas fa-ruler-combined btn-control-icon"></i>',measureControlClasses:[],unitControlLabel:{metres:"м",kilometres:"км"}});return this.ngwMap.mapAdapter.map.on("polylinemeasure:toggle",(function(e){e.sttus?(t._stopToggleControlsFor("measure"),t.ngwMap.disableSelection()):(t.ngwMap.setCursor("default"),t.ngwMap.enableSelection())})),this._stopToggleControlsCb.push({name:"measure",stop:function(){e._measuring&&e._toggleMeasure()}}),e},t}(),z=(n(93846),function(){return(z=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)}),G=function(){function t(t){this.options=t,this.actionMap=new R(this.options)}return t.prototype.create=function(t){return e=this,n=void 0,r=function(){return function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(e){return this.options=z(z({},this.options),t),this.actionMap.create(this.options),[2]}))},new((o=void 0)||(o=Promise))((function(t,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(t){t(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}));var e,n,o,r},t}(),U={};try{U=n(64752).Z}catch(t){console.warn("Config file is not funded, run with default settings")}new G((0,o.vb)({mapOptions:{target:"map",bounds:[36.59,43.385,49.374,50.214]},timedelta:24},U)).create()}},0,[[99164,666,770,243,558,886,185,367,754,547]]]);
//# sourceMappingURL=main-9a8b795af299dae.js.map