var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'overflow:hidden;'])
Z([[7],[3,'showAction']])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-indexed'])
Z([3,'idx'])
Z([3,'list'])
Z([[7],[3,'lists']])
Z(z[1])
Z([[2,'&&'],[[6],[[7],[3,'list']],[3,'items']],[[2,'>'],[[6],[[6],[[7],[3,'list']],[3,'items']],[3,'length']],[1,0]]])
Z(z[5])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'list']],[3,'items']])
Z(z[7])
Z([3,'__e'])
Z([3,'uni-list-item__container'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[[5],[[7],[3,'idx']]],[[7],[3,'index']]]]]]]]]]]])
Z([[7],[3,'showSelect']])
Z([3,'__l'])
Z([[2,'?:'],[[6],[[7],[3,'item']],[3,'checked']],[1,'#007aff'],[1,'#aaa']])
Z([3,'24'])
Z([[2,'?:'],[[6],[[7],[3,'item']],[3,'checked']],[1,'checkbox-filled'],[1,'circle']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'1-'],[[7],[3,'idx']]],[1,'-']],[[7],[3,'index']]])
Z([[7],[3,'touchmove']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([[2,'=='],[[6],[[7],[3,'richList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'richList']])
Z(z[2])
Z([3,'__e'])
Z([3,'vue-ref-in-for'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'showInputPopup']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'richList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'richtext'])
Z([[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'richListIndex']]],[1,'background:#cce0f2;'],[1,'']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tagType']],[1,'p']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tagType']],[1,'image']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tagType']],[1,'video']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'options']])
Z(z[0])
Z([[4],[[5],[[5],[[5],[1,'uni-steps-item']],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[[7],[3,'active']]],[1,'uni-steps-process'],[1,'']]],[[2,'?:'],[[2,'<'],[[7],[3,'index']],[[7],[3,'active']]],[1,'uni-steps-finish'],[1,'']]]])
Z([[6],[[7],[3,'item']],[3,'desc']])
Z([3,'uni-steps-item-circle-container'])
Z([[2,'!=='],[[7],[3,'index']],[[7],[3,'active']]])
Z([3,'__l'])
Z([[7],[3,'activeColor']])
Z([3,'14'])
Z([3,'checkbox-filled'])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[2,'!=='],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'options']],[3,'length']],[1,1]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'header'])
Z([[7],[3,'showBack']])
Z(z[1])
Z([[2,'!='],[[7],[3,'user_type']],[1,1]])
Z([[7],[3,'showStatus']])
Z([[7],[3,'active']])
Z([3,'__l'])
Z([[7],[3,'list1']])
Z([3,'1'])
Z([[2,'>'],[[6],[[7],[3,'offer']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'descriptionStr']])
Z(z[10])
Z([3,'vue-ref-in-for'])
Z([3,'richtext'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tagType']],[1,'p']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tagType']],[1,'image']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tagType']],[1,'video']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'showSwiper']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'offer']])
Z([3,'__e'])
Z([3,'comment'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toRatings']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([3,'position:relative;'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,1]])
Z([[7],[3,'showSwiper']])
Z([1,false])
Z(z[4])
Z([[7],[3,'swiperindex']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,1000])
Z(z[10])
Z([3,'height:91vh;background:#F4F4F4;'])
Z(z[1])
Z(z[2])
Z(z[3])
Z([3,'swiperBox'])
Z(z[8])
Z([3,'footer'])
Z([[7],[3,'showBtn']])
Z([[7],[3,'Wait']])
Z([[7],[3,'Attn']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'swiper']])
Z([[2,'!'],[[7],[3,'swiper']]])
Z([3,'content'])
Z([[7],[3,'showHeader']])
Z(z[3])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__i1__'])
Z([3,'item'])
Z([[6],[[7],[3,'list']],[3,'tasklist']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[[7],[3,'tab']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShowOauth']])
Z([3,'list'])
Z([[6],[[7],[3,'showProvider']],[3,'weixin']])
Z([[6],[[7],[3,'showProvider']],[3,'qq']])
Z([[6],[[7],[3,'showProvider']],[3,'sinaweibo']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'icon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'bindClick']]]]]]]]])
Z([[7],[3,'list']])
Z([1,false])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'hideEmoji']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'row'])
Z([[7],[3,'msgList']])
Z(z[3])
Z(z[4])
Z([[2,'+'],[1,'msg'],[[6],[[7],[3,'row']],[3,'id']]])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'uid']],[[7],[3,'myuid']]])
Z([3,'left'])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'text']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'voice']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'img']])
Z([[2,'!='],[[6],[[7],[3,'row']],[3,'uid']],[[7],[3,'myuid']]])
Z([3,'right'])
Z(z[11])
Z(z[12])
Z(z[13])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'chat'])
Z([[7],[3,'chatList']])
Z(z[0])
Z([3,'__e'])
Z([3,'row'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toChat']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'chatList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'>'],[[6],[[7],[3,'chat']],[3,'tisNum']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'add'])
Z([3,'add_img'])
Z([[2,'>'],[[6],[[7],[3,'imgList']],[3,'length']],[1,0]])
Z(z[2])
Z([3,'row-box'])
Z([3,'row-item'])
Z([[2,'=='],[[7],[3,'radioIndex']],[1,0]])
Z([[2,'=='],[[7],[3,'radioIndex']],[1,1]])
Z([[2,'=='],[[7],[3,'radioIndex']],[1,2]])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^updateRichList']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_sync']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'richList']],[1,'$event']]]],[[4],[[5],[1,'']]]]]]]]]],[[4],[[5],[[5],[1,'^updateRichList']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_sync']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'richList']],[1,'$event']]]],[[4],[[5],[1,'']]]]]]]]]]])
Z([[7],[3,'richList']])
Z([[7],[3,'uploadUrl']])
Z([3,'1'])
Z(z[9])
Z([3,'vue-ref'])
Z([3,'child'])
Z([[7],[3,'imgList']])
Z([1,5])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'vue-ref'])
Z([3,'child'])
Z([[7],[3,'imgList']])
Z([1,1])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'check'])
Z([3,'__e'])
Z(z[1])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'reset']],[[4],[[5],[[4],[[5],[[5],[1,'formReset']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!='],[[7],[3,'showStatus']],[1,1]])
Z([3,'__l'])
Z(z[1])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^imgList']],[[4],[[5],[[4],[[5],[1,'imgway']]]]]]]]])
Z([3,'child'])
Z([1,1])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHeader']])
Z([1,false])
Z([3,'__e'])
Z([3,'swiper'])
Z([[7],[3,'tab']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'500'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'scrollB']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'fixation']])
Z([3,'height:100%;'])
Z([3,'index'])
Z([3,'product'])
Z([[7],[3,'productList']])
Z(z[12])
Z([[7],[3,'renderImage']])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,false])
Z([3,'__e'])
Z([3,'swiper'])
Z([[7],[3,'tab']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'500'])
Z(z[0])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'scrollB']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'fixation']])
Z([3,'height:100%;'])
Z([3,'index'])
Z([3,'product'])
Z([[7],[3,'shop_list']])
Z(z[11])
Z([[7],[3,'renderImage']])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^imgList']],[[4],[[5],[[4],[[5],[1,'imgway']]]]]]]]])
Z([3,'child'])
Z([1,1])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'vue-ref'])
Z([3,'child'])
Z([[7],[3,'imgList']])
Z([1,9])
Z([3,'1'])
Z([3,'overflow:hidden;'])
Z([[7],[3,'Action']])
Z([[7],[3,'showAction']])
Z([[7],[3,'showActioner']])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHeader']])
Z(z[0])
Z(z[0])
Z([[2,'=='],[[6],[[7],[3,'goodsList']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'selectedList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'add'])
Z([3,'add_img'])
Z([[2,'>'],[[6],[[7],[3,'listimg']],[3,'length']],[1,0]])
Z(z[2])
Z([3,'row-box'])
Z([3,'row-item'])
Z([[2,'=='],[[7],[3,'radioIndex']],[1,0]])
Z([[2,'=='],[[7],[3,'radioIndex']],[1,1]])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^richList']],[[4],[[5],[[4],[[5],[1,'richList']]]]]]]]])
Z([[7],[3,'uploadUrl']])
Z([3,'1'])
Z(z[8])
Z(z[9])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^imgList']],[[4],[[5],[[4],[[5],[1,'imgway']]]]]]]]])
Z([3,'child'])
Z([[2,'-'],[1,5],[[6],[[7],[3,'listimg']],[3,'length']]])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'background-image:url(\x27../../../static/img/userbg.jpg\x27);background-size:cover;'])
Z([[7],[3,'showHeader']])
Z(z[1])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'row'])
Z([[7],[3,'show']])
Z([[2,'!'],[[7],[3,'show']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'row'])
Z([[7],[3,'addressList']])
Z(z[0])
Z([3,'__e'])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'select']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'addressList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'row']],[3,'isDefault']])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'editType']],[1,'edit']])
Z([3,'__l'])
Z([3,'__e'])
Z(z[2])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onCancel']],[[4],[[5],[[4],[[5],[1,'onCancel']]]]]]]],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'mpvueCityPicker'])
Z([[7],[3,'cityPickerValue']])
Z([[7],[3,'themeColor']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list'])
Z([[2,'=='],[[6],[[7],[3,'couponValidList']],[3,'length']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'couponinvalidList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list'])
Z([[2,'=='],[[6],[[7],[3,'goodsList']],[3,'length']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'shopList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHeader']])
Z(z[0])
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
function gz$gwx_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx_51)return __WXML_GLOBAL__.ops_cached.$gwx_51
__WXML_GLOBAL__.ops_cached.$gwx_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_51);return __WXML_GLOBAL__.ops_cached.$gwx_51
}
function gz$gwx_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx_52)return __WXML_GLOBAL__.ops_cached.$gwx_52
__WXML_GLOBAL__.ops_cached.$gwx_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_52);return __WXML_GLOBAL__.ops_cached.$gwx_52
}
function gz$gwx_53(){
if( __WXML_GLOBAL__.ops_cached.$gwx_53)return __WXML_GLOBAL__.ops_cached.$gwx_53
__WXML_GLOBAL__.ops_cached.$gwx_53=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^imgList']],[[4],[[5],[[4],[[5],[1,'imgway']]]]]]]]])
Z([3,'child'])
Z([1,1])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_53);return __WXML_GLOBAL__.ops_cached.$gwx_53
}
function gz$gwx_54(){
if( __WXML_GLOBAL__.ops_cached.$gwx_54)return __WXML_GLOBAL__.ops_cached.$gwx_54
__WXML_GLOBAL__.ops_cached.$gwx_54=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_54);return __WXML_GLOBAL__.ops_cached.$gwx_54
}
function gz$gwx_55(){
if( __WXML_GLOBAL__.ops_cached.$gwx_55)return __WXML_GLOBAL__.ops_cached.$gwx_55
__WXML_GLOBAL__.ops_cached.$gwx_55=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'check'])
Z([[2,'!='],[[7],[3,'showStatus']],[1,0]])
Z([3,'__e'])
Z(z[2])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'reset']],[[4],[[5],[[4],[[5],[[5],[1,'formReset']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!='],[[7],[3,'showStatus']],[1,1]])
Z([[2,'=='],[[7],[3,'showStatus']],[1,0]])
Z([[2,'=='],[[7],[3,'showStatus']],[1,1]])
Z([3,'__l'])
Z(z[2])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^imgList']],[[4],[[5],[[4],[[5],[1,'imgway']]]]]]]]])
Z([3,'child'])
Z([1,1])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_55);return __WXML_GLOBAL__.ops_cached.$gwx_55
}
function gz$gwx_56(){
if( __WXML_GLOBAL__.ops_cached.$gwx_56)return __WXML_GLOBAL__.ops_cached.$gwx_56
__WXML_GLOBAL__.ops_cached.$gwx_56=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_56);return __WXML_GLOBAL__.ops_cached.$gwx_56
}
function gz$gwx_57(){
if( __WXML_GLOBAL__.ops_cached.$gwx_57)return __WXML_GLOBAL__.ops_cached.$gwx_57
__WXML_GLOBAL__.ops_cached.$gwx_57=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_57);return __WXML_GLOBAL__.ops_cached.$gwx_57
}
function gz$gwx_58(){
if( __WXML_GLOBAL__.ops_cached.$gwx_58)return __WXML_GLOBAL__.ops_cached.$gwx_58
__WXML_GLOBAL__.ops_cached.$gwx_58=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_58);return __WXML_GLOBAL__.ops_cached.$gwx_58
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/chooseImage.wxml','./components/mpvue-citypicker/mpvueCityPicker.wxml','./components/uni-icon/uni-icon.wxml','./components/uni-indexed-list/uni-indexed-list.wxml','./components/uni-richtext.wxml','./components/uni-steps/uni-steps.wxml','./pages/goods/goods.wxml','./pages/goods/ratings/ratings.wxml','./pages/index/index.wxml','./pages/integral/integral.wxml','./pages/login/login.wxml','./pages/login/register.wxml','./pages/login/resetpasswd.wxml','./pages/msg/address/address.wxml','./pages/msg/chat/chat.wxml','./pages/msg/friend/friend.wxml','./pages/msg/msg.wxml','./pages/msg/search/search.wxml','./pages/msg/userinfo/userinfo.wxml','./pages/order/bidding.wxml','./pages/order/confirmation.wxml','./pages/pay/payment/payment.wxml','./pages/pay/success/success.wxml','./pages/product/addProduct/addProduct.wxml','./pages/product/product.wxml','./pages/search/search.wxml','./pages/shop/Decoration/Decoration.wxml','./pages/shop/check/check.wxml','./pages/shop/shop.wxml','./pages/shop/shopDetails/shopDetails.wxml','./pages/shop/shopInfo/shopInfo.wxml','./pages/shop/shopPicture/shopPicture.wxml','./pages/shop/shopType/shopType.wxml','./pages/tabBar/cart/cart.wxml','./pages/tabBar/home/home.wxml','./pages/tabBar/issue/issue.wxml','./pages/tabBar/issue/issues.wxml','./pages/tabBar/user/user.wxml','./pages/user/account/account.wxml','./pages/user/account/mail/mail.wxml','./pages/user/account/password/password.wxml','./pages/user/account/phone/phone.wxml','./pages/user/address/address.wxml','./pages/user/address/edit/edit.wxml','./pages/user/competitive/competitive.wxml','./pages/user/coupon/coupon.wxml','./pages/user/deposit/deposit.wxml','./pages/user/keep/keep.wxml','./pages/user/language/language.wxml','./pages/user/myQR/myQR.wxml','./pages/user/myname/myname.wxml','./pages/user/personal/mail/mail.wxml','./pages/user/personal/personal.wxml','./pages/user/personal/phone/phone.wxml','./pages/user/realName/realName.wxml','./pages/user/security/security.wxml','./pages/user/setting/setting.wxml','./pages/user/signature/signature.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'style',0,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,2,e,s,gg)){oD.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oH=_n('view')
_rz(z,oH,'class',0,e,s,gg)
var oJ=_v()
_(oH,oJ)
var lK=function(tM,aL,eN,gg){
var oP=_v()
_(eN,oP)
if(_oz(z,5,tM,aL,gg)){oP.wxVkey=1
}
var xQ=_v()
_(eN,xQ)
if(_oz(z,6,tM,aL,gg)){xQ.wxVkey=1
var oR=_v()
_(xQ,oR)
var fS=function(hU,cT,oV,gg){
var oX=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],hU,cT,gg)
var lY=_v()
_(oX,lY)
if(_oz(z,14,hU,cT,gg)){lY.wxVkey=1
var aZ=_mz(z,'uni-icon',['bind:__l',15,'color',1,'size',2,'type',3,'vueId',4],[],hU,cT,gg)
_(lY,aZ)
}
lY.wxXCkey=1
lY.wxXCkey=3
_(oV,oX)
return oV
}
oR.wxXCkey=4
_2z(z,9,fS,tM,aL,gg,oR,'item','index','index')
}
oP.wxXCkey=1
xQ.wxXCkey=1
xQ.wxXCkey=3
return eN
}
oJ.wxXCkey=4
_2z(z,3,lK,e,s,gg,oJ,'list','idx','idx')
var cI=_v()
_(oH,cI)
if(_oz(z,20,e,s,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
_(r,oH)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var e2=_n('view')
_rz(z,e2,'class',0,e,s,gg)
var b3=_v()
_(e2,b3)
if(_oz(z,1,e,s,gg)){b3.wxVkey=1
}
var o4=_v()
_(e2,o4)
var x5=function(f7,o6,c8,gg){
var o0=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2,'data-ref',3,'style',4],[],f7,o6,gg)
var cAB=_v()
_(o0,cAB)
if(_oz(z,11,f7,o6,gg)){cAB.wxVkey=1
}
var oBB=_v()
_(o0,oBB)
if(_oz(z,12,f7,o6,gg)){oBB.wxVkey=1
}
var lCB=_v()
_(o0,lCB)
if(_oz(z,13,f7,o6,gg)){lCB.wxVkey=1
}
cAB.wxXCkey=1
oBB.wxXCkey=1
lCB.wxXCkey=1
_(c8,o0)
return c8
}
o4.wxXCkey=2
_2z(z,4,x5,e,s,gg,o4,'item','index','index')
b3.wxXCkey=1
_(r,e2)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var tEB=_v()
_(r,tEB)
var eFB=function(oHB,bGB,xIB,gg){
var fKB=_n('view')
_rz(z,fKB,'class',4,oHB,bGB,gg)
var cLB=_v()
_(fKB,cLB)
if(_oz(z,5,oHB,bGB,gg)){cLB.wxVkey=1
}
var oNB=_n('view')
_rz(z,oNB,'class',6,oHB,bGB,gg)
var cOB=_v()
_(oNB,cOB)
if(_oz(z,7,oHB,bGB,gg)){cOB.wxVkey=1
}
else{cOB.wxVkey=2
var oPB=_mz(z,'uni-icon',['bind:__l',8,'color',1,'size',2,'type',3,'vueId',4],[],oHB,bGB,gg)
_(cOB,oPB)
}
cOB.wxXCkey=1
cOB.wxXCkey=3
_(fKB,oNB)
var hMB=_v()
_(fKB,hMB)
if(_oz(z,13,oHB,bGB,gg)){hMB.wxVkey=1
}
cLB.wxXCkey=1
hMB.wxXCkey=1
_(xIB,fKB)
return xIB
}
tEB.wxXCkey=4
_2z(z,2,eFB,e,s,gg,tEB,'item','index','index')
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var aRB=_n('view')
var oVB=_n('view')
_rz(z,oVB,'class',0,e,s,gg)
var xWB=_v()
_(oVB,xWB)
if(_oz(z,1,e,s,gg)){xWB.wxVkey=1
}
var oXB=_v()
_(oVB,oXB)
if(_oz(z,2,e,s,gg)){oXB.wxVkey=1
}
xWB.wxXCkey=1
oXB.wxXCkey=1
_(aRB,oVB)
var tSB=_v()
_(aRB,tSB)
if(_oz(z,3,e,s,gg)){tSB.wxVkey=1
}
var eTB=_v()
_(aRB,eTB)
if(_oz(z,4,e,s,gg)){eTB.wxVkey=1
var fYB=_mz(z,'uni-steps',['active',5,'bind:__l',1,'options',2,'vueId',3],[],e,s,gg)
_(eTB,fYB)
}
var bUB=_v()
_(aRB,bUB)
if(_oz(z,9,e,s,gg)){bUB.wxVkey=1
}
var cZB=_v()
_(aRB,cZB)
var h1B=function(c3B,o2B,o4B,gg){
var a6B=_mz(z,'view',['class',14,'data-ref',1],[],c3B,o2B,gg)
var t7B=_v()
_(a6B,t7B)
if(_oz(z,16,c3B,o2B,gg)){t7B.wxVkey=1
}
var e8B=_v()
_(a6B,e8B)
if(_oz(z,17,c3B,o2B,gg)){e8B.wxVkey=1
}
var b9B=_v()
_(a6B,b9B)
if(_oz(z,18,c3B,o2B,gg)){b9B.wxVkey=1
}
t7B.wxXCkey=1
e8B.wxXCkey=1
b9B.wxXCkey=1
_(o4B,a6B)
return o4B
}
cZB.wxXCkey=2
_2z(z,12,h1B,e,s,gg,cZB,'item','index','index')
tSB.wxXCkey=1
eTB.wxXCkey=1
eTB.wxXCkey=3
bUB.wxXCkey=1
_(r,aRB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var xAC=_n('view')
var oBC=_v()
_(xAC,oBC)
if(_oz(z,0,e,s,gg)){oBC.wxVkey=1
var cDC=_v()
_(oBC,cDC)
var hEC=function(cGC,oFC,oHC,gg){
var aJC=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2,'style',3],[],cGC,oFC,gg)
var tKC=_v()
_(aJC,tKC)
if(_oz(z,8,cGC,oFC,gg)){tKC.wxVkey=1
}
tKC.wxXCkey=1
_(oHC,aJC)
return oHC
}
cDC.wxXCkey=2
_2z(z,3,hEC,e,s,gg,cDC,'item','index','')
}
var fCC=_v()
_(xAC,fCC)
if(_oz(z,9,e,s,gg)){fCC.wxVkey=1
var eLC=_mz(z,'swiper',['autoplay',10,'bindchange',1,'current',2,'data-event-opts',3,'duration',4,'indicatorDots',5,'style',6],[],e,s,gg)
var bMC=_v()
_(eLC,bMC)
var oNC=function(oPC,xOC,fQC,gg){
var hSC=_n('swiper-item')
_rz(z,hSC,'class',20,oPC,xOC,gg)
var oTC=_v()
_(hSC,oTC)
if(_oz(z,21,oPC,xOC,gg)){oTC.wxVkey=1
}
var cUC=_n('view')
_rz(z,cUC,'class',22,oPC,xOC,gg)
var oVC=_v()
_(cUC,oVC)
if(_oz(z,23,oPC,xOC,gg)){oVC.wxVkey=1
}
var lWC=_v()
_(cUC,lWC)
if(_oz(z,24,oPC,xOC,gg)){lWC.wxVkey=1
}
var aXC=_v()
_(cUC,aXC)
if(_oz(z,25,oPC,xOC,gg)){aXC.wxVkey=1
}
oVC.wxXCkey=1
lWC.wxXCkey=1
aXC.wxXCkey=1
_(hSC,cUC)
oTC.wxXCkey=1
_(fQC,hSC)
return fQC
}
bMC.wxXCkey=2
_2z(z,19,oNC,e,s,gg,bMC,'item','index','')
_(fCC,eLC)
}
oBC.wxXCkey=1
fCC.wxXCkey=1
_(r,xAC)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var eZC=_n('view')
var b1C=_v()
_(eZC,b1C)
if(_oz(z,0,e,s,gg)){b1C.wxVkey=1
}
var o2C=_v()
_(eZC,o2C)
if(_oz(z,1,e,s,gg)){o2C.wxVkey=1
var x3C=_n('view')
_rz(z,x3C,'class',2,e,s,gg)
var o4C=_v()
_(x3C,o4C)
if(_oz(z,3,e,s,gg)){o4C.wxVkey=1
}
var f5C=_v()
_(x3C,f5C)
if(_oz(z,4,e,s,gg)){f5C.wxVkey=1
}
var c6C=_v()
_(x3C,c6C)
if(_oz(z,5,e,s,gg)){c6C.wxVkey=1
}
o4C.wxXCkey=1
f5C.wxXCkey=1
c6C.wxXCkey=1
_(o2C,x3C)
}
b1C.wxXCkey=1
o2C.wxXCkey=1
_(r,eZC)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var o8C=_v()
_(r,o8C)
var c9C=function(lAD,o0C,aBD,gg){
var eDD=_v()
_(aBD,eDD)
if(_oz(z,3,lAD,o0C,gg)){eDD.wxVkey=1
}
eDD.wxXCkey=1
return aBD
}
o8C.wxXCkey=2
_2z(z,2,c9C,e,s,gg,o8C,'item','__i1__','')
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oFD=_v()
_(r,oFD)
if(_oz(z,0,e,s,gg)){oFD.wxVkey=1
var xGD=_n('view')
_rz(z,xGD,'class',1,e,s,gg)
var oHD=_v()
_(xGD,oHD)
if(_oz(z,2,e,s,gg)){oHD.wxVkey=1
}
var fID=_v()
_(xGD,fID)
if(_oz(z,3,e,s,gg)){fID.wxVkey=1
}
var cJD=_v()
_(xGD,cJD)
if(_oz(z,4,e,s,gg)){cJD.wxVkey=1
}
oHD.wxXCkey=1
fID.wxXCkey=1
cJD.wxXCkey=1
_(oFD,xGD)
}
oFD.wxXCkey=1
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oLD=_v()
_(r,oLD)
if(_oz(z,0,e,s,gg)){oLD.wxVkey=1
}
oLD.wxXCkey=1
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var lOD=_mz(z,'uni-indexed-list',['bind:__l',0,'bind:click',1,'data-event-opts',1,'options',2,'showSelect',3,'vueId',4],[],e,s,gg)
_(r,lOD)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var tQD=_mz(z,'view',['bindtouchstart',0,'class',1,'data-event-opts',1],[],e,s,gg)
var eRD=_v()
_(tQD,eRD)
var bSD=function(xUD,oTD,oVD,gg){
var cXD=_mz(z,'view',['class',7,'id',1],[],xUD,oTD,gg)
var hYD=_v()
_(cXD,hYD)
if(_oz(z,9,xUD,oTD,gg)){hYD.wxVkey=1
var c1D=_n('view')
_rz(z,c1D,'class',10,xUD,oTD,gg)
var o2D=_v()
_(c1D,o2D)
if(_oz(z,11,xUD,oTD,gg)){o2D.wxVkey=1
}
var l3D=_v()
_(c1D,l3D)
if(_oz(z,12,xUD,oTD,gg)){l3D.wxVkey=1
}
var a4D=_v()
_(c1D,a4D)
if(_oz(z,13,xUD,oTD,gg)){a4D.wxVkey=1
}
o2D.wxXCkey=1
l3D.wxXCkey=1
a4D.wxXCkey=1
_(hYD,c1D)
}
var oZD=_v()
_(cXD,oZD)
if(_oz(z,14,xUD,oTD,gg)){oZD.wxVkey=1
var t5D=_n('view')
_rz(z,t5D,'class',15,xUD,oTD,gg)
var e6D=_v()
_(t5D,e6D)
if(_oz(z,16,xUD,oTD,gg)){e6D.wxVkey=1
}
var b7D=_v()
_(t5D,b7D)
if(_oz(z,17,xUD,oTD,gg)){b7D.wxVkey=1
}
var o8D=_v()
_(t5D,o8D)
if(_oz(z,18,xUD,oTD,gg)){o8D.wxVkey=1
}
e6D.wxXCkey=1
b7D.wxXCkey=1
o8D.wxXCkey=1
_(oZD,t5D)
}
hYD.wxXCkey=1
oZD.wxXCkey=1
_(oVD,cXD)
return oVD
}
eRD.wxXCkey=2
_2z(z,5,bSD,e,s,gg,eRD,'row','index','index')
_(r,tQD)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var fAE=_v()
_(r,fAE)
var cBE=function(oDE,hCE,cEE,gg){
var lGE=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],oDE,hCE,gg)
var aHE=_v()
_(lGE,aHE)
if(_oz(z,7,oDE,hCE,gg)){aHE.wxVkey=1
}
aHE.wxXCkey=1
_(cEE,lGE)
return cEE
}
fAE.wxXCkey=2
_2z(z,2,cBE,e,s,gg,fAE,'chat','index','index')
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var cPE=_n('view')
_rz(z,cPE,'class',0,e,s,gg)
var hQE=_n('view')
_rz(z,hQE,'class',1,e,s,gg)
var oRE=_v()
_(hQE,oRE)
if(_oz(z,2,e,s,gg)){oRE.wxVkey=1
}
var cSE=_v()
_(hQE,cSE)
if(_oz(z,3,e,s,gg)){cSE.wxVkey=1
}
oRE.wxXCkey=1
cSE.wxXCkey=1
_(cPE,hQE)
var oTE=_n('view')
_rz(z,oTE,'class',4,e,s,gg)
var lUE=_n('view')
_rz(z,lUE,'class',5,e,s,gg)
var aVE=_v()
_(lUE,aVE)
if(_oz(z,6,e,s,gg)){aVE.wxVkey=1
}
var tWE=_v()
_(lUE,tWE)
if(_oz(z,7,e,s,gg)){tWE.wxVkey=1
}
var eXE=_v()
_(lUE,eXE)
if(_oz(z,8,e,s,gg)){eXE.wxVkey=1
}
aVE.wxXCkey=1
tWE.wxXCkey=1
eXE.wxXCkey=1
_(oTE,lUE)
var bYE=_mz(z,'uni-richtext',['bind:__l',9,'bind:updateRichList',1,'data-event-opts',2,'richList',3,'uploadUrl',4,'vueId',5],[],e,s,gg)
_(oTE,bYE)
_(cPE,oTE)
var oZE=_mz(z,'choose-image',['bind:__l',15,'class',1,'data-ref',2,'imgList',3,'langth',4,'vueId',5],[],e,s,gg)
_(cPE,oZE)
_(r,cPE)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var c4E=_mz(z,'choose-image',['bind:__l',0,'class',1,'data-ref',1,'imgList',2,'langth',3,'vueId',4],[],e,s,gg)
_(r,c4E)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var o6E=_n('view')
_rz(z,o6E,'class',0,e,s,gg)
var c7E=_mz(z,'form',['bindreset',1,'bindsubmit',1,'data-event-opts',2],[],e,s,gg)
var o8E=_v()
_(c7E,o8E)
if(_oz(z,4,e,s,gg)){o8E.wxVkey=1
}
o8E.wxXCkey=1
_(o6E,c7E)
var l9E=_mz(z,'choose-image',['bind:__l',5,'bind:imgList',1,'class',2,'data-event-opts',3,'data-ref',4,'langth',5,'vueId',6],[],e,s,gg)
_(o6E,l9E)
_(r,o6E)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var tAF=_n('view')
var eBF=_v()
_(tAF,eBF)
if(_oz(z,0,e,s,gg)){eBF.wxVkey=1
}
var bCF=_mz(z,'swiper',['autoplay',1,'bindchange',1,'class',2,'current',3,'data-event-opts',4,'duration',5,'indicatorDots',6],[],e,s,gg)
var oDF=_mz(z,'scroll-view',['bindscroll',8,'data-event-opts',1,'scrollY',2,'style',3],[],e,s,gg)
var xEF=_v()
_(oDF,xEF)
var oFF=function(cHF,fGF,hIF,gg){
var cKF=_v()
_(hIF,cKF)
if(_oz(z,16,cHF,fGF,gg)){cKF.wxVkey=1
}
cKF.wxXCkey=1
return hIF
}
xEF.wxXCkey=2
_2z(z,14,oFF,e,s,gg,xEF,'product','index','index')
_(bCF,oDF)
_(tAF,bCF)
eBF.wxXCkey=1
_(r,tAF)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var lMF=_mz(z,'swiper',['autoplay',0,'bindchange',1,'class',1,'current',2,'data-event-opts',3,'duration',4,'indicatorDots',5],[],e,s,gg)
var aNF=_mz(z,'scroll-view',['bindscroll',7,'data-event-opts',1,'scrollY',2,'style',3],[],e,s,gg)
var tOF=_v()
_(aNF,tOF)
var ePF=function(oRF,bQF,xSF,gg){
var fUF=_v()
_(xSF,fUF)
if(_oz(z,15,oRF,bQF,gg)){fUF.wxVkey=1
}
fUF.wxXCkey=1
return xSF
}
tOF.wxXCkey=2
_2z(z,13,ePF,e,s,gg,tOF,'product','index','index')
_(lMF,aNF)
_(r,lMF)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var hWF=_mz(z,'choose-image',['bind:__l',0,'bind:imgList',1,'class',1,'data-event-opts',2,'data-ref',3,'langth',4,'vueId',5],[],e,s,gg)
_(r,hWF)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var cYF=_n('view')
var oZF=_mz(z,'choose-image',['bind:__l',0,'class',1,'data-ref',1,'imgList',2,'langth',3,'vueId',4],[],e,s,gg)
_(cYF,oZF)
var l1F=_n('view')
_rz(z,l1F,'style',6,e,s,gg)
var a2F=_v()
_(l1F,a2F)
if(_oz(z,7,e,s,gg)){a2F.wxVkey=1
}
var t3F=_v()
_(l1F,t3F)
if(_oz(z,8,e,s,gg)){t3F.wxVkey=1
}
var e4F=_v()
_(l1F,e4F)
if(_oz(z,9,e,s,gg)){e4F.wxVkey=1
}
a2F.wxXCkey=1
t3F.wxXCkey=1
e4F.wxXCkey=1
_(cYF,l1F)
_(r,cYF)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var x7F=_n('view')
var o8F=_v()
_(x7F,o8F)
if(_oz(z,0,e,s,gg)){o8F.wxVkey=1
}
var f9F=_v()
_(x7F,f9F)
if(_oz(z,1,e,s,gg)){f9F.wxVkey=1
}
var c0F=_v()
_(x7F,c0F)
if(_oz(z,2,e,s,gg)){c0F.wxVkey=1
}
var hAG=_v()
_(x7F,hAG)
if(_oz(z,3,e,s,gg)){hAG.wxVkey=1
}
var oBG=_v()
_(x7F,oBG)
if(_oz(z,4,e,s,gg)){oBG.wxVkey=1
}
o8F.wxXCkey=1
f9F.wxXCkey=1
c0F.wxXCkey=1
hAG.wxXCkey=1
oBG.wxXCkey=1
_(r,x7F)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var lEG=_n('view')
_rz(z,lEG,'class',0,e,s,gg)
var aFG=_n('view')
_rz(z,aFG,'class',1,e,s,gg)
var tGG=_v()
_(aFG,tGG)
if(_oz(z,2,e,s,gg)){tGG.wxVkey=1
}
var eHG=_v()
_(aFG,eHG)
if(_oz(z,3,e,s,gg)){eHG.wxVkey=1
}
tGG.wxXCkey=1
eHG.wxXCkey=1
_(lEG,aFG)
var bIG=_n('view')
_rz(z,bIG,'class',4,e,s,gg)
var oJG=_n('view')
_rz(z,oJG,'class',5,e,s,gg)
var xKG=_v()
_(oJG,xKG)
if(_oz(z,6,e,s,gg)){xKG.wxVkey=1
}
var oLG=_v()
_(oJG,oLG)
if(_oz(z,7,e,s,gg)){oLG.wxVkey=1
}
xKG.wxXCkey=1
oLG.wxXCkey=1
_(bIG,oJG)
var fMG=_mz(z,'uni-richtext',['bind:__l',8,'bind:richList',1,'data-event-opts',2,'uploadUrl',3,'vueId',4],[],e,s,gg)
_(bIG,fMG)
_(lEG,bIG)
var cNG=_mz(z,'choose-image',['bind:__l',13,'bind:imgList',1,'class',2,'data-event-opts',3,'data-ref',4,'langth',5,'vueId',6],[],e,s,gg)
_(lEG,cNG)
_(r,lEG)
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var cQG=_n('view')
_rz(z,cQG,'style',0,e,s,gg)
var oRG=_v()
_(cQG,oRG)
if(_oz(z,1,e,s,gg)){oRG.wxVkey=1
}
var lSG=_v()
_(cQG,lSG)
if(_oz(z,2,e,s,gg)){lSG.wxVkey=1
}
var aTG=_v()
_(cQG,aTG)
if(_oz(z,3,e,s,gg)){aTG.wxVkey=1
}
oRG.wxXCkey=1
lSG.wxXCkey=1
aTG.wxXCkey=1
_(r,cQG)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var oXG=_n('view')
_rz(z,oXG,'class',0,e,s,gg)
var xYG=_v()
_(oXG,xYG)
if(_oz(z,1,e,s,gg)){xYG.wxVkey=1
}
var oZG=_v()
_(oXG,oZG)
if(_oz(z,2,e,s,gg)){oZG.wxVkey=1
}
xYG.wxXCkey=1
oZG.wxXCkey=1
_(r,oXG)
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var h3G=_v()
_(r,h3G)
var o4G=function(o6G,c5G,l7G,gg){
var t9G=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],o6G,c5G,gg)
var e0G=_v()
_(t9G,e0G)
if(_oz(z,7,o6G,c5G,gg)){e0G.wxVkey=1
}
e0G.wxXCkey=1
_(l7G,t9G)
return l7G
}
h3G.wxXCkey=2
_2z(z,2,o4G,e,s,gg,h3G,'row','index','index')
return r
}
e_[x[42]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var oBH=_n('view')
var xCH=_v()
_(oBH,xCH)
if(_oz(z,0,e,s,gg)){xCH.wxVkey=1
}
var oDH=_mz(z,'mpvue-city-picker',['bind:__l',1,'bind:onCancel',1,'bind:onConfirm',2,'class',3,'data-event-opts',4,'data-ref',5,'pickerValueDefault',6,'themeColor',7,'vueId',8],[],e,s,gg)
_(oBH,oDH)
xCH.wxXCkey=1
_(r,oBH)
return r
}
e_[x[43]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
return r
}
e_[x[44]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
var hGH=_n('view')
_rz(z,hGH,'class',0,e,s,gg)
var oHH=_v()
_(hGH,oHH)
if(_oz(z,1,e,s,gg)){oHH.wxVkey=1
}
var cIH=_v()
_(hGH,cIH)
if(_oz(z,2,e,s,gg)){cIH.wxVkey=1
}
oHH.wxXCkey=1
cIH.wxXCkey=1
_(r,hGH)
return r
}
e_[x[45]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
return r
}
e_[x[46]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
var aLH=_n('view')
_rz(z,aLH,'class',0,e,s,gg)
var tMH=_v()
_(aLH,tMH)
if(_oz(z,1,e,s,gg)){tMH.wxVkey=1
}
var eNH=_v()
_(aLH,eNH)
if(_oz(z,2,e,s,gg)){eNH.wxVkey=1
}
tMH.wxXCkey=1
eNH.wxXCkey=1
_(r,aLH)
return r
}
e_[x[47]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
var oPH=_n('view')
var xQH=_v()
_(oPH,xQH)
if(_oz(z,0,e,s,gg)){xQH.wxVkey=1
}
var oRH=_v()
_(oPH,oRH)
if(_oz(z,1,e,s,gg)){oRH.wxVkey=1
}
xQH.wxXCkey=1
oRH.wxXCkey=1
_(r,oPH)
return r
}
e_[x[48]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
return r
}
e_[x[49]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m50=function(e,s,r,gg){
var z=gz$gwx_51()
return r
}
e_[x[50]]={f:m50,j:[],i:[],ti:[],ic:[]}
d_[x[51]]={}
var m51=function(e,s,r,gg){
var z=gz$gwx_52()
return r
}
e_[x[51]]={f:m51,j:[],i:[],ti:[],ic:[]}
d_[x[52]]={}
var m52=function(e,s,r,gg){
var z=gz$gwx_53()
var cWH=_mz(z,'choose-image',['bind:__l',0,'bind:imgList',1,'class',1,'data-event-opts',2,'data-ref',3,'langth',4,'vueId',5],[],e,s,gg)
_(r,cWH)
return r
}
e_[x[52]]={f:m52,j:[],i:[],ti:[],ic:[]}
d_[x[53]]={}
var m53=function(e,s,r,gg){
var z=gz$gwx_54()
return r
}
e_[x[53]]={f:m53,j:[],i:[],ti:[],ic:[]}
d_[x[54]]={}
var m54=function(e,s,r,gg){
var z=gz$gwx_55()
var aZH=_n('view')
_rz(z,aZH,'class',0,e,s,gg)
var t1H=_v()
_(aZH,t1H)
if(_oz(z,1,e,s,gg)){t1H.wxVkey=1
var o4H=_mz(z,'form',['bindreset',2,'bindsubmit',1,'data-event-opts',2],[],e,s,gg)
var x5H=_v()
_(o4H,x5H)
if(_oz(z,5,e,s,gg)){x5H.wxVkey=1
}
x5H.wxXCkey=1
_(t1H,o4H)
}
var e2H=_v()
_(aZH,e2H)
if(_oz(z,6,e,s,gg)){e2H.wxVkey=1
}
var b3H=_v()
_(aZH,b3H)
if(_oz(z,7,e,s,gg)){b3H.wxVkey=1
}
var o6H=_mz(z,'choose-image',['bind:__l',8,'bind:imgList',1,'class',2,'data-event-opts',3,'data-ref',4,'langth',5,'vueId',6],[],e,s,gg)
_(aZH,o6H)
t1H.wxXCkey=1
e2H.wxXCkey=1
b3H.wxXCkey=1
_(r,aZH)
return r
}
e_[x[54]]={f:m54,j:[],i:[],ti:[],ic:[]}
d_[x[55]]={}
var m55=function(e,s,r,gg){
var z=gz$gwx_56()
return r
}
e_[x[55]]={f:m55,j:[],i:[],ti:[],ic:[]}
d_[x[56]]={}
var m56=function(e,s,r,gg){
var z=gz$gwx_57()
return r
}
e_[x[56]]={f:m56,j:[],i:[],ti:[],ic:[]}
d_[x[57]]={}
var m57=function(e,s,r,gg){
var z=gz$gwx_58()
return r
}
e_[x[57]]={f:m57,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/tabBar/home/home","pages/tabBar/issue/issue","pages/tabBar/issue/issues","pages/tabBar/cart/cart","pages/tabBar/user/user","pages/goods/goods","pages/login/login","pages/login/register","pages/login/resetpasswd","pages/user/realName/realName","pages/order/bidding","pages/order/confirmation","pages/user/setting/setting","pages/user/competitive/competitive","pages/user/myname/myname","pages/user/account/account","pages/search/search","pages/user/account/password/password","pages/user/account/phone/phone","pages/user/account/mail/mail","pages/user/signature/signature","pages/integral/integral","pages/user/security/security","pages/user/language/language","pages/user/myQR/myQR","pages/msg/msg","pages/msg/friend/friend","pages/msg/address/address","pages/msg/userinfo/userinfo","pages/msg/search/search","pages/msg/chat/chat","pages/user/coupon/coupon","pages/product/product","pages/shop/shop","pages/shop/shopType/shopType","pages/shop/shopInfo/shopInfo","pages/shop/shopPicture/shopPicture","pages/shop/Decoration/Decoration","pages/product/addProduct/addProduct","pages/user/personal/personal","pages/user/personal/phone/phone","pages/user/personal/mail/mail","pages/user/keep/keep","pages/user/address/address","pages/user/address/edit/edit","pages/user/deposit/deposit","pages/pay/payment/payment","pages/pay/success/success","pages/goods/ratings/ratings","pages/shop/check/check","pages/shop/shopDetails/shopDetails"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff"},"tabBar":{"color":"#333333","selectedColor":"#e84148","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/tabBar/home/home","iconPath":"static/img/tabBar/home.png","selectedIconPath":"static/img/tabBar/home-on.png","text":"首页"},{"pagePath":"pages/tabBar/category/category","iconPath":"static/img/tabBar/category.png","selectedIconPath":"static/img/tabBar/category-on.png","text":"分类"},{"pagePath":"pages/tabBar/issue/issues","iconPath":"static/img/tabBar/issue_1.png","selectedIconPath":"static/img/tabBar/issue.png","text":"发布"},{"pagePath":"pages/msg/msg","iconPath":"static/img/tabBar/message_1.png","selectedIconPath":"static/img/tabBar/message.png","text":"消息"},{"pagePath":"pages/tabBar/user/user","iconPath":"static/img/tabBar/user.png","selectedIconPath":"static/img/tabBar/user-on.png","text":"我的"}]},"nvue":{"pages":{"pages/user/order_list/order_list.html":{"window":{"usingComponents":{},"navigationBarTitleText":"我的订单","navigationBarBackgroundColor":"#e84148","backgroundColorTop":"#f3f3f3","backgroundColorBottom":"#ffffff"},"nvue":true},"pages/goods/goods-list/goods-list.html":{"window":{"usingComponents":{},"navigationBarTitleText":"","enablePullDownRefresh":true,"bounce":"none"},"nvue":true},"pages/tabBar/category/category.html":{"window":{"usingComponents":{},"navigationBarTextStyle":"black","titleNView":false,"bounce":"none"},"nvue":true}}},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"maoyi","compilerVersion":"2.2.2","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/chooseImage.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/chooseImage.wxml']=$gwx('./components/chooseImage.wxml');

__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.wxml']=$gwx('./components/mpvue-citypicker/mpvueCityPicker.wxml');

__wxAppCode__['components/uni-icon/uni-icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-icon/uni-icon.wxml']=$gwx('./components/uni-icon/uni-icon.wxml');

__wxAppCode__['components/uni-indexed-list/uni-indexed-list.json']={"usingComponents":{"uni-icon":"/components/uni-icon/uni-icon"},"component":true};
__wxAppCode__['components/uni-indexed-list/uni-indexed-list.wxml']=$gwx('./components/uni-indexed-list/uni-indexed-list.wxml');

__wxAppCode__['components/uni-richtext.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-richtext.wxml']=$gwx('./components/uni-richtext.wxml');

__wxAppCode__['components/uni-steps/uni-steps.json']={"usingComponents":{"uni-icon":"/components/uni-icon/uni-icon"},"component":true};
__wxAppCode__['components/uni-steps/uni-steps.wxml']=$gwx('./components/uni-steps/uni-steps.wxml');

__wxAppCode__['pages/goods/goods.json']={"navigationBarTitleText":"","navigationBarBackgroundColor":"#e84148","onReachBottomDistance":50,"titleNView":false,"bounce":"none","usingComponents":{"uni-steps":"/components/uni-steps/uni-steps"}};
__wxAppCode__['pages/goods/goods.wxml']=$gwx('./pages/goods/goods.wxml');

__wxAppCode__['pages/goods/ratings/ratings.json']={"navigationBarTitleText":"用户报价","enablePullDownRefresh":true,"onReachBottomDistance":50,"backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/goods/ratings/ratings.wxml']=$gwx('./pages/goods/ratings/ratings.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTextStyle":"black","enablePullDownRefresh":true,"onReachBottomDistance":50,"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/integral/integral.json']={"navigationBarBackgroundColor":"#e84148","navigationBarTitleText":"积分管理","navigationBarTextStyle":"white","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/integral/integral.wxml']=$gwx('./pages/integral/integral.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"登录","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","bounce":"none","softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/login/register.json']={"navigationBarTitleText":"注册账号","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","bounce":"none","softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/login/register.wxml']=$gwx('./pages/login/register.wxml');

__wxAppCode__['pages/login/resetpasswd.json']={"navigationBarTitleText":"重置密码","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","bounce":"none","softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/login/resetpasswd.wxml']=$gwx('./pages/login/resetpasswd.wxml');

__wxAppCode__['pages/msg/address/address.json']={"enablePullDownRefresh":true,"navigationBarTitleText":"通讯录","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","usingComponents":{"uni-indexed-list":"/components/uni-indexed-list/uni-indexed-list"}};
__wxAppCode__['pages/msg/address/address.wxml']=$gwx('./pages/msg/address/address.wxml');

__wxAppCode__['pages/msg/chat/chat.json']={"navigationBarBackgroundColor":"#e84148","backgroundColorTop":"#e5e5e5","backgroundColorBottom":"#e5e5e5","navigationBarTextStyle":"white","softinputNavBar":"none","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/msg/chat/chat.wxml']=$gwx('./pages/msg/chat/chat.wxml');

__wxAppCode__['pages/msg/friend/friend.json']={"enablePullDownRefresh":true,"navigationBarTitleText":"添加好友","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/msg/friend/friend.wxml']=$gwx('./pages/msg/friend/friend.wxml');

__wxAppCode__['pages/msg/msg.json']={"enablePullDownRefresh":true,"navigationBarTitleText":"消息列表","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","bounce":"none","titleNView":{"buttons":[{"text":"+"}]},"usingComponents":{}};
__wxAppCode__['pages/msg/msg.wxml']=$gwx('./pages/msg/msg.wxml');

__wxAppCode__['pages/msg/search/search.json']={"enablePullDownRefresh":true,"navigationBarTitleText":"","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","bounce":"none","titleNView":{"searchInput":{"backgroundColor":"#fff","borderRadius":"5px","placeholder":"用户名/店铺名","disabled":false,"align":"left","autoFocus":true}},"usingComponents":{}};
__wxAppCode__['pages/msg/search/search.wxml']=$gwx('./pages/msg/search/search.wxml');

__wxAppCode__['pages/msg/userinfo/userinfo.json']={"enablePullDownRefresh":true,"navigationBarTitleText":"个人资料","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/msg/userinfo/userinfo.wxml']=$gwx('./pages/msg/userinfo/userinfo.wxml');

__wxAppCode__['pages/order/bidding.json']={"navigationBarTitleText":"投标","softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/order/bidding.wxml']=$gwx('./pages/order/bidding.wxml');

__wxAppCode__['pages/order/confirmation.json']={"navigationBarTitleText":"确认订单","softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/order/confirmation.wxml']=$gwx('./pages/order/confirmation.wxml');

__wxAppCode__['pages/pay/payment/payment.json']={"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"订单支付","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/pay/payment/payment.wxml']=$gwx('./pages/pay/payment/payment.wxml');

__wxAppCode__['pages/pay/success/success.json']={"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"支付成功","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/pay/success/success.wxml']=$gwx('./pages/pay/success/success.wxml');

__wxAppCode__['pages/product/addProduct/addProduct.json']={"navigationBarTitleText":"添加商品","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","usingComponents":{"uni-richtext":"/components/uni-richtext","choose-image":"/components/chooseImage"}};
__wxAppCode__['pages/product/addProduct/addProduct.wxml']=$gwx('./pages/product/addProduct/addProduct.wxml');

__wxAppCode__['pages/product/product.json']={"navigationBarTitleText":"我的产品","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","bounce":"none","titleNView":{"buttons":[{"text":"+"}]},"usingComponents":{}};
__wxAppCode__['pages/product/product.wxml']=$gwx('./pages/product/product.wxml');

__wxAppCode__['pages/search/search.json']={"navigationBarBackgroundColor":"#e84148","navigationBarTitleText":"","backgroundColorTop":"#ffffff","navigationBarTextStyle":"white","backgroundColorBottom":"#f3f3f3","bounce":"none","titleNView":{"searchInput":{"align":"left","borderRadius":"50px","placeholder":"搜索感兴趣商品"},"buttons":[{"float":"right","fontSize":"14px","text":"搜索"}]},"usingComponents":{}};
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

__wxAppCode__['pages/shop/check/check.json']={"navigationBarTitleText":"企业认证","enablePullDownRefresh":true,"onReachBottomDistance":50,"backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#e84148","titleNView":{},"usingComponents":{"choose-image":"/components/chooseImage"}};
__wxAppCode__['pages/shop/check/check.wxml']=$gwx('./pages/shop/check/check.wxml');

__wxAppCode__['pages/shop/Decoration/Decoration.json']={"navigationBarTitleText":"商铺装修","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","titleNView":{"buttons":[{"text":"√","fontSize":"24px"}]},"usingComponents":{"choose-image":"/components/chooseImage"}};
__wxAppCode__['pages/shop/Decoration/Decoration.wxml']=$gwx('./pages/shop/Decoration/Decoration.wxml');

__wxAppCode__['pages/shop/shop.json']={"navigationBarTitleText":"我的店铺","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","titleNView":{"type":"transparent"},"usingComponents":{}};
__wxAppCode__['pages/shop/shop.wxml']=$gwx('./pages/shop/shop.wxml');

__wxAppCode__['pages/shop/shopDetails/shopDetails.json']={"navigationBarTitleText":"店铺详情","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","titleNView":{"type":"transparent"},"usingComponents":{}};
__wxAppCode__['pages/shop/shopDetails/shopDetails.wxml']=$gwx('./pages/shop/shopDetails/shopDetails.wxml');

__wxAppCode__['pages/shop/shopInfo/shopInfo.json']={"navigationBarTitleText":"商铺信息","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","titleNView":{"buttons":[{"text":"√","fontSize":"24px"}]},"usingComponents":{"choose-image":"/components/chooseImage"}};
__wxAppCode__['pages/shop/shopInfo/shopInfo.wxml']=$gwx('./pages/shop/shopInfo/shopInfo.wxml');

__wxAppCode__['pages/shop/shopPicture/shopPicture.json']={"navigationBarTitleText":"商铺信息","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","titleNView":{},"usingComponents":{"choose-image":"/components/chooseImage"}};
__wxAppCode__['pages/shop/shopPicture/shopPicture.wxml']=$gwx('./pages/shop/shopPicture/shopPicture.wxml');

__wxAppCode__['pages/shop/shopType/shopType.json']={"navigationBarTitleText":"商铺管理","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/shop/shopType/shopType.wxml']=$gwx('./pages/shop/shopType/shopType.wxml');

__wxAppCode__['pages/tabBar/cart/cart.json']={"enablePullDownRefresh":true,"navigationBarTextStyle":"black","titleNView":false,"softinputNavBar":"none","subNVues":[{"id":"cartTitleNvue","path":"pages/tabBar/cart/subNvue/cartTitleNvue","type":"navigationBar"}],"usingComponents":{}};
__wxAppCode__['pages/tabBar/cart/cart.wxml']=$gwx('./pages/tabBar/cart/cart.wxml');

__wxAppCode__['pages/tabBar/home/home.json']={"navigationBarTextStyle":"black","enablePullDownRefresh":true,"onReachBottomDistance":50,"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/tabBar/home/home.wxml']=$gwx('./pages/tabBar/home/home.wxml');

__wxAppCode__['pages/tabBar/issue/issue.json']={"navigationBarTitleText":"发布需求","backgroundTextStyle":"light","navigationBarBackgroundColor":"#e84148","backgroundColorTop":"#FFFFFF","navigationBarTextStyle":"white","titleNView":true,"bounce":"none","usingComponents":{"uni-richtext":"/components/uni-richtext","choose-image":"/components/chooseImage"}};
__wxAppCode__['pages/tabBar/issue/issue.wxml']=$gwx('./pages/tabBar/issue/issue.wxml');

__wxAppCode__['pages/tabBar/issue/issues.json']={"navigationBarTitleText":"发布需求","backgroundTextStyle":"light","navigationBarBackgroundColor":"#e84148","backgroundColorTop":"#FFFFFF","navigationBarTextStyle":"white","titleNView":true,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/tabBar/issue/issues.wxml']=$gwx('./pages/tabBar/issue/issues.wxml');

__wxAppCode__['pages/tabBar/user/user.json']={"enablePullDownRefresh":true,"backgroundTextStyle":"light","navigationBarBackgroundColor":"#e84148","backgroundColorTop":"#e84148","navigationBarTextStyle":"white","titleNView":false,"subNVues":[{"id":"userTitleNvue","path":"pages/tabBar/user/subNvue/userTitleNvue","type":"navigationBar"}],"usingComponents":{}};
__wxAppCode__['pages/tabBar/user/user.wxml']=$gwx('./pages/tabBar/user/user.wxml');

__wxAppCode__['pages/user/account/account.json']={"navigationBarBackgroundColor":"#e84148","navigationBarTitleText":"账号管理","backgroundColorTop":"#ffffff","navigationBarTextStyle":"white","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/user/account/account.wxml']=$gwx('./pages/user/account/account.wxml');

__wxAppCode__['pages/user/account/mail/mail.json']={"navigationBarBackgroundColor":"#e84148","navigationBarTitleText":"邮箱认证","backgroundColorTop":"#ffffff","navigationBarTextStyle":"white","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/user/account/mail/mail.wxml']=$gwx('./pages/user/account/mail/mail.wxml');

__wxAppCode__['pages/user/account/password/password.json']={"navigationBarBackgroundColor":"#e84148","navigationBarTitleText":"修改密码","backgroundColorTop":"#ffffff","navigationBarTextStyle":"white","backgroundColorBottom":"#f3f3f3","bounce":"none","titleNView":{"buttons":[{"text":"√"}]},"usingComponents":{}};
__wxAppCode__['pages/user/account/password/password.wxml']=$gwx('./pages/user/account/password/password.wxml');

__wxAppCode__['pages/user/account/phone/phone.json']={"navigationBarBackgroundColor":"#e84148","navigationBarTitleText":"手机认证","backgroundColorTop":"#ffffff","navigationBarTextStyle":"white","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/user/account/phone/phone.wxml']=$gwx('./pages/user/account/phone/phone.wxml');

__wxAppCode__['pages/user/address/address.json']={"navigationBarBackgroundColor":"#e84148","navigationBarTitleText":"地址管理","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/user/address/address.wxml']=$gwx('./pages/user/address/address.wxml');

__wxAppCode__['pages/user/address/edit/edit.json']={"navigationBarBackgroundColor":"#e84148","navigationBarTitleText":"编辑收件人地址","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{"mpvue-city-picker":"/components/mpvue-citypicker/mpvueCityPicker"}};
__wxAppCode__['pages/user/address/edit/edit.wxml']=$gwx('./pages/user/address/edit/edit.wxml');

__wxAppCode__['pages/user/competitive/competitive.json']={"navigationBarBackgroundColor":"#e84148","navigationBarTitleText":"竞标","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/user/competitive/competitive.wxml']=$gwx('./pages/user/competitive/competitive.wxml');

__wxAppCode__['pages/user/coupon/coupon.json']={"navigationBarTitleText":"优惠券","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/user/coupon/coupon.wxml']=$gwx('./pages/user/coupon/coupon.wxml');

__wxAppCode__['pages/user/deposit/deposit.json']={"navigationBarBackgroundColor":"#e84148","navigationBarTitleText":"充值","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/user/deposit/deposit.wxml']=$gwx('./pages/user/deposit/deposit.wxml');

__wxAppCode__['pages/user/keep/keep.json']={"navigationBarTitleText":"我的收藏","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/user/keep/keep.wxml']=$gwx('./pages/user/keep/keep.wxml');

__wxAppCode__['pages/user/language/language.json']={"navigationBarBackgroundColor":"#f8f8f8","navigationBarTitleText":"选择语言","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","titleNView":false,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/user/language/language.wxml']=$gwx('./pages/user/language/language.wxml');

__wxAppCode__['pages/user/myname/myname.json']={"navigationBarBackgroundColor":"#e84148","navigationBarTitleText":"昵称","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/user/myname/myname.wxml']=$gwx('./pages/user/myname/myname.wxml');

__wxAppCode__['pages/user/myQR/myQR.json']={"navigationBarTitleText":"我的二维码","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/user/myQR/myQR.wxml']=$gwx('./pages/user/myQR/myQR.wxml');

__wxAppCode__['pages/user/personal/mail/mail.json']={"navigationBarTitleText":"邮箱地址","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/user/personal/mail/mail.wxml']=$gwx('./pages/user/personal/mail/mail.wxml');

__wxAppCode__['pages/user/personal/personal.json']={"navigationBarTitleText":"个人资料","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","usingComponents":{"choose-image":"/components/chooseImage"}};
__wxAppCode__['pages/user/personal/personal.wxml']=$gwx('./pages/user/personal/personal.wxml');

__wxAppCode__['pages/user/personal/phone/phone.json']={"navigationBarTitleText":"手机号码","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/user/personal/phone/phone.wxml']=$gwx('./pages/user/personal/phone/phone.wxml');

__wxAppCode__['pages/user/realName/realName.json']={"navigationBarTitleText":"实名认证","navigationBarBackgroundColor":"#e84148","navigationBarTextStyle":"white","bounce":"none","softinputNavBar":"none","usingComponents":{"choose-image":"/components/chooseImage"}};
__wxAppCode__['pages/user/realName/realName.wxml']=$gwx('./pages/user/realName/realName.wxml');

__wxAppCode__['pages/user/security/security.json']={"navigationBarBackgroundColor":"#e84148","navigationBarTitleText":"账号安全","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/user/security/security.wxml']=$gwx('./pages/user/security/security.wxml');

__wxAppCode__['pages/user/setting/setting.json']={"navigationBarBackgroundColor":"#e84148","navigationBarTitleText":"设置","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/user/setting/setting.wxml']=$gwx('./pages/user/setting/setting.wxml');

__wxAppCode__['pages/user/signature/signature.json']={"navigationBarBackgroundColor":"#e84148","navigationBarTitleText":"个性签名","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/user/signature/signature.wxml']=$gwx('./pages/user/signature/signature.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"20ba":function(n,e,t){},"2d69":function(n,e,t){"use strict";var o=t("20ba"),a=t.n(o);a.a},"74a1":function(n,e,t){"use strict";t.r(e);var o=t("d601"),a=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);e["default"]=a.a},d2d3:function(n,e,t){"use strict";t.r(e);var o=t("74a1");for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);t("2d69");var u,l,c=t("2877"),i=Object(c["a"])(o["default"],u,l,!1,null,null,null);e["default"]=i.exports},d601:function(n,e,t){"use strict";(function(n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;t("3022");var a={onLaunch:function(){console.log(n("App Launch",this.baseUrl," at App.vue:5"));var e=o.getStorageInfoSync("lang");console.log(n(e," at App.vue:7")),o.getSystemInfo({success:function(n){o.showModal({title:n.language}),"zh-CN"==n.language?o.setStorage({key:"lang",data:"zh"}):o.setStorage({key:"lang",data:"en"})}})},onShow:function(){console.log(n("App Show"," at App.vue:35"))},onHide:function(){console.log(n("App Hide"," at App.vue:38"))}};e.default=a}).call(this,t("0de9")["default"],t("6e42")["default"])}},[["8184","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var o, r, c = n[0], s = n[1], a = n[2], p = 0, l = []; p < c.length; p++) {
      r = c[p], i[r] && l.push(i[r][0]), i[r] = 0;
    }

    for (o in s) {
      Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
    }

    m && m(n);

    while (l.length) {
      l.shift()();
    }

    return u.push.apply(u, a || []), t();
  }

  function t() {
    for (var e, n = 0; n < u.length; n++) {
      for (var t = u[n], o = !0, r = 1; r < t.length; r++) {
        var c = t[r];
        0 !== i[c] && (o = !1);
      }

      o && (u.splice(n--, 1), e = s(s.s = t[0]));
    }

    return e;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      u = [];

  function c(e) {
    return s.p + "" + e + ".js";
  }

  function s(n) {
    if (o[n]) return o[n].exports;
    var t = o[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, s), t.l = !0, t.exports;
  }

  s.e = function (e) {
    var n = [],
        t = {
      "components/chooseImage": 1,
      "components/uni-richtext": 1,
      "components/uni-steps/uni-steps": 1,
      "components/uni-indexed-list/uni-indexed-list": 1,
      "components/mpvue-citypicker/mpvueCityPicker": 1,
      "components/uni-icon/uni-icon": 1
    };
    r[e] ? n.push(r[e]) : 0 !== r[e] && t[e] && n.push(r[e] = new Promise(function (n, t) {
      for (var o = ({
        "components/chooseImage": "components/chooseImage",
        "components/uni-richtext": "components/uni-richtext",
        "components/uni-steps/uni-steps": "components/uni-steps/uni-steps",
        "components/uni-indexed-list/uni-indexed-list": "components/uni-indexed-list/uni-indexed-list",
        "components/mpvue-citypicker/mpvueCityPicker": "components/mpvue-citypicker/mpvueCityPicker",
        "components/uni-icon/uni-icon": "components/uni-icon/uni-icon"
      }[e] || e) + ".wxss", i = s.p + o, u = document.getElementsByTagName("link"), c = 0; c < u.length; c++) {
        var a = u[c],
            p = a.getAttribute("data-href") || a.getAttribute("href");
        if ("stylesheet" === a.rel && (p === o || p === i)) return n();
      }

      var l = document.getElementsByTagName("style");

      for (c = 0; c < l.length; c++) {
        a = l[c], p = a.getAttribute("data-href");
        if (p === o || p === i) return n();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = n, m.onerror = function (n) {
        var o = n && n.target && n.target.src || i,
            u = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        u.request = o, delete r[e], m.parentNode.removeChild(m), t(u);
      }, m.href = i;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(m);
    }).then(function () {
      r[e] = 0;
    }));
    var o = i[e];
    if (0 !== o) if (o) n.push(o[2]);else {
      var u = new Promise(function (n, t) {
        o = i[e] = [n, t];
      });
      n.push(o[2] = u);
      var a,
          p = document.createElement("script");
      p.charset = "utf-8", p.timeout = 120, s.nc && p.setAttribute("nonce", s.nc), p.src = c(e), a = function a(n) {
        p.onerror = p.onload = null, clearTimeout(l);
        var t = i[e];

        if (0 !== t) {
          if (t) {
            var o = n && ("load" === n.type ? "missing" : n.type),
                r = n && n.target && n.target.src,
                u = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
            u.type = o, u.request = r, t[1](u);
          }

          i[e] = void 0;
        }
      };
      var l = setTimeout(function () {
        a({
          type: "timeout",
          target: p
        });
      }, 12e4);
      p.onerror = p.onload = a, document.head.appendChild(p);
    }
    return Promise.all(n);
  }, s.m = e, s.c = o, s.d = function (e, n, t) {
    s.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, s.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, n) {
    if (1 & n && (e = s(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (s.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) {
      s.d(t, o, function (n) {
        return e[n];
      }.bind(null, o));
    }
    return t;
  }, s.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(n, "a", n), n;
  }, s.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, s.p = "/", s.oe = function (e) {
    throw console.error(e), e;
  };
  var a = global["webpackJsonp"] = global["webpackJsonp"] || [],
      p = a.push.bind(a);
  a.push = n, a = a.slice();

  for (var l = 0; l < a.length; l++) {
    n(a[l]);
  }

  var m = p;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0574":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("ba2d"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"08fd":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("8468"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"0948":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("8906"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"09ad":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("39bc"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"0de9":function(e,l,a){"use strict";function u(e){var l=Object.prototype.toString.call(e);return l.substring(8,l.length-1)}function t(){for(var e=arguments.length,l=new Array(e),a=0;a<e;a++)l[a]=arguments[a];var t=l.map(function(e){var l=Object.prototype.toString.call(e);if("[object object]"===l.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(t){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var a=u(e).toUpperCase();e="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+e+"---END:"+a+"---":String(e)}return e}),n="";if(t.length>1){var r=t.pop();n=t.join("---COMMA---"),0===r.indexOf(" at ")?n+=r:n+="---COMMA---"+r}else n=t[0];return n}Object.defineProperty(l,"__esModule",{value:!0}),l.default=t},"0ff2":function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */!function(){function t(e){if(e)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=l;else if(a){var u=new ArrayBuffer(68);this.buffer8=new Uint8Array(u),this.blocks=new Uint32Array(u)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="input is invalid type",e="object"==typeof window,i=e?window:{};i.JS_MD5_NO_WINDOW&&(e=!1);var s=!e&&"object"==typeof self,h=!i.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;h?i=global:s&&(i=self);var f=!i.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,o=__webpack_require__("3c35"),a=!i.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,n="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],y=[0,8,16,24],c=["hex","array","digest","buffer","arrayBuffer","base64"],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],l;if(a){var A=new ArrayBuffer(68);l=new Uint8Array(A),d=new Uint32Array(A)}!i.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!a||!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var b=function(e){return function(l){return new t(!0).update(l)[e]()}},v=function(){var e=b("hex");h&&(e=w(e)),e.create=function(){return new t},e.update=function(l){return e.create().update(l)};for(var l=0;l<c.length;++l){var a=c[l];e[a]=b(a)}return e},w=function w(t){var e=eval("require('crypto')"),i=eval("require('buffer').Buffer"),s=function(l){if("string"==typeof l)return e.createHash("md5").update(l,"utf8").digest("hex");if(null===l||void 0===l)throw r;return l.constructor===ArrayBuffer&&(l=new Uint8Array(l)),Array.isArray(l)||ArrayBuffer.isView(l)||l.constructor===i?e.createHash("md5").update(new i(l)).digest("hex"):t(l)};return s};t.prototype.update=function(e){if(!this.finalized){var l,u=typeof e;if("string"!==u){if("object"!==u)throw r;if(null===e)throw r;if(a&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||a&&ArrayBuffer.isView(e)))throw r;l=!0}for(var t,n,i=0,v=e.length,o=this.blocks,b=this.buffer8;i<v;){if(this.hashed&&(this.hashed=!1,o[0]=o[16],o[16]=o[1]=o[2]=o[3]=o[4]=o[5]=o[6]=o[7]=o[8]=o[9]=o[10]=o[11]=o[12]=o[13]=o[14]=o[15]=0),l)if(a)for(n=this.start;i<v&&n<64;++i)b[n++]=e[i];else for(n=this.start;i<v&&n<64;++i)o[n>>2]|=e[i]<<y[3&n++];else if(a)for(n=this.start;i<v&&n<64;++i)(t=e.charCodeAt(i))<128?b[n++]=t:t<2048?(b[n++]=192|t>>6,b[n++]=128|63&t):t<55296||t>=57344?(b[n++]=224|t>>12,b[n++]=128|t>>6&63,b[n++]=128|63&t):(t=65536+((1023&t)<<10|1023&e.charCodeAt(++i)),b[n++]=240|t>>18,b[n++]=128|t>>12&63,b[n++]=128|t>>6&63,b[n++]=128|63&t);else for(n=this.start;i<v&&n<64;++i)(t=e.charCodeAt(i))<128?o[n>>2]|=t<<y[3&n++]:t<2048?(o[n>>2]|=(192|t>>6)<<y[3&n++],o[n>>2]|=(128|63&t)<<y[3&n++]):t<55296||t>=57344?(o[n>>2]|=(224|t>>12)<<y[3&n++],o[n>>2]|=(128|t>>6&63)<<y[3&n++],o[n>>2]|=(128|63&t)<<y[3&n++]):(t=65536+((1023&t)<<10|1023&e.charCodeAt(++i)),o[n>>2]|=(240|t>>18)<<y[3&n++],o[n>>2]|=(128|t>>12&63)<<y[3&n++],o[n>>2]|=(128|t>>6&63)<<y[3&n++],o[n>>2]|=(128|63&t)<<y[3&n++]);this.lastByteIndex=n,this.bytes+=n-this.start,n>=64?(this.start=n-64,this.hash(),this.hashed=!0):this.start=n}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,l=this.lastByteIndex;e[l>>2]|=u[3&l],l>=56&&(this.hashed||this.hash(),e[0]=e[16],e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.bytes<<3,e[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var e,l,a,u,t,n,r=this.blocks;this.first?l=((l=((e=((e=r[0]-680876937)<<7|e>>>25)-271733879<<0)^(a=((a=(-271733879^(u=((u=(-1732584194^2004318071&e)+r[1]-117830708)<<12|u>>>20)+e<<0)&(-271733879^e))+r[2]-1126478375)<<17|a>>>15)+u<<0)&(u^e))+r[3]-1316259209)<<22|l>>>10)+a<<0:(e=this.h0,l=this.h1,a=this.h2,l=((l+=((e=((e+=((u=this.h3)^l&(a^u))+r[0]-680876936)<<7|e>>>25)+l<<0)^(a=((a+=(l^(u=((u+=(a^e&(l^a))+r[1]-389564586)<<12|u>>>20)+e<<0)&(e^l))+r[2]+606105819)<<17|a>>>15)+u<<0)&(u^e))+r[3]-1044525330)<<22|l>>>10)+a<<0),l=((l+=((e=((e+=(u^l&(a^u))+r[4]-176418897)<<7|e>>>25)+l<<0)^(a=((a+=(l^(u=((u+=(a^e&(l^a))+r[5]+1200080426)<<12|u>>>20)+e<<0)&(e^l))+r[6]-1473231341)<<17|a>>>15)+u<<0)&(u^e))+r[7]-45705983)<<22|l>>>10)+a<<0,l=((l+=((e=((e+=(u^l&(a^u))+r[8]+1770035416)<<7|e>>>25)+l<<0)^(a=((a+=(l^(u=((u+=(a^e&(l^a))+r[9]-1958414417)<<12|u>>>20)+e<<0)&(e^l))+r[10]-42063)<<17|a>>>15)+u<<0)&(u^e))+r[11]-1990404162)<<22|l>>>10)+a<<0,l=((l+=((e=((e+=(u^l&(a^u))+r[12]+1804603682)<<7|e>>>25)+l<<0)^(a=((a+=(l^(u=((u+=(a^e&(l^a))+r[13]-40341101)<<12|u>>>20)+e<<0)&(e^l))+r[14]-1502002290)<<17|a>>>15)+u<<0)&(u^e))+r[15]+1236535329)<<22|l>>>10)+a<<0,l=((l+=((u=((u+=(l^a&((e=((e+=(a^u&(l^a))+r[1]-165796510)<<5|e>>>27)+l<<0)^l))+r[6]-1069501632)<<9|u>>>23)+e<<0)^e&((a=((a+=(e^l&(u^e))+r[11]+643717713)<<14|a>>>18)+u<<0)^u))+r[0]-373897302)<<20|l>>>12)+a<<0,l=((l+=((u=((u+=(l^a&((e=((e+=(a^u&(l^a))+r[5]-701558691)<<5|e>>>27)+l<<0)^l))+r[10]+38016083)<<9|u>>>23)+e<<0)^e&((a=((a+=(e^l&(u^e))+r[15]-660478335)<<14|a>>>18)+u<<0)^u))+r[4]-405537848)<<20|l>>>12)+a<<0,l=((l+=((u=((u+=(l^a&((e=((e+=(a^u&(l^a))+r[9]+568446438)<<5|e>>>27)+l<<0)^l))+r[14]-1019803690)<<9|u>>>23)+e<<0)^e&((a=((a+=(e^l&(u^e))+r[3]-187363961)<<14|a>>>18)+u<<0)^u))+r[8]+1163531501)<<20|l>>>12)+a<<0,l=((l+=((u=((u+=(l^a&((e=((e+=(a^u&(l^a))+r[13]-1444681467)<<5|e>>>27)+l<<0)^l))+r[2]-51403784)<<9|u>>>23)+e<<0)^e&((a=((a+=(e^l&(u^e))+r[7]+1735328473)<<14|a>>>18)+u<<0)^u))+r[12]-1926607734)<<20|l>>>12)+a<<0,l=((l+=((n=(u=((u+=((t=l^a)^(e=((e+=(t^u)+r[5]-378558)<<4|e>>>28)+l<<0))+r[8]-2022574463)<<11|u>>>21)+e<<0)^e)^(a=((a+=(n^l)+r[11]+1839030562)<<16|a>>>16)+u<<0))+r[14]-35309556)<<23|l>>>9)+a<<0,l=((l+=((n=(u=((u+=((t=l^a)^(e=((e+=(t^u)+r[1]-1530992060)<<4|e>>>28)+l<<0))+r[4]+1272893353)<<11|u>>>21)+e<<0)^e)^(a=((a+=(n^l)+r[7]-155497632)<<16|a>>>16)+u<<0))+r[10]-1094730640)<<23|l>>>9)+a<<0,l=((l+=((n=(u=((u+=((t=l^a)^(e=((e+=(t^u)+r[13]+681279174)<<4|e>>>28)+l<<0))+r[0]-358537222)<<11|u>>>21)+e<<0)^e)^(a=((a+=(n^l)+r[3]-722521979)<<16|a>>>16)+u<<0))+r[6]+76029189)<<23|l>>>9)+a<<0,l=((l+=((n=(u=((u+=((t=l^a)^(e=((e+=(t^u)+r[9]-640364487)<<4|e>>>28)+l<<0))+r[12]-421815835)<<11|u>>>21)+e<<0)^e)^(a=((a+=(n^l)+r[15]+530742520)<<16|a>>>16)+u<<0))+r[2]-995338651)<<23|l>>>9)+a<<0,l=((l+=((u=((u+=(l^((e=((e+=(a^(l|~u))+r[0]-198630844)<<6|e>>>26)+l<<0)|~a))+r[7]+1126891415)<<10|u>>>22)+e<<0)^((a=((a+=(e^(u|~l))+r[14]-1416354905)<<15|a>>>17)+u<<0)|~e))+r[5]-57434055)<<21|l>>>11)+a<<0,l=((l+=((u=((u+=(l^((e=((e+=(a^(l|~u))+r[12]+1700485571)<<6|e>>>26)+l<<0)|~a))+r[3]-1894986606)<<10|u>>>22)+e<<0)^((a=((a+=(e^(u|~l))+r[10]-1051523)<<15|a>>>17)+u<<0)|~e))+r[1]-2054922799)<<21|l>>>11)+a<<0,l=((l+=((u=((u+=(l^((e=((e+=(a^(l|~u))+r[8]+1873313359)<<6|e>>>26)+l<<0)|~a))+r[15]-30611744)<<10|u>>>22)+e<<0)^((a=((a+=(e^(u|~l))+r[6]-1560198380)<<15|a>>>17)+u<<0)|~e))+r[13]+1309151649)<<21|l>>>11)+a<<0,l=((l+=((u=((u+=(l^((e=((e+=(a^(l|~u))+r[4]-145523070)<<6|e>>>26)+l<<0)|~a))+r[11]-1120210379)<<10|u>>>22)+e<<0)^((a=((a+=(e^(u|~l))+r[2]+718787259)<<15|a>>>17)+u<<0)|~e))+r[9]-343485551)<<21|l>>>11)+a<<0,this.first?(this.h0=e+1732584193<<0,this.h1=l-271733879<<0,this.h2=a-1732584194<<0,this.h3=u+271733878<<0,this.first=!1):(this.h0=this.h0+e<<0,this.h1=this.h1+l<<0,this.h2=this.h2+a<<0,this.h3=this.h3+u<<0)},t.prototype.hex=function(){this.finalize();var e=this.h0,l=this.h1,a=this.h2,u=this.h3;return n[e>>4&15]+n[15&e]+n[e>>12&15]+n[e>>8&15]+n[e>>20&15]+n[e>>16&15]+n[e>>28&15]+n[e>>24&15]+n[l>>4&15]+n[15&l]+n[l>>12&15]+n[l>>8&15]+n[l>>20&15]+n[l>>16&15]+n[l>>28&15]+n[l>>24&15]+n[a>>4&15]+n[15&a]+n[a>>12&15]+n[a>>8&15]+n[a>>20&15]+n[a>>16&15]+n[a>>28&15]+n[a>>24&15]+n[u>>4&15]+n[15&u]+n[u>>12&15]+n[u>>8&15]+n[u>>20&15]+n[u>>16&15]+n[u>>28&15]+n[u>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var e=this.h0,l=this.h1,a=this.h2,u=this.h3;return[255&e,e>>8&255,e>>16&255,e>>24&255,255&l,l>>8&255,l>>16&255,l>>24&255,255&a,a>>8&255,a>>16&255,a>>24&255,255&u,u>>8&255,u>>16&255,u>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(16),l=new Uint32Array(e);return l[0]=this.h0,l[1]=this.h1,l[2]=this.h2,l[3]=this.h3,e},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var e,l,a,u="",t=this.array(),n=0;n<15;)e=t[n++],l=t[n++],a=t[n++],u+=p[e>>>2]+p[63&(e<<4|l>>>4)]+p[63&(l<<2|a>>>6)]+p[63&a];return e=t[n],u+(p[e>>>2]+p[e<<4&63]+"==")};var _=v();f?module.exports=_:(i.md5=_,o&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return _}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},1222:function(e,l,a){},1229:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("ea64"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"13fd":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("2ec4"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},1521:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("2daa"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},1745:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("093c"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},1950:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("b3d1"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"1a8c":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("e2b8"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"1aa9":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("62c3"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"1b67":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("d95d"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"229f":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("bdfa"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},2877:function(e,l,a){"use strict";function u(e,l,a,u,t,n,r,i){var v,o="function"===typeof e?e.options:e;if(l&&(o.render=l,o.staticRenderFns=a,o._compiled=!0),u&&(o.functional=!0),n&&(o._scopeId="data-v-"+n),r?(v=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},o._ssrRegister=v):t&&(v=i?function(){t.call(this,this.$root.$options.shadowRoot)}:t),v)if(o.functional){o._injectStyles=v;var b=o.render;o.render=function(e,l){return v.call(l),b(e,l)}}else{var s=o.beforeCreate;o.beforeCreate=s?[].concat(s,v):[v]}return{exports:e,options:o}}a.d(l,"a",function(){return u})},"2e75":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("994d"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"2eb2":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("ca46"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"2f62":function(e,l,a){"use strict";a.r(l),a.d(l,"Store",function(){return d}),a.d(l,"install",function(){return j}),a.d(l,"mapState",function(){return P}),a.d(l,"mapMutations",function(){return E}),a.d(l,"mapGetters",function(){return M}),a.d(l,"mapActions",function(){return C}),a.d(l,"createNamespacedHelpers",function(){return T});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var u=function(e){var l=Number(e.version.split(".")[0]);if(l>=2)e.mixin({beforeCreate:u});else{var a=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[u].concat(e.init):u,a.call(this,e)}}function u(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}},t="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function n(e){t&&(e._devtoolHook=t,t.emit("vuex:init",e),t.on("vuex:travel-to-state",function(l){e.replaceState(l)}),e.subscribe(function(e,l){t.emit("vuex:mutation",e,l)}))}function r(e,l){Object.keys(e).forEach(function(a){return l(e[a],a)})}function i(e){return null!==e&&"object"===typeof e}function v(e){return e&&"function"===typeof e.then}var o=function(e,l){this.runtime=l,this._children=Object.create(null),this._rawModule=e;var a=e.state;this.state=("function"===typeof a?a():a)||{}},b={namespaced:{configurable:!0}};b.namespaced.get=function(){return!!this._rawModule.namespaced},o.prototype.addChild=function(e,l){this._children[e]=l},o.prototype.removeChild=function(e){delete this._children[e]},o.prototype.getChild=function(e){return this._children[e]},o.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},o.prototype.forEachChild=function(e){r(this._children,e)},o.prototype.forEachGetter=function(e){this._rawModule.getters&&r(this._rawModule.getters,e)},o.prototype.forEachAction=function(e){this._rawModule.actions&&r(this._rawModule.actions,e)},o.prototype.forEachMutation=function(e){this._rawModule.mutations&&r(this._rawModule.mutations,e)},Object.defineProperties(o.prototype,b);var s=function(e){this.register([],e,!1)};function c(e,l,a){if(l.update(a),a.modules)for(var u in a.modules){if(!l.getChild(u))return void 0;c(e.concat(u),l.getChild(u),a.modules[u])}}s.prototype.get=function(e){return e.reduce(function(e,l){return e.getChild(l)},this.root)},s.prototype.getNamespace=function(e){var l=this.root;return e.reduce(function(e,a){return l=l.getChild(a),e+(l.namespaced?a+"/":"")},"")},s.prototype.update=function(e){c([],this.root,e)},s.prototype.register=function(e,l,a){var u=this;void 0===a&&(a=!0);var t=new o(l,a);if(0===e.length)this.root=t;else{var n=this.get(e.slice(0,-1));n.addChild(e[e.length-1],t)}l.modules&&r(l.modules,function(l,t){u.register(e.concat(t),l,a)})},s.prototype.unregister=function(e){var l=this.get(e.slice(0,-1)),a=e[e.length-1];l.getChild(a).runtime&&l.removeChild(a)};var f;var d=function(e){var l=this;void 0===e&&(e={}),!f&&"undefined"!==typeof window&&window.Vue&&j(window.Vue);var a=e.plugins;void 0===a&&(a=[]);var u=e.strict;void 0===u&&(u=!1);var t=e.state;void 0===t&&(t={}),"function"===typeof t&&(t=t()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new s(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new f;var r=this,i=this,v=i.dispatch,o=i.commit;this.dispatch=function(e,l){return v.call(r,e,l)},this.commit=function(e,l,a){return o.call(r,e,l,a)},this.strict=u,_(this,t,[],this._modules.root),g(this,t),a.forEach(function(e){return e(l)}),f.config.devtools&&n(this)},p={state:{configurable:!0}};function h(e,l){return l.indexOf(e)<0&&l.push(e),function(){var a=l.indexOf(e);a>-1&&l.splice(a,1)}}function y(e,l){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var a=e.state;_(e,a,[],e._modules.root,!0),g(e,a,l)}function g(e,l,a){var u=e._vm;e.getters={};var t=e._wrappedGetters,n={};r(t,function(l,a){n[a]=function(){return l(e)},Object.defineProperty(e.getters,a,{get:function(){return e._vm[a]},enumerable:!0})});var i=f.config.silent;f.config.silent=!0,e._vm=new f({data:{$$state:l},computed:n}),f.config.silent=i,e.strict&&x(e),u&&(a&&e._withCommit(function(){u._data.$$state=null}),f.nextTick(function(){return u.$destroy()}))}function _(e,l,a,u,t){var n=!a.length,r=e._modules.getNamespace(a);if(u.namespaced&&(e._modulesNamespaceMap[r]=u),!n&&!t){var i=k(l,a.slice(0,-1)),v=a[a.length-1];e._withCommit(function(){f.set(i,v,u.state)})}var o=u.context=m(e,r,a);u.forEachMutation(function(l,a){var u=r+a;O(e,u,l,o)}),u.forEachAction(function(l,a){var u=l.root?a:r+a,t=l.handler||l;A(e,u,t,o)}),u.forEachGetter(function(l,a){var u=r+a;$(e,u,l,o)}),u.forEachChild(function(u,n){_(e,l,a.concat(n),u,t)})}function m(e,l,a){var u=""===l,t={dispatch:u?e.dispatch:function(a,u,t){var n=S(a,u,t),r=n.payload,i=n.options,v=n.type;return i&&i.root||(v=l+v),e.dispatch(v,r)},commit:u?e.commit:function(a,u,t){var n=S(a,u,t),r=n.payload,i=n.options,v=n.type;i&&i.root||(v=l+v),e.commit(v,r,i)}};return Object.defineProperties(t,{getters:{get:u?function(){return e.getters}:function(){return w(e,l)}},state:{get:function(){return k(e.state,a)}}}),t}function w(e,l){var a={},u=l.length;return Object.keys(e.getters).forEach(function(t){if(t.slice(0,u)===l){var n=t.slice(u);Object.defineProperty(a,n,{get:function(){return e.getters[t]},enumerable:!0})}}),a}function O(e,l,a,u){var t=e._mutations[l]||(e._mutations[l]=[]);t.push(function(l){a.call(e,u.state,l)})}function A(e,l,a,u){var t=e._actions[l]||(e._actions[l]=[]);t.push(function(l,t){var n=a.call(e,{dispatch:u.dispatch,commit:u.commit,getters:u.getters,state:u.state,rootGetters:e.getters,rootState:e.state},l,t);return v(n)||(n=Promise.resolve(n)),e._devtoolHook?n.catch(function(l){throw e._devtoolHook.emit("vuex:error",l),l}):n})}function $(e,l,a,u){e._wrappedGetters[l]||(e._wrappedGetters[l]=function(e){return a(u.state,u.getters,e.state,e.getters)})}function x(e){e._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function k(e,l){return l.length?l.reduce(function(e,l){return e[l]},e):e}function S(e,l,a){return i(e)&&e.type&&(a=l,l=e,e=e.type),{type:e,payload:l,options:a}}function j(e){f&&e===f||(f=e,u(f))}p.state.get=function(){return this._vm._data.$$state},p.state.set=function(e){0},d.prototype.commit=function(e,l,a){var u=this,t=S(e,l,a),n=t.type,r=t.payload,i=(t.options,{type:n,payload:r}),v=this._mutations[n];v&&(this._withCommit(function(){v.forEach(function(e){e(r)})}),this._subscribers.forEach(function(e){return e(i,u.state)}))},d.prototype.dispatch=function(e,l){var a=this,u=S(e,l),t=u.type,n=u.payload,r={type:t,payload:n},i=this._actions[t];if(i)return this._actionSubscribers.forEach(function(e){return e(r,a.state)}),i.length>1?Promise.all(i.map(function(e){return e(n)})):i[0](n)},d.prototype.subscribe=function(e){return h(e,this._subscribers)},d.prototype.subscribeAction=function(e){return h(e,this._actionSubscribers)},d.prototype.watch=function(e,l,a){var u=this;return this._watcherVM.$watch(function(){return e(u.state,u.getters)},l,a)},d.prototype.replaceState=function(e){var l=this;this._withCommit(function(){l._vm._data.$$state=e})},d.prototype.registerModule=function(e,l,a){void 0===a&&(a={}),"string"===typeof e&&(e=[e]),this._modules.register(e,l),_(this,this.state,e,this._modules.get(e),a.preserveState),g(this,this.state)},d.prototype.unregisterModule=function(e){var l=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var a=k(l.state,e.slice(0,-1));f.delete(a,e[e.length-1])}),y(this)},d.prototype.hotUpdate=function(e){this._modules.update(e),y(this,!0)},d.prototype._withCommit=function(e){var l=this._committing;this._committing=!0,e(),this._committing=l},Object.defineProperties(d.prototype,p);var P=I(function(e,l){var a={};return N(l).forEach(function(l){var u=l.key,t=l.val;a[u]=function(){var l=this.$store.state,a=this.$store.getters;if(e){var u=D(this.$store,"mapState",e);if(!u)return;l=u.context.state,a=u.context.getters}return"function"===typeof t?t.call(this,l,a):l[t]},a[u].vuex=!0}),a}),E=I(function(e,l){var a={};return N(l).forEach(function(l){var u=l.key,t=l.val;a[u]=function(){var l=[],a=arguments.length;while(a--)l[a]=arguments[a];var u=this.$store.commit;if(e){var n=D(this.$store,"mapMutations",e);if(!n)return;u=n.context.commit}return"function"===typeof t?t.apply(this,[u].concat(l)):u.apply(this.$store,[t].concat(l))}}),a}),M=I(function(e,l){var a={};return N(l).forEach(function(l){var u=l.key,t=l.val;t=e+t,a[u]=function(){if(!e||D(this.$store,"mapGetters",e))return this.$store.getters[t]},a[u].vuex=!0}),a}),C=I(function(e,l){var a={};return N(l).forEach(function(l){var u=l.key,t=l.val;a[u]=function(){var l=[],a=arguments.length;while(a--)l[a]=arguments[a];var u=this.$store.dispatch;if(e){var n=D(this.$store,"mapActions",e);if(!n)return;u=n.context.dispatch}return"function"===typeof t?t.apply(this,[u].concat(l)):u.apply(this.$store,[t].concat(l))}}),a}),T=function(e){return{mapState:P.bind(null,e),mapGetters:M.bind(null,e),mapMutations:E.bind(null,e),mapActions:C.bind(null,e)}};function N(e){return Array.isArray(e)?e.map(function(e){return{key:e,val:e}}):Object.keys(e).map(function(l){return{key:l,val:e[l]}})}function I(e){return function(l,a){return"string"!==typeof l?(a=l,l=""):"/"!==l.charAt(l.length-1)&&(l+="/"),e(l,a)}}function D(e,l,a){var u=e._modulesNamespaceMap[a];return u}var B={Store:d,install:j,version:"3.0.1",mapState:P,mapMutations:E,mapGetters:M,mapActions:C,createNamespacedHelpers:T};l["default"]=B},3022:function(e,l,a){(function(e){var u=Object.getOwnPropertyDescriptors||function(e){for(var l=Object.keys(e),a={},u=0;u<l.length;u++)a[l[u]]=Object.getOwnPropertyDescriptor(e,l[u]);return a},t=/%[sdj%]/g;l.format=function(e){if(!O(e)){for(var l=[],a=0;a<arguments.length;a++)l.push(i(arguments[a]));return l.join(" ")}a=1;for(var u=arguments,n=u.length,r=String(e).replace(t,function(e){if("%%"===e)return"%";if(a>=n)return e;switch(e){case"%s":return String(u[a++]);case"%d":return Number(u[a++]);case"%j":try{return JSON.stringify(u[a++])}catch(l){return"[Circular]"}default:return e}}),v=u[a];a<n;v=u[++a])_(v)||!k(v)?r+=" "+v:r+=" "+i(v);return r},l.deprecate=function(a,u){if("undefined"!==typeof e&&!0===e.noDeprecation)return a;if("undefined"===typeof e)return function(){return l.deprecate(a,u).apply(this,arguments)};var t=!1;function n(){if(!t){if(e.throwDeprecation)throw new Error(u);e.traceDeprecation?console.trace(u):console.error(u),t=!0}return a.apply(this,arguments)}return n};var n,r={};function i(e,a){var u={seen:[],stylize:o};return arguments.length>=3&&(u.depth=arguments[2]),arguments.length>=4&&(u.colors=arguments[3]),g(a)?u.showHidden=a:a&&l._extend(u,a),$(u.showHidden)&&(u.showHidden=!1),$(u.depth)&&(u.depth=2),$(u.colors)&&(u.colors=!1),$(u.customInspect)&&(u.customInspect=!0),u.colors&&(u.stylize=v),s(u,e,u.depth)}function v(e,l){var a=i.styles[l];return a?"["+i.colors[a][0]+"m"+e+"["+i.colors[a][1]+"m":e}function o(e,l){return e}function b(e){var l={};return e.forEach(function(e,a){l[e]=!0}),l}function s(e,a,u){if(e.customInspect&&a&&P(a.inspect)&&a.inspect!==l.inspect&&(!a.constructor||a.constructor.prototype!==a)){var t=a.inspect(u,e);return O(t)||(t=s(e,t,u)),t}var n=c(e,a);if(n)return n;var r=Object.keys(a),i=b(r);if(e.showHidden&&(r=Object.getOwnPropertyNames(a)),j(a)&&(r.indexOf("message")>=0||r.indexOf("description")>=0))return f(a);if(0===r.length){if(P(a)){var v=a.name?": "+a.name:"";return e.stylize("[Function"+v+"]","special")}if(x(a))return e.stylize(RegExp.prototype.toString.call(a),"regexp");if(S(a))return e.stylize(Date.prototype.toString.call(a),"date");if(j(a))return f(a)}var o,g="",_=!1,m=["{","}"];if(y(a)&&(_=!0,m=["[","]"]),P(a)){var w=a.name?": "+a.name:"";g=" [Function"+w+"]"}return x(a)&&(g=" "+RegExp.prototype.toString.call(a)),S(a)&&(g=" "+Date.prototype.toUTCString.call(a)),j(a)&&(g=" "+f(a)),0!==r.length||_&&0!=a.length?u<0?x(a)?e.stylize(RegExp.prototype.toString.call(a),"regexp"):e.stylize("[Object]","special"):(e.seen.push(a),o=_?d(e,a,u,i,r):r.map(function(l){return p(e,a,u,i,l,_)}),e.seen.pop(),h(o,g,m)):m[0]+g+m[1]}function c(e,l){if($(l))return e.stylize("undefined","undefined");if(O(l)){var a="'"+JSON.stringify(l).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(a,"string")}return w(l)?e.stylize(""+l,"number"):g(l)?e.stylize(""+l,"boolean"):_(l)?e.stylize("null","null"):void 0}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function d(e,l,a,u,t){for(var n=[],r=0,i=l.length;r<i;++r)I(l,String(r))?n.push(p(e,l,a,u,String(r),!0)):n.push("");return t.forEach(function(t){t.match(/^\d+$/)||n.push(p(e,l,a,u,t,!0))}),n}function p(e,l,a,u,t,n){var r,i,v;if(v=Object.getOwnPropertyDescriptor(l,t)||{value:l[t]},v.get?i=v.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):v.set&&(i=e.stylize("[Setter]","special")),I(u,t)||(r="["+t+"]"),i||(e.seen.indexOf(v.value)<0?(i=_(a)?s(e,v.value,null):s(e,v.value,a-1),i.indexOf("\n")>-1&&(i=n?i.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+i.split("\n").map(function(e){return"   "+e}).join("\n"))):i=e.stylize("[Circular]","special")),$(r)){if(n&&t.match(/^\d+$/))return i;r=JSON.stringify(""+t),r.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(r=r.substr(1,r.length-2),r=e.stylize(r,"name")):(r=r.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),r=e.stylize(r,"string"))}return r+": "+i}function h(e,l,a){var u=e.reduce(function(e,l){return 0,l.indexOf("\n")>=0&&0,e+l.replace(/\u001b\[\d\d?m/g,"").length+1},0);return u>60?a[0]+(""===l?"":l+"\n ")+" "+e.join(",\n  ")+" "+a[1]:a[0]+l+" "+e.join(", ")+" "+a[1]}function y(e){return Array.isArray(e)}function g(e){return"boolean"===typeof e}function _(e){return null===e}function m(e){return null==e}function w(e){return"number"===typeof e}function O(e){return"string"===typeof e}function A(e){return"symbol"===typeof e}function $(e){return void 0===e}function x(e){return k(e)&&"[object RegExp]"===M(e)}function k(e){return"object"===typeof e&&null!==e}function S(e){return k(e)&&"[object Date]"===M(e)}function j(e){return k(e)&&("[object Error]"===M(e)||e instanceof Error)}function P(e){return"function"===typeof e}function E(e){return null===e||"boolean"===typeof e||"number"===typeof e||"string"===typeof e||"symbol"===typeof e||"undefined"===typeof e}function M(e){return Object.prototype.toString.call(e)}function C(e){return e<10?"0"+e.toString(10):e.toString(10)}l.debuglog=function(a){if($(n)&&(n=Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).NODE_DEBUG||""),a=a.toUpperCase(),!r[a])if(new RegExp("\\b"+a+"\\b","i").test(n)){var u=e.pid;r[a]=function(){var e=l.format.apply(l,arguments);console.error("%s %d: %s",a,u,e)}}else r[a]=function(){};return r[a]},l.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},l.isArray=y,l.isBoolean=g,l.isNull=_,l.isNullOrUndefined=m,l.isNumber=w,l.isString=O,l.isSymbol=A,l.isUndefined=$,l.isRegExp=x,l.isObject=k,l.isDate=S,l.isError=j,l.isFunction=P,l.isPrimitive=E,l.isBuffer=a("d60a");var T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function N(){var e=new Date,l=[C(e.getHours()),C(e.getMinutes()),C(e.getSeconds())].join(":");return[e.getDate(),T[e.getMonth()],l].join(" ")}function I(e,l){return Object.prototype.hasOwnProperty.call(e,l)}l.log=function(){console.log("%s - %s",N(),l.format.apply(l,arguments))},l.inherits=a("3fb5"),l._extend=function(e,l){if(!l||!k(l))return e;var a=Object.keys(l),u=a.length;while(u--)e[a[u]]=l[a[u]];return e};var D="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function B(e,l){if(!e){var a=new Error("Promise was rejected with a falsy value");a.reason=e,e=a}return l(e)}function U(l){if("function"!==typeof l)throw new TypeError('The "original" argument must be of type Function');function a(){for(var a=[],u=0;u<arguments.length;u++)a.push(arguments[u]);var t=a.pop();if("function"!==typeof t)throw new TypeError("The last argument must be of type Function");var n=this,r=function(){return t.apply(n,arguments)};l.apply(this,a).then(function(l){e.nextTick(r,null,l)},function(l){e.nextTick(B,l,r)})}return Object.setPrototypeOf(a,Object.getPrototypeOf(l)),Object.defineProperties(a,u(l)),a}l.promisify=function(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');if(D&&e[D]){var l=e[D];if("function"!==typeof l)throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(l,D,{value:l,enumerable:!1,writable:!1,configurable:!0}),l}function l(){for(var l,a,u=new Promise(function(e,u){l=e,a=u}),t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);t.push(function(e,u){e?a(e):l(u)});try{e.apply(this,t)}catch(r){a(r)}return u}return Object.setPrototypeOf(l,Object.getPrototypeOf(e)),D&&Object.defineProperty(l,D,{value:l,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(l,u(e))},l.promisify.custom=D,l.callbackify=U}).call(this,a("4362"))},3203:function(e){e.exports={zh:{home:"首页",category:"分类",issue:"发布",cart:"消息",user:"我的"},en:{home:"Home",category:"Category",issue:"Publish",cart:"Message",user:"Me"}}},3355:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("3d57"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},3667:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("0d3d"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"3bac":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("4649"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"3c35":function(e,l){(function(l){e.exports=l}).call(this,{})},"3cd4":function(e){e.exports={zh:{title:"账号安全",NickName:"昵称",ChangePassword:"修改密码",ModifyEmail:"修改邮箱"},en:{title:"Nick Name",NickName:"NickName",ChangePassword:"ChangePassword",ModifyEmail:"ModifyEmail"}}},"3e3b":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("ca15"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"3fb5":function(e,l){"function"===typeof Object.create?e.exports=function(e,l){e.super_=l,e.prototype=Object.create(l.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,l){e.super_=l;var a=function(){};a.prototype=l.prototype,e.prototype=new a,e.prototype.constructor=e}},4198:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("2900"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"41b7":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],t=u;l.default=t},"432c":function(e,l,a){"use strict";e.exports={list:[{letter:"A",data:["阿克苏机场","阿拉山口机场","阿勒泰机场","阿里昆莎机场","安庆天柱山机场","澳门国际机场"]},{letter:"B",data:["保山机场","包头机场","北海福成机场","北京南苑机场","北京首都国际机场"]},{letter:"C",data:["长白山机场","长春龙嘉国际机场","常德桃花源机场","昌都邦达机场","长沙黄花国际机场","长治王村机场","常州奔牛机场","成都双流国际机场","赤峰机场"]},{letter:"D",data:["大理机场","大连周水子国际机场","大庆萨尔图机场","大同东王庄机场","达州河市机场","丹东浪头机场","德宏芒市机场","迪庆香格里拉机场","东营机场","敦煌机场"]},{letter:"E",data:["鄂尔多斯机场","恩施许家坪机场","二连浩特赛乌苏国际机场"]},{letter:"F",data:["阜阳西关机场","福州长乐国际机场"]},{letter:"G",data:["赣州黄金机场","格尔木机场","固原六盘山机场","广元盘龙机场","广州白云国际机场","桂林两江国际机场","贵阳龙洞堡国际机场"]},{letter:"H",data:["哈尔滨太平国际机场","哈密机场","海口美兰国际机场","海拉尔东山国际机场","邯郸机场","汉中机场","杭州萧山国际机场","合肥骆岗国际机场","和田机场","黑河机场","呼和浩特白塔国际机场","淮安涟水机场","黄山屯溪国际机场"]},{letter:"I",data:[]},{letter:"J",data:["济南遥墙国际机场","济宁曲阜机场","鸡西兴凯湖机场","佳木斯东郊机场","嘉峪关机场","锦州小岭子机场","景德镇机场","井冈山机场","九江庐山机场","九寨黄龙机场"]},{letter:"K",data:["喀什机场","克拉玛依机场","库车龟兹机场","库尔勒机场","昆明巫家坝国际机场"]},{letter:"L",data:["拉萨贡嘎机场","兰州中川机场","丽江三义机场","黎平机场","连云港白塔埠机场","临沧机场","临沂机场","林芝米林机场","柳州白莲机场","龙岩冠豸山机场","泸州蓝田机场","洛阳北郊机场"]},{letter:"M",data:["满洲里西郊机场","绵阳南郊机场","漠河古莲机场","牡丹江海浪机场"]},{letter:"N",data:["南昌昌北国际机场","南充高坪机场","南京禄口国际机场","南宁吴圩机场","南通兴东机场","南阳姜营机场","宁波栎社国际机场"]},{letter:"O",data:[]},{letter:"P",data:["普洱思茅机场"]},{letter:"Q",data:["齐齐哈尔三家子机场","秦皇岛山海关机场","青岛流亭国际机场","衢州机场","泉州晋江机场"]},{letter:"R",data:["日喀则和平机场"]},{letter:"S",data:["三亚凤凰国际机场","汕头外砂机场","上海虹桥国际机场","上海浦东国际机场","深圳宝安国际机场","沈阳桃仙国际机场","石家庄正定国际机场","苏南硕放国际机场"]},{letter:"T",data:["塔城机场","太原武宿国际机场","台州路桥机场 (黄岩机场)","唐山三女河机场","腾冲驼峰机场","天津滨海国际机场","通辽机场","铜仁凤凰机场"]},{letter:"U",data:[]},{letter:"V",data:[]},{letter:"W",data:["万州五桥机场","潍坊机场","威海大水泊机场","文山普者黑机场","温州永强国际机场","乌海机场","武汉天河国际机场","乌兰浩特机场","乌鲁木齐地窝堡国际机场","武夷山机场","梧州长洲岛机场"]},{letter:"X",data:["西安咸阳国际机场","西昌青山机场","锡林浩特机场","西宁曹家堡机场","西双版纳嘎洒机场","厦门高崎国际机场","香港国际机场","襄阳刘集机场","兴义机场","徐州观音机场"]},{letter:"Y",data:["延安二十里堡机场","盐城机场","延吉朝阳川机场","烟台莱山国际机场","宜宾菜坝机场","宜昌三峡机场","伊春林都机场","伊宁机场","义乌机场","银川河东机场","永州零陵机场","榆林榆阳机场","玉树巴塘机场","运城张孝机场"]},{letter:"Z",data:["湛江机场","昭通机场","郑州新郑国际机场","芷江机场","重庆江北国际机场","中卫香山机场","舟山朱家尖机场","珠海三灶机场"]}]}},4362:function(e,l,a){l.nextTick=function(e){setTimeout(e,0)},l.platform=l.arch=l.execPath=l.title="browser",l.pid=1,l.browser=!0,l.env={},l.argv=[],l.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,u="/";l.cwd=function(){return u},l.chdir=function(l){e||(e=a("df7c")),u=e.resolve(l,u)}}(),l.exit=l.kill=l.umask=l.dlopen=l.uptime=l.memoryUsage=l.uvCounters=function(){},l.features={}},"4d82":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("5e42"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"55a1":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("b533"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},5916:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("20f0"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"5af9":function(e){e.exports={zh:{title:"个性签名",placeholder:"请输入个性签名",btn:"保存"},en:{title:"Personalized Signature",placeholder:"Please enter your personal signature",btn:"Save"}}},"5c41":function(e){e.exports={zh:{title:"昵称",placeholder:"请输入昵称",btn:"保存"},en:{title:"Nick Name",placeholder:"Please enter nickname",btn:"Save"}}},6445:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("05cb"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"66fd":function(e,l,a){"use strict";a.r(l),function(e){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function u(e){return void 0===e||null===e}function t(e){return void 0!==e&&null!==e}function n(e){return!0===e}function r(e){return!1===e}function i(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function v(e){return null!==e&&"object"===typeof e}var o=Object.prototype.toString;function b(e){return"[object Object]"===o.call(e)}function s(e){return"[object RegExp]"===o.call(e)}function c(e){var l=parseFloat(String(e));return l>=0&&Math.floor(l)===l&&isFinite(e)}function f(e){return t(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function d(e){return null==e?"":Array.isArray(e)||b(e)&&e.toString===o?JSON.stringify(e,null,2):String(e)}function p(e){var l=parseFloat(e);return isNaN(l)?e:l}function h(e,l){for(var a=Object.create(null),u=e.split(","),t=0;t<u.length;t++)a[u[t]]=!0;return l?function(e){return a[e.toLowerCase()]}:function(e){return a[e]}}h("slot,component",!0);var y=h("key,ref,slot,slot-scope,is");function g(e,l){if(e.length){var a=e.indexOf(l);if(a>-1)return e.splice(a,1)}}var _=Object.prototype.hasOwnProperty;function m(e,l){return _.call(e,l)}function w(e){var l=Object.create(null);return function(a){var u=l[a];return u||(l[a]=e(a))}}var O=/-(\w)/g,A=w(function(e){return e.replace(O,function(e,l){return l?l.toUpperCase():""})}),$=w(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),x=/\B([A-Z])/g,k=w(function(e){return e.replace(x,"-$1").toLowerCase()});function S(e,l){function a(a){var u=arguments.length;return u?u>1?e.apply(l,arguments):e.call(l,a):e.call(l)}return a._length=e.length,a}function j(e,l){return e.bind(l)}var P=Function.prototype.bind?j:S;function E(e,l){l=l||0;var a=e.length-l,u=new Array(a);while(a--)u[a]=e[a+l];return u}function M(e,l){for(var a in l)e[a]=l[a];return e}function C(e){for(var l={},a=0;a<e.length;a++)e[a]&&M(l,e[a]);return l}function T(e,l,a){}var N=function(e,l,a){return!1},I=function(e){return e};function D(e,l){if(e===l)return!0;var a=v(e),u=v(l);if(!a||!u)return!a&&!u&&String(e)===String(l);try{var t=Array.isArray(e),n=Array.isArray(l);if(t&&n)return e.length===l.length&&e.every(function(e,a){return D(e,l[a])});if(e instanceof Date&&l instanceof Date)return e.getTime()===l.getTime();if(t||n)return!1;var r=Object.keys(e),i=Object.keys(l);return r.length===i.length&&r.every(function(a){return D(e[a],l[a])})}catch(o){return!1}}function B(e,l){for(var a=0;a<e.length;a++)if(D(e[a],l))return a;return-1}function U(e){var l=!1;return function(){l||(l=!0,e.apply(this,arguments))}}var R=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],z={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:N,isReservedAttr:N,isUnknownElement:N,getTagNamespace:T,parsePlatformTagName:I,mustUseProp:N,async:!0,_lifecycleHooks:V},L=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function F(e){var l=(e+"").charCodeAt(0);return 36===l||95===l}function G(e,l,a,u){Object.defineProperty(e,l,{value:a,enumerable:!!u,writable:!0,configurable:!0})}var H=new RegExp("[^"+L.source+".$_\\d]");function q(e){if(!H.test(e)){var l=e.split(".");return function(e){for(var a=0;a<l.length;a++){if(!e)return;e=e[l[a]]}return e}}}var J,W="__proto__"in{},K="undefined"!==typeof window,Q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=Q&&WXEnvironment.platform.toLowerCase(),Z=K&&window.navigator.userAgent.toLowerCase(),X=Z&&/msie|trident/.test(Z),ee=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),le=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Y),ae=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(K)try{var ue={};Object.defineProperty(ue,"passive",{get:function(){}}),window.addEventListener("test-passive",null,ue)}catch(lt){}var te=function(){return void 0===J&&(J=!K&&!Q&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),J},ne=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function re(e){return"function"===typeof e&&/native code/.test(e.toString())}var ie,ve="undefined"!==typeof Symbol&&re(Symbol)&&"undefined"!==typeof Reflect&&re(Reflect.ownKeys);ie="undefined"!==typeof Set&&re(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var oe=T,be=0,se=function(){this.id=be++,this.subs=[]};se.prototype.addSub=function(e){this.subs.push(e)},se.prototype.removeSub=function(e){g(this.subs,e)},se.prototype.depend=function(){se.target&&se.target.addDep(this)},se.prototype.notify=function(){var e=this.subs.slice();for(var l=0,a=e.length;l<a;l++)e[l].update()},se.target=null;var ce=[];function fe(e){ce.push(e),se.target=e}function de(){ce.pop(),se.target=ce[ce.length-1]}var pe=function(e,l,a,u,t,n,r,i){this.tag=e,this.data=l,this.children=a,this.text=u,this.elm=t,this.ns=void 0,this.context=n,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=l&&l.key,this.componentOptions=r,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=i,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},he={child:{configurable:!0}};he.child.get=function(){return this.componentInstance},Object.defineProperties(pe.prototype,he);var ye=function(e){void 0===e&&(e="");var l=new pe;return l.text=e,l.isComment=!0,l};function ge(e){return new pe(void 0,void 0,void 0,String(e))}function _e(e){var l=new pe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return l.ns=e.ns,l.isStatic=e.isStatic,l.key=e.key,l.isComment=e.isComment,l.fnContext=e.fnContext,l.fnOptions=e.fnOptions,l.fnScopeId=e.fnScopeId,l.asyncMeta=e.asyncMeta,l.isCloned=!0,l}var me=Array.prototype,we=Object.create(me),Oe=["push","pop","shift","unshift","splice","sort","reverse"];Oe.forEach(function(e){var l=me[e];G(we,e,function(){var a=[],u=arguments.length;while(u--)a[u]=arguments[u];var t,n=l.apply(this,a),r=this.__ob__;switch(e){case"push":case"unshift":t=a;break;case"splice":t=a.slice(2);break}return t&&r.observeArray(t),r.dep.notify(),n})});var Ae=Object.getOwnPropertyNames(we),$e=!0;function xe(e){$e=e}var ke=function(e){this.value=e,this.dep=new se,this.vmCount=0,G(e,"__ob__",this),Array.isArray(e)?(W?Se(e,we):je(e,we,Ae),this.observeArray(e)):this.walk(e)};function Se(e,l){e.__proto__=l}function je(e,l,a){for(var u=0,t=a.length;u<t;u++){var n=a[u];G(e,n,l[n])}}function Pe(e,l){var a;if(v(e)&&!(e instanceof pe))return m(e,"__ob__")&&e.__ob__ instanceof ke?a=e.__ob__:$e&&!te()&&(Array.isArray(e)||b(e))&&Object.isExtensible(e)&&!e._isVue&&(a=new ke(e)),l&&a&&a.vmCount++,a}function Ee(e,l,a,u,t){var n=new se,r=Object.getOwnPropertyDescriptor(e,l);if(!r||!1!==r.configurable){var i=r&&r.get,v=r&&r.set;i&&!v||2!==arguments.length||(a=e[l]);var o=!t&&Pe(a);Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:function(){var l=i?i.call(e):a;return se.target&&(n.depend(),o&&(o.dep.depend(),Array.isArray(l)&&Te(l))),l},set:function(l){var u=i?i.call(e):a;l===u||l!==l&&u!==u||i&&!v||(v?v.call(e,l):a=l,o=!t&&Pe(l),n.notify())}})}}function Me(e,l,a){if(Array.isArray(e)&&c(l))return e.length=Math.max(e.length,l),e.splice(l,1,a),a;if(l in e&&!(l in Object.prototype))return e[l]=a,a;var u=e.__ob__;return e._isVue||u&&u.vmCount?a:u?(Ee(u.value,l,a),u.dep.notify(),a):(e[l]=a,a)}function Ce(e,l){if(Array.isArray(e)&&c(l))e.splice(l,1);else{var a=e.__ob__;e._isVue||a&&a.vmCount||m(e,l)&&(delete e[l],a&&a.dep.notify())}}function Te(e){for(var l=void 0,a=0,u=e.length;a<u;a++)l=e[a],l&&l.__ob__&&l.__ob__.dep.depend(),Array.isArray(l)&&Te(l)}ke.prototype.walk=function(e){for(var l=Object.keys(e),a=0;a<l.length;a++)Ee(e,l[a])},ke.prototype.observeArray=function(e){for(var l=0,a=e.length;l<a;l++)Pe(e[l])};var Ne=z.optionMergeStrategies;function Ie(e,l){if(!l)return e;for(var a,u,t,n=ve?Reflect.ownKeys(l):Object.keys(l),r=0;r<n.length;r++)a=n[r],"__ob__"!==a&&(u=e[a],t=l[a],m(e,a)?u!==t&&b(u)&&b(t)&&Ie(u,t):Me(e,a,t));return e}function De(e,l,a){return a?function(){var u="function"===typeof l?l.call(a,a):l,t="function"===typeof e?e.call(a,a):e;return u?Ie(u,t):t}:l?e?function(){return Ie("function"===typeof l?l.call(this,this):l,"function"===typeof e?e.call(this,this):e)}:l:e}function Be(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?Ue(a):a}function Ue(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function Re(e,l,a,u){var t=Object.create(e||null);return l?M(t,l):t}Ne.data=function(e,l,a){return a?De(e,l,a):l&&"function"!==typeof l?e:De(e,l)},V.forEach(function(e){Ne[e]=Be}),R.forEach(function(e){Ne[e+"s"]=Re}),Ne.watch=function(e,l,a,u){if(e===ae&&(e=void 0),l===ae&&(l=void 0),!l)return Object.create(e||null);if(!e)return l;var t={};for(var n in M(t,e),l){var r=t[n],i=l[n];r&&!Array.isArray(r)&&(r=[r]),t[n]=r?r.concat(i):Array.isArray(i)?i:[i]}return t},Ne.props=Ne.methods=Ne.inject=Ne.computed=function(e,l,a,u){if(!e)return l;var t=Object.create(null);return M(t,e),l&&M(t,l),t},Ne.provide=De;var Ve=function(e,l){return void 0===l?e:l};function ze(e,l){var a=e.props;if(a){var u,t,n,r={};if(Array.isArray(a)){u=a.length;while(u--)t=a[u],"string"===typeof t&&(n=A(t),r[n]={type:null})}else if(b(a))for(var i in a)t=a[i],n=A(i),r[n]=b(t)?t:{type:t};else 0;e.props=r}}function Le(e,l){var a=e.inject;if(a){var u=e.inject={};if(Array.isArray(a))for(var t=0;t<a.length;t++)u[a[t]]={from:a[t]};else if(b(a))for(var n in a){var r=a[n];u[n]=b(r)?M({from:n},r):{from:r}}else 0}}function Fe(e){var l=e.directives;if(l)for(var a in l){var u=l[a];"function"===typeof u&&(l[a]={bind:u,update:u})}}function Ge(e,l,a){if("function"===typeof l&&(l=l.options),ze(l,a),Le(l,a),Fe(l),!l._base&&(l.extends&&(e=Ge(e,l.extends,a)),l.mixins))for(var u=0,t=l.mixins.length;u<t;u++)e=Ge(e,l.mixins[u],a);var n,r={};for(n in e)i(n);for(n in l)m(e,n)||i(n);function i(u){var t=Ne[u]||Ve;r[u]=t(e[u],l[u],a,u)}return r}function He(e,l,a,u){if("string"===typeof a){var t=e[l];if(m(t,a))return t[a];var n=A(a);if(m(t,n))return t[n];var r=$(n);if(m(t,r))return t[r];var i=t[a]||t[n]||t[r];return i}}function qe(e,l,a,u){var t=l[e],n=!m(a,e),r=a[e],i=Qe(Boolean,t.type);if(i>-1)if(n&&!m(t,"default"))r=!1;else if(""===r||r===k(e)){var v=Qe(String,t.type);(v<0||i<v)&&(r=!0)}if(void 0===r){r=Je(u,t,e);var o=$e;xe(!0),Pe(r),xe(o)}return r}function Je(e,l,a){if(m(l,"default")){var u=l.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[a]&&void 0!==e._props[a]?e._props[a]:"function"===typeof u&&"Function"!==We(l.type)?u.call(e):u}}function We(e){var l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:""}function Ke(e,l){return We(e)===We(l)}function Qe(e,l){if(!Array.isArray(l))return Ke(l,e)?0:-1;for(var a=0,u=l.length;a<u;a++)if(Ke(l[a],e))return a;return-1}function Ye(e,l,a){fe();try{if(l){var u=l;while(u=u.$parent){var t=u.$options.errorCaptured;if(t)for(var n=0;n<t.length;n++)try{var r=!1===t[n].call(u,e,l,a);if(r)return}catch(lt){Xe(lt,u,"errorCaptured hook")}}}Xe(e,l,a)}finally{de()}}function Ze(e,l,a,u,t){var n;try{n=a?e.apply(l,a):e.call(l),n&&!n._isVue&&f(n)&&!n._handled&&(n.catch(function(e){return Ye(e,u,t+" (Promise/async)")}),n._handled=!0)}catch(lt){Ye(lt,u,t)}return n}function Xe(e,l,a){if(z.errorHandler)try{return z.errorHandler.call(null,e,l,a)}catch(lt){lt!==e&&el(lt,null,"config.errorHandler")}el(e,l,a)}function el(e,l,a){if(!K&&!Q||"undefined"===typeof console)throw e;console.error(e)}var ll,al=[],ul=!1;function tl(){ul=!1;var e=al.slice(0);al.length=0;for(var l=0;l<e.length;l++)e[l]()}if("undefined"!==typeof Promise&&re(Promise)){var nl=Promise.resolve();ll=function(){nl.then(tl),le&&setTimeout(T)}}else if(X||"undefined"===typeof MutationObserver||!re(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ll="undefined"!==typeof setImmediate&&re(setImmediate)?function(){setImmediate(tl)}:function(){setTimeout(tl,0)};else{var rl=1,il=new MutationObserver(tl),vl=document.createTextNode(String(rl));il.observe(vl,{characterData:!0}),ll=function(){rl=(rl+1)%2,vl.data=String(rl)}}function ol(e,l){var a;if(al.push(function(){if(e)try{e.call(l)}catch(lt){Ye(lt,l,"nextTick")}else a&&a(l)}),ul||(ul=!0,ll()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){a=e})}var bl=new ie;function sl(e){cl(e,bl),bl.clear()}function cl(e,l){var a,u,t=Array.isArray(e);if(!(!t&&!v(e)||Object.isFrozen(e)||e instanceof pe)){if(e.__ob__){var n=e.__ob__.dep.id;if(l.has(n))return;l.add(n)}if(t){a=e.length;while(a--)cl(e[a],l)}else{u=Object.keys(e),a=u.length;while(a--)cl(e[u[a]],l)}}}var fl=w(function(e){var l="&"===e.charAt(0);e=l?e.slice(1):e;var a="~"===e.charAt(0);e=a?e.slice(1):e;var u="!"===e.charAt(0);return e=u?e.slice(1):e,{name:e,once:a,capture:u,passive:l}});function dl(e,l){function a(){var e=arguments,u=a.fns;if(!Array.isArray(u))return Ze(u,null,arguments,l,"v-on handler");for(var t=u.slice(),n=0;n<t.length;n++)Ze(t[n],null,e,l,"v-on handler")}return a.fns=e,a}function pl(e,l,a,t,r,i){var v,o,b,s;for(v in e)o=e[v],b=l[v],s=fl(v),u(o)||(u(b)?(u(o.fns)&&(o=e[v]=dl(o,i)),n(s.once)&&(o=e[v]=r(s.name,o,s.capture)),a(s.name,o,s.capture,s.passive,s.params)):o!==b&&(b.fns=o,e[v]=b));for(v in l)u(e[v])&&(s=fl(v),t(s.name,l[v],s.capture))}function hl(e,l,a){var n=l.options.props;if(!u(n)){var r={},i=e.attrs,v=e.props;if(t(i)||t(v))for(var o in n){var b=k(o);yl(r,v,o,b,!0)||yl(r,i,o,b,!1)}return r}}function yl(e,l,a,u,n){if(t(l)){if(m(l,a))return e[a]=l[a],n||delete l[a],!0;if(m(l,u))return e[a]=l[u],n||delete l[u],!0}return!1}function gl(e){for(var l=0;l<e.length;l++)if(Array.isArray(e[l]))return Array.prototype.concat.apply([],e);return e}function _l(e){return i(e)?[ge(e)]:Array.isArray(e)?wl(e):void 0}function ml(e){return t(e)&&t(e.text)&&r(e.isComment)}function wl(e,l){var a,r,v,o,b=[];for(a=0;a<e.length;a++)r=e[a],u(r)||"boolean"===typeof r||(v=b.length-1,o=b[v],Array.isArray(r)?r.length>0&&(r=wl(r,(l||"")+"_"+a),ml(r[0])&&ml(o)&&(b[v]=ge(o.text+r[0].text),r.shift()),b.push.apply(b,r)):i(r)?ml(o)?b[v]=ge(o.text+r):""!==r&&b.push(ge(r)):ml(r)&&ml(o)?b[v]=ge(o.text+r.text):(n(e._isVList)&&t(r.tag)&&u(r.key)&&t(l)&&(r.key="__vlist"+l+"_"+a+"__"),b.push(r)));return b}function Ol(e){var l=e.$options.provide;l&&(e._provided="function"===typeof l?l.call(e):l)}function Al(e){var l=$l(e.$options.inject,e);l&&(xe(!1),Object.keys(l).forEach(function(a){Ee(e,a,l[a])}),xe(!0))}function $l(e,l){if(e){for(var a=Object.create(null),u=ve?Reflect.ownKeys(e):Object.keys(e),t=0;t<u.length;t++){var n=u[t];if("__ob__"!==n){var r=e[n].from,i=l;while(i){if(i._provided&&m(i._provided,r)){a[n]=i._provided[r];break}i=i.$parent}if(!i)if("default"in e[n]){var v=e[n].default;a[n]="function"===typeof v?v.call(l):v}else 0}}return a}}function xl(e,l){if(!e||!e.length)return{};for(var a={},u=0,t=e.length;u<t;u++){var n=e[u],r=n.data;if(r&&r.attrs&&r.attrs.slot&&delete r.attrs.slot,n.context!==l&&n.fnContext!==l||!r||null==r.slot)(a.default||(a.default=[])).push(n);else{var i=r.slot,v=a[i]||(a[i]=[]);"template"===n.tag?v.push.apply(v,n.children||[]):v.push(n)}}for(var o in a)a[o].every(kl)&&delete a[o];return a}function kl(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Sl(e,l,u){var t,n=Object.keys(l).length>0,r=e?!!e.$stable:!n,i=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(r&&u&&u!==a&&i===u.$key&&!n&&!u.$hasNormal)return u;for(var v in t={},e)e[v]&&"$"!==v[0]&&(t[v]=jl(l,v,e[v]))}else t={};for(var o in l)o in t||(t[o]=Pl(l,o));return e&&Object.isExtensible(e)&&(e._normalized=t),G(t,"$stable",r),G(t,"$key",i),G(t,"$hasNormal",n),t}function jl(e,l,a){var u=function(){var e=arguments.length?a.apply(null,arguments):a({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:_l(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return a.proxy&&Object.defineProperty(e,l,{get:u,enumerable:!0,configurable:!0}),u}function Pl(e,l){return function(){return e[l]}}function El(e,l){var a,u,n,r,i;if(Array.isArray(e)||"string"===typeof e)for(a=new Array(e.length),u=0,n=e.length;u<n;u++)a[u]=l(e[u],u);else if("number"===typeof e)for(a=new Array(e),u=0;u<e;u++)a[u]=l(u+1,u);else if(v(e))if(ve&&e[Symbol.iterator]){a=[];var o=e[Symbol.iterator](),b=o.next();while(!b.done)a.push(l(b.value,a.length)),b=o.next()}else for(r=Object.keys(e),a=new Array(r.length),u=0,n=r.length;u<n;u++)i=r[u],a[u]=l(e[i],i,u);return t(a)||(a=[]),a._isVList=!0,a}function Ml(e,l,a,u){var t,n=this.$scopedSlots[e];n?(a=a||{},u&&(a=M(M({},u),a)),t=n(a)||l):t=this.$slots[e]||l;var r=a&&a.slot;return r?this.$createElement("template",{slot:r},t):t}function Cl(e){return He(this.$options,"filters",e,!0)||I}function Tl(e,l){return Array.isArray(e)?-1===e.indexOf(l):e!==l}function Nl(e,l,a,u,t){var n=z.keyCodes[l]||a;return t&&u&&!z.keyCodes[l]?Tl(t,u):n?Tl(n,e):u?k(u)!==l:void 0}function Il(e,l,a,u,t){if(a)if(v(a)){var n;Array.isArray(a)&&(a=C(a));var r=function(r){if("class"===r||"style"===r||y(r))n=e;else{var i=e.attrs&&e.attrs.type;n=u||z.mustUseProp(l,i,r)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var v=A(r),o=k(r);if(!(v in n)&&!(o in n)&&(n[r]=a[r],t)){var b=e.on||(e.on={});b["update:"+r]=function(e){a[r]=e}}};for(var i in a)r(i)}else;return e}function Dl(e,l){var a=this._staticTrees||(this._staticTrees=[]),u=a[e];return u&&!l?u:(u=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Ul(u,"__static__"+e,!1),u)}function Bl(e,l,a){return Ul(e,"__once__"+l+(a?"_"+a:""),!0),e}function Ul(e,l,a){if(Array.isArray(e))for(var u=0;u<e.length;u++)e[u]&&"string"!==typeof e[u]&&Rl(e[u],l+"_"+u,a);else Rl(e,l,a)}function Rl(e,l,a){e.isStatic=!0,e.key=l,e.isOnce=a}function Vl(e,l){if(l)if(b(l)){var a=e.on=e.on?M({},e.on):{};for(var u in l){var t=a[u],n=l[u];a[u]=t?[].concat(t,n):n}}else;return e}function zl(e,l,a,u){l=l||{$stable:!a};for(var t=0;t<e.length;t++){var n=e[t];Array.isArray(n)?zl(n,l,a):n&&(n.proxy&&(n.fn.proxy=!0),l[n.key]=n.fn)}return u&&(l.$key=u),l}function Ll(e,l){for(var a=0;a<l.length;a+=2){var u=l[a];"string"===typeof u&&u&&(e[l[a]]=l[a+1])}return e}function Fl(e,l){return"string"===typeof e?l+e:e}function Gl(e){e._o=Bl,e._n=p,e._s=d,e._l=El,e._t=Ml,e._q=D,e._i=B,e._m=Dl,e._f=Cl,e._k=Nl,e._b=Il,e._v=ge,e._e=ye,e._u=zl,e._g=Vl,e._d=Ll,e._p=Fl}function Hl(e,l,u,t,r){var i,v=this,o=r.options;m(t,"_uid")?(i=Object.create(t),i._original=t):(i=t,t=t._original);var b=n(o._compiled),s=!b;this.data=e,this.props=l,this.children=u,this.parent=t,this.listeners=e.on||a,this.injections=$l(o.inject,t),this.slots=function(){return v.$slots||Sl(e.scopedSlots,v.$slots=xl(u,t)),v.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Sl(e.scopedSlots,this.slots())}}),b&&(this.$options=o,this.$slots=this.slots(),this.$scopedSlots=Sl(e.scopedSlots,this.$slots)),o._scopeId?this._c=function(e,l,a,u){var n=ta(i,e,l,a,u,s);return n&&!Array.isArray(n)&&(n.fnScopeId=o._scopeId,n.fnContext=t),n}:this._c=function(e,l,a,u){return ta(i,e,l,a,u,s)}}function ql(e,l,u,n,r){var i=e.options,v={},o=i.props;if(t(o))for(var b in o)v[b]=qe(b,o,l||a);else t(u.attrs)&&Wl(v,u.attrs),t(u.props)&&Wl(v,u.props);var s=new Hl(u,v,r,n,e),c=i.render.call(null,s._c,s);if(c instanceof pe)return Jl(c,u,s.parent,i,s);if(Array.isArray(c)){for(var f=_l(c)||[],d=new Array(f.length),p=0;p<f.length;p++)d[p]=Jl(f[p],u,s.parent,i,s);return d}}function Jl(e,l,a,u,t){var n=_e(e);return n.fnContext=a,n.fnOptions=u,l.slot&&((n.data||(n.data={})).slot=l.slot),n}function Wl(e,l){for(var a in l)e[A(a)]=l[a]}Gl(Hl.prototype);var Kl={init:function(e,l){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var a=e;Kl.prepatch(a,a)}else{var u=e.componentInstance=Zl(e,Aa);u.$mount(l?e.elm:void 0,l)}},prepatch:function(e,l){var a=l.componentOptions,u=l.componentInstance=e.componentInstance;Sa(u,a.propsData,a.listeners,l,a.children)},insert:function(e){var l=e.context,a=e.componentInstance;a._isMounted||(a._isMounted=!0,Ma(a,"mounted")),e.data.keepAlive&&(l._isMounted?Fa(a):Pa(a,!0))},destroy:function(e){var l=e.componentInstance;l._isDestroyed||(e.data.keepAlive?Ea(l,!0):l.$destroy())}},Ql=Object.keys(Kl);function Yl(e,l,a,r,i){if(!u(e)){var o=a.$options._base;if(v(e)&&(e=o.extend(e)),"function"===typeof e){var b;if(u(e.cid)&&(b=e,e=da(b,o),void 0===e))return fa(b,l,a,r,i);l=l||{},cu(e),t(l.model)&&la(e.options,l);var s=hl(l,e,i);if(n(e.options.functional))return ql(e,s,l,a,r);var c=l.on;if(l.on=l.nativeOn,n(e.options.abstract)){var f=l.slot;l={},f&&(l.slot=f)}Xl(l);var d=e.options.name||i,p=new pe("vue-component-"+e.cid+(d?"-"+d:""),l,void 0,void 0,void 0,a,{Ctor:e,propsData:s,listeners:c,tag:i,children:r},b);return p}}}function Zl(e,l){var a={_isComponent:!0,_parentVnode:e,parent:l},u=e.data.inlineTemplate;return t(u)&&(a.render=u.render,a.staticRenderFns=u.staticRenderFns),new e.componentOptions.Ctor(a)}function Xl(e){for(var l=e.hook||(e.hook={}),a=0;a<Ql.length;a++){var u=Ql[a],t=l[u],n=Kl[u];t===n||t&&t._merged||(l[u]=t?ea(n,t):n)}}function ea(e,l){var a=function(a,u){e(a,u),l(a,u)};return a._merged=!0,a}function la(e,l){var a=e.model&&e.model.prop||"value",u=e.model&&e.model.event||"input";(l.attrs||(l.attrs={}))[a]=l.model.value;var n=l.on||(l.on={}),r=n[u],i=l.model.callback;t(r)?(Array.isArray(r)?-1===r.indexOf(i):r!==i)&&(n[u]=[i].concat(r)):n[u]=i}var aa=1,ua=2;function ta(e,l,a,u,t,r){return(Array.isArray(a)||i(a))&&(t=u,u=a,a=void 0),n(r)&&(t=ua),na(e,l,a,u,t)}function na(e,l,a,u,n){if(t(a)&&t(a.__ob__))return ye();if(t(a)&&t(a.is)&&(l=a.is),!l)return ye();var r,i,v;(Array.isArray(u)&&"function"===typeof u[0]&&(a=a||{},a.scopedSlots={default:u[0]},u.length=0),n===ua?u=_l(u):n===aa&&(u=gl(u)),"string"===typeof l)?(i=e.$vnode&&e.$vnode.ns||z.getTagNamespace(l),r=z.isReservedTag(l)?new pe(z.parsePlatformTagName(l),a,u,void 0,void 0,e):a&&a.pre||!t(v=He(e.$options,"components",l))?new pe(l,a,u,void 0,void 0,e):Yl(v,a,e,u,l)):r=Yl(l,a,e,u);return Array.isArray(r)?r:t(r)?(t(i)&&ra(r,i),t(a)&&ia(a),r):ye()}function ra(e,l,a){if(e.ns=l,"foreignObject"===e.tag&&(l=void 0,a=!0),t(e.children))for(var r=0,i=e.children.length;r<i;r++){var v=e.children[r];t(v.tag)&&(u(v.ns)||n(a)&&"svg"!==v.tag)&&ra(v,l,a)}}function ia(e){v(e.style)&&sl(e.style),v(e.class)&&sl(e.class)}function va(e){e._vnode=null,e._staticTrees=null;var l=e.$options,u=e.$vnode=l._parentVnode,t=u&&u.context;e.$slots=xl(l._renderChildren,t),e.$scopedSlots=a,e._c=function(l,a,u,t){return ta(e,l,a,u,t,!1)},e.$createElement=function(l,a,u,t){return ta(e,l,a,u,t,!0)};var n=u&&u.data;Ee(e,"$attrs",n&&n.attrs||a,null,!0),Ee(e,"$listeners",l._parentListeners||a,null,!0)}var oa,ba=null;function sa(e){Gl(e.prototype),e.prototype.$nextTick=function(e){return ol(e,this)},e.prototype._render=function(){var e,l=this,a=l.$options,u=a.render,t=a._parentVnode;t&&(l.$scopedSlots=Sl(t.data.scopedSlots,l.$slots,l.$scopedSlots)),l.$vnode=t;try{ba=l,e=u.call(l._renderProxy,l.$createElement)}catch(lt){Ye(lt,l,"render"),e=l._vnode}finally{ba=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof pe||(e=ye()),e.parent=t,e}}function ca(e,l){return(e.__esModule||ve&&"Module"===e[Symbol.toStringTag])&&(e=e.default),v(e)?l.extend(e):e}function fa(e,l,a,u,t){var n=ye();return n.asyncFactory=e,n.asyncMeta={data:l,context:a,children:u,tag:t},n}function da(e,l){if(n(e.error)&&t(e.errorComp))return e.errorComp;if(t(e.resolved))return e.resolved;var a=ba;if(a&&t(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a),n(e.loading)&&t(e.loadingComp))return e.loadingComp;if(a&&!t(e.owners)){var r=e.owners=[a],i=!0,o=null,b=null;a.$on("hook:destroyed",function(){return g(r,a)});var s=function(e){for(var l=0,a=r.length;l<a;l++)r[l].$forceUpdate();e&&(r.length=0,null!==o&&(clearTimeout(o),o=null),null!==b&&(clearTimeout(b),b=null))},c=U(function(a){e.resolved=ca(a,l),i?r.length=0:s(!0)}),d=U(function(l){t(e.errorComp)&&(e.error=!0,s(!0))}),p=e(c,d);return v(p)&&(f(p)?u(e.resolved)&&p.then(c,d):f(p.component)&&(p.component.then(c,d),t(p.error)&&(e.errorComp=ca(p.error,l)),t(p.loading)&&(e.loadingComp=ca(p.loading,l),0===p.delay?e.loading=!0:o=setTimeout(function(){o=null,u(e.resolved)&&u(e.error)&&(e.loading=!0,s(!1))},p.delay||200)),t(p.timeout)&&(b=setTimeout(function(){b=null,u(e.resolved)&&d(null)},p.timeout)))),i=!1,e.loading?e.loadingComp:e.resolved}}function pa(e){return e.isComment&&e.asyncFactory}function ha(e){if(Array.isArray(e))for(var l=0;l<e.length;l++){var a=e[l];if(t(a)&&(t(a.componentOptions)||pa(a)))return a}}function ya(e){e._events=Object.create(null),e._hasHookEvent=!1;var l=e.$options._parentListeners;l&&wa(e,l)}function ga(e,l){oa.$on(e,l)}function _a(e,l){oa.$off(e,l)}function ma(e,l){var a=oa;return function u(){var t=l.apply(null,arguments);null!==t&&a.$off(e,u)}}function wa(e,l,a){oa=e,pl(l,a||{},ga,_a,ma,e),oa=void 0}function Oa(e){var l=/^hook:/;e.prototype.$on=function(e,a){var u=this;if(Array.isArray(e))for(var t=0,n=e.length;t<n;t++)u.$on(e[t],a);else(u._events[e]||(u._events[e]=[])).push(a),l.test(e)&&(u._hasHookEvent=!0);return u},e.prototype.$once=function(e,l){var a=this;function u(){a.$off(e,u),l.apply(a,arguments)}return u.fn=l,a.$on(e,u),a},e.prototype.$off=function(e,l){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(e)){for(var u=0,t=e.length;u<t;u++)a.$off(e[u],l);return a}var n,r=a._events[e];if(!r)return a;if(!l)return a._events[e]=null,a;var i=r.length;while(i--)if(n=r[i],n===l||n.fn===l){r.splice(i,1);break}return a},e.prototype.$emit=function(e){var l=this,a=l._events[e];if(a){a=a.length>1?E(a):a;for(var u=E(arguments,1),t='event handler for "'+e+'"',n=0,r=a.length;n<r;n++)Ze(a[n],l,u,l,t)}return l}}var Aa=null;function $a(e){var l=Aa;return Aa=e,function(){Aa=l}}function xa(e){var l=e.$options,a=l.parent;if(a&&!l.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(e)}e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function ka(e){e.prototype._update=function(e,l){var a=this,u=a.$el,t=a._vnode,n=$a(a);a._vnode=e,a.$el=t?a.__patch__(t,e):a.__patch__(a.$el,e,l,!1),n(),u&&(u.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Ma(e,"beforeDestroy"),e._isBeingDestroyed=!0;var l=e.$parent;!l||l._isBeingDestroyed||e.$options.abstract||g(l.$children,e),e._watcher&&e._watcher.teardown();var a=e._watchers.length;while(a--)e._watchers[a].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Ma(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Sa(e,l,u,t,n){var r=t.data.scopedSlots,i=e.$scopedSlots,v=!!(r&&!r.$stable||i!==a&&!i.$stable||r&&e.$scopedSlots.$key!==r.$key),o=!!(n||e.$options._renderChildren||v);if(e.$options._parentVnode=t,e.$vnode=t,e._vnode&&(e._vnode.parent=t),e.$options._renderChildren=n,e.$attrs=t.data.attrs||a,e.$listeners=u||a,l&&e.$options.props){xe(!1);for(var b=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var f=s[c],d=e.$options.props;b[f]=qe(f,d,l,e)}xe(!0),e.$options.propsData=l}u=u||a;var p=e.$options._parentListeners;e.$options._parentListeners=u,wa(e,u,p),o&&(e.$slots=xl(n,t.context),e.$forceUpdate())}function ja(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Pa(e,l){if(l){if(e._directInactive=!1,ja(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var a=0;a<e.$children.length;a++)Pa(e.$children[a]);Ma(e,"activated")}}function Ea(e,l){if((!l||(e._directInactive=!0,!ja(e)))&&!e._inactive){e._inactive=!0;for(var a=0;a<e.$children.length;a++)Ea(e.$children[a]);Ma(e,"deactivated")}}function Ma(e,l){fe();var a=e.$options[l],u=l+" hook";if(a)for(var t=0,n=a.length;t<n;t++)Ze(a[t],e,null,e,u);e._hasHookEvent&&e.$emit("hook:"+l),de()}var Ca=[],Ta=[],Na={},Ia=!1,Da=!1,Ba=0;function Ua(){Ba=Ca.length=Ta.length=0,Na={},Ia=Da=!1}var Ra=Date.now;if(K&&!X){var Va=window.performance;Va&&"function"===typeof Va.now&&Ra()>document.createEvent("Event").timeStamp&&(Ra=function(){return Va.now()})}function za(){var e,l;for(Ra(),Da=!0,Ca.sort(function(e,l){return e.id-l.id}),Ba=0;Ba<Ca.length;Ba++)e=Ca[Ba],e.before&&e.before(),l=e.id,Na[l]=null,e.run();var a=Ta.slice(),u=Ca.slice();Ua(),Ga(a),La(u),ne&&z.devtools&&ne.emit("flush")}function La(e){var l=e.length;while(l--){var a=e[l],u=a.vm;u._watcher===a&&u._isMounted&&!u._isDestroyed&&Ma(u,"updated")}}function Fa(e){e._inactive=!1,Ta.push(e)}function Ga(e){for(var l=0;l<e.length;l++)e[l]._inactive=!0,Pa(e[l],!0)}function Ha(e){var l=e.id;if(null==Na[l]){if(Na[l]=!0,Da){var a=Ca.length-1;while(a>Ba&&Ca[a].id>e.id)a--;Ca.splice(a+1,0,e)}else Ca.push(e);Ia||(Ia=!0,ol(za))}}var qa=0,Ja=function(e,l,a,u,t){this.vm=e,t&&(e._watcher=this),e._watchers.push(this),u?(this.deep=!!u.deep,this.user=!!u.user,this.lazy=!!u.lazy,this.sync=!!u.sync,this.before=u.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++qa,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ie,this.newDepIds=new ie,this.expression="","function"===typeof l?this.getter=l:(this.getter=q(l),this.getter||(this.getter=T)),this.value=this.lazy?void 0:this.get()};Ja.prototype.get=function(){var e;fe(this);var l=this.vm;try{e=this.getter.call(l,l)}catch(lt){if(!this.user)throw lt;Ye(lt,l,'getter for watcher "'+this.expression+'"')}finally{this.deep&&sl(e),de(),this.cleanupDeps()}return e},Ja.prototype.addDep=function(e){var l=e.id;this.newDepIds.has(l)||(this.newDepIds.add(l),this.newDeps.push(e),this.depIds.has(l)||e.addSub(this))},Ja.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var l=this.deps[e];this.newDepIds.has(l.id)||l.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},Ja.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ha(this)},Ja.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||v(e)||this.deep){var l=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,l)}catch(lt){Ye(lt,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,l)}}},Ja.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ja.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Ja.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Wa={enumerable:!0,configurable:!0,get:T,set:T};function Ka(e,l,a){Wa.get=function(){return this[l][a]},Wa.set=function(e){this[l][a]=e},Object.defineProperty(e,a,Wa)}function Qa(e){e._watchers=[];var l=e.$options;l.props&&Ya(e,l.props),l.methods&&nu(e,l.methods),l.data?Za(e):Pe(e._data={},!0),l.computed&&lu(e,l.computed),l.watch&&l.watch!==ae&&ru(e,l.watch)}function Ya(e,l){var a=e.$options.propsData||{},u=e._props={},t=e.$options._propKeys=[],n=!e.$parent;n||xe(!1);var r=function(n){t.push(n);var r=qe(n,l,a,e);Ee(u,n,r),n in e||Ka(e,"_props",n)};for(var i in l)r(i);xe(!0)}function Za(e){var l=e.$options.data;l=e._data="function"===typeof l?Xa(l,e):l||{},b(l)||(l={});var a=Object.keys(l),u=e.$options.props,t=(e.$options.methods,a.length);while(t--){var n=a[t];0,u&&m(u,n)||F(n)||Ka(e,"_data",n)}Pe(l,!0)}function Xa(e,l){fe();try{return e.call(l,l)}catch(lt){return Ye(lt,l,"data()"),{}}finally{de()}}var eu={lazy:!0};function lu(e,l){var a=e._computedWatchers=Object.create(null),u=te();for(var t in l){var n=l[t],r="function"===typeof n?n:n.get;0,u||(a[t]=new Ja(e,r||T,T,eu)),t in e||au(e,t,n)}}function au(e,l,a){var u=!te();"function"===typeof a?(Wa.get=u?uu(l):tu(a),Wa.set=T):(Wa.get=a.get?u&&!1!==a.cache?uu(l):tu(a.get):T,Wa.set=a.set||T),Object.defineProperty(e,l,Wa)}function uu(e){return function(){var l=this._computedWatchers&&this._computedWatchers[e];if(l)return l.dirty&&l.evaluate(),se.target&&l.depend(),l.value}}function tu(e){return function(){return e.call(this,this)}}function nu(e,l){e.$options.props;for(var a in l)e[a]="function"!==typeof l[a]?T:P(l[a],e)}function ru(e,l){for(var a in l){var u=l[a];if(Array.isArray(u))for(var t=0;t<u.length;t++)iu(e,a,u[t]);else iu(e,a,u)}}function iu(e,l,a,u){return b(a)&&(u=a,a=a.handler),"string"===typeof a&&(a=e[a]),e.$watch(l,a,u)}function vu(e){var l={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",l),Object.defineProperty(e.prototype,"$props",a),e.prototype.$set=Me,e.prototype.$delete=Ce,e.prototype.$watch=function(e,l,a){var u=this;if(b(l))return iu(u,e,l,a);a=a||{},a.user=!0;var t=new Ja(u,e,l,a);if(a.immediate)try{l.call(u,t.value)}catch(n){Ye(n,u,'callback for immediate watcher "'+t.expression+'"')}return function(){t.teardown()}}}var ou=0;function bu(e){e.prototype._init=function(e){var l=this;l._uid=ou++,l._isVue=!0,e&&e._isComponent?su(l,e):l.$options=Ge(cu(l.constructor),e||{},l),l._renderProxy=l,l._self=l,xa(l),ya(l),va(l),Ma(l,"beforeCreate"),"mp-toutiao"!==l.mpHost&&Al(l),Qa(l),"mp-toutiao"!==l.mpHost&&Ol(l),"mp-toutiao"!==l.mpHost&&Ma(l,"created"),l.$options.el&&l.$mount(l.$options.el)}}function su(e,l){var a=e.$options=Object.create(e.constructor.options),u=l._parentVnode;a.parent=l.parent,a._parentVnode=u;var t=u.componentOptions;a.propsData=t.propsData,a._parentListeners=t.listeners,a._renderChildren=t.children,a._componentTag=t.tag,l.render&&(a.render=l.render,a.staticRenderFns=l.staticRenderFns)}function cu(e){var l=e.options;if(e.super){var a=cu(e.super),u=e.superOptions;if(a!==u){e.superOptions=a;var t=fu(e);t&&M(e.extendOptions,t),l=e.options=Ge(a,e.extendOptions),l.name&&(l.components[l.name]=e)}}return l}function fu(e){var l,a=e.options,u=e.sealedOptions;for(var t in a)a[t]!==u[t]&&(l||(l={}),l[t]=a[t]);return l}function du(e){this._init(e)}function pu(e){e.use=function(e){var l=this._installedPlugins||(this._installedPlugins=[]);if(l.indexOf(e)>-1)return this;var a=E(arguments,1);return a.unshift(this),"function"===typeof e.install?e.install.apply(e,a):"function"===typeof e&&e.apply(null,a),l.push(e),this}}function hu(e){e.mixin=function(e){return this.options=Ge(this.options,e),this}}function yu(e){e.cid=0;var l=1;e.extend=function(e){e=e||{};var a=this,u=a.cid,t=e._Ctor||(e._Ctor={});if(t[u])return t[u];var n=e.name||a.options.name;var r=function(e){this._init(e)};return r.prototype=Object.create(a.prototype),r.prototype.constructor=r,r.cid=l++,r.options=Ge(a.options,e),r["super"]=a,r.options.props&&gu(r),r.options.computed&&_u(r),r.extend=a.extend,r.mixin=a.mixin,r.use=a.use,R.forEach(function(e){r[e]=a[e]}),n&&(r.options.components[n]=r),r.superOptions=a.options,r.extendOptions=e,r.sealedOptions=M({},r.options),t[u]=r,r}}function gu(e){var l=e.options.props;for(var a in l)Ka(e.prototype,"_props",a)}function _u(e){var l=e.options.computed;for(var a in l)au(e.prototype,a,l[a])}function mu(e){R.forEach(function(l){e[l]=function(e,a){return a?("component"===l&&b(a)&&(a.name=a.name||e,a=this.options._base.extend(a)),"directive"===l&&"function"===typeof a&&(a={bind:a,update:a}),this.options[l+"s"][e]=a,a):this.options[l+"s"][e]}})}function wu(e){return e&&(e.Ctor.options.name||e.tag)}function Ou(e,l){return Array.isArray(e)?e.indexOf(l)>-1:"string"===typeof e?e.split(",").indexOf(l)>-1:!!s(e)&&e.test(l)}function Au(e,l){var a=e.cache,u=e.keys,t=e._vnode;for(var n in a){var r=a[n];if(r){var i=wu(r.componentOptions);i&&!l(i)&&$u(a,n,u,t)}}}function $u(e,l,a,u){var t=e[l];!t||u&&t.tag===u.tag||t.componentInstance.$destroy(),e[l]=null,g(a,l)}bu(du),vu(du),Oa(du),ka(du),sa(du);var xu=[String,RegExp,Array],ku={name:"keep-alive",abstract:!0,props:{include:xu,exclude:xu,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)$u(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(l){Au(e,function(e){return Ou(l,e)})}),this.$watch("exclude",function(l){Au(e,function(e){return!Ou(l,e)})})},render:function(){var e=this.$slots.default,l=ha(e),a=l&&l.componentOptions;if(a){var u=wu(a),t=this,n=t.include,r=t.exclude;if(n&&(!u||!Ou(n,u))||r&&u&&Ou(r,u))return l;var i=this,v=i.cache,o=i.keys,b=null==l.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):l.key;v[b]?(l.componentInstance=v[b].componentInstance,g(o,b),o.push(b)):(v[b]=l,o.push(b),this.max&&o.length>parseInt(this.max)&&$u(v,o[0],o,this._vnode)),l.data.keepAlive=!0}return l||e&&e[0]}},Su={KeepAlive:ku};function ju(e){var l={get:function(){return z}};Object.defineProperty(e,"config",l),e.util={warn:oe,extend:M,mergeOptions:Ge,defineReactive:Ee},e.set=Me,e.delete=Ce,e.nextTick=ol,e.observable=function(e){return Pe(e),e},e.options=Object.create(null),R.forEach(function(l){e.options[l+"s"]=Object.create(null)}),e.options._base=e,M(e.options.components,Su),pu(e),hu(e),yu(e),mu(e)}ju(du),Object.defineProperty(du.prototype,"$isServer",{get:te}),Object.defineProperty(du.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(du,"FunctionalRenderContext",{value:Hl}),du.version="2.6.10";var Pu="[object Array]",Eu="[object Object]";function Mu(e,l){var a={};return Cu(e,l),Tu(e,l,"",a),a}function Cu(e,l){if(e!==l){var a=Iu(e),u=Iu(l);if(a==Eu&&u==Eu){if(Object.keys(e).length>=Object.keys(l).length)for(var t in l){var n=e[t];void 0===n?e[t]=null:Cu(n,l[t])}}else a==Pu&&u==Pu&&e.length>=l.length&&l.forEach(function(l,a){Cu(e[a],l)})}}function Tu(e,l,a,u){if(e!==l){var t=Iu(e),n=Iu(l);if(t==Eu)if(n!=Eu||Object.keys(e).length<Object.keys(l).length)Nu(u,a,e);else{var r=function(t){var n=e[t],r=l[t],i=Iu(n),v=Iu(r);if(i!=Pu&&i!=Eu)n!=l[t]&&Nu(u,(""==a?"":a+".")+t,n);else if(i==Pu)v!=Pu?Nu(u,(""==a?"":a+".")+t,n):n.length<r.length?Nu(u,(""==a?"":a+".")+t,n):n.forEach(function(e,l){Tu(e,r[l],(""==a?"":a+".")+t+"["+l+"]",u)});else if(i==Eu)if(v!=Eu||Object.keys(n).length<Object.keys(r).length)Nu(u,(""==a?"":a+".")+t,n);else for(var o in n)Tu(n[o],r[o],(""==a?"":a+".")+t+"."+o,u)};for(var i in e)r(i)}else t==Pu?n!=Pu?Nu(u,a,e):e.length<l.length?Nu(u,a,e):e.forEach(function(e,t){Tu(e,l[t],a+"["+t+"]",u)}):Nu(u,a,e)}}function Nu(e,l,a){e[l]=a}function Iu(e){return Object.prototype.toString.call(e)}function Du(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var l=e.$scope;console.log("["+ +new Date+"]["+(l.is||l.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var a=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var u=0;u<a.length;u++)a[u]()}}function Bu(e){return Ca.find(function(l){return e._watcher===l})}function Uu(e,l){if(!e.__next_tick_pending&&!Bu(e)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:nextVueTick")}return ol(l,e)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var u=e.$scope;console.log("["+ +new Date+"]["+(u.is||u.route)+"]["+e._uid+"]:nextMPTick")}var t;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(l)try{l.call(e)}catch(lt){Ye(lt,e,"nextTick")}else t&&t(e)}),!l&&"undefined"!==typeof Promise)return new Promise(function(e){t=e})}function Ru(e){var l=Object.create(null),a=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return a.reduce(function(l,a){return l[a]=e[a],l},l),Object.assign(l,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(l["name"]=e.name,l["value"]=e.value),JSON.parse(JSON.stringify(l))}var Vu=function(e,l){var a=this;if(null!==l&&("page"===this.mpType||"component"===this.mpType)){var u=this.$scope,t=Object.create(null);try{t=Ru(this)}catch(i){console.error(i)}t.__webviewId__=u.data.__webviewId__;var n=Object.create(null);Object.keys(t).forEach(function(e){n[e]=u.data[e]});var r=Mu(t,n);Object.keys(r).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(u.is||u.route)+"]["+this._uid+"]差量更新",JSON.stringify(r)),this.__next_tick_pending=!0,u.setData(r,function(){a.__next_tick_pending=!1,Du(a)})):Du(this)}};function zu(){}function Lu(e,l,a){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=zu),e.$options.render||(e.$options.render=zu),"mp-toutiao"!==e.mpHost&&Ma(e,"beforeMount");var u=function(){e._update(e._render(),a)};return new Ja(e,u,T,{before:function(){e._isMounted&&!e._isDestroyed&&Ma(e,"beforeUpdate")}},!0),a=!1,e}function Fu(e,l){return t(e)||t(l)?Gu(e,Hu(l)):""}function Gu(e,l){return e?l?e+" "+l:e:l||""}function Hu(e){return Array.isArray(e)?qu(e):v(e)?Ju(e):"string"===typeof e?e:""}function qu(e){for(var l,a="",u=0,n=e.length;u<n;u++)t(l=Hu(e[u]))&&""!==l&&(a&&(a+=" "),a+=l);return a}function Ju(e){var l="";for(var a in e)e[a]&&(l&&(l+=" "),l+=a);return l}var Wu=w(function(e){var l={},a=/;(?![^(]*\))/g,u=/:(.+)/;return e.split(a).forEach(function(e){if(e){var a=e.split(u);a.length>1&&(l[a[0].trim()]=a[1].trim())}}),l});function Ku(e){return Array.isArray(e)?C(e):"string"===typeof e?Wu(e):e}var Qu=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yu(e,l){var a=l.split("."),u=a[0];return 0===u.indexOf("__$n")&&(u=parseInt(u.replace("__$n",""))),1===a.length?e[u]:Yu(e[u],a.slice(1).join("."))}function Zu(e){e.config.errorHandler=function(e){console.error(e)};var l=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:E(arguments,1)}),l.apply(this,arguments)},e.prototype.$nextTick=function(e){return Uu(this,e)},Qu.forEach(function(l){e.prototype[l]=function(e){if(this.$scope)return this.$scope[l](e)}}),e.prototype.__init_provide=Ol,e.prototype.__init_injections=Al,e.prototype.__call_hook=function(e,l){var a=this;fe();var u,t=a.$options[e],n=e+" hook";if(t)for(var r=0,i=t.length;r<i;r++)u=Ze(t[r],a,l?[l]:null,a,n);return a._hasHookEvent&&a.$emit("hook:"+e),de(),u},e.prototype.__set_model=function(e,l,a,u){Array.isArray(u)&&(-1!==u.indexOf("trim")&&(a=a.trim()),-1!==u.indexOf("number")&&(a=this._n(a))),e||(e=this),e[l]=a},e.prototype.__set_sync=function(e,l,a){e||(e=this),e[l]=a},e.prototype.__get_orig=function(e){return b(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,l){return Yu(l||this,e)},e.prototype.__get_class=function(e,l){return Fu(l,e)},e.prototype.__get_style=function(e,l){if(!e&&!l)return"";var a=Ku(e),u=l?M(l,a):a;return Object.keys(u).map(function(e){return k(e)+":"+u[e]}).join(";")},e.prototype.__map=function(e,l){var a,u,t,n,r;if(Array.isArray(e)){for(a=new Array(e.length),u=0,t=e.length;u<t;u++)a[u]=l(e[u],u);return a}if(v(e)){for(n=Object.keys(e),a=Object.create(null),u=0,t=n.length;u<t;u++)r=n[u],a[r]=l(e[r],r,u);return a}return[]}}var Xu=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function et(e){var l=e.extend;e.extend=function(e){e=e||{};var a=e.methods;return a&&Object.keys(a).forEach(function(l){-1!==Xu.indexOf(l)&&(e[l]=a[l],delete a[l])}),l.call(this,e)};var a=e.config.optionMergeStrategies,u=a.created;Xu.forEach(function(e){a[e]=u}),e.prototype.__lifecycle_hooks__=Xu}du.prototype.__patch__=Vu,du.prototype.$mount=function(e,l){return Lu(this,e,l)},et(du),Zu(du),l["default"]=du}.call(this,a("c8ba"))},6710:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("fd87"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"684a":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("d2f1"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},6866:function(e){e.exports={zh:{title:"账户管理",titleType1:"安全设置",ChangePassword:"修改密码",titleType2:"账号认证",phoneAuthentication:"手机认证",RealNameAuthentication:"实名认证",MailAuthentication:"邮箱认证",titleType3:"账号绑定",qqBinding:"QQ",wxBinding:"微信",NotBound:"未绑定",IsBinding:"已绑定"},en:{title:"Account Management",titleType1:"安全设置",ChangePassword:"修改密码",titleType2:"Account authentication",phoneAuthentication:"phone Authentication",RealNameAuthentication:"Real Name Authentication",MailAuthentication:"Mail Authentication",titleType3:"账号绑定",qqBinding:"QQ",wxBinding:"Wechat",NotBound:"NotBound",IsBinding:"IsBinding"}}},"6e42":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.createApp=dl,l.createComponent=$l,l.createPage=Al,l.default=void 0;var u=t(a("66fd"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e,l){return v(e)||i(e,l)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function i(e,l){var a=[],u=!0,t=!1,n=void 0;try{for(var r,i=e[Symbol.iterator]();!(u=(r=i.next()).done);u=!0)if(a.push(r.value),l&&a.length===l)break}catch(v){t=!0,n=v}finally{try{u||null==i["return"]||i["return"]()}finally{if(t)throw n}}return a}function v(e){if(Array.isArray(e))return e}function o(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function b(e){return f(e)||c(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function f(e){if(Array.isArray(e)){for(var l=0,a=new Array(e.length);l<e.length;l++)a[l]=e[l];return a}}var d=Object.prototype.toString,p=Object.prototype.hasOwnProperty;function h(e){return"function"===typeof e}function y(e){return"string"===typeof e}function g(e){return"[object Object]"===d.call(e)}function _(e,l){return p.call(e,l)}function m(){}function w(e){var l=Object.create(null);return function(a){var u=l[a];return u||(l[a]=e(a))}}var O=/-(\w)/g,A=w(function(e){return e.replace(O,function(e,l){return l?l.toUpperCase():""})}),$=["invoke","success","fail","complete","returnValue"],x={},k={};function S(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?j(a):a}function j(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function P(e,l){var a=e.indexOf(l);-1!==a&&e.splice(a,1)}function E(e,l){Object.keys(l).forEach(function(a){-1!==$.indexOf(a)&&h(l[a])&&(e[a]=S(e[a],l[a]))})}function M(e,l){e&&l&&Object.keys(l).forEach(function(a){-1!==$.indexOf(a)&&h(l[a])&&P(e[a],l[a])})}function C(e,l){"string"===typeof e&&g(l)?E(k[e]||(k[e]={}),l):g(e)&&E(x,e)}function T(e,l){"string"===typeof e?g(l)?M(k[e],l):delete k[e]:g(e)&&M(x,e)}function N(e){return function(l){return e(l)||l}}function I(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function D(e,l){for(var a=!1,u=0;u<e.length;u++){var t=e[u];if(a)a=Promise.then(N(t));else{var n=t(l);if(I(n)&&(a=Promise.resolve(n)),!1===n)return{then:function(){}}}}return a||{then:function(e){return e(l)}}}function B(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(e[a])){var u=l[a];l[a]=function(l){D(e[a],l).then(function(e){return h(u)&&u(e)||e})}}}),l}function U(e,l){var a=[];Array.isArray(x.returnValue)&&a.push.apply(a,b(x.returnValue));var u=k[e];return u&&Array.isArray(u.returnValue)&&a.push.apply(a,b(u.returnValue)),a.forEach(function(e){l=e(l)||l}),l}function R(e){var l=Object.create(null);Object.keys(x).forEach(function(e){"returnValue"!==e&&(l[e]=x[e].slice())});var a=k[e];return a&&Object.keys(a).forEach(function(e){"returnValue"!==e&&(l[e]=(l[e]||[]).concat(a[e]))}),l}function V(e,l,a){for(var u=arguments.length,t=new Array(u>3?u-3:0),n=3;n<u;n++)t[n-3]=arguments[n];var r=R(e);if(r&&Object.keys(r).length){if(Array.isArray(r.invoke)){var i=D(r.invoke,a);return i.then(function(e){return l.apply(void 0,[B(r,e)].concat(t))})}return l.apply(void 0,[B(r,a)].concat(t))}return l.apply(void 0,[a].concat(t))}var z={returnValue:function(e){return I(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},L=/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,F=/^create|Manager$/,G=/^on/;function H(e){return F.test(e)}function q(e){return L.test(e)}function J(e){return G.test(e)}function W(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function K(e){return!(H(e)||q(e)||J(e))}function Q(e,l){return K(e)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length,t=new Array(u>1?u-1:0),n=1;n<u;n++)t[n-1]=arguments[n];return h(a.success)||h(a.fail)||h(a.complete)?U(e,V.apply(void 0,[e,l,a].concat(t))):U(e,W(new Promise(function(u,n){V.apply(void 0,[e,l,Object.assign({},a,{success:u,fail:n})].concat(t)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var l=this.constructor;return this.then(function(a){return l.resolve(e()).then(function(){return a})},function(a){return l.resolve(e()).then(function(){throw a})})})})))}:l}var Y=1e-4,Z=750,X=!1,ee=0,le=0;function ae(){var e=wx.getSystemInfoSync(),l=e.platform,a=e.pixelRatio,u=e.windowWidth;ee=u,le=a,X="ios"===l}function ue(e,l){if(0===ee&&ae(),e=Number(e),0===e)return 0;var a=e/Z*(l||ee);return a<0&&(a=-a),a=Math.floor(a+Y),0===a?1!==le&&X?.5:1:e<0?-a:a}var te={promiseInterceptor:z},ne=Object.freeze({upx2px:ue,interceptors:te,addInterceptor:C,removeInterceptor:T}),re={},ie=[],ve=[],oe=["success","fail","cancel","complete"];function be(e,l,a){return function(u){return l(ce(e,u,a))}}function se(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},t=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(l)){var n=!0===t?l:{};for(var r in h(a)&&(a=a(l,n)||{}),l)if(_(a,r)){var i=a[r];h(i)&&(i=i(l[r],l,n)),i?y(i)?n[i]=l[r]:g(i)&&(n[i.name?i.name:r]=i.value):console.warn("app-plus ".concat(e,"暂不支持").concat(r))}else-1!==oe.indexOf(r)?n[r]=be(e,l[r],u):t||(n[r]=l[r]);return n}return h(l)&&(l=be(e,l,u)),l}function ce(e,l,a){var u=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return h(re.returnValue)&&(l=re.returnValue(e,l)),se(e,l,a,{},u)}function fe(e,l){if(_(re,e)){var a=re[e];return a?function(l,u){var t=a;h(a)&&(t=a(l)),l=se(e,l,t.args,t.returnValue);var n=[l];"undefined"!==typeof u&&n.push(u);var r=wx[t.name||e].apply(wx,n);return q(e)?ce(e,r,t.returnValue,H(e)):r}:function(){console.error("app-plus 暂不支持".concat(e))}}return l}var de=Object.create(null),pe=["subscribePush","unsubscribePush","onPush","offPush","share"];function he(e){return function(l){var a=l.fail,u=l.complete,t={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};h(a)&&a(t),h(u)&&u(t)}}pe.forEach(function(e){de[e]=he(e)});var ye=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new u.default),e};var e}();function ge(e,l,a){return e[l].apply(e,a)}function _e(){return ge(ye(),"$on",Array.prototype.slice.call(arguments))}function me(){return ge(ye(),"$off",Array.prototype.slice.call(arguments))}function we(){return ge(ye(),"$once",Array.prototype.slice.call(arguments))}function Oe(){return ge(ye(),"$emit",Array.prototype.slice.call(arguments))}var Ae=Object.freeze({$on:_e,$off:me,$once:we,$emit:Oe});function $e(e){e.$processed=!0,e.postMessage=function(l){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:l},e.id)};var l=[];if(e.onMessage=function(e){l.push(e)},e.$consumeMessage=function(e){l.forEach(function(l){return l(e)})},e.__uniapp_mask_id){var a=e.__uniapp_mask,u=plus.webview.getWebviewById(e.__uniapp_mask_id);u=u.parent()||u;var t=e.show,n=e.hide,r=e.close,i=function(){u.setStyle({mask:a})},v=function(){u.setStyle({mask:"none"})};e.show=function(){i();for(var l=arguments.length,a=new Array(l),u=0;u<l;u++)a[u]=arguments[u];return t.apply(e,a)},e.hide=function(){v();for(var l=arguments.length,a=new Array(l),u=0;u<l;u++)a[u]=arguments[u];return n.apply(e,a)},e.close=function(){v(),l=[];for(var a=arguments.length,u=new Array(a),t=0;t<a;t++)u[t]=arguments[t];return r.apply(e,u)}}}function xe(e){var l=plus.webview.getWebviewById(e);return l&&!l.$processed&&$e(l),l}function ke(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}var Se=Object.freeze({requireNativePlugin:ke,getSubNVueById:xe}),je=Page,Pe=Component,Ee=/:/g,Me=w(function(e){return A(e.replace(Ee,"-"))});function Ce(e){if(wx.canIUse("nextTick")){var l=e.triggerEvent;e.triggerEvent=function(a){for(var u=arguments.length,t=new Array(u>1?u-1:0),n=1;n<u;n++)t[n-1]=arguments[n];return l.apply(e,[Me(a)].concat(t))}}}function Te(e,l){var a=l[e];l[e]=a?function(){Ce(this);for(var e=arguments.length,l=new Array(e),u=0;u<e;u++)l[u]=arguments[u];return a.apply(this,l)}:function(){Ce(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Te("onLoad",e),je(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Te("created",e),Pe(e)};var Ne=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Ie(e,l){var a=e.$mp[e.mpType];l.forEach(function(l){_(a,l)&&(e[l]=a[l])})}function De(e,l){if(!l)return!0;if(u.default.options&&Array.isArray(u.default.options[e]))return!0;if(l=l.default||l,h(l))return!!h(l.extendOptions[e])||!!(l.super&&l.super.options&&Array.isArray(l.super.options[e]));if(h(l[e]))return!0;var a=l.mixins;return Array.isArray(a)?!!a.find(function(l){return De(e,l)}):void 0}function Be(e,l,a){l.forEach(function(l){De(l,a)&&(e[l]=function(e){return this.$vm&&this.$vm.__call_hook(l,e)})})}function Ue(e,l){var a;return l=l.default||l,h(l)?(a=l,l=a.extendOptions):a=e.extend(l),[a,l]}function Re(e,l){if(Array.isArray(l)&&l.length){var a=Object.create(null);l.forEach(function(e){a[e]=!0}),e.$scopedSlots=e.$slots=a}}function Ve(e,l){e=(e||"").split(",");var a=e.length;1===a?l._$vueId=e[0]:2===a&&(l._$vueId=e[0],l._$vuePid=e[1])}function ze(e,l){var a=e.data||{},u=e.methods||{};if("function"===typeof a)try{a=a.call(l)}catch(t){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(t){}return g(a)||(a={}),Object.keys(u).forEach(function(e){-1!==l.__lifecycle_hooks__.indexOf(e)||_(a,e)||(a[e]=u[e])}),a}var Le=[String,Number,Boolean,Object,Array,null];function Fe(e){return function(l,a){this.$vm&&(this.$vm[e]=l)}}function Ge(e,l){var a=e["behaviors"],u=e["extends"],t=e["mixins"],n=e["props"];n||(e["props"]=n=[]);var r=[];return Array.isArray(a)&&a.forEach(function(e){r.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(n)?(n.push("name"),n.push("value")):(n["name"]={type:String,default:""},n["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(u)&&u.props&&r.push(l({properties:qe(u.props,!0)})),Array.isArray(t)&&t.forEach(function(e){g(e)&&e.props&&r.push(l({properties:qe(e.props,!0)}))}),r}function He(e,l,a,u){return Array.isArray(l)&&1===l.length?l[0]:l}function qe(e){var l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return l||(a.vueId={type:String,value:""},a.vueSlots={type:null,value:[],observer:function(e,l){var a=Object.create(null);e.forEach(function(e){a[e]=!0}),this.setData({$slots:a})}}),Array.isArray(e)?e.forEach(function(e){a[e]={type:null,observer:Fe(e)}}):g(e)&&Object.keys(e).forEach(function(l){var u=e[l];if(g(u)){var t=u["default"];h(t)&&(t=t()),u.type=He(l,u.type),a[l]={type:-1!==Le.indexOf(u.type)?u.type:null,value:t,observer:Fe(l)}}else{var n=He(l,u);a[l]={type:-1!==Le.indexOf(n)?n:null,observer:Fe(l)}}}),a}function Je(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(l){}return e.stopPropagation=m,e.preventDefault=m,e.target=e.target||{},_(e,"detail")||(e.detail={}),g(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function We(e,l){var a=e;return l.forEach(function(l){var u=l[0],t=l[2];if(u||"undefined"!==typeof t){var n=l[1],r=l[3],i=u?e.__get_value(u,a):a;Number.isInteger(i)?a=t:n?Array.isArray(i)?a=i.find(function(l){return e.__get_value(n,l)===t}):g(i)?a=Object.keys(i).find(function(l){return e.__get_value(n,i[l])===t}):console.error("v-for 暂不支持循环数据：",i):a=i[t],r&&(a=e.__get_value(r,a))}}),a}function Ke(e,l,a){var u={};return Array.isArray(l)&&l.length&&l.forEach(function(l,t){"string"===typeof l?l?"$event"===l?u["$"+t]=a:0===l.indexOf("$event.")?u["$"+t]=e.__get_value(l.replace("$event.",""),a):u["$"+t]=e.__get_value(l):u["$"+t]=e:u["$"+t]=We(e,l)}),u}function Qe(e){for(var l={},a=1;a<e.length;a++){var u=e[a];l[u[0]]=u[1]}return l}function Ye(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],t=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,r=!1;if(t&&(r=l.currentTarget&&l.currentTarget.dataset&&"wx"===l.currentTarget.dataset.comType,!a.length))return r?[l]:l.detail.__args__||l.detail;var i=Ke(e,u,l),v=[];return a.forEach(function(e){"$event"===e?"__set_model"!==n||t?t&&!r?v.push(l.detail.__args__[0]):v.push(l):v.push(l.target.value):Array.isArray(e)&&"o"===e[0]?v.push(Qe(e)):"string"===typeof e&&_(i,e)?v.push(i[e]):v.push(e)}),v}var Ze="~",Xe="^";function el(e,l){return e===l||"regionchange"===l&&("begin"===e||"end"===e)}function ll(e){var l=this;e=Je(e);var a=(e.currentTarget||e.target).dataset;if(!a)return console.warn("事件信息不存在");var u=a.eventOpts||a["event-opts"];if(!u)return console.warn("事件信息不存在");var t=e.type,n=[];return u.forEach(function(a){var u=a[0],r=a[1],i=u.charAt(0)===Xe;u=i?u.slice(1):u;var v=u.charAt(0)===Ze;u=v?u.slice(1):u,r&&el(t,u)&&r.forEach(function(a){var u=a[0];if(u){var t=l.$vm;t.$options.generic&&t.$parent&&t.$parent.$parent&&(t=t.$parent.$parent);var r=t[u];if(!h(r))throw new Error(" _vm.".concat(u," is not a function"));if(v){if(r.once)return;r.once=!0}n.push(r.apply(t,Ye(l.$vm,e,a[1],a[2],i,u)))}})}),"input"===t&&1===n.length&&"undefined"!==typeof n[0]?n[0]:void 0}var al=["onShow","onHide","onError","onPageNotFound"];function ul(e,l){var a=l.mocks,t=l.initRefs;u.default.prototype.mpHost="app-plus",u.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=o({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(t(this),Ie(this,a)))}});var n={onLaunch:function(l){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",l),this.$vm.__call_hook("onLaunch",l))}};return n.globalData=e.$options.globalData||{},Be(n,al),n}var tl=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function nl(e,l){var a=e.$children,u=a.find(function(e){return e.$scope._$vueId===l});if(u)return u;for(var t=a.length-1;t>=0;t--)if(u=nl(a[t],l),u)return u}function rl(e){return Behavior(e)}function il(){return!!this.route}function vl(e){this.triggerEvent("__l",e)}function ol(e){var l=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},a=l.selectAllComponents(".vue-ref");a.forEach(function(l){var a=l.dataset.ref;e[a]=l.$vm||l});var u=l.selectAllComponents(".vue-ref-in-for");return u.forEach(function(l){var a=l.dataset.ref;e[a]||(e[a]=[]),e[a].push(l.$vm||l)}),e}})}function bl(e){var l,a=e.detail||e.value,u=a.vuePid,t=a.vueOptions;u&&(l=nl(this.$vm,u)),l||(l=this.$vm),t.parent=l}function sl(e){return ul(e,{mocks:tl,initRefs:ol})}var cl=["onUniNViewMessage"];function fl(e){var l=sl(e);return Be(l,cl),l}function dl(e){return App(fl(e)),e}function pl(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=l.isPage,t=l.initRelation,r=Ue(u.default,e),i=n(r,2),v=i[0],o=i[1],b={options:{multipleSlots:!0,addGlobalClass:!0},data:ze(o,u.default.prototype),behaviors:Ge(o,rl),properties:qe(o.props,!1,o.__file),lifetimes:{attached:function(){var e=this.properties,l={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:e};Ve(e.vueId,this),t.call(this,{vuePid:this._$vuePid,vueOptions:l}),this.$vm=new v(l),Re(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:bl,__e:ll}};return a?b:[b,v]}function hl(e){return pl(e,{isPage:il,initRelation:vl})}function yl(e){var l=hl(e);return l.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},l}var gl=["onShow","onHide","onUnload"];function _l(e,l){l.isPage,l.initRelation;var a=yl(e);return Be(a.methods,gl,e),a.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},a}function ml(e){return _l(e,{isPage:il,initRelation:vl})}gl.push.apply(gl,Ne);var wl=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Ol(e){var l=ml(e);return Be(l.methods,wl),l}function Al(e){return Component(Ol(e))}function $l(e){return Component(yl(e))}ie.forEach(function(e){re[e]=!1}),ve.forEach(function(e){var l=re[e]&&re[e].name?re[e].name:e;wx.canIUse(l)||(re[e]=!1)});var xl={};Object.keys(ne).forEach(function(e){xl[e]=ne[e]}),Object.keys(Ae).forEach(function(e){xl[e]=Ae[e]}),Object.keys(Se).forEach(function(e){xl[e]=Q(e,Se[e])}),Object.keys(wx).forEach(function(e){(_(wx,e)||_(re,e))&&(xl[e]=Q(e,fe(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=xl,e.UniEmitter=Ae),wx.createApp=dl,wx.createPage=Al,wx.createComponent=$l;var kl=xl,Sl=kl;l.default=Sl}).call(this,a("c8ba"))},"6fa2":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("30d2"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},7854:function(e){e.exports={zh:{title:"选择语言",btn:"确定"},en:{title:"Select Language",btn:"confirm"}}},8184:function(e,l,a){"use strict";(function(e,l,u){a("1222");var t=i(a("66fd")),n=i(a("d2d3")),r=i(a("8c78"));function i(e){return e&&e.__esModule?e:{default:e}}function v(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},u=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),u.forEach(function(l){o(e,l,a[l])})}return e}function o(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}t.default.config.productionTip=!1;var b="http://192.168.0.106/";function s(a,u){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return console.log(e(b," at main.js:15")),new Promise(function(r,i){n&&l.showLoading({title:"加载中"}),l.getStorage({key:"token",success:function(e){u.api_token=e.data}}),l.request({url:b+a,data:u,method:t,dataType:"json",success:function(a){console.log(e(a," at main.js:38")),200===a.statusCode?(r(a),l.hideLoading(),1013==a.data.code&&l.removeStorage({key:"UserInfo",success:function(a){console.log(e("success"," at main.js:46")),l.showModal({title:"登录过期,请重新登录！",icon:"none"}),l.navigateTo({url:"/pages/login/login"})}})):(l.hideLoading(),i())},error:function(e){l.hideLoading(),l.showToast({title:"加载失败",icon:"cancel"}),i(e)}})})}t.default.prototype.$store=r.default,t.default.prototype.$http=s,t.default.prototype.baseUrl=b,n.default.mpType="app",console.log(e(s," at main.js:12"));var c=new t.default(v({},n.default,{store:r.default}));u(c).$mount()}).call(this,a("0de9")["default"],a("6e42")["default"],a("6e42")["createApp"])},"831d":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("dbab"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"844a":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("71c1"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"8c78":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=n(a("66fd")),t=n(a("2f62"));function n(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},u=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),u.forEach(function(l){i(e,l,a[l])})}return e}function i(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}u.default.use(t.default);var v={userName:"",hasLogin:!1,hasSkip:!1,language:!1},o=e.getStorageSync("userInfo");o.hasLogin&&(v=o),o.hasSkip&&(v.hasSkip=!0);var b=e.getStorageSync("lang");b&&(v.language=!0);var s=new t.default.Store({state:r({},v),mutations:{login:function(l,a){l.hasLogin=!0,e.setStorageSync("token",a)},logout:function(l){l.userName="",l.hasLogin=!1,e.removeStorageSync("token"),e.removeStorageSync("userInfo")},changeLogo:function(e,l){e.userImg=l},skipIndex:function(l){l.hasSkip=!0,e.setStorageSync("userInfo",r({},l))},langIndex:function(l){l.language=!0,e.setStorageSync("userInfo",r({},l))}}}),c=s;l.default=c}).call(this,a("6e42")["default"])},"8dd4":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("0329"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},9871:function(e){e.exports={zh:{title:"个人资料",head:"头像",nickname:"昵称",signature:"个性签名",titleType:"联系方式",phone:"手机号码",WechatID:"微信号",qq:"QQ",mail:"邮箱地址"},en:{title:"personal Data",head:"Head Portrait ",nickname:"Nick Name",signature:"Personalized Signature",titleType:"Contact Information",phone:"phone",WechatID:"Wechat ID",qq:"QQ ID",mail:"E-mail"}}},"987e":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("f39a"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"9a2c":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("8b25"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"9cfa":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("4748"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"9ecb":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("2242"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"9f04":function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("b6ec"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},a056:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("7395"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},a46d:function(e){e.exports={zh:{title:"设置",head:"头像",nickname:"昵称",signature:"个性签名",security:"账号安全",versions:"版本升级",selectLanguage:"选择语言",clearCache:"清除缓存",feedback:"问题反馈",AboutUs:"关于我们",exit:"退出"},en:{title:"Setting",head:"Head Portrait ",nickname:"Nick Name",signature:"Personalized Signature",security:"Account Security",versions:"Version Upgrade",selectLanguage:"Select Language",clearCache:"Clear Cache",feedback:"Problem Feedback",AboutUs:"About Us",exit:"exit"}}},b076:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],t=u;l.default=t},b382:function(e){e.exports={zh:{mytoolbarList:[{id:"0",url:"../../integral/integral",text:"积分管理",img:"/static/img/user/choujiang.png"},{id:"1",url:"../../user/account/account",text:"账号管理",img:"/static/img/user/quan.png"},{id:"2",url:"../../user/competitive/competitive",text:"我的竞标",img:"/static/img/user/renw.png"},{id:"3",url:"../../user/deposit/deposit",text:"充值中心",img:"/static/img/user/momey.png"},{id:"4",url:"../../product/product",text:"我的产品",img:"/static/img/user/addr.png"},{id:"6",url:"../../shop/shopType/shopType",text:"商铺管理",img:"/static/img/user/bank.png"},{id:"7",url:"../../user/keep/keep",text:"收藏",img:"/static/img/user/point.png"}],shopbarList:[{id:"6",url:"../../shop/check/check",text:"开启商铺",img:"/static/img/user/bank.png"}],toolbar:"我的工具栏",amount:{integral:"积分",brokerage:"佣金",remainingSum:"余额",Recharge:"充值"}},en:{mytoolbarList:[{id:"0",url:"../../integral/integral",text:"PointManagement",img:"/static/img/user/choujiang.png"},{id:"1",url:"../../user/account/account",text:"AccountManagement",img:"/static/img/user/quan.png"},{id:"2",url:"",text:"I Bid",img:"/static/img/user/renw.png"},{id:"3",url:"../../user/deposit/deposit",text:"VoucherCenter",img:"/static/img/user/momey.png"},{id:"4",url:"../../product/product",text:"MyProduct",img:"/static/img/user/addr.png"},{id:"6",url:"../../shop/shopType/shopType",text:"ShopManagement",img:"/static/img/user/bank.png"},{id:"7",url:"../../user/keep/keep",text:"Enshrine",img:"/static/img/user/point.png"}],shopbarList:[{id:"6",url:"../../shop/check/check",text:"Open a store",img:"/static/img/user/bank.png"}],toolbar:"Toolbar",amount:{integral:"Integral",brokerage:"Brokerage",remainingSum:"RemainingSum",Recharge:"Recharge"}}}},b785:function(e){e.exports={zh:{title:"积分管理",integral:"积分",introduce:"贸易通过日常操作获得积分，当贸易获得的积分达到一定数量时，可以参与今后的积分抽奖，抵用，兑换活动",typelist:[{id:0,text:"获取积分"},{id:1,text:"使用积分"}],tasklist:[{type:0,img:"/static/img/qiandao.png",title:"签到送积分",text:"每日签到获得2积分",url:"",btn:"前往"},{type:0,img:"/static/img/qiandao.png",title:"好任务，看不停",text:"每天查看5次任务，可以获得5积分",url:"",btn:"前往"},{type:0,img:"/static/img/qiandao.png",title:"分享送积分",text:"每次分享，可以获得30积分",url:"",btn:"前往"},{type:0,img:"/static/img/qiandao.png",title:"认证送积分",text:"完成手机，实名认证，可以获得100积分",url:"",btn:"前往"},{type:0,img:"/static/img/qiandao.png",title:"交稿送积分",text:"每天交稿5次，可以获得10积分",url:"",btn:"前往"},{type:0,img:"/static/img/qiandao.png",title:"注册送积分",text:"完成注册，可以获得50积分",url:"",btn:"前往"},{type:0,img:"/static/img/qiandao.png",title:"设置送积分",text:"完成位置设置，可以获得50积分",url:"",btn:"前往"},{type:1,img:"/static/img/qiandao.png",title:"积分兑换",text:"奖励拿不完",url:"",btn:"前往"}]},en:{title:"Point management",integral:"Integral",introduce:"Points are earned through daily operations. When the points obtained through trade reach a certain amount, they can participate in future bonus draw, offset and exchange activities",typelist:[{id:0,text:"For points"},{id:1,text:"Using the integral"}],tasklist:[{type:0,img:"/static/img/qiandao.png",title:"Check in and give credits",text:"2 points for daily check-in",url:"",btn:"GO"},{type:0,img:"/static/img/qiandao.png",title:"Good job. Keep watching",text:"5 credits can be earned by checking 5 tasks per day",url:"",btn:"GO"},{type:0,img:"/static/img/qiandao.png",title:"Sharing points",text:"Each time you share, you get 30 points",url:"",btn:"GO"},{type:0,img:"/static/img/qiandao.png",title:"Certification credit",text:"You get 100 points for your mobile phone if you complete the real-name authentication",url:"",btn:"GO"},{type:0,img:"/static/img/qiandao.png",title:"Credits for delivery",text:"You get 10 credits for submitting 5 times a day",url:"",btn:"GO"},{type:0,img:"/static/img/qiandao.png",title:"Registration points",text:"You get 50 points for completing registration",url:"",btn:"GO"},{type:0,img:"/static/img/qiandao.png",title:"Set send integral",text:"Complete the position setting, you can get 50 credits",url:"",btn:"GO"},{type:1,img:"/static/img/qiandao.png",title:"Credits exchange",text:"You can't run out of rewards",url:"",btn:"GO"}]}}},c28e:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("4a36"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},c77d:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("041d"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},c8ba:function(e,l){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(u){"object"===typeof window&&(a=window)}e.exports=a},cd6b:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("b2a7"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},d08e:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("5454"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},d3f5:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("cd1a"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},d60a:function(e,l){e.exports=function(e){return e&&"object"===typeof e&&"function"===typeof e.copy&&"function"===typeof e.fill&&"function"===typeof e.readUInt8}},dd6f:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],t=u;l.default=t},dd7b:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("df4d"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},df7c:function(e,l,a){(function(e){function a(e,l){for(var a=0,u=e.length-1;u>=0;u--){var t=e[u];"."===t?e.splice(u,1):".."===t?(e.splice(u,1),a++):a&&(e.splice(u,1),a--)}if(l)for(;a--;a)e.unshift("..");return e}var u=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,t=function(e){return u.exec(e).slice(1)};function n(e,l){if(e.filter)return e.filter(l);for(var a=[],u=0;u<e.length;u++)l(e[u],u,e)&&a.push(e[u]);return a}l.resolve=function(){for(var l="",u=!1,t=arguments.length-1;t>=-1&&!u;t--){var r=t>=0?arguments[t]:e.cwd();if("string"!==typeof r)throw new TypeError("Arguments to path.resolve must be strings");r&&(l=r+"/"+l,u="/"===r.charAt(0))}return l=a(n(l.split("/"),function(e){return!!e}),!u).join("/"),(u?"/":"")+l||"."},l.normalize=function(e){var u=l.isAbsolute(e),t="/"===r(e,-1);return e=a(n(e.split("/"),function(e){return!!e}),!u).join("/"),e||u||(e="."),e&&t&&(e+="/"),(u?"/":"")+e},l.isAbsolute=function(e){return"/"===e.charAt(0)},l.join=function(){var e=Array.prototype.slice.call(arguments,0);return l.normalize(n(e,function(e,l){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},l.relative=function(e,a){function u(e){for(var l=0;l<e.length;l++)if(""!==e[l])break;for(var a=e.length-1;a>=0;a--)if(""!==e[a])break;return l>a?[]:e.slice(l,a-l+1)}e=l.resolve(e).substr(1),a=l.resolve(a).substr(1);for(var t=u(e.split("/")),n=u(a.split("/")),r=Math.min(t.length,n.length),i=r,v=0;v<r;v++)if(t[v]!==n[v]){i=v;break}var o=[];for(v=i;v<t.length;v++)o.push("..");return o=o.concat(n.slice(i)),o.join("/")},l.sep="/",l.delimiter=":",l.dirname=function(e){var l=t(e),a=l[0],u=l[1];return a||u?(u&&(u=u.substr(0,u.length-1)),a+u):"."},l.basename=function(e,l){var a=t(e)[2];return l&&a.substr(-1*l.length)===l&&(a=a.substr(0,a.length-l.length)),a},l.extname=function(e){return t(e)[3]};var r="b"==="ab".substr(-1)?function(e,l,a){return e.substr(l,a)}:function(e,l,a){return l<0&&(l=e.length+l),e.substr(l,a)}}).call(this,a("4362"))},e258:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("9b29"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},e58e:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("e409"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},e9ae:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("1dab"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},ea7d:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("255d"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},ee76:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("e961"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},ef1b:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("a4c9"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},f2bd:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("f232"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},f51a:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("ea7e"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},f9a2:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("512d"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},fbcf:function(e){e.exports={zh:[{countries:"中国",id:"1"},{countries:"阿尔巴尼亚",id:"2"},{countries:"阿尔及利亚",id:"3"},{countries:"阿富汗",id:"4"},{countries:"阿根廷",id:"5"},{countries:"阿拉伯联合酋长国",id:"6"},{countries:"阿鲁巴岛",id:"7"},{countries:"阿曼",id:"8"},{countries:"阿塞拜疆",id:"9"},{countries:"提升",id:"10"},{countries:"埃及",id:"11"},{countries:"埃塞俄比亚",id:"12"},{countries:"爱尔兰",id:"13"},{countries:"爱沙尼亚",id:"14"},{countries:"安道尔",id:"15"},{countries:"安哥拉",id:"16"},{countries:"安圭拉岛",id:"17"},{countries:"安提瓜和巴布达岛",id:"18"},{countries:"澳大利亚",id:"19"},{countries:"奥地利",id:"20"},{countries:"奥兰群岛",id:"21"},{countries:"巴巴多斯",id:"22"},{countries:"巴布亚新几内亚",id:"23"},{countries:"巴哈马群岛",id:"24"},{countries:"巴基斯坦",id:"25"},{countries:"巴拉圭",id:"26"},{countries:"巴勒斯坦",id:"27"},{countries:"巴林",id:"28"},{countries:"巴拿马",id:"29"},{countries:"巴西",id:"30"},{countries:"白俄罗斯",id:"31"},{countries:"百慕大",id:"32"},{countries:"保加利亚",id:"33"},{countries:"北马里亚纳群岛",id:"34"},{countries:"贝宁",id:"35"},{countries:"比利时",id:"36"},{countries:"冰岛",id:"37"},{countries:"波多黎各",id:"38"},{countries:"波兰",id:"39"},{countries:"玻利维亚",id:"40"},{countries:"波斯尼亚和黑塞哥维那",id:"41"},{countries:"博茨瓦纳",id:"42"},{countries:"伯利兹",id:"43"},{countries:"不丹",id:"44"},{countries:"布基纳法索",id:"45"},{countries:"布隆迪",id:"46"},{countries:"布维岛",id:"47"},{countries:"朝鲜",id:"48"},{countries:"丹麦",id:"49"},{countries:"德国",id:"50"},{countries:"东帝汶",id:"51"},{countries:"多哥",id:"52"},{countries:"多米尼加岛",id:"53"},{countries:"多米尼加共和国",id:"54"},{countries:"俄罗斯",id:"55"},{countries:"厄瓜多尔",id:"56"},{countries:"厄立特里亚国",id:"57"},{countries:"法国",id:"58"},{countries:"法罗群岛",id:"59"},{countries:"法属玻里尼西亚",id:"60"},{countries:"法属圭亚那",id:"61"},{countries:"法国南部领土",id:"62"},{countries:"梵蒂冈",id:"63"},{countries:"菲律宾",id:"64"},{countries:"斐济",id:"65"},{countries:"芬兰",id:"66"},{countries:"佛得角",id:"67"},{countries:"弗兰克群岛",id:"68"},{countries:"冈比亚",id:"69"},{countries:"刚果",id:"70"},{countries:"刚果民主共和国",id:"71"},{countries:"哥伦比亚",id:"72"},{countries:"哥斯达黎加",id:"73"},{countries:"根西岛",id:"74"},{countries:"格林纳达",id:"75"},{countries:"格陵兰",id:"76"},{countries:"古巴",id:"77"},{countries:"瓜德罗普岛",id:"78"},{countries:"关岛",id:"79"},{countries:"圭亚那",id:"80"},{countries:"哈萨克斯坦",id:"81"},{countries:"海地",id:"82"},{countries:"韩国",id:"83"},{countries:"荷兰",id:"84"},{countries:"荷兰安的列斯群岛",id:"85"},{countries:"希尔德和麦克唐纳群岛",id:"86"},{countries:"洪都拉斯",id:"87"},{countries:"基里巴斯",id:"88"},{countries:"吉布提",id:"89"},{countries:"吉尔吉斯斯坦",id:"90"},{countries:"基尼",id:"91"},{countries:"几内亚比绍",id:"92"},{countries:"加拿大",id:"93"},{countries:"加纳",id:"94"},{countries:"加蓬",id:"95"},{countries:"柬埔寨",id:"96"},{countries:"捷克共和国",id:"97"},{countries:"津巴布韦",id:"98"},{countries:"喀麦隆",id:"99"},{countries:"卡塔尔",id:"100"},{countries:"开曼群岛",id:"101"},{countries:"科科斯群岛",id:"102"},{countries:"科摩罗",id:"103"},{countries:"科特迪瓦",id:"104"},{countries:"科威特",id:"105"},{countries:"克罗地亚",id:"106"},{countries:"肯尼亚",id:"107"},{countries:"库克群岛",id:"108"},{countries:"拉脱维亚",id:"109"},{countries:"莱索托",id:"110"},{countries:"老挝",id:"111"},{countries:"黎巴嫩",id:"112"},{countries:"利比里亚",id:"113"},{countries:"利比亚",id:"114"},{countries:"立陶宛",id:"115"},{countries:"列支敦士登",id:"116"},{countries:"留尼旺岛",id:"117"},{countries:"卢森堡",id:"118"},{countries:"卢旺达",id:"119"},{countries:"罗马尼亚",id:"120"},{countries:"马达加斯加岛",id:"121"},{countries:"马尔代夫",id:"122"},{countries:"马耳他",id:"123"},{countries:"马拉维",id:"124"},{countries:"马来西亚",id:"125"},{countries:"马里",id:"126"},{countries:"马其顿",id:"127"},{countries:"马绍尔群岛",id:"128"},{countries:"马提尼克",id:"129"},{countries:"马约特岛",id:"130"},{countries:"人岛",id:"131"},{countries:"毛里求斯",id:"132"},{countries:"毛里塔尼亚",id:"133"},{countries:"美国",id:"134"},{countries:"美属萨摩亚",id:"135"},{countries:"海岛",id:"136"},{countries:"蒙古",id:"137"},{countries:"蒙特塞拉特",id:"138"},{countries:"孟加拉国",id:"139"},{countries:"密克罗尼西亚",id:"140"},{countries:"秘鲁",id:"141"},{countries:"缅甸",id:"142"},{countries:"摩尔多瓦",id:"143"},{countries:"摩洛哥",id:"144"},{countries:"摩纳哥",id:"145"},{countries:"莫桑比克",id:"146"},{countries:"墨西哥",id:"147"},{countries:"纳米比亚",id:"148"},{countries:"南非",id:"149"},{countries:"南极洲",id:"150"},{countries:"南乔治亚和南桑威奇群岛",id:"151"},{countries:"瑙鲁",id:"152"},{countries:"尼泊尔",id:"153"},{countries:"尼加拉瓜",id:"154"},{countries:"尼日尔",id:"155"},{countries:"尼日利亚",id:"156"},{countries:"纽埃岛",id:"157"},{countries:"挪威",id:"158"},{countries:"诺福克",id:"159"},{countries:"帕劳群岛",id:"160"},{countries:"皮特凯恩",id:"161"},{countries:"葡萄牙",id:"162"},{countries:"格鲁吉亚",id:"163"},{countries:"日本",id:"164"},{countries:"瑞典",id:"165"},{countries:"瑞士",id:"166"},{countries:"Salvatore",id:"167"},{countries:"萨摩亚",id:"168"},{countries:"塞尔维亚,黑山",id:"169"},{countries:"塞拉利昂",id:"170"},{countries:"塞内加尔",id:"171"},{countries:"塞浦路斯",id:"172"},{countries:"塞舌尔",id:"173"},{countries:"沙特阿拉伯",id:"174"},{countries:"圣延岛",id:"175"},{countries:"圣多美与普林希比共和国",id:"176"},{countries:"圣赫勒拿岛",id:"177"},{countries:"圣基茨和尼维斯",id:"178"},{countries:"Lucia",id:"179"},{countries:"圣马力诺",id:"180"},{countries:"圣皮埃尔和米克隆群岛",id:"181"},{countries:"圣文森特和格林纳丁斯",id:"182"},{countries:"斯里兰卡",id:"183"},{countries:"斯洛伐克",id:"184"},{countries:"斯洛文尼亚",id:"185"},{countries:"瓦尔·巴和马丁",id:"186"},{countries:"斯威士兰",id:"187"},{countries:"苏丹",id:"188"},{countries:"苏里南",id:"189"},{countries:"所罗门群岛",id:"190"},{countries:"索马里",id:"191"},{countries:"塔吉克斯坦",id:"192"},{countries:"泰国",id:"193"},{countries:"坦桑尼亚",id:"194"},{countries:"汤加",id:"195"},{countries:"土耳其和凯凯迪西群岛",id:"196"},{countries:"Tristan Da khuon ha",id:"197"},{countries:"特立尼达和多巴哥",id:"198"},{countries:"突尼斯",id:"199"},{countries:"图瓦卢",id:"200"},{countries:"土耳其",id:"201"},{countries:"土库曼斯坦",id:"202"},{countries:"托克劳",id:"203"},{countries:"瓦利斯群岛和富图纳群岛",id:"204"},{countries:"瓦鲁阿图",id:"205"},{countries:"危地马拉",id:"206"},{countries:"美国维尔京群岛",id:"207"},{countries:"英属维尔京群岛",id:"208"},{countries:"委内瑞拉",id:"209"},{countries:"文莱",id:"210"},{countries:"乌干达",id:"211"},{countries:"乌克兰",id:"212"},{countries:"乌拉圭",id:"213"},{countries:"乌兹别克斯坦",id:"214"},{countries:"西班牙",id:"215"},{countries:"希腊",id:"216"},{countries:"新加坡",id:"217"},{countries:"新加勒多尼亚",id:"218"},{countries:"新西兰",id:"219"},{countries:"匈牙利",id:"220"},{countries:"叙利亚",id:"221"},{countries:"牙买加",id:"222"},{countries:"亚美尼亚",id:"223"},{countries:"也门",id:"224"},{countries:"伊拉克",id:"225"},{countries:"伊朗",id:"226"},{countries:"以色列",id:"227"},{countries:"意大利",id:"228"},{countries:"印度",id:"229"},{countries:"印尼",id:"230"},{countries:"英国",id:"231"},{countries:"英国在印度洋的领土",id:"232"},{countries:"乔丹",id:"233"},{countries:"越南",id:"234"},{countries:"赞比亚",id:"235"},{countries:"泽西岛",id:"236"},{countries:"乍得",id:"237"},{countries:"直布罗陀",id:"238"},{countries:"智利",id:"239"},{countries:"中非共和国",id:"240"}],en:[{countries:"China",id:"1"},{countries:"Albania",id:"2"},{countries:"Algeria",id:"3"},{countries:"Afghanistan",id:"4"},{countries:"Argentina",id:"5"},{countries:"United Arab Emirates, Arabia",id:"6"},{countries:"Aruba",id:"7"},{countries:"Oman",id:"8"},{countries:"Azerbaijan",id:"9"},{countries:"Ascension",id:"10"},{countries:"Egypt",id:"11"},{countries:"Ethiopia",id:"12"},{countries:"Ireland",id:"13"},{countries:"Estonia",id:"14"},{countries:"Andorra",id:"15"},{countries:"Angola",id:"16"},{countries:"Anguilla",id:"17"},{countries:"The island of Antigua and barbuda",id:"18"},{countries:"Australia",id:"19"},{countries:"Austria",id:"20"},{countries:"The Oran islands",id:"21"},{countries:"Barbados",id:"22"},{countries:"Papua New Guinea",id:"23"},{countries:"Bahamas",id:"24"},{countries:"Pakistan",id:"25"},{countries:"Paraguay",id:"26"},{countries:"Palestine",id:"27"},{countries:"Bahrain",id:"28"},{countries:"Panama",id:"29"},{countries:"Brazil",id:"30"},{countries:"Belarus",id:"31"},{countries:"Bermuda",id:"32"},{countries:"Bulgaria",id:"33"},{countries:"The Northern Mariana islands",id:"34"},{countries:"Benin",id:"35"},{countries:"Belgium",id:"36"},{countries:"Iceland",id:"37"},{countries:"Puerto Rico",id:"38"},{countries:"Poland",id:"39"},{countries:"Bolivia",id:"40"},{countries:"Bosnia and herzegovina",id:"41"},{countries:"Botswana",id:"42"},{countries:"Belize",id:"43"},{countries:"Bhutan",id:"44"},{countries:"Burkina Faso",id:"45"},{countries:"Burundi",id:"46"},{countries:"Bouvet island",id:"47"},{countries:"North Korea",id:"48"},{countries:"Denmark",id:"49"},{countries:"Germany",id:"50"},{countries:"East Timor",id:"51"},{countries:"Togo",id:"52"},{countries:"Dominica",id:"53"},{countries:"The Republic of Dominica",id:"54"},{countries:"Russia",id:"55"},{countries:"Ecuador",id:"56"},{countries:"Eritrea",id:"57"},{countries:"France",id:"58"},{countries:"Faroe Islands",id:"59"},{countries:"French polynesia",id:"60"},{countries:"French guiana",id:"61"},{countries:"The French Southern territories",id:"62"},{countries:"The Vatican",id:"63"},{countries:"Philippines",id:"64"},{countries:"Fiji",id:"65"},{countries:"Finland",id:"66"},{countries:"Cape Verde",id:"67"},{countries:"The Frank islands",id:"68"},{countries:"Gambia",id:"69"},{countries:"Congo",id:"70"},{countries:"The Democratic Republic of Congo",id:"71"},{countries:"Columbia",id:"72"},{countries:"Costa Rica",id:"73"},{countries:"Guernsey",id:"74"},{countries:"Grenada",id:"75"},{countries:"Greenland",id:"76"},{countries:"Cuba",id:"77"},{countries:"Guadeloupe",id:"78"},{countries:"Guam",id:"79"},{countries:"Guyana",id:"80"},{countries:"Kazakhstan",id:"81"},{countries:"Haiti",id:"82"},{countries:"Korea",id:"83"},{countries:"Holland",id:"84"},{countries:"The Netherlands antilles",id:"85"},{countries:"Hird and the Macdonald islands",id:"86"},{countries:"Honduras",id:"87"},{countries:"Kiribati",id:"88"},{countries:"Djibouti",id:"89"},{countries:"Kyrgyzstan",id:"90"},{countries:"Guinea",id:"91"},{countries:"Guinea Bissau",id:"92"},{countries:"Canada",id:"93"},{countries:"Garner",id:"94"},{countries:"Gabon",id:"95"},{countries:"Kampuchea",id:"96"},{countries:"Czech Republic",id:"97"},{countries:"Zimbabwe",id:"98"},{countries:"Cameroon",id:"99"},{countries:"Qatar",id:"100"},{countries:"The Cayman Islands",id:"101"},{countries:"The Cocos islands",id:"102"},{countries:"Comoros",id:"103"},{countries:"Cote d'Ivoire",id:"104"},{countries:"Kuwait",id:"105"},{countries:"Croatia",id:"106"},{countries:"Kenya",id:"107"},{countries:"The Cook islands",id:"108"},{countries:"Latvia",id:"109"},{countries:"Lesotho",id:"110"},{countries:"Laos",id:"111"},{countries:"Lebanon",id:"112"},{countries:"Liberia",id:"113"},{countries:"Libya",id:"114"},{countries:"Lithuania",id:"115"},{countries:"Liechtenstein",id:"116"},{countries:"Reunion",id:"117"},{countries:"Luxemburg",id:"118"},{countries:"Rwanda",id:"119"},{countries:"Romania",id:"120"},{countries:"Madagascar",id:"121"},{countries:"Maldives",id:"122"},{countries:"Malta",id:"123"},{countries:"Malawi",id:"124"},{countries:"Malaysia",id:"125"},{countries:"Mali",id:"126"},{countries:"Macedonian",id:"127"},{countries:"The Marshall islands",id:"128"},{countries:"Martinique",id:"129"},{countries:"Mayotte",id:"130"},{countries:"Man island",id:"131"},{countries:"Mauritius",id:"132"},{countries:"Mauritania",id:"133"},{countries:"The United States",id:"134"},{countries:"American Samoa",id:"135"},{countries:"The islands",id:"136"},{countries:"Mongolia",id:"137"},{countries:"Montserrat",id:"138"},{countries:"Bangladesh",id:"139"},{countries:"Micronesia",id:"140"},{countries:"Peru",id:"141"},{countries:"Burma",id:"142"},{countries:"Moldova",id:"143"},{countries:"Morocco",id:"144"},{countries:"Monaco",id:"145"},{countries:"Mozambique",id:"146"},{countries:"Mexico",id:"147"},{countries:"Namibia",id:"148"},{countries:"South Africa",id:"149"},{countries:"Antarctica",id:"150"},{countries:"South Georgia and the South Sandwich Islands",id:"151"},{countries:"Nauru",id:"152"},{countries:"Nepal",id:"153"},{countries:"Nicaragua",id:"154"},{countries:"Niger",id:"155"},{countries:"Nigeria",id:"156"},{countries:"Niue",id:"157"},{countries:"Norway",id:"158"},{countries:"Norfolk",id:"159"},{countries:"Palau islands",id:"160"},{countries:"Pitt Kaine",id:"161"},{countries:"Portuguese",id:"162"},{countries:"Georgia",id:"163"},{countries:"Japan",id:"164"},{countries:"Sweden",id:"165"},{countries:"Switzerland",id:"166"},{countries:"Salvatore",id:"167"},{countries:"Samoa",id:"168"},{countries:"Serbia, Montenegro",id:"169"},{countries:"Sierra Leone",id:"170"},{countries:"Senegal",id:"171"},{countries:"Cyprus",id:"172"},{countries:"Saudi Arabia",id:"173"},{countries:"Seychelles",id:"174"},{countries:"Christmas Island",id:"175"},{countries:"Sao Tome and principe",id:"176"},{countries:"St. helena",id:"177"},{countries:"Saint Kitts and nevis",id:"178"},{countries:"Lucia",id:"179"},{countries:"San marino",id:"180"},{countries:"San Pierre and the micone islands",id:"181"},{countries:"Saint Vincent and the grenadines",id:"182"},{countries:"Sri Lanka",id:"183"},{countries:"Slovakia",id:"184"},{countries:"Slovenia",id:"185"},{countries:"J Val Ba and Martin",id:"186"},{countries:"Swaziland",id:"187"},{countries:"Sultan",id:"188"},{countries:"Suriname",id:"189"},{countries:"The Solomon islands",id:"190"},{countries:"Somalia",id:"191"},{countries:"Tajikistan",id:"192"},{countries:"Thailand",id:"193"},{countries:"Tanzania",id:"194"},{countries:"Tonga",id:"195"},{countries:"The Turks and Kaiketesi islands",id:"196"},{countries:"Tristan Da khuon ha",id:"197"},{countries:"Trinidad and Tobago",id:"198"},{countries:"Tunisia",id:"199"},{countries:"Tuvalu",id:"200"},{countries:"Turkey",id:"201"},{countries:"Turkmenistan",id:"202"},{countries:"Tokelau",id:"203"},{countries:"Wallis and futuna",id:"204"},{countries:"Vanuatu",id:"205"},{countries:"Guatemala",id:"206"},{countries:"The Virgin Islands, American",id:"207"},{countries:"The Virgin Islands, the British",id:"208"},{countries:"Venezuela",id:"209"},{countries:"Brunei",id:"210"},{countries:"Uganda",id:"211"},{countries:"Ukraine",id:"212"},{countries:"Uruguay",id:"213"},{countries:"Uzbekistan",id:"214"},{countries:"Spain",id:"215"},{countries:"Greece",id:"216"},{countries:"New Caledonia",id:"217"},{countries:"Singapore",id:"218"},{countries:"New Zealand",id:"219"},{countries:"Hungary",id:"220"},{countries:"Syria",id:"221"},{countries:"Jamaica",id:"222"},{countries:"Armenia",id:"223"},{countries:"Yemen",id:"224"},{countries:"Iraq",id:"225"},{countries:"Iran",id:"226"},{countries:"Israel",id:"227"},{countries:"Italy",id:"228"},{countries:"India",id:"229"},{countries:"Indonesia",id:"230"},{countries:"Britain",id:"231"},{countries:"The British territory of the India ocean",id:"232"},{countries:"Jordan",id:"233"},{countries:"Vietnam",id:"234"},{countries:"Zambia",id:"235"},{countries:"Jersey",id:"236"},{countries:"Chad",id:"237"},{countries:"Gibraltar",id:"238"},{countries:"Chile",id:"239"},{countries:"The Central African Republic",id:"240"}]}},fe9e:function(e,l,a){"use strict";(function(e){a("1222");u(a("66fd"));var l=u(a("e828"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])}}]);
});
define('static/json/area-en.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  'Location': {
    'CountryRegion': [{
      'Name': 'China',
      'Code': '1',
      'State': [{
        'Name': 'Anhui',
        'Code': '34',
        'City': [{
          'Name': 'Anqing',
          'Code': '8'
        }, {
          'Name': 'Bengbu',
          'Code': '3'
        }, {
          'Name': 'Bozhou',
          'Code': '16'
        }, {
          'Name': 'Chaohu',
          'Code': '14'
        }, {
          'Name': 'Chizhou',
          'Code': '17'
        }, {
          'Name': 'Chuzhou',
          'Code': '11'
        }, {
          'Name': 'Fuyang',
          'Code': '12'
        }, {
          'Name': 'Hefei',
          'Code': '1'
        }, {
          'Name': 'Huaibei',
          'Code': '6'
        }, {
          'Name': 'Huainan',
          'Code': '4'
        }, {
          'Name': 'Huangshan',
          'Code': '10'
        }, {
          'Name': 'Lu`an',
          'Code': '15'
        }, {
          'Name': 'Ma`anshan',
          'Code': '5'
        }, {
          'Name': 'Suzhou',
          'Code': '13'
        }, {
          'Name': 'Tongling',
          'Code': '7'
        }, {
          'Name': 'Wuhu',
          'Code': '2'
        }, {
          'Name': 'Xuancheng',
          'Code': '18'
        }]
      }, {
        'Name': 'Beijing',
        'Code': '11',
        'City': [{
          'Name': 'Changping',
          'Code': '21'
        }, {
          'Name': 'Chaoyang',
          'Code': '5'
        }, {
          'Name': 'Chongwen',
          'Code': '3'
        }, {
          'Name': 'Daxing',
          'Code': '24'
        }, {
          'Name': 'Dongcheng',
          'Code': '1'
        }, {
          'Name': 'Fangshan',
          'Code': '11'
        }, {
          'Name': 'Fengtai',
          'Code': '6'
        }, {
          'Name': 'Haidian',
          'Code': '8'
        }, {
          'Name': 'Huairou',
          'Code': '27'
        }, {
          'Name': 'Mentougou',
          'Code': '9'
        }, {
          'Name': 'Miyun',
          'Code': '28'
        }, {
          'Name': 'Pinggu',
          'Code': '26'
        }, {
          'Name': 'Shijingshan',
          'Code': '7'
        }, {
          'Name': 'Shunyi',
          'Code': '13'
        }, {
          'Name': 'Tongzhou',
          'Code': '12'
        }, {
          'Name': 'Xicheng',
          'Code': '2'
        }, {
          'Name': 'Xuanwu',
          'Code': '4'
        }, {
          'Name': 'Yanqing',
          'Code': '29'
        }]
      }, {
        'Name': 'Chongqing',
        'Code': '50',
        'City': [{
          'Name': 'Ba`nan',
          'Code': '13'
        }, {
          'Name': 'Beibei',
          'Code': '9'
        }, {
          'Name': 'Bishan',
          'Code': '27'
        }, {
          'Name': 'Changshou',
          'Code': '21'
        }, {
          'Name': 'Chengkou',
          'Code': '29'
        }, {
          'Name': 'Dadukou',
          'Code': '4'
        }, {
          'Name': 'Dazu',
          'Code': '25'
        }, {
          'Name': 'Dianjiang',
          'Code': '31'
        }, {
          'Name': 'Fengdu',
          'Code': '30'
        }, {
          'Name': 'Fengjie',
          'Code': '36'
        }, {
          'Name': 'Fuling',
          'Code': '2'
        }, {
          'Name': 'Hechuan',
          'Code': '82'
        }, {
          'Name': 'Jiangbei',
          'Code': '5'
        }, {
          'Name': 'Jiangjin',
          'Code': '81'
        }, {
          'Name': 'Jiulongpo',
          'Code': '7'
        }, {
          'Name': 'Kaixian',
          'Code': '34'
        }, {
          'Name': 'Liangping',
          'Code': '28'
        }, {
          'Name': 'Nan`an',
          'Code': '8'
        }, {
          'Name': 'Nanchuan',
          'Code': '84'
        }, {
          'Name': 'Pengshui MiaoTujia Autonomous Country',
          'Code': '43'
        }, {
          'Name': 'Qianjiang',
          'Code': '39'
        }, {
          'Name': 'Qijiang',
          'Code': '22'
        }, {
          'Name': 'Rongchang',
          'Code': '26'
        }, {
          'Name': 'Shapingba',
          'Code': '6'
        }, {
          'Name': 'Shizhu Tujia Autonomous Country',
          'Code': '40'
        }, {
          'Name': 'Shuangqiao',
          'Code': '11'
        }, {
          'Name': 'Tongliang',
          'Code': '24'
        }, {
          'Name': 'Tongnan',
          'Code': '23'
        }, {
          'Name': 'Wansheng',
          'Code': '10'
        }, {
          'Name': 'Wanzhou',
          'Code': '1'
        }, {
          'Name': 'Wulong',
          'Code': '32'
        }, {
          'Name': 'Wushan',
          'Code': '37'
        }, {
          'Name': 'Wuxi',
          'Code': '38'
        }, {
          'Name': 'Xiushan TujiaMiao Autonomous Country',
          'Code': '41'
        }, {
          'Name': 'Yongchuan',
          'Code': '83'
        }, {
          'Name': 'Youyang TujiaMiao Autonomous Country',
          'Code': '42'
        }, {
          'Name': 'Yubei',
          'Code': '12'
        }, {
          'Name': 'Yunyang',
          'Code': '35'
        }, {
          'Name': 'Yuzhong',
          'Code': '3'
        }, {
          'Name': 'Zhongxian',
          'Code': '33'
        }]
      }, {
        'Name': 'Fujian',
        'Code': '35',
        'City': [{
          'Name': 'Fuzhou',
          'Code': '1'
        }, {
          'Name': 'Longyan',
          'Code': '8'
        }, {
          'Name': 'Nanping',
          'Code': '7'
        }, {
          'Name': 'Ningde',
          'Code': '9'
        }, {
          'Name': 'Putian',
          'Code': '3'
        }, {
          'Name': 'Quanzhou',
          'Code': '5'
        }, {
          'Name': 'Sanming',
          'Code': '4'
        }, {
          'Name': 'Xiamen',
          'Code': '2'
        }, {
          'Name': 'Zhangzhou',
          'Code': '6'
        }]
      }, {
        'Name': 'Gansu',
        'Code': '62',
        'City': [{
          'Name': 'Baiyin',
          'Code': '3'
        }, {
          'Name': 'Dingxi',
          'Code': '11'
        }, {
          'Name': 'Gannan Tibetan Autonomous Prefecture',
          'Code': '30'
        }, {
          'Name': 'Jiayuguan',
          'Code': '5'
        }, {
          'Name': 'Jinchang',
          'Code': '2'
        }, {
          'Name': 'Jiuquan',
          'Code': '9'
        }, {
          'Name': 'Lanzhou',
          'Code': '1'
        }, {
          'Name': 'Linxia Hui Autonomous Prefecture',
          'Code': '29'
        }, {
          'Name': 'Longnan',
          'Code': '12'
        }, {
          'Name': 'Pingliang',
          'Code': '8'
        }, {
          'Name': 'Qingyang',
          'Code': '10'
        }, {
          'Name': 'Tianshui',
          'Code': '4'
        }, {
          'Name': 'Wuwei',
          'Code': '6'
        }, {
          'Name': 'Zhangye',
          'Code': '7'
        }]
      }, {
        'Name': 'Guangdong',
        'Code': '44',
        'City': [{
          'Name': 'Chaozhou',
          'Code': '51'
        }, {
          'Name': 'Dongguan',
          'Code': '19'
        }, {
          'Name': 'Foshan',
          'Code': '6'
        }, {
          'Name': 'Guangzhou',
          'Code': '1'
        }, {
          'Name': 'Heyuan',
          'Code': '16'
        }, {
          'Name': 'Huizhou',
          'Code': '13'
        }, {
          'Name': 'Jiangmen',
          'Code': '7'
        }, {
          'Name': 'Jieyang',
          'Code': '52'
        }, {
          'Name': 'Maoming',
          'Code': '9'
        }, {
          'Name': 'Meizhou',
          'Code': '14'
        }, {
          'Name': 'Qingyuan',
          'Code': '18'
        }, {
          'Name': 'Shantou',
          'Code': '5'
        }, {
          'Name': 'Shanwei',
          'Code': '15'
        }, {
          'Name': 'Shaoguan',
          'Code': '2'
        }, {
          'Name': 'Shenzhen',
          'Code': '3'
        }, {
          'Name': 'Yangjiang',
          'Code': '17'
        }, {
          'Name': 'Yunfu',
          'Code': '53'
        }, {
          'Name': 'Zhanjiang',
          'Code': '8'
        }, {
          'Name': 'Zhaoqing',
          'Code': '12'
        }, {
          'Name': 'Zhongshan',
          'Code': '20'
        }, {
          'Name': 'Zhuhai',
          'Code': '4'
        }]
      }, {
        'Name': 'Guangxi',
        'Code': '45',
        'City': [{
          'Name': 'Baise',
          'Code': '10'
        }, {
          'Name': 'Beihai',
          'Code': '5'
        }, {
          'Name': 'Chongzuo',
          'Code': '14'
        }, {
          'Name': 'Fangchenggang',
          'Code': '6'
        }, {
          'Name': 'Guigang',
          'Code': '8'
        }, {
          'Name': 'Guilin',
          'Code': '3'
        }, {
          'Name': 'Hechi',
          'Code': '12'
        }, {
          'Name': 'Hezhou',
          'Code': '11'
        }, {
          'Name': 'Laibin',
          'Code': '13'
        }, {
          'Name': 'Liuzhou',
          'Code': '2'
        }, {
          'Name': 'Nanning',
          'Code': '1'
        }, {
          'Name': 'Qinzhou',
          'Code': '7'
        }, {
          'Name': 'Wuzhou',
          'Code': '4'
        }, {
          'Name': 'Yulin',
          'Code': '9'
        }]
      }, {
        'Name': 'Guizhou',
        'Code': '52',
        'City': [{
          'Name': 'Anshun',
          'Code': '4'
        }, {
          'Name': 'Bijie',
          'Code': '24'
        }, {
          'Name': 'Guiyang',
          'Code': '1'
        }, {
          'Name': 'Liupanshui',
          'Code': '2'
        }, {
          'Name': 'Qiandongnan MiaoDong Autonomous Prefecture',
          'Code': '26'
        }, {
          'Name': 'Qiannan Buyi Autonomous Prefecture',
          'Code': '27'
        }, {
          'Name': 'Qianxinan BuyiMiao Autonomous Prefecture',
          'Code': '23'
        }, {
          'Name': 'Tongren',
          'Code': '22'
        }, {
          'Name': 'Zunyi',
          'Code': '3'
        }]
      }, {
        'Name': 'Hainan',
        'Code': '46',
        'City': [{
          'Name': 'Baisha Li Autonomous County',
          'Code': 'A30'
        }, {
          'Name': 'Baoting LiMiao Autonomous County',
          'Code': 'A35'
        }, {
          'Name': 'Cengmai',
          'Code': 'A27'
        }, {
          'Name': 'Danzhou',
          'Code': '93'
        }, {
          'Name': 'Ding`an',
          'Code': 'A25'
        }, {
          'Name': 'Dongfang',
          'Code': '97'
        }, {
          'Name': 'Haikou',
          'Code': '1'
        }, {
          'Name': 'Jiang Li Autonomous County',
          'Code': 'A31'
        }, {
          'Name': 'Ledong Li Autonomous County',
          'Code': 'A33'
        }, {
          'Name': 'Lingao',
          'Code': 'A28'
        }, {
          'Name': 'Lingshui Li Autonomous County',
          'Code': 'A34'
        }, {
          'Name': 'Nansha Qundao',
          'Code': 'A38'
        }, {
          'Name': 'Qionghai',
          'Code': '92'
        }, {
          'Name': 'Qiongzhong LiMiao Autonomous County',
          'Code': 'A36'
        }, {
          'Name': 'Sanya',
          'Code': '2'
        }, {
          'Name': 'Tunchang',
          'Code': 'A26'
        }, {
          'Name': 'Wanning',
          'Code': '96'
        }, {
          'Name': 'Wenchang',
          'Code': '95'
        }, {
          'Name': 'Wuzhishan',
          'Code': '91'
        }, {
          'Name': 'Xisha Qundao',
          'Code': 'A37'
        }, {
          'Name': 'Zhongsha Qundao',
          'Code': 'A39'
        }]
      }, {
        'Name': 'Hebei',
        'Code': '13',
        'City': [{
          'Name': 'Baoding',
          'Code': '6'
        }, {
          'Name': 'Cangzhou',
          'Code': '9'
        }, {
          'Name': 'Chengde',
          'Code': '8'
        }, {
          'Name': 'Handan',
          'Code': '4'
        }, {
          'Name': 'Hengshui',
          'Code': '11'
        }, {
          'Name': 'Langfang',
          'Code': '10'
        }, {
          'Name': 'Qinhuangdao',
          'Code': '3'
        }, {
          'Name': 'Shijiazhuang',
          'Code': '1'
        }, {
          'Name': 'Tangshan',
          'Code': '2'
        }, {
          'Name': 'Xingtai',
          'Code': '5'
        }, {
          'Name': 'Zhangjiakou',
          'Code': '7'
        }]
      }, {
        'Name': 'Heilongjiang',
        'Code': '23',
        'City': [{
          'Name': 'Da Hinggan Ling',
          'Code': '27'
        }, {
          'Name': 'Daqing',
          'Code': '6'
        }, {
          'Name': 'Harbin',
          'Code': '1'
        }, {
          'Name': 'Hegang',
          'Code': '4'
        }, {
          'Name': 'Heihe',
          'Code': '11'
        }, {
          'Name': 'Jiamusi',
          'Code': '8'
        }, {
          'Name': 'Jixi',
          'Code': '3'
        }, {
          'Name': 'Mudanjiang',
          'Code': '10'
        }, {
          'Name': 'Qiqihar',
          'Code': '2'
        }, {
          'Name': 'Qitaihe',
          'Code': '9'
        }, {
          'Name': 'Shuangyashan',
          'Code': '5'
        }, {
          'Name': 'Suihua',
          'Code': '12'
        }, {
          'Name': 'Yichun',
          'Code': '7'
        }]
      }, {
        'Name': 'Henan',
        'Code': '41',
        'City': [{
          'Name': 'Anyang',
          'Code': '5'
        }, {
          'Name': 'Hebi',
          'Code': '6'
        }, {
          'Name': 'Jiaozuo',
          'Code': '8'
        }, {
          'Name': 'Jiyuan',
          'Code': '18'
        }, {
          'Name': 'Kaifeng',
          'Code': '2'
        }, {
          'Name': 'Luohe',
          'Code': '11'
        }, {
          'Name': 'Luoyang',
          'Code': '3'
        }, {
          'Name': 'Nanyang',
          'Code': '13'
        }, {
          'Name': 'Pingdingshan',
          'Code': '4'
        }, {
          'Name': 'Puyang',
          'Code': '9'
        }, {
          'Name': 'Sanmenxia',
          'Code': '12'
        }, {
          'Name': 'Shangqiu',
          'Code': '14'
        }, {
          'Name': 'Xinxiang',
          'Code': '7'
        }, {
          'Name': 'Xinyang',
          'Code': '15'
        }, {
          'Name': 'Xuchang',
          'Code': '10'
        }, {
          'Name': 'Zhengzhou',
          'Code': '1'
        }, {
          'Name': 'Zhoukou',
          'Code': '16'
        }, {
          'Name': 'Zhumadian',
          'Code': '17'
        }]
      }, {
        'Name': 'Hongkong SAR',
        'Code': '81'
      }, {
        'Name': 'Hubei',
        'Code': '42',
        'City': [{
          'Name': 'Enshi TujiaMiao Autonomous Prefecture',
          'Code': '28'
        }, {
          'Name': 'Ezhou',
          'Code': '7'
        }, {
          'Name': 'Huanggang',
          'Code': '11'
        }, {
          'Name': 'Huangshi',
          'Code': '2'
        }, {
          'Name': 'Jingmen',
          'Code': '8'
        }, {
          'Name': 'Jingzhou',
          'Code': '10'
        }, {
          'Name': 'Qianjiang',
          'Code': '95'
        }, {
          'Name': 'Shennongjia',
          'Code': 'A21'
        }, {
          'Name': 'Shiyan',
          'Code': '3'
        }, {
          'Name': 'Suizhou',
          'Code': '13'
        }, {
          'Name': 'Tianmen',
          'Code': '96'
        }, {
          'Name': 'Wuhan',
          'Code': '1'
        }, {
          'Name': 'Xiangfan',
          'Code': '6'
        }, {
          'Name': 'Xianning',
          'Code': '12'
        }, {
          'Name': 'Xiantao',
          'Code': '94'
        }, {
          'Name': 'Xiaogan',
          'Code': '9'
        }, {
          'Name': 'Yichang',
          'Code': '5'
        }]
      }, {
        'Name': 'Hunan',
        'Code': '43',
        'City': [{
          'Name': 'Changde',
          'Code': '7'
        }, {
          'Name': 'Changsha',
          'Code': '1'
        }, {
          'Name': 'Chenzhou',
          'Code': '10'
        }, {
          'Name': 'Hengyang',
          'Code': '4'
        }, {
          'Name': 'Huaihua',
          'Code': '12'
        }, {
          'Name': 'Loudi',
          'Code': '13'
        }, {
          'Name': 'Shaoyang',
          'Code': '5'
        }, {
          'Name': 'Xiangtan',
          'Code': '3'
        }, {
          'Name': 'Xiangxi TujiaMiao Autonomous Prefecture',
          'Code': '31'
        }, {
          'Name': 'Yiyang',
          'Code': '9'
        }, {
          'Name': 'Yongzhou',
          'Code': '11'
        }, {
          'Name': 'Yueyang',
          'Code': '6'
        }, {
          'Name': 'Zhangjiajie',
          'Code': '8'
        }, {
          'Name': 'Zhuzhou',
          'Code': '2'
        }]
      }, {
        'Name': 'Inner Mongolia',
        'Code': '15',
        'City': [{
          'Name': 'Alxa',
          'Code': '29'
        }, {
          'Name': 'Baotou',
          'Code': '2'
        }, {
          'Name': 'Bayannur',
          'Code': '8'
        }, {
          'Name': 'Chifeng',
          'Code': '4'
        }, {
          'Name': 'Hohhot',
          'Code': '1'
        }, {
          'Name': 'Hulun Buir',
          'Code': '7'
        }, {
          'Name': 'Ordos',
          'Code': '6'
        }, {
          'Name': 'Tongliao',
          'Code': '5'
        }, {
          'Name': 'Ulan Qab',
          'Code': '9'
        }, {
          'Name': 'Wuhai',
          'Code': '3'
        }, {
          'Name': 'Xilin Gol',
          'Code': '25'
        }, {
          'Name': 'Xing`an',
          'Code': '22'
        }]
      }, {
        'Name': 'Jiangsu',
        'Code': '32',
        'City': [{
          'Name': 'Changzhou',
          'Code': '4'
        }, {
          'Name': 'Huai`an',
          'Code': '8'
        }, {
          'Name': 'Lianyungang',
          'Code': '7'
        }, {
          'Name': 'Nanjing',
          'Code': '1'
        }, {
          'Name': 'Nantong',
          'Code': '6'
        }, {
          'Name': 'Suqian',
          'Code': '13'
        }, {
          'Name': 'Suzhou',
          'Code': '5'
        }, {
          'Name': 'Taizhou',
          'Code': '12'
        }, {
          'Name': 'Wuxi',
          'Code': '2'
        }, {
          'Name': 'Xuzhou',
          'Code': '3'
        }, {
          'Name': 'Yancheng',
          'Code': '9'
        }, {
          'Name': 'Yangzhou',
          'Code': '10'
        }, {
          'Name': 'Zhenjiang',
          'Code': '11'
        }]
      }, {
        'Name': 'Jiangxi',
        'Code': '36',
        'City': [{
          'Name': 'Fuzhou',
          'Code': '10'
        }, {
          'Name': 'Ganzhou',
          'Code': '7'
        }, {
          'Name': 'Ji`an',
          'Code': '8'
        }, {
          'Name': 'Jingdezhen',
          'Code': '2'
        }, {
          'Name': 'Jiujiang',
          'Code': '4'
        }, {
          'Name': 'Nanchang',
          'Code': '1'
        }, {
          'Name': 'Pingxiang',
          'Code': '3'
        }, {
          'Name': 'Shangrao',
          'Code': '11'
        }, {
          'Name': 'Xinyu',
          'Code': '5'
        }, {
          'Name': 'Yichun',
          'Code': '9'
        }, {
          'Name': 'Yingtan',
          'Code': '6'
        }]
      }, {
        'Name': 'Jilin',
        'Code': '22',
        'City': [{
          'Name': 'Baicheng',
          'Code': '8'
        }, {
          'Name': 'Baishan',
          'Code': '6'
        }, {
          'Name': 'Changchun',
          'Code': '1'
        }, {
          'Name': 'Jilin',
          'Code': '2'
        }, {
          'Name': 'Liaoyuan',
          'Code': '4'
        }, {
          'Name': 'Siping',
          'Code': '3'
        }, {
          'Name': 'Songyuan',
          'Code': '7'
        }, {
          'Name': 'Tonghua',
          'Code': '5'
        }, {
          'Name': 'Yanbian Korean Autonomous Prefecture',
          'Code': '24'
        }]
      }, {
        'Name': 'Liaoning',
        'Code': '21',
        'City': [{
          'Name': 'Anshan',
          'Code': '3'
        }, {
          'Name': 'Benxi',
          'Code': '5'
        }, {
          'Name': 'Chaoyang',
          'Code': '13'
        }, {
          'Name': 'Dalian',
          'Code': '2'
        }, {
          'Name': 'Dandong',
          'Code': '6'
        }, {
          'Name': 'Fushun',
          'Code': '4'
        }, {
          'Name': 'Fuxin',
          'Code': '9'
        }, {
          'Name': 'Huludao',
          'Code': '14'
        }, {
          'Name': 'Jinzhou',
          'Code': '7'
        }, {
          'Name': 'Liaoyang',
          'Code': '10'
        }, {
          'Name': 'Panjin',
          'Code': '11'
        }, {
          'Name': 'Shenyang',
          'Code': '1'
        }, {
          'Name': 'Tieling',
          'Code': '12'
        }, {
          'Name': 'Yingkou',
          'Code': '8'
        }]
      }, {
        'Name': 'Macao SAR',
        'Code': '82'
      }, {
        'Name': 'Ningxia',
        'Code': '64',
        'City': [{
          'Name': 'Guyuan',
          'Code': '4'
        }, {
          'Name': 'Shizuishan',
          'Code': '2'
        }, {
          'Name': 'Wuzhong',
          'Code': '3'
        }, {
          'Name': 'Yinchuan',
          'Code': '1'
        }, {
          'Name': 'Zhongwei',
          'Code': '5'
        }]
      }, {
        'Name': 'Qinghai',
        'Code': '63',
        'City': [{
          'Name': 'Guoluo Tibetan Autonomous Prefecture',
          'Code': '26'
        }, {
          'Name': 'Haibei Tibetan Autonomous Prefecture',
          'Code': '22'
        }, {
          'Name': 'Haidong',
          'Code': '21'
        }, {
          'Name': 'Hainan Tibetan Autonomous Prefecture',
          'Code': '25'
        }, {
          'Name': 'Haixi MongolTibetan Autonomous Prefecture',
          'Code': '28'
        }, {
          'Name': 'Huangnan Tibetan Autonomous Prefecture',
          'Code': '23'
        }, {
          'Name': 'Xining',
          'Code': '1'
        }, {
          'Name': 'Yushu Tibetan Autonomous Prefecture',
          'Code': '27'
        }]
      }, {
        'Name': 'Shanxi',
        'Code': '61',
        'City': [{
          'Name': 'Ankang',
          'Code': '9'
        }, {
          'Name': 'Baoji',
          'Code': '3'
        }, {
          'Name': 'Hanzhong',
          'Code': '7'
        }, {
          'Name': 'Shangluo',
          'Code': '10'
        }, {
          'Name': 'Tongchuan',
          'Code': '2'
        }, {
          'Name': 'Weinan',
          'Code': '5'
        }, {
          'Name': 'Xi`an',
          'Code': '1'
        }, {
          'Name': 'Xianyang',
          'Code': '4'
        }, {
          'Name': 'Yan`an',
          'Code': '6'
        }, {
          'Name': 'Yulin',
          'Code': '8'
        }]
      }, {
        'Name': 'Shandong',
        'Code': '37',
        'City': [{
          'Name': 'Binzhou',
          'Code': '16'
        }, {
          'Name': 'Dezhou',
          'Code': '14'
        }, {
          'Name': 'Dongying',
          'Code': '5'
        }, {
          'Name': 'Heze',
          'Code': '17'
        }, {
          'Name': 'Jinan',
          'Code': '1'
        }, {
          'Name': 'Jining',
          'Code': '8'
        }, {
          'Name': 'Laiwu',
          'Code': '12'
        }, {
          'Name': 'Liaocheng',
          'Code': '15'
        }, {
          'Name': 'Linyi',
          'Code': '13'
        }, {
          'Name': 'Qingdao',
          'Code': '2'
        }, {
          'Name': 'Rizhao',
          'Code': '11'
        }, {
          'Name': 'Tai`an',
          'Code': '9'
        }, {
          'Name': 'Weifang',
          'Code': '7'
        }, {
          'Name': 'Weihai',
          'Code': '10'
        }, {
          'Name': 'Yantai',
          'Code': '6'
        }, {
          'Name': 'Zaozhuang',
          'Code': '4'
        }, {
          'Name': 'Zibo',
          'Code': '3'
        }]
      }, {
        'Name': 'Shanghai',
        'Code': '31',
        'City': [{
          'Name': 'Baoshan',
          'Code': '13'
        }, {
          'Name': 'Changning',
          'Code': '5'
        }, {
          'Name': 'Chongming',
          'Code': '30'
        }, {
          'Name': 'Fengxian',
          'Code': '26'
        }, {
          'Name': 'Hongkou',
          'Code': '9'
        }, {
          'Name': 'Huangpu',
          'Code': '1'
        }, {
          'Name': 'Jiading',
          'Code': '14'
        }, {
          'Name': 'Jing`an',
          'Code': '6'
        }, {
          'Name': 'Jinshan',
          'Code': '16'
        }, {
          'Name': 'Luwan',
          'Code': '3'
        }, {
          'Name': 'Minhang',
          'Code': '12'
        }, {
          'Name': 'Nanhui',
          'Code': '25'
        }, {
          'Name': 'Pudongxin',
          'Code': '15'
        }, {
          'Name': 'Putuo',
          'Code': '7'
        }, {
          'Name': 'Qingpu',
          'Code': '29'
        }, {
          'Name': 'Songjiang',
          'Code': '17'
        }, {
          'Name': 'Xuhui',
          'Code': '4'
        }, {
          'Name': 'Yangpu',
          'Code': '11'
        }, {
          'Name': 'Zhabei',
          'Code': '8'
        }]
      }, {
        'Name': 'Shanxi',
        'Code': '14',
        'City': [{
          'Name': 'Changzhi',
          'Code': '4'
        }, {
          'Name': 'Datong',
          'Code': '2'
        }, {
          'Name': 'Jincheng',
          'Code': '5'
        }, {
          'Name': 'Jinzhong',
          'Code': '7'
        }, {
          'Name': 'Linfen',
          'Code': '10'
        }, {
          'Name': 'luliang',
          'Code': '11'
        }, {
          'Name': 'Shuozhou',
          'Code': '6'
        }, {
          'Name': 'Taiyuan',
          'Code': '1'
        }, {
          'Name': 'Xinzhou',
          'Code': '9'
        }, {
          'Name': 'Yangquan',
          'Code': '3'
        }, {
          'Name': 'Yuncheng',
          'Code': '8'
        }]
      }, {
        'Name': 'Sichuan',
        'Code': '51',
        'City': [{
          'Name': 'Aba TibetanQiang Autonomous Prefecture',
          'Code': '32'
        }, {
          'Name': 'Bazhong',
          'Code': '19'
        }, {
          'Name': 'Chengdu',
          'Code': '1'
        }, {
          'Name': 'Dazhou',
          'Code': '17'
        }, {
          'Name': 'Deyang',
          'Code': '6'
        }, {
          'Name': 'Garze Tibetan Autonomous Prefecture',
          'Code': '33'
        }, {
          'Name': 'Guang`an',
          'Code': '16'
        }, {
          'Name': 'Guangyuan',
          'Code': '8'
        }, {
          'Name': 'Leshan',
          'Code': '11'
        }, {
          'Name': 'Liangshan Yi Autonomous Prefecture',
          'Code': '34'
        }, {
          'Name': 'Luzhou',
          'Code': '5'
        }, {
          'Name': 'Meishan',
          'Code': '14'
        }, {
          'Name': 'Mianyang',
          'Code': '7'
        }, {
          'Name': 'Nancong',
          'Code': '13'
        }, {
          'Name': 'Neijiang',
          'Code': '10'
        }, {
          'Name': 'Panzhihua',
          'Code': '4'
        }, {
          'Name': 'Suining',
          'Code': '9'
        }, {
          'Name': 'Ya`an',
          'Code': '18'
        }, {
          'Name': 'Yibin',
          'Code': '15'
        }, {
          'Name': 'Zigong',
          'Code': '3'
        }, {
          'Name': 'Ziyang',
          'Code': '20'
        }]
      }, {
        'Name': 'Taiwan',
        'Code': '71',
        'City': [{
          'Name': 'Changhwa County',
          'Code': '14'
        }, {
          'Name': 'Chiayi City',
          'Code': '7'
        }, {
          'Name': 'Chiayi County',
          'Code': '17'
        }, {
          'Name': 'Hsinchu City',
          'Code': '6'
        }, {
          'Name': 'Hsinchu County',
          'Code': '11'
        }, {
          'Name': 'Hualian County',
          'Code': '23'
        }, {
          'Name': 'Ilan County',
          'Code': '9'
        }, {
          'Name': 'Kaohsiung City',
          'Code': '2'
        }, {
          'Name': 'Kaohsiung County',
          'Code': '19'
        }, {
          'Name': 'Keelung City',
          'Code': '3'
        }, {
          'Name': 'Miaoli County',
          'Code': '12'
        }, {
          'Name': 'Nantou County',
          'Code': '15'
        }, {
          'Name': 'Penghu County',
          'Code': '21'
        }, {
          'Name': 'Pingtung County',
          'Code': '20'
        }, {
          'Name': 'Taichung City',
          'Code': '4'
        }, {
          'Name': 'Taichung County',
          'Code': '13'
        }, {
          'Name': 'Tainan City',
          'Code': '5'
        }, {
          'Name': 'Tainan County',
          'Code': '18'
        }, {
          'Name': 'Taipei City',
          'Code': '1'
        }, {
          'Name': 'Taipei County',
          'Code': '8'
        }, {
          'Name': 'Taitung County',
          'Code': '22'
        }, {
          'Name': 'Taoyuan County',
          'Code': '10'
        }, {
          'Name': 'Yunnlin County',
          'Code': '16'
        }]
      }, {
        'Name': 'Tianjin',
        'Code': '12',
        'City': [{
          'Name': 'Baodi',
          'Code': '24'
        }, {
          'Name': 'Beichen',
          'Code': '13'
        }, {
          'Name': 'Dagang',
          'Code': '9'
        }, {
          'Name': 'Dongli',
          'Code': '10'
        }, {
          'Name': 'Hangu',
          'Code': '8'
        }, {
          'Name': 'Hebei',
          'Code': '5'
        }, {
          'Name': 'Hedong',
          'Code': '2'
        }, {
          'Name': 'Heping',
          'Code': '1'
        }, {
          'Name': 'Hexi',
          'Code': '3'
        }, {
          'Name': 'Hongqiao',
          'Code': '6'
        }, {
          'Name': 'Jinghai',
          'Code': '23'
        }, {
          'Name': 'Jinnan',
          'Code': '12'
        }, {
          'Name': 'Jixian',
          'Code': '25'
        }, {
          'Name': 'Nankai',
          'Code': '4'
        }, {
          'Name': 'Ninghe',
          'Code': '21'
        }, {
          'Name': 'Tanggu',
          'Code': '7'
        }, {
          'Name': 'Wuqing',
          'Code': '22'
        }, {
          'Name': 'Xiqing',
          'Code': '11'
        }]
      }, {
        'Name': 'Tibet',
        'Code': '54',
        'City': [{
          'Name': 'Lhasa',
          'Code': '1'
        }, {
          'Name': 'Nagqu',
          'Code': '24'
        }, {
          'Name': 'Ngari',
          'Code': '25'
        }, {
          'Name': 'Nyingchi',
          'Code': '26'
        }, {
          'Name': 'Qamdo',
          'Code': '21'
        }, {
          'Name': 'Shannan',
          'Code': '22'
        }, {
          'Name': 'Xigaze',
          'Code': '23'
        }]
      }, {
        'Name': 'Xinjiang',
        'Code': '65',
        'City': [{
          'Name': 'Aksu',
          'Code': '29'
        }, {
          'Name': 'Alar',
          'Code': '92'
        }, {
          'Name': 'Altay',
          'Code': '43'
        }, {
          'Name': 'Bayingolin Mongol Autonomous Prefecture',
          'Code': '28'
        }, {
          'Name': 'Bortala Mongol Autonomous Prefecture',
          'Code': '27'
        }, {
          'Name': 'Changji Hui Autonomous Prefecture',
          'Code': '23'
        }, {
          'Name': 'Hami',
          'Code': '22'
        }, {
          'Name': 'Hotan',
          'Code': '32'
        }, {
          'Name': 'Ili Kazakh Autonomous Prefecture',
          'Code': '40'
        }, {
          'Name': 'Karamay',
          'Code': '2'
        }, {
          'Name': 'Kashi',
          'Code': '31'
        }, {
          'Name': 'Kizilsu Kirgiz Autonomous Prefecture',
          'Code': '30'
        }, {
          'Name': 'Shihezi',
          'Code': '91'
        }, {
          'Name': 'Tacheng',
          'Code': '42'
        }, {
          'Name': 'Tumsuk',
          'Code': '93'
        }, {
          'Name': 'Turpan',
          'Code': '21'
        }, {
          'Name': 'Urumqi',
          'Code': '1'
        }, {
          'Name': 'Wujiaqu',
          'Code': '94'
        }]
      }, {
        'Name': 'Yunnan',
        'Code': '53',
        'City': [{
          'Name': 'Baoshan',
          'Code': '5'
        }, {
          'Name': 'Chuxiong Yi Autonomous Prefecture',
          'Code': '23'
        }, {
          'Name': 'Dali Bai Autonomous Prefecture',
          'Code': '29'
        }, {
          'Name': 'Dehong DaiJingpo Autonomous Prefecture',
          'Code': '31'
        }, {
          'Name': 'Diqing Tibetan Autonomous Prefecture',
          'Code': '34'
        }, {
          'Name': 'Honghe HaniYi Autonomous Prefecture',
          'Code': '25'
        }, {
          'Name': 'Kunming',
          'Code': '1'
        }, {
          'Name': 'Lijiang',
          'Code': '7'
        }, {
          'Name': 'Lincang',
          'Code': '9'
        }, {
          'Name': 'Nujiang Lisu Autonomous Prefecture',
          'Code': '33'
        }, {
          'Name': 'Pu`er',
          'Code': '8'
        }, {
          'Name': 'Qujing',
          'Code': '3'
        }, {
          'Name': 'Wenshan ZhuangMiao Autonomous Prefecture',
          'Code': '26'
        }, {
          'Name': 'Xishuangbanna Dai Autonomous Prefecture',
          'Code': '28'
        }, {
          'Name': 'Yuxi',
          'Code': '4'
        }, {
          'Name': 'Zhaotong',
          'Code': '6'
        }]
      }, {
        'Name': 'Zhejiang',
        'Code': '33',
        'City': [{
          'Name': 'Hangzhou',
          'Code': '1'
        }, {
          'Name': 'Huzhou',
          'Code': '5'
        }, {
          'Name': 'Jiaxing',
          'Code': '4'
        }, {
          'Name': 'Jinhua',
          'Code': '7'
        }, {
          'Name': 'Lishui',
          'Code': '11'
        }, {
          'Name': 'Ningbo',
          'Code': '2'
        }, {
          'Name': 'Quzhou',
          'Code': '8'
        }, {
          'Name': 'Shaoxing',
          'Code': '6'
        }, {
          'Name': 'Taizhou',
          'Code': '10'
        }, {
          'Name': 'Wenzhou',
          'Code': '3'
        }, {
          'Name': 'Zhoushan',
          'Code': '9'
        }]
      }]
    }, {
      'Name': 'Singapore',
      'Code': 'SGP'
    }, {
      'Name': 'Afghanistan',
      'Code': 'AFG',
      'State': {
        'City': [{
          'Name': 'Herat',
          'Code': 'HEA'
        }, {
          'Name': 'Kabul',
          'Code': 'KBL'
        }, {
          'Name': 'Kandahar',
          'Code': 'KDH'
        }, {
          'Name': 'Mazari Sharif',
          'Code': 'MZR'
        }]
      }
    }, {
      'Name': 'Aland lslands',
      'Code': 'ALA'
    }, {
      'Name': 'Albania',
      'Code': 'ALB',
      'State': {
        'City': [{
          'Name': 'Berat',
          'Code': 'BR'
        }, {
          'Name': 'Diber',
          'Code': 'DI'
        }, {
          'Name': 'Durres',
          'Code': 'DR'
        }, {
          'Name': 'Elbasan',
          'Code': 'EL'
        }, {
          'Name': 'Fier',
          'Code': 'FR'
        }, {
          'Name': 'Gjirokaster',
          'Code': 'GJ'
        }, {
          'Name': 'Korce',
          'Code': 'KO'
        }, {
          'Name': 'Kukes',
          'Code': 'KU'
        }, {
          'Name': 'Lezhe',
          'Code': 'LE'
        }, {
          'Name': 'Shkoder',
          'Code': 'SH'
        }, {
          'Name': 'Tirane',
          'Code': 'TR'
        }, {
          'Name': 'Vlore',
          'Code': 'VL'
        }]
      }
    }, {
      'Name': 'Algeria',
      'Code': 'DZA',
      'State': {
        'City': [{
          'Name': 'Adrar',
          'Code': 'ADR'
        }, {
          'Name': 'Ain Defla',
          'Code': 'ADE'
        }, {
          'Name': 'Ain Temouchent',
          'Code': 'ATE'
        }, {
          'Name': 'Alger',
          'Code': 'ALG'
        }, {
          'Name': 'Annaba',
          'Code': 'AAE'
        }, {
          'Name': 'Batna',
          'Code': 'BAT'
        }, {
          'Name': 'Bechar',
          'Code': 'BEC'
        }, {
          'Name': 'Bejaia',
          'Code': 'BJA'
        }, {
          'Name': 'Biskra',
          'Code': 'BIS'
        }, {
          'Name': 'Blida',
          'Code': 'BLI'
        }, {
          'Name': 'Bordj Bou Arreridj',
          'Code': 'BOR'
        }, {
          'Name': 'Bouira',
          'Code': 'BOA'
        }, {
          'Name': 'Boumerdes',
          'Code': 'BOU'
        }, {
          'Name': 'Chlef',
          'Code': 'CHL'
        }, {
          'Name': 'Constantine',
          'Code': 'CZL'
        }, {
          'Name': 'Djelfa',
          'Code': 'DJE'
        }, {
          'Name': 'El Bayadh',
          'Code': 'EBA'
        }, {
          'Name': 'El Oued',
          'Code': 'EOU'
        }, {
          'Name': 'El Tarf',
          'Code': 'ETA'
        }, {
          'Name': 'Ghardaia',
          'Code': 'GHA'
        }, {
          'Name': 'Guelma',
          'Code': 'GUE'
        }, {
          'Name': 'Illizi',
          'Code': 'ILL'
        }, {
          'Name': 'Jijel',
          'Code': 'JIJ'
        }, {
          'Name': 'Khenchela',
          'Code': 'KHE'
        }, {
          'Name': 'Laghouat',
          'Code': 'LAG'
        }, {
          'Name': 'Mascara',
          'Code': 'MUA'
        }, {
          'Name': 'Medea',
          'Code': 'MED'
        }, {
          'Name': 'Mila',
          'Code': 'MIL'
        }, {
          'Name': 'Mostaganem',
          'Code': 'MOS'
        }, {
          'Name': 'Msila',
          'Code': 'MSI'
        }, {
          'Name': 'Naama',
          'Code': 'NAA'
        }, {
          'Name': 'Oran',
          'Code': 'ORA'
        }, {
          'Name': 'Ouargla',
          'Code': 'OUA'
        }, {
          'Name': 'Oum el Bouaghi',
          'Code': 'OEB'
        }, {
          'Name': 'Relizane',
          'Code': 'REL'
        }, {
          'Name': 'Saida',
          'Code': 'SAI'
        }, {
          'Name': 'Setif',
          'Code': 'SET'
        }, {
          'Name': 'Sidi Bel Abbes',
          'Code': 'SBA'
        }, {
          'Name': 'Skikda',
          'Code': 'SKI'
        }, {
          'Name': 'Souk Ahras',
          'Code': 'SAH'
        }, {
          'Name': 'Tamanghasset',
          'Code': 'TAM'
        }, {
          'Name': 'Tebessa',
          'Code': 'TEB'
        }, {
          'Name': 'Tiaret',
          'Code': 'TIA'
        }, {
          'Name': 'Tindouf',
          'Code': 'TIN'
        }, {
          'Name': 'Tipaza',
          'Code': 'TIP'
        }, {
          'Name': 'Tissemsilt',
          'Code': 'TIS'
        }, {
          'Name': 'Tizi Ouzou',
          'Code': 'IOU'
        }, {
          'Name': 'Tlemcen',
          'Code': 'TLE'
        }]
      }
    }, {
      'Name': 'American Samoa',
      'Code': 'ASM',
      'State': {
        'City': [{
          'Name': 'Aana',
          'Code': 'AAN'
        }, {
          'Name': 'Aigaile Tai',
          'Code': 'AIT'
        }, {
          'Name': 'Atua',
          'Code': 'ATU'
        }, {
          'Name': 'Faasaleleaga',
          'Code': 'FAA'
        }, {
          'Name': 'Gagaemauga',
          'Code': 'GMG'
        }, {
          'Name': 'Gagaifomauga',
          'Code': 'GFG'
        }, {
          'Name': 'Palauli',
          'Code': 'PAL'
        }, {
          'Name': 'Satupaitea',
          'Code': 'SAT'
        }, {
          'Name': 'Savaii',
          'Code': 'SAV'
        }, {
          'Name': 'Tuamasaga',
          'Code': 'TUA'
        }, {
          'Name': 'Upolu',
          'Code': 'UPO'
        }, {
          'Name': 'Vaao Fonoti',
          'Code': 'VAF'
        }, {
          'Name': 'Vaisigano',
          'Code': 'VAI'
        }]
      }
    }, {
      'Name': 'Andorra',
      'Code': 'AND',
      'State': {
        'City': [{
          'Name': 'Andorra la Vella',
          'Code': '7'
        }, {
          'Name': 'Canillo',
          'Code': '2'
        }, {
          'Name': 'Encamp',
          'Code': '3'
        }, {
          'Name': 'EscaldesEngordany',
          'Code': '8'
        }, {
          'Name': 'La Massana',
          'Code': '4'
        }, {
          'Name': 'Ordino',
          'Code': '5'
        }, {
          'Name': 'Sant Julia de Loria',
          'Code': '6'
        }]
      }
    }, {
      'Name': 'Angola',
      'Code': 'AGO',
      'State': {
        'City': [{
          'Name': 'Bengo',
          'Code': 'BGO'
        }, {
          'Name': 'Benguela',
          'Code': 'BGU'
        }, {
          'Name': 'Bie',
          'Code': 'BIE'
        }, {
          'Name': 'Cabinda',
          'Code': 'CAB'
        }, {
          'Name': 'Cuando Cubango',
          'Code': 'CCU'
        }, {
          'Name': 'Cuanza Norte',
          'Code': 'CNO'
        }, {
          'Name': 'Cuanza Sul',
          'Code': 'CUS'
        }, {
          'Name': 'Cunene',
          'Code': 'CNN'
        }, {
          'Name': 'Huambo',
          'Code': 'HUA'
        }, {
          'Name': 'Huila',
          'Code': 'HUI'
        }, {
          'Name': 'Luanda',
          'Code': 'LUA'
        }, {
          'Name': 'Lunda Norte',
          'Code': 'LNO'
        }, {
          'Name': 'Lunda Sul',
          'Code': 'LSU'
        }, {
          'Name': 'Malanje',
          'Code': 'MAL'
        }, {
          'Name': 'Moxico',
          'Code': 'MOX'
        }, {
          'Name': 'Namibe',
          'Code': 'NAM'
        }, {
          'Name': 'Uige',
          'Code': 'UIG'
        }, {
          'Name': 'Zaire',
          'Code': 'ZAI'
        }]
      }
    }, {
      'Name': 'Anguilla',
      'Code': 'AIA'
    }, {
      'Name': 'Antarctica',
      'Code': 'ATA'
    }, {
      'Name': 'Antigua and Barbuda',
      'Code': 'ATG'
    }, {
      'Name': 'Argentina',
      'Code': 'ARG',
      'State': {
        'City': [{
          'Name': 'Bahia Blanca',
          'Code': 'BHI'
        }, {
          'Name': 'Buenos Aires',
          'Code': 'BUE'
        }, {
          'Name': 'Catamarca',
          'Code': 'CTC'
        }, {
          'Name': 'Comodoro Rivadavia',
          'Code': 'CRD'
        }, {
          'Name': 'Concordia',
          'Code': 'COC'
        }, {
          'Name': 'Cordoba',
          'Code': 'COR'
        }, {
          'Name': 'Corrientes',
          'Code': 'CNQ'
        }, {
          'Name': 'Formosa',
          'Code': 'FMA'
        }, {
          'Name': 'Jujuy',
          'Code': 'JUJ'
        }, {
          'Name': 'La Plata',
          'Code': 'LPG'
        }, {
          'Name': 'La Rioja',
          'Code': 'IRJ'
        }, {
          'Name': 'Mar del Plata',
          'Code': 'MDQ'
        }, {
          'Name': 'Mendoza',
          'Code': 'MDZ'
        }, {
          'Name': 'Neuquen',
          'Code': 'NQN'
        }, {
          'Name': 'Parana',
          'Code': 'PRA'
        }, {
          'Name': 'Posadas',
          'Code': 'PSS'
        }, {
          'Name': 'Rawson',
          'Code': 'RWO'
        }, {
          'Name': 'Resistencia',
          'Code': 'RES'
        }, {
          'Name': 'Rio Cuarto',
          'Code': 'RCU'
        }, {
          'Name': 'Rio Gallegos',
          'Code': 'RGL'
        }, {
          'Name': 'Rosario',
          'Code': 'ROS'
        }, {
          'Name': 'Salta',
          'Code': 'SLA'
        }, {
          'Name': 'San Juan',
          'Code': 'UAQ'
        }, {
          'Name': 'San Miguel de Tucuman',
          'Code': 'SMC'
        }, {
          'Name': 'San Nicolas',
          'Code': 'SNS'
        }, {
          'Name': 'San Rafael',
          'Code': 'AFA'
        }, {
          'Name': 'San Luis',
          'Code': 'LUQ'
        }, {
          'Name': 'Santa Fe',
          'Code': 'SFN'
        }, {
          'Name': 'Santa Rosa',
          'Code': 'RSA'
        }, {
          'Name': 'Santiago del Estero',
          'Code': 'SDE'
        }, {
          'Name': 'Trelew',
          'Code': 'REL'
        }, {
          'Name': 'Ushuaia',
          'Code': 'USH'
        }, {
          'Name': 'Viedma',
          'Code': 'VDM'
        }, {
          'Name': 'Villa Krause',
          'Code': 'VLK'
        }]
      }
    }, {
      'Name': 'Armenia',
      'Code': 'ARM',
      'State': {
        'City': [{
          'Name': 'Aragacotn',
          'Code': 'AGT'
        }, {
          'Name': 'Ararat',
          'Code': 'ARA'
        }, {
          'Name': 'Armavir',
          'Code': 'ARM'
        }, {
          'Name': 'Gelarkunik',
          'Code': 'GEG'
        }, {
          'Name': 'Kotayk',
          'Code': 'KOT'
        }, {
          'Name': 'Lorri',
          'Code': 'LOR'
        }, {
          'Name': 'Shirak',
          'Code': 'SHI'
        }, {
          'Name': 'Syunik',
          'Code': 'SYU'
        }, {
          'Name': 'Tavus',
          'Code': 'TAV'
        }, {
          'Name': 'VayocJor',
          'Code': 'VAY'
        }, {
          'Name': 'Yerevan',
          'Code': 'EVN'
        }]
      }
    }, {
      'Name': 'Aruba',
      'Code': 'ABW'
    }, {
      'Name': 'Ascension Island',
      'Code': 'ASC'
    }, {
      'Name': 'Australia',
      'Code': 'AUS',
      'State': [{
        'Name': 'Canberra',
        'Code': 'ACT',
        'City': {
          'Name': 'Canberra',
          'Code': 'CBR'
        }
      }, {
        'Name': 'New South Wales',
        'Code': 'NSW',
        'City': [{
          'Name': 'Newcastle',
          'Code': 'NTL'
        }, {
          'Name': 'Sydney',
          'Code': 'HBS'
        }, {
          'Name': 'Wollongong',
          'Code': 'WOL'
        }]
      }, {
        'Name': 'Northern Territory',
        'Code': 'NT',
        'City': [{
          'Name': 'Darwin',
          'Code': 'DRW'
        }, {
          'Name': 'Palmerston',
          'Code': 'PAL'
        }]
      }, {
        'Name': 'Queensland',
        'Code': 'QLD',
        'City': [{
          'Name': 'Brisbane',
          'Code': 'BNE'
        }, {
          'Name': 'Cairns',
          'Code': 'CNS'
        }, {
          'Name': 'Caloundra',
          'Code': 'CUD'
        }, {
          'Name': 'Gold Coast',
          'Code': 'OOL'
        }, {
          'Name': 'Toowoomba',
          'Code': 'TWB'
        }, {
          'Name': 'Townsville',
          'Code': 'TSV'
        }]
      }, {
        'Name': 'South Australia',
        'Code': 'SA',
        'City': [{
          'Name': 'Adelaide',
          'Code': 'ADL'
        }, {
          'Name': 'Mount Gambier',
          'Code': 'MGB'
        }, {
          'Name': 'Murray Bridge',
          'Code': 'MYB'
        }, {
          'Name': 'Port Augusta',
          'Code': 'PUG'
        }, {
          'Name': 'Port Lincoln',
          'Code': 'PLO'
        }, {
          'Name': 'Port Pirie',
          'Code': 'PPI'
        }, {
          'Name': 'Victor Harbor',
          'Code': 'VHA'
        }, {
          'Name': 'Whyalla',
          'Code': 'WAY'
        }]
      }, {
        'Name': 'Tasmania',
        'Code': 'TAS',
        'City': [{
          'Name': 'Burnie',
          'Code': 'BWT'
        }, {
          'Name': 'Devonport',
          'Code': 'DPO'
        }, {
          'Name': 'Hobart',
          'Code': 'HBA'
        }, {
          'Name': 'Launceston',
          'Code': 'LST'
        }]
      }, {
        'Name': 'Victoria',
        'Code': 'VIC',
        'City': [{
          'Name': 'Geelong',
          'Code': 'GEX'
        }, {
          'Name': 'Melbourne',
          'Code': 'MEL'
        }]
      }, {
        'Name': 'Western Australia',
        'Code': 'WA',
        'City': [{
          'Name': 'Albany',
          'Code': 'ALH'
        }, {
          'Name': 'Bunbury',
          'Code': 'BUY'
        }, {
          'Name': 'Fremantle',
          'Code': 'FRE'
        }, {
          'Name': 'Geraldton',
          'Code': 'GET'
        }, {
          'Name': 'Kalgoorlie',
          'Code': 'KGI'
        }, {
          'Name': 'Mandurah',
          'Code': 'MDU'
        }, {
          'Name': 'Perth',
          'Code': 'PER'
        }]
      }]
    }, {
      'Name': 'Austria',
      'Code': 'AUT',
      'State': {
        'City': [{
          'Name': 'Burgenland',
          'Code': 'BUR'
        }, {
          'Name': 'Carinthia',
          'Code': 'CAT'
        }, {
          'Name': 'Lower Austria',
          'Code': 'LAU'
        }, {
          'Name': 'Salzburg',
          'Code': 'SZG'
        }, {
          'Name': 'Styria',
          'Code': 'STY'
        }, {
          'Name': 'Tyrol',
          'Code': 'TYR'
        }, {
          'Name': 'Upper Austria',
          'Code': 'UAU'
        }, {
          'Name': 'Vienna',
          'Code': 'VDD'
        }, {
          'Name': 'Vorarlberg',
          'Code': 'VOR'
        }]
      }
    }, {
      'Name': 'Azerbaijan',
      'Code': 'AZE',
      'State': {
        'City': [{
          'Name': 'Abseron',
          'Code': 'ABS'
        }, {
          'Name': 'Ganca',
          'Code': 'GA'
        }, {
          'Name': 'Kalbacar',
          'Code': 'KAL'
        }, {
          'Name': 'Lankaran',
          'Code': 'LAN'
        }, {
          'Name': 'MilQarabax',
          'Code': 'MQA'
        }, {
          'Name': 'MuganSalyan',
          'Code': 'MSA'
        }, {
          'Name': 'NagorniQarabax',
          'Code': 'NQA'
        }, {
          'Name': 'Naxcivan',
          'Code': 'NX'
        }, {
          'Name': 'Priaraks',
          'Code': 'PRI'
        }, {
          'Name': 'Qazax',
          'Code': 'QAZ'
        }, {
          'Name': 'Saki',
          'Code': 'SA'
        }, {
          'Name': 'Sirvan',
          'Code': 'SIR'
        }, {
          'Name': 'Sumqayit',
          'Code': 'SMC'
        }, {
          'Name': 'Xacmaz',
          'Code': 'XAC'
        }]
      }
    }, {
      'Name': 'Bahamas',
      'Code': 'BHS'
    }, {
      'Name': 'Bahrain',
      'Code': 'BHR',
      'State': {
        'City': [{
          'Name': 'AlGharbiyah',
          'Code': '10'
        }, {
          'Name': 'AlHadd',
          'Code': '1'
        }, {
          'Name': 'AlManamah',
          'Code': '3'
        }, {
          'Name': 'AlMuharraq',
          'Code': '2'
        }, {
          'Name': 'AlWusta',
          'Code': '7'
        }, {
          'Name': 'ArRifa',
          'Code': '9'
        }, {
          'Name': 'AshShamaliyah',
          'Code': '5'
        }, {
          'Name': 'Hammad',
          'Code': '12'
        }, {
          'Name': 'Isa',
          'Code': '8'
        }]
      }
    }, {
      'Name': 'Bangladesh',
      'Code': 'BGD',
      'State': {
        'City': [{
          'Name': 'Chittagong',
          'Code': 'CGP'
        }, {
          'Name': 'Dhaka',
          'Code': 'DAC'
        }, {
          'Name': 'Khulna',
          'Code': 'KHL'
        }]
      }
    }, {
      'Name': 'Barbados',
      'Code': 'BRB'
    }, {
      'Name': 'Belgium',
      'Code': 'BEL',
      'State': {
        'City': [{
          'Name': 'Antwerpen',
          'Code': 'VAN'
        }, {
          'Name': 'BrabantWallone',
          'Code': 'WBR'
        }, {
          'Name': 'Brussels',
          'Code': 'BRU'
        }, {
          'Name': 'Hainaut',
          'Code': 'WHT'
        }, {
          'Name': 'Liege',
          'Code': 'WLG'
        }, {
          'Name': 'Limburg',
          'Code': 'VLI'
        }, {
          'Name': 'Luxembourg',
          'Code': 'WLX'
        }, {
          'Name': 'Namur',
          'Code': 'WNA'
        }, {
          'Name': 'OostVlaanderen',
          'Code': 'VOV'
        }, {
          'Name': 'VlaamsBrabant',
          'Code': 'VBR'
        }, {
          'Name': 'WestVlaanderen',
          'Code': 'VWV'
        }]
      }
    }, {
      'Name': 'Belize',
      'Code': 'BLZ',
      'State': {
        'City': [{
          'Name': 'Belize',
          'Code': 'BZ'
        }, {
          'Name': 'Cayo',
          'Code': 'CY'
        }, {
          'Name': 'Corozal',
          'Code': 'CR'
        }, {
          'Name': 'Orange Walk',
          'Code': 'OW'
        }, {
          'Name': 'Stann Creek',
          'Code': 'SC'
        }, {
          'Name': 'Toledo',
          'Code': 'TO'
        }]
      }
    }, {
      'Name': 'Benin',
      'Code': 'BEN',
      'State': {
        'City': [{
          'Name': 'Alibori',
          'Code': 'AL'
        }, {
          'Name': 'Atakora',
          'Code': 'AK'
        }, {
          'Name': 'Atlantique',
          'Code': 'AQ'
        }, {
          'Name': 'Bohicon',
          'Code': 'BOH'
        }, {
          'Name': 'Borgou',
          'Code': 'BO'
        }, {
          'Name': 'Collines',
          'Code': 'CO'
        }, {
          'Name': 'Donga',
          'Code': 'DO'
        }, {
          'Name': 'Kouffo',
          'Code': 'KO'
        }, {
          'Name': 'Littoral',
          'Code': 'LI'
        }, {
          'Name': 'Mono',
          'Code': 'MO'
        }, {
          'Name': 'Oueme',
          'Code': 'OU'
        }, {
          'Name': 'Plateau',
          'Code': 'PL'
        }, {
          'Name': 'Zou',
          'Code': 'ZO'
        }]
      }
    }, {
      'Name': 'Bermuda',
      'Code': 'BMU'
    }, {
      'Name': 'Bhutan',
      'Code': 'BTN'
    }, {
      'Name': 'Bolivia',
      'Code': 'BOL',
      'State': {
        'City': [{
          'Name': 'Chuquisaca',
          'Code': 'CHU'
        }, {
          'Name': 'Cochabamba',
          'Code': 'CBB'
        }, {
          'Name': 'El Alto',
          'Code': 'ALT'
        }, {
          'Name': 'El Beni',
          'Code': 'BEN'
        }, {
          'Name': 'La Paz',
          'Code': 'LPB'
        }, {
          'Name': 'Oruro',
          'Code': 'ORU'
        }, {
          'Name': 'Pando',
          'Code': 'PAN'
        }, {
          'Name': 'Potosi',
          'Code': 'POI'
        }, {
          'Name': 'Quillacollo',
          'Code': 'QUI'
        }, {
          'Name': 'Sacaba',
          'Code': 'SAC'
        }, {
          'Name': 'Santa Cruz',
          'Code': 'SRZ'
        }, {
          'Name': 'Tarija',
          'Code': 'TJA'
        }]
      }
    }, {
      'Name': 'Bosnia and Herzegovina',
      'Code': 'BIH',
      'State': {
        'City': [{
          'Name': 'BosanskoPodrinjski',
          'Code': 'FBP'
        }, {
          'Name': 'HercegovackoBosanski',
          'Code': 'FHB'
        }, {
          'Name': 'HercegovackoNeretvanski',
          'Code': 'FHN'
        }, {
          'Name': 'Posavski',
          'Code': 'FPO'
        }, {
          'Name': 'Sarajevo',
          'Code': 'FSA'
        }, {
          'Name': 'SrednjoBosanski',
          'Code': 'FSB'
        }, {
          'Name': 'Tomislavgrad',
          'Code': 'FTO'
        }, {
          'Name': 'TuzlanskiPodrinjski',
          'Code': 'FTU'
        }, {
          'Name': 'UnskoSanski',
          'Code': 'FUS'
        }, {
          'Name': 'ZapadnoHercegovaki',
          'Code': 'FZH'
        }, {
          'Name': 'ZenickoDobojski',
          'Code': 'FZE'
        }]
      }
    }, {
      'Name': 'Botswana',
      'Code': 'BWA'
    }, {
      'Name': 'Bouvet Island',
      'Code': 'BVT'
    }, {
      'Name': 'Brazil',
      'Code': 'BRA',
      'State': {
        'City': [{
          'Name': 'Acre',
          'Code': 'AC'
        }, {
          'Name': 'Alagoas',
          'Code': 'AL'
        }, {
          'Name': 'Amapa',
          'Code': 'AP'
        }, {
          'Name': 'Amazonas',
          'Code': 'AM'
        }, {
          'Name': 'Bahia',
          'Code': 'BA'
        }, {
          'Name': 'Brasilia',
          'Code': 'BSB'
        }, {
          'Name': 'Ceara',
          'Code': 'CE'
        }, {
          'Name': 'Espirito Santo',
          'Code': 'ES'
        }, {
          'Name': 'Goias',
          'Code': 'GO'
        }, {
          'Name': 'Maranhao',
          'Code': 'MA'
        }, {
          'Name': 'Mato Grosso',
          'Code': 'MT'
        }, {
          'Name': 'Mato Grosso do Sul',
          'Code': 'MS'
        }, {
          'Name': 'Minas Gerais',
          'Code': 'MG'
        }, {
          'Name': 'Para',
          'Code': 'PA'
        }, {
          'Name': 'Paraiba',
          'Code': 'PB'
        }, {
          'Name': 'Parana',
          'Code': 'PR'
        }, {
          'Name': 'Pernambuco',
          'Code': 'PE'
        }, {
          'Name': 'Piaui',
          'Code': 'PI'
        }, {
          'Name': 'Rio de Janeiro',
          'Code': 'RJ'
        }, {
          'Name': 'Rio Grande do Norte',
          'Code': 'RN'
        }, {
          'Name': 'Rio Grande do Sul',
          'Code': 'RS'
        }, {
          'Name': 'Rondonia',
          'Code': 'RO'
        }, {
          'Name': 'Roraima',
          'Code': 'RR'
        }, {
          'Name': 'Santa Catarina',
          'Code': 'SC'
        }, {
          'Name': 'Sao Paulo',
          'Code': 'SP'
        }, {
          'Name': 'Sergipe',
          'Code': 'SE'
        }, {
          'Name': 'Tocantins',
          'Code': 'TO'
        }]
      }
    }, {
      'Name': 'British Indian Ocean Territory',
      'Code': 'IOT'
    }, {
      'Name': 'Brunei',
      'Code': 'BRN'
    }, {
      'Name': 'Bulgaria',
      'Code': 'BGR',
      'State': {
        'City': [{
          'Name': 'Burgas',
          'Code': 'BOJ'
        }, {
          'Name': 'Grad Sofiya',
          'Code': 'GSO'
        }, {
          'Name': 'Khaskovo',
          'Code': 'KHO'
        }, {
          'Name': 'Lovech',
          'Code': 'LVP'
        }, {
          'Name': 'Montana',
          'Code': 'OZA'
        }, {
          'Name': 'Plovdiv',
          'Code': 'PDV'
        }, {
          'Name': 'Ruse',
          'Code': 'ROU'
        }, {
          'Name': 'Sofiya',
          'Code': 'SOF'
        }, {
          'Name': 'Varna',
          'Code': 'VAR'
        }]
      }
    }, {
      'Name': 'Burkina Faso',
      'Code': 'BFA',
      'State': {
        'City': [{
          'Name': 'Bale',
          'Code': 'BAL'
        }, {
          'Name': 'Bam',
          'Code': 'BAM'
        }, {
          'Name': 'Banwa',
          'Code': 'BAN'
        }, {
          'Name': 'Bazega',
          'Code': 'BAZ'
        }, {
          'Name': 'Bougouriba',
          'Code': 'BOR'
        }, {
          'Name': 'Boulgou',
          'Code': 'BLG'
        }, {
          'Name': 'Boulkiemde',
          'Code': 'BOK'
        }, {
          'Name': 'Comoe',
          'Code': 'COM'
        }, {
          'Name': 'Ganzourgou',
          'Code': 'GAN'
        }, {
          'Name': 'Gnagna',
          'Code': 'GNA'
        }, {
          'Name': 'Gourma',
          'Code': 'GOU'
        }, {
          'Name': 'Houet',
          'Code': 'HOU'
        }, {
          'Name': 'Ioba',
          'Code': 'IOA'
        }, {
          'Name': 'Kadiogo',
          'Code': 'KAD'
        }, {
          'Name': 'Kenedougou',
          'Code': 'KEN'
        }, {
          'Name': 'Komondjari',
          'Code': 'KOO'
        }, {
          'Name': 'Kompienga',
          'Code': 'KOP'
        }, {
          'Name': 'Kossi',
          'Code': 'KOS'
        }, {
          'Name': 'Koulpelogo',
          'Code': 'KOL'
        }, {
          'Name': 'Kouritenga',
          'Code': 'KOT'
        }, {
          'Name': 'Kourweogo',
          'Code': 'KOW'
        }, {
          'Name': 'Leraba',
          'Code': 'LER'
        }, {
          'Name': 'Loroum',
          'Code': 'LOR'
        }, {
          'Name': 'Mouhoun',
          'Code': 'MOU'
        }, {
          'Name': 'Nahouri',
          'Code': 'NAH'
        }, {
          'Name': 'Namentenga',
          'Code': 'NAM'
        }, {
          'Name': 'Nayala',
          'Code': 'NAY'
        }, {
          'Name': 'Noumbiel',
          'Code': 'NOU'
        }, {
          'Name': 'Oubritenga',
          'Code': 'OUB'
        }, {
          'Name': 'Oudalan',
          'Code': 'OUD'
        }, {
          'Name': 'Passore',
          'Code': 'PAS'
        }, {
          'Name': 'Poni',
          'Code': 'PON'
        }, {
          'Name': 'Sanguie',
          'Code': 'SAG'
        }, {
          'Name': 'Sanmatenga',
          'Code': 'SAM'
        }, {
          'Name': 'Seno',
          'Code': 'SEN'
        }, {
          'Name': 'Sissili',
          'Code': 'SIS'
        }, {
          'Name': 'Soum',
          'Code': 'SOM'
        }, {
          'Name': 'Sourou',
          'Code': 'SOR'
        }, {
          'Name': 'Tapoa',
          'Code': 'TAP'
        }, {
          'Name': 'Tuy',
          'Code': 'TUY'
        }, {
          'Name': 'Yagha',
          'Code': 'YAG'
        }, {
          'Name': 'Yatenga',
          'Code': 'YAT'
        }, {
          'Name': 'Ziro',
          'Code': 'ZIR'
        }, {
          'Name': 'Zondoma',
          'Code': 'ZOD'
        }, {
          'Name': 'Zoundweogo',
          'Code': 'ZOW'
        }]
      }
    }, {
      'Name': 'Burundi',
      'Code': 'BDI',
      'State': {
        'City': [{
          'Name': 'Bubanza',
          'Code': 'BB'
        }, {
          'Name': 'Bujumbura Mairie',
          'Code': 'BM'
        }, {
          'Name': 'Bujumbura Rural',
          'Code': 'BU'
        }, {
          'Name': 'Bururi',
          'Code': 'BR'
        }, {
          'Name': 'Cankuzo',
          'Code': 'CA'
        }, {
          'Name': 'Cibitoke',
          'Code': 'CI'
        }, {
          'Name': 'Gitega',
          'Code': 'GI'
        }, {
          'Name': 'Karuzi',
          'Code': 'KR'
        }, {
          'Name': 'Kayanza',
          'Code': 'KY'
        }, {
          'Name': 'Kirundo',
          'Code': 'KI'
        }, {
          'Name': 'Makamba',
          'Code': 'MA'
        }, {
          'Name': 'Muramvya',
          'Code': 'MU'
        }, {
          'Name': 'Muyinga',
          'Code': 'MY'
        }, {
          'Name': 'Mwaro',
          'Code': 'MW'
        }, {
          'Name': 'Ngozi',
          'Code': 'NG'
        }, {
          'Name': 'Rutana',
          'Code': 'RT'
        }, {
          'Name': 'Ruyigi',
          'Code': 'RY'
        }]
      }
    }, {
      'Name': 'Cambodia',
      'Code': 'KHM',
      'State': {
        'City': [{
          'Name': 'Banteay Mean Chey',
          'Code': 'BM'
        }, {
          'Name': 'Bat Dambang',
          'Code': 'BA'
        }, {
          'Name': 'Kampong Cham',
          'Code': 'KM'
        }, {
          'Name': 'Kampong Chhnang',
          'Code': 'KZC'
        }, {
          'Name': 'Kampong Spoe',
          'Code': 'KO'
        }, {
          'Name': 'Kampong Thum',
          'Code': 'KZK'
        }, {
          'Name': 'Kampot',
          'Code': 'KMT'
        }, {
          'Name': 'Kandal',
          'Code': 'KL'
        }, {
          'Name': 'Kaoh Kong',
          'Code': 'KKZ'
        }, {
          'Name': 'Kracheh',
          'Code': 'KH'
        }, {
          'Name': 'Krong Keb',
          'Code': 'KB'
        }, {
          'Name': 'Krong Pailin',
          'Code': 'PL'
        }, {
          'Name': 'Krong Preah',
          'Code': 'KA'
        }, {
          'Name': 'Mondol Kiri',
          'Code': 'MWV'
        }, {
          'Name': 'Otdar Mean Chey',
          'Code': 'OC'
        }, {
          'Name': 'Phnum Penh',
          'Code': 'PNH'
        }, {
          'Name': 'Pouthĭsat',
          'Code': 'PO'
        }, {
          'Name': 'Preah Vihear',
          'Code': 'PR'
        }, {
          'Name': 'Prey Veng',
          'Code': 'PG'
        }, {
          'Name': 'Rotanak Kiri',
          'Code': 'RBE'
        }, {
          'Name': 'Siem Reab',
          'Code': 'REP'
        }, {
          'Name': 'Stoeng Treng',
          'Code': 'TNX'
        }, {
          'Name': 'Svay Rieng',
          'Code': 'SVR'
        }, {
          'Name': 'Takev',
          'Code': 'TK'
        }]
      }
    }, {
      'Name': 'Cameroon',
      'Code': 'CMR',
      'State': {
        'City': [{
          'Name': 'Adamaoua',
          'Code': 'ADA'
        }, {
          'Name': 'Centre',
          'Code': 'CEN'
        }, {
          'Name': 'Est',
          'Code': 'EST'
        }, {
          'Name': 'ExtremeNord',
          'Code': 'EXN'
        }, {
          'Name': 'Littoral',
          'Code': 'LIT'
        }, {
          'Name': 'Nord',
          'Code': 'NOR'
        }, {
          'Name': 'NordOueste',
          'Code': 'NOT'
        }, {
          'Name': 'Ouest',
          'Code': 'OUE'
        }, {
          'Name': 'Sud',
          'Code': 'SUD'
        }, {
          'Name': 'SudOueste',
          'Code': 'SOU'
        }]
      }
    }, {
      'Name': 'Canada',
      'Code': 'CAN',
      'State': {
        'City': [{
          'Name': 'Abbotsford',
          'Code': 'ABB'
        }, {
          'Name': 'Barrie',
          'Code': 'BAR'
        }, {
          'Name': 'Brampton',
          'Code': 'BRP'
        }, {
          'Name': 'Calgary',
          'Code': 'CAL'
        }, {
          'Name': 'Cape Breton',
          'Code': 'CBR'
        }, {
          'Name': 'Charlottetown',
          'Code': 'CHA'
        }, {
          'Name': 'Edmonton',
          'Code': 'EDM'
        }, {
          'Name': 'Fredericton',
          'Code': 'FRE'
        }, {
          'Name': 'Guelph',
          'Code': 'GLP'
        }, {
          'Name': 'Halifax',
          'Code': 'HAL'
        }, {
          'Name': 'Hamilton',
          'Code': 'HAM'
        }, {
          'Name': 'Iqaluit',
          'Code': 'IQL'
        }, {
          'Name': 'Kelowna',
          'Code': 'KWL'
        }, {
          'Name': 'Kingston',
          'Code': 'KGN'
        }, {
          'Name': 'London',
          'Code': 'LOD'
        }, {
          'Name': 'Montreal',
          'Code': 'MTR'
        }, {
          'Name': 'Oshawa',
          'Code': 'OSH'
        }, {
          'Name': 'Ottawa',
          'Code': 'OTT'
        }, {
          'Name': 'Quebec',
          'Code': 'QUE'
        }, {
          'Name': 'Regina',
          'Code': 'REG'
        }, {
          'Name': 'SaintJohn`s',
          'Code': 'SJB'
        }, {
          'Name': 'Saskatoon',
          'Code': 'SAK'
        }, {
          'Name': 'Sherbrooke',
          'Code': 'SBE'
        }, {
          'Name': 'St. Catharines',
          'Code': 'SCA'
        }, {
          'Name': 'Sudbury',
          'Code': 'SUD'
        }, {
          'Name': 'Thunder Bay',
          'Code': 'THU'
        }, {
          'Name': 'Toronto',
          'Code': 'TOR'
        }, {
          'Name': 'TroisRivieres',
          'Code': 'TRR'
        }, {
          'Name': 'Vancouver',
          'Code': 'VAN'
        }, {
          'Name': 'Victoria',
          'Code': 'VIC'
        }, {
          'Name': 'Whitehorse',
          'Code': 'YXY'
        }, {
          'Name': 'Windsor',
          'Code': 'WDR'
        }, {
          'Name': 'Winnipeg',
          'Code': 'WNP'
        }, {
          'Name': 'Yellowknife',
          'Code': 'YZF'
        }]
      }
    }, {
      'Name': 'Cape Verde',
      'Code': 'CPV',
      'State': {
        'City': [{
          'Name': 'Boa Vista',
          'Code': 'BV'
        }, {
          'Name': 'Brava',
          'Code': 'BR'
        }, {
          'Name': 'Fogo',
          'Code': 'FO'
        }, {
          'Name': 'Maio',
          'Code': 'MA'
        }, {
          'Name': 'Mosteiros',
          'Code': 'MO'
        }, {
          'Name': 'Paul',
          'Code': 'PA'
        }, {
          'Name': 'Porto Novo',
          'Code': 'PN'
        }, {
          'Name': 'Praia',
          'Code': 'PR'
        }, {
          'Name': 'Ribeira Grande',
          'Code': 'RG'
        }, {
          'Name': 'Sal',
          'Code': 'SL'
        }, {
          'Name': 'Santa Catarina',
          'Code': 'CA'
        }, {
          'Name': 'Santa Cruz',
          'Code': 'CR'
        }, {
          'Name': 'Santiago',
          'Code': 'IA'
        }, {
          'Name': 'Santo Antao',
          'Code': 'SA'
        }, {
          'Name': 'Sao Domingos',
          'Code': 'SD'
        }, {
          'Name': 'Sao Filipe',
          'Code': 'SF'
        }, {
          'Name': 'Sao Miguel',
          'Code': 'SM'
        }, {
          'Name': 'Sao Nicolau',
          'Code': 'SN'
        }, {
          'Name': 'Sao Vicente',
          'Code': 'SV'
        }, {
          'Name': 'Tarrafal',
          'Code': 'TA'
        }]
      }
    }, {
      'Name': 'Cayman Islands',
      'Code': 'CYM'
    }, {
      'Name': 'Central African Republic',
      'Code': 'CAF',
      'State': {
        'City': [{
          'Name': 'BaminguiBangoran',
          'Code': 'BB'
        }, {
          'Name': 'Bangui',
          'Code': 'BGF'
        }, {
          'Name': 'BasseKotto',
          'Code': 'BK'
        }, {
          'Name': 'Bimbo',
          'Code': 'BI'
        }, {
          'Name': 'HauteKotto',
          'Code': 'HK'
        }, {
          'Name': 'HautMbomou',
          'Code': 'HM'
        }, {
          'Name': 'Kemo',
          'Code': 'KG'
        }, {
          'Name': 'Lobaye',
          'Code': 'LB'
        }, {
          'Name': 'MambereKadei',
          'Code': 'HS'
        }, {
          'Name': 'Mbomou',
          'Code': 'MB'
        }, {
          'Name': 'NanaGribizi',
          'Code': 'KB'
        }, {
          'Name': 'NanaMambere',
          'Code': 'NM'
        }, {
          'Name': 'OmbellaMpoko',
          'Code': 'MP'
        }, {
          'Name': 'Ouaka',
          'Code': 'UK'
        }, {
          'Name': 'Ouham',
          'Code': 'AC'
        }, {
          'Name': 'OuhamPende',
          'Code': 'OP'
        }, {
          'Name': 'SanghaMbaere',
          'Code': 'SE'
        }, {
          'Name': 'Vakaga',
          'Code': 'VK'
        }]
      }
    }, {
      'Name': 'Chad',
      'Code': 'TCD'
    }, {
      'Name': 'Chile',
      'Code': 'CHL',
      'State': {
        'City': [{
          'Name': 'Libertador',
          'Code': 'LI'
        }, {
          'Name': 'Magallanes y Antartica Chilena',
          'Code': 'MA'
        }, {
          'Name': 'Metropolitana de Santiago',
          'Code': 'RM'
        }, {
          'Name': 'Region de Alsen del General Carlos Ibanez del',
          'Code': 'AI'
        }, {
          'Name': 'Region de Antofagasta',
          'Code': 'AN'
        }, {
          'Name': 'Region de Atacama',
          'Code': 'AT'
        }, {
          'Name': 'Region de Coquimbo',
          'Code': 'CO'
        }, {
          'Name': 'Region de la Araucania',
          'Code': 'AR'
        }, {
          'Name': 'Region de los Lagos',
          'Code': 'LL'
        }, {
          'Name': 'Region de Tarapaca',
          'Code': 'TA'
        }, {
          'Name': 'Region de Valparaiso',
          'Code': 'VS'
        }, {
          'Name': 'Region del Biobio',
          'Code': 'BI'
        }, {
          'Name': 'Region del Maule',
          'Code': 'ML'
        }]
      }
    }, {
      'Name': 'Christmas Island',
      'Code': 'CXR'
    }, {
      'Name': 'Cocos(Keeling)Islands',
      'Code': 'CCK'
    }, {
      'Name': 'Colombia',
      'Code': 'COL',
      'State': {
        'City': [{
          'Name': 'Amazonas',
          'Code': 'AMZ'
        }, {
          'Name': 'Antioquia',
          'Code': 'ANT'
        }, {
          'Name': 'Arauca',
          'Code': 'ARA'
        }, {
          'Name': 'Atlantico',
          'Code': 'ATL'
        }, {
          'Name': 'Bogota',
          'Code': 'BDC'
        }, {
          'Name': 'Bolivar',
          'Code': 'BOL'
        }, {
          'Name': 'Boyaca',
          'Code': 'BOY'
        }, {
          'Name': 'Caldas',
          'Code': 'CAL'
        }, {
          'Name': 'Caqueta',
          'Code': 'CAQ'
        }, {
          'Name': 'Casanare',
          'Code': 'CAS'
        }, {
          'Name': 'Cauca',
          'Code': 'CAU'
        }, {
          'Name': 'Cesar',
          'Code': 'CES'
        }, {
          'Name': 'Choco',
          'Code': 'CHO'
        }, {
          'Name': 'Cordoba',
          'Code': 'COR'
        }, {
          'Name': 'Cundinamarca',
          'Code': 'CAM'
        }, {
          'Name': 'Guainia',
          'Code': 'GNA'
        }, {
          'Name': 'Guaviare',
          'Code': 'GVR'
        }, {
          'Name': 'Huila',
          'Code': 'HUI'
        }, {
          'Name': 'La Guajira',
          'Code': 'GJR'
        }, {
          'Name': 'Magdalena',
          'Code': 'MAG'
        }, {
          'Name': 'Meta',
          'Code': 'MET'
        }, {
          'Name': 'Narino',
          'Code': 'NAR'
        }, {
          'Name': 'Norte de Santander',
          'Code': 'NDS'
        }, {
          'Name': 'Putumayo',
          'Code': 'PUT'
        }, {
          'Name': 'Quindio',
          'Code': 'QUI'
        }, {
          'Name': 'Risaralda',
          'Code': 'RIS'
        }, {
          'Name': 'San Andres y Providencia',
          'Code': 'SAP'
        }, {
          'Name': 'Santander',
          'Code': 'SAN'
        }, {
          'Name': 'Sucre',
          'Code': 'SUC'
        }, {
          'Name': 'Tolima',
          'Code': 'TOL'
        }, {
          'Name': 'Valle del Cauca',
          'Code': 'VDC'
        }, {
          'Name': 'Vaupes',
          'Code': 'VAU'
        }, {
          'Name': 'Vichada',
          'Code': 'VIC'
        }]
      }
    }, {
      'Name': 'Comoros',
      'Code': 'COM'
    }, {
      'Name': 'Congo',
      'Code': 'COG'
    }, {
      'Name': 'Congo(DRC)',
      'Code': 'COD'
    }, {
      'Name': 'Cook Islands',
      'Code': 'COK'
    }, {
      'Name': 'Costa Rica',
      'Code': 'CRI',
      'State': {
        'City': [{
          'Name': 'Alajuela',
          'Code': 'A'
        }, {
          'Name': 'Cartago',
          'Code': 'C'
        }, {
          'Name': 'Guanacaste',
          'Code': 'G'
        }, {
          'Name': 'Heredia',
          'Code': 'H'
        }, {
          'Name': 'Limon',
          'Code': 'L'
        }, {
          'Name': 'Puntarenas',
          'Code': 'P'
        }, {
          'Name': 'San Jose',
          'Code': 'SJ'
        }]
      }
    }, {
      'Name': 'Cote d`Ivoire',
      'Code': 'CIV',
      'State': {
        'City': [{
          'Name': 'Agnebi',
          'Code': 'AG'
        }, {
          'Name': 'Bafing',
          'Code': 'BF'
        }, {
          'Name': 'BasSassandra',
          'Code': 'BS'
        }, {
          'Name': 'Denguele',
          'Code': 'DE'
        }, {
          'Name': 'Fromager',
          'Code': 'FR'
        }, {
          'Name': 'HautSassandra',
          'Code': 'HT'
        }, {
          'Name': 'Lacs',
          'Code': 'LC'
        }, {
          'Name': 'Lagunes',
          'Code': 'LG'
        }, {
          'Name': 'Marahoue',
          'Code': 'MR'
        }, {
          'Name': 'Montagnes',
          'Code': 'DH'
        }, {
          'Name': 'MoyenCavally',
          'Code': 'MV'
        }, {
          'Name': 'MoyenComoe',
          'Code': 'MC'
        }, {
          'Name': 'NziComoe',
          'Code': 'NC'
        }, {
          'Name': 'Savanes',
          'Code': 'SV'
        }, {
          'Name': 'SudBandama',
          'Code': 'SB'
        }, {
          'Name': 'SudComoe',
          'Code': 'SC'
        }, {
          'Name': 'Vallee du Bandama',
          'Code': 'VB'
        }, {
          'Name': 'Worodougou',
          'Code': 'WR'
        }, {
          'Name': 'Zanzan',
          'Code': 'ZA'
        }]
      }
    }, {
      'Name': 'Croatia',
      'Code': 'HRV',
      'State': {
        'City': [{
          'Name': 'BjelovarskoBilogorska',
          'Code': '7'
        }, {
          'Name': 'BrodskoPosavska',
          'Code': '12'
        }, {
          'Name': 'DubrovackoNeretvanska',
          'Code': '19'
        }, {
          'Name': 'Grad Zagreb',
          'Code': '21'
        }, {
          'Name': 'Istarska',
          'Code': '18'
        }, {
          'Name': 'Karlovacka',
          'Code': '4'
        }, {
          'Name': 'KoprivnickoKrizevacka',
          'Code': '6'
        }, {
          'Name': 'KrapinskoZagorska',
          'Code': '2'
        }, {
          'Name': 'LickoSenjska',
          'Code': '9'
        }, {
          'Name': 'Medimurska',
          'Code': '20'
        }, {
          'Name': 'OsjeckoBaranjska',
          'Code': '14'
        }, {
          'Name': 'PozegaSlavonia',
          'Code': '11'
        }, {
          'Name': 'PrimorskoGoranska',
          'Code': '8'
        }, {
          'Name': 'SibenskoKninska',
          'Code': '15'
        }, {
          'Name': 'SisackoMoslavacka',
          'Code': '3'
        }, {
          'Name': 'SplitskoDalmatinska',
          'Code': '17'
        }, {
          'Name': 'Varazdinska',
          'Code': '5'
        }, {
          'Name': 'VirovitickoPodravska',
          'Code': '10'
        }, {
          'Name': 'VukovarskoSrijemska',
          'Code': '16'
        }, {
          'Name': 'Zadarska',
          'Code': '13'
        }, {
          'Name': 'Zagrebacka',
          'Code': '1'
        }]
      }
    }, {
      'Name': 'Cuba',
      'Code': 'CUB',
      'State': {
        'City': [{
          'Name': 'Camaguey',
          'Code': '9'
        }, {
          'Name': 'Ciego de Avila',
          'Code': '8'
        }, {
          'Name': 'Cienfuegos',
          'Code': '6'
        }, {
          'Name': 'Ciudad de la Habana',
          'Code': '3'
        }, {
          'Name': 'Granma',
          'Code': '12'
        }, {
          'Name': 'Guantanamo',
          'Code': '14'
        }, {
          'Name': 'Holguin',
          'Code': '11'
        }, {
          'Name': 'Isla de la Juventud',
          'Code': '99'
        }, {
          'Name': 'La Habana',
          'Code': '2'
        }, {
          'Name': 'Las Tunas',
          'Code': '10'
        }, {
          'Name': 'Manzanillo',
          'Code': 'MZO'
        }, {
          'Name': 'Matanzas',
          'Code': '4'
        }, {
          'Name': 'Mayari',
          'Code': 'MAY'
        }, {
          'Name': 'Pinar del Rio',
          'Code': '1'
        }, {
          'Name': 'Sancti Spiritus',
          'Code': '7'
        }, {
          'Name': 'Santiago de Cuba',
          'Code': '13'
        }, {
          'Name': 'Villa Clara',
          'Code': '5'
        }]
      }
    }, {
      'Name': 'Cyprus',
      'Code': 'CYP',
      'State': {
        'City': [{
          'Name': 'Famagusta',
          'Code': '4'
        }, {
          'Name': 'Kyrenia',
          'Code': '6'
        }, {
          'Name': 'Larnaca',
          'Code': '3'
        }, {
          'Name': 'Limassol',
          'Code': '2'
        }, {
          'Name': 'Nicosia',
          'Code': '1'
        }, {
          'Name': 'Pafos',
          'Code': '5'
        }]
      }
    }, {
      'Name': 'Czech Republic',
      'Code': 'CZE',
      'State': {
        'City': [{
          'Name': 'Jihomoravsky',
          'Code': 'JC'
        }, {
          'Name': 'Karlovarsky',
          'Code': 'KA'
        }, {
          'Name': 'Kralovehradecky',
          'Code': 'KR'
        }, {
          'Name': 'Liberecky',
          'Code': 'LI'
        }, {
          'Name': 'Moravskoslezsky',
          'Code': 'MO'
        }, {
          'Name': 'Olomoucky',
          'Code': 'OL'
        }, {
          'Name': 'Pardubicky',
          'Code': 'PA'
        }, {
          'Name': 'Plzensky',
          'Code': 'PL'
        }, {
          'Name': 'Prague',
          'Code': 'PR'
        }, {
          'Name': 'Stredocesky',
          'Code': 'ST'
        }, {
          'Name': 'Ustecky',
          'Code': 'US'
        }, {
          'Name': 'Vysocina',
          'Code': 'VY'
        }, {
          'Name': 'Zlinsky',
          'Code': 'ZL'
        }]
      }
    }, {
      'Name': 'Denmark',
      'Code': 'DNK',
      'State': {
        'City': [{
          'Name': 'Aarhus',
          'Code': 'AR'
        }, {
          'Name': 'Bornholm',
          'Code': 'BO'
        }, {
          'Name': 'Copenhagen',
          'Code': 'CPH'
        }, {
          'Name': 'Frederiksborg',
          'Code': 'FRE'
        }, {
          'Name': 'Fyn',
          'Code': 'FY'
        }, {
          'Name': 'Nordjylland',
          'Code': 'VSV'
        }, {
          'Name': 'Ribe',
          'Code': 'RIB'
        }, {
          'Name': 'Ringkoebing',
          'Code': 'RKG'
        }, {
          'Name': 'Roskilde',
          'Code': 'RKE'
        }, {
          'Name': 'Soenderjylland',
          'Code': 'VBI'
        }, {
          'Name': 'Storstroem',
          'Code': 'ST'
        }, {
          'Name': 'Vejle',
          'Code': 'VEJ'
        }, {
          'Name': 'Vestsjaelland',
          'Code': 'VS'
        }, {
          'Name': 'Viborg',
          'Code': 'VIB'
        }]
      }
    }, {
      'Name': 'Djibouti',
      'Code': 'DJI',
      'State': {
        'City': [{
          'Name': 'Ali Sabih',
          'Code': 'S'
        }, {
          'Name': 'Dikhil',
          'Code': 'K'
        }, {
          'Name': 'Obock',
          'Code': 'O'
        }, {
          'Name': 'Tadjoura',
          'Code': 'T'
        }]
      }
    }, {
      'Name': 'Dominica',
      'Code': 'DMA'
    }, {
      'Name': 'Dominican Republic',
      'Code': 'DOM'
    }, {
      'Name': 'Ecuador',
      'Code': 'ECU',
      'State': {
        'City': [{
          'Name': 'Azuay',
          'Code': 'A'
        }, {
          'Name': 'Bolivar',
          'Code': 'B'
        }, {
          'Name': 'Canar',
          'Code': 'F'
        }, {
          'Name': 'Carchi',
          'Code': 'C'
        }, {
          'Name': 'Chimborazo',
          'Code': 'H'
        }, {
          'Name': 'Cotopaxi',
          'Code': 'X'
        }, {
          'Name': 'El Oro',
          'Code': 'O'
        }, {
          'Name': 'Esmeraldas',
          'Code': 'E'
        }, {
          'Name': 'Galapagos',
          'Code': 'W'
        }, {
          'Name': 'Guayas',
          'Code': 'G'
        }, {
          'Name': 'Imbabura',
          'Code': 'I'
        }, {
          'Name': 'Loja',
          'Code': 'L'
        }, {
          'Name': 'Los Rios',
          'Code': 'R'
        }, {
          'Name': 'Manabi',
          'Code': 'M'
        }, {
          'Name': 'MoronaSantiago',
          'Code': 'S'
        }, {
          'Name': 'Napo, Orellana',
          'Code': 'D'
        }, {
          'Name': 'Pastaza',
          'Code': 'Y'
        }, {
          'Name': 'Pichincha',
          'Code': 'P'
        }, {
          'Name': 'Sucumbios',
          'Code': 'U'
        }, {
          'Name': 'Tungurahua',
          'Code': 'T'
        }, {
          'Name': 'ZamoraChinchipe',
          'Code': 'Z'
        }]
      }
    }, {
      'Name': 'Egypt',
      'Code': 'EGY',
      'State': {
        'City': [{
          'Name': 'Al Ghurdaqah',
          'Code': 'GBY'
        }, {
          'Name': 'Alexandria',
          'Code': 'ALY'
        }, {
          'Name': 'Aswan',
          'Code': 'ASW'
        }, {
          'Name': 'Cairo',
          'Code': 'CAI'
        }, {
          'Name': 'Shubra al Khaymah',
          'Code': 'SKH'
        }]
      }
    }, {
      'Name': 'El Salvador',
      'Code': 'SLV',
      'State': {
        'City': [{
          'Name': 'Ahuachapan',
          'Code': 'AH'
        }, {
          'Name': 'Apopa',
          'Code': 'APO'
        }, {
          'Name': 'Cabanas',
          'Code': 'CA'
        }, {
          'Name': 'Centro Sur',
          'Code': 'CS'
        }, {
          'Name': 'Chalatenango',
          'Code': 'CH'
        }, {
          'Name': 'Cuscatlan',
          'Code': 'CU'
        }, {
          'Name': 'Delgado',
          'Code': 'DE'
        }, {
          'Name': 'Ilopango',
          'Code': 'IL'
        }, {
          'Name': 'KieNtem',
          'Code': 'KN'
        }, {
          'Name': 'La Libertad',
          'Code': 'LB'
        }, {
          'Name': 'La Paz',
          'Code': 'PZ'
        }, {
          'Name': 'La Union',
          'Code': 'UN'
        }, {
          'Name': 'Litoral',
          'Code': 'LI'
        }, {
          'Name': 'Mejicanos',
          'Code': 'MEJ'
        }, {
          'Name': 'Morazan',
          'Code': 'MO'
        }, {
          'Name': 'San Miguel',
          'Code': 'SM'
        }, {
          'Name': 'San Salvador',
          'Code': 'SS'
        }, {
          'Name': 'San Vicente',
          'Code': 'SV'
        }, {
          'Name': 'Santa Ana',
          'Code': 'SA'
        }, {
          'Name': 'Sonsonate',
          'Code': 'SO'
        }, {
          'Name': 'Soyapango',
          'Code': 'SOY'
        }, {
          'Name': 'Usulutan',
          'Code': 'US'
        }, {
          'Name': 'WeleNzas',
          'Code': 'WN'
        }]
      }
    }, {
      'Name': 'Eritrea',
      'Code': 'ERI',
      'State': {
        'City': [{
          'Name': 'Anseba',
          'Code': 'KE'
        }, {
          'Name': 'Debub',
          'Code': 'DE'
        }, {
          'Name': 'Debubawi Keyih Bahri',
          'Code': 'DK'
        }, {
          'Name': 'Gash Barka',
          'Code': 'BR'
        }, {
          'Name': 'Maekel',
          'Code': 'MA'
        }, {
          'Name': 'Semenawi Keyih Bahri',
          'Code': 'SK'
        }]
      }
    }, {
      'Name': 'Estonia',
      'Code': 'EST',
      'State': {
        'City': [{
          'Name': 'Harju',
          'Code': '37'
        }, {
          'Name': 'Hiiu',
          'Code': '39'
        }, {
          'Name': 'IdaViru',
          'Code': '44'
        }, {
          'Name': 'Jarva',
          'Code': '51'
        }, {
          'Name': 'Jogeva',
          'Code': '49'
        }, {
          'Name': 'Laane',
          'Code': '57'
        }, {
          'Name': 'LaaneViru',
          'Code': '59'
        }, {
          'Name': 'Parnu',
          'Code': '67'
        }, {
          'Name': 'Polva',
          'Code': '65'
        }, {
          'Name': 'Rapla',
          'Code': '70'
        }, {
          'Name': 'Saare',
          'Code': '74'
        }, {
          'Name': 'Tartu',
          'Code': '78'
        }, {
          'Name': 'Valga',
          'Code': '82'
        }, {
          'Name': 'Viljandi',
          'Code': '84'
        }, {
          'Name': 'Voru',
          'Code': '86'
        }]
      }
    }, {
      'Name': 'Ethiopia',
      'Code': 'ETH',
      'State': {
        'City': [{
          'Name': 'Adis abeba',
          'Code': 'AA'
        }, {
          'Name': 'Afar',
          'Code': 'AF'
        }, {
          'Name': 'Amara',
          'Code': 'AH'
        }, {
          'Name': 'Binshangul Gumuz',
          'Code': 'BG'
        }, {
          'Name': 'Dire Dawa',
          'Code': 'DD'
        }, {
          'Name': 'Gambela Hizboch',
          'Code': 'GB'
        }, {
          'Name': 'Hareri  Hizb',
          'Code': 'HR'
        }, {
          'Name': 'Oromiya',
          'Code': 'OR'
        }, {
          'Name': 'Sumale',
          'Code': 'SM'
        }, {
          'Name': 'Tigray',
          'Code': 'TG'
        }, {
          'Name': 'YeDebub Biheroch',
          'Code': 'SN'
        }]
      }
    }, {
      'Name': 'Falkland Islands',
      'Code': 'FLK'
    }, {
      'Name': 'Faroe Islands',
      'Code': 'FRO'
    }, {
      'Name': 'Fiji Islands',
      'Code': 'FJI'
    }, {
      'Name': 'Finland',
      'Code': 'FIN',
      'State': {
        'City': [{
          'Name': 'Espoo',
          'Code': 'ESP'
        }, {
          'Name': 'Hameenlinna',
          'Code': 'HMY'
        }, {
          'Name': 'Helsinki',
          'Code': 'HEL'
        }, {
          'Name': 'Joensuu',
          'Code': 'JOE'
        }, {
          'Name': 'Kajaani',
          'Code': 'KAJ'
        }, {
          'Name': 'Kokkola',
          'Code': 'KOK'
        }, {
          'Name': 'Kotka',
          'Code': 'KTK'
        }, {
          'Name': 'Kuopio',
          'Code': 'KUO'
        }, {
          'Name': 'Lahti',
          'Code': 'LHI'
        }, {
          'Name': 'Lappeenranta',
          'Code': 'LPP'
        }, {
          'Name': 'Mariehamn',
          'Code': 'MHQ'
        }, {
          'Name': 'Mikkeli',
          'Code': 'MIK'
        }, {
          'Name': 'Oulu',
          'Code': 'OLU'
        }, {
          'Name': 'Pori',
          'Code': 'POR'
        }, {
          'Name': 'Porvoo',
          'Code': 'PRV'
        }, {
          'Name': 'Rovaniemi',
          'Code': 'RVN'
        }, {
          'Name': 'Tampere',
          'Code': 'TMP'
        }, {
          'Name': 'Turku',
          'Code': 'TKU'
        }, {
          'Name': 'Vaasa',
          'Code': 'VAA'
        }, {
          'Name': 'Vantaa',
          'Code': 'VAT'
        }]
      }
    }, {
      'Name': 'France',
      'Code': 'FRA',
      'State': {
        'City': [{
          'Name': 'AixenProvence',
          'Code': 'QXB'
        }, {
          'Name': 'Ajaccio',
          'Code': 'AJA'
        }, {
          'Name': 'Amiens',
          'Code': 'AMI'
        }, {
          'Name': 'Arles',
          'Code': 'ARL'
        }, {
          'Name': 'Besancon',
          'Code': 'BSN'
        }, {
          'Name': 'Caen',
          'Code': 'CFR'
        }, {
          'Name': 'ChalonsenChampagne',
          'Code': 'CSM'
        }, {
          'Name': 'Dijon',
          'Code': 'DIJ'
        }, {
          'Name': 'Frejus',
          'Code': 'FRJ'
        }, {
          'Name': 'Lille',
          'Code': 'LLE'
        }, {
          'Name': 'Limoges',
          'Code': 'LIG'
        }, {
          'Name': 'Lyon',
          'Code': 'LIO'
        }, {
          'Name': 'Marseille',
          'Code': 'MRS'
        }, {
          'Name': 'Metz',
          'Code': 'MZM'
        }, {
          'Name': 'Montpellier',
          'Code': 'MPL'
        }, {
          'Name': 'Nantes',
          'Code': 'NTE'
        }, {
          'Name': 'Nice',
          'Code': 'NCE'
        }, {
          'Name': 'Orleans',
          'Code': 'ORR'
        }, {
          'Name': 'Paris',
          'Code': 'PAR'
        }, {
          'Name': 'Rennes',
          'Code': 'RNS'
        }, {
          'Name': 'Rouen',
          'Code': 'URO'
        }, {
          'Name': 'Toulouse',
          'Code': 'TLS'
        }, {
          'Name': 'Valence',
          'Code': 'VAA'
        }]
      }
    }, {
      'Name': 'French Polynesia',
      'Code': 'PYF'
    }, {
      'Name': 'French Guiana',
      'Code': 'GUF'
    }, {
      'Name': 'French Southern and Antarctic Lands',
      'Code': 'ATF'
    }, {
      'Name': 'Gabon',
      'Code': 'GAB',
      'State': {
        'City': [{
          'Name': 'Estuaire',
          'Code': 'ES'
        }, {
          'Name': 'HautOgooue',
          'Code': 'HO'
        }, {
          'Name': 'MoyenOgooue',
          'Code': 'MO'
        }, {
          'Name': 'Ngounie',
          'Code': 'NG'
        }, {
          'Name': 'Nyanga',
          'Code': 'NY'
        }, {
          'Name': 'OgooueIvindo',
          'Code': 'OI'
        }, {
          'Name': 'OgooueLolo',
          'Code': 'OL'
        }, {
          'Name': 'OgooueMaritime',
          'Code': 'OM'
        }, {
          'Name': 'WoleuNtem',
          'Code': 'WN'
        }]
      }
    }, {
      'Name': 'Gambia',
      'Code': 'GMB'
    }, {
      'Name': 'Georgia',
      'Code': 'GEO'
    }, {
      'Name': 'Germany',
      'Code': 'DEU',
      'State': {
        'City': [{
          'Name': 'Ansbach',
          'Code': 'ANS'
        }, {
          'Name': 'Arnsberg',
          'Code': 'ARN'
        }, {
          'Name': 'Augsburg',
          'Code': 'AGB'
        }, {
          'Name': 'Bayreuth',
          'Code': 'BYU'
        }, {
          'Name': 'Berlin',
          'Code': 'BE'
        }, {
          'Name': 'Bielefeld',
          'Code': 'BFE'
        }, {
          'Name': 'Bochum',
          'Code': 'BOM'
        }, {
          'Name': 'Bremen',
          'Code': 'HB'
        }, {
          'Name': 'Brunswick',
          'Code': 'BRW'
        }, {
          'Name': 'Chemnitz',
          'Code': 'CHE'
        }, {
          'Name': 'Cologne',
          'Code': 'CGN'
        }, {
          'Name': 'Darmstadt',
          'Code': 'DAR'
        }, {
          'Name': 'Dessau',
          'Code': 'DES'
        }, {
          'Name': 'Detmold',
          'Code': 'DET'
        }, {
          'Name': 'Dresden',
          'Code': 'DRS'
        }, {
          'Name': 'Dusseldorf',
          'Code': 'DUS'
        }, {
          'Name': 'Erfurt',
          'Code': 'ERF'
        }, {
          'Name': 'Frankfurt',
          'Code': 'FFO'
        }, {
          'Name': 'Freiburg',
          'Code': 'FBG'
        }, {
          'Name': 'GieBen',
          'Code': 'GBN'
        }, {
          'Name': 'Halle',
          'Code': 'HAE'
        }, {
          'Name': 'Hamburg',
          'Code': 'HH'
        }, {
          'Name': 'Hannover',
          'Code': 'HAJ'
        }, {
          'Name': 'Karlsruhe',
          'Code': 'KAE'
        }, {
          'Name': 'Kassel',
          'Code': 'KAS'
        }, {
          'Name': 'Kiel',
          'Code': 'KEL'
        }, {
          'Name': 'Koblenz',
          'Code': 'KOB'
        }, {
          'Name': 'Landshut',
          'Code': 'LDH'
        }, {
          'Name': 'Leipzig',
          'Code': 'LEJ'
        }, {
          'Name': 'Luneburg',
          'Code': 'LBG'
        }, {
          'Name': 'Magdeburg',
          'Code': 'MAG'
        }, {
          'Name': 'Mainz',
          'Code': 'MAI'
        }, {
          'Name': 'Mannheim',
          'Code': 'MHG'
        }, {
          'Name': 'Muenster',
          'Code': 'MUN'
        }, {
          'Name': 'Munich',
          'Code': 'MUC'
        }, {
          'Name': 'Nuremberg',
          'Code': 'NUE'
        }, {
          'Name': 'Potsdam',
          'Code': 'POT'
        }, {
          'Name': 'Schwerin',
          'Code': 'SWH'
        }, {
          'Name': 'Stuttgart',
          'Code': 'STR'
        }, {
          'Name': 'Trier',
          'Code': 'TRI'
        }, {
          'Name': 'Wiesbaden',
          'Code': 'WIB'
        }, {
          'Name': 'Wuerzburg',
          'Code': 'WUG'
        }]
      }
    }, {
      'Name': 'Ghana',
      'Code': 'GHA',
      'State': {
        'City': [{
          'Name': 'Ashanti',
          'Code': 'AS'
        }, {
          'Name': 'Brong Ahafo',
          'Code': 'BA'
        }, {
          'Name': 'Central',
          'Code': 'CE'
        }, {
          'Name': 'Eastern',
          'Code': 'EA'
        }, {
          'Name': 'Greater Accra',
          'Code': 'GA'
        }, {
          'Name': 'Northern',
          'Code': 'NO'
        }, {
          'Name': 'Obuasi',
          'Code': 'OBU'
        }, {
          'Name': 'Upper East',
          'Code': 'UE'
        }, {
          'Name': 'Upper West',
          'Code': 'UW'
        }, {
          'Name': 'Volta',
          'Code': 'VO'
        }, {
          'Name': 'Western',
          'Code': 'WE'
        }]
      }
    }, {
      'Name': 'Gibraltar',
      'Code': 'GIB'
    }, {
      'Name': 'Greece',
      'Code': 'GRC',
      'State': {
        'City': [{
          'Name': 'Athens',
          'Code': 'ATH'
        }, {
          'Name': 'Chanion',
          'Code': 'CHQ'
        }, {
          'Name': 'Cyclades',
          'Code': 'CY'
        }, {
          'Name': 'Dodecanese',
          'Code': 'DO'
        }, {
          'Name': 'Irakleiou',
          'Code': 'HER'
        }, {
          'Name': 'Lasithiou',
          'Code': 'LST'
        }, {
          'Name': 'Lesbos',
          'Code': 'LES'
        }, {
          'Name': 'Peiraievs',
          'Code': 'PRI'
        }, {
          'Name': 'Rethymnis',
          'Code': 'RET'
        }, {
          'Name': 'Samos',
          'Code': 'SMI'
        }]
      }
    }, {
      'Name': 'Greenland',
      'Code': 'GRL'
    }, {
      'Name': 'Grenada',
      'Code': 'GRD'
    }, {
      'Name': 'Guadeloupe',
      'Code': 'GLP'
    }, {
      'Name': 'Guam',
      'Code': 'GUM'
    }, {
      'Name': 'Guatemala',
      'Code': 'GTM',
      'State': {
        'City': [{
          'Name': 'Alta Verapaz',
          'Code': 'AV'
        }, {
          'Name': 'Baja Verapaz',
          'Code': 'BV'
        }, {
          'Name': 'Chimaltenango',
          'Code': 'CM'
        }, {
          'Name': 'Chiquimula',
          'Code': 'CQ'
        }, {
          'Name': 'El Progreso',
          'Code': 'PR'
        }, {
          'Name': 'Escuintla',
          'Code': 'ES'
        }, {
          'Name': 'Guatemala',
          'Code': 'GU'
        }, {
          'Name': 'Huehuetenango',
          'Code': 'HU'
        }, {
          'Name': 'Izabal',
          'Code': 'IZ'
        }, {
          'Name': 'Jalapa',
          'Code': 'JA'
        }, {
          'Name': 'Jutiapa',
          'Code': 'JU'
        }, {
          'Name': 'Mixco',
          'Code': 'MIX'
        }, {
          'Name': 'Peten',
          'Code': 'PE'
        }, {
          'Name': 'Quetzaltenango',
          'Code': 'QZ'
        }, {
          'Name': 'Quiche',
          'Code': 'QC'
        }, {
          'Name': 'Retalhuleu',
          'Code': 'RE'
        }, {
          'Name': 'Sacatepequez',
          'Code': 'ST'
        }, {
          'Name': 'San Marcos',
          'Code': 'SM'
        }, {
          'Name': 'Santa Rosa',
          'Code': 'SR'
        }, {
          'Name': 'Solola',
          'Code': 'SO'
        }, {
          'Name': 'Suchitepequez',
          'Code': 'SU'
        }, {
          'Name': 'Totonicapan',
          'Code': 'TO'
        }, {
          'Name': 'Villa Nueva',
          'Code': 'VIN'
        }, {
          'Name': 'Zacapa',
          'Code': 'ZA'
        }]
      }
    }, {
      'Name': 'Guernsey',
      'Code': 'GGY'
    }, {
      'Name': 'Guinea',
      'Code': 'GIN',
      'State': {
        'City': [{
          'Name': 'Boke',
          'Code': 'BOK'
        }, {
          'Name': 'Conakry',
          'Code': 'CNK'
        }, {
          'Name': 'Faranah',
          'Code': 'FRN'
        }, {
          'Name': 'Kankan',
          'Code': 'KNK'
        }, {
          'Name': 'Kindia',
          'Code': 'KND'
        }, {
          'Name': 'Labe',
          'Code': 'LAB'
        }, {
          'Name': 'Mamou',
          'Code': 'MAM'
        }, {
          'Name': 'Nzerekore',
          'Code': 'NZR'
        }]
      }
    }, {
      'Name': 'GuineaBissau',
      'Code': 'GNB'
    }, {
      'Name': 'Guyana',
      'Code': 'GUY',
      'State': {
        'City': [{
          'Name': 'BarimaWaini',
          'Code': 'BW'
        }, {
          'Name': 'CuyuniMazaruni',
          'Code': 'CM'
        }, {
          'Name': 'DemeraraMahaica',
          'Code': 'DM'
        }, {
          'Name': 'East BerbiceCorentyne',
          'Code': 'EC'
        }, {
          'Name': 'Essequibo IslandsWest Demerara',
          'Code': 'EW'
        }, {
          'Name': 'MahaicaBerbice',
          'Code': 'MB'
        }, {
          'Name': 'PomeroonSupenaam',
          'Code': 'PM'
        }, {
          'Name': 'PotaroSiparuni',
          'Code': 'PI'
        }, {
          'Name': 'Upper DemeraraBerbice',
          'Code': 'UD'
        }, {
          'Name': 'Upper TakutuUpper Essequibo',
          'Code': 'UT'
        }]
      }
    }, {
      'Name': 'Haiti',
      'Code': 'HTI'
    }, {
      'Name': 'Heard Island and McDonald Islands',
      'Code': 'HMD'
    }, {
      'Name': 'Honduras',
      'Code': 'HND',
      'State': {
        'City': [{
          'Name': 'Atlantida',
          'Code': 'AT'
        }, {
          'Name': 'Choloma',
          'Code': 'CHO'
        }, {
          'Name': 'Choluteca',
          'Code': 'CH'
        }, {
          'Name': 'Colon',
          'Code': 'CL'
        }, {
          'Name': 'Comayagua',
          'Code': 'CM'
        }, {
          'Name': 'Copan',
          'Code': 'CP'
        }, {
          'Name': 'Cortes',
          'Code': 'CR'
        }, {
          'Name': 'El Paraiso',
          'Code': 'PA'
        }, {
          'Name': 'Francisco Morazan',
          'Code': 'FM'
        }, {
          'Name': 'Gracias a Dios',
          'Code': 'GD'
        }, {
          'Name': 'Intibuca',
          'Code': 'IN'
        }, {
          'Name': 'Islas de la Bahia',
          'Code': 'IB'
        }, {
          'Name': 'La Paz',
          'Code': 'PZ'
        }, {
          'Name': 'Lempira',
          'Code': 'LE'
        }, {
          'Name': 'Ocotepeque',
          'Code': 'OC'
        }, {
          'Name': 'Olancho',
          'Code': 'OL'
        }, {
          'Name': 'Santa Barbara',
          'Code': 'SB'
        }, {
          'Name': 'Valle',
          'Code': 'VA'
        }, {
          'Name': 'Yoro',
          'Code': 'YO'
        }]
      }
    }, {
      'Name': 'Hungary',
      'Code': 'HUN',
      'State': {
        'City': [{
          'Name': 'BacsKiskun',
          'Code': 'BK'
        }, {
          'Name': 'Baranya',
          'Code': 'BA'
        }, {
          'Name': 'Bekes',
          'Code': 'BE'
        }, {
          'Name': 'BorsodAbaujZemplen',
          'Code': 'BZ'
        }, {
          'Name': 'Budapest',
          'Code': 'BU'
        }, {
          'Name': 'Csongrad',
          'Code': 'CS'
        }, {
          'Name': 'Fejer',
          'Code': 'FE'
        }, {
          'Name': 'GyorMosonSopron',
          'Code': 'GS'
        }, {
          'Name': 'HajduBihar',
          'Code': 'HB'
        }, {
          'Name': 'Heves',
          'Code': 'HE'
        }, {
          'Name': 'JaszNagykunSzolnok',
          'Code': 'JN'
        }, {
          'Name': 'KomaromEsztergom',
          'Code': 'KE'
        }, {
          'Name': 'Nograd',
          'Code': 'NO'
        }, {
          'Name': 'Pest',
          'Code': 'PE'
        }, {
          'Name': 'Somogy',
          'Code': 'SO'
        }, {
          'Name': 'SzabolcsSzatmarBereg',
          'Code': 'SZ'
        }, {
          'Name': 'Tolna',
          'Code': 'TO'
        }, {
          'Name': 'Vas',
          'Code': 'VA'
        }, {
          'Name': 'Veszprem',
          'Code': 'VE'
        }, {
          'Name': 'Zala',
          'Code': 'ZA'
        }]
      }
    }, {
      'Name': 'Iceland',
      'Code': 'ISL'
    }, {
      'Name': 'India',
      'Code': 'IND',
      'State': {
        'City': [{
          'Name': 'Aizawl',
          'Code': 'AJL'
        }, {
          'Name': 'Bangalore',
          'Code': 'BLR'
        }, {
          'Name': 'Bhopal',
          'Code': 'BHO'
        }, {
          'Name': 'Bhubaneswar',
          'Code': 'BBI'
        }, {
          'Name': 'Calcutta',
          'Code': 'CCU'
        }, {
          'Name': 'Chandigarh',
          'Code': 'IXC'
        }, {
          'Name': 'Chennai',
          'Code': 'MAA'
        }, {
          'Name': 'Coimbatore',
          'Code': 'CJB'
        }, {
          'Name': 'Daman',
          'Code': 'DAM'
        }, {
          'Name': 'Diu',
          'Code': 'DIU'
        }, {
          'Name': 'Gangtok',
          'Code': 'GTO'
        }, {
          'Name': 'Imphal',
          'Code': 'IMF'
        }, {
          'Name': 'Indore',
          'Code': 'IDR'
        }, {
          'Name': 'Jabalpur',
          'Code': 'JLR'
        }, {
          'Name': 'Jaipur',
          'Code': 'JAI'
        }, {
          'Name': 'Jalandhar',
          'Code': 'JUC'
        }, {
          'Name': 'Jodhpur',
          'Code': 'JDH'
        }, {
          'Name': 'Karaikal',
          'Code': 'KRK'
        }, {
          'Name': 'Kavaratti',
          'Code': 'KVA'
        }, {
          'Name': 'Kohima',
          'Code': 'KOM'
        }, {
          'Name': 'Madurai',
          'Code': 'IXM'
        }, {
          'Name': 'Mahe',
          'Code': 'MAH'
        }, {
          'Name': 'New Delhi',
          'Code': 'ICD'
        }, {
          'Name': 'Pondicherry',
          'Code': 'PNY'
        }, {
          'Name': 'Sambalpur',
          'Code': 'SLR'
        }, {
          'Name': 'Shillong',
          'Code': 'SHL'
        }, {
          'Name': 'Silvassa',
          'Code': 'SIL'
        }, {
          'Name': 'Trivandrum',
          'Code': 'TRV'
        }, {
          'Name': 'Udaipur',
          'Code': 'UDR'
        }, {
          'Name': 'Yanam',
          'Code': 'SRV'
        }]
      }
    }, {
      'Name': 'Indonesia',
      'Code': 'IDN',
      'State': {
        'City': [{
          'Name': 'Aceh',
          'Code': 'AC'
        }, {
          'Name': 'Bali',
          'Code': 'BA'
        }, {
          'Name': 'Banten',
          'Code': 'BT'
        }, {
          'Name': 'Bengkulu',
          'Code': 'BE'
        }, {
          'Name': 'Daerah Istimewa Yogyakarta',
          'Code': 'YO'
        }, {
          'Name': 'Daerah Tingkat I Kalimantan Barat',
          'Code': 'KB'
        }, {
          'Name': 'Irian Jaya',
          'Code': 'IJ'
        }, {
          'Name': 'Jakarta Raya',
          'Code': 'JK'
        }, {
          'Name': 'Jambi',
          'Code': 'JA'
        }, {
          'Name': 'Java Barat',
          'Code': 'JB'
        }, {
          'Name': 'Java Tengah',
          'Code': 'JT'
        }, {
          'Name': 'Java Timur',
          'Code': 'JI'
        }, {
          'Name': 'Kalimantan Selatan',
          'Code': 'KS'
        }, {
          'Name': 'Kalimantan Tengah',
          'Code': 'KT'
        }, {
          'Name': 'Kalimantan Timur',
          'Code': 'KI'
        }, {
          'Name': 'Kepulauan Bangka Belitung',
          'Code': 'BB'
        }, {
          'Name': 'Lampung',
          'Code': 'LA'
        }, {
          'Name': 'Maluku',
          'Code': 'MA'
        }, {
          'Name': 'Nusa Tenggara Barat',
          'Code': 'NB'
        }, {
          'Name': 'Nusa Tenggara Timur',
          'Code': 'NT'
        }, {
          'Name': 'Riau',
          'Code': 'RI'
        }, {
          'Name': 'Sulawesi Selatan',
          'Code': 'SN'
        }, {
          'Name': 'Sulawesi Tengah',
          'Code': 'ST'
        }, {
          'Name': 'Sulawesi Tenggara',
          'Code': 'SG'
        }, {
          'Name': 'Sulawesi Utara',
          'Code': 'SA'
        }, {
          'Name': 'Sumatera Barat',
          'Code': 'SR'
        }, {
          'Name': 'Sumatera Selatan',
          'Code': 'SS'
        }, {
          'Name': 'Sumatera Utara',
          'Code': 'SU'
        }]
      }
    }, {
      'Name': 'Iran',
      'Code': 'IRN'
    }, {
      'Name': 'Iraq',
      'Code': 'IRQ'
    }, {
      'Name': 'Ireland',
      'Code': 'IRL',
      'State': {
        'City': [{
          'Name': 'Carlow',
          'Code': 'CW'
        }, {
          'Name': 'Cavan',
          'Code': 'CV'
        }, {
          'Name': 'Clare',
          'Code': 'CL'
        }, {
          'Name': 'Cork',
          'Code': 'CK'
        }, {
          'Name': 'Donegal',
          'Code': 'DG'
        }, {
          'Name': 'Dublin',
          'Code': 'DB'
        }, {
          'Name': 'Galway',
          'Code': 'GW'
        }, {
          'Name': 'Kerry',
          'Code': 'KR'
        }, {
          'Name': 'Kildare',
          'Code': 'KD'
        }, {
          'Name': 'Kilkenny',
          'Code': 'KK'
        }, {
          'Name': 'Laois',
          'Code': 'LA'
        }, {
          'Name': 'Leitrim',
          'Code': 'LR'
        }, {
          'Name': 'Limerick',
          'Code': 'LM'
        }, {
          'Name': 'Longford',
          'Code': 'LF'
        }, {
          'Name': 'Louth',
          'Code': 'LT'
        }, {
          'Name': 'Mayo',
          'Code': 'MY'
        }, {
          'Name': 'Meath',
          'Code': 'MT'
        }, {
          'Name': 'Monaghan',
          'Code': 'MG'
        }, {
          'Name': 'Offaly',
          'Code': 'OF'
        }, {
          'Name': 'Roscommon',
          'Code': 'RC'
        }, {
          'Name': 'Sligo',
          'Code': 'SL'
        }, {
          'Name': 'Tipperary',
          'Code': 'TP'
        }, {
          'Name': 'Waterford',
          'Code': 'WF'
        }, {
          'Name': 'Westmeath',
          'Code': 'WM'
        }, {
          'Name': 'Wexford',
          'Code': 'WX'
        }, {
          'Name': 'Wicklow',
          'Code': 'WK'
        }]
      }
    }, {
      'Name': 'Isle of Man',
      'Code': 'IMN'
    }, {
      'Name': 'Israel',
      'Code': 'ISR',
      'State': {
        'City': [{
          'Name': 'Ashdod',
          'Code': 'ASH'
        }, {
          'Name': 'Bat Yam',
          'Code': 'BAT'
        }, {
          'Name': 'Beersheba',
          'Code': 'BEV'
        }, {
          'Name': 'Haifa',
          'Code': 'HFA'
        }, {
          'Name': 'Holon',
          'Code': 'HOL'
        }, {
          'Name': 'Jerusalem',
          'Code': 'J'
        }, {
          'Name': 'Netanya',
          'Code': 'NAT'
        }, {
          'Name': 'Tel AvivYafo',
          'Code': 'TLV'
        }]
      }
    }, {
      'Name': 'Italy',
      'Code': 'ITA',
      'State': {
        'City': [{
          'Name': 'Alessandria',
          'Code': 'ALE'
        }, {
          'Name': 'Ancona',
          'Code': 'AOI'
        }, {
          'Name': 'Aosta',
          'Code': 'AOT'
        }, {
          'Name': 'Ascoli Piceno',
          'Code': 'ASP'
        }, {
          'Name': 'Asti',
          'Code': 'AST'
        }, {
          'Name': 'Bari',
          'Code': 'BRI'
        }, {
          'Name': 'Benevento',
          'Code': 'BEN'
        }, {
          'Name': 'Bergamo',
          'Code': 'BGO'
        }, {
          'Name': 'Biella',
          'Code': 'BIE'
        }, {
          'Name': 'Bologna',
          'Code': 'BLQ'
        }, {
          'Name': 'Brescia',
          'Code': 'BRC'
        }, {
          'Name': 'Brindisi',
          'Code': 'BDS'
        }, {
          'Name': 'Cagliari',
          'Code': 'CAG'
        }, {
          'Name': 'Campobasso',
          'Code': 'COB'
        }, {
          'Name': 'Caserta',
          'Code': 'CST'
        }, {
          'Name': 'Catania',
          'Code': 'CTA'
        }, {
          'Name': 'Catanzaro',
          'Code': 'QCZ'
        }, {
          'Name': 'Como',
          'Code': 'CIY'
        }, {
          'Name': 'Cosenza',
          'Code': 'QCS'
        }, {
          'Name': 'Crotone',
          'Code': 'CRV'
        }, {
          'Name': 'Cuneo',
          'Code': 'CUN'
        }, {
          'Name': 'Ferrara',
          'Code': 'FRR'
        }, {
          'Name': 'Firenze',
          'Code': 'FLR'
        }, {
          'Name': 'Foggia',
          'Code': 'FOG'
        }, {
          'Name': 'Genova',
          'Code': 'CAX'
        }, {
          'Name': 'Isernia',
          'Code': 'ISE'
        }, {
          'Name': 'L`Aquila',
          'Code': 'LAQ'
        }, {
          'Name': 'La Spezia',
          'Code': 'SPE'
        }, {
          'Name': 'Lecce',
          'Code': 'LCC'
        }, {
          'Name': 'Lecco',
          'Code': 'LCO'
        }, {
          'Name': 'Livorno',
          'Code': 'LIV'
        }, {
          'Name': 'MassaCarrara',
          'Code': 'MCR'
        }, {
          'Name': 'Matera',
          'Code': 'MTR'
        }, {
          'Name': 'Messina',
          'Code': 'MSN'
        }, {
          'Name': 'Milano',
          'Code': 'MIL'
        }, {
          'Name': 'Modena',
          'Code': 'MOD'
        }, {
          'Name': 'Monza e Brianza',
          'Code': 'MZA'
        }, {
          'Name': 'Naples',
          'Code': 'NAP'
        }, {
          'Name': 'Novara',
          'Code': 'NVR'
        }, {
          'Name': 'Nuoro',
          'Code': 'QNU'
        }, {
          'Name': 'OlbiaTempio',
          'Code': 'OLB'
        }, {
          'Name': 'Oristano',
          'Code': 'QOS'
        }, {
          'Name': 'Palermo',
          'Code': 'PMO'
        }, {
          'Name': 'Parma',
          'Code': 'PMF'
        }, {
          'Name': 'Pavia',
          'Code': 'PAV'
        }, {
          'Name': 'Perugia',
          'Code': 'PEG'
        }, {
          'Name': 'Pisa',
          'Code': 'PSA'
        }, {
          'Name': 'Pordenone',
          'Code': 'PRD'
        }, {
          'Name': 'Potenza',
          'Code': 'QPO'
        }, {
          'Name': 'Reggio Calabria',
          'Code': 'REG'
        }, {
          'Name': 'Reggio Emilia',
          'Code': 'RNE'
        }, {
          'Name': 'Roma',
          'Code': 'ROM'
        }, {
          'Name': 'Salerno',
          'Code': 'SAL'
        }, {
          'Name': 'Sassari',
          'Code': 'QSS'
        }, {
          'Name': 'Savona',
          'Code': 'SVN'
        }, {
          'Name': 'Siena',
          'Code': 'SNA'
        }, {
          'Name': 'Syracuse',
          'Code': 'SYR'
        }, {
          'Name': 'Taranto',
          'Code': 'TAR'
        }, {
          'Name': 'Trapani',
          'Code': 'TPS'
        }, {
          'Name': 'Trento',
          'Code': 'TRT'
        }, {
          'Name': 'Trieste',
          'Code': 'TRS'
        }, {
          'Name': 'Turin',
          'Code': 'TRN'
        }, {
          'Name': 'Udine',
          'Code': 'UDN'
        }, {
          'Name': 'Venice',
          'Code': 'VCE'
        }, {
          'Name': 'Vercelli',
          'Code': 'VRL'
        }, {
          'Name': 'Viterbo',
          'Code': 'VIT'
        }]
      }
    }, {
      'Name': 'Jamaica',
      'Code': 'JAM',
      'State': {
        'City': [{
          'Name': 'Clarendon',
          'Code': 'CLA'
        }, {
          'Name': 'Hanover',
          'Code': 'HAN'
        }, {
          'Name': 'Kingston',
          'Code': 'KIN'
        }, {
          'Name': 'Manchester',
          'Code': 'MAN'
        }, {
          'Name': 'Portland',
          'Code': 'POR'
        }, {
          'Name': 'St. Andrews',
          'Code': 'AND'
        }, {
          'Name': 'St. Ann',
          'Code': 'ANN'
        }, {
          'Name': 'St. Catherine',
          'Code': 'CAT'
        }, {
          'Name': 'St. Elizabeth',
          'Code': 'ELI'
        }, {
          'Name': 'St. James',
          'Code': 'JAM'
        }, {
          'Name': 'St. Mary',
          'Code': 'MAR'
        }, {
          'Name': 'St. Thomas',
          'Code': 'THO'
        }, {
          'Name': 'Trelawny',
          'Code': 'TRL'
        }, {
          'Name': 'Westmoreland',
          'Code': 'WML'
        }]
      }
    }, {
      'Name': 'Japan',
      'Code': 'JPN',
      'State': {
        'City': [{
          'Name': 'Aichi',
          'Code': '23'
        }, {
          'Name': 'Akita',
          'Code': '5'
        }, {
          'Name': 'Aomori',
          'Code': '2'
        }, {
          'Name': 'Chiba',
          'Code': '12'
        }, {
          'Name': 'Ehime',
          'Code': '38'
        }, {
          'Name': 'Fukui',
          'Code': '18'
        }, {
          'Name': 'Fukuoka',
          'Code': '40'
        }, {
          'Name': 'Fukushima',
          'Code': '7'
        }, {
          'Name': 'Gifu',
          'Code': '21'
        }, {
          'Name': 'Gunma',
          'Code': '10'
        }, {
          'Name': 'Hiroshima',
          'Code': '34'
        }, {
          'Name': 'Hokkaido',
          'Code': '1'
        }, {
          'Name': 'Hyogo',
          'Code': '28'
        }, {
          'Name': 'Ibaraki',
          'Code': '8'
        }, {
          'Name': 'Ishikawa',
          'Code': '17'
        }, {
          'Name': 'Iwate',
          'Code': '3'
        }, {
          'Name': 'Kagawa',
          'Code': '37'
        }, {
          'Name': 'Kagoshima',
          'Code': '46'
        }, {
          'Name': 'Kanagawa',
          'Code': '14'
        }, {
          'Name': 'Kochi',
          'Code': '39'
        }, {
          'Name': 'Kumamoto',
          'Code': '43'
        }, {
          'Name': 'Kyoto',
          'Code': '26'
        }, {
          'Name': 'Mie',
          'Code': '24'
        }, {
          'Name': 'Miyagi',
          'Code': '4'
        }, {
          'Name': 'Miyazaki',
          'Code': '45'
        }, {
          'Name': 'Nagano',
          'Code': '20'
        }, {
          'Name': 'Nagasaki',
          'Code': '42'
        }, {
          'Name': 'Nara',
          'Code': '29'
        }, {
          'Name': 'Niigata',
          'Code': '15'
        }, {
          'Name': 'Oita',
          'Code': '44'
        }, {
          'Name': 'Okayama',
          'Code': '33'
        }, {
          'Name': 'Okinawa',
          'Code': '47'
        }, {
          'Name': 'Osaka',
          'Code': '27'
        }, {
          'Name': 'Saga',
          'Code': '41'
        }, {
          'Name': 'Saitama',
          'Code': '11'
        }, {
          'Name': 'Shiga',
          'Code': '25'
        }, {
          'Name': 'Shimane',
          'Code': '32'
        }, {
          'Name': 'Shizuoka',
          'Code': '22'
        }, {
          'Name': 'Tochigi',
          'Code': '9'
        }, {
          'Name': 'Tokushima',
          'Code': '36'
        }, {
          'Name': 'Tokyo',
          'Code': '13'
        }, {
          'Name': 'Tottori',
          'Code': '31'
        }, {
          'Name': 'Toyama',
          'Code': '16'
        }, {
          'Name': 'Wakayama',
          'Code': '30'
        }, {
          'Name': 'Yamagata',
          'Code': '6'
        }, {
          'Name': 'Yamaguchi',
          'Code': '35'
        }, {
          'Name': 'Yamanashi',
          'Code': '19'
        }]
      }
    }, {
      'Name': 'Jersey',
      'Code': 'JEY'
    }, {
      'Name': 'Jordan',
      'Code': 'JOR',
      'State': {
        'City': [{
          'Name': 'Allun',
          'Code': 'AJ'
        }, {
          'Name': 'Amman',
          'Code': 'AM'
        }, {
          'Name': 'Aqaba',
          'Code': 'AQ'
        }, {
          'Name': 'Balqa',
          'Code': 'BA'
        }, {
          'Name': 'Irbid',
          'Code': 'IR'
        }, {
          'Name': 'Jarash',
          'Code': 'JA'
        }, {
          'Name': 'Karak',
          'Code': 'KA'
        }, {
          'Name': 'Maan',
          'Code': 'MN'
        }, {
          'Name': 'Madaba',
          'Code': 'MD'
        }, {
          'Name': 'Mafraq',
          'Code': 'MF'
        }, {
          'Name': 'Rusayfah',
          'Code': 'RU'
        }, {
          'Name': 'Tafiela',
          'Code': 'TA'
        }, {
          'Name': 'Zarqa',
          'Code': 'ZA'
        }]
      }
    }, {
      'Name': 'Kazakhstan',
      'Code': 'KAZ',
      'State': {
        'City': [{
          'Name': 'Aksu',
          'Code': 'AKS'
        }, {
          'Name': 'Almaty',
          'Code': 'ALA'
        }, {
          'Name': 'Aqmola',
          'Code': 'AKM'
        }, {
          'Name': 'Aqtobe',
          'Code': 'AKT'
        }, {
          'Name': 'Arkalyk',
          'Code': 'AYK'
        }, {
          'Name': 'Arys',
          'Code': 'ARY'
        }, {
          'Name': 'Astana',
          'Code': 'AST'
        }, {
          'Name': 'Atyrau',
          'Code': 'ATY'
        }, {
          'Name': 'Balkhash',
          'Code': 'BXH'
        }, {
          'Name': 'Batys Qazaqstan',
          'Code': 'ZAP'
        }, {
          'Name': 'Ekibastuz',
          'Code': 'EKB'
        }, {
          'Name': 'Kapchagay',
          'Code': 'KAP'
        }, {
          'Name': 'Karazhal',
          'Code': 'KZO'
        }, {
          'Name': 'Kentau',
          'Code': 'KEN'
        }, {
          'Name': 'Kurchatov',
          'Code': 'KUR'
        }, {
          'Name': 'Leninogorsk',
          'Code': 'LEN'
        }, {
          'Name': 'Lisakovsk',
          'Code': 'LKK'
        }, {
          'Name': 'Mangghystau',
          'Code': 'MAN'
        }, {
          'Name': 'Ongtustik Qazaqstan',
          'Code': 'KGT'
        }, {
          'Name': 'Pavlodar',
          'Code': 'PAV'
        }, {
          'Name': 'Qaraghandy',
          'Code': 'KAR'
        }, {
          'Name': 'Qostanay',
          'Code': 'KST'
        }, {
          'Name': 'Qyzylorda',
          'Code': 'KZY'
        }, {
          'Name': 'Rudny',
          'Code': 'RUD'
        }, {
          'Name': 'Saran',
          'Code': 'SAR'
        }, {
          'Name': 'Semey',
          'Code': 'SEM'
        }, {
          'Name': 'Shakhtinsk',
          'Code': 'SAK'
        }, {
          'Name': 'Shyghys Qazaqstan',
          'Code': 'VOS'
        }, {
          'Name': 'Soltustik Qazaqstan',
          'Code': 'SEV'
        }, {
          'Name': 'Stepnogorsk',
          'Code': 'STE'
        }, {
          'Name': 'Tekeli',
          'Code': 'TEK'
        }, {
          'Name': 'Temirtau',
          'Code': 'TEM'
        }, {
          'Name': 'Turkestan',
          'Code': 'TUR'
        }, {
          'Name': 'Zhambyl',
          'Code': 'DMB'
        }, {
          'Name': 'Zhanaozen',
          'Code': 'ZHA'
        }, {
          'Name': 'Zhezkazgan',
          'Code': 'DZH'
        }, {
          'Name': 'Zyryanovsk',
          'Code': 'ZYR'
        }]
      }
    }, {
      'Name': 'Kenya',
      'Code': 'KEN',
      'State': {
        'City': [{
          'Name': 'Baringo',
          'Code': 'BAR'
        }, {
          'Name': 'Bomet',
          'Code': 'BOM'
        }, {
          'Name': 'Bungoma',
          'Code': 'BUN'
        }, {
          'Name': 'Busia',
          'Code': 'BUS'
        }, {
          'Name': 'Central',
          'Code': 'CE'
        }, {
          'Name': 'ElgeyoMarakwet',
          'Code': 'EMA'
        }, {
          'Name': 'Embu',
          'Code': 'EMB'
        }, {
          'Name': 'Garissa',
          'Code': 'GAS'
        }, {
          'Name': 'Homa Bay',
          'Code': 'HOB'
        }, {
          'Name': 'Isiolo',
          'Code': 'ISI'
        }, {
          'Name': 'Kajiado',
          'Code': 'KAJ'
        }, {
          'Name': 'Kakamega',
          'Code': 'KAK'
        }, {
          'Name': 'Kericho',
          'Code': 'KEY'
        }, {
          'Name': 'Kiambu',
          'Code': 'KIA'
        }, {
          'Name': 'Kilifi',
          'Code': 'KIL'
        }, {
          'Name': 'Kirinyaga',
          'Code': 'KIR'
        }, {
          'Name': 'Kisii',
          'Code': 'KII'
        }, {
          'Name': 'Kisumu',
          'Code': 'KIS'
        }, {
          'Name': 'Kitui',
          'Code': 'KIT'
        }, {
          'Name': 'Kwale',
          'Code': 'KWA'
        }, {
          'Name': 'Laikipia',
          'Code': 'LAI'
        }, {
          'Name': 'Lamu',
          'Code': 'LAU'
        }, {
          'Name': 'Machakos',
          'Code': 'MAC'
        }, {
          'Name': 'Makueni',
          'Code': 'MAK'
        }, {
          'Name': 'Mandera',
          'Code': 'MAN'
        }, {
          'Name': 'Marsabit',
          'Code': 'RBT'
        }, {
          'Name': 'Meru',
          'Code': 'MER'
        }, {
          'Name': 'Migori',
          'Code': 'MIG'
        }, {
          'Name': 'Mombasa',
          'Code': 'MOM'
        }, {
          'Name': 'Muranga',
          'Code': 'MUR'
        }, {
          'Name': 'Nairobi',
          'Code': 'NA'
        }, {
          'Name': 'Nakuru',
          'Code': 'NUU'
        }, {
          'Name': 'Nandi',
          'Code': 'NAN'
        }, {
          'Name': 'Narok',
          'Code': 'NAR'
        }, {
          'Name': 'Nithi',
          'Code': 'NIT'
        }, {
          'Name': 'Nyamira',
          'Code': 'NYM'
        }, {
          'Name': 'Nyandarua',
          'Code': 'NYN'
        }, {
          'Name': 'Nyeri',
          'Code': 'NYE'
        }, {
          'Name': 'Samburu',
          'Code': 'UAS'
        }, {
          'Name': 'Siaya',
          'Code': 'SIA'
        }, {
          'Name': 'TaitaTaveta',
          'Code': 'TTA'
        }, {
          'Name': 'Tana River',
          'Code': 'TRI'
        }, {
          'Name': 'TransNzoia',
          'Code': 'TNZ'
        }, {
          'Name': 'Turkana',
          'Code': 'TUR'
        }, {
          'Name': 'Uasin Gishu',
          'Code': 'UGI'
        }, {
          'Name': 'Vihiga',
          'Code': 'VIH'
        }, {
          'Name': 'Wajir',
          'Code': 'WJR'
        }, {
          'Name': 'West Pokot',
          'Code': 'WPO'
        }]
      }
    }, {
      'Name': 'Kiribati',
      'Code': 'KIR',
      'State': {
        'City': [{
          'Name': 'Gilberts Islands',
          'Code': 'GIL'
        }, {
          'Name': 'Line Islands',
          'Code': 'LIN'
        }, {
          'Name': 'Phoenix Islands',
          'Code': 'PHO'
        }]
      }
    }, {
      'Name': 'Korea',
      'Code': 'KOR',
      'State': [{
        'Name': 'Busan',
        'Code': '26'
      }, {
        'Name': 'Chungcheongbukdo',
        'Code': '43',
        'City': [{
          'Name': 'Andong',
          'Code': 'ADG'
        }, {
          'Name': 'Bonghwa County',
          'Code': 'BHA'
        }, {
          'Name': 'Cheongdo County',
          'Code': 'CDO'
        }, {
          'Name': 'Cheongsong County',
          'Code': 'CSG'
        }, {
          'Name': 'Chilgok County',
          'Code': 'CGK'
        }, {
          'Name': 'Gimcheon',
          'Code': 'KMC'
        }, {
          'Name': 'Goryeong County',
          'Code': 'GRG'
        }, {
          'Name': 'Gumi',
          'Code': 'KUM'
        }, {
          'Name': 'Gunwi County',
          'Code': 'GWI'
        }, {
          'Name': 'Gyeongju',
          'Code': 'GJU'
        }, {
          'Name': 'Gyeongsan',
          'Code': 'GYS'
        }, {
          'Name': 'Mungyeong',
          'Code': 'MGG'
        }, {
          'Name': 'Pohang',
          'Code': 'KPO'
        }, {
          'Name': 'Sangju',
          'Code': 'SJU'
        }, {
          'Name': 'Seongju County',
          'Code': 'SEJ'
        }, {
          'Name': 'Uiseong County',
          'Code': 'USG'
        }, {
          'Name': 'Uljin County',
          'Code': 'UJN'
        }, {
          'Name': 'Ulleung County',
          'Code': 'ULG'
        }, {
          'Name': 'Yecheon County',
          'Code': 'YEC'
        }, {
          'Name': 'Yeongcheon',
          'Code': 'YCH'
        }, {
          'Name': 'Yeongdeok County',
          'Code': 'YDK'
        }, {
          'Name': 'Yeongju',
          'Code': 'YEJ'
        }, {
          'Name': 'Yeongyang County',
          'Code': 'YYG'
        }]
      }, {
        'Name': 'Chungcheongnamdo',
        'Code': '44',
        'City': [{
          'Name': 'Changnyeong County',
          'Code': 'CNG'
        }, {
          'Name': 'Changwon',
          'Code': 'CHW'
        }, {
          'Name': 'Geochang County',
          'Code': 'GCH'
        }, {
          'Name': 'Geoje',
          'Code': 'KJE'
        }, {
          'Name': 'Gimhae',
          'Code': 'KMH'
        }, {
          'Name': 'Goseong County',
          'Code': 'GSO'
        }, {
          'Name': 'Hadong County',
          'Code': 'HDG'
        }, {
          'Name': 'Haman County',
          'Code': 'HAN'
        }, {
          'Name': 'Hamyang County',
          'Code': 'HYG'
        }, {
          'Name': 'Hapcheon County',
          'Code': 'HCE'
        }, {
          'Name': 'Jinhae',
          'Code': 'CHF'
        }, {
          'Name': 'Jinju',
          'Code': 'HIN'
        }, {
          'Name': 'Masan',
          'Code': 'MAS'
        }, {
          'Name': 'Miryang',
          'Code': 'MIR'
        }, {
          'Name': 'Namhae County',
          'Code': 'NHE'
        }, {
          'Name': 'Sacheon',
          'Code': 'SAH'
        }, {
          'Name': 'Sancheong County',
          'Code': 'SCH'
        }, {
          'Name': 'Tongyeong',
          'Code': 'TYG'
        }, {
          'Name': 'Uiryeong County',
          'Code': 'URG'
        }, {
          'Name': 'Yangsan',
          'Code': 'YSN'
        }]
      }, {
        'Name': 'Daegu',
        'Code': '27',
        'City': [{
          'Name': 'Daegu',
          'Code': 'TAE'
        }, {
          'Name': 'Dalseonggun',
          'Code': 'DSG'
        }, {
          'Name': 'Suseonggu',
          'Code': 'SUS'
        }]
      }, {
        'Name': 'Daejeon',
        'Code': '30'
      }, {
        'Name': 'Gangwondo',
        'Code': '42',
        'City': [{
          'Name': 'Cheorwon County',
          'Code': 'CWN'
        }, {
          'Name': 'Chuncheon',
          'Code': 'CHC'
        }, {
          'Name': 'Donghae',
          'Code': 'TGH'
        }, {
          'Name': 'Gangneung',
          'Code': 'KAG'
        }, {
          'Name': 'Goseong County',
          'Code': 'GSG'
        }, {
          'Name': 'Hoengseong County',
          'Code': 'HSG'
        }, {
          'Name': 'Hongcheon County',
          'Code': 'HCN'
        }, {
          'Name': 'Hwacheon County',
          'Code': 'HCH'
        }, {
          'Name': 'Inje County',
          'Code': 'IJE'
        }, {
          'Name': 'Jeongseon County',
          'Code': 'JSE'
        }, {
          'Name': 'Pyeongchang County',
          'Code': 'POG'
        }, {
          'Name': 'Samcheok',
          'Code': 'SUK'
        }, {
          'Name': 'Sokcho',
          'Code': 'SHO'
        }, {
          'Name': 'Taebaek',
          'Code': 'TBK'
        }, {
          'Name': 'Wonju',
          'Code': 'WJU'
        }, {
          'Name': 'Yanggu County',
          'Code': 'YGU'
        }, {
          'Name': 'Yangyang County',
          'Code': 'YNY'
        }, {
          'Name': 'Yeongwol County',
          'Code': 'YWL'
        }]
      }, {
        'Name': 'Gwangju',
        'Code': '29'
      }, {
        'Name': 'Jejudo',
        'Code': '41',
        'City': {
          'Name': 'Suwon',
          'Code': 'SUO'
        }
      }, {
        'Name': 'Gyeongsangbukdo',
        'Code': '47',
        'City': [{
          'Name': 'Buan County',
          'Code': 'PUS'
        }, {
          'Name': 'Gimje',
          'Code': 'GJE'
        }, {
          'Name': 'Gochang County',
          'Code': 'GCG'
        }, {
          'Name': 'Gunsan',
          'Code': 'KUV'
        }, {
          'Name': 'Iksan',
          'Code': 'IKS'
        }, {
          'Name': 'Imsil County',
          'Code': 'ISL'
        }, {
          'Name': 'Jangsu County',
          'Code': 'JSU'
        }, {
          'Name': 'Jeongeup',
          'Code': 'JEO'
        }, {
          'Name': 'Jeonju',
          'Code': 'JNJ'
        }, {
          'Name': 'Jinan County',
          'Code': 'JAN'
        }, {
          'Name': 'Muju County',
          'Code': 'MJU'
        }, {
          'Name': 'Namwon',
          'Code': 'NWN'
        }, {
          'Name': 'Sunchang County',
          'Code': 'SCG'
        }, {
          'Name': 'Wanju County',
          'Code': 'WAJ'
        }]
      }, {
        'Name': 'Gyeongsangnamdo',
        'Code': '48',
        'City': [{
          'Name': 'Boseong County',
          'Code': 'BSG'
        }, {
          'Name': 'Damyang County',
          'Code': 'DYA'
        }, {
          'Name': 'Gangjin County',
          'Code': 'GJN'
        }, {
          'Name': 'Goheung County',
          'Code': 'GHG'
        }, {
          'Name': 'Gokseong County',
          'Code': 'GSE'
        }, {
          'Name': 'Gurye County',
          'Code': 'GRE'
        }, {
          'Name': 'Gwangyang',
          'Code': 'KAN'
        }, {
          'Name': 'Haenam County',
          'Code': 'HAE'
        }, {
          'Name': 'Hampyeong County',
          'Code': 'HPG'
        }, {
          'Name': 'Hwasun County',
          'Code': 'HSN'
        }, {
          'Name': 'Jangheung County',
          'Code': 'JHG'
        }, {
          'Name': 'Jangseong County',
          'Code': 'JSN'
        }, {
          'Name': 'Jindo County',
          'Code': 'JDO'
        }, {
          'Name': 'Mokpo',
          'Code': 'MOK'
        }, {
          'Name': 'Muan County',
          'Code': 'MAN'
        }, {
          'Name': 'Naju',
          'Code': 'NJU'
        }, {
          'Name': 'Sinan County',
          'Code': 'SAN'
        }, {
          'Name': 'Suncheon',
          'Code': 'SYS'
        }, {
          'Name': 'Wando County',
          'Code': 'WND'
        }, {
          'Name': 'Yeongam County',
          'Code': 'YAM'
        }, {
          'Name': 'Yeonggwang County',
          'Code': 'YGG'
        }, {
          'Name': 'Yeosu',
          'Code': 'YOS'
        }]
      }, {
        'Name': 'Incheon',
        'Code': '28'
      }, {
        'Name': 'Gyeonggido',
        'Code': '49',
        'City': [{
          'Name': 'Ansan',
          'Code': 'ASN'
        }, {
          'Name': 'Anseong',
          'Code': 'ASG'
        }, {
          'Name': 'Anyang',
          'Code': 'ANY'
        }, {
          'Name': 'Bucheon',
          'Code': 'BCN'
        }, {
          'Name': 'Dongducheon',
          'Code': 'DDC'
        }, {
          'Name': 'Gapyeong County',
          'Code': 'GPG'
        }, {
          'Name': 'Gimpo',
          'Code': 'GMP'
        }, {
          'Name': 'Goyang',
          'Code': 'GYG'
        }, {
          'Name': 'Gunpo',
          'Code': 'GUN'
        }, {
          'Name': 'Guri',
          'Code': 'GRI'
        }, {
          'Name': 'Gwacheon',
          'Code': 'GCN'
        }, {
          'Name': 'Gwangju',
          'Code': 'KWU'
        }, {
          'Name': 'Gwangmyeong',
          'Code': 'GMG'
        }, {
          'Name': 'Hanam',
          'Code': 'HNM'
        }, {
          'Name': 'Hwaseong',
          'Code': 'HCH'
        }, {
          'Name': 'Icheon',
          'Code': 'ICE'
        }, {
          'Name': 'Namyangju',
          'Code': 'NYU'
        }, {
          'Name': 'Osan',
          'Code': 'OSN'
        }, {
          'Name': 'Paju',
          'Code': 'PJU'
        }, {
          'Name': 'Pocheon',
          'Code': 'POC'
        }, {
          'Name': 'Pyeongtaek',
          'Code': 'PTK'
        }, {
          'Name': 'Seongnam',
          'Code': 'SEO'
        }, {
          'Name': 'Siheung',
          'Code': 'SHE'
        }, {
          'Name': 'Uijeongbu',
          'Code': 'UIJ'
        }, {
          'Name': 'Uiwang',
          'Code': 'UWN'
        }, {
          'Name': 'Yangju',
          'Code': 'YYU'
        }, {
          'Name': 'Yangpyeong County',
          'Code': 'YPG'
        }, {
          'Name': 'Yeoju County',
          'Code': 'YJU'
        }, {
          'Name': 'Yeoncheon County',
          'Code': 'YCN'
        }, {
          'Name': 'Yongin',
          'Code': 'YNG'
        }]
      }, {
        'Name': 'Jeollabukdo',
        'Code': '45',
        'City': [{
          'Name': 'Boeun County',
          'Code': 'BEN'
        }, {
          'Name': 'Cheongju',
          'Code': 'CJJ'
        }, {
          'Name': 'Cheongwon County',
          'Code': 'CWO'
        }, {
          'Name': 'Chungju',
          'Code': 'CHU'
        }, {
          'Name': 'Danyang County',
          'Code': 'DYG'
        }, {
          'Name': 'Eumseong County',
          'Code': 'ESG'
        }, {
          'Name': 'Goesan County',
          'Code': 'GSN'
        }, {
          'Name': 'Jecheon',
          'Code': 'JCH'
        }, {
          'Name': 'Jeungpyeong County',
          'Code': 'JYG'
        }, {
          'Name': 'Jincheon County',
          'Code': 'JCN'
        }, {
          'Name': 'Okcheon County',
          'Code': 'OCN'
        }, {
          'Name': 'Yeongdong County',
          'Code': 'YDG'
        }]
      }, {
        'Name': 'Jeollanamdo',
        'Code': '46',
        'City': [{
          'Name': 'Asan',
          'Code': 'ASA'
        }, {
          'Name': 'Boryeong',
          'Code': 'BOR'
        }, {
          'Name': 'Buyeo County',
          'Code': 'BYO'
        }, {
          'Name': 'Cheonan',
          'Code': 'CHO'
        }, {
          'Name': 'Cheongyang County',
          'Code': 'CYG'
        }, {
          'Name': 'Dangjin County',
          'Code': 'TJI'
        }, {
          'Name': 'Geumsan County',
          'Code': 'GSA'
        }, {
          'Name': 'Gongju',
          'Code': 'GOJ'
        }, {
          'Name': 'Gyeryong',
          'Code': 'GYE'
        }, {
          'Name': 'Hongseong County',
          'Code': 'HSE'
        }, {
          'Name': 'Nonsan',
          'Code': 'NSN'
        }, {
          'Name': 'Seocheon County',
          'Code': 'SCE'
        }, {
          'Name': 'Seosan',
          'Code': 'SSA'
        }, {
          'Name': 'Taean County',
          'Code': 'TAN'
        }, {
          'Name': 'Yeongi County',
          'Code': 'YGI'
        }, {
          'Name': 'Yesan County',
          'Code': 'YOS'
        }]
      }, {
        'Name': 'Seoul',
        'Code': '11'
      }, {
        'Name': 'Ulsan',
        'Code': '31'
      }]
    }, {
      'Name': 'Kuwait',
      'Code': 'KWT'
    }, {
      'Name': 'Kyrgyzstan',
      'Code': 'KGZ',
      'State': {
        'City': [{
          'Name': 'Batken',
          'Code': 'B'
        }, {
          'Name': 'Bishkek',
          'Code': 'GB'
        }, {
          'Name': 'Chuy',
          'Code': 'C'
        }, {
          'Name': 'JalalAbad',
          'Code': 'J'
        }, {
          'Name': 'Kant',
          'Code': 'KAN'
        }, {
          'Name': 'Karabalta',
          'Code': 'KBA'
        }, {
          'Name': 'KaraKol',
          'Code': 'KKO'
        }, {
          'Name': 'KokJangak',
          'Code': 'KJ'
        }, {
          'Name': 'MailuuSuu',
          'Code': 'MS'
        }, {
          'Name': 'Naryn',
          'Code': 'N'
        }, {
          'Name': 'Osh',
          'Code': 'O'
        }, {
          'Name': 'Suluktu',
          'Code': 'SU'
        }, {
          'Name': 'Talas',
          'Code': 'T'
        }, {
          'Name': 'TashKumyr',
          'Code': 'TK'
        }, {
          'Name': 'Uzgen',
          'Code': 'UG'
        }, {
          'Name': 'YsykKol',
          'Code': 'Y'
        }]
      }
    }, {
      'Name': 'Laos',
      'Code': 'LAO',
      'State': {
        'City': [{
          'Name': 'Attapu',
          'Code': 'AT'
        }, {
          'Name': 'Bokeo',
          'Code': 'BK'
        }, {
          'Name': 'Bolikhamxai',
          'Code': 'BL'
        }, {
          'Name': 'Champasak',
          'Code': 'CH'
        }, {
          'Name': 'Houaphan',
          'Code': 'HO'
        }, {
          'Name': 'Khammouan',
          'Code': 'KH'
        }, {
          'Name': 'Louang Namtha',
          'Code': 'LM'
        }, {
          'Name': 'Louangphrabang',
          'Code': 'LP'
        }, {
          'Name': 'Oudomxai',
          'Code': 'OU'
        }, {
          'Name': 'Phongsali',
          'Code': 'PH'
        }, {
          'Name': 'Saravan',
          'Code': 'SL'
        }, {
          'Name': 'Savannakhet',
          'Code': 'SV'
        }, {
          'Name': 'Vientiane',
          'Code': 'VI'
        }, {
          'Name': 'Xaignabouri',
          'Code': 'XA'
        }, {
          'Name': 'Xaisomboun',
          'Code': 'XN'
        }, {
          'Name': 'Xekong',
          'Code': 'XE'
        }, {
          'Name': 'Xiangkhoang',
          'Code': 'XI'
        }]
      }
    }, {
      'Name': 'Latvia',
      'Code': 'LVA',
      'State': {
        'City': [{
          'Name': 'Aizkraukles',
          'Code': 'AIZ'
        }, {
          'Name': 'Aluksnes',
          'Code': 'ALU'
        }, {
          'Name': 'Balvu',
          'Code': 'BAL'
        }, {
          'Name': 'Bauskas',
          'Code': 'BAU'
        }, {
          'Name': 'Cesu',
          'Code': 'CES'
        }, {
          'Name': 'Daugavpils',
          'Code': 'DGR'
        }, {
          'Name': 'Dobeles',
          'Code': 'DOB'
        }, {
          'Name': 'Gulbenes',
          'Code': 'GUL'
        }, {
          'Name': 'Jekabpils',
          'Code': 'JEK'
        }, {
          'Name': 'Jelgavas',
          'Code': 'JGR'
        }, {
          'Name': 'Kraslavas',
          'Code': 'KRA'
        }, {
          'Name': 'Kuldigas',
          'Code': 'KUL'
        }, {
          'Name': 'Liepajas',
          'Code': 'LPK'
        }, {
          'Name': 'Limbazu',
          'Code': 'LIM'
        }, {
          'Name': 'Ludzas',
          'Code': 'LUD'
        }, {
          'Name': 'Madonas',
          'Code': 'MAD'
        }, {
          'Name': 'Ogres',
          'Code': 'OGR'
        }, {
          'Name': 'Preilu',
          'Code': 'PRE'
        }, {
          'Name': 'Rezeknes',
          'Code': 'RZR'
        }, {
          'Name': 'Rigas',
          'Code': 'RGA'
        }, {
          'Name': 'Saldus',
          'Code': 'SAL'
        }, {
          'Name': 'Talsu',
          'Code': 'TAL'
        }, {
          'Name': 'Tukuma',
          'Code': 'TUK'
        }, {
          'Name': 'Valkas',
          'Code': 'VLK'
        }, {
          'Name': 'Valmieras',
          'Code': 'VLM'
        }, {
          'Name': 'Ventspils',
          'Code': 'VSL'
        }]
      }
    }, {
      'Name': 'Lebanon',
      'Code': 'LBN',
      'State': {
        'City': [{
          'Name': 'AlBiqa',
          'Code': 'BI'
        }, {
          'Name': 'AlJanub',
          'Code': 'JA'
        }, {
          'Name': 'AnNabatiyah',
          'Code': 'NA'
        }, {
          'Name': 'AshShamal',
          'Code': 'AS'
        }, {
          'Name': 'Bayrut',
          'Code': 'BA'
        }, {
          'Name': 'Jabal Lubnan',
          'Code': 'JL'
        }]
      }
    }, {
      'Name': 'Lesotho',
      'Code': 'LSO',
      'State': {
        'City': [{
          'Name': 'Berea',
          'Code': 'D'
        }, {
          'Name': 'ButhaButhe',
          'Code': 'B'
        }, {
          'Name': 'Leribe',
          'Code': 'C'
        }, {
          'Name': 'Mafeteng',
          'Code': 'E'
        }, {
          'Name': 'Maseru',
          'Code': 'A'
        }, {
          'Name': 'Mohales Hoek',
          'Code': 'F'
        }, {
          'Name': 'Mokhotlong',
          'Code': 'J'
        }, {
          'Name': 'Qachas Nek',
          'Code': 'H'
        }, {
          'Name': 'Quthing',
          'Code': 'G'
        }, {
          'Name': 'ThabaTseka',
          'Code': 'K'
        }]
      }
    }, {
      'Name': 'Liberia',
      'Code': 'LBR',
      'State': {
        'City': [{
          'Name': 'Bomi',
          'Code': 'BM'
        }, {
          'Name': 'Bong',
          'Code': 'BG'
        }, {
          'Name': 'Bopolu',
          'Code': 'BOP'
        }, {
          'Name': 'Fish Town',
          'Code': 'FT'
        }, {
          'Name': 'Gbarpolu',
          'Code': 'GBA'
        }, {
          'Name': 'Grand Bassa',
          'Code': 'GB'
        }, {
          'Name': 'Grand Cape Mount',
          'Code': 'CM'
        }, {
          'Name': 'Grand Gedeh',
          'Code': 'GG'
        }, {
          'Name': 'Grand Kru',
          'Code': 'GK'
        }, {
          'Name': 'Lofa',
          'Code': 'LO'
        }, {
          'Name': 'Margibi',
          'Code': 'MG'
        }, {
          'Name': 'Maryland',
          'Code': 'MY'
        }, {
          'Name': 'Montserrado',
          'Code': 'MO'
        }, {
          'Name': 'Nimba',
          'Code': 'NI'
        }, {
          'Name': 'River Cess',
          'Code': 'RI'
        }, {
          'Name': 'River Gee',
          'Code': 'RG'
        }, {
          'Name': 'Sinoe',
          'Code': 'SI'
        }]
      }
    }, {
      'Name': 'Libya',
      'Code': 'LBY'
    }, {
      'Name': 'Liechtenstein',
      'Code': 'LIE'
    }, {
      'Name': 'Lithuania',
      'Code': 'LTU',
      'State': {
        'City': [{
          'Name': 'Akmenes',
          'Code': 'AKM'
        }, {
          'Name': 'Alytus',
          'Code': 'AL'
        }, {
          'Name': 'Kaunas',
          'Code': 'KA'
        }, {
          'Name': 'Klaipeda',
          'Code': 'KL'
        }, {
          'Name': 'Marijampole',
          'Code': 'MA'
        }, {
          'Name': 'Panevezys',
          'Code': 'PA'
        }, {
          'Name': 'Siauliai',
          'Code': 'SI'
        }, {
          'Name': 'Taurages',
          'Code': 'TA'
        }, {
          'Name': 'Telsiu',
          'Code': 'TE'
        }, {
          'Name': 'Utenos',
          'Code': 'UT'
        }, {
          'Name': 'Vilnius',
          'Code': 'VI'
        }]
      }
    }, {
      'Name': 'Luxembourg',
      'Code': 'LUX',
      'State': {
        'City': [{
          'Name': 'Diekirch',
          'Code': 'DD'
        }, {
          'Name': 'Grevenmacher',
          'Code': 'GG'
        }, {
          'Name': 'Luxembourg',
          'Code': 'LL'
        }]
      }
    }, {
      'Name': 'Macedonia,Former Yugoslav Republic of',
      'Code': 'MKD'
    }, {
      'Name': 'Madagascar',
      'Code': 'MDG',
      'State': {
        'City': [{
          'Name': 'Antananarivo',
          'Code': 'AN'
        }, {
          'Name': 'Antsiranana',
          'Code': 'AS'
        }, {
          'Name': 'Fianarantsoa',
          'Code': 'FN'
        }, {
          'Name': 'Mahajanga',
          'Code': 'MJ'
        }, {
          'Name': 'Toamasina',
          'Code': 'TM'
        }, {
          'Name': 'Toliary',
          'Code': 'TL'
        }]
      }
    }, {
      'Name': 'Malawi',
      'Code': 'MWI',
      'State': {
        'City': [{
          'Name': 'Central',
          'Code': 'C'
        }, {
          'Name': 'Northern',
          'Code': 'N'
        }, {
          'Name': 'Southern',
          'Code': 'S'
        }]
      }
    }, {
      'Name': 'Malaysia',
      'Code': 'MYS',
      'State': [{
        'Name': 'Johor',
        'Code': 'JH',
        'City': [{
          'Name': 'Batu Pahat',
          'Code': 'BAT'
        }, {
          'Name': 'Johor Bahru',
          'Code': 'JHB'
        }, {
          'Name': 'Kluang',
          'Code': 'KLA'
        }, {
          'Name': 'Kota Tinggi',
          'Code': 'KTI'
        }, {
          'Name': 'Mersing',
          'Code': 'MEP'
        }, {
          'Name': 'Muar',
          'Code': 'MUA'
        }, {
          'Name': 'Pontian',
          'Code': 'POW'
        }, {
          'Name': 'Segamat',
          'Code': 'SGM'
        }]
      }, {
        'Name': 'Kedah',
        'Code': 'KD',
        'City': [{
          'Name': 'Baling',
          'Code': 'BLZ'
        }, {
          'Name': 'Bandar Baharu',
          'Code': 'BMA'
        }, {
          'Name': 'Kota Setar',
          'Code': 'KOR'
        }, {
          'Name': 'Kuala Muda',
          'Code': 'KMU'
        }, {
          'Name': 'Kubang Pasu',
          'Code': 'KPA'
        }, {
          'Name': 'Kulim',
          'Code': 'KLM'
        }, {
          'Name': 'Langkawi',
          'Code': 'LGK'
        }, {
          'Name': 'Padang Terap',
          'Code': 'PGT'
        }, {
          'Name': 'Pendang',
          'Code': 'PEN'
        }]
      }, {
        'Name': 'Kelantan',
        'Code': 'KN',
        'City': [{
          'Name': 'Bachok',
          'Code': 'BAC'
        }, {
          'Name': 'Gua Musang',
          'Code': 'GMU'
        }, {
          'Name': 'Jeli',
          'Code': 'JEL'
        }, {
          'Name': 'Kota Bharu',
          'Code': 'KBR'
        }, {
          'Name': 'Kuala Krai',
          'Code': 'KUG'
        }, {
          'Name': 'Machang',
          'Code': 'MAC'
        }, {
          'Name': 'Pasir Mas',
          'Code': 'PMA'
        }, {
          'Name': 'Pasir Putih',
          'Code': 'PPU'
        }, {
          'Name': 'Tanah Merah',
          'Code': 'TMR'
        }, {
          'Name': 'Tumpat',
          'Code': 'TUM'
        }]
      }, {
        'Name': 'Kuala Lumpur',
        'Code': 'KL',
        'City': {
          'Name': 'Kuala Lumpur',
          'Code': 'KUL'
        }
      }, {
        'Name': 'Labuan',
        'Code': 'LB',
        'City': [{
          'Name': 'Labuan',
          'Code': 'LBU'
        }, {
          'Name': 'Victoria',
          'Code': 'VIC'
        }]
      }, {
        'Name': 'Malacca',
        'Code': 'ML',
        'City': [{
          'Name': 'Alor Gajah',
          'Code': 'AOG'
        }, {
          'Name': 'Jasin',
          'Code': 'JAS'
        }, {
          'Name': 'Melaka',
          'Code': 'MEL'
        }]
      }, {
        'Name': 'Negeri Sembilan',
        'Code': 'NS',
        'City': [{
          'Name': 'Jelebu',
          'Code': 'JEL'
        }, {
          'Name': 'Jempol',
          'Code': 'JEP'
        }, {
          'Name': 'Kuala Pilah',
          'Code': 'KPI'
        }, {
          'Name': 'Port Dickson',
          'Code': 'PDI'
        }, {
          'Name': 'Rembau',
          'Code': 'REM'
        }, {
          'Name': 'Seremban',
          'Code': 'SRB'
        }, {
          'Name': 'Tampin',
          'Code': 'TAI'
        }]
      }, {
        'Name': 'Pahang',
        'Code': 'PG',
        'City': [{
          'Name': 'Bentong',
          'Code': 'BEN'
        }, {
          'Name': 'Bera',
          'Code': 'BER'
        }, {
          'Name': 'Cameron Highlands',
          'Code': 'CAH'
        }, {
          'Name': 'Jerantut',
          'Code': 'JER'
        }, {
          'Name': 'Kuala Lipis',
          'Code': 'KUL'
        }, {
          'Name': 'Kuantan',
          'Code': 'KUA'
        }, {
          'Name': 'Maran',
          'Code': 'MAR'
        }, {
          'Name': 'Pekan',
          'Code': 'PEK'
        }, {
          'Name': 'Raub',
          'Code': 'RAU'
        }, {
          'Name': 'Rompin',
          'Code': 'TOM'
        }, {
          'Name': 'Temerloh',
          'Code': 'TEM'
        }]
      }, {
        'Name': 'Perak',
        'Code': 'PK',
        'City': [{
          'Name': 'Batu Gajah',
          'Code': 'BGA'
        }, {
          'Name': 'Ipoh',
          'Code': 'IPH'
        }, {
          'Name': 'Kuala Kangsar',
          'Code': 'KAR'
        }, {
          'Name': 'Lumut',
          'Code': 'LUM'
        }, {
          'Name': 'Sungai Siput',
          'Code': 'SSP'
        }, {
          'Name': 'Taiping',
          'Code': 'TPG'
        }, {
          'Name': 'Tanjung Malim',
          'Code': 'TAM'
        }, {
          'Name': 'Teluk Intan',
          'Code': 'TAS'
        }]
      }, {
        'Name': 'Perlis',
        'Code': 'PS',
        'City': {
          'Name': 'Kangar',
          'Code': 'KGR'
        }
      }, {
        'Name': 'Pulau Pinang',
        'Code': 'PH',
        'City': [{
          'Name': 'Bukit Mertajam',
          'Code': 'BMJ'
        }, {
          'Name': 'Butterworth',
          'Code': 'BWH'
        }, {
          'Name': 'George Town',
          'Code': 'PEN'
        }, {
          'Name': 'Nibong Tebal',
          'Code': 'NTE'
        }]
      }, {
        'Name': 'Sabah',
        'Code': 'SB',
        'City': [{
          'Name': 'Beaufort',
          'Code': 'BEF'
        }, {
          'Name': 'Beluran',
          'Code': 'BEL'
        }, {
          'Name': 'Keningau',
          'Code': 'KEG'
        }, {
          'Name': 'Kinabatangan',
          'Code': 'KBT'
        }, {
          'Name': 'Kota Belud',
          'Code': 'KBD'
        }, {
          'Name': 'Kota Kinabalu',
          'Code': 'BKI'
        }, {
          'Name': 'Kota Marudu',
          'Code': 'KMU'
        }, {
          'Name': 'Kuala Penyu',
          'Code': 'KPU'
        }, {
          'Name': 'Kudat',
          'Code': 'KUD'
        }, {
          'Name': 'Kunak',
          'Code': 'KUN'
        }, {
          'Name': 'Lahad Datu',
          'Code': 'LDU'
        }, {
          'Name': 'Nabawan',
          'Code': 'NAB'
        }, {
          'Name': 'Papar',
          'Code': 'PAP'
        }, {
          'Name': 'Penampang',
          'Code': 'PMP'
        }, {
          'Name': 'Pitas',
          'Code': 'PIT'
        }, {
          'Name': 'Ranau',
          'Code': 'RNU'
        }, {
          'Name': 'Sandakan',
          'Code': 'SDK'
        }, {
          'Name': 'Semporna',
          'Code': 'SMM'
        }, {
          'Name': 'Sipitang',
          'Code': 'SPT'
        }, {
          'Name': 'Tambunan',
          'Code': 'TAB'
        }, {
          'Name': 'Tawau',
          'Code': 'TAW'
        }, {
          'Name': 'Tenom',
          'Code': 'TEN'
        }, {
          'Name': 'Tuaran',
          'Code': 'TUR'
        }]
      }, {
        'Name': 'Sarawak',
        'Code': 'SR',
        'City': [{
          'Name': 'Betong',
          'Code': 'BTG'
        }, {
          'Name': 'Bintulu',
          'Code': 'BTU'
        }, {
          'Name': 'Kapit',
          'Code': 'KPI'
        }, {
          'Name': 'Kuching',
          'Code': 'KCH'
        }, {
          'Name': 'Limbang',
          'Code': 'LMN'
        }, {
          'Name': 'Miri',
          'Code': 'MYY'
        }, {
          'Name': 'Mukah',
          'Code': 'MKM'
        }, {
          'Name': 'Samarahan',
          'Code': 'SMH'
        }, {
          'Name': 'Sarikei',
          'Code': 'SAR'
        }, {
          'Name': 'Sibu',
          'Code': 'SBW'
        }, {
          'Name': 'Sri Aman',
          'Code': 'SAM'
        }]
      }, {
        'Name': 'Selangor',
        'Code': 'SL',
        'City': [{
          'Name': 'Gombak',
          'Code': 'GOM'
        }, {
          'Name': 'Hulu Langat',
          'Code': 'HUL'
        }, {
          'Name': 'Hulu Selangor',
          'Code': 'HUS'
        }, {
          'Name': 'Kuala Langat',
          'Code': 'KLG'
        }, {
          'Name': 'Kuala Selangor',
          'Code': 'KSL'
        }, {
          'Name': 'Petaling',
          'Code': 'PJA'
        }, {
          'Name': 'Sabak Bernam',
          'Code': 'SBM'
        }, {
          'Name': 'Sepang',
          'Code': 'SEP'
        }]
      }, {
        'Name': 'Terengganu',
        'Code': 'TR',
        'City': [{
          'Name': 'Besut',
          'Code': 'BES'
        }, {
          'Name': 'Dungun',
          'Code': 'DGN'
        }, {
          'Name': 'Hulu',
          'Code': 'HUL'
        }, {
          'Name': 'Kemaman',
          'Code': 'KEM'
        }, {
          'Name': 'Kuala Terengganu',
          'Code': 'TGG'
        }, {
          'Name': 'Marang',
          'Code': 'MAR'
        }, {
          'Name': 'Setiu',
          'Code': 'SET'
        }]
      }]
    }, {
      'Name': 'Maldives',
      'Code': 'MDV',
      'State': {
        'City': [{
          'Name': 'Addu Atoll',
          'Code': 'ADD'
        }, {
          'Name': 'Faadhippolhu',
          'Code': 'FAA'
        }, {
          'Name': 'Felidhu Atoll',
          'Code': 'FEA'
        }, {
          'Name': 'Foammulah',
          'Code': 'FMU'
        }, {
          'Name': 'Hadhdhunmathi',
          'Code': 'HDH'
        }, {
          'Name': 'Kolhumadulu',
          'Code': 'KLH'
        }, {
          'Name': 'Male',
          'Code': 'MAL'
        }, {
          'Name': 'Male Atoll',
          'Code': 'MAA'
        }, {
          'Name': 'Mulakatholhu',
          'Code': 'MUA'
        }, {
          'Name': 'North Ari Atoll',
          'Code': 'AAD'
        }, {
          'Name': 'North Huvadhu Atoll',
          'Code': 'HAD'
        }, {
          'Name': 'North Maalhosmadhulu',
          'Code': 'MAD'
        }, {
          'Name': 'North Miladhunmadhulu',
          'Code': 'MLD'
        }, {
          'Name': 'North Nilandhe Atoll',
          'Code': 'NAD'
        }, {
          'Name': 'North Thiladhunmathi',
          'Code': 'THD'
        }, {
          'Name': 'South Ari Atoll',
          'Code': 'AAU'
        }, {
          'Name': 'South Huvadhu Atoll',
          'Code': 'HAU'
        }, {
          'Name': 'South Maalhosmadulu',
          'Code': 'MAU'
        }, {
          'Name': 'South Miladhunmadhulu',
          'Code': 'MLU'
        }, {
          'Name': 'South Nilandhe Atoll',
          'Code': 'NAU'
        }, {
          'Name': 'South Thiladhunmathi',
          'Code': 'THU'
        }]
      }
    }, {
      'Name': 'Mali',
      'Code': 'MLI',
      'State': {
        'City': [{
          'Name': 'Bamako',
          'Code': 'CD'
        }, {
          'Name': 'Gao',
          'Code': 'GA'
        }, {
          'Name': 'Kayes',
          'Code': 'KY'
        }, {
          'Name': 'Kidal',
          'Code': 'KD'
        }, {
          'Name': 'Koulikoro',
          'Code': 'KL'
        }, {
          'Name': 'Mopti',
          'Code': 'MP'
        }, {
          'Name': 'Segou',
          'Code': 'SG'
        }, {
          'Name': 'Sikasso',
          'Code': 'SK'
        }, {
          'Name': 'Tombouctou',
          'Code': 'TB'
        }]
      }
    }, {
      'Name': 'Malta',
      'Code': 'MLT'
    }, {
      'Name': 'Marshall Islands',
      'Code': 'MHL'
    }, {
      'Name': 'Martinique',
      'Code': 'MTQ'
    }, {
      'Name': 'Mauritania',
      'Code': 'MRT',
      'State': {
        'City': [{
          'Name': 'Adrar',
          'Code': 'AD'
        }, {
          'Name': 'Brakna',
          'Code': 'BR'
        }, {
          'Name': 'Dakhlet Nouadhibou',
          'Code': 'DN'
        }, {
          'Name': 'ElAcaba',
          'Code': 'AS'
        }, {
          'Name': 'Gorgol',
          'Code': 'GO'
        }, {
          'Name': 'Guidimaka',
          'Code': 'GM'
        }, {
          'Name': 'Hodh echChargui',
          'Code': 'HC'
        }, {
          'Name': 'Hodh elGharbi',
          'Code': 'HG'
        }, {
          'Name': 'Inchiri',
          'Code': 'IN'
        }, {
          'Name': 'Nouakchott',
          'Code': 'NO'
        }, {
          'Name': 'Tagant',
          'Code': 'TA'
        }, {
          'Name': 'Tiris Zemmour',
          'Code': 'TZ'
        }, {
          'Name': 'Trarza',
          'Code': 'TR'
        }]
      }
    }, {
      'Name': 'Mauritius',
      'Code': 'MUS'
    }, {
      'Name': 'Mayotte',
      'Code': 'MYT'
    }, {
      'Name': 'Mexico',
      'Code': 'MEX',
      'State': {
        'City': [{
          'Name': 'Acapulco',
          'Code': 'ACA'
        }, {
          'Name': 'Aguascalientes',
          'Code': 'AGU'
        }, {
          'Name': 'Benito Juare',
          'Code': 'BJU'
        }, {
          'Name': 'Campeche',
          'Code': 'CAM'
        }, {
          'Name': 'Carmen',
          'Code': 'CAR'
        }, {
          'Name': 'Celaya',
          'Code': 'CLY'
        }, {
          'Name': 'Cheturnal',
          'Code': 'CTM'
        }, {
          'Name': 'Chihuahua',
          'Code': 'CHH'
        }, {
          'Name': 'Chilpancingo',
          'Code': 'CHI'
        }, {
          'Name': 'Coatzacoalcos',
          'Code': 'COA'
        }, {
          'Name': 'Colima',
          'Code': 'COL'
        }, {
          'Name': 'Cuernavaca',
          'Code': 'CVC'
        }, {
          'Name': 'Culiacan',
          'Code': 'CUL'
        }, {
          'Name': 'Durango',
          'Code': 'DUR'
        }, {
          'Name': 'Ensenada',
          'Code': 'ESE'
        }, {
          'Name': 'Guadalajara',
          'Code': 'GDL'
        }, {
          'Name': 'Guanajuato',
          'Code': 'GUA'
        }, {
          'Name': 'Hermosillo',
          'Code': 'HMO'
        }, {
          'Name': 'Irapuato',
          'Code': 'IRP'
        }, {
          'Name': 'Jalapa',
          'Code': 'JAL'
        }, {
          'Name': 'Juarez',
          'Code': 'JUZ'
        }, {
          'Name': 'La Paz',
          'Code': 'LAP'
        }, {
          'Name': 'Leon',
          'Code': 'LEN'
        }, {
          'Name': 'Los Mochis',
          'Code': 'LMM'
        }, {
          'Name': 'Matamoros',
          'Code': 'MAM'
        }, {
          'Name': 'Mazatlan',
          'Code': 'MZT'
        }, {
          'Name': 'Merida',
          'Code': 'MID'
        }, {
          'Name': 'Mexicali',
          'Code': 'MXL'
        }, {
          'Name': 'Mexico City',
          'Code': 'MEX'
        }, {
          'Name': 'Monclova',
          'Code': 'LOV'
        }, {
          'Name': 'Monterrey',
          'Code': 'MTY'
        }, {
          'Name': 'Morelia',
          'Code': 'MLM'
        }, {
          'Name': 'Nogales',
          'Code': 'NOG'
        }, {
          'Name': 'Nuevo Laredo',
          'Code': 'NLE'
        }, {
          'Name': 'Oaxaca',
          'Code': 'OAX'
        }, {
          'Name': 'Obregon',
          'Code': 'OBR'
        }, {
          'Name': 'Orizaba',
          'Code': 'ORI'
        }, {
          'Name': 'Pachuca',
          'Code': 'PAC'
        }, {
          'Name': 'Poza Rica de Hidalgo',
          'Code': 'PRH'
        }, {
          'Name': 'Puebla',
          'Code': 'PUE'
        }, {
          'Name': 'Puerto Vallarta',
          'Code': 'PVR'
        }, {
          'Name': 'Queretaro',
          'Code': 'QUE'
        }, {
          'Name': 'Reynosa',
          'Code': 'REX'
        }, {
          'Name': 'Saltillo',
          'Code': 'SLW'
        }, {
          'Name': 'San Luis Potosi',
          'Code': 'SLP'
        }, {
          'Name': 'Tampico',
          'Code': 'TAM'
        }, {
          'Name': 'Tapachula',
          'Code': 'TAP'
        }, {
          'Name': 'Tehuacan',
          'Code': 'TCN'
        }, {
          'Name': 'Tepic',
          'Code': 'TPQ'
        }, {
          'Name': 'Tijuana',
          'Code': 'TIJ'
        }, {
          'Name': 'Tlaxcala',
          'Code': 'TLA'
        }, {
          'Name': 'Toluca',
          'Code': 'TLC'
        }, {
          'Name': 'Torreon',
          'Code': 'TRC'
        }, {
          'Name': 'Tuxtla Gutierrez',
          'Code': 'TGZ'
        }, {
          'Name': 'Uruapan',
          'Code': 'UPN'
        }, {
          'Name': 'Valles',
          'Code': 'VHM'
        }, {
          'Name': 'Veracruz',
          'Code': 'VER'
        }, {
          'Name': 'Victoria',
          'Code': 'VIC'
        }, {
          'Name': 'Villahermosa',
          'Code': 'VSA'
        }, {
          'Name': 'Zacatecas',
          'Code': 'ZAC'
        }]
      }
    }, {
      'Name': 'Micronesia',
      'Code': 'FSM'
    }, {
      'Name': 'Moldova',
      'Code': 'MDA'
    }, {
      'Name': 'Monaco',
      'Code': 'MCO'
    }, {
      'Name': 'Mongolia',
      'Code': 'MNG',
      'State': {
        'City': [{
          'Name': 'Arhangay',
          'Code': '73'
        }, {
          'Name': 'Bayanhongor',
          'Code': '69'
        }, {
          'Name': 'BayanUlgiy',
          'Code': '71'
        }, {
          'Name': 'Bulgan',
          'Code': '67'
        }, {
          'Name': 'DarhanUul',
          'Code': '37'
        }, {
          'Name': 'Dornod',
          'Code': '61'
        }, {
          'Name': 'Dornogovi',
          'Code': '63'
        }, {
          'Name': 'Dundgovi',
          'Code': '59'
        }, {
          'Name': 'Dzavhan',
          'Code': '57'
        }, {
          'Name': 'GoviAltay',
          'Code': '65'
        }, {
          'Name': 'Govisumber',
          'Code': '64'
        }, {
          'Name': 'Hentiy',
          'Code': '39'
        }, {
          'Name': 'Hovd',
          'Code': '43'
        }, {
          'Name': 'Hovsgol',
          'Code': '41'
        }, {
          'Name': 'Orhon',
          'Code': '35'
        }, {
          'Name': 'Selenge',
          'Code': '49'
        }, {
          'Name': 'Suhbaatar',
          'Code': '51'
        }, {
          'Name': 'Tov',
          'Code': '47'
        }, {
          'Name': 'Ulaanbaatar hot',
          'Code': '1'
        }, {
          'Name': 'Umnogovi',
          'Code': 'UMN'
        }, {
          'Name': 'Uvorhangay',
          'Code': 'UVO'
        }, {
          'Name': 'Uvs',
          'Code': '46'
        }]
      }
    }, {
      'Name': 'Montserrat',
      'Code': 'MSR'
    }, {
      'Name': 'Morocco',
      'Code': 'MAR',
      'State': {
        'City': [{
          'Name': 'Casablanca',
          'Code': 'CBL'
        }, {
          'Name': 'Fes',
          'Code': 'FES'
        }, {
          'Name': 'Marrakech',
          'Code': 'MRK'
        }, {
          'Name': 'Meknes',
          'Code': 'MKN'
        }, {
          'Name': 'Oujda',
          'Code': 'OUJ'
        }, {
          'Name': 'Rabat',
          'Code': 'RSA'
        }, {
          'Name': 'Tangier',
          'Code': 'TGR'
        }, {
          'Name': 'Tetouan',
          'Code': 'TET'
        }, {
          'Name': 'Western Sahara',
          'Code': 'WSH'
        }]
      }
    }, {
      'Name': 'Mozambique',
      'Code': 'MOZ'
    }, {
      'Name': 'Myanmar',
      'Code': 'MMR',
      'State': {
        'City': [{
          'Name': 'Ayeyarwady',
          'Code': 'AY'
        }, {
          'Name': 'Bago',
          'Code': 'BG'
        }, {
          'Name': 'Chin',
          'Code': 'CH'
        }, {
          'Name': 'Kachin',
          'Code': 'KC'
        }, {
          'Name': 'Kayah',
          'Code': 'KH'
        }, {
          'Name': 'Kayin',
          'Code': 'KN'
        }, {
          'Name': 'Magway',
          'Code': 'MG'
        }, {
          'Name': 'Mandalay',
          'Code': 'MD'
        }, {
          'Name': 'Mon',
          'Code': 'MN'
        }, {
          'Name': 'Rakhine',
          'Code': 'RK'
        }, {
          'Name': 'Sagaing',
          'Code': 'SG'
        }, {
          'Name': 'Shan',
          'Code': 'SH'
        }, {
          'Name': 'Tanintharyi',
          'Code': 'TN'
        }, {
          'Name': 'Yangon',
          'Code': 'YG'
        }]
      }
    }, {
      'Name': 'Namibia',
      'Code': 'NAM',
      'State': {
        'City': [{
          'Name': 'Caprivi',
          'Code': 'CA'
        }, {
          'Name': 'Erongo',
          'Code': 'ER'
        }, {
          'Name': 'Hardap',
          'Code': 'HA'
        }, {
          'Name': 'Karas',
          'Code': 'KR'
        }, {
          'Name': 'Khomas',
          'Code': 'KH'
        }, {
          'Name': 'Kunene',
          'Code': 'KU'
        }, {
          'Name': 'Ohangwena',
          'Code': 'OW'
        }, {
          'Name': 'Okavango',
          'Code': 'KV'
        }, {
          'Name': 'Omaheke',
          'Code': 'OK'
        }, {
          'Name': 'Omusati',
          'Code': 'OT'
        }, {
          'Name': 'Oshana',
          'Code': 'ON'
        }, {
          'Name': 'Oshikoto',
          'Code': 'OO'
        }, {
          'Name': 'Otjozondjupa',
          'Code': 'OJ'
        }]
      }
    }, {
      'Name': 'Nauru',
      'Code': 'NRU'
    }, {
      'Name': 'Nepal',
      'Code': 'NPL',
      'State': {
        'City': [{
          'Name': 'Bagmati',
          'Code': 'BA'
        }, {
          'Name': 'Bheri',
          'Code': 'BH'
        }, {
          'Name': 'Dhawalagiri',
          'Code': 'DH'
        }, {
          'Name': 'Gandaki',
          'Code': 'GA'
        }, {
          'Name': 'Janakpur',
          'Code': 'JA'
        }, {
          'Name': 'Karnali',
          'Code': 'KA'
        }, {
          'Name': 'Kosi',
          'Code': 'KO'
        }, {
          'Name': 'Lumbini',
          'Code': 'LU'
        }, {
          'Name': 'Mahakali',
          'Code': 'MA'
        }, {
          'Name': 'Mechi',
          'Code': 'ME'
        }, {
          'Name': 'Narayani',
          'Code': 'NA'
        }, {
          'Name': 'Rapti',
          'Code': 'RA'
        }, {
          'Name': 'Seti',
          'Code': 'SE'
        }, {
          'Name': 'Sogarmatha',
          'Code': 'SA'
        }]
      }
    }, {
      'Name': 'Netherlands',
      'Code': 'NLD',
      'State': {
        'City': [{
          'Name': '`sHertogenbosch',
          'Code': 'HTB'
        }, {
          'Name': 'Almere',
          'Code': 'AER'
        }, {
          'Name': 'Amersfoort',
          'Code': 'AME'
        }, {
          'Name': 'Amsterdam',
          'Code': 'AMS'
        }, {
          'Name': 'Apeldoorn',
          'Code': 'APE'
        }, {
          'Name': 'Arnhem',
          'Code': 'ARN'
        }, {
          'Name': 'Assen',
          'Code': 'ASS'
        }, {
          'Name': 'Breda',
          'Code': 'BRD'
        }, {
          'Name': 'Dordrecht',
          'Code': 'DOR'
        }, {
          'Name': 'Ede',
          'Code': 'EDE'
        }, {
          'Name': 'Eindhoven',
          'Code': 'EIN'
        }, {
          'Name': 'Emmen',
          'Code': 'EMM'
        }, {
          'Name': 'Enschede',
          'Code': 'ENS'
        }, {
          'Name': 'Groningen',
          'Code': 'GRQ'
        }, {
          'Name': 'Haarlem',
          'Code': 'HRA'
        }, {
          'Name': 'Hague',
          'Code': 'HAG'
        }, {
          'Name': 'Hoofddorp',
          'Code': 'HFD'
        }, {
          'Name': 'Leeuwarden',
          'Code': 'LWR'
        }, {
          'Name': 'Leiden',
          'Code': 'LID'
        }, {
          'Name': 'Lelystad',
          'Code': 'LEY'
        }, {
          'Name': 'Maastricht',
          'Code': 'MST'
        }, {
          'Name': 'Middelburg',
          'Code': 'MDL'
        }, {
          'Name': 'Nijmegen',
          'Code': 'NIJ'
        }, {
          'Name': 'Rotterdam',
          'Code': 'RTM'
        }, {
          'Name': 'Tilburg',
          'Code': 'TLB'
        }, {
          'Name': 'Utrecht',
          'Code': 'UTC'
        }, {
          'Name': 'Zoetermeer',
          'Code': 'ZTM'
        }, {
          'Name': 'Zwolle',
          'Code': 'ZWO'
        }]
      }
    }, {
      'Name': 'Netherlands Antilles',
      'Code': 'ANT'
    }, {
      'Name': 'New Caledonia',
      'Code': 'NCL'
    }, {
      'Name': 'New Zealand',
      'Code': 'NZL',
      'State': {
        'City': [{
          'Name': 'Auckland',
          'Code': 'AUK'
        }, {
          'Name': 'Blenheim',
          'Code': 'BHE'
        }, {
          'Name': 'Christchurch',
          'Code': 'CHC'
        }, {
          'Name': 'Dunedin',
          'Code': 'DUD'
        }, {
          'Name': 'Far North',
          'Code': 'FNR'
        }, {
          'Name': 'Gisborne',
          'Code': 'GIS'
        }, {
          'Name': 'Greymouth',
          'Code': 'GMN'
        }, {
          'Name': 'Hamilton',
          'Code': 'HLZ'
        }, {
          'Name': 'Hastings',
          'Code': 'HAS'
        }, {
          'Name': 'Invercargill',
          'Code': 'IVC'
        }, {
          'Name': 'Kaipara',
          'Code': 'KAI'
        }, {
          'Name': 'Manukau',
          'Code': 'MNK'
        }, {
          'Name': 'Napier',
          'Code': 'NPE'
        }, {
          'Name': 'Nelson',
          'Code': 'NSN'
        }, {
          'Name': 'New Plymouth',
          'Code': 'NPL'
        }, {
          'Name': 'North Shore',
          'Code': 'NSH'
        }, {
          'Name': 'Palmerston North',
          'Code': 'PMR'
        }, {
          'Name': 'Richmond',
          'Code': 'RMD'
        }, {
          'Name': 'Stratford',
          'Code': 'STR'
        }, {
          'Name': 'Taumarunui',
          'Code': 'TAU'
        }, {
          'Name': 'Waitakere',
          'Code': 'WAE'
        }, {
          'Name': 'Wanganui',
          'Code': 'WAG'
        }, {
          'Name': 'Whakatane',
          'Code': 'WHK'
        }, {
          'Name': 'Whangarei',
          'Code': 'WRE'
        }]
      }
    }, {
      'Name': 'Nicaragua',
      'Code': 'NIC',
      'State': {
        'City': [{
          'Name': 'Atlantico Norte',
          'Code': 'AN'
        }, {
          'Name': 'Atlantico Sur',
          'Code': 'AS'
        }, {
          'Name': 'Boaco',
          'Code': 'BO'
        }, {
          'Name': 'Carazo',
          'Code': 'CA'
        }, {
          'Name': 'Chinandega',
          'Code': 'CD'
        }, {
          'Name': 'Chontales',
          'Code': 'CT'
        }, {
          'Name': 'Esteli',
          'Code': 'ES'
        }, {
          'Name': 'Granada',
          'Code': 'GR'
        }, {
          'Name': 'Jinotega',
          'Code': 'JI'
        }, {
          'Name': 'Leon',
          'Code': 'LE'
        }, {
          'Name': 'Madriz',
          'Code': 'MD'
        }, {
          'Name': 'Managua',
          'Code': 'MN'
        }, {
          'Name': 'Masaya',
          'Code': 'MS'
        }, {
          'Name': 'Matagalpa',
          'Code': 'MT'
        }, {
          'Name': 'Nueva Segovia',
          'Code': 'NS'
        }, {
          'Name': 'Rio San Juan',
          'Code': 'SJ'
        }, {
          'Name': 'Rivas',
          'Code': 'RV'
        }]
      }
    }, {
      'Name': 'Niger',
      'Code': 'NER',
      'State': {
        'City': [{
          'Name': 'Agadez',
          'Code': 'AJY'
        }, {
          'Name': 'Diffa',
          'Code': 'DIF'
        }, {
          'Name': 'Dosso',
          'Code': 'DSS'
        }, {
          'Name': 'Maradi',
          'Code': 'MFQ'
        }, {
          'Name': 'Niamey C.U.',
          'Code': 'NIM'
        }, {
          'Name': 'Tahoua',
          'Code': 'THZ'
        }, {
          'Name': 'Tillaberi',
          'Code': 'TIL'
        }, {
          'Name': 'Zinder',
          'Code': 'ZND'
        }]
      }
    }, {
      'Name': 'Nigeria',
      'Code': 'NGA',
      'State': {
        'City': [{
          'Name': 'Abuja',
          'Code': 'ABV'
        }, {
          'Name': 'Ibadan',
          'Code': 'IBA'
        }, {
          'Name': 'Kano',
          'Code': 'KAN'
        }, {
          'Name': 'Lagos',
          'Code': 'LOS'
        }, {
          'Name': 'Ogbomosho',
          'Code': 'OGB'
        }]
      }
    }, {
      'Name': 'Niue',
      'Code': 'NIU'
    }, {
      'Name': 'Norfolk Island',
      'Code': 'NFK'
    }, {
      'Name': 'North Korea',
      'Code': 'PRK',
      'State': {
        'City': [{
          'Name': 'Ch`ongjin',
          'Code': 'CHO'
        }, {
          'Name': 'Haeju',
          'Code': 'HAE'
        }, {
          'Name': 'Hamhung',
          'Code': 'HAM'
        }, {
          'Name': 'Hyesan',
          'Code': 'HYE'
        }, {
          'Name': 'Kaesong',
          'Code': 'KSN'
        }, {
          'Name': 'Kanggye',
          'Code': 'KAN'
        }, {
          'Name': 'Namp`o',
          'Code': 'NAM'
        }, {
          'Name': 'Naseon',
          'Code': 'NAS'
        }, {
          'Name': 'Pyongyang',
          'Code': 'FNJ'
        }, {
          'Name': 'Sariwon',
          'Code': 'SAR'
        }, {
          'Name': 'Sinuiju',
          'Code': 'SII'
        }, {
          'Name': 'Wonsan',
          'Code': 'WON'
        }]
      }
    }, {
      'Name': 'Northern Mariana Islands',
      'Code': 'MNP'
    }, {
      'Name': 'Norway',
      'Code': 'NOR',
      'State': {
        'City': [{
          'Name': 'Akershus',
          'Code': '2'
        }, {
          'Name': 'AustAgder',
          'Code': '9'
        }, {
          'Name': 'Buskerud',
          'Code': '6'
        }, {
          'Name': 'Finnmark',
          'Code': '20'
        }, {
          'Name': 'Hedmark',
          'Code': '4'
        }, {
          'Name': 'Hordaland',
          'Code': '12'
        }, {
          'Name': 'More og Romsdal',
          'Code': '15'
        }, {
          'Name': 'Nordland',
          'Code': '18'
        }, {
          'Name': 'NordTrondelag',
          'Code': '17'
        }, {
          'Name': 'Oppland',
          'Code': '5'
        }, {
          'Name': 'Oslo',
          'Code': '3'
        }, {
          'Name': 'Ostfold',
          'Code': '1'
        }, {
          'Name': 'Rogaland',
          'Code': '11'
        }, {
          'Name': 'Sogn og Fjordane',
          'Code': '14'
        }, {
          'Name': 'SorTrondelag',
          'Code': '16'
        }, {
          'Name': 'Telemark',
          'Code': '8'
        }, {
          'Name': 'Troms',
          'Code': '19'
        }, {
          'Name': 'VestAgder',
          'Code': '10'
        }, {
          'Name': 'Vestfold',
          'Code': '7'
        }]
      }
    }, {
      'Name': 'Oman',
      'Code': 'OMN',
      'State': {
        'City': [{
          'Name': 'AdDakhiliyah',
          'Code': 'DA'
        }, {
          'Name': 'AlBatinah',
          'Code': 'BA'
        }, {
          'Name': 'AlWusta',
          'Code': 'WU'
        }, {
          'Name': 'AshSharqiyah',
          'Code': 'SH'
        }, {
          'Name': 'AzZahirah',
          'Code': 'ZA'
        }, {
          'Name': 'Masqat',
          'Code': 'MA'
        }, {
          'Name': 'Musandam',
          'Code': 'MU'
        }, {
          'Name': 'Zufar',
          'Code': 'ZU'
        }]
      }
    }, {
      'Name': 'Pakistan',
      'Code': 'PAK',
      'State': {
        'City': [{
          'Name': 'Faisalabad',
          'Code': 'LYP'
        }, {
          'Name': 'Gujranwala',
          'Code': 'GUJ'
        }, {
          'Name': 'Hyderabad',
          'Code': 'HDD'
        }, {
          'Name': 'Islamabad',
          'Code': 'ISB'
        }, {
          'Name': 'Karachi',
          'Code': 'KCT'
        }, {
          'Name': 'Lahore',
          'Code': 'LHE'
        }, {
          'Name': 'Multan',
          'Code': 'MUX'
        }, {
          'Name': 'Peshawar',
          'Code': 'PEW'
        }, {
          'Name': 'Rawalpindi',
          'Code': 'RWP'
        }]
      }
    }, {
      'Name': 'Palau',
      'Code': 'PLW'
    }, {
      'Name': 'Palestinian Authority',
      'Code': 'PSE',
      'State': {
        'City': [{
          'Name': 'Gaza Strip',
          'Code': 'GZ'
        }, {
          'Name': 'West Bank',
          'Code': 'WE'
        }]
      }
    }, {
      'Name': 'Panama',
      'Code': 'PAN'
    }, {
      'Name': 'Papua New Guinea',
      'Code': 'PNG',
      'State': {
        'City': [{
          'Name': 'Bougainville',
          'Code': 'BV'
        }, {
          'Name': 'East New Britain',
          'Code': 'EB'
        }, {
          'Name': 'East Sepik',
          'Code': 'ES'
        }, {
          'Name': 'Eastern Highlands',
          'Code': 'EH'
        }, {
          'Name': 'Enga',
          'Code': 'EN'
        }, {
          'Name': 'Gulf',
          'Code': 'GU'
        }, {
          'Name': 'Madang',
          'Code': 'MD'
        }, {
          'Name': 'Manus',
          'Code': 'MN'
        }, {
          'Name': 'Milne Bay',
          'Code': 'MB'
        }, {
          'Name': 'Morobe',
          'Code': 'MR'
        }, {
          'Name': 'New Ireland',
          'Code': 'NI'
        }, {
          'Name': 'Northern',
          'Code': 'NO'
        }, {
          'Name': 'Port Moresby',
          'Code': 'NC'
        }, {
          'Name': 'Sandaun',
          'Code': 'SA'
        }, {
          'Name': 'Simbu',
          'Code': 'SI'
        }, {
          'Name': 'Southern Highlands',
          'Code': 'SH'
        }, {
          'Name': 'West New Britain',
          'Code': 'WB'
        }, {
          'Name': 'Western',
          'Code': 'WE'
        }, {
          'Name': 'Western Highlands',
          'Code': 'WH'
        }]
      }
    }, {
      'Name': 'Paraguay',
      'Code': 'PRY',
      'State': {
        'City': [{
          'Name': 'Alto Paraguay',
          'Code': 'AG'
        }, {
          'Name': 'Alto Parana',
          'Code': 'AN'
        }, {
          'Name': 'Amambay',
          'Code': 'AM'
        }, {
          'Name': 'Asuncion',
          'Code': 'AS'
        }, {
          'Name': 'Boqueron',
          'Code': 'BO'
        }, {
          'Name': 'Caaguazu',
          'Code': 'CG'
        }, {
          'Name': 'Caazapa',
          'Code': 'CZ'
        }, {
          'Name': 'Canindeyu',
          'Code': 'CN'
        }, {
          'Name': 'Central',
          'Code': 'CE'
        }, {
          'Name': 'Concepcion',
          'Code': 'CC'
        }, {
          'Name': 'Cordillera',
          'Code': 'CD'
        }, {
          'Name': 'Guaira',
          'Code': 'GU'
        }, {
          'Name': 'Itapua',
          'Code': 'IT'
        }, {
          'Name': 'Misiones',
          'Code': 'MI'
        }, {
          'Name': 'Neembucu',
          'Code': 'NE'
        }, {
          'Name': 'Paraguari',
          'Code': 'PA'
        }, {
          'Name': 'Presidente Hayes',
          'Code': 'PH'
        }, {
          'Name': 'San Pedro',
          'Code': 'SP'
        }]
      }
    }, {
      'Name': 'Peru',
      'Code': 'PER',
      'State': {
        'City': [{
          'Name': 'Amazonas',
          'Code': 'AM'
        }, {
          'Name': 'Ancash',
          'Code': 'AN'
        }, {
          'Name': 'Apurimac',
          'Code': 'AP'
        }, {
          'Name': 'Arequipa',
          'Code': 'AR'
        }, {
          'Name': 'Ayacucho',
          'Code': 'AY'
        }, {
          'Name': 'Cajamarca',
          'Code': 'CJ'
        }, {
          'Name': 'Callao',
          'Code': 'CL'
        }, {
          'Name': 'Chimbote',
          'Code': 'CHM'
        }, {
          'Name': 'Chincha Alta',
          'Code': 'CHI'
        }, {
          'Name': 'Cusco',
          'Code': 'CU'
        }, {
          'Name': 'Huancavelica',
          'Code': 'HV'
        }, {
          'Name': 'Huanuco',
          'Code': 'HO'
        }, {
          'Name': 'Ica',
          'Code': 'IC'
        }, {
          'Name': 'Juliaca',
          'Code': 'JUL'
        }, {
          'Name': 'Junin',
          'Code': 'JU'
        }, {
          'Name': 'La Libertad',
          'Code': 'LD'
        }, {
          'Name': 'Lambayeque',
          'Code': 'LY'
        }, {
          'Name': 'Lima',
          'Code': 'LI'
        }, {
          'Name': 'Loreto',
          'Code': 'LO'
        }, {
          'Name': 'Madre de Dios',
          'Code': 'MD'
        }, {
          'Name': 'Moquegua',
          'Code': 'MO'
        }, {
          'Name': 'Pasco',
          'Code': 'PA'
        }, {
          'Name': 'Piura',
          'Code': 'PI'
        }, {
          'Name': 'Puno',
          'Code': 'PU'
        }, {
          'Name': 'San Martin',
          'Code': 'SM'
        }, {
          'Name': 'Sullana',
          'Code': 'SUL'
        }, {
          'Name': 'Tacna',
          'Code': 'TA'
        }, {
          'Name': 'Tumbes',
          'Code': 'TU'
        }, {
          'Name': 'Ucayali',
          'Code': 'UC'
        }]
      }
    }, {
      'Name': 'Philippines',
      'Code': 'PHL',
      'State': {
        'City': [{
          'Name': 'Caloocan',
          'Code': 'CAO'
        }, {
          'Name': 'Cebu',
          'Code': 'CEB'
        }, {
          'Name': 'Davao',
          'Code': 'DOR'
        }, {
          'Name': 'Manila',
          'Code': 'MNL'
        }]
      }
    }, {
      'Name': 'Pitcairn Islands',
      'Code': 'PCN'
    }, {
      'Name': 'Poland',
      'Code': 'POL',
      'State': {
        'City': [{
          'Name': 'Biała Podlaska',
          'Code': 'BAP'
        }, {
          'Name': 'Białystok',
          'Code': 'BIA'
        }, {
          'Name': 'Bydgoszcz',
          'Code': 'BZG'
        }, {
          'Name': 'Bytom',
          'Code': 'BYT'
        }, {
          'Name': 'Chełm',
          'Code': 'CHO'
        }, {
          'Name': 'Chorzow',
          'Code': 'CHZ'
        }, {
          'Name': 'Ciechanow',
          'Code': 'CIE'
        }, {
          'Name': 'Dabrowa Gornicza',
          'Code': 'DAB'
        }, {
          'Name': 'Elbląg',
          'Code': 'ELB'
        }, {
          'Name': 'Gdansk',
          'Code': 'GDN'
        }, {
          'Name': 'Gdynia',
          'Code': 'GDY'
        }, {
          'Name': 'Gliwice',
          'Code': 'GWC'
        }, {
          'Name': 'Gorzow Wlkp',
          'Code': 'GOW'
        }, {
          'Name': 'Grudziadz',
          'Code': 'GRU'
        }, {
          'Name': 'Jaworzno',
          'Code': 'JAW'
        }, {
          'Name': 'Jelenia Gora',
          'Code': 'JEG'
        }, {
          'Name': 'Kalisz',
          'Code': 'KAL'
        }, {
          'Name': 'Katowice',
          'Code': 'KTW'
        }, {
          'Name': 'Kielce',
          'Code': 'KLC'
        }, {
          'Name': 'Konin',
          'Code': 'KON'
        }, {
          'Name': 'Koszalin',
          'Code': 'OSZ'
        }, {
          'Name': 'Krakow',
          'Code': 'KRK'
        }, {
          'Name': 'Krosno',
          'Code': 'KRO'
        }, {
          'Name': 'Legnica',
          'Code': 'LEG'
        }, {
          'Name': 'Leszno',
          'Code': 'LEZ'
        }, {
          'Name': 'Lodz',
          'Code': 'LOD'
        }, {
          'Name': 'Lomza',
          'Code': 'QOY'
        }, {
          'Name': 'Lublin',
          'Code': 'LUL'
        }, {
          'Name': 'Mysłowice',
          'Code': 'MYL'
        }, {
          'Name': 'Nowy Sacz',
          'Code': 'NOW'
        }, {
          'Name': 'Olsztyn',
          'Code': 'OLS'
        }, {
          'Name': 'Opole',
          'Code': 'OPO'
        }, {
          'Name': 'Ostrołeka',
          'Code': 'OSS'
        }, {
          'Name': 'Piła',
          'Code': 'PIL'
        }, {
          'Name': 'Piotrkow',
          'Code': 'PIO'
        }, {
          'Name': 'Plock',
          'Code': 'PLO'
        }, {
          'Name': 'Poznan',
          'Code': 'POZ'
        }, {
          'Name': 'Przemysl',
          'Code': 'PRZ'
        }, {
          'Name': 'Radom',
          'Code': 'RDM'
        }, {
          'Name': 'Ruda Sl',
          'Code': 'RDS'
        }, {
          'Name': 'Rzeszow',
          'Code': 'RZE'
        }, {
          'Name': 'Siedlce',
          'Code': 'SDC'
        }, {
          'Name': 'Siemianowice Sl',
          'Code': 'SOW'
        }, {
          'Name': 'Sieradz',
          'Code': 'SIR'
        }, {
          'Name': 'Skierniewice',
          'Code': 'SKI'
        }, {
          'Name': 'Slupsk',
          'Code': 'SLP'
        }, {
          'Name': 'Sopot',
          'Code': 'SOP'
        }, {
          'Name': 'Sosnowiec',
          'Code': 'SWC'
        }, {
          'Name': 'Suwałki',
          'Code': 'SWL'
        }, {
          'Name': 'Swietochłowice',
          'Code': 'SWT'
        }, {
          'Name': 'Swinoujscie',
          'Code': 'SWI'
        }, {
          'Name': 'Szczecin',
          'Code': 'SZZ'
        }, {
          'Name': 'Tarnobrzeg',
          'Code': 'QEP'
        }, {
          'Name': 'Tarnow',
          'Code': 'TAR'
        }, {
          'Name': 'Torun',
          'Code': 'TOR'
        }, {
          'Name': 'Tychy',
          'Code': 'TYY'
        }, {
          'Name': 'Walbrzych',
          'Code': 'WZH'
        }, {
          'Name': 'Warszawa',
          'Code': 'WAW'
        }, {
          'Name': 'Wlocławek',
          'Code': 'WLO'
        }, {
          'Name': 'Wroclaw',
          'Code': 'WRO'
        }, {
          'Name': 'Zabrze',
          'Code': 'ZAB'
        }, {
          'Name': 'Zamosc',
          'Code': 'ZAM'
        }, {
          'Name': 'Zielona Gora',
          'Code': 'IEG'
        }]
      }
    }, {
      'Name': 'Portugal',
      'Code': 'PRT',
      'State': {
        'City': [{
          'Name': 'Alentejo Central',
          'Code': 'ALC'
        }, {
          'Name': 'Alentejo Litoral',
          'Code': 'ALL'
        }, {
          'Name': 'Alto Alentejo',
          'Code': 'AAT'
        }, {
          'Name': 'Alto TrososMontes',
          'Code': 'ATM'
        }, {
          'Name': 'Ave',
          'Code': 'AES'
        }, {
          'Name': 'Baixo Alentejo',
          'Code': 'BAL'
        }, {
          'Name': 'Baixo Mondego',
          'Code': 'BMO'
        }, {
          'Name': 'Baixo Vouga',
          'Code': 'BVO'
        }, {
          'Name': 'Beira Interior Norte',
          'Code': 'BIN'
        }, {
          'Name': 'Beira Interior Sul',
          'Code': 'BIS'
        }, {
          'Name': 'Cavado',
          'Code': 'CAV'
        }, {
          'Name': 'Cova da Beira',
          'Code': 'CLB'
        }, {
          'Name': 'Douro',
          'Code': 'MDR'
        }, {
          'Name': 'Entre Douro e Vouga',
          'Code': 'EDV'
        }, {
          'Name': 'Faro',
          'Code': 'FAO'
        }, {
          'Name': 'Funchal',
          'Code': 'FUN'
        }, {
          'Name': 'Leziria do Tejo',
          'Code': 'LTE'
        }, {
          'Name': 'Lisboa',
          'Code': 'LIS'
        }, {
          'Name': 'Medio Tejo',
          'Code': 'MTE'
        }, {
          'Name': 'MinhoLima',
          'Code': 'MLI'
        }, {
          'Name': 'Oeste',
          'Code': 'OES'
        }, {
          'Name': 'Peninsula de Setubal',
          'Code': 'PSE'
        }, {
          'Name': 'Pinhal Interior Norte',
          'Code': 'PIN'
        }, {
          'Name': 'Pinhal Interior Sul',
          'Code': 'PIS'
        }, {
          'Name': 'Pinhal Litoral',
          'Code': 'PLT'
        }, {
          'Name': 'Ponta Delgada',
          'Code': 'PDL'
        }, {
          'Name': 'Porto',
          'Code': 'VDP'
        }, {
          'Name': 'Serra da Estrela',
          'Code': 'SES'
        }, {
          'Name': 'Tamega',
          'Code': 'TAM'
        }]
      }
    }, {
      'Name': 'Puerto Rico',
      'Code': 'PRI'
    }, {
      'Name': 'Qatar',
      'Code': 'QAT',
      'State': {
        'City': [{
          'Name': 'Ad Dawhah',
          'Code': 'DW'
        }, {
          'Name': 'Al Ghuwariyah',
          'Code': 'GW'
        }, {
          'Name': 'Al Jumaliyah',
          'Code': 'JM'
        }, {
          'Name': 'Al Khawr',
          'Code': 'KR'
        }, {
          'Name': 'Al Wakrah',
          'Code': 'WK'
        }, {
          'Name': 'Ar Rayyan',
          'Code': 'RN'
        }, {
          'Name': 'Jariyan al Batnah',
          'Code': 'JB'
        }, {
          'Name': 'Madinat ach Shamal',
          'Code': 'MS'
        }, {
          'Name': 'Umm Salal',
          'Code': 'UL'
        }]
      }
    }, {
      'Name': 'Reunion',
      'Code': 'REU'
    }, {
      'Name': 'Romania',
      'Code': 'ROU',
      'State': {
        'City': [{
          'Name': 'Alba Iulia',
          'Code': 'AL'
        }, {
          'Name': 'Alexandria',
          'Code': 'AD'
        }, {
          'Name': 'Arad',
          'Code': 'AR'
        }, {
          'Name': 'Bacau',
          'Code': 'BA'
        }, {
          'Name': 'Baia Mare',
          'Code': 'BM'
        }, {
          'Name': 'Bistrita',
          'Code': 'BN'
        }, {
          'Name': 'Botosani',
          'Code': 'BO'
        }, {
          'Name': 'Braila',
          'Code': 'BL'
        }, {
          'Name': 'Brasov',
          'Code': 'BS'
        }, {
          'Name': 'Bucuresti',
          'Code': 'BC'
        }, {
          'Name': 'Buzau',
          'Code': 'BZ'
        }, {
          'Name': 'Calarasi',
          'Code': 'CR'
        }, {
          'Name': 'ClujNapoca',
          'Code': 'CN'
        }, {
          'Name': 'Constanta',
          'Code': 'CT'
        }, {
          'Name': 'Craiova',
          'Code': 'DO'
        }, {
          'Name': 'Deva',
          'Code': 'DE'
        }, {
          'Name': 'DrobetaTurnu Severin',
          'Code': 'DT'
        }, {
          'Name': 'Focsani',
          'Code': 'FO'
        }, {
          'Name': 'Galati',
          'Code': 'GL'
        }, {
          'Name': 'Giurgiu',
          'Code': 'GG'
        }, {
          'Name': 'Iasi',
          'Code': 'IS'
        }, {
          'Name': 'MiercureaCiuc',
          'Code': 'MC'
        }, {
          'Name': 'Oradea',
          'Code': 'OR'
        }, {
          'Name': 'Piatra Neamt',
          'Code': 'PN'
        }, {
          'Name': 'Pitesti',
          'Code': 'PI'
        }, {
          'Name': 'Ploiesti',
          'Code': 'PL'
        }, {
          'Name': 'Resita',
          'Code': 'RE'
        }, {
          'Name': 'Satu Mare',
          'Code': 'SM'
        }, {
          'Name': 'SfantuGheorghe',
          'Code': 'SG'
        }, {
          'Name': 'Sibiu',
          'Code': 'SO'
        }, {
          'Name': 'Slatina',
          'Code': 'ST'
        }, {
          'Name': 'Slobozia',
          'Code': 'SB'
        }, {
          'Name': 'Suceava',
          'Code': 'SU'
        }, {
          'Name': 'Targovişte',
          'Code': 'TA'
        }, {
          'Name': 'Timisoara',
          'Code': 'TI'
        }, {
          'Name': 'Tirgu Mures',
          'Code': 'TM'
        }, {
          'Name': 'TirguJiu',
          'Code': 'TJ'
        }, {
          'Name': 'Tulcea',
          'Code': 'TU'
        }, {
          'Name': 'Vaslui',
          'Code': 'VA'
        }, {
          'Name': 'XRimnicu Vilcea',
          'Code': 'VI'
        }, {
          'Name': 'Zalau',
          'Code': 'ZA'
        }]
      }
    }, {
      'Name': 'Russia',
      'Code': 'RUS',
      'State': {
        'City': [{
          'Name': 'Abakan',
          'Code': 'ABA'
        }, {
          'Name': 'Aginskoye',
          'Code': 'AGI'
        }, {
          'Name': 'Anadyr',
          'Code': 'DYR'
        }, {
          'Name': 'Arkhangelsk',
          'Code': 'ARK'
        }, {
          'Name': 'Astrakhan',
          'Code': 'AST'
        }, {
          'Name': 'Barnaul',
          'Code': 'BAX'
        }, {
          'Name': 'Belgorod',
          'Code': 'BEL'
        }, {
          'Name': 'Birobidzan',
          'Code': 'BBZ'
        }, {
          'Name': 'Blagoveshchensk',
          'Code': 'BQS'
        }, {
          'Name': 'Bryansk',
          'Code': 'BRY'
        }, {
          'Name': 'Chabarovsk',
          'Code': 'COK'
        }, {
          'Name': 'Cheboksary',
          'Code': 'CSY'
        }, {
          'Name': 'Chelyabinsk',
          'Code': 'CHE'
        }, {
          'Name': 'Cherkessk',
          'Code': 'CKS'
        }, {
          'Name': 'Chita',
          'Code': 'CHI'
        }, {
          'Name': 'Elista',
          'Code': 'ESL'
        }, {
          'Name': 'GornoAltajsk',
          'Code': 'GOA'
        }, {
          'Name': 'Grozny',
          'Code': 'GRV'
        }, {
          'Name': 'Irkutsk',
          'Code': 'IKT'
        }, {
          'Name': 'Ivanovo',
          'Code': 'IVO'
        }, {
          'Name': 'Izhevsk',
          'Code': 'IJK'
        }, {
          'Name': 'Jakutsk',
          'Code': 'JAK'
        }, {
          'Name': 'Jaroslavl',
          'Code': 'JAR'
        }, {
          'Name': 'Jekaterinburg',
          'Code': 'JEK'
        }, {
          'Name': 'JuznoSachalinsk',
          'Code': 'JSA'
        }, {
          'Name': 'Kaliningrad',
          'Code': 'KGD'
        }, {
          'Name': 'Kaluga',
          'Code': 'KLF'
        }, {
          'Name': 'Kazan',
          'Code': 'KZN'
        }, {
          'Name': 'Kemerovo',
          'Code': 'KEM'
        }, {
          'Name': 'KhantyMansiysk',
          'Code': 'KHM'
        }, {
          'Name': 'Kirov',
          'Code': 'KIR'
        }, {
          'Name': 'Kostroma',
          'Code': 'KOS'
        }, {
          'Name': 'Krasnodar',
          'Code': 'KRR'
        }, {
          'Name': 'Krasnojarsk',
          'Code': 'KYA'
        }, {
          'Name': 'Kudymkar',
          'Code': 'KUD'
        }, {
          'Name': 'Kurgan',
          'Code': 'KRO'
        }, {
          'Name': 'Kursk',
          'Code': 'URS'
        }, {
          'Name': 'Kyzyl',
          'Code': 'KYZ'
        }, {
          'Name': 'Lipeck',
          'Code': 'LIP'
        }, {
          'Name': 'Magadan',
          'Code': 'MAG'
        }, {
          'Name': 'Magas',
          'Code': 'IN'
        }, {
          'Name': 'Makhachkala',
          'Code': 'MCX'
        }, {
          'Name': 'Maykop',
          'Code': 'MAY'
        }, {
          'Name': 'Moscow',
          'Code': 'MOW'
        }, {
          'Name': 'Murmansk',
          'Code': 'MMK'
        }, {
          'Name': 'Nalchik',
          'Code': 'NAL'
        }, {
          'Name': 'NaryanMar',
          'Code': 'NNM'
        }, {
          'Name': 'Niznij Novgorod',
          'Code': 'GOJ'
        }, {
          'Name': 'Novosibirsk',
          'Code': 'NVS'
        }, {
          'Name': 'Omsk',
          'Code': 'OMS'
        }, {
          'Name': 'Orel',
          'Code': 'ORL'
        }, {
          'Name': 'Orenburg',
          'Code': 'ORE'
        }, {
          'Name': 'Palana',
          'Code': 'PAL'
        }, {
          'Name': 'Penza',
          'Code': 'PNZ'
        }, {
          'Name': 'Perm',
          'Code': 'PER'
        }, {
          'Name': 'PetropavlovskKamchatskiy',
          'Code': 'PKC'
        }, {
          'Name': 'Petrozavodsk',
          'Code': 'PES'
        }, {
          'Name': 'Pskov',
          'Code': 'PSK'
        }, {
          'Name': 'RostovnaDonu',
          'Code': 'ROS'
        }, {
          'Name': 'Ryazan',
          'Code': 'RYA'
        }, {
          'Name': 'Salekhard',
          'Code': 'SLY'
        }, {
          'Name': 'Samara',
          'Code': 'SAM'
        }, {
          'Name': 'Saransk',
          'Code': 'SKX'
        }, {
          'Name': 'Saratov',
          'Code': 'SAR'
        }, {
          'Name': 'Smolensk',
          'Code': 'LNX'
        }, {
          'Name': 'St. Peterburg',
          'Code': 'SPE'
        }, {
          'Name': 'Stavropol',
          'Code': 'STA'
        }, {
          'Name': 'Syktyvkar',
          'Code': 'SCW'
        }, {
          'Name': 'Tambov',
          'Code': 'TAM'
        }, {
          'Name': 'Tomsk',
          'Code': 'TOM'
        }, {
          'Name': 'Tula',
          'Code': 'TUL'
        }, {
          'Name': 'Tver',
          'Code': 'TVE'
        }, {
          'Name': 'Tyumen',
          'Code': 'TYU'
        }, {
          'Name': 'Ufa',
          'Code': 'UFA'
        }, {
          'Name': 'UlanUde',
          'Code': 'UUD'
        }, {
          'Name': 'Uljanovsk',
          'Code': 'ULY'
        }, {
          'Name': 'UstOrdynsky',
          'Code': 'UOB'
        }, {
          'Name': 'Velikij Novgorod',
          'Code': 'VUS'
        }, {
          'Name': 'Vladikavkaz',
          'Code': 'VLA'
        }, {
          'Name': 'Vladimir',
          'Code': 'VMR'
        }, {
          'Name': 'Vladivostok',
          'Code': 'VVO'
        }, {
          'Name': 'Volgograd',
          'Code': 'VOG'
        }, {
          'Name': 'Vologda',
          'Code': 'VLG'
        }, {
          'Name': 'Voronezh',
          'Code': 'VOR'
        }, {
          'Name': 'YoshkarOla',
          'Code': 'YOL'
        }]
      }
    }, {
      'Name': 'Rwanda',
      'Code': 'RWA',
      'State': {
        'City': [{
          'Name': 'Butare',
          'Code': 'BU'
        }, {
          'Name': 'Byumba',
          'Code': 'BY'
        }, {
          'Name': 'Cyangugu',
          'Code': 'CY'
        }, {
          'Name': 'Gikongoro',
          'Code': 'GK'
        }, {
          'Name': 'Gisenyi',
          'Code': 'GS'
        }, {
          'Name': 'Gitarama',
          'Code': 'GT'
        }, {
          'Name': 'Kabuga',
          'Code': 'KA'
        }, {
          'Name': 'Kibungo',
          'Code': 'KG'
        }, {
          'Name': 'Kibuye',
          'Code': 'KY'
        }, {
          'Name': 'KigaliNgali',
          'Code': 'KR'
        }, {
          'Name': 'KigaliVille',
          'Code': 'KV'
        }, {
          'Name': 'Nyanza',
          'Code': 'NY'
        }, {
          'Name': 'Ruhango',
          'Code': 'RH'
        }, {
          'Name': 'Ruhengeri',
          'Code': 'RU'
        }, {
          'Name': 'Rwamagana',
          'Code': 'RW'
        }, {
          'Name': 'Umutara',
          'Code': 'UM'
        }]
      }
    }, {
      'Name': 'Samoa',
      'Code': 'WSM'
    }, {
      'Name': 'San Marino',
      'Code': 'SMR'
    }, {
      'Name': 'Sao Tome and Principe',
      'Code': 'STP'
    }, {
      'Name': 'Saudi Arabia',
      'Code': 'SAU',
      'State': {
        'City': [{
          'Name': 'Abha',
          'Code': 'AHB'
        }, {
          'Name': 'Al Bahah',
          'Code': 'BH'
        }, {
          'Name': 'AlHufuf',
          'Code': 'HFF'
        }, {
          'Name': 'AlJubayl',
          'Code': 'JBI'
        }, {
          'Name': 'AlKharj',
          'Code': 'AKH'
        }, {
          'Name': 'AlMubarraz',
          'Code': 'MBR'
        }, {
          'Name': 'Arar',
          'Code': 'ARA'
        }, {
          'Name': 'At Tarif',
          'Code': 'TAR'
        }, {
          'Name': 'Buraydah',
          'Code': 'BUR'
        }, {
          'Name': 'Dammam',
          'Code': 'DAM'
        }, {
          'Name': 'Hafar alBatin',
          'Code': 'HBT'
        }, {
          'Name': 'Hail',
          'Code': 'HL'
        }, {
          'Name': 'Jiddah',
          'Code': 'JED'
        }, {
          'Name': 'Jizan',
          'Code': 'JZ'
        }, {
          'Name': 'Khamis Mushayt',
          'Code': 'KMX'
        }, {
          'Name': 'Makkah',
          'Code': 'ML'
        }, {
          'Name': 'Medina',
          'Code': 'MED'
        }, {
          'Name': 'Najran',
          'Code': 'NR'
        }, {
          'Name': 'Riyad',
          'Code': 'RD'
        }, {
          'Name': 'Sakaka',
          'Code': 'SAK'
        }, {
          'Name': 'Tabuk',
          'Code': 'TB'
        }, {
          'Name': 'Yanbu alBahr',
          'Code': 'YNB'
        }]
      }
    }, {
      'Name': 'Senegal',
      'Code': 'SEN',
      'State': {
        'City': [{
          'Name': 'Dakar',
          'Code': 'DA'
        }, {
          'Name': 'Diourbel',
          'Code': 'DI'
        }, {
          'Name': 'Fatick',
          'Code': 'FA'
        }, {
          'Name': 'Kaolack',
          'Code': 'KA'
        }, {
          'Name': 'Kolda',
          'Code': 'KO'
        }, {
          'Name': 'Louga',
          'Code': 'LO'
        }, {
          'Name': 'Matam',
          'Code': 'MA'
        }, {
          'Name': 'SaintLouis',
          'Code': 'SL'
        }, {
          'Name': 'Tambacounda',
          'Code': 'TA'
        }, {
          'Name': 'Thies',
          'Code': 'TH'
        }, {
          'Name': 'Ziguinchor',
          'Code': 'ZI'
        }]
      }
    }, {
      'Name': 'Serbia,Montenegro',
      'Code': 'SCG',
      'State': {
        'City': [{
          'Name': 'Beograd',
          'Code': 'BEG'
        }, {
          'Name': 'Kragujevac',
          'Code': 'KGV'
        }, {
          'Name': 'Nis',
          'Code': 'INI'
        }, {
          'Name': 'Novi Sad',
          'Code': 'NVS'
        }, {
          'Name': 'Podgorica',
          'Code': 'POD'
        }, {
          'Name': 'Pristina',
          'Code': 'PRN'
        }, {
          'Name': 'Subotica',
          'Code': 'SUB'
        }, {
          'Name': 'Zemun',
          'Code': 'ZEM'
        }]
      }
    }, {
      'Name': 'Seychelles',
      'Code': 'SYC'
    }, {
      'Name': 'Sierra Leone',
      'Code': 'SLE',
      'State': {
        'City': [{
          'Name': 'Eastern',
          'Code': 'E'
        }, {
          'Name': 'Northern',
          'Code': 'N'
        }, {
          'Name': 'Southern',
          'Code': 'S'
        }, {
          'Name': 'Western',
          'Code': 'W'
        }]
      }
    }, {
      'Name': 'Slovakia',
      'Code': 'SVK',
      'State': {
        'City': [{
          'Name': 'Banskobystricky',
          'Code': 'BBY'
        }, {
          'Name': 'Bratislavsky',
          'Code': 'BTS'
        }, {
          'Name': 'Koricky',
          'Code': 'KOR'
        }, {
          'Name': 'Nitriansky',
          'Code': 'NRA'
        }, {
          'Name': 'Prerovsky',
          'Code': 'POV'
        }, {
          'Name': 'Rilinsky',
          'Code': 'RIL'
        }, {
          'Name': 'Trenriansky',
          'Code': 'TRE'
        }, {
          'Name': 'Trnavsky',
          'Code': 'TNA'
        }]
      }
    }, {
      'Name': 'Slovenia',
      'Code': 'SVN',
      'State': {
        'City': [{
          'Name': 'Dolenjska',
          'Code': 'DLJ'
        }, {
          'Name': 'Gorenjska',
          'Code': 'GSZ'
        }, {
          'Name': 'Goriska',
          'Code': 'GSK'
        }, {
          'Name': 'Koroska',
          'Code': 'KOR'
        }, {
          'Name': 'Notranjskokraska',
          'Code': 'NKR'
        }, {
          'Name': 'Obalnokraska',
          'Code': 'OKR'
        }, {
          'Name': 'Osrednjeslovenska',
          'Code': 'OSR'
        }, {
          'Name': 'Podravska',
          'Code': 'POD'
        }, {
          'Name': 'Pomurska',
          'Code': 'POM'
        }, {
          'Name': 'Savinjska',
          'Code': 'SAV'
        }, {
          'Name': 'Spodnjeposavska',
          'Code': 'SPO'
        }, {
          'Name': 'Zasavska',
          'Code': 'ZAS'
        }]
      }
    }, {
      'Name': 'Solomon Islands',
      'Code': 'SLB',
      'State': {
        'City': [{
          'Name': 'Central Islands',
          'Code': 'CE'
        }, {
          'Name': 'Choiseul',
          'Code': 'CH'
        }, {
          'Name': 'Guadalcanal',
          'Code': 'GC'
        }, {
          'Name': 'Honiara',
          'Code': 'HO'
        }, {
          'Name': 'Isabel',
          'Code': 'IS'
        }, {
          'Name': 'Makira',
          'Code': 'MK'
        }, {
          'Name': 'Malaita',
          'Code': 'ML'
        }, {
          'Name': 'Rennell and Bellona',
          'Code': 'RB'
        }, {
          'Name': 'Temotu',
          'Code': 'TM'
        }, {
          'Name': 'Western',
          'Code': 'WE'
        }]
      }
    }, {
      'Name': 'Somalia',
      'Code': 'SOM'
    }, {
      'Name': 'South Africa',
      'Code': 'ZAF',
      'State': {
        'City': [{
          'Name': 'Barkley East',
          'Code': 'BAE'
        }, {
          'Name': 'Beaufort West',
          'Code': 'BEW'
        }, {
          'Name': 'Bisho',
          'Code': 'BIY'
        }, {
          'Name': 'Bloemfontein',
          'Code': 'BFN'
        }, {
          'Name': 'Bredasdorp',
          'Code': 'BDD'
        }, {
          'Name': 'Bronkhorstspruit',
          'Code': 'BHT'
        }, {
          'Name': 'Cape Town',
          'Code': 'CPT'
        }, {
          'Name': 'De Aar',
          'Code': 'DAA'
        }, {
          'Name': 'Dundee',
          'Code': 'DUN'
        }, {
          'Name': 'Durban',
          'Code': 'DUR'
        }, {
          'Name': 'East London',
          'Code': 'ELS'
        }, {
          'Name': 'George',
          'Code': 'GRJ'
        }, {
          'Name': 'Giyani',
          'Code': 'GIY'
        }, {
          'Name': 'Groblersdal',
          'Code': 'GBD'
        }, {
          'Name': 'Ixopo',
          'Code': 'IXO'
        }, {
          'Name': 'Johannesburg',
          'Code': 'JNB'
        }, {
          'Name': 'Kimberley',
          'Code': 'KIM'
        }, {
          'Name': 'Klerksdorp',
          'Code': 'KXE'
        }, {
          'Name': 'Kuruman',
          'Code': 'KMH'
        }, {
          'Name': 'Ladysmith',
          'Code': 'LAY'
        }, {
          'Name': 'Middelburg',
          'Code': 'MDB'
        }, {
          'Name': 'Mkuze',
          'Code': 'MZQ'
        }, {
          'Name': 'Moorreesburg',
          'Code': 'MOO'
        }, {
          'Name': 'Mount Ayliff',
          'Code': 'MAY'
        }, {
          'Name': 'Nelspruit',
          'Code': 'NLP'
        }, {
          'Name': 'Newcastle',
          'Code': 'NCS'
        }, {
          'Name': 'Nylstroom',
          'Code': 'NYL'
        }, {
          'Name': 'Pietermaritzburg',
          'Code': 'PZB'
        }, {
          'Name': 'Pietersburg',
          'Code': 'PTG'
        }, {
          'Name': 'Port Elizabeth',
          'Code': 'PLZ'
        }, {
          'Name': 'Port Shepstone',
          'Code': 'PSS'
        }, {
          'Name': 'Pretoria',
          'Code': 'PRY'
        }, {
          'Name': 'Queenstown',
          'Code': 'UTW'
        }, {
          'Name': 'Randfontein',
          'Code': 'RFT'
        }, {
          'Name': 'Richards Bay',
          'Code': 'RCB'
        }, {
          'Name': 'Rustenburg',
          'Code': 'RSB'
        }, {
          'Name': 'Sasolburg',
          'Code': 'SAS'
        }, {
          'Name': 'Secunda',
          'Code': 'ZEC'
        }, {
          'Name': 'Springbok',
          'Code': 'SBU'
        }, {
          'Name': 'Thohoyandou',
          'Code': 'THY'
        }, {
          'Name': 'Thulamahashe',
          'Code': 'TLH'
        }, {
          'Name': 'Trompsburg',
          'Code': 'TPB'
        }, {
          'Name': 'Ulundi',
          'Code': 'ULD'
        }, {
          'Name': 'Umtata',
          'Code': 'UTT'
        }, {
          'Name': 'Upington',
          'Code': 'UTN'
        }, {
          'Name': 'Vereeniging',
          'Code': 'VGG'
        }, {
          'Name': 'Vryburg',
          'Code': 'VRU'
        }, {
          'Name': 'Welkom',
          'Code': 'WEL'
        }, {
          'Name': 'Witsieshoek',
          'Code': 'WSH'
        }, {
          'Name': 'Worcester',
          'Code': 'WOR'
        }]
      }
    }, {
      'Name': 'South Georgia and South Sandwich Islands',
      'Code': 'SGS'
    }, {
      'Name': 'Spain',
      'Code': 'ESP',
      'State': {
        'City': [{
          'Name': 'Alava',
          'Code': 'ALA'
        }, {
          'Name': 'Albacete',
          'Code': 'ALB'
        }, {
          'Name': 'Alicante',
          'Code': 'ALC'
        }, {
          'Name': 'Almeria',
          'Code': 'LEI'
        }, {
          'Name': 'Asturias',
          'Code': 'AST'
        }, {
          'Name': 'Avila',
          'Code': 'AVI'
        }, {
          'Name': 'Badajoz',
          'Code': 'BJZ'
        }, {
          'Name': 'Baleares',
          'Code': 'BLR'
        }, {
          'Name': 'Barcelona',
          'Code': 'BCN'
        }, {
          'Name': 'Burgos',
          'Code': 'BUR'
        }, {
          'Name': 'Caceres',
          'Code': 'CCS'
        }, {
          'Name': 'Cadiz',
          'Code': 'CAD'
        }, {
          'Name': 'Castellon',
          'Code': 'CAS'
        }, {
          'Name': 'Cludad Real',
          'Code': 'CIR'
        }, {
          'Name': 'Cordoba',
          'Code': 'ODB'
        }, {
          'Name': 'Cuenca',
          'Code': 'CUE'
        }, {
          'Name': 'Gerona',
          'Code': 'GRO'
        }, {
          'Name': 'Granada',
          'Code': 'GRX'
        }, {
          'Name': 'Guadalajara',
          'Code': 'GUA'
        }, {
          'Name': 'Guipuzcoa',
          'Code': 'GUI'
        }, {
          'Name': 'Huelva',
          'Code': 'HUV'
        }, {
          'Name': 'Huesca',
          'Code': 'HUC'
        }, {
          'Name': 'Jaen',
          'Code': 'JAE'
        }, {
          'Name': 'La Coruna',
          'Code': 'LCG'
        }, {
          'Name': 'La Rioja',
          'Code': 'ARL'
        }, {
          'Name': 'Las Palmas',
          'Code': 'LPA'
        }, {
          'Name': 'Leon',
          'Code': 'LEN'
        }, {
          'Name': 'Lleida',
          'Code': 'LLE'
        }, {
          'Name': 'Madrid',
          'Code': 'MAD'
        }, {
          'Name': 'Malaga',
          'Code': 'AGP'
        }, {
          'Name': 'Murcia',
          'Code': 'MJV'
        }, {
          'Name': 'Navarra',
          'Code': 'NVV'
        }, {
          'Name': 'Orense',
          'Code': 'ORE'
        }, {
          'Name': 'Palencia',
          'Code': 'PAC'
        }, {
          'Name': 'Provincia de Lugo',
          'Code': 'LGO'
        }, {
          'Name': 'Provincia de Pontevedra',
          'Code': 'PEV'
        }, {
          'Name': 'Salamanca',
          'Code': 'SLM'
        }, {
          'Name': 'Santa Cruz de Tenerife',
          'Code': 'SCT'
        }, {
          'Name': 'Santander',
          'Code': 'SDR'
        }, {
          'Name': 'Segovia',
          'Code': 'SEG'
        }, {
          'Name': 'Sevilla',
          'Code': 'SVQ'
        }, {
          'Name': 'Soria',
          'Code': 'SOR'
        }, {
          'Name': 'Tarragona',
          'Code': 'TAR'
        }, {
          'Name': 'Teruel',
          'Code': 'TER'
        }, {
          'Name': 'Toledo',
          'Code': 'TOL'
        }, {
          'Name': 'Valencia',
          'Code': 'VLC'
        }, {
          'Name': 'Valladolid',
          'Code': 'VLL'
        }, {
          'Name': 'Vizcaya',
          'Code': 'VSE'
        }, {
          'Name': 'Zamora',
          'Code': 'ZMR'
        }, {
          'Name': 'Zaragoza',
          'Code': 'ZAZ'
        }]
      }
    }, {
      'Name': 'Sri Lanka',
      'Code': 'LKA',
      'State': {
        'City': [{
          'Name': 'Ampara',
          'Code': 'AMP'
        }, {
          'Name': 'Anuradhapura',
          'Code': 'ADP'
        }, {
          'Name': 'Badulla',
          'Code': 'BAD'
        }, {
          'Name': 'Batticaloa',
          'Code': 'BTC'
        }, {
          'Name': 'Colombo',
          'Code': 'CMB'
        }, {
          'Name': 'Galle',
          'Code': 'GAL'
        }, {
          'Name': 'Gampaha',
          'Code': 'GAM'
        }, {
          'Name': 'Hambantota',
          'Code': 'HBA'
        }, {
          'Name': 'Jaffna',
          'Code': 'JAF'
        }, {
          'Name': 'Kalutara',
          'Code': 'KLT'
        }, {
          'Name': 'Kandy',
          'Code': 'KAN'
        }, {
          'Name': 'Kegalle',
          'Code': 'KEG'
        }, {
          'Name': 'Kilinochchi',
          'Code': 'KIL'
        }, {
          'Name': 'Kurunegala',
          'Code': 'KUR'
        }, {
          'Name': 'Mannar',
          'Code': 'MAN'
        }, {
          'Name': 'Matale',
          'Code': 'MAT'
        }, {
          'Name': 'Matara',
          'Code': 'MAA'
        }, {
          'Name': 'Monaragala',
          'Code': 'MON'
        }, {
          'Name': 'Mullathivu',
          'Code': 'MUL'
        }, {
          'Name': 'Nuwara Eliya',
          'Code': 'NUE'
        }, {
          'Name': 'Polonnaruwa',
          'Code': 'POL'
        }, {
          'Name': 'Puttalam',
          'Code': 'PUT'
        }, {
          'Name': 'Ratnapura',
          'Code': 'RAT'
        }, {
          'Name': 'Trincomalee',
          'Code': 'TRR'
        }, {
          'Name': 'Vavuniya',
          'Code': 'VAV'
        }]
      }
    }, {
      'Name': 'St.Helena',
      'Code': 'SHN'
    }, {
      'Name': 'St.Kitts and Nevis',
      'Code': 'KNA'
    }, {
      'Name': 'St.Lucia',
      'Code': 'LCA'
    }, {
      'Name': 'St.Pierre and Miquelon',
      'Code': 'SPM'
    }, {
      'Name': 'St.Vincent and the Grenadines',
      'Code': 'VCT'
    }, {
      'Name': 'Sudan',
      'Code': 'SDN',
      'State': {
        'City': [{
          'Name': 'Aali anNil',
          'Code': 'ANB'
        }, {
          'Name': 'Al Wasta',
          'Code': 'WDH'
        }, {
          'Name': 'AlIstiwaiyah',
          'Code': 'SIS'
        }, {
          'Name': 'AlKhartum',
          'Code': 'KRT'
        }, {
          'Name': 'AshShamaliyah',
          'Code': 'ASH'
        }, {
          'Name': 'AshSharqiyah',
          'Code': 'SHA'
        }, {
          'Name': 'Bahr alGhazal',
          'Code': 'SBG'
        }, {
          'Name': 'Darfur',
          'Code': 'SDA'
        }, {
          'Name': 'Kurdufan',
          'Code': 'GKU'
        }]
      }
    }, {
      'Name': 'Suriname',
      'Code': 'SUR',
      'State': {
        'City': [{
          'Name': 'Brokopondo',
          'Code': 'BR'
        }, {
          'Name': 'Commewijne',
          'Code': 'CM'
        }, {
          'Name': 'Coronie',
          'Code': 'CR'
        }, {
          'Name': 'Marowijne',
          'Code': 'MA'
        }, {
          'Name': 'Nickerie',
          'Code': 'NI'
        }, {
          'Name': 'Para',
          'Code': 'PA'
        }, {
          'Name': 'Paramaribo',
          'Code': 'PM'
        }, {
          'Name': 'Saramacca',
          'Code': 'SA'
        }, {
          'Name': 'Sipaliwini',
          'Code': 'SI'
        }, {
          'Name': 'Wanica',
          'Code': 'WA'
        }]
      }
    }, {
      'Name': 'Svalbard and Jan Mayen',
      'Code': 'SJM'
    }, {
      'Name': 'Swaziland',
      'Code': 'SWZ'
    }, {
      'Name': 'Sweden',
      'Code': 'SWE',
      'State': {
        'City': [{
          'Name': 'Blekinge',
          'Code': 'K'
        }, {
          'Name': 'Dalarnas',
          'Code': 'DLN'
        }, {
          'Name': 'Gavleborgs',
          'Code': 'X'
        }, {
          'Name': 'Gotlands',
          'Code': 'I'
        }, {
          'Name': 'Hallands',
          'Code': 'N'
        }, {
          'Name': 'Jamtlands',
          'Code': 'Z'
        }, {
          'Name': 'Jonkopings',
          'Code': 'F'
        }, {
          'Name': 'Kalmar',
          'Code': 'H'
        }, {
          'Name': 'Kronobergs',
          'Code': 'G'
        }, {
          'Name': 'Norrbottens',
          'Code': 'BD'
        }, {
          'Name': 'Orebro',
          'Code': 'T'
        }, {
          'Name': 'Skane',
          'Code': 'M'
        }, {
          'Name': 'Sodermanlands',
          'Code': 'D'
        }, {
          'Name': 'Stockholms',
          'Code': 'AB'
        }, {
          'Name': 'Uppsala',
          'Code': 'C'
        }, {
          'Name': 'Ustergotland',
          'Code': 'UGL'
        }, {
          'Name': 'Varmlands',
          'Code': 'S'
        }, {
          'Name': 'Vasterbottens',
          'Code': 'AC'
        }, {
          'Name': 'Vasternorrlands',
          'Code': 'Y'
        }, {
          'Name': 'Vastmanlands',
          'Code': 'U'
        }, {
          'Name': 'Vastra Gotalands',
          'Code': 'O'
        }]
      }
    }, {
      'Name': 'Switzerland',
      'Code': 'CHE',
      'State': {
        'City': [{
          'Name': 'Aargau',
          'Code': 'AG'
        }, {
          'Name': 'Appenzell Ausserrhon',
          'Code': 'AR'
        }, {
          'Name': 'Appenzell Innerrhodn',
          'Code': 'AI'
        }, {
          'Name': 'Basel Landschaft',
          'Code': 'BL'
        }, {
          'Name': 'Basel－Sstadt',
          'Code': 'BS'
        }, {
          'Name': 'Bern',
          'Code': 'BE'
        }, {
          'Name': 'Freiburg',
          'Code': 'FR'
        }, {
          'Name': 'Geneve',
          'Code': 'GE'
        }, {
          'Name': 'Glarus',
          'Code': 'GL'
        }, {
          'Name': 'Graubünden',
          'Code': 'GR'
        }, {
          'Name': 'Jura',
          'Code': 'JU'
        }, {
          'Name': 'Lausanne',
          'Code': 'LA'
        }, {
          'Name': 'Luzern',
          'Code': 'LU'
        }, {
          'Name': 'Neuchatel',
          'Code': 'NE'
        }, {
          'Name': 'Nidwalden',
          'Code': 'NW'
        }, {
          'Name': 'Obwalden',
          'Code': 'OW'
        }, {
          'Name': 'Schaffhausen',
          'Code': 'SH'
        }, {
          'Name': 'Schwyz',
          'Code': 'SZ'
        }, {
          'Name': 'Solothurn',
          'Code': 'SO'
        }, {
          'Name': 'St.Gallen',
          'Code': 'SG'
        }, {
          'Name': 'Thurgau',
          'Code': 'TG'
        }, {
          'Name': 'Ticino',
          'Code': 'TI'
        }, {
          'Name': 'Uri',
          'Code': 'UR'
        }, {
          'Name': 'Vaud',
          'Code': 'VD'
        }, {
          'Name': 'Wallis',
          'Code': 'VS'
        }, {
          'Name': 'Zug',
          'Code': 'ZG'
        }, {
          'Name': 'Zurich',
          'Code': 'ZH'
        }]
      }
    }, {
      'Name': 'Syria',
      'Code': 'SYR',
      'State': {
        'City': [{
          'Name': 'Al Ghab',
          'Code': 'GH'
        }, {
          'Name': 'Al Hasakah',
          'Code': 'HA'
        }, {
          'Name': 'Al Ladhiqiyah',
          'Code': 'LA'
        }, {
          'Name': 'Al Qunaytirah',
          'Code': 'QU'
        }, {
          'Name': 'AlQamishli',
          'Code': 'QA'
        }, {
          'Name': 'Ar Raqqah',
          'Code': 'RQ'
        }, {
          'Name': 'As Suwayda',
          'Code': 'SU'
        }, {
          'Name': 'Dara',
          'Code': 'DA'
        }, {
          'Name': 'Dayr az Zawr',
          'Code': 'DZ'
        }, {
          'Name': 'Halab',
          'Code': 'HL'
        }, {
          'Name': 'Hamah',
          'Code': 'HM'
        }, {
          'Name': 'Hims',
          'Code': 'HI'
        }, {
          'Name': 'Idlib',
          'Code': 'ID'
        }, {
          'Name': 'Madinat Dimashq',
          'Code': 'DI'
        }, {
          'Name': 'Rif Dimashq',
          'Code': 'RD'
        }, {
          'Name': 'Tartus',
          'Code': 'TA'
        }]
      }
    }, {
      'Name': 'Tajikistan',
      'Code': 'TJK',
      'State': {
        'City': [{
          'Name': 'Dushanbe',
          'Code': 'DYU'
        }, {
          'Name': 'Isfara',
          'Code': 'ISF'
        }, {
          'Name': 'Kanibadam',
          'Code': 'KAN'
        }, {
          'Name': 'Khorugh',
          'Code': 'KHO'
        }, {
          'Name': 'Khujand',
          'Code': 'KHU'
        }, {
          'Name': 'Kofarnihon',
          'Code': 'KOF'
        }, {
          'Name': 'Kulob',
          'Code': 'KLB'
        }, {
          'Name': 'KurganTjube',
          'Code': 'KTJ'
        }, {
          'Name': 'Nurek',
          'Code': 'NUR'
        }, {
          'Name': 'Pendzhikent',
          'Code': 'PJK'
        }, {
          'Name': 'Rogun',
          'Code': 'RGU'
        }, {
          'Name': 'Sarband',
          'Code': 'SBA'
        }, {
          'Name': 'Taboshar',
          'Code': 'TBS'
        }, {
          'Name': 'Tursunzade',
          'Code': 'TSZ'
        }, {
          'Name': 'UraTjube',
          'Code': 'UTJ'
        }]
      }
    }, {
      'Name': 'Tanzania',
      'Code': 'TZA',
      'State': {
        'City': [{
          'Name': 'Arusha',
          'Code': 'AR'
        }, {
          'Name': 'Dar es Salaam',
          'Code': 'DS'
        }, {
          'Name': 'Dodoma',
          'Code': 'DO'
        }, {
          'Name': 'Iringa',
          'Code': 'IR'
        }, {
          'Name': 'Kagera',
          'Code': 'KA'
        }, {
          'Name': 'Kaskazini Pemba',
          'Code': 'PN'
        }, {
          'Name': 'Kaskazini Unguja',
          'Code': 'UN'
        }, {
          'Name': 'Kigoma',
          'Code': 'KI'
        }, {
          'Name': 'Kilimanjaro',
          'Code': 'KJ'
        }, {
          'Name': 'Kusini Pemba',
          'Code': 'PS'
        }, {
          'Name': 'Kusini Unguja',
          'Code': 'US'
        }, {
          'Name': 'Lindi',
          'Code': 'LN'
        }, {
          'Name': 'Manyara',
          'Code': 'MY'
        }, {
          'Name': 'Mara',
          'Code': 'MR'
        }, {
          'Name': 'Mbeya',
          'Code': 'MB'
        }, {
          'Name': 'Mjini Magharibi',
          'Code': 'MM'
        }, {
          'Name': 'Morogoro',
          'Code': 'MO'
        }, {
          'Name': 'Mtwara',
          'Code': 'MT'
        }, {
          'Name': 'Mwanza',
          'Code': 'MW'
        }, {
          'Name': 'Pwani',
          'Code': 'PW'
        }, {
          'Name': 'Rukwa',
          'Code': 'RK'
        }, {
          'Name': 'Ruvuma',
          'Code': 'RV'
        }, {
          'Name': 'Shinyanga',
          'Code': 'SH'
        }, {
          'Name': 'Singida',
          'Code': 'SI'
        }, {
          'Name': 'Tabora',
          'Code': 'TB'
        }, {
          'Name': 'Tanga',
          'Code': 'TN'
        }, {
          'Name': 'Zanzibar',
          'Code': 'ZN'
        }]
      }
    }, {
      'Name': 'Thailand',
      'Code': 'THA',
      'State': {
        'City': [{
          'Name': 'Amnat Charoen',
          'Code': '37'
        }, {
          'Name': 'Ang Thong',
          'Code': '15'
        }, {
          'Name': 'Bangkok',
          'Code': '10'
        }, {
          'Name': 'Buri Ram',
          'Code': '31'
        }, {
          'Name': 'Chachoengsao',
          'Code': '24'
        }, {
          'Name': 'Chai Nat',
          'Code': '18'
        }, {
          'Name': 'Chaiyaphum',
          'Code': '36'
        }, {
          'Name': 'Chanthaburi',
          'Code': '22'
        }, {
          'Name': 'Chiang Mai',
          'Code': '50'
        }, {
          'Name': 'Chiang Rai',
          'Code': '57'
        }, {
          'Name': 'Chon Buri',
          'Code': '20'
        }, {
          'Name': 'Chumphon',
          'Code': '86'
        }, {
          'Name': 'Kalasin',
          'Code': '46'
        }, {
          'Name': 'Kamphaeng Phet',
          'Code': '62'
        }, {
          'Name': 'Kanchanaburi',
          'Code': '71'
        }, {
          'Name': 'Khon Kaen',
          'Code': '40'
        }, {
          'Name': 'Krabi',
          'Code': '81'
        }, {
          'Name': 'Lamphun',
          'Code': '51'
        }, {
          'Name': 'Loei',
          'Code': '42'
        }, {
          'Name': 'Lop Buri',
          'Code': '16'
        }, {
          'Name': 'Mae Hong Son',
          'Code': '58'
        }, {
          'Name': 'Maha Sarakham',
          'Code': '44'
        }, {
          'Name': 'Mukdahan',
          'Code': '49'
        }, {
          'Name': 'Nakhon Nayok',
          'Code': '26'
        }, {
          'Name': 'Nakhon Pathom',
          'Code': '73'
        }, {
          'Name': 'Nakhon Phanom',
          'Code': '48'
        }, {
          'Name': 'Nakhon Sawan',
          'Code': '60'
        }, {
          'Name': 'Nakhon Si Thammarat',
          'Code': '80'
        }, {
          'Name': 'Nan',
          'Code': '55'
        }, {
          'Name': 'Narathiwat',
          'Code': '96'
        }, {
          'Name': 'Nong Bua Lamphu',
          'Code': '39'
        }, {
          'Name': 'Nong Khai',
          'Code': '43'
        }, {
          'Name': 'Nonthaburi',
          'Code': '12'
        }, {
          'Name': 'Pathum Thani',
          'Code': '13'
        }, {
          'Name': 'Pattani',
          'Code': '94'
        }, {
          'Name': 'Phangnga',
          'Code': '82'
        }, {
          'Name': 'Phatthalung',
          'Code': '93'
        }, {
          'Name': 'Phayao',
          'Code': '56'
        }, {
          'Name': 'Phetchabun',
          'Code': '76'
        }, {
          'Name': 'Phetchaburi',
          'Code': '78'
        }, {
          'Name': 'Phichit',
          'Code': '66'
        }, {
          'Name': 'Phitsanulok',
          'Code': '65'
        }, {
          'Name': 'Phra Nakhon Si Ayutthaya',
          'Code': '14'
        }, {
          'Name': 'Phrae',
          'Code': '54'
        }, {
          'Name': 'Phuket',
          'Code': '83'
        }, {
          'Name': 'Prachin Buri',
          'Code': '25'
        }, {
          'Name': 'Prachuap Khiri Khan',
          'Code': '77'
        }, {
          'Name': 'Ranong',
          'Code': '85'
        }, {
          'Name': 'Ratchaburi',
          'Code': '70'
        }, {
          'Name': 'Rayong',
          'Code': '21'
        }, {
          'Name': 'Roi Et',
          'Code': '45'
        }, {
          'Name': 'Sa Kaeo',
          'Code': '27'
        }, {
          'Name': 'Sakon Nakhon',
          'Code': '47'
        }, {
          'Name': 'Samut Prakan',
          'Code': '11'
        }, {
          'Name': 'Samut Sakhon',
          'Code': '74'
        }, {
          'Name': 'Samut Songkhram',
          'Code': '75'
        }, {
          'Name': 'Saraburi',
          'Code': '19'
        }, {
          'Name': 'Satun',
          'Code': '91'
        }, {
          'Name': 'Si sa ket',
          'Code': '33'
        }, {
          'Name': 'Sing Buri',
          'Code': '17'
        }, {
          'Name': 'Songkhla',
          'Code': '90'
        }, {
          'Name': 'Sukhothai',
          'Code': '64'
        }, {
          'Name': 'Suphan Buri',
          'Code': '72'
        }, {
          'Name': 'Surat Thani',
          'Code': '84'
        }, {
          'Name': 'Surin',
          'Code': '32'
        }, {
          'Name': 'Tak',
          'Code': '63'
        }, {
          'Name': 'Trang',
          'Code': '92'
        }, {
          'Name': 'Trat',
          'Code': '23'
        }, {
          'Name': 'Ubon Ratchathani',
          'Code': '34'
        }, {
          'Name': 'Udon Thani',
          'Code': '41'
        }, {
          'Name': 'Uthai Thani',
          'Code': '61'
        }, {
          'Name': 'Uttaradit',
          'Code': '53'
        }, {
          'Name': 'Yala',
          'Code': '95'
        }, {
          'Name': 'Yasothon',
          'Code': '35'
        }]
      }
    }, {
      'Name': 'TimorLeste',
      'Code': 'TLS',
      'State': {
        'City': [{
          'Name': 'Aileu',
          'Code': 'AL'
        }, {
          'Name': 'Ainaro',
          'Code': 'AN'
        }, {
          'Name': 'Ambeno',
          'Code': 'AM'
        }, {
          'Name': 'Baucau',
          'Code': 'BA'
        }, {
          'Name': 'Bobonaro',
          'Code': 'BO'
        }, {
          'Name': 'Dili',
          'Code': 'DI'
        }, {
          'Name': 'Ermera',
          'Code': 'ER'
        }, {
          'Name': 'Kovalima',
          'Code': 'KO'
        }, {
          'Name': 'Lautem',
          'Code': 'LA'
        }, {
          'Name': 'Liquica',
          'Code': 'LI'
        }, {
          'Name': 'Manatuto',
          'Code': 'MT'
        }, {
          'Name': 'Manofahi',
          'Code': 'MF'
        }, {
          'Name': 'Viqueque',
          'Code': 'VI'
        }]
      }
    }, {
      'Name': 'Togo',
      'Code': 'TGO',
      'State': {
        'City': [{
          'Name': 'Centre',
          'Code': 'C'
        }, {
          'Name': 'Kara',
          'Code': 'K'
        }, {
          'Name': 'Maritime',
          'Code': 'M'
        }, {
          'Name': 'Plateaux',
          'Code': 'P'
        }, {
          'Name': 'Savanes',
          'Code': 'S'
        }]
      }
    }, {
      'Name': 'Tokelau',
      'Code': 'TKL'
    }, {
      'Name': 'Tonga',
      'Code': 'TON',
      'State': {
        'City': [{
          'Name': 'Eua',
          'Code': 'E'
        }, {
          'Name': 'Haapai',
          'Code': 'H'
        }, {
          'Name': 'Niuas',
          'Code': 'N'
        }, {
          'Name': 'Tongatapu',
          'Code': 'T'
        }, {
          'Name': 'Vavau',
          'Code': 'V'
        }]
      }
    }, {
      'Name': 'Trinidad and Tobago',
      'Code': 'TTO'
    }, {
      'Name': 'Tristan da Cunha',
      'Code': 'TAA'
    }, {
      'Name': 'Tunisia',
      'Code': 'TUN',
      'State': {
        'City': [{
          'Name': 'Ariana',
          'Code': 'AR'
        }, {
          'Name': 'Beja',
          'Code': 'BJ'
        }, {
          'Name': 'Ben Arous',
          'Code': 'BA'
        }, {
          'Name': 'Bizerte',
          'Code': 'BI'
        }, {
          'Name': 'Gabes',
          'Code': 'GB'
        }, {
          'Name': 'Gafsa',
          'Code': 'GF'
        }, {
          'Name': 'Jendouba',
          'Code': 'JE'
        }, {
          'Name': 'Kairouan',
          'Code': 'KR'
        }, {
          'Name': 'Kasserine',
          'Code': 'KS'
        }, {
          'Name': 'Kebili',
          'Code': 'KB'
        }, {
          'Name': 'Le Kef',
          'Code': 'LK'
        }, {
          'Name': 'Mahdia',
          'Code': 'MH'
        }, {
          'Name': 'Manouba',
          'Code': 'MN'
        }, {
          'Name': 'Medenine',
          'Code': 'ME'
        }, {
          'Name': 'Monastir',
          'Code': 'MO'
        }, {
          'Name': 'Nabeul',
          'Code': 'NA'
        }, {
          'Name': 'Sfax',
          'Code': 'SF'
        }, {
          'Name': 'Sidi Bouzid',
          'Code': 'SD'
        }, {
          'Name': 'Siliana',
          'Code': 'SL'
        }, {
          'Name': 'Sousse',
          'Code': 'SO'
        }, {
          'Name': 'Tataouine',
          'Code': 'TA'
        }, {
          'Name': 'Tozeur',
          'Code': 'TO'
        }, {
          'Name': 'Tunis',
          'Code': 'TU'
        }, {
          'Name': 'Zaghouan',
          'Code': 'ZA'
        }]
      }
    }, {
      'Name': 'Turkey',
      'Code': 'TUR',
      'State': {
        'City': [{
          'Name': 'Adana',
          'Code': 'ADA'
        }, {
          'Name': 'Adiyaman',
          'Code': 'ADI'
        }, {
          'Name': 'Afyon',
          'Code': 'AFY'
        }, {
          'Name': 'Agri',
          'Code': 'AGR'
        }, {
          'Name': 'Aksaray',
          'Code': 'AKS'
        }, {
          'Name': 'Amasya',
          'Code': 'AMA'
        }, {
          'Name': 'Ankara',
          'Code': 'ANK'
        }, {
          'Name': 'Antalya',
          'Code': 'ANT'
        }, {
          'Name': 'Ardahan',
          'Code': 'ARD'
        }, {
          'Name': 'Artvin',
          'Code': 'ART'
        }, {
          'Name': 'Aydin',
          'Code': 'AYI'
        }, {
          'Name': 'Balikesir',
          'Code': 'BAL'
        }, {
          'Name': 'Bartin',
          'Code': 'BAR'
        }, {
          'Name': 'Batman',
          'Code': 'BAT'
        }, {
          'Name': 'Bayburt',
          'Code': 'BAY'
        }, {
          'Name': 'Bilecik',
          'Code': 'BIL'
        }, {
          'Name': 'Bingol',
          'Code': 'BIN'
        }, {
          'Name': 'Bitlis',
          'Code': 'BIT'
        }, {
          'Name': 'Bolu',
          'Code': 'BOL'
        }, {
          'Name': 'Burdur',
          'Code': 'BRD'
        }, {
          'Name': 'Bursa',
          'Code': 'BRS'
        }, {
          'Name': 'Canakkale',
          'Code': 'CKL'
        }, {
          'Name': 'Cankiri',
          'Code': 'CKR'
        }, {
          'Name': 'Corum',
          'Code': 'COR'
        }, {
          'Name': 'Denizli',
          'Code': 'DEN'
        }, {
          'Name': 'Diyarbakir',
          'Code': 'DIY'
        }, {
          'Name': 'Edirne',
          'Code': 'EDI'
        }, {
          'Name': 'Elazig',
          'Code': 'ELA'
        }, {
          'Name': 'Erzincan',
          'Code': 'EZC'
        }, {
          'Name': 'Erzurum',
          'Code': 'EZR'
        }, {
          'Name': 'Eskisehir',
          'Code': 'ESK'
        }, {
          'Name': 'Gaziantep',
          'Code': 'GAZ'
        }, {
          'Name': 'Giresun',
          'Code': 'GIR'
        }, {
          'Name': 'Gumushane',
          'Code': 'GMS'
        }, {
          'Name': 'Hakkari',
          'Code': 'HKR'
        }, {
          'Name': 'Hatay',
          'Code': 'HTY'
        }, {
          'Name': 'Icel',
          'Code': 'ICE'
        }, {
          'Name': 'Igdir',
          'Code': 'IGD'
        }, {
          'Name': 'Isparta',
          'Code': 'ISP'
        }, {
          'Name': 'Istanbul',
          'Code': 'IST'
        }, {
          'Name': 'Izmir',
          'Code': 'IZM'
        }, {
          'Name': 'Kahraman Maras',
          'Code': 'KAH'
        }, {
          'Name': 'Karabuk',
          'Code': 'KRB'
        }, {
          'Name': 'Karaman',
          'Code': 'KRM'
        }, {
          'Name': 'Kars',
          'Code': 'KRS'
        }, {
          'Name': 'Kastamonu',
          'Code': 'KAS'
        }, {
          'Name': 'Kayseri',
          'Code': 'KAY'
        }, {
          'Name': 'Kilis',
          'Code': 'KLS'
        }, {
          'Name': 'Kirikkale',
          'Code': 'KRK'
        }, {
          'Name': 'Kirklareli',
          'Code': 'KLR'
        }, {
          'Name': 'Kirsehir',
          'Code': 'KRH'
        }, {
          'Name': 'Kocaeli',
          'Code': 'KOC'
        }, {
          'Name': 'Konya',
          'Code': 'KON'
        }, {
          'Name': 'Kutahya',
          'Code': 'KUT'
        }, {
          'Name': 'Malatya',
          'Code': 'MAL'
        }, {
          'Name': 'Manisa',
          'Code': 'MAN'
        }, {
          'Name': 'Mardin',
          'Code': 'MAR'
        }, {
          'Name': 'Mugla',
          'Code': 'MUG'
        }, {
          'Name': 'Mus',
          'Code': 'MUS'
        }, {
          'Name': 'Nevsehir',
          'Code': 'NEV'
        }, {
          'Name': 'Nigde',
          'Code': 'NIG'
        }, {
          'Name': 'Ordu',
          'Code': 'ORD'
        }, {
          'Name': 'Rize',
          'Code': 'RIZ'
        }, {
          'Name': 'Sakarya',
          'Code': 'SAK'
        }, {
          'Name': 'Samsun',
          'Code': 'SAM'
        }, {
          'Name': 'Siirt',
          'Code': 'SII'
        }, {
          'Name': 'Sinop',
          'Code': 'SIN'
        }, {
          'Name': 'Sirnak',
          'Code': 'SIR'
        }, {
          'Name': 'Sivas',
          'Code': 'SIV'
        }, {
          'Name': 'Tekirdag',
          'Code': 'TEL'
        }, {
          'Name': 'Tokat',
          'Code': 'TOK'
        }, {
          'Name': 'Trabzon',
          'Code': 'TRA'
        }, {
          'Name': 'Tunceli',
          'Code': 'TUN'
        }, {
          'Name': 'Urfa',
          'Code': 'URF'
        }, {
          'Name': 'Usak',
          'Code': 'USK'
        }, {
          'Name': 'Van',
          'Code': 'VAN'
        }, {
          'Name': 'Yozgat',
          'Code': 'YOZ'
        }, {
          'Name': 'Zonguldak',
          'Code': 'ZON'
        }]
      }
    }, {
      'Name': 'Turkmenistan',
      'Code': 'TKM',
      'State': {
        'City': [{
          'Name': 'Ahal',
          'Code': 'A'
        }, {
          'Name': 'Ashgabat',
          'Code': 'ASB'
        }, {
          'Name': 'Balkan',
          'Code': 'B'
        }, {
          'Name': 'Dashoguz',
          'Code': 'D'
        }, {
          'Name': 'Lebap',
          'Code': 'L'
        }, {
          'Name': 'Mary',
          'Code': 'M'
        }, {
          'Name': 'Nebitdag',
          'Code': 'NEB'
        }]
      }
    }, {
      'Name': 'Turks and Caicos Islands',
      'Code': 'TCA'
    }, {
      'Name': 'Tuvalu',
      'Code': 'TUV'
    }, {
      'Name': 'Uganda',
      'Code': 'UGA',
      'State': {
        'City': [{
          'Name': 'Adjumani',
          'Code': 'ADJ'
        }, {
          'Name': 'Apac',
          'Code': 'APC'
        }, {
          'Name': 'Arua',
          'Code': 'ARU'
        }, {
          'Name': 'Bugiri',
          'Code': 'BUG'
        }, {
          'Name': 'Bundibugyo',
          'Code': 'BUN'
        }, {
          'Name': 'Bushenyi',
          'Code': 'BSH'
        }, {
          'Name': 'Busia',
          'Code': 'BUS'
        }, {
          'Name': 'Gulu',
          'Code': 'GUL'
        }, {
          'Name': 'Hoima',
          'Code': 'HOI'
        }, {
          'Name': 'Iganga',
          'Code': 'IGA'
        }, {
          'Name': 'Jinja',
          'Code': 'JIN'
        }, {
          'Name': 'Kabale',
          'Code': 'KBL'
        }, {
          'Name': 'Kabarole',
          'Code': 'KAR'
        }, {
          'Name': 'Kaberamaido',
          'Code': 'KAB'
        }, {
          'Name': 'Kalangala',
          'Code': 'KAL'
        }, {
          'Name': 'Kampala',
          'Code': 'KMP'
        }, {
          'Name': 'Kamuli',
          'Code': 'KML'
        }, {
          'Name': 'Kamwenge',
          'Code': 'KAM'
        }, {
          'Name': 'Kanungu',
          'Code': 'KAN'
        }, {
          'Name': 'Kapchorwa',
          'Code': 'KPC'
        }, {
          'Name': 'Kasese',
          'Code': 'KAS'
        }, {
          'Name': 'Katakwi',
          'Code': 'KTK'
        }, {
          'Name': 'Kayunga',
          'Code': 'KAY'
        }, {
          'Name': 'Kibaale',
          'Code': 'KBA'
        }, {
          'Name': 'Kiboga',
          'Code': 'KIB'
        }, {
          'Name': 'Kisoro',
          'Code': 'KIS'
        }, {
          'Name': 'Kitgum',
          'Code': 'KIT'
        }, {
          'Name': 'Kotido',
          'Code': 'KOT'
        }, {
          'Name': 'Kumi',
          'Code': 'KUM'
        }, {
          'Name': 'Kyenjojo',
          'Code': 'KYE'
        }, {
          'Name': 'Lira',
          'Code': 'LIR'
        }, {
          'Name': 'Luwero',
          'Code': 'LUW'
        }, {
          'Name': 'Masaka',
          'Code': 'MAS'
        }, {
          'Name': 'Masindi',
          'Code': 'MSN'
        }, {
          'Name': 'Mayuge',
          'Code': 'MAY'
        }, {
          'Name': 'Mbale',
          'Code': 'MBA'
        }, {
          'Name': 'Mbarara',
          'Code': 'MBR'
        }, {
          'Name': 'Moroto',
          'Code': 'MRT'
        }, {
          'Name': 'Moyo',
          'Code': 'MOY'
        }, {
          'Name': 'Mpigi',
          'Code': 'MPI'
        }, {
          'Name': 'Mubende',
          'Code': 'MUB'
        }, {
          'Name': 'Mukono',
          'Code': 'MUK'
        }, {
          'Name': 'Nakapiripirit',
          'Code': 'NAK'
        }, {
          'Name': 'Nakasongola',
          'Code': 'NKS'
        }, {
          'Name': 'Nebbi',
          'Code': 'NEB'
        }, {
          'Name': 'Ntungamo',
          'Code': 'NTU'
        }, {
          'Name': 'Pader',
          'Code': 'PAD'
        }, {
          'Name': 'Pallisa',
          'Code': 'PAL'
        }, {
          'Name': 'Rakai',
          'Code': 'RAK'
        }, {
          'Name': 'Rukungiri',
          'Code': 'RUK'
        }, {
          'Name': 'Sembabule',
          'Code': 'SEM'
        }, {
          'Name': 'Sironko',
          'Code': 'SIR'
        }, {
          'Name': 'Soroti',
          'Code': 'SOR'
        }, {
          'Name': 'Tororo',
          'Code': 'TOR'
        }, {
          'Name': 'Wakiso',
          'Code': 'WAK'
        }, {
          'Name': 'Yumbe',
          'Code': 'YUM'
        }]
      }
    }, {
      'Name': 'Ukraine',
      'Code': 'UKR',
      'State': {
        'City': [{
          'Name': 'Cherkasy',
          'Code': '71'
        }, {
          'Name': 'Chernihiv',
          'Code': '74'
        }, {
          'Name': 'Chernivtsi',
          'Code': '77'
        }, {
          'Name': 'Dnipropetrovsk',
          'Code': '12'
        }, {
          'Name': 'Donetsk',
          'Code': '14'
        }, {
          'Name': 'IvanoFrankivsk',
          'Code': '26'
        }, {
          'Name': 'Kharkiv',
          'Code': '63'
        }, {
          'Name': 'Khersonsrka',
          'Code': '65'
        }, {
          'Name': 'Khmelnytsky',
          'Code': '68'
        }, {
          'Name': 'Kirovohrad',
          'Code': '35'
        }, {
          'Name': 'Kyiv',
          'Code': '30'
        }, {
          'Name': 'Luhansk',
          'Code': '9'
        }, {
          'Name': 'Lviv',
          'Code': '46'
        }, {
          'Name': 'Mykolayiv',
          'Code': '48'
        }, {
          'Name': 'Odessa',
          'Code': '51'
        }, {
          'Name': 'Poltava',
          'Code': '53'
        }, {
          'Name': 'Respublika Krym',
          'Code': '43'
        }, {
          'Name': 'Rivne',
          'Code': '56'
        }, {
          'Name': 'Sumy',
          'Code': '59'
        }, {
          'Name': 'Ternopil',
          'Code': '61'
        }, {
          'Name': 'Vinnytsya',
          'Code': '5'
        }, {
          'Name': 'Volyn',
          'Code': '7'
        }, {
          'Name': 'Zakarpatska',
          'Code': '21'
        }, {
          'Name': 'Zaporizhzhya',
          'Code': '23'
        }, {
          'Name': 'Zhytomyr',
          'Code': '18'
        }]
      }
    }, {
      'Name': 'United Arab Emirates',
      'Code': 'ARE',
      'State': {
        'City': [{
          'Name': 'Abu Dhabi',
          'Code': 'AZ'
        }, {
          'Name': 'Al l`Ayn',
          'Code': 'AL'
        }, {
          'Name': 'Ash Shariqah',
          'Code': 'SH'
        }, {
          'Name': 'Dubai',
          'Code': 'DU'
        }]
      }
    }, {
      'Name': 'United Kingdom',
      'Code': 'GBR',
      'State': [{
        'Name': 'England',
        'Code': 'ENG',
        'City': [{
          'Name': 'Bath',
          'Code': 'BAS'
        }, {
          'Name': 'Birmingham',
          'Code': 'BIR'
        }, {
          'Name': 'Bradford',
          'Code': 'BRD'
        }, {
          'Name': 'Brighton & Hove',
          'Code': 'BNH'
        }, {
          'Name': 'Bristol',
          'Code': 'BST'
        }, {
          'Name': 'Cambridge',
          'Code': 'CAM'
        }, {
          'Name': 'Canterbury',
          'Code': 'CNG'
        }, {
          'Name': 'Carlisle',
          'Code': 'CAX'
        }, {
          'Name': 'Chester',
          'Code': 'CEG'
        }, {
          'Name': 'Chichester',
          'Code': 'CST'
        }, {
          'Name': 'Coventry',
          'Code': 'COV'
        }, {
          'Name': 'Derby',
          'Code': 'DER'
        }, {
          'Name': 'Durham',
          'Code': 'DUR'
        }, {
          'Name': 'Ely',
          'Code': 'ELY'
        }, {
          'Name': 'Exeter',
          'Code': 'EXE'
        }, {
          'Name': 'Gloucester',
          'Code': 'GLO'
        }, {
          'Name': 'Hereford',
          'Code': 'HAF'
        }, {
          'Name': 'Kingston upon Hull',
          'Code': 'KUH'
        }, {
          'Name': 'Lancaster',
          'Code': 'LAN'
        }, {
          'Name': 'Leeds',
          'Code': 'LDS'
        }, {
          'Name': 'Leicester',
          'Code': 'LCE'
        }, {
          'Name': 'Lichfield',
          'Code': 'LHF'
        }, {
          'Name': 'Lincoln',
          'Code': 'LCN'
        }, {
          'Name': 'Liverpool',
          'Code': 'LIV'
        }, {
          'Name': 'London',
          'Code': 'LND'
        }, {
          'Name': 'Manchester',
          'Code': 'MAN'
        }, {
          'Name': 'Newcastle',
          'Code': 'NCL'
        }, {
          'Name': 'Norwich',
          'Code': 'NRW'
        }, {
          'Name': 'Nottingham',
          'Code': 'NGM'
        }, {
          'Name': 'Oxford',
          'Code': 'OXF'
        }, {
          'Name': 'Peterborough',
          'Code': 'PTE'
        }, {
          'Name': 'Plymouth',
          'Code': 'PLY'
        }, {
          'Name': 'Portsmouth',
          'Code': 'POR'
        }, {
          'Name': 'Preston',
          'Code': 'PRE'
        }, {
          'Name': 'Ripon',
          'Code': 'RIP'
        }, {
          'Name': 'Saint Albans',
          'Code': 'TBL'
        }, {
          'Name': 'Salford',
          'Code': 'SLF'
        }, {
          'Name': 'Salisbury',
          'Code': 'SLS'
        }, {
          'Name': 'Sheffield',
          'Code': 'SHE'
        }, {
          'Name': 'Southampton',
          'Code': 'STH'
        }, {
          'Name': 'StokeonTrent',
          'Code': 'SOT'
        }, {
          'Name': 'Sunderland',
          'Code': 'SUN'
        }, {
          'Name': 'Truro',
          'Code': 'TRU'
        }, {
          'Name': 'Wakefield',
          'Code': 'WKF'
        }, {
          'Name': 'Wells',
          'Code': 'WLS'
        }, {
          'Name': 'Winchester',
          'Code': 'WNE'
        }, {
          'Name': 'Wolverhampton',
          'Code': 'WOV'
        }, {
          'Name': 'Worcester',
          'Code': 'WOR'
        }, {
          'Name': 'York',
          'Code': 'YOR'
        }]
      }, {
        'Name': 'Northern Ireland',
        'Code': 'NIR',
        'City': [{
          'Name': 'Belfast',
          'Code': 'BFS'
        }, {
          'Name': 'Derry',
          'Code': 'DRY'
        }, {
          'Name': 'Lisburn',
          'Code': 'LSB'
        }, {
          'Name': 'Newry',
          'Code': 'NYM'
        }]
      }, {
        'Name': 'Scotland',
        'Code': 'SCT',
        'City': [{
          'Name': 'Aberdeen',
          'Code': 'ABD'
        }, {
          'Name': 'Dundee',
          'Code': 'DND'
        }, {
          'Name': 'Edinburgh',
          'Code': 'EDH'
        }, {
          'Name': 'Glasgow',
          'Code': 'GLG'
        }, {
          'Name': 'Inverness',
          'Code': 'INV'
        }, {
          'Name': 'Stirling',
          'Code': 'STG'
        }]
      }, {
        'Name': 'Wales',
        'Code': 'WLS',
        'City': [{
          'Name': 'Bangor',
          'Code': 'BAN'
        }, {
          'Name': 'Cardiff',
          'Code': 'CDF'
        }, {
          'Name': 'Newport',
          'Code': 'NWP'
        }, {
          'Name': 'Swansea',
          'Code': 'SWA'
        }]
      }]
    }, {
      'Name': 'United States',
      'Code': 'USA',
      'State': [{
        'Name': 'Alabama',
        'Code': 'AL',
        'City': [{
          'Name': 'Birmingham',
          'Code': 'BHM'
        }, {
          'Name': 'Mobile',
          'Code': 'MOB'
        }, {
          'Name': 'Montgomery',
          'Code': 'MGM'
        }]
      }, {
        'Name': 'Alaska',
        'Code': 'AK',
        'City': [{
          'Name': 'Anchorage',
          'Code': 'ANC'
        }, {
          'Name': 'Fairbanks',
          'Code': 'FAI'
        }, {
          'Name': 'Juneau',
          'Code': 'JNU'
        }]
      }, {
        'Name': 'Arizona',
        'Code': 'AZ',
        'City': [{
          'Name': 'Glendale',
          'Code': 'GDA'
        }, {
          'Name': 'Mesa',
          'Code': 'MQA'
        }, {
          'Name': 'Phoenix',
          'Code': 'PHX'
        }, {
          'Name': 'Scottsdale',
          'Code': 'STZ'
        }, {
          'Name': 'Tempe',
          'Code': 'TPE'
        }, {
          'Name': 'Tucson',
          'Code': 'TUC'
        }, {
          'Name': 'Yuma',
          'Code': 'YUM'
        }]
      }, {
        'Name': 'Arkansas',
        'Code': 'AR',
        'City': [{
          'Name': 'Fayetteville',
          'Code': 'FYV'
        }, {
          'Name': 'Fort Smith',
          'Code': 'FSM'
        }, {
          'Name': 'Little Rock',
          'Code': 'LIT'
        }]
      }, {
        'Name': 'California',
        'Code': 'CA',
        'City': [{
          'Name': 'Los Angeles',
          'Code': 'LAX'
        }, {
          'Name': 'San Diego',
          'Code': 'SAN'
        }, {
          'Name': 'San Francisco',
          'Code': 'SFO'
        }, {
          'Name': 'San Jose',
          'Code': 'SJC'
        }]
      }, {
        'Name': 'Colorado',
        'Code': 'CO',
        'City': [{
          'Name': 'Aspen',
          'Code': 'ASE'
        }, {
          'Name': 'Aurora',
          'Code': 'AUX'
        }, {
          'Name': 'Boulder',
          'Code': 'WBU'
        }, {
          'Name': 'Colorado Springs',
          'Code': 'COS'
        }, {
          'Name': 'Denver',
          'Code': 'DEN'
        }, {
          'Name': 'Fort Collins',
          'Code': 'FNL'
        }, {
          'Name': 'Grand Junction',
          'Code': 'GJT'
        }, {
          'Name': 'Vail',
          'Code': 'VAC'
        }]
      }, {
        'Name': 'Connecticut',
        'Code': 'CT',
        'City': [{
          'Name': 'Bridgeport',
          'Code': 'BDR'
        }, {
          'Name': 'Darien',
          'Code': 'DAQ'
        }, {
          'Name': 'Greenwich',
          'Code': 'GRH'
        }, {
          'Name': 'Hartford',
          'Code': 'HFD'
        }, {
          'Name': 'Middletown',
          'Code': 'XIN'
        }, {
          'Name': 'New Britain',
          'Code': 'NWT'
        }, {
          'Name': 'New Haven',
          'Code': 'HVN'
        }, {
          'Name': 'Waterbury',
          'Code': 'WAT'
        }, {
          'Name': 'Westport',
          'Code': 'WPT'
        }]
      }, {
        'Name': 'Delaware',
        'Code': 'DE',
        'City': [{
          'Name': 'Dover',
          'Code': 'DOR'
        }, {
          'Name': 'Newark',
          'Code': 'NWK'
        }, {
          'Name': 'Wilmington',
          'Code': 'ILG'
        }]
      }, {
        'Name': 'District of Columbia',
        'Code': 'DC',
        'City': {
          'Name': 'Washington D.C.',
          'Code': 'WAS'
        }
      }, {
        'Name': 'Florida',
        'Code': 'FL',
        'City': [{
          'Name': 'Cape Canaveral',
          'Code': 'CPV'
        }, {
          'Name': 'Fort Lauderdale',
          'Code': 'FLL'
        }, {
          'Name': 'Jacksonville',
          'Code': 'JAX'
        }, {
          'Name': 'Key West',
          'Code': 'EYW'
        }, {
          'Name': 'Miami',
          'Code': 'MIA'
        }, {
          'Name': 'Orlando',
          'Code': 'ORL'
        }, {
          'Name': 'St. Petersburg',
          'Code': 'PIE'
        }, {
          'Name': 'Tallahassee',
          'Code': 'TLH'
        }, {
          'Name': 'Tampa',
          'Code': 'TPA'
        }]
      }, {
        'Name': 'Georgia',
        'Code': 'GA',
        'City': [{
          'Name': 'Atlanta',
          'Code': 'TAT'
        }, {
          'Name': 'Augusta',
          'Code': 'AUT'
        }, {
          'Name': 'Columbus',
          'Code': 'CZX'
        }, {
          'Name': 'Macon',
          'Code': 'MCN'
        }, {
          'Name': 'Savannah',
          'Code': 'SAV'
        }]
      }, {
        'Name': 'Hawaii',
        'Code': 'HI',
        'City': [{
          'Name': 'Hilo',
          'Code': 'ITO'
        }, {
          'Name': 'Honolulu',
          'Code': 'HNL'
        }, {
          'Name': 'Kailua',
          'Code': 'KHH'
        }]
      }, {
        'Name': 'Idaho',
        'Code': 'ID',
        'City': [{
          'Name': 'American Falls',
          'Code': 'YAF'
        }, {
          'Name': 'Blackfoot',
          'Code': 'BLK'
        }, {
          'Name': 'Boise',
          'Code': 'BOI'
        }, {
          'Name': 'Coeur d`Alene',
          'Code': 'COE'
        }, {
          'Name': 'Idaho Falls',
          'Code': 'IDA'
        }, {
          'Name': 'Ketchum',
          'Code': 'QKM'
        }, {
          'Name': 'Lewiston',
          'Code': 'LWS'
        }, {
          'Name': 'Moscow',
          'Code': 'MJL'
        }, {
          'Name': 'Murphy',
          'Code': 'ZMU'
        }, {
          'Name': 'Nampa',
          'Code': 'NPA'
        }, {
          'Name': 'Pocatello',
          'Code': 'PIH'
        }, {
          'Name': 'Sun Valley',
          'Code': 'SVY'
        }]
      }, {
        'Name': 'Illinois',
        'Code': 'IL',
        'City': [{
          'Name': 'Alton',
          'Code': 'ALN'
        }, {
          'Name': 'Aurora',
          'Code': 'AUZ'
        }, {
          'Name': 'Bloomington',
          'Code': 'BLO'
        }, {
          'Name': 'Carbondale',
          'Code': 'MDH'
        }, {
          'Name': 'Centralia',
          'Code': 'CRA'
        }, {
          'Name': 'ChampaignUrbana',
          'Code': 'CMI'
        }, {
          'Name': 'Chicago',
          'Code': 'CHI'
        }, {
          'Name': 'Danville',
          'Code': 'DVI'
        }, {
          'Name': 'De Kalb',
          'Code': 'DEK'
        }, {
          'Name': 'Decatur',
          'Code': 'DEC'
        }, {
          'Name': 'East St Louis',
          'Code': 'ESL'
        }, {
          'Name': 'Galesburg',
          'Code': 'GSU'
        }, {
          'Name': 'Normal',
          'Code': 'NOM'
        }, {
          'Name': 'Peoria',
          'Code': 'PLA'
        }, {
          'Name': 'Rock Island',
          'Code': 'RKI'
        }, {
          'Name': 'Rockford',
          'Code': 'RFD'
        }, {
          'Name': 'Springfield',
          'Code': 'SPI'
        }, {
          'Name': 'Waukegan',
          'Code': 'UGN'
        }]
      }, {
        'Name': 'Indiana',
        'Code': 'IN',
        'City': [{
          'Name': 'Evansville',
          'Code': 'EVV'
        }, {
          'Name': 'Fort Wayne',
          'Code': 'FWA'
        }, {
          'Name': 'Indianapolis',
          'Code': 'IND'
        }]
      }, {
        'Name': 'Iowa',
        'Code': 'IA',
        'City': [{
          'Name': 'Cedar Rapids',
          'Code': 'CID'
        }, {
          'Name': 'Davenport',
          'Code': 'DVN'
        }, {
          'Name': 'Des Moines',
          'Code': 'DSM'
        }]
      }, {
        'Name': 'Kansas',
        'Code': 'KS',
        'City': [{
          'Name': 'Abilene',
          'Code': 'ABZ'
        }, {
          'Name': 'Hutchinson',
          'Code': 'HCH'
        }, {
          'Name': 'Kansas City',
          'Code': 'KCK'
        }, {
          'Name': 'Lawrence',
          'Code': 'LWC'
        }, {
          'Name': 'Leavenworth',
          'Code': 'XIA'
        }, {
          'Name': 'Manhattan',
          'Code': 'MHK'
        }, {
          'Name': 'Overland Park',
          'Code': 'OVL'
        }, {
          'Name': 'Topeka',
          'Code': 'TOP'
        }, {
          'Name': 'Wichita',
          'Code': 'ICT'
        }]
      }, {
        'Name': 'Kentucky',
        'Code': 'KY',
        'City': [{
          'Name': 'Lexington',
          'Code': 'LEX'
        }, {
          'Name': 'Louisville',
          'Code': 'LUI'
        }, {
          'Name': 'Owensboro',
          'Code': 'OWB'
        }]
      }, {
        'Name': 'Louisiana',
        'Code': 'LA',
        'City': [{
          'Name': 'Baton Rouge',
          'Code': 'BTR'
        }, {
          'Name': 'New Orleans',
          'Code': 'MSY'
        }, {
          'Name': 'Shreveport',
          'Code': 'SHV'
        }]
      }, {
        'Name': 'Maine',
        'Code': 'ME',
        'City': [{
          'Name': 'Bangor',
          'Code': 'BNQ'
        }, {
          'Name': 'Lewiston',
          'Code': 'QLW'
        }, {
          'Name': 'Portland',
          'Code': 'POL'
        }]
      }, {
        'Name': 'Maryland',
        'Code': 'MD',
        'City': [{
          'Name': 'Balitmore',
          'Code': 'BAL'
        }, {
          'Name': 'Gaithersburg',
          'Code': 'GAI'
        }, {
          'Name': 'Rockville',
          'Code': 'RKV'
        }]
      }, {
        'Name': 'Massachusetts',
        'Code': 'MA',
        'City': [{
          'Name': 'Boston',
          'Code': 'BZD'
        }, {
          'Name': 'Springfield',
          'Code': 'SFY'
        }, {
          'Name': 'Worcester',
          'Code': 'ORH'
        }]
      }, {
        'Name': 'Michigan',
        'Code': 'MI',
        'City': [{
          'Name': 'Ann Arbor',
          'Code': 'ARB'
        }, {
          'Name': 'Battle Creek',
          'Code': 'BTL'
        }, {
          'Name': 'Bay City',
          'Code': 'BCY'
        }, {
          'Name': 'Dearborn',
          'Code': 'DEO'
        }, {
          'Name': 'Detroit',
          'Code': 'DET'
        }, {
          'Name': 'Flint',
          'Code': 'FNT'
        }, {
          'Name': 'Grand Rapids',
          'Code': 'GRR'
        }, {
          'Name': 'Kalamazoo',
          'Code': 'AZO'
        }, {
          'Name': 'Lansing',
          'Code': 'LAN'
        }, {
          'Name': 'Muskegon',
          'Code': 'MKG'
        }, {
          'Name': 'Pontiac',
          'Code': 'PTK'
        }, {
          'Name': 'Port Huron',
          'Code': 'PHN'
        }, {
          'Name': 'Saginaw',
          'Code': 'SGM'
        }, {
          'Name': 'Sault Ste Marie',
          'Code': 'SSM'
        }, {
          'Name': 'Warren',
          'Code': 'WAM'
        }, {
          'Name': 'Wyandotte',
          'Code': 'WYD'
        }]
      }, {
        'Name': 'Minnesota',
        'Code': 'MN',
        'City': [{
          'Name': 'Minneapolis',
          'Code': 'MES'
        }, {
          'Name': 'Rochester',
          'Code': 'RST'
        }, {
          'Name': 'Saint Paul',
          'Code': 'STP'
        }]
      }, {
        'Name': 'Mississippi',
        'Code': 'MS',
        'City': [{
          'Name': 'Biloxi',
          'Code': 'BIX'
        }, {
          'Name': 'Greenville',
          'Code': 'GLH'
        }, {
          'Name': 'Gulfport',
          'Code': 'GPT'
        }, {
          'Name': 'Hattiesburg',
          'Code': 'HBG'
        }, {
          'Name': 'Jackson',
          'Code': 'JAN'
        }, {
          'Name': 'Meridian',
          'Code': 'MEI'
        }, {
          'Name': 'Vicksburg',
          'Code': 'VKS'
        }]
      }, {
        'Name': 'Missouri',
        'Code': 'MO',
        'City': [{
          'Name': 'Columbia',
          'Code': 'COV'
        }, {
          'Name': 'Jefferson City',
          'Code': 'JEF'
        }, {
          'Name': 'Kansas City',
          'Code': 'MKC'
        }, {
          'Name': 'Sanit Louis',
          'Code': 'STL'
        }, {
          'Name': 'Springfield',
          'Code': 'SGF'
        }]
      }, {
        'Name': 'Montana',
        'Code': 'MT',
        'City': [{
          'Name': 'Billings',
          'Code': 'BGS'
        }, {
          'Name': 'Great Falls',
          'Code': 'GTF'
        }, {
          'Name': 'Missoula',
          'Code': 'MSO'
        }]
      }, {
        'Name': 'Nebraska',
        'Code': 'NE',
        'City': [{
          'Name': 'Bellevue',
          'Code': 'XDE'
        }, {
          'Name': 'Lincoln',
          'Code': 'LNK'
        }, {
          'Name': 'Omaha',
          'Code': 'OMA'
        }]
      }, {
        'Name': 'Nevada',
        'Code': 'NV',
        'City': [{
          'Name': 'Carson City',
          'Code': 'CSN'
        }, {
          'Name': 'Elko',
          'Code': 'EKO'
        }, {
          'Name': 'Henderson',
          'Code': 'HNZ'
        }, {
          'Name': 'Las Vegas',
          'Code': 'LAS'
        }, {
          'Name': 'North Las Vegas',
          'Code': 'NVS'
        }, {
          'Name': 'Reno',
          'Code': 'RNO'
        }, {
          'Name': 'Sparks',
          'Code': 'SPK'
        }, {
          'Name': 'Virginia City',
          'Code': 'VGI'
        }]
      }, {
        'Name': 'New Hampshire',
        'Code': 'NH',
        'City': [{
          'Name': 'Concord',
          'Code': 'CON'
        }, {
          'Name': 'Manchester',
          'Code': 'MHT'
        }, {
          'Name': 'Nashua',
          'Code': 'ASH'
        }]
      }, {
        'Name': 'New Jersey',
        'Code': 'NJ',
        'City': [{
          'Name': 'Jersey City',
          'Code': 'JEC'
        }, {
          'Name': 'Newark',
          'Code': 'NRK'
        }, {
          'Name': 'Paterson',
          'Code': 'PAT'
        }]
      }, {
        'Name': 'New Mexico',
        'Code': 'NM',
        'City': [{
          'Name': 'Albuquerque',
          'Code': 'ABQ'
        }, {
          'Name': 'Las Cruces',
          'Code': 'LRU'
        }, {
          'Name': 'Roswell',
          'Code': 'ROW'
        }, {
          'Name': 'Santa Fe',
          'Code': 'SAF'
        }]
      }, {
        'Name': 'New York',
        'Code': 'NY',
        'City': [{
          'Name': 'Buffalo',
          'Code': 'FFO'
        }, {
          'Name': 'New York',
          'Code': 'QEE'
        }, {
          'Name': 'Rochester',
          'Code': 'ROC'
        }]
      }, {
        'Name': 'North Carolina',
        'Code': 'NC',
        'City': [{
          'Name': 'Asheville',
          'Code': 'AEV'
        }, {
          'Name': 'Chapel Hill',
          'Code': 'CHE'
        }, {
          'Name': 'Charlotte',
          'Code': 'CRQ'
        }, {
          'Name': 'Durham',
          'Code': 'DHH'
        }, {
          'Name': 'Greensboro',
          'Code': 'GBO'
        }, {
          'Name': 'Raleigh',
          'Code': 'RAG'
        }, {
          'Name': 'RaleighDurham',
          'Code': 'RDU'
        }]
      }, {
        'Name': 'North Dakota',
        'Code': 'ND',
        'City': [{
          'Name': 'Bismarck',
          'Code': 'BIS'
        }, {
          'Name': 'Fargo',
          'Code': 'FAR'
        }, {
          'Name': 'Grand Forks',
          'Code': 'GFK'
        }, {
          'Name': 'Minot',
          'Code': 'MOT'
        }]
      }, {
        'Name': 'Ohio',
        'Code': 'OH',
        'City': [{
          'Name': 'Cincinnati',
          'Code': 'CVG'
        }, {
          'Name': 'Cleveland',
          'Code': 'CLE'
        }, {
          'Name': 'Columbus',
          'Code': 'CZX'
        }, {
          'Name': 'Dayton',
          'Code': 'DYT'
        }, {
          'Name': 'Toledo',
          'Code': 'TOL'
        }]
      }, {
        'Name': 'Oklahoma',
        'Code': 'OK',
        'City': [{
          'Name': 'Norman',
          'Code': 'OUN'
        }, {
          'Name': 'Oklahoma City',
          'Code': 'OKC'
        }, {
          'Name': 'Tulsa',
          'Code': 'TUL'
        }]
      }, {
        'Name': 'Oregon',
        'Code': 'OR',
        'City': [{
          'Name': 'Bend',
          'Code': 'BZO'
        }, {
          'Name': 'Coos Bay',
          'Code': 'COB'
        }, {
          'Name': 'Corvallis',
          'Code': 'YCV'
        }, {
          'Name': 'Crater Lake',
          'Code': 'CTR'
        }, {
          'Name': 'Dallas',
          'Code': 'DAC'
        }, {
          'Name': 'Eugene',
          'Code': 'EUG'
        }, {
          'Name': 'Grant`s Pass',
          'Code': 'XFX'
        }, {
          'Name': 'Hood River',
          'Code': 'HDX'
        }, {
          'Name': 'Medford',
          'Code': 'MFR'
        }, {
          'Name': 'Portland',
          'Code': 'PDX'
        }, {
          'Name': 'Salem',
          'Code': 'SLE'
        }, {
          'Name': 'Springfield',
          'Code': 'SPY'
        }, {
          'Name': 'St Helens',
          'Code': 'STH'
        }, {
          'Name': 'The Dalles',
          'Code': 'DLS'
        }, {
          'Name': 'Tillamook',
          'Code': 'TLM'
        }]
      }, {
        'Name': 'Pennsylvania',
        'Code': 'PA',
        'City': [{
          'Name': 'Allentown',
          'Code': 'AEW'
        }, {
          'Name': 'Philadephia',
          'Code': 'PHL'
        }, {
          'Name': 'Pittsburgh',
          'Code': 'PIT'
        }]
      }, {
        'Name': 'Rhode Island',
        'Code': 'RI',
        'City': [{
          'Name': 'Cranston',
          'Code': 'CQH'
        }, {
          'Name': 'Newport',
          'Code': 'NPO'
        }, {
          'Name': 'Pawtucket',
          'Code': 'PAW'
        }, {
          'Name': 'Providence',
          'Code': 'PVD'
        }, {
          'Name': 'Warwick',
          'Code': 'UZO'
        }, {
          'Name': 'Westerly',
          'Code': 'WST'
        }, {
          'Name': 'Woonsocket',
          'Code': 'SFN'
        }]
      }, {
        'Name': 'South Carolina',
        'Code': 'SC',
        'City': [{
          'Name': 'Charleston',
          'Code': 'CHS'
        }, {
          'Name': 'Columbia',
          'Code': 'COV'
        }, {
          'Name': 'North Charleston',
          'Code': 'NTS'
        }]
      }, {
        'Name': 'South Dakota',
        'Code': 'SD',
        'City': [{
          'Name': 'Aberdeen',
          'Code': 'ABK'
        }, {
          'Name': 'Rapid City',
          'Code': 'RAP'
        }, {
          'Name': 'Sioux Falls',
          'Code': 'FSD'
        }]
      }, {
        'Name': 'Tennessee',
        'Code': 'TN',
        'City': [{
          'Name': 'Bristol',
          'Code': 'BSJ'
        }, {
          'Name': 'Chattanooga',
          'Code': 'CHA'
        }, {
          'Name': 'Johnson City',
          'Code': 'JCY'
        }, {
          'Name': 'Kingsport',
          'Code': 'TRI'
        }, {
          'Name': 'Knoxville',
          'Code': 'TYS'
        }, {
          'Name': 'Memphis',
          'Code': 'MEM'
        }, {
          'Name': 'Nashville',
          'Code': 'BNA'
        }, {
          'Name': 'Smyrna',
          'Code': 'MQY'
        }, {
          'Name': 'Spring Hill',
          'Code': 'RGI'
        }, {
          'Name': 'TriCity Area',
          'Code': 'YTC'
        }]
      }, {
        'Name': 'Texas',
        'Code': 'TX',
        'City': [{
          'Name': 'Austin',
          'Code': 'AUS'
        }, {
          'Name': 'Corpus Christi',
          'Code': 'CRP'
        }, {
          'Name': 'Dallas',
          'Code': 'DAL'
        }, {
          'Name': 'El Paso',
          'Code': 'ELP'
        }, {
          'Name': 'Galveston',
          'Code': 'GLS'
        }, {
          'Name': 'Houston',
          'Code': 'HOU'
        }, {
          'Name': 'Laredo',
          'Code': 'LRD'
        }, {
          'Name': 'McAllen',
          'Code': 'TXC'
        }, {
          'Name': 'San Antonio',
          'Code': 'SAT'
        }]
      }, {
        'Name': 'Utah',
        'Code': 'UT',
        'City': [{
          'Name': 'Layton',
          'Code': 'LTJ'
        }, {
          'Name': 'Ogden',
          'Code': 'OGD'
        }, {
          'Name': 'Orem',
          'Code': 'OEU'
        }, {
          'Name': 'Park City',
          'Code': 'PAC'
        }, {
          'Name': 'Provo',
          'Code': 'PVU'
        }, {
          'Name': 'Salt Lake City',
          'Code': 'SLC'
        }, {
          'Name': 'St.George',
          'Code': 'SGU'
        }, {
          'Name': 'West Valley City',
          'Code': 'WVC'
        }]
      }, {
        'Name': 'Vermont',
        'Code': 'VT',
        'City': [{
          'Name': 'Burlington',
          'Code': 'BTV'
        }, {
          'Name': 'Rutland',
          'Code': 'RUT'
        }, {
          'Name': 'South Burlington',
          'Code': 'ZBR'
        }]
      }, {
        'Name': 'Virginia',
        'Code': 'VA',
        'City': [{
          'Name': 'Chesapeake',
          'Code': 'HTW'
        }, {
          'Name': 'Norfolk',
          'Code': 'ORF'
        }, {
          'Name': 'Virginia Beach',
          'Code': 'VAB'
        }]
      }, {
        'Name': 'Washington',
        'Code': 'WA',
        'City': [{
          'Name': 'Seattle',
          'Code': 'SEA'
        }, {
          'Name': 'Spokane',
          'Code': 'GEG'
        }, {
          'Name': 'Tacoma',
          'Code': 'TTW'
        }]
      }, {
        'Name': 'West Virginia',
        'Code': 'WV',
        'City': [{
          'Name': 'Charleston',
          'Code': 'CRW'
        }, {
          'Name': 'Huntington',
          'Code': 'HNU'
        }, {
          'Name': 'Parkersburg',
          'Code': 'PKB'
        }]
      }, {
        'Name': 'Wisconsin',
        'Code': 'WI',
        'City': [{
          'Name': 'Appleton',
          'Code': 'ATW'
        }, {
          'Name': 'Eau Claire',
          'Code': 'EAU'
        }, {
          'Name': 'Green Bay',
          'Code': 'GBK'
        }, {
          'Name': 'Kenosha',
          'Code': 'ENW'
        }, {
          'Name': 'LaCrosse',
          'Code': 'LSE'
        }, {
          'Name': 'Madison',
          'Code': 'QMD'
        }, {
          'Name': 'Manitowoc',
          'Code': 'MTW'
        }, {
          'Name': 'Milwaukee',
          'Code': 'MKE'
        }, {
          'Name': 'Oshkosh',
          'Code': 'OSH'
        }, {
          'Name': 'Racine',
          'Code': 'RAC'
        }, {
          'Name': 'Sheboygan',
          'Code': 'SBM'
        }, {
          'Name': 'Wausau',
          'Code': 'AUW'
        }]
      }, {
        'Name': 'Wyoming',
        'Code': 'WY',
        'City': [{
          'Name': 'Casper',
          'Code': 'CPR'
        }, {
          'Name': 'Cheyenne',
          'Code': 'CYS'
        }, {
          'Name': 'Evanston',
          'Code': 'EVD'
        }, {
          'Name': 'Laramie',
          'Code': 'LAR'
        }, {
          'Name': 'Rock Springs',
          'Code': 'RKS'
        }, {
          'Name': 'Sheridan',
          'Code': 'SHR'
        }]
      }]
    }, {
      'Name': 'United States Minor Outlying Islands',
      'Code': 'UMI'
    }, {
      'Name': 'Uruguay',
      'Code': 'URY',
      'State': {
        'City': [{
          'Name': 'Artigas',
          'Code': 'AR'
        }, {
          'Name': 'Canelones',
          'Code': 'CA'
        }, {
          'Name': 'Cerro Largo',
          'Code': 'CL'
        }, {
          'Name': 'Colonia',
          'Code': 'CO'
        }, {
          'Name': 'Durazno',
          'Code': 'DU'
        }, {
          'Name': 'Flores',
          'Code': 'FS'
        }, {
          'Name': 'Florida',
          'Code': 'FA'
        }, {
          'Name': 'Lavalleja',
          'Code': 'LA'
        }, {
          'Name': 'Maldonado',
          'Code': 'MA'
        }, {
          'Name': 'Montevideo',
          'Code': 'MO'
        }, {
          'Name': 'Paysandu',
          'Code': 'PA'
        }, {
          'Name': 'Rio Negro',
          'Code': 'RN'
        }, {
          'Name': 'Rivera',
          'Code': 'RV'
        }, {
          'Name': 'Rocha',
          'Code': 'RO'
        }, {
          'Name': 'Salto',
          'Code': 'SL'
        }, {
          'Name': 'San Jose',
          'Code': 'SJ'
        }, {
          'Name': 'Soriano',
          'Code': 'SO'
        }, {
          'Name': 'Tacuarembo',
          'Code': 'TAW'
        }, {
          'Name': 'Treinta y Tres',
          'Code': 'TT'
        }]
      }
    }, {
      'Name': 'Uzbekistan',
      'Code': 'UZB',
      'State': {
        'City': [{
          'Name': 'Andijon',
          'Code': 'AN'
        }, {
          'Name': 'Buxoro',
          'Code': 'BU'
        }, {
          'Name': 'Fargona',
          'Code': 'FA'
        }, {
          'Name': 'Jizzax',
          'Code': 'JI'
        }, {
          'Name': 'Namangan',
          'Code': 'NG'
        }, {
          'Name': 'Navoiy',
          'Code': 'NW'
        }, {
          'Name': 'Qasqadaryo',
          'Code': 'QA'
        }, {
          'Name': 'Qoraqalpogiston',
          'Code': 'QR'
        }, {
          'Name': 'Samarqand',
          'Code': 'SA'
        }, {
          'Name': 'Sirdaryo',
          'Code': 'SI'
        }, {
          'Name': 'Surxondaryo',
          'Code': 'SU'
        }, {
          'Name': 'Toshkent',
          'Code': 'TK'
        }, {
          'Name': 'Toshkent Shahri',
          'Code': 'TO'
        }, {
          'Name': 'Xorazm',
          'Code': 'XO'
        }]
      }
    }, {
      'Name': 'Vanuatu',
      'Code': 'VUT',
      'State': {
        'City': [{
          'Name': 'Malampa',
          'Code': 'MA'
        }, {
          'Name': 'Penama',
          'Code': 'PE'
        }, {
          'Name': 'Sanma',
          'Code': 'SA'
        }, {
          'Name': 'Shefa',
          'Code': 'SH'
        }, {
          'Name': 'Tafea',
          'Code': 'TA'
        }, {
          'Name': 'Torba',
          'Code': 'TO'
        }]
      }
    }, {
      'Name': 'Vatican City',
      'Code': 'VAT'
    }, {
      'Name': 'Venezuela',
      'Code': 'VEN',
      'State': {
        'City': [{
          'Name': 'Amazonas',
          'Code': 'Z'
        }, {
          'Name': 'Anzoategui',
          'Code': 'B'
        }, {
          'Name': 'Apure',
          'Code': 'C'
        }, {
          'Name': 'Aragua',
          'Code': 'D'
        }, {
          'Name': 'Barinas',
          'Code': 'E'
        }, {
          'Name': 'Bolivar',
          'Code': 'F'
        }, {
          'Name': 'Carabobo',
          'Code': 'G'
        }, {
          'Name': 'Caracas',
          'Code': 'A'
        }, {
          'Name': 'Cojedes',
          'Code': 'H'
        }, {
          'Name': 'Delta Amacuro',
          'Code': 'Y'
        }, {
          'Name': 'Dependencias Federales',
          'Code': 'W'
        }, {
          'Name': 'Estado Nueva Esparta',
          'Code': 'O'
        }, {
          'Name': 'Falcon',
          'Code': 'I'
        }, {
          'Name': 'Guarico',
          'Code': 'J'
        }, {
          'Name': 'Lara',
          'Code': 'K'
        }, {
          'Name': 'Merida',
          'Code': 'L'
        }, {
          'Name': 'Miranda',
          'Code': 'M'
        }, {
          'Name': 'Monagas',
          'Code': 'N'
        }, {
          'Name': 'Portuguesa',
          'Code': 'P'
        }, {
          'Name': 'Sucre',
          'Code': 'R'
        }, {
          'Name': 'Tachira',
          'Code': 'S'
        }, {
          'Name': 'Trujillo',
          'Code': 'T'
        }, {
          'Name': 'Yaracuy',
          'Code': 'U'
        }, {
          'Name': 'Zulia',
          'Code': 'V'
        }]
      }
    }, {
      'Name': 'Vietnam',
      'Code': 'VNM',
      'State': {
        'City': [{
          'Name': 'Haiphong',
          'Code': 'HP'
        }, {
          'Name': 'Hanoi',
          'Code': 'HI'
        }, {
          'Name': 'Ho Chi Minh City',
          'Code': 'HC'
        }]
      }
    }, {
      'Name': 'Virgin Islands',
      'Code': 'VIR'
    }, {
      'Name': 'Virgin Islands,British',
      'Code': 'VGB'
    }, {
      'Name': 'Wallis and Futuna',
      'Code': 'WLF'
    }, {
      'Name': 'White Russia',
      'Code': 'BLR',
      'State': {
        'City': [{
          'Name': 'Bresckaja',
          'Code': 'BR'
        }, {
          'Name': 'Homelskaja',
          'Code': 'HO'
        }, {
          'Name': 'Hrodzenskaja',
          'Code': 'HR'
        }, {
          'Name': 'Mahileuskaja',
          'Code': 'MA'
        }, {
          'Name': 'Minsk',
          'Code': 'MI'
        }, {
          'Name': 'Vicebskaja',
          'Code': 'VI'
        }]
      }
    }, {
      'Name': 'Yemen',
      'Code': 'YEM',
      'State': {
        'City': [{
          'Name': 'Abyan',
          'Code': 'AB'
        }, {
          'Name': 'Adan',
          'Code': 'AD'
        }, {
          'Name': 'AdDali',
          'Code': 'DA'
        }, {
          'Name': 'AlBayda',
          'Code': 'BA'
        }, {
          'Name': 'AlHudaydah',
          'Code': 'HU'
        }, {
          'Name': 'AlJawf',
          'Code': 'JA'
        }, {
          'Name': 'AlMahrah',
          'Code': 'MR'
        }, {
          'Name': 'AlMahwit',
          'Code': 'MW'
        }, {
          'Name': 'Amran Sana',
          'Code': 'AM'
        }, {
          'Name': 'AshShihr',
          'Code': 'ASR'
        }, {
          'Name': 'Dhamar',
          'Code': 'DH'
        }, {
          'Name': 'Hadramawt',
          'Code': 'HD'
        }, {
          'Name': 'Hajjah',
          'Code': 'HJ'
        }, {
          'Name': 'Ibb',
          'Code': 'IB'
        }, {
          'Name': 'Lahij',
          'Code': 'LA'
        }, {
          'Name': 'Marib',
          'Code': 'MA'
        }, {
          'Name': 'Sadah',
          'Code': 'SD'
        }, {
          'Name': 'Sana',
          'Code': 'SN'
        }, {
          'Name': 'Seiyun',
          'Code': 'GXF'
        }, {
          'Name': 'Shabwah',
          'Code': 'SH'
        }, {
          'Name': 'Taizz',
          'Code': 'TA'
        }]
      }
    }, {
      'Name': 'Zambia',
      'Code': 'ZMB',
      'State': {
        'City': [{
          'Name': 'Central',
          'Code': 'CE'
        }, {
          'Name': 'Copperbelt',
          'Code': 'CB'
        }, {
          'Name': 'Eastern',
          'Code': 'EA'
        }, {
          'Name': 'Luapula',
          'Code': 'LP'
        }, {
          'Name': 'Lusaka',
          'Code': 'LK'
        }, {
          'Name': 'Northern',
          'Code': 'NO'
        }, {
          'Name': 'NorthWestern',
          'Code': 'NW'
        }, {
          'Name': 'Southern',
          'Code': 'SO'
        }, {
          'Name': 'Western',
          'Code': 'WE'
        }]
      }
    }, {
      'Name': 'Zimbabwe',
      'Code': 'ZWE',
      'State': {
        'City': [{
          'Name': 'Bulawayo',
          'Code': 'BU'
        }, {
          'Name': 'Harare',
          'Code': 'HA'
        }, {
          'Name': 'Manicaland',
          'Code': 'ML'
        }, {
          'Name': 'Mashonaland Central',
          'Code': 'MC'
        }, {
          'Name': 'Mashonaland East',
          'Code': 'ME'
        }, {
          'Name': 'Mashonaland West',
          'Code': 'MW'
        }, {
          'Name': 'Masvingo',
          'Code': 'MV'
        }, {
          'Name': 'Matabeleland North',
          'Code': 'MN'
        }, {
          'Name': 'Matabeleland South',
          'Code': 'MS'
        }, {
          'Name': 'Midlands',
          'Code': 'MD'
        }]
      }
    }]
  }
};
exports.default = _default;
});
define('static/json/md5.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MD5 = void 0;

var MD5 = function MD5(string) {
  function RotateLeft(lValue, iShiftBits) {
    return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
  }

  function AddUnsigned(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = lX & 0x80000000;
    lY8 = lY & 0x80000000;
    lX4 = lX & 0x40000000;
    lY4 = lY & 0x40000000;
    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);

    if (lX4 & lY4) {
      return lResult ^ 0x80000000 ^ lX8 ^ lY8;
    }

    if (lX4 | lY4) {
      if (lResult & 0x40000000) {
        return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
      } else {
        return lResult ^ 0x40000000 ^ lX8 ^ lY8;
      }
    } else {
      return lResult ^ lX8 ^ lY8;
    }
  }

  function F(x, y, z) {
    return x & y | ~x & z;
  }

  function G(x, y, z) {
    return x & z | y & ~z;
  }

  function H(x, y, z) {
    return x ^ y ^ z;
  }

  function I(x, y, z) {
    return y ^ (x | ~z);
  }

  function FF(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  ;

  function GG(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  ;

  function HH(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  ;

  function II(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  ;

  function ConvertToWordArray(string) {
    var lWordCount;
    var lMessageLength = string.length;
    var lNumberOfWords_temp1 = lMessageLength + 8;
    var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
    var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    var lWordArray = Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;

    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - lByteCount % 4) / 4;
      lBytePosition = lByteCount % 4 * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
      lByteCount++;
    }

    lWordCount = (lByteCount - lByteCount % 4) / 4;
    lBytePosition = lByteCount % 4 * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  }

  ;

  function WordToHex(lValue) {
    var WordToHexValue = "",
        WordToHexValue_temp = "",
        lByte,
        lCount;

    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = lValue >>> lCount * 8 & 255;
      WordToHexValue_temp = "0" + lByte.toString(16);
      WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }

    return WordToHexValue;
  }

  ;

  function Utf8Encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode(c >> 6 | 192);
        utftext += String.fromCharCode(c & 63 | 128);
      } else {
        utftext += String.fromCharCode(c >> 12 | 224);
        utftext += String.fromCharCode(c >> 6 & 63 | 128);
        utftext += String.fromCharCode(c & 63 | 128);
      }
    }

    return utftext;
  }

  ;
  var x = Array();
  var k, AA, BB, CC, DD, a, b, c, d;
  var S11 = 7,
      S12 = 12,
      S13 = 17,
      S14 = 22;
  var S21 = 5,
      S22 = 9,
      S23 = 14,
      S24 = 20;
  var S31 = 4,
      S32 = 11,
      S33 = 16,
      S34 = 23;
  var S41 = 6,
      S42 = 10,
      S43 = 15,
      S44 = 21;
  string = Utf8Encode(string);
  x = ConvertToWordArray(string);
  a = 0x67452301;
  b = 0xEFCDAB89;
  c = 0x98BADCFE;
  d = 0x10325476;

  for (k = 0; k < x.length; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
    d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
    c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
    b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
    a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
    d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
    c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
    b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
    a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
    d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
    c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
    b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
    a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
    d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
    c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
    b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
    a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
    d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
    c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
    b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
    a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
    d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
    b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
    a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
    d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
    c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
    b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
    a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
    d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
    c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
    b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
    a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
    d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
    c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
    b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
    a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
    d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
    c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
    b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
    a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
    d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
    c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
    b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
    a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
    d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
    c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
    b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
    a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
    d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
    c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
    b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
    a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
    d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
    c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
    b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
    a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
    d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
    c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
    b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
    a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
    d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
    c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
    b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
    a = AddUnsigned(a, AA);
    b = AddUnsigned(b, BB);
    c = AddUnsigned(c, CC);
    d = AddUnsigned(d, DD);
  }

  var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
  return temp.toLowerCase();
};

exports.MD5 = MD5;
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/chooseImage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/chooseImage.js';

define('components/chooseImage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/chooseImage"], {
  "0e8b": function e8b(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("9e63"),
        n = i.n(a);

    for (var o in a) {
      "default" !== o && function (t) {
        i.d(e, t, function () {
          return a[t];
        });
      }(o);
    }

    e["default"] = n.a;
  },
  "9a3c": function a3c(t, e, i) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        n = [];

    i.d(e, "a", function () {
      return a;
    }), i.d(e, "b", function () {
      return n;
    });
  },
  "9e63": function e63(t, e, i) {
    "use strict";

    (function (t, i) {
      function a(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = i, t;
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        data: function data() {
          return {
            animationData: {},
            uploadImg: [],
            listimg: [],
            showAction: !1,
            api_token: ""
          };
        },
        onReady: function onReady() {
          console.log(t(1, " at components\\chooseImage.vue:26"));
        },
        props: ["langth"],
        methods: {
          photo: function photo() {
            var t = this;
            i.showLoading({
              title: ""
            });
            this.uploadImg = [], this.listimg = [], i.getStorage({
              key: "token",
              success: function success(e) {
                t.api_token = e.data;
              }
            }), i.chooseImage({
              count: this.langth - this.listimg.length,
              sizeType: ["original", "compressed"],
              sourceType: ["album"],
              success: function success(e) {
                for (var n = e.tempFilePaths.length, o = 0; o < e.tempFilePaths.length; o++) {
                  var s;
                  t.listimg.push(e.tempFilePaths[o]), i.uploadFile((s = {
                    url: "http://127.0.0.1/newtasks/postfile",
                    filePath: e.tempFilePaths[o],
                    name: "file",
                    formData: {
                      user: "test"
                    }
                  }, a(s, "formData", {
                    api_token: t.api_token
                  }), a(s, "success", function (e) {
                    n++;
                    var i = JSON.parse(e.data);
                    t.uploadImg.push(i.id), o == n - 1 && t.$emit("imgList", {
                      imgList: t.listimg,
                      uploadImg: t.uploadImg
                    });
                  }), s));
                }

                t.showAction = !1;
              }
            });
          },
          shoot: function shoot() {
            var t = this;
            i.showLoading({
              title: ""
            });
            this.uploadImg = [], this.listimg = [], i.getStorage({
              key: "token",
              success: function success(e) {
                t.api_token = e.data;
              }
            }), i.chooseImage({
              count: this.langth - this.listimg.length,
              sizeType: ["original", "compressed"],
              sourceType: ["camera"],
              success: function success(e) {
                for (var n = e.tempFilePaths.length, o = 0; o < e.tempFilePaths.length; o++) {
                  var s;
                  t.listimg.push(e.tempFilePaths[o]), i.uploadFile((s = {
                    url: "http://192.168.101.52/newtasks/postfile",
                    filePath: e.tempFilePaths[o],
                    name: "file",
                    formData: {
                      user: "test"
                    }
                  }, a(s, "formData", {
                    api_token: t.api_token
                  }), a(s, "success", function (e) {
                    n++;
                    var i = JSON.parse(e.data);
                    t.uploadImg.push(i.id), o == n - 1 && t.$emit("imgList", {
                      imgList: t.listimg,
                      uploadImg: t.uploadImg
                    });
                  }), s));
                }

                t.showAction = !1;
              }
            });
          },
          animationShow: function animationShow() {
            this.showAction = !0;
            var t = i.createAnimation({
              duration: 500,
              timingFunction: "ease"
            });
            this.animation = t, t.scale(0, 0).step(), this.animationData = t.export(), setTimeout(function () {
              t.scale(1, 1).step(), this.animationData = t.export();
            }.bind(this), 100);
          },
          animationHide: function animationHide() {
            var t = this,
                e = i.createAnimation({
              duration: 300,
              timingFunction: "ease"
            });
            this.animation = e, e.scale(1, 1).step(), this.animationData = e.export(), e.scale(0, 0).step(), this.animationData = e.export(), setTimeout(function () {
              t.showAction = !1;
            }.bind(this), 300);
          }
        }
      };
      e.default = n;
    }).call(this, i("0de9")["default"], i("6e42")["default"]);
  },
  cb91: function cb91(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("9a3c"),
        n = i("0e8b");

    for (var o in n) {
      "default" !== o && function (t) {
        i.d(e, t, function () {
          return n[t];
        });
      }(o);
    }

    i("ee0b");
    var s = i("2877"),
        u = Object(s["a"])(n["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = u.exports;
  },
  ee0b: function ee0b(t, e, i) {
    "use strict";

    var a = i("f62d"),
        n = i.n(a);
    n.a;
  },
  f62d: function f62d(t, e, i) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/chooseImage-create-component', {
  'components/chooseImage-create-component': function componentsChooseImageCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("cb91"));
  }
}, [['components/chooseImage-create-component']]]);
});
require('components/chooseImage.js');
__wxRoute = 'components/mpvue-citypicker/mpvueCityPicker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mpvue-citypicker/mpvueCityPicker.js';

define('components/mpvue-citypicker/mpvueCityPicker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mpvue-citypicker/mpvueCityPicker"], {
  "12d5": function d5(t, e, i) {},
  "4d1f": function d1f(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("5ca7"),
        u = i("5b15");

    for (var l in u) {
      "default" !== l && function (t) {
        i.d(e, t, function () {
          return u[t];
        });
      }(l);
    }

    i("a0da");
    var n = i("2877"),
        r = Object(n["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = r.exports;
  },
  "5b15": function b15(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("849d"),
        u = i.n(a);

    for (var l in a) {
      "default" !== l && function (t) {
        i.d(e, t, function () {
          return a[t];
        });
      }(l);
    }

    e["default"] = u.a;
  },
  "5ca7": function ca7(t, e, i) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    i.d(e, "a", function () {
      return a;
    }), i.d(e, "b", function () {
      return u;
    });
  },
  "849d": function d(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = n(i("41b7")),
        u = n(i("b076")),
        l = n(i("dd6f"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var r = {
      data: function data() {
        return {
          pickerValue: [0, 0, 0],
          provinceDataList: [],
          cityDataList: [],
          areaDataList: [],
          showPicker: !1
        };
      },
      created: function created() {
        this.init();
      },
      props: {
        pickerValueDefault: {
          type: Array,
          default: function _default() {
            return [0, 0, 0];
          }
        },
        themeColor: String
      },
      watch: {
        pickerValueDefault: function pickerValueDefault() {
          this.init();
        }
      },
      methods: {
        init: function init() {
          this.handPickValueDefault(), this.provinceDataList = a.default, this.cityDataList = u.default[this.pickerValueDefault[0]], this.areaDataList = l.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]], this.pickerValue = this.pickerValueDefault;
        },
        show: function show() {
          var t = this;
          setTimeout(function () {
            t.showPicker = !0;
          }, 0);
        },
        maskClick: function maskClick() {
          this.pickerCancel();
        },
        pickerCancel: function pickerCancel() {
          this.showPicker = !1, this._$emit("onCancel");
        },
        pickerConfirm: function pickerConfirm(t) {
          this.showPicker = !1, this._$emit("onConfirm");
        },
        showPickerView: function showPickerView() {
          this.showPicker = !0;
        },
        handPickValueDefault: function handPickValueDefault() {
          this.pickerValueDefault !== [0, 0, 0] && (this.pickerValueDefault[0] > a.default.length - 1 && (this.pickerValueDefault[0] = a.default.length - 1), this.pickerValueDefault[1] > u.default[this.pickerValueDefault[0]].length - 1 && (this.pickerValueDefault[1] = u.default[this.pickerValueDefault[0]].length - 1), this.pickerValueDefault[2] > l.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length - 1 && (this.pickerValueDefault[2] = l.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length - 1));
        },
        pickerChange: function pickerChange(t) {
          var e = t.mp.detail.value;
          this.pickerValue[0] !== e[0] ? (this.cityDataList = u.default[e[0]], this.areaDataList = l.default[e[0]][0], e[1] = 0, e[2] = 0) : this.pickerValue[1] !== e[1] && (this.areaDataList = l.default[e[0]][e[1]], e[2] = 0), this.pickerValue = e, this._$emit("onChange");
        },
        _$emit: function _$emit(t) {
          var e = {
            label: this._getLabel(),
            value: this.pickerValue,
            cityCode: this._getCityCode()
          };
          this.$emit(t, e);
        },
        _getLabel: function _getLabel() {
          var t = this.provinceDataList[this.pickerValue[0]].label + "-" + this.cityDataList[this.pickerValue[1]].label + "-" + this.areaDataList[this.pickerValue[2]].label;
          return t;
        },
        _getCityCode: function _getCityCode() {
          return this.areaDataList[this.pickerValue[2]].value;
        }
      }
    };
    e.default = r;
  },
  a0da: function a0da(t, e, i) {
    "use strict";

    var a = i("12d5"),
        u = i.n(a);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mpvue-citypicker/mpvueCityPicker-create-component', {
  'components/mpvue-citypicker/mpvueCityPicker-create-component': function componentsMpvueCitypickerMpvueCityPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4d1f"));
  }
}, [['components/mpvue-citypicker/mpvueCityPicker-create-component']]]);
});
require('components/mpvue-citypicker/mpvueCityPicker.js');
__wxRoute = 'components/uni-icon/uni-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-icon/uni-icon.js';

define('components/uni-icon/uni-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-icon/uni-icon"], {
  "11e6": function e6(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("af69"),
        i = e.n(u);

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    t["default"] = i.a;
  },
  "2d52": function d52(n, t, e) {
    "use strict";

    var u = e("69ef"),
        i = e.n(u);
    i.a;
  },
  "69ef": function ef(n, t, e) {},
  "708a": function a(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("8990"),
        i = e("11e6");

    for (var r in i) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(r);
    }

    e("2d52");
    var a = e("2877"),
        o = Object(a["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = o.exports;
  },
  8990: function _(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        i = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return i;
    });
  },
  af69: function af69(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "UniIcon",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = u;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-icon/uni-icon-create-component', {
  'components/uni-icon/uni-icon-create-component': function componentsUniIconUniIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("708a"));
  }
}, [['components/uni-icon/uni-icon-create-component']]]);
});
require('components/uni-icon/uni-icon.js');
__wxRoute = 'components/uni-indexed-list/uni-indexed-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-indexed-list/uni-indexed-list.js';

define('components/uni-indexed-list/uni-indexed-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-indexed-list/uni-indexed-list"], {
  "0d4b": function d4b(t, e, i) {
    "use strict";

    i.r(e);
    var n = i("3acc"),
        s = i.n(n);

    for (var o in n) {
      "default" !== o && function (t) {
        i.d(e, t, function () {
          return n[t];
        });
      }(o);
    }

    e["default"] = s.a;
  },
  "247e": function e(t, _e, i) {
    "use strict";

    var n = function n() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        s = [];

    i.d(_e, "a", function () {
      return n;
    }), i.d(_e, "b", function () {
      return s;
    });
  },
  "3acc": function acc(t, e, i) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;

      var n = function n() {
        return i.e("components/uni-icon/uni-icon").then(i.bind(null, "708a"));
      },
          s = {
        name: "UniIndexedList",
        components: {
          uniIcon: n
        },
        props: {
          options: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          showSelect: {
            type: Boolean,
            default: !1
          }
        },
        data: function data() {
          return {
            lists: [],
            touchmove: !1,
            touchmoveIndex: -1,
            itemHeight: 0,
            winHeight: 0,
            scrollViewId: ""
          };
        },
        created: function created() {
          var e = t.getSystemInfoSync().windowHeight;
          this.itemHeight = e / this.options.length, this.winHeight = e, this.lists = this.options.map(function (t) {
            var e = t.data.map(function (e) {
              var i = {};
              return i["key"] = t.letter, i["name"] = e, i.checked = !!e.checked && e.checked, i;
            });
            return {
              title: t.letter,
              key: t.letter,
              items: e
            };
          });
        },
        methods: {
          touchStart: function touchStart(t) {
            this.touchmove = !0;
            var e = t.touches[0].pageY,
                i = Math.floor(e / this.itemHeight),
                n = this.lists[i];
            n && (this.scrollViewId = "uni-indexed-list-" + n.key, this.touchmoveIndex = i);
          },
          touchMove: function touchMove(t) {
            var e = t.touches[0].pageY,
                i = Math.floor(e / this.itemHeight),
                n = this.lists[i];
            n && (this.scrollViewId = "uni-indexed-list-" + n.key, this.touchmoveIndex = i);
          },
          touchEnd: function touchEnd() {
            this.touchmove = !1, this.touchmoveIndex = -1;
          },
          onClick: function onClick(t, e) {
            var i = this,
                n = {};

            for (var s in this.lists[t].items[e]) {
              n[s] = this.lists[t].items[e][s];
            }

            var o = [];
            this.showSelect && (this.lists[t].items[e].checked = !this.lists[t].items[e].checked, this.lists.forEach(function (t, e) {
              t.items.forEach(function (t, n) {
                if (t.checked) {
                  var s = {};

                  for (var c in i.lists[e].items[n]) {
                    s[c] = i.lists[e].items[n][c];
                  }

                  o.push(s);
                }
              });
            })), this.$emit("click", {
              item: n,
              select: o
            });
          }
        }
      };

      e.default = s;
    }).call(this, i("6e42")["default"]);
  },
  "67d3": function d3(t, e, i) {
    "use strict";

    var n = i("c80d"),
        s = i.n(n);
    s.a;
  },
  a7d8: function a7d8(t, e, i) {
    "use strict";

    i.r(e);
    var n = i("247e"),
        s = i("0d4b");

    for (var o in s) {
      "default" !== o && function (t) {
        i.d(e, t, function () {
          return s[t];
        });
      }(o);
    }

    i("67d3");
    var c = i("2877"),
        u = Object(c["a"])(s["default"], n["a"], n["b"], !1, null, null, null);
    e["default"] = u.exports;
  },
  c80d: function c80d(t, e, i) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-indexed-list/uni-indexed-list-create-component', {
  'components/uni-indexed-list/uni-indexed-list-create-component': function componentsUniIndexedListUniIndexedListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a7d8"));
  }
}, [['components/uni-indexed-list/uni-indexed-list-create-component']]]);
});
require('components/uni-indexed-list/uni-indexed-list.js');
__wxRoute = 'components/uni-richtext';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-richtext.js';

define('components/uni-richtext.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-richtext"], {
  "17c5": function c5(t, e, a) {
    "use strict";

    (function (t, a) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = {
        name: "uni-richtext",
        data: function data() {
          return {
            showMask: !1,
            showPopup: !1,
            showInsertTextPopup: !1,
            fontSizeList: ["14px", "16px", "20px", "28px", "35px"],
            richListIndex: 0,
            textareaDataType: "",
            textareaData: "",
            textareaDataStyle: "padding:10px;font-size:14px;",
            textareaDataColor: "",
            tmpTag: ""
          };
        },
        props: {
          richList: {
            type: Array,
            default: function _default() {
              return [];
            }
          }
        },
        watch: {
          richList: function richList() {
            this.$emit("richList", this.richList);
          },
          textareaDataColor: function textareaDataColor(t, e) {
            this.textareaDataStyle = this.textareaDataStyle.replace(/^color:.*;$/, ""), this.textareaDataStyle += "color:" + t + ";";
          }
        },
        methods: {
          insertRichItem: function insertRichItem(e) {
            var i = this;
            "image" == e ? t.chooseImage({
              count: 1,
              sizeType: ["original", "compressed"],
              sourceType: ["album", "camera"],
              success: function success(e) {
                t.showLoading({
                  mask: !0
                }), t.uploadFile({
                  url: "http://120.78.87.84:8080/conduit/file/uploadFile",
                  filePath: e.tempFilePaths[0],
                  name: "image",
                  success: function success(t) {
                    -1 == i.richListIndex ? i.richList.push({
                      tagType: "image",
                      value: t.data,
                      style: ""
                    }) : i.richList.splice(i.richListIndex + 1, 0, {
                      tagType: "image",
                      value: t.data,
                      style: ""
                    });
                  },
                  complete: function complete() {
                    t.hideLoading(), i.hideInputPopup();
                  }
                });
              }
            }) : "video" == e && t.chooseVideo({
              count: 1,
              sourceType: ["camera", "album"],
              success: function success(e) {
                t.showLoading({
                  mask: !0
                }), t.uploadFile({
                  url: "http://120.78.87.84:8080/conduit/file/uploadFile",
                  filePath: e.tempFilePath,
                  name: "video",
                  success: function success(t) {
                    console.log(a(JSON.stringify(t), " at components\\uni-richtext.vue:145")), -1 == i.richListIndex ? i.richList.push({
                      tagType: "video",
                      value: t.data,
                      style: ""
                    }) : i.richList.splice(i.richListIndex + 1, 0, {
                      tagType: "video",
                      value: t.data,
                      style: ""
                    });
                  },
                  fail: function fail(t) {
                    console.log(a(JSON.stringify(t), " at components\\uni-richtext.vue:161"));
                  },
                  complete: function complete() {
                    t.hideLoading(), i.hideInputPopup();
                  }
                });
              }
            });
          },
          deleteRichItem: function deleteRichItem(t) {
            -1 != t && (this.richList.splice(t, 1), this.hideInputPopup());
          },
          textareaDataCancel: function textareaDataCancel() {
            this.textareaData = "", this.textareaDataColor = "", this.textareaDataStyle = "padding:10px;font-size:14px", this.showInsertTextPopup = !1;
          },
          textareaDataSave: function textareaDataSave() {
            "input" == this.textareaDataType ? -1 == this.richListIndex ? this.richList.push({
              tagType: "p",
              value: this.textareaData,
              style: this.textareaDataStyle
            }) : this.richList.splice(this.richListIndex + 1, 0, {
              tagType: "p",
              value: this.textareaData,
              style: this.textareaDataStyle
            }) : "edit" == this.textareaDataType && (this.richList[this.richListIndex] = {
              tagType: "p",
              value: this.textareaData,
              style: this.textareaDataStyle
            }), this.textareaData = "", this.textareaDataColor = "", this.textareaDataStyle = "padding:10px;font-size:14px", this.showInsertTextPopup = !1;
          },
          toolBarClick: function toolBarClick(e) {
            var a = this;

            switch (e) {
              case "bold":
                -1 != this.textareaDataStyle.indexOf("font-weight:bold;") ? this.textareaDataStyle = this.textareaDataStyle.replace(/font-weight:bold;/, "") : this.textareaDataStyle += "font-weight:bold;";
                break;

              case "italic":
                -1 != this.textareaDataStyle.indexOf("font-style:italic;") ? this.textareaDataStyle = this.textareaDataStyle.replace(/font-style:italic;/, "") : this.textareaDataStyle += "font-style:italic;";
                break;

              case "fontsize":
                t.showActionSheet({
                  itemList: this.fontSizeList,
                  success: function success(t) {
                    var e = a.fontSizeList[t.tapIndex];
                    a.textareaDataStyle = a.textareaDataStyle.replace(/^font-size:.*px;$/, ""), a.textareaDataStyle += "font-size:" + e + ";";
                  }
                });
                break;

              case "alignleft":
                this.textareaDataStyle = this.textareaDataStyle.replace(/^text-align:.*;$/, ""), this.textareaDataStyle += "text-align:left;";
                break;

              case "aligncenter":
                this.textareaDataStyle = this.textareaDataStyle.replace(/^text-align:.*;$/, ""), this.textareaDataStyle += "text-align:center;";
                break;

              case "alignright":
                this.textareaDataStyle = this.textareaDataStyle.replace(/^text-align:.*;$/, ""), this.textareaDataStyle += "text-align:right;";
                break;

              case "underline":
                -1 != this.textareaDataStyle.indexOf("text-decoration: underline;") ? this.textareaDataStyle = this.textareaDataStyle.replace(/text-decoration: underline;/, "") : (this.textareaDataStyle = this.textareaDataStyle.replace(/^text-decoration:.*;$/, ""), this.textareaDataStyle += "text-decoration: underline;");
                break;

              case "strike":
                -1 != this.textareaDataStyle.indexOf("text-decoration: line-through;") ? this.textareaDataStyle = this.textareaDataStyle.replace(/text-decoration: line-through;/, "") : (this.textareaDataStyle = this.textareaDataStyle.replace(/^text-decoration:.*;$/, ""), this.textareaDataStyle += "text-decoration: line-through;");
                break;
            }
          },
          showInsertText: function showInsertText() {
            this.textareaDataType = "input", this.hideInputPopup(), this.showInsertTextPopup = !0;
          },
          showEditText: function showEditText() {
            0 != this.richList.length ? (this.textareaDataType = "edit", this.textareaData = this.tmpTag.value, this.textareaDataStyle = this.tmpTag.style, this.hideInputPopup(), this.showInsertTextPopup = !0) : this.showInsertText();
          },
          hideInputPopup: function hideInputPopup() {
            this.showMask = !1, this.showPopup = !1;
          },
          showInputPopup: function showInputPopup(t, e) {
            this.tmpTag = e, this.richListIndex = t, this.showMask = !0, this.showPopup = !0;
          }
        }
      };
      e.default = i;
    }).call(this, a("6e42")["default"], a("0de9")["default"]);
  },
  "1c7d": function c7d(t, e, a) {
    "use strict";

    var i = a("eaff"),
        s = a.n(i);
    s.a;
  },
  4085: function _(t, e, a) {
    "use strict";

    a.r(e);
    var i = a("6643"),
        s = a("7800");

    for (var n in s) {
      "default" !== n && function (t) {
        a.d(e, t, function () {
          return s[t];
        });
      }(n);
    }

    a("1c7d");
    var r = a("2877"),
        o = Object(r["a"])(s["default"], i["a"], i["b"], !1, null, null, null);
    e["default"] = o.exports;
  },
  6643: function _(t, e, a) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        s = [];

    a.d(e, "a", function () {
      return i;
    }), a.d(e, "b", function () {
      return s;
    });
  },
  7800: function _(t, e, a) {
    "use strict";

    a.r(e);
    var i = a("17c5"),
        s = a.n(i);

    for (var n in i) {
      "default" !== n && function (t) {
        a.d(e, t, function () {
          return i[t];
        });
      }(n);
    }

    e["default"] = s.a;
  },
  eaff: function eaff(t, e, a) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-richtext-create-component', {
  'components/uni-richtext-create-component': function componentsUniRichtextCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4085"));
  }
}, [['components/uni-richtext-create-component']]]);
});
require('components/uni-richtext.js');
__wxRoute = 'components/uni-steps/uni-steps';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-steps/uni-steps.js';

define('components/uni-steps/uni-steps.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-steps/uni-steps"], {
  "7cd7": function cd7(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var u = function u() {
      return e.e("components/uni-icon/uni-icon").then(e.bind(null, "708a"));
    },
        r = {
      name: "UniSteps",
      components: {
        uniIcon: u
      },
      props: {
        direction: {
          type: String,
          default: "row"
        },
        activeColor: {
          type: String,
          default: "#e84148"
        },
        active: {
          type: Number,
          default: 0
        },
        options: {
          type: Array,
          default: function _default() {
            return [];
          }
        }
      },
      data: function data() {
        return {};
      }
    };

    t.default = r;
  },
  "7f05": function f05(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        r = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return r;
    });
  },
  "96c6": function c6(n, t, e) {
    "use strict";

    var u = e("d431"),
        r = e.n(u);
    r.a;
  },
  a433: function a433(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("7cd7"),
        r = e.n(u);

    for (var i in u) {
      "default" !== i && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(i);
    }

    t["default"] = r.a;
  },
  d431: function d431(n, t, e) {},
  ebc0: function ebc0(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("7f05"),
        r = e("a433");

    for (var i in r) {
      "default" !== i && function (n) {
        e.d(t, n, function () {
          return r[n];
        });
      }(i);
    }

    e("96c6");
    var o = e("2877"),
        c = Object(o["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-steps/uni-steps-create-component', {
  'components/uni-steps/uni-steps-create-component': function componentsUniStepsUniStepsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ebc0"));
  }
}, [['components/uni-steps/uni-steps-create-component']]]);
});
require('components/uni-steps/uni-steps.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0367":function(e,t,n){"use strict";n.r(t);var i=n("ad1c"),a=n.n(i);for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);t["default"]=a.a},"0eee":function(e,t,n){"use strict";var i=n("de13"),a=n.n(i);a.a},"888a":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},ad1c:function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("2f62");function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={data:function(){return{page:!1,isfirst:!0,headerPosition:"fixed",headerTop:0,statusTop:0,showHeader:!0,statusHeight:0,current:"",swiper:!0,imgs:["../../static/img/index/index_1.jpg","../../static/img/index/index_2.jpg","../../static/img/index/index_3.jpg"],list:[{id:"0",title:"中国",language:"zh"},{id:"1",title:"English",language:"en"},{id:"2",title:"日本語",language:"jp"},{id:"3",title:"한국어",language:"kor"},{id:"4",title:"Français",language:"fra"},{id:"5",title:"Español",language:"spa"},{id:"6",title:"ภาษาไทย",language:"th"},{id:"7",title:"عربي ،",language:"ara"},{id:"8",title:"русский язык",language:"ru"},{id:"9",title:"Português",language:"pt"},{id:"10",title:"Deutsch",language:"de"},{id:"11",title:"Italiano",language:"it"},{id:"12",title:"Ελληνικά",language:"el"},{id:"13",title:"Nederlands",language:"nl"},{id:"14",title:"Polski",language:"pl"},{id:"15",title:"Български",language:"bul"},{id:"16",title:"Eesti",language:"est"},{id:"17",title:"Dansk",language:"dan"},{id:"18",title:"Suomi",language:"fin"},{id:"19",title:"Česko",language:"cs"},{id:"20",title:"RomânăName",language:"rom"},{id:"21",title:"SlovenskoName",language:"slo"},{id:"22",title:"Svenska",language:"swe"},{id:"23",title:"MagyarName",language:"hu"},{id:"24",title:"ViệtName",language:"vie"}],num:0}},computed:(0,a.mapState)(["hasSkip","language"]),methods:l({},(0,a.mapMutations)(["skipIndex","langIndex"]),{bindSkip:function(){this.skipIndex(),this.swiper=!1,e.getSystemInfo({success:function(e){console.log(i(e.model," at pages\\index\\index.vue:106")),console.log(i(e.pixelRatio," at pages\\index\\index.vue:107")),console.log(i(e.windowWidth," at pages\\index\\index.vue:108")),console.log(i(e.windowHeight," at pages\\index\\index.vue:109")),console.log(i(e.language," at pages\\index\\index.vue:110")),console.log(i(e.version," at pages\\index\\index.vue:111")),console.log(i(e.platform," at pages\\index\\index.vue:112"))}})},radioChange:function(e){this.current=e.detail.value},Confirm:function(){this.langIndex(),e.setStorageSync("lang",this.current),e.reLaunch({url:"../login/login"})},touchstart:function(e){this.clientX=e.changedTouches[0].clientX},touchend:function(t){var n=t.changedTouches[0].clientX;this.clientX>n&&(console.log(i(123," at pages\\index\\index.vue:135")),this.page&&(this.skipIndex(),e.reLaunch({url:"../tabBar/home/home"})))},animationfinish:function(e){var t=e.detail.current,n=this.imgs.length-1;console.log(i(t,n," at pages\\index\\index.vue:148")),t==n&&(this.page=!0)}}),onPageScroll:function(e){},onLoad:function(){console.log(i(this," at pages\\index\\index.vue:161")),this.statusHeight=0,this.statusHeight=plus.navigator.getStatusbarHeight(),this.headerTop=this.statusHeight+"px",e.showModal({title:"提示",content:this.statusHeight,success:function(e){e.confirm?console.log(i("用户点击确定"," at pages\\index\\index.vue:175")):e.cancel&&console.log(i("用户点击取消"," at pages\\index\\index.vue:177"))}}),console.log(i(this.hasSkip," at pages\\index\\index.vue:182")),this.hasSkip&&e.reLaunch({url:"../tabBar/home/home"})}};t.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},de13:function(e,t,n){},ea7e:function(e,t,n){"use strict";n.r(t);var i=n("888a"),a=n("0367");for(var l in a)"default"!==l&&function(e){n.d(t,e,function(){return a[e]})}(l);n("0eee");var o=n("2877"),u=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=u.exports}},[["f51a","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/tabBar/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/home/home.js';

define('pages/tabBar/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/home/home"],{5454:function(t,o,n){"use strict";n.r(o);var i=n("8053"),e=n("6dbf");for(var a in e)"default"!==a&&function(t){n.d(o,t,function(){return e[t]})}(a);n("9e07");var s=n("2877"),c=Object(s["a"])(e["default"],i["a"],i["b"],!1,null,null,null);o["default"]=c.exports},"546f":function(t,o,n){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=e(n("3203"));function e(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{tab:0,homelist:"",showHeader:!0,afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,nVueTitle:null,city:"北京",currentSwiper:0,swiperList:[{id:1,src:"url1",img:"/static/img/1.jpg"},{id:2,src:"url2",img:"/static/img/2.jpg"},{id:3,src:"url3",img:"/static/img/3.jpg"}],categoryList:[{id:1,name:"办公",img:"/static/img/category/1.png"},{id:2,name:"家电",img:"/static/img/category/2.png"},{id:3,name:"服饰",img:"/static/img/category/3.png"},{id:4,name:"日用",img:"/static/img/category/4.png"},{id:5,name:"蔬果",img:"/static/img/category/5.png"},{id:6,name:"运动",img:"/static/img/category/6.png"},{id:7,name:"书籍",img:"/static/img/category/7.png"},{id:8,name:"文具",img:"/static/img/category/8.png"}],Promotion:[],productList:[{goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:1,img:"/static/img/goods/p2.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:2,img:"/static/img/goods/p3.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:3,img:"/static/img/goods/p4.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:4,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:5,img:"/static/img/goods/p6.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:6,img:"/static/img/goods/p7.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:7,img:"/static/img/goods/p8.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:8,img:"/static/img/goods/p9.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:9,img:"/static/img/goods/p10.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"}],loadingText:"正在加载..."}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onReachBottom:function(){t.showToast({title:"触发上拉加载"});var o=this.productList.length;if(o>=40)return this.loadingText="到底了",!1;for(var n=this.productList[o-1].goods_id,i=1;i<=10;i++){var e=n+i,a={goods_id:e,img:"/static/img/goods/p"+(e%10==0?10:e%10)+".jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"};this.productList.push(a)}},onLoad:function(){var o=this;this.$http("/api/index/info",{},"get").then(function(t){o.homelist=t.data.data}),t.getStorage({key:"lang",success:function(o){t.setTabBarItem({index:0,text:i.default[o.data].home}),t.setTabBarItem({index:1,text:i.default[o.data].category}),t.setTabBarItem({index:2,text:i.default[o.data].issue}),t.setTabBarItem({index:3,text:i.default[o.data].cart}),t.setTabBarItem({index:4,text:i.default[o.data].user})}}),this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},methods:{TabItem:function(t){this.tab=t},loadPromotion:function(){for(var t=new Date,o=t.getFullYear(),n=t.getMonth()+1,i=t.getDate(),e=o+"/"+n+"/"+i+" 23:59:59",a=[{title:"整点秒杀",ad:"整天秒杀专区",img:"/static/img/s1.jpg",countdown:!1},{title:"限时抢购",ad:"每天23点上线",img:"/static/img/s2.jpg",countdown:e}],s=0;s<a.length;s++){var c=a[s];if(c.countdown){var g="00",d="00",r="00",u=new Date,m=new Date(e);if(!(u>=m)){var l=parseInt((m.getTime()-u.getTime())/1e3);g=parseInt(l/3600),d=parseInt(l%3600/60),r=l%60,g=g<10?"0"+g:g,d=d<10?"0"+d:d,r=r<10?"0"+r:r}a[s].countdown={h:g,m:d,s:r}}}this.Promotion=a},Timer:function(){var t=this;setInterval(function(){if(t.Promotion.length>0)for(var o=0;o<t.Promotion.length;o++){var n=t.Promotion[o];n.countdown&&(0==n.countdown.h&&0==n.countdown.m&&0==n.countdown.s||(n.countdown.s>0?(n.countdown.s--,n.countdown.s=n.countdown.s<10?"0"+n.countdown.s:n.countdown.s):n.countdown.m>0?(n.countdown.m--,n.countdown.m=n.countdown.m<10?"0"+n.countdown.m:n.countdown.m,n.countdown.s=59):n.countdown.h>0&&(n.countdown.h--,n.countdown.h=n.countdown.h<10?"0"+n.countdown.h:n.countdown.h,n.countdown.m=59,n.countdown.s=59),t.Promotion[o].countdown=n.countdown))}},1e3)},toMsg:function(){t.navigateTo({url:"../../msg/msg"})},toSearch:function(){t.navigateTo({url:"../../search/search"}),t.showToast({title:"建议跳转到新页面做搜索功能"})},toSwiper:function(o){t.showToast({title:o.src,icon:"none"})},toCategory:function(o){t.setStorageSync("catName",o.name),t.navigateTo({url:"../../goods/goods-list/goods-list?cid="+o.id+"&name="+o.name})},toRecommend:function(o){t.showToast({title:"店铺"+o.recommend_id,icon:"none"}),t.navigateTo({url:o.url})},toPromotion:function(o){t.showToast({title:o.title,icon:"none"})},toGoods:function(o){t.showToast({title:"商品"+o.recommend_id,icon:"none"}),t.navigateTo({url:o.url})},swiperChange:function(t){this.currentSwiper=t.detail.current}}};o.default=a}).call(this,n("6e42")["default"])},"6dbf":function(t,o,n){"use strict";n.r(o);var i=n("546f"),e=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(o,t,function(){return i[t]})}(a);o["default"]=e.a},8053:function(t,o,n){"use strict";var i=function(){var t=this,o=t.$createElement;t._self._c},e=[];n.d(o,"a",function(){return i}),n.d(o,"b",function(){return e})},"9e07":function(t,o,n){"use strict";var i=n("ec00"),e=n.n(i);e.a},ec00:function(t,o,n){}},[["d08e","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/home/home.js');
__wxRoute = 'pages/tabBar/issue/issue';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/issue/issue.js';

define('pages/tabBar/issue/issue.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/issue/issue"],{"0093":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("fbcf"));function o(t){return t&&t.__esModule?t:{default:t}}var s=function(){return n.e("components/uni-richtext").then(n.bind(null,"4085"))},u=function(){return Promise.all([n.e("common/vendor"),n.e("components/chooseImage")]).then(n.bind(null,"cb91"))},l={components:{uniRichtext:s,chooseImage:u},data:function(){var t=this.getDate(0);return{api_token:"",imgList:[],animationData:{},showAction:!1,imgIndex:"0",radioIndex:0,items:[{value:"0",name:"电话"},{value:"1",name:"邮箱"}],richInfo:null,langth:"",uploadUrl:"http://120.78.87.84:8080/conduit/file/uploadFile",start_Date:t,end_Date:this.getDate(7),low:"",high:"",productType:[],phone:"",email:"",title:"",category_all:[],i:"0",listimg:[],uploadImg:[],nation:[],nations:[]}},onLoad:function(){var e=this,n=getCurrentPages();n[0].page=1,t.getStorage({key:"UserInfo",success:function(t){e.email=t.data.email}}),t.getStorage({key:"lang",success:function(t){console.log(a(t," at pages\\tabBar\\issue\\issue.vue:175")),"zh"==t.data?e.nation=i.default[t.data]:e.nation=i.default["en"];for(var n=0;n<e.nation.length;n++)e.nations.push(e.nation[n].countries)}}),console.log(a(i.default," at pages\\tabBar\\issue\\issue.vue:186")),this.$http("/newtasks/postclass",{}).then(function(t){for(var n=0;n<t.data.category_all.length;n++)e.category_all.push({name:t.data.category_all[n].name,id:t.data.category_all[n].id}),e.productType.push(t.data.category_all[n].name)}),this.$http("/newtasks/postTaskType",{}).then(function(t){})},onShow:function(){var e=this;t.getStorage({key:"token",success:function(t){console.log(a(t," at pages\\tabBar\\issue\\issue.vue:204")),e.api_token=t.data},fail:function(e){t.navigateTo({url:"../../login/login"})}})},onReady:function(){},onBackPress:function(){return t.reLaunch({url:"../home/home"}),!0},methods:{richList:function(t){this.richInfo=t},imgway:function(t){for(var e=0;e<t.imgList.length;e++)this.imgList.push(t.imgList[e]),this.uploadImg.push(t.uploadImg[e].id)},bindPickerChange:function(t){this.i=t.detail.value},startDateChange:function(t){this.start_Date=t.target.value},endDateChange:function(t){this.end_Date=t.target.value},issue:function(){this.$http("/newtasks/postcreate",{description:JSON.stringify(this.richInfo),area:"0",type_id:"3",begin_atzhaobiao:Math.floor(new Date(this.start_Date+" 00:00:00").getTime()/1e3),delivery_deadlinezhaobiao:Math.floor(new Date(this.end_Date+" 00:00:00").getTime()/1e3),bountyzhaobiao:this.low,worker_numzhaobiao:"1",slutype:"1",phone:this.phone,cate_id:this.category_all[this.i].id,title:this.title,money_type:"1",file_id:this.uploadImg,email:this.email}).then(function(e){e.data.msg?t.showToast({title:"发布成功",duration:2e3}):t.showToast({title:"发布失败"})})},getDate:function(t){var e=(new Date).getTime()+864e5*t,n=new Date(e),a=n.getFullYear(),i=n.getMonth(),o=n.getDate();return i=this.doHandleMonth(i+1),o=this.doHandleMonth(o),"".concat(a,"-").concat(i,"-").concat(o)},doHandleMonth:function(t){var e=t;return 1==t.toString().length&&(e="0"+t),e},aShow:function(){this.listimg.length>=5?t.showToast({title:"最多5张",icon:"none"}):this.$refs.child.animationShow()},radioChange:function(t){this.radioIndex=t.target.value},swiperChange:function(t){this.imgIndex=t.detail.current},delImg:function(){this.listimg.splice(this.imgIndex,1),this.uploadImg.splice(this.imgIndex,1),this.imgIndex>this.listimg.length-1&&(this.imgIndex=this.listimg.length-1)}}};e.default=l}).call(this,n("6e42")["default"],n("0de9")["default"])},"0329":function(t,e,n){"use strict";n.r(e);var a=n("dd78"),i=n("2042");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("14f9");var s=n("2877"),u=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"14f9":function(t,e,n){"use strict";var a=n("d340"),i=n.n(a);i.a},2042:function(t,e,n){"use strict";n.r(e);var a=n("0093"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},d340:function(t,e,n){},dd78:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})}},[["8dd4","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/issue/issue.js');
__wxRoute = 'pages/tabBar/issue/issues';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/issue/issues.js';

define('pages/tabBar/issue/issues.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/issue/issues"],{"978a":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{page:0}},onLoad:function(){console.log(e(11," at pages\\tabBar\\issue\\issues.vue:12"))},onShow:function(){getCurrentPages();console.log(e(this.page," at pages\\tabBar\\issue\\issues.vue:17")),0==this.page?n.navigateTo({url:"issue"}):n.reLaunch({url:"../home/home"})}};t.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])},"9f95":function(e,t,n){"use strict";n.r(t);var u=n("978a"),a=n.n(u);for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);t["default"]=a.a},d87e:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a})},f39a:function(e,t,n){"use strict";n.r(t);var u=n("d87e"),a=n("9f95");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n("2877"),r=Object(s["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=r.exports}},[["987e","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/issue/issues.js');
__wxRoute = 'pages/tabBar/cart/cart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/cart/cart.js';

define('pages/tabBar/cart/cart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/cart/cart"],{"057e":function(t,s,e){"use strict";var i=e("3b9a"),o=e.n(i);o.a},2558:function(t,s,e){"use strict";e.r(s);var i=e("6716"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(s,t,function(){return i[t]})}(n);s["default"]=o.a},"3b9a":function(t,s,e){},6716:function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{sumPrice:"0.00",headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,selectedList:[],isAllselected:!1,goodsList:[{id:1,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:2,img:"/static/img/goods/p2.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:3,img:"/static/img/goods/p3.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:4,img:"/static/img/goods/p4.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:5,img:"/static/img/goods/p5.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1}],theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},methods:{joinGoods:function(t){for(var s=this.goodsList.length,e=!1,o=0;o<s;o++){var n=this.goodsList[o];if(n.id==t.id){this.goodsList[o].number++,e=!0;break}}e||this.goodsList[i].unshift(t)},touchStart:function(t,s){s.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[s.touches[0].pageX,s.touches[0].pageY])},touchMove:function(t,s){var e=this;if(s.touches.length>1)this.isStop=!0;else{var i=s.touches[0].pageX-this.initXY[0],o=s.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(i)<5||(Math.abs(o)>Math.abs(i)?this.isStop=!0:i<0?(this.theIndex=t,this.isStop=!0):i>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){e.oldIndex=null},150)))}},touchEnd:function(t,s){this.isStop=!1},toGoods:function(s){t.showToast({title:"商品"+s.id,icon:"none"}),t.navigateTo({url:"../../goods/goods"})},toConfirmation:function(){for(var s=[],e=this.goodsList.length,i=0;i<e;i++)this.goodsList[i].selected&&s.push(this.goodsList[i]);s.length<1?t.showToast({title:"请选择商品结算",icon:"none"}):t.setStorage({key:"buylist",data:s,success:function(){t.navigateTo({url:"../../order/confirmation"})}})},deleteGoods:function(t){for(var s=this.goodsList.length,e=0;e<s;e++)if(t==this.goodsList[e].id){this.goodsList.splice(e,1);break}this.selectedList.splice(this.selectedList.indexOf(t),1),this.sum(),this.oldIndex=null,this.theIndex=null},deleteList:function(){this.selectedList.length;while(this.selectedList.length>0)this.deleteGoods(this.selectedList[0]);this.selectedList=[],this.isAllselected=this.selectedList.length==this.goodsList.length&&this.goodsList.length>0,this.sum()},selected:function(t){this.goodsList[t].selected=!this.goodsList[t].selected;var s=this.selectedList.indexOf(this.goodsList[t].id);s>-1?this.selectedList.splice(s,1):this.selectedList.push(this.goodsList[t].id),this.isAllselected=this.selectedList.length==this.goodsList.length,this.sum()},allSelect:function(){for(var t=this.goodsList.length,s=[],e=0;e<t;e++)this.goodsList[e].selected=!this.isAllselected,s.push(this.goodsList[e].id);this.selectedList=this.isAllselected?[]:s,this.isAllselected=!this.isAllselected&&0!=this.goodsList.length,this.sum()},sub:function(t){this.goodsList[t].number<=1||(this.goodsList[t].number--,this.sum())},add:function(t){this.goodsList[t].number++,this.sum()},sum:function(t,s){this.sumPrice=0;for(var e=this.goodsList.length,i=0;i<e;i++)this.goodsList[i].selected&&(this.sumPrice=t&&i==s?this.sumPrice+t.detail.value*this.goodsList[i].price:this.sumPrice+this.goodsList[i].number*this.goodsList[i].price);this.sumPrice=this.sumPrice.toFixed(2)},discard:function(){}}};s.default=e}).call(this,e("6e42")["default"])},ca46:function(t,s,e){"use strict";e.r(s);var i=e("e5c9"),o=e("2558");for(var n in o)"default"!==n&&function(t){e.d(s,t,function(){return o[t]})}(n);e("057e");var l=e("2877"),h=Object(l["a"])(o["default"],i["a"],i["b"],!1,null,null,null);s["default"]=h.exports},e5c9:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c},o=[];e.d(s,"a",function(){return i}),e.d(s,"b",function(){return o})}},[["2eb2","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/cart/cart.js');
__wxRoute = 'pages/tabBar/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/user/user.js';

define('pages/tabBar/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/user/user"],{"0206":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"0759":function(t,e,n){"use strict";var o=n("eb2b"),a=n.n(o);a.a},"84f4":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("b382"));function u(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{isfirst:!0,headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,jsonData:"",user:{username:"未登录",face:"/static/img/face.jpg",integral:0,balance:0,envelope:0},orderList:[{text:"待付款",icon:"fukuan"},{text:"待发货",icon:"fahuo"},{text:"待收货",icon:"shouhuo"},{text:"待评价",icon:"pingjia"},{text:"退换货",icon:"tuihuo"}],mytoolbarList:[{url:"",text:"积分管理",img:"/static/img/user/choujiang.png"},{url:"../../user/coupon/coupon",text:"账号管理",img:"/static/img/user/quan.png"},{url:"",text:"我的竞标",img:"/static/img/user/renw.png"},{url:"",text:"我的需求",img:"/static/img/user/momey.png"},{url:"../../user/address/address",text:"我的产品",img:"/static/img/user/addr.png"},{url:"",text:"我的出售",img:"/static/img/user/security.png"},{url:"../../shop/check/check",text:"商铺管理",img:"/static/img/user/bank.png"},{url:"../../user/keep/keep",text:"收藏",img:"/static/img/user/point.png"}]}},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onLoad:function(){this.statusHeight=0,this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},onReady:function(){},onShow:function(){var e=this;console.log(o(11," at pages\\tabBar\\user\\user.vue:192")),t.getStorage({key:"userInfo",success:function(n){console.log(o(n," at pages\\tabBar\\user\\user.vue:196")),n.data?e.user=n.data:(console.log(o(2," at pages\\tabBar\\user\\user.vue:200")),t.navigateTo({url:"../../login/login"}))},fail:function(){console.log(o(1," at pages\\tabBar\\user\\user.vue:207")),t.navigateTo({url:"../../login/login"})}}),t.getStorage({key:"lang",success:function(t){console.log(o(a.default," at pages\\tabBar\\user\\user.vue:217")),e.jsonData=a.default[t.data]},fail:function(){console.log(o(123," at pages\\tabBar\\user\\user.vue:220")),t.navigateTo({url:"../../user/language/language"})}})},methods:{toMsg:function(){t.navigateTo({url:"../../msg/msg"})},toOrderList:function(e){t.setStorageSync("tbIndex",e),t.navigateTo({url:"../../user/order_list/order_list?tbIndex="+e})},toSetting:function(){t.navigateTo({url:"../../user/setting/setting"})},toPersonal:function(){t.navigateTo({url:"../../user/personal/personal"})},toMyQR:function(){t.navigateTo({url:"../../user/myQR/myQR"})},toLogin:function(){t.showToast({title:"请登录",icon:"none"}),t.navigateTo({url:"../../login/login"}),this.isfirst=!1},isLogin:function(){var e=t.getStorageSync("UserInfo");return!!e},toDeposit:function(){t.navigateTo({url:"../../user/deposit/deposit"})},toPage:function(e,n){e?6==n?t.getStorage({key:"userInfo",success:function(n){n.data.shopId||t.navigateTo({url:e})}}):t.navigateTo({url:e}):t.showToast({title:"模板未包含此页面",icon:"none"})}}};e.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},ca15:function(t,e,n){"use strict";n.r(e);var o=n("0206"),a=n("ed90");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("0759");var s=n("2877"),i=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},eb2b:function(t,e,n){},ed90:function(t,e,n){"use strict";n.r(e);var o=n("84f4"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=a.a}},[["3e3b","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/user/user.js');
__wxRoute = 'pages/goods/goods';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/goods.js';

define('pages/goods/goods.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods"],{"33e3":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},s=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return s})},"8a9b":function(t,e,a){"use strict";var o=a("9579"),s=a.n(o);s.a},9579:function(t,e,a){},e072:function(t,e,a){"use strict";a.r(e);var o=a("ee38"),s=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);e["default"]=s.a},e2b8:function(t,e,a){"use strict";a.r(e);var o=a("33e3"),s=a("e072");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("8a9b");var i=a("2877"),c=Object(i["a"])(s["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},ee38:function(t,e,a){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){return a.e("components/uni-steps/uni-steps").then(a.bind(null,"ebc0"))},n={components:{uniSteps:s},data:function(){return{beforeHeaderzIndex:11,afterHeaderzIndex:10,beforeHeaderOpacity:1,afterHeaderOpacity:0,showBack:!0,swiperList:[],currentSwiper:0,anchorlist:[],selectAnchor:0,serviceClass:"",specClass:"",shareClass:"",goodsData:"",selectSpec:null,isKeep:!1,descriptionStr:"",list1:[{title:"发布需求"},{title:"客户投标"},{title:"店铺选标"},{title:"沟通中"},{title:"结束"}],active:0,offer:[],user_type:null,showStatus:!0}},onLoad:function(e){var a=this;console.log(t(e," at pages\\goods\\goods.vue:283")),e.good_id?this.$http("/newtasks/taskindex",{id:37}).then(function(t){for(var e=0;e<t.data.data.attatchment.length;e++)t.data.data.attatchment[e].url=t.data.data.attatchment[e].url.replace(/\\/g,"/");a.swiperList=t.data.data.attatchment,a.descriptionStr=JSON.parse(t.data.data.detail.desc),a.goodsData=t.data.data.detail,a.offer=t.data.data.works.data,a.user_type=t.data.data.user_type;var o=(new Date).getTime(),s=new Date(t.data.data.detail.begin_at).getTime(),n=new Date(t.data.data.detail.delivery_deadline).getTime();o>s&&(a.active=1,o>n&&(a.active=2))}):this.$http("/api/shop/goodContent",{id:e.good_id}).then(function(t){a.showStatus=!1})},onReady:function(){this.calcAnchor()},onPageScroll:function(t){this.selectAnchor=t.scrollTop>=this.anchorlist[2].top?2:t.scrollTop>=this.anchorlist[1].top?1:0;var e=375;t.scrollTop=t.scrollTop>e?375:t.scrollTop,this.afterHeaderOpacity=t.scrollTop*(1/e),this.beforeHeaderOpacity=1-this.afterHeaderOpacity,this.beforeHeaderzIndex=t.scrollTop>0?10:11,this.afterHeaderzIndex=t.scrollTop>0?11:10},onReachBottom:function(){o.showToast({title:"触发上拉加载"})},mounted:function(){},methods:{swiperChange:function(t){this.currentSwiper=t.detail.current},toMsg:function(){o.navigateTo({url:"../msg/msg"})},copy:function(){o.setClipboardData({data:this.goodsData.email,success:function(){o.showToast({title:"复制成功",icon:"none"})}})},callPhone:function(){o.makePhoneCall({phoneNumber:this.goodsData.phone})},toChat:function(){o.navigateTo({url:"../msg/chat/chat?name=客服008"})},share:function(){this.shareClass="show"},hideShare:function(){var t=this;this.shareClass="hide",setTimeout(function(){t.shareClass="none"},150)},keep:function(){this.isKeep=!this.isKeep,this.isKeep?this.$http("/api/user/addFocus",{task_id:""},"get").then(function(t){}):this.$http("/api/user/deleteFocus",{id:""}).then(function(t){})},joinCart:function(){if(null==this.selectSpec)return this.showSpec(function(){o.showToast({title:"已加入购物车"})});o.showToast({title:"已加入购物车"})},buy:function(){o.navigateTo({url:"../order/bidding?id="+this.goodsData.id+"&price="+this.goodsData.bounty})},toRatings:function(){o.navigateTo({url:"ratings/ratings?task_id="+this.goodsData.id})},toConfirmation:function(){var t=[],e={id:this.goodsData.id,img:"../../static/img/goods/p1.jpg",name:this.goodsData.name,spec:"规格:"+this.goodsData.spec[this.selectSpec],price:this.goodsData.price,number:this.goodsData.number};t.push(e),o.setStorage({key:"buylist",data:t,success:function(){o.navigateTo({url:"../order/bidding"})}})},showComments:function(t){},setSelectSpec:function(t){this.selectSpec=t},sub:function(){this.goodsData.number<=1||this.goodsData.number--},add:function(){this.goodsData.number++},toAnchor:function(t){this.selectAnchor=t,o.pageScrollTo({scrollTop:this.anchorlist[t].top,duration:200})},calcAnchor:function(){var t=this;this.anchorlist=[{name:"主图",top:0},{name:"详情",top:0},{name:"评价",top:0}];var e=o.createSelectorQuery().select("#comments");e.boundingClientRect(function(e){var a=0;a=plus.navigator.getStatusbarHeight();var s=o.upx2px(100);t.anchorlist[1].top=e.top-s-a,t.anchorlist[2].top=e.bottom-s-a}).exec()},back:function(){o.navigateBack()},showService:function(){console.log(t("show"," at pages\\goods\\goods.vue:489")),this.serviceClass="show"},hideService:function(){var t=this;this.serviceClass="hide",setTimeout(function(){t.serviceClass="none"},200)},showSpec:function(e){console.log(t("show"," at pages\\goods\\goods.vue:501")),this.specClass="show",this.specCallback=e},specCallback:function(){},hideSpec:function(){var t=this;this.specClass="hide",this.selectSpec&&this.specCallback&&this.specCallback(),this.specCallback=!1,setTimeout(function(){t.specClass="none"},200)},discard:function(){}}};e.default=n}).call(this,a("0de9")["default"],a("6e42")["default"])}},[["1a8c","common/runtime","common/vendor"]]]);
});
require('pages/goods/goods.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"244f":function(e,n,t){"use strict";var o=t("27b0"),a=t.n(o);a.a},"249e":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return a})},"27b0":function(e,n,t){},"578a":function(e,n,t){"use strict";t.r(n);var o=t("5fc2"),a=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);n["default"]=a.a},"5fc2":function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;i(t("0ff2"));var a=t("2f62");function i(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){u(e,n,t[n])})}return e}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s={data:function(){return{username:"",passwd:"",isShowOauth:!1,showProvider:{weixin:!1,qq:!1,sinaweibo:!1,xiaomi:!1}}},onShow:function(){},onBackPress:function(n){return console.log(e(n," at pages\\login\\login.vue:56")),o.reLaunch({url:"../tabBar/home/home"}),!0},onLoad:function(){this.isShowOauth=!0,this.getProvider(),this.hasLogin&&o.reLaunch({url:"../tabBar/home/home"})},computed:(0,a.mapState)(["hasLogin"]),methods:r({},(0,a.mapMutations)(["login"]),{oauthLogin:function(n){o.showLoading(),o.login({provider:n,success:function(t){console.log(e("success: "+JSON.stringify(t)," at pages\\login\\login.vue:86")),o.getUserInfo({provider:n,success:function(n){console.log(e("用户信息："+JSON.stringify(n.userInfo)," at pages\\login\\login.vue:91")),o.setStorage({key:"UserInfo",data:{username:n.userInfo.nickName,face:n.userInfo.avatarUrl,signature:"个性签名",integral:0,balance:0,envelope:0},success:function(){o.hideLoading(),o.showToast({title:"登录成功",icon:"success"}),setTimeout(function(){o.navigateBack()},300)}})}})},fail:function(n){console.log(e("fail: "+JSON.stringify(n)," at pages\\login\\login.vue:114"))}})},getProvider:function(){var e=this;o.getProvider({service:"oauth",success:function(n){for(var t=n.provider.length,o=0;o<t;o++)e.showProvider[n.provider[o]]=!0;0==n.provider.length&&(e.isShowOauth=!1)}})},toPage:function(e){o.hideKeyboard(),o.navigateTo({url:e})},doLogin:function(){var n=this;if(console.log(e(this.username," at pages\\login\\login.vue:141")),o.hideKeyboard(),""==this.username)return o.showToast({title:"用户名不能为空",icon:"none"}),!1;this.$http("/api/user/login",{username:this.username,password:this.passwd}).then(function(e){"1000"==e.data.code?(o.showToast({title:"登录成功！",duration:1e3}),n.login(e.data.data.api_token),n.$http("/api/user/getUserInfo",{},"get",!1).then(function(e){1e3==e.data.code&&o.setStorage({key:"userInfo",data:e.data.data})}),setTimeout(function(){o.reLaunch({url:"../tabBar/home/home"})},1e3)):o.showToast({title:e.data.message,duration:1e3})})}})};n.default=s}).call(this,t("0de9")["default"],t("6e42")["default"])},ba2d:function(e,n,t){"use strict";t.r(n);var o=t("249e"),a=t("578a");for(var i in a)"default"!==i&&function(e){t.d(n,e,function(){return a[e]})}(i);t("244f");var r=t("2877"),u=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports}},[["0574","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/login/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/register.js';

define('pages/login/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/register"],{"169a":function(t,e,i){"use strict";var n=i("c728"),o=i.n(n);o.a},"2daa":function(t,e,i){"use strict";i.r(e);var n=i("8ffc"),o=i("2dab");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("169a");var s=i("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},"2dab":function(t,e,i){"use strict";i.r(e);var n=i("9fa5"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},"8ffc":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},"9fa5":function(t,e,i){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o(i("0ff2"));function o(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{username:"",mail:"",code:"",passwd:"",getCodeText:"获取验证码",getCodeBtnColor:"#ffffff",getCodeisWaiting:!1,icon:!1,iconText:""}},onLoad:function(){},methods:{usercode:function(){var e=this,i=/^[0-9a-zA-Z]+$/;i.test(this.username)?this.$http("/newapi/checkUserName",{param:this.username}).then(function(i){console.log(t(i," at pages\\login\\register.vue:63")),"y"==i.data.status?e.iconText=i.data.info:(e.iconText=i.data.info,n.showToast({title:i.data.info,icon:"none"}))}):(this.username="",n.showToast({title:"请输入英文和数字",icon:"none"}))},getCode:function(){var e=this;if(n.hideKeyboard(),!this.getCodeisWaiting){if(!/^\w+@[a-z0-9]+\.[a-z]{2,4}$/.test(this.mail))return n.showToast({title:"请填写正确邮箱地址",icon:"none"}),!1;this.getCodeText="发送中...",this.getCodeisWaiting=!0,this.getCodeBtnColor="rgba(255,255,255,0.5)",this.$http("/newapi/postemailce",{email:this.mail}).then(function(i){console.log(t(i," at pages\\login\\register.vue:97")),"true"==i.data.msg?(e.codeid=i.data.codeid,n.showToast({title:"验证码已发送",icon:"none"}),e.setTimer()):(n.showToast({title:i.data.info,icon:"none"}),e.getCodeisWaiting=!1,e.mail="",e.getCodeBtnColor="#ffffff",e.getCodeText="获取验证码",clearInterval(e.Timer))})}},setTimer:function(){var t=this,e=60;this.getCodeText="重新获取(60)",this.Timer=setInterval(function(){if(e<=0)return t.getCodeisWaiting=!1,t.getCodeBtnColor="#ffffff",t.getCodeText="获取验证码",void clearInterval(t.Timer);t.getCodeText="重新获取("+e+")",e--},1e3)},doReg:function(){n.hideKeyboard(),this.passwd.length<6?n.showToast({title:"密码长度小于6",icon:"none"}):""!=this.mail?""!=this.code?(n.showLoading({title:"提交中..."}),this.$http("/newapi/registernew",{username:this.username,email:this.mail,type:1,password:this.passwd,confirmPassword:this.password,api_code:this.code,id:this.codeid}).then(function(t){n.hideLoading(),"1000"==t.data.status&&(n.showToast({title:t.data.msg,duration:2e3}),n.navigateBack())})):n.showToast({title:"请输入验证码",icon:"none"}):n.showToast({title:"请输入邮箱地址",icon:"none"})},toLogin:function(){n.hideKeyboard(),n.redirectTo({url:"login"}),n.navigateBack()}}};e.default=a}).call(this,i("0de9")["default"],i("6e42")["default"])},c728:function(t,e,i){}},[["1521","common/runtime","common/vendor"]]]);
});
require('pages/login/register.js');
__wxRoute = 'pages/login/resetpasswd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/resetpasswd.js';

define('pages/login/resetpasswd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/resetpasswd"],{"0761":function(t,e,n){"use strict";var o=n("1ecf"),i=n.n(o);i.a},"1ecf":function(t,e,n){},"2c28":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},8468:function(t,e,n){"use strict";n.r(e);var o=n("2c28"),i=n("de09");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("0761");var a=n("2877"),r=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},d573:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("0ff2"));function i(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{phoneNumber:"",code:"",passwd:"",getCodeText:"获取验证码",getCodeBtnColor:"#ffffff",getCodeisWaiting:!1}},onLoad:function(){},methods:{Timer:function(){},getCode:function(){var e=this;if(!this.getCodeisWaiting){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))return t.showToast({title:"请填写正确手机号码",icon:"none"}),!1;this.getCodeText="发送中...",this.getCodeisWaiting=!0,this.getCodeBtnColor="rgba(255,255,255,0.5)",setTimeout(function(){t.showToast({title:"验证码已发送",icon:"none"}),e.code=1234,e.setTimer()},1e3)}},setTimer:function(){var t=this,e=60;this.getCodeText="重新获取(60)",this.Timer=setInterval(function(){if(e<=0)return t.getCodeisWaiting=!1,t.getCodeBtnColor="#ffffff",t.getCodeText="获取验证码",void clearInterval(t.Timer);t.getCodeText="重新获取("+e+")",e--},1e3)},doReset:function(){var e=this;return t.hideKeyboard(),/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)?1234!=this.code?(t.showToast({title:"验证码不正确",icon:"none"}),!1):(t.showLoading({title:"提交中..."}),void setTimeout(function(){t.getStorage({key:"UserList",success:function(n){for(var i in t.hideLoading(),n.data){var s=n.data[i];if(s.username==e.phoneNumber)return n.data[i].passwd=(0,o.default)(e.passwd),void t.setStorage({key:"UserList",data:n.data,success:function(){t.showToast({title:"密码已重置",icon:"success"}),setTimeout(function(){t.navigateBack()},1e3)}})}t.showToast({title:"手机号码未注册",icon:"none"})},fail:function(e){t.hideLoading(),t.showToast({title:"手机号码未注册",icon:"none"})}})},1e3)):(t.showToast({title:"请填写正确手机号码",icon:"none"}),!1)}}};e.default=s}).call(this,n("6e42")["default"])},de09:function(t,e,n){"use strict";n.r(e);var o=n("d573"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=i.a}},[["08fd","common/runtime","common/vendor"]]]);
});
require('pages/login/resetpasswd.js');
__wxRoute = 'pages/user/realName/realName';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/realName/realName.js';

define('pages/user/realName/realName.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/realName/realName"],{"0a3c":function(t,a,e){},6229:function(t,a,e){"use strict";var n=e("0a3c"),i=e.n(n);i.a},a22a:function(t,a,e){"use strict";(function(t,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=s(e("fbcf"));function s(t){return t&&t.__esModule?t:{default:t}}var u=function(){return Promise.all([e.e("common/vendor"),e.e("components/chooseImage")]).then(e.bind(null,"cb91"))},o={components:{chooseImage:u},data:function(){return{uploadImg:[],listimg:[],headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,index:"0",license:"",Assurface:"",national:"",handAssurface:"",nationArray:[],date:"",indate:"请选择",api_token:"",imgID:"",realname:"",card_number:"",showStatus:null}},onLoad:function(){var a=this;console.log(t(i.default," at pages\\user\\realName\\realName.vue:80")),this.$http("/api/auth/realnameAuthInfo",{},"get").then(function(t){a.showStatus=t.data.data.status}),n.getStorage({key:"lang",success:function(t){a.nationArray=i.default[t.data]}}),this.statusHeight=0,this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},methods:{chooseImage:function(t){if(1==this.showStatus)return!1;this.imgID=t,this.$refs.child.animationShow()},imgway:function(t){n.hideLoading(),0==this.imgID&&(this.Assurface=this.baseUrl+"/"+t.uploadImg[0].url.replace(/\\/g,"/")),1==this.imgID&&(this.national=this.baseUrl+"/"+t.uploadImg[0].url.replace(/\\/g,"/")),2==this.imgID&&(this.handAssurface=this.baseUrl+"/"+t.uploadImg[0].url.replace(/\\/g,"/"))},exit:function(){n.navigateBack({delta:1})},formSubmit:function(t){this.$http("/api/auth/realnameAuth",{realname:this.realname,card_number:this.card_number,card_front_side:this.Assurface,card_back_dside:this.national,type:1,validation_img:this.handAssurface}).then(function(t){1e3==t.data.code&&(n.showToast({title:"提交成功！",icon:"success",duration:2e3}),setTimeout(function(){n.navigateBack({delta:1})},2e3))})}}};a.default=o}).call(this,e("0de9")["default"],e("6e42")["default"])},cd1a:function(t,a,e){"use strict";e.r(a);var n=e("f658"),i=e("f2e3");for(var s in i)"default"!==s&&function(t){e.d(a,t,function(){return i[t]})}(s);e("6229");var u=e("2877"),o=Object(u["a"])(i["default"],n["a"],n["b"],!1,null,null,null);a["default"]=o.exports},f2e3:function(t,a,e){"use strict";e.r(a);var n=e("a22a"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);a["default"]=i.a},f658:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},i=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})}},[["d3f5","common/runtime","common/vendor"]]]);
});
require('pages/user/realName/realName.js');
__wxRoute = 'pages/order/bidding';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/bidding.js';

define('pages/order/bidding.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/bidding"],{"279c":function(t,n,e){},"2a90":function(t,n,e){"use strict";var i=e("279c"),a=e.n(i);a.a},6625:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{id:"",hint:"",price:"",desc:""}},onLoad:function(t){this.hint=t.price,this.id=t.id},methods:{bid:function(){this.$http("/newtasks/apiworkcreate",{task_id:this.id,price:this.price,desc:this.desc}).then(function(n){"1000"==n.data.status?(t.showToast({title:n.data.msg,duration:2e3}),setInterval(function(){t.navigateBack({delta:1})},2e3)):t.showToast({title:n.data.msg,icon:"none",duration:2e3})})}}};n.default=e}).call(this,e("6e42")["default"])},a517:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},b628:function(t,n,e){"use strict";e.r(n);var i=e("6625"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},e961:function(t,n,e){"use strict";e.r(n);var i=e("a517"),a=e("b628");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("2a90");var u=e("2877"),c=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=c.exports}},[["ee76","common/runtime","common/vendor"]]]);
});
require('pages/order/bidding.js');
__wxRoute = 'pages/order/confirmation';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/confirmation.js';

define('pages/order/confirmation.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/confirmation"],{"30d2":function(e,t,i){"use strict";i.r(t);var n=i("abd3"),o=i("ccb4");for(var r in o)"default"!==r&&function(e){i.d(t,e,function(){return o[e]})}(r);i("783b");var s=i("2877"),u=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports},7779:function(e,t,i){},"783b":function(e,t,i){"use strict";var n=i("7779"),o=i.n(n);o.a},"8d70":function(e,t,i){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{buylist:[],goodsPrice:0,sumPrice:0,freight:12,note:"",int:1200,deduction:0,recinfo:{id:1,name:"大黑哥",head:"大",tel:"18816881688",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!0}}},onShow:function(){var t=this;e.getStorage({key:"buylist",success:function(e){t.buylist=e.data,t.goodsPrice=0;for(var i=t.buylist.length,n=0;n<i;n++)t.goodsPrice=t.goodsPrice+t.buylist[n].number*t.buylist[n].price;t.deduction=t.int/100,t.sumPrice=t.goodsPrice-t.deduction+t.freight}}),e.getStorage({key:"selectAddress",success:function(i){t.recinfo=i.data,e.removeStorage({key:"selectAddress"})}})},onHide:function(){},onBackPress:function(){this.clearOrder()},filters:{toFixed:function(e){return parseFloat(e).toFixed(2)}},methods:{clearOrder:function(){var t=this;e.removeStorage({key:"buylist",success:function(e){t.buylist=[],console.log(i("remove buylist success"," at pages\\order\\confirmation.vue:160"))}})},toPay:function(){for(var t=this,i=[],n=[],o=this.buylist.length,r=0;r<o;r++)i.push(this.buylist[r]),n.push(this.buylist[r].id);0!=i.length?(e.showLoading({title:"正在提交订单..."}),setTimeout(function(){e.setStorage({key:"paymentOrder",data:i,success:function(){e.hideLoading(),e.redirectTo({url:"../pay/payment/payment?amount="+t.sumPrice})}})},1e3)):e.showToast({title:"订单信息有误，请重新购买",icon:"none"})},selectAddress:function(){e.navigateTo({url:"../user/address/address?type=select"})}}};t.default=n}).call(this,i("6e42")["default"],i("0de9")["default"])},abd3:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=(e._self._c,e._f("toFixed")(e.deduction)),n=e._f("toFixed")(e.goodsPrice),o=e._f("toFixed")(e.freight),r=e._f("toFixed")(e.deduction),s=e._f("toFixed")(e.sumPrice);e.$mp.data=Object.assign({},{$root:{f0:i,f1:n,f2:o,f3:r,f4:s}})},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},ccb4:function(e,t,i){"use strict";i.r(t);var n=i("8d70"),o=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,function(){return n[e]})}(r);t["default"]=o.a}},[["6fa2","common/runtime","common/vendor"]]]);
});
require('pages/order/confirmation.js');
__wxRoute = 'pages/user/setting/setting';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/setting/setting.js';

define('pages/user/setting/setting.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/setting/setting"],{"122a":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},"255d":function(e,t,n){"use strict";n.r(t);var a=n("122a"),o=n("ab6b");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("52aa");var r=n("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=i.exports},"52aa":function(e,t,n){"use strict";var a=n("b627"),o=n.n(a);o.a},ab6b:function(e,t,n){"use strict";n.r(t);var a=n("ba8c"),o=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=o.a},b627:function(e,t,n){},ba8c:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("a46d")),u=n("2f62");function r(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={data:function(){return{user:"",details:{}}},onLoad:function(){var t=this;e.getStorage({key:"lang",success:function(n){t.details=o.default[n.data],e.setNavigationBarTitle({title:o.default[n.data].title})}})},onShow:function(){var t=this;console.log(a(o.default.zh," at pages\\user\\setting\\setting.vue:71")),e.getStorage({key:"userInfo",success:function(e){console.log(a(e," at pages\\user\\setting\\setting.vue:76")),t.user=e.data,t.user.face="/static/img/face.jpg",t.user.signature="点击昵称跳转登录/注册页",t.user.integral=500,t.user.balance=500,t.user.envelope=500}})},methods:i({},(0,u.mapMutations)(["logout"]),{showType:function(e){this.tabbarIndex=e,this.list=this.orderList[e]},toPage:function(t){t?e.navigateTo({url:t}):e.showToast({title:"模板未包含此页面",icon:"none"})},chooseImage:function(){e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){console.log(a(o.default.stringify(e.tempFilePaths)," at pages\\user\\setting\\setting.vue:107"))}})},clear:function(){e.showModal({content:"确定要清除缓存吗？",confirmText:"确定",cancelText:"取消",success:function(t){t.confirm&&e.removeStorageSync("lang"),t.cancel}})},exit:function(){this.$http("/api/user/loginOut","get",!1),this.logout(),e.reLaunch({url:"../../login/login"})}})};t.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["ea7d","common/runtime","common/vendor"]]]);
});
require('pages/user/setting/setting.js');
__wxRoute = 'pages/user/competitive/competitive';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/competitive/competitive.js';

define('pages/user/competitive/competitive.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/competitive/competitive"],{"1dab":function(n,t,e){"use strict";e.r(t);var u=e("298c"),c=e("9a94");for(var a in c)"default"!==a&&function(n){e.d(t,n,function(){return c[n]})}(a);e("ead5");var o=e("2877"),i=Object(o["a"])(c["default"],u["a"],u["b"],!1,null,null,null);t["default"]=i.exports},"298c":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){n.num=0},n.e1=function(t){n.num=1},n.e2=function(t){n.num=2},n.e3=function(t){n.num=3})},c=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return c})},"5c55":function(n,t,e){},"86b4":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{num:0,list:["",""]}}};t.default=u},"9a94":function(n,t,e){"use strict";e.r(t);var u=e("86b4"),c=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=c.a},ead5:function(n,t,e){"use strict";var u=e("5c55"),c=e.n(u);c.a}},[["e9ae","common/runtime","common/vendor"]]]);
});
require('pages/user/competitive/competitive.js');
__wxRoute = 'pages/user/myname/myname';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/myname/myname.js';

define('pages/user/myname/myname.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/myname/myname"],{"0d3d":function(t,e,a){"use strict";a.r(e);var n=a("dab1"),u=a("5992");for(var o in u)"default"!==o&&function(t){a.d(e,t,function(){return u[t]})}(o);a("8085");var c=a("2877"),s=Object(c["a"])(u["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},5992:function(t,e,a){"use strict";a.r(e);var n=a("7c35"),u=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=u.a},"7c35":function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(a("5c41"));function o(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{userName:"",details:"",loading:!1}},onLoad:function(e){var a=this;this.userName=e.data,t.getStorage({key:"lang",success:function(e){a.details=u.default[e.data],t.setNavigationBarTitle({title:u.default[e.data].title})}})},methods:{btn:function(){this.$http("/api/user/updateUserInfo",{nickname:this.userName},"post").then(function(e){1e3==e.data.code&&t.getStorage({key:"userInfo",success:function(a){a.data.nickname=e.data.data.nickname,console.log(n(a.data," at pages\\user\\myname\\myname.vue:46")),t.setStorage({key:"userInfo",data:a.data,success:function(e){t.showToast({title:"修改成功！"})}})}})})}}};e.default=c}).call(this,a("6e42")["default"],a("0de9")["default"])},8085:function(t,e,a){"use strict";var n=a("ac1b"),u=a.n(n);u.a},ac1b:function(t,e,a){},dab1:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},u=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return u})}},[["3667","common/runtime","common/vendor"]]]);
});
require('pages/user/myname/myname.js');
__wxRoute = 'pages/user/account/account';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/account/account.js';

define('pages/user/account/account.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/account/account"],{1366:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},"3d30":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(a("6866"));function c(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{user:"",details:{}}},onLoad:function(){var t=this;e.getStorage({key:"lang",success:function(a){t.details=o.default[a.data],e.setNavigationBarTitle({title:o.default[a.data].title})}}),e.getProvider({service:"oauth",success:function(e){console.log(n(e," at pages\\user\\account\\account.vue:69")),t.providerList=e.provider.map(function(e){var t="";switch(console.log(n(e," at pages\\user\\account\\account.vue:72")),e){case"weixin":t="微信登录";break;case"qq":t="QQ登录";break;case"sinaweibo":t="新浪微博登录";break;case"xiaomi":t="小米登录";break;case"alipay":t="支付宝登录";break;case"baidu":t="百度登录";break;case"toutiao":t="头条登录";break}return{name:t,id:e}})},fail:function(e){console.log(n("获取登录通道失败",e," at pages\\user\\account\\account.vue:104"))}})},onShow:function(){},methods:{showType:function(e){this.tabbarIndex=e,this.list=this.orderList[e]},toPage:function(t){t?e.navigateTo({url:t}):e.showToast({title:"模板未包含此页面",icon:"none"})},toBinding:function(t){e.login({provider:t,success:function(e){console.log(n(e.authResult," at pages\\user\\account\\account.vue:129"))}})},chooseImage:function(){e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){console.log(n(o.default.stringify(e.tempFilePaths)," at pages\\user\\account\\account.vue:139"))}})}}};t.default=u}).call(this,a("6e42")["default"],a("0de9")["default"])},"6ca5":function(e,t,a){"use strict";var n=a("dd3a"),o=a.n(n);o.a},8906:function(e,t,a){"use strict";a.r(t);var n=a("1366"),o=a("e0bc");for(var c in o)"default"!==c&&function(e){a.d(t,e,function(){return o[e]})}(c);a("6ca5");var u=a("2877"),i=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=i.exports},dd3a:function(e,t,a){},e0bc:function(e,t,a){"use strict";a.r(t);var n=a("3d30"),o=a.n(n);for(var c in n)"default"!==c&&function(e){a.d(t,e,function(){return n[e]})}(c);t["default"]=o.a}},[["0948","common/runtime","common/vendor"]]]);
});
require('pages/user/account/account.js');
__wxRoute = 'pages/search/search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/search/search.js';

define('pages/search/search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"71c1":function(n,t,e){"use strict";e.r(t);var r=e("e06a"),u=e("b322");for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);var c=e("2877"),o=Object(c["a"])(u["default"],r["a"],r["b"],!1,null,null,null);t["default"]=o.exports},b322:function(n,t,e){"use strict";e.r(t);var r=e("f87b"),u=e.n(r);for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);t["default"]=u.a},e06a:function(n,t,e){"use strict";var r=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return r}),e.d(t,"b",function(){return u})},f87b:function(n,t,e){}},[["844a","common/runtime","common/vendor"]]]);
});
require('pages/search/search.js');
__wxRoute = 'pages/user/account/password/password';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/account/password/password.js';

define('pages/user/account/password/password.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/account/password/password"],{4517:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){t.show=!1},t.e1=function(n){t.show=!0})},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},"772b":function(t,n,e){},"91cc":function(t,n,e){"use strict";e.r(n);var o=e("e311"),a=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=a.a},9754:function(t,n,e){"use strict";var o=e("772b"),a=e.n(o);a.a},b533:function(t,n,e){"use strict";e.r(n);var o=e("4517"),a=e("91cc");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("9754");var s=e("2877"),i=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports},e311:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{show:!0,old:"",New:"",Newer:""}},onNavigationBarButtonTap:function(n){this.New==this.Newer?this.$http("/api/user/updatePassword",{oldPass:this.old,password:this.New,repassword:this.Newer}).then(function(n){1e3==n.data.code&&(t.showToast({title:"修改成功！",icon:"success",duration:2e3}),setTimeout(function(){t.navigateBack({delta:1})},2e3))}):t.showModal({title:"两次输入的密码不一致",icon:"none"})}};n.default=e}).call(this,e("6e42")["default"])}},[["55a1","common/runtime","common/vendor"]]]);
});
require('pages/user/account/password/password.js');
__wxRoute = 'pages/user/account/phone/phone';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/account/phone/phone.js';

define('pages/user/account/phone/phone.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/account/phone/phone"],{"034e":function(e,t,n){},"041d":function(e,t,n){"use strict";n.r(t);var o=n("77b8"),a=n("6aca");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("19ec");var u=n("2877"),c=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports},"19ec":function(e,t,n){"use strict";var o=n("034e"),a=n.n(o);a.a},"6aca":function(e,t,n){"use strict";n.r(t);var o=n("e731"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},"77b8":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},e731:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{getCodeText:"获取验证码",code:"",getCodeBtnColor:"#000",mobile:""}},methods:{btn:function(){this.$http("/api/user/updateUserInfo",{mobile:this.mobile}).then(function(t){1e3==t.data.code&&e.getStorage({key:"userInfo",success:function(o){o.data.mobile=t.data.data.mobile,console.log(n(o.data," at pages\\user\\account\\phone\\phone.vue:37")),e.setStorage({key:"userInfo",data:o.data,success:function(t){e.showToast({title:"修改成功！",icon:"success",duration:2e3}),setTimeout(function(){e.navigateBack({delta:1})},2e3)}})}})})},getCode:function(){var t=this;e.hideKeyboard(),this.getCodeisWaiting||(this.getCodeText="发送中...",this.getCodeisWaiting=!0,this.getCodeBtnColor="rgba(0,0,0,0.5)",setTimeout(function(){e.showToast({title:"验证码已发送",icon:"none"}),t.code=1234,t.setTimer()},1e3))},setTimer:function(){var e=this,t=60;this.getCodeText="重新获取(60)",this.Timer=setInterval(function(){if(t<=0)return e.getCodeisWaiting=!1,e.getCodeBtnColor="#eee",e.getCodeText="获取验证码",void clearInterval(e.Timer);e.getCodeText="重新获取("+t+")",t--},1e3)}}};t.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["c77d","common/runtime","common/vendor"]]]);
});
require('pages/user/account/phone/phone.js');
__wxRoute = 'pages/user/account/mail/mail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/account/mail/mail.js';

define('pages/user/account/mail/mail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/account/mail/mail"],{"04a4":function(n,t,u){"use strict";u.r(t);var a=u("4281"),e=u.n(a);for(var r in a)"default"!==r&&function(n){u.d(t,n,function(){return a[n]})}(r);t["default"]=e.a},"0592":function(n,t,u){"use strict";var a=u("2d0a"),e=u.n(a);e.a},"2d0a":function(n,t,u){},4281:function(n,t,u){},"89bd":function(n,t,u){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},e=[];u.d(t,"a",function(){return a}),u.d(t,"b",function(){return e})},e828:function(n,t,u){"use strict";u.r(t);var a=u("89bd"),e=u("04a4");for(var r in e)"default"!==r&&function(n){u.d(t,n,function(){return e[n]})}(r);u("0592");var c=u("2877"),o=Object(c["a"])(e["default"],a["a"],a["b"],!1,null,null,null);t["default"]=o.exports}},[["fe9e","common/runtime","common/vendor"]]]);
});
require('pages/user/account/mail/mail.js');
__wxRoute = 'pages/user/signature/signature';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/signature/signature.js';

define('pages/user/signature/signature.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/signature/signature"],{"772e":function(t,e,n){"use strict";var a=n("c8a5"),u=n.n(a);u.a},b1c8:function(t,e,n){"use strict";n.r(e);var a=n("cfe0"),u=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=u.a},c8a5:function(t,e,n){},cfe0:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=s(n("5af9"));function s(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{sign:"",details:""}},onLoad:function(e){var n=this;t.getStorage({key:"lang",success:function(e){n.details=u.default[e.data],t.setNavigationBarTitle({title:u.default[e.data].title})}}),null==e.data&&(this.sign=e.data)},methods:{btn:function(){this.$http("/api/user/updateUserInfo",{sign:this.sign}).then(function(e){1e3==e.data.code&&t.getStorage({key:"userInfo",success:function(n){n.data.sign=e.data.data.sign,console.log(a(n.data," at pages\\user\\signature\\signature.vue:44")),t.setStorage({key:"userInfo",data:n.data,success:function(e){t.showToast({title:"修改成功！"})}})}})})}}};e.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},e409:function(t,e,n){"use strict";n.r(e);var a=n("e750"),u=n("b1c8");for(var s in u)"default"!==s&&function(t){n.d(e,t,function(){return u[t]})}(s);n("772e");var i=n("2877"),o=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},e750:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})}},[["e58e","common/runtime","common/vendor"]]]);
});
require('pages/user/signature/signature.js');
__wxRoute = 'pages/integral/integral';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/integral/integral.js';

define('pages/integral/integral.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/integral/integral"],{"04b5":function(t,n,e){"use strict";e.r(n);var i=e("db27"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=a.a},"0b7d":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){t.tab=t.item.id})},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},"20f0":function(t,n,e){"use strict";e.r(n);var i=e("0b7d"),a=e("04b5");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("cb50");var l=e("2877"),r=Object(l["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports},cb50:function(t,n,e){"use strict";var i=e("f7eb"),a=e.n(i);a.a},db27:function(t,n,e){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(e("b785"));function u(t){return t&&t.__esModule?t:{default:t}}var l={data:function(){return{tab:0,list:[{img:"/static/img/qiandao.png",title:"签到送积分",text:"每日签到获得2积分",url:"",btn:"前往"},{img:"/static/img/qiandao.png",title:"好任务，看不停",text:"每天查看5次任务，可以获得5积分",url:"",btn:"前往"},{img:"/static/img/qiandao.png",title:"分享送积分",text:"每次分享，可以获得30积分",url:"",btn:"前往"},{img:"/static/img/qiandao.png",title:"认证送积分",text:"完成手机，实名认证，可以获得100积分完成手机，实名认证，可以获得100积分",url:"",btn:"前往"},{img:"/static/img/qiandao.png",title:"交稿送积分",text:"每天交稿5次，可以获得10积分",url:"",btn:"前往"},{img:"/static/img/qiandao.png",title:"注册送积分",text:"完成注册，可以获得50积分",url:"",btn:"前往"},{img:"/static/img/qiandao.png",title:"设置送积分",text:"完成位置设置，可以获得50积分",url:"",btn:"前往"}]}},onLoad:function(){var n=this;console.log(t(a.default," at pages\\integral\\integral.vue:90")),i.getStorage({key:"lang",success:function(t){n.list=a.default[t.data],i.setNavigationBarTitle({title:a.default[t.data].title})}})}};n.default=l}).call(this,e("0de9")["default"],e("6e42")["default"])},f7eb:function(t,n,e){}},[["5916","common/runtime","common/vendor"]]]);
});
require('pages/integral/integral.js');
__wxRoute = 'pages/user/security/security';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/security/security.js';

define('pages/user/security/security.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/security/security"],{"093c":function(t,e,n){"use strict";n.r(e);var u=n("5606"),a=n("8ff1");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);n("c00c");var r=n("2877"),o=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=o.exports},4808:function(t,e,n){"use strict";(function(t,u){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(n("3cd4"));function c(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{user:"",details:""}},onShow:function(){var e=this;t.getStorage({key:"lang",success:function(n){e.details=a.default[n.data],t.setNavigationBarTitle({title:a.default[n.data].title})}}),t.getStorage({key:"userInfo",success:function(t){console.log(u(t," at pages\\user\\security\\security.vue:50")),e.user=t.data}})}};e.default=r}).call(this,n("6e42")["default"],n("0de9")["default"])},5606:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},"8ff1":function(t,e,n){"use strict";n.r(e);var u=n("4808"),a=n.n(u);for(var c in u)"default"!==c&&function(t){n.d(e,t,function(){return u[t]})}(c);e["default"]=a.a},c00c:function(t,e,n){"use strict";var u=n("caf8"),a=n.n(u);a.a},caf8:function(t,e,n){}},[["1745","common/runtime","common/vendor"]]]);
});
require('pages/user/security/security.js');
__wxRoute = 'pages/user/language/language';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/language/language.js';

define('pages/user/language/language.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/language/language"],{"0c98":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},2900:function(t,e,a){"use strict";a.r(e);var n=a("0c98"),i=a("6167");for(var l in i)"default"!==l&&function(t){a.d(e,t,function(){return i[t]})}(l);a("fa3b");var u=a("2877"),o=Object(u["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},4603:function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=l(a("7854"));function l(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{list:[{id:"0",title:"中国",language:"zh"},{id:"1",title:"English",language:"en"},{id:"2",title:"日本語",language:"jp"},{id:"3",title:"한국어",language:"kor"},{id:"4",title:"Français",language:"fra"},{id:"5",title:"Español",language:"spa"},{id:"6",title:"ภาษาไทย",language:"th"},{id:"7",title:"عربي ،",language:"ara"},{id:"8",title:"русский язык",language:"ru"},{id:"9",title:"Português",language:"pt"},{id:"10",title:"Deutsch",language:"de"},{id:"11",title:"Italiano",language:"it"},{id:"12",title:"Ελληνικά",language:"el"},{id:"13",title:"Nederlands",language:"nl"},{id:"14",title:"Polski",language:"pl"},{id:"15",title:"Български",language:"bul"},{id:"16",title:"Eesti",language:"est"},{id:"17",title:"Dansk",language:"dan"},{id:"18",title:"Suomi",language:"fin"},{id:"19",title:"Česko",language:"cs"},{id:"20",title:"RomânăName",language:"rom"},{id:"21",title:"SlovenskoName",language:"slo"},{id:"22",title:"Svenska",language:"swe"},{id:"23",title:"MagyarName",language:"hu"},{id:"24",title:"ViệtName",language:"vie"}],current:"",info:{title:"Select Language",btn:"confirm"},showHeader:!0,statusHeight:0,headerPosition:"fixed",headerTop:null,statusTop:null}},onLoad:function(){var e=this;this.statusHeight=0,this.statusHeight=plus.navigator.getStatusbarHeight(),t.getStorage({key:"lang",success:function(t){e.info=i.default[t.data],e.current=t.data}})},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},methods:{exit:function(){t.navigateBack({delta:1})},showType:function(t){this.tabbarIndex=t,this.list=this.orderList[t]},radioChange:function(t){this.current=t.detail.value},Switch:function(e){var a=this;t.request({url:"http://127.0.0.1/tp5/public/index/index/lang",data:{lang:e},success:function(t){console.log(n(t," at pages\\user\\language\\language.vue:110")),a.text="request success"}})},primary:function(){t.setStorage({key:"lang",data:this.current,success:function(){t.reLaunch({url:"../../tabBar/home/home"})}})},toPage:function(e){e?t.navigateTo({url:e}):t.showToast({title:"模板未包含此页面",icon:"none"})},clear:function(){t.showModal({content:"确定要清除缓存吗？",confirmText:"确定",cancelText:"取消",success:function(e){console.log(n(e," at pages\\user\\language\\language.vue:143")),e.confirm&&t.clearStorage(),e.cancel}})}}};e.default=u}).call(this,a("6e42")["default"],a("0de9")["default"])},6167:function(t,e,a){"use strict";a.r(e);var n=a("4603"),i=a.n(n);for(var l in n)"default"!==l&&function(t){a.d(e,t,function(){return n[t]})}(l);e["default"]=i.a},d22f:function(t,e,a){},fa3b:function(t,e,a){"use strict";var n=a("d22f"),i=a.n(n);i.a}},[["4198","common/runtime","common/vendor"]]]);
});
require('pages/user/language/language.js');
__wxRoute = 'pages/user/myQR/myQR';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/myQR/myQR.js';

define('pages/user/myQR/myQR.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/myQR/myQR"],{4895:function(t,n,e){"use strict";e.r(n);var o=e("f011"),u=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=u.a},"6e02":function(t,n,e){"use strict";var o=e("77a6"),u=e.n(o);u.a},7395:function(t,n,e){"use strict";e.r(n);var o=e("94de"),u=e("4895");for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);e("6e02");var a=e("2877"),s=Object(a["a"])(u["default"],o["a"],o["b"],!1,null,null,null);n["default"]=s.exports},"77a6":function(t,n,e){},"94de":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})},f011:function(t,n,e){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{tis:"保存到相册",showBtn:!1}},onLoad:function(){this.showBtn=!0},methods:{printscreen:function(){this.tis="正在保存";var n=this.$mp.page.$getAppWebview(),o=new plus.nativeObj.Bitmap;this.showBtn=!1,this.$nextTick(function(){var u=this;setTimeout(function(){n.draw(o,function(n){u.showBtn=!0,console.log(t("bitmap绘制图片成功"," at pages\\user\\myQR\\myQR.vue:45")),console.log(t("e: "+JSON.stringify(n)," at pages\\user\\myQR\\myQR.vue:46")),o.save("_doc/Qr.jpg",{overwrite:!0,quality:100},function(t){plus.gallery.save(t.target,function(t){e.showToast({title:"保存成功"}),u.tis="保存到相册",o.clear()},function(t){o.clear()})},function(n){console.log(t("保存图片失败："+JSON.stringify(n)," at pages\\user\\myQR\\myQR.vue:61"))})},function(n){console.log(t("bitmap绘制图片失败："+JSON.stringify(n)," at pages\\user\\myQR\\myQR.vue:64"))})},200)})}}};n.default=o}).call(this,e("0de9")["default"],e("6e42")["default"])}},[["a056","common/runtime","common/vendor"]]]);
});
require('pages/user/myQR/myQR.js');
__wxRoute = 'pages/msg/msg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/msg/msg.js';

define('pages/msg/msg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/msg"],{2754:function(e,i,t){"use strict";var a=t("921c"),m=t.n(a);m.a},"921c":function(e,i,t){},a230:function(e,i,t){"use strict";t.r(i);var a=t("a268"),m=t.n(a);for(var c in a)"default"!==c&&function(e){t.d(i,e,function(){return a[e]})}(c);i["default"]=m.a},a268:function(e,i,t){"use strict";(function(e,t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{chatList:[{uid:1,username:"鲜果蔬专营店",face:"/static/img/im/face/face_1.jpg",time:"13:08",msg:"亲，20点前下单都是当天送达的",tisNum:1},{uid:2,username:"官店大欺客旗舰店",face:"/static/img/im/face/face_2.jpg",time:"13:05",msg:"问那么多干什么？不想买就滚~",tisNum:0},{uid:3,username:"妙不可言",face:"/static/img/im/face/face_3.jpg",time:"12:15",msg:"推荐一个商品呗？",tisNum:0},{uid:4,username:"茶叶专卖",face:"/static/img/im/face/face_4.jpg",time:"12:11",msg:"现在卖的都是未过青的茶哦",tisNum:0},{uid:5,username:"likeKiss客服",face:"/static/img/im/face/face_5.jpg",time:"12:10",msg:"你好，发福建快递多久送到的？",tisNum:0},{uid:6,username:"白开水",face:"/static/img/im/face/face_6.jpg",time:"12:10",msg:"在吗？",tisNum:0},{uid:7,username:"衣帽间的叹息",face:"/static/img/im/face/face_7.jpg",time:"11:56",msg:"新品上市，欢迎选购",tisNum:0},{uid:8,username:"景萧疏",face:"/static/img/im/face/face_8.jpg",time:"11:56",msg:"商品七天无理由退换的",tisNum:0},{uid:9,username:"文宁先生",face:"/static/img/im/face/face_9.jpg",time:"12:15",msg:"星期天再发货的",tisNum:0},{uid:10,username:"高端Chieh",face:"/static/img/im/face/face_10.jpg",time:"12:36",msg:"建议你直接先测量好尺码在选购的。",tisNum:0},{uid:11,username:"mode旗舰店",face:"/static/img/im/face/face_11.jpg",time:"12:40",msg:"新品5折，还有大量优惠券。",tisNum:0},{uid:12,username:"敏萘客服",face:"/static/img/im/face/face_12.jpg",time:"12:36",msg:"还没有用，等我明天早上试一下",tisNum:0},{uid:13,username:"春天里的花",face:"/static/img/im/face/face_13.jpg",time:"12:36",msg:"适用于成年人的，小孩不适用的",tisNum:0},{uid:14,username:"电脑外设专业户",face:"/static/img/im/face/face_13.jpg",time:"12:36",msg:"把上面的螺丝拆下来，把铁片撬开就能看见了",tisNum:0},{uid:15,username:"至善汽车用品",face:"/static/img/im/face/face_15.jpg",time:"12:36",msg:"这个产品是原车配件，完美装上的",tisNum:0}]}},onReady:function(){},onPullDownRefresh:function(){setTimeout(function(){e.stopPullDownRefresh()},1e3)},onLoad:function(){},onNavigationBarButtonTap:function(i){console.log(t(i," at pages\\msg\\msg.vue:179")),e.navigateTo({url:"friend/friend"})},methods:{toChat:function(i){e.navigateTo({url:"chat/chat?name="+i.username})}}};i.default=a}).call(this,t("6e42")["default"],t("0de9")["default"])},c939:function(e,i,t){"use strict";var a=function(){var e=this,i=e.$createElement;e._self._c},m=[];t.d(i,"a",function(){return a}),t.d(i,"b",function(){return m})},df4d:function(e,i,t){"use strict";t.r(i);var a=t("c939"),m=t("a230");for(var c in m)"default"!==c&&function(e){t.d(i,e,function(){return m[e]})}(c);t("2754");var u=t("2877"),s=Object(u["a"])(m["default"],a["a"],a["b"],!1,null,null,null);i["default"]=s.exports}},[["dd7b","common/runtime","common/vendor"]]]);
});
require('pages/msg/msg.js');
__wxRoute = 'pages/msg/friend/friend';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/msg/friend/friend.js';

define('pages/msg/friend/friend.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/friend/friend"],{"49c6":function(n,e,t){"use strict";var a=t("f108"),u=t.n(a);u.a},"4ca5":function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return u})},8088:function(n,e,t){"use strict";t.r(e);var a=t("bced"),u=t.n(a);for(var c in a)"default"!==c&&function(n){t.d(e,n,function(){return a[n]})}(c);e["default"]=u.a},b2a7:function(n,e,t){"use strict";t.r(e);var a=t("4ca5"),u=t("8088");for(var c in u)"default"!==c&&function(n){t.d(e,n,function(){return u[n]})}(c);t("49c6");var r=t("2877"),o=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},bced:function(n,e,t){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},methods:{scan:function(){n.scanCode({success:function(n){console.log(t("条码类型："+n.scanType," at pages\\msg\\friend\\friend.vue:43")),console.log(t("条码内容："+n.result," at pages\\msg\\friend\\friend.vue:44"))}})},search:function(){n.navigateTo({url:"../search/search"})},phone:function(){n.navigateTo({url:"../address/address"})}}};e.default=a}).call(this,t("6e42")["default"],t("0de9")["default"])},f108:function(n,e,t){}},[["cd6b","common/runtime","common/vendor"]]]);
});
require('pages/msg/friend/friend.js');
__wxRoute = 'pages/msg/address/address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/msg/address/address.js';

define('pages/msg/address/address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/address/address"],{"20b7":function(e,n,t){"use strict";(function(e,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=u(t("432c"));function u(e){return e&&e.__esModule?e:{default:e}}var o=function(){return t.e("components/uni-indexed-list/uni-indexed-list").then(t.bind(null,"a7d8"))},d={components:{uniIndexedList:o},data:function(){return{list:s.default.list}},onLoad:function(){e.addPhoneContact({nickName:"昵称",lastName:"姓",firstName:"名",remark:"备注",mobilePhoneNumber:"114",weChatNumber:"wx123",success:function(){console.log(a("success"," at pages\\msg\\address\\address.vue:27"))},fail:function(){console.log(a("fail"," at pages\\msg\\address\\address.vue:30"))}})},methods:{bindClick:function(e){console.log(a("点击item，返回数据"+JSON.stringify(e)," at pages\\msg\\address\\address.vue:36"))}}};n.default=d}).call(this,t("6e42")["default"],t("0de9")["default"])},"3ca4":function(e,n,t){"use strict";t.r(n);var a=t("20b7"),s=t.n(a);for(var u in a)"default"!==u&&function(e){t.d(n,e,function(){return a[e]})}(u);n["default"]=s.a},"909f":function(e,n,t){"use strict";var a=t("d131"),s=t.n(a);s.a},d131:function(e,n,t){},f232:function(e,n,t){"use strict";t.r(n);var a=t("f9fd"),s=t("3ca4");for(var u in s)"default"!==u&&function(e){t.d(n,e,function(){return s[e]})}(u);t("909f");var o=t("2877"),d=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);n["default"]=d.exports},f9fd:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},s=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return s})}},[["f2bd","common/runtime","common/vendor"]]]);
});
require('pages/msg/address/address.js');
__wxRoute = 'pages/msg/userinfo/userinfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/msg/userinfo/userinfo.js';

define('pages/msg/userinfo/userinfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/userinfo/userinfo"],{"13f2":function(n,t,u){},"5e0f":function(n,t,u){"use strict";var e=u("d2f8"),r=u.n(e);r.a},"5e42":function(n,t,u){"use strict";u.r(t);var e=u("cb77"),r=u("9aa4");for(var f in r)"default"!==f&&function(n){u.d(t,n,function(){return r[n]})}(f);u("5e0f");var a=u("2877"),o=Object(a["a"])(r["default"],e["a"],e["b"],!1,null,null,null);t["default"]=o.exports},"9aa4":function(n,t,u){"use strict";u.r(t);var e=u("13f2"),r=u.n(e);for(var f in e)"default"!==f&&function(n){u.d(t,n,function(){return e[n]})}(f);t["default"]=r.a},cb77:function(n,t,u){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},r=[];u.d(t,"a",function(){return e}),u.d(t,"b",function(){return r})},d2f8:function(n,t,u){}},[["4d82","common/runtime","common/vendor"]]]);
});
require('pages/msg/userinfo/userinfo.js');
__wxRoute = 'pages/msg/search/search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/msg/search/search.js';

define('pages/msg/search/search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/search/search"],{1118:function(n,t,e){"use strict";e.r(t);var u=e("f677"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a},"4a36":function(n,t,e){"use strict";e.r(t);var u=e("54fd"),r=e("1118");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);e("4cdc");var c=e("2877"),o=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},"4cdc":function(n,t,e){"use strict";var u=e("8640"),r=e.n(u);r.a},"54fd":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})},8640:function(n,t,e){},f677:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{list:["",""]}},methods:{userinfo:function(){n.navigateTo({url:"../userinfo/userinfo"})}}};t.default=e}).call(this,e("6e42")["default"])}},[["c28e","common/runtime","common/vendor"]]]);
});
require('pages/msg/search/search.js');
__wxRoute = 'pages/msg/chat/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/msg/chat/chat.js';

define('pages/msg/chat/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/chat/chat"],{1278:function(i,g,t){"use strict";var f=function(){var i=this,g=i.$createElement;i._self._c},l=[];t.d(g,"a",function(){return f}),t.d(g,"b",function(){return l})},4700:function(i,g,t){},"7b50":function(i,g,t){"use strict";(function(i,t){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var f={data:function(){return{textMsg:"",scrollAnimation:!1,scrollTop:0,scrollToView:"",msgList:[],msgImgList:[],myuid:0,RECORDER:i.getRecorderManager(),isVoice:!1,voiceTis:"按住 说话",recordTis:"手指上滑 取消发送",recording:!1,willStop:!1,initPoint:{identifier:0,Y:0},recordTimer:null,recordLength:0,AUDIO:i.createInnerAudioContext(),playMsgid:null,VoiceTimer:null,showEmji:"",emojiList:[[{url:"100.gif",alt:"[微笑]"},{url:"101.gif",alt:"[伤心]"},{url:"102.gif",alt:"[美女]"},{url:"103.gif",alt:"[发呆]"},{url:"104.gif",alt:"[墨镜]"},{url:"105.gif",alt:"[哭]"},{url:"106.gif",alt:"[羞]"},{url:"107.gif",alt:"[哑]"},{url:"108.gif",alt:"[睡]"},{url:"109.gif",alt:"[哭]"},{url:"110.gif",alt:"[囧]"},{url:"111.gif",alt:"[怒]"},{url:"112.gif",alt:"[调皮]"},{url:"113.gif",alt:"[笑]"},{url:"114.gif",alt:"[惊讶]"},{url:"115.gif",alt:"[难过]"},{url:"116.gif",alt:"[酷]"},{url:"117.gif",alt:"[汗]"},{url:"118.gif",alt:"[抓狂]"},{url:"119.gif",alt:"[吐]"},{url:"120.gif",alt:"[笑]"},{url:"121.gif",alt:"[快乐]"},{url:"122.gif",alt:"[奇]"},{url:"123.gif",alt:"[傲]"}],[{url:"124.gif",alt:"[饿]"},{url:"125.gif",alt:"[累]"},{url:"126.gif",alt:"[吓]"},{url:"127.gif",alt:"[汗]"},{url:"128.gif",alt:"[高兴]"},{url:"129.gif",alt:"[闲]"},{url:"130.gif",alt:"[努力]"},{url:"131.gif",alt:"[骂]"},{url:"132.gif",alt:"[疑问]"},{url:"133.gif",alt:"[秘密]"},{url:"134.gif",alt:"[乱]"},{url:"135.gif",alt:"[疯]"},{url:"136.gif",alt:"[哀]"},{url:"137.gif",alt:"[鬼]"},{url:"138.gif",alt:"[打击]"},{url:"139.gif",alt:"[bye]"},{url:"140.gif",alt:"[汗]"},{url:"141.gif",alt:"[抠]"},{url:"142.gif",alt:"[鼓掌]"},{url:"143.gif",alt:"[糟糕]"},{url:"144.gif",alt:"[恶搞]"},{url:"145.gif",alt:"[什么]"},{url:"146.gif",alt:"[什么]"},{url:"147.gif",alt:"[累]"}],[{url:"148.gif",alt:"[看]"},{url:"149.gif",alt:"[难过]"},{url:"150.gif",alt:"[难过]"},{url:"151.gif",alt:"[坏]"},{url:"152.gif",alt:"[亲]"},{url:"153.gif",alt:"[吓]"},{url:"154.gif",alt:"[可怜]"},{url:"155.gif",alt:"[刀]"},{url:"156.gif",alt:"[水果]"},{url:"157.gif",alt:"[酒]"},{url:"158.gif",alt:"[篮球]"},{url:"159.gif",alt:"[乒乓]"},{url:"160.gif",alt:"[咖啡]"},{url:"161.gif",alt:"[美食]"},{url:"162.gif",alt:"[动物]"},{url:"163.gif",alt:"[鲜花]"},{url:"164.gif",alt:"[枯]"},{url:"165.gif",alt:"[唇]"},{url:"166.gif",alt:"[爱]"},{url:"167.gif",alt:"[分手]"},{url:"168.gif",alt:"[生日]"},{url:"169.gif",alt:"[电]"},{url:"170.gif",alt:"[炸弹]"},{url:"171.gif",alt:"[刀子]"}],[{url:"172.gif",alt:"[足球]"},{url:"173.gif",alt:"[瓢虫]"},{url:"174.gif",alt:"[翔]"},{url:"175.gif",alt:"[月亮]"},{url:"176.gif",alt:"[太阳]"},{url:"177.gif",alt:"[礼物]"},{url:"178.gif",alt:"[抱抱]"},{url:"179.gif",alt:"[拇指]"},{url:"180.gif",alt:"[贬低]"},{url:"181.gif",alt:"[握手]"},{url:"182.gif",alt:"[剪刀手]"},{url:"183.gif",alt:"[抱拳]"},{url:"184.gif",alt:"[勾引]"},{url:"185.gif",alt:"[拳头]"},{url:"186.gif",alt:"[小拇指]"},{url:"187.gif",alt:"[拇指八]"},{url:"188.gif",alt:"[食指]"},{url:"189.gif",alt:"[ok]"},{url:"190.gif",alt:"[情侣]"},{url:"191.gif",alt:"[爱心]"},{url:"192.gif",alt:"[蹦哒]"},{url:"193.gif",alt:"[颤抖]"},{url:"194.gif",alt:"[怄气]"},{url:"195.gif",alt:"[跳舞]"}],[{url:"196.gif",alt:"[发呆]"},{url:"197.gif",alt:"[背着]"},{url:"198.gif",alt:"[伸手]"},{url:"199.gif",alt:"[耍帅]"},{url:"200.png",alt:"[微笑]"},{url:"201.png",alt:"[生病]"},{url:"202.png",alt:"[哭泣]"},{url:"203.png",alt:"[吐舌]"},{url:"204.png",alt:"[迷糊]"},{url:"205.png",alt:"[瞪眼]"},{url:"206.png",alt:"[恐怖]"},{url:"207.png",alt:"[忧愁]"},{url:"208.png",alt:"[眨眉]"},{url:"209.png",alt:"[闭眼]"},{url:"210.png",alt:"[鄙视]"},{url:"211.png",alt:"[阴暗]"},{url:"212.png",alt:"[小鬼]"},{url:"213.png",alt:"[礼物]"},{url:"214.png",alt:"[拜佛]"},{url:"215.png",alt:"[力量]"},{url:"216.png",alt:"[金钱]"},{url:"217.png",alt:"[蛋糕]"},{url:"218.png",alt:"[彩带]"},{url:"219.png",alt:"[礼物]"}]],onlineEmoji:{"100.gif":"AbNQgA.gif","101.gif":"AbN3ut.gif","102.gif":"AbNM3d.gif","103.gif":"AbN8DP.gif","104.gif":"AbNljI.gif","105.gif":"AbNtUS.gif","106.gif":"AbNGHf.gif","107.gif":"AbNYE8.gif","108.gif":"AbNaCQ.gif","109.gif":"AbNN4g.gif","110.gif":"AbN0vn.gif","111.gif":"AbNd3j.gif","112.gif":"AbNsbV.gif","113.gif":"AbNwgs.gif","114.gif":"AbNrD0.gif","115.gif":"AbNDuq.gif","116.gif":"AbNg5F.gif","117.gif":"AbN6ET.gif","118.gif":"AbNcUU.gif","119.gif":"AbNRC4.gif","120.gif":"AbNhvR.gif","121.gif":"AbNf29.gif","122.gif":"AbNW8J.gif","123.gif":"AbNob6.gif","124.gif":"AbN5K1.gif","125.gif":"AbNHUO.gif","126.gif":"AbNIDx.gif","127.gif":"AbN7VK.gif","128.gif":"AbNb5D.gif","129.gif":"AbNX2d.gif","130.gif":"AbNLPe.gif","131.gif":"AbNjxA.gif","132.gif":"AbNO8H.gif","133.gif":"AbNxKI.gif","134.gif":"AbNzrt.gif","135.gif":"AbU9Vf.gif","136.gif":"AbUSqP.gif","137.gif":"AbUCa8.gif","138.gif":"AbUkGQ.gif","139.gif":"AbUFPg.gif","140.gif":"AbUPIS.gif","141.gif":"AbUZMn.gif","142.gif":"AbUExs.gif","143.gif":"AbUA2j.gif","144.gif":"AbUMIU.gif","145.gif":"AbUerq.gif","146.gif":"AbUKaT.gif","147.gif":"AbUmq0.gif","148.gif":"AbUuZV.gif","149.gif":"AbUliF.gif","150.gif":"AbU1G4.gif","151.gif":"AbU8z9.gif","152.gif":"AbU3RJ.gif","153.gif":"AbUYs1.gif","154.gif":"AbUJMR.gif","155.gif":"AbUadK.gif","156.gif":"AbUtqx.gif","157.gif":"AbUUZ6.gif","158.gif":"AbUBJe.gif","159.gif":"AbUdIO.gif","160.gif":"AbU0iD.gif","161.gif":"AbUrzd.gif","162.gif":"AbUDRH.gif","163.gif":"AbUyQA.gif","164.gif":"AbUWo8.gif","165.gif":"AbU6sI.gif","166.gif":"AbU2eP.gif","167.gif":"AbUcLt.gif","168.gif":"AbU4Jg.gif","169.gif":"AbURdf.gif","170.gif":"AbUhFS.gif","171.gif":"AbU5WQ.gif","172.gif":"AbULwV.gif","173.gif":"AbUIzj.gif","174.gif":"AbUTQs.gif","175.gif":"AbU7yn.gif","176.gif":"AbUqe0.gif","177.gif":"AbUHLq.gif","178.gif":"AbUOoT.gif","179.gif":"AbUvYF.gif","180.gif":"AbUjFU.gif","181.gif":"AbaSSJ.gif","182.gif":"AbUxW4.gif","183.gif":"AbaCO1.gif","184.gif":"Abapl9.gif","185.gif":"Aba9yR.gif","186.gif":"AbaFw6.gif","187.gif":"Abaiex.gif","188.gif":"AbakTK.gif","189.gif":"AbaZfe.png","190.gif":"AbaEFO.gif","191.gif":"AbaVYD.gif","192.gif":"AbamSH.gif","193.gif":"AbaKOI.gif","194.gif":"Abanld.gif","195.gif":"Abau6A.gif","196.gif":"AbaQmt.gif","197.gif":"Abal0P.gif","198.gif":"AbatpQ.gif","199.gif":"Aba1Tf.gif","200.png":"Aba8k8.png","201.png":"AbaGtS.png","202.png":"AbaJfg.png","203.png":"AbaNlj.png","204.png":"Abawmq.png","205.png":"AbaU6s.png","206.png":"AbaaXn.png","207.png":"Aba000.png","208.png":"AbarkT.png","209.png":"AbastU.png","210.png":"AbaB7V.png","211.png":"Abafn1.png","212.png":"Abacp4.png","213.png":"AbayhF.png","214.png":"Abag1J.png","215.png":"Aba2c9.png","216.png":"AbaRXR.png","217.png":"Aba476.png","218.png":"Abah0x.png","219.png":"Abdg58.png"}}},onLoad:function(g){var t=this;i.setNavigationBarTitle({title:g.name}),this.getMsgList(),this.AUDIO.onEnded(function(i){t.playMsgid=null}),this.RECORDER.onStart(function(i){t.recordBegin(i)}),this.RECORDER.onStop(function(i){t.recordEnd(i)})},methods:{getMsgList:function(){for(var i=[{id:0,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:"12:56",type:"text",msg:{content:"为什么温度会相差那么大？"}},{id:1,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:57",type:"text",msg:{content:"这个是有偏差的，两个温度相差十几二十度是很正常的，如果相差五十度，那即是质量问题了。"}},{id:2,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:59",type:"voice",msg:{url:"/static/voice/3.aac",length:"00:06"}},{id:3,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:"13:05",type:"voice",msg:{url:"/static/voice/2.mp3",length:"00:06"}},{id:4,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:"13:05",type:"img",msg:{url:"/static/img/goods/p10.jpg",w:200,h:200}},{id:5,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:59",type:"img",msg:{url:"/static/img/q.jpg",w:1920,h:1080}}],g=0;g<i.length;g++)"img"==i[g].type&&(i[g]=this.setPicSize(i[g]),console.log(t("list[i]: "+JSON.stringify(i[g])," at pages\\msg\\chat\\chat.vue:183")),this.msgImgList.push(i[g].msg.url));this.msgList=i,this.$nextTick(function(){this.scrollTop=9999,this.scrollAnimation=!0})},setPicSize:function(g){var t=i.upx2px(350),f=i.upx2px(350);if(g.msg.w>t||g.msg.h>f){var l=g.msg.w/g.msg.h;g.msg.w>g.msg.h?(g.msg.w=t,g.msg.h=g.msg.w/l):(g.msg.h=f,g.msg.w=g.msg.h*l)}return g},screenMsg:function(g){switch(g.uid!=this.myuid&&i.vibrateLong(),g.type){case"text":this.addTextMsg(g);break;case"voice":this.addVoiceMsg(g);break;case"img":this.addImgMsg(g);break}this.$nextTick(function(){this.scrollToView="msg"+g.id})},chooseEmoji:function(){this.showEmji="showEmoji"==this.showEmji?"hideEmoji":"showEmoji"},hideEmoji:function(){this.showEmji="showEmoji"==this.showEmji?"hideEmoji":""},addEmoji:function(i){this.textMsg+=i.alt},sendText:function(){if(this.hideEmoji(),this.textMsg){var i=this.replaceEmoji(this.textMsg),g={content:i};this.sendMsg(g,"text"),this.textMsg=""}},replaceEmoji:function(i){var g=this,f=i.replace(/\[([^(\]|\[)]*)\]/g,function(i,f){console.log(t("item: "+i," at pages\\msg\\chat\\chat.vue:257"));for(var l=0;l<g.emojiList.length;l++)for(var a=g.emojiList[l],e=0;e<a.length;e++){var s=a[e];if(s.alt==i){var n="https://s2.ax1x.com/2019/04/12/",r='<img src="'+n+g.onlineEmoji[s.url]+'">';return console.log(t("imgstr: "+r," at pages\\msg\\chat\\chat.vue:266")),r}}});return'<div style="display: flex;align-items: center;">'+f+"</div>"},chooseImage:function(){var g=this;this.hideEmoji(),i.chooseImage({sizeType:["original","compressed"],success:function(f){for(var l=function(l){i.getImageInfo({src:f.tempFilePaths[l],success:function(i){console.log(t(i.width," at pages\\msg\\chat\\chat.vue:284")),console.log(t(i.height," at pages\\msg\\chat\\chat.vue:285"));var a={url:f.tempFilePaths[l],w:i.width,h:i.height};g.sendMsg(a,"img")}})},a=0;a<f.tempFilePaths.length;a++)l(a)}})},sendMsg:function(i,g){var t=this,f=new Date,l=this.msgList[this.msgList.length-1].id;l++;var a={id:l,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:f.getHours()+":"+f.getMinutes(),type:g,msg:i};this.screenMsg(a),setTimeout(function(){l=t.msgList[t.msgList.length-1].id,l++,a={id:l,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:f.getHours()+":"+f.getMinutes(),type:g,msg:i},t.screenMsg(a)},3e3)},addTextMsg:function(i){this.msgList.push(i)},addVoiceMsg:function(i){this.msgList.push(i)},addImgMsg:function(i){i=this.setPicSize(i),this.msgImgList.push(i.msg.url),this.msgList.push(i)},showPic:function(g){i.previewImage({indicator:"none",current:g.msg.url,urls:this.msgImgList})},playVoice:function(i){this.playMsgid=i.id,this.AUDIO.src=i.msg.url,console.log(t("msg.msg.url: "+i.msg.url," at pages\\msg\\chat\\chat.vue:337")),this.AUDIO.play()},voiceBegin:function(i){i.touches.length>1||(this.initPoint.Y=i.touches[0].clientY,this.initPoint.identifier=i.touches[0].identifier,this.RECORDER.start({format:"aac"}))},recordBegin:function(i){var g=this;this.recording=!0,this.voiceTis="松开 结束",this.recordLength=0,this.recordTimer=setInterval(function(){g.recordLength++},1e3)},voiceCancel:function(){this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.willStop=!0,this.RECORDER.stop()},voiceIng:function(g){if(this.recording){var t=g.touches[0];this.initPoint.Y-t.clientY>=i.upx2px(100)?(this.willStop=!0,this.recordTis="松开手指 取消发送"):(this.willStop=!1,this.recordTis="手指上滑 取消发送")}},voiceEnd:function(i){this.recording&&(this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.RECORDER.stop())},recordEnd:function(i){if(clearInterval(this.recordTimer),this.willStop)console.log(t("取消发送录音"," at pages\\msg\\chat\\chat.vue:416"));else{plus.io.resolveLocalFileSystemURL(i.tempFilePath,function(i){i.file(function(i){console.log(t(i.size+"--"+i.name," at pages\\msg\\chat\\chat.vue:399"))})},function(i){alert("Resolve file URL failed: "+i.message)}),console.log(t("e: "+JSON.stringify(i)," at pages\\msg\\chat\\chat.vue:404"));var g={length:0,url:i.tempFilePath},f=parseInt(this.recordLength/60),l=this.recordLength%60;f=f<10?"0"+f:f,l=l<10?"0"+l:l,g.length=f+":"+l,this.sendMsg(g,"voice")}this.willStop=!1},switchVoice:function(){this.hideEmoji(),this.isVoice=!this.isVoice},discard:function(){}}};g.default=f}).call(this,t("6e42")["default"],t("0de9")["default"])},bdfa:function(i,g,t){"use strict";t.r(g);var f=t("1278"),l=t("f150");for(var a in l)"default"!==a&&function(i){t.d(g,i,function(){return l[i]})}(a);t("cbd4");var e=t("2877"),s=Object(e["a"])(l["default"],f["a"],f["b"],!1,null,null,null);g["default"]=s.exports},cbd4:function(i,g,t){"use strict";var f=t("4700"),l=t.n(f);l.a},f150:function(i,g,t){"use strict";t.r(g);var f=t("7b50"),l=t.n(f);for(var a in f)"default"!==a&&function(i){t.d(g,i,function(){return f[i]})}(a);g["default"]=l.a}},[["229f","common/runtime","common/vendor"]]]);
});
require('pages/msg/chat/chat.js');
__wxRoute = 'pages/user/coupon/coupon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/coupon/coupon.js';

define('pages/user/coupon/coupon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/coupon/coupon"],{"6baa":function(t,e,i){"use strict";var n=i("a06f"),o=i.n(n);o.a},"8d3f":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{couponValidList:[{id:1,title:"日常用品立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"满50使用"},{id:2,title:"家用电器立减100元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"100",criteria:"满500使用"},{id:3,title:"全场立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"无门槛"},{id:4,title:"全场立减50元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"50",criteria:"满1000使用"}],couponinvalidList:[{id:1,title:"日常用品立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"满50使用"},{id:2,title:"家用电器立减100元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"100",criteria:"满500使用"},{id:3,title:"全场立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"无门槛"},{id:4,title:"全场立减50元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"50",criteria:"满1000使用"}],headerTop:0,typeClass:"valid",subState:"",theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){},methods:{switchType:function(e){var i=this;this.typeClass!=e&&(t.pageScrollTo({scrollTop:0,duration:0}),this.typeClass=e,this.subState=""==this.typeClass?"":"show"+e,setTimeout(function(){i.oldIndex=null,i.theIndex=null,i.subState="valid"==i.typeClass?"":i.subState},200))},touchStart:function(t,e){e.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[e.touches[0].pageX,e.touches[0].pageY])},touchMove:function(t,e){var i=this;if(e.touches.length>1)this.isStop=!0;else{var n=e.touches[0].pageX-this.initXY[0],o=e.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(n)<5||(Math.abs(o)>Math.abs(n)?this.isStop=!0:n<0?(this.theIndex=t,this.isStop=!0):n>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){i.oldIndex=null},150)))}},touchEnd:function(t,e){this.isStop=!1},deleteCoupon:function(t,e){for(var i=e.length,n=0;n<i;n++)if(t==e[n].id){e.splice(n,1);break}this.oldIndex=null,this.theIndex=null},discard:function(){}}};e.default=i}).call(this,i("6e42")["default"])},a06f:function(t,e,i){},a241:function(t,e,i){"use strict";i.r(e);var n=i("8d3f"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=o.a},d95d:function(t,e,i){"use strict";i.r(e);var n=i("f1ed"),o=i("a241");for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);i("6baa");var a=i("2877"),r=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},f1ed:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})}},[["1b67","common/runtime","common/vendor"]]]);
});
require('pages/user/coupon/coupon.js');
__wxRoute = 'pages/product/product';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/product.js';

define('pages/product/product.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/product"],{"0e4c":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{goodsList:[{id:1,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:2,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:3,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1}],api_token:""}},onNavigationBarButtonTap:function(e){console.log(t(e," at pages\\product\\product.vue:36")),n.navigateTo({url:"addProduct/addProduct"})},onShow:function(){var e=this;n.getStorage({key:"token",success:function(o){e.api_token=o.data;var a=e;n.request({url:"http://192.168.101.52/api/user/workList",data:{api_token:a.api_token},success:function(e){console.log(t(e," at pages\\product\\product.vue:54"))}})},fail:function(t){}})}};e.default=o}).call(this,n("0de9")["default"],n("6e42")["default"])},"2fd3":function(t,e,n){"use strict";n.r(e);var o=n("0e4c"),a=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e["default"]=a.a},"8b25":function(t,e,n){"use strict";n.r(e);var o=n("e3b8"),a=n("2fd3");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);n("c1c1");var u=n("2877"),i=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},c1c1:function(t,e,n){"use strict";var o=n("eba1"),a=n.n(o);a.a},e3b8:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},eba1:function(t,e,n){}},[["9a2c","common/runtime","common/vendor"]]]);
});
require('pages/product/product.js');
__wxRoute = 'pages/shop/shop';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shop/shop.js';

define('pages/shop/shop.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop/shop"],{"76e4":function(t,i,e){"use strict";e.r(i);var a=e("fde1"),o=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=o.a},"80bc":function(t,i,e){"use strict";var a=e("ae72"),o=e.n(a);o.a},"9b29":function(t,i,e){"use strict";e.r(i);var a=e("a904"),o=e("76e4");for(var n in o)"default"!==n&&function(t){e.d(i,t,function(){return o[t]})}(n);e("80bc");var c=e("2877"),s=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,null,null);i["default"]=s.exports},a904:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement;t._self._c},o=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return o})},ae72:function(t,i,e){},fde1:function(t,i,e){"use strict";(function(t,e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,tab:0,fixation:!1,renderImage:!0,distance:"0",imglist:["../../static/img/1.jpg","../../static/img/2.jpg","../../static/img/3.jpg","../../static/img/face.jpg","../../static/img/q.jpg","../../static/img/userbg.jpg"],productList:[{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg",title:"Apple iPhone X 256GB 深空灰色 移动联通电信4G手机",originalPrice:9999,favourPrice:8888,tip:"自营"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg",title:"Apple iPad 平板电脑 2018年新款9.7英寸",originalPrice:3499,favourPrice:3399,tip:"优惠"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg",title:"Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）",originalPrice:12999,favourPrice:10688,tip:"秒杀"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg",title:"Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色",originalPrice:999,favourPrice:958,tip:"秒杀"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg",title:"微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）",originalPrice:8888,favourPrice:8288,tip:"优惠"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg",title:"Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）",originalPrice:2899,favourPrice:2799,tip:"自营"}]}},onLoad:function(){this.statusHeight=0,this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight(),this.$http("/api/user/myShop",{},"get").then(function(t){})},onPageScroll:function(i){console.log(t(i," at pages\\shop\\shop.vue:186")),this.fixation=i.scrollTop>120},methods:{ViewImage:function(i){e.previewImage({urls:this.imglist,current:i,success:function(i){console.log(t(i," at pages\\shop\\shop.vue:195"))}})},tablist:function(t){this.tab=t,this.distance=0,this.distance=100*t},exit:function(){e.navigateBack({delta:1})},changeTab:function(i){console.log(t(i.target.current," at pages\\shop\\shop.vue:210")),this.tab=i.target.current,this.distance=0,this.distance=100*i.target.current},pageScroll:function(i){console.log(t(i.detail.scrollTop," at pages\\shop\\shop.vue:216"));var e=i.detail.scrollTop;this.fixation=e>145},scrollB:function(i){console.log(t(i.detail.scrollTop," at pages\\shop\\shop.vue:222"));var e=i.detail.scrollTop;this.fixation=0!=e}}};i.default=a}).call(this,e("0de9")["default"],e("6e42")["default"])}},[["e258","common/runtime","common/vendor"]]]);
});
require('pages/shop/shop.js');
__wxRoute = 'pages/shop/shopType/shopType';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shop/shopType/shopType.js';

define('pages/shop/shopType/shopType.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop/shopType/shopType"],{"0e3e":function(t,n,e){},"7be4":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},8593:function(t,n,e){"use strict";e.r(n);var o=e("c105"),a=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=a.a},a4c9:function(t,n,e){"use strict";e.r(n);var o=e("7be4"),a=e("8593");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("f90e");var s=e("2877"),r=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=r.exports},c105:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{list:[{name:"我的店铺",src:"../../../static/img/shopType/dianpu.png",url:"../shop"},{name:"店铺信息",src:"../../../static/img/shopType/shopInfo.png",url:"../shopInfo/shopInfo"},{name:"店铺装修",src:"../../../static/img/shopType/zhuangx.png",url:"../Decoration/Decoration"},{name:"添加产品",src:"../../../static/img/shopType/shopadd.png",url:"../../product/addProduct/addProduct"},{name:"店铺照片",src:"../../../static/img/shopType/shopimg.png",url:"../../shop/shopPicture/shopPicture"}]}},onLoad:function(){this.$http("/api/user/againStatus",{},"get").then(function(t){})},methods:{toPage:function(n,e){n?6==e?t.getStorage({key:"userInfo",success:function(e){e.data.shopId?t.navigateTo({url:"../../shop/shop"}):t.navigateTo({url:n})}}):t.navigateTo({url:n}):t.showToast({title:"模板未包含此页面",icon:"none"})}}};n.default=e}).call(this,e("6e42")["default"])},f90e:function(t,n,e){"use strict";var o=e("0e3e"),a=e.n(o);a.a}},[["ef1b","common/runtime","common/vendor"]]]);
});
require('pages/shop/shopType/shopType.js');
__wxRoute = 'pages/shop/shopInfo/shopInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shop/shopInfo/shopInfo.js';

define('pages/shop/shopInfo/shopInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop/shopInfo/shopInfo"],{"0f4d":function(n,o,t){"use strict";var e=function(){var n=this,o=n.$createElement;n._self._c},a=[];t.d(o,"a",function(){return e}),t.d(o,"b",function(){return a})},"766f":function(n,o,t){"use strict";(function(n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=function(){return Promise.all([t.e("common/vendor"),t.e("components/chooseImage")]).then(t.bind(null,"cb91"))},a={components:{chooseImage:e},data:function(){return{logo:"",shop_name:"",shop_desc:""}},onLoad:function(){},onNavigationBarButtonTap:function(n){this.$http("/api/user/postShopInfo",{shop_pic:this.logo,shop_name:this.shop_name,shop_desc:this.shop_desc})},methods:{chooseImage:function(){this.$refs.child.animationShow()},imgway:function(o){n.hideLoading(),this.logo=this.baseUrl+"/"+o.uploadImg[0].url.replace(/\\/g,"/")}}};o.default=a}).call(this,t("6e42")["default"])},9517:function(n,o,t){"use strict";var e=t("f907"),a=t.n(e);a.a},ea64:function(n,o,t){"use strict";t.r(o);var e=t("0f4d"),a=t("f116");for(var i in a)"default"!==i&&function(n){t.d(o,n,function(){return a[n]})}(i);t("9517");var u=t("2877"),s=Object(u["a"])(a["default"],e["a"],e["b"],!1,null,null,null);o["default"]=s.exports},f116:function(n,o,t){"use strict";t.r(o);var e=t("766f"),a=t.n(e);for(var i in e)"default"!==i&&function(n){t.d(o,n,function(){return e[n]})}(i);o["default"]=a.a},f907:function(n,o,t){}},[["1229","common/runtime","common/vendor"]]]);
});
require('pages/shop/shopInfo/shopInfo.js');
__wxRoute = 'pages/shop/shopPicture/shopPicture';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shop/shopPicture/shopPicture.js';

define('pages/shop/shopPicture/shopPicture.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop/shopPicture/shopPicture"],{"51be":function(t,i,n){"use strict";var e=n("59cd"),o=n.n(e);o.a},"59cd":function(t,i,n){},7945:function(t,i,n){"use strict";(function(t,e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=function(){return Promise.all([n.e("common/vendor"),n.e("components/chooseImage")]).then(n.bind(null,"cb91"))},a={components:{chooseImage:o},data:function(){return{imgList:[],animationData:{},showAction:!1,showActioner:!1,Action:!1,picturelist:[],picture:[],index:""}},watch:{imgList:function(t,i){for(var n=0;n<t.length;n++)this.picturelist[n]?this.picturelist[n]={img:"",text:this.picturelist[n].text}:this.picturelist[n]={img:"",text:""},this.picturelist[n].img=t[n]}},methods:{change:function(){this.$refs.child.animationShow(),console.log(t(this.imgList," at pages\\shop\\shopPicture\\shopPicture.vue:66"))},showText:function(t){this.showAction=!1,this.showActioner=!0},animationShow:function(t){this.index=t,this.showAction=!0,this.Action=!0;var i=e.createAnimation({duration:500,timingFunction:"ease"});this.animation=i,i.scale(0,0).step(),this.animationData=i.export(),setTimeout(function(){i.scale(1,1).step(),this.animationData=i.export()}.bind(this),100)},animationHide:function(){var t=this,i=e.createAnimation({duration:300,timingFunction:"ease"});this.animation=i,i.scale(1,1).step(),this.animationData=i.export(),i.scale(0,0).step(),this.animationData=i.export(),setTimeout(function(){t.showAction=!1,t.Action=!1,t.showActioner=!1}.bind(this),300)}}};i.default=a}).call(this,n("0de9")["default"],n("6e42")["default"])},c4a0:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement;t._self._c},o=[];n.d(i,"a",function(){return e}),n.d(i,"b",function(){return o})},d2f1:function(t,i,n){"use strict";n.r(i);var e=n("c4a0"),o=n("d6b8");for(var a in o)"default"!==a&&function(t){n.d(i,t,function(){return o[t]})}(a);n("51be");var s=n("2877"),c=Object(s["a"])(o["default"],e["a"],e["b"],!1,null,null,null);i["default"]=c.exports},d6b8:function(t,i,n){"use strict";n.r(i);var e=n("7945"),o=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(i,t,function(){return e[t]})}(a);i["default"]=o.a}},[["684a","common/runtime","common/vendor"]]]);
});
require('pages/shop/shopPicture/shopPicture.js');
__wxRoute = 'pages/shop/Decoration/Decoration';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shop/Decoration/Decoration.js';

define('pages/shop/Decoration/Decoration.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop/Decoration/Decoration"],{"0a4d":function(n,t,e){"use strict";e.r(t);var o=e("6bc4"),c=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=c.a},4223:function(n,t,e){},"512d":function(n,t,e){"use strict";e.r(t);var o=e("d2f3"),c=e("0a4d");for(var i in c)"default"!==i&&function(n){e.d(t,n,function(){return c[n]})}(i);e("e602");var u=e("2877"),a=Object(u["a"])(c["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},"6bc4":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return Promise.all([e.e("common/vendor"),e.e("components/chooseImage")]).then(e.bind(null,"cb91"))},c={components:{chooseImage:o},data:function(){return{bgimg:"",imgList:[]}},watch:{imgList:function(n,t){this.bgimg=n[n.length-1]}},methods:{change:function(){this.$refs.child.animationShow()}}};t.default=c},d2f3:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return c})},e602:function(n,t,e){"use strict";var o=e("4223"),c=e.n(o);c.a}},[["f9a2","common/runtime","common/vendor"]]]);
});
require('pages/shop/Decoration/Decoration.js');
__wxRoute = 'pages/product/addProduct/addProduct';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/addProduct/addProduct.js';

define('pages/product/addProduct/addProduct.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/addProduct/addProduct"],{"20d6":function(t,e,n){},"309f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"41ff":function(t,e,n){"use strict";n.r(e);var i=n("5d6b"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"5d6b":function(t,e,n){"use strict";(function(t,i){function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return n.e("components/uni-richtext").then(n.bind(null,"4085"))},u=function(){return Promise.all([n.e("common/vendor"),n.e("components/chooseImage")]).then(n.bind(null,"cb91"))},c={components:{uniRichtext:a,chooseImage:u},data:function(){return o({imgList:[],animationData:{},showAction:!1,imgIndex:"0",radioIndex:null,items:[{value:"0",name:"电话"},{value:"1",name:"微信"},{value:"2",name:"邮箱"}],richList:[],uploadUrl:"http://120.78.87.84:8080/conduit/file/uploadFile"},"imgList",[])},watch:{richList:function(e,n){console.log(t(e," at pages\\product\\addProduct\\addProduct.vue:118"))},imgList:function(e,n){console.log(t(e," at pages\\product\\addProduct\\addProduct.vue:121"))}},onLoad:function(){},methods:{aShow:function(){this.$refs.child.animationShow()},radioChange:function(t){this.radioIndex=t.target.value},swiperChange:function(t){this.imgIndex=t.detail.current},delImg:function(){this.imgList.splice(this.imgIndex,1),this.imgIndex>this.imgList.length-1&&(this.imgIndex=this.imgList.length-1)},photo:function(){var t=this;i.chooseImage({count:5-this.imgList.length,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){for(var n=0;n<e.tempFilePaths.length;n++)t.imgList.push(e.tempFilePaths[n]);t.showAction=!1}})},shoot:function(){var t=this;i.chooseImage({count:5-this.imgList.length,sizeType:["original","compressed"],sourceType:["camera"],success:function(e){for(var n=0;n<e.tempFilePaths.length;n++)t.imgList.push(e.tempFilePaths[n]);t.showAction=!1}})}}};e.default=c}).call(this,n("0de9")["default"],n("6e42")["default"])},"62c3":function(t,e,n){"use strict";n.r(e);var i=n("309f"),o=n("41ff");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("ce59");var u=n("2877"),c=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},ce59:function(t,e,n){"use strict";var i=n("20d6"),o=n.n(i);o.a}},[["1aa9","common/runtime","common/vendor"]]]);
});
require('pages/product/addProduct/addProduct.js');
__wxRoute = 'pages/user/personal/personal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/personal/personal.js';

define('pages/user/personal/personal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/personal/personal"],{"051f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},"05cb":function(t,e,a){"use strict";a.r(e);var n=a("051f"),o=a("374e");for(var u in o)"default"!==u&&function(t){a.d(e,t,function(){return o[t]})}(u);a("3453");var i=a("2877"),s=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},3453:function(t,e,a){"use strict";var n=a("3d8b"),o=a.n(n);o.a},"374e":function(t,e,a){"use strict";a.r(e);var n=a("7b83"),o=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=o.a},"3d8b":function(t,e,a){},"7b83":function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(a("9871"));function u(t){return t&&t.__esModule?t:{default:t}}var i=function(){return Promise.all([a.e("common/vendor"),a.e("components/chooseImage")]).then(a.bind(null,"cb91"))},s={components:{chooseImage:i},data:function(){return{user:"",details:{},imgList:[],userData:"",api_token:"",uploadImg:[],listimg:[]}},onLoad:function(){var e=this;t.getStorage({key:"lang",success:function(a){e.details=o.default[a.data],t.setNavigationBarTitle({title:o.default[a.data].title})}}),t.getStorage({key:"token",success:function(t){e.api_token=t.data}})},onShow:function(){var e=this;t.getStorage({key:"userInfo",success:function(t){e.userData=t.data}})},methods:{chooseImage:function(){this.$refs.child.animationShow()},richList:function(t){this.richInfo=t},imgway:function(e){var a=this;t.hideToast(),this.listimg=e.imgList,this.uploadImg=e.uploadImg,console.log(n(e," at pages\\user\\personal\\personal.vue:112")),this.$http("/api/user/updateUserInfo",{avatar:e.uploadImg[0].url.replace(/\\/g,"/")},"post",!1).then(function(e){1e3==e.data.code&&(a.userData.avatar=e.data.data.avatar,t.setStorage({key:"userInfo",data:a.userData}))})},toPage:function(e,a){e?t.navigateTo({url:e+"?data="+a}):t.showToast({title:"模板未包含此页面",icon:"none"})}}};e.default=s}).call(this,a("6e42")["default"],a("0de9")["default"])}},[["6445","common/runtime","common/vendor"]]]);
});
require('pages/user/personal/personal.js');
__wxRoute = 'pages/user/personal/phone/phone';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/personal/phone/phone.js';

define('pages/user/personal/phone/phone.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/personal/phone/phone"],{3266:function(n,t,e){"use strict";e.r(t);var u=e("d425"),r=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);t["default"]=r.a},b3d1:function(n,t,e){"use strict";e.r(t);var u=e("e637"),r=e("3266");for(var o in r)"default"!==o&&function(n){e.d(t,n,function(){return r[n]})}(o);var a=e("2877"),c=Object(a["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},d425:function(n,t,e){},e637:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})}},[["1950","common/runtime","common/vendor"]]]);
});
require('pages/user/personal/phone/phone.js');
__wxRoute = 'pages/user/personal/mail/mail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/personal/mail/mail.js';

define('pages/user/personal/mail/mail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/personal/mail/mail"],{"37bd":function(n,t,u){},"39bc":function(n,t,u){"use strict";u.r(t);var e=u("4cc0"),r=u("46ed");for(var a in r)"default"!==a&&function(n){u.d(t,n,function(){return r[n]})}(a);var c=u("2877"),o=Object(c["a"])(r["default"],e["a"],e["b"],!1,null,null,null);t["default"]=o.exports},"46ed":function(n,t,u){"use strict";u.r(t);var e=u("37bd"),r=u.n(e);for(var a in e)"default"!==a&&function(n){u.d(t,n,function(){return e[n]})}(a);t["default"]=r.a},"4cc0":function(n,t,u){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},r=[];u.d(t,"a",function(){return e}),u.d(t,"b",function(){return r})}},[["09ad","common/runtime","common/vendor"]]]);
});
require('pages/user/personal/mail/mail.js');
__wxRoute = 'pages/user/keep/keep';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/keep/keep.js';

define('pages/user/keep/keep.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/keep/keep"],{"1d05":function(t,e,n){"use strict";n.r(e);var i=n("4ae8"),s=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=s.a},"4ae8":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{goodsList:[{id:1,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:2,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:3,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1}],shopList:[{id:1,name:"冰鲜专卖店",img:"/static/img/shop/1.jpg"},{id:2,name:"果蔬天下",img:"/static/img/shop/2.jpg"},{id:3,name:"办公耗材用品店",img:"/static/img/shop/3.jpg"},{id:4,name:"天天看好书",img:"/static/img/shop/4.jpg"}],headerTop:0,typeClass:"goods",subState:"",theIndex:null,oldIndex:null,isStop:!1,api_token:""}},onPageScroll:function(t){},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){},onShow:function(){var e=this;t.getStorage({key:"token",success:function(i){e.api_token=i.data;var s=e;t.request({url:"http://192.168.101.52/api/shop/myCollect",data:{api_token:s.api_token},success:function(t){console.log(n(t," at pages\\user\\keep\\keep.vue:125"))}})},fail:function(t){}})},methods:{switchType:function(e){var i=this;this.typeClass!=e&&(t.pageScrollTo({scrollTop:0,duration:0}),this.typeClass=e,this.subState=""==this.typeClass?"":"show"+e,setTimeout(function(){i.oldIndex=null,i.theIndex=null,i.subState="goods"==i.typeClass?"":i.subState},200),console.log(n(e," at pages\\user\\keep\\keep.vue:149")),"shop"==e&&this.$http("/api/shop/myCollect",{},"get").then(function(t){}))},touchStart:function(t,e){e.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[e.touches[0].pageX,e.touches[0].pageY])},touchMove:function(t,e){var n=this;if(e.touches.length>1)this.isStop=!0;else{var i=e.touches[0].pageX-this.initXY[0],s=e.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(i)<5||(Math.abs(s)>Math.abs(i)?this.isStop=!0:i<0?(this.theIndex=t,this.isStop=!0):i>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){n.oldIndex=null},150)))}},touchEnd:function(t,e){this.isStop=!1},deleteCoupon:function(t,e){for(var n=e.length,i=0;i<n;i++)if(t==e[i].id){e.splice(i,1);break}this.oldIndex=null,this.theIndex=null},discard:function(){}}};e.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},"4c88":function(t,e,n){"use strict";var i=n("b831"),s=n.n(i);s.a},"628b":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},b6ec:function(t,e,n){"use strict";n.r(e);var i=n("628b"),s=n("1d05");for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);n("4c88");var u=n("2877"),a=Object(u["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=a.exports},b831:function(t,e,n){}},[["9f04","common/runtime","common/vendor"]]]);
});
require('pages/user/keep/keep.js');
__wxRoute = 'pages/user/address/address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/address/address.js';

define('pages/user/address/address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/address/address"],{"0ff8":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{isSelect:!1,addressList:[{id:1,name:"大黑哥",head:"大",tel:"18816881688",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!0},{id:2,name:"大黑哥",head:"大",tel:"15812341234",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深北小道2222号有名公寓502"},isDefault:!1},{id:3,name:"老大哥",head:"老",tel:"18155467897",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!1},{id:4,name:"王小妹",head:"王",tel:"13425654895",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!1}]}},onShow:function(){var t=this;e.getStorage({key:"delAddress",success:function(a){var d=t.addressList.length;if(a.data.hasOwnProperty("id"))for(var s=0;s<d;s++)if(t.addressList[s].id==a.data.id){t.addressList.splice(s,1);break}e.removeStorage({key:"delAddress"})}}),e.getStorage({key:"saveAddress",success:function(a){var d=t.addressList.length;if(a.data.hasOwnProperty("id")){for(var s=0;s<d;s++)if(t.addressList[s].id==a.data.id){t.addressList.splice(s,1,a.data);break}}else{var i=t.addressList[d-1];i++,a.data.id=i,t.addressList.push(a.data)}e.removeStorage({key:"saveAddress"})}})},onLoad:function(e){"select"==e.type&&(this.isSelect=!0)},methods:{edit:function(t){e.setStorage({key:"address",data:t,success:function(){e.navigateTo({url:"edit/edit?type=edit"})}})},add:function(){e.navigateTo({url:"edit/edit?type=add"})},select:function(t){this.isSelect&&e.setStorage({key:"selectAddress",data:t,success:function(){e.navigateBack()}})}}};t.default=a}).call(this,a("6e42")["default"])},4341:function(e,t,a){},"57c7":function(e,t,a){"use strict";var d=function(){var e=this,t=e.$createElement;e._self._c},s=[];a.d(t,"a",function(){return d}),a.d(t,"b",function(){return s})},"994d":function(e,t,a){"use strict";a.r(t);var d=a("57c7"),s=a("b896");for(var i in s)"default"!==i&&function(e){a.d(t,e,function(){return s[e]})}(i);a("cff9");var n=a("2877"),r=Object(n["a"])(s["default"],d["a"],d["b"],!1,null,null,null);t["default"]=r.exports},b896:function(e,t,a){"use strict";a.r(t);var d=a("0ff8"),s=a.n(d);for(var i in d)"default"!==i&&function(e){a.d(t,e,function(){return d[e]})}(i);t["default"]=s.a},cff9:function(e,t,a){"use strict";var d=a("4341"),s=a.n(d);s.a}},[["2e75","common/runtime","common/vendor"]]]);
});
require('pages/user/address/address.js');
__wxRoute = 'pages/user/address/edit/edit';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/address/edit/edit.js';

define('pages/user/address/edit/edit.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/address/edit/edit"],{2242:function(e,t,i){"use strict";i.r(t);var n=i("519e"),a=i("a805");for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);i("828d");var o=i("2877"),d=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=d.exports},"4f52":function(e,t,i){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return Promise.all([i.e("common/vendor"),i.e("components/mpvue-citypicker/mpvueCityPicker")]).then(i.bind(null,"4d1f"))},s={components:{mpvueCityPicker:a},data:function(){return{editType:"edit",id:"",name:"",tel:"",detailed:"",isDefault:!1,cityPickerValue:[0,0,1],themeColor:"#007AFF",region:{label:"请点击选择地址",value:[],cityCode:""}}},methods:{onCancel:function(t){console.log(e(t," at pages\\user\\address\\edit\\edit.vue:81"))},chooseCity:function(){this.$refs.mpvueCityPicker.show()},onConfirm:function(e){this.region=e,this.cityPickerValue=e.value},isDefaultChange:function(e){this.isDefault=e.detail.value},del:function(){var t=this;n.showModal({title:"删除提示",content:"你将删除这个收货地址",success:function(i){i.confirm?n.setStorage({key:"delAddress",data:{id:t.id},success:function(){n.navigateBack()}}):i.cancel&&console.log(e("用户点击取消"," at pages\\user\\address\\edit\\edit.vue:107"))}})},save:function(){var e={name:this.name,head:this.name.substr(0,1),tel:this.tel,address:{region:this.region,detailed:this.detailed},isDefault:this.isDefault};"edit"==this.editType&&(e.id=this.id),e.name?e.tel?e.address.detailed?0!=e.address.region.value.length?(n.showLoading({title:"正在提交"}),setTimeout(function(){n.setStorage({key:"saveAddress",data:e,success:function(){n.hideLoading(),n.navigateBack()}})},300)):n.showToast({title:"请选择收件地址",icon:"none"}):n.showToast({title:"请输入收件人详细地址",icon:"none"}):n.showToast({title:"请输入收件人电话号码",icon:"none"}):n.showToast({title:"请输入收件人姓名",icon:"none"})}},onLoad:function(e){var t=this;this.editType=e.type,"edit"==e.type&&n.getStorage({key:"address",success:function(e){t.id=e.data.id,t.name=e.data.name,t.tel=e.data.tel,t.detailed=e.data.address.detailed,t.isDefault=e.data.isDefault,t.cityPickerValue=e.data.address.region.value,t.region=e.data.address.region}})},onBackPress:function(){if(this.$refs.mpvueCityPicker.showPicker)return this.$refs.mpvueCityPicker.pickerCancel(),!0},onUnload:function(){this.$refs.mpvueCityPicker.showPicker&&this.$refs.mpvueCityPicker.pickerCancel()}};t.default=s}).call(this,i("0de9")["default"],i("6e42")["default"])},"519e":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},7552:function(e,t,i){},"828d":function(e,t,i){"use strict";var n=i("7552"),a=i.n(n);a.a},a805:function(e,t,i){"use strict";i.r(t);var n=i("4f52"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=a.a}},[["9ecb","common/runtime","common/vendor"]]]);
});
require('pages/user/address/edit/edit.js');
__wxRoute = 'pages/user/deposit/deposit';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/deposit/deposit.js';

define('pages/user/deposit/deposit.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/deposit/deposit"],{4748:function(t,n,o){"use strict";o.r(n);var e=o("6718"),i=o("fe69");for(var u in i)"default"!==u&&function(t){o.d(n,t,function(){return i[t]})}(u);o("d7d1");var a=o("2877"),s=Object(a["a"])(i["default"],e["a"],e["b"],!1,null,null,null);n["default"]=s.exports},6718:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){t.paytype="alipay"},t.e1=function(n){t.paytype="wxpay"})},i=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return i})},"8e95":function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{inputAmount:"",amountList:[10,50,100],paytype:"alipay"}},methods:{select:function(t){this.inputAmount=t},doDeposit:function(){var n=this;"NaN"!=parseFloat(this.inputAmount).toString()?this.inputAmount<=0?t.showToast({title:"请输入大于0的金额",icon:"none"}):parseFloat(this.inputAmount).toFixed(2)==parseFloat(this.inputAmount)?(t.showLoading({title:"支付中..."}),setTimeout(function(){t.hideLoading(),t.showToast({title:"支付成功"}),setTimeout(function(){t.redirectTo({url:"../../pay/success/success?amount="+n.inputAmount})},300)},700)):t.showToast({title:"最多只能输入两位小数哦~",icon:"none"}):t.showToast({title:"请输入正确金额",icon:"none"})}},onLoad:function(){}};n.default=o}).call(this,o("6e42")["default"])},bfc1:function(t,n,o){},d7d1:function(t,n,o){"use strict";var e=o("bfc1"),i=o.n(e);i.a},fe69:function(t,n,o){"use strict";o.r(n);var e=o("8e95"),i=o.n(e);for(var u in e)"default"!==u&&function(t){o.d(n,t,function(){return e[t]})}(u);n["default"]=i.a}},[["9cfa","common/runtime","common/vendor"]]]);
});
require('pages/user/deposit/deposit.js');
__wxRoute = 'pages/pay/payment/payment';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pay/payment/payment.js';

define('pages/pay/payment/payment.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pay/payment/payment"],{"817d":function(t,e,n){"use strict";n.r(e);var a=n("ba8d"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},"87b6":function(t,e,n){},"8ad4":function(t,e,n){"use strict";var a=n("87b6"),o=n.n(a);o.a},ba8d:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{amount:0,orderName:"",paytype:"alipay"}},onLoad:function(e){var n=this;this.amount=parseFloat(e.amount).toFixed(2),t.getStorage({key:"paymentOrder",success:function(e){e.data.length>1?n.orderName="多商品合并支付":n.orderName=e.data[0].name,t.removeStorage({key:"paymentOrder"})}})},methods:{doDeposit:function(){var e=this;t.showLoading({title:"支付中..."}),setTimeout(function(){t.hideLoading(),t.showToast({title:"支付成功"}),setTimeout(function(){t.redirectTo({url:"../../pay/success/success?amount="+e.amount})},300)},700)}}};e.default=n}).call(this,n("6e42")["default"])},ed01:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.paytype="alipay"},t.e1=function(e){t.paytype="wxpay"})},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},fd87:function(t,e,n){"use strict";n.r(e);var a=n("ed01"),o=n("817d");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("8ad4");var r=n("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports}},[["6710","common/runtime","common/vendor"]]]);
});
require('pages/pay/payment/payment.js');
__wxRoute = 'pages/pay/success/success';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pay/success/success.js';

define('pages/pay/success/success.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pay/success/success"],{"1c50":function(t,n,e){"use strict";var u=e("c1ee"),a=e.n(u);a.a},"5b1c":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{amount:0}},onLoad:function(t){this.amount=parseFloat(t.amount).toFixed(2)},methods:{toUser:function(){t.switchTab({url:"/pages/tabBar/user"})}}};n.default=e}).call(this,e("6e42")["default"])},9718:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},a5d1:function(t,n,e){"use strict";e.r(n);var u=e("5b1c"),a=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);n["default"]=a.a},c1ee:function(t,n,e){},dbab:function(t,n,e){"use strict";e.r(n);var u=e("9718"),a=e("a5d1");for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);e("1c50");var o=e("2877"),r=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=r.exports}},[["831d","common/runtime","common/vendor"]]]);
});
require('pages/pay/success/success.js');
__wxRoute = 'pages/goods/ratings/ratings';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/ratings/ratings.js';

define('pages/goods/ratings/ratings.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/ratings/ratings"],{"2ec4":function(t,n,e){"use strict";e.r(n);var i=e("fb73"),a=e("7b35");for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);e("cd28");var o=e("2877"),d=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=d.exports},"7b35":function(t,n,e){"use strict";e.r(n);var i=e("fc7a"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=a.a},ccd6:function(t,n,e){},cd28:function(t,n,e){"use strict";var i=e("ccd6"),a=e.n(i);a.a},fb73:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},fc7a:function(t,n,e){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{labelIndex:0,showSwiper:!1,showBtn:!1,videoDirection:0,showFullscreenBtn:!0,showPlayBtn:!0,isPlayVideo:!0,videoSrc:"",offer:[],swiperindex:0,btncolor:!0,user_type:"",bidding:"",Wait:"",Attn:""}},onLoad:function(t){this.task_id=t.task_id,this.dataInfo()},onReady:function(t){},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onReachBottom:function(){},methods:{exit:function(){this.showSwiper=!1},dataInfo:function(){var t=this;this.$http("/newtasks/taskindex",{id:this.task_id}).then(function(n){console.log(e(n," at pages\\goods\\ratings\\ratings.vue:229")),t.showBtn=1==n.data.data.user_type,t.user_type=n.data.data.user_type,t.offer=n.data.data.works.data;var i=(new Date).getTime(),a=(new Date(n.data.data.detail.begin_at).getTime(),new Date(n.data.data.detail.delivery_deadline).getTime());a<i&&(t.btncolor=!1);for(var s=0;s<t.offer.length;s++)1==t.offer[s].status&&(0==n.data.data.is_win_bid?(t.Wait=!0,t.showBtn=!1):1==n.data.data.is_win_bid&&(t.Attn=!0,t.showBtn=!1))})},toRatings:function(t){this.showSwiper=!0,this.swiperindex=t},last:function(){this.swiperindex>0&&this.swiperindex--},next:function(){this.offer.length-1>this.swiperindex&&this.swiperindex++},change:function(t){var n=this;this.swiperindex=t.target.current,1==this.user_type&&this.$http("/api/work/detail",{id:this.offer[this.swiperindex].id},"get",!1).then(function(t){n.offer[n.swiperindex]=t.data.data})},Confirm:function(){var n=this;this.btncolor?t.showToast({title:"还未到选标时间",icon:"none"}):this.$http("/newtasks/bidWinBid",{work_id:this.offer[this.swiperindex].id,task_id:this.offer[this.swiperindex].task_id}).then(function(e){1e3==e.data.status?(n.dataInfo(),t.showToast({title:"选标成功",icon:"success"})):t.showToast({title:"选标失败",icon:"none"})})}}};n.default=i}).call(this,e("6e42")["default"],e("0de9")["default"])}},[["13fd","common/runtime","common/vendor"]]]);
});
require('pages/goods/ratings/ratings.js');
__wxRoute = 'pages/shop/check/check';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shop/check/check.js';

define('pages/shop/check/check.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop/check/check"],{"3d57":function(e,t,a){"use strict";a.r(t);var n=a("6d4c"),s=a("e787");for(var i in s)"default"!==i&&function(e){a.d(t,e,function(){return s[e]})}(i);a("e883");var o=a("2877"),r=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports},"599f":function(e,t,a){},"6d4c":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},s=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return s})},"877f":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(a("fbcf"));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){return Promise.all([a.e("common/vendor"),a.e("components/chooseImage")]).then(a.bind(null,"cb91"))},r={components:{chooseImage:o},data:function(){return{headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,index:"0",license:"",Assurface:"",national:"",handAssurface:"",nationArray:[],nationPicker:[],date:"",indate:"请选择",imgID:""}},onLoad:function(){var t=this;console.log(e(s.default," at pages\\shop\\check\\check.vue:113")),n.getStorage({key:"userInfo",success:function(e){e.data.shopId&&n.redirectTo({url:"../shop"})}}),n.getStorage({key:"lang",success:function(e){t.nationArray=s.default[e.data];for(var a=0;a<t.nationArray.length;a++)t.nationPicker.push(t.nationArray[a].countries)}}),this.statusHeight=0,this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},methods:{chooseImage:function(e){if(1==this.showStatus)return!1;this.imgID=e,this.$refs.child.animationShow()},imgway:function(e){n.hideLoading(),0==this.imgID&&(this.license=this.baseUrl+"/"+e.uploadImg[0].url.replace(/\\/g,"/")),1==this.imgID&&(this.Assurface=this.baseUrl+"/"+e.uploadImg[0].url.replace(/\\/g,"/")),2==this.imgID&&(this.national=this.baseUrl+"/"+e.uploadImg[0].url.replace(/\\/g,"/")),3==this.imgID&&(this.handAssurface=this.baseUrl+"/"+e.uploadImg[0].url.replace(/\\/g,"/"))},exit:function(){n.navigateBack({delta:1})},uploadImg:function(t){var a=this;console.log(e(t," at pages\\shop\\check\\check.vue:172")),n.chooseImage({sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){0==t&&(a.license=e.tempFilePaths[0]),1==t&&(a.Assurface=e.tempFilePaths[0]),2==t&&(a.national=e.tempFilePaths[0]),3==t&&(a.handAssurface=e.tempFilePaths[0])}})}}};t.default=r}).call(this,a("0de9")["default"],a("6e42")["default"])},e787:function(e,t,a){"use strict";a.r(t);var n=a("877f"),s=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t["default"]=s.a},e883:function(e,t,a){"use strict";var n=a("599f"),s=a.n(n);s.a}},[["3355","common/runtime","common/vendor"]]]);
});
require('pages/shop/check/check.js');
__wxRoute = 'pages/shop/shopDetails/shopDetails';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shop/shopDetails/shopDetails.js';

define('pages/shop/shopDetails/shopDetails.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop/shopDetails/shopDetails"],{"3ecf":function(t,e,i){"use strict";i.r(e);var a=i("62ca"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=o.a},4649:function(t,e,i){"use strict";i.r(e);var a=i("ecc8"),o=i("3ecf");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("dc6e");var s=i("2877"),c=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"62ca":function(t,e,i){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{api_token:"",shop_list:"",shopdetails:"",isKeep:!1,headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,tab:0,fixation:!1,renderImage:!0,distance:"0",productList:[{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg",title:"Apple iPhone X 256GB 深空灰色 移动联通电信4G手机",originalPrice:9999,favourPrice:8888,tip:"自营"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg",title:"Apple iPad 平板电脑 2018年新款9.7英寸",originalPrice:3499,favourPrice:3399,tip:"优惠"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg",title:"Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）",originalPrice:12999,favourPrice:10688,tip:"秒杀"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg",title:"Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色",originalPrice:999,favourPrice:958,tip:"秒杀"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg",title:"微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）",originalPrice:8888,favourPrice:8288,tip:"优惠"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg",title:"Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）",originalPrice:2899,favourPrice:2799,tip:"自营"}]}},onLoad:function(e){this.statusHeight=0,this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight(),console.log(t(e.shop_id," at pages\\shop\\shopDetails\\shopDetails.vue:162"));var a=this;i.request({url:"http://192.168.101.52/api/shop/shopDetail",data:{shop_id:e.shop_id},success:function(e){console.log(t(e.data.data," at pages\\shop\\shopDetails\\shopDetails.vue:170")),a.shopdetails=e.data.data}})},onShow:function(){var e=this;i.getStorage({key:"token",success:function(a){var o=e;o.api_token=a.data,i.request({url:"http://192.168.101.52/api/user/workList",data:{api_token:o.api_token},success:function(e){console.log(t(e.data.data.data," at pages\\shop\\shopDetails\\shopDetails.vue:188")),o.shop_list=e.data.data.data}})},fail:function(t){}})},onPageScroll:function(t){this.fixation=t.scrollTop>120},methods:{ViewImage:function(e){i.previewImage({urls:this.shopdetails.initBanner,current:e,success:function(e){console.log(t(e," at pages\\shop\\shopDetails\\shopDetails.vue:207"))}})},tablist:function(t){this.tab=t,this.distance=0,this.distance=100*t},exit:function(){i.navigateBack({delta:1})},changeTab:function(t){this.tab=t.target.current,this.distance=0,this.distance=100*t.target.current},pageScroll:function(t){var e=t.detail.scrollTop;this.fixation=e>145},scrollB:function(t){var e=t.detail.scrollTop;this.fixation=0!=e},keep:function(){this.isKeep=!this.isKeep}}};e.default=a}).call(this,i("0de9")["default"],i("6e42")["default"])},ab6d:function(t,e,i){},dc6e:function(t,e,i){"use strict";var a=i("ab6d"),o=i.n(a);o.a},ecc8:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})}},[["3bac","common/runtime","common/vendor"]]]);
});
require('pages/shop/shopDetails/shopDetails.js');
__wxRoute = 'pages/user/order_list/order_list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/order_list/order_list.js';

define('pages/user/order_list/order_list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/user/order_list/order_list.js');
__wxRoute = 'pages/goods/goods-list/goods-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/goods-list/goods-list.js';

define('pages/goods/goods-list/goods-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/goods/goods-list/goods-list.js');
__wxRoute = 'pages/tabBar/category/category';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/category/category.js';

define('pages/tabBar/category/category.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/tabBar/category/category.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

