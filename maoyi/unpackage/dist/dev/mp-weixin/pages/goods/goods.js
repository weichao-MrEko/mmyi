(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goods/goods"],{

/***/ 87:
/*!********************************************************************************************!*\
  !*** D:/uni-app/商城模板/商城模板(更新一部分nvue页和subNvue导航栏)/main.js?{"page":"pages%2Fgoods%2Fgoods"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ 1);
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ 14));
var _goods = _interopRequireDefault(__webpack_require__(/*! ./pages/goods/goods.vue */ 88));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_goods.default));

/***/ }),

/***/ 88:
/*!*************************************************************************!*\
  !*** D:/uni-app/商城模板/商城模板(更新一部分nvue页和subNvue导航栏)/pages/goods/goods.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_vue_vue_type_template_id_78e4d2a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods.vue?vue&type=template&id=78e4d2a4& */ 89);
/* harmony import */ var _goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods.vue?vue&type=script&lang=js& */ 91);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goods_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods.vue?vue&type=style&index=0&lang=scss& */ 93);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 9);






/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goods_vue_vue_type_template_id_78e4d2a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goods_vue_vue_type_template_id_78e4d2a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "uni-app/商城模板/商城模板(更新一部分nvue页和subNvue导航栏)/pages/goods/goods.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 89:
/*!********************************************************************************************************!*\
  !*** D:/uni-app/商城模板/商城模板(更新一部分nvue页和subNvue导航栏)/pages/goods/goods.vue?vue&type=template&id=78e4d2a4& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_template_id_78e4d2a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods.vue?vue&type=template&id=78e4d2a4& */ 90);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_template_id_78e4d2a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_template_id_78e4d2a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 90:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/商城模板/商城模板(更新一部分nvue页和subNvue导航栏)/pages/goods/goods.vue?vue&type=template&id=78e4d2a4& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("view", {
      staticClass: "status",
      style: { opacity: _vm.afterHeaderOpacity }
    }),
    _c("view", { staticClass: "header" }, [
      _c(
        "view",
        {
          staticClass: "before",
          style: {
            opacity: 1 - _vm.afterHeaderOpacity,
            zIndex: _vm.beforeHeaderzIndex
          }
        },
        [
          _c("view", { staticClass: "back" }, [
            _vm.showBack
              ? _c("view", {
                  staticClass: "icon xiangqian",
                  attrs: { eventid: "1fe5fc0e-0" },
                  on: { tap: _vm.back }
                })
              : _vm._e()
          ]),
          _c("view", { staticClass: "middle" }),
          _c("view", { staticClass: "icon-btn" })
        ]
      ),
      _c(
        "view",
        {
          staticClass: "after",
          style: {
            opacity: _vm.afterHeaderOpacity,
            zIndex: _vm.afterHeaderzIndex
          }
        },
        [
          _c("view", { staticClass: "back" }, [
            _vm.showBack
              ? _c("view", {
                  staticClass: "icon xiangqian",
                  attrs: { eventid: "1fe5fc0e-1" },
                  on: { tap: _vm.back }
                })
              : _vm._e()
          ]),
          _c(
            "view",
            { staticClass: "middle" },
            _vm._l(_vm.anchorlist, function(anchor, index) {
              return _c(
                "view",
                {
                  key: index,
                  class: [_vm.selectAnchor == index ? "on" : ""],
                  attrs: { eventid: "1fe5fc0e-2-" + index },
                  on: {
                    tap: function($event) {
                      _vm.toAnchor(index)
                    }
                  }
                },
                [_vm._v(_vm._s(anchor.name))]
              )
            })
          ),
          _c("view", { staticClass: "icon-btn" }, [
            _c("view", {
              staticClass: "icon tongzhi",
              attrs: { eventid: "1fe5fc0e-3" },
              on: { tap: _vm.toMsg }
            }),
            _c("view", {
              staticClass: "icon cart",
              attrs: { eventid: "1fe5fc0e-4" },
              on: { tap: _vm.joinCart }
            })
          ])
        ]
      )
    ]),
    _c("view", { staticClass: "footer" }, [
      _c("view", { staticClass: "icons" }, [
        _c(
          "view",
          {
            staticClass: "box",
            attrs: { eventid: "1fe5fc0e-5" },
            on: { tap: _vm.keep }
          },
          [
            _c("view", {
              staticClass: "icon",
              class: [_vm.isKeep ? "shoucangsel" : "shoucang"],
              staticStyle: { "font-size": "40rpx" }
            }),
            _c("view", { staticClass: "text" }, [
              _vm._v(_vm._s(_vm.isKeep ? "已" : "") + "收藏")
            ])
          ]
        )
      ]),
      _c("view", { staticClass: "btn" }, [
        _c(
          "view",
          {
            staticClass: "joinCart",
            attrs: { eventid: "1fe5fc0e-6" },
            on: { tap: _vm.joinCart }
          },
          [_vm._v("联系店铺")]
        ),
        _c(
          "view",
          {
            staticClass: "buy",
            attrs: { eventid: "1fe5fc0e-7" },
            on: { tap: _vm.buy }
          },
          [_vm._v("竞价")]
        )
      ])
    ]),
    _c(
      "view",
      {
        staticClass: "share",
        class: _vm.shareClass,
        attrs: { eventid: "1fe5fc0e-10" },
        on: {
          touchmove: function($event) {
            $event.stopPropagation()
            $event.preventDefault()
            _vm.discard($event)
          },
          tap: _vm.hideShare
        }
      },
      [
        _c("view", { staticClass: "mask" }),
        _c(
          "view",
          {
            staticClass: "layer",
            attrs: { eventid: "1fe5fc0e-9" },
            on: {
              tap: function($event) {
                $event.stopPropagation()
                _vm.discard($event)
              }
            }
          },
          [
            _c("view", { staticClass: "h1" }, [_vm._v("分享")]),
            _vm._m(0),
            _c(
              "view",
              {
                staticClass: "btn",
                attrs: { eventid: "1fe5fc0e-8" },
                on: { tap: _vm.hideShare }
              },
              [_vm._v("取消")]
            )
          ]
        )
      ]
    ),
    _c(
      "view",
      {
        staticClass: "popup service",
        class: _vm.serviceClass,
        attrs: { eventid: "1fe5fc0e-13" },
        on: {
          touchmove: function($event) {
            $event.stopPropagation()
            $event.preventDefault()
            _vm.discard($event)
          },
          tap: _vm.hideService
        }
      },
      [
        _c("view", { staticClass: "mask" }),
        _c(
          "view",
          {
            staticClass: "layer",
            attrs: { eventid: "1fe5fc0e-12" },
            on: {
              tap: function($event) {
                $event.stopPropagation()
                _vm.discard($event)
              }
            }
          },
          [
            _c(
              "view",
              { staticClass: "content" },
              _vm._l(_vm.goodsData.service, function(item, index) {
                return _c("view", { key: index, staticClass: "row" }, [
                  _c("view", { staticClass: "title" }, [
                    _vm._v(_vm._s(item.name))
                  ]),
                  _c("view", { staticClass: "description" }, [
                    _vm._v(_vm._s(item.description))
                  ])
                ])
              })
            ),
            _c("view", { staticClass: "btn" }, [
              _c(
                "view",
                {
                  staticClass: "button",
                  attrs: { eventid: "1fe5fc0e-11" },
                  on: { tap: _vm.hideService }
                },
                [_vm._v("完成")]
              )
            ])
          ]
        )
      ]
    ),
    _c(
      "view",
      {
        staticClass: "popup spec",
        class: _vm.specClass,
        attrs: { eventid: "1fe5fc0e-16" },
        on: {
          touchmove: function($event) {
            $event.stopPropagation()
            $event.preventDefault()
            _vm.discard($event)
          },
          tap: _vm.hideSpec
        }
      },
      [
        _c("view", { staticClass: "mask" }),
        _c(
          "view",
          {
            staticClass: "layer",
            attrs: { eventid: "1fe5fc0e-15" },
            on: {
              tap: function($event) {
                $event.stopPropagation()
                _vm.discard($event)
              }
            }
          },
          [
            _c("view", { staticClass: "content" }, [
              _c("view", { staticClass: "popup_title" }, [
                _c("view", { staticClass: "top_name" }, [_vm._v("联系商铺")]),
                _c(
                  "view",
                  {
                    staticClass: "close",
                    attrs: { eventid: "1fe5fc0e-14" },
                    on: { tap: _vm.hideSpec }
                  },
                  [_vm._v("x")]
                )
              ]),
              _vm._m(1),
              _vm._m(2),
              _vm._m(3),
              _c("view", { staticClass: "phone" }, [_vm._v("打电话")]),
              _c("view", { staticClass: "message" }, [_vm._v("发消息")])
            ])
          ]
        )
      ]
    ),
    _c(
      "view",
      { staticClass: "swiper-box" },
      [
        _c(
          "swiper",
          {
            attrs: {
              circular: "true",
              autoplay: "true",
              eventid: "1fe5fc0e-17"
            },
            on: { change: _vm.swiperChange }
          },
          _vm._l(_vm.swiperList, function(swiper, index0) {
            return _c(
              "swiper-item",
              { key: swiper.id, attrs: { mpcomid: "1fe5fc0e-0-" + index0 } },
              [_c("image", { attrs: { src: swiper.img } })]
            )
          })
        ),
        _c("view", { staticClass: "indicator" }, [
          _vm._v(
            _vm._s(_vm.currentSwiper + 1) + "/" + _vm._s(_vm.swiperList.length)
          )
        ])
      ],
      1
    ),
    _c("view", { staticClass: "info-box goods-info" }, [
      _c("view", { staticClass: "title" }, [
        _vm._v(_vm._s(_vm.goodsData.name))
      ]),
      _c("view", { staticClass: "price" }, [
        _vm._v("￥" + _vm._s(_vm.goodsData.price))
      ])
    ]),
    _c("view", { staticClass: "description" }, [
      _c("view", { staticClass: "title" }, [_vm._v("———— 商品详情 ————")]),
      _c(
        "view",
        { staticClass: "content" },
        [
          _c("rich-text", {
            attrs: { nodes: _vm.descriptionStr, mpcomid: "1fe5fc0e-1" }
          })
        ],
        1
      )
    ]),
    _c(
      "view",
      { staticClass: "info-box comments", attrs: { id: "comments" } },
      [
        _c("view", { staticClass: "row" }, [
          _c("view", { staticClass: "text" }, [
            _vm._v("商品评价(" + _vm._s(_vm.goodsData.comment.number) + ")")
          ]),
          _c(
            "view",
            {
              staticClass: "arrow",
              attrs: { eventid: "1fe5fc0e-19" },
              on: { tap: _vm.toRatings }
            },
            [
              _c(
                "view",
                {
                  staticClass: "show",
                  attrs: { eventid: "1fe5fc0e-18" },
                  on: {
                    tap: function($event) {
                      _vm.showComments(_vm.goodsData.id)
                    }
                  }
                },
                [
                  _vm._v("查看全部"),
                  _c("view", { staticClass: "icon xiangyou" })
                ]
              )
            ]
          )
        ]),
        _c(
          "view",
          {
            staticClass: "comment",
            attrs: { eventid: "1fe5fc0e-20" },
            on: { tap: _vm.toRatings }
          },
          [
            _c("view", { staticClass: "user-info" }, [
              _c("view", { staticClass: "face" }, [
                _c("image", { attrs: { src: _vm.goodsData.comment.userface } })
              ]),
              _c("view", { staticClass: "username" }, [
                _vm._v(_vm._s(_vm.goodsData.comment.username))
              ])
            ]),
            _c("view", { staticClass: "content" }, [
              _vm._v(_vm._s(_vm.goodsData.comment.content))
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "list" }, [
      _c("view", { staticClass: "box" }, [
        _c("image", { attrs: { src: "../../static/img/share/wx.png" } }),
        _c("view", { staticClass: "title" }, [_vm._v("微信好友")])
      ]),
      _c("view", { staticClass: "box" }, [
        _c("image", { attrs: { src: "../../static/img/share/pyq.png" } }),
        _c("view", { staticClass: "title" }, [_vm._v("朋友圈")])
      ]),
      _c("view", { staticClass: "box" }, [
        _c("image", { attrs: { src: "../../static/img/share/wb.png" } }),
        _c("view", { staticClass: "title" }, [_vm._v("新浪微博")])
      ]),
      _c("view", { staticClass: "box" }, [
        _c("image", { attrs: { src: "../../static/img/share/qq.png" } }),
        _c("view", { staticClass: "title" }, [_vm._v("QQ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "list_contact" }, [
      _c("view", { staticClass: "img_list" }, [
        _c("image", { attrs: { src: "/static/img/share/wx.png", mode: "" } })
      ]),
      _c("view", { staticClass: "list_text" }, [_vm._v("152525235")]),
      _c("view", { staticClass: "copy" }, [_vm._v("复制")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "list_contact" }, [
      _c("view", { staticClass: "img_list" }, [
        _c("image", { attrs: { src: "/static/img/share/qq.png", mode: "" } })
      ]),
      _c("view", { staticClass: "list_text" }, [_vm._v("152525235")]),
      _c("view", { staticClass: "copy" }, [_vm._v("复制")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "list_contact" }, [
      _c("view", { staticClass: "img_list" }, [
        _c("image", { attrs: { src: "/static/img/share/mail.png", mode: "" } })
      ]),
      _c("view", { staticClass: "list_text" }, [_vm._v("152525235")]),
      _c("view", { staticClass: "copy" }, [_vm._v("复制")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ 91:
/*!**************************************************************************************************!*\
  !*** D:/uni-app/商城模板/商城模板(更新一部分nvue页和subNvue导航栏)/pages/goods/goods.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods.vue?vue&type=script&lang=js& */ 92);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 92:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/商城模板/商城模板(更新一部分nvue页和subNvue导航栏)/pages/goods/goods.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =


























































































































































































































{
  data: function data() {
    return {
      //控制渐变标题栏的参数
      beforeHeaderzIndex: 11, //层级
      afterHeaderzIndex: 10, //层级
      beforeHeaderOpacity: 1, //不透明度
      afterHeaderOpacity: 0, //不透明度
      //是否显示返回按钮



      //轮播主图数据
      swiperList: [
      { id: 1, img: 'https://ae01.alicdn.com/kf/HTB1Mj7iTmzqK1RjSZFjq6zlCFXaP.jpg' },
      { id: 2, img: 'https://ae01.alicdn.com/kf/HTB1fbseTmzqK1RjSZFLq6An2XXaL.jpg' },
      { id: 3, img: 'https://ae01.alicdn.com/kf/HTB1dPUMThnaK1RjSZFtq6zC2VXa0.jpg' },
      { id: 4, img: 'https://ae01.alicdn.com/kf/HTB1OHZrTXzqK1RjSZFvq6AB7VXaw.jpg' }],

      //轮播图下标
      currentSwiper: 0,
      anchorlist: [], //导航条锚点
      selectAnchor: 0, //选中锚点
      serviceClass: '', //服务弹窗css类，控制开关动画
      specClass: '', //规格弹窗css类，控制开关动画
      shareClass: '', //分享弹窗css类，控制开关动画
      // 商品信息
      goodsData: {
        id: 1,
        name: "商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",
        price: "127.00",
        number: 1,
        service: [
        { name: "正品保证", description: "此商品官方保证为正品" },
        { name: "极速退款", description: "此商品享受退货极速退款服务" },
        { name: "7天退换", description: "此商品享受7天无理由退换服务" }],

        spec: ["XS", "S", "M", "L", "XL", "XXL"],
        comment: {
          number: 102,
          userface: '../../static/img/face.jpg',
          username: '大黑哥',
          content: '很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！' } },


      selectSpec: null, //选中规格
      isKeep: false, //收藏
      //商品描述html
      descriptionStr: '<div style="text-align:center;"><img width="100%" src="https://ae01.alicdn.com/kf/HTB1t0fUl_Zmx1VjSZFGq6yx2XXa5.jpg"/><img width="100%" src="https://ae01.alicdn.com/kf/HTB1LzkjThTpK1RjSZFKq6y2wXXaT.jpg"/><img width="100%" src="https://ae01.alicdn.com/kf/HTB18dkiTbvpK1RjSZPiq6zmwXXa8.jpg"/></div>' };

  },
  onLoad: function onLoad(option) {

    //小程序隐藏返回按钮
    this.showBack = false;

    //option为object类型，会序列化上个页面传递的参数
    console.log(option.cid); //打印出上个页面传递的参数。
  },
  onReady: function onReady() {
    this.calcAnchor(); //计算锚点高度，页面数据是ajax加载时，请把此行放在数据渲染完成事件中执行以保证高度计算正确
  },
  onPageScroll: function onPageScroll(e) {
    //锚点切换
    this.selectAnchor = e.scrollTop >= this.anchorlist[2].top ? 2 : e.scrollTop >= this.anchorlist[1].top ? 1 : 0;
    //导航栏渐变
    var tmpY = 375;
    e.scrollTop = e.scrollTop > tmpY ? 375 : e.scrollTop;
    this.afterHeaderOpacity = e.scrollTop * (1 / tmpY);
    this.beforeHeaderOpacity = 1 - this.afterHeaderOpacity;
    //切换层级
    this.beforeHeaderzIndex = e.scrollTop > 0 ? 10 : 11;
    this.afterHeaderzIndex = e.scrollTop > 0 ? 11 : 10;
  },
  //上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
  onReachBottom: function onReachBottom() {
    uni.showToast({ title: '触发上拉加载' });
  },
  mounted: function mounted() {

  },
  methods: {
    //轮播图指示器
    swiperChange: function swiperChange(event) {
      this.currentSwiper = event.detail.current;
    },
    //消息列表
    toMsg: function toMsg() {
      uni.navigateTo({
        url: '../msg/msg' });

    },
    // 客服
    toChat: function toChat() {
      uni.navigateTo({
        url: "../msg/chat/chat?name=客服008" });

    },
    // 分享
    share: function share() {
      this.shareClass = 'show';
    },
    hideShare: function hideShare() {var _this = this;
      this.shareClass = 'hide';
      setTimeout(function () {
        _this.shareClass = 'none';
      }, 150);
    },
    //收藏
    keep: function keep() {
      this.isKeep = this.isKeep ? false : true;
    },
    // 加入购物车
    joinCart: function joinCart() {
      if (this.selectSpec == null) {
        return this.showSpec(function () {
          uni.showToast({ title: "已加入购物车" });
        });
      }
      uni.showToast({ title: "已加入购物车" });
    },
    //立即购买
    buy: function buy() {
      // if(this.selectSpec==null){
      // 	return this.showSpec(()=>{
      // 		this.toConfirmation();
      // 	});
      // }
      this.toConfirmation();
    },
    //商品评论
    toRatings: function toRatings() {
      uni.navigateTo({
        url: 'ratings/ratings' });

    },
    //跳转确认订单页面
    toConfirmation: function toConfirmation() {
      var tmpList = [];
      var goods = { id: this.goodsData.id, img: '../../static/img/goods/p1.jpg', name: this.goodsData.name, spec: '规格:' + this.goodsData.spec[this.selectSpec], price: this.goodsData.price, number: this.goodsData.number };
      tmpList.push(goods);
      uni.setStorage({
        key: 'buylist',
        data: tmpList,
        success: function success() {
          uni.navigateTo({
            url: '../order/bidding' });

        } });

    },
    //跳转评论列表
    showComments: function showComments(goodsid) {

    },
    //选择规格
    setSelectSpec: function setSelectSpec(index) {
      this.selectSpec = index;
    },
    //减少数量
    sub: function sub() {
      if (this.goodsData.number <= 1) {
        return;
      }
      this.goodsData.number--;
    },
    //增加数量
    add: function add() {
      this.goodsData.number++;
    },
    //跳转锚点
    toAnchor: function toAnchor(index) {
      this.selectAnchor = index;
      uni.pageScrollTo({ scrollTop: this.anchorlist[index].top, duration: 200 });
    },
    //计算锚点高度
    calcAnchor: function calcAnchor() {var _this2 = this;
      this.anchorlist = [
      { name: '主图', top: 0 },
      { name: '详情', top: 0 },
      { name: '评价', top: 0 }];


      var commentsView = uni.createSelectorQuery().select("#comments");
      console.log(commentsView);
      commentsView.boundingClientRect(function (data) {
        var statusbarHeight = 0;
        console.log(data);
        //APP内还要计算状态栏高度



        var headerHeight = uni.upx2px(100);
        _this2.anchorlist[1].top = data.top - headerHeight - statusbarHeight;
        _this2.anchorlist[2].top = data.bottom - headerHeight - statusbarHeight;

      }).exec();
    },
    //返回上一页
    back: function back() {
      uni.navigateBack();
    },
    //服务弹窗
    showService: function showService() {
      console.log('show');
      this.serviceClass = 'show';
    },
    //关闭服务弹窗
    hideService: function hideService() {var _this3 = this;
      this.serviceClass = 'hide';
      setTimeout(function () {
        _this3.serviceClass = 'none';
      }, 200);
    },
    //规格弹窗
    showSpec: function showSpec(fun) {
      console.log('show');
      this.specClass = 'show';
      this.specCallback = fun;
    },
    specCallback: function specCallback() {
      return;
    },
    //关闭规格弹窗
    hideSpec: function hideSpec() {var _this4 = this;
      this.specClass = 'hide';
      //回调

      this.selectSpec && this.specCallback && this.specCallback();
      this.specCallback = false;
      setTimeout(function () {
        _this4.specClass = 'none';
      }, 200);
    },
    discard: function discard() {
      //丢弃
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 11)["default"]))

/***/ }),

/***/ 93:
/*!***********************************************************************************************************!*\
  !*** D:/uni-app/商城模板/商城模板(更新一部分nvue页和subNvue导航栏)/pages/goods/goods.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods.vue?vue&type=style&index=0&lang=scss& */ 94);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 94:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/商城模板/商城模板(更新一部分nvue页和subNvue导航栏)/pages/goods/goods.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[87,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goods/goods.js.map