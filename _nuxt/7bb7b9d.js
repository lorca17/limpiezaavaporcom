(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{284:function(t){t.exports=JSON.parse('{"dominio":"limpiezaavapor.com","url":"https://limpiezaavapor.com","branding":"Limpieza A Vapor","id_amazon":"limpiezavapor-21","titulo":"Las mejores maquinas para limpiar a vapor","descripcion":"Buscas una maquina que limpie con vapor?, aqui tenemos las mejores","propietario":"Franciso Jose","keyprincipal":"vapor"}')},337:function(t,e,r){var content=r(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("c766285e",content,!0,{sourceMap:!1})},406:function(t,e,r){"use strict";r(337)},407:function(t,e,r){var o=r(62)(!1);o.push([t.i,"h3[data-v-675a6fbe]{font-size:1rem}a[data-v-675a6fbe]{text-decoration:none;color:#000}",""]),t.exports=o},493:function(t,e,r){"use strict";r.r(e);var o=r(21),n=(r(61),r(15),r(83)),c=r.n(n),l=r(284),d={props:["productosama","num"],data:function(){return{datosama:"",keyama:this.productosama||"tazas de te",dfg:l}},methods:{catalogo:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.get("https://productos."+e.dfg.dominio+"/api/"+t+"?id="+e.dfg.id_amazon);case 2:o=r.sent,e.datosama=o.data.SearchResult.Items.slice(0,e.num);case 4:case"end":return r.stop()}}),r)})))()}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.catalogo(t.keyama);case 1:case"end":return e.stop()}}),e)})))()}},m=(r(406),r(43)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"py-5"},[r("div",{staticClass:"container px-4 px-lg-5 mt-5"},[r("div",{staticClass:"row gx-6 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center"},[r("client-only",{attrs:{placeholder:"Loading..."}},t._l(t.datosama,(function(e,o){return r("div",{key:o,staticClass:"col mb-5"},[r("a",{staticStyle:{},attrs:{href:e.DetailPageURL,rel:"nofollow noopener noreferrer",target:"_blank",alt:"Comprar "+e.ItemInfo.Title.DisplayValue,title:"Caracteristicas de "+e.ItemInfo.Title.DisplayValue}},[r("div",{staticClass:"card h-100"},[r("img",{staticClass:"card-img-top",attrs:{src:e.Images.Primary.Large.URL,alt:"Comprar "+e.ItemInfo.Title.DisplayValue,title:"Ver caracteristicas de "+e.ItemInfo.Title.DisplayValue}}),t._v(" "),r("div",{staticClass:"card-body p-4"},[r("div",{staticClass:"text-center"},[r("p",{staticClass:"fw-bolder"},[t._v("\n                    "+t._s(e.ItemInfo.Title.DisplayValue.slice(0,100))+"\n                  ")]),t._v("\n                  by Amazon\n                ")])]),t._v(" "),r("div",{staticClass:"card-footer p-4 pt-0 border-top-0 bg-transparent"},[r("div",{staticClass:"text-center"},[r("a",{staticClass:"btn btn-outline-dark mt-auto",attrs:{href:e.DetailPageURL}},[t._v("Ver Producto")])])])])])])})),0)],1)])])}),[],!1,null,"675a6fbe",null);e.default=component.exports}}]);