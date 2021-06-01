(self.webpackChunkclear_horizon=self.webpackChunkclear_horizon||[]).push([[659],{64752:function(t,e){"use strict";e.Z={mapOptions:{target:"map",bounds:[45,46,47,49],baseUrl:"https://clear-horizon.nextgis.com",resources:[{resource:1,fit:!0,adapterOptions:{selectable:!0}}]},basemaps:[{qmsId:1135},{qmsId:487}],userFires:{resource:"userfirepoints",id:"USERFIRE",adapterOptions:{paint:{color:"rgb(100,20,40)"}}},fires:[{resource:103,id:"MODIS",adapterOptions:{paint:{color:"red"}}},{resource:105,id:"VIIRS",adapterOptions:{paint:{color:"orange"}}}]}},93846:function(){document.addEventListener("DOMContentLoaded",(function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach((function(t){t.addEventListener("click",(function(){var e=t.dataset.target,n=document.getElementById(e);t.classList.toggle("is-active"),n&&n.classList.toggle("is-active")}))}))}))},2732:function(t,e,n){"use strict";n(81486),n(35666);var i=n(39871),a=n(72010),o=n.n(a),r=n(79408),s=n(18195),c=n(81129),l=n(26964),u=n(19317),p=n(68956),h=n.n(p);var d,m=function(t,e,n,i){return new(n||(n=Promise))((function(a,o){function r(t){try{c(i.next(t))}catch(t){o(t)}}function s(t){try{c(i.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,s)}c((i=i.apply(t,e||[])).next())}))},f=function(t,e){var n,i,a,o,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=2&o[0]?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,i=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!((a=(a=r.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(6===o[0]&&r.label<a[1]){r.label=a[1],a=o;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(o);break}a[2]&&r.ops.pop(),r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t],i=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},_=function(){function t(t){this.ngwMap=t,this._resourceItems={}}return t.prototype.setNgwMap=function(t){this.ngwMap=t},t.prototype.createPopupContent=function(t,e){var n=document.createElement("div"),i=document.createElement("div");i.className="properties";var a=Object.keys(t.properties).map((function(e){return{key:e,value:t.properties[e]}}));if(i.innerHTML=this.createPropertiesHtml(a),e){var o=document.createElement("div");o.appendChild(i),n.innerHTML="Загрузка",this.updateElementContent(o,e,t).then((function(){n.innerHTML="",n.appendChild(o)}))}else n.appendChild(i);return n},t.prototype.createPropertiesHtml=function(t){var e="";return t.forEach((function(t){var n=t.key,i=t.value;"object"==typeof i&&i&&("year"in i?i=[i.day,i.month,i.year].join("."):"hour"in i&&(i=[i.hour,i.minute].join(":"))),e+='\n      <div class="columns is-mobile">\n        <div class="column is-two-fifths">'+n+'</div>\n        <div class="column">'+function(t){return"string"==typeof t&&(e=t,new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e))?'<a href="'+t+'" target="_blank">'+t+"</a>":t;var e}(i)+"</div>\n      </div>\n      "})),e},t.prototype.updateElementContent=function(t,e,n){return m(this,void 0,void 0,(function(){var i,a,o,r;return f(this,(function(s){switch(s.label){case 0:return[4,this._getResourceItem(e)];case 1:return(i=s.sent()).feature_layer&&(a=[],i.feature_layer.fields.forEach((function(t){if(t.grid_visibility){var e=n.properties[t.keyname];e&&a.push({key:t.display_name,value:e})}})),o=this.createPropertiesHtml(a),(r=t.getElementsByClassName("properties")[0])&&(r.innerHTML=o)),[2,i]}}))}))},t.prototype._addPhotos=function(t,e,n,i){return m(this,void 0,void 0,(function(){var a,o,r,s,c,l,u;return f(this,(function(p){switch(p.label){case 0:(a=document.createElement("div")).className="carousel attachment",o=0,r=e,p.label=1;case 1:return o<r.length?(s=r[o],(c=document.createElement("figure")).className="image is-300x300",[4,this._loadImage(s,{width:300,height:300,id:n,fid:i})]):[3,4];case 2:l=p.sent(),(u=document.createElement("img")).src=l,c.appendChild(u),a.appendChild(c),p.label=3;case 3:return o++,[3,1];case 4:return t.appendChild(a),h().attach(a),[2]}}))}))},t.prototype._getResourceItem=function(t){return m(this,void 0,void 0,(function(){var e;return f(this,(function(n){switch(n.label){case 0:return this._resourceItems[t]?[3,2]:[4,this.ngwMap.connector.get("resource.item",null,{id:t})];case 1:e=n.sent(),this._resourceItems[t]=e,n.label=2;case 2:return[2,this._resourceItems[t]]}}))}))},t.prototype._loadImage=function(t,e){var n=this;return new Promise((function(i,a){var o=e.width,r=e.height,s="/api/resource/"+e.id+"/feature/"+e.fid+"/attachment/"+t.id+"/image"+(o&&r?"?size="+o+"x"+r:"");n.ngwMap.connector.makeQuery(s,{},{responseType:"blob"}).then((function(t){var e=new FileReader;e.readAsDataURL(t),e.onloadend=function(){i(e.result)}})).catch((function(t){a(t)}))}))},t}(),g=n(86273),v=n.n(g),y=function(){function t(t){this.options=t,this._container=document.createElement("div"),this.status=void 0===this.options.open||this.options.open,this._updateContainer(),this.options.parent&&this.options.parent.appendChild(this.getContainer())}return t.prototype.getContainer=function(){return this._container},t.prototype.open=function(){this._content.innerHTML||this._updateContent(),this._toggle&&(this._toggle.innerHTML=this._getToggleButtonHtml("fas fa-chevron-up")),this.status=!0},t.prototype.close=function(){this._cleanContent(),this._toggle&&(this._toggle.innerHTML=this._getToggleButtonHtml("fas fa-chevron-down")),this.status=!1},t.prototype.toggle=function(){this.status?this.close():this.open()},t.prototype._getToggleButtonHtml=function(t){return'\n    <a class="button is-small">\n    <span class="icon is-small">\n      <i class="'+t+'"></i>\n    </span>\n    </a>\n    '},t.prototype._updateContainer=function(){if(this._container.innerHTML="",this.options.title){var t=this._createHeader();this._container.appendChild(t)}var e=document.createElement("div");e.className="panel-content",this._content=e,this._container.appendChild(e),this.status?this.open():this.close()},t.prototype._createHeader=function(){var t=this,e=document.createElement("div");e.className="level is-mobile panel-header";var n=document.createElement("div");n.className="level-left";var i=document.createElement("div");i.className="level-item panel-header__title",i.innerHTML=this.options.title,n.appendChild(i);var a=document.createElement("div");a.className="level-right";var o=document.createElement("div");return o.className="level-item panel-header__toggle",a.appendChild(o),o.onclick=function(){t.toggle()},this._toggle=o,e.appendChild(n),e.appendChild(a),e},t.prototype._cleanContent=function(){this._content.innerHTML=""},t.prototype._updateContent=function(){this._cleanContent();var t="function"==typeof this.options.content?this.options.content():this.options.content;return this._content.appendChild(t),this._content},t}(),b=n(20080),w=function(){function t(t){var e=this._createTreeItem(t);e&&(this._container=e)}return t.prototype.getContainer=function(){return this._container},t.prototype._createTreeBranch=function(t){var e=this,n=document.createElement("div");return n.className="tree-container__item-children",t.forEach((function(t){if(t.item){var i=e._createTreeItem(t);i&&n.appendChild(i)}})),n},t.prototype._createTreeItem=function(t){var e=t.item;if(!e)return!1;var n=document.createElement("div");if(n.className="tree-container__item",e.display_name){var i=document.createElement("input");i.setAttribute("type","checkbox");var a="layer"!==e.item_type||e.layer_enabled;i.checked=a;var o=t.properties.property("visibility");o&&(o.emitter.on("change",(function(t){i.checked=t.value})),i.onclick=function(){o.set(i.checked,{propagation:b.y9.keys.pressed("ctrl")})});var r=document.createElement("span");r.innerHTML=e.display_name,n.appendChild(i),n.appendChild(r)}if("group"===e.item_type||"root"===e.item_type&&e.children.length){var s=t.tree.getChildren(),c=this._createTreeBranch(s.reverse());n.appendChild(c)}return n},t}(),M=function(){function t(t){this.options=t,this.ngwMap=t.ngwMap,this._container=this._createContainer()}return t.prototype.getContainer=function(){return this._container},t.prototype._createContainer=function(){var t=this,e=document.createElement("div");e.className="fires-contentainer panel-content-padding ";var n=document.createElement("div");return n.className="fires-contentainer__layers",this.options.fires.forEach((function(e){t._createFireItem(e,n)})),e.appendChild(n),e},t.prototype._createFireItem=function(t,e){var n=this,i=document.createElement("div");i.className="tree-container__item";var a=this.ngwMap.getLayer(t.id);if(a&&a.item){var o=a.item,r=document.createElement("input");r.setAttribute("type","checkbox"),r.checked=!0,r.onclick=function(){n.ngwMap.toggleLayer(t.id,r.checked)};var s=document.createElement("span"),c=o.resource.display_name.split("__")[0];s.innerHTML=c.replace("fires","").trim();var l=this._createSymbol(t);i.appendChild(r),i.appendChild(l),i.appendChild(s),e.appendChild(i)}},t.prototype._createSymbol=function(t){var e,n=document.createElement("span");n.className="item-symbol";var i=(null===(e=t.adapterOptions)||void 0===e?void 0:e.paint).color;return"string"==typeof i&&(n.style.color=i,n.style.borderColor=i,n.style.backgroundColor=i),n},t}(),C=(d=function(t,e){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}d(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),k=[["24","24 часа"],["48","48 часов"],["72","72 часа"],["168","неделя"]],L=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return C(e,t),e.prototype._createContainer=function(){var e=t.prototype._createContainer.call(this),n=this._createSelector();return e.insertBefore(n,e.firstChild),e},e.prototype._createSelector=function(){var t=this,e=document.createElement("div"),n=document.createElement("label");n.appendChild(document.createTextNode("Просмотр термоточек: "));var i=document.createElement("select");return k.forEach((function(t){var e=document.createElement("option");e.value=t[0],e.text=t[1],i.appendChild(e)})),i.onchange=function(){t.options.fires.forEach((function(e){t.ngwMap.getLayer(e.id).propertiesFilter([["timestamp","ge",Math.floor(Date.now()/1e3)-3600*Number(i.value)]])}))},n.appendChild(i),e.appendChild(n),e},e}(M),E=function(){function t(t){var e=this;this.options=t,this.ngwMap=t.ngwMap,this._container=this._createContainer(),this.ngwMap.emitter.on("layer:add",(function(t){e.ngwMap.isBaseLayer(t)&&e._updateBaseMapContainer()}))}return t.prototype.getContainer=function(){return this._container},t.prototype._createContainer=function(){var t=document.createElement("div");t.className="basemaps-contentainer panel-content-padding control";var e=document.createElement("div");return e.className="basemaps-contentainer__layers",this._baseMapsContainer=e,t.appendChild(e),this._updateBaseMapContainer(),t},t.prototype._updateBaseMapContainer=function(){var t=this;this._baseMapsContainer.innerHTML="",this._createBaseMapItem(),this.ngwMap.getBaseLayers().forEach((function(e){var n=t.ngwMap.getLayer(e);n&&t._createBaseMapItem(n)}))},t.prototype._createBaseMapItem=function(t){var e=this,n=document.createElement("div");n.className="control";var i=document.createElement("label");i.className="radio basemap-container__item";var a=document.createElement("input");a.setAttribute("type","radio"),a.setAttribute("name","basemap"),a.checked=this.ngwMap.isLayerVisible(t),a.onclick=function(){t?e.ngwMap.toggleLayer(t.id,a.checked):e.ngwMap.hideLayer(e.ngwMap.getActiveBaseLayer())};var o=t&&(t.name||t.options.name)||"Blank",r=document.createTextNode(o);i.appendChild(a),i.appendChild(r),n.appendChild(i),this._baseMapsContainer.appendChild(n)},t}(),P=n(45243),N=n.n(P),x=function(){function t(t){this.options=t,this.ngwMap=t.ngwMap,this._container=this._createContainer()}return t.prototype.getContainer=function(){return this._container},t.prototype._createContainer=function(){var t=this,e=document.createElement("div");e.className="bookmarks-contentainer panel-content-padding ";var n=document.createElement("div");return n.className="bookmarks-contentainer__layers",this.options.bookmarks.forEach((function(n){t.ngwMap.connector.get("resource.item",null,{id:n.id}).then((function(i){var a=i.feature_layer.fields.find((function(t){return t.label_field}));t.ngwMap.getNgwLayerItems({resourceId:n.id}).then((function(n){n.forEach((function(n){var i=t._createBookmarkItem(n,a.keyname);e.appendChild(i)}))}))}))})),e.appendChild(n),e},t.prototype._createBookmarkItem=function(t,e){var n=this;void 0===e&&(e="name");var i=document.createElement("div");i.className="tree-container__item bookmark";var a=document.createElement("div");return a.innerHTML=t.fields[e],a.onclick=function(){var e=new P.GeoJSON(t.geom);n.ngwMap.mapAdapter.map.fitBounds(e.getBounds())},i.appendChild(a),i},t}(),O=function(){return(O=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},T={target:"tree"},F=function(){function t(t,e){if(this.actionMap=t,this.options=O(O({},T),e),"string"==typeof this.options.target){var n=document.getElementById(this.options.target);if(!n)throw new Error("No element with ID #"+this.options.target+" in document for webmap tree");this._target=n}else this.options.target instanceof HTMLElement&&(this._target=this.options.target);this.sidebar=new(v())(this._target,{closeButton:!1,position:"left",autoPan:!1}),this.sidebar.addTo(this.actionMap.ngwMap.mapAdapter.map),this.ngwLayers=this.options.ngwLayers,this._container=this._createContainer(),this.options.status||this.hide(),this._target.appendChild(this._container)}return t.prototype.show=function(){this._container.classList.remove("hidden"),this.sidebar.show()},t.prototype.hide=function(){this.sidebar.hide(),this._container.classList.add("hidden")},t.prototype._createContainer=function(){var t=this,e=document.createElement("div");return e.className="tree-container",void 0!==this.options.width&&(e.style.width=this.options.width+"px"),this.options.userFires&&new y({title:"Пожары",content:function(){return t._createUserFiresContainer()},parent:e}),this.options.fires&&new y({title:"Термоточки (FIRMS)",content:function(){return t._createFiresContainer()},parent:e}),new y({title:"Базовые слои",content:function(){return t._createNgwLayers()},open:!1,parent:e}),new y({title:"Подложки",content:function(){return t._createBasemapsContainer()},open:!1,parent:e}),new y({title:"Закладки",content:function(){return t._createBookmarksContainer()},open:!1,parent:e}),e},t.prototype._createNgwLayers=function(){var t=document.createElement("div");for(var e in t.className="webmap-tree-container",this.ngwLayers){var n=this.ngwLayers[e],i=new w(n.layer.layer).getContainer();i&&t.appendChild(i)}return t},t.prototype._createBookmarksContainer=function(){var t=document.createElement("div"),e=this.options.bookmarks;if(e){var n=new x({bookmarks:e,ngwMap:this.options.ngwMap});t.appendChild(n.getContainer())}return t},t.prototype._createUserFiresContainer=function(){var t=document.createElement("div"),e=[this.options.userFires];if(e){var n=new M({fires:e,ngwMap:this.options.ngwMap});t.appendChild(n.getContainer())}return t},t.prototype._createFiresContainer=function(){var t=document.createElement("div"),e=this.options.fires;if(e){var n=new L({fires:e,ngwMap:this.options.ngwMap});t.appendChild(n.getContainer())}return t},t.prototype._createBasemapsContainer=function(){var t=document.createElement("div");if(this.options.fires){var e=new E({ngwMap:this.options.ngwMap});t.appendChild(e.getContainer())}return t},t}(),B=n(17187),D=function(){function t(t,e){var n=this;this.actionMap=t,this.html='<i class="fas fa-map-pin btn-control-icon "></i>',this.title={off:"Полученить координаты с карты",on:"Выключить режим получения координат с карты"},this.addClass="toggle-control webmap-tree-control",this.addClassOn="active",this.status=!1,this.emitter=new B.EventEmitter,this._toggle=e.toggle,this.actionMap.ngwMap.addLayer("GEOJSON",{id:"show-coordinate-click",visibility:!0,paint:{radius:6},popup:!0,popupOptions:{createPopupContent:function(t){return n._createPopupContent(t.feature.geometry.coordinates.map((function(t){return t.toFixed(5)})))}}}).then((function(t){t&&(n._layer=t)}))}return t.prototype.onClick=function(t){this.toggleControl(t)},t.prototype.show=function(){var t=this;this.actionMap.ngwMap.setCursor("crosshair"),this._removeClickListener(),this.__onMapClick=function(e){return t._onMapClick(e)},this.actionMap.ngwMap.emitter.on("click",this.__onMapClick)},t.prototype.hide=function(){this.actionMap.ngwMap.setCursor("default"),this._removeClickListener(),this.actionMap.ngwMap.clearLayerData(this._layer)},t.prototype._removeClickListener=function(){this.__onMapClick&&(this.actionMap.ngwMap.emitter.off("click",this.__onMapClick),this.__onMapClick=null)},t.prototype._onMapClick=function(t){var e={type:"Feature",properties:{},geometry:{type:"Point",coordinates:[t.latLng.lng,t.latLng.lat]}};this.actionMap.ngwMap.setLayerData(this._layer,e)},t.prototype.toggleControl=function(t){(t=void 0!==t?t:!this.status)?this.show():this.hide(),this.status=t,this._toggle&&this._toggle(t),this.emitter.emit("status",this.status)},t.prototype._createPopupContent=function(t){var e=t[0],n=t[1],a=document.createElement("div"),o=n+", "+e;return a.innerHTML='\n    <span>Широта/Долгота:</span>\n    <span class="lat-lng-coord"> '+o+'</span>\n    <a href="#" class="copy-to-clipboard">\n    <i class="far fa-clipboard"></i>\n    </a>',a.getElementsByClassName("copy-to-clipboard")[0].onclick=function(){i.TU.copy(o)},a},t}();const H={en:{linearMeasurement:"Distance measurement",areaMeasurement:"Area measurement",start:"Start",meter:"m",kilometer:"km",squareMeter:"m²",squareKilometers:"km²"},ru:{linearMeasurement:"Измерение расстояния",areaMeasurement:"Измерение площади",start:"Старт",meter:"м",kilometer:"км",squareMeter:"м²",squareKilometers:"км²"}},I=N().Control.extend({options:{position:"topright",title:"Measurement",collapsed:!0,color:"#FF0080",locale:"en",messages:H.en},initialize:function(t){if(N().Util.setOptions(this,t),"en"!==t.locale){const e=H[t.locale];e?this.options.messages={...H,...e}:console.error("Measure control has no messages for "+this.options.locale+" locale")}},onAdd:function(t){return this._map=t,this._container||this._initLayout(),this._container},disableMeasure:function(){this._measureHandler&&(this._measureHandler.disable(),this._measureHandler=void 0)},_buildContainer:function(){this._container=N().DomUtil.create("div","leaflet-control-measure leaflet-bar leaflet-control"),this._contents=N().DomUtil.create("div","leaflet-measure-contents",this._container),this._link=N().DomUtil.create("a","leaflet-measure-toggle",this._container),this._link.title=this.options.title||"Measurement",this._link.href="#",this._buildItems()},_buildItems:function(){var t=N().DomUtil.create("ul","leaflet-measure-actions",this._contents),e=N().DomUtil.create("li","leaflet-measure-action",t),n=N().DomUtil.create("a","start",e);n.innerText=this.options.messages.linearMeasurement,n.href="#",N().DomEvent.disableClickPropagation(n),N().DomEvent.on(n,"click",this._enableMeasureLine,this),e=N().DomUtil.create("li","leaflet-measure-action",t);var i=N().DomUtil.create("a","leaflet-measure-action start",e);i.innerText=this.options.messages.areaMeasurement,i.href="#",N().DomEvent.disableClickPropagation(i),N().DomEvent.on(i,"click",this._enableMeasureArea,this)},_initLayout:function(){this._buildContainer(),N().DomEvent.disableClickPropagation(this._container),N().DomEvent.disableScrollPropagation(this._container),this.options.collapsed?N().DomEvent.on(this._container,{mouseenter:this._expand,mouseleave:this._collapse},this):this._expand()},_enableMeasureLine:function(t){N().DomEvent.stopPropagation(t),this.disableMeasure(),this._measureHandler=new S(this._map,{model:"distance",color:this.options.color,messages:this.options.messages}),this._measureHandler.enable()},_enableMeasureArea:function(t){N().DomEvent.stopPropagation(t),this.disableMeasure(),this._measureHandler=new S(this._map,{model:"area",color:this.options.color,messages:this.options.messages}),this._measureHandler.enable()},_expand:function(){return this._link.style.display="none",N().DomUtil.addClass(this._container,"leaflet-measure-expanded"),this},_collapse:function(){return this._link.style.display="block",N().DomUtil.removeClass(this._container,"leaflet-measure-expanded"),this}});N().MeasureLable=N().Layer.extend({options:{offset:new(N().Point)(0,30),latlng:null,content:"",className:""},initialize:function(t){N().Util.setOptions(this,t)},onAdd:function(t){this._map=t,this._container||this._initLayout(),t._panes.popupPane.appendChild(this._container),t.on("viewreset",this._updatePosition,this),N().Browser.any3d&&t.on("zoomanim",this._zoomAnimation,this),this._update()},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){t._panes.popupPane.removeChild(this._container),t.off({viewreset:this._updatePosition,zoomanim:this._zoomAnimation},this),this._map=null},setLatLng:function(t){return this.options.latlng=N().latLng(t),this._updatePosition(),this},setContent:function(t){return this.options.content=t,this._updateContent(),this},_initLayout:function(){this._container=N().DomUtil.create("div",this.options.className),this._contentNode=N().DomUtil.create("div","content",this._container)},_update:function(){this._map&&(this._updateContent(),this._updatePosition())},_updateContent:function(){this.options.content&&("string"==typeof this.options.content?this._contentNode.innerHTML=this.options.content:(this._contentNode.innerHTML="",this._contentNode.appendChild(this.options.content)))},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this.options.latlng),e=N().Browser.any3d,n=this.options.offset;e&&N().DomUtil.setPosition(this._container,t),this._containerBottom=-n.y-(e?0:t.y),this._containerLeft=n.x+(e?0:t.x),this._container.style.bottom=this._containerBottom+"px",this._container.style.left=this._containerLeft+"px"},_zoomAnimation:function(t){t=this._map._latLngToNewLayerPoint(this.options.latlng,t.zoom,t.center),N().DomUtil.setPosition(this._container,t)},enableClose:function(){return this._closeButton=N().DomUtil.create("span","close",this._container),this._closeButton.innerHTML='<svg class="icon" viewBox="0 0 40 40"><path stroke="#FF0000" stroke-width="3" d="M 10,10 L 30,30 M 30,10 L 10,30" /></svg>',this._closeButton}});const S=N().Handler.extend({options:{color:"#FF0080",model:"distance",messages:H.en},initialize:function(t,e){this._map=t,this._map._measureHandler=this,this._finished=!1,N().Util.setOptions(this,e)},setModel:function(t){return this.options.model=t,this},addHooks:function(){this._activeMeasure()},removeHooks:function(){this._disableMeasure()},_activeMeasure:function(){this._map._measureHandler._measurementStarted&&this._map._measureHandler._finishMeasure(),this._measurementStarted?this._finishMeasure():this._enableMeasure()},_onMouseClick:function(t){var e=t.latlng||this._map.mouseEventToLatLng(t);if(!this._lastPoint||!e.equals(this._lastPoint)){if(this._trail.points.length>0){var n=this._trail.points;n.push(e);var i=n.length;this._totalDistance+=this._getDistance(n[i-2],n[i-1]),this._addMeasurePoint(e),this._addMarker(e),"area"!==this.options.model&&this._addLable(e,this._getDistanceString(this._totalDistance),"leaflet-measure-lable")}else this._totalDistance=0,this._addMeasurePoint(e),this._addMarker(e),"area"!==this.options.model&&this._addLable(e,this.options.messages.start,"leaflet-measure-lable"),this._trail.points.push(e);this._lastPoint=e,this._startMove=!1}},_onMouseMove:function(t){var e=t.latlng;this._trail.points.length>0&&(this._startMove?this._directPath.setLatLngs(this._trail.points.concat(e)):(this._directPath.setLatLngs([e]),this._startMove=!0))},_enableMeasure:function(){this._trail={overlays:[],points:[]};var t=this._map;N().DomUtil.addClass(t._container,"leaflet-measure-map"),t.contextMenu&&t.contextMenu.disable(),this._measurementStarted=!0,t.on("click",this._onMouseClick,this),t.on("dblclick contextmenu",this._finishMeasure,this),t.doubleClickZoom.disable(),t.on("mousemove",this._onMouseMove,this),t.fire("measure:start")},_disableMeasure:function(){var t=this._map;N().DomUtil.removeClass(t.getContainer(),"leaflet-measure-map"),t.contextMenu&&t.contextMenu.enable(),t.off("click",this._onMouseClick,this),t.off("dblclick contextmenu",this._finishMeasure,this),t.off("mousemove",this._onMouseMove,this),t.doubleClickZoom.enable(),this._measurementStarted=this._startMove=!1,this._finished||this._clearOverlay.call(this),t.fire("measure:stop")},_finishMeasure:function(t){this._trail.points.length>0&&(this._trail.points.length>1?(t&&"contextmenu"!==t.type||this._directPath.setLatLngs(this._trail.points),"area"===this.options.model?this._addLable(this._lastPoint,this._getAreaString(this._trail.points),"leaflet-measure-lable",!0):this._addLable(this._lastPoint,this._getDistanceString(this._totalDistance),"leaflet-measure-lable",!0),this._directPath&&this._map.removeLayer(this._directPath),this._finished=!0):this._clearOverlay.call(this)),this.disable()},_resetDirectPath:function(t){this._directPath?this._directPath.addLatLng(t):("area"===this.options.model?this._directPath=new(N().Polygon)([t],{weight:2,color:this.options.color,dashArray:[5,5],fillOpacity:0,interactive:!1}):this._directPath=new(N().Polyline)([t],{weight:2,color:this.options.color,dashArray:[5,5],interactive:!1}),this._map.addLayer(this._directPath),this._trail.overlays.push(this._directPath))},_addMeasurePoint:function(t){this._measurePath?this._measurePath.addLatLng(t):("area"===this.options.model?this._measurePath=new(N().Polygon)([t],{weight:2,color:this.options.color,fillColor:this.options.color,fillOpacity:.5,interactive:!1}):this._measurePath=new(N().Polyline)([t],{weight:2,color:this.options.color,interactive:!1}),this._map.addLayer(this._measurePath),this._trail.overlays.push(this._measurePath)),this._resetDirectPath(t)},_addMarker:function(t){var e=new(N().CircleMarker)(t,{color:this.options.color,opacity:1,weight:1,fillColor:"#FFFFFF",fill:!0,fillOpacity:1,radius:3,interactive:!1});this._map.addLayer(e),this._trail.overlays.push(e)},_addLable:function(t,e,n,i){var a=new(N().MeasureLable)({latlng:t,content:e,className:n});if(this._map.addLayer(a),this._trail.overlays.push(a),i){var o=a.enableClose();N().DomEvent.on(o,"click",this._clearOverlay,this)}},_clearOverlay:function(){var t,e=0,n=this._trail.overlays;for(t=n.length;e<t;e++)this._map.removeLayer(n[e])},toRadians:function(t){return t*(Math.PI/180)},square:function(t){return Math.pow(t,2)},_getDistanceString:function(t){return t<1e3?this._numberFormat(t,0)+" "+this.options.messages.meter:this._numberFormat(t/1e3,2)+" "+this.options.messages.kilometer},_getDistance:function(t,e){var n=this.toRadians(t.lat),i=this.toRadians(e.lat),a=i-n,o=this.toRadians(e.lng-t.lng),r=this.square(Math.sin(a/2))+Math.cos(n)*Math.cos(i)*this.square(Math.sin(o/2));return 12756274*Math.asin(Math.sqrt(r))},_getAreaString:function(t){var e=Math.round(this._getArea(t));return e<1e6?this._numberFormat(e,0)+" "+this.options.messages.squareMeter:this._numberFormat(e/1e6,2)+" "+this.options.messages.squareKilometers},_getArea:function(t){for(var e=6378137,n=0,i=t.length,a=t[i-1].lng,o=t[i-1].lat,r=0;r<i;r++){var s=t[r].lng,c=t[r].lat;n+=this.toRadians(s-a)*(2+Math.sin(this.toRadians(o))+Math.sin(this.toRadians(c))),a=s,o=c}return Math.abs(n*e*e/2)},_numberFormat:function(t,e=2){var n=t<0?"-":"",i=Math.abs(+t||0),a=parseInt(i.toFixed(e),10)+"",o=a.length>3?a.length%3:0;return[n,o?a.substr(0,o)+",":"",a.substr(o).replace(/(\d{3})(?=\d)/g,"$1,"),e?"."+Math.abs(i-a).toFixed(e).slice(2):""].join("")}});var A=[];function U(t,e){A.push({name:t,stop:e})}function j(t){A.forEach((function(e){e.name!==t&&e.stop()}))}var z=function(){return(z=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},R=function(t,e,n,i){return new(n||(n=Promise))((function(a,o){function r(t){try{c(i.next(t))}catch(t){o(t)}}function s(t){try{c(i.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,s)}c((i=i.apply(t,e||[])).next())}))},q=function(t,e){var n,i,a,o,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=2&o[0]?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,i=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!((a=(a=r.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(6===o[0]&&r.label<a[1]){r.label=a[1],a=o;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(o);break}a[2]&&r.ops.pop(),r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t],i=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},G=function(){function t(t){this.options=t,this._promises={},this.popup=new _(this.ngwMap)}return t.prototype.create=function(t){return R(this,void 0,void 0,(function(){var e,n,i,a=this;return q(this,(function(o){switch(o.label){case 0:return e=z({},t.mapOptions),this.ngwMap=new r.Z8(z({mapAdapter:new l.Z,controls:[],minZoom:4,runtimeParams:[new u.Z]},e)),this.ngwMap.setCursor("default"),this.popup.setNgwMap(this.ngwMap),t.basemaps&&this.ngwMap.onLoad().then((function(){return t.basemaps.forEach((function(t,e){a.ngwMap.addBaseLayer("QMS",z(z({},t),{visibility:0===e}))}))})),this.ngwMap.getPaintFunctions={base:c.q},this.ngwMap.addControl("ZOOM","top-left"),this._createLocateControl(),this.ngwMap.addControl("ATTRIBUTION","bottom-right",{customAttribution:['<a href="https://nextgis.com" target="_blank">©NextGIS</a>']}),s=this.ngwMap,p=new I({locale:"ru"}),s.addControl(p,"top-left"),s.onLoad().then((function(){var t=s.mapAdapter.map;t&&(t.on("measure:start",(function(){j("measure"),s.disableSelection()})),t.on("measure:stop",(function(){s.setCursor("default"),s.enableSelection()}))),U("measure",(function(){p.disableMeasure()}))})),this._createShareControl(),[4,this.ngwMap.getNgwLayers()];case 1:return n=o.sent(),i=[],Object.values(n).forEach((function(t){var e=t.layer.item&&t.layer.item.webmap&&t.layer.item.webmap.bookmark_resource;e&&i.push(e)})),[4,this._addUserFires(t.userFires)];case 2:return o.sent(),[4,this._addFires(t.fires)];case 3:return o.sent(),this._createGetCoordinateControl(),this._addTreeControl({ngwLayers:n,fires:t.fires,userFires:t.userFires,bookmarks:i}),this._addEventsListeners(),[2]}var s,p}))}))},t.prototype._locate=function(){var t=this;this.ngwMap.locate({setView:!1},{locationfound:function(e){var n=e.lngLat;t.ngwMap.setCenter(n)}})},t.prototype._createAuthControl=function(t){return R(this,void 0,void 0,(function(){var e,n,i,a=this;return q(this,(function(o){return e=document.getElementsByClassName("js-auth-btn")[0],n=function(){return!(!a.ngwMap.connector||!a.ngwMap.connector.user)},i=function(){t.logout(),window.location.reload()},e.innerHTML=n()?"Выйти":"Войти",e.style.display="block",e.addEventListener("click",i),[2]}))}))},t.prototype._createShareControl=function(){var t=this,e=document.getElementsByClassName("js-modal")[0],n=document.getElementsByClassName("js-modal-close")[0],i=document.getElementsByClassName("js-share-modal-content")[0],a=document.getElementsByClassName("js-share-input")[0];n.addEventListener("click",(function(){i.innerHTML="",e.classList.remove("is-active")}));var r=this.ngwMap.createButtonControl({html:'<i class="fas fa-share-alt btn-control-icon "></i>',onClick:function(){var n,r;n=location.href,r=t._createShareModalContent(n),a.value=n,i.innerHTML=r,o().update(),e.classList.add("is-active")}});this.ngwMap.addControl(r,"bottom-right")},t.prototype._createGetCoordinateControl=function(){return R(this,void 0,void 0,(function(){var t,e,n=this;return q(this,(function(i){switch(i.label){case 0:return t=new D(this,{toggle:function(t){t?(j("coordinate"),n.ngwMap.disableSelection()):n.ngwMap.enableSelection()}}),[4,this.ngwMap.createToggleControl(t)];case 1:return e=i.sent(),this.ngwMap.addControl(e,"top-left"),U("coordinate",(function(){return e.onClick(!1)})),[2]}}))}))},t.prototype._createLocateControl=function(){var t=this,e=this.ngwMap.createButtonControl({html:'<i class="fas fa-location-arrow btn-control-icon"></i>',title:"Найти меня на карте",onClick:function(){return t._locate()}});this.ngwMap.addControl(e,"top-left")},t.prototype._createShareModalContent=function(t){return'<div class="buttons share-btn js-share-btn" data-url="'+t+'" data-title="" data-desc="">\n      '+[{id:"tw",name:"Twitter",icon:"fab fa-twitter"},{id:"vk",name:"VK",icon:"fab fa-vk"},{id:"fb",name:"Facebook",icon:"fab fa-facebook-square"}].map((function(t){return'<a class="button is-primary" data-id="'+t.id+'">\n                    <span class="icon">\n                        <i class="'+t.icon+'"></i>\n                    </span>\n                    <span>'+t.name+"</span>\n                </a>"})).join("")+"\n    </div>"},t.prototype._addUserFires=function(t,e){return R(this,void 0,void 0,(function(){var n;return q(this,(function(i){return t&&(n=t.adapterOptions.paint,this.ngwMap.addNgwLayer({resource:t,id:t.id,adapterOptions:z({paint:z(z({},n),{stroke:!0,fillOpacity:.6,radius:5}),selectable:!0,selectedPaint:z(z({},n),{stroke:!0,fillOpacity:.9,radius:7})},e)})),[2]}))}))},t.prototype._addFires=function(t){return R(this,void 0,void 0,(function(){var e,n,i;return q(this,(function(a){switch(a.label){case 0:if(!t)return[3,4];e=0,n=t,a.label=1;case 1:return e<n.length?(i=n[e],[4,this._addUserFires(i,{propertiesFilter:[["timestamp","ge",Math.floor(Date.now()/1e3)-3600*Number(this.options.timedelta)]]})]):[3,4];case 2:a.sent(),a.label=3;case 3:return e++,[3,1];case 4:return[2]}}))}))},t.prototype._addTreeControl=function(t){return R(this,void 0,void 0,(function(){var e,n,i,a,o,r=this;return q(this,(function(s){switch(s.label){case 0:return e=document.getElementsByClassName("js-sidebar")[0],n=function(){return e.classList.contains("is-active")},i=function(){return e.classList.add("is-active")},a=function(){return e.classList.remove("is-active")},[4,this.ngwMap.onLoad()];case 1:return s.sent(),this.tree=new F(this,z(z({},t),{ngwMap:this.ngwMap})),o=function(t){(t=void 0!==t?t:n())?(j("tree"),r.tree.show(),i()):(r.tree.hide(),a())},e.addEventListener("click",(function(){o()})),setTimeout((function(){o()}),500),U("tree",(function(){return o(!1)})),[2]}}))}))},t.prototype._clean=function(){this._promises.getFeaturePromise&&this._promises.getFeaturePromise.cancel&&this._promises.getFeaturePromise.cancel(),this.ngwMap.removeLayer("highlight")},t.prototype._highlighNgwLayer=function(t){var e=this;this._clean();var n=(0,s.RP)(t)[0];if(n){var i=n.resourceId;this.ngwMap.fetchIdentifyItem(t,{extensions:["attachment"]}).then((function(t){t.toGeojson().then((function(a){e.ngwMap.addLayer("GEOJSON",{id:"highlight",data:a,visibility:!0,paint:{color:"green",stroke:!0,fillOpacity:"0.8"},selectOnHover:!0,popup:!0,popupOptions:{createPopupContent:function(a){if(a.feature){var o=e.popup.createPopupContent(a.feature,i);return t.extensions.attachment&&t.extensions.attachment.length&&e.popup._addPhotos(o,t.extensions.attachment,n.resourceId,n.featureId),o}}}})}))}))}},t.prototype._addEventsListeners=function(){var t=this;this.ngwMap.emitter.on("click",(function(){t.ngwMap.cancelPromises("identify","select")})),this.ngwMap.emitter.on("ngw:select",(function(e){return t._highlighNgwLayer(e)}))},t}(),Z=(n(93846),function(){return(Z=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)}),K=function(){function t(t){this.options=t,this.actionMap=new G(this.options)}return t.prototype.create=function(t){return e=this,n=void 0,a=function(){return function(t,e){var n,i,a,o,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=2&o[0]?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,i=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!((a=(a=r.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(6===o[0]&&r.label<a[1]){r.label=a[1],a=o;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(o);break}a[2]&&r.ops.pop(),r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t],i=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,(function(e){return this.options=Z(Z({},this.options),t),this.actionMap.create(this.options),[2]}))},new((i=void 0)||(i=Promise))((function(t,o){function r(t){try{c(a.next(t))}catch(t){o(t)}}function s(t){try{c(a.throw(t))}catch(t){o(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i((function(t){t(n)}))).then(r,s)}c((a=a.apply(e,n||[])).next())}));var e,n,i,a},t}(),V={};try{V=n(64752).Z}catch(t){console.warn("Config file is not funded, run with default settings")}new K((0,i.vb)({mapOptions:{target:"map",bounds:[36.59,43.385,49.374,50.214]},timedelta:24},V)).create()}},function(t){"use strict";t.O(0,[702,956,717,443,280,381,971,243,826,886,185,367,547],(function(){return 2732,t(t.s=2732)})),t.O()}]);
//# sourceMappingURL=main-9a8b795aa5ceaac.js.map