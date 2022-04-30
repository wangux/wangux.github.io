import{c as n}from"./app.7d96ffc6.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B97\u6CD5" aria-hidden="true">#</a> \u7B97\u6CD5</h1><h2 id="\u7EC4\u5408" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408" aria-hidden="true">#</a> \u7EC4\u5408</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7ED9\u5B9A\u4E24\u4E2A\u6574\u6570 n \u548C k\uFF0C\u8FD4\u56DE\u8303\u56F4 [1, n] \u4E2D\u6240\u6709\u53EF\u80FD\u7684 k \u4E2A\u6570\u7684\u7EC4\u5408\u3002</span>
  <span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token comment">// 1 2 3 4    2</span>
<span class="token comment">//       1</span>
<span class="token comment">//     2 3 4</span>
<span class="token comment">// k-path.length</span>
<span class="token keyword">var</span> <span class="token function-variable function">combine</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">function</span> <span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> startIndex</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span>length <span class="token operator">===</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>path<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token operator">-</span> <span class="token punctuation">(</span>k <span class="token operator">-</span> path<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
      <span class="token function">backtrack</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
      path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">backtrack</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">combine</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="\u6590\u6CE2\u90A3\u5951\u6570\u5217" tabindex="-1"><a class="header-anchor" href="#\u6590\u6CE2\u90A3\u5951\u6570\u5217" aria-hidden="true">#</a> \u6590\u6CE2\u90A3\u5951\u6570\u5217</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//   \u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u8F93\u5165 n \uFF0C\u6C42\u6590\u6CE2\u90A3\u5951\uFF08Fibonacci\uFF09\u6570\u5217\u7684\u7B2C n \u9879\uFF08\u5373 F(N)\uFF09\u3002\u6590\u6CE2\u90A3\u5951\u6570\u5217\u7684\u5B9A\u4E49\u5982\u4E0B\uFF1A</span>
<span class="token comment">// F(0) = 0,   F(1) = 1</span>
<span class="token comment">// F(N) = F(N - 1) + F(N - 2), \u5176\u4E2D N &gt; 1.</span>
<span class="token comment">// \u6590\u6CE2\u90A3\u5951\u6570\u5217\u7531 0 \u548C 1 \u5F00\u59CB\uFF0C\u4E4B\u540E\u7684\u6590\u6CE2\u90A3\u5951\u6570\u5C31\u662F\u7531\u4E4B\u524D\u7684\u4E24\u6570\u76F8\u52A0\u800C\u5F97\u51FA\u3002</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token comment">// var fib = function(n) {</span>
<span class="token comment">//   if (n === 0){</span>
<span class="token comment">//     return 0;</span>
<span class="token comment">//   }</span>
<span class="token comment">//   if (n === 1) {</span>
<span class="token comment">//     return 1;</span>
<span class="token comment">//   }</span>
<span class="token comment">//   return fib(n-1) + fib(n-2);</span>
<span class="token comment">// };</span>
<span class="token comment">// console.log(fib(5))</span>

<span class="token comment">// var fib = function(n) {</span>
<span class="token comment">//   if(n==0||n==1){</span>
<span class="token comment">//       return n;</span>
<span class="token comment">//   }</span>
<span class="token comment">//   let a = 0, b = 1, sum=a+b;</span>
<span class="token comment">//   for(let i = 2; i &lt; n; i++){</span>
<span class="token comment">//       a = b;</span>
<span class="token comment">//       b = sum;</span>
<span class="token comment">//       sum = (a + b) % 1000000007;</span>
<span class="token comment">//   }</span>
<span class="token comment">//   return sum;</span>
<span class="token comment">// }</span>
<span class="token comment">//\u6682\u5B58\u6CD5</span>
<span class="token comment">// const fib = function(n, map= new Map()) {</span>
<span class="token comment">//   if (n &lt; 2) {</span>
<span class="token comment">//     return n;</span>
<span class="token comment">//   }</span>
<span class="token comment">//   map.set(0, 0)</span>
<span class="token comment">//   map.set(1, 1)</span>
<span class="token comment">//   for (var i= 2; i&lt;=n; i++) {</span>
<span class="token comment">//     map.set(i, map.get(i-1) + map.get(i-2))</span>
<span class="token comment">//   }</span>
<span class="token comment">//   return map.get(n)</span>
<span class="token comment">// }</span>
<span class="token comment">// const fib = function(n, map = []){</span>
<span class="token comment">//   if (n &lt; 2){</span>
<span class="token comment">//     return n;</span>
<span class="token comment">//   }</span>
<span class="token comment">//   if (!map[n]){</span>
<span class="token comment">//     map[n] = fib(n-1, map) + fib(n-2, map)</span>
<span class="token comment">//   }</span>
<span class="token comment">//   return map[n]</span>
<span class="token comment">// }</span>
<span class="token keyword">const</span> <span class="token function-variable function">fib</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token operator">&lt;</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> cur <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>pre <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">++</span> <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pre  <span class="token operator">=</span> cur<span class="token punctuation">;</span>
    cur <span class="token operator">=</span> result
    result <span class="token operator">=</span> <span class="token punctuation">(</span>pre <span class="token operator">+</span> cur<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">1000000007</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// for(let i = 2; i &lt; n; i++){</span>
  <span class="token comment">//   a = b;</span>
  <span class="token comment">//   b = sum;</span>
  <span class="token comment">//   sum = (a + b) % 1000000007;</span>
  <span class="token comment">// }</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token comment">// return cur;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><h2 id="\u4E8C\u5206\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u5206\u67E5\u627E" aria-hidden="true">#</a> \u4E8C\u5206\u67E5\u627E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//   \u7EDF\u8BA1\u4E00\u4E2A\u6570\u5B57\u5728\u6392\u5E8F\u6570\u7EC4\u4E2D\u51FA\u73B0\u7684\u6B21\u6570\u3002</span>
<span class="token comment">// \u793A\u4F8B 1:</span>
<span class="token comment">// \u8F93\u5165: nums = [5,7,7,8,8,10], target = 8</span>
<span class="token comment">// \u8F93\u51FA: 2</span>
<span class="token comment">// \u793A\u4F8B 2:</span>
<span class="token comment">// \u8F93\u5165: nums = [5,7,7,8,8,10], target = 6</span>
<span class="token comment">// \u8F93\u51FA: 0</span>
<span class="token comment">// \u63D0\u793A\uFF1A</span>
<span class="token comment">// 0 &lt;= nums.length &lt;= 105</span>
<span class="token comment">// -109 &lt;= nums[i] &lt;= 109</span>
<span class="token comment">// nums \u662F\u4E00\u4E2A\u975E\u9012\u51CF\u6570\u7EC4</span>
<span class="token comment">// -109 &lt;= target &lt;= 109</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token comment">//\u5FAA\u73AF\uFF08O(n)\uFF09</span>
<span class="token comment">// var search = function(nums, target) {</span>
<span class="token comment">//   let count = 0;</span>
<span class="token comment">//   for (let i = 0; i &lt; nums.length; i++) {</span>
<span class="token comment">//     if (nums[i] === target) {</span>
<span class="token comment">//       count++;</span>
<span class="token comment">//     }</span>
<span class="token comment">//   }</span>
<span class="token comment">//   return count;</span>
<span class="token comment">// };</span>

<span class="token comment">//\u67E5\u627E\u7B2C\u4E00\u4E2A\u5927\u4E8E\u7B49\u4E8E \\textit{target}target \u7684\u4E0B\u6807\uFF0C\u5426\u5219\u67E5\u627E\u7B2C\u4E00\u4E2A\u5927\u4E8E \\textit{target}target \u7684\u4E0B\u6807</span>
<span class="token comment">// var search = function(nums, target) {</span>
<span class="token comment">//   if (nums.length == 0) return 0;</span>
<span class="token comment">//   let l = 0, r = nums.length - 1;</span>
<span class="token comment">//   while (l &lt; r) {</span>
<span class="token comment">//       let mid = l + r + 1 &gt;&gt; 1;</span>
<span class="token comment">//       if (nums[mid] &lt;= target) l = mid;</span>
<span class="token comment">//       else r = mid - 1;</span>
<span class="token comment">//   }</span>
<span class="token comment">//   let st = nums[r] == target ? r + 1 : 0;</span>
<span class="token comment">//   l = 0;</span>
<span class="token comment">//   r = nums.length - 1;</span>
<span class="token comment">//   while (l &lt; r) {</span>
<span class="token comment">//       let mid = l + r &gt;&gt; 1;</span>
<span class="token comment">//       if (nums[mid] &gt;= target) r = mid;</span>
<span class="token comment">//       else l = mid + 1;</span>
<span class="token comment">//   }</span>
<span class="token comment">//   let ed = nums[r] == target ? r : 0;</span>
<span class="token comment">//   return st - ed;</span>
<span class="token comment">// }</span>

<span class="token comment">// const binarySearch = (nums, target, lower) =&gt; {</span>
<span class="token comment">//     let left = 0, right = nums.length - 1, ans = nums.length;</span>
<span class="token comment">//     while (left &lt;= right) {</span>
<span class="token comment">//         const mid = Math.floor((left + right) / 2);</span>
<span class="token comment">//         if (nums[mid] &gt; target || (lower &amp;&amp; nums[mid] &gt;= target)) {</span>
<span class="token comment">//             right = mid - 1;</span>
<span class="token comment">//             ans = mid;</span>
<span class="token comment">//         } else {</span>
<span class="token comment">//             left = mid + 1;</span>
<span class="token comment">//         }</span>
<span class="token comment">//     }</span>
<span class="token comment">//     return ans;</span>
<span class="token comment">// }</span>

<span class="token comment">// var search = function(nums, target) {</span>
<span class="token comment">//     let ans = 0;</span>
<span class="token comment">//     const leftIdx = binarySearch(nums, target, true);</span>
<span class="token comment">//     const rightIdx = binarySearch(nums, target, false) - 1;</span>
<span class="token comment">//     if (leftIdx &lt;= rightIdx &amp;&amp; rightIdx &lt; nums.length &amp;&amp; nums[leftIdx] === target &amp;&amp; nums[rightIdx] === target) {</span>
<span class="token comment">//         ans = rightIdx - leftIdx + 1;</span>
<span class="token comment">//     }</span>
<span class="token comment">//     return ans;</span>
<span class="token comment">// };</span>

<span class="token comment">// function search(data,arr,start,end){</span>
<span class="token comment">//   if (start &gt; end) {</span>
<span class="token comment">//     return -1;</span>
<span class="token comment">//   }</span>
<span class="token comment">//   let mid = Math.floor((start + end) / 2)</span>
<span class="token comment">//   if (data === arr[mid]) {</span>
<span class="token comment">//     return mid</span>
<span class="token comment">//   } else if (data &lt; arr[mid]) {</span>
<span class="token comment">//     return search(data,arr,start, mid - 1)</span>
<span class="token comment">//   }else {</span>
<span class="token comment">//     return search(data,arr, mid + 1, end)</span>
<span class="token comment">//   }</span>
<span class="token comment">// }</span>

<span class="token keyword">function</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> end <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;=</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>start <span class="token operator">+</span> end<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        start <span class="token operator">=</span> mid<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        end <span class="token operator">=</span> mid <span class="token operator">-</span><span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      end <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      start <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> st <span class="token operator">=</span> start
  start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> end <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;=</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>start <span class="token operator">+</span> end<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
        end <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        start <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      end <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      start <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> st <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> end<span class="token operator">-</span>st
  <span class="token punctuation">}</span> 
  <span class="token keyword">return</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target <span class="token operator">=</span> <span class="token number">8</span>
<span class="token comment">// console.log(search(nums,target))</span>
<span class="token comment">// search(nums,target)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">search</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u65CB\u8F6C\u6570\u7EC4\u6700\u5C0F\u6570</span>
<span class="token keyword">function</span> <span class="token function">rotateArr</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> high <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>low <span class="token operator">+</span> high<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mid <span class="token operator">==</span> high<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">rotateArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> high<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">rotateArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> low<span class="token punctuation">,</span> mid<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">rotateArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token operator">--</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
  <span class="token punctuation">}</span>

  <span class="token comment">// function rotateArr(arr) {</span>
  <span class="token comment">//   if (arr.length == 0){</span>
  <span class="token comment">//     return 0</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   let low = 0, high = arr.length - 1</span>
  <span class="token comment">//   while (low &lt; high) {</span>
  <span class="token comment">//     let mid = Math.floor((low + high)/2)</span>
  <span class="token comment">//     if (arr[mid] &gt; arr[high]) low = mid + 1</span>
  <span class="token comment">//     else if (arr[mid] &lt; arr[high]) high = mid</span>
  <span class="token comment">//     else high-- </span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   return arr[low]</span>
  <span class="token comment">// }</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">rotateArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u67E5\u627E\u7F3A\u5931\u7684\u6570\u5B57</span>
<span class="token doc-comment comment">/**
* <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
* <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
*/</span>
<span class="token comment">// var missingNumber = function(nums) {</span>
<span class="token comment">//   for (let i = 0; i &lt;= nums.length; i++) {</span>
<span class="token comment">//     if (nums[i] === undefined) {</span>
<span class="token comment">//       return i</span>
<span class="token comment">//     } else if (nums[i] &gt; i) {</span>
<span class="token comment">//       return nums[i] -1</span>
<span class="token comment">//     } else if (nums[i] == i) {</span>
<span class="token comment">//       continue;</span>
<span class="token comment">//     } else {</span>
<span class="token comment">//       return nums[i] + 1</span>
<span class="token comment">//     }</span>
<span class="token comment">//   }</span>
<span class="token comment">// };</span>

<span class="token keyword">var</span> <span class="token function-variable function">missingNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">findNumber</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> nums</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;=</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>start <span class="token operator">+</span> end<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>mid <span class="token operator">==</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        start <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>mid <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        end <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> start<span class="token punctuation">;</span>
    <span class="token comment">// if (start &gt; end) {</span>
    <span class="token comment">//   return start</span>
    <span class="token comment">// }</span>
    <span class="token comment">// if (nums[mid] &gt; mid ) {</span>
    <span class="token comment">//   findNumber(start, mid-1)</span>
    <span class="token comment">// } else if (nums[mid] == mid){</span>
    <span class="token comment">//   findNumber(mid+1, end)</span>
    <span class="token comment">// }</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">findNumber</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> nums<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">missingNumber</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="\u66FF\u6362\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#\u66FF\u6362\u7A7A\u683C" aria-hidden="true">#</a> \u66FF\u6362\u7A7A\u683C</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token comment">// var replaceSpace = function(s) {</span>
<span class="token comment">//   let i = 0;</span>
<span class="token comment">//   let str = &#39;&#39;</span>
<span class="token comment">//   while (i &lt; s.length - 1) {</span>
<span class="token comment">//     if (s[i] === &#39; &#39;) {</span>
<span class="token comment">//       str += &#39;%20&#39;</span>
<span class="token comment">//     } else {</span>
<span class="token comment">//       str += s[i]</span>
<span class="token comment">//     }</span>
<span class="token comment">//     i++</span>
<span class="token comment">//   }</span>
<span class="token comment">//   return str;</span>
<span class="token comment">// };</span>

<span class="token keyword">var</span> <span class="token function-variable function">replaceSpace</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  s <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> oldLen <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> spaceCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> oldLen<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> spaceCount<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  s<span class="token punctuation">.</span>length <span class="token operator">+=</span> spaceCount <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> oldLen <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">,</span>j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      s<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
      s<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">;</span>
      s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">;</span>
      j <span class="token operator">-=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// var replaceSpace = function(s) {</span>
<span class="token comment">//     s = s.split(&quot;&quot;);</span>
<span class="token comment">//     let oldLen = s.length;</span>
<span class="token comment">//     let spaceCount = 0;</span>
<span class="token comment">//     for (let i = 0; i &lt; oldLen; i++) {</span>
<span class="token comment">//         if (s[i] === &#39; &#39;) spaceCount++;</span>
<span class="token comment">//     }</span>
<span class="token comment">//     s.length += spaceCount * 2;</span>
<span class="token comment">//     for (let i = oldLen - 1, j = s.length - 1; i &gt;= 0; i--, j--) {</span>
<span class="token comment">//         if (s[i] !== &#39; &#39;) s[j] = s[i];</span>
<span class="token comment">//         else {</span>
<span class="token comment">//             s[j - 2] = &#39;%&#39;;</span>
<span class="token comment">//             s[j - 1] = &#39;2&#39;;</span>
<span class="token comment">//             s[j] = &#39;0&#39;;</span>
<span class="token comment">//             j -= 2;</span>
<span class="token comment">//         }</span>
<span class="token comment">//     }</span>
<span class="token comment">//     return s.join(&#39;&#39;);</span>
<span class="token comment">// };</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">replaceSpace</span><span class="token punctuation">(</span><span class="token string">&#39;ad sd ds&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><h2 id="\u63B7\u9AB0\u5B50" tabindex="-1"><a class="header-anchor" href="#\u63B7\u9AB0\u5B50" aria-hidden="true">#</a> \u63B7\u9AB0\u5B50</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//   \u628An\u4E2A\u9AB0\u5B50\u6254\u5728\u5730\u4E0A\uFF0C\u6240\u6709\u9AB0\u5B50\u671D\u4E0A\u4E00\u9762\u7684\u70B9\u6570\u4E4B\u548C\u4E3As\u3002\u8F93\u5165n\uFF0C\u6253\u5370\u51FAs\u7684\u6240\u6709\u53EF\u80FD\u7684\u503C\u51FA\u73B0\u7684\u6982\u7387\u3002</span>
<span class="token comment">// \u4F60\u9700\u8981\u7528\u4E00\u4E2A\u6D6E\u70B9\u6570\u6570\u7EC4\u8FD4\u56DE\u7B54\u6848\uFF0C\u5176\u4E2D\u7B2C i \u4E2A\u5143\u7D20\u4EE3\u8868\u8FD9 n \u4E2A\u9AB0\u5B50\u6240\u80FD\u63B7\u51FA\u7684\u70B9\u6570\u96C6\u5408\u4E2D\u7B2C i \u5C0F\u7684\u90A3\u4E2A\u7684\u6982\u7387\u3002</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token comment">// var dicesProbability = function(k) {</span>
<span class="token comment">//   let n = 6;</span>
<span class="token comment">//   let result = [], sumlist = [], map = new Map()</span>

<span class="token comment">//   const backTrack = (n, k, startIndex, sum) =&gt; {</span>
<span class="token comment">//     if (sumlist.length == k) {</span>
<span class="token comment">//       map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1)</span>
<span class="token comment">//       return</span>
<span class="token comment">//     }</span>
<span class="token comment">//     for (let i = startIndex; i &lt;= n; i++) {</span>
<span class="token comment">//       sumlist.push(i);</span>
<span class="token comment">//       sum += i;</span>
<span class="token comment">//       backTrack(n, k, startIndex, sum)</span>
<span class="token comment">//       sum -= i;</span>
<span class="token comment">//       sumlist.pop()</span>
<span class="token comment">//     }</span>
<span class="token comment">//   }</span>
<span class="token comment">//   backTrack(n, k, 1, 0)</span>

<span class="token comment">//   for (const count of map.values()) {</span>
<span class="token comment">//     result.push(count / Math.pow(6, k))</span>
<span class="token comment">//   }</span>

<span class="token comment">//   return result;</span>
<span class="token comment">// };</span>

<span class="token comment">//   \u628An\u4E2A\u9AB0\u5B50\u6254\u5728\u5730\u4E0A\uFF0C\u6240\u6709\u9AB0\u5B50\u671D\u4E0A\u4E00\u9762\u7684\u70B9\u6570\u4E4B\u548C\u4E3As\u3002\u8F93\u5165n\uFF0C\u6253\u5370\u51FAs\u7684\u6240\u6709\u53EF\u80FD\u7684\u503C\u51FA\u73B0\u7684\u6982\u7387\u3002</span>
<span class="token comment">// \u4F60\u9700\u8981\u7528\u4E00\u4E2A\u6D6E\u70B9\u6570\u6570\u7EC4\u8FD4\u56DE\u7B54\u6848\uFF0C\u5176\u4E2D\u7B2C i \u4E2A\u5143\u7D20\u4EE3\u8868\u8FD9 n \u4E2A\u9AB0\u5B50\u6240\u80FD\u63B7\u51FA\u7684\u70B9\u6570\u96C6\u5408\u4E2D\u7B2C i \u5C0F\u7684\u90A3\u4E2A\u7684\u6982\u7387\u3002</span>

<span class="token keyword">var</span> <span class="token function-variable function">dicesProbability</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">recursion</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> step</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>step <span class="token operator">&gt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span> <span class="token operator">?</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">recursion</span><span class="token punctuation">(</span>total <span class="token operator">+</span> i<span class="token punctuation">,</span> step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">recursion</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> count <span class="token keyword">of</span> map<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>count <span class="token operator">/</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">dicesProbability</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// var twoSum = function(n) {</span>
<span class="token comment">//   function diceCnt(n) {</span>
<span class="token comment">//     if (n === 1) {</span>
<span class="token comment">//         return [0, 1, 1, 1, 1, 1, 1];</span>
<span class="token comment">//     }</span>

<span class="token comment">//     cnts = diceCnt(n - 1);</span>
<span class="token comment">//     for (let i = 6 * n; i &gt; 0; i--) {</span>
<span class="token comment">//         cnts[i] = cnts</span>
<span class="token comment">//         .slice(Math.max(i - 6, 0), i)</span>
<span class="token comment">//         .reduce((acc, cur) =&gt; acc + cur, 0);</span>
<span class="token comment">//     }</span>

<span class="token comment">//     return cnts;</span>
<span class="token comment">//   }</span>
<span class="token comment">//   return diceCnt(n)</span>
<span class="token comment">//       .map(num =&gt; num / Math.pow(6, n))</span>
<span class="token comment">//       .filter(Boolean)</span>
<span class="token comment">// };</span>

<span class="token comment">// console.log(dicesProbability(2))</span>
<span class="token comment">// console.log(twoSum(1))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br></div></div><h2 id="\u6251\u514B\u724C\u987A\u5B50" tabindex="-1"><a class="header-anchor" href="#\u6251\u514B\u724C\u987A\u5B50" aria-hidden="true">#</a> \u6251\u514B\u724C\u987A\u5B50</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token comment">// var isStraight = function(nums) {</span>
<span class="token comment">//   const arr = nums.filter(item =&gt; item)</span>
<span class="token comment">//   const temp = [...new Set(arr)].sort()</span>
<span class="token comment">//   if (temp.length &lt; 5) {</span>
<span class="token comment">//     return false</span>
<span class="token comment">//   } else {</span>
<span class="token comment">//     let max = Math.max.apply(null, temp)</span>
<span class="token comment">//     let min = Math.min.apply(null, temp)</span>
<span class="token comment">//     if (max - min &lt; 5) {</span>
<span class="token comment">//       return true</span>
<span class="token comment">//     } else {</span>
<span class="token comment">//       return false</span>
<span class="token comment">//     }</span>
<span class="token comment">//   }</span>
<span class="token comment">// };</span>

<span class="token comment">// const poker = (arr) =&gt; {</span>
<span class="token comment">//   let arr1 = arr.filter(i =&gt; i);</span>
<span class="token comment">//   return new Set(arr1).size !== arr1.length ? false : </span>
<span class="token comment">//   !(Math.max(...arr1) - Math.min(...arr1) &gt; 4);</span>
<span class="token comment">// }</span>

<span class="token keyword">const</span> <span class="token function-variable function">poker</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> joker <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token operator">-</span>b<span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> joker<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> nums<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">-</span> nums<span class="token punctuation">[</span>joker<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">poker</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="\u67E5\u627E\u5B50\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u5B50\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u67E5\u627E\u5B50\u5B57\u7B26\u4E32</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lengthOfLongestSubstring</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> temp <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> temp<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>temp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>temp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;dbdf&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">lengthOfLongestSubstring</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u673A\u5668\u4EBA\u8FD0\u52A8\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#\u673A\u5668\u4EBA\u8FD0\u52A8\u8303\u56F4" aria-hidden="true">#</a> \u673A\u5668\u4EBA\u8FD0\u52A8\u8303\u56F4</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5730\u4E0A\u6709\u4E00\u4E2Am\u884Cn\u5217\u7684\u65B9\u683C\uFF0C\u4ECE\u5750\u6807 [0,0] \u5230\u5750\u6807 [m-1,n-1] \u3002</span>
  <span class="token comment">// \u4E00\u4E2A\u673A\u5668\u4EBA\u4ECE\u5750\u6807 [0, 0] \u7684\u683C\u5B50\u5F00\u59CB\u79FB\u52A8\uFF0C\u5B83\u6BCF\u6B21\u53EF\u4EE5\u5411\u5DE6\u3001\u53F3\u3001\u4E0A\u3001\u4E0B\u79FB\u52A8\u4E00\u683C\uFF08\u4E0D\u80FD\u79FB\u52A8\u5230\u65B9\u683C\u5916\uFF09\uFF0C</span>
  <span class="token comment">// \u4E5F\u4E0D\u80FD\u8FDB\u5165\u884C\u5750\u6807\u548C\u5217\u5750\u6807\u7684\u6570\u4F4D\u4E4B\u548C\u5927\u4E8Ek\u7684\u683C\u5B50\u3002\u4F8B\u5982\uFF0C\u5F53k\u4E3A18\u65F6\uFF0C</span>
  <span class="token comment">// \u673A\u5668\u4EBA\u80FD\u591F\u8FDB\u5165\u65B9\u683C [35, 37] \uFF0C\u56E0\u4E3A3+5+3+7=18\u3002\u4F46\u5B83\u4E0D\u80FD\u8FDB\u5165\u65B9\u683C [35, 38]\uFF0C</span>
  <span class="token comment">// \u56E0\u4E3A3+5+3+8=19\u3002\u8BF7\u95EE\u8BE5\u673A\u5668\u4EBA\u80FD\u591F\u5230\u8FBE\u591A\u5C11\u4E2A\u683C\u5B50\uFF1F</span>
  <span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">m</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">movingCount</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getTotal</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">getTotal</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">*</span> j <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          max <span class="token operator">=</span> i<span class="token operator">*</span>j
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num <span class="token operator">&gt;=</span> <span class="token number">10</span> <span class="token operator">?</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> pre <span class="token operator">+</span> cur<span class="token punctuation">)</span> <span class="token operator">:</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">movingCount</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="\u628A\u6570\u7EC4\u6392\u6210\u6700\u5C0F\u7684\u6570" tabindex="-1"><a class="header-anchor" href="#\u628A\u6570\u7EC4\u6392\u6210\u6700\u5C0F\u7684\u6570" aria-hidden="true">#</a> \u628A\u6570\u7EC4\u6392\u6210\u6700\u5C0F\u7684\u6570</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5251\u6307 Offer 45. \u628A\u6570\u7EC4\u6392\u6210\u6700\u5C0F\u7684\u6570</span>
  <span class="token comment">// \u8F93\u5165\u4E00\u4E2A\u975E\u8D1F\u6574\u6570\u6570\u7EC4\uFF0C\u628A\u6570\u7EC4\u91CC\u6240\u6709\u6570\u5B57\u62FC\u63A5\u8D77\u6765\u6392\u6210\u4E00\u4E2A\u6570\uFF0C\u6253\u5370\u80FD\u62FC\u63A5\u51FA\u7684\u6240\u6709\u6570\u5B57\u4E2D\u6700\u5C0F\u7684\u4E00\u4E2A\u3002</span>
  <span class="token doc-comment comment">/**
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
  * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
  */</span>
  <span class="token comment">// var minNumber = function(nums) {</span>
  <span class="token comment">//   let tmp = String(nums[0]),</span>
  <span class="token comment">//   arr = [tmp],</span>
  <span class="token comment">//   l = nums.length,</span>
  <span class="token comment">//   prev,</span>
  <span class="token comment">//   p;</span>

  <span class="token comment">//   for (let i = 1; i &lt; l; i++ ) {</span>
  <span class="token comment">//     tmp = String(nums[i]);</span>
  <span class="token comment">//     arr.push(tmp);</span>
  <span class="token comment">//     p = i;</span>
  <span class="token comment">//     while ( p &gt; 0 ) {</span>
  <span class="token comment">//       prev = arr[p - 1];</span>
  <span class="token comment">//       if (Number(tmp + prev) &lt; Number(prev + tmp)) {</span>
  <span class="token comment">//         arr[p] = arr[p - 1];</span>
  <span class="token comment">//         p--;</span>
  <span class="token comment">//       } else {</span>
  <span class="token comment">//         break;</span>
  <span class="token comment">//       }</span>
  <span class="token comment">//     }</span>
  <span class="token comment">//     if ( p !== i ) {</span>
  <span class="token comment">//       arr[p] = tmp;</span>
  <span class="token comment">//     }</span>
  <span class="token comment">//     continue;</span>
  <span class="token comment">//   }</span>

  <span class="token comment">//   return arr.join(&#39;&#39;);</span>
  <span class="token comment">// }</span>
  <span class="token comment">// var minNumber = function(nums) {</span>
  <span class="token comment">//   nums.sort((a, b) =&gt; a + &#39;&#39; + b &gt; b + &#39;&#39; + a ? 1 : -1 )</span>
  <span class="token comment">//   return nums.join(&#39;&#39;)</span>
  <span class="token comment">// }</span>
  <span class="token comment">// var minNumber = function(nums) {</span>
  <span class="token comment">//   // \u5982\u679Ca+b&gt;b+a  \u8BF4\u660Ea&gt;b</span>
  <span class="token comment">//   nums.sort((a, b) =&gt; { </span>
  <span class="token comment">//     return (a + &quot;&quot; + b &gt; b + &quot;&quot; + a) ? 1 : -1</span>
  <span class="token comment">//   })</span>
  <span class="token comment">//   let str = &quot;&quot;</span>
  <span class="token comment">//   nums.forEach(element =&gt; {</span>
  <span class="token comment">//     str += element</span>
  <span class="token comment">//   });</span>
  <span class="token comment">//   return str</span>
  <span class="token comment">// };</span>
  <span class="token comment">// const recursion = (nums, result, map = new Map()) =&gt; {</span>
  <span class="token comment">//   if (map.size === nums.length) {</span>
  <span class="token comment">//     result.push([...map.values()].join(&#39;&#39;))</span>
  <span class="token comment">//     return</span>
  <span class="token comment">//   }</span>
    
  <span class="token comment">//   for (let i = 0; i &lt; nums.length; i++) {</span>
  <span class="token comment">//     if (map.get(nums[i])) {</span>
  <span class="token comment">//       continue</span>
  <span class="token comment">//     }</span>
  <span class="token comment">//     map.set(nums[i], nums[i])</span>
  <span class="token comment">//     recursion(nums, result, map)</span>
  <span class="token comment">//     map.delete(nums[i])</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// }</span>
  <span class="token keyword">const</span> <span class="token function-variable function">recursion</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> total<span class="token punctuation">,</span> step<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>step <span class="token operator">===</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">recursion</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> total <span class="token operator">+</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>  step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">minNumber</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token function">recursion</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
    <span class="token comment">// result.sort((a, b) =&gt; {</span>
    <span class="token comment">//   if (a &lt; b) return -1;</span>
    <span class="token comment">//   if (a &gt; b) return 1;</span>
    <span class="token comment">//   return 0;</span>
    <span class="token comment">// })</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">minNumber</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br></div></div><h2 id="\u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u961F\u5217" aria-hidden="true">#</a> \u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u961F\u5217</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5251\u6307 Offer 09. \u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u961F\u5217</span>
  <span class="token comment">// \u5B8C\u6210\u961F\u5217\u7684push\u548Cpop\u64CD\u4F5C\uFF0C\u961F\u5217\u4E2D\u7684\u5143\u7D20\u4E3Aint</span>
  <span class="token comment">// \u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u4E00\u4E2A\u961F\u5217\u3002\u961F\u5217\u7684\u58F0\u660E\u5982\u4E0B\uFF0C\u8BF7\u5B9E\u73B0\u5B83\u7684\u4E24\u4E2A\u51FD\u6570 appendTail \u548C deleteHead \uFF0C</span>
  <span class="token comment">// \u5206\u522B\u5B8C\u6210\u5728\u961F\u5217\u5C3E\u90E8\u63D2\u5165\u6574\u6570\u548C\u5728\u961F\u5217\u5934\u90E8\u5220\u9664\u6574\u6570\u7684\u529F\u80FD\u3002(\u82E5\u961F\u5217\u4E2D\u6CA1\u6709\u5143\u7D20\uFF0CdeleteHead \u64CD\u4F5C\u8FD4\u56DE -1 )</span>
  <span class="token comment">//\u6808\u5F0F\u540E\u8FDB\u5148\u51FA\uFF0C\u961F\u5217\u662F\u5148\u8FDB\u5148\u51FA</span>
  <span class="token keyword">var</span> <span class="token function-variable function">CQueue</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stackA <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u5165\u961F\u6808</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stackB <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u51FA\u961F\u6808</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">value</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">CQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">push</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>stackA<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">CQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stackB<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stackB<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stackA<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>stackB<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stackA<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stackB<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stackB<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> param_2 <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> param_2<span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h2 id="\u53CD\u8F6C\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u53CD\u8F6C\u94FE\u8868" aria-hidden="true">#</a> \u53CD\u8F6C\u94FE\u8868</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5251\u6307 Offer II 024. \u53CD\u8F6C\u94FE\u8868</span>
  <span class="token comment">// \u8F93\u5165\u4E00\u4E2A\u94FE\u8868\uFF0C\u53CD\u8F6C\u94FE\u8868\u540E\uFF0C\u8F93\u51FA\u65B0\u94FE\u8868\u7684\u8868\u5934</span>
  <span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> cur <span class="token operator">=</span> head<span class="token punctuation">,</span> prev <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> prev
    prev <span class="token operator">=</span> cur
    cur <span class="token operator">=</span> next
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> prev
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>

<span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">(</span>next<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> node1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> node2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> node3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
node1<span class="token punctuation">.</span>next <span class="token operator">=</span> node2
node2<span class="token punctuation">.</span>next <span class="token operator">=</span> node3
<span class="token comment">// console.log(node1)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">reverseList</span><span class="token punctuation">(</span>node1<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="\u94FE\u8868\u4E2D\u5012\u6570\u7B2Ck\u4E2A\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868\u4E2D\u5012\u6570\u7B2Ck\u4E2A\u8282\u70B9" aria-hidden="true">#</a> \u94FE\u8868\u4E2D\u5012\u6570\u7B2Ck\u4E2A\u8282\u70B9</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5251\u6307 Offer 22. \u94FE\u8868\u4E2D\u5012\u6570\u7B2Ck\u4E2A\u8282\u70B9</span>
<span class="token comment">//   \u8F93\u5165\u4E00\u4E2A\u94FE\u8868\uFF0C\u8F93\u51FA\u8BE5\u94FE\u8868\u4E2D\u5012\u6570\u7B2Ck\u4E2A\u8282\u70B9\u3002\u4E3A\u4E86\u7B26\u5408\u5927\u591A\u6570\u4EBA\u7684\u4E60\u60EF\uFF0C\u672C\u9898\u4ECE1\u5F00\u59CB\u8BA1\u6570\uFF0C</span>
<span class="token comment">// \u5373\u94FE\u8868\u7684\u5C3E\u8282\u70B9\u662F\u5012\u6570\u7B2C1\u4E2A\u8282\u70B9\u3002</span>
<span class="token comment">// \u4F8B\u5982\uFF0C\u4E00\u4E2A\u94FE\u8868\u6709 6 \u4E2A\u8282\u70B9\uFF0C\u4ECE\u5934\u8282\u70B9\u5F00\u59CB\uFF0C\u5B83\u4EEC\u7684\u503C\u4F9D\u6B21\u662F 1\u30012\u30013\u30014\u30015\u30016\u3002</span>
<span class="token comment">// \u8FD9\u4E2A\u94FE\u8868\u7684\u5012\u6570\u7B2C 3 \u4E2A\u8282\u70B9\u662F\u503C\u4E3A 4 \u7684\u8282\u70B9\u3002</span>
<span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.next = null;
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token comment">//  var reverseList = function(head) {</span>
<span class="token comment">//   let cur = head, prev = null</span>
<span class="token comment">//   while (cur) {</span>
<span class="token comment">//     const next = cur.next</span>
<span class="token comment">//     cur.next = prev</span>
<span class="token comment">//     prev = cur</span>
<span class="token comment">//     cur = next</span>
<span class="token comment">//   }</span>
<span class="token comment">//   return prev</span>
<span class="token comment">// };</span>
<span class="token comment">// var getKthFromEnd = function(head, k) {</span>
<span class="token comment">//   head = reverseList(head)</span>
<span class="token comment">//   let step = 1;</span>
<span class="token comment">//   while (step !== k) {</span>
<span class="token comment">//     head = head.next</span>
<span class="token comment">//     step++</span>
<span class="token comment">//   }</span>
<span class="token comment">//   return head</span>
<span class="token comment">// };</span>

<span class="token comment">// var getKthFromEnd = function(head, k) {</span>
<span class="token comment">//   let length = 0, p = head</span>
<span class="token comment">//   while (p) {</span>
<span class="token comment">//     p = p.next;</span>
<span class="token comment">//     length++</span>
<span class="token comment">//   }</span>

<span class="token comment">//   p = head</span>
<span class="token comment">//   for (let i = 0; i &lt; length - k; i++) {</span>
<span class="token comment">//     p = p.next</span>
<span class="token comment">//   }</span>
<span class="token comment">//   return p</span>
<span class="token comment">// };</span>

<span class="token keyword">var</span> <span class="token function-variable function">getKthFromEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> head<span class="token punctuation">,</span> right <span class="token operator">=</span> head
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u53F3\u6307\u9488\u5411\u53F3\u79FB\u52A8k\u4F4D\uFF0C\u518D\u540C\u65F6\u79FB\u52A8\u76F4\u5230\u53F3\u6307\u9488\u5230\u5934\uFF0C\u5219\u5DE6\u6307\u9488\u5728\u5012\u6570\u7B2Ck\u4E2A\u4F4D\u7F6E</span>
    right <span class="token operator">=</span> right<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    left <span class="token operator">=</span> left<span class="token punctuation">.</span>next
    right <span class="token operator">=</span> right<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> left
<span class="token punctuation">}</span>



<span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">(</span>next<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> node1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> node2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> node3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> node4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> node5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> node6 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
node1<span class="token punctuation">.</span>next <span class="token operator">=</span> node2
node2<span class="token punctuation">.</span>next <span class="token operator">=</span> node3
node3<span class="token punctuation">.</span>next <span class="token operator">=</span> node4
node4<span class="token punctuation">.</span>next <span class="token operator">=</span> node5
node5<span class="token punctuation">.</span>next <span class="token operator">=</span> node6

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getKthFromEnd</span><span class="token punctuation">(</span>node1<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br></div></div><h2 id="\u4FE9\u4E2A\u94FE\u8868\u7684\u516C\u5171\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4FE9\u4E2A\u94FE\u8868\u7684\u516C\u5171\u8282\u70B9" aria-hidden="true">#</a> \u4FE9\u4E2A\u94FE\u8868\u7684\u516C\u5171\u8282\u70B9</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
  * Definition for singly-linked list.
  * function ListNode(val) <span class="token punctuation">{</span>
  *     this.val = val;
  *     this.next = null;
  * <span class="token punctuation">}</span>
  */</span>

  <span class="token doc-comment comment">/**
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">headA</span>
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">headB</span>
  * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
  */</span>
  <span class="token keyword">var</span> <span class="token function-variable function">getIntersectionNode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">headA<span class="token punctuation">,</span> headB</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>headA <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> headB <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">let</span> p1 <span class="token operator">=</span> headA<span class="token punctuation">,</span> p2 <span class="token operator">=</span> headB<span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>p1 <span class="token operator">!==</span> p2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        p1 <span class="token operator">=</span> p1 <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> headB <span class="token operator">:</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        p2 <span class="token operator">=</span> p2 <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> headA <span class="token operator">:</span> p2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> p1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">(</span>next<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> node1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> node2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> node3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> node4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> node5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> node6 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
  node1<span class="token punctuation">.</span>next <span class="token operator">=</span> node2
  node2<span class="token punctuation">.</span>next <span class="token operator">=</span> node3
  node3<span class="token punctuation">.</span>next <span class="token operator">=</span> node4
  node4<span class="token punctuation">.</span>next <span class="token operator">=</span> node5
  node5<span class="token punctuation">.</span>next <span class="token operator">=</span> node6
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="\u590D\u5236\u590D\u6742\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u590D\u6742\u94FE\u8868" aria-hidden="true">#</a> \u590D\u5236\u590D\u6742\u94FE\u8868</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
   * // Definition for a Node.
   * function Node(val, next, random) <span class="token punctuation">{</span>
   *    this.val = val;
   *    this.next = next;
   *    this.random = random;
   * <span class="token punctuation">}</span>;
   */</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">//  \u8BF7\u5B9E\u73B0 copyRandomList \u51FD\u6570\uFF0C\u590D\u5236\u4E00\u4E2A\u590D\u6742\u94FE\u8868\u3002\u5728\u590D\u6742\u94FE\u8868\u4E2D\uFF0C\u6BCF\u4E2A\u8282\u70B9\u9664\u4E86\u6709\u4E00\u4E2A next \u6307\u9488\u6307\u5411\u4E0B\u4E00\u4E2A\u8282\u70B9\uFF0C\u8FD8\u6709\u4E00\u4E2A random \u6307\u9488\u6307\u5411\u94FE\u8868\u4E2D\u7684\u4EFB\u610F\u8282\u70B9\u6216\u8005 null\u3002</span>
  <span class="token comment">// var copyRandomList = function(head, cachedNode = new Map()) {</span>
  <span class="token comment">//   if (head === null) {</span>
  <span class="token comment">//       return null;</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   if (!cachedNode.has(head)) {</span>
  <span class="token comment">//       cachedNode.set( head, {val: head.val} );</span>
  <span class="token comment">//       Object.assign(</span>
  <span class="token comment">//         cachedNode.get(head),</span>
  <span class="token comment">//         {</span>
  <span class="token comment">//           next: copyRandomList(head.next, cachedNode),</span>
  <span class="token comment">//           random: copyRandomList(head.random, cachedNode)</span>
  <span class="token comment">//         }</span>
  <span class="token comment">//       )</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   return cachedNode.get(head);</span>
  <span class="token comment">// };</span>
  <span class="token comment">// var copyRandomList = function(head) {</span>
  <span class="token comment">//   if (head === null) {</span>
  <span class="token comment">//     return null;</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   for (let node = head; node != null; node = node.next.next){</span>
  <span class="token comment">//     const nodeNew = new ListNode(node.val, node.next, null);</span>
  <span class="token comment">//     node.next = nodeNew</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   for (let node = head; node != null; node = node.next.next) {</span>
  <span class="token comment">//     const nodeNew = node.next;</span>
  <span class="token comment">//     nodeNew.random = nodeNew.random !== null ? node.random.next : null;</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   const headNew = head.next;</span>
  <span class="token comment">//   for (let node = head; node !== null; node = node.next) {</span>
  <span class="token comment">//     const nodeNew = node.next;</span>
  <span class="token comment">//     node.next = node.next.next;</span>
  <span class="token comment">//     nodeNew.next = nodeNew.next !== null ? nodeNew.next.next : null</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   return headNew;</span>
  <span class="token comment">// }</span>
  <span class="token keyword">var</span> <span class="token function-variable function">copyRandomList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> node <span class="token operator">=</span> head<span class="token punctuation">;</span> node <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">;</span> node <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> nodeNew <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">,</span> node<span class="token punctuation">.</span>next<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> nodeNew<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// for (let node = head; node !== null; node = node.next.next) {</span>
    <span class="token comment">//     const nodeNew = node.next;</span>
    <span class="token comment">//     nodeNew.random = (node.random !== null) ? node.random.next : null;</span>
    <span class="token comment">// }</span>
    <span class="token comment">// const headNew = head.next;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> node <span class="token operator">=</span> head<span class="token punctuation">;</span> node <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">;</span> node <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> nodeNew <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token comment">// nodeNew.random = node</span>
        nodeNew<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">(</span>nodeNew<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> nodeNew<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// return headNew;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> next<span class="token punctuation">,</span> random</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">(</span>next<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>random <span class="token operator">=</span> <span class="token punctuation">(</span>random<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> random<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> node1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> node2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> node3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> node4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> node5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token comment">// const node6 = new ListNode(6)</span>
  node1<span class="token punctuation">.</span>next <span class="token operator">=</span> node2
  node2<span class="token punctuation">.</span>next <span class="token operator">=</span> node3
  node3<span class="token punctuation">.</span>next <span class="token operator">=</span> node4
  node4<span class="token punctuation">.</span>next <span class="token operator">=</span> node5
  
  node1<span class="token punctuation">.</span>random <span class="token operator">=</span> <span class="token keyword">null</span>
  node2<span class="token punctuation">.</span>random <span class="token operator">=</span> node1
  node3<span class="token punctuation">.</span>random <span class="token operator">=</span> node5
  node4<span class="token punctuation">.</span>random <span class="token operator">=</span> node3
  node5<span class="token punctuation">.</span>random <span class="token operator">=</span> node1

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">copyRandomList</span><span class="token punctuation">(</span>node1<span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br></div></div><h2 id="\u5408\u5E76\u4FE9\u4E2A\u6392\u5E8F\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u4FE9\u4E2A\u6392\u5E8F\u94FE\u8868" aria-hidden="true">#</a> \u5408\u5E76\u4FE9\u4E2A\u6392\u5E8F\u94FE\u8868</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8F93\u5165\u4E24\u4E2A\u9012\u589E\u6392\u5E8F\u7684\u94FE\u8868\uFF0C\u5408\u5E76\u8FD9\u4E24\u4E2A\u94FE\u8868\u5E76\u4F7F\u65B0\u94FE\u8868\u4E2D\u7684\u8282\u70B9\u4ECD\u7136\u662F\u9012\u589E\u6392\u5E8F\u7684\u3002</span>
  <span class="token doc-comment comment">/**
  * Definition for singly-linked list.
  * function ListNode(val) <span class="token punctuation">{</span>
  *     this.val = val;
  *     this.next = null;
  * <span class="token punctuation">}</span>
  */</span>
  <span class="token doc-comment comment">/**
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l1</span>
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l2</span>
  * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
  */</span>
  <span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> dum <span class="token operator">=</span> cur
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l1 <span class="token operator">||</span> l2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>l1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> l2<span class="token punctuation">;</span>
        <span class="token keyword">return</span> dum<span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>l2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> l1<span class="token punctuation">;</span>
        <span class="token keyword">return</span> dum<span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> l1<span class="token punctuation">;</span>
        l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> l2
        l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dum<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token comment">// var mergeTwoLists = function(l1, l2) {</span>
  <span class="token comment">//   if (l1 === null) return l2;</span>
  <span class="token comment">//   if (l2 === null) return l1;</span>
  <span class="token comment">//   if (l1.val &lt; l2.val) {</span>
  <span class="token comment">//     l1.next = mergeTwoLists(l1.next, l2);</span>
  <span class="token comment">//     return l1;</span>
  <span class="token comment">//   } else {</span>
  <span class="token comment">//     l2.next = mergeTwoLists(l1, l2.next);</span>
  <span class="token comment">//     return l2;</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// };</span>
  <span class="token comment">// var mergeTwoLists = function(l1, l2) {</span>
  <span class="token comment">//   let current = new ListNode();</span>
  <span class="token comment">//   const dummy = current;</span>

  <span class="token comment">//   while (l1 || l2) {</span>
  <span class="token comment">//     if (!l1) {</span>
  <span class="token comment">//       current.next = l2;</span>
  <span class="token comment">//       return dummy.next;</span>
  <span class="token comment">//     } else if (!l2) {</span>
  <span class="token comment">//       current.next = l1;</span>
  <span class="token comment">//       return dummy.next;</span>
  <span class="token comment">//     }</span>

  <span class="token comment">//     if (l1.val &lt;= l2.val) {</span>
  <span class="token comment">//       current.next = l1;</span>
  <span class="token comment">//       l1 = l1.next;</span>
  <span class="token comment">//     } else {</span>
  <span class="token comment">//       current.next = l2;</span>
  <span class="token comment">//       l2 = l2.next;</span>
  <span class="token comment">//     }</span>

  <span class="token comment">//     current = current.next;</span>
  <span class="token comment">//   }</span>

  <span class="token comment">//   return dummy.next;</span>
  <span class="token comment">// };</span>
  <span class="token comment">// var mergeTwoLists = function(l1, l2) {</span>
  <span class="token comment">//   let p1 = l1, p = null, len = 0;</span>
  <span class="token comment">//   while (p1) {</span>
  <span class="token comment">//     if (p1.next) {</span>
  <span class="token comment">//       p1 = p1.next</span>
  <span class="token comment">//       continue</span>
  <span class="token comment">//     }</span>
  <span class="token comment">//     l1.next = l2</span>
  <span class="token comment">//     break;</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   p1 = l1</span>
  <span class="token comment">//   while (p1) {</span>
  <span class="token comment">//     p1 = p1.next</span>
  <span class="token comment">//     len++;</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   console.log(len, l1)</span>
  <span class="token comment">//   // let low = 0, fast = len;</span>
  <span class="token comment">//   // while (condition) {</span>
      
  <span class="token comment">//   // }</span>
  <span class="token comment">// };</span>

  <span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">(</span>next<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> node1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> node2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> node3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
  node1<span class="token punctuation">.</span>next <span class="token operator">=</span> node2
  node2<span class="token punctuation">.</span>next <span class="token operator">=</span> node3

  <span class="token keyword">const</span> node4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> node5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> node6 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
  node4<span class="token punctuation">.</span>next <span class="token operator">=</span> node5
  node5<span class="token punctuation">.</span>next <span class="token operator">=</span> node6

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>node1<span class="token punctuation">,</span> node4<span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br></div></div><h2 id="\u94FE\u8868\u4E2D\u73AF\u7684\u5165\u53E3\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868\u4E2D\u73AF\u7684\u5165\u53E3\u8282\u70B9" aria-hidden="true">#</a> \u94FE\u8868\u4E2D\u73AF\u7684\u5165\u53E3\u8282\u70B9</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* \u7ED9\u5B9A\u4E00\u4E2A\u94FE\u8868\uFF0C\u8FD4\u56DE\u94FE\u8868\u5F00\u59CB\u5165\u73AF\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\u3002
  \u4ECE\u94FE\u8868\u7684\u5934\u8282\u70B9\u5F00\u59CB\u6CBF\u7740 next \u6307\u9488\u8FDB\u5165\u73AF\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\u4E3A\u73AF\u7684\u5165\u53E3\u8282\u70B9\u3002
  \u5982\u679C\u94FE\u8868\u65E0\u73AF\uFF0C\u5219\u8FD4\u56DE null\u3002
  \u4E3A\u4E86\u8868\u793A\u7ED9\u5B9A\u94FE\u8868\u4E2D\u7684\u73AF\uFF0C\u6211\u4EEC\u4F7F\u7528\u6574\u6570 pos \u6765\u8868\u793A\u94FE\u8868\u5C3E\u8FDE\u63A5\u5230\u94FE\u8868\u4E2D\u7684\u4F4D\u7F6E\uFF08\u7D22\u5F15\u4ECE 0 \u5F00\u59CB\uFF09\u3002
  \u5982\u679C pos \u662F -1\uFF0C\u5219\u5728\u8BE5\u94FE\u8868\u4E2D\u6CA1\u6709\u73AF\u3002\u6CE8\u610F\uFF0Cpos \u4EC5\u4EC5\u662F\u7528\u4E8E\u6807\u8BC6\u73AF\u7684\u60C5\u51B5\uFF0C\u5E76\u4E0D\u4F1A\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u5230\u51FD\u6570\u4E2D\u3002
  \u8BF4\u660E\uFF1A\u4E0D\u5141\u8BB8\u4FEE\u6539\u7ED9\u5B9A\u7684\u94FE\u8868\u3002 */</span>
  <span class="token doc-comment comment">/**
  * Definition for singly-linked list.
  * function ListNode(val) <span class="token punctuation">{</span>
  *     this.val = val;
  *     this.next = null;
  * <span class="token punctuation">}</span>
  */</span>

  <span class="token doc-comment comment">/**
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
  * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
  */</span>
    <span class="token comment">// var detectCycle = function(head) {</span>
    <span class="token comment">//   let map = new Map(), p = head;</span>
    <span class="token comment">//   while (p) {</span>
    <span class="token comment">//     map.set(p);</span>
    <span class="token comment">//     if (map.has(p.next)) {</span>
    <span class="token comment">//       return p.next;</span>
    <span class="token comment">//     }</span>
    <span class="token comment">//     p = p.next;</span>
    <span class="token comment">//   }</span>
    <span class="token comment">//   return null;</span>
    <span class="token comment">// };</span>

    <span class="token keyword">var</span> <span class="token function-variable function">detectCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> low <span class="token operator">=</span> head<span class="token punctuation">,</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> fast<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        low <span class="token operator">=</span> low<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">===</span> low<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!==</span> low<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        low <span class="token operator">=</span> low<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> fast<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="\u548C\u4E3As\u7684\u4FE9\u4E2A\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#\u548C\u4E3As\u7684\u4FE9\u4E2A\u6570\u5B57" aria-hidden="true">#</a> \u548C\u4E3As\u7684\u4FE9\u4E2A\u6570\u5B57</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8F93\u5165\u4E00\u4E2A\u9012\u589E\u6392\u5E8F\u7684\u6570\u7EC4\u548C\u4E00\u4E2A\u6570\u5B57s\uFF0C\u5728\u6570\u7EC4\u4E2D\u67E5\u627E\u4E24\u4E2A\u6570\uFF0C\u4F7F\u5F97\u5B83\u4EEC\u7684\u548C\u6B63\u597D\u662Fs\u3002</span>
  <span class="token comment">// \u5982\u679C\u6709\u591A\u5BF9\u6570\u5B57\u7684\u548C\u7B49\u4E8Es\uFF0C\u5219\u8F93\u51FA\u4EFB\u610F\u4E00\u5BF9\u5373\u53EF\u3002</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> end <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> s <span class="token operator">=</span> nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>end<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> end<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> start<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//\u66B4\u529B\u6CD5  \u65F6\u95F4O(n^2)  \u7A7A\u95F4O(1)</span>
  <span class="token comment">// var twoSum = function(nums, target) {</span>
  <span class="token comment">//   let result = []</span>
  <span class="token comment">//   for (let i = 0; i &lt; nums.length; i++) {</span>
  <span class="token comment">//     for (let j = i + 1; j &lt; nums.length; j++) {</span>
  <span class="token comment">//       if (nums[i] + nums[j] === target) {</span>
  <span class="token comment">//         [].push.call(result, nums[i], nums[j])</span>
  <span class="token comment">//         return result;</span>
  <span class="token comment">//       } else {</span>
  <span class="token comment">//         continue;</span>
  <span class="token comment">//       }</span>
  <span class="token comment">//     }</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   return result</span>
  <span class="token comment">// };</span>
  <span class="token comment">//\u53CC\u6307\u9488  \u65F6\u95F4\u590D\u6742\u5EA6O(n) \u7A7A\u95F4\u590D\u6742\u5EA6 O(1)</span>
  <span class="token comment">// var twoSum = function(nums, target) {</span>
  <span class="token comment">//   let i = 0, j = nums.length - 1;</span>
  <span class="token comment">//   while(i &lt; j) {</span>
  <span class="token comment">//       let s = nums[i] + nums[j];</span>
  <span class="token comment">//       if(s &lt; target) i++;</span>
  <span class="token comment">//       else if(s &gt; target) j--;</span>
  <span class="token comment">//       else return [nums[i], nums[j]];</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   return [];</span>
  <span class="token comment">// }</span>
  <span class="token comment">// let arr = [2,7,11,15]</span>
  <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">26</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">31</span><span class="token punctuation">,</span><span class="token number">47</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">]</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">twoSum</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="\u8C03\u6574\u6570\u7EC4\u987A\u5E8F\u4F7F\u5947\u6570\u4F4D\u4E8E\u5076\u6570\u524D\u9762" tabindex="-1"><a class="header-anchor" href="#\u8C03\u6574\u6570\u7EC4\u987A\u5E8F\u4F7F\u5947\u6570\u4F4D\u4E8E\u5076\u6570\u524D\u9762" aria-hidden="true">#</a> \u8C03\u6574\u6570\u7EC4\u987A\u5E8F\u4F7F\u5947\u6570\u4F4D\u4E8E\u5076\u6570\u524D\u9762</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5251\u6307 Offer 21. \u8C03\u6574\u6570\u7EC4\u987A\u5E8F\u4F7F\u5947\u6570\u4F4D\u4E8E\u5076\u6570\u524D\u9762</span>
  <span class="token comment">// \u8F93\u5165\u4E00\u4E2A\u6574\u6570\u6570\u7EC4\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\u6765\u8C03\u6574\u8BE5\u6570\u7EC4\u4E2D\u6570\u5B57\u7684\u987A\u5E8F\uFF0C\u4F7F\u5F97\u6240\u6709\u5947\u6570\u4F4D\u4E8E\u6570\u7EC4\u7684\u524D\u534A\u90E8\u5206\uFF0C\u6240\u6709\u5076\u6570\u4F4D\u4E8E\u6570\u7EC4\u7684\u540E\u534A\u90E8\u5206\u3002</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token comment">// var exchange = function(nums) {</span>
  <span class="token comment">//   let start = 0, end = nums.length - 1;</span>
  <span class="token comment">//   while (start &lt; end) {</span>
  <span class="token comment">//     if (nums[start] % 2 === 0) {</span>
  <span class="token comment">//       let temp = nums[start]</span>
  <span class="token comment">//       nums[start] = nums[end]</span>
  <span class="token comment">//       nums[end] = temp</span>
  <span class="token comment">//       end--</span>
  <span class="token comment">//     } else {</span>
  <span class="token comment">//       start++</span>
  <span class="token comment">//     }</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   return nums</span>
  <span class="token comment">// };</span>
  <span class="token keyword">var</span> <span class="token function-variable function">exchange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> fast <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span> <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u4E3A0\u662F\u5076\u6570\uFF0C1\u4EE3\u8868\u5947\u6570</span>
        <span class="token keyword">let</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token punctuation">;</span>
        nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token punctuation">;</span>
        nums<span class="token punctuation">[</span>low<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        low<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      fast<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> nums<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">exchange</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="\u56DE\u6EAF\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u56DE\u6EAF\u6CD5" aria-hidden="true">#</a> \u56DE\u6EAF\u6CD5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u548C\u4E3As\u7684\u8FDE\u7EED\u6B63\u6574\u6570\u5E8F\u5217</span>
<span class="token comment">//    \u8F93\u5165\u4E00\u4E2A\u6B63\u6574\u6570 target \uFF0C\u8F93\u51FA\u6240\u6709\u548C\u4E3A target \u7684\u8FDE\u7EED\u6B63\u6574\u6570\u5E8F\u5217\uFF08\u81F3\u5C11\u542B\u6709\u4E24\u4E2A\u6570\uFF09\u3002</span>
<span class="token comment">//    \u5E8F\u5217\u5185\u7684\u6570\u5B57\u7531\u5C0F\u5230\u5927\u6392\u5217\uFF0C\u4E0D\u540C\u5E8F\u5217\u6309\u7167\u9996\u4E2A\u6570\u5B57\u4ECE\u5C0F\u5230\u5927\u6392\u5217\u3002</span>
  <span class="token doc-comment comment">/**
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
  * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  */</span>
  <span class="token keyword">var</span> <span class="token function-variable function">findContinuousSequence</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">trackback</span><span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> sum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">===</span> target <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ans<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>result<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> target <span class="token operator">-</span> sum <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">trackback</span><span class="token punctuation">(</span>start <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">,</span> sum <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        result<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">trackback</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findContinuousSequence</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="\u53CC\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u53CC\u6307\u9488" aria-hidden="true">#</a> \u53CC\u6307\u9488</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u56DE\u6587\u6570</span>
<span class="token comment">/* \u7ED9\u4F60\u4E00\u4E2A\u6574\u6570 x \uFF0C\u5982\u679C x \u662F\u4E00\u4E2A\u56DE\u6587\u6574\u6570\uFF0C\u8FD4\u56DE true \uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE false \u3002
  \u56DE\u6587\u6570\u662F\u6307\u6B63\u5E8F\uFF08\u4ECE\u5DE6\u5411\u53F3\uFF09\u548C\u5012\u5E8F\uFF08\u4ECE\u53F3\u5411\u5DE6\uFF09\u8BFB\u90FD\u662F\u4E00\u6837\u7684\u6574\u6570\u3002\u4F8B\u5982\uFF0C121 \u662F\u56DE\u6587\uFF0C\u800C 123 \u4E0D\u662F\u3002 */</span>
  <span class="token doc-comment comment">/**
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
  * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
  */</span>
  <span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x <span class="token operator">=</span> x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>right <span class="token operator">=</span> x<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> x<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        left<span class="token operator">++</span><span class="token punctuation">;</span>
        right<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isPalindrome</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">121</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="\u9AD8\u5EA6\u68C0\u67E5\u5668" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u5EA6\u68C0\u67E5\u5668" aria-hidden="true">#</a> \u9AD8\u5EA6\u68C0\u67E5\u5668</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">heights</span>
  * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
  */</span>
  <span class="token keyword">var</span> <span class="token function-variable function">heightChecker</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">heights</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>heights<span class="token punctuation">]</span><span class="token punctuation">;</span>
    temp<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token operator">-</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> heights<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> heights<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count<span class="token operator">++</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> <span class="token function-variable function">heightChecker</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">heights</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// int[] arr = new int[101];</span>
    <span class="token comment">//     for (int height : heights) {</span>
    <span class="token comment">//         arr[height]++;</span>
    <span class="token comment">//     }</span>
    <span class="token comment">//     int count = 0;</span>
    <span class="token comment">//     for (int i = 1, j = 0; i &lt; arr.length; i++) {</span>
    <span class="token comment">//         while (arr[i]-- &gt; 0) {</span>
    <span class="token comment">//             if (heights[j++] != i) count++;</span>
    <span class="token comment">//         }</span>
    <span class="token comment">//     }</span>
    <span class="token comment">//     return count;</span>
  <span class="token punctuation">}</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">heightChecker</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="\u540C\u6784\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u540C\u6784\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u540C\u6784\u5B57\u7B26\u4E32</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* \u7ED9\u5B9A\u4E24\u4E2A\u5B57\u7B26\u4E32 s \u548C t\uFF0C\u5224\u65AD\u5B83\u4EEC\u662F\u5426\u662F\u540C\u6784\u7684\u3002
\u5982\u679C s \u4E2D\u7684\u5B57\u7B26\u53EF\u4EE5\u6309\u67D0\u79CD\u6620\u5C04\u5173\u7CFB\u66FF\u6362\u5F97\u5230 t \uFF0C\u90A3\u4E48\u8FD9\u4E24\u4E2A\u5B57\u7B26\u4E32\u662F\u540C\u6784\u7684\u3002
\u6BCF\u4E2A\u51FA\u73B0\u7684\u5B57\u7B26\u90FD\u5E94\u5F53\u6620\u5C04\u5230\u53E6\u4E00\u4E2A\u5B57\u7B26\uFF0C\u540C\u65F6\u4E0D\u6539\u53D8\u5B57\u7B26\u7684\u987A\u5E8F\u3002\u4E0D\u540C\u5B57\u7B26\u4E0D\u80FD\u6620\u5C04\u5230\u540C\u4E00\u4E2A\u5B57\u7B26\u4E0A\uFF0C
\u76F8\u540C\u5B57\u7B26\u53EA\u80FD\u6620\u5C04\u5230\u540C\u4E00\u4E2A\u5B57\u7B26\u4E0A\uFF0C\u5B57\u7B26\u53EF\u4EE5\u6620\u5C04\u5230\u81EA\u5DF1\u672C\u8EAB\u3002 */</span>
  <span class="token doc-comment comment">/**
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">t</span>
  * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
  */</span>
  <span class="token keyword">var</span> <span class="token function-variable function">isIsomorphic</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">!==</span> t<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> map1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> map2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map1<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        map1<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map2<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        map2<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>map1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!==</span> t<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">||</span> map2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!==</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="\u5220\u9664\u91CD\u590D\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u91CD\u590D\u5143\u7D20" aria-hidden="true">#</a> \u5220\u9664\u91CD\u590D\u5143\u7D20</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* \u7ED9\u5B9A\u4E00\u4E2A\u6392\u5E8F\u6570\u7EC4\uFF0C\u4F60\u9700\u8981\u5728\u539F\u5730\u5220\u9664\u91CD\u590D\u5143\u7D20\uFF0C\u8FD4\u56DE\u79FB\u9664\u540E\u6570\u7EC4\u7684\u65B0\u957F\u5EA6\u3002
  \u4E0D\u8BB8\u4F7F\u7528\u989D\u5916\u7684\u6570\u7EC4\u7A7A\u95F4\uFF0C\u5E76\u4F7F\u7528O(1)\u7684\u7A7A\u95F4\u590D\u6742\u5EA6 */</span>
  <span class="token keyword">var</span> <span class="token function-variable function">noRepeat</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> arr<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        i<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> <span class="token function-variable function">removeDuplicates</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">!==</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
        nums<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">++</span>count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">removeDuplicates</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,49);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
