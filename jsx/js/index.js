var a0_0x2047=['tradesApp','contentDocument','style','height','width','scrollWidth','getAppName','getSymbol','first','ready','undefined','get','filter','username','username:','password','prototype','_handleDisconnect','\x20password:','includes','getDay','info','market\x20is\x20currently\x20closed\x20in\x20weekend.','reload','getHours','market\x20is\x20currently\x20closed.','getMinutes','catch','https://ticks.herokuapp.com','then','json','forEach','slice','values','reduce','isArray','sort','join','length','error','resolve','https://secure.advfn.com','login','mobile','sessionId','screenName','en_GB','monitor','GB-Eire','FTSE:UKX','//rpc.advfn.com','protocol','replace','//streamws.advfn.com','ws://','streamer','#000090','#CF0000','#008000','blue_up.png','red_down.png','getSession','appName','feedSymbol','_currentApp','clearState','_createTradesTable','onselect','setSession','start','LLOY','split','getElementById','&u=','&p=','\x22></iframe><br/>','appendTo','#jsToolRoot','#tradesApp','attr','zonebourse','src','css','display','staticchart','<img\x20id=\x22staticchart\x22\x20style=\x22margin-top:3px;\x20margin-left:-1px\x22\x20src=\x22','cors','no-referrer','jsonp','symbol','exchange','match','full_name','#zonebourse','https://query1.finance.yahoo.com/v7/finance/quote?region=GB&symbols=','quoteResponse','longName','trim','https://www1.zonebourse.com/mods_a/charts/TV/function/search?query=','&limit=99','description','none','block','_monitorModel','max','lastChangeTimestamp','_cols','map','_title','_symbolsList','onsort','-Chg%','indexOf','pop','_sortingColumn','setSortingColumn','_currentSorting','_groupedGrid','sortGrid','_fixStaticCells','cols','currentValue','localeCompare','_name','https://www.zonebourse.com/zbcache/charts/ObjectChart.aspx?Width=','body','clientWidth','&Height=','round','min','&Type=Custom&Intraday=1&Cycle=DAY1&Duration=6&TopMargin=10&Render=Candle&ShowCopyright=0&ShowName=1&Company=4Traders_us&Name=','_blank','https://uk.advfn.com/p.php?pid=staticchart&width=','&height=','&t=6&vol=1&p=5&dm=2&s=L^','_connected','now','getIPC','_lastTimestamp','_root','_refresh'];(function(_0x997f85,_0x54ba90){var _0x9f0125=function(_0x6cb7ba){while(--_0x6cb7ba){_0x997f85['push'](_0x997f85['shift']());}};_0x9f0125(++_0x54ba90);}(a0_0x2047,0x1b1));var a0_0x4a50=function(_0x21293f,_0x4ede5f){_0x21293f=_0x21293f-0x0;var _0x65e779=a0_0x2047[_0x21293f];return _0x65e779;};if(typeof jQuery===a0_0x4a50('0x0')||jQuery===null)location['reload'](!![]);const params=new URLSearchParams(location['search']);const hi=params['get']('hi')||0x3e7;const lo=params[a0_0x4a50('0x1')]('lo')||-0x3e7;const symbols=(params['get']('q')||'')['split'](',')[a0_0x4a50('0x2')](_0x4de59c=>!!_0x4de59c);let username=localStorage[a0_0x4a50('0x3')]=params[a0_0x4a50('0x1')]('u')||localStorage[a0_0x4a50('0x3')]||prompt(a0_0x4a50('0x4'),localStorage[a0_0x4a50('0x3')])||'';let password=localStorage[a0_0x4a50('0x5')]=params['get']('p')||localStorage['password']||prompt(username+'\x20password:',localStorage[a0_0x4a50('0x5')])||'';IPC[a0_0x4a50('0x6')][a0_0x4a50('0x7')]=()=>reset(username=localStorage['username']=prompt(a0_0x4a50('0x4'),username||'')||'',password=localStorage[a0_0x4a50('0x5')]=prompt(username+a0_0x4a50('0x8'),password||'')||'');function reset(){delete localStorage[username];if([0x0,0x6][a0_0x4a50('0x9')](new Date()[a0_0x4a50('0xa')]()))console[a0_0x4a50('0xb')](a0_0x4a50('0xc'))||setTimeout(()=>location[a0_0x4a50('0xd')](!![]),(0x3c-new Date()['getMinutes']()+0x3c*0x17)*0xea60);else if(new Date()['getHours']()<0x7||new Date()[a0_0x4a50('0xe')]()>0x10)console[a0_0x4a50('0xb')](a0_0x4a50('0xf'))||setTimeout(()=>location[a0_0x4a50('0xd')](!![]),(0x3c-new Date()[a0_0x4a50('0x10')]())*0xea60);else setTimeout(onload,0xbb8);};function onload(){if(symbols['length']===0x0)return ticks();if(!!username&&!!localStorage[username])app(username,localStorage[username],symbols);else login(username,password)['then'](({sessionId,screenName})=>!!(localStorage[username]=sessionId)?app(screenName,sessionId,symbols):setTimeout(reset,0x7530))[a0_0x4a50('0x11')](IPC[a0_0x4a50('0x6')][a0_0x4a50('0x7')]);};function ticks(){setTimeout(ticks,0xea60);return fetch(a0_0x4a50('0x12'))[a0_0x4a50('0x13')](_0x5e3c58=>_0x5e3c58[a0_0x4a50('0x14')]())[a0_0x4a50('0x13')](_0x1a0b55=>params[a0_0x4a50('0x15')]((_0x50d251,_0x330450)=>_0x1a0b55[_0x330450]=isNaN(_0x50d251)||!_0x1a0b55[_0x330450]?[]:Object['keys'](_0x1a0b55[_0x330450])['filter'](_0x4f3afc=>!['tg','tl'][a0_0x4a50('0x9')](_0x330450)||_0x1a0b55[_0x330450][_0x4f3afc]<=hi&&_0x1a0b55[_0x330450][_0x4f3afc]>=lo)[a0_0x4a50('0x16')](0x0,_0x50d251||0x63))||[...new Set(Object[a0_0x4a50('0x17')](_0x1a0b55)[a0_0x4a50('0x18')]((_0x2791dc,_0x411367)=>Array[a0_0x4a50('0x19')](_0x411367)?_0x2791dc['concat'](_0x411367):_0x2791dc,[]))][a0_0x4a50('0x16')](0x0,0x64))[a0_0x4a50('0x13')](_0x252c4f=>_0x252c4f[a0_0x4a50('0x1a')]()['join'](',')!==symbols[a0_0x4a50('0x1a')]()[a0_0x4a50('0x1b')](',')?onload(symbols['splice'](0x0,symbols[a0_0x4a50('0x1c')],..._0x252c4f)):null)['catch'](console[a0_0x4a50('0x1d')]);};function login(_0x1f2cb9,_0x399b13){return!!!_0x1f2cb9&&!!!_0x399b13?Promise[a0_0x4a50('0x1e')]():a0_0x4a50('0x1f')[a0_0x4a50('0x20')](username,_0x399b13)[a0_0x4a50('0x13')](_0x57ce1c=>{if(!!_0x57ce1c['sessionId'])return _0x57ce1c;throw _0x57ce1c;})[a0_0x4a50('0x11')](()=>a0_0x4a50('0x12')[a0_0x4a50('0x21')](_0x1f2cb9,_0x399b13))[a0_0x4a50('0x13')](_0xd4d58c=>{if(!!_0xd4d58c[a0_0x4a50('0x22')])return _0xd4d58c;throw _0xd4d58c;})[a0_0x4a50('0x13')](_0x2c235a=>console['info'](_0x2c235a[a0_0x4a50('0x23')],_0x2c235a[a0_0x4a50('0x22')])||_0x2c235a);};function app(_0x4a3ab5,_0x29987c,_0x2132df){let _0x316d2a={'site':'uk','locale':a0_0x4a50('0x24'),'monitorId':'1','appName':a0_0x4a50('0x25'),'timezone':a0_0x4a50('0x26'),'indices':[a0_0x4a50('0x27')],'feedSymbol':'L^'+_0x2132df[0x0],'displaySymbol':'LSE:'+_0x2132df[0x0],'timezoneOffset':new Date()['getTimezoneOffset']()*-0x3c,'rpcUrl':a0_0x4a50('0x28'),'advfnUrl':'//uk.advfn.com','streamerUrl':location[a0_0x4a50('0x29')][a0_0x4a50('0x2a')]('http','ws')+a0_0x4a50('0x2b'),'alternativeStreamerUrl':a0_0x4a50('0x2c')[a0_0x4a50('0x2d')]()+':7000','alternativeStreamerUrlFallback':a0_0x4a50('0x2c')[a0_0x4a50('0x2d')]()+':80','colorSchema':{'up':a0_0x4a50('0x2e'),'down':a0_0x4a50('0x2f'),'unchanged':a0_0x4a50('0x30')},'changeArrows':{'up':a0_0x4a50('0x31'),'no_change':'green_dot.png','down':a0_0x4a50('0x32')},'monitorSettings':{'indexBreakUp':!![],'orderSymbols':!![],'defaultDisplay':'1','symbols':_0x2132df[a0_0x4a50('0x16')](0x0,0x64)}};let _0x47c191=Env[a0_0x4a50('0x33')]();if(_0x2132df[a0_0x4a50('0x1c')]===0x1){_0x316d2a[a0_0x4a50('0x34')]='trades';if(_0x47c191){if(_0x47c191['_bootConfiguration'][a0_0x4a50('0x35')]==='L^'+_0x2132df[0x0])return;else if(_0x47c191[a0_0x4a50('0x36')]!=null){_0x47c191[a0_0x4a50('0x36')][a0_0x4a50('0x37')]();_0x47c191[a0_0x4a50('0x36')][a0_0x4a50('0x38')]();}}}else if(!!sessionStorage['onselect']&&_0x2132df[a0_0x4a50('0x1c')]<0x21)setTimeout(()=>window['onselect'](sessionStorage[a0_0x4a50('0x39')]),0x1388);_0x47c191=new Session(_0x4a3ab5,_0x29987c,_0x316d2a);Env[a0_0x4a50('0x3a')](_0x47c191);_0x47c191[a0_0x4a50('0x3b')]();return _0x29987c;}function onselect(_0x125701=a0_0x4a50('0x3c')){_0x125701=_0x125701[a0_0x4a50('0x3d')]('/')['pop']();sessionStorage[a0_0x4a50('0x39')]=_0x125701;if(!document[a0_0x4a50('0x3e')]('tradesApp'))$('<iframe\x20frameborder=\x220\x22\x20scrolling=\x22no\x22\x20id=\x22tradesApp\x22\x20src=\x22?q='+_0x125701+a0_0x4a50('0x3f')+username+a0_0x4a50('0x40')+password+a0_0x4a50('0x41'))[a0_0x4a50('0x42')](a0_0x4a50('0x43'));else $(a0_0x4a50('0x44'))[a0_0x4a50('0x45')]('src','?q='+_0x125701+a0_0x4a50('0x3f')+username);if(!document[a0_0x4a50('0x3e')](a0_0x4a50('0x46')))$('<img\x20id=\x22zonebourse\x22\x20ondblclick=\x22javascript:marketscreener(this.src)\x22\x20style=\x22margin-left:-7px;\x22\x20src=\x22'+zonebourse(_0x125701)+'\x22><br/>')[a0_0x4a50('0x42')](a0_0x4a50('0x43'));else $('#zonebourse')['attr'](a0_0x4a50('0x47'),zonebourse(_0x125701))[a0_0x4a50('0x48')](a0_0x4a50('0x49'),'block');if(!document[a0_0x4a50('0x3e')](a0_0x4a50('0x4a')))$(a0_0x4a50('0x4b')+staticchart(_0x125701)+'\x22>')[a0_0x4a50('0x42')]('#jsToolRoot');else $('#staticchart')['attr'](a0_0x4a50('0x47'),staticchart(_0x125701));if(isNaN(localStorage[_0x125701+'zb']))fetch(('https://www1.zonebourse.com/mods_a/charts/TV/function/search?query='+_0x125701+'&limit=99')[a0_0x4a50('0x4c')](),{'referrerPolicy':a0_0x4a50('0x4d')})[a0_0x4a50('0x13')](_0x444a22=>_0x444a22['text']()[a0_0x4a50('0x13')](_0x2912a7=>_0x2912a7[a0_0x4a50('0x4e')]()))[a0_0x4a50('0x13')](_0x48f916=>_0x48f916[a0_0x4a50('0x2')](_0xd6babc=>_0xd6babc[a0_0x4a50('0x4f')]===_0x125701&&_0xd6babc[a0_0x4a50('0x50')][a0_0x4a50('0x51')](/gb\.png/))[0x0])[a0_0x4a50('0x13')]((_0xed384f={})=>!!(localStorage[_0x125701+'zb']=_0xed384f[a0_0x4a50('0x52')])?$(a0_0x4a50('0x53'))[a0_0x4a50('0x45')](a0_0x4a50('0x47'),zonebourse(_0x125701))[a0_0x4a50('0x48')]('display','block'):fetch((a0_0x4a50('0x54')+_0x125701+'.L')[a0_0x4a50('0x4c')](),{'referrerPolicy':'no-referrer'})[a0_0x4a50('0x13')](_0x1a2c91=>_0x1a2c91[a0_0x4a50('0x14')]())[a0_0x4a50('0x13')](_0x35fa3e=>_0x35fa3e[a0_0x4a50('0x55')]['result'][0x0])[a0_0x4a50('0x13')](_0x165005=>_0x165005[a0_0x4a50('0x56')]['replace'](/\s(plc|ltd|limited|corp|company|inc|oy|hldg|grp|sa|ord)/gi,'')[a0_0x4a50('0x2a')](/amp;/g,'')[a0_0x4a50('0x57')]())['then'](_0x558549=>!_0x558549?$(a0_0x4a50('0x53'))[a0_0x4a50('0x48')](a0_0x4a50('0x49'),'none'):fetch((a0_0x4a50('0x58')+_0x558549+a0_0x4a50('0x59'))[a0_0x4a50('0x4c')](),{'referrerPolicy':a0_0x4a50('0x4d')})['then'](_0x52da45=>_0x52da45['text']()['then'](_0x4e90bd=>_0x4e90bd[a0_0x4a50('0x4e')]()))[a0_0x4a50('0x13')](_0x5d1ddd=>_0x5d1ddd[a0_0x4a50('0x2')](_0x2bcfd5=>(_0x2bcfd5[a0_0x4a50('0x4f')]===_0x125701||_0x2bcfd5[a0_0x4a50('0x5a')][a0_0x4a50('0x51')](_0x558549))&&_0x2bcfd5[a0_0x4a50('0x50')]['match'](/gb\.png/))[0x0])['then']((_0xed384f={})=>!(localStorage[_0x125701+'zb']=_0xed384f[a0_0x4a50('0x52')])?$(a0_0x4a50('0x53'))[a0_0x4a50('0x48')](a0_0x4a50('0x49'),a0_0x4a50('0x5b')):$('#zonebourse')[a0_0x4a50('0x45')](a0_0x4a50('0x47'),zonebourse(_0x125701))['css'](a0_0x4a50('0x49'),a0_0x4a50('0x5c'))))[a0_0x4a50('0x11')](_0x87b37a=>$(a0_0x4a50('0x53'))[a0_0x4a50('0x48')](a0_0x4a50('0x49'),a0_0x4a50('0x5b'))));};function resort(){let _0x341673=Env[a0_0x4a50('0x33')]()[a0_0x4a50('0x36')];if(!_0x341673||!_0x341673[a0_0x4a50('0x5d')])return;let _0x829cf2=Math[a0_0x4a50('0x5e')]['apply'](Math,Object['values'](_0x341673['_monitorModel'])['map'](_0x783760=>_0x783760['modelLastChangeTimestamp']));if(window[a0_0x4a50('0x5f')]===_0x829cf2)return;window['lastChangeTimestamp']=_0x829cf2;let _0x1a1f32=_0x341673[a0_0x4a50('0x60')][a0_0x4a50('0x61')](_0x3c2507=>_0x3c2507[a0_0x4a50('0x62')]);let _0x86acbe=_0x341673[a0_0x4a50('0x63')];let _0x176c80=new Date()[a0_0x4a50('0xe')]();if(!!!sessionStorage[a0_0x4a50('0x64')])sessionStorage[a0_0x4a50('0x64')]=a0_0x4a50('0x65');let _0x391de8=_0x1a1f32[a0_0x4a50('0x66')](sessionStorage[a0_0x4a50('0x64')]['split']('-')[a0_0x4a50('0x67')]());let _0x45a42c=Number(sessionStorage[a0_0x4a50('0x64')][0x0]==='-');if(_0x86acbe[a0_0x4a50('0x68')]<0x0)_0x86acbe[a0_0x4a50('0x69')](_0x391de8,_0x45a42c);else if(_0x86acbe[a0_0x4a50('0x68')]>=0x0)sessionStorage[a0_0x4a50('0x64')]=(_0x86acbe[a0_0x4a50('0x6a')]?'-':'')+_0x1a1f32[_0x86acbe[a0_0x4a50('0x68')]];_0x341673[a0_0x4a50('0x6b')][a0_0x4a50('0x6c')]();_0x341673[a0_0x4a50('0x6d')]();let _0x2a2553=_0x341673['_colTypes']['indexOf'](0xd);document['title']=Object[a0_0x4a50('0x17')](_0x341673[a0_0x4a50('0x5d')])[a0_0x4a50('0x1a')]((_0x565570,_0x354ec3)=>(_0x354ec3[a0_0x4a50('0x6e')][_0x86acbe[a0_0x4a50('0x68')]]||{'currentValue':''})[a0_0x4a50('0x6f')][a0_0x4a50('0x70')]((_0x565570[a0_0x4a50('0x6e')][_0x86acbe[a0_0x4a50('0x68')]]||{'currentValue':''})[a0_0x4a50('0x6f')]))[a0_0x4a50('0x18')]((_0x487806,_0x2be409)=>_0x2be409[a0_0x4a50('0x6e')][_0x2a2553]?_0x487806+',\x20'+_0x2be409[a0_0x4a50('0x4f')][a0_0x4a50('0x71')]+':\x20'+_0x2be409[a0_0x4a50('0x6e')][_0x2a2553][a0_0x4a50('0x6f')]:_0x487806,'')['substr'](0x2);};function zonebourse(_0x5a2c61){_0x5a2c61=localStorage[_0x5a2c61+'zb']||_0x5a2c61;return a0_0x4a50('0x72')+Math['min'](document[a0_0x4a50('0x73')][a0_0x4a50('0x74')]+0x11,0x320)+a0_0x4a50('0x75')+Math[a0_0x4a50('0x76')](Math[a0_0x4a50('0x77')](document[a0_0x4a50('0x73')][a0_0x4a50('0x74')],0x1f4))+a0_0x4a50('0x78')+_0x5a2c61;}function marketscreener(_0x5c9cfc){let _0x580cc1=_0x5c9cfc[a0_0x4a50('0x3d')]('&Name=')[0x1];if(!!!_0x580cc1||isNaN(_0x580cc1))return;open('https://www.marketscreener.com/mods_a/charts/TV/inc_dyna_graph.php?c='+_0x580cc1,a0_0x4a50('0x79'));}function staticchart(_0x422a2c){return a0_0x4a50('0x7a')+Math[a0_0x4a50('0x77')](document[a0_0x4a50('0x73')]['clientWidth']+0x11,0x320)+a0_0x4a50('0x7b')+Math[a0_0x4a50('0x76')](Math[a0_0x4a50('0x77')](document[a0_0x4a50('0x73')]['clientWidth'],0x1f4)*0.6)+a0_0x4a50('0x7c')+_0x422a2c;}setInterval(function(){!Env['getIPC']()||Env['getIPC']()[a0_0x4a50('0x7d')]!==!![]||Date[a0_0x4a50('0x7e')]()-Env[a0_0x4a50('0x7f')]()[a0_0x4a50('0x80')]>0x7530?reset():void 0x0;},0x7530);setInterval(function(){Env[a0_0x4a50('0x33')]()&&Env[a0_0x4a50('0x33')]()[a0_0x4a50('0x81')]&&Env[a0_0x4a50('0x33')]()['_root'][a0_0x4a50('0x82')]();},0xc8);setInterval(function(){if(!Env[a0_0x4a50('0x33')]())return;let _0x19fcd9=document[a0_0x4a50('0x3e')](a0_0x4a50('0x83'));if(_0x19fcd9&&_0x19fcd9[a0_0x4a50('0x84')][a0_0x4a50('0x73')]){_0x19fcd9[a0_0x4a50('0x85')]['height']=$(document[a0_0x4a50('0x3e')](a0_0x4a50('0x83'))['contentDocument']['body'])[a0_0x4a50('0x48')](a0_0x4a50('0x86'));_0x19fcd9['style'][a0_0x4a50('0x87')]=_0x19fcd9[a0_0x4a50('0x84')][a0_0x4a50('0x73')][a0_0x4a50('0x88')]+'px';}},0x3e8);setInterval(function(){if(!Env[a0_0x4a50('0x33')]())return;if(Env[a0_0x4a50('0x89')]()==a0_0x4a50('0x25'))resort();else if(Env[a0_0x4a50('0x8a')]()&&!!Env[a0_0x4a50('0x8a')]()[a0_0x4a50('0x8a')]())document['title']=[Env[a0_0x4a50('0x8a')]()[a0_0x4a50('0x8a')]()]['concat']($('tr')[a0_0x4a50('0x8b')]()['text']()[a0_0x4a50('0x3d')](/\n/)[a0_0x4a50('0x2')](_0x397e41=>_0x397e41['match'](/^\d+[,\.]/))[a0_0x4a50('0x16')](0x0,0x4)[a0_0x4a50('0x61')](_0x5f0ede=>_0x5f0ede['trim']()))[a0_0x4a50('0x1b')]('\x20');},0xbb8);$(document)[a0_0x4a50('0x8c')](onload);