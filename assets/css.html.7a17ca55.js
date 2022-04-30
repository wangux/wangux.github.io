import{c as s}from"./app.7d96ffc6.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=s(`<h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> css</h1><p>\u6E10\u8FDB\u589E\u5F3A .transition { -webkit-transition: all .5s; -moz-transition: all .5s; -o-transition: all .5s; transition: all .5s; } \u4F18\u96C5\u964D\u7EA7 .transition { transition: all .5s; -o-transition: all .5s; -moz-transition: all .5s; -webkit-transition: all .5s; }</p><p>\u5E38\u7528\u7684\u56DB\u5927\u6D4F\u89C8\u5668\u53CA\u5176\u5BF9\u5E94\u7684css\u79C1\u6709\u524D\u7F00 \u8C37\u6B4C -webkit- firefox -moz- opera -o- IE -ms-</p><p>css3\u4E2D\uFF0C11\u79CDUI\u5143\u7D20\u72B6\u6001\u4F2A\u7C7B\u9009\u62E9\u5668 E:hover E:focus E:active E:enabled E:disabled E:read-only E:read-write E:checked</p><p>\u5C45\u4E2D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u4E0D\u77E5\u5177\u4F53\u5BBD\u9AD8</span>
<span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
<span class="token literal-property property">top</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span>\uFF1B
<span class="token literal-property property">margin</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>

<span class="token comment">//\u77E5\u9053\u5177\u4F53\u5BBD\u9AD8</span>
<span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
<span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
<span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
<span class="token literal-property property">top</span><span class="token operator">:</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
margin<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token operator">-</span>50px<span class="token punctuation">;</span>
margin<span class="token operator">-</span>top<span class="token operator">:</span> <span class="token operator">-</span>100px<span class="token punctuation">;</span>

<span class="token comment">//\u5F39\u6027\u76D2</span>
<span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>

<span class="token comment">//table</span>
<span class="token literal-property property">display</span><span class="token operator">:</span> table<span class="token operator">-</span>cell<span class="token punctuation">;</span>
text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
vertical<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>

<span class="token comment">//\u7B80\u5355\u5143\u7D20</span>
<span class="token literal-property property">height</span><span class="token operator">:</span>50px<span class="token punctuation">;</span>
line<span class="token operator">-</span>height<span class="token operator">:</span>50px<span class="token punctuation">;</span>
text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u8BBE\u7F6E\u5168\u5C40\u7F6E\u7070\uFF08\u9ED8\u54C0\uFF09 html { filter: grayscale(100%); -webkit-filter: grayscale(100%); -moz-filter: grayscale(100%); -ms-filter: grayscale(100%); -o-filter: grayscale(100%); -webkit-filter: grayscale(1); }</p>`,7);function e(t,r){return p}var c=n(a,[["render",e]]);export{c as default};
