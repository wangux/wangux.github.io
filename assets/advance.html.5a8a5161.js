import{c as s}from"./app.7d96ffc6.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=s(`<h1 id="ts\u8FDB\u9636" tabindex="-1"><a class="header-anchor" href="#ts\u8FDB\u9636" aria-hidden="true">#</a> ts\u8FDB\u9636</h1><p>lib.d.dom.ts //.d.ts \u7C7B\u578B\u58F0\u660E\u6587\u4EF6(\u4E3Ajs\u505A\u7C7B\u578B\u914D\u5BF9)</p><p>vue3 ts vite \u5F00\u53D1 esbuild esmoudle</p><p>webpack\u751F\u6001\u5B8C\u5584<br>v8-compile-cahche + Sparkplug + commonjs + \u63D2\u4EF6\u4EE3\u7801</p><p>\u5F00\u53D1 sdk rollup + parcel/snowpack + rome(ts\u5408\u8F91)</p><p>Quokka \uFF08\u7F16\u8BD1ts\uFF09</p><p>infer\u914D\u5408extends\u6761\u4EF6\u7C7B\u578B\u5224\u65AD\u4F7F\u7528\uFF0C\u8868\u793A\u5728extends\u6761\u4EF6\u8BED\u53E5\u4E2D\u5F85\u63A8\u65AD\u7684\u7C7B\u578B\u53D8\u91CF<br>extends\u7528\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>type Filter<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">U</span> <span class="token operator">?</span> never <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>

type Values <span class="token operator">=</span> Filter<span class="token operator">&lt;</span><span class="token string">&quot;x&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;y&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;z&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;x&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F97\u5230 type Values = &quot;y&quot; | &quot;z&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>infer\u57FA\u7840\u7528\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>type ExtractSelf<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span>infer <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token constant">U</span> <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>

type <span class="token constant">T1</span> <span class="token operator">=</span> ExtractSelf<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">;</span>        <span class="token comment">// string</span>
type <span class="token constant">T2</span> <span class="token operator">=</span> ExtractSelf<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>    <span class="token comment">// () =&gt; void</span>
type <span class="token constant">T3</span> <span class="token operator">=</span> ExtractSelf<span class="token operator">&lt;</span>Date<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>        <span class="token comment">// Date[]</span>
type <span class="token constant">T4</span> <span class="token operator">=</span> ExtractSelf<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// { a: string }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E0Einfer\u76F8\u5173\u7684\u5185\u7F6E\u7C7B\u578B</p><ul><li>Parameters \u7528\u6765\u83B7\u53D6\u51FD\u6570\u53C2\u6570\u7684\u7C7B\u578B</li><li>ReturnType \u7528\u6765\u83B7\u53D6\u51FD\u6570\u8FD4\u56DE\u503C\u7C7B\u578B</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>type <span class="token function-variable function">Func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> User<span class="token punctuation">;</span>
type Test <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span>Func<span class="token operator">&gt;</span><span class="token punctuation">;</span>   <span class="token comment">// Test = User</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7528\u4E8E\u63D0\u53D6\u51FD\u6570\u7C7B\u578B\u7684\u8FD4\u56DE\u503C\u7C7B\u578B</span>
type ReturnType<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> infer <span class="token constant">R</span> <span class="token operator">?</span> <span class="token constant">R</span> <span class="token operator">:</span> any<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><a name="cQGhg"></a></p><h1 id="partial" tabindex="-1"><a class="header-anchor" href="#partial" aria-hidden="true">#</a> Partial</h1><p>\u5C06\u5BF9\u8C61\u5C5E\u6027\u53D8\u4E3A\u975E\u5FC5\u586B<br>Required\u5C06\u5BF9\u8C61\u7684\u6240\u6709\u5C5E\u6027\u53D8\u4E3A\u5FC5\u586B\u9879</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>type Partial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> keyof <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

type Required<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> keyof <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u81EA\u5B9A\u4E49\u6DF1\u5C42Partial</span>
type DeepPartial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> keyof <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span> <span class="token keyword">extends</span> <span class="token class-name">Object</span> <span class="token operator">?</span> DeepPartial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><a name="v3pRc"></a></p><h1 id="record" tabindex="-1"><a class="header-anchor" href="#record" aria-hidden="true">#</a> Record</h1><p>\u5C06\u4E00\u4E2A\u7C7B\u578B\u7684\u6240\u6709\u5C5E\u6027\u90FD\u6620\u5C04\u5230\u53E6\u4E00\u4E2A\u7C7B\u578B\u4E0A\u5E76\u521B\u9020\u4E00\u4E2A\u65B0\u7684\u7C7B\u578B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>type Record<span class="token operator">&lt;</span><span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token class-name">keyof</span> any<span class="token punctuation">,</span> <span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

type petsGroup <span class="token operator">=</span> <span class="token string">&#39;dog&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;cat&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;fish&#39;</span>
type numOrStr <span class="token operator">=</span> number <span class="token operator">|</span> string
type Ipets <span class="token operator">=</span> Record<span class="token operator">&lt;</span>petsGroup<span class="token punctuation">,</span> numOrStr<span class="token operator">&gt;</span>

<span class="token comment">//Ipets = {</span>
<span class="token comment">//	dog: numOrStr</span>
<span class="token comment">//  cat: numOrStr</span>
<span class="token comment">//  fish: numOrStr</span>
<span class="token comment">//}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><a name="jeHvs"></a></p><h1 id="pick" tabindex="-1"><a class="header-anchor" href="#pick" aria-hidden="true">#</a> Pick</h1><p>\u4ECE\u4E00\u4E2A\u590D\u5408\u7C7B\u578B\u4E2D\uFF0C\u53D6\u51FA\u51E0\u4E2A\u60F3\u8981\u7684\u7C7B\u578B\u7EC4\u5408\u6210\u4E00\u4E2A\u65B0\u7684\u7C7B\u578B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>type Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token class-name">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">id</span><span class="token operator">:</span> number
  <span class="token literal-property property">name</span><span class="token operator">:</span> string
  <span class="token literal-property property">age</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>

type PickB <span class="token operator">=</span> Pick<span class="token operator">&lt;</span><span class="token constant">B</span><span class="token punctuation">,</span> <span class="token string">&#39;id&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;name&#39;</span><span class="token operator">&gt;</span>
<span class="token comment">//type PickB = {</span>
<span class="token comment">//	id: number</span>
<span class="token comment">//  name: string</span>
<span class="token comment">//}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>keyof\uFF1A\u8FD4\u56DE\u67D0\u79CD\u7C7B\u578B\u7684\u6240\u6709\u952E\uFF08key\uFF09<br>extends\u9650\u5236\u7C7B\u578B</p><p><a name="rHbPU"></a></p><h1 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude" aria-hidden="true">#</a> Exclude</h1><p>Exclude&lt;T, U&gt;\u8868\u793A\u4ECET\u4E2D\u6392\u9664\u53EF\u5206\u914D\u7ED9U\u7684\u7C7B\u578B\uFF0C\u4E5F\u5C31\u662F\u53D6\u4E0D\u662FU\u7684\u8865\u96C6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>type Exclude<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">U</span> <span class="token operator">?</span> never <span class="token operator">:</span> <span class="token constant">T</span>

type <span class="token constant">T</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> string
  <span class="token literal-property property">age</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>
type <span class="token constant">U</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
type IType <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span>keyof <span class="token constant">T</span><span class="token punctuation">,</span> keyof <span class="token constant">U</span><span class="token operator">&gt;</span> <span class="token comment">//&#39;age&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><a name="SAdbJ"></a></p><h1 id="extract" tabindex="-1"><a class="header-anchor" href="#extract" aria-hidden="true">#</a> Extract</h1><p>Extract&lt;T, U&gt;\u53D6T\u4E2DU\u4E2D\u90FD\u6709\u7684\u7C7B\u578B,\u4E5F\u5C31\u662F\u53D6\u4EA4\u96C6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>type Extract<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">U</span> <span class="token operator">?</span> <span class="token constant">T</span> <span class="token operator">:</span> never<span class="token punctuation">;</span>

type <span class="token constant">T0</span> <span class="token operator">=</span> Extract<span class="token operator">&lt;</span><span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;b&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;f&#39;</span><span class="token operator">&gt;</span> <span class="token comment">//&#39;a&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><a name="tQqjc"></a></p><h1 id="constructorparameters" tabindex="-1"><a class="header-anchor" href="#constructorparameters" aria-hidden="true">#</a> ConstructorParameters</h1><p>\u53D6\u6784\u9020\u51FD\u6570\u53C2\u6570\u7C7B\u578B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>type ConstructorParameters<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">new</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">new</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args<span class="token operator">:</span> infer <span class="token constant">P</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any <span class="token operator">?</span> <span class="token constant">P</span> <span class="token operator">:</span> never

<span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string
  <span class="token literal-property property">age</span><span class="token operator">:</span> number
  
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

type Itype <span class="token operator">=</span> ConstructorParameters<span class="token operator">&lt;</span><span class="token keyword">typeof</span> People<span class="token operator">&gt;</span> 
<span class="token comment">//Itype = [name: string]</span>
<span class="token comment">//typeof\u662F\u53D6\u7C7B\u578B\u7684\u4F5C\u7528</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><a name="YC49e"></a></p><h2 id="infer" tabindex="-1"><a class="header-anchor" href="#infer" aria-hidden="true">#</a> infer</h2><p>\u8868\u793A\u5728extends\u6761\u4EF6\u8BED\u53E5\u4E2D\u5F85\u63A8\u65AD\u7684\u7C7B\u578B\u53D8\u91CF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>type ParamType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">param</span><span class="token operator">:</span> infer <span class="token constant">P</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any <span class="token operator">?</span> <span class="token constant">P</span> <span class="token operator">:</span> <span class="token constant">T</span>

<span class="token keyword">interface</span> <span class="token class-name">IDog</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> string
  <span class="token literal-property property">age</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>

type <span class="token function-variable function">Func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">dog</span><span class="token operator">:</span> IDog</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>

type Param <span class="token operator">=</span> ParamType<span class="token operator">&lt;</span>Func<span class="token operator">&gt;</span> <span class="token comment">// IDog</span>
type TypeString <span class="token operator">=</span> ParamType<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> <span class="token comment">//string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><a name="XqD42"></a></p><h1 id="instancetype" tabindex="-1"><a class="header-anchor" href="#instancetype" aria-hidden="true">#</a> InstanceType</h1><p>\u7528\u4E8E\u83B7\u53D6\u6784\u9020\u51FD\u6570\u7684\u8FD4\u56DE\u7C7B\u578B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>type InstanceType<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">new</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">new</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> infer <span class="token constant">R</span> <span class="token operator">?</span> <span class="token constant">R</span> <span class="token operator">:</span> any

<span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string
  <span class="token literal-property property">age</span><span class="token operator">:</span> number
  
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

type Itype <span class="token operator">=</span> InstanceType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> People<span class="token operator">&gt;</span> 
<span class="token comment">//Itype = People</span>
<span class="token comment">//constructor\u9ED8\u8BA4\u8FD4\u56DEthis</span>
<span class="token comment">//constructor Perple(name: string): People</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><a name="Kx35r"></a></p><h1 id="nonnullable" tabindex="-1"><a class="header-anchor" href="#nonnullable" aria-hidden="true">#</a> NonNullable</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//NonNullable&lt;T&gt;\u4ECET\u4E2D\u6392\u9664null\u548Cundefined</span>
type NonNullable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> never <span class="token operator">:</span> <span class="token constant">T</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><a name="PakXU"></a></p><h1 id="readonly-readonlyarray" tabindex="-1"><a class="header-anchor" href="#readonly-readonlyarray" aria-hidden="true">#</a> readonly &amp; ReadonlyArray</h1><ul><li>readonly \u53EA\u8BFB \u88ABreadonly \u6807\u8BB0\u7684\u5C5E\u6027\u53EA\u80FD\u5728\u58F0\u660E\u65F6\u6216\u7C7B\u7684\u6784\u9020\u51FD\u6570\u4E2D\u8D4B\u503C\uFF0C\u4E4B\u540E\u5C06\u4E0D\u53EF\u6539\uFF08\u5373\u53EA\u8BFB\u5C5E\u6027\uFF09\u3002</li><li>ReadonlyArray \u540C\u7406, \u53EA\u8BFB\u6570\u7EC4</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> <span class="token literal-property property">ro</span><span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span> <span class="token comment">//ro\u8C03\u7528push\u4F1A\u62A5\u9519</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,54);function e(t,o){return p}var l=n(a,[["render",e]]);export{l as default};
