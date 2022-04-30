import{c as r}from"./app.7d96ffc6.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const e={},p=r('<h1 id="http\u8FDB\u9636" tabindex="-1"><a class="header-anchor" href="#http\u8FDB\u9636" aria-hidden="true">#</a> http\u8FDB\u9636</h1><p>\u5BC6\u7801\u5B66<br>\u5BC6\u7801\u5B66\u7684\u5904\u7406\u5BF9\u8C61\u662F\u6570\u5B57\u548C\u5B57\u7B26\u4E32<br>\u52A0\u5BC6<br>\u5BF9\u79F0\u52A0\u5BC6\uFF08AES\u3001DES\u30013DES\uFF09 \u52A0\u5BC6\u79D8\u94A5\u548C\u89E3\u5BC6\u79D8\u94A5\u76F8\u540C\u7684\u53EB\u5BF9\u79F0\u52A0\u5BC6<br>\u975E\u5BF9\u79F0\u52A0\u5BC6\uFF08RSA\uFF09</p><p>\u5BC6\u94A5\u4EA4\u6362\u7B97\u6CD5\uFF08\u5BF9\u79F0\u52A0\u5BC6\uFF09<br>Diffie-Hellman\u7B97\u6CD5\u662F\u4E00\u79CD\u8457\u540D\u7684\u5BC6\u94A5\u534F\u5546\u7B97\u6CD5\uFF0C\u8FD9\u79CD\u7B97\u6CD5\u53EF\u4EE5\u4F7F\u5F97\u4FE1\u606F\u4EA4\u6362\u7684\u53CC\u65B9\u901A\u8FC7\u516C\u5F00\u7684\u975E\u5B89\u5168\u7684\u7F51\u7EDC\u534F\u5546\u751F\u6210\u5B89\u5168\u7684\u5171\u4EAB\u5BC6\u94A5</p><p>SSL/TLS\u534F\u8BAE<br>\u4F20\u8F93\u5C42\u5B89\u5168\u6027\u534F\u8BAE(Transport Layer Security),\u53CA\u5176\u524D\u8EAB \u5B89\u5168\u5957\u63A5\u5C42(Secure Sockets Layer)\u662F\u4E00\u79CD\u5B89\u5168\u534F\u8BAE\uFF0C\u76EE\u7684\u662F\u4F4D\u4E92\u8054\u7F51\u901A\u4FE1\u63D0\u4F9B\u5B89\u5168\u53CA\u6570\u636E\u5B8C\u6574\u6027\u4FDD\u969C</p><p>HTTPS\u534F\u8BAE\u7684\u5B89\u5168\u6027\u7531SSL\u534F\u8BAE\u5B9E\u73B0\uFF0C\u5F53\u524D\u4F7F\u7528\u7684TLS\u534F\u8BAE1.2\u7248\u672C\u5305\u542B\u4E86\u56DB\u4E2A\u6838\u5FC3\u5B50\u534F\u8BAE\uFF1A\u63E1\u624B\u534F\u8BAE\u3001\u5BC6\u94A5\u914D\u7F6E\u5207\u6362\u534F\u8BAE\u3001\u5E94\u7528\u6570\u636E\u534F\u8BAE\u53CA\u62A5\u8B66\u534F\u8BAE\u3002<br>\uFF08\u9632\u9493\u9C7C\uFF0C\u9493\u9C7C\u7F51\u7AD9\u6CA1\u6709\u7B7E\u53D1\u8BC1\u4E66\uFF0C\u4E5F\u5C31\u662FCA\uFF0C\u6D4F\u89C8\u5668\u4F1A\u63D0\u793A\uFF09<br>\u8BC1\u4E66 CA\uFF08\u8BC1\u4E66\u7B7E\u53D1\u673A\u6784\uFF09<br>\u901A\u8FC7CA\u53D1\u653E\u7684\u8BC1\u4E66\u5B8C\u6210\u5BC6\u94A5\u7684\u4EA4\u6362<br>\uFF08\u6839\u8BC1\u4E66 =\u300B \u4E8C\u7EA7\u7B7E\u53D1\u673A\u6784 =\u300B \u57DF\u540D\uFF09</p><p>HTTPS\u534F\u8BAE\u5206\u6790<br>TLS\u63E1\u624B\u7684\u6B65\u9AA4\uFF1A<br>1.Client Hello:\u5BA2\u6237\u7AEF\u53D1\u9001\u6240\u652F\u6301\u7684SSL/TLS\u6700\u9AD8\u534F\u8BAE\u7248\u672C\u53F7\u548C\u6240\u652F\u6301\u7684\u52A0\u5BC6\u7B97\u6CD5\u96C6\u5408\u53CA\u538B\u7F29\u65B9\u6CD5\u96C6\u5408\u7B49\u4FE1\u606F\u7ED9\u670D\u52A1\u5668\u7AEF<br>2.ServerHello: \u670D\u52A1\u5668\u7AEF\u6536\u5230\u5BA2\u6237\u7AEF\u4FE1\u606F\u540E\u3002\u9009\u5B9A\u53CC\u65B9\u90FD\u80FD\u652F\u6301\u7684SSL/TLS\u534F\u8BAE\u7248\u672C\u548C\u52A0\u5BC6\u65B9\u6CD5\u53CA\u538B\u7F29\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002<br>\uFF08\u524D\u4FE9\u6B65\u53CC\u53D1\u7EDF\u4E00\u7248\u672C\u53F7\uFF0C\u534F\u5546\uFF09<br>3.SendCertificate: \u670D\u52A1\u5668\u7AEF\u53D1\u9001\u670D\u52A1\u7AEF\u8BC1\u4E66\u7ED9\u5BA2\u6237\u7AEF<br>4.RequestCertificate: \u5982\u679C\u9009\u62E9\u53CC\u5411\u9A8C\u8BC1\uFF0C\u670D\u52A1\u5668\u7AEF\u5411\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5BA2\u6237\u7AEF\u8BC1\u4E66<br>5.ServerHelloDone\uFF1A \u670D\u52A1\u7AEF\u901A\u77E5\u5BA2\u6237\u7AEF\u521D\u59CB\u534F\u5546\u7ED3\u675F<br>6.ResponseCertifacate:\u5982\u679C\u9009\u62E9\u53CC\u5411\u9A8C\u8BC1\u3001\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u7AEF\u53D1\u9001\u5BA2\u6237\u7AEF\u8BC1\u4E66<br>7.ClientKeyExchange:\u5BA2\u6237\u7AEF\u4F7F\u7528\u670D\u52A1\u5668\u7AEF\u7684\u516C\u94A5\uFF0C\u5BF9\u5BA2\u6237\u7AEF\u516C\u94A5\u548C\u5BC6\u94A5\u79CD\u5B50\u8FDB\u884C\u52A0\u5BC6\uFF0C\u518D\u53D1\u9001\u7ED9\u670D\u52A1\u7AEF\u3002<br>8.CertificateVerify:\u5982\u679C\u9009\u62E9\u53CC\u5411\u9A8C\u8BC1\uFF0C\u5BA2\u6237\u7AEF\u7528\u672C\u5730\u79C1\u94A5\u751F\u6210\u6570\u5B57\u7B7E\u540D\uFF0C\u5E76\u53D1\u9001\u7ED9\u670D\u52A1\u5668\u7AEF\uFF0C\u8BA9\u5176\u901A\u8FC7\u6536\u5230\u7684\u5BA2\u6237\u7AEF\u516C\u94A5\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1<br>9.CreateSecretKey: \u901A\u8BAF\u53CC\u65B9\u57FA\u4E8E\u5BC6\u94A5\u79CD\u5B50\u7B49\u4FE1\u606F\u751F\u6210\u901A\u8BAF\u5BC6\u94A5<br>10.ChangeCipherSpec: \u5BA2\u6237\u7AEF\u901A\u77E5\u670D\u52A1\u5668\u7AEF\u5DF2\u5C06\u901A\u8BAF\u65B9\u5F0F\u5207\u6362\u5230\u52A0\u5BC6\u6A21\u5F0F<br>11.Finished\uFF1A\u5BA2\u6237\u7AEF\u505A\u597D\u52A0\u5BC6\u901A\u8BAF\u7684\u51C6\u5907<br>12.ChangeCipherSpec:\u670D\u52A1\u5668\u7AEF\u901A\u77E5\u5BA2\u6237\u7AEF\u5DF2\u5C06\u901A\u8BAF\u65B9\u5F0F\u5207\u6362\u5230\u52A0\u5BC6\u6A21\u5F0F<br>13.Finished: \u670D\u52A1\u5668\u7AEF\u505A\u597D\u52A0\u5BC6\u901A\u8BAF\u7684\u51C6\u5907<br>14.Encrypted/DecryptedData: \u53CC\u65B9\u4F7F\u7528\u5BA2\u6237\u7AEF\u5BC6\u94A5\uFF0C\u901A\u8FC7\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\u5BF9\u901A\u8BAF\u5185\u5BB9\u8FDB\u884C\u52A0\u5BC6<br>15.ClosedConnection: \u901A\u8BAF\u7ED3\u675F\u540E\uFF0C\u4EFB\u4F55\u4E00\u65B9\u53D1\u51FA\u65AD\u5F00SSL\u8FDE\u63A5\u7684\u6D88\u606F</p><p>HTTP2\u534F\u8BAE<br>HTTP2\u6CA1\u6709\u6539\u52A8HTTP\u7684\u5E94\u7528\u8BED\u4E49\u3002http\u65B9\u6CD5\u3001\u72B6\u6001\u4EE3\u7801\u3001URI\u548C\u6807\u5934\u5B57\u6BB5\u7B49\u6838\u5FC3\u6982\u5FF5<br>http2\u4FEE\u6539\u4E86\u6570\u636E\u683C\u5F0F\u5316\uFF08\u5206\u5E27\uFF09\u4EE5\u53CA\u5728\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u95F4\u4F20\u8F93\u7684\u65B9\u5F0F<br>http1\u7528\u7684\u6587\u672C\uFF0Chttp2\u5F15\u5165\u4E86\u4E00\u4E2A\u65B0\u7684\u4E8C\u8FDB\u5236\u5206\u5E27\u5C42</p><p>http2\u7684\u7279\u70B9<br>\u4F7F\u7528\u4E8C\u8FDB\u5236\u683C\u5F0F\u4F20\u8F93\u3001\u66F4\u9AD8\u6548\u3001\u66F4\u7D27\u51D1<br>\u5BF9\u62A5\u5934\u538B\u7F29\u3001\u964D\u4F4E\u5F00\u9500<br>\u591A\u8DEF\u590D\u7528\uFF0C\u4E00\u4E2A\u7F51\u7EDC\u8FDE\u63A5\u5B9E\u73B0\u5E76\u884C\u8BF7\u6C42<br>\u670D\u52A1\u5668\u4E3B\u52A8\u63A8\u9001\u3002\u51CF\u5C11\u8BF7\u6C42\u7684\u5EF6\u8FDF<br>\u9ED8\u8BA4\u4F7F\u7528\u52A0\u5BC6</p><p>http2\uFF1A\u4E8C\u8FDB\u5236\u5206\u5E27\u5C42\uFF08\u5B9E\u9645\u4E0A\u5C31\u662F\u4E00\u79CD\u7F16\u7801\uFF09\u5E94\u7528\u5C42<br>\u5206\u4FE9\u5C42\uFF08Header frame , Data frame\uFF09</p><p>1.1\u4F1A\u521B\u5EFA\u591A\u4E2ATCP\u8FDE\u63A5\uFF0C2.0\u53EA\u4F1A\u521B\u5EFA\u4E00\u4E2ATCP\u8FDE\u63A5\uFF0C\u4EE5\u6D41\u7684\u5F62\u5F0F\u4F20\u8F93<br>\u5728\u4E00\u4E2A\u94FE\u8DEF\u4E0A\u5E76\u884C\u4F20\u8F93\u53EB\u4EA4\u7EC7\u3002</p><p>http2\u7684\u670D\u52A1\u5668\u63A8\u9001<br>http2\u65B0\u589E\u7684\u529F\u80FD\u662F\uFF0C\u670D\u52A1\u5668\u53EF\u4EE5\u5BF9\u4E00\u4E2A\u5BA2\u6237\u7AEF\u8BF7\u6C42\u53D1\u9001\u591A\u4E2A\u54CD\u5E94\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u9664\u4E86\u5BF9\u6700\u521D\u8BF7\u6C42\u7684\u54CD\u5E94\u5916\uFF0C\u670D\u52A1\u5668\u8FD8\u53EF\u4EE5\u5411\u5BA2\u6237\u7AEF\u63A8\u9001\u989D\u5916\u8D44\u6E90\uFF0C\u800C\u65E0\u9700\u5BA2\u6237\u7AEF\u660E\u786E\u7684\u8BF7\u6C42</p><p>http2\u7684\u4F2A\u5934\u5B57\u6BB5<br>\u4F2A\u5934\u90E8\u5B57\u6BB5\u662Fhttp2\u5185\u7F6E\u7684\u51E0\u4E2A\u7279\u6B8A\u7684\u4EE5\uFF1A\u5F00\u59CB\u7684key\uFF0C\u7528\u4E8E\u66FF\u4EE3http1.x\u54CD\u5E94/\u8BF7\u6C42\u5934\u4E2D\u7684\u4FE1\u606F\uFF0C\u6BD4\u5982\u8BF7\u6C42\u65B9\u6CD5\u3001\u54CD\u5E94\u72B6\u6001\u7801\u7B49</p><p>HTTP3\u662F\u8C37\u6B4C\u5F00\u53D1\u7684\u534F\u8BAE\uFF0C\u662F\u4E00\u4E2A\u5168\u65B0\u7684web\u534F\u8BAE<br>\u57FA\u4E8EUDP\u91CD\u65B0\u5F00\u53D1\u7684QUIC\uFF08quick udp internet connection\uFF09\u534F\u8BAE\uFF0C<br>\u7279\u70B9\uFF1A<br>\u51CF\u5C11\u4E86\u63E1\u624B\u7684\u5EF6\u8FDF<br>\u591A\u8DEF\u590D\u7528\uFF0C\u5E76\u4E14\u6CA1\u6709TCP\u7684\u963B\u585E\u95EE\u9898<br>\u8FDE\u63A5\u8FC1\u79FB\uFF08\u4E3B\u8981\u662F\u5728\u5BA2\u6237\u7AEF\uFF09\u5F53\u7531wifi\u8F6C\u79FB\u52304g\u65F6\uFF0C\u8FDE\u63A5\u4E0D\u4F1A\u88AB\u65AD\u5F00</p><p>http1\u4EE5\u53CAhttp2\u7684\u961F\u9996\u963B\u585E\u95EE\u9898<br>http1.x\u7684\u961F\u5934\u963B\u585E\uFF0C\u4E00\u4E2ATCP\u8FDE\u63A5\u540C\u65F6\u4F20\u8F9310\u4E2A\u8BF7\u6C42\uFF0C\u5176\u4E2D\u7B2C1\u30012\u30013\u4E2A\u8BF7\u6C42\u5DF2\u88AB\u5BA2\u6237\u7AEF\u63A5\u6536\uFF0C\u4F46\u7B2C\u56DB\u4E2A\u8BF7\u6C42\u4E22\u5931\uFF0C\u90A3\u4E48\u540E\u9762\u7B2C5-10\u4E2A\u8BF7\u6C42\u90FD\u88AB\u963B\u585E\uFF0C\u9700\u8981\u7B49\u7B2C\u56DB\u4E2A\u8BF7\u6C42\u5904\u7406\u5B8C\u6BD5\u624D\u80FD\u88AB\u5904\u7406</p><p>http2\u7684\u591A\u8DEF\u590D\u7528\u867D\u7136\u53EF\u4EE5\u89E3\u51B3\u8BF7\u6C42\u8FD9\u4E2A\u7C92\u5EA6\u7684\u963B\u585E\uFF0C\u4F46http2\u7684\u57FA\u7840TCP\u534F\u8BAE\u672C\u8EAB\u4E5F\u5B58\u5728\u961F\u5934\u963B\u585E\u7684\u95EE\u9898<br>http2\u5FC5\u987B\u4F7F\u7528https\uFF0Chttps\u4F7F\u7528\u7684TLS\u534F\u8BAE\u4E5F\u5B58\u5728\u5BF9\u5934\u963B\u585E\u95EE\u9898<br>\u961F\u5934\u963B\u585E\u4F1A\u5BFC\u81F4http2\u5728\u66F4\u5BB9\u6613\u4E22\u5305\u7684\u5F31\u7F51\u7EDC\u73AF\u5883\u4E0B\u6BD4http1\u66F4\u6162</p><p>http\u4E0E\u53CD\u5411\u4EE3\u7406<br>\u4EE3\u7406\u662F\u5728\u5E94\u7528\u5C42\u505A\u7684\u4E8B\u60C5<br>\u6B63\u5411\u4EE3\u7406\u662F\u8981\u51FA\u53BB\uFF0C\u4ECE\u5C40\u57DF\u7F51\u62FF\u5916\u7F51\u7684\u4E1C\u897F<br>\u53CD\u5411\u4EE3\u7406\u662F\u53CD\u8FC7\u6765\uFF0C\u516C\u7F51\u8981\u4ECE\u5C40\u57DF\u7F51\u62FF\u4E1C\u897F</p><p>\u53CD\u5411\u4EE3\u7406\u7684\u7528\u9014<br>\u52A0\u5BC6\u548Cssl\u52A0\u901F<br>\u8D1F\u8F7D\u5747\u8861<br>\u7F13\u5B58\u9759\u6001\u5185\u5BB9<br>\u538B\u7F29<br>\u51CF\u901F\u4E0A\u4F20\uFF08\u4F8B\u5982\u767E\u5EA6\u7F51\u76D8\u7684\u9650\u901F\uFF09<br>\u5B89\u5168\uFF08\u5FC5\u987B\u901A\u8FC7\u4EE3\u7406\u5C42\u518D\u8FDB\u5165\u670D\u52A1\u5668\uFF0C\u76F8\u5F53\u4E8E\u5821\u5792\uFF09<br>\u5916\u7F51\u53D1\u5E03</p><p>nginx\u4E5F\u662F\u4E8B\u4EF6\u9A71\u52A8\u7684</p><p>upstream \u4E0A\u6E38\u670D\u52A1\u5668</p>',19);function b(h,a){return p}var c=t(e,[["render",b]]);export{c as default};
