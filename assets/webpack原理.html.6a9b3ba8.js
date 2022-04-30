import{o as e,a,b as t,F as o,c as r,d as l}from"./app.7d96ffc6.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const i={},p=r('<h1 id="webpack\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#webpack\u539F\u7406" aria-hidden="true">#</a> webpack\u539F\u7406</h1><p>\u5728\u4E86\u89E3 Webpack \u539F\u7406\u524D\uFF0C\u9700\u8981\u638C\u63E1\u4EE5\u4E0B\u51E0\u4E2A\u6838\u5FC3\u6982\u5FF5\uFF0C\u4EE5\u65B9\u4FBF\u540E\u9762\u7684\u7406\u89E3\uFF1A</p><ul><li><strong>Entry</strong>\uFF1A\u5165\u53E3\uFF0CWebpack \u6267\u884C\u6784\u5EFA\u7684\u7B2C\u4E00\u6B65\u5C06\u4ECE Entry \u5F00\u59CB\uFF0C\u53EF\u62BD\u8C61\u6210\u8F93\u5165\u3002</li><li><strong>Module</strong>\uFF1A\u6A21\u5757\uFF0C\u5728 Webpack \u91CC\u4E00\u5207\u7686\u6A21\u5757\uFF0C\u4E00\u4E2A\u6A21\u5757\u5BF9\u5E94\u7740\u4E00\u4E2A\u6587\u4EF6\u3002Webpack \u4F1A\u4ECE\u914D\u7F6E\u7684 Entry \u5F00\u59CB\u9012\u5F52\u627E\u51FA\u6240\u6709\u4F9D\u8D56\u7684\u6A21\u5757\u3002</li><li><strong>Chunk</strong>\uFF1A\u4EE3\u7801\u5757\uFF0C\u4E00\u4E2A Chunk \u7531\u591A\u4E2A\u6A21\u5757\u7EC4\u5408\u800C\u6210\uFF0C\u7528\u4E8E\u4EE3\u7801\u5408\u5E76\u4E0E\u5206\u5272\u3002</li><li><strong>Loader</strong>\uFF1A\u6A21\u5757\u8F6C\u6362\u5668\uFF0C\u7528\u4E8E\u628A\u6A21\u5757\u539F\u5185\u5BB9\u6309\u7167\u9700\u6C42\u8F6C\u6362\u6210\u65B0\u5185\u5BB9\u3002</li><li><strong>Plugin</strong>\uFF1A\u6269\u5C55\u63D2\u4EF6\uFF0C\u5728 Webpack \u6784\u5EFA\u6D41\u7A0B\u4E2D\u7684\u7279\u5B9A\u65F6\u673A\u4F1A\u5E7F\u64AD\u51FA\u5BF9\u5E94\u7684\u4E8B\u4EF6\uFF0C\u63D2\u4EF6\u53EF\u4EE5\u76D1\u542C\u8FD9\u4E9B\u4E8B\u4EF6\u7684\u53D1\u751F\uFF0C\u5728\u7279\u5B9A\u65F6\u673A\u505A\u5BF9\u5E94\u7684\u4E8B\u60C5\u3002 <a name="PaTnf"></a></li></ul><h2 id="\u6D41\u7A0B\u6982\u62EC" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u6982\u62EC" aria-hidden="true">#</a> \u6D41\u7A0B\u6982\u62EC</h2><p>Webpack \u7684\u8FD0\u884C\u6D41\u7A0B\u662F\u4E00\u4E2A\u4E32\u884C\u7684\u8FC7\u7A0B\uFF0C\u4ECE\u542F\u52A8\u5230\u7ED3\u675F\u4F1A\u4F9D\u6B21\u6267\u884C\u4EE5\u4E0B\u6D41\u7A0B\uFF1A</p><ol><li>\u521D\u59CB\u5316\u53C2\u6570\uFF1A\u4ECE\u914D\u7F6E\u6587\u4EF6\u548C Shell \u8BED\u53E5\u4E2D\u8BFB\u53D6\u4E0E\u5408\u5E76\u53C2\u6570\uFF0C\u5F97\u51FA\u6700\u7EC8\u7684\u53C2\u6570\uFF1B</li><li>\u5F00\u59CB\u7F16\u8BD1\uFF1A\u7528\u4E0A\u4E00\u6B65\u5F97\u5230\u7684\u53C2\u6570\u521D\u59CB\u5316 Compiler \u5BF9\u8C61\uFF0C\u52A0\u8F7D\u6240\u6709\u914D\u7F6E\u7684\u63D2\u4EF6\uFF0C\u6267\u884C\u5BF9\u8C61\u7684 run \u65B9\u6CD5\u5F00\u59CB\u6267\u884C\u7F16\u8BD1\uFF1B</li><li>\u786E\u5B9A\u5165\u53E3\uFF1A\u6839\u636E\u914D\u7F6E\u4E2D\u7684 entry \u627E\u51FA\u6240\u6709\u7684\u5165\u53E3\u6587\u4EF6\uFF1B</li><li>\u7F16\u8BD1\u6A21\u5757\uFF1A\u4ECE\u5165\u53E3\u6587\u4EF6\u51FA\u53D1\uFF0C\u8C03\u7528\u6240\u6709\u914D\u7F6E\u7684 Loader \u5BF9\u6A21\u5757\u8FDB\u884C\u7FFB\u8BD1\uFF0C\u518D\u627E\u51FA\u8BE5\u6A21\u5757\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u518D\u9012\u5F52\u672C\u6B65\u9AA4\u76F4\u5230\u6240\u6709\u5165\u53E3\u4F9D\u8D56\u7684\u6587\u4EF6\u90FD\u7ECF\u8FC7\u4E86\u672C\u6B65\u9AA4\u7684\u5904\u7406\uFF1B</li><li>\u5B8C\u6210\u6A21\u5757\u7F16\u8BD1\uFF1A\u5728\u7ECF\u8FC7\u7B2C4\u6B65\u4F7F\u7528 Loader \u7FFB\u8BD1\u5B8C\u6240\u6709\u6A21\u5757\u540E\uFF0C\u5F97\u5230\u4E86\u6BCF\u4E2A\u6A21\u5757\u88AB\u7FFB\u8BD1\u540E\u7684\u6700\u7EC8\u5185\u5BB9\u4EE5\u53CA\u5B83\u4EEC\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF1B</li><li>\u8F93\u51FA\u8D44\u6E90\uFF1A\u6839\u636E\u5165\u53E3\u548C\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7EC4\u88C5\u6210\u4E00\u4E2A\u4E2A\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684 Chunk\uFF0C\u518D\u628A\u6BCF\u4E2A Chunk \u8F6C\u6362\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u52A0\u5165\u5230\u8F93\u51FA\u5217\u8868\uFF0C\u8FD9\u6B65\u662F\u53EF\u4EE5\u4FEE\u6539\u8F93\u51FA\u5185\u5BB9\u7684\u6700\u540E\u673A\u4F1A\uFF1B</li><li>\u8F93\u51FA\u5B8C\u6210\uFF1A\u5728\u786E\u5B9A\u597D\u8F93\u51FA\u5185\u5BB9\u540E\uFF0C\u6839\u636E\u914D\u7F6E\u786E\u5B9A\u8F93\u51FA\u7684\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\uFF0C\u628A\u6587\u4EF6\u5185\u5BB9\u5199\u5165\u5230\u6587\u4EF6\u7CFB\u7EDF\u3002</li></ol><p>\u5728\u4EE5\u4E0A\u8FC7\u7A0B\u4E2D\uFF0CWebpack \u4F1A\u5728\u7279\u5B9A\u7684\u65F6\u95F4\u70B9\u5E7F\u64AD\u51FA\u7279\u5B9A\u7684\u4E8B\u4EF6\uFF0C\u63D2\u4EF6\u5728\u76D1\u542C\u5230\u611F\u5174\u8DA3\u7684\u4E8B\u4EF6\u540E\u4F1A\u6267\u884C\u7279\u5B9A\u7684\u903B\u8F91\uFF0C\u5E76\u4E14\u63D2\u4EF6\u53EF\u4EE5\u8C03\u7528 Webpack \u63D0\u4F9B\u7684 API \u6539\u53D8 Webpack \u7684\u8FD0\u884C\u7ED3\u679C\u3002</p><p>Webpack \u7684\u6784\u5EFA\u6D41\u7A0B\u53EF\u4EE5\u5206\u4E3A\u4EE5\u4E0B\u4E09\u5927\u9636\u6BB5\uFF1A</p><ol><li>\u521D\u59CB\u5316\uFF1A\u542F\u52A8\u6784\u5EFA\uFF0C\u8BFB\u53D6\u4E0E\u5408\u5E76\u914D\u7F6E\u53C2\u6570\uFF0C\u52A0\u8F7D Plugin\uFF0C\u5B9E\u4F8B\u5316 Compiler\u3002</li><li>\u7F16\u8BD1\uFF1A\u4ECE Entry \u53D1\u51FA\uFF0C\u9488\u5BF9\u6BCF\u4E2A Module \u4E32\u884C\u8C03\u7528\u5BF9\u5E94\u7684 Loader \u53BB\u7FFB\u8BD1\u6587\u4EF6\u5185\u5BB9\uFF0C\u518D\u627E\u5230\u8BE5 Module \u4F9D\u8D56\u7684 Module\uFF0C\u9012\u5F52\u5730\u8FDB\u884C\u7F16\u8BD1\u5904\u7406\u3002</li><li>\u8F93\u51FA\uFF1A\u5BF9\u7F16\u8BD1\u540E\u7684 Module \u7EC4\u5408\u6210 Chunk\uFF0C\u628A Chunk \u8F6C\u6362\u6210\u6587\u4EF6\uFF0C\u8F93\u51FA\u5230\u6587\u4EF6\u7CFB\u7EDF\u3002</li></ol>',9),h=l("\u5982\u679C\u53EA\u6267\u884C\u4E00\u6B21\u6784\u5EFA\uFF0C\u4EE5\u4E0A\u9636\u6BB5\u5C06\u4F1A\u6309\u7167\u987A\u5E8F\u5404\u6267\u884C\u4E00\u6B21\u3002\u4F46\u5728\u5F00\u542F\u76D1\u542C\u6A21\u5F0F\u4E0B\uFF0C\u6D41\u7A0B\u5C06\u53D8\u4E3A\u5982\u4E0B\uFF1A"),s=t("br",null,null,-1),c=["src"],b=r('<p><a name="nJF5p"></a></p><h3 id="\u521D\u59CB\u5316\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u9636\u6BB5" aria-hidden="true">#</a> \u521D\u59CB\u5316\u9636\u6BB5</h3><table><thead><tr><th><strong>\u4E8B\u4EF6\u540D</strong></th><th><strong>\u89E3\u91CA</strong></th></tr></thead><tbody><tr><td>\u521D\u59CB\u5316\u53C2\u6570</td><td>\u4ECE\u914D\u7F6E\u6587\u4EF6\u548C Shell \u8BED\u53E5\u4E2D\u8BFB\u53D6\u4E0E\u5408\u5E76\u53C2\u6570\uFF0C\u5F97\u51FA\u6700\u7EC8\u7684\u53C2\u6570\u3002 \u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u8FD8\u4F1A\u6267\u884C\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u63D2\u4EF6\u5B9E\u4F8B\u5316\u8BED\u53E5 new Plugin()\u3002</td></tr><tr><td>\u5B9E\u4F8B\u5316 Compiler</td><td>\u7528\u4E0A\u4E00\u6B65\u5F97\u5230\u7684\u53C2\u6570\u521D\u59CB\u5316 Compiler \u5B9E\u4F8B\uFF0CCompiler \u8D1F\u8D23\u6587\u4EF6\u76D1\u542C\u548C\u542F\u52A8\u7F16\u8BD1\u3002Compiler \u5B9E\u4F8B\u4E2D\u5305\u542B\u4E86\u5B8C\u6574\u7684 Webpack \u914D\u7F6E\uFF0C\u5168\u5C40\u53EA\u6709\u4E00\u4E2A Compiler \u5B9E\u4F8B\u3002</td></tr><tr><td>\u52A0\u8F7D\u63D2\u4EF6</td><td>\u4F9D\u6B21\u8C03\u7528\u63D2\u4EF6\u7684 apply \u65B9\u6CD5\uFF0C\u8BA9\u63D2\u4EF6\u53EF\u4EE5\u76D1\u542C\u540E\u7EED\u7684\u6240\u6709\u4E8B\u4EF6\u8282\u70B9\u3002\u540C\u65F6\u7ED9\u63D2\u4EF6\u4F20\u5165 compiler \u5B9E\u4F8B\u7684\u5F15\u7528\uFF0C\u4EE5\u65B9\u4FBF\u63D2\u4EF6\u901A\u8FC7 compiler \u8C03\u7528 Webpack \u63D0\u4F9B\u7684 API\u3002</td></tr><tr><td>environment</td><td>\u5F00\u59CB\u5E94\u7528 Node.js \u98CE\u683C\u7684\u6587\u4EF6\u7CFB\u7EDF\u5230 compiler \u5BF9\u8C61\uFF0C\u4EE5\u65B9\u4FBF\u540E\u7EED\u7684\u6587\u4EF6\u5BFB\u627E\u548C\u8BFB\u53D6\u3002</td></tr><tr><td>entry-option</td><td>\u8BFB\u53D6\u914D\u7F6E\u7684 Entrys\uFF0C\u4E3A\u6BCF\u4E2A Entry \u5B9E\u4F8B\u5316\u4E00\u4E2A\u5BF9\u5E94\u7684 EntryPlugin\uFF0C\u4E3A\u540E\u9762\u8BE5 Entry \u7684\u9012\u5F52\u89E3\u6790\u5DE5\u4F5C\u505A\u51C6\u5907\u3002</td></tr><tr><td>after-plugins</td><td>\u8C03\u7528\u5B8C\u6240\u6709\u5185\u7F6E\u7684\u548C\u914D\u7F6E\u7684\u63D2\u4EF6\u7684 apply \u65B9\u6CD5\u3002</td></tr><tr><td>after-resolvers</td><td>\u6839\u636E\u914D\u7F6E\u521D\u59CB\u5316\u5B8C resolver\uFF0Cresolver \u8D1F\u8D23\u5728\u6587\u4EF6\u7CFB\u7EDF\u4E2D\u5BFB\u627E\u6307\u5B9A\u8DEF\u5F84\u7684\u6587\u4EF6\u3002</td></tr></tbody></table><p><a name="a6Ola"></a></p><h3 id="\u7F16\u8BD1\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u9636\u6BB5" aria-hidden="true">#</a> \u7F16\u8BD1\u9636\u6BB5</h3><table><thead><tr><th><strong>\u4E8B\u4EF6\u540D</strong></th><th><strong>\u89E3\u91CA</strong></th></tr></thead><tbody><tr><td>run</td><td>\u542F\u52A8\u4E00\u6B21\u65B0\u7684\u7F16\u8BD1\u3002</td></tr><tr><td>watch-run</td><td>\u548C run \u7C7B\u4F3C\uFF0C\u533A\u522B\u5728\u4E8E\u5B83\u662F\u5728\u76D1\u542C\u6A21\u5F0F\u4E0B\u542F\u52A8\u7684\u7F16\u8BD1\uFF0C\u5728\u8FD9\u4E2A\u4E8B\u4EF6\u4E2D\u53EF\u4EE5\u83B7\u53D6\u5230\u662F\u54EA\u4E9B\u6587\u4EF6\u53D1\u751F\u4E86\u53D8\u5316\u5BFC\u81F4\u91CD\u65B0\u542F\u52A8\u4E00\u6B21\u65B0\u7684\u7F16\u8BD1\u3002</td></tr><tr><td>compile</td><td>\u8BE5\u4E8B\u4EF6\u662F\u4E3A\u4E86\u544A\u8BC9\u63D2\u4EF6\u4E00\u6B21\u65B0\u7684\u7F16\u8BD1\u5C06\u8981\u542F\u52A8\uFF0C\u540C\u65F6\u4F1A\u7ED9\u63D2\u4EF6\u5E26\u4E0A compiler \u5BF9\u8C61\u3002</td></tr><tr><td>compilation</td><td>\u5F53 Webpack \u4EE5\u5F00\u53D1\u6A21\u5F0F\u8FD0\u884C\u65F6\uFF0C\u6BCF\u5F53\u68C0\u6D4B\u5230\u6587\u4EF6\u53D8\u5316\uFF0C\u4E00\u6B21\u65B0\u7684 Compilation \u5C06\u88AB\u521B\u5EFA\u3002\u4E00\u4E2A Compilation \u5BF9\u8C61\u5305\u542B\u4E86\u5F53\u524D\u7684\u6A21\u5757\u8D44\u6E90\u3001\u7F16\u8BD1\u751F\u6210\u8D44\u6E90\u3001\u53D8\u5316\u7684\u6587\u4EF6\u7B49\u3002Compilation \u5BF9\u8C61\u4E5F\u63D0\u4F9B\u4E86\u5F88\u591A\u4E8B\u4EF6\u56DE\u8C03\u4F9B\u63D2\u4EF6\u505A\u6269\u5C55\u3002</td></tr><tr><td>make</td><td>\u4E00\u4E2A\u65B0\u7684 Compilation \u521B\u5EFA\u5B8C\u6BD5\uFF0C\u5373\u5C06\u4ECE Entry \u5F00\u59CB\u8BFB\u53D6\u6587\u4EF6\uFF0C\u6839\u636E\u6587\u4EF6\u7C7B\u578B\u548C\u914D\u7F6E\u7684 Loader \u5BF9\u6587\u4EF6\u8FDB\u884C\u7F16\u8BD1\uFF0C\u7F16\u8BD1\u5B8C\u540E\u518D\u627E\u51FA\u8BE5\u6587\u4EF6\u4F9D\u8D56\u7684\u6587\u4EF6\uFF0C\u9012\u5F52\u7684\u7F16\u8BD1\u548C\u89E3\u6790\u3002</td></tr><tr><td>after-compile</td><td>\u4E00\u6B21 Compilation \u6267\u884C\u5B8C\u6210\u3002</td></tr><tr><td>invalid</td><td>\u5F53\u9047\u5230\u6587\u4EF6\u4E0D\u5B58\u5728\u3001\u6587\u4EF6\u7F16\u8BD1\u9519\u8BEF\u7B49\u5F02\u5E38\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u8BE5\u4E8B\u4EF6\u4E0D\u4F1A\u5BFC\u81F4 Webpack \u9000\u51FA\u3002</td></tr></tbody></table><p>\u5728\u7F16\u8BD1\u9636\u6BB5\u4E2D\uFF0C\u6700\u91CD\u8981\u7684\u8981\u6570 compilation \u4E8B\u4EF6\u4E86\uFF0C\u56E0\u4E3A\u5728 compilation \u9636\u6BB5\u8C03\u7528\u4E86 Loader \u5B8C\u6210\u4E86\u6BCF\u4E2A\u6A21\u5757\u7684\u8F6C\u6362\u64CD\u4F5C\uFF0C\u5728 compilation \u9636\u6BB5\u53C8\u5305\u62EC\u5F88\u591A\u5C0F\u7684\u4E8B\u4EF6\uFF0C\u5B83\u4EEC\u5206\u522B\u662F\uFF1A</p><table><thead><tr><th><strong>\u4E8B\u4EF6\u540D</strong></th><th><strong>\u89E3\u91CA</strong></th></tr></thead><tbody><tr><td>build-module</td><td>\u4F7F\u7528\u5BF9\u5E94\u7684 Loader \u53BB\u8F6C\u6362\u4E00\u4E2A\u6A21\u5757\u3002</td></tr><tr><td>normal-module-loader</td><td>\u5728\u7528 Loader \u5BF9\u4E00\u4E2A\u6A21\u5757\u8F6C\u6362\u5B8C\u540E\uFF0C\u4F7F\u7528 acorn \u89E3\u6790\u8F6C\u6362\u540E\u7684\u5185\u5BB9\uFF0C\u8F93\u51FA\u5BF9\u5E94\u7684\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08AST\uFF09\uFF0C\u4EE5\u65B9\u4FBF Webpack \u540E\u9762\u5BF9\u4EE3\u7801\u7684\u5206\u6790\u3002</td></tr><tr><td>program</td><td>\u4ECE\u914D\u7F6E\u7684\u5165\u53E3\u6A21\u5757\u5F00\u59CB\uFF0C\u5206\u6790\u5176 AST\uFF0C\u5F53\u9047\u5230 require \u7B49\u5BFC\u5165\u5176\u5B83\u6A21\u5757\u8BED\u53E5\u65F6\uFF0C\u4FBF\u5C06\u5176\u52A0\u5165\u5230\u4F9D\u8D56\u7684\u6A21\u5757\u5217\u8868\uFF0C\u540C\u65F6\u5BF9\u65B0\u627E\u51FA\u7684\u4F9D\u8D56\u6A21\u5757\u9012\u5F52\u5206\u6790\uFF0C\u6700\u7EC8\u641E\u6E05\u6240\u6709\u6A21\u5757\u7684\u4F9D\u8D56\u5173\u7CFB\u3002</td></tr><tr><td>seal</td><td>\u6240\u6709\u6A21\u5757\u53CA\u5176\u4F9D\u8D56\u7684\u6A21\u5757\u90FD\u901A\u8FC7 Loader \u8F6C\u6362\u5B8C\u6210\u540E\uFF0C\u6839\u636E\u4F9D\u8D56\u5173\u7CFB\u5F00\u59CB\u751F\u6210 Chunk\u3002</td></tr></tbody></table><p><a name="KwsKe"></a></p><h3 id="\u8F93\u51FA\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA\u9636\u6BB5" aria-hidden="true">#</a> \u8F93\u51FA\u9636\u6BB5</h3><table><thead><tr><th><strong>\u4E8B\u4EF6\u540D</strong></th><th><strong>\u89E3\u91CA</strong></th></tr></thead><tbody><tr><td>should-emit</td><td>\u6240\u6709\u9700\u8981\u8F93\u51FA\u7684\u6587\u4EF6\u5DF2\u7ECF\u751F\u6210\u597D\uFF0C\u8BE2\u95EE\u63D2\u4EF6\u54EA\u4E9B\u6587\u4EF6\u9700\u8981\u8F93\u51FA\uFF0C\u54EA\u4E9B\u4E0D\u9700\u8981\u3002</td></tr><tr><td>emit</td><td>\u786E\u5B9A\u597D\u8981\u8F93\u51FA\u54EA\u4E9B\u6587\u4EF6\u540E\uFF0C\u6267\u884C\u6587\u4EF6\u8F93\u51FA\uFF0C\u53EF\u4EE5\u5728\u8FD9\u91CC\u83B7\u53D6\u548C\u4FEE\u6539\u8F93\u51FA\u5185\u5BB9\u3002</td></tr><tr><td>after-emit</td><td>\u6587\u4EF6\u8F93\u51FA\u5B8C\u6BD5\u3002</td></tr><tr><td>done</td><td>\u6210\u529F\u5B8C\u6210\u4E00\u6B21\u5B8C\u6210\u7684\u7F16\u8BD1\u548C\u8F93\u51FA\u6D41\u7A0B\u3002</td></tr><tr><td>failed</td><td>\u5982\u679C\u5728\u7F16\u8BD1\u548C\u8F93\u51FA\u6D41\u7A0B\u4E2D\u9047\u5230\u5F02\u5E38\u5BFC\u81F4 Webpack \u9000\u51FA\u65F6\uFF0C\u5C31\u4F1A\u76F4\u63A5\u8DF3\u8F6C\u5230\u672C\u6B65\u9AA4\uFF0C\u63D2\u4EF6\u53EF\u4EE5\u5728\u672C\u4E8B\u4EF6\u4E2D\u83B7\u53D6\u5230\u5177\u4F53\u7684\u9519\u8BEF\u539F\u56E0\u3002</td></tr></tbody></table><p>\u5728\u8F93\u51FA\u9636\u6BB5\u5DF2\u7ECF\u5F97\u5230\u4E86\u5404\u4E2A\u6A21\u5757\u7ECF\u8FC7\u8F6C\u6362\u540E\u7684\u7ED3\u679C\u548C\u5176\u4F9D\u8D56\u5173\u7CFB\uFF0C\u5E76\u4E14\u628A\u76F8\u5173\u6A21\u5757\u7EC4\u5408\u5728\u4E00\u8D77\u5F62\u6210\u4E00\u4E2A\u4E2A Chunk\u3002 \u5728\u8F93\u51FA\u9636\u6BB5\u4F1A\u6839\u636E Chunk \u7684\u7C7B\u578B\uFF0C\u4F7F\u7528\u5BF9\u5E94\u7684\u6A21\u7248\u751F\u6210\u6700\u7EC8\u8981\u8981\u8F93\u51FA\u7684\u6587\u4EF6\u5185\u5BB9\u3002</p>',12);function m(d,u){return e(),a(o,null,[p,t("p",null,[h,s,t("img",{src:d.$withBase("/webpack1.png"),alt:"\u6D41\u7A0B"},null,8,c)]),b],64)}var y=n(i,[["render",m]]);export{y as default};
