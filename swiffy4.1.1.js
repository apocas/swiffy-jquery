/*
 * Copyright 2012 Google Inc.
 *
 * Swiffy runtime version 4.1.1
 *
 * In addition to the Google Terms of Service (http://www.google.com/accounts/TOS),
 * Google grants you and the Google Swiffy end users a personal, worldwide,
 * royalty-free, non-assignable and non-exclusive license to use the Google Swiffy
 * runtime to host it for Google Swiffy end users and to use it in connection with
 * the Google Swiffy service.
 *
 * ------------------
 *
 *Updated to be compatible with jQuery
 *https://github.com/apocas/swiffy-jquery
 *
 */
var f=void 0,h=!0,j=null,k=!1,aa=encodeURIComponent,ba=window,m=Object,n=document,ca=isNaN,o=Math,da=Array,p=Number,fa=Error,ga=Boolean,ha=parseInt,ia=decodeURIComponent;
function ja(a,b){
    return a.width=b
    }
    function ka(a,b){
    return a.data=b
    }
    function la(a,b){
    return a.color=b
    }
    function ma(a,b){
    return a.currentTarget=b
    }
    function na(a,b){
    return a.keyCode=b
    }
    function oa(a,b){
    return a.blendmode=b
    }
    function pa(a,b){
    return a.depth=b
    }
    function qa(a,b){
    return a.type=b
    }
    function ra(a,b){
    return a.name=b
    }
function sa(a,b){
    return a.nextSibling=b
    }
    function ta(a,b){
    return a.stop=b
    }
    function ua(a,b){
    return a.toString=b
    }
    function wa(a,b){
    return a.length=b
    }
    function xa(a,b){
    return a.actions=b
    }
    function ya(a,b){
    return a.pointerEvents=b
    }
    function za(a,b){
    return a.fontSize=b
    }
    function Aa(a,b){
    return a.lineHeight=b
    }
    function Ba(a,b){
    return a.target=b
    }
    function Ca(a,b){
    return a.call=b
    }
    function Da(a,b){
    return a.start=b
    }
    function Ea(a,b){
    return a.returnValue=b
    }
    function Fa(a,b){
    return a.apply=b
    }
function Ga(a,b){
    return a.filters=b
    }
    function Ha(a,b){
    return a.height=b
    }
var r="appendChild",s="push",Ia="font",Ja="indent",Ka="valueOf",La="ascent",Ma="getParent",Na="getOwnPropertyNames",Oa="exec",Pa="width",Qa="bitmap",Ra="text",Sa="expand",Ta="slice",u="replace",Ua="matrix",Va="toFixed",Wa="setCapture",v="data",Xa="ceil",Ya="events",$a="leading",ab="floor",bb="charAt",cb="createTextNode",db="italic",eb="getNamedItem",fb="preventDefault",gb="setAttributeNS",w="indexOf",hb="defineProperties",ib="color",jb="trim",kb="capture",lb="ratio",mb="setTransform",nb="definition",
ob="knockout",pb="linestyles",qb="getName",rb="charCode",sb="fillstyles",tb="createElement",x="defineProperty",ub="sounds",vb="keyCode",wb="blendmode",xb="firstChild",yb="sound",zb="forEach",Ab="states",y="setAttribute",Bb="play",Cb="handleEvent",Db="path",z="depth",A="type",Eb="method",Fb="childNodes",Gb="emSquareSize",B="name",C="bounds",Hb="code",E="nextSibling",Ib="tags",Jb="getPrototypeOf",Kb="clientX",Lb="releaseCapture",Mb="clientY",Nb="fill",Ob="stop",Pb="toString",Qb="bold",Rb="gradient",
G="length",Sb="propertyIsEnumerable",Tb="create",H="prototype",Ub="descent",Vb="clip",Wb="result",Xb="index",Yb="inner",I="actions",Zb="variable",$b="angle",J="createElementNS",ac="ctrlKey",bc="split",cc="constructor",dc="stopPropagation",ec="glyphs",fc="records",gc="frameCount",hc="lineHeight",ic="hasOwnProperty",K="style",jc="body",kc="removeChild",lc="getOwnPropertyDescriptor",mc="target",L="call",nc="isEnabled",oc="line",pc="start",qc="multiply",rc="init",sc="charCodeAt",tc="colortransform",M=
"fireEvent",uc="substring",vc="paths",wc="trackAsMenu",xc="every",yc="contains",N="apply",zc="filters",Ac="reset",Bc="removeAttribute",Cc="navigator",Dc="parentNode",Ec="update",Gc="height",Hc="splice",Ic="leftMargin",Jc="join",Kc="isCaptured",Lc="transform",Mc="nodeValue",Nc="quality",Oc="toLowerCase",O,Pc=this,Qc=function(a){
    a.Ia=function(){
        return a.Lg?a.Lg:a.Lg=new a
        }
    },Rc=function(a){
    var b=typeof a;
    if("object"==b)if(a){
        if(a instanceof da)return"array";
        if(a instanceof m)return b;
        var c=m[H][Pb][L](a);
        if("[object Window]"==c)return"object";
        if("[object Array]"==c||"number"==typeof a[G]&&"undefined"!=typeof a[Hc]&&"undefined"!=typeof a[Sb]&&!a[Sb]("splice"))return"array";
        if("[object Function]"==c||"undefined"!=typeof a[L]&&"undefined"!=typeof a[Sb]&&!a[Sb]("call"))return"function"
            }else return"null";
    else if("function"==b&&"undefined"==typeof a[L])return"object";
    return b
    },P=function(a){
    return a!==f
    },Sc=function(a){
    return"array"==Rc(a)
    },Tc=function(a){
    var b=Rc(a);
    return"array"==b||"object"==b&&"number"==
    typeof a[G]
    },Q=function(a){
    return"string"==typeof a
    },Uc=function(a){
    return"function"==Rc(a)
    },Vc=function(a){
    var b=typeof a;
    return"object"==b&&a!=j||"function"==b
    },Yc=function(a){
    return a[Wc]||(a[Wc]=++Xc)
    },Wc="closure_uid_"+o[ab](2147483648*o.random())[Pb](36),Xc=0,Zc=function(a,b,c){
    return a[L][N](a.bind,arguments)
    },$c=function(a,b,c){
    if(!a)throw fa();
    if(2<arguments[G]){
        var d=da[H][Ta][L](arguments,2);
        return function(){
            var c=da[H][Ta][L](arguments);
            da[H].unshift[N](c,d);
            return a[N](b,c)
            }
        }
    return function(){
    return a[N](b,
        arguments)
    }
},R=function(a,b,c){
    R=Function[H].bind&&-1!=Function[H].bind[Pb]()[w]("native code")?Zc:$c;
    return R[N](j,arguments)
    },ad=function(a,b){
    var c=da[H][Ta][L](arguments,1);
    return function(){
        var b=da[H][Ta][L](arguments);
        b.unshift[N](b,c);
        return a[N](this,b)
        }
    },S=function(a,b){
    function c(){}
    c.prototype=b[H];
    a.r=b[H];
    a.prototype=new c;
    a[H].constructor=a
    };
    
var gd=function(a,b){
    if(b)return a[u](bd,"&amp;")[u](cd,"&lt;")[u](dd,"&gt;")[u](ed,"&quot;");
    if(!fd.test(a))return a;
    -1!=a[w]("&")&&(a=a[u](bd,"&amp;"));
    -1!=a[w]("<")&&(a=a[u](cd,"&lt;"));
    -1!=a[w](">")&&(a=a[u](dd,"&gt;"));
    -1!=a[w]('"')&&(a=a[u](ed,"&quot;"));
    return a
    },bd=/&/g,cd=/</g,dd=/>/g,ed=/\"/g,fd=/[&<>\"]/;
var hd=da[H],id=hd[w]?function(a,b,c){
    return hd[w][L](a,b,c)
    }:function(a,b,c){
    c=c==j?0:0>c?o.max(0,a[G]+c):c;
    if(Q(a))return!Q(b)||1!=b[G]?-1:a[w](b,c);
    for(;c<a[G];c++)if(c in a&&a[c]===b)return c;return-1
    },jd=hd[zb]?function(a,b,c){
    hd[zb][L](a,b,c)
    }:function(a,b,c){
    for(var d=a[G],e=Q(a)?a[bc](""):a,g=0;g<d;g++)g in e&&b[L](c,e[g],g,a)
        },kd=hd[xc]?function(a,b,c){
    return hd[xc][L](a,b,c)
    }:function(a,b,c){
    for(var d=a[G],e=Q(a)?a[bc](""):a,g=0;g<d;g++)if(g in e&&!b[L](c,e[g],g,a))return k;return h
    },ld=
function(a,b){
    var c=id(a,b),d;
    (d=0<=c)&&hd[Hc][L](a,c,1);
    return d
    },md=function(a){
    return hd.concat[N](hd,arguments)
    },nd=function(a){
    var b=a[G];
    if(0<b){
        for(var c=da(b),d=0;d<b;d++)c[d]=a[d];
        return c
        }
        return[]
    },od=function(a,b,c){
    return 2>=arguments[G]?hd[Ta][L](a,b):hd[Ta][L](a,b,c)
    };
    
var pd=function(a,b,c){
    for(var d in a)b[L](c,a[d],d,a)
        },qd=function(a){
    var b=[],c=0,d;
    for(d in a)b[c++]=a[d];return b
    },rd=function(a){
    var b=[],c=0,d;
    for(d in a)b[c++]=d;return b
    },sd=function(a){
    var b=Rc(a);
    if("object"==b||"array"==b){
        if(a.L)return a.L();
        var b="array"==b?[]:{},c;
        for(c in a)b[c]=sd(a[c]);return b
        }
        return a
    },td="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),ud=function(a,b){
    for(var c,d,e=1;e<arguments[G];e++){
        d=arguments[e];
        for(c in d)a[c]=d[c];for(var g=0;g<td[G];g++)c=td[g],m[H][ic][L](d,c)&&(a[c]=d[c])
            }
        };
    
var vd,wd,xd,yd,zd=function(){
    return Pc[Cc]?Pc[Cc].userAgent:j
    };
    
yd=xd=wd=vd=k;
var Ad;
if(Ad=zd()){
    var Bd=Pc[Cc];
    vd=0==Ad[w]("Opera");
    wd=!vd&&-1!=Ad[w]("MSIE");
    xd=!vd&&-1!=Ad[w]("WebKit");
    yd=!vd&&!xd&&"Gecko"==Bd.product
        }
        var Cd=vd,Dd=wd,Ed=yd,Fd=xd,Gd=Pc[Cc],Hd=-1!=(Gd&&Gd.platform||"")[w]("Mac"),Id;
    a:{
        var Jd="",Kd;
        if(Cd&&Pc.opera)var Ld=Pc.opera.version,Jd="function"==typeof Ld?Ld():Ld;
        else if(Ed?Kd=/rv\:([^\);]+)(\)|;)/:Dd?Kd=/MSIE\s+([^\);]+)(\)|;)/:Fd&&(Kd=/WebKit\/(\S+)/),Kd)var Md=Kd[Oa](zd()),Jd=Md?Md[1]:"";
        if(Dd){
            var Nd,Od=Pc.document;
            Nd=Od?Od.documentMode:f;
            if(Nd>parseFloat(Jd)){
                Id=""+Nd;
                break a
            }
        }
        Id=Jd
        }
var Pd=Id,Qd={},Rd=function(a){
    var b;
    if(!(b=Qd[a])){
        b=0;
        for(var c=(""+Pd)[u](/^[\s\xa0]+|[\s\xa0]+$/g,"")[bc]("."),d=(""+a)[u](/^[\s\xa0]+|[\s\xa0]+$/g,"")[bc]("."),e=o.max(c[G],d[G]),g=0;0==b&&g<e;g++){
            var i=c[g]||"",l=d[g]||"",q=RegExp("(\\d*)(\\D*)","g"),t=RegExp("(\\d*)(\\D*)","g");
            do{
                var D=q[Oa](i)||["","",""],F=t[Oa](l)||["","",""];
                if(0==D[0][G]&&0==F[0][G])break;
                b=((0==D[1][G]?0:ha(D[1],10))<(0==F[1][G]?0:ha(F[1],10))?-1:(0==D[1][G]?0:ha(D[1],10))>(0==F[1][G]?0:ha(F[1],10))?1:0)||((0==D[2][G])<
                    (0==F[2][G])?-1:(0==D[2][G])>(0==F[2][G])?1:0)||(D[2]<F[2]?-1:D[2]>F[2]?1:0)
                }while(0==b)
        }
        b=Qd[a]=0<=b
        }
        return b
    },Sd={},Td=function(a){
    return Sd[a]||(Sd[a]=Dd&&!!n.documentMode&&n.documentMode>=a)
    };
    
var Ud=!Dd||Td(9);
!Ed&&!Dd||Dd&&Td(9)||Ed&&Rd("1.9.1");
Dd&&Rd("9");
var Vd=function(a,b){
    var c;
    c=a.className;
    c=Q(c)&&c.match(/\S+/g)||[];
    for(var d=od(arguments,1),e=c[G]+d[G],g=c,i=0;i<d[G];i++)0<=id(g,d[i])||g[s](d[i]);
    a.className=c[Jc](" ");
    return c[G]==e
    };
    
var Xd=function(a,b){
    pd(b,function(b,d){
        "style"==d?a[K].cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in Wd?a[y](Wd[d],b):0==d.lastIndexOf("aria-",0)?a[y](d,b):a[d]=b
        })
    },Wd={
    cellpadding:"cellPadding",
    cellspacing:"cellSpacing",
    colspan:"colSpan",
    rowspan:"rowSpan",
    valign:"vAlign",
    height:"height",
    width:"width",
    usemap:"useMap",
    frameborder:"frameBorder",
    maxlength:"maxLength",
    type:"type"
},Zd=function(a,b,c){
    var d=arguments,e=d[0],g=d[1];
    if(!Ud&&g&&(g[B]||g[A])){
        e=["<",e];
        g[B]&&e[s](' name="',
            gd(g[B]),'"');
        if(g[A]){
            e[s](' type="',gd(g[A]),'"');
            var i={};
            
            ud(i,g);
            g=i;
            delete g[A]
        }
        e[s](">");
        e=e[Jc]("")
        }
        e=n[tb](e);
    g&&(Q(g)?e.className=g:Sc(g)?Vd[N](j,[e].concat(g)):Xd(e,g));
    2<d[G]&&Yd(n,e,d,2);
    return e
    },Yd=function(a,b,c,d){
    function e(c){
        c&&b[r](Q(c)?a[cb](c):c)
        }
        for(;d<c[G];d++){
        var g=c[d];
        Tc(g)&&!(Vc(g)&&0<g.nodeType)?jd($d(g)?nd(g):g,e):e(g)
        }
    },ae=function(a){
    for(var b;b=a[xb];)a[kc](b)
        },be=function(a){
    return a&&a[Dc]?a[Dc][kc](a):j
    },ce=function(a,b){
    var c=b[Dc];
    c&&c.replaceChild(a,b)
    },de=
function(a,b){
    if(a[yc]&&1==b.nodeType)return a==b||a[yc](b);
    if("undefined"!=typeof a.compareDocumentPosition)return a==b||ga(a.compareDocumentPosition(b)&16);
    for(;b&&a!=b;)b=b[Dc];
    return b==a
    },$d=function(a){
    if(a&&"number"==typeof a[G]){
        if(Vc(a))return"function"==typeof a.item||"string"==typeof a.item;
        if(Uc(a))return"function"==typeof a.item
            }
            return k
    };
    
var ee=function(a){
    ee[" "](a);
    return a
    };
    
ee[" "]=function(){};
!Dd||Td(9);
var fe=!Dd||Td(9),ge=Dd&&!Rd("8");
!Fd||Rd("528");
Ed&&Rd("1.9b")||Dd&&Rd("8")||Cd&&Rd("9.5")||Fd&&Rd("528");
Ed&&!Rd("8")||Dd&&Rd("9");
var he=function(){};

he[H].Mg=k;
he[H].kd=function(){
    this.Mg||(this.Mg=h,this.Gb())
    };
    
he[H].Gb=function(){
    this.Gi&&ie[N](j,this.Gi)
    };
    
var ie=function(a){
    for(var b=0,c=arguments[G];b<c;++b){
        var d=arguments[b];
        Tc(d)?ie[N](j,d):d&&"function"==typeof d.kd&&d.kd()
        }
    };
    
var je=function(a,b){
    qa(this,a);
    Ba(this,b);
    ma(this,this[mc])
    };
    
S(je,he);
O=je[H];
O.Gb=function(){
    delete this[A];
    delete this[mc];
    delete this.currentTarget
    };
    
O.Wb=k;
O.defaultPrevented=k;
O.je=h;
O.stopPropagation=function(){
    this.Wb=h
    };
    
O.preventDefault=function(){
    this.defaultPrevented=h;
    this.je=k
    };
    
var ke=function(a,b){
    a&&this[rc](a,b)
    };
    
S(ke,je);
O=ke[H];
Ba(O,j);
O.relatedTarget=j;
O.offsetX=0;
O.offsetY=0;
O.clientX=0;
O.clientY=0;
O.screenX=0;
O.screenY=0;
O.button=0;
na(O,0);
O.charCode=0;
O.ctrlKey=k;
O.altKey=k;
O.shiftKey=k;
O.metaKey=k;
O.Ta=j;
O.init=function(a,b){
    var c=qa(this,a[A]);
    je[L](this,c);
    Ba(this,a[mc]||a.srcElement);
    ma(this,b);
    var d=a.relatedTarget;
    if(d){
        if(Ed){
            var e;
                a:{
                try{
                    ee(d.nodeName);
                    e=h;
                    break a
                }catch(g){}
                e=k
                }
                e||(d=j)
            }
        }else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);
    this.relatedTarget=d;
    this.offsetX=Fd||a.offsetX!==f?a.offsetX:a.layerX;
    this.offsetY=Fd||a.offsetY!==f?a.offsetY:a.layerY;
    this.clientX=a[Kb]!==f?a[Kb]:a.pageX;
    this.clientY=a[Mb]!==f?a[Mb]:a.pageY;
    this.screenX=a.screenX||0;
    this.screenY=a.screenY||
    0;
    this.button=a.button;
    na(this,a[vb]||0);
    this.charCode=a[rb]||("keypress"==c?a[vb]:0);
    this.ctrlKey=a[ac];
    this.altKey=a.altKey;
    this.shiftKey=a.shiftKey;
    this.metaKey=a.metaKey;
    this.state=a.state;
    this.Ta=a;
    a.defaultPrevented&&this[fb]();
    delete this.Wb
    };
    
O.stopPropagation=function(){
    ke.r[dc][L](this);
    this.Ta[dc]?this.Ta[dc]():this.Ta.cancelBubble=h
    };
    
O.preventDefault=function(){
    ke.r[fb][L](this);
    var a=this.Ta;
    if(a[fb])a[fb]();
    else if(Ea(a,k),ge)try{
        (a[ac]||112<=a[vb]&&123>=a[vb])&&na(a,-1)
        }catch(b){}
    };
O.Gb=function(){
    ke.r.Gb[L](this);
    this.Ta=j;
    Ba(this,j);
    ma(this,j);
    this.relatedTarget=j
    };
    
var le=function(){},me=0;
O=le[H];
O.key=0;
O.uc=k;
O.Hg=k;
O.init=function(a,b,c,d,e,g){
    if(Uc(a))this.Fg=h;
    else if(a&&a[Cb]&&Uc(a[Cb]))this.Fg=k;else throw fa("Invalid listener argument");
    this.md=a;
    this.wg=b;
    this.src=c;
    qa(this,d);
    this.capture=!!e;
    this.df=g;
    this.Hg=k;
    this.key=++me;
    this.uc=k
    };
    
O.handleEvent=function(a){
    return this.Fg?this.md[L](this.df||this.src,a):this.md[Cb][L](this.md,a)
    };
    
var ne={},oe={},pe={},qe={},T=function(a,b,c,d,e){
    if(b){
        if(Sc(b)){
            for(var g=0;g<b[G];g++)T(a,b[g],c,d,e);
            return j
            }
            var d=!!d,i=oe;
        b in i||(i[b]={
            w:0,
            Ca:0
        });
        i=i[b];
        d in i||(i[d]={
            w:0,
            Ca:0
        },i.w++);
        var i=i[d],l=Yc(a),q;
        i.Ca++;
        if(i[l]){
            q=i[l];
            for(g=0;g<q[G];g++)if(i=q[g],i.md==c&&i.df==e){
                if(i.uc)break;
                return q[g].key
                }
            }else q=i[l]=[],i.w++;
    g=re();
    g.src=a;
    i=new le;
    i[rc](c,g,a,b,d,e);
    c=i.key;
    g.key=c;
    q[s](i);
    ne[c]=i;
    pe[l]||(pe[l]=[]);
    pe[l][s](i);
    a.addEventListener?(a==Pc||!a.xg)&&a.addEventListener(b,g,d):
    a.attachEvent(b in qe?qe[b]:qe[b]="on"+b,g);
    return c
    }
    throw fa("Invalid event type");
},re=function(){
    var a=se,b=fe?function(c){
        return a[L](b.src,b.key,c)
        }:function(c){
        c=a[L](b.src,b.key,c);
        if(!c)return c
            };
            
    return b
    },te=function(a,b,c,d,e){
    if(Sc(b)){
        for(var g=0;g<b[G];g++)te(a,b[g],c,d,e);
        return j
        }
        d=!!d;
        a:{
        g=oe;
        if(b in g&&(g=g[b],d in g&&(g=g[d],a=Yc(a),g[a]))){
            a=g[a];
            break a
        }
        a=j
        }
        if(!a)return k;
    for(g=0;g<a[G];g++)if(a[g].md==c&&a[g][kb]==d&&a[g].df==e)return ue(a[g].key);return k
    },ue=function(a){
    if(!ne[a])return k;
    var b=ne[a];
    if(b.uc)return k;
    var c=b.src,d=b[A],e=b.wg,g=b[kb];
    c.removeEventListener?(c==Pc||!c.xg)&&c.removeEventListener(d,e,g):c.detachEvent&&c.detachEvent(d in qe?qe[d]:qe[d]="on"+d,e);
    c=Yc(c);
    e=oe[d][g][c];
    if(pe[c]){
        var i=pe[c];
        ld(i,b);
        0==i[G]&&delete pe[c]
    }
    b.uc=h;
    e.Cg=h;
    ve(d,g,c,e);
    delete ne[a];
    return h
    },ve=function(a,b,c,d){
    if(!d.ie&&d.Cg){
        for(var e=0,g=0;e<d[G];e++)d[e].uc?d[e].wg.src=j:(e!=g&&(d[g]=d[e]),g++);
        wa(d,g);
        d.Cg=k;
        0==g&&(delete oe[a][b][c],oe[a][b].w--,0==oe[a][b].w&&(delete oe[a][b],
            oe[a].w--),0==oe[a].w&&delete oe[a])
        }
    },we=function(a,b,c){
    var d=0,e=b==j,g=c==j,c=!!c;
    if(a==j)pd(pe,function(a){
        for(var i=a[G]-1;0<=i;i--){
            var l=a[i];
            if((e||b==l[A])&&(g||c==l[kb]))ue(l.key),d++
        }
        });
else if(a=Yc(a),pe[a])for(var a=pe[a],i=a[G]-1;0<=i;i--){
    var l=a[i];
    if((e||b==l[A])&&(g||c==l[kb]))ue(l.key),d++
}
return d
},ye=function(a,b,c,d,e){
    var g=1,b=Yc(b);
    if(a[b]){
        a.Ca--;
        a=a[b];
        a.ie?a.ie++:a.ie=1;
        try{
            for(var i=a[G],l=0;l<i;l++){
                var q=a[l];
                q&&!q.uc&&(g&=xe(q,e)!==k)
                }
            }finally{
        a.ie--,ve(c,d,b,a)
        }
    }
return ga(g)
},
xe=function(a,b){
    var c=a[Cb](b);
    a.Hg&&ue(a.key);
    return c
    },se=function(a,b){
    if(!ne[a])return h;
    var c=ne[a],d=c[A],e=oe;
    if(!(d in e))return h;
    var e=e[d],g,i;
    if(!fe){
        var l;
        if(!(l=b))a:{
            l=["window","event"];
            for(var q=Pc;g=l.shift();)if(q[g]!=j)q=q[g];
                else{
                l=j;
                break a
            }
            l=q
            }
            g=l;
        l=h in e;
        q=k in e;
        if(l){
            if(0>g[vb]||g.returnValue!=f)return h;
                a:{
                var t=k;
                if(0==g[vb])try{
                    na(g,-1);
                    break a
                }catch(D){
                    t=h
                    }(t||g.returnValue==f)&&Ea(g,h)
                }
            }
            t=new ke;
    t[rc](g,this);
    g=h;
    try{
        if(l){
            for(var F=[],va=t.currentTarget;va;va=va[Dc])F[s](va);
            i=e[h];
            i.Ca=i.w;
            for(var ea=F[G]-1;!t.Wb&&0<=ea&&i.Ca;ea--)ma(t,F[ea]),g&=ye(i,F[ea],d,h,t);
            if(q){
                i=e[k];
                i.Ca=i.w;
                for(ea=0;!t.Wb&&ea<F[G]&&i.Ca;ea++)ma(t,F[ea]),g&=ye(i,F[ea],d,k,t)
                    }
                }else g=xe(c,t)
        }finally{
    F&&wa(F,0),t.kd()
    }
    return g
}
d=new ke(b,this);
try{
    g=xe(c,d)
    }finally{
    d.kd()
    }
    return g
};

var ze=function(){};

S(ze,he);
O=ze[H];
O.xg=h;
O.Ze=j;
O.addEventListener=function(a,b,c,d){
    T(this,a,b,c,d)
    };
    
O.removeEventListener=function(a,b,c,d){
    te(this,a,b,c,d)
    };
O.dispatchEvent=function(a){
    var b=a[A]||a,c=oe;
    if(b in c){
        if(Q(a))a=new je(a,this);
        else if(a instanceof je)Ba(a,a[mc]||this);
        else{
            var d=a,a=new je(b,this);
            ud(a,d)
            }
            var d=1,e,c=c[b],b=h in c,g;
        if(b){
            e=[];
            for(g=this;g;g=g.Ze)e[s](g);
            g=c[h];
            g.Ca=g.w;
            for(var i=e[G]-1;!a.Wb&&0<=i&&g.Ca;i--)ma(a,e[i]),d&=ye(g,e[i],a[A],h,a)&&a.je!=k
                }
                if(k in c)if(g=c[k],g.Ca=g.w,b)for(i=0;!a.Wb&&i<e[G]&&g.Ca;i++)ma(a,e[i]),d&=ye(g,e[i],a[A],k,a)&&a.je!=k;else for(e=this;!a.Wb&&e&&g.Ca;e=e.Ze)ma(a,e),d&=ye(g,e,a[A],k,a)&&
            a.je!=k;
        a=ga(d)
        }else a=h;
    return a
    };
    
O.Gb=function(){
    ze.r.Gb[L](this);
    we(this);
    this.Ze=j
    };
    
var Be=function(a,b,c,d,e){
    if(!Dd&&(!Fd||!Rd("525")))return h;
    if(Hd&&e)return Ae(a);
    if(e&&!d||!c&&(17==b||18==b)||Dd&&d&&b==a)return k;
    switch(a){
        case 13:
            return!(Dd&&Td(9));
        case 27:
            return!Fd
            }
            return Ae(a)
    },Ae=function(a){
    if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||Fd&&0==a)return h;
    switch(a){
        case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:
            return h;
        default:
            return k
            }
        },Ce=function(a){
    switch(a){
        case 61:
            return 187;
        case 59:
            return 186;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
            }
        };

var De=function(a,b){
    a&&this.Ci(a,b)
    };
    
S(De,ze);
O=De[H];
O.qd=j;
O.le=j;
O.hf=j;
O.me=j;
O.Fb=-1;
O.Eb=-1;
var Ee={
    3:13,
    12:144,
    63232:38,
    63233:40,
    63234:37,
    63235:39,
    63236:112,
    63237:113,
    63238:114,
    63239:115,
    63240:116,
    63241:117,
    63242:118,
    63243:119,
    63244:120,
    63245:121,
    63246:122,
    63247:123,
    63248:44,
    63272:46,
    63273:36,
    63275:35,
    63276:33,
    63277:34,
    63289:144,
    63302:45
},Fe={
    Up:38,
    Down:40,
    Left:37,
    Right:39,
    Enter:13,
    F1:112,
    F2:113,
    F3:114,
    F4:115,
    F5:116,
    F6:117,
    F7:118,
    F8:119,
    F9:120,
    F10:121,
    F11:122,
    F12:123,
    "U+007F":46,
    Home:36,
    End:35,
    PageUp:33,
    PageDown:34,
    Insert:45
},Ge=Dd||Fd&&Rd("525");
O=De[H];
O.di=function(a){
    if(Fd&&(17==this.Fb&&!a[ac]||18==this.Fb&&!a.altKey))this.Eb=this.Fb=-1;
    Ge&&!Be(a[vb],this.Fb,a.shiftKey,a[ac],a.altKey)?this[Cb](a):this.Eb=Ed?Ce(a[vb]):a[vb]
    };
    
O.ei=function(){
    this.Eb=this.Fb=-1
    };
O.handleEvent=function(a){
    var b=a.Ta,c,d;
    Dd&&"keypress"==a[A]?(c=this.Eb,d=13!=c&&27!=c?b[vb]:0):Fd&&"keypress"==a[A]?(c=this.Eb,d=0<=b[rb]&&63232>b[rb]&&Ae(c)?b[rb]:0):Cd?(c=this.Eb,d=Ae(c)?b[vb]:0):(c=b[vb]||this.Eb,d=b[rb]||0,Hd&&(63==d&&224==c)&&(c=191));
    var e=c,g=b.keyIdentifier;
    c?63232<=c&&c in Ee?e=Ee[c]:25==c&&a.shiftKey&&(e=9):g&&g in Fe&&(e=Fe[g]);
    a=e==this.Fb;
    this.Fb=e;
    b=new He(e,d,a,b);
    try{
        this.dispatchEvent(b)
        }finally{
        b.kd()
        }
    };
O.Ci=function(a,b){
    this.me&&this.detach();
    this.qd=a;
    this.le=T(this.qd,"keypress",this,b);
    this.hf=T(this.qd,"keydown",this.di,b,this);
    this.me=T(this.qd,"keyup",this.ei,b,this)
    };
    
O.detach=function(){
    this.le&&(ue(this.le),ue(this.hf),ue(this.me),this.me=this.hf=this.le=j);
    this.qd=j;
    this.Eb=this.Fb=-1
    };
    
O.Gb=function(){
    De.r.Gb[L](this);
    this.detach()
    };
    
var He=function(a,b,c,d){
    d&&this[rc](d,f);
    qa(this,"key");
    na(this,a);
    this.charCode=b;
    this.repeat=c
    };
    
S(He,ke);
var Ie=function(){};

Qc(Ie);
Ie[H].Li=0;
Ie[H].Ma=function(){
    return":"+(this.Li++)[Pb](36)
    };
    
Ie.Ia();
var Je="StopIteration"in Pc?Pc.StopIteration:fa("StopIteration"),Ke=function(){};

Ke[H].next=function(){
    throw Je;
};

Ke[H].nf=function(){
    return this
    };
    
var Le=function(a){
    if("function"==typeof a.Db)a=a.Db();
    else if(Tc(a)||Q(a))a=a[G];
    else{
        var b=0,c;
        for(c in a)b++;a=b
        }
        return a
    },Me=function(a){
    if("function"==typeof a.Da)return a.Da();
    if(Q(a))return a[bc]("");
    if(Tc(a)){
        for(var b=[],c=a[G],d=0;d<c;d++)b[s](a[d]);
        return b
        }
        return qd(a)
    },Ne=function(a,b,c){
    if("function"==typeof a[xc])return a[xc](b,c);
    if(Tc(a)||Q(a))return kd(a,b,c);
    var d;
    if("function"==typeof a.Ub)d=a.Ub();
    else if("function"!=typeof a.Da)if(Tc(a)||Q(a)){
        d=[];
        for(var e=a[G],g=0;g<e;g++)d[s](g)
            }else d=
        rd(a);else d=f;
    for(var e=Me(a),g=e[G],i=0;i<g;i++)if(!b[L](c,e[i],d&&d[i],a))return k;return h
    };
    
var Oe=function(a,b){
    this.W={};
    
    this.J=[];
    var c=arguments[G];
    if(1<c){
        if(c%2)throw fa("Uneven number of arguments");
        for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])
            }else a&&this.jd(a)
        };
        
O=Oe[H];
O.w=0;
O.cf=0;
O.Db=function(){
    return this.w
    };
    
O.Da=function(){
    this.ce();
    for(var a=[],b=0;b<this.J[G];b++)a[s](this.W[this.J[b]]);
    return a
    };
    
O.Ub=function(){
    this.ce();
    return this.J.concat()
    };
    
O.sc=function(a){
    return Pe(this.W,a)
    };
O.qf=function(a){
    for(var b=0;b<this.J[G];b++){
        var c=this.J[b];
        if(Pe(this.W,c)&&this.W[c]==a)return h
            }
            return k
    };
    
O.vc=function(a,b){
    if(this===a)return h;
    if(this.w!=a.Db())return k;
    var c=b||Qe;
    this.ce();
    for(var d,e=0;d=this.J[e];e++)if(!c(this.get(d),a.get(d)))return k;return h
    };
    
var Qe=function(a,b){
    return a===b
    };
    
O=Oe[H];
O.Ha=function(){
    return 0==this.w
    };
O.ce=function(){
    if(this.w!=this.J[G]){
        for(var a=0,b=0;a<this.J[G];){
            var c=this.J[a];
            Pe(this.W,c)&&(this.J[b++]=c);
            a++
        }
        wa(this.J,b)
        }
        if(this.w!=this.J[G]){
        for(var d={},b=a=0;a<this.J[G];)c=this.J[a],Pe(d,c)||(this.J[b++]=c,d[c]=1),a++;
        wa(this.J,b)
        }
    };

O.get=function(a,b){
    return Pe(this.W,a)?this.W[a]:b
    };
    
O.set=function(a,b){
    Pe(this.W,a)||(this.w++,this.J[s](a),this.cf++);
    this.W[a]=b
    };
    
O.jd=function(a){
    var b;
    a instanceof Oe?(b=a.Ub(),a=a.Da()):(b=rd(a),a=qd(a));
    for(var c=0;c<b[G];c++)this.set(b[c],a[c])
        };
O.L=function(){
    return new Oe(this)
    };
    
O.nf=function(a){
    this.ce();
    var b=0,c=this.J,d=this.W,e=this.cf,g=this,i=new Ke;
    i.next=function(){
        for(;;){
            if(e!=g.cf)throw fa("The map has changed since the iterator was created");
            if(b>=c[G])throw Je;
            var i=c[b++];
            return a?i:d[i]
            }
        };
        
return i
};

var Pe=function(a,b){
    return m[H][ic][L](a,b)
    };
    
var Re=function(a,b,c){
    this.Ab=a||j;
    this.si=!!c
    };
    
O=Re[H];
O.Rb=function(){
    if(!this.V&&(this.V=new Oe,this.w=0,this.Ab))for(var a=this.Ab[bc]("&"),b=0;b<a[G];b++){
        var c=a[b][w]("="),d=j,e=j;
        0<=c?(d=a[b][uc](0,c),e=a[b][uc](c+1)):d=a[b];
        d=ia(d[u](/\+/g," "));
        d=this.gd(d);
        this.add(d,e?ia(e[u](/\+/g," ")):"")
        }
    };
    
O.V=j;
O.w=j;
O.Db=function(){
    this.Rb();
    return this.w
    };
O.add=function(a,b){
    this.Rb();
    this.ug();
    a=this.gd(a);
    if(this.sc(a)){
        var c=this.V.get(a);
        Sc(c)?c[s](b):this.V.set(a,[c,b])
        }else this.V.set(a,b);
    this.w++;
    return this
    };
    
O.Ha=function(){
    this.Rb();
    return 0==this.w
    };
    
O.sc=function(a){
    this.Rb();
    a=this.gd(a);
    return this.V.sc(a)
    };
    
O.qf=function(a){
    var b=this.Da();
    return 0<=id(b,a)
    };
    
O.Ub=function(){
    this.Rb();
    for(var a=this.V.Da(),b=this.V.Ub(),c=[],d=0;d<b[G];d++){
        var e=a[d];
        if(Sc(e))for(var g=0;g<e[G];g++)c[s](b[d]);else c[s](b[d])
            }
            return c
    };
O.Da=function(a){
    this.Rb();
    var b=[];
    if(a)this.sc(a)&&(b=md(b,this.V.get(this.gd(a))));else for(var a=this.V.Da(),c=0;c<a[G];c++)b=md(b,a[c]);
    return b
    };
    
O.set=function(a,b){
    this.Rb();
    this.ug();
    a=this.gd(a);
    if(this.sc(a)){
        var c=this.V.get(a);
        Sc(c)?this.w-=c[G]:this.w--
    }
    this.V.set(a,b);
    this.w++;
    return this
    };
    
O.get=function(a,b){
    var c=a?this.Da(a):[];
    return 0<c[G]?c[0]:b
    };
ua(O,function(){
    if(this.Ab)return this.Ab;
    if(!this.V)return"";
    for(var a=[],b=this.V.Ub(),c=0;c<b[G];c++)for(var d=b[c],e=aa(""+d),d=this.Da(d),g=0;g<d[G];g++){
        var i=e;
        ""!==d[g]&&(i+="="+aa(""+d[g]));
        a[s](i)
        }
        return this.Ab=a[Jc]("&")
    });
O.ug=function(){
    this.Ab=j
    };
    
O.L=function(){
    var a=new Re;
    a.Ab=this.Ab;
    this.V&&(a.V=this.V.L());
    return a
    };
    
O.gd=function(a){
    a=""+a;
    this.si&&(a=a[Oc]());
    return a
    };
    
var Se=function(a){
    this.W=new Oe;
    a&&this.jd(a)
    },Te=function(a){
    var b=typeof a;
    return"object"==b&&a||"function"==b?"o"+Yc(a):b.substr(0,1)+a
    };
    
O=Se[H];
O.Db=function(){
    return this.W.Db()
    };
    
O.add=function(a){
    this.W.set(Te(a),a)
    };
    
O.jd=function(a){
    for(var a=Me(a),b=a[G],c=0;c<b;c++)this.add(a[c])
        };
        
O.Ha=function(){
    return this.W.Ha()
    };
    
O.contains=function(a){
    return this.W.sc(Te(a))
    };
    
O.Da=function(){
    return this.W.Da()
    };
    
O.L=function(){
    return new Se(this)
    };
    
O.vc=function(a){
    return this.Db()==Le(a)&&this.ti(a)
    };
O.ti=function(a){
    var b=Le(a);
    if(this.Db()>b)return k;
    !(a instanceof Se)&&5<b&&(a=new Se(a));
    return Ne(this,function(b){
        if("function"==typeof a[yc])b=a[yc](b);
        else if("function"==typeof a.qf)b=a.qf(b);
        else if(Tc(a)||Q(a))b=0<=id(a,b);
        else a:{
            for(var d in a)if(a[d]==b){
                b=h;
                break a
            }
            b=k
            }
            return b
        })
    };
    
O.nf=function(){
    return this.W.nf(k)
    };
    
m[H].__defineGetter__&&!m[x]&&(m.defineProperty=function(a,b,c){
    if("value"in c)a[b]=c.value;
    else if("get"in c||"set"in c){
        var d=P(c.set)?c.set:function(){};
        
        a.__defineGetter__(b,P(c.get)?c.get:function(){});
        a.__defineSetter__(b,d)
        }
    });
m[x]&&!m[hb]&&(m.defineProperties=function(a,b){
    for(var c in b)m[x](a,c,b[c])
        });
m.keys||(m.keys=function(a){
    if(typeof a!="object"&&typeof a!="function"||a==j)throw TypeError("Object.keys called on non-object");
    var b=[],c;
    for(c in a)a[ic](c)&&b[s](c);return b
    });
m[Na]||(m.getOwnPropertyNames=m.keys);
m[H].__lookupGetter__&&!m[lc]&&(m.getOwnPropertyDescriptor=function(a,b){
    return a.__lookupGetter__(b)?{
        get:a.__lookupGetter__(b),
        set:a.__lookupSetter__(b)
        }:{
        value:a[b]
        }
    });
m[Tb]||(m.create=function(a){
    var b=function(){};
    
    b.prototype=a;
    return new b
    });
m[Jb]||(m.getPrototypeOf=function(a){
    return a.__proto__
    });
var Ue=function(a,b){
    this.x=a;
    this.y=b
    };
    
Ue[H].G=function(a){
    var b=this.x*a.B+this.y*a.u+a.I;
    this.x=this.x*a.A+this.y*a.t+a.H;
    this.y=b
    };
    
Ue[H].L=function(){
    return new Ue(this.x,this.y)
    };
    
var Ve=function(a,b,c,d,e,g){
    this.A=a;
    this.B=b;
    this.t=c;
    this.u=d;
    this.H=e;
    this.I=g
    },We=new Ve(1,0,0,1,0,0);
O=Ve[H];
O.Ie=function(){
    var a=this.A*this.u-this.B*this.t;
    return new Ve(this.u/a,-this.B/a,-this.t/a,this.A/a,(this.t*this.I-this.u*this.H)/a,(this.B*this.H-this.A*this.I)/a)
    };
O.multiply=function(a){
    return new Ve(this.A*a.A+this.B*a.t,this.A*a.B+this.B*a.u,this.t*a.A+this.u*a.t,this.t*a.B+this.u*a.u,this.H*a.A+this.I*a.t+a.H,this.H*a.B+this.I*a.u+a.I)
    };
    
O.Mi=function(a,b){
    return new Ve(this.A*a,this.B*a,this.t*b,this.u*b,this.H,this.I)
    };
    
O.Ff=function(a,b){
    return new Ve(this.A*a,this.B*b,this.t*a,this.u*b,this.H*a,this.I*b)
    };
    
O.Wf=function(){
    return o.sqrt(this.A*this.A+this.B*this.B)
    };
    
O.Xf=function(){
    return o.sqrt(this.t*this.t+this.u*this.u)
    };
O.translate=function(a,b){
    return new Ve(this.A,this.B,this.t,this.u,this.H+a,this.I+b)
    };
    
O.re=function(a,b){
    return new Ve(this.A,this.B,this.t,this.u,a,b)
    };
    
ua(O,function(){
    return"matrix("+this.A+" "+this.B+" "+this.t+" "+this.u+" "+this.H+" "+this.I+")"
    });
O.ki=function(){
    var a=this.Wf(),b=this.Xf();
    if(!a||!b)return{
        Pb:1,
        ad:1,
        angle:0,
        t:0,
        u:1
    };
    
    var c=this.A/a,d=this.B/a;
    return{
        Pb:a,
        ad:b,
        angle:-o.atan2(this.B,this.A),
        t:(c*this.t+d*this.u)/a,
        u:(c*this.u-d*this.t)/b
        }
    };
var Xe=function(a,b,c){
    var d=o.cos(a[$b]),e=o.sin(a[$b]);
    return new Ve(a.Pb*d,-a.Pb*e,a.Pb*d*a.t+a.ad*e*a.u,a.ad*d*a.u-a.Pb*e*a.t,b,c)
    };
    
Ve[H].vc=function(a){
    return!!a&&this.A==a.A&&this.B==a.B&&this.t==a.t&&this.u==a.u&&this.H==a.H&&this.I==a.I
    };
    
var Ye=function(a,b,c,d,e,g,i,l){
    this.ha=a;
    this.oa=b;
    this.fa=c;
    this.na=d;
    this.ea=e;
    this.ma=g;
    this.Y=i;
    this.ia=l
    },Ze=new Ye(1,0,1,0,1,0,1,0);
O=Ye[H];
O.Bh=function(a){
    return new Ye(this.ha*a.ha,this.ha*a.oa+this.oa,this.fa*a.fa,this.fa*a.na+this.na,this.ea*a.ea,this.ea*a.ma+this.ma,this.Y*a.Y,this.Y*a.ia+this.ia)
    };
    
Fa(O,function(a){
    return new $e(a.oc*this.ha+this.oa,a.nc*this.fa+this.na,a.mc*this.ea+this.ma,this.Zf(a.Oe))
    });
O.Zf=function(a){
    return this.Y*a+this.ia/255
    };
    
O.vc=function(a){
    return a!=j&&this.ha==a.ha&&this.oa==a.oa&&this.fa==a.fa&&this.na==a.na&&this.ea==a.ea&&this.ma==a.ma&&this.Y==a.Y&&this.ia==a.ia
    };
O.Rf=function(){
    return 1==this.ha&&0==this.oa&&1==this.fa&&0==this.na&&1==this.ea&&0==this.ma&&0==this.ia
    };
    
var af=function(a,b,c,d){
    this.c=a;
    this.e=b;
    this.i=c;
    this.k=d;
    this.Ha()&&this.Ne()
    };
    
O=af[H];
O.Ne=function(){
    this.e=this.c=p.POSITIVE_INFINITY;
    this.k=this.i=p.NEGATIVE_INFINITY
    };
    
O.L=function(){
    return new af(this.c,this.e,this.i,this.k)
    };
    
O.expand=function(a,b){
    this.pc(a,b,0)
    };
    
O.pc=function(a,b,c){
    this.c=o.min(this.c,a-c);
    this.i=o.max(this.i,a+c);
    this.e=o.min(this.e,b-c);
    this.k=o.max(this.k,b+c)
    };
O.add=function(a){
    this.e+=a.e;
    this.k+=a.k;
    this.c+=a.c;
    this.i+=a.i
    };
    
O.G=function(a){
    if(!this.Ha()){
        var b=new Ue(this.c,this.e),c=new Ue(this.c,this.k),d=new Ue(this.i,this.e),e=new Ue(this.i,this.k);
        this.Ne();
        b.G(a);
        c.G(a);
        d.G(a);
        e.G(a);
        this[Sa](b.x,b.y);
        this[Sa](c.x,c.y);
        this[Sa](d.x,d.y);
        this[Sa](e.x,e.y)
        }
    };

O.ph=function(a){
    return(this.c>=a.c&&this.c<=a.i||this.i>=a.c&&this.i<=a.i||a.c>=this.c&&a.c<=this.i)&&(this.e>=a.e&&this.e<=a.k||this.k>=a.e&&this.k<=a.k||a.e>=this.e&&a.e<=this.k)
    };
O.contains=function(a,b){
    return a>=this.c&&a<=this.i&&b>=this.e&&b<=this.k
    };
    
O.Qb=function(a){
    this.c=o.min(this.c,a.c);
    this.i=o.max(this.i,a.i);
    this.e=o.min(this.e,a.e);
    this.k=o.max(this.k,a.k)
    };
    
O.Rg=function(a){
    this.c=o.max(this.c,a.c);
    this.i=o.min(this.i,a.i);
    this.e=o.max(this.e,a.e);
    this.k=o.min(this.k,a.k);
    this.Ha()&&this.Ne()
    };
    
O.Ha=function(){
    return!(this.c<=this.i&&this.e<=this.k)
    };
    
O.Sg=function(){
    return new af(-this.i,-this.k,-this.c,-this.e)
    };
    
ja(O,function(){
    return o.max(this.i-this.c,0)
    });
Ha(O,function(){
    return o.max(this.k-this.e,0)
    });
var bf=function(a){
    return new af(a.xmin,a.ymin,a.xmax,a.ymax)
    };
    
var U=function(a,b,c,d){
    if(Vc(a)){
        var b=b==j?m[Na](a):Q(b)?b[bc](","):b,e={};
        
        d&4&&(e.writable=h);
        d&2&&(e.configurable=h);
        d&1&&(e.enumerable=h);
        c&4&&(e.writable=k);
        c&2&&(e.configurable=k);
        c&1&&(e.enumerable=k);
        for(c=0;c<b[G];++c)(d=m[lc](a,b[c]))&&d.configurable&&m[x](a,b[c],e)
            }
        },cf=function(){};

m[x](cf[H],"unwatch",{
    get:function(){
        return function(a){
            if(1>arguments[G])return k;
            var b=this[a];
            delete this[a];
            this[a]=b;
            return h
            }
        }
});
m[x](cf[H],"watch",{
    get:function(){
        return function(a,b,c){
            if(2>arguments[G])return k;
            for(var d=this,e=j,g=this;m[Jb](g);g=m[Jb](g))if(m[lc](g,a)!=j){
                d=g;
                e=m[lc](g,a);
                break
            }
            if(!e||e.configurable){
                var i=d[a];
                delete d[a];
                m[x](d,a,{
                    get:function(){
                        return i
                        },
                    set:function(d){
                        return i=b[L](this,a,i,d,c)
                        },
                    configurable:h
                })
                }
                return h
            }
        }
});
var df={};

cf.registerClass=function(a,b){
    if(2>arguments[G])return k;
    df[a]=b;
    return h
    };
cf[H].addProperty=function(a,b,c){
    var d=m[lc](this,a);
    if(a==j||""==a||!Uc(b)||c&&!Uc(c)||d&&!d.configurable)return k;
    if(!c||d&&!d.writable)c=function(){};
        
    m[x](this,a,{
        get:b,
        set:c,
        configurable:h,
        enumerable:!(d&&!d.enumerable)
        });
    return h
    };
    
U(cf,j,3);
U(cf[H],j,3);
var ef=function(a){
    m[x](this,"__swiffy_s",{
        value:a
    })
    },ff=function(a,b){
    for(var c=0;c<this._listeners[G];++c){
        var d=this._listeners[c],e=d[a.j().d(d,b)];
        Uc(e)&&e[L](d)
        }
        if(0<this._listeners[G])return h
        },gf=function(a){
    ld(this._listeners,a);
    this._listeners[s](a);
    return h
    },hf=function(a){
    return ld(this._listeners,a)
    };
ef[H].initialize=function(a){
    a._listeners=[];
    a.addListener=gf;
    a.broadcastMessage=ad(ff,this.__swiffy_s);
    a.removeListener=hf;
    U(a,["addListener","broadcastMessage","removeListener","_listeners"],3)
    };
    
U(ef[H],j,3);
var jf=function(){
    this.J={};
    
    this.lf=this.yb=0;
    U(this,j,3)
    };
    
jf[H].getAscii=function(){
    return this.lf
    };
    
jf[H].getCode=function(){
    return this.yb
    };
    
jf[H].isDown=function(a){
    return!!this.J[a]
    };
    
jf[H].isToggled=function(){
    return k
    };
m[hb](jf[H],{
    BACKSPACE:{
        value:8,
        writable:k
    },
    CAPSLOCK:{
        value:20,
        writable:k
    },
    CONTROL:{
        value:17,
        writable:k
    },
    DELETEKEY:{
        value:46,
        writable:k
    },
    DOWN:{
        value:40,
        writable:k
    },
    END:{
        value:35,
        writable:k
    },
    ENTER:{
        value:13,
        writable:k
    },
    ESCAPE:{
        value:27,
        writable:k
    },
    HOME:{
        value:36,
        writable:k
    },
    INSERT:{
        value:45,
        writable:k
    },
    LEFT:{
        value:37,
        writable:k
    },
    PGDN:{
        value:34,
        writable:k
    },
    PGUP:{
        value:33,
        writable:k
    },
    RIGHT:{
        value:39,
        writable:k
    },
    SHIFT:{
        value:16,
        writable:k
    },
    SPACE:{
        value:32,
        writable:k
    },
    TAB:{
        value:9,
        writable:k
    },
    UP:{
        value:38,
        writable:k
    }
});
jf[H].bi=function(a){
    this.yb=a[vb];
    this.J[a[vb]]=k
    };
    
jf[H].Th=function(a){
    this.yb=a[vb];
    this.lf=a[rb];
    this.J[a[vb]]=h
    };
    
var kf={
    37:1,
    39:2,
    36:3,
    35:4,
    45:5,
    46:6,
    8:8,
    13:13,
    38:14,
    40:15,
    33:16,
    34:17,
    9:18,
    27:19
};

jf[H].ci=function(){
    var a=kf[this.yb];
    return a?a:this.lf
    };
    
U(jf[H],j,3);
var lf=function(a){
    this.p=a;
    U(this,j,3)
    };
    
O=lf[H];
O.La=h;
O.update=function(){
    this.p.N[K].cursor=this.La?this.p.Pd()?"pointer":this.p.Ih()?"pointer":!this.p[Kc]()&&this.p.Jh()?"pointer":"default":"none"
    };
    
O.Uh=function(){
    this.broadcastMessage("onMouseDown")
    };
    
O.Sh=function(){
    this.broadcastMessage("onMouseMove")
    };
    
O.Vh=function(){
    this.broadcastMessage("onMouseUp")
    };
    
lf[H].hide=function(){
    var a=this.La;
    this.La=k;
    this[Ec]();
    return a
    };
    
lf[H].show=function(){
    var a=this.La;
    this.La=h;
    this[Ec]();
    return a
    };
U(lf[H],j,3);
var pf=function(a,b,c,d){
    var e=j;
    switch(a[A]){
        case 2:
            b=mf("linearGradient",a,c);
            b[y]("x1",-1);
            b[y]("x2",1);
            b[y]("y1",0);
            b[y]("y2",0);
            e=b;
            break;
        case 3:case 4:
            b=mf("radialGradient",a,c);
            b[y]("r",1);
            b[y]("cx",0);
            b[y]("cy",0);
            a[Rb].f&&c[y](b,"fx",a[Rb].f);
            e=b;
            break;
        case 5:case 7:
            if(c=d.wa[a[Qa]]){
            var g=nf(of(a[Lc]),b[0]),i=c[Pa],c=c[Gc],b=n[J]("http://www.w3.org/2000/svg","g");
            b.id=Ie.Ia().Ma();
            var e=n[J]("http://www.w3.org/2000/svg","g"),l=n[J]("http://www.w3.org/2000/svg","g");
            l[r](b);
            l[r](e);
            for(var d=
                d.wa[a[Qa]].Ya(),q=o[ab](o.min[N](o,g.Ag)/i),t=o[Xa](o.max[N](o,g.Ag)/i);q<t;q++){
                var D=n[J]("http://www.w3.org/2000/svg","use");
                D[gb]("http://www.w3.org/1999/xlink","href","#"+d.id);
                D[y]("x",q*i);
                b[r](D)
                }
                i=o[ab](o.min[N](o,g.Bg)/c);
            for(g=o[Xa](o.max[N](o,g.Bg)/c);i<g;i++)d=n[J]("http://www.w3.org/2000/svg","use"),d[gb]("http://www.w3.org/1999/xlink","href","#"+b.id),d[y]("y",i*c),e[r](d);
            e=l
            }
        }
        if(a[Rb]&&a[Rb].spread)switch(a[Rb].spread){
    case 1:
        e[y]("spreadMethod","reflect");
        break;
    case 2:
        e[y]("spreadMethod",
        "repeat")
    }
    if(a[Rb]&&a[Rb].interpolation)switch(a[Rb].interpolation){
    case 1:
        e[y]("color-interpolation","linearRGB")
        }
        e!=j&&(e.id=Ie.Ia().Ma());
return e
},mf=function(a,b,c){
    a=n[J]("http://www.w3.org/2000/svg",a);
    a[y]("gradientUnits","userSpaceOnUse");
    if(b[Lc]){
        var d=b[Lc].map(function(a){
            return of(a).Mi(16384,16384)
            });
        c[y](a,"gradientTransform",d)
        }else a[y]("gradientTransform","scale(16384)");
    for(d=0;d<b[Rb].stops[G];d++)a[r](qf(b[Rb].stops[d],c));
    return a
    },qf=function(a,b){
    var c=n[J]("http://www.w3.org/2000/svg",
        "stop"),d=a.offset.map(function(a){
        return a/255
        });
    b[y](c,"offset",d);
    b.He(c,"stop-color",a[ib]);
    b.Ge(c,"stop-opacity",a[ib]);
    return c
    };
    
function rf(a,b){
    this.Ag=a;
    this.Bg=b
    }
    var nf=function(a,b){
    function c(a,b){
        e.x=a;
        e.y=b;
        e.G(d);
        g[s](e.x);
        i[s](e.y)
        }
        var d=a.Ie(),e=new Ue(0,0),g=[],i=[];
    c(b.c,b.e);
    c(b.i,b.e);
    c(b.c,b.k);
    c(b.i,b.k);
    return new rf(g,i)
    };
    
var sf=function(a,b){
    this.pb=a?a:new af;
    this.ca=b
    };
    
sf[H].Qb=function(a){
    this.ca?a.ca?this.ca.Qb(a.ca):this.ca.Qb(a.pb):a.ca&&(this.ca=this.pb.L(),this.ca.Qb(a.ca));
    this.pb.Qb(a.pb)
    };
    
sf[H].G=function(a){
    this.ca&&this.ca.G(a);
    this.pb.G(a)
    };
    
sf[H].L=function(){
    return new sf(this.pb.L(),this.ca?this.ca.L():f)
    };
    
sf[H].Jb=function(){
    return this.ca?this.ca:this.pb
    };
    
var uf=function(){
    this.Cb=this.tc=this.P=j;
    this.hd=[];
    this.l=new tf(this)
    };
    
O=uf[H];
O.ke=function(a){
    if(!this.P||this.P[z]>a)return this.Cb=j;
    var b=this.P;
    this.Cb&&a>=this.Cb[z]&&(b=this.Cb);
    for(;b[E]&&b[E][z]<=a;)b=b[E];
    return this.Cb=b
    };
    
O.he=function(a,b){
    var c=this.ke(b);
    if(c)c[E]?c[E].eb=a:this.tc=a,a.eb=c,sa(a,c[E]),sa(c,a);
    else if(this.P&&(this.P.eb=a,sa(a,this.P)),this.P=a,!this.tc)this.tc=a;
    pa(a,b)
    };
O.pd=function(a){
    this.Cb===a&&(this.Cb=this.Cb[E]);
    a.eb?sa(a.eb,a[E]):this.P=a[E];
    a[E]?a[E].eb=a.eb:this.tc=a.eb;
    sa(a,j);
    a.eb=j;
    pa(a,f)
    };
    
O.Pf=function(a,b){
    this.he(a,b);
    vf(this.o,a)
    };
    
O.Of=function(a){
    return(a=this.Sd(a))?this.We(a):j
    };
    
O.We=function(a){
    this.pd(a);
    a.Kg(32)?this.hd[s](a):this.kf(a);
    return a
    };
    
O.nh=function(a){
    for(var b=this.P;b;){
        var c=b,b=b[E];
        a(c)||this.We(c)
        }
    };
    
O.Sd=function(a){
    var b=this.ke(a);
    return b&&b[z]==a?b:j
    };
    
O.forEach=function(a){
    for(var b=this.P;b;){
        if(a(b))return h;
        b=b[E]
        }
        return k
    };
O.Xh=function(a){
    for(var b=this.P;b;){
        if(b[qb]()==a)return b;
        b=b[E]
        }
        return j
    };
    
O.Yh=function(){
    return this.tc?o.max(0,this.tc[z]+1):0
    };
    
O.kf=function(a){
    wf(this.o,a);
    a.s();
    pa(a,f)
    };
    
O.s=function(){
    for(;this.P;){
        var a=this.P;
        this.pd(a);
        this.kf(a)
        }
    };
    
O.ub=function(){
    for(var a=this.P;a;)a.ub(),a=a[E]
        };
        
O.Ph=function(){
    if(0<this.hd[G]){
        for(var a=0;a<this.hd[G];a++)this.kf(this.hd[a]);
        this.hd=[]
        }
    };

O.Vf=function(a){
    this.o=a;
    for(var b=this.P;b;)vf(a,b),b=b[E]
        };
O.gf=function(a,b){
    this.o&&(wf(this.o,a),b&&vf(this.o,a,b))
    };
    
O.ef=function(a,b){
    b<a&&(b=a=b);
    var c=this.ke(a),d=this.ke(b);
    c&&c[z]==a?this.pd(c):c=j;
    d&&d[z]==b?this.pd(d):d=j;
    c&&this.he(c,b);
    d&&this.he(d,a)
    };
    
O.Ch=function(a){
    var b=o.min(-16384,this.P[z])-1;
    this.pd(a);
    this.he(a,b)
    };
var vf=function(a,b,c){
    if(a&&(P(c)||(c=b[qb]()),c)){
        var d=b.a.j(),e=d.d(a,c);
        a[ic](e)||(a[d.hb(a,c)]=b.z()?b.S():a)
        }
    },wf=function(a,b){
    if(a){
        var c=b.z()?b.S():a,d=b[qb](),e=b.a.j();
        d&&e&&(d=e.d(a,d));
        d&&c===a[d]&&delete a[d]
    }
},tf=function(a){
    this.n=a;
    this.kc=[]
    };
    
O=tf[H];
O.Pe=function(){
    this.D||(this.D=n[J]("http://www.w3.org/2000/svg","g"));
    return this.D
    };
O.O=function(a){
    this.rh();
    for(var b=[],c=this.n.P,d=j;c;){
        for(var e=c.l;0<b[G]&&c[z]>b[b[G]-1].Ec;)b.pop();
        e.O(a);
        c.M=0;
        c.lb=0;
        e.qh(b);
        this.kc[s](c);
        e=e.Ya();
        d=d?d[E]:this.D[xb];
        d!=e&&(this.D.insertBefore(e,d),d=e);
        c.yf()&&!(c instanceof xf)&&b[s](c);
        c=c[E]
        }
        for(d=d?d[E]:this.D[xb];d;)a=d,d=d[E],this.D[kc](a)
        };
        
O.Kb=function(a,b){
    for(var c=this.n.P;c;){
        var d=c.l;
        d.Kb(a,b);
        d.ac&&d.Fc();
        c=c[E]
        }
    };
    
O.Ya=function(){
    return this.D
    };
O.rh=function(){
    for(var a=this.kc[G]-1;0<=a;--a){
        var b=this.kc[a],c=b.l;
        b.nb&&(c.s(),this.D[kc](c.Ya()))
        }
        this.kc=[]
    };
    
O.s=function(){
    for(var a=0;a<this.kc[G];++a)this.kc[a].l.s()
        };
        
O.Na=function(){
    for(var a=this.n.P;a;)a.l.Na(),a=a[E]
        };
        
var yf=function(a){
    this.a=a;
    this.Ec=f;
    this.Ee="";
    this.qa=j;
    sa(this,j);
    this.eb=j;
    this.lb=this.M=0;
    this.sa=7;
    this.X=[];
    this.La=h;
    this.Ib=0;
    this.nb=this.Bf=k;
    this.Za=We;
    this.ec=j;
    this.Ea=Ze;
    this.q(4);
    this.Xa=this.Ea;
    this.ud=Ze;
    this.ob=this.yd=j
    };
    
O=yf[H];
O.vb=function(a){
    m[x](a,"__swiffy_d",{
        value:this
    })
    };
    
O.$f=function(){
    var a=this.qa;
    if(a){
        if(this.M&4||a.M&2048)a=a.Xa.Bh(this.Ea),this.Jc?(this.ud=a,this.Xa=Ze):(this.ud=Ze,this.Xa=a),this.q(2048)
            }else this.M&4&&(this.Xa=this.Ea,this.q(2048));
    this.Ue(function(a){
        a.$f()
        })
    };
O.Ka=function(){
    this.sa&1&&(this.Nh=this.qa?this.Za[qc](this.qa.Ka()):this.Za,this.sa^=1);
    return this.Nh
    };
    
O.Yb=function(){
    this.sa&2&&(this.ai=this.Ka().Ie(),this.sa^=2);
    return this.ai
    };
    
O.Ue=function(){};
    
O.map=function(a){
    return a(this)
    };
    
O.Xc=function(){
    this.o=new V;
    this.vb(this.o)
    };
    
O.lh=function(){
    return!!this.o
    };
    
O.S=function(){
    this.o||this.Xc();
    return this.o
    };
    
O.Ga=function(){
    this.Ei=h
    };
    
O.ig=function(){
    return!!this.Ei
    };
O.setTransform=function(a){
    this.Za!=a&&(this.q(1),this.Za=a,this.ec=j,this.qg(),this.qa&&this.qa.Zc())
    };
    
O.wc=function(){
    this.ec||(this.ec=this.Za.ki());
    return this.ec
    };
    
O.jf=function(){
    var a=this.ec;
    a&&(this[mb](Xe(a,this.Za.H,this.Za.I)),this.ec=a)
    };
    
O.qg=function(){
    this.sa|=3;
    this.q(1024);
    this.Ue(function(a){
        a.qg()
        })
    };
    
O.Zc=function(){
    this.sa|=4;
    this.q(8192);
    this.qa&&this.qa.Zc()
    };
    
O.la=function(){
    return this.Za
    };
    
O.yf=function(){
    return P(this.Ec)
    };
O.ye=function(a){
    this.Ec!=a&&(this.q(16384),this.Ec=a)
    };
    
O.q=function(a){
    var b=this.M|a;
    b!=this.M&&this.qa!=j&&this.qa.Dg(a);
    this.M=b
    };
    
O.Dg=function(a){
    !this.lb&&this[Ma]()!=j&&this[Ma]().Dg(a);
    this.lb|=a
    };
    
O.Nd=function(a){
    this.Ib=a
    };
    
O.s=function(){
    this.nb=h
    };
    
O.ub=function(){
    this.Bf=h
    };
    
O.mb=function(a){
    this.Ea.vc(a)||(this.q(4),this.Ea=a)
    };
    
O.Bd=function(a){
    this.Jc!=a&&(this.q(4096),this.q(4),this.Jc=a)
    };
O.Yc=function(a){
    if(this.yd!=a){
        this.q(16384);
        var b=this.yd;
        this.ob&&this.ob.Yc(j);
        b&&(b.ob=j,b.q(16384));
        a&&(a.Yc(j),a.ye(f),a.ob&&a.ob.Yc(j),a.ob=this,a.q(16384));
        this.yd=a
        }
    };

O.Cd=function(a){
    this.X!=a&&(this.q(2),this.X=a)
    };
    
O.qb=function(a){
    a=""+a;
    a!=this.Ee&&this.qa&&this.qa.gf(this,a);
    this.Ee=a
    };
    
O.getName=function(){
    return this.Ee
    };
    
O.Kd=function(a){
    this.qa=a
    };
    
O.getParent=function(){
    return this.qa
    };
    
O.Pi=function(a){
    this.La!=a&&(this.q(8),this.La=a)
    };
    
O.z=function(){
    return k
    };
    
O.Kg=function(){
    return k
    };
O.Va=function(){
    this.sa&4&&(this.hi=this.xc(),this.sa^=4);
    return this.hi
    };
    
O.Fa=function(){};
    
Da(O,function(){});
var zf=function(a){
    this.b=a;
    this.cc=this.ya=this.dc=this.za=j;
    this.De=[];
    this.X=[];
    this.Hb=j;
    this.Cc=1;
    this.R=[];
    this.ac=k
    };
    
O=zf[H];
O.Ya=function(){
    return this.D
    };
    
O.Ye=function(a){
    return Af(a,this.b.Xa)
    };
    
O.ji=function(a){
    return Bf(a,this.b.Xa)
    };
O.O=function(a){
    if(this.b.M||this.b.lb)if(this.b.yf()||this.b.ob!=f){
        this.ac||(this.D&&this.Fc(),this.Oa=this.D=n[J]("http://www.w3.org/2000/svg","clipPath"),this.Oa.id=this.Ed(),this.ac=h);
        var a=We,b=this.b.ob,c=this.b[Ma]();
        b&&b[Ma]()!=c&&(a=c.Ka());
        ae(this.D);
        this.Kb(this.D,a);
        this.b.M=0;
        this.b.lb=0
        }else{
        this.ac&&this.Fc();
        this.Oa||(this.D=this.Oa=this.Qc(a),this.Nc&&(this.Oa.id=this.Nc));
        a=this.b.M;
        a&8&&this.Oa[y]("display",this.b.La?"inline":"none");
        a&2048&&(a|=4096);
        a&4096&&this.eh()&&(a|=2);
        a&1&&(this.Oa[y]("transform",this.Jf()),this.Na());
        if(a&2){
            if(a|=2048,Cf){
                b="SourceGraphic";
                this.za&&(this.X=[],ae(this.za),this.Hb=j);
                this.Cc=1;
                for(c=0;c<this.b.X[G];++c){
                    var d=new Df[this.b.X[c][A]](this,this.b.X[c]);
                    if(d){
                        this.X[s](d);
                        d[N](b);
                        var b=d[Wb](),e=d.region;
                        this.Hb==j?this.Hb=e:e!=j&&this.Hb.add(e);
                        this.Cc=o.max(this.Cc,d.Kf())
                        }
                    }
                this.dc&&(d=this.dc,this.X[s](d),d[N](b),d[Wb]());
            this.Lf();
            this.ya&&(0<this.za[Fb][G]?this.ya[y]("filter","url(#"+this.za.id+")"):this.ya[Bc]("filter"))
            }
        }else this.za&&
        this.Lf();
    this.fh();
    a&2048&&this.Be()
    }
};

O.Kb=function(){};
    
O.Jf=function(){
    var a=this.b.Za[Pb]();
    this.we&&(a+=" "+this.we[Pb]());
    return a
    };
    
var Ef=function(a){
    var b=n[J]("http://www.w3.org/2000/svg","g");
    ce(b,a);
    b[r](a);
    return b
    };
    
O=zf[H];
O.qh=function(a){
    if(!this.ac){
        var b=0,c=this.De,a=a[Ta](0),d=this.b.yd;
        d&&a[s](d);
        for(var d=o.min(c[G],a[G]),e=this.cc;b<d;)c[b]!=a[b]&&e[y]("clip-path","url(#"+a[b].l.Ed()+")"),e=e[xb],++b;
        if(a[G]>d){
            d=a[G];
            0==b&&(e?(c=e,e=e[xb]):(e=this.D,this.D=this.cc=c=Ef(e)),c[y]("clip-path","url(#"+a[b].l.Ed()+")"),++b);
            for(;b<d;)c=Ef(e),c[y]("clip-path","url(#"+a[b].l.Ed()+")"),++b
                }else if(c[G]>d){
            d=c[G];
            0==b&&(e[Bc]("clip-path"),e=e[xb],++b);
            for(;b<d;)c=e[xb],ce(c,e),e=c,++b
                }
                this.De=a
        }
    };
O.Ed=function(){
    P(this.Nc)||(this.Nc=Ie.Ia().Ma(),this.Oa&&(this.Oa.id=this.Nc));
    return this.Nc
    };
    
O.s=function(){
    be(this.za)
    };
    
O.Fc=function(){
    this.s();
    this.D=this.Oa=this.cc=this.za=j;
    this.R=[];
    this.X=[];
    this.De=[];
    this.ac=k;
    this.b.M=-1
    };
O.xa=function(){
    this.za==j&&(this.za=n[J]("http://www.w3.org/2000/svg","filter"),this.za.id=Ie.Ia().Ma(),this.b.a.Zb[r](this.za),this.ya==j&&(this.ya=n[J]("http://www.w3.org/2000/svg","g"),ce(this.ya,this.D),this.cc==j&&(this.cc=Ef(this.D)),this.ya[r](this.cc),this.D=this.ya));
    return this.za
    };
O.Lf=function(){
    if(this.Hb!=j){
        var a=this.b.a,b=this.b[Ma]().Yb();
        this.b[Ma]().Ka();
        var c=this.b.Va().pb.L();
        c.G(this.b.Ka());
        c.add(this.Hb);
        a=new af(0,0,20*a.td,20*a.sd);
        a.add(this.Hb.Sg());
        c.Rg(a);
        a=this.xa();
        if(c.Ha())a[y]("width",0),a[y]("height",0);
        else{
            var d=o[Xa]((c.i-c.c)/20),e=o[Xa]((c.k-c.e)/20),g=d,i=e;
            5E4<d*e&&(g=o[ab](g/this.Cc),i=o[ab](i/this.Cc));
            c=c.L();
            c.G(b);
            c.c-=20;
            c.e-=20;
            c.i+=20;
            c.k+=20;
            a[y]("filterUnits","userSpaceOnUse");
            a[y]("x",c.c);
            a[y]("y",c.e);
            a[y]("width",c.i-c.c);
            a[y]("height",
                c.k-c.e);
            g<d?a[y]("filterRes",g+" "+i):a[Bc]("filterRes")
            }
        }
};

O.fh=function(){
    for(var a=0;a<this.X[G];++a)this.X[a].O()
        };
        
O.eh=function(){
    var a=this.b,b=a.ud;
    if(1<a.Jc||1==a.Jc&&!b.Rf()){
        if(!this.dc)return this.dc=new Ff(this),this.ya&&this.ya[Bc]("opacity"),h
            }else{
        a=b.Y[Va](3);
        if(1!=a||this.ya)this.xa(),this.ya[y]("opacity",a);
        if(this.dc)return this.dc=j,h
            }
            return k
    };
    
O.Tg=function(a,b){
    this.R[s](function(){
        a[y]("opacity",this.ji(b)[Va](3))
        })
    };
O.Ad=function(a,b,c){
    this.R[s](function(){
        var d=this.Ye(c);
        a[y](b,d[Pb]());
        a[y](b+"-opacity",d.Oe[Va](3))
        })
    };
    
O.Be=function(){
    for(var a=this.R,b=0;b<a[G];++b)a[b][L](this);
    if(this.X)for(b=0;b<this.X[G];++b)this.X[b].Be()
        };
        
O.Na=function(){};
    
var Gf=function(){
    xa(this,[])
    },Hf=function(a){
    yf[L](this,a);
    this.Ra=1;
    this.Ld=k;
    this.Tc={};
    
    this.Af=h;
    this.Dd=2096896
    };
    
S(Hf,yf);
var If={
    cj:1,
    aj:2,
    gj:4,
    ej:8,
    fj:16,
    mj:32,
    Zi:64,
    dj:128,
    kj:256,
    lj:512,
    jj:1024,
    ij:2048,
    hj:4096,
    Wi:8192,
    Yi:16384,
    Vi:32768,
    Xi:65536,
    $i:131072,
    Ui:262144,
    Ti:524288,
    bj:1048576
},Jf={
    4:"onMouseUp",
    8:"onMouseDown",
    16:"onMouseMove",
    32:"onUnload",
    64:"onEnterFrame",
    128:"onLoad",
    16384:"onDragOver",
    65536:"onDragOver",
    256:"onRollOut",
    512:"onRollOver",
    1024:"onReleaseOutside",
    2048:"onRelease",
    4096:"onPress",
    8192:"onDragOut",
    32768:"onDragOut"
},Kf=function(a,b){
    m[x](this,a,{
        value:b,
        configurable:h,
        writable:h,
        enumerable:h
    });
    var c=this.__swiffy_d;
    c&&c.Je()
    },Lf=function(){};

O=Hf[H];
O.Jd=function(a){
    this.Dd|=a
    };
    
O.Kg=function(a){
    return this.Tc[a]&&0<this.Tc[a][I][G]
    };
    
O.Jg=function(a){
    var b=this.Tc[a];
    b||(b=new Gf,this.Tc[a]=b);
    return b
    };
    
O.kg=function(a,b,c){
    for(var d in If){
        var e=If[d];
        if(a&e){
            this.Jd(e);
            var g=this.Jg(e),i={};
            
            i.Tf=new Mf(c,this.Ig());
            e&1048576&&(i.Uf=function(a){
                return a.getKey().ci()==b
                },i.stopPropagation=h);
            g[I][s](i);
            e&130816&&this.Je()
            }
        }
    };
O.vi=function(a,b){
    for(var c in If){
        var d=If[c];
        a&d&&(this.Jg(d).sound=b)
        }
    };
    
O.isEnabled=function(){
    return this.Ld&&this.S().enabled!=k&&!this.nb
    };
    
O.Je=function(){
    !this.Ld&&this.Af&&(this.q(128),this.Ld=h)
    };
    
O.fireEvent=function(a){
    var b=k;
    if(this.Dd&a){
        var c=this.a.j(),d=this.Tc[a];
        if(d){
            for(var e=0;e<d[I][G];++e){
                var g=d[I][e];
                if(!g.Uf||g.Uf(this.a))g.Tf&&c.cg(g.Tf),g[dc]&&(b=h)
                    }
                    d[yb]&&this.a.jc().dg(d[yb])
            }
            var i=Jf[a];
        if(i){
            var l=this;
            c.Yf(function(){
                if(l.lh()){
                    var a=l.S(),b=c.d(a,i);
                    if(a[b])a[b]()
                        }
                    })
        }
    }
return b
};
O.ka=function(a){
    this.Ra!=a&&(this.Ra=a)
    };
    
O.trackAsMenu=function(){
    return k
    };
    
O.Qd=function(a){
    this[nc]()&&(this.a.uh(this),this.a[Kc]()==k&&1==this.Ra?(this.ka(2),this[M](512)):this[wc]()&&this.a.Pd()==k&&1==this.Ra?(this.ka(4),this[M](16384)):this.a.Uc(this)&&2==this.Ra&&(this.ka(4),this[M](65536)),this.a.$(),a[dc]())
    };
O.Yd=function(a){
    this.a.Re(this);
    this[nc]()?(this.a[Kc]()==k&&2==this.Ra?(this.ka(1),this[M](256)):this[wc]()&&this.a.Pd()==k&&4==this.Ra?(this.ka(1),this[M](8192)):this.a.Uc(this)&&4==this.Ra&&(this.ka(2),this[M](32768)),this.a.$(),a&&a[dc]()):this.ka(1)
    };
    
O.wd=function(a){
    this[nc]()?(this[wc]()?this.a[Wa](this):this.a[Wa](this,h,R(this.yh,this)),a[dc](),this.ka(4),this[M](4096),this.a.$()):(this.a.Re(this),this.ka(1))
    };
O.vd=function(a){
    if(this[nc]()){
        var b=this[wc]()&&this.a.Pd()==k||this.a.Uc(this);
        this.a[Lb](this);
        a[dc]();
        this.ka(2);
        b?this[M](2048):this[M](512);
        this.a.$()
        }else this.a.Re(this),this.ka(1)
        };
        
O.yh=function(){
    this[nc]()&&(this.ka(1),this[M](1024),this.a.$())
    };
    
var Nf=function(a){
    zf[L](this,a);
    this.pa=[]
    };
    
S(Nf,zf);
O=Nf[H];
O.O=function(a){
    Nf.r.O[L](this,a);
    if(this.b.M&128&&this.b.Ld){
        a=this.Td();
        ya(a[K],"visiblePainted");
        var b=this.b,c;
        "createTouch"in n?(c=T(a,"touchmove",this.ue,h,this),this.pa[s](c),c=T(a,"touchstart",this.ve,h,this),this.pa[s](c),c=T(a,"touchend",this.te,h,this)):(c=T(a,"mouseover",this.Qd,h,this),this.pa[s](c),c=T(a,"mouseout",this.se,h,this),this.pa[s](c),c=T(a,"mousedown",b.wd,h,b),this.pa[s](c),c=T(a,"mouseup",b.vd,h,b));
        this.pa[s](c)
        }
    };
O.se=function(a){
    var b=a.relatedTarget;
    b&&de(this.Td(),b)?a[dc]():this.b.Yd(a)
    };
    
O.Qd=function(a){
    var b=a.relatedTarget;
    b&&de(this.Td(),b)?a[dc]():this.b.Qd(a)
    };
    
O.ue=function(){
    this.b.a.Uc(this.b)&&(this.b[M](8192),this.b.a[Lb](this.b.a))
    };
    
O.ve=function(a){
    1==a.Ta.touches[G]&&(this.b.Qd(a),this.b.wd(a))
    };
    
O.te=function(a){
    this.b.a.Uc(this.b)&&this.b.vd(a)
    };
    
O.s=function(){
    Nf.r.s[L](this);
    for(var a=0;a<this.pa[G];a++)ue(this.pa[a])
        };
        
var Of=function(a){
    Hf[L](this,a);
    this.n=new uf
    };
    
S(Of,Hf);
O=Of[H];
O.s=function(){
    Of.r.s[L](this);
    this.n.s()
    };
    
O.xc=function(){
    var a=new sf;
    this.n[zb](function(b){
        var c=b.Va().L();
        c.G(b.la());
        a.Qb(c)
        });
    return a
    };
    
O.map=function(a){
    var b=Of.r.map[L](this,a);
    return b=b||this.n[zb](function(b){
        return b.map(a)
        })
    };
    
O.Ue=function(a){
    this.n[zb](a)
    };
    
O.z=function(){
    return h
    };
    
O.ic=function(a,b){
    this.q(16);
    a[Ma]()!=j&&a[Ma]()[kc](a);
    a.Kd(this);
    this.n.Pf(a,b)
    };
O.removeChild=function(a){
    this.q(16);
    this.n.We(a);
    a.ub();
    a.Kd(j)
    };
    
O.Kc=function(a){
    this.q(16);
    if(a=this.n.Of(a))a.ub(),a.Kd(j)
        };
        
O.vb=function(a){
    Of.r.vb[L](this,a);
    this.n.Vf(a)
    };
    
O.gf=function(a,b){
    this.n.gf(a,b)
    };
    
O.Xc=function(){
    this.o=new Pf;
    this.vb(this.o)
    };
    
O.ef=function(a,b){
    this.q(16);
    this.n.ef(a,b)
    };
    
var Qf=function(a){
    Nf[L](this,a)
    };
    
S(Qf,Nf);
Qf[H].O=function(a){
    Qf.r.O[L](this,a);
    var b=this.b;
    (b.lb||b.M&16)&&b.n.l.O(a)
    };
    
Qf[H].Kb=function(a,b){
    return this.b.n.l.Kb(a,this.b.la()[qc](b))
    };
Qf[H].s=function(){
    Qf.r.s[L](this);
    this.b.n.l.s()
    };
    
Qf[H].Na=function(){
    this.b.n.l.Na()
    };
    
var Sf=function(a,b){
    Of[L](this,b.a);
    this.h=a;
    this.$b=b;
    this.Ic=new uf;
    this.l=new Rf(this);
    this.Fe(this.n,1);
    this.Fe(this.Ic,8);
    this.Je()
    };
    
S(Sf,Of);
O=Sf[H];
O.s=function(){
    Sf.r.s[L](this);
    this.Ic.s()
    };
    
O.ka=function(a){
    a!=this.Ra&&(this.Fe(this.n,a,this.Ra),this.a.Dc=h);
    Sf.r.ka[L](this,a)
    };
    
O.Ig=function(){
    return this.$b
    };
    
O.trackAsMenu=function(){
    return this.h[wc]
    };
O.Fe=function(a,b,c){
    this.q(16);
    var d=this.h[fc];
    if(d){
        if(P(c))for(var e=0;e<d[G];e++){
            var g=d[e],i=g[Ab]&c,l=g[Ab]&b;
            i&&!l&&a.Of(g[z])
            }
            for(e=0;e<d[G];e++)if(g=d[e],i=g[Ab]&c,(l=g[Ab]&b)&&!i)if(i=this.a.Ce(g.id,this.$b))i.z()&&8!=b&&i.qb(this.a.Qf()),i.Kd(this),i.Fa(),i[pc](),a.Pf(i,g[z]),g[Lc]&&i[mb](g[Lc]),g[zc]&&i.Cd(g[zc]),g[wb]&&i.Bd(g[wb]),g.Sf&&i.mb(g.Sf)
            }
        };

var Rf=function(a){
    Nf[L](this,a)
    };
    
S(Rf,Qf);
Rf[H].Qc=function(){
    var a=this.b.n.l.Pe(),b=this.b.Ic.l,c=b.Pe();
    b.O(0);
    this.Qe=c.cloneNode(h);
    Tf(this.Qe);
    b=n[J]("http://www.w3.org/2000/svg","g");
    b[r](this.Qe);
    b[r](a);
    return b
    };
    
Rf[H].Td=function(){
    return this.Qe
    };
    
Rf[H].Na=function(){
    Rf.r.Na[L](this);
    this.b.Ic.l.Na()
    };
    
Rf[H].s=function(){
    Rf.r.s[L](this);
    this.b.Ic.l.s()
    };
    
var xf=function(a,b){
    yf[L](this,b.a);
    this.h=a;
    this.$b=b;
    this.Wa=this.h.html;
    this.l=new Uf(this);
    this.h[Zb]&&b.a.j().jh(this.h[Zb],this,b,this.h[Ra]);
    if(!P(this.bc)){
        var c=this.h[Ra];
        this.Rc(P(c)?c:"")
        }
    };

S(xf,yf);
O=xf[H];
O.xc=function(){
    return new sf(this.h[C])
    };
    
O.Rc=function(a){
    a=this.a.j().Qa(a);
    this.bc!=a&&(this.q(32),this.bc=a)
    };
    
O.ri=function(a){
    this.Wa!=a&&(this.q(64),this.Wa=a)
    };
    
O.Xc=function(){
    this.o=new Vf;
    this.vb(this.o);
    this.a.j().xd(this.o);
    this.o.addListener(this.o)
    };
O.vb=function(a){
    xf.r.vb[L](this,a);
    m[hb](a,Wf)
    };
    
O.s=function(){
    xf.r.s[L](this);
    this.h[Zb]&&this.$b.j().xh(this.h[Zb],this,this.$b)
    };
    
O.z=function(){
    return 6<=this.$b.a.Z?h:k
    };
    
var Uf=function(a){
    zf[L](this,a)
    };
    
S(Uf,zf);
Uf[H].O=function(a){
    this.b.M&64&&this.Fc();
    Uf.r.O[L](this,a);
    if(this.b.M&32&&(ae(this.qe),P(this.b.bc))){
        var b=this.b.bc;
        if(this.b.Wa){
            this.kh(this.qe,b,this.b.h.multiline);
            for(a=this.tf;a<this.R[G];++a)this.R[a][L](this)
                }else for(var a=this.qe,b=b[bc](/\r\n|\r|\n/g),c=0;c<b[G];c++)if(""==b[c]){
            var d=n[tb]("br");
            a[r](d)
            }else{
            var d=n[cb](b[c]),e=n[tb]("p");
            e[K].margin=0;
            e[r](d);
            a[r](e)
            }
        }
        };
Uf[H].Qc=function(){
    var a=this.b.h,b=a[C],c=n[J]("http://www.w3.org/2000/svg","g"),d=this.b.Wa;
    this.R=[];
    var e=n[J]("http://www.w3.org/2000/svg","foreignObject"),g=n[tb]("body");
    e[r](g);
    var i=n[tb]("div");
    this.qe=i;
    var l=this.b.a.wa[a[Ia]],q=1.15;
    l&&(i[K].fontFamily="'"+l[B]+"'",q=l[hc]);
    Aa(this,q);
    if(!d){
        var l=i[K],t=a[Gc],D=a[$a]|0;
        za(l,t+"px");
        Aa(l,q*t+D+"px");
        a[Qb]&&(i[K].fontWeight="bold");
        a[db]&&(i[K].fontStyle="italic")
        }
        i[K].textAlign=Xf(a.align);
    a.wrap?d||(i[K].whiteSpace="pre-wrap"):i[K].whiteSpace=
    "nowrap";
    i[K].wordWrap="break-word";
    a.selectable&&ya(i[K],"all");
    this.xf(i[K],a[ib]);
    this.Tg(e,a[ib]);
    i[K].textIndent=a[Ja]+"px";
    0>a[Ja]+a[Ic]?(q=-(a[Ja]+a[Ic]),l=-a[Ja],d=b.c+30-q,e[y]("width",b.i-b.c-60+q),i[K].marginLeft=l+"px"):(d=b.c+30,e[y]("width",b.i-b.c-60),i[K].marginLeft=a[Ic]+"px");
    i[K].marginRight=a.rightMargin+"px";
    this.we=new Ve(1,0,0,1,d,0);
    e[y]("x",0);
    q=n[J]("http://www.w3.org/2000/svg","rect");
    q[y]("x",b.c-d);
    q[y]("y",b.e);
    q[y]("width",b.i-b.c);
    q[y]("height",b.k-b.e);
    a.border?(q[y]("stroke-width",
        "10"),this.Ad(q,"fill",16777215),this.Ad(q,"stroke",0)):Tf(q);
    c[r](q);
    a=0.5*(a[$a]|0);
    e[y]("y",b.e-a+40);
    e[y]("height",b.k-b.e+a-80);
    g[r](i);
    c[r](e);
    this.tf=this.R[G];
    return c
    };
    
Uf[H].xf=function(a,b){
    this.R[s](function(){
        la(a,this.Ye(b)[Pb]())
        })
    };
Uf[H].kh=function(a,b,c){
    var d=this.b,e=this[hc],g=d.h[Gc],i=d.h[$a]|0,l=k,q=a,t=[];
    this.R[Hc](this.tf);
    var D=function(a,b){
        var c=n[tb](a);
        q[r](c);
        q=c;
        t[s](l);
        t[s](g);
        t[s](e);
        t[s](b)
        },F=this,a=b[u](/&nbsp;/g," ");
    Yf(a,{
        ih:function(a,b){
            switch(a){
                case "p":
                    D("p",a);
                    q[K].margin=0;
                    var t=b[eb]("align");
                    t&&(q[K].textAlign=t[Mc]);
                    c||(q[K].display="inline");
                    break;
                case "b":case "i":case "u":
                    D(a,a);
                    break;
                case "a":
                    D(a,a);
                    (t=b[eb]("href"))&&q[y]("href",t[Mc]);
                    (t=b[eb]("target"))&&q[y]("target",t[Mc]);
                    ya(q[K],
                    "all");
                la(q[K],"inherit");
                    q[K].textDecoration="inherit";
                    break;
                case "br":case "sbr":
                    t=n[tb]("br");
                    q[r](t);
                    break;
                case "font":
                    D("span",a);
                    (t=b[eb]("color"))&&F.xf(q[K],Zf(t[Mc]));
                    if(t=b[eb]("face")){
                    q[K].fontFamily=t[Mc];
                        a:{
                        var Fc=d.a.wa,Za;
                        for(Za in Fc)if(Fc[Za]instanceof $f&&Fc[Za][B]==t[Mc]){
                            e=Fc[Za][hc];
                            break a
                        }
                        e=1.15
                        }
                    }(Za=b[eb]("size"))&&(g=20*Za[Mc]);
                if(t||Za)t=q[K],Za=g,Fc=e,za(t,Za+"px"),Aa(t,Fc*Za+i+"px"),l=h
                    }
                },
    hh:function(a){
        t[t[G]-1]==a&&(t.pop(),e=t.pop(),g=t.pop(),l=t.pop(),q=q[Dc])
        },
    gh:function(a){
        a=
        n[cb](a);
        if(l)q[r](a);
        else{
            var b=n[tb]("span"),c=b[K],d=g,t=e;
            za(c,d+"px");
            Aa(c,t*d+i+"px");
            b[r](a);
            q[r](b)
            }
        }
})
};
var Xf=function(a){
    switch(a){
        case 0:
            return"left";
        case 2:
            return"center";
        case 1:
            return"right";
        case 3:
            return"justify";
        default:
            return"left"
            }
        },Yf=function(a,b){
    var c=n[tb]("div");
    c.innerHTML=a;
    for(var d=0;d<c[Fb][G];d++)ag(c[Fb][d],b)
        },ag=function(a,b){
    switch(a.nodeType){
        case Node.ELEMENT_NODE:
            var c=a.nodeName[Oc]();
            b.ih(c,a.attributes);
            for(var d=0;d<a[Fb][G];d++)ag(a[Fb][d],b);
            b.hh(c);
            break;
        case Node.TEXT_NODE:
            b.gh(a.textContent)
            }
        };
Uf[H].Na=function(){
    var a=this.D;
    if(a){
        var b=a[Dc];
        if(b){
            var c=a[E];
            b[kc](a);
            b.insertBefore(a,c)
            }
        }
};

var eg=function(a,b,c){
    a[y]("tableValues",bg(function(a){
        return cg(dg(a)*b+c)
        }))
    },fg=function(a,b,c){
    a[y]("slope",b);
    a[y]("intercept",c)
    },gg=function(a,b,c,d,e,g,i){
    c==e&&d==g||(1==c&&0==d?b[Dc]&&a[kc](b):(i(b,c,d/255),b[Dc]||a[r](b)))
    },hg=function(a){
    var b=n[J]("http://www.w3.org/2000/svg","filter");
    b.id=Ie.Ia().Ma();
    b[y]("x","0%");
    b[y]("y","0%");
    b[y]("width","100%");
    b[y]("height","100%");
    var c=n[J]("http://www.w3.org/2000/svg","feComponentTransfer");
    b[r](c);
    var d=n[J]("http://www.w3.org/2000/svg",
        "feFuncR");
    d[y]("type","discrete");
    var e=n[J]("http://www.w3.org/2000/svg","feFuncG");
    e[y]("type","discrete");
    var g=n[J]("http://www.w3.org/2000/svg","feFuncB");
    g[y]("type","discrete");
    var i=n[J]("http://www.w3.org/2000/svg","feFuncA");
    i[y]("type","linear");
    var l=new Ye(1,0,1,0,1,0,1,0);
    return function(){
        var q=this.b.Xa;
        q.Rf()?(b[Dc]&&(be(b),a[Bc]("filter")),a[y]("opacity",q.Y[Va](3))):(a[Bc]("opacity"),b[Dc]||(a[r](b),a[y]("filter","url(#"+b.id+")")),gg(c,d,q.ha,q.oa,l.ha,l.oa,eg),gg(c,e,q.fa,q.na,
            l.fa,l.na,eg),gg(c,g,q.ea,q.ma,l.ea,l.ma,eg),gg(c,i,q.Y,q.ia,l.Y,l.ia,fg));
        l=q
        }
    };

var ig=function(a,b,c,d){
    this.l=a;
    this.Kh=b;
    ra(this,c);
    this.ta=d;
    this.Sa=0;
    1<d[G]&&(this.Sa|=256)
    };
    
ig[H].Ai=function(){
    return this.bd(1==this.ta[G]?this.ta[0]:this.qc(this.l.b.Ib/65535))
    };
    
Fa(ig[H],function(){
    this.Kh[y](this[B],this.Ai())
    });
ig[H].bd=function(a){
    return a
    };
    
ig[H].qc=function(){
    return this.ta[0]
    };
    
var jg=function(a,b,c,d){
    ig[L](this,a,b,c,d)
    };
    
S(jg,ig);
jg[H].qc=function(a){
    return this.ta[0]+(this.ta[1]-this.ta[0])*a
    };
    
var kg=function(a,b,c,d){
    ig[L](this,a,b,c,d);
    this.Sa|=1024
    };
    
S(kg,jg);
kg[H].bd=function(a){
    var b=this.l.b.Ka(),b=14/((b.Wf()+b.Xf())/2);
    return a<b?b:a
    };
    
var lg=function(a,b,c,d){
    ig[L](this,a,b,c,d)
    };
    
S(lg,ig);
lg[H].qc=function(a){
    var b=this.ta[0],c=this.ta[1];
    return(new Ve(b.A+(c.A-b.A)*a,b.B+(c.B-b.B)*a,b.t+(c.t-b.t)*a,b.u+(c.u-b.u)*a,b.H+(c.H-b.H)*a,b.I+(c.I-b.I)*a))[Pb]()
    };
    
lg[H].bd=function(a){
    return a[Pb]()
    };
    
var mg=function(a,b,c,d){
    ig[L](this,a,b,c,d);
    this.Sa|=2048
    };
    
S(mg,ig);
mg[H].qc=function(a){
    var b=this.ta[0],c=this.ta[1];
    return new $e(b.oc+(c.oc-b.oc)*a,b.nc+(c.nc-b.nc)*a,b.mc+(c.mc-b.mc)*a,1)
    };
    
mg[H].bd=function(a){
    return this.l.b.Xa[N](a)[Pb]()
    };
    
var ng=function(a,b,c,d){
    ig[L](this,a,b,c,d);
    this.Sa|=2048
    };
    
S(ng,ig);
ng[H].qc=function(a){
    return this.ta[0]+(this.ta[1]-this.ta[0])*a
    };
    
ng[H].bd=function(a){
    return this.l.b.Xa.Zf(a)[Va](3)
    };
    
var og=function(a,b,c,d){
    ig[L](this,a,b,c,d);
    2==d[G]&&(this.wi=d[0][bc](" "),this.xi=d[1][bc](" "))
    };
    
S(og,ig);
og[H].qc=function(a){
    for(var b="",c=this.wi,d=this.xi,e=0;e<c[G];e++)var g=ha(c[e],10),b=ca(g)?b+(c[e]+" "):b+(g+(ha(d[e],10)-g)*a+" ");
    return b
    };
    
var qg=function(a,b){
    yf[L](this,b.a);
    this.definition=a;
    this.l=new pg(this)
    };
    
S(qg,yf);
qg[H].xc=function(){
    return this[nb].xc(this.Ib)
    };
    
qg[H].Nd=function(a){
    a!=this.Ib&&(this.q(256),this.Zc());
    qg.r.Nd[L](this,a)
    };
    
var pg=function(a){
    zf[L](this,a);
    this.Mc=[];
    this.Hd=[];
    this.Ae=[];
    this.Wc=[]
    };
    
S(pg,zf);
O=pg[H];
O.Qc=function(a){
    this.R=[];
    var b=this.b,c=b[nb],d=c[sb];
    if(d)for(var e=0;e<d[G];e++)if(d[e]!=f){
        var g=pf(d[e],c[C],this,b.a);
        g!=j&&(this.Mc[e]=g,b.a.Zb[r](g))
        }
        if(d=c[pb])for(e=0;e<d[G];e++)d[e]!=f&&d[e][Nb]!=f&&(g=pf(d[e][Nb],c[C],this,b.a),g!=j&&(this.Hd[e]=g,b.a.Zb[r](g)));
    return this.oh(a)
    };
O.oh=function(){
    for(var a=this.b,b=a[nb],c=b[vc],d=[],e=0;e<c[G];e++){
        var g=c[e],i=n[J]("http://www.w3.org/2000/svg","path");
        this[y](i,"d",g[v]);
        d[s](i);
        if(g[oc]!=j&&b[pb]!=j){
            var l=b[pb][g[oc]],q=i,t=l;
            if(t!=j){
                if(t[Nb]!=j)q[y]("stroke","url(#"+(l[Nb]?this.Hd[g[oc]]:j).id+")");else l=f,l=t[ib]!=j?t[ib]:[0],this.He(q,"stroke",l),this.Ge(q,"stroke-opacity",l);
                this[y](q,"stroke-width",t[Pa],kg);
                l="round";
                if(t.cap!=j)switch(t.cap){
                    case 1:
                        l="butt";
                        break;
                    case 2:
                        l="square"
                        }
                        q[y]("stroke-linecap",l);
                l="round";
                if(t.joint!=j)switch(t.joint){
                    case 1:
                        l="bevel";
                        break;
                    case 2:
                        l="miter"
                        }
                        q[y]("stroke-linejoin",l);
                t.miter!=j&&q[y]("stroke-miterlimit",t.miter)
                }
            }
        if(g[Nb]!=j)if(q=b[sb][g[Nb]],q[Qa]==j)switch(g=this.Mc[g[Nb]],q[A]){
        case 1:
            this.He(i,"fill",q[ib]);
            this.Ge(i,"fill-opacity",q[ib]);
            break;
        case 2:case 3:case 4:
            i[y]("fill","url(#"+g.id+")")
            }else{
        t=n[J]("http://www.w3.org/2000/svg","clipPath");
        t.id=Ie.Ia().Ma();
        t[r](i);
        a.a.Zb[r](t);
        this.Ae[s](t);
        i=n[J]("http://www.w3.org/2000/svg","g");
        i[y]("clip-path","url(#"+
            t.id+")");
        d.pop();
        d[s](i);
        t=n[J]("http://www.w3.org/2000/svg","use");
        if(5==q[A]||7==q[A])t[gb]("http://www.w3.org/1999/xlink","href","#"+this.Mc[g[Nb]].id);else g=a.a.wa[q[Qa]].Ya(),t[gb]("http://www.w3.org/1999/xlink","href","#"+g.id);
        q[Lc]&&t[y]("transform",of(q[Lc])[Pb]());
        i[r](t);
        this.R[s](hg(i))
        }else i[y]("fill","none")
        }
        if(1==d[G])a=d[0];
    else{
    a=n[J]("http://www.w3.org/2000/svg","g");
    for(e=0;e<d[G];e++)a[r](d[e])
        }
        return a
};
O.Kb=function(a,b){
    var c=this.b[nb];
    !this.be&&0==this.b.Ib&&(this.be=n[J]("http://www.w3.org/2000/svg","path"),this.be[y]("d",c.Ah()));
    var d=this.b.la()[qc](b);
    if(0!=this.b.Ib)for(var e=0;e<c[vc][G];e++){
        if(c[vc][e][Nb]!=j){
            var g=n[J]("http://www.w3.org/2000/svg","path");
            (new og(this,g,"d",c[vc][e][v]))[N]();
            g[y]("transform",d[Pb]());
            a[r](g)
            }
        }else this.be[y]("transform",d[Pb]()),a[r](this.be)
    };
    
O.rf=function(a){
    a[N]();
    a.Sa&&this.Wc[s](a)
    };
O.setAttribute=function(a,b,c,d){
    d||(d=c[0],d=d instanceof Ve?lg:"number"==typeof d?jg:og);
    this.rf(new d(this,a,b,c))
    };
    
O.He=function(a,b,c){
    c=c.map(function(a){
        return Af(a)
        });
    this.rf(new mg(this,a,b,c))
    };
    
O.Ge=function(a,b,c){
    c=c.map(function(a){
        return Bf(a)
        });
    this.rf(new ng(this,a,b,c))
    };
    
O.s=function(){
    pg.r.s[L](this);
    for(var a=0;a<this.Mc[G];a++)be(this.Mc[a]);
    for(a=0;a<this.Hd[G];a++)be(this.Hd[a]);
    for(a=0;a<this.Ae[G];a++)be(this.Ae[a]);
    this.Wc=[]
    };
O.O=function(a){
    var b=this.b.M;
    pg.r.O[L](this,a);
    for(a=0;a<this.Wc[G];a++)b&this.Wc[a].Sa&&this.Wc[a][N]()
        };
        
var tg=function(a){
    qg[L](this,new rg(-1,[],j,[],[]),a);
    this.clear();
    this.cd=this.rc=j;
    this.l=new sg(this);
    this.Ga()
    };
    
S(tg,qg);
tg[H].duplicate=function(a){
    a=new tg(a);
    a.definition=sd(this[nb]);
    return a
    };
    
tg[H].clear=function(){
    this[nb].fillstyles=[];
    this[nb].linestyles=[];
    this[nb].paths=[];
    this.Sb=this.Tb=this.ed=this.fd=0;
    this.q(512);
    this.Zc()
    };
    
tg[H].ne=function(a){
    var b=this.rc,c=this.cd;
    c&&(c[v][0]+=" "+a);
    b&&b!=c&&(b[v][0]+=" "+a);
    if(b||c)this.q(512),this.Zc()
        };
tg[H].moveTo=function(a,b){
    P(a)&&P(b)&&(a*=20,b*=20,this.ne("M "+a+" "+b),this.Sb=a,this.Tb=b,this.ed=a,this.fd=b)
    };
    
tg[H].lineTo=function(a,b){
    P(a)&&P(b)&&(a*=20,b*=20,a==this.Sb&&b==this.Tb&&!this.cd?this.ne("Z"):this.ne("L "+a+" "+b),this.ed=a,this.fd=b)
    };
    
tg[H].curveTo=function(a,b,c,d){
    P(c)&&P(d)&&(P(a)&&P(b))&&(c*=20,d*=20,this.ne("Q "+20*a+" "+20*b+" "+c+" "+d),this.ed=c,this.fd=d)
    };
tg[H].ld=function(a,b,c,d){
    var e=this[nb][vc],g=e[e[G]-1],a=new ug(["M "+a+" "+b],d,c);
    !g||0<=g[v][0].search(/[LQ]/)?e[s](a):e[e[G]-1]=a;
    return a
    };
    
tg[H].Ki=function(a){
    var b=this.rc,c=this.cd;
    if(c)if(0<=c[v][0].search(/[LQ]/))b==c&&(b=this.ld(0,0,c[oc],f),ka(b,[c[v][0]]),delete c[oc]);
        else{
        b=c;
        b.line=a;
        this.rc=b;
        return
    }
    this.rc=b=P(a)?this.ld(this.ed,this.fd,a,f):j
    };
tg[H].sf=function(a){
    var b=this.cd;
    b&&(b[v][0]+=" Z");
    var c=this.rc;
    !b||!c||c==b?(b=P(a)?this.ld(this.Sb,this.Tb,f,a):j,c&&(b?(b.line=c[oc],c=b):c=this.ld(this.Sb,this.Tb,c[oc],f))):(c[v][0]+="L "+this.Sb+" "+this.Tb,P(a)?c=b=this.ld(this.Sb,this.Tb,c[oc],a):b=j);
    this.cd=b;
    this.rc=c;
    this.ed=this.Sb;
    this.fd=this.Tb;
    this.q(512)
    };
tg[H].lineStyle=function(a,b,c,d,e,g,i,l){
    d=f;
    if(P(a)){
        d=this[nb][pb];
        e={};
        
        ja(e,[20*a]);
        la(e,[vg(b,c)]);
        switch(g){
            case "none":
                e.cap=1;
                break;
            case "square":
                e.cap=2
                }
                switch(i){
            case "bevel":
                e.joint=1;
                break;
            case "miter":
                e.joint=2
                }
                P(l)&&(e.miter=[l]);
        d[s](e);
        d=d[G]-1
        }
        this.Ki(d)
    };
    
tg[H].beginFill=function(a,b){
    if(P(a)){
        var c=this[nb][sb],d={
            type:1
        };
        
        la(d,[vg(a,b)]);
        c[s](d);
        this.sf(c[G]-1)
        }else this.sf()
        };
        
tg[H].endFill=function(){
    this.sf()
    };
    
var sg=function(a){
    pg[L](this,a)
    };
    
S(sg,pg);
sg[H].O=function(a){
    this.b.M&512&&this.Fc();
    sg.r.O[L](this,a)
    };
    
var xg=function(a,b){
    yf[L](this,b.a);
    this.h=a;
    this.l=new wg(this)
    };
    
S(xg,yf);
xg[H].xc=function(){
    return new sf(this.h[C])
    };
    
var wg=function(a){
    zf[L](this,a);
    this.we=this.b.h[Ua];
    this.b.q(1)
    };
    
S(wg,zf);
O=wg[H];
O.Qc=function(){
    return yg?this.yi():this.zi()
    };
    
O.zi=function(){
    var a=this.Pg(),b;
    if(1==a[G])b=a[0];
    else{
        b=n[J]("http://www.w3.org/2000/svg","g");
        for(var c=0;c<a[G];c++)b[r](a[c])
            }
            return b
    };
O.Pg=function(){
    for(var a=this.b.h,b=[],c=0;c<a[fc][G];c++){
        var d=a[fc][c],e=n[J]("http://www.w3.org/2000/svg","text");
        e[r](n[cb](d[Ra]));
        var g=this.b.a.wa[d[Ia]];
        g&&e[y]("font-family","'"+g[B]+"'");
        e[y]("font-size",d[Gc]);
        d[Qb]&&e[y]("font-weight","bold");
        d[db]&&e[y]("font-style","italic");
        e[y]("x",zg(d.x));
        e[y]("y",d.y);
        e[y]("fill-rule","nonzero");
        e[y]("style","white-space:pre");
        e[y]("unicode-bidi","bidi-override");
        this.Ad(e,"fill",d[ib]);
        b[s](e)
        }
        return b
    };
O.yi=function(){
    for(var a=n[J]("http://www.w3.org/2000/svg","g"),b=this.b.h,c=0;c<b[fc][G];c++){
        var d=b[fc][c],e=n[J]("http://www.w3.org/2000/svg","g");
        e[y]("fill-rule","nonzero");
        this.Ad(e,"fill",d[ib]);
        a[r](e);
        var g=d[Ra],i=d[Ia],l=d.y,q=d[Gc],d=zg(d.x)[bc](" "),t=b[C],D=n[J]("http://www.w3.org/2000/svg","rect");
        D[y]("x",t.c);
        D[y]("width",t.i-t.c);
        D[y]("y",t.e);
        D[y]("height",t.k-t.e);
        Tf(D);
        e[r](D);
        for(t=0;t<g[G];++t)D=n[J]("http://www.w3.org/2000/svg","use"),D[gb]("http://www.w3.org/1999/xlink",
            "href","#"+("font_"+i+"_"+g[bb](t)[sc](0))),D[y]("transform","translate("+d[t]+" "+l+") scale("+q+")"),e[r](D)
            }
            return a
    };
    
O.Na=function(){
    var a=this.D;
    if(a){
        var b=a[Dc];
        if(b){
            var c=a[E];
            b[kc](a);
            b.insertBefore(a,c)
            }
        }
};

O.Kb=function(a,b){
    for(var c=this.Pg(),d=b[Pb]()+" "+this.Jf(),e=0;e<c[G];e++)c[e][y]("transform",d),a[r](c[e])
        };
        
var Bg=function(a){
    var b=function(b){
        this.o=a.j().fe(b);
        this.og=0
        };
        
    m[hb](b[H],Ag);
    return b
    },Ag={
    getRGB:{
        value:function(){
            return this.og
            }
        },
setRGB:{
    value:function(a){
        this.o&&(this.og=a,this.o.__swiffy_d.mb(new Ye(0,(a&16711680)>>16,0,(a&65280)>>8,0,a&255,1,0)),this.o.__swiffy_d.Ga())
        }
    },
setTransform:{
    value:function(a){
        if(this.o&&a){
            var b=this.o.__swiffy_d,c=b.a.j().d(a,"ra"),d=b.a.j().d(a,"rb"),e=b.a.j().d(a,"ga"),g=b.a.j().d(a,"gb"),i=b.a.j().d(a,"ba"),l=b.a.j().d(a,"bb"),q=b.a.j().d(a,"aa"),t=b.a.j().d(a,
                "ab"),b=this.o.__swiffy_d,D=b.Ea,a=new Ye(P(a[c])?a[c]/100:D.ha,P(a[d])?a[d]:D.oa,P(a[e])?a[e]/100:D.fa,P(a[g])?a[g]:D.na,P(a[i])?a[i]/100:D.ea,P(a[l])?a[l]:D.ma,P(a[q])?a[q]/100:D.Y,P(a[t])?a[t]:D.ia);
            b.mb(a);
            b.Ga()
            }
        }
},
getTransform:{
    value:function(){
        if(!this.o)return j;
        var a=this.o.__swiffy_d.Ea;
        return{
            ra:100*a.ha,
            rb:a.oa,
            ga:100*a.fa,
            gb:a.na,
            ba:100*a.ea,
            bb:a.ma,
            aa:100*a.Y,
            ab:a.ia
            }
        }
}
};

var Dg=function(a,b){
    Of[L](this,b);
    this.h=a;
    this.ag=[];
    this.T=-1;
    this.bg=this.Md=k;
    this.Ug=[];
    this.Pc={};
    
    this.l=new Cg(this);
    this.hc=j;
    this.a.mh(this);
    this.Dd=2097023
    };
    
S(Dg,Of);
O=Dg[H];
O.Fa=function(){
    for(var a=this.h[Ib],b=0;b<a[G];b++)for(var c=0;a[b]&&c<a[b][G];++c)a[b][c].jg(this);
    this.eg()&&this.Xc();
    !this.gc&&this.a.K!==this&&this[M](128);
    this.gc&&this.Jd(128)
    };
    
Da(O,function(){
    this.bg||(this.bg=h,this[Bb](),this.zg(k),this.gc&&this[M](128))
    });
O.Ig=function(){
    return this
    };
O.ub=function(){
    this.Bf||(this.n.ub(),this[M](32));
    Dg.r.ub[L](this)
    };
    
O.play=function(){
    this.Md=h
    };
    
O.Te=function(){
    this.n.Ph();
    this.Md?this.zg(h):this[M](64)
    };
    
O.zg=function(a){
    var b=this.T+1;
    b>=this.h[gc]&&(b=0);
    (0!=this.h[gc]||this.a.K!=this)&&this.Wd(b,a)
    };
    
ta(O,function(){
    this.Md=k
    });
O.od=function(a,b){
    0<=a&&a<this.h[gc]?this.Wd(a):this.T=this.h[gc]+1;
    this.Md=b
    };
    
O.$c=function(a){
    var b=f;
    "string"==typeof a&&this.h.Se[a]!=f?b=this.h.Se[a]:(a=p(a)-1,0<=a&&a==o[ab](a)&&(b=a));
    return b
    };
    
O.wh=function(a){
    return this.h[Ib][a]
    };
O.Wd=function(a,b){
    if(a==this.T)b&&this[M](64);
    else if(a>this.T){
        for(;a>++this.T;){
            this.fg(this.T);
            var c=this.h[Ib][this.T];
            if(c)for(var d=0;d<c[G];d++)c[d].ib(this)
                }
                b&&this[M](64);
        this.fg(this.T);
        if(c=this.h[Ib][this.T])for(d=0;d<c[G];d++)c[d].ib(this),c[d].Rd(this)
            }else{
        this.T=a;
        b&&this[M](64);
        var c=this.h.If[this.T],e=[];
        if(c)for(d=0;d<c[G];d++)e[s](c[d].lc(this)),c[d].Rd(this);
        var g=this;
        this.n.nh(function(a){
            if(0<=a[z]||0<=e[w](a))return h;
            g.q(16);
            a.ub();
            return k
            });
        this.M&16&&this.o&&this.n.Vf(this.o)
        }
        c=
    this.Ug[this.T];
    Uc(c)&&c()
    };
    
O.fg=function(a){
    if(!this.ag[a]){
        for(var b=this.h.Ob[a],c=0;b&&c<b[G];c++)b[c].Ud(this);
        this.ag[a]=h
        }
    };

O.Ng=function(){
    0<this.T&&this.Wd(this.T-1);
    this[Ob]()
    };
    
O.oe=function(){
    this.T+1<this.h[gc]&&this.Wd(this.T+1);
    this[Ob]()
    };
    
O.j=function(){
    return this.a.j()
    };
    
O.jc=function(){
    return this.a.jc()
    };
    
O.ff=function(a,b){
    this.S()[a]=b
    };
    
O.setCapture=function(a,b,c){
    this.a[Wa](a,b,c)
    };
    
O.releaseCapture=function(a){
    this.a[Lb](a)
    };
O.duplicate=function(a,b,c){
    var d=new Dg(this.h,this.a);
    d.gc=h;
    d.qb(b);
    d[mb](this.la());
    this.hc&&(d.hc=this.hc.duplicate(d),d.ic(d.hc,-16385));
    d.Fa();
    d[pc]();
    a.Kc(c);
    a.ic(d,c);
    d.mb(this.Ea);
    return d
    };
    
O.eg=function(){
    return this.h.id?df[this.a.vf[this.h.id]]:j
    };
    
O.Xc=function(){
    var a=this.eg(),a=a?a:W;
    this.o=m[Tb](a[H]);
    this.vb(this.o);
    a[N](this.o);
    this.a.K==this&&(this.o.$version=this.a.sh())
    };
    
O.Xb=function(a,b){
    var c=this.hc;
    c||(this.hc=c=new tg(this),this.ic(c,-16385));
    c[a][N](c,b)
    };
var Cg=function(a){
    Nf[L](this,a)
    };
    
S(Cg,Qf);
Cg[H].Qc=function(){
    return this.b.n.l.Pe()
    };
    
Cg[H].Td=function(){
    return this.Ya()
    };
    
var Eg=function(){
    this.Og=[];
    this.pe=[]
    };
    
Eg[H].Fh=function(a,b){
    this.Og[a]=b
    };
    
Eg[H].dg=function(a){
    this.pe[a]=new Audio(this.Og[a]);
    this.pe[a][Bb]()
    };
    
Eg[H].li=function(){
    for(var a in this.pe)this.pe[a].pause()
        };
        
var yg=!Fd,Cf="undefined"!=eval("typeof SVGFilterElement"),Jg=function(a,b){
    this.Gd=a;
    this.Dc=k;
    this.Gc=new Ue(0,0);
    this.wa={};
    
    this.code=[];
    this.N=n[J]("http://www.w3.org/1999/xhtml","div");
    this.N[K].position="relative";
    Ha(this.N[K],"100%");
    b.backgroundColor!=f&&(this.N[K].background=Af(b.backgroundColor)[Pb]());
    this.N[K].webkitTapHighlightColor="rgba(0,0,0,0)";
    this.ah=new Eg;
    this.td=b.frameSize.xmax/20;
    this.sd=b.frameSize.ymax/20;
    this.$g=b.v;
    this.Mb=n[J]("http://www.w3.org/2000/svg","svg");
    this.Mb[K].fillRule=
    "evenodd";
    ya(this.Mb[K],"none");
    ja(this.Mb[K],"100%");
    Ha(this.Mb[K],"100%");
    this.N[r](this.Mb);
    this.xe=n[J]("http://www.w3.org/2000/svg","g");
    this.Mb[r](this.xe);
    this.sb="showAll";
    this.Lb=0;
    this.zd=h;
    this.zf=new Fg(b.frameRate,this);
    this.Lc=new X(this);
    var c=new Gg(0,b[gc],this);
    this.wa[0]=c;
    Hg(b,c);
    this.Z=b.version;
    this.tb=[];
    this.K=new Dg(c,this);
    pa(this.K,-16384);
    this.K.Af=k;
    this.K[Bb]();
    this.fb=j;
    this.ze=k;
    this.Id=j;
    this.uf={};
    
    this.vf={};
    
    this.$a=new lf(this);
    this.Lc.xd(this.$a);
    this.fc=new jf;
    this.Lc.xd(this.fc);
    this.Fd=new Ig(this);
    this.Lc.xd(this.Fd);
    this.dh=1;
    this.Aa=j;
    this.pa=[];
    "createTouch"in n?(T(this.N,"touchstart",this.ve,k,this),T(this.N,"touchmove",this.ue,k,this),T(this.N,"touchend",this.te,k,this),c=T(n,"touchstart",this.bh,k,this)):(T(this.N,"mousedown",this.Df,h,this),T(this.N,"mouseup",this.Gf,h,this),T(this.N,"mousemove",this.Ef,h,this),T(this.N,"mouseover",this.Yg,h,this),T(this.N,"mousedown",this.wd,k,this),T(this.N,"mouseup",this.vd,k,this),T(this.N,"mouseout",this.se,
        k,this),c=T(n,"mousedown",this.Xg,k,this),this.pa[s](c),c=T(n,"mouseup",this.Zg,k,this));
    this.pa[s](c);
    T(n,"keyup",this.Wg,k,this);
    T(new De(n),"key",this.Vg,k,this);
    this.K.Fa();
    this.Zb=n[J]("http://www.w3.org/2000/svg","defs");
    for(var d in this.wa)(c=this.wa[d].Fa())&&this.Zb[r](c);this.Mb[r](this.Zb);
    d=ba.location.search+ba.location.hash;
    c=d[w]("?");
    0<=c&&this.Hf(d[Ta](c+1));
    this.wf();
    this.Gd[r](this.N);
    this.Cf=k
    },Kg=["swiffy","Stage"],Lg=Pc;
!(Kg[0]in Lg)&&Lg.execScript&&Lg.execScript("var "+Kg[0]);
for(var Mg;Kg[G]&&(Mg=Kg.shift());)!Kg[G]&&P(Jg)?Lg[Mg]=Jg:Lg=Lg[Mg]?Lg[Mg]:Lg[Mg]={};
    
Jg[H].Hi=function(){
    this.zf[Ob]();
    for(var a=0;a<this.pa[G];a++)ue(this.pa[a]);
    this.K.s();
    this.K.l.s();
    we(this.N);
    be(this.N)
    };
    
Jg[H].destroy=Jg[H].Hi;
O=Jg[H];
O.nd=function(a){
    for(var b=this.tb[G]-1;0<=b;b--)this.tb[b].nb||this.tb[b][M](a)
        };
        
O.Wh=function(a){
    this.K.map(function(b){
        if(b instanceof Hf)return b[M](a)
            })
    };
    
O.Df=function(){
    this.nd(8);
    this.$();
    this.$a.Uh()
    };
    
O.Ef=function(a){
    this.de(a);
    this.nd(16);
    this.$();
    this.$a.Sh()
    };
O.Yg=function(a){
    this.de(a)
    };
    
O.Gf=function(){
    this.nd(4);
    this.$();
    this.$a.Vh()
    };
    
O.ve=function(a){
    this.Aa!=j&&this.Aa.Yd(a);
    var b=a.Ta.touches;
    1==b[G]&&this.de(b[0]);
    this.Df(a)
    };
    
O.bh=function(a){
    this.Aa!=j&&this.Aa.Yd(a)
    };
    
O.ue=function(a){
    var b=a.Ta.touches;
    1==b[G]&&this.de(b[0]);
    this.Ef(a)
    };
    
O.te=function(a){
    a[dc]();
    this.Gf(a)
    };
    
O.wd=function(a){
    a[dc]();
    this[Wa](this)
    };
    
O.vd=function(a){
    a[dc]();
    this[Lb](this)
    };
    
O.Xg=function(){
    this[Wa](this,h)
    };
    
O.Zg=function(){
    this[Lb](this)
    };
O.se=function(a){
    this[Kc]()&&a[mc]==this.N&&this[Wa](this)
    };
    
O.de=function(a){
    if(this.rg){
        var b=0,c=0;
        if(a.pageX||a.pageY)b=a.pageX,c=a.pageY;
        else if(a[Kb]||a[Mb])b=a[Kb]+n[jc].scrollLeft+n.documentElement.scrollLeft,c=a[Mb]+n[jc].scrollTop+n.documentElement.scrollTop;
        this.Gc.x=b;
        this.Gc.y=c;
        this.Gc.G(this.rg)
        }
    };

O.Wg=function(a){
    this.fc.bi(a);
    this.nd(1);
    this.$();
    this.fc.broadcastMessage("onKeyUp")
    };
O.Vg=function(a){
    this.fc.Th(a);
    this.nd(2);
    this.$();
    this.fc.broadcastMessage("onKeyDown");
    this.Wh(1048576);
    this.$()
    };
    
O.getKey=function(){
    return this.fc
    };
    
O.Jh=function(){
    return this.Aa!=j
    };
    
O.uh=function(a){
    this.Aa!=j&&this.Aa!=a&&this.Aa.Yd();
    this.Aa=a;
    this.$a[Ec]()
    };
    
O.Re=function(a){
    this.Aa==a&&(this.Aa=j);
    this.$a[Ec]()
    };
    
O.isCaptured=function(){
    return this.fb!=j
    };
    
O.Pd=function(){
    return this.fb!=j&&this.ze
    };
    
O.Uc=function(a){
    return this.fb==a
    };
    
O.Ih=function(){
    return this.fb!=j&&this.fb==this.Aa
    };
O.setCapture=function(a,b,c){
    this[Lb](a);
    this.fb=a;
    n.onselectstart=function(){
        return k
        };
        
    b&&(this.ze=h);
    c&&(this.Id=c,this.$a[Ec]())
    };
    
O.releaseCapture=function(a){
    this.fb&&(this.$a[Ec](),n.onselectstart=j,this.fb!=a&&this.Id&&this.Id(),this.fb=this.Id=j,this.ze=k)
    };
    
Da(O,function(){
    this.zf[pc]()
    });
Da(Jg[H],Jg[H][pc]);
O=Jg[H];
O.Ce=function(a,b){
    var c=this.wa[a];
    return c?c.mi(b):j
    };
    
O.z=function(a){
    return(a=this.wa[a])?a.z:k
    };
    
O.mh=function(a){
    this.tb[s](a)
    };
O.Te=function(){
    this.tb=this.tb.filter(function(a){
        return!a.nb
        });
    for(var a=this.tb[G]-1;0<=a;--a)this.tb[a].Te();
    this.Cf||(this.$(),this.K.Jd(128),this.K[M](128),this.Cf=h);
    this.$();
    this.Dc=h
    };
    
O.j=function(){
    return this.Lc
    };
    
O.$=function(){
    this.Lc.$()
    };
    
O.jc=function(){
    return this.ah
    };
    
O.Hf=function(a){
    for(var a=new Re(a),b=a.Ub(),c=0;c<b[G];c++){
        var d=b[c];
        this.K.ff(d,a.get(d))
        }
    };
    
Jg[H].setFlashVars=Jg[H].Hf;
O=Jg[H];
O.Qf=function(){
    return"instance"+this.dh++
    };
    
O.sh=function(){
    return"Swiffy "+this.$g
    };
O.$h=function(a){
    this.sb!=a&&(this.sb=a,this.zd=h,"noScale"==this.sb&&(a=this.$d!=this.sd,(this.ae!=this.td||a)&&this.Fd.broadcastMessage("onResize")))
    };
    
O.Zh=function(a){
    this.Lb!=a&&(this.Lb=a,this.zd=h)
    };
    
O.Lh=function(){
    return this.Lb&1?0:this.Lb&4?2:1
    };
    
O.Mh=function(){
    return this.Lb&2?0:this.Lb&8?2:1
    };
O.wf=function(){
    var a=this.Gd.offsetWidth,b=this.Gd.offsetHeight,c,d=this.Gd,e=c=0;
    if(d.offsetParent){
        do c+=d.offsetLeft,e+=d.offsetTop;while(d=d.offsetParent)
    }
    c=[c,e];
    d=c[0];
    c=c[1];
    e=k;
    if(this.Le!=d||this.Me!=c)this.Le=d,this.Me=c,e=h;
    if(this.ae!=a||this.$d!=b)this.ae=a,this.$d=b,"noScale"==this.sb&&this.Fd.broadcastMessage("onResize"),e=h;
    return e
    };
O.th=function(){
    var a=this.ae,b=this.$d,c=this.td,d=this.sd,e=a/c,g=b/d;
    switch(this.sb){
        case "noScale":
            e=g=1;
            break;
        case "showAll":
            e<g?g=e:e=g;
            break;
        case "noBorder":
            e>g?g=e:e=g
            }
            var i=0,l=0;
    switch(this.Lh()){
        case 1:
            i=(a-c*e)/2;
            break;
        case 2:
            i=a-c*e
            }
            switch(this.Mh()){
        case 1:
            l=(b-d*g)/2;
            break;
        case 2:
            l=b-d*g
            }
            this.gg=new Ve(e/20,0,0,g/20,this.Le+i,this.Me+l);
    this.rg=this.gg.Ie()
    };
O.O=function(){
    var a=this.wf();
    if(this.zd||a)this.th(),this.xe[y]("transform",this.gg.translate(-this.Le,-this.Me)[Pb]()),this.zd=k;
    this.Dc&&(this.K.$f(),this.K.l.O(0),this.K.M=0,this.K.lb=0,a=this.K.l.Ya(),a[Dc]||this.xe[r](a),this.Dc=k)
    };
    
var Ng,$e=function(a,b,c,d){
    this.oc=a;
    this.nc=b;
    this.mc=c;
    this.Oe=d
    };
    
ua($e[H],function(){
    return"rgb("+this.oc[Va]()+","+this.nc[Va]()+","+this.mc[Va]()+")"
    });
var of=function(a){
    var b=0,c=Og(function(){
        return a[sc](b++)
        });
    return new Ve(c()/65536+1,c()/65536,c()/65536,c()/65536+1,c(),c())
    },zg=function(a){
    for(var b=0,c=Pg(function(){
        return a[sc](b++)
        }),d=[],e=0;b<a[G];)e+=ha(c(),10),d[s](e);
    return d[Jc](" ")
    },Pg=function(a){
    return function(){
        var b=a();
        if(58==b)return 0;
        for(var c="";48<=b&&57>=b;)c+=String.fromCharCode(b),b=a();
        return(97<=b?b-96:-(b-64))+c
        }
    },Og=function(a){
    var b=Pg(a);
    return function(){
        return ha(b(),10)
        }
    },Qg=function(a){
    var b=0,c=a[w](":");
    if(0>c)return a;
    for(var d=c+1,e=Pg(function(){
        return a[sc](d++)
        }),g="",i;b<c;)switch(i=a[bb](b++),0<g[G]&&(g+=" "),g+=i+" ",i){
        case "q":
            g+=e()+" "+e()+" ";
        case "l":case "m":
            g+=e()+" ";
        case "h":case "v":
            g+=e();
            break;
        default:
            return""
            }
            return g
    },Rg=function(a){
    var b=0,c=Og(function(){
        return a[sc](b++)
        });
    return new Ye((c()+256)/256,c(),(c()+256)/256,c(),(c()+256)/256,c(),(c()+256)/256,c())
    },Af=function(a,b){
    var c=a,d=c&255,c=c>>8,e=c&255,c=c>>8,g=c&255,c=(255-(c>>8&255))/255;
    b&&(d=d*b.ha+b.oa,e=e*b.fa+
        b.na,g=g*b.ea+b.ma,c=c*b.Y+b.ia/255);
    return new $e(d,e,g,c)
    },Bf=function(a,b){
    var c;
    c=(255-(a>>24&255))/255;
    b&&(c=c*b.Y+b.ia/255);
    return c
    },Zf=function(a){
    a=a[u](/^ *rgb *\( *([^,]+) *, *([^,]+) *, *([^,]+) *\) *$/,function(a,c,d,e){
        return c+(d<<8)+(e<<16)
        });
    a=a[u](/^ *#([0-9a-fA-F]+) *$/,function(a,c){
        var d=ha(c,16);
        return(d&255)<<16|d&65280|(d&16711680)>>16
        });
    return a|0
    },vg=function(a,b){
    P(b)||(b=100);
    return(a&255)<<16|a&65280|(a&16711680)>>16|255-2.55*b<<24
    },cg=function(a){
    return 0.04045>=a?a/
    12.92:o.pow((a+0.055)/1.055,2.4)
    },dg=function(a){
    return 0.0031308>=a?12.92*a:1.055*o.pow(a,1/2.4)-0.055
    },bg=function(a){
    for(var b="",c=0;256>c;c++)b+=p(a(c/255))[Va](5)+" ";
    return b
    },Sg=function(a,b){
    var c=new Ue(20*b.x,20*b.y);
    c.G(a);
    c.x/=20;
    c.y/=20;
    return c
    },Tg=function(a,b,c,d){
    if(0!=c[w]("_level")&&0!=b[Oc]()[w]("fscommand:"))switch(""==c&&(c="_self"),d){
        case 0:
            ba.open(b,c);
            break;
        case 1:case 2:
            var e=Zd("form");
            e.acceptCharset="utf-8";
            e.method=1==d?"get":"post";
            for(var g in a)"$"!=g[bb](0)&&(d=
            Zd("input",{
                type:"hidden",
                name:g,
                value:a[g]
                }),e[r](d));e.action=b;
        Ba(e,c);
            e[K].visibility="hidden";
            n[jc][r](e);
            e.submit();
            be(e);
            break;
        default:
            ba.open(b,c)
            }
        },Tf=function(a){
    a[y]("opacity",0)
    },Ug=function(a){
    Ng||(Ng=ba.requestAnimationFrame||ba.webkitRequestAnimationFrame||ba.mozRequestAnimationFrame||ba.oRequestAnimationFrame||ba.msRequestAnimationFrame||function(a){
        ba.setTimeout(a,1E3/60)
        });
    Ng[L](ba,a)
    };
    
var Vg=function(a){
    this.l=a;
    this.Gh=Ie.Ia().Ma();
    this.region=new af(0,0,0,0);
    this.R=[];
    this.Vc=[]
    },Wg,Xg,Df=[];
O=Vg[H];
Fa(O,function(){});
O.Kf=function(){
    return 1
    };
    
O.result=function(){
    return this.Gh
    };
    
O.Gg=function(a,b,c,d,e){
    var g=1;
    switch(a){
        case 1:
            g=5;
            break;
        case 2:
            g=3;
            break;
        case 3:
            g=2
            }
            a=20*b/g;
    c=20*c/g;
    g=n[J]("http://www.w3.org/2000/svg","feGaussianBlur");
    P(d)&&g[y]("in",d);
    P(e)&&g[y]("result",e);
    g[y]("stdDeviation",a+" "+c);
    this.xa()[r](g);
    d=new af;
    d[Sa](3*-a,3*-c);
    d[Sa](3*+a,3*+c);
    return d
    };
O.Oc=function(a,b,c,d,e,g,i){
    var l=n[J]("http://www.w3.org/2000/svg","feComponentTransfer");
    P(g)&&l[y]("in",g);
    P(i)&&l[y]("result",i);
    P(e)||(e="linear");
    g=["feFuncR","feFuncG","feFuncB","feFuncA"];
    a=[a,b,c,d];
    for(b=0;4>b;++b){
        var c=j,q;
        for(q in a[b])c==j&&(c=n[J]("http://www.w3.org/2000/svg",g[b]),c[y]("type",e)),c[y](q,a[b][q]);c&&l[r](c)
        }
        this.xa()[r](l);
    return l
    };
O.af=function(a,b,c){
    var d=this.Oc({
        intercept:0
    },{
        intercept:0
    },{
        intercept:0
    },{
        slope:0
    },f,f,c),e=this;
    this.R[s](function(){
        for(var c=e.l.Ye(a),i=0;i<d[Fb][G];++i){
            var l=d[Fb][i];
            switch(l.localName){
                case "feFuncR":
                    l[y]("intercept",cg(c.oc/255));
                    break;
                case "feFuncG":
                    l[y]("intercept",cg(c.nc/255));
                    break;
                case "feFuncB":
                    l[y]("intercept",cg(c.mc/255));
                    break;
                case "feFuncA":
                    l[y]("slope",c.Oe*b)
                    }
                }
        })
};

O.Mf=function(a,b){
    var c=Wg;
    c||(Wg=c={
        tableValues:bg(dg)
        });
    this.Oc(c,c,c,j,"discrete",a,b)
    };
O.Nf=function(a,b){
    var c=Xg;
    c||(Xg=c={
        tableValues:bg(cg)
        });
    this.Oc(c,c,c,j,"discrete",a,b)
    };
    
O.va=function(a,b,c,d,e){
    var g=n[J]("http://www.w3.org/2000/svg","feComposite");
    P(e)&&g[y]("result",e);
    P(b)&&g[y]("in",b);
    P(c)&&g[y]("in2",c);
    g[y]("operator",a);
    if(P(d))for(var i in d)g[y](i,d[i]);this.xa()[r](g)
    };
    
O.Hh=function(a){
    var b=n[J]("http://www.w3.org/2000/svg","feFlood");
    P(a)&&b[y]("result",a);
    this.xa()[r](b)
    };
O.ii=function(a,b,c,d){
    var e=20*o.cos(a)*b,a=20*o.sin(a)*b,b=n[J]("http://www.w3.org/2000/svg","feOffset");
    P(c)&&b[y]("in",c);
    P(d)&&b[y]("result",d);
    b[y]("dx",e);
    b[y]("dy",a);
    this.Vc[s]({
        node:b,
        dx:e,
        dy:a
    });
    this.xa()[r](b);
    return new af(e,a,e,a)
    };
    
O.bf=function(a,b,c,d,e,g,i){
    this.Oc({
        slope:0
    },{
        slope:0
    },{
        slope:0
    },{},"linear",a);
    var l;
    if(0<c||0<d)l=this.Gg(b,c,d);
    0!=g&&this.region.Qb(this.ii(e,g,f,i));
    l&&this.region.add(l)
    };
    
O.Pa=function(){
    return Ie.Ia().Ma()
    };
    
O.xa=function(){
    return this.l.xa()
    };
O.Be=function(){
    for(var a=this.R,b=0;b<a[G];++b)a[b][L](this)
        };
        
O.O=function(){
    if(this.l.b.M&1024){
        var a=this.l.b[Ma]();
        if(a)for(var a=a.Yb().re(0,0),b=0;b<this.Vc[G];++b){
            var c=this.Vc[b].node,d=new Ue(this.Vc[b].dx,this.Vc[b].dy);
            d.G(a);
            c[y]("dx",d.x);
            c[y]("dy",d.y)
            }
        }
        };

var Yg=function(a,b){
    Vg[L](this,a);
    this.kb=b[Ua];
    this.kb[4]/=255;
    this.kb[9]/=255;
    this.kb[14]/=255;
    this.kb[19]/=255
    };
    
S(Yg,Vg);
Df[3]=Yg;
Fa(Yg[H],function(a){
    var b=this.Pa(),c=this.Pa();
    this.Mf(a,b);
    var a=this.xa(),d=n[J]("http://www.w3.org/2000/svg","feColorMatrix");
    d[y]("in",b);
    d[y]("result",c);
    d[y]("type","matrix");
    d[y]("values",this.kb[Jc](" "));
    a[r](d);
    this.Nf(c,this[Wb]())
    });
var Zg=function(a,b){
    Vg[L](this,a);
    this.Vb=b
    };
    
S(Zg,Vg);
Df[2]=Zg;
Fa(Zg[H],function(a){
    var b=this.Vb;
    this.region=this.Gg(b[Nc],b.x,b.y,a,this[Wb]())
    });
Zg[H].Kf=function(){
    return 1<this.Vb.x&&1<this.Vb.y?2:1
    };
    
var $g=function(a,b){
    Vg[L](this,a);
    this.Vb=b
    };
    
S($g,Vg);
Df[1]=$g;
Fa($g[H],function(a){
    this.R=[];
    var b=this.Vb,c=this.xa();
    b[Yb]&&this.Hh("black");
    this.bf(a,b[Nc],b.x,b.y,b[$b],b.distance);
    b[Yb]&&this.va("arithmetic",f,"black",{
        k2:-1,
        k3:1
    });
    var d=this.Pa();
    this.af(b[ib],b.strength,d);
    !b[Yb]&&!b[ob]&&!b.hideObject?this.va("over",a,d):b[Yb]&&!b[ob]&&!b.hideObject?this.va("atop",d,a):!b[Yb]&&b[ob]?this.va("out",d,a):b[Yb]&&this.va("in",d,a);
    c.lastChild[y]("result",this[Wb]())
    });
var ah=function(a,b){
    Vg[L](this,a);
    this.Vb=b
    };
    
S(ah,Vg);
Df[4]=ah;
Fa(ah[H],function(a){
    this.R=[];
    var b=this.Vb,c=this.xa(),d=this.Pa(),e=this.Pa(),g=this.Pa(),i=this.Pa(),l=this.Pa();
    this.bf(a,b[Nc],b.x,b.y,b[$b],-b.distance,e);
    this.bf(a,b[Nc],b.x,b.y,b[$b],b.distance,d);
    this.va("arithmetic",e,d,{
        k2:1,
        k3:-1
    });
    this.af(b.highlight,b.strength,i);
    this.va("arithmetic",d,e,{
        k2:1,
        k3:-1
    });
    this.af(b.shadow,b.strength,g);
    this.va("arithmetic",i,g,{
        k2:1,
        k3:1
    },l);
    b[ob]?b[Yb]?this.va("in",l,a):b.onTop||this.va("out",l,a):b[Yb]?this.va("atop",l,a):b.onTop?this.va("over",l,a):
    this.va("over",a,l);
    c.lastChild[y]("result",this[Wb]())
    });
var Ff=function(a){
    Vg[L](this,a)
    };
    
S(Ff,Vg);
Fa(Ff[H],function(a){
    this.Bi(a)
    });
Ff[H].Bi=function(a){
    var b=this.Pa(),c=this.Pa();
    this.Mf(a,b);
    var d=this.Oc({
        intercept:0
    },{
        intercept:0
    },{
        intercept:0
    },{
        slope:0
    },"linear",b,c);
    this.Nf(c);
    var e=this;
    this.R[s](function(){
        for(var a=e.l.b.ud,b=0;b<d[Fb][G];++b){
            var c=d[Fb][b];
            switch(c.localName){
                case "feFuncR":
                    c[y]("slope",a.ha);
                    c[y]("intercept",a.oa/255);
                    break;
                case "feFuncG":
                    c[y]("slope",a.fa);
                    c[y]("intercept",a.na/255);
                    break;
                case "feFuncB":
                    c[y]("slope",a.ea);
                    c[y]("intercept",a.ma/255);
                    break;
                case "feFuncA":
                    c[y]("slope",a.Y),c[y]("intercept",
                    a.ia/255)
                }
                }
        })
};

var bh=function(){};

bh[H].Bb=function(){};
    
var Y=[];
var ch=function(a){
    this.id=a
    };
    
S(ch,bh);
O=ch[H];
O.z=k;
O.Fa=function(){
    return j
    };
    
O.Bc=function(){
    return j
    };
    
O.mi=function(a){
    return this.Bc(a)
    };
    
O.Bb=function(a){
    a.a.wa[this.id]=this
    };
    
var dh=function(){};

S(dh,bh);
O=dh[H];
O.jg=function(){};
    
O.lc=function(){};
    
O.Ud=function(){};
    
O.ib=function(){};
    
O.Rd=function(){};
    
O.pf=function(){};
    
O.zc=function(){};
    
var fh=function(a,b){
    for(var c=0;c<a[G];++c)if(a[c]instanceof eh&&a[c][z]==b)return c;return-1
    };
    
dh[H].Bb=function(a,b){
    a[Ib][b]||(a[Ib][b]=[]);
    a[Ib][b][s](this)
    };
    
var gh=function(a,b,c,d,e,g,i){
    this.id=a;
    pa(this,b);
    this.transform=c;
    this.states=d;
    this.Sf=e;
    Ga(this,g);
    oa(this,i)
    },hh=function(a,b,c){
    xa(this,a);
    this.key=b;
    this.events=c
    },ih=function(a,b){
    this.events=a;
    this.sound=b
    },jh=function(a,b,c,d,e){
    this.id=a;
    this.trackAsMenu=b;
    this.records=c;
    xa(this,d);
    this.sounds=e
    };
    
S(jh,ch);
Y[10]=function(a,b){
    for(var c=[],d=0;a[fc]&&d<a[fc][G];d++){
        var e=a[fc][d],g=e[Lc]?of(e[Lc]):j,i=e[tc]?Rg(e[tc]):j;
        c[s](new gh(e.id,e[z],g,e[Ab],i,e[zc],e[wb]))
        }
        e=[];
    for(d=0;a[I]&&d<a[I][G];d++)g=a[I][d],e[s](new hh(b.j().Ua(g[I]),g.key,g[Ya]));
    g=[];
    for(d=0;a[ub]&&d<a[ub][G];d++)i=a[ub][d],g[s](new ih(i[Ya],i[yb]));
    return new jh(a.id,a[wc],c,e,g)
    };
jh[H].Bc=function(a){
    for(var a=new Sf(this,a),b=0;b<this[I][G];b++){
        var c=this[I][b];
        a.kg(c[Ya],c.key,c[I])
        }
        for(b=0;b<this[ub][G];b++)c=this[ub][b],a.vi(c[Ya],c[yb]);
    return a
    };
    
jh[H].z=h;
var kh=function(a,b,c,d){
    this.id=a;
    this.font=b;
    Ha(this,c);
    la(this,d)
    };
    
S(kh,ch);
Y[13]=function(a,b){
    var c=new kh(a.id,a[Ia],a[Gc],a[ib]);
    c.text=a[Ra];
    c.align=a.align;
    c.bounds=bf(a[C]);
    c.bold=!!a[Qb];
    c.italic=!!a[db];
    c.html=!!a.html;
    c.wrap=!!a.wrap;
    c.multiline=!!a.multiline;
    c.selectable=!!a.selectable;
    c.indent=a[Ja];
    c.leading=a[$a];
    c.leftMargin=a[Ic];
    c.rightMargin=a.rightMargin;
    c.border=!!a.border;
    c.variable=a[Zb];
    c.z=6<=b.Z;
    return c
    };
    
kh[H].Bc=function(a){
    return new xf(this,a)
    };
    
kh[H].z=h;
var lh=function(a,b,c){
    ka(this,a);
    this.unicode=b;
    this.advance=c
    },$f=function(a,b,c,d,e,g,i,l){
    this.id=a;
    ra(this,b);
    this.glyphs=c;
    this.emSquareSize=d;
    this.ascent=e;
    this.descent=g;
    this.bold=i;
    this.italic=l;
    e&&g&&Aa(this,(e+g)/d)
    };
    
S($f,ch);
Y[5]=function(a){
    for(var b=a[Gb]?a[Gb]:1024,c=[],d=0;a[ec]&&d<a[ec][G];d++)c[s](new lh(Qg(a[ec][d][v]),a[ec][d].unicode,a[ec][d].advance));
    var e=d=0;
    a[La]&&a[Ub]&&(d=a[La],e=a[Ub]);
    return new $f(a.id,a[B],c,b,d,e,a[Qb],a[db])
    };
    
$f[H].Ya=function(){
    return this.yc
    };
$f[H].Fa=function(){
    if(!this[La]||!this[Ub]){
        if(this[B]&&0==this[ec][G]){
            var a=n[J]("http://www.w3.org/1999/xhtml","div");
            a[K].fontFamily=this[B];
            za(a[K],"1024px");
            a.innerHTML="A";
            n[jc][r](a);
            Aa(this,a.clientHeight/1024);
            be(a)
            }else Aa(this,1.15);
        this.ascent=0.9*this[Gb];
        this.descent=this[Gb]*(this[hc]-0.9)
        }
        this[B]||ra(this,Ie.Ia().Ma());
    var b=n[J]("http://www.w3.org/2000/svg","font-face");
    b[y]("font-family","'"+this[B]+"'");
    b[y]("units-per-em",this[Gb]);
    b[y]("ascent",this[La]);
    b[y]("descent",this[Ub]);
    b[y]("font-weight",this[Qb]?"bold":"normal");
    b[y]("font-style",this[db]?"italic":"normal");
    if(this[B]&&!this[ec][G]){
        var a=n[J]("http://www.w3.org/2000/svg","font-face-src"),c=n[J]("http://www.w3.org/2000/svg","font-face-name");
        c[y]("name",this[B]);
        a[r](c);
        b[r](a);
        this.yc=b
        }else{
        if(yg){
            a=n[J]("http://www.w3.org/2000/svg","defs");
            for(b=0;b<this[ec][G];b++){
                var c=this[ec][b],d=n[J]("http://www.w3.org/2000/svg","path");
                d[y]("id","font_"+this.id+"_"+c.unicode[sc](0));
                d[y]("transform","scale("+1/this[Gb]+
                    " "+-1/this[Gb]+")");
                d[y]("d",c[v]);
                a[r](d)
                }
            }else{
        a=n[J]("http://www.w3.org/2000/svg","font");
        a[y]("horiz-adv-x",this[Gb]);
        a[r](b);
        for(b=0;b<this[ec][G];b++)c=this[ec][b],d=n[J]("http://www.w3.org/2000/svg","glyph"),d[y]("unicode",c.unicode),d[y]("d",c[v]),c.advance&&d[y]("horiz-adv-x",c.advance),a[r](d)
            }
            this.yc=a
    }
    return this.yc
};

var mh=function(a,b,c,d,e){
    this.id=a;
    ka(this,b);
    this.mask=c;
    ja(this,d);
    Ha(this,e)
    };
    
S(mh,ch);
Y[8]=function(a){
    return new mh(a.id,a[v],a.mask,a[Pa],a[Gc])
    };
    
mh[H].Ya=function(){
    return this.yc
    };
mh[H].Fa=function(){
    var a=n[J]("http://www.w3.org/2000/svg","image");
    a.id=Ie.Ia().Ma();
    a[y]("width",this[Pa]);
    a[y]("height",this[Gc]);
    if(this.mask){
        var b=this[Pa],c=this[Gc],d=n[tb]("canvas");
        ja(d,this[Pa]);
        Ha(d,this[Gc]);
        var e=new Image,g=new Image,i=k,l=k,q=function(){
            if(i&&l){
                var q=d.getContext("2d");
                q.clearRect(0,0,b,c);
                q.drawImage(e,0,0,b,c);
                q.globalCompositeOperation="xor";
                q.drawImage(g,0,0,b,c);
                a[gb]("http://www.w3.org/1999/xlink","href",d.toDataURL("image/png"))
                }
            };
        
    e.onload=function(){
        i=h;
        q()
        };
        
    g.onload=function(){
        l=h;
        q()
        };
        
    e.src=this[v];
    g.src=this.mask
    }else a[gb]("http://www.w3.org/1999/xlink","href",this[v]);
    return this.yc=a
    };
    
var rg=function(a,b,c,d,e){
    this.id=a;
    this.paths=b;
    this.bounds=c;
    this.fillstyles=d;
    this.linestyles=e
    };
    
S(rg,ch);
Y[1]=function(a){
    return new rg(a.id,a[vc].map(nh),a[C].map(bf),a[sb],a[pb])
    };
    
rg[H].Bc=function(a){
    return new qg(this,a)
    };
    
rg[H].Ah=function(){
    if(!this.Ac){
        this.Ac="";
        for(var a=0;a<this[vc][G];a++)this[vc][a][Nb]!=j&&(0<a&&(this.Ac+="M0 0"),this.Ac+=this[vc][a][v][0])
            }
            return this.Ac
    };
rg[H].xc=function(a){
    if(this[C]){
        if(1==this[C][G])return new sf(this[C][0]);
        a/=65535;
        a=new af(this[C][0].c+(this[C][1].c-this[C][0].c)*a,this[C][0].e+(this[C][1].e-this[C][0].e)*a,this[C][0].i+(this[C][1].i-this[C][0].i)*a,this[C][0].k+(this[C][1].k-this[C][0].k)*a);
        return new sf(a,this[C][0])
        }
        for(var a=new af,b=this[vc],c=0;c<b[G];++c){
        var d=b[c][v][0][bc](" "),e=0;
        b[c][oc]!=j&&(e=this[pb][b[c][oc]][Pa][0]/2);
        for(var g=0,i=0,l=0;g<d[G];)switch(d[g++]){
            case "M":
                i=p(d[g++]);
                l=p(d[g++]);
                break;
            case "L":
                a.pc(i,
                l,e);
            i=p(d[g++]);
                l=p(d[g++]);
                a.pc(i,l,e);
                break;
            case "Q":
                var q=p(d[g++]),t=p(d[g++]),D=p(d[g++]),F=p(d[g++]),va=(q-i)/(2*q-i-D),ea=(t-l)/(2*t-l-F);
                0<ea&&1>ea&&a.pc(i,(1-ea)*(1-ea)*l+2*(1-ea)*ea*t+ea*ea*F,e);
                0<va&&1>va&&a.pc((1-va)*(1-va)*i+2*(1-va)*va*q+va*va*D,l,e);
                i=D;
                l=F;
                a.pc(i,l,e)
                }
            }
        return new sf(a)
    };
    
var ug=function(a,b,c){
    ka(this,a);
    this.fill=b;
    this.line=c
    },nh=function(a){
    return new ug(a[v].map(Qg),a[Nb],a[oc])
    };
    
var oh=function(a,b){
    this.id=a;
    this.sound=b
    };
    
S(oh,ch);
Y[11]=function(a){
    return new oh(a.id,a[v])
    };
    
oh[H].Bb=function(a){
    a.a.jc().Fh(this.id,this[yb])
    };
    
var ph=function(a,b,c,d,e,g,i,l){
    this.text=a;
    this.font=b;
    Ha(this,c);
    this.x=d;
    this.y=e;
    la(this,g);
    this.bold=i;
    this.italic=l
    },qh=function(a,b,c,d){
    this.id=a;
    this.matrix=b;
    this.records=c;
    this.bounds=d
    };
    
S(qh,ch);
Y[6]=function(a){
    for(var b=bf(a[C]),c=of(a[Ua]),d=[],e=0;a[fc]&&e<a[fc][G];e++){
        var g=a[fc][e];
        d[s](new ph(g[Ra],g[Ia],g[Gc],g.x,g.y,g[ib],g[Qb],g[db]))
        }
        return new qh(a.id,c,d,b)
    };
    
qh[H].Bc=function(a){
    return new xg(this,a)
    };
    
var rh=function(a){
    xa(this,a)
    };
    
S(rh,dh);
Y[9]=function(a,b){
    var c=b.j().Ua(a[I]);
    return new rh(c)
    };
    
rh[H].lc=function(){};
    
rh[H].Rd=function(a){
    a.j().cg(new Mf(this[I],a))
    };
    
rh[H].Ud=function(a){
    a.j().Eg(new Mf(this[I],a))
    };
    
rh[H].zc=function(a){
    a[s](this)
    };
    
var sh=function(a,b){
    this.h=a;
    this.a=b
    };
    
S(sh,dh);
Y[18]=function(a,b){
    return new sh(a,b)
    };
    
sh[H].jg=function(){
    this.a.Ri.Si(j)
    };
    
var th=function(a){
    this.yb=a
    };
    
S(th,dh);
Y[21]=function(a){
    return new th(a[Hb])
    };
    
O=th[H];
O.ib=function(){};
    
O.lc=function(){};
    
O.Rd=function(a){
    var b=a.j();
    b.Yf(b.vh(a.a[Hb][this.yb],a))
    };
    
O.Ud=function(a){
    a.nb||(a.j()[Ac](a),a.a[Hb][this.yb]())
    };
    
O.zc=function(a){
    a[s](this)
    };
    
var uh=function(a){
    xa(this,a)
    };
    
S(uh,rh);
Y[20]=function(a,b){
    var c=b.j().Ua(a[I]);
    return new uh(c)
    };
    
uh[H].Bb=function(a,b){
    a.Ob[b]||(a.Ob[b]=[]);
    a.Ob[b][s](this)
    };
    
var vh=function(a){
    this.yb=a
    };
    
S(vh,th);
Y[22]=function(a){
    return new vh(a[Hb])
    };
    
vh[H].Bb=function(a,b){
    a.Ob[b]||(a.Ob[b]=[]);
    a.Ob[b][s](this)
    };
    
var wh=function(a){
    this.id=a
    };
    
S(wh,dh);
Y[12]=function(a,b){
    return new wh(a.id,b)
    };
    
wh[H].ib=function(a){
    a.jc().dg(this.id)
    };
    
wh[H].lc=wh[H].ib;
wh[H].zc=function(a){
    a[s](this)
    };
    
var xh=function(a){
    this.Ve=a
    };
    
S(xh,dh);
Y[16]=function(a){
    return new xh(a[v])
    };
    
xh[H].ib=function(a){
    for(var b in this.Ve)a.a.uf[b]=this.Ve[b],a.a.vf[this.Ve[b]]=b
        };
        
var yh=function(a){
    this.references=a
    };
    
S(yh,dh);
Y[19]=function(a,b){
    return new yh(a.references,b)
    };
    
yh[H].Bb=function(){
    var a=this.references,b;
    for(b in a);
    };
    
var zh=function(a){
    this.ui=a
    };
    
S(zh,dh);
Y[15]=function(a){
    return new zh(a.label)
    };
    
zh[H].Bb=function(a,b){
    a.Se[this.ui]=b
    };
    
var eh=function(a,b,c){
    this.id=a;
    pa(this,b);
    this.matrix=c
    };
    
S(eh,dh);
Y[3]=function(a,b){
    var c,d=b.j();
    P(a[I])&&(c=a[I].map(function(a){
        return{
            events:a[Ya],
            key:a.key,
            actions:d.Ua(a[I])
            }
        }));
var e;
e=P(a[Ua])?a[Ua]?of(a[Ua]):We:f;
    e=new eh(a.id,a[z],e);
    ra(e,a[B]);
    e.ratio=a[lb];
    e.replace=a[u];
    e.z=b.z(a.id);
    e.clip=a[Vb];
    e.colortransform=P(a[tc])?Rg(a[tc]):f;
    oa(e,a[wb]);
    Ga(e,a[zc]);
    xa(e,c);
    return e
    };
    
O=eh[H];
O.ib=function(a){
    var b=this[z]+-16384,c=a.n.Sd(b),d=j;
    if(!this[u]==!c&&(c?this.id&&!c.z()&&!this.z?(a.Kc(b),d=this.Vd(a),d[mb](c.la()),d.mb(c.Ea),d.Cd(c.X),d.Bd(c.Jc),d.ye(c.Ec),d.qb(c[qb]())):d=c:d=this.Vd(a),d&&!d.ig()))this[Ua]&&d[mb](this[Ua]),this[tc]&&d.mb(this[tc]),P(this[lb])&&d.Nd(this[lb]),P(this[zc])&&d.Cd(this[zc]),P(this[wb])&&d.Bd(this[wb])
        };
O.lc=function(a){
    var b=a.n.Sd(this[z]+-16384),c=j;
    b?b.z()&&this.z&&b.Ib==(this[lb]|0)?c=b:(a.n.Ch(b),c=this.Vd(a)):c=this.Vd(a);
    if(c)return c.ig()||(c[mb](this[Ua]?this[Ua]:We),c.mb(this[tc]?this[tc]:Ze),c.Nd(this[lb]|0),c.Cd(this[zc]?this[zc]:[]),c.Bd(this[wb]|0)),c
        };
O.Vd=function(a){
    var b=a.a.Ce(this.id,a);
    if(!b)return j;
    this[B]?b.qb(this[B]):b.z()&&b.qb(a.a.Qf());
    this[Vb]&&b.ye(this[Vb]+-16384);
    if(this[I]){
        b.Jd(128);
        for(var c=0;c<this[I][G];++c){
            var d=this[I][c];
            b.kg(d[Ya],d.key,d[I])
            }
        }
        b.Fa();
    a.ic(b,this[z]+-16384);
    b[pc]();
    return b
    };
    
O.pf=function(a){
    a[s](this)
    };
O.zc=function(a){
    var b=fh(a,this[z]);
    if(0>b)this[u]||a[s](this);
    else if(this[u]){
        var c=a[b];
        a[Hc](b,1);
        b=c.id;
        !c.z&&(!this.z&&P(this.id))&&(b=this.id);
        b=new eh(b,this[z],P(this[Ua])?this[Ua]:c[Ua]);
        ra(b,c[B]);
        b.ratio=P(this[lb])?this[lb]:c[lb];
        b.replace=k;
        b.z=c.z;
        b.clip=c[Vb];
        b.colortransform=P(this[tc])?this[tc]:c[tc];
        oa(b,P(this[wb])?this[wb]:c[wb]);
        Ga(b,P(this[zc])?this[zc]:c[zc]);
        xa(b,c[I]);
        a[s](b)
        }
    };
O.qi=function(a){
    if(!this[I]||!this.z)return k;
    for(var b=0;b<this[I][G];++b)if(0!=(this[I][b][Ya]&a))return h;return k
    };
    
O.oi=function(){
    var a=new eh(this.id,this[z]+-65536,this[Ua]);
    ra(a,this[B]);
    a.ratio=this[lb];
    a.replace=k;
    a.z=h;
    a.clip=0;
    a.colortransform=this[tc];
    oa(a,this[wb]);
    Ga(a,this[zc]);
    xa(a,this[I]);
    return a
    };
    
var Ah=function(a){
    this.of=a
    };
    
S(Ah,dh);
Y[4]=function(a){
    return new Ah(a[z])
    };
    
O=Ah[H];
O.ib=function(a){
    a.Kc(this.of+-16384)
    };
    
O.lc=Ah[H].ib;
O.pf=function(a){
    a[s](this)
    };
    
O.zc=function(a){
    var b=fh(a,this.of);
    if(0<=b){
        var c=a[b];
        if(c.qi(160))a[b]=c.oi(),a[s](this.pi());else a[Hc](b,1)
            }
        };

O.pi=function(){
    return new Ah(this.of+-65536)
    };
    
var Gg=function(a,b,c){
    this.id=a;
    this.a=c;
    this.If=[];
    this.Se={};
    
    this.frameCount=b;
    this.tags=[];
    this.Ob=[]
    };
    
S(Gg,ch);
Y[7]=function(a,b){
    var c=new Gg(a.id,a[gc],b);
    Hg(a,c);
    return c
    };
    
var Hg=function(a,b){
    for(var c=0,d=0;a[Ib]&&d<a[Ib][G];d++){
        var e=a[Ib][d];
        if(2==e[A])c++;
        else{
            var g=Y[e[A]];
            g&&g(e,b.a).Bb(b,c)
            }
        }
    b.Dh(c-1)
};

Gg[H].z=h;
Gg[H].Bc=function(){
    return new Dg(this,this.a)
    };
Gg[H].Dh=function(a){
    for(var b=[],c=0;c<=a;++c){
        for(var d=this[Ib][c],e=[],g=0;g<b[G];++g)b[g].pf(e);
        if(d)for(g=0;g<d[G];++g)d[g].zc(e);
        b=this.If[c]=e
        }
    };
    
var Fg=function(a,b){
    this.sg=1E3/a;
    this.ge=0;
    this.p=b;
    this.ee=k
    };
    
Da(Fg[H],function(){
    this.ee||(this.ee=h,Ug(R(this.vg,this)))
    });
ta(Fg[H],function(){
    this.ee=k
    });
Fg[H].vg=function(){
    if(this.ee){
        var a=Date.now();
        a>this.ge&&(this.p.Te(),this.ge+=(o[ab]((a-this.ge)/this.sg)+1)*this.sg);
        this.p.O();
        Ug(R(this.vg,this))
        }
    };

var Mf=function(a,b){
    this.pg=a;
    this.b=b
    };
    
var Bh=function(a,b){
    this.object=a;
    this.method=b
    },Ch=function(a,b){
    this.C=a;
    ka(this,{});
    this.U=b
    };
    
O=Ch[H];
O.get=function(a){
    var b=this.C.d(this[v],a);
    return b in this[v]?this[v][b]:this.U.get(a)
    };
    
Ca(O,function(a,b){
    var c=this.C.d(this[v],a);
    if(c in this[v])if(c=this[v][c],c instanceof Bh){
        var d=c[Eb].r[cc];
        if(Uc(d))return d[N](c.object,b)
            }else{
        if(Uc(c))return c[N](this.ja(),b)
            }else return this.U[L](a,b)
        });
O.set=function(a,b){
    var c=this.C.d(this[v],a);
    return c in this[v]?(this[v][c]=b,h):this.U.set(a,b)
    };
    
O.Ja=function(a,b){
    this[v][this.C.hb(this[v],a)]=b
    };
    
O.dd=function(a){
    a=this.C.hb(this[v],a);
    a in this[v]||(this[v][a]=f)
    };
    
O.xb=function(a){
    this.C.d(this[v],a)in this[v]||this.U.xb(a)
    };
    
O.jb=function(a){
    this.U.jb(a)
    };
    
O.ja=function(){
    return this.U.ja()
    };
    
O.Nb=function(){
    return this.U.Nb()
    };
    
var Dh=function(a,b,c){
    this.C=a;
    ka(this,c);
    this.U=b
    };
    
O=Dh[H];
O.get=function(a){
    var b=this.C.d(this[v],a);
    return b in this[v]?this[v][b]:this.U.get(a)
    };
    
Ca(O,function(a,b){
    var c=this.C.d(this[v],a);
    if(c in this[v]){
        if(c=this[v][c],Uc(c))return c[N](this[v],b)
            }else return this.U[L](a,b)
        });
O.set=function(a,b){
    var c=this.C.d(this[v],a);
    return c in this[v]?(this[v][c]=b,h):this.U.set(a,b)
    };
    
O.Ja=function(a,b){
    var c=this.C.d(this[v],a);
    c in this[v]?this[v][c]=b:this.U.Ja(a,b)
    };
    
O.dd=function(a){
    this.C.d(this[v],a)in this[v]||this.U.dd(a)
    };
O.xb=function(a){
    var b=this.C.d(this[v],a);
    b in this[v]?Eh(this[v],b):this.U.xb(a)
    };
    
O.jb=function(a){
    this.U.jb(a)
    };
    
O.ja=function(){
    return this.U.ja()
    };
    
O.Nb=function(){
    return this.U.Nb()
    };
    
var Fh=function(a,b,c){
    this.C=a;
    ka(this,c);
    this.mf=c;
    this.Xe=b;
    this.$e=c
    };
    
O=Fh[H];
O.get=function(a){
    var b=this.C.d(this[v],a);
    return b in this[v]?this[v][b]:"this"==a[Oc]()?this.$e:this.Xe.get(a)
    };
Ca(O,function(a,b){
    var c=this.C.d(this[v],a),d=this[v][c];
    if(c in this[v]){
        if(Uc(d))return d[N](this[v],b)
            }else return this.Xe[L](a,b)
        });
O.set=function(a,b){
    this[v][this.C.hb(this[v],a)]=b;
    return h
    };
    
O.Ja=function(a,b){
    this[v][this.C.hb(this[v],a)]=b
    };
    
O.dd=function(a){
    a=this.C.hb(this[v],a);
    a in this[v]||(this[v][a]=f)
    };
    
O.xb=function(a){
    var b=this.C.d(this[v],a);
    b in this[v]?Eh(this[v],b):this.Xe.xb(a)
    };
    
O.jb=function(a){
    a?(this.mf=a,ka(this,a)):(this.mf=j,ka(this,this.$e))
    };
    
O.ja=function(){
    return this.mf
    };
O.Nb=function(){
    return this.$e
    };
    
var Gh=function(a,b){
    this.C=a;
    ka(this,new Z(b));
    this[v]._global=this[v];
    U(this[v],"_global",3)
    };
    
O=Gh[H];
O.get=function(a){
    return this[v][this.C.d(this[v],a)]
    };
    
Ca(O,function(a,b){
    var c=this[v][this.C.d(this[v],a)];
    if(Uc(c))return c[N](this[v],b)
        });
O.set=function(){
    return k
    };
    
O.Ja=function(){};
    
O.dd=function(){};
    
O.xb=function(a){
    a=this.C.d(this[v],a);
    Eh(this[v],a)
    };
    
O.jb=function(){};
    
O.ja=function(){
    return j
    };
    
O.Nb=function(){
    return j
    };
    
var V=function(){};

S(V,cf);
V[H].valueOf=function(){
    for(var a="",b=this.__swiffy_d;b&&b[qb]();)a="."+b[qb]()+a,b=b[Ma]();
    b&&b instanceof Dg&&b.a.K==b&&(a="_level0"+a);
    return a
    };
    
V[H].getDepth=function(){
    return this.__swiffy_d[z]
    };
var Hh=function(a,b,c,d){
    m[x](a,b,{
        get:function(){
            var a=this.__swiffy_d;
            if(a)return c[L](this,a)
                },
        set:function(a){
            var c=this.__swiffy_d;
            c?d[L](this,c,a):m[x](this,b,{
                value:a
            })
            }
        })
},Ih=function(a,b,c,d){
    Hh(a,b,c,function(a,b){
        var c=a.a.j().cb(b);
        ca(c)||d[L](this,a,c)
        })
    },Jh=function(a,b){
    Hh(a,b,function(){
        return 0
        },function(){})
    },Kh=function(a,b,c){
    Hh(a,b,c,function(){})
    };
    
Ih(V[H],"_x",function(a){
    return a.la().H/20
    },function(a,b){
    var c=a.la();
    a[mb](c.translate(20*b-c.H,0));
    a.Ga()
    });
Ih(V[H],"_y",function(a){
    return a.la().I/20
    },function(a,b){
    var c=a.la();
    a[mb](c.translate(0,20*b-c.I));
    a.Ga()
    });
Ih(V[H],"_xscale",function(a){
    return 100*a.wc().Pb
    },function(a,b){
    a.wc().Pb=b/100;
    a.jf();
    a.Ga()
    });
Ih(V[H],"_yscale",function(a){
    return 100*a.wc().ad
    },function(a,b){
    a.wc().ad=b/100;
    a.jf();
    a.Ga()
    });
Ih(V[H],"_alpha",function(a){
    return(256*a.Ea.Y|0)/2.56
    },function(a,b){
    var c=a.Ea;
    a.mb(new Ye(c.ha,c.oa,c.fa,c.na,c.ea,c.ma,b/100,c.ia));
    a.Ga()
    });
Ih(V[H],"_visible",function(a){
    return a.La
    },function(a,b){
    a.Pi(ga(b))
    });
Ih(V[H],"_rotation",function(a){
    return-180*a.wc()[$b]/o.PI
    },function(a,b){
    a.wc().angle=-b*o.PI/180;
    a.jf();
    a.Ga()
    });
Hh(V[H],"_name",function(a){
    return a[qb]()
    },function(a,b){
    a.qb(b)
    });
Jh(V[H],"_quality");
Jh(V[H],"_highquality");
Jh(V[H],"_soundbuftime");
Kh(V[H],"_parent",function(a){
    return(a=a[Ma]())?a.S():a
    });
Kh(V[H],"_xmouse",function(a){
    var b=a.a.Gc.L();
    b.G(a.Yb());
    return b.x/20
    });
Kh(V[H],"_ymouse",function(a){
    var b=a.a.Gc.L();
    b.G(a.Yb());
    return b.y/20
    });
Kh(V[H],"_url",function(){
    return n.location.href
    });
Hh(V[H],"_width",function(a){
    var b=a.Va().Jb();
    if(b.Ha())return 0;
    b=b.L();
    b.G(a.la());
    return(b.i-b.c)/20
    },function(a,b){
    var c=a.a.j().cb(b);
    if(0<=c){
        var d=this._width,e=a.la();
        if(0==d)d=a.Va().Jb()[Pa]()/20,0==d&&(d=1),a[mb](new Ve(c/d,e.B,0,e.u,e.H,e.I));else a[mb](e.Ff(c/d,1).re(e.H,e.I));
        a.Ga()
        }
    });
Hh(V[H],"_height",function(a){
    var b=a.Va().Jb();
    if(b.Ha())return 0;
    b=b.L();
    b.G(a.la());
    return(b.k-b.e)/20
    },function(a,b){
    var c=a.a.j().cb(b);
    if(0<=c){
        var d=this._height,e=a.la();
        if(0==d)d=a.Va().Jb()[Gc]()/20,0==d&&(d=1),a[mb](new Ve(e.A,0,e.t,c/d,e.H,e.I));else a[mb](e.Ff(1,c/d).re(e.H,e.I));
        a.Ga()
        }
    });
U(V[H],j,3);
var Pf=function(){};

S(Pf,V);
U(Pf[H],j,3);
var Lh=function(a){
    ra(this,"Error");
    this.message=P(a)?a:"Error"
    };
    
ua(Lh[H],function(){
    return this.message
    });
U(Lh[H],j,3);
var W=function(){};

S(W,Pf);
W[H].enabled=h;
W[H].gotoAndStop=function(a){
    var b=this.__swiffy_d;
    b.od(b.$c(a),k)
    };
    
W[H].gotoAndPlay=function(a){
    var b=this.__swiffy_d;
    b.od(b.$c(a),h)
    };
    
W[H].play=function(){
    this.__swiffy_d[Bb]()
    };
    
ta(W[H],function(){
    this.__swiffy_d[Ob]()
    });
W[H].nextFrame=function(){
    this.__swiffy_d.oe()
    };
    
W[H].prevFrame=function(){
    this.__swiffy_d.Ng()
    };
W[H].globalToLocal=function(a){
    var b=this.__swiffy_d,c=b.a.j(),d=c.hg(a);
    if(d!=j){
        var e=c.d(a,"x"),c=c.d(a,"y"),b=Sg(b.Yb(),d);
        a[e]=b.x;
        a[c]=b.y
        }
    };

W[H].localToGlobal=function(a){
    var b=this.__swiffy_d,c=b.a.j(),d=c.hg(a);
    if(d!=j){
        var e=c.d(a,"x"),c=c.d(a,"y"),b=Sg(b.Ka(),d);
        a[e]=b.x;
        a[c]=b.y
        }
    };

W[H].createEmptyMovieClip=function(a,b){
    var c=this.__swiffy_d,d=new Dg(new Gg(0,0,c.a),c.a);
    d.gc=h;
    d.qb(a);
    d.Fa();
    d[pc]();
    c.Kc(b);
    c.ic(d,b);
    return d.S()
    };
    
W[H].getNextHighestDepth=function(){
    return this.__swiffy_d.n.Yh()
    };
W[H].getInstanceAtDepth=function(a){
    var b=this.__swiffy_d;
    if(!(-16384>a)&&(a=b.n.Sd(a)))return a instanceof Hf?a.S():b.S()
        };
        
W[H].getSWFVersion=function(){
    return this.__swiffy_d.a.Z
    };
    
W[H].setMask=function(a){
    var b=this.__swiffy_d,a=Q(a)?b.a.j().lg(a):a;
    a instanceof W?b.Yc(a.__swiffy_d):b.Yc(j)
    };
    
W[H].attachMovie=function(a,b,c,d){
    var e=this.__swiffy_d,a=e.a.uf[a];
    if(P(a)){
        a=e.a.Ce(a,e);
        a.gc=h;
        a.qb(b);
        a.Fa();
        a[pc]();
        e.Kc(c);
        e.ic(a,c);
        if(P(d)){
            var b=a.S(),g;
            for(g in d)b[g]=d[g]
                }
                return a.S()
        }
    };
W[H].duplicateMovieClip=function(a,b,c){
    var d=this.__swiffy_d,e=d[Ma]();
    if(e){
        a=d.duplicate(e,a,b);
        if(P(c)){
            var b=a.S(),g;
            for(g in c)b[g]=c[g]
                }
                return a.S()
        }
    };

W[H].removeMovieClip=function(){
    var a=this.__swiffy_d,b=a[Ma]();
    a.gc&&b&&(a.s(),b[kc](a))
    };
    
W[H].swapDepths=function(a){
    var b=this.__swiffy_d,c=b[Ma]();
    if(c){
        var d=f;
        if(a instanceof V){
            a=a.__swiffy_d;
            if(a[Ma]()!=c)return;
            d=a[z]
            }else"number"===typeof a&&(d=a);
        P(d)&&c.ef(b[z],d)
        }
    };
m[hb](W[H],function(){
    var a={},b;
    for(b in Jf)if(b&130816){
        var c=Jf[b];
        a[c]={
            get:Lf,
            set:ad(Kf,c)
            }
        }
    return a
}());
W[H].getBytesLoaded=function(){
    return this.getBytesTotal()
    };
    
W[H].getBytesTotal=function(){
    return 1E3
    };
    
W[H].getBounds=function(a){
    var b=this.__swiffy_d,c=b.Va().Jb().L();
    c.Ha()&&c[Sa](134217728,134217728);
    if(P(a)){
        var d=j;
        Q(a)&&(a=b.a.j().Hc(a,this));
        a instanceof W&&(d=a.__swiffy_d);
        if(d)a=d.Yb(),c.G(b.Ka()[qc](a));else return
    }
    b={};
    
    b.xMin=c.c/20;
    b.xMax=c.i/20;
    b.yMin=c.e/20;
    b.yMax=c.k/20;
    return b
    };
W[H].getURL=function(a,b,c){
    var d=0;
    Q(c)&&(c=c[Oc](),"get"==c?d=1:"post"==c&&(d=2));
    Tg(this,a,b,d)
    };
    
W[H].hitTest=function(a,b,c){
    if(P(a)){
        var d=this.__swiffy_d,e=d.Va().Jb().L();
        e.G(d.Ka());
        if(!P(b)&&!P(c)){
            if(b=j,a instanceof W?b=a.__swiffy_d:Q(a)&&(b=d.a.j().Hc(a,this)),b!=j)return a=b.Va().Jb().L(),a.G(b.Ka()),e.ph(a)
                }else if(P(b))return e[yc](20*a,20*b)
            }
            return k
    };
    
W[H].clear=function(){
    this.__swiffy_d.Xb("clear",arguments)
    };
    
W[H].moveTo=function(){
    this.__swiffy_d.Xb("moveTo",arguments)
    };
W[H].lineTo=function(){
    this.__swiffy_d.Xb("lineTo",arguments)
    };
    
W[H].curveTo=function(){
    this.__swiffy_d.Xb("curveTo",arguments)
    };
    
W[H].lineStyle=function(){
    this.__swiffy_d.Xb("lineStyle",arguments)
    };
    
W[H].beginFill=function(){
    this.__swiffy_d.Xb("beginFill",arguments)
    };
    
W[H].endFill=function(){
    this.__swiffy_d.Xb("endFill",arguments)
    };
    
Kh(W[H],"_currentframe",function(a){
    return o.max(1,a.T+1)
    });
Kh(W[H],"_totalframes",function(a){
    return a.h[gc]
    });
Kh(W[H],"_framesloaded",function(a){
    return a.h[gc]
    });
Kh(W[H],"_root",function(a){
    return a.a.K.S()
    });
Kh(W[H],"_target",function(){
    var a=this._root;
    if(this==a)return"/";
    for(var b="",c=this;c&&c!=a;)b="/"+c._name+b,c=c._parent;
    return b
    });
Kh(W[H],"_level0",function(a){
    return a.a.K.S()
    });
U(W[H],j,3);
var Vf=function(){};

S(Vf,V);
var Mh=function(a){
    return a[u](/<[^>]+>|&[^;]+;/g,function(a){
        switch(a){
            case "&amp;":
                return"&";
            case "&lt;":
                return"<";
            case "&gt;":
                return">";
            case "&quot;":
                return'"';
            case "&apos;":
                return"'";
            case "&nbsp;":
                return" "
                }
                return""
        })
    },Nh=function(a){
    return a[u](/[<>&]/g,function(a){
        switch(a){
            case "&":
                return"&amp;";
            case "<":
                return"&lt;";
            case ">":
                return"&gt;"
                }
                return a
        })
    },Wf={
    text:{
        get:function(){
            var a=this.__swiffy_d,b=a.bc;
            a.Wa&&(b=Mh(b));
            return b
            },
        set:function(a){
            var b=this.__swiffy_d;
            b.Wa&&(a=Nh(""+a));
            b.Rc(a)
            }
        },
htmlText:{
    get:function(){
        var a=this.__swiffy_d,b=a.bc;
        if(a.Wa){
            for(var a=""+b,b=/\s*<p(?: [^>]*)?>.*?<\/p>\s*/ig,c=0,d=b[Oa](a),e="";d;)d[Xb]>c&&(e+="<p>"+a[uc](c,d[Xb])+"</p>"),e+=d[0],c=b.lastIndex,d=b[Oa](a);
            a[G]>c&&(e+="<p>"+a[uc](c)+"</p>");
            b=e
            }
            return b
        },
    set:function(a){
        this.__swiffy_d.Rc(a)
        }
    },
html:{
    get:function(){
        return this.__swiffy_d.Wa
        },
    set:function(a){
        var b=this.__swiffy_d,a=!!a;
        if(a!=b.Wa){
            var c=this[Ra];
            b.ri(a);
            this.text=c
            }
        }
}
};

U(Vf[H],j,3);
var Ig=function(a){
    this.p=a
    };
    
m[x](Ig[H],"height",{
    get:function(){
        return"noScale"==this.p.sb?this.p.$d:this.p.sd
        },
    set:function(){}
});
m[x](Ig[H],"width",{
    get:function(){
        return"noScale"==this.p.sb?this.p.ae:this.p.td
        },
    set:function(){}
});
m[x](Ig[H],"align",{
    get:function(){
        var a=this.p.Lb,b="";
        a&1&&(b+="L");
        a&2&&(b+="T");
        a&4&&(b+="R");
        a&8&&(b+="B");
        return b
        },
    set:function(a){
        var a=(""+a).toUpperCase(),b=0;
        -1<a[w]("L")&&(b|=1);
        -1<a[w]("T")&&(b|=2);
        -1<a[w]("R")&&(b|=4);
        -1<a[w]("B")&&(b|=8);
        this.p.Zh(b)
        }
    });
m[x](Ig[H],"scaleMode",{
    get:function(){
        return this.p.sb
        },
    set:function(a){
        switch((""+a)[Oc]()){
            case "exactfit":
                a="exactFit";
                break;
            case "noborder":
                a="noBorder";
                break;
            case "noscale":
                a="noScale";
                break;
            default:
                a="showAll"
                }
                this.p.$h(a)
        }
    });
U(Ig[H],j,3);
var Z=function(a){
    m[x](this,"__swiffy_s",{
        value:a
    });
    this.String=Oh(String,function(b){
        return a.j().Qa(b)
        },["fromCharCode"]);
    U(this,"String",3);
    this.Number=Oh(p,function(b){
        return a.j().cb(b)
        },["MAX_VALUE","MIN_VALUE","NaN","NEGATIVE_INFINITY","POSITIVE_INFINITY"]);
    U(this,"Number",3);
    this.Boolean=Oh(ga,function(b){
        return a.j().yg(b)
        });
    U(this,"Boolean",3);
    this.Color=Bg(a);
    U(this,"Color",3);
    this.AsBroadcaster=new ef(a);
    U(this,"AsBroadcaster",3)
    },Oh=function(a,b,c){
    b.__swiffy_constructor=function(c){
        return new a(b(c))
        };
    b.__swiffy_wrapped_type=a;
    if(P(c))for(var d=0;d<c[G];d++)b[c[d]]=a[c[d]];
    U(b,j,3);
    return b
    };
    
Z[H].ASSetPropFlags=U;
Z[H].clearInterval=function(a){
    ba.clearInterval(a)
    };
    
Z[H].clearTimeout=function(a){
    ba.clearTimeout(a)
    };
    
Z[H].escape=function(a){
    return escape(a)[u](/[-@*+.\/_]/g,function(a){
        return"%"+a[sc](0)[Pb](16).toUpperCase()
        })
    };
    
Z[H].parseFloat=parseFloat;
Z[H].parseInt=!Dd?ha:function(a,b){
    if(!P(b)){
        var c=(""+a)[jb]();
        "0"==c[bb](0)&&"x"!=c[bb](1)[Oc]()&&(b=8)
        }
        return ha(a,b)
    };
    
Z[H].isFinite=function(a){
    return isFinite(a)
    };
Z[H].isNaN=function(a){
    return ca(a)
    };
    
Z[H].unescape=function(a){
    return unescape(a)
    };
    
Z[H].setInterval=function(a){
    if(Uc(a)&&2<=arguments[G])return ba.setInterval[N](j,arguments);
    if(Vc(a)&&3<=arguments[G]){
        var b=arguments[1],c=da[H][Ta][L](arguments,3);
        return ba.setInterval[L](j,function(){
            Uc(a[b])&&a[b][N](a,c)
            },arguments[2])
        }
    };

Z[H].setTimeout=function(a,b){
    if(Uc(a)&&2<=arguments[G])return ba.setTimeout[N](j,arguments)
        };
        
Z[H].updateAfterEvent=function(){
    this.__swiffy_s.Dc=h
    };
    
Z[H].Error=Lh;
Z[H].Math=o;
Z[H].MovieClip=W;
Z[H].TextField=Vf;
Z[H].Date=Date;
m[x](Date,"__swiffy_constructor",{
    value:function(a,b,c,d,e,g,i){
        switch(arguments[G]){
            case 0:
                return new Date;
            case 1:
                return new Date(arguments[0]);
            default:
                return c=P(c)?c:1,d=P(d)?d:0,e=P(e)?e:0,g=P(g)?g:0,i=P(i)?i:0,new Date(a,b,c,d,e,g,i)
                }
            }
});
Z[H].Array=da;
m[x](da,"__swiffy_constructor",{
    value:da
});
Z[H].Object=cf;
m[x](Z[H],"Key",{
    get:function(){
        return this.__swiffy_s.getKey()
        },
    set:function(){}
});
m[x](Z[H],"Mouse",{
    get:function(){
        return this.__swiffy_s.$a
        },
    set:function(){}
});
m[x](Z[H],"Stage",{
    get:function(){
        return this.__swiffy_s.Fd
        },
    set:function(){}
});
U(Z[H],j,3);
var X=function(a){
    this.Q=[];
    this.ng=[];
    this.wb=[];
    this.p=a;
    this.zh=this.mg();
    this.Zd=[];
    this.Xd=k;
    this.ua=0;
    this.Ba=4;
    this.Ke=new Gh(this,a)
    };
    
O=X[H];
O.cg=function(a){
    this.Zd[s](R(function(){
        this.Eg(a)
        },this))
    };
    
O.Yf=function(a){
    this.Zd[s](a)
    };
    
O.$=function(){
    if(!this.Xd){
        for(this.Xd=h;0<this.Zd[G];)this.Zd.shift()();
        this.Xd=k
        }
    };

O.mg=function(){
    return(new Date).getTime()
    };
    
O.xd=function(a){
    this.Ke.get("AsBroadcaster").initialize(a)
    };
O.reset=function(a){
    this.Q=[];
    this.ua=0;
    this.Ba=4;
    wa(this.Q,this.Q[G]+this.Ba);
    this.m=new Fh(this,this.Ke,a.S())
    };
    
O.Eg=function(a){
    if(!a.b.nb){
        this[Ac](a.b);
        for(var b=0;b<a.pg[G];)b=a.pg[b][L](this,b+1)
            }
        };

O.vh=function(a,b){
    return ad(function(c){
        b.nb||(c[Ac](b),a())
        },this)
    };
    
var Ph=function(a){
    a=a[u](/\.\.|\/:?|:/g,function(a){
        return".."==a?"_parent":"."
        });
    "."==a[0]&&(a="_root"+a);
    "."==a[a[G]-1]&&(a=a[uc](0,a[G]-1));
    return a
    };
X[H].Od=function(a,b){
    P(b)||(b=this.ja());
    var c=a[bc](":");
    return 1<c[G]?{
        path:this.Hc(c[0],b),
        Sc:c[1]
        }:{
        path:b,
        Sc:a
    }
};

X[H].ni=function(a){
    for(var b=0;b<this.ng[G];b++)this.ng[b](a);
    ba.console&&ba.console.log("[trace] "+a)
    };
    
var Qh={
    "boolean":{},
    number:{},
    string:{},
    undefined:{}
},Rh=function(a){
    for(var b=m[Na](a[cc][H]),a=Qh[typeof a],c=0;c<b[G];++c){
        var d=b[c],e=d[Oc]();
        d!=e&&(a[e]=d)
        }
    };
    
Rh(k);
Rh(0);
Rh("");
var Sh=function(a){
    if(!a)return{
        constructor:"constructor"
    };
    
    var b=a.__swiffy_nm;
    if(!b||b.__swiffy_nm!=a){
        for(var b=m[Tb](Sh(m[Jb](a))),c=m[Na](a),d=0;d<c[G];++d){
            var e=c[d],g=e[Oc]();
            e!=g&&(b[g]=e)
            }
            m[x](b,"__swiffy_nm",{
            value:a,
            writable:h
        });
        m[x](a,"__swiffy_nm",{
            value:b,
            writable:h
        })
        }
        return b
    };
    
O=X[H];
O.d=function(a,b){
    if(7<=this.p.Z){
        if(a instanceof V){
            if(b in a)return b;
            var c=b[Oc]();
            if(c in a&&-1<Th[w](c))return c
                }
                return b
        }
        var d=Qh[typeof a];
    if(!d){
        if(b in a)return b;
        d=Sh(a)
        }
        c=b[Oc]();
    return(d=d[c])?d:c
    };
    
O.hb=function(a,b){
    if(7<=this.p.Z){
        if(a instanceof V){
            if(b in a)return b;
            var c=b[Oc]();
            if(c in a&&-1<Th[w](c))return c
                }
                return b
        }
        var d=Qh[typeof a];
    if(d)return c=b[Oc](),(d=d[c])?d:c;
    if(b in a)return b;
    var e=Sh(a),c=b[Oc]();
    return(d=e[c])?d:b==c||c in a?c:e[c]=b
    };
O.hg=function(a){
    if(Vc(a)){
        var b=a[this.d(a,"x")],a=a[this.d(a,"y")];
        if("number"==typeof b&&"number"==typeof a)return new Ue(b,a)
            }
            return j
    };
    
O.ja=function(){
    return this.m.ja()
    };
    
O.zb=function(){
    var a=this.m.ja();
    return a?a.__swiffy_d:j
    };
    
O.push=function(a){
    this.Q[s](a)
    };
    
O.pop=function(){
    if(this.Q[G]>this.ua+this.Ba)return this.Q.pop()
        };
        
O.g=function(){
    return this.cb(this.pop())
    };
    
O.F=function(){
    return this.Qa(this.pop())
    };
    
O.rd=function(){
    return this.yg(this.pop())
    };
    
O.tg=function(){
    return this.fe(this.pop())
    };
O.fe=function(a){
    return a instanceof V?a:this.lg(""+a)
    };
    
O.Hc=function(a,b){
    if(!b||!a)return b;
    for(var a=Ph(a),c=b,d=a[bc]("."),e=0;e<d[G]&&c;e++)c=c[this.d(c,d[e])];
    return c
    };
    
O.lg=function(a){
    return this.Hc(a,this.ja())
    };
    
O.jh=function(a,b,c,d){
    this.Xd||this[Ac](c);
    c=this.Od(a,c.S());
    if(c[Db]&&c[Db].__swiffy_d){
        var a=c[Db].__swiffy_d,e=c[Db],c=this.hb(e,c.Sc);
        P(a.Pc[c])||(a.Pc[c]=[]);
        a.Pc[c][s](b);
        if(c in e&&(b.Rc(""+e[c]),d=e[c],m[lc](e,c).get))return;
        m[x](e,c,Uh(d,a.Pc[c]))
        }
    };
var Uh=function(a,b){
    var c=a;
    return{
        get:function(){
            return c
            },
        set:function(a){
            c=a;
            for(var e=0;e<b[G];e++)b[e].Rc(a)
                },
        configurable:h
    }
};

X[H].xh=function(a,b,c){
    c=this.Od(a,c.S());
    c[Db]&&(a=c[Db].__swiffy_d,c=this.d(c[Db],c.Sc),ld(a.Pc[c],b))
    };
    
var Eh=function(a,b){
    delete a[b];
    if(a instanceof W){
        var c=a.__swiffy_d.n.Xh(b);
        c&&vf(a,c,b)
        }
    };

X[H].Ua=function(a){
    for(var b=[],c=0;c<a[G];++c)b[c]=this.Di(a[c]);
    return b
    };
    
X[H].Di=function(a){
    var b=$__[a[A]];
    return!b?R(Vh,this,a[A]):b.da?b(a,this):b
    };
var Th="_x,_y,_xscale,_yscale,_currentframe,_totalframes,_alpha,_visible,_width,_height,_rotation,_target,_framesloaded,_name,_droptarget,_url,_highquality,_focusrect,_soundbuftime,_quality,_xmouse,_ymouse".split(","),$__={
    4:function(a){
        this.oe();
        return a
        }
    };

X[H].oe=function(){
    var a=this.zb();
    a&&a.oe()
    };
    
$__[5]=function(a){
    this.Ni();
    return a
    };
    
X[H].Ni=function(){
    var a=this.zb();
    a&&a.Ng()
    };
    
$__[6]=function(a){
    this[Bb]();
    return a
    };
    
X[H].play=function(){
    var a=this.zb();
    a&&a[Bb]()
    };
    
$__[7]=function(a){
    this[Ob]();
    return a
    };
ta(X[H],function(){
    var a=this.zb();
    a&&a[Ob]()
    });
$__[9]=function(a){
    this.Qi();
    return a
    };
    
X[H].Qi=function(){
    var a=this.zb();
    a&&a.jc().li()
    };
    
$__[10]=function(a){
    var b=this.g();
    this[s](this.g()+b);
    return a
    };
    
$__[11]=function(a){
    var b=this.g();
    this[s](this.g()-b);
    return a
    };
    
$__[12]=function(a){
    var b=this.g();
    this[s](this.g()*b);
    return a
    };
    
$__[13]=function(a){
    var b=this.g();
    this[s](this.g()/b);
    return a
    };
    
$__[14]=function(a){
    var b=this.g();
    this[s](this.Rh(this.g(),b));
    return a
    };
$__[15]=function(a){
    var b=this.g();
    this[s](this.g()<b);
    return a
    };
    
$__[16]=function(a){
    var b=this.rd();
    this[s](this.rd()&&b);
    return a
    };
    
$__[17]=function(a){
    var b=this.rd();
    this[s](this.rd()||b);
    return a
    };
    
$__[18]=function(a){
    this[s](!this.rd());
    return a
    };
    
$__[19]=function(a){
    var b=this.F();
    this[s](this.F()==b);
    return a
    };
    
$__[20]=function(a){
    this[s](this.F()[G]);
    return a
    };
    
$__[21]=function(a){
    var b=this.pop(),c=this.pop();
    this[s](this.gi(this.F(),c,b));
    return a
    };
X[H].gi=function(a,b,c){
    a=this.Qa(a);
    c=p(c);
    b=o.max(0,p(b)-1);
    return a.substr(b,c)
    };
    
$__[23]=function(a){
    this.pop();
    return a
    };
    
$__[24]=function(a){
    var b=this.g(),b=0>b?o[Xa](b):o[ab](b);
    this[s](b);
    return a
    };
    
$__[28]=function(a){
    this[s](this.fi(this.F()));
    return a
    };
    
X[H].fi=function(a){
    var a=Ph(a),a=a[bc]("."),b=this.m.get(a[0]);
    if(1<a[G]){
        var c;
        for(c=1;P(b)&&c<a[G]-1;++c)b=b[this.d(b,a[c])];
        P(b)&&(b=b[this.d(b,a[c])])
        }
        return b
    };
    
$__[29]=function(a){
    var b=this.pop();
    this.ff(this.F(),b);
    return a
    };
X[H].ff=function(a,b){
    var a=Ph(a),c=a[bc](".");
    if(1==c[G])this.m.set(a,b);
    else{
        var d=this.m.get(c[0]),e;
        for(e=1;P(d)&&e<c[G]-1;++e)d=d[this.d(d,c[e])];
        P(d)&&(d[this.hb(d,c[e])]=b)
        }
    };

$__[33]=function(a){
    var b=this.F();
    this[s](this.F()+b);
    return a
    };
    
$__[34]=function(a){
    var b=this.g();
    this[s](this.Qh(this.pop(),b));
    return a
    };
    
X[H].Qh=function(a,b){
    var c=this.fe(a),d=Th[b];
    if(c)return c[d]
        };
        
$__[35]=function(a){
    var b=this.pop(),c=this.g();
    this.setProperty(this.pop(),c,b);
    return a
    };
X[H].setProperty=function(a,b,c){
    b=Th[b];
    (a=this.fe(a))&&b&&(a[b]=c)
    };
    
$__[36]=function(a){
    var b=this.g(),c=this.F(),d=this.tg(),e=this.zb();
    d&&e&&d.__swiffy_d.duplicate(e,c,b);
    return a
    };
    
$__[37]=function(a){
    var b=this.tg();
    b instanceof W&&b.removeMovieClip();
    return a
    };
    
$__[38]=function(a){
    this.trace(this.pop());
    return a
    };
    
X[H].trace=function(a){
    this.ni(P(a)?this.Qa(a):"undefined")
    };
    
var Vh=function(a,b){
    return b
    };
    
$__[51]=function(a){
    var b=this.g();
    this[s](String.fromCharCode(b));
    return a
    };
$__[50]=function(a){
    this[s](this.F()[sc](0));
    return a
    };
    
$__[52]=function(a){
    this[s](this.getTime());
    return a
    };
    
X[H].getTime=function(){
    return this.mg()-this.zh
    };
    
$__[48]=function(a){
    this[s](this.random(this.g()));
    return a
    };
    
X[H].random=function(a){
    var b;
    do b=o[ab](o.random()*a);while(b==a&&0<a);
    return b
    };
    
$__[60]=function(a){
    var b=this.pop();
    this.m.Ja(this.pop(),b);
    return a
    };
    
$__[65]=function(a){
    this.m.dd(this.pop());
    return a
    };
    
$__[59]=function(a){
    this.Fi(this.pop());
    return a
    };
X[H].Fi=function(a){
    var a=this.Qa(a),a=Ph(a),b=a[bc](".");
    if(1==b[G])this.m.xb(a);
    else{
        var a=this.m.get(b[0]),c;
        for(c=1;P(a)&&c<b[G]-1;++c)a=a[this.d(a,b[c])];
        P(a)&&Eh(a,this.d(a,b[c]))
        }
    };

$__[62]=function(){
    Ea(this,this.pop());
    return p.MAX_VALUE
    };
    
$__[63]=function(a){
    var b=this.g();
    this[s](this.g()%b);
    return a
    };
    
$__[71]=function(a){
    var b=this.pop();
    this[s](this.add(this.pop(),b));
    return a
    };
    
$__[72]=function(a){
    var b=this.pop();
    this[s](this.Qg(this.pop(),b));
    return a
    };
X[H].Qg=function(a,b){
    if("object"===typeof a&&a!==j&&(a=a[Ka](),"object"===typeof a)||"object"===typeof b&&b!==j&&(b=b[Ka](),"object"===typeof b))return k;
    if("string"===typeof a&&"string"===typeof b)return a<b;
    "number"!==typeof a&&(a=this.cb(a));
    "number"!==typeof b&&(b=this.cb(b));
    return ca(a)||ca(b)?f:a<b
    };
    
$__[103]=function(a){
    var b=this.pop(),c=this.pop();
    this[s](this.Qg(b,c));
    return a
    };
    
$__[73]=function(a){
    var b=this.pop();
    this[s](this.vc(this.pop(),b));
    return a
    };
X[H].vc=function(a,b){
    if(!(typeof a===typeof b&&6<=this.p.Z)){
        "object"===typeof a&&a!==j&&(a=a[Ka]());
        "object"===typeof b&&b!==j&&(b=b[Ka]());
        if("object"===typeof a||"object"===typeof b)return a===f||a===j?b===f||b===j:a===b;
        if("string"===typeof a&&("boolean"===typeof b||"number"===typeof b))""==a[jb]()&&(a=p.NaN);
        else if("string"===typeof b&&("boolean"===typeof a||"number"===typeof a)&&""==b[jb]())b=p.NaN
            }
            return a==b
    };
    
$__[102]=function(a){
    var b=this.pop();
    this[s](this.pop()===b);
    return a
    };
$__[41]=function(a){
    var b=this.F();
    this[s](this.F()<b);
    return a
    };
    
$__[42]=function(){
    throw this.pop();
};

$__[104]=function(a){
    var b=this.F();
    this[s](this.F()>b);
    return a
    };
    
$__[105]=function(a){
    var b=this.pop(),c=this.pop();
    S(c,b);
    return a
    };
    
$__[74]=function(a){
    this[s](this.g());
    return a
    };
    
$__[75]=function(a){
    this[s](this.F());
    return a
    };
    
$__[76]=function(a){
    var b=this.pop();
    this[s](b);
    this[s](b);
    return a
    };
    
$__[77]=function(a){
    var b=this.pop(),c=this.pop();
    this[s](b);
    this[s](c);
    return a
    };
$__[78]=function(a){
    var b=this.pop();
    this[s](this.Ii(this.pop(),b));
    return a
    };
    
X[H].Ii=function(a,b){
    if(a!=j)if("number"===typeof b){
        if("string"!==typeof a)return a[b]
            }else return a[this.d(a,this.Qa(b))]
        };
        
$__[79]=function(a){
    var b=this.pop(),c=this.pop();
    this.Oi(this.pop(),c,b);
    return a
    };
    
X[H].Oi=function(a,b,c){
    a!=j&&("number"===typeof b?a[b]=c:a[this.hb(a,this.Qa(b))]=c)
    };
    
$__[80]=function(a){
    var b=this.g();
    this[s](++b);
    return a
    };
    
$__[81]=function(a){
    var b=this.g();
    this[s](--b);
    return a
    };
$__[96]=function(a){
    var b=this.g(),c=this.g();
    this[s](b&c);
    return a
    };
    
$__[97]=function(a){
    var b=this.g(),c=this.g();
    this[s](b|c);
    return a
    };
    
$__[98]=function(a){
    var b=this.g();
    this[s](this.g()^b);
    return a
    };
    
$__[99]=function(a){
    var b=this.g();
    this[s](this.g()<<b);
    return a
    };
    
$__[100]=function(a){
    var b=this.g();
    this[s](this.g()>>b);
    return a
    };
    
$__[101]=function(a){
    var b=this.g();
    this[s](this.g()>>>b);
    return a
    };
    
$__[58]=function(a){
    var b=this.F(),c=this.pop();
    c&&Eh(c,this.d(c,b));
    return a
    };
$__[129]=function(a,b){
    return R(Wh,b,a.frame)
    };
    
$__[129].da=h;
var Wh=function(a,b){
    var c=this.zb();
    c&&c.od(a,k);
    return b
    };
    
$__[140]=function(a,b){
    return R(Xh,b,a.label)
    };
    
$__[140].da=h;
var Xh=function(a,b){
    this.Ji(a);
    return b
    };
    
X[H].Ji=function(a){
    var b=this.zb();
    b&&(a=b.$c(a),a!=f&&b.od(a,k))
    };
    
$__[136]=function(a,b){
    return R(Yh,b,a.constants)
    };
    
$__[136].da=h;
var Yh=function(a,b){
    this.wb=a;
    return b
    };
    
$__[32]=function(a){
    this.jb(this.pop());
    return a
    };
    
X[H].jb=function(a){
    a instanceof V||(a=this.Hc(""+a,this.m.Nb()));
    this.m.jb(a)
    };
$__[69]=function(a){
    var b=this.pop(),c=f;
    b instanceof V&&(c=b[Ka]());
    this[s](c);
    return a
    };
    
$__[305]=function(a,b){
    return R(Zh,b,a.value)
    };
    
$__[305].da=h;
var Zh=function(a,b){
    this[s](a);
    return b
    };
    
$__[306]=function(a){
    this[s](f);
    return a
    };
    
$__[307]=function(a){
    this[s](p.POSITIVE_INFINITY);
    return a
    };
    
$__[308]=function(a){
    this[s](p.NEGATIVE_INFINITY);
    return a
    };
    
$__[309]=function(a){
    this[s](p.NaN);
    return a
    };
    
$__[304]=function(a,b){
    return R($h,b,a[Xb])
    };
    
$__[304].da=h;
var $h=function(a,b){
    this[s](this.wb[a]);
    return b
    };
$__[303]=function(a,b){
    return R(ai,b,a[Xb])
    };
    
$__[303].da=h;
var ai=function(a,b){
    0<=a&&a<this.Ba?this[s](this.Q[this.ua+a]):this[s](f);
    return b
    };
    
$__[135]=function(a,b){
    return R(bi,b,a[Xb])
    };
    
$__[135].da=h;
var bi=function(a,b){
    0<=a&&a<this.Ba&&(this.Q[this.ua+a]=this.Q[this.Q[G]-1]);
    return b
    };
    
$__[154]=function(a,b){
    return R(ci,b,a[Eb])
    };
    
$__[154].da=h;
var ci=function(a,b){
    var c=this.F(),d=this.F();
    Tg(this.ja(),d,c,a);
    return b
    };
    
$__[148]=function(a,b){
    return R(di,b,b.Ua(a[jc]))
    };
    
$__[148].da=h;
var di=function(a,b){
    var c=this.pop();
    if(!(c instanceof cf))return b;
    var d=this.m;
    this.m=new Dh(this,d,c);
    c=0;
    try{
        for(;c<a[G];)c=a[c][L](this,c+1)
            }finally{
        this.m=d
        }
        return b
    };
    
$__[155]=function(a,b){
    return R(ei,b,a.args,b.Ua(a[jc]),[],1,4)
    };
    
$__[155].da=h;
$__[142]=function(a,b){
    return R(ei,b,a.args,b.Ua(a[jc]),a.preloads,a.suppress,a.registerCount)
    };
    
$__[142].da=h;
var ei=function(a,b,c,d,e,g){
    var i=this,l=this.wb;
    this[s](this.Eh(function(){
        var d=i.ua,g=i.Ba,D=i.wb;
        i.wb=l;
        i.ua=i.Q[G];
        i.Ba=e;
        wa(i.Q,i.Q[G]+i.Ba);
        for(var F=0;F<c[G]&&F+1<e;++F)i.Q[i.ua+F+1]=i.m.get(c[F]);
        for(F=0;F<a[G];++F)Q(a[F])?i.m.Ja(a[F],arguments[F]):i.Q[i.ua+a[F]]=arguments[F];
        Ea(i,f);
        F=0;
        try{
            for(;F<b[G];)F=b[F][L](i,F+1)
                }finally{
            wa(i.Q,i.ua),i.ua=d,i.Ba=g,i.wb=D
            }
            return i.returnValue
        },d));
    return g
    };
X[H].Eh=function(a,b){
    var c=this,d=this.m,e=function(){
        var e=c.m,i=c.m.ja();
        if(5<c.p.Z)c.m=new Ch(c,d);
        else{
            var l=new Fh(c,c.Ke,this);
            c.m=new Ch(c,l)
            }
            b&4||c.m.Ja("this",this);
        b&1||c.m.Ja("super",new Bh(this,arguments.callee));
        if(!(b&2)){
            for(var l=arguments.callee.caller,q=10;l&&!(l[H]instanceof cf);)if(l=l.caller,0>=--q){
                l=j;
                break
            }
            q=da[H][Ta][L](arguments);
            q.callee=arguments.callee;
            q.caller=l;
            c.m.Ja("arguments",q)
            }
            var t;
        try{
            t=a[N](this,arguments)
            }finally{
            c.m=e,c.m.jb(i)
            }
            return t
        };
        
    S(e,cf);
    return e
    };
$__[143]=function(a,b){
    return R(fi,b,b.Ua(a.tryBlock),a.catchBlock?b.Ua(a.catchBlock):j,a.finallyBlock?b.Ua(a.finallyBlock):j,a.register,a[Zb])
    };
    
$__[143].da=h;
var fi=function(a,b,c,d,e,g){
    var i;
    try{
        for(i=0;i<a[G];)i=a[i][L](this,i+1)
            }catch(l){
        if(b!=j){
            var q;
            P(e)?(q=this.m.get(e),this.m.Ja(e,l)):0<=d&&d<this.Ba&&(this.Q[this.ua+d]=l);
            i=0;
            try{
                for(;i<b[G];)i=b[i][L](this,i+1)
                    }finally{
                P(e)&&(P(q)?this.m.Ja(e,q):this.m.xb(e))
                }
            }else throw l;
}finally{
    if(c!=j)for(i=0;i<c[G];)i=c[i][L](this,i+1)
        }
        return g
};
$__[61]=function(a){
    for(var b=this.F(),c=this.g(),d=[],e=0;e<c;++e)d[e]=this.pop();
    this[s](this.m[L](b,d));
    return a
    };
    
Ca(X[H],function(a,b){
    return this.m[L](a,b)
    });
$__[82]=function(a){
    for(var b=this.pop(),c=this.pop(),d=this.g(),e=[],g=0;g<d;g++)e[g]=this.pop();
    this[s](this.Oh(b,c,e));
    return a
    };
X[H].Oh=function(a,b,c){
    if(b!=j){
        if(a==j||""===a){
            if(b instanceof Bh){
                a=b[Eb].r[cc];
                if(Uc(a))return a[N](b.object,c);
                return
            }(a=this.m.ja())||(a=this.m.Nb());
            return b[N](a,c)
            }
            var d=f,e;
        if(b instanceof Bh){
            e=b.object;
            for(var g=k,i=e[cc];i;i=i.r&&i.r[cc]){
                if(g){
                    d=i[H][""+a];
                    break
                }
                for(var l=m[Na](i[H]),q=0;q<l[G]&&!g;q++)i[H][l[q]]===b[Eb]&&(g=h)
                    }
                }else d=b[this.d(b,""+a)],e=b;
    if(d)return d[N](e,c)
        }
    };
$__[64]=function(a){
    for(var b=this.m.get(this.F()),c=this.g(),d=[],e=0;e<c;++e)d[e]=this.pop();
    Uc(b)||(b=cf);
    "__swiffy_constructor"in b?c=b.__swiffy_constructor[N](j,d):(c=m[Tb](b[H]),b[N](c,d));
    this[s](c);
    return a
    };
    
$__[83]=function(a){
    for(var b=this.pop(),c=this.pop(),d=this.g(),e=[],g=0;g<d;g++)e[g]=this.pop();
    d=f;
    c!=j&&(d=b==j||""===b?c:c[this.d(c,""+b)]);
    Uc(d)||(d=cf);
    "__swiffy_constructor"in d?b=d.__swiffy_constructor[N](j,e):(b=m[Tb](d[H]),d[N](b,e));
    this[s](b);
    return a
    };
$__[67]=function(a){
    for(var b=new cf,c=this.g(),d=0;d<c;d++){
        var e=this.pop(),g=this.F();
        b[g]=e
        }
        this[s](b);
    return a
    };
    
$__[66]=function(a){
    for(var b=[],c=this.g(),d=0;d<c;d++){
        var e=this.pop();
        b[d]=e
        }
        this[s](b);
    return a
    };
    
$__[68]=function(a){
    var b=this.pop();
    this[s](b instanceof W?"movieclip":b==j||b==f?""+b:typeof b);
    return a
    };
    
$__[85]=function(a){
    var b=this.pop();
    this[s](f);
    if("string"!==typeof b)for(var c in b)this[s](c);return a
    };
    
$__[153]=function(a,b){
    return R(gi,b,a[mc])
    };
    
$__[153].da=h;
var gi=function(a){
    return a
    };
$__[157]=function(a,b){
    return R(hi,b,a[mc])
    };
    
$__[157].da=h;
var hi=function(a,b){
    return ga(this.pop())?a:b
    };
    
$__[158]=function(a){
    var b=this.Od(this.F());
    if(b[Db]&&b[Db].__swiffy_d){
        var c=b[Db].__swiffy_d,b=c.$c(b.Sc);
        if(b!=f&&(b=c.wh(b))){
            for(var d=this.m,e=this.ua,g=this.Ba,i=this.wb,l=this.Q,q=0;q<b[G];q++)b[q].Ud(c);
            this.Q=l;
            this.m=d;
            this.ua=e;
            this.Ba=g;
            this.wb=i
            }
        }
    return a
};

$__[159]=function(a,b){
    return R(ii,b,a.frameBias,a[Bb])
    };
    
$__[159].da=h;
var ii=function(a,b,c){
    var d=this.Od(this.F());
    if(d[Db]&&d[Db].__swiffy_d){
        var e=d[Db].__swiffy_d,d=e.$c(d.Sc);
        d!=f&&e.od(d+a,b)
        }
        return c
    };
    
$__[44]=function(a){
    var b=this.pop(),c=this.g(),b=(b=b?b[H]:j)?b:{},d;
    b[ic]("__swiffy_if")?d=b.__swiffy_if:(d=new Se,b.__swiffy_if&&d.jd(b.__swiffy_if),m[x](b,"__swiffy_if",{
        value:d
    }));
    for(var e=0;e<c;++e){
        var g=this.pop();
        if(b=g?g[H]:j)d.add(g),b.__swiffy_if&&d.jd(b.__swiffy_if)
            }
            return a
    };
var ji=function(a,b){
    if(Uc(b)){
        "__swiffy_wrapped_type"in b&&(b=b.__swiffy_wrapped_type);
        if(a instanceof b)return a;
        if(a instanceof m){
            var c=a.__swiffy_if;
            if(c&&c[yc](b))return a
                }
            }
    return j
};

$__[43]=function(a){
    var b=this.pop(),c=this.pop();
    this[s](ji(b,c));
    return a
    };
    
$__[84]=function(a){
    var b=this.pop(),c=this.pop();
    this[s](!!ji(c,b));
    return a
    };
    
O=X[H];
O.cb=function(a){
    return 7<=this.p.Z?!P(a)||a===j||Q(a)&&""===a[jb]()?p.NaN:p(a):5<=this.p.Z&&7>this.p.Z?!P(a)||a===j?0:Q(a)&&""===a[jb]()?p.NaN:p(a):!P(a)||this.p.Z===j?0:Q(a)?(a=p(a),ca(a)?0:a):p(a)
    };
    
O.Qa=function(a){
    5>this.p.Z&&"boolean"==typeof a&&(a=a?"1":"0");
    return 7>this.p.Z&&!P(a)?"":a+""
    };
    
O.yg=function(a){
    return 7<=this.p.Z?ga(a):"string"==typeof a?ga(p(a)):ga(a)
    };
    
O.Rh=function(a,b){
    return 5>this.p.Z?a==b?1:0:a==b
    };
O.add=function(a,b){
    return Q(a)||Q(b)?this.Qa(a)+this.Qa(b):this.cb(a)+this.cb(b)
    };