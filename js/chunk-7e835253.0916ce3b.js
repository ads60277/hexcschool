(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e835253"],{1799:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.updatePages(t.pages.current_page-1)}}},[t._v("Previous")])]),t._l(t.pages.total_pages,(function(a,s){return e("li",{key:s,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updatePages(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.updatePages(t.pages.current_page+1)}}},[t._v("Next")])])],2)])},i=[],n={props:["pages"],methods:{updatePages:function(t){this.$emit("update",t)}}},c=n,o=e("2877"),r=Object(o["a"])(c,s,i,!1,null,null,null);a["a"]=r.exports},e6dc:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"container mb-4 p-2"},[e("div",{staticClass:"row products d-flex flex-wrap justify-content-between align-items-start my-4 p-2"},t._l(t.filterProducts,(function(a){return e("div",{key:a.id,staticClass:"table col-md-4 col-sm-6 d-flex justify-content-between align-items-center flex-wrap",attrs:{id:"display"}},[e("div",{staticClass:"card my-3 mx-3 trans d-flex shadow-sm rounded",staticStyle:{width:"25rem"},attrs:{"data-id":a.id}},[e("router-link",{attrs:{to:"/product/"+a.id}},[e("div",{staticClass:"imgbox "},[e("img",{staticClass:"card-img-top",attrs:{src:a.imageUrl,alt:""}})])]),e("div",{staticClass:"mt-3 p-2  "},[e("div",{staticClass:"card-text text-center"},[t._v(t._s(a.title))]),e("div",{staticClass:"card-body p-2 d-flex justify-content-center"},[e("div",{staticClass:"price_box d-flex justify-content-center align-items-center"},[e("div",{staticClass:"d-flex justify-content-center align-items-center"},[e("span",{staticClass:"font-weight-bold"},[t._v("$ "+t._s(a.price))])])])])])],1)])})),0),e("div",{staticClass:"col-md-12 d-flex justify-content-center"},[e("pagination",{staticClass:"my-4",attrs:{pages:t.pagination},on:{"emit-pages":t.getProducts}})],1)])],1)},i=[],n=(e("99af"),e("4160"),e("159b"),e("1799")),c={name:"Products",data:function(){return{products:[],isLoading:!1,filterType:"",filterProducts:[],pagination:{},cart:{},uuid:"56ff457f-9ba1-4d05-9358-26f3844d450a"}},components:{Pagination:n["a"]},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0,this.$http.get("".concat("https://course-ec-api.hexschool.io","/api/").concat(this.uuid,"/ec/products?page=").concat(a)).then((function(a){t.isLoading=!1,t.products=a.data.data,t.filterProducts=t.products,t.pagination=a.data.meta.pagination})).catch((function(t){console.log(t)}))},addCart:function(t){var a=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io","/api/").concat(this.uuid,"/ec/shopping"),i={product:t,quantity:e};this.axios.post(s,i).then((function(){a.isLoading=!1,a.$bus.$emit("update-Total"),a.$bus.$emit("Message:push","成功加入購物車","success")})).catch((function(t){var e=t.response.data.errors;console.log("123"),e.forEach((function(t){a.isLoading=!1,a.$bus.$emit("Message:push","加入購物車失敗","".concat(t),"danger")}))}))}},addtrans:function(){document.querySelector(".card").classList.add("trans")}},o=c,r=e("2877"),l=Object(r["a"])(o,s,i,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-7e835253.0916ce3b.js.map