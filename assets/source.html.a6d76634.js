import{c as e}from"./app.7d96ffc6.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=e(`<h1 id="vue\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#vue\u6E90\u7801" aria-hidden="true">#</a> vue\u6E90\u7801</h1><p>vue\u7684\u9879\u76EE\u76EE\u5F55</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u251C\u2500dist                   # \u9879\u76EE\u6784\u5EFA\u540E\u7684\u6587\u4EF6
\u251C\u2500scripts                # \u4E0E\u9879\u76EE\u6784\u5EFA\u76F8\u5173\u7684\u811A\u672C\u548C\u914D\u7F6E\u6587\u4EF6
\u251C\u2500flow                   # flow\u7684\u7C7B\u578B\u58F0\u660E\u6587\u4EF6
\u251C\u2500packages               # <span class="token function">\u63D0\u4F9B\u7ED9\u7B2C\u4E09\u65B9\u7684\u5305</span><span class="token punctuation">(</span>vue\u63D0\u4F9B\u51FA\u6765\u7684<span class="token punctuation">)</span>\uFF0C\u4F8B\u5982\u7ED9\u670D\u52A1\u7AEF\u6E32\u67D3\u3001\u6A21\u677F\u6E32\u67D3\uFF08\u63D0\u4F9B\u7ED9vue<span class="token operator">-</span>loader\uFF09\u7B49
\u251C\u2500src                    # \u9879\u76EE\u6E90\u4EE3\u7801
\u2502    \u251C\u2500complier          # \u4E0E\u6A21\u677F\u7F16\u8BD1\u76F8\u5173\u7684\u4EE3\u7801
\u2502    \u251C\u2500core              # \u901A\u7528\u7684\u3001\u4E0E\u8FD0\u884C\u5E73\u53F0\u65E0\u5173\u7684\u8FD0\u884C\u65F6\u4EE3\u7801
\u2502    \u2502  \u251C\u2500observe        # \u5B9E\u73B0\u53D8\u5316\u4FA6\u6D4B\u7684\u4EE3\u7801
\u2502    \u2502  \u251C\u2500vdom           # \u5B9E\u73B0virtual dom\u7684\u4EE3\u7801
\u2502    \u2502  \u251C\u2500instance       # Vue<span class="token punctuation">.</span>js\u5B9E\u4F8B\u7684\u6784\u9020\u51FD\u6570\u548C\u539F\u578B\u65B9\u6CD5
\u2502    \u2502  \u251C\u2500global<span class="token operator">-</span>api     # \u5168\u5C40api\u7684\u4EE3\u7801
\u2502    \u2502  \u2514\u2500components     # \u5185\u7F6E\u7EC4\u4EF6\u7684\u4EE3\u7801
\u2502    \u251C\u2500server            # \u4E0E\u670D\u52A1\u7AEF\u6E32\u67D3\u76F8\u5173\u7684\u4EE3\u7801
\u2502    \u251C\u2500platforms         # \u7279\u5B9A\u8FD0\u884C\u5E73\u53F0\u7684\u4EE3\u7801\uFF0C\u5982weex
\u2502    \u251C\u2500sfc               # \u5355\u6587\u4EF6\u7EC4\u4EF6\u7684\u89E3\u6790\u4EE3\u7801
\u2502    \u2514\u2500shared            # \u9879\u76EE\u516C\u7528\u7684\u5DE5\u5177\u4EE3\u7801
\u2514\u2500test                   # \u9879\u76EE\u6D4B\u8BD5\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>package \u7B2C\u4E09\u65B9\u7684\u5305<br>template =&gt; \u7F16\u8BD1\u6210\u6D4F\u89C8\u5668\u8BA4\u8BC6\u7684\u4EE3\u7801js\uFF08\u901A\u8FC7vue-template-compiler\uFF09<br>script \u6784\u5EFA\u6E90\u7801\u7684\u811A\u672C\u548C\u914D\u7F6E\u6587\u4EF6</p><p>vue\u8FD0\u884C\u7684\u65F6\u5019 \u5BF9\u5916\u90E8\u7684\u4E00\u4E2A\u8868\u73B0\u5F62\u5F0F\uFF08Runtime\u8FD0\u884C\u65F6\uFF09\uFF0C\u4EE5\u4E0B\u90FD\u662FRuntime\uFF1A<br>Vnode dom diff dep watcher \u54CD\u5E94\u5F0F\u6570\u636E</p><p>\u6253\u5305\u751F\u6210\u7684vuejs\u4FE9\u79CD\u7248\u672CRuntime Only\u548CRuntime+Compiler<br>Runtime Only \uFF08\u7F16\u8BD1\u662F\u5728\u79BB\u7EBF\u7684\u65F6\u5019\u505A\u7684\uFF09<br>\u8FD9\u4E2A\u7248\u672C\u53EA\u5305\u542B\u8FD0\u884C\u65F6\u7684js\u4EE3\u7801\uFF0C\u4F53\u79EF\u66F4\u8F7B\u91CF\uFF0C\u5728\u4F7F\u7528\u8BE5\u7248\u672C\u7684Vue.js\u65F6\uFF0C\u9700\u8981webpack\u5F15\u5165vue-loader\u628A.vue\u6587\u4EF6\u7F16\u8BD1\u6210js\u3002\u7F16\u8BD1\u540E\u6211\u4EEC\u5F97\u5230\u7684\u662F\u4E00\u4E2Awith\u7684render\u51FD\u6570\uFF0Crender\u51FD\u6570\u751F\u6210\u865A\u62DFDOM\u3002<br>Runtime + compiler\uFF08\u5728\u7EBF\u7F16\u8BD1\uFF09<br>\u8BE5\u7248\u672C\u5305\u542B\u5168\u529F\u80FD\u7684Vue(runtime+compiler),\u4F53\u79EF\u66F4\u5927\uFF0C\u800C\u4E14\u5728\u7EBF\u7F16\u8BD1\u65F6\u7684compiler\u8F6C\u6362js\u4F1A\u6D88\u8017\u6027\u80FD\u3002<br>\u53EA\u6709\u4EE5\u4E0B\u60C5\u51B5\u4F1A\u7528\u5230compiler\uFF1A\uFF08\u5728\u6CA1\u6709\u4F7F\u7528webpack\u7684\u60C5\u51B5\u53EF\u4EE5\u5F15\u5165\u5168\u529F\u80FDvue\uFF09<br>1.\u6709\u6307\u5B9Atemplate;<br>2.\u6CA1\u6307\u5B9Atemplate\uFF0C\u4E5F\u6CA1\u6307\u5B9Arender\uFF08\u8FD9\u65F6\u5019\u4F7F\u7528\u7684\u5C31\u662F\u88AB\u6302\u8F7D\u5143\u7D20\u7684outerHtml\uFF09\u3002</p><p>compiler\u751F\u6210Ast\uFF08\u62BD\u8C61\u8BED\u6CD5\u6811\uFF09\uFF0C\u628Avue\u6A21\u677F\u7F16\u8BD1\u6210with\u8BED\u53E5\uFF0Cwith\u7684render\u51FD\u6570\u751F\u6210\u865A\u62DFDOM<br>\uFF08with\u7684\u4F5C\u7528\u662F\u80FD\u628Atemplate\u4E2D\u7684js\u8BED\u53E5\u76F4\u63A5\u62FF\u8FC7\u6765\u7528\uFF0C\u4E0D\u7528\u7F16\u8BD1\u7BA1this\u7684\u4F5C\u7528\u57DF\uFF09<br>vue2\u4E3A\u4EC0\u4E48\u8981\u7528with\uFF1F<br>\u56E0\u4E3A\u7F16\u8BD1\u4E0D\u4E86vue\u6A21\u677F\u5185\uFF08template\uFF09\u7684js\u8BED\u53E5</p><p>\u6A21\u677F\u7F16\u8BD1\u9636\u6BB5\u505A\u7684\u4E8B\u60C5\uFF1F<br>\u8FD0\u884C\u65F6\u7248\u672C\u7684$mount\u65B9\u6CD5\u83B7\u53D6\u5230dom\u5143\u7D20\u540E\u76F4\u63A5\u8FDB\u5165\u6302\u8F7D\u9636\u6BB5\uFF0C\u800C\u5728\u5B8C\u6574\u7248\u7684$mount\u65B9\u6CD5\u4E2D\u662F\u5148\u5C06\u6A21\u677F\u8FDB\u884C\u7F16\u8BD1\uFF0C\u7136\u540E\u518D\u8C03\u7528\u8FD0\u884C\u65F6\u7248\u672C\u7684$mount\u65B9\u6CD5\uFF0C\u8FDB\u5165\u6302\u8F7D\u9636\u6BB5\u3002\u5B8C\u6574\u7248\u7684$mount\u65B9\u6CD5\u662F\u628A\u7528\u6237\u4F20\u5165\u7684el\u9009\u9879\u6216\u5219template\u9009\u9879\u4E2D\u83B7\u53D6\u5230\u7528\u6237\u4F20\u5165\u7684\u5185\u90E8\u6216\u5219\u5916\u90E8\u6A21\u677F\uFF0C\u7136\u540E\u5C06\u83B7\u53D6\u5230\u7684\u6A21\u677F\u7F16\u8BD1\u6210render\u51FD\u6570\uFF0C\u6700\u540E\u8C03\u7528\u8FD0\u884C\u65F6\u7248\u672C\u7684$mount\u65B9\u6CD5\u8FDB\u884C\u6302\u8F7D\u3002</p><p>src =&gt; \u6838\u5FC3\u6E90\u7801<br>VNode<br>(html + css) =&gt; \u6E32\u67D3\u5F15\u64CE\u89E3\u6790\uFF08\u6D4F\u89C8\u5668\uFF0Cwebkit/blink\uFF09 =&gt; \u8C03\u5EA6\u89E3\u6790\uFF0C\u751F\u6210layer tree paint =&gt; \u771F\u5B9EDom<br>\u9891\u7E41\u64CD\u4F5C\u771F\u5B9EDOM\u6162\u7684\u539F\u56E0\u662Fjs\u83B7\u53D6dom\u5C5E\u6027\uFF0C\u9700\u8981\u4FE9\u4E2A\u7EBF\u7A0B\u4E4B\u95F4\u8FDB\u884C\u4EA4\u4E92\uFF08\u4E00\u4E2A\u662Fwebkit\u4E5F\u53EB\u6E32\u67D3\u5F15\u64CE\u53E6\u4E00\u4E2A\u662Fv8\uFF09</p><p>js =&gt; v8 =&gt; \u6267\u884Cjs<br>babel =&gt; 2M\u5927\u5C0F\uFF08\u5728\u7EBF\u7F16\u8BD1\u4F1A\u4E0B\u8F7D\u5230\u6D4F\u89C8\u5668\u91CC\uFF0C\u9700\u8981\u5305\u542B\u7F16\u8BD1vue\u7684js\uFF09</p><p>js<br>\u5728\u7EBF\u7F16\u8BD1 \u6D4F\u89C8\u5668\u4E2D\u628Avue\u7F16\u8BD1\u6210\u6D4F\u89C8\u5668\u80FD\u8BC6\u522B\u7684js\u8BED\u53E5<br>\u79BB\u7EBF\u7F16\u8BD1 \u4E0A\u7EBF\u524D\u901A\u8FC7webpack\u3001babel\u8FDB\u884C\u7F16\u8BD1\u6210\u6D4F\u89C8\u5668\u80FD\u8BC6\u522B\u7684js\u8BED\u53E5</p><p>\u53CC\u5411\u7ED1\u5B9A\u7684\u6838\u5FC3<br>1.\u600E\u4E48\u77E5\u9053\u522B\u4EBA\u5728\u4F7F\u7528\u8FD9\u4E2A\u6570\u636E<br>2.\u600E\u4E48\u77E5\u9053\u662F\u8C01\u5728\u4F7F\u7528\u8FD9\u4E2A\u6570\u636E<br>3.\u600E\u4E48\u77E5\u9053\u5B58\u5728\u4EC0\u4E48\u5730\u65B9<br>4.\u600E\u4E48\u77E5\u9053\u4EC0\u4E48\u65F6\u5019\u6539\u4E86\u8FD9\u4E2A\u6570\u636E<br>5.\u600E\u4E48\u77E5\u9053\u8FD9\u4E2A\u6570\u636E\u5BF9\u5E94\u7684callback\u4F7F\u7528\u8005\u662F\u8C01</p><p>Watcher \u56DE\u8C03\u4EE5\u53CA\u8981\u505A\u7684\u4E8B\u60C5<br>dep \u5B58\u50A8 \u5173\u7CFB \u6570\u636E = &gt; watcher<br>Observer \u54CD\u5E94\u5F0F\u6570\u636E =&gt; \u5904\u7406\u6570\u636E\u4E3A\u53EF\u76D1\u542C<br>deractive \u6307\u4EE4</p><p>vue1 \u4E00\u4E2A\u6307\u4EE4\u4E00\u4E2Awatcher(watcher\u592A\u591Adep\u70B8\u4E86) \u7A7A\u95F4<br>vue2 \u4E00\u4E2A\u7EC4\u4EF6\u4E00\u4E2Awatcher\uFF08\u7EC4\u4EF6\u5185dom diff\uFF09 \u7A7A\u95F4\u4E00\u90E8\u5206\uFF08\u6307\u7684\u662Fdep\u56DE\u5B58\u50A8\u6570\u636E\u6620\u5C04\u5173\u7CFB\uFF09\uFF0C\u65F6\u95F4\u4E00\u90E8\u5206\uFF08dom diff\uFF09</p><p>react \u7A7A\u95F40\uFF08\u4ECE\u6839\u7EC4\u4EF6\u5F00\u59CB\u904D\u5386\uFF09 all in \u65F6\u95F4\uFF08\u6240\u4EE5react\u9700\u8981\u65F6\u95F4\u5206\u7247\uFF09</p><p>\u4E3A\u4EC0\u4E48\u8981\u91CD\u5199array\u7684\u53CC\u5411\u7ED1\u5B9A<br>\u6570\u7EC4\u4E5F\u53EF\u4EE5\u901A\u8FC7Object.defineProperty\u76D1\u542C\u7684\uFF0C\u4F46\u56E0\u4E3A\u6027\u80FD\u95EE\u9898\uFF0Carray\u5728\u5185\u5B58\u4E2D\u662F\u8FDE\u7EED\u5B58\u50A8\u7684\uFF0C\u5982\u679C\u5728\u6570\u7EC4\u7684\u524D\u9762\u63D2\u5165\u6570\u636E\u5C31\u4F1A\u4E0D\u65AD\u89E6\u53D1update\uFF08\u6539\u53D8array\u7684\u7D22\u5F15\u4F1A\u591A\u6B21\u89E6\u53D1Object.defineProperty\u7684set\uFF0C\uFF09\uFF0C\u5F15\u8D77\u591A\u6B21render\u3002</p><p>vue2\u6027\u80FD\u5DEE\u7684\u539F\u56E0\uFF1F<br>\u5C0F\u5E94\u7528\u5176\u5B9E\u633A\u5FEB\u7684\uFF0C\u6162\u7684\u539F\u56E0\u662F\u56E0\u4E3A\u9700\u8981\u7A7A\u95F4\u5B58\u50A8watcher\u548CObserver\u7684\u5173\u7CFB\uFF0C\u4E5F\u5C31\u662F\u9700\u8981\u7EF4\u62A4\u7684watcher\u8D8A\u591A\uFF0C\u5360\u7528\u7A7A\u95F4\u8D8A\u5927\uFF0C\u5E94\u7528\u8D8A\u5927\u8D8A\u5361\u3002</p><p>1.vue\u5B9E\u4F8B\u5316 _init \u6302\u8F7D\u57FA\u672C\u5C5E\u6027\uFF0C\u521D\u59CB\u5316\u57FA\u672Capi\u3001\u751F\u547D\u5468\u671F\u7B49<br>2.$mounted (\u5206\u4E3A\u4E0D\u540C\u5E73\u53F0\uFF0C\u4F7F\u7528updateComponent\u5305\u4E00\u5C42) =&gt; \u6A21\u677F\u7F16\u8BD1 render<br>3.mountComponent =&gt; \u6574\u4E2AVue\u5B9E\u4F8B<br>4.\u6784\u5EFA updateComponent\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token function-variable function">updateComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//TAG:\u7ED1\u5B9Arender \uFF0C</span>
    vm<span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>5.\u6784\u5EFA\u4E00\u4E2AWatcher<br>new Watcher(vm, updateComponent)<br>-Watcher\u4E2D\u89E6\u53D1\u81EA\u5DF1\u7684get\u65B9\u6CD5\uFF0C\u5F53\u524Dwatcher\u5B9E\u4F8B\u6DFB\u52A0\u5230Dep<br>-getter =&gt; \u6DFB\u52A0\u4F9D\u8D56\u5230Dep\uFF0C\u6267\u884Crun\u65B9\u6CD5<br>-run =&gt; \u6267\u884Crender\u751F\u6210Vnode</p><p>6.vm.<em>update \u63A5\u53D7Vnode<br>7.\u5F00\u59CB__patch</em>_<br>-\u9996\u6B21\u662F\u6302\u8F7D<br>-\u4E0B\u4E00\u6B21\u66F4\u65B0\uFF08\u8FDB\u884CDom diff \u751F\u6210\u771F\u5B9Edom\uFF09</p><p>vue\u6A21\u677F\u7F16\u8BD1\u662F\u901A\u8FC7\u6B63\u5219\u5339\u914D</p><p>vue\u7F16\u8BD1\u65F6\u4F18\u5316\uFF08dom diff \u65F6\u53EF\u76F4\u63A5\u8DF3\u8FC7\u9759\u6001\u8282\u70B9\uFF09<br>\u53EA\u80FD\u505A\u9759\u6001\u8282\u70B9\u4F18\u5316<br>-\u5224\u65AD\u5F53\u524D\u8282\u70B9\u662F\u5426\u662F\u9759\u6001\u8282\u70B9<br>-\u9012\u5F52\u904D\u5386\u5B50\u8282\u70B9\u662F\u5426\u90FD\u662F\u9759\u6001\u8282\u70B9\uFF0C\u6709\u4E00\u4E2A\u4E0D\u662F\uFF0C\u5219\u6807\u8BB0\u5F53\u524D\u8282\u70B9\u4E0D\u662F\u9759\u6001\u8282\u70B9</p><p>keep-alive LRU\u7B97\u6CD5<br>\u9759\u6001\u8282\u70B9\u6807\u8BB0<br>next-tick</p><p>computed\u548Cwatch\u7684\u533A\u522B<br>computed\u662F\u57FA\u4E8E\u54CD\u5E94\u5F0F\u4F9D\u8D56\u8FDB\u884C\u7F13\u5B58\u7684\uFF0C\u53EA\u6709\u5728\u54CD\u5E94\u5F0F\u4F9D\u8D56\u6539\u53D8\u7684\u65F6\u5019\uFF0C\u624D\u4F1A\u91CD\u65B0\u66F4\u65B0\u503C<br>watch\u662F\u4E00\u4E2A\u5BF9\u6570\u636E\u76D1\u542C\u7684\u56DE\u8C03\uFF0C\u53EA\u6709\u4F9D\u8D56\u7684data\u7684\u6570\u636E\u53D8\u5316\u662F\u624D\u4F1A\u89E6\u53D1\u56DE\u8C03\uFF0C\u56DE\u8C03\u4E2D\u4F20\u5165newVal\u548Coldval\uFF0Cvue\u4F1A\u5728\u5B9E\u4F8B\u5316\u7684\u65F6\u5019\u8C03\u7528$watch()\uFF0C\u4F1A\u904D\u5386watch\u5BF9\u8C61\u7684\u6BCF\u4E00\u4E2A\u5C5E\u6027</p><p>vue.$forceUpdate\u65B9\u6CD5\u539F\u7406\uFF1F<br>\u5F53\u5B9E\u4F8B\u4F9D\u8D56\u7684\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF08\u6570\u636E\u7684setter\u91CC\u4F1A\u8C03\u7528dep.notify()\u65B9\u6CD5\u901A\u77E5\u6536\u96C6\u5230\u7684\u6BCF\u4E00\u4E2Awatcher\u5B9E\u4F8B\uFF09\uFF0C\u53D8\u5316\u7684\u6570\u636E\u4F1A\u901A\u77E5\u5176\u6536\u96C6\u7684\u4F9D\u8D56\u5217\u8868(watcher\u6570\u7EC4)\u91CC\u7684\u4F9D\u8D56\u8FDB\u884C\u66F4\u65B0\uFF08\u6267\u884Cwatcher\u7684update\u65B9\u6CD5\uFF09\u3002<br>\u6839\u672C\u4E0A\u5C31\u662F\u8C03\u7528\u5F53\u524D\u5B9E\u4F8B\u4E0Awatcher\u5B9E\u4F8B\u7684update\u65B9\u6CD5\u91CD\u65B0\u6E32\u67D3\u3002</p><p>vue.$nextTick\u539F\u7406<br>vue\u5BF9DOM\u7684\u66F4\u65B0\u7B56\u7565\u662F\u518D\u4FA6\u542C\u5230\u6570\u636E\u53D8\u5316\u65F6\uFF0Cvue\u4F1A\u5F00\u542F\u4E00\u4E2A\u4E8B\u4EF6\u961F\u5217\uFF08\u5C31\u662F\u628A\u6240\u6709\u7684watcher\u5B58\u5230\u6570\u7EC4\u4E2D\uFF09\uFF0C\u5E76\u5728\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u6216\u5219\u5FAE\u4EFB\u52A1\u4E2D\u6267\u884C\u6240\u6709\u7684\u6570\u636E\u53D8\u66F4\uFF08\u4E5F\u5C31\u662F\u6267\u884Cwatcher\u7684update\u65B9\u6CD5\uFF09\u3002<br>\u8BBE\u8BA1\u7684\u539F\u56E0:\u5982\u679C\u540C\u4E00\u4E2Awatcher\u88AB\u591A\u6B21\u89E6\u53D1\uFF0C\u6BCF\u6B21\u90FD\u8981\u66F4\u65B0\uFF0C\u4F1A\u89E6\u53D1\u4E00\u4E9B\u6CA1\u5FC5\u8981\u7684DOM\u64CD\u4F5C\uFF0C\u589E\u52A0\u6027\u80FD\u635F\u8017\u3002</p><p>$nextTick\u65B9\u6CD5\u4F1A\u628A\u56DE\u8C03\u51FD\u6570\u653E\u5230callbacks\u4E2D\u7B49\u5F85\u6267\u884C\uFF0C\u7136\u540E\u5C06\u6267\u884C\u51FD\u6570\u653E\u5230\u5B8F\u4EFB\u52A1\u6216\u5219\u5FAE\u4EFB\u52A1\u4E2D\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u5230\u4E86\u5B8F\u4EFB\u52A1\u6216\u5219\u5FAE\u4EFB\u52A1\uFF0C\u6267\u884C\u51FD\u6570\u4F9D\u6B21\u6267\u884Ccallbacks\u4E2D\u7684\u56DE\u8C03\u3002</p><p>\u8BB2\u4E00\u4E0Bkeep-alive<br>keep-alive\u662Fvue\u4E2D\u7684\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u80FD\u5728\u7EC4\u4EF6\u5207\u6362\u8FC7\u7A0B\u4E2D\u5C06\u72B6\u6001\u4FDD\u7559\u5728\u5185\u5B58\u4E2D\uFF0C\u9632\u6B62\u91CD\u590D\u6E32\u67D3DOM<br>keep-alive\u5305\u88F9\u52A8\u6001\u7EC4\u4EF6\u65F6\uFF0C\u4F1A\u7F13\u5B58\u4E0D\u6D3B\u52A8\u7684\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u800C\u4E0D\u662F\u9500\u6BC1\u4ED6\u4EEC<br>\u4F7F\u7528\u573A\u666F\uFF1A\u53EF\u4EE5\u5728\u8DEF\u7531\u4E2Dmeta\u5C5E\u6027\u4E2D\u914D\u7F6E\u9700\u8981\u7F13\u5B58\u7684\u7EC4\u4EF6\uFF0C\u5728\u4F7F\u7528keep-alive\u65F6\u518D\u505A\u5224\u65AD<br>\u539F\u7406\uFF1A<br>\u8BE5\u7EC4\u4EF6\u662F\u4E00\u4E2A\u51FD\u6570\u5F0F\u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u6E32\u67D3\u65F6\u4F1A\u6267\u884Crender\u51FD\u6570\uFF0C\u5728\u8BE5\u7EC4\u4EF6\u5185\u6709\u4E00\u4E2A\u5B58\u50A8\u7EC4\u4EF6\u5BF9\u8C61\u4EE5\u53CA\u5B58\u50A8\u7EC4\u4EF6\u552F\u4E00key\u7684\u6570\u7EC4\uFF0C\u5728mounted\u4E2D\u76D1\u542Cinclude\u548Cexclude\u7684\u53D8\u5316\uFF0Cdestory\u4E2D\u5220\u9664\u6240\u6709\u7684\u7F13\u5B58\uFF0C\u6838\u5FC3\u5728render\u4E2D\uFF0Crender\u4E2D\u4F1A\u5148\u53D6\u7EC4\u4EF6\u7684key\u503C\uFF0C\u518D\u5224\u65AD\u7F13\u5B58\u4E2D\u662F\u5426\u6709\uFF0C\u5982\u679C\u6709\u76F4\u63A5\u8FD4\u56DE\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u540C\u65F6\u5220\u9664\u8BE5key\u5E76\u91CD\u65B0\u653E\u5230\u5B58\u50A8\u7EC4\u4EF6key\u6570\u7EC4\u672B\u5C3E\uFF08LRU\u7B97\u6CD5\uFF0C\u6709max\u65F6\u5220\u9664\u6700\u4E45\u6CA1\u6709\u88AB\u4F7F\u7528\u7684\u7EC4\u4EF6\uFF09\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u7F13\u5B58\u8BE5\u7EC4\u4EF6\u5E76\u76F4\u63A5\u8FD4\u56DEVnode\u3002</p><p>\u7F13\u5B58\u540E\u5982\u4F55\u53D6\u6570\u636E<br>1.\u53EF\u4EE5\u5728activated\u94A9\u5B50\u51FD\u6570\u4E2D\u53D6\uFF08actived\u670D\u52A1\u7AEF\u6E32\u67D3\u4E0D\u4F1A\u88AB\u8C03\u7528\uFF09<br>2.\u53EF\u4EE5\u518DbeforeRouterEnter\u4E2D\u53D6</p>`,30);function r(p,t){return s}var o=n(a,[["render",r]]);export{o as default};