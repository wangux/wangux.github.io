import{c as n}from"./app.7d96ffc6.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u524D\u7AEF\u57CB\u70B9\u3001\u6027\u80FD\u76D1\u63A7sdk\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u57CB\u70B9\u3001\u6027\u80FD\u76D1\u63A7sdk\u5B9E\u73B0" aria-hidden="true">#</a> \u524D\u7AEF\u57CB\u70B9\u3001\u6027\u80FD\u76D1\u63A7sdk\u5B9E\u73B0</h1><p><a name="kal93"></a></p><h2 id="\u76D1\u63A7js\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#\u76D1\u63A7js\u62A5\u9519" aria-hidden="true">#</a> -\u76D1\u63A7JS\u62A5\u9519</h2><ul><li>\u5F53JS\u8FD0\u884C\u65F6\u9519\u8BEF\uFF08\u5305\u62EC\u8BED\u6CD5\u9519\u8BEF\uFF09\u53D1\u751F\u65F6\uFF0Cwindow\u4F1A\u89E6\u53D1\u4E00\u4E2AErrorEvent\u63A5\u53E3\u7684error\u4E8B\u4EF6\uFF0C\u5E76\u6267\u884Cwindow.onerror()</li><li>\u8D44\u6E90\u52A0\u8F7D\u5931\u8D25\uFF08\u4F8B\u5982img\u6216script\uFF09\u4E5F\u4F1A\u89E6\u53D1\u4E00\u4E2AEvent\u63A5\u53E3\u7684error\u4E8B\u4EF6\uFF0C\u5E76\u6267\u884C<strong>\u8BE5\u5143\u7D20</strong>\u4E0A\u7684onerror()\u5904\u7406\u51FD\u6570\u3002\u4F46\u4E0D\u4F1A\u5411\u4E0A\u5192\u6CE1\u5230window\uFF0C\u4F46\u53EF\u4EE5\u88ABwindow.addEventListener\u6355\u83B7</li><li>unhandledrejection\u3002\u6355\u83B7promise\u5F02\u5E38\u3002\u5F53Promise \u88AB reject \u4E14\u6CA1\u6709 reject \u5904\u7406\u5668\u7684\u65F6\u5019\uFF0C\u4F1A\u89E6\u53D1 unhandledrejection \u4E8B\u4EF6</li><li>ajax\u8BF7\u6C42\u5F02\u5E38\uFF0CXMLHttpRequest.error,XMLHttpRequest.abort,XMLHttpRequest.load</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// error \u76D1\u542Cjs\u6267\u884C\u629B\u51FA\u7684\u672A\u88AB\u6355\u83B7\u7684\u9519\u8BEF\uFF0C\u5305\u62ECthrow err\u7B49\u3002</span>
<span class="token comment">// addEventListener\u7B2C\u4E09\u4E2A\u53C2\u6570\u8BBE\u7F6E\u4E3Atrue\uFF0C\u624D\u80FD\u6355\u83B7\u5230\u8D44\u6E90\u4E0B\u8F7D\u9519\u8BEF\u7684\u5F02\u5E38</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u672A\u6355\u83B7\u7684js\u5F02\u5E38\u3002\u3002&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;unhandledrejection&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u672A\u6355\u83B7\u7684promise\u5F02\u5E38&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;abort&#39;</span><span class="token punctuation">,</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token string">&#39;abort&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,7);function e(p,o){return t}var i=s(a,[["render",e]]);export{i as default};