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
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'header'])
Z([[7],[3,'showBack']])
Z(z[1])
Z([3,'__e'])
Z(z[3])
Z([[4],[[5],[[5],[1,'popup spec']],[[7],[3,'specClass']]]])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'discard']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'hideSpec']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[3])
Z([3,'layer'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'discard']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!='],[[7],[3,'selectSpec']],[1,null]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'Rindex'])
Z([3,'row'])
Z([[7],[3,'ratingsList']])
Z(z[0])
Z([[6],[[7],[3,'row']],[3,'append']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'swiper']])
Z([[2,'!'],[[7],[3,'swiper']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__i1__'])
Z([3,'item'])
Z([[6],[[7],[3,'list']],[3,'tasklist']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[[7],[3,'tab']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShowOauth']])
Z([3,'list'])
Z([[6],[[7],[3,'showProvider']],[3,'weixin']])
Z([[6],[[7],[3,'showProvider']],[3,'qq']])
Z([[6],[[7],[3,'showProvider']],[3,'sinaweibo']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'chat'])
Z([[7],[3,'chatList']])
Z(z[0])
Z([3,'__e'])
Z([3,'row'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toChat']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'chatList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'>'],[[6],[[7],[3,'chat']],[3,'tisNum']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
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
Z([3,'check'])
Z([[7],[3,'showHeader']])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'head'])
Z([3,'background-image:url(\x27/static/img/q.jpg\x27);'])
Z([[7],[3,'showHeader']])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHeader']])
Z(z[0])
Z(z[0])
Z([[2,'=='],[[6],[[7],[3,'goodsList']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'selectedList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHeader']])
Z(z[0])
Z(z[0])
Z([3,'index'])
Z([3,'row'])
Z([[7],[3,'Promotion']])
Z(z[3])
Z([3,'__e'])
Z([3,'column'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toPromotion']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'Promotion']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'row']],[3,'countdown']])
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
Z([[7],[3,'showHeader']])
Z(z[0])
Z(z[0])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'row'])
Z([[7],[3,'addressList']])
Z(z[0])
Z([3,'__e'])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'select']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'addressList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'row']],[3,'isDefault']])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list'])
Z([[2,'=='],[[6],[[7],[3,'couponValidList']],[3,'length']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'couponinvalidList']],[3,'length']],[1,0]])
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
Z([3,'list'])
Z([[2,'=='],[[6],[[7],[3,'goodsList']],[3,'length']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'shopList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHeader']])
Z(z[0])
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
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/mpvue-citypicker/mpvueCityPicker.wxml','./pages/goods/goods.wxml','./pages/goods/ratings/ratings.wxml','./pages/index/index.wxml','./pages/integral/integral.wxml','./pages/login/login.wxml','./pages/login/register.wxml','./pages/login/resetpasswd.wxml','./pages/msg/chat/chat.wxml','./pages/msg/msg.wxml','./pages/order/confirmation.wxml','./pages/pay/payment/payment.wxml','./pages/pay/success/success.wxml','./pages/shop/check/check.wxml','./pages/shop/shop.wxml','./pages/tabBar/cart/cart.wxml','./pages/tabBar/home/home.wxml','./pages/tabBar/issue/issue.wxml','./pages/tabBar/user/user.wxml','./pages/user/address/address.wxml','./pages/user/address/edit/edit.wxml','./pages/user/coupon/coupon.wxml','./pages/user/deposit/deposit.wxml','./pages/user/keep/keep.wxml','./pages/user/language/language.wxml','./pages/user/myQR/myQR.wxml','./pages/user/myname/myname.wxml','./pages/user/security/security.wxml','./pages/user/setting/setting.wxml','./pages/user/signature/signature.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_n('view')
var oD=_n('view')
_rz(z,oD,'class',0,e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,1,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oD,cF)
if(_oz(z,2,e,s,gg)){cF.wxVkey=1
}
fE.wxXCkey=1
cF.wxXCkey=1
_(xC,oD)
var hG=_mz(z,'view',['bindtap',3,'catchtouchmove',1,'class',2,'data-event-opts',3],[],e,s,gg)
var oH=_mz(z,'view',['catchtap',7,'class',1,'data-event-opts',2],[],e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,10,e,s,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
_(hG,oH)
_(xC,hG)
_(r,xC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var lK=_v()
_(r,lK)
var aL=function(eN,tM,bO,gg){
var xQ=_v()
_(bO,xQ)
if(_oz(z,4,eN,tM,gg)){xQ.wxVkey=1
}
xQ.wxXCkey=1
return bO
}
lK.wxXCkey=2
_2z(z,2,aL,e,s,gg,lK,'row','Rindex','Rindex')
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var fS=_n('view')
var cT=_v()
_(fS,cT)
if(_oz(z,0,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(fS,hU)
if(_oz(z,1,e,s,gg)){hU.wxVkey=1
}
cT.wxXCkey=1
hU.wxXCkey=1
_(r,fS)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cW=_v()
_(r,cW)
var oX=function(aZ,lY,t1,gg){
var b3=_v()
_(t1,b3)
if(_oz(z,3,aZ,lY,gg)){b3.wxVkey=1
}
b3.wxXCkey=1
return t1
}
cW.wxXCkey=2
_2z(z,2,oX,e,s,gg,cW,'item','__i1__','')
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var x5=_v()
_(r,x5)
if(_oz(z,0,e,s,gg)){x5.wxVkey=1
var o6=_n('view')
_rz(z,o6,'class',1,e,s,gg)
var f7=_v()
_(o6,f7)
if(_oz(z,2,e,s,gg)){f7.wxVkey=1
}
var c8=_v()
_(o6,c8)
if(_oz(z,3,e,s,gg)){c8.wxVkey=1
}
var h9=_v()
_(o6,h9)
if(_oz(z,4,e,s,gg)){h9.wxVkey=1
}
f7.wxXCkey=1
c8.wxXCkey=1
h9.wxXCkey=1
_(x5,o6)
}
x5.wxXCkey=1
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var lCB=_mz(z,'view',['bindtouchstart',0,'class',1,'data-event-opts',1],[],e,s,gg)
var aDB=_v()
_(lCB,aDB)
var tEB=function(bGB,eFB,oHB,gg){
var oJB=_mz(z,'view',['class',7,'id',1],[],bGB,eFB,gg)
var fKB=_v()
_(oJB,fKB)
if(_oz(z,9,bGB,eFB,gg)){fKB.wxVkey=1
var hMB=_n('view')
_rz(z,hMB,'class',10,bGB,eFB,gg)
var oNB=_v()
_(hMB,oNB)
if(_oz(z,11,bGB,eFB,gg)){oNB.wxVkey=1
}
var cOB=_v()
_(hMB,cOB)
if(_oz(z,12,bGB,eFB,gg)){cOB.wxVkey=1
}
var oPB=_v()
_(hMB,oPB)
if(_oz(z,13,bGB,eFB,gg)){oPB.wxVkey=1
}
oNB.wxXCkey=1
cOB.wxXCkey=1
oPB.wxXCkey=1
_(fKB,hMB)
}
var cLB=_v()
_(oJB,cLB)
if(_oz(z,14,bGB,eFB,gg)){cLB.wxVkey=1
var lQB=_n('view')
_rz(z,lQB,'class',15,bGB,eFB,gg)
var aRB=_v()
_(lQB,aRB)
if(_oz(z,16,bGB,eFB,gg)){aRB.wxVkey=1
}
var tSB=_v()
_(lQB,tSB)
if(_oz(z,17,bGB,eFB,gg)){tSB.wxVkey=1
}
var eTB=_v()
_(lQB,eTB)
if(_oz(z,18,bGB,eFB,gg)){eTB.wxVkey=1
}
aRB.wxXCkey=1
tSB.wxXCkey=1
eTB.wxXCkey=1
_(cLB,lQB)
}
fKB.wxXCkey=1
cLB.wxXCkey=1
_(oHB,oJB)
return oHB
}
aDB.wxXCkey=2
_2z(z,5,tEB,e,s,gg,aDB,'row','index','index')
_(r,lCB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oVB=_v()
_(r,oVB)
var xWB=function(fYB,oXB,cZB,gg){
var o2B=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],fYB,oXB,gg)
var c3B=_v()
_(o2B,c3B)
if(_oz(z,7,fYB,oXB,gg)){c3B.wxVkey=1
}
c3B.wxXCkey=1
_(cZB,o2B)
return cZB
}
oVB.wxXCkey=2
_2z(z,2,xWB,e,s,gg,oVB,'chat','index','index')
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
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
var e8B=_n('view')
_rz(z,e8B,'class',0,e,s,gg)
var b9B=_v()
_(e8B,b9B)
if(_oz(z,1,e,s,gg)){b9B.wxVkey=1
}
var o0B=_v()
_(e8B,o0B)
if(_oz(z,2,e,s,gg)){o0B.wxVkey=1
}
b9B.wxXCkey=1
o0B.wxXCkey=1
_(r,e8B)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var oBC=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var fCC=_v()
_(oBC,fCC)
if(_oz(z,2,e,s,gg)){fCC.wxVkey=1
}
var cDC=_v()
_(oBC,cDC)
if(_oz(z,3,e,s,gg)){cDC.wxVkey=1
}
fCC.wxXCkey=1
cDC.wxXCkey=1
_(r,oBC)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var oFC=_n('view')
var cGC=_v()
_(oFC,cGC)
if(_oz(z,0,e,s,gg)){cGC.wxVkey=1
}
var oHC=_v()
_(oFC,oHC)
if(_oz(z,1,e,s,gg)){oHC.wxVkey=1
}
var lIC=_v()
_(oFC,lIC)
if(_oz(z,2,e,s,gg)){lIC.wxVkey=1
}
var aJC=_v()
_(oFC,aJC)
if(_oz(z,3,e,s,gg)){aJC.wxVkey=1
}
var tKC=_v()
_(oFC,tKC)
if(_oz(z,4,e,s,gg)){tKC.wxVkey=1
}
cGC.wxXCkey=1
oHC.wxXCkey=1
lIC.wxXCkey=1
aJC.wxXCkey=1
tKC.wxXCkey=1
_(r,oFC)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var bMC=_n('view')
var oNC=_v()
_(bMC,oNC)
if(_oz(z,0,e,s,gg)){oNC.wxVkey=1
}
var xOC=_v()
_(bMC,xOC)
if(_oz(z,1,e,s,gg)){xOC.wxVkey=1
}
var oPC=_v()
_(bMC,oPC)
if(_oz(z,2,e,s,gg)){oPC.wxVkey=1
}
var fQC=_v()
_(bMC,fQC)
var cRC=function(oTC,hSC,cUC,gg){
var lWC=_mz(z,'view',['bindtap',7,'class',1,'data-event-opts',2],[],oTC,hSC,gg)
var aXC=_v()
_(lWC,aXC)
if(_oz(z,10,oTC,hSC,gg)){aXC.wxVkey=1
}
aXC.wxXCkey=1
_(cUC,lWC)
return cUC
}
fQC.wxXCkey=2
_2z(z,5,cRC,e,s,gg,fQC,'row','index','index')
oNC.wxXCkey=1
xOC.wxXCkey=1
oPC.wxXCkey=1
_(r,bMC)
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
var b1C=_n('view')
var o2C=_v()
_(b1C,o2C)
if(_oz(z,0,e,s,gg)){o2C.wxVkey=1
}
var x3C=_v()
_(b1C,x3C)
if(_oz(z,1,e,s,gg)){x3C.wxVkey=1
}
var o4C=_v()
_(b1C,o4C)
if(_oz(z,2,e,s,gg)){o4C.wxVkey=1
}
o2C.wxXCkey=1
x3C.wxXCkey=1
o4C.wxXCkey=1
_(r,b1C)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var c6C=_v()
_(r,c6C)
var h7C=function(c9C,o8C,o0C,gg){
var aBD=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],c9C,o8C,gg)
var tCD=_v()
_(aBD,tCD)
if(_oz(z,7,c9C,o8C,gg)){tCD.wxVkey=1
}
tCD.wxXCkey=1
_(o0C,aBD)
return o0C
}
c6C.wxXCkey=2
_2z(z,2,h7C,e,s,gg,c6C,'row','index','index')
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var bED=_n('view')
var oFD=_v()
_(bED,oFD)
if(_oz(z,0,e,s,gg)){oFD.wxVkey=1
}
var xGD=_mz(z,'mpvue-city-picker',['bind:__l',1,'bind:onCancel',1,'bind:onConfirm',2,'class',3,'data-event-opts',4,'data-ref',5,'pickerValueDefault',6,'themeColor',7,'vueId',8],[],e,s,gg)
_(bED,xGD)
oFD.wxXCkey=1
_(r,bED)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var fID=_n('view')
_rz(z,fID,'class',0,e,s,gg)
var cJD=_v()
_(fID,cJD)
if(_oz(z,1,e,s,gg)){cJD.wxVkey=1
}
var hKD=_v()
_(fID,hKD)
if(_oz(z,2,e,s,gg)){hKD.wxVkey=1
}
cJD.wxXCkey=1
hKD.wxXCkey=1
_(r,fID)
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
var oND=_n('view')
_rz(z,oND,'class',0,e,s,gg)
var lOD=_v()
_(oND,lOD)
if(_oz(z,1,e,s,gg)){lOD.wxVkey=1
}
var aPD=_v()
_(oND,aPD)
if(_oz(z,2,e,s,gg)){aPD.wxVkey=1
}
lOD.wxXCkey=1
aPD.wxXCkey=1
_(r,oND)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var eRD=_n('view')
var bSD=_v()
_(eRD,bSD)
if(_oz(z,0,e,s,gg)){bSD.wxVkey=1
}
var oTD=_v()
_(eRD,oTD)
if(_oz(z,1,e,s,gg)){oTD.wxVkey=1
}
bSD.wxXCkey=1
oTD.wxXCkey=1
_(r,eRD)
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
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
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



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/tabBar/home/home","pages/tabBar/issue/issue","pages/tabBar/cart/cart","pages/tabBar/user/user","pages/goods/goods","pages/login/login","pages/login/register","pages/login/resetpasswd","pages/order/confirmation","pages/user/setting/setting","pages/user/myname/myname","pages/user/signature/signature","pages/integral/integral","pages/user/security/security","pages/user/language/language","pages/user/myQR/myQR","pages/msg/msg","pages/msg/chat/chat","pages/user/coupon/coupon","pages/shop/shop","pages/user/keep/keep","pages/user/address/address","pages/user/address/edit/edit","pages/user/deposit/deposit","pages/pay/payment/payment","pages/pay/success/success","pages/goods/ratings/ratings","pages/shop/check/check"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff"},"tabBar":{"color":"#333333","selectedColor":"#f06c7a","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/tabBar/home/home","iconPath":"static/img/tabBar/home.png","selectedIconPath":"static/img/tabBar/home-on.png","text":"首页"},{"pagePath":"pages/tabBar/category/category","iconPath":"static/img/tabBar/category.png","selectedIconPath":"static/img/tabBar/category-on.png","text":"分类"},{"pagePath":"pages/tabBar/issue/issue","iconPath":"static/img/tabBar/issue_1.png","selectedIconPath":"static/img/tabBar/issue.png","text":"发布"},{"pagePath":"pages/msg/msg","iconPath":"static/img/tabBar/message_1.png","selectedIconPath":"static/img/tabBar/message.png","text":"消息"},{"pagePath":"pages/tabBar/user/user","iconPath":"static/img/tabBar/user.png","selectedIconPath":"static/img/tabBar/user-on.png","text":"我的"}]},"nvue":{"pages":{"pages/user/order_list/order_list.html":{"window":{"usingComponents":{},"navigationBarTitleText":"我的订单","navigationBarBackgroundColor":"#f8f8f8","backgroundColorTop":"#f3f3f3","backgroundColorBottom":"#ffffff"}},"pages/goods/goods-list/goods-list.html":{"window":{"usingComponents":{},"navigationBarTitleText":"","enablePullDownRefresh":true,"bounce":"none"}},"pages/tabBar/category/category.html":{"window":{"usingComponents":{},"navigationBarTextStyle":"black","titleNView":false,"bounce":"none"}}}},"nvueCompiler":"weex","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"商城模板(更新一部分nvue页和subNvue导航栏)","compilerVersion":"2.1.3","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.wxml']=$gwx('./components/mpvue-citypicker/mpvueCityPicker.wxml');

__wxAppCode__['pages/goods/goods.json']={"navigationBarTitleText":"","navigationBarBackgroundColor":"#f1f1f1","onReachBottomDistance":50,"titleNView":false,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/goods/goods.wxml']=$gwx('./pages/goods/goods.wxml');

__wxAppCode__['pages/goods/ratings/ratings.json']={"navigationBarTitleText":"商品评论","enablePullDownRefresh":true,"onReachBottomDistance":50,"backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/goods/ratings/ratings.wxml']=$gwx('./pages/goods/ratings/ratings.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTextStyle":"black","enablePullDownRefresh":true,"onReachBottomDistance":50,"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/integral/integral.json']={"navigationBarBackgroundColor":"#f06c7a","navigationBarTitleText":"积分管理","navigationBarTextStyle":"white","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/integral/integral.wxml']=$gwx('./pages/integral/integral.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"登录","navigationBarBackgroundColor":"#f06c7a","navigationBarTextStyle":"white","bounce":"none","softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/login/register.json']={"navigationBarTitleText":"注册账号","navigationBarBackgroundColor":"#f06c7a","navigationBarTextStyle":"white","bounce":"none","softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/login/register.wxml']=$gwx('./pages/login/register.wxml');

__wxAppCode__['pages/login/resetpasswd.json']={"navigationBarTitleText":"重置密码","navigationBarBackgroundColor":"#f06c7a","navigationBarTextStyle":"white","bounce":"none","softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/login/resetpasswd.wxml']=$gwx('./pages/login/resetpasswd.wxml');

__wxAppCode__['pages/msg/chat/chat.json']={"navigationBarBackgroundColor":"#f2f2f2","backgroundColorTop":"#e5e5e5","backgroundColorBottom":"#e5e5e5","softinputNavBar":"none","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/msg/chat/chat.wxml']=$gwx('./pages/msg/chat/chat.wxml');

__wxAppCode__['pages/msg/msg.json']={"enablePullDownRefresh":true,"navigationBarTitleText":"消息列表","navigationBarBackgroundColor":"#f06c7a","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/msg/msg.wxml']=$gwx('./pages/msg/msg.wxml');

__wxAppCode__['pages/order/confirmation.json']={"navigationBarTitleText":"确认订单","softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/order/confirmation.wxml']=$gwx('./pages/order/confirmation.wxml');

__wxAppCode__['pages/pay/payment/payment.json']={"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"订单支付","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/pay/payment/payment.wxml']=$gwx('./pages/pay/payment/payment.wxml');

__wxAppCode__['pages/pay/success/success.json']={"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"支付成功","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/pay/success/success.wxml']=$gwx('./pages/pay/success/success.wxml');

__wxAppCode__['pages/shop/check/check.json']={"navigationBarTitleText":"实名认证","enablePullDownRefresh":true,"onReachBottomDistance":50,"backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","titleNView":false,"usingComponents":{}};
__wxAppCode__['pages/shop/check/check.wxml']=$gwx('./pages/shop/check/check.wxml');

__wxAppCode__['pages/shop/shop.json']={"navigationBarTitleText":"","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"white","titleNView":false,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/shop/shop.wxml']=$gwx('./pages/shop/shop.wxml');

__wxAppCode__['pages/tabBar/cart/cart.json']={"enablePullDownRefresh":true,"navigationBarTextStyle":"black","titleNView":false,"softinputNavBar":"none","subNVues":[{"id":"cartTitleNvue","path":"pages/tabBar/cart/subNvue/cartTitleNvue","type":"navigationBar"}],"usingComponents":{}};
__wxAppCode__['pages/tabBar/cart/cart.wxml']=$gwx('./pages/tabBar/cart/cart.wxml');

__wxAppCode__['pages/tabBar/home/home.json']={"navigationBarTextStyle":"black","enablePullDownRefresh":true,"onReachBottomDistance":50,"titleNView":false,"softinputNavBar":"none","subNVues":[{"id":"homeTitleNvue","path":"pages/tabBar/home/subNvue/homeTitleNvue","type":"navigationBar"}],"usingComponents":{}};
__wxAppCode__['pages/tabBar/home/home.wxml']=$gwx('./pages/tabBar/home/home.wxml');

__wxAppCode__['pages/tabBar/issue/issue.json']={"navigationBarTextStyle":"black","titleNView":true,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/tabBar/issue/issue.wxml']=$gwx('./pages/tabBar/issue/issue.wxml');

__wxAppCode__['pages/tabBar/user/user.json']={"enablePullDownRefresh":true,"backgroundTextStyle":"light","navigationBarBackgroundColor":"#f06c7a","backgroundColorTop":"#f06c7a","navigationBarTextStyle":"white","titleNView":false,"subNVues":[{"id":"userTitleNvue","path":"pages/tabBar/user/subNvue/userTitleNvue","type":"navigationBar"}],"usingComponents":{}};
__wxAppCode__['pages/tabBar/user/user.wxml']=$gwx('./pages/tabBar/user/user.wxml');

__wxAppCode__['pages/user/address/address.json']={"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"地址管理","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/user/address/address.wxml']=$gwx('./pages/user/address/address.wxml');

__wxAppCode__['pages/user/address/edit/edit.json']={"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"编辑收件人地址","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{"mpvue-city-picker":"/components/mpvue-citypicker/mpvueCityPicker"}};
__wxAppCode__['pages/user/address/edit/edit.wxml']=$gwx('./pages/user/address/edit/edit.wxml');

__wxAppCode__['pages/user/coupon/coupon.json']={"navigationBarTitleText":"优惠券","navigationBarBackgroundColor":"#f06c7a","navigationBarTextStyle":"white","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/user/coupon/coupon.wxml']=$gwx('./pages/user/coupon/coupon.wxml');

__wxAppCode__['pages/user/deposit/deposit.json']={"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"充值","backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/user/deposit/deposit.wxml']=$gwx('./pages/user/deposit/deposit.wxml');

__wxAppCode__['pages/user/keep/keep.json']={"navigationBarTitleText":"我的收藏","navigationBarBackgroundColor":"#f06c7a","navigationBarTextStyle":"white","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/user/keep/keep.wxml']=$gwx('./pages/user/keep/keep.wxml');

__wxAppCode__['pages/user/language/language.json']={"navigationBarBackgroundColor":"#f8f8f8","navigationBarTitleText":"选择语言","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","titleNView":false,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/user/language/language.wxml']=$gwx('./pages/user/language/language.wxml');

__wxAppCode__['pages/user/myname/myname.json']={"navigationBarBackgroundColor":"#f8f8f8","navigationBarTitleText":"昵称","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/user/myname/myname.wxml']=$gwx('./pages/user/myname/myname.wxml');

__wxAppCode__['pages/user/myQR/myQR.json']={"navigationBarTitleText":"我的二维码","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/user/myQR/myQR.wxml']=$gwx('./pages/user/myQR/myQR.wxml');

__wxAppCode__['pages/user/security/security.json']={"navigationBarBackgroundColor":"#f8f8f8","navigationBarTitleText":"账号安全","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/user/security/security.wxml']=$gwx('./pages/user/security/security.wxml');

__wxAppCode__['pages/user/setting/setting.json']={"navigationBarBackgroundColor":"#f8f8f8","navigationBarTitleText":"设置","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/user/setting/setting.wxml']=$gwx('./pages/user/setting/setting.wxml');

__wxAppCode__['pages/user/signature/signature.json']={"navigationBarBackgroundColor":"#f8f8f8","navigationBarTitleText":"个性签名","backgroundColorTop":"#ffffff","backgroundColorBottom":"#f3f3f3","usingComponents":{}};
__wxAppCode__['pages/user/signature/signature.wxml']=$gwx('./pages/user/signature/signature.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0a78":function(n,o,e){"use strict";e.r(o);var t=e("d8ee");for(var u in t)"default"!==u&&function(n){e.d(o,n,function(){return t[n]})}(u);e("2607");var a,c,f=e("2877"),l=Object(f["a"])(t["default"],a,c,!1,null,null,null);o["default"]=l.exports},"0ab0":function(n,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={onLaunch:function(){console.log("App Launch"," at App.vue:4")},onShow:function(){console.log("App Show"," at App.vue:7")},onHide:function(){console.log("App Hide"," at App.vue:10")}};o.default=t},2607:function(n,o,e){"use strict";var t=e("efaa"),u=e.n(t);u.a},d8ee:function(n,o,e){"use strict";e.r(o);var t=e("0ab0"),u=e.n(t);for(var a in t)"default"!==a&&function(n){e.d(o,n,function(){return t[n]})}(a);o["default"]=u.a},efaa:function(n,o,e){}},[["3f35","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var n, o, a = t[0], c = t[1], l = t[2], p = 0, f = []; p < a.length; p++) {
      o = a[p], u[o] && f.push(u[o][0]), u[o] = 0;
    }

    for (n in c) {
      Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    }

    s && s(t);

    while (f.length) {
      f.shift()();
    }

    return i.push.apply(i, l || []), r();
  }

  function r() {
    for (var e, t = 0; t < i.length; t++) {
      for (var r = i[t], n = !0, o = 1; o < r.length; o++) {
        var a = r[o];
        0 !== u[a] && (n = !1);
      }

      n && (i.splice(t--, 1), e = c(c.s = r[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = {
    "common/runtime": 0
  },
      i = [];

  function a(e) {
    return c.p + "" + e + ".js";
  }

  function c(t) {
    if (n[t]) return n[t].exports;
    var r = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(r.exports, r, r.exports, c), r.l = !0, r.exports;
  }

  c.e = function (e) {
    var t = [],
        r = {
      "components/mpvue-citypicker/mpvueCityPicker": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && r[e] && t.push(o[e] = new Promise(function (t, r) {
      for (var n = ({
        "components/mpvue-citypicker/mpvueCityPicker": "components/mpvue-citypicker/mpvueCityPicker"
      }[e] || e) + ".wxss", u = c.p + n, i = document.getElementsByTagName("link"), a = 0; a < i.length; a++) {
        var l = i[a],
            p = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (p === n || p === u)) return t();
      }

      var f = document.getElementsByTagName("style");

      for (a = 0; a < f.length; a++) {
        l = f[a], p = l.getAttribute("data-href");
        if (p === n || p === u) return t();
      }

      var s = document.createElement("link");
      s.rel = "stylesheet", s.type = "text/css", s.onload = t, s.onerror = function (t) {
        var n = t && t.target && t.target.src || u,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
        i.request = n, delete o[e], s.parentNode.removeChild(s), r(i);
      }, s.href = u;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(s);
    }).then(function () {
      o[e] = 0;
    }));
    var n = u[e];
    if (0 !== n) if (n) t.push(n[2]);else {
      var i = new Promise(function (t, r) {
        n = u[e] = [t, r];
      });
      t.push(n[2] = i);
      var l,
          p = document.createElement("script");
      p.charset = "utf-8", p.timeout = 120, c.nc && p.setAttribute("nonce", c.nc), p.src = a(e), l = function l(t) {
        p.onerror = p.onload = null, clearTimeout(f);
        var r = u[e];

        if (0 !== r) {
          if (r) {
            var n = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                i = new Error("Loading chunk " + e + " failed.\n(" + n + ": " + o + ")");
            i.type = n, i.request = o, r[1](i);
          }

          u[e] = void 0;
        }
      };
      var f = setTimeout(function () {
        l({
          type: "timeout",
          target: p
        });
      }, 12e4);
      p.onerror = p.onload = l, document.head.appendChild(p);
    }
    return Promise.all(t);
  }, c.m = e, c.c = n, c.d = function (e, t, r) {
    c.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, c.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, c.t = function (e, t) {
    if (1 & t && (e = c(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (c.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var n in e) {
      c.d(r, n, function (t) {
        return e[t];
      }.bind(null, n));
    }
    return r;
  }, c.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return c.d(t, "a", t), t;
  }, c.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, c.p = "/", c.oe = function (e) {
    throw console.error(e), e;
  };
  var l = global["webpackJsonp"] = global["webpackJsonp"] || [],
      p = l.push.bind(l);
  l.push = t, l = l.slice();

  for (var f = 0; f < l.length; f++) {
    t(l[f]);
  }

  var s = p;
  r();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"005e":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("d0e2"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"00bf":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("dda4"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"0279":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("3f7f"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"04b6":function(e){e.exports={zh:{title:"积分管理",integral:"积分",introduce:"贸易通过日常操作获得积分，当贸易获得的积分达到一定数量时，可以参与今后的积分抽奖，抵用，兑换活动",typelist:[{id:0,text:"获取积分"},{id:1,text:"使用积分"}],tasklist:[{type:0,img:"/static/img/qiandao.png",title:"签到送积分",text:"每日签到获得2积分",url:"",btn:"前往"},{type:0,img:"/static/img/qiandao.png",title:"好任务，看不停",text:"每天查看5次任务，可以获得5积分",url:"",btn:"前往"},{type:0,img:"/static/img/qiandao.png",title:"分享送积分",text:"每次分享，可以获得30积分",url:"",btn:"前往"},{type:0,img:"/static/img/qiandao.png",title:"认证送积分",text:"完成手机，实名认证，可以获得100积分",url:"",btn:"前往"},{type:0,img:"/static/img/qiandao.png",title:"交稿送积分",text:"每天交稿5次，可以获得10积分",url:"",btn:"前往"},{type:0,img:"/static/img/qiandao.png",title:"注册送积分",text:"完成注册，可以获得50积分",url:"",btn:"前往"},{type:0,img:"/static/img/qiandao.png",title:"设置送积分",text:"完成位置设置，可以获得50积分",url:"",btn:"前往"},{type:1,img:"/static/img/qiandao.png",title:"积分兑换",text:"奖励拿不完",url:"",btn:"前往"}]},en:{title:"Point management",integral:"Integral",introduce:"Points are earned through daily operations. When the points obtained through trade reach a certain amount, they can participate in future bonus draw, offset and exchange activities",typelist:[{id:0,text:"For points"},{id:1,text:"Using the integral"}],tasklist:[{type:0,img:"/static/img/qiandao.png",title:"Check in and give credits",text:"2 points for daily check-in",url:"",btn:"GO"},{type:0,img:"/static/img/qiandao.png",title:"Good job. Keep watching",text:"5 credits can be earned by checking 5 tasks per day",url:"",btn:"GO"},{type:0,img:"/static/img/qiandao.png",title:"Sharing points",text:"Each time you share, you get 30 points",url:"",btn:"GO"},{type:0,img:"/static/img/qiandao.png",title:"Certification credit",text:"You get 100 points for your mobile phone if you complete the real-name authentication",url:"",btn:"GO"},{type:0,img:"/static/img/qiandao.png",title:"Credits for delivery",text:"You get 10 credits for submitting 5 times a day",url:"",btn:"GO"},{type:0,img:"/static/img/qiandao.png",title:"Registration points",text:"You get 50 points for completing registration",url:"",btn:"GO"},{type:0,img:"/static/img/qiandao.png",title:"Set send integral",text:"Complete the position setting, you can get 50 credits",url:"",btn:"GO"},{type:1,img:"/static/img/qiandao.png",title:"Credits exchange",text:"You can't run out of rewards",url:"",btn:"GO"}]}}},"0633":function(e,l,a){},"06cf":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("bc30"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"08ac":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("58d2"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"0b53":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("a88c"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"0d04":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("f8cd"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"102b":function(e){e.exports={zh:{title:"设置",head:"头像",nickname:"昵称",signature:"个性签名",security:"账号安全",versions:"版本升级",selectLanguage:"选择语言",clearCache:"清除缓存",feedback:"问题反馈",AboutUs:"关于我们",exit:"退出"},en:{title:"Setting",head:"Head Portrait ",nickname:"Nick Name",signature:"Personalized Signature",security:"Account Security",versions:"Version Upgrade",selectLanguage:"Select Language",clearCache:"Clear Cache",feedback:"Problem Feedback",AboutUs:"About Us",exit:"exit"}}},"1b4b":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],t=u;l.default=t},"21fe":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("7b3e"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},2877:function(e,l,a){"use strict";function u(e,l,a,u,t,n,v,r){var b,i="function"===typeof e?e.options:e;if(l&&(i.render=l,i.staticRenderFns=a,i._compiled=!0),u&&(i.functional=!0),n&&(i._scopeId="data-v-"+n),v?(b=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(v)},i._ssrRegister=b):t&&(b=r?function(){t.call(this,this.$root.$options.shadowRoot)}:t),b)if(i.functional){i._injectStyles=b;var o=i.render;i.render=function(e,l){return b.call(l),o(e,l)}}else{var s=i.beforeCreate;i.beforeCreate=s?[].concat(s,b):[b]}return{exports:e,options:i}}a.d(l,"a",function(){return u})},"2f62":function(e,l,a){"use strict";a.r(l),a.d(l,"Store",function(){return p}),a.d(l,"install",function(){return j}),a.d(l,"mapState",function(){return P}),a.d(l,"mapMutations",function(){return E}),a.d(l,"mapGetters",function(){return C}),a.d(l,"mapActions",function(){return M}),a.d(l,"createNamespacedHelpers",function(){return I});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var u=function(e){var l=Number(e.version.split(".")[0]);if(l>=2)e.mixin({beforeCreate:u});else{var a=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[u].concat(e.init):u,a.call(this,e)}}function u(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}},t="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function n(e){t&&(e._devtoolHook=t,t.emit("vuex:init",e),t.on("vuex:travel-to-state",function(l){e.replaceState(l)}),e.subscribe(function(e,l){t.emit("vuex:mutation",e,l)}))}function v(e,l){Object.keys(e).forEach(function(a){return l(e[a],a)})}function r(e){return null!==e&&"object"===typeof e}function b(e){return e&&"function"===typeof e.then}var i=function(e,l){this.runtime=l,this._children=Object.create(null),this._rawModule=e;var a=e.state;this.state=("function"===typeof a?a():a)||{}},o={namespaced:{configurable:!0}};o.namespaced.get=function(){return!!this._rawModule.namespaced},i.prototype.addChild=function(e,l){this._children[e]=l},i.prototype.removeChild=function(e){delete this._children[e]},i.prototype.getChild=function(e){return this._children[e]},i.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},i.prototype.forEachChild=function(e){v(this._children,e)},i.prototype.forEachGetter=function(e){this._rawModule.getters&&v(this._rawModule.getters,e)},i.prototype.forEachAction=function(e){this._rawModule.actions&&v(this._rawModule.actions,e)},i.prototype.forEachMutation=function(e){this._rawModule.mutations&&v(this._rawModule.mutations,e)},Object.defineProperties(i.prototype,o);var s=function(e){this.register([],e,!1)};function c(e,l,a){if(l.update(a),a.modules)for(var u in a.modules){if(!l.getChild(u))return void 0;c(e.concat(u),l.getChild(u),a.modules[u])}}s.prototype.get=function(e){return e.reduce(function(e,l){return e.getChild(l)},this.root)},s.prototype.getNamespace=function(e){var l=this.root;return e.reduce(function(e,a){return l=l.getChild(a),e+(l.namespaced?a+"/":"")},"")},s.prototype.update=function(e){c([],this.root,e)},s.prototype.register=function(e,l,a){var u=this;void 0===a&&(a=!0);var t=new i(l,a);if(0===e.length)this.root=t;else{var n=this.get(e.slice(0,-1));n.addChild(e[e.length-1],t)}l.modules&&v(l.modules,function(l,t){u.register(e.concat(t),l,a)})},s.prototype.unregister=function(e){var l=this.get(e.slice(0,-1)),a=e[e.length-1];l.getChild(a).runtime&&l.removeChild(a)};var f;var p=function(e){var l=this;void 0===e&&(e={}),!f&&"undefined"!==typeof window&&window.Vue&&j(window.Vue);var a=e.plugins;void 0===a&&(a=[]);var u=e.strict;void 0===u&&(u=!1);var t=e.state;void 0===t&&(t={}),"function"===typeof t&&(t=t()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new s(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new f;var v=this,r=this,b=r.dispatch,i=r.commit;this.dispatch=function(e,l){return b.call(v,e,l)},this.commit=function(e,l,a){return i.call(v,e,l,a)},this.strict=u,m(this,t,[],this._modules.root),g(this,t),a.forEach(function(e){return e(l)}),f.config.devtools&&n(this)},d={state:{configurable:!0}};function h(e,l){return l.indexOf(e)<0&&l.push(e),function(){var a=l.indexOf(e);a>-1&&l.splice(a,1)}}function y(e,l){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var a=e.state;m(e,a,[],e._modules.root,!0),g(e,a,l)}function g(e,l,a){var u=e._vm;e.getters={};var t=e._wrappedGetters,n={};v(t,function(l,a){n[a]=function(){return l(e)},Object.defineProperty(e.getters,a,{get:function(){return e._vm[a]},enumerable:!0})});var r=f.config.silent;f.config.silent=!0,e._vm=new f({data:{$$state:l},computed:n}),f.config.silent=r,e.strict&&x(e),u&&(a&&e._withCommit(function(){u._data.$$state=null}),f.nextTick(function(){return u.$destroy()}))}function m(e,l,a,u,t){var n=!a.length,v=e._modules.getNamespace(a);if(u.namespaced&&(e._modulesNamespaceMap[v]=u),!n&&!t){var r=O(l,a.slice(0,-1)),b=a[a.length-1];e._withCommit(function(){f.set(r,b,u.state)})}var i=u.context=_(e,v,a);u.forEachMutation(function(l,a){var u=v+a;$(e,u,l,i)}),u.forEachAction(function(l,a){var u=l.root?a:v+a,t=l.handler||l;k(e,u,t,i)}),u.forEachGetter(function(l,a){var u=v+a;A(e,u,l,i)}),u.forEachChild(function(u,n){m(e,l,a.concat(n),u,t)})}function _(e,l,a){var u=""===l,t={dispatch:u?e.dispatch:function(a,u,t){var n=S(a,u,t),v=n.payload,r=n.options,b=n.type;return r&&r.root||(b=l+b),e.dispatch(b,v)},commit:u?e.commit:function(a,u,t){var n=S(a,u,t),v=n.payload,r=n.options,b=n.type;r&&r.root||(b=l+b),e.commit(b,v,r)}};return Object.defineProperties(t,{getters:{get:u?function(){return e.getters}:function(){return w(e,l)}},state:{get:function(){return O(e.state,a)}}}),t}function w(e,l){var a={},u=l.length;return Object.keys(e.getters).forEach(function(t){if(t.slice(0,u)===l){var n=t.slice(u);Object.defineProperty(a,n,{get:function(){return e.getters[t]},enumerable:!0})}}),a}function $(e,l,a,u){var t=e._mutations[l]||(e._mutations[l]=[]);t.push(function(l){a.call(e,u.state,l)})}function k(e,l,a,u){var t=e._actions[l]||(e._actions[l]=[]);t.push(function(l,t){var n=a.call(e,{dispatch:u.dispatch,commit:u.commit,getters:u.getters,state:u.state,rootGetters:e.getters,rootState:e.state},l,t);return b(n)||(n=Promise.resolve(n)),e._devtoolHook?n.catch(function(l){throw e._devtoolHook.emit("vuex:error",l),l}):n})}function A(e,l,a,u){e._wrappedGetters[l]||(e._wrappedGetters[l]=function(e){return a(u.state,u.getters,e.state,e.getters)})}function x(e){e._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function O(e,l){return l.length?l.reduce(function(e,l){return e[l]},e):e}function S(e,l,a){return r(e)&&e.type&&(a=l,l=e,e=e.type),{type:e,payload:l,options:a}}function j(e){f&&e===f||(f=e,u(f))}d.state.get=function(){return this._vm._data.$$state},d.state.set=function(e){0},p.prototype.commit=function(e,l,a){var u=this,t=S(e,l,a),n=t.type,v=t.payload,r=(t.options,{type:n,payload:v}),b=this._mutations[n];b&&(this._withCommit(function(){b.forEach(function(e){e(v)})}),this._subscribers.forEach(function(e){return e(r,u.state)}))},p.prototype.dispatch=function(e,l){var a=this,u=S(e,l),t=u.type,n=u.payload,v={type:t,payload:n},r=this._actions[t];if(r)return this._actionSubscribers.forEach(function(e){return e(v,a.state)}),r.length>1?Promise.all(r.map(function(e){return e(n)})):r[0](n)},p.prototype.subscribe=function(e){return h(e,this._subscribers)},p.prototype.subscribeAction=function(e){return h(e,this._actionSubscribers)},p.prototype.watch=function(e,l,a){var u=this;return this._watcherVM.$watch(function(){return e(u.state,u.getters)},l,a)},p.prototype.replaceState=function(e){var l=this;this._withCommit(function(){l._vm._data.$$state=e})},p.prototype.registerModule=function(e,l,a){void 0===a&&(a={}),"string"===typeof e&&(e=[e]),this._modules.register(e,l),m(this,this.state,e,this._modules.get(e),a.preserveState),g(this,this.state)},p.prototype.unregisterModule=function(e){var l=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var a=O(l.state,e.slice(0,-1));f.delete(a,e[e.length-1])}),y(this)},p.prototype.hotUpdate=function(e){this._modules.update(e),y(this,!0)},p.prototype._withCommit=function(e){var l=this._committing;this._committing=!0,e(),this._committing=l},Object.defineProperties(p.prototype,d);var P=T(function(e,l){var a={};return N(l).forEach(function(l){var u=l.key,t=l.val;a[u]=function(){var l=this.$store.state,a=this.$store.getters;if(e){var u=D(this.$store,"mapState",e);if(!u)return;l=u.context.state,a=u.context.getters}return"function"===typeof t?t.call(this,l,a):l[t]},a[u].vuex=!0}),a}),E=T(function(e,l){var a={};return N(l).forEach(function(l){var u=l.key,t=l.val;a[u]=function(){var l=[],a=arguments.length;while(a--)l[a]=arguments[a];var u=this.$store.commit;if(e){var n=D(this.$store,"mapMutations",e);if(!n)return;u=n.context.commit}return"function"===typeof t?t.apply(this,[u].concat(l)):u.apply(this.$store,[t].concat(l))}}),a}),C=T(function(e,l){var a={};return N(l).forEach(function(l){var u=l.key,t=l.val;t=e+t,a[u]=function(){if(!e||D(this.$store,"mapGetters",e))return this.$store.getters[t]},a[u].vuex=!0}),a}),M=T(function(e,l){var a={};return N(l).forEach(function(l){var u=l.key,t=l.val;a[u]=function(){var l=[],a=arguments.length;while(a--)l[a]=arguments[a];var u=this.$store.dispatch;if(e){var n=D(this.$store,"mapActions",e);if(!n)return;u=n.context.dispatch}return"function"===typeof t?t.apply(this,[u].concat(l)):u.apply(this.$store,[t].concat(l))}}),a}),I=function(e){return{mapState:P.bind(null,e),mapGetters:C.bind(null,e),mapMutations:E.bind(null,e),mapActions:M.bind(null,e)}};function N(e){return Array.isArray(e)?e.map(function(e){return{key:e,val:e}}):Object.keys(e).map(function(l){return{key:l,val:e[l]}})}function T(e){return function(l,a){return"string"!==typeof l?(a=l,l=""):"/"!==l.charAt(l.length-1)&&(l+="/"),e(l,a)}}function D(e,l,a){var u=e._modulesNamespaceMap[a];return u}var B={Store:p,install:j,version:"3.0.1",mapState:P,mapMutations:E,mapGetters:C,mapActions:M,createNamespacedHelpers:I};l["default"]=B},"2fb8":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("041f"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},3215:function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("8078"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"3c35":function(e,l){(function(l){e.exports=l}).call(this,{})},"3cb9":function(e){e.exports={zh:{title:"选择语言",btn:"确定"},en:{title:"Select Language",btn:"confirm"}}},"3f35":function(e,l,a){"use strict";(function(e){a("0633");var l=n(a("66fd")),u=n(a("0a78")),t=n(a("c91c"));function n(e){return e&&e.__esModule?e:{default:e}}function v(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},u=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),u.forEach(function(l){r(e,l,a[l])})}return e}function r(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}l.default.config.productionTip=!1,l.default.prototype.$store=t.default,u.default.mpType="app";var b=new l.default(v({},u.default,{store:t.default}));e(b).$mount()}).call(this,a("6e42")["createApp"])},"417e":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("58ca"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},4333:function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("a950"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},4362:function(e,l,a){l.nextTick=function(e){setTimeout(e,0)},l.platform=l.arch=l.execPath=l.title="browser",l.pid=1,l.browser=!0,l.env={},l.argv=[],l.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,u="/";l.cwd=function(){return u},l.chdir=function(l){e||(e=a("df7c")),u=e.resolve(l,u)}}(),l.exit=l.kill=l.umask=l.dlopen=l.uptime=l.memoryUsage=l.uvCounters=function(){},l.features={}},"44f1":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("7490"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"48c7":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("a768"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"4f47":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("8c09"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},5370:function(e,l,a){"use strict";function u(e){this.key=e.key,this.requestConfig={key:e.key,s:"rsx",platform:"WXJS",appname:e.key,sdkversion:"1.2.0",logversion:"2.0"}}u.prototype.getWxLocation=function(e,l){wx.getLocation({type:"gcj02",success:function(e){var a=e.longitude+","+e.latitude;wx.setStorage({key:"userLocation",data:a}),l(a)},fail:function(a){wx.getStorage({key:"userLocation",success:function(e){e.data&&l(e.data)}}),e.fail({errCode:"0",errMsg:a.errMsg||""})}})},u.prototype.getRegeo=function(e){function l(l){var u=a.requestConfig;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:a.key,location:l,extensions:"all",s:u.s,platform:u.platform,appname:a.key,sdkversion:u.sdkversion,logversion:u.logversion},method:"GET",header:{"content-type":"application/json"},success:function(a){var u,t,n,v,r,b,i,o,s;a.data.status&&"1"==a.data.status?(u=a.data.regeocode,t=u.addressComponent,n=[],v="",u&&u.roads[0]&&u.roads[0].name&&(v=u.roads[0].name+"附近"),r=l.split(",")[0],b=l.split(",")[1],u.pois&&u.pois[0]&&(v=u.pois[0].name+"附近",i=u.pois[0].location,i&&(r=parseFloat(i.split(",")[0]),b=parseFloat(i.split(",")[1]))),t.provice&&n.push(t.provice),t.city&&n.push(t.city),t.district&&n.push(t.district),t.streetNumber&&t.streetNumber.street&&t.streetNumber.number?(n.push(t.streetNumber.street),n.push(t.streetNumber.number)):(o="",u&&u.roads[0]&&u.roads[0].name&&(o=u.roads[0].name),n.push(o)),n=n.join(""),s=[{iconPath:e.iconPath,width:e.iconWidth,height:e.iconHeight,name:n,desc:v,longitude:r,latitude:b,id:0,regeocodeData:u}],e.success(s)):e.fail({errCode:a.data.infocode,errMsg:a.data.info})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})}var a=this;e.location?l(e.location):a.getWxLocation(e,function(e){l(e)})},u.prototype.getWeather=function(e){function l(l){var a="base";e.type&&"forecast"==e.type&&(a="all"),wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:u.key,city:l,extensions:a,s:t.s,platform:t.platform,appname:u.key,sdkversion:t.sdkversion,logversion:t.logversion},method:"GET",header:{"content-type":"application/json"},success:function(l){function a(e){var l={city:{text:"城市",data:e.city},weather:{text:"天气",data:e.weather},temperature:{text:"温度",data:e.temperature},winddirection:{text:"风向",data:e.winddirection+"风"},windpower:{text:"风力",data:e.windpower+"级"},humidity:{text:"湿度",data:e.humidity+"%"}};return l}var u,t;l.data.status&&"1"==l.data.status?l.data.lives?(u=l.data.lives,u&&u.length>0&&(u=u[0],t=a(u),t["liveData"]=u,e.success(t))):l.data.forecasts&&l.data.forecasts[0]&&e.success({forecast:l.data.forecasts[0]}):e.fail({errCode:l.data.infocode,errMsg:l.data.info})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})}function a(a){wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:u.key,location:a,extensions:"all",s:t.s,platform:t.platform,appname:u.key,sdkversion:t.sdkversion,logversion:t.logversion},method:"GET",header:{"content-type":"application/json"},success:function(a){var u,t;a.data.status&&"1"==a.data.status?(t=a.data.regeocode,t.addressComponent?u=t.addressComponent.adcode:t.aois&&t.aois.length>0&&(u=t.aois[0].adcode),l(u)):e.fail({errCode:a.data.infocode,errMsg:a.data.info})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})}var u=this,t=u.requestConfig;e.city?l(e.city):u.getWxLocation(e,function(e){a(e)})},u.prototype.getPoiAround=function(e){function l(l){var t={key:a.key,location:l,s:u.s,platform:u.platform,appname:a.key,sdkversion:u.sdkversion,logversion:u.logversion};e.querytypes&&(t["types"]=e.querytypes),e.querykeywords&&(t["keywords"]=e.querykeywords),wx.request({url:"https://restapi.amap.com/v3/place/around",data:t,method:"GET",header:{"content-type":"application/json"},success:function(l){var a,u,t,n;if(l.data.status&&"1"==l.data.status){if(l=l.data,l&&l.pois){for(a=[],u=0;u<l.pois.length;u++)t=0==u?e.iconPathSelected:e.iconPath,a.push({latitude:parseFloat(l.pois[u].location.split(",")[1]),longitude:parseFloat(l.pois[u].location.split(",")[0]),iconPath:t,width:22,height:32,id:u,name:l.pois[u].name,address:l.pois[u].address});n={markers:a,poisData:l.pois},e.success(n)}}else e.fail({errCode:l.data.infocode,errMsg:l.data.info})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})}var a=this,u=a.requestConfig;e.location?l(e.location):a.getWxLocation(e,function(e){l(e)})},u.prototype.getStaticmap=function(e){function l(l){t.push("location="+l),e.zoom&&t.push("zoom="+e.zoom),e.size&&t.push("size="+e.size),e.scale&&t.push("scale="+e.scale),e.markers&&t.push("markers="+e.markers),e.labels&&t.push("labels="+e.labels),e.paths&&t.push("paths="+e.paths),e.traffic&&t.push("traffic="+e.traffic);var a=n+t.join("&");e.success({url:a})}var a,u=this,t=[],n="https://restapi.amap.com/v3/staticmap?";t.push("key="+u.key),a=u.requestConfig,t.push("s="+a.s),t.push("platform="+a.platform),t.push("appname="+a.appname),t.push("sdkversion="+a.sdkversion),t.push("logversion="+a.logversion),e.location?l(e.location):u.getWxLocation(e,function(e){l(e)})},u.prototype.getInputtips=function(e){var l=this,a=l.requestConfig,u={key:l.key,s:a.s,platform:a.platform,appname:l.key,sdkversion:a.sdkversion,logversion:a.logversion};e.location&&(u["location"]=e.location),e.keywords&&(u["keywords"]=e.keywords),e.type&&(u["type"]=e.type),e.city&&(u["city"]=e.city),e.citylimit&&(u["citylimit"]=e.citylimit),wx.request({url:"https://restapi.amap.com/v3/assistant/inputtips",data:u,method:"GET",header:{"content-type":"application/json"},success:function(l){l&&l.data&&l.data.tips&&e.success({tips:l.data.tips})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})},u.prototype.getDrivingRoute=function(e){var l=this,a=l.requestConfig,u={key:l.key,s:a.s,platform:a.platform,appname:l.key,sdkversion:a.sdkversion,logversion:a.logversion};e.origin&&(u["origin"]=e.origin),e.destination&&(u["destination"]=e.destination),e.strategy&&(u["strategy"]=e.strategy),e.waypoints&&(u["waypoints"]=e.waypoints),e.avoidpolygons&&(u["avoidpolygons"]=e.avoidpolygons),e.avoidroad&&(u["avoidroad"]=e.avoidroad),wx.request({url:"https://restapi.amap.com/v3/direction/driving",data:u,method:"GET",header:{"content-type":"application/json"},success:function(l){l&&l.data&&l.data.route&&e.success({paths:l.data.route.paths,taxi_cost:l.data.route.taxi_cost||""})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})},u.prototype.getWalkingRoute=function(e){var l=this,a=l.requestConfig,u={key:l.key,s:a.s,platform:a.platform,appname:l.key,sdkversion:a.sdkversion,logversion:a.logversion};e.origin&&(u["origin"]=e.origin),e.destination&&(u["destination"]=e.destination),wx.request({url:"https://restapi.amap.com/v3/direction/walking",data:u,method:"GET",header:{"content-type":"application/json"},success:function(l){l&&l.data&&l.data.route&&e.success({paths:l.data.route.paths})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})},u.prototype.getTransitRoute=function(e){var l=this,a=l.requestConfig,u={key:l.key,s:a.s,platform:a.platform,appname:l.key,sdkversion:a.sdkversion,logversion:a.logversion};e.origin&&(u["origin"]=e.origin),e.destination&&(u["destination"]=e.destination),e.strategy&&(u["strategy"]=e.strategy),e.city&&(u["city"]=e.city),e.cityd&&(u["cityd"]=e.cityd),wx.request({url:"https://restapi.amap.com/v3/direction/transit/integrated",data:u,method:"GET",header:{"content-type":"application/json"},success:function(l){if(l&&l.data&&l.data.route){var a=l.data.route;e.success({distance:a.distance||"",taxi_cost:a.taxi_cost||"",transits:a.transits})}},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})},u.prototype.getRidingRoute=function(e){var l=this,a=l.requestConfig,u={key:l.key,s:a.s,platform:a.platform,appname:l.key,sdkversion:a.sdkversion,logversion:a.logversion};e.origin&&(u["origin"]=e.origin),e.destination&&(u["destination"]=e.destination),wx.request({url:"https://restapi.amap.com/v4/direction/bicycling",data:u,method:"GET",header:{"content-type":"application/json"},success:function(l){l&&l.data&&l.data.data&&e.success({paths:l.data.data.paths})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})},e.exports.AMapWX=u},"59bb":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("2e81"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"657d":function(e){e.exports={zh:["选择国家","安哥拉","阿富汗","阿尔巴尼亚","阿尔及利亚","安道尔共和国","安圭拉岛","安提瓜和巴布达","阿根廷","亚美尼亚","阿森松","澳大利亚","奥地利","阿塞拜疆","巴哈马","巴林","孟加拉国","巴巴多斯","白俄罗斯","比利时","伯利兹","贝宁","百慕大群岛","玻利维亚","博茨瓦纳","巴西","文莱","保加利亚","布基纳法索","缅甸","布隆迪","喀麦隆","加拿大","开曼群岛","中非共和国 ","乍得","智利","中国","哥伦比亚","刚果","库克群岛","哥斯达黎加","古巴","塞浦路斯","捷克","丹麦","吉布提","多米尼加共和国","厄瓜多尔","埃及","萨尔瓦多","爱沙尼亚","埃塞俄比亚","斐济","芬兰","法国","法属圭亚那","加蓬","冈比亚","格鲁吉亚","德国","加纳","直布罗陀","希腊","格林纳达","关岛","危地马拉","几内亚","圭亚那","海地","洪都拉斯","香港","匈牙利","冰岛","印度","印度尼西亚","伊朗","伊拉克","爱尔兰","以色列","意大利","科特迪瓦","牙买加","日本","约旦","柬埔寨","哈萨克斯坦","肯尼亚","韩国","科威特","吉尔吉斯坦","老挝","拉脱维亚","黎巴嫩","莱索托","利比里亚","利比亚","列支敦士登","立陶宛","卢森堡","澳门","马达加斯加","马拉维","马来西亚","马尔代夫","马里","马耳他","马里亚那群岛","马提尼克","毛里求斯","墨西哥","摩尔多瓦","摩纳哥","蒙古","蒙特塞拉特岛","摩洛哥","莫桑比克","纳米比亚","瑙鲁","尼泊尔","荷属安的列斯","荷兰","新西兰","尼加拉瓜","尼日尔","尼日利亚","朝鲜","挪威","阿曼","巴基斯坦","巴拿马","巴布亚新几内亚","巴拉圭","秘鲁","菲律宾","波兰","法属玻利尼西亚","葡萄牙","波多黎各","卡塔尔","留尼旺","罗马尼亚","俄罗斯","圣卢西亚","圣文森特岛","东萨摩亚(美)","西萨摩亚","圣马力诺","圣多美和普林西比","沙特阿拉伯","塞内加尔","塞舌尔","塞拉利昂","新加坡","斯洛伐克","斯洛文尼亚","所罗门群岛","索马里","南非","西班牙","斯里兰卡","圣卢西亚","圣文森特","苏丹","苏里南","斯威士兰","瑞典","瑞士","叙利亚","台湾省","塔吉克斯坦","坦桑尼亚","泰国","多哥","汤加","特立尼达和多巴哥","突尼斯","土耳其","土库曼斯坦 ","乌干达","乌克兰","阿拉伯联合酋长国","英国","美国","乌拉圭","乌兹别克斯坦","委内瑞拉","越南","也门","南斯拉夫","津巴布韦","扎伊尔","赞比亚"],en:["Choose the country","Angola","Afghanistan","Albania","Algeria","The Republic of Andorra","Anguilla Island","Antigua and Barbuda","Argentina","Armenia","Ascension","Australia","Austria","Azerbaijani","The Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda Islands","Bolivia","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Myanmar","Burundi","Cameroon","Canada","Cayman Islands","The Central African Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cuba","Cyprus","The Czech Republic","Denmark","Djibouti","Dominican Republic","Ecuador","Egypt","El Salvador","Estonia","Ethiopia","Fiji","Finland","France","French Guiana","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Grenada","Guam","Guatemala","Guinea","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Cote d'Ivoire","Jamaica","Japan","Jordan","Cambodia","Kazakhstan","Kenya","Korea","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mariana Islands","Martinique","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montserrat Island","Morocco","Mozambique","Namibia","Nauru","Nepal","Netherlands Antilles","The Netherlands","New Zealand","Nicaragua","Niger","Nigeria","Korea","Norway","Oman","Pakistan","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","French Polynesia","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Saint Lucia","Saint Vincent Island","East Samoa (United States)","Western Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","Spain","Sri Lanka","Saint Lucia","Saint Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan Province","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Uganda","Ukraine","United Arab Emirates","Britain","America","Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen","Yugoslavia","Zimbabwe","Zaire","Zambia"]}},"66fd":function(e,l,a){"use strict";a.r(l),function(e){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function u(e){return void 0===e||null===e}function t(e){return void 0!==e&&null!==e}function n(e){return!0===e}function v(e){return!1===e}function r(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function b(e){return null!==e&&"object"===typeof e}var i=Object.prototype.toString;function o(e){return"[object Object]"===i.call(e)}function s(e){return"[object RegExp]"===i.call(e)}function c(e){var l=parseFloat(String(e));return l>=0&&Math.floor(l)===l&&isFinite(e)}function f(e){return t(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||o(e)&&e.toString===i?JSON.stringify(e,null,2):String(e)}function d(e){var l=parseFloat(e);return isNaN(l)?e:l}function h(e,l){for(var a=Object.create(null),u=e.split(","),t=0;t<u.length;t++)a[u[t]]=!0;return l?function(e){return a[e.toLowerCase()]}:function(e){return a[e]}}h("slot,component",!0);var y=h("key,ref,slot,slot-scope,is");function g(e,l){if(e.length){var a=e.indexOf(l);if(a>-1)return e.splice(a,1)}}var m=Object.prototype.hasOwnProperty;function _(e,l){return m.call(e,l)}function w(e){var l=Object.create(null);return function(a){var u=l[a];return u||(l[a]=e(a))}}var $=/-(\w)/g,k=w(function(e){return e.replace($,function(e,l){return l?l.toUpperCase():""})}),A=w(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),x=/\B([A-Z])/g,O=w(function(e){return e.replace(x,"-$1").toLowerCase()});function S(e,l){function a(a){var u=arguments.length;return u?u>1?e.apply(l,arguments):e.call(l,a):e.call(l)}return a._length=e.length,a}function j(e,l){return e.bind(l)}var P=Function.prototype.bind?j:S;function E(e,l){l=l||0;var a=e.length-l,u=new Array(a);while(a--)u[a]=e[a+l];return u}function C(e,l){for(var a in l)e[a]=l[a];return e}function M(e){for(var l={},a=0;a<e.length;a++)e[a]&&C(l,e[a]);return l}function I(e,l,a){}var N=function(e,l,a){return!1},T=function(e){return e};function D(e,l){if(e===l)return!0;var a=b(e),u=b(l);if(!a||!u)return!a&&!u&&String(e)===String(l);try{var t=Array.isArray(e),n=Array.isArray(l);if(t&&n)return e.length===l.length&&e.every(function(e,a){return D(e,l[a])});if(e instanceof Date&&l instanceof Date)return e.getTime()===l.getTime();if(t||n)return!1;var v=Object.keys(e),r=Object.keys(l);return v.length===r.length&&v.every(function(a){return D(e[a],l[a])})}catch(i){return!1}}function B(e,l){for(var a=0;a<e.length;a++)if(D(e[a],l))return a;return-1}function R(e){var l=!1;return function(){l||(l=!0,e.apply(this,arguments))}}var U=["component","directive","filter"],L=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:N,isReservedAttr:N,isUnknownElement:N,getTagNamespace:I,parsePlatformTagName:T,mustUseProp:N,async:!0,_lifecycleHooks:L},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(e){var l=(e+"").charCodeAt(0);return 36===l||95===l}function q(e,l,a,u){Object.defineProperty(e,l,{value:a,enumerable:!!u,writable:!0,configurable:!0})}var G=new RegExp("[^"+F.source+".$_\\d]");function H(e){if(!G.test(e)){var l=e.split(".");return function(e){for(var a=0;a<l.length;a++){if(!e)return;e=e[l[a]]}return e}}}var W,J="__proto__"in{},K="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=Y&&WXEnvironment.platform.toLowerCase(),Z=K&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),ee=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),le=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===X),ae=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(K)try{var ue={};Object.defineProperty(ue,"passive",{get:function(){}}),window.addEventListener("test-passive",null,ue)}catch(lt){}var te=function(){return void 0===W&&(W=!K&&!Y&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),W},ne=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ve(e){return"function"===typeof e&&/native code/.test(e.toString())}var re,be="undefined"!==typeof Symbol&&ve(Symbol)&&"undefined"!==typeof Reflect&&ve(Reflect.ownKeys);re="undefined"!==typeof Set&&ve(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ie=I,oe=0,se=function(){this.id=oe++,this.subs=[]};se.prototype.addSub=function(e){this.subs.push(e)},se.prototype.removeSub=function(e){g(this.subs,e)},se.prototype.depend=function(){se.target&&se.target.addDep(this)},se.prototype.notify=function(){var e=this.subs.slice();for(var l=0,a=e.length;l<a;l++)e[l].update()},se.target=null;var ce=[];function fe(e){ce.push(e),se.target=e}function pe(){ce.pop(),se.target=ce[ce.length-1]}var de=function(e,l,a,u,t,n,v,r){this.tag=e,this.data=l,this.children=a,this.text=u,this.elm=t,this.ns=void 0,this.context=n,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=l&&l.key,this.componentOptions=v,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=r,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},he={child:{configurable:!0}};he.child.get=function(){return this.componentInstance},Object.defineProperties(de.prototype,he);var ye=function(e){void 0===e&&(e="");var l=new de;return l.text=e,l.isComment=!0,l};function ge(e){return new de(void 0,void 0,void 0,String(e))}function me(e){var l=new de(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return l.ns=e.ns,l.isStatic=e.isStatic,l.key=e.key,l.isComment=e.isComment,l.fnContext=e.fnContext,l.fnOptions=e.fnOptions,l.fnScopeId=e.fnScopeId,l.asyncMeta=e.asyncMeta,l.isCloned=!0,l}var _e=Array.prototype,we=Object.create(_e),$e=["push","pop","shift","unshift","splice","sort","reverse"];$e.forEach(function(e){var l=_e[e];q(we,e,function(){var a=[],u=arguments.length;while(u--)a[u]=arguments[u];var t,n=l.apply(this,a),v=this.__ob__;switch(e){case"push":case"unshift":t=a;break;case"splice":t=a.slice(2);break}return t&&v.observeArray(t),v.dep.notify(),n})});var ke=Object.getOwnPropertyNames(we),Ae=!0;function xe(e){Ae=e}var Oe=function(e){this.value=e,this.dep=new se,this.vmCount=0,q(e,"__ob__",this),Array.isArray(e)?(J?Se(e,we):je(e,we,ke),this.observeArray(e)):this.walk(e)};function Se(e,l){e.__proto__=l}function je(e,l,a){for(var u=0,t=a.length;u<t;u++){var n=a[u];q(e,n,l[n])}}function Pe(e,l){var a;if(b(e)&&!(e instanceof de))return _(e,"__ob__")&&e.__ob__ instanceof Oe?a=e.__ob__:Ae&&!te()&&(Array.isArray(e)||o(e))&&Object.isExtensible(e)&&!e._isVue&&(a=new Oe(e)),l&&a&&a.vmCount++,a}function Ee(e,l,a,u,t){var n=new se,v=Object.getOwnPropertyDescriptor(e,l);if(!v||!1!==v.configurable){var r=v&&v.get,b=v&&v.set;r&&!b||2!==arguments.length||(a=e[l]);var i=!t&&Pe(a);Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:function(){var l=r?r.call(e):a;return se.target&&(n.depend(),i&&(i.dep.depend(),Array.isArray(l)&&Ie(l))),l},set:function(l){var u=r?r.call(e):a;l===u||l!==l&&u!==u||r&&!b||(b?b.call(e,l):a=l,i=!t&&Pe(l),n.notify())}})}}function Ce(e,l,a){if(Array.isArray(e)&&c(l))return e.length=Math.max(e.length,l),e.splice(l,1,a),a;if(l in e&&!(l in Object.prototype))return e[l]=a,a;var u=e.__ob__;return e._isVue||u&&u.vmCount?a:u?(Ee(u.value,l,a),u.dep.notify(),a):(e[l]=a,a)}function Me(e,l){if(Array.isArray(e)&&c(l))e.splice(l,1);else{var a=e.__ob__;e._isVue||a&&a.vmCount||_(e,l)&&(delete e[l],a&&a.dep.notify())}}function Ie(e){for(var l=void 0,a=0,u=e.length;a<u;a++)l=e[a],l&&l.__ob__&&l.__ob__.dep.depend(),Array.isArray(l)&&Ie(l)}Oe.prototype.walk=function(e){for(var l=Object.keys(e),a=0;a<l.length;a++)Ee(e,l[a])},Oe.prototype.observeArray=function(e){for(var l=0,a=e.length;l<a;l++)Pe(e[l])};var Ne=V.optionMergeStrategies;function Te(e,l){if(!l)return e;for(var a,u,t,n=be?Reflect.ownKeys(l):Object.keys(l),v=0;v<n.length;v++)a=n[v],"__ob__"!==a&&(u=e[a],t=l[a],_(e,a)?u!==t&&o(u)&&o(t)&&Te(u,t):Ce(e,a,t));return e}function De(e,l,a){return a?function(){var u="function"===typeof l?l.call(a,a):l,t="function"===typeof e?e.call(a,a):e;return u?Te(u,t):t}:l?e?function(){return Te("function"===typeof l?l.call(this,this):l,"function"===typeof e?e.call(this,this):e)}:l:e}function Be(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?Re(a):a}function Re(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function Ue(e,l,a,u){var t=Object.create(e||null);return l?C(t,l):t}Ne.data=function(e,l,a){return a?De(e,l,a):l&&"function"!==typeof l?e:De(e,l)},L.forEach(function(e){Ne[e]=Be}),U.forEach(function(e){Ne[e+"s"]=Ue}),Ne.watch=function(e,l,a,u){if(e===ae&&(e=void 0),l===ae&&(l=void 0),!l)return Object.create(e||null);if(!e)return l;var t={};for(var n in C(t,e),l){var v=t[n],r=l[n];v&&!Array.isArray(v)&&(v=[v]),t[n]=v?v.concat(r):Array.isArray(r)?r:[r]}return t},Ne.props=Ne.methods=Ne.inject=Ne.computed=function(e,l,a,u){if(!e)return l;var t=Object.create(null);return C(t,e),l&&C(t,l),t},Ne.provide=De;var Le=function(e,l){return void 0===l?e:l};function Ve(e,l){var a=e.props;if(a){var u,t,n,v={};if(Array.isArray(a)){u=a.length;while(u--)t=a[u],"string"===typeof t&&(n=k(t),v[n]={type:null})}else if(o(a))for(var r in a)t=a[r],n=k(r),v[n]=o(t)?t:{type:t};else 0;e.props=v}}function Fe(e,l){var a=e.inject;if(a){var u=e.inject={};if(Array.isArray(a))for(var t=0;t<a.length;t++)u[a[t]]={from:a[t]};else if(o(a))for(var n in a){var v=a[n];u[n]=o(v)?C({from:n},v):{from:v}}else 0}}function ze(e){var l=e.directives;if(l)for(var a in l){var u=l[a];"function"===typeof u&&(l[a]={bind:u,update:u})}}function qe(e,l,a){if("function"===typeof l&&(l=l.options),Ve(l,a),Fe(l,a),ze(l),!l._base&&(l.extends&&(e=qe(e,l.extends,a)),l.mixins))for(var u=0,t=l.mixins.length;u<t;u++)e=qe(e,l.mixins[u],a);var n,v={};for(n in e)r(n);for(n in l)_(e,n)||r(n);function r(u){var t=Ne[u]||Le;v[u]=t(e[u],l[u],a,u)}return v}function Ge(e,l,a,u){if("string"===typeof a){var t=e[l];if(_(t,a))return t[a];var n=k(a);if(_(t,n))return t[n];var v=A(n);if(_(t,v))return t[v];var r=t[a]||t[n]||t[v];return r}}function He(e,l,a,u){var t=l[e],n=!_(a,e),v=a[e],r=Ye(Boolean,t.type);if(r>-1)if(n&&!_(t,"default"))v=!1;else if(""===v||v===O(e)){var b=Ye(String,t.type);(b<0||r<b)&&(v=!0)}if(void 0===v){v=We(u,t,e);var i=Ae;xe(!0),Pe(v),xe(i)}return v}function We(e,l,a){if(_(l,"default")){var u=l.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[a]&&void 0!==e._props[a]?e._props[a]:"function"===typeof u&&"Function"!==Je(l.type)?u.call(e):u}}function Je(e){var l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:""}function Ke(e,l){return Je(e)===Je(l)}function Ye(e,l){if(!Array.isArray(l))return Ke(l,e)?0:-1;for(var a=0,u=l.length;a<u;a++)if(Ke(l[a],e))return a;return-1}function Xe(e,l,a){fe();try{if(l){var u=l;while(u=u.$parent){var t=u.$options.errorCaptured;if(t)for(var n=0;n<t.length;n++)try{var v=!1===t[n].call(u,e,l,a);if(v)return}catch(lt){Qe(lt,u,"errorCaptured hook")}}}Qe(e,l,a)}finally{pe()}}function Ze(e,l,a,u,t){var n;try{n=a?e.apply(l,a):e.call(l),n&&!n._isVue&&f(n)&&!n._handled&&(n.catch(function(e){return Xe(e,u,t+" (Promise/async)")}),n._handled=!0)}catch(lt){Xe(lt,u,t)}return n}function Qe(e,l,a){if(V.errorHandler)try{return V.errorHandler.call(null,e,l,a)}catch(lt){lt!==e&&el(lt,null,"config.errorHandler")}el(e,l,a)}function el(e,l,a){if(!K&&!Y||"undefined"===typeof console)throw e;console.error(e)}var ll,al=[],ul=!1;function tl(){ul=!1;var e=al.slice(0);al.length=0;for(var l=0;l<e.length;l++)e[l]()}if("undefined"!==typeof Promise&&ve(Promise)){var nl=Promise.resolve();ll=function(){nl.then(tl),le&&setTimeout(I)}}else if(Q||"undefined"===typeof MutationObserver||!ve(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ll="undefined"!==typeof setImmediate&&ve(setImmediate)?function(){setImmediate(tl)}:function(){setTimeout(tl,0)};else{var vl=1,rl=new MutationObserver(tl),bl=document.createTextNode(String(vl));rl.observe(bl,{characterData:!0}),ll=function(){vl=(vl+1)%2,bl.data=String(vl)}}function il(e,l){var a;if(al.push(function(){if(e)try{e.call(l)}catch(lt){Xe(lt,l,"nextTick")}else a&&a(l)}),ul||(ul=!0,ll()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){a=e})}var ol=new re;function sl(e){cl(e,ol),ol.clear()}function cl(e,l){var a,u,t=Array.isArray(e);if(!(!t&&!b(e)||Object.isFrozen(e)||e instanceof de)){if(e.__ob__){var n=e.__ob__.dep.id;if(l.has(n))return;l.add(n)}if(t){a=e.length;while(a--)cl(e[a],l)}else{u=Object.keys(e),a=u.length;while(a--)cl(e[u[a]],l)}}}var fl=w(function(e){var l="&"===e.charAt(0);e=l?e.slice(1):e;var a="~"===e.charAt(0);e=a?e.slice(1):e;var u="!"===e.charAt(0);return e=u?e.slice(1):e,{name:e,once:a,capture:u,passive:l}});function pl(e,l){function a(){var e=arguments,u=a.fns;if(!Array.isArray(u))return Ze(u,null,arguments,l,"v-on handler");for(var t=u.slice(),n=0;n<t.length;n++)Ze(t[n],null,e,l,"v-on handler")}return a.fns=e,a}function dl(e,l,a,t,v,r){var b,i,o,s;for(b in e)i=e[b],o=l[b],s=fl(b),u(i)||(u(o)?(u(i.fns)&&(i=e[b]=pl(i,r)),n(s.once)&&(i=e[b]=v(s.name,i,s.capture)),a(s.name,i,s.capture,s.passive,s.params)):i!==o&&(o.fns=i,e[b]=o));for(b in l)u(e[b])&&(s=fl(b),t(s.name,l[b],s.capture))}function hl(e,l,a){var n=l.options.props;if(!u(n)){var v={},r=e.attrs,b=e.props;if(t(r)||t(b))for(var i in n){var o=O(i);yl(v,b,i,o,!0)||yl(v,r,i,o,!1)}return v}}function yl(e,l,a,u,n){if(t(l)){if(_(l,a))return e[a]=l[a],n||delete l[a],!0;if(_(l,u))return e[a]=l[u],n||delete l[u],!0}return!1}function gl(e){for(var l=0;l<e.length;l++)if(Array.isArray(e[l]))return Array.prototype.concat.apply([],e);return e}function ml(e){return r(e)?[ge(e)]:Array.isArray(e)?wl(e):void 0}function _l(e){return t(e)&&t(e.text)&&v(e.isComment)}function wl(e,l){var a,v,b,i,o=[];for(a=0;a<e.length;a++)v=e[a],u(v)||"boolean"===typeof v||(b=o.length-1,i=o[b],Array.isArray(v)?v.length>0&&(v=wl(v,(l||"")+"_"+a),_l(v[0])&&_l(i)&&(o[b]=ge(i.text+v[0].text),v.shift()),o.push.apply(o,v)):r(v)?_l(i)?o[b]=ge(i.text+v):""!==v&&o.push(ge(v)):_l(v)&&_l(i)?o[b]=ge(i.text+v.text):(n(e._isVList)&&t(v.tag)&&u(v.key)&&t(l)&&(v.key="__vlist"+l+"_"+a+"__"),o.push(v)));return o}function $l(e){var l=e.$options.provide;l&&(e._provided="function"===typeof l?l.call(e):l)}function kl(e){var l=Al(e.$options.inject,e);l&&(xe(!1),Object.keys(l).forEach(function(a){Ee(e,a,l[a])}),xe(!0))}function Al(e,l){if(e){for(var a=Object.create(null),u=be?Reflect.ownKeys(e):Object.keys(e),t=0;t<u.length;t++){var n=u[t];if("__ob__"!==n){var v=e[n].from,r=l;while(r){if(r._provided&&_(r._provided,v)){a[n]=r._provided[v];break}r=r.$parent}if(!r)if("default"in e[n]){var b=e[n].default;a[n]="function"===typeof b?b.call(l):b}else 0}}return a}}function xl(e,l){if(!e||!e.length)return{};for(var a={},u=0,t=e.length;u<t;u++){var n=e[u],v=n.data;if(v&&v.attrs&&v.attrs.slot&&delete v.attrs.slot,n.context!==l&&n.fnContext!==l||!v||null==v.slot)(a.default||(a.default=[])).push(n);else{var r=v.slot,b=a[r]||(a[r]=[]);"template"===n.tag?b.push.apply(b,n.children||[]):b.push(n)}}for(var i in a)a[i].every(Ol)&&delete a[i];return a}function Ol(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Sl(e,l,u){var t,n=Object.keys(l).length>0,v=e?!!e.$stable:!n,r=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(v&&u&&u!==a&&r===u.$key&&!n&&!u.$hasNormal)return u;for(var b in t={},e)e[b]&&"$"!==b[0]&&(t[b]=jl(l,b,e[b]))}else t={};for(var i in l)i in t||(t[i]=Pl(l,i));return e&&Object.isExtensible(e)&&(e._normalized=t),q(t,"$stable",v),q(t,"$key",r),q(t,"$hasNormal",n),t}function jl(e,l,a){var u=function(){var e=arguments.length?a.apply(null,arguments):a({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:ml(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return a.proxy&&Object.defineProperty(e,l,{get:u,enumerable:!0,configurable:!0}),u}function Pl(e,l){return function(){return e[l]}}function El(e,l){var a,u,n,v,r;if(Array.isArray(e)||"string"===typeof e)for(a=new Array(e.length),u=0,n=e.length;u<n;u++)a[u]=l(e[u],u);else if("number"===typeof e)for(a=new Array(e),u=0;u<e;u++)a[u]=l(u+1,u);else if(b(e))if(be&&e[Symbol.iterator]){a=[];var i=e[Symbol.iterator](),o=i.next();while(!o.done)a.push(l(o.value,a.length)),o=i.next()}else for(v=Object.keys(e),a=new Array(v.length),u=0,n=v.length;u<n;u++)r=v[u],a[u]=l(e[r],r,u);return t(a)||(a=[]),a._isVList=!0,a}function Cl(e,l,a,u){var t,n=this.$scopedSlots[e];n?(a=a||{},u&&(a=C(C({},u),a)),t=n(a)||l):t=this.$slots[e]||l;var v=a&&a.slot;return v?this.$createElement("template",{slot:v},t):t}function Ml(e){return Ge(this.$options,"filters",e,!0)||T}function Il(e,l){return Array.isArray(e)?-1===e.indexOf(l):e!==l}function Nl(e,l,a,u,t){var n=V.keyCodes[l]||a;return t&&u&&!V.keyCodes[l]?Il(t,u):n?Il(n,e):u?O(u)!==l:void 0}function Tl(e,l,a,u,t){if(a)if(b(a)){var n;Array.isArray(a)&&(a=M(a));var v=function(v){if("class"===v||"style"===v||y(v))n=e;else{var r=e.attrs&&e.attrs.type;n=u||V.mustUseProp(l,r,v)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var b=k(v),i=O(v);if(!(b in n)&&!(i in n)&&(n[v]=a[v],t)){var o=e.on||(e.on={});o["update:"+v]=function(e){a[v]=e}}};for(var r in a)v(r)}else;return e}function Dl(e,l){var a=this._staticTrees||(this._staticTrees=[]),u=a[e];return u&&!l?u:(u=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Rl(u,"__static__"+e,!1),u)}function Bl(e,l,a){return Rl(e,"__once__"+l+(a?"_"+a:""),!0),e}function Rl(e,l,a){if(Array.isArray(e))for(var u=0;u<e.length;u++)e[u]&&"string"!==typeof e[u]&&Ul(e[u],l+"_"+u,a);else Ul(e,l,a)}function Ul(e,l,a){e.isStatic=!0,e.key=l,e.isOnce=a}function Ll(e,l){if(l)if(o(l)){var a=e.on=e.on?C({},e.on):{};for(var u in l){var t=a[u],n=l[u];a[u]=t?[].concat(t,n):n}}else;return e}function Vl(e,l,a,u){l=l||{$stable:!a};for(var t=0;t<e.length;t++){var n=e[t];Array.isArray(n)?Vl(n,l,a):n&&(n.proxy&&(n.fn.proxy=!0),l[n.key]=n.fn)}return u&&(l.$key=u),l}function Fl(e,l){for(var a=0;a<l.length;a+=2){var u=l[a];"string"===typeof u&&u&&(e[l[a]]=l[a+1])}return e}function zl(e,l){return"string"===typeof e?l+e:e}function ql(e){e._o=Bl,e._n=d,e._s=p,e._l=El,e._t=Cl,e._q=D,e._i=B,e._m=Dl,e._f=Ml,e._k=Nl,e._b=Tl,e._v=ge,e._e=ye,e._u=Vl,e._g=Ll,e._d=Fl,e._p=zl}function Gl(e,l,u,t,v){var r,b=this,i=v.options;_(t,"_uid")?(r=Object.create(t),r._original=t):(r=t,t=t._original);var o=n(i._compiled),s=!o;this.data=e,this.props=l,this.children=u,this.parent=t,this.listeners=e.on||a,this.injections=Al(i.inject,t),this.slots=function(){return b.$slots||Sl(e.scopedSlots,b.$slots=xl(u,t)),b.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Sl(e.scopedSlots,this.slots())}}),o&&(this.$options=i,this.$slots=this.slots(),this.$scopedSlots=Sl(e.scopedSlots,this.$slots)),i._scopeId?this._c=function(e,l,a,u){var n=ta(r,e,l,a,u,s);return n&&!Array.isArray(n)&&(n.fnScopeId=i._scopeId,n.fnContext=t),n}:this._c=function(e,l,a,u){return ta(r,e,l,a,u,s)}}function Hl(e,l,u,n,v){var r=e.options,b={},i=r.props;if(t(i))for(var o in i)b[o]=He(o,i,l||a);else t(u.attrs)&&Jl(b,u.attrs),t(u.props)&&Jl(b,u.props);var s=new Gl(u,b,v,n,e),c=r.render.call(null,s._c,s);if(c instanceof de)return Wl(c,u,s.parent,r,s);if(Array.isArray(c)){for(var f=ml(c)||[],p=new Array(f.length),d=0;d<f.length;d++)p[d]=Wl(f[d],u,s.parent,r,s);return p}}function Wl(e,l,a,u,t){var n=me(e);return n.fnContext=a,n.fnOptions=u,l.slot&&((n.data||(n.data={})).slot=l.slot),n}function Jl(e,l){for(var a in l)e[k(a)]=l[a]}ql(Gl.prototype);var Kl={init:function(e,l){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var a=e;Kl.prepatch(a,a)}else{var u=e.componentInstance=Zl(e,ka);u.$mount(l?e.elm:void 0,l)}},prepatch:function(e,l){var a=l.componentOptions,u=l.componentInstance=e.componentInstance;Sa(u,a.propsData,a.listeners,l,a.children)},insert:function(e){var l=e.context,a=e.componentInstance;a._isMounted||(a._isMounted=!0,Ca(a,"mounted")),e.data.keepAlive&&(l._isMounted?za(a):Pa(a,!0))},destroy:function(e){var l=e.componentInstance;l._isDestroyed||(e.data.keepAlive?Ea(l,!0):l.$destroy())}},Yl=Object.keys(Kl);function Xl(e,l,a,v,r){if(!u(e)){var i=a.$options._base;if(b(e)&&(e=i.extend(e)),"function"===typeof e){var o;if(u(e.cid)&&(o=e,e=pa(o,i),void 0===e))return fa(o,l,a,v,r);l=l||{},cu(e),t(l.model)&&la(e.options,l);var s=hl(l,e,r);if(n(e.options.functional))return Hl(e,s,l,a,v);var c=l.on;if(l.on=l.nativeOn,n(e.options.abstract)){var f=l.slot;l={},f&&(l.slot=f)}Ql(l);var p=e.options.name||r,d=new de("vue-component-"+e.cid+(p?"-"+p:""),l,void 0,void 0,void 0,a,{Ctor:e,propsData:s,listeners:c,tag:r,children:v},o);return d}}}function Zl(e,l){var a={_isComponent:!0,_parentVnode:e,parent:l},u=e.data.inlineTemplate;return t(u)&&(a.render=u.render,a.staticRenderFns=u.staticRenderFns),new e.componentOptions.Ctor(a)}function Ql(e){for(var l=e.hook||(e.hook={}),a=0;a<Yl.length;a++){var u=Yl[a],t=l[u],n=Kl[u];t===n||t&&t._merged||(l[u]=t?ea(n,t):n)}}function ea(e,l){var a=function(a,u){e(a,u),l(a,u)};return a._merged=!0,a}function la(e,l){var a=e.model&&e.model.prop||"value",u=e.model&&e.model.event||"input";(l.attrs||(l.attrs={}))[a]=l.model.value;var n=l.on||(l.on={}),v=n[u],r=l.model.callback;t(v)?(Array.isArray(v)?-1===v.indexOf(r):v!==r)&&(n[u]=[r].concat(v)):n[u]=r}var aa=1,ua=2;function ta(e,l,a,u,t,v){return(Array.isArray(a)||r(a))&&(t=u,u=a,a=void 0),n(v)&&(t=ua),na(e,l,a,u,t)}function na(e,l,a,u,n){if(t(a)&&t(a.__ob__))return ye();if(t(a)&&t(a.is)&&(l=a.is),!l)return ye();var v,r,b;(Array.isArray(u)&&"function"===typeof u[0]&&(a=a||{},a.scopedSlots={default:u[0]},u.length=0),n===ua?u=ml(u):n===aa&&(u=gl(u)),"string"===typeof l)?(r=e.$vnode&&e.$vnode.ns||V.getTagNamespace(l),v=V.isReservedTag(l)?new de(V.parsePlatformTagName(l),a,u,void 0,void 0,e):a&&a.pre||!t(b=Ge(e.$options,"components",l))?new de(l,a,u,void 0,void 0,e):Xl(b,a,e,u,l)):v=Xl(l,a,e,u);return Array.isArray(v)?v:t(v)?(t(r)&&va(v,r),t(a)&&ra(a),v):ye()}function va(e,l,a){if(e.ns=l,"foreignObject"===e.tag&&(l=void 0,a=!0),t(e.children))for(var v=0,r=e.children.length;v<r;v++){var b=e.children[v];t(b.tag)&&(u(b.ns)||n(a)&&"svg"!==b.tag)&&va(b,l,a)}}function ra(e){b(e.style)&&sl(e.style),b(e.class)&&sl(e.class)}function ba(e){e._vnode=null,e._staticTrees=null;var l=e.$options,u=e.$vnode=l._parentVnode,t=u&&u.context;e.$slots=xl(l._renderChildren,t),e.$scopedSlots=a,e._c=function(l,a,u,t){return ta(e,l,a,u,t,!1)},e.$createElement=function(l,a,u,t){return ta(e,l,a,u,t,!0)};var n=u&&u.data;Ee(e,"$attrs",n&&n.attrs||a,null,!0),Ee(e,"$listeners",l._parentListeners||a,null,!0)}var ia,oa=null;function sa(e){ql(e.prototype),e.prototype.$nextTick=function(e){return il(e,this)},e.prototype._render=function(){var e,l=this,a=l.$options,u=a.render,t=a._parentVnode;t&&(l.$scopedSlots=Sl(t.data.scopedSlots,l.$slots,l.$scopedSlots)),l.$vnode=t;try{oa=l,e=u.call(l._renderProxy,l.$createElement)}catch(lt){Xe(lt,l,"render"),e=l._vnode}finally{oa=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof de||(e=ye()),e.parent=t,e}}function ca(e,l){return(e.__esModule||be&&"Module"===e[Symbol.toStringTag])&&(e=e.default),b(e)?l.extend(e):e}function fa(e,l,a,u,t){var n=ye();return n.asyncFactory=e,n.asyncMeta={data:l,context:a,children:u,tag:t},n}function pa(e,l){if(n(e.error)&&t(e.errorComp))return e.errorComp;if(t(e.resolved))return e.resolved;var a=oa;if(a&&t(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a),n(e.loading)&&t(e.loadingComp))return e.loadingComp;if(a&&!t(e.owners)){var v=e.owners=[a],r=!0,i=null,o=null;a.$on("hook:destroyed",function(){return g(v,a)});var s=function(e){for(var l=0,a=v.length;l<a;l++)v[l].$forceUpdate();e&&(v.length=0,null!==i&&(clearTimeout(i),i=null),null!==o&&(clearTimeout(o),o=null))},c=R(function(a){e.resolved=ca(a,l),r?v.length=0:s(!0)}),p=R(function(l){t(e.errorComp)&&(e.error=!0,s(!0))}),d=e(c,p);return b(d)&&(f(d)?u(e.resolved)&&d.then(c,p):f(d.component)&&(d.component.then(c,p),t(d.error)&&(e.errorComp=ca(d.error,l)),t(d.loading)&&(e.loadingComp=ca(d.loading,l),0===d.delay?e.loading=!0:i=setTimeout(function(){i=null,u(e.resolved)&&u(e.error)&&(e.loading=!0,s(!1))},d.delay||200)),t(d.timeout)&&(o=setTimeout(function(){o=null,u(e.resolved)&&p(null)},d.timeout)))),r=!1,e.loading?e.loadingComp:e.resolved}}function da(e){return e.isComment&&e.asyncFactory}function ha(e){if(Array.isArray(e))for(var l=0;l<e.length;l++){var a=e[l];if(t(a)&&(t(a.componentOptions)||da(a)))return a}}function ya(e){e._events=Object.create(null),e._hasHookEvent=!1;var l=e.$options._parentListeners;l&&wa(e,l)}function ga(e,l){ia.$on(e,l)}function ma(e,l){ia.$off(e,l)}function _a(e,l){var a=ia;return function u(){var t=l.apply(null,arguments);null!==t&&a.$off(e,u)}}function wa(e,l,a){ia=e,dl(l,a||{},ga,ma,_a,e),ia=void 0}function $a(e){var l=/^hook:/;e.prototype.$on=function(e,a){var u=this;if(Array.isArray(e))for(var t=0,n=e.length;t<n;t++)u.$on(e[t],a);else(u._events[e]||(u._events[e]=[])).push(a),l.test(e)&&(u._hasHookEvent=!0);return u},e.prototype.$once=function(e,l){var a=this;function u(){a.$off(e,u),l.apply(a,arguments)}return u.fn=l,a.$on(e,u),a},e.prototype.$off=function(e,l){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(e)){for(var u=0,t=e.length;u<t;u++)a.$off(e[u],l);return a}var n,v=a._events[e];if(!v)return a;if(!l)return a._events[e]=null,a;var r=v.length;while(r--)if(n=v[r],n===l||n.fn===l){v.splice(r,1);break}return a},e.prototype.$emit=function(e){var l=this,a=l._events[e];if(a){a=a.length>1?E(a):a;for(var u=E(arguments,1),t='event handler for "'+e+'"',n=0,v=a.length;n<v;n++)Ze(a[n],l,u,l,t)}return l}}var ka=null;function Aa(e){var l=ka;return ka=e,function(){ka=l}}function xa(e){var l=e.$options,a=l.parent;if(a&&!l.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(e)}e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Oa(e){e.prototype._update=function(e,l){var a=this,u=a.$el,t=a._vnode,n=Aa(a);a._vnode=e,a.$el=t?a.__patch__(t,e):a.__patch__(a.$el,e,l,!1),n(),u&&(u.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Ca(e,"beforeDestroy"),e._isBeingDestroyed=!0;var l=e.$parent;!l||l._isBeingDestroyed||e.$options.abstract||g(l.$children,e),e._watcher&&e._watcher.teardown();var a=e._watchers.length;while(a--)e._watchers[a].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Ca(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Sa(e,l,u,t,n){var v=t.data.scopedSlots,r=e.$scopedSlots,b=!!(v&&!v.$stable||r!==a&&!r.$stable||v&&e.$scopedSlots.$key!==v.$key),i=!!(n||e.$options._renderChildren||b);if(e.$options._parentVnode=t,e.$vnode=t,e._vnode&&(e._vnode.parent=t),e.$options._renderChildren=n,e.$attrs=t.data.attrs||a,e.$listeners=u||a,l&&e.$options.props){xe(!1);for(var o=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var f=s[c],p=e.$options.props;o[f]=He(f,p,l,e)}xe(!0),e.$options.propsData=l}u=u||a;var d=e.$options._parentListeners;e.$options._parentListeners=u,wa(e,u,d),i&&(e.$slots=xl(n,t.context),e.$forceUpdate())}function ja(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Pa(e,l){if(l){if(e._directInactive=!1,ja(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var a=0;a<e.$children.length;a++)Pa(e.$children[a]);Ca(e,"activated")}}function Ea(e,l){if((!l||(e._directInactive=!0,!ja(e)))&&!e._inactive){e._inactive=!0;for(var a=0;a<e.$children.length;a++)Ea(e.$children[a]);Ca(e,"deactivated")}}function Ca(e,l){fe();var a=e.$options[l],u=l+" hook";if(a)for(var t=0,n=a.length;t<n;t++)Ze(a[t],e,null,e,u);e._hasHookEvent&&e.$emit("hook:"+l),pe()}var Ma=[],Ia=[],Na={},Ta=!1,Da=!1,Ba=0;function Ra(){Ba=Ma.length=Ia.length=0,Na={},Ta=Da=!1}var Ua=Date.now;if(K&&!Q){var La=window.performance;La&&"function"===typeof La.now&&Ua()>document.createEvent("Event").timeStamp&&(Ua=function(){return La.now()})}function Va(){var e,l;for(Ua(),Da=!0,Ma.sort(function(e,l){return e.id-l.id}),Ba=0;Ba<Ma.length;Ba++)e=Ma[Ba],e.before&&e.before(),l=e.id,Na[l]=null,e.run();var a=Ia.slice(),u=Ma.slice();Ra(),qa(a),Fa(u),ne&&V.devtools&&ne.emit("flush")}function Fa(e){var l=e.length;while(l--){var a=e[l],u=a.vm;u._watcher===a&&u._isMounted&&!u._isDestroyed&&Ca(u,"updated")}}function za(e){e._inactive=!1,Ia.push(e)}function qa(e){for(var l=0;l<e.length;l++)e[l]._inactive=!0,Pa(e[l],!0)}function Ga(e){var l=e.id;if(null==Na[l]){if(Na[l]=!0,Da){var a=Ma.length-1;while(a>Ba&&Ma[a].id>e.id)a--;Ma.splice(a+1,0,e)}else Ma.push(e);Ta||(Ta=!0,il(Va))}}var Ha=0,Wa=function(e,l,a,u,t){this.vm=e,t&&(e._watcher=this),e._watchers.push(this),u?(this.deep=!!u.deep,this.user=!!u.user,this.lazy=!!u.lazy,this.sync=!!u.sync,this.before=u.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++Ha,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new re,this.newDepIds=new re,this.expression="","function"===typeof l?this.getter=l:(this.getter=H(l),this.getter||(this.getter=I)),this.value=this.lazy?void 0:this.get()};Wa.prototype.get=function(){var e;fe(this);var l=this.vm;try{e=this.getter.call(l,l)}catch(lt){if(!this.user)throw lt;Xe(lt,l,'getter for watcher "'+this.expression+'"')}finally{this.deep&&sl(e),pe(),this.cleanupDeps()}return e},Wa.prototype.addDep=function(e){var l=e.id;this.newDepIds.has(l)||(this.newDepIds.add(l),this.newDeps.push(e),this.depIds.has(l)||e.addSub(this))},Wa.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var l=this.deps[e];this.newDepIds.has(l.id)||l.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},Wa.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ga(this)},Wa.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||b(e)||this.deep){var l=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,l)}catch(lt){Xe(lt,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,l)}}},Wa.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Wa.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Wa.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Ja={enumerable:!0,configurable:!0,get:I,set:I};function Ka(e,l,a){Ja.get=function(){return this[l][a]},Ja.set=function(e){this[l][a]=e},Object.defineProperty(e,a,Ja)}function Ya(e){e._watchers=[];var l=e.$options;l.props&&Xa(e,l.props),l.methods&&nu(e,l.methods),l.data?Za(e):Pe(e._data={},!0),l.computed&&lu(e,l.computed),l.watch&&l.watch!==ae&&vu(e,l.watch)}function Xa(e,l){var a=e.$options.propsData||{},u=e._props={},t=e.$options._propKeys=[],n=!e.$parent;n||xe(!1);var v=function(n){t.push(n);var v=He(n,l,a,e);Ee(u,n,v),n in e||Ka(e,"_props",n)};for(var r in l)v(r);xe(!0)}function Za(e){var l=e.$options.data;l=e._data="function"===typeof l?Qa(l,e):l||{},o(l)||(l={});var a=Object.keys(l),u=e.$options.props,t=(e.$options.methods,a.length);while(t--){var n=a[t];0,u&&_(u,n)||z(n)||Ka(e,"_data",n)}Pe(l,!0)}function Qa(e,l){fe();try{return e.call(l,l)}catch(lt){return Xe(lt,l,"data()"),{}}finally{pe()}}var eu={lazy:!0};function lu(e,l){var a=e._computedWatchers=Object.create(null),u=te();for(var t in l){var n=l[t],v="function"===typeof n?n:n.get;0,u||(a[t]=new Wa(e,v||I,I,eu)),t in e||au(e,t,n)}}function au(e,l,a){var u=!te();"function"===typeof a?(Ja.get=u?uu(l):tu(a),Ja.set=I):(Ja.get=a.get?u&&!1!==a.cache?uu(l):tu(a.get):I,Ja.set=a.set||I),Object.defineProperty(e,l,Ja)}function uu(e){return function(){var l=this._computedWatchers&&this._computedWatchers[e];if(l)return l.dirty&&l.evaluate(),se.target&&l.depend(),l.value}}function tu(e){return function(){return e.call(this,this)}}function nu(e,l){e.$options.props;for(var a in l)e[a]="function"!==typeof l[a]?I:P(l[a],e)}function vu(e,l){for(var a in l){var u=l[a];if(Array.isArray(u))for(var t=0;t<u.length;t++)ru(e,a,u[t]);else ru(e,a,u)}}function ru(e,l,a,u){return o(a)&&(u=a,a=a.handler),"string"===typeof a&&(a=e[a]),e.$watch(l,a,u)}function bu(e){var l={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",l),Object.defineProperty(e.prototype,"$props",a),e.prototype.$set=Ce,e.prototype.$delete=Me,e.prototype.$watch=function(e,l,a){var u=this;if(o(l))return ru(u,e,l,a);a=a||{},a.user=!0;var t=new Wa(u,e,l,a);if(a.immediate)try{l.call(u,t.value)}catch(n){Xe(n,u,'callback for immediate watcher "'+t.expression+'"')}return function(){t.teardown()}}}var iu=0;function ou(e){e.prototype._init=function(e){var l=this;l._uid=iu++,l._isVue=!0,e&&e._isComponent?su(l,e):l.$options=qe(cu(l.constructor),e||{},l),l._renderProxy=l,l._self=l,xa(l),ya(l),ba(l),Ca(l,"beforeCreate"),"mp-toutiao"!==l.mpHost&&kl(l),Ya(l),"mp-toutiao"!==l.mpHost&&$l(l),"mp-toutiao"!==l.mpHost&&Ca(l,"created"),l.$options.el&&l.$mount(l.$options.el)}}function su(e,l){var a=e.$options=Object.create(e.constructor.options),u=l._parentVnode;a.parent=l.parent,a._parentVnode=u;var t=u.componentOptions;a.propsData=t.propsData,a._parentListeners=t.listeners,a._renderChildren=t.children,a._componentTag=t.tag,l.render&&(a.render=l.render,a.staticRenderFns=l.staticRenderFns)}function cu(e){var l=e.options;if(e.super){var a=cu(e.super),u=e.superOptions;if(a!==u){e.superOptions=a;var t=fu(e);t&&C(e.extendOptions,t),l=e.options=qe(a,e.extendOptions),l.name&&(l.components[l.name]=e)}}return l}function fu(e){var l,a=e.options,u=e.sealedOptions;for(var t in a)a[t]!==u[t]&&(l||(l={}),l[t]=a[t]);return l}function pu(e){this._init(e)}function du(e){e.use=function(e){var l=this._installedPlugins||(this._installedPlugins=[]);if(l.indexOf(e)>-1)return this;var a=E(arguments,1);return a.unshift(this),"function"===typeof e.install?e.install.apply(e,a):"function"===typeof e&&e.apply(null,a),l.push(e),this}}function hu(e){e.mixin=function(e){return this.options=qe(this.options,e),this}}function yu(e){e.cid=0;var l=1;e.extend=function(e){e=e||{};var a=this,u=a.cid,t=e._Ctor||(e._Ctor={});if(t[u])return t[u];var n=e.name||a.options.name;var v=function(e){this._init(e)};return v.prototype=Object.create(a.prototype),v.prototype.constructor=v,v.cid=l++,v.options=qe(a.options,e),v["super"]=a,v.options.props&&gu(v),v.options.computed&&mu(v),v.extend=a.extend,v.mixin=a.mixin,v.use=a.use,U.forEach(function(e){v[e]=a[e]}),n&&(v.options.components[n]=v),v.superOptions=a.options,v.extendOptions=e,v.sealedOptions=C({},v.options),t[u]=v,v}}function gu(e){var l=e.options.props;for(var a in l)Ka(e.prototype,"_props",a)}function mu(e){var l=e.options.computed;for(var a in l)au(e.prototype,a,l[a])}function _u(e){U.forEach(function(l){e[l]=function(e,a){return a?("component"===l&&o(a)&&(a.name=a.name||e,a=this.options._base.extend(a)),"directive"===l&&"function"===typeof a&&(a={bind:a,update:a}),this.options[l+"s"][e]=a,a):this.options[l+"s"][e]}})}function wu(e){return e&&(e.Ctor.options.name||e.tag)}function $u(e,l){return Array.isArray(e)?e.indexOf(l)>-1:"string"===typeof e?e.split(",").indexOf(l)>-1:!!s(e)&&e.test(l)}function ku(e,l){var a=e.cache,u=e.keys,t=e._vnode;for(var n in a){var v=a[n];if(v){var r=wu(v.componentOptions);r&&!l(r)&&Au(a,n,u,t)}}}function Au(e,l,a,u){var t=e[l];!t||u&&t.tag===u.tag||t.componentInstance.$destroy(),e[l]=null,g(a,l)}ou(pu),bu(pu),$a(pu),Oa(pu),sa(pu);var xu=[String,RegExp,Array],Ou={name:"keep-alive",abstract:!0,props:{include:xu,exclude:xu,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Au(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(l){ku(e,function(e){return $u(l,e)})}),this.$watch("exclude",function(l){ku(e,function(e){return!$u(l,e)})})},render:function(){var e=this.$slots.default,l=ha(e),a=l&&l.componentOptions;if(a){var u=wu(a),t=this,n=t.include,v=t.exclude;if(n&&(!u||!$u(n,u))||v&&u&&$u(v,u))return l;var r=this,b=r.cache,i=r.keys,o=null==l.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):l.key;b[o]?(l.componentInstance=b[o].componentInstance,g(i,o),i.push(o)):(b[o]=l,i.push(o),this.max&&i.length>parseInt(this.max)&&Au(b,i[0],i,this._vnode)),l.data.keepAlive=!0}return l||e&&e[0]}},Su={KeepAlive:Ou};function ju(e){var l={get:function(){return V}};Object.defineProperty(e,"config",l),e.util={warn:ie,extend:C,mergeOptions:qe,defineReactive:Ee},e.set=Ce,e.delete=Me,e.nextTick=il,e.observable=function(e){return Pe(e),e},e.options=Object.create(null),U.forEach(function(l){e.options[l+"s"]=Object.create(null)}),e.options._base=e,C(e.options.components,Su),du(e),hu(e),yu(e),_u(e)}ju(pu),Object.defineProperty(pu.prototype,"$isServer",{get:te}),Object.defineProperty(pu.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(pu,"FunctionalRenderContext",{value:Gl}),pu.version="2.6.10";var Pu="[object Array]",Eu="[object Object]";function Cu(e,l){var a={};return Mu(e,l),Iu(e,l,"",a),a}function Mu(e,l){if(e!==l){var a=Tu(e),u=Tu(l);if(a==Eu&&u==Eu){if(Object.keys(e).length>=Object.keys(l).length)for(var t in l){var n=e[t];void 0===n?e[t]=null:Mu(n,l[t])}}else a==Pu&&u==Pu&&e.length>=l.length&&l.forEach(function(l,a){Mu(e[a],l)})}}function Iu(e,l,a,u){if(e!==l){var t=Tu(e),n=Tu(l);if(t==Eu)if(n!=Eu||Object.keys(e).length<Object.keys(l).length)Nu(u,a,e);else{var v=function(t){var n=e[t],v=l[t],r=Tu(n),b=Tu(v);if(r!=Pu&&r!=Eu)n!=l[t]&&Nu(u,(""==a?"":a+".")+t,n);else if(r==Pu)b!=Pu?Nu(u,(""==a?"":a+".")+t,n):n.length<v.length?Nu(u,(""==a?"":a+".")+t,n):n.forEach(function(e,l){Iu(e,v[l],(""==a?"":a+".")+t+"["+l+"]",u)});else if(r==Eu)if(b!=Eu||Object.keys(n).length<Object.keys(v).length)Nu(u,(""==a?"":a+".")+t,n);else for(var i in n)Iu(n[i],v[i],(""==a?"":a+".")+t+"."+i,u)};for(var r in e)v(r)}else t==Pu?n!=Pu?Nu(u,a,e):e.length<l.length?Nu(u,a,e):e.forEach(function(e,t){Iu(e,l[t],a+"["+t+"]",u)}):Nu(u,a,e)}}function Nu(e,l,a){e[l]=a}function Tu(e){return Object.prototype.toString.call(e)}function Du(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var l=e.$scope;console.log("["+ +new Date+"]["+(l.is||l.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var a=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var u=0;u<a.length;u++)a[u]()}}function Bu(e){return Ma.find(function(l){return e._watcher===l})}function Ru(e,l){if(!e.__next_tick_pending&&!Bu(e)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:nextVueTick")}return il(l,e)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var u=e.$scope;console.log("["+ +new Date+"]["+(u.is||u.route)+"]["+e._uid+"]:nextMPTick")}var t;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(l)try{l.call(e)}catch(lt){Xe(lt,e,"nextTick")}else t&&t(e)}),!l&&"undefined"!==typeof Promise)return new Promise(function(e){t=e})}function Uu(e){var l=Object.create(null),a=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return a.reduce(function(l,a){return l[a]=e[a],l},l),Object.assign(l,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(l["name"]=e.name,l["value"]=e.value),JSON.parse(JSON.stringify(l))}var Lu=function(e,l){var a=this;if(null!==l&&("page"===this.mpType||"component"===this.mpType)){var u=this.$scope,t=Object.create(null);try{t=Uu(this)}catch(r){console.error(r)}t.__webviewId__=u.data.__webviewId__;var n=Object.create(null);Object.keys(t).forEach(function(e){n[e]=u.data[e]});var v=Cu(t,n);Object.keys(v).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(u.is||u.route)+"]["+this._uid+"]差量更新",JSON.stringify(v)),this.__next_tick_pending=!0,u.setData(v,function(){a.__next_tick_pending=!1,Du(a)})):Du(this)}};function Vu(){}function Fu(e,l,a){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Vu),e.$options.render||(e.$options.render=Vu),"mp-toutiao"!==e.mpHost&&Ca(e,"beforeMount");var u=function(){e._update(e._render(),a)};return new Wa(e,u,I,{before:function(){e._isMounted&&!e._isDestroyed&&Ca(e,"beforeUpdate")}},!0),a=!1,e}function zu(e,l){return t(e)||t(l)?qu(e,Gu(l)):""}function qu(e,l){return e?l?e+" "+l:e:l||""}function Gu(e){return Array.isArray(e)?Hu(e):b(e)?Wu(e):"string"===typeof e?e:""}function Hu(e){for(var l,a="",u=0,n=e.length;u<n;u++)t(l=Gu(e[u]))&&""!==l&&(a&&(a+=" "),a+=l);return a}function Wu(e){var l="";for(var a in e)e[a]&&(l&&(l+=" "),l+=a);return l}var Ju=w(function(e){var l={},a=/;(?![^(]*\))/g,u=/:(.+)/;return e.split(a).forEach(function(e){if(e){var a=e.split(u);a.length>1&&(l[a[0].trim()]=a[1].trim())}}),l});function Ku(e){return Array.isArray(e)?M(e):"string"===typeof e?Ju(e):e}var Yu=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Xu(e,l){var a=l.split("."),u=a[0];return 0===u.indexOf("__$n")&&(u=parseInt(u.replace("__$n",""))),1===a.length?e[u]:Xu(e[u],a.slice(1).join("."))}function Zu(e){e.config.errorHandler=function(e){console.error(e)};var l=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:E(arguments,1)}),l.apply(this,arguments)},e.prototype.$nextTick=function(e){return Ru(this,e)},Yu.forEach(function(l){e.prototype[l]=function(e){if(this.$scope)return this.$scope[l](e)}}),e.prototype.__init_provide=$l,e.prototype.__init_injections=kl,e.prototype.__call_hook=function(e,l){var a=this;fe();var u,t=a.$options[e],n=e+" hook";if(t)for(var v=0,r=t.length;v<r;v++)u=Ze(t[v],a,l?[l]:null,a,n);return a._hasHookEvent&&a.$emit("hook:"+e),pe(),u},e.prototype.__set_model=function(e,l,a,u){Array.isArray(u)&&(-1!==u.indexOf("trim")&&(a=a.trim()),-1!==u.indexOf("number")&&(a=this._n(a))),e||(e=this),e[l]=a},e.prototype.__set_sync=function(e,l,a){e||(e=this),e[l]=a},e.prototype.__get_orig=function(e){return o(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,l){return Xu(l||this,e)},e.prototype.__get_class=function(e,l){return zu(l,e)},e.prototype.__get_style=function(e,l){if(!e&&!l)return"";var a=Ku(e),u=l?C(l,a):a;return Object.keys(u).map(function(e){return O(e)+":"+u[e]}).join(";")},e.prototype.__map=function(e,l){var a,u,t,n,v;if(Array.isArray(e)){for(a=new Array(e.length),u=0,t=e.length;u<t;u++)a[u]=l(e[u],u);return a}if(b(e)){for(n=Object.keys(e),a=Object.create(null),u=0,t=n.length;u<t;u++)v=n[u],a[v]=l(e[v],v,u);return a}return[]}}var Qu=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function et(e){var l=e.extend;e.extend=function(e){e=e||{};var a=e.methods;return a&&Object.keys(a).forEach(function(l){-1!==Qu.indexOf(l)&&(e[l]=a[l],delete a[l])}),l.call(this,e)};var a=e.config.optionMergeStrategies,u=a.created;Qu.forEach(function(e){a[e]=u}),e.prototype.__lifecycle_hooks__=Qu}pu.prototype.__patch__=Lu,pu.prototype.$mount=function(e,l){return Fu(this,e,l)},et(pu),Zu(pu),l["default"]=pu}.call(this,a("c8ba"))},"67be":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("12a0"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"6c63":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("9e24"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"6e42":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.createApp=pl,l.createPage=kl,l.createComponent=Al,l.default=void 0;var u=t(a("66fd"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e,l){return b(e)||r(e,l)||v()}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(e,l){var a=[],u=!0,t=!1,n=void 0;try{for(var v,r=e[Symbol.iterator]();!(u=(v=r.next()).done);u=!0)if(a.push(v.value),l&&a.length===l)break}catch(b){t=!0,n=b}finally{try{u||null==r["return"]||r["return"]()}finally{if(t)throw n}}return a}function b(e){if(Array.isArray(e))return e}function i(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function o(e){return f(e)||c(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function f(e){if(Array.isArray(e)){for(var l=0,a=new Array(e.length);l<e.length;l++)a[l]=e[l];return a}}var p=Object.prototype.toString,d=Object.prototype.hasOwnProperty;function h(e){return"function"===typeof e}function y(e){return"string"===typeof e}function g(e){return"[object Object]"===p.call(e)}function m(e,l){return d.call(e,l)}function _(){}function w(e){var l=Object.create(null);return function(a){var u=l[a];return u||(l[a]=e(a))}}var $=/-(\w)/g,k=w(function(e){return e.replace($,function(e,l){return l?l.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],x={},O={};function S(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?j(a):a}function j(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function P(e,l){var a=e.indexOf(l);-1!==a&&e.splice(a,1)}function E(e,l){Object.keys(l).forEach(function(a){-1!==A.indexOf(a)&&h(l[a])&&(e[a]=S(e[a],l[a]))})}function C(e,l){e&&l&&Object.keys(l).forEach(function(a){-1!==A.indexOf(a)&&h(l[a])&&P(e[a],l[a])})}function M(e,l){"string"===typeof e&&g(l)?E(O[e]||(O[e]={}),l):g(e)&&E(x,e)}function I(e,l){"string"===typeof e?g(l)?C(O[e],l):delete O[e]:g(e)&&C(x,e)}function N(e){return function(l){return e(l)||l}}function T(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function D(e,l){for(var a=!1,u=0;u<e.length;u++){var t=e[u];if(a)a=Promise.then(N(t));else{var n=t(l);if(T(n)&&(a=Promise.resolve(n)),!1===n)return{then:function(){}}}}return a||{then:function(e){return e(l)}}}function B(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(e[a])){var u=l[a];l[a]=function(l){D(e[a],l).then(function(e){return h(u)&&u(e)||e})}}}),l}function R(e,l){var a=[];Array.isArray(x.returnValue)&&a.push.apply(a,o(x.returnValue));var u=O[e];return u&&Array.isArray(u.returnValue)&&a.push.apply(a,o(u.returnValue)),a.forEach(function(e){l=e(l)||l}),l}function U(e){var l=Object.create(null);Object.keys(x).forEach(function(e){"returnValue"!==e&&(l[e]=x[e].slice())});var a=O[e];return a&&Object.keys(a).forEach(function(e){"returnValue"!==e&&(l[e]=(l[e]||[]).concat(a[e]))}),l}function L(e,l,a){for(var u=arguments.length,t=new Array(u>3?u-3:0),n=3;n<u;n++)t[n-3]=arguments[n];var v=U(e);if(v&&Object.keys(v).length){if(Array.isArray(v.invoke)){var r=D(v.invoke,a);return r.then(function(e){return l.apply(void 0,[B(v,e)].concat(t))})}return l.apply(void 0,[B(v,a)].concat(t))}return l.apply(void 0,[a].concat(t))}var V={returnValue:function(e){return T(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},F=/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,z=/^create|Manager$/,q=/^on/;function G(e){return z.test(e)}function H(e){return F.test(e)}function W(e){return q.test(e)}function J(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function K(e){return!(G(e)||H(e)||W(e))}function Y(e,l){return K(e)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length,t=new Array(u>1?u-1:0),n=1;n<u;n++)t[n-1]=arguments[n];return h(a.success)||h(a.fail)||h(a.complete)?R(e,L.apply(void 0,[e,l,a].concat(t))):R(e,J(new Promise(function(u,n){L.apply(void 0,[e,l,Object.assign({},a,{success:u,fail:n})].concat(t)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var l=this.constructor;return this.then(function(a){return l.resolve(e()).then(function(){return a})},function(a){return l.resolve(e()).then(function(){throw a})})})})))}:l}var X=1e-4,Z=750,Q=!1,ee=0,le=0;function ae(){var e=wx.getSystemInfoSync(),l=e.platform,a=e.pixelRatio,u=e.windowWidth;ee=u,le=a,Q="ios"===l}function ue(e,l){if(0===ee&&ae(),e=Number(e),0===e)return 0;var a=e/Z*(l||ee);return a<0&&(a=-a),a=Math.floor(a+X),0===a?1!==le&&Q?.5:1:e<0?-a:a}var te={promiseInterceptor:V},ne=Object.freeze({upx2px:ue,interceptors:te,addInterceptor:M,removeInterceptor:I}),ve={},re=[],be=[],ie=["success","fail","cancel","complete"];function oe(e,l,a){return function(u){return l(ce(e,u,a))}}function se(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},t=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(l)){var n=!0===t?l:{};for(var v in h(a)&&(a=a(l,n)||{}),l)if(m(a,v)){var r=a[v];h(r)&&(r=r(l[v],l,n)),r?y(r)?n[r]=l[v]:g(r)&&(n[r.name?r.name:v]=r.value):console.warn("app-plus ".concat(e,"暂不支持").concat(v))}else-1!==ie.indexOf(v)?n[v]=oe(e,l[v],u):t||(n[v]=l[v]);return n}return h(l)&&(l=oe(e,l,u)),l}function ce(e,l,a){var u=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return h(ve.returnValue)&&(l=ve.returnValue(e,l)),se(e,l,a,{},u)}function fe(e,l){if(m(ve,e)){var a=ve[e];return a?function(l,u){var t=a;h(a)&&(t=a(l)),l=se(e,l,t.args,t.returnValue);var n=[l];"undefined"!==typeof u&&n.push(u);var v=wx[t.name||e].apply(wx,n);return H(e)?ce(e,v,t.returnValue,G(e)):v}:function(){console.error("app-plus 暂不支持".concat(e))}}return l}var pe=Object.create(null),de=["subscribePush","unsubscribePush","onPush","offPush","share"];function he(e){return function(l){var a=l.fail,u=l.complete,t={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};h(a)&&a(t),h(u)&&u(t)}}de.forEach(function(e){pe[e]=he(e)});var ye=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new u.default),e};var e}();function ge(e,l,a){return e[l].apply(e,a)}function me(){return ge(ye(),"$on",Array.prototype.slice.call(arguments))}function _e(){return ge(ye(),"$off",Array.prototype.slice.call(arguments))}function we(){return ge(ye(),"$once",Array.prototype.slice.call(arguments))}function $e(){return ge(ye(),"$emit",Array.prototype.slice.call(arguments))}var ke=Object.freeze({$on:me,$off:_e,$once:we,$emit:$e});function Ae(e){e.$processed=!0,e.postMessage=function(l){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:l},e.id)};var l=[];if(e.onMessage=function(e){l.push(e)},e.$consumeMessage=function(e){l.forEach(function(l){return l(e)})},e.__uniapp_mask_id){var a=e.__uniapp_mask,u=plus.webview.getWebviewById(e.__uniapp_mask_id);u=u.parent()||u;var t=e.show,n=e.hide,v=e.close,r=function(){u.setStyle({mask:a})},b=function(){u.setStyle({mask:"none"})};e.show=function(){r();for(var l=arguments.length,a=new Array(l),u=0;u<l;u++)a[u]=arguments[u];return t.apply(e,a)},e.hide=function(){b();for(var l=arguments.length,a=new Array(l),u=0;u<l;u++)a[u]=arguments[u];return n.apply(e,a)},e.close=function(){b(),l=[];for(var a=arguments.length,u=new Array(a),t=0;t<a;t++)u[t]=arguments[t];return v.apply(e,u)}}}function xe(e){var l=plus.webview.getWebviewById(e);return l&&!l.$processed&&Ae(l),l}function Oe(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}var Se=Object.freeze({requireNativePlugin:Oe,getSubNVueById:xe}),je=Page,Pe=Component,Ee=/:/g,Ce=w(function(e){return k(e.replace(Ee,"-"))});function Me(e){if(wx.canIUse("nextTick")){var l=e.triggerEvent;e.triggerEvent=function(a){for(var u=arguments.length,t=new Array(u>1?u-1:0),n=1;n<u;n++)t[n-1]=arguments[n];return l.apply(e,[Ce(a)].concat(t))}}}function Ie(e,l){var a=l[e];l[e]=a?function(){Me(this);for(var e=arguments.length,l=new Array(e),u=0;u<e;u++)l[u]=arguments[u];return a.apply(this,l)}:function(){Me(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ie("onLoad",e),je(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ie("created",e),Pe(e)};var Ne=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Te(e,l){var a=e.$mp[e.mpType];l.forEach(function(l){m(a,l)&&(e[l]=a[l])})}function De(e,l){if(!l)return!0;if(u.default.options&&Array.isArray(u.default.options[e]))return!0;if(l=l.default||l,h(l))return!!h(l.extendOptions[e])||!!(l.super&&l.super.options&&Array.isArray(l.super.options[e]));if(h(l[e]))return!0;var a=l.mixins;return Array.isArray(a)?!!a.find(function(l){return De(e,l)}):void 0}function Be(e,l,a){l.forEach(function(l){De(l,a)&&(e[l]=function(e){return this.$vm&&this.$vm.__call_hook(l,e)})})}function Re(e,l){var a;return l=l.default||l,h(l)?(a=l,l=a.extendOptions):a=e.extend(l),[a,l]}function Ue(e,l){if(Array.isArray(l)&&l.length){var a=Object.create(null);l.forEach(function(e){a[e]=!0}),e.$scopedSlots=e.$slots=a}}function Le(e,l){e=(e||"").split(",");var a=e.length;1===a?l._$vueId=e[0]:2===a&&(l._$vueId=e[0],l._$vuePid=e[1])}function Ve(e,l){var a=e.data||{},u=e.methods||{};if("function"===typeof a)try{a=a.call(l)}catch(t){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(t){}return g(a)||(a={}),Object.keys(u).forEach(function(e){-1!==l.__lifecycle_hooks__.indexOf(e)||m(a,e)||(a[e]=u[e])}),a}var Fe=[String,Number,Boolean,Object,Array,null];function ze(e){return function(l,a){this.$vm&&(this.$vm[e]=l)}}function qe(e,l){var a=e["behaviors"],u=e["extends"],t=e["mixins"],n=e["props"];n||(e["props"]=n=[]);var v=[];return Array.isArray(a)&&a.forEach(function(e){v.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(n)?(n.push("name"),n.push("value")):(n["name"]={type:String,default:""},n["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(u)&&u.props&&v.push(l({properties:He(u.props,!0)})),Array.isArray(t)&&t.forEach(function(e){g(e)&&e.props&&v.push(l({properties:He(e.props,!0)}))}),v}function Ge(e,l,a,u){return Array.isArray(l)&&1===l.length?l[0]:l}function He(e){var l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",u={};return l||(u.vueId={type:String,value:""},u.vueSlots={type:null,value:[],observer:function(e,l){var a=Object.create(null);e.forEach(function(e){a[e]=!0}),this.setData({$slots:a})}}),Array.isArray(e)?e.forEach(function(e){u[e]={type:null,observer:ze(e)}}):g(e)&&Object.keys(e).forEach(function(l){var t=e[l];if(g(t)){var n=t["default"];h(n)&&(n=n()),t.type=Ge(l,t.type,n,a),u[l]={type:-1!==Fe.indexOf(t.type)?t.type:null,value:n,observer:ze(l)}}else{var v=Ge(l,t,null,a);u[l]={type:-1!==Fe.indexOf(v)?v:null,observer:ze(l)}}}),u}function We(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(l){}return e.stopPropagation=_,e.preventDefault=_,e.target=e.target||{},m(e,"detail")||(e.detail={}),g(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function Je(e,l){var a=e;return l.forEach(function(l){var u=l[0],t=l[2];if(u||"undefined"!==typeof t){var n=l[1],v=l[3],r=u?e.__get_value(u,a):a;Number.isInteger(r)?a=t:n?Array.isArray(r)?a=r.find(function(l){return e.__get_value(n,l)===t}):g(r)?a=Object.keys(r).find(function(l){return e.__get_value(n,r[l])===t}):console.error("v-for 暂不支持循环数据：",r):a=r[t],v&&(a=e.__get_value(v,a))}}),a}function Ke(e,l,a){var u={};return Array.isArray(l)&&l.length&&l.forEach(function(l,t){"string"===typeof l?l?"$event"===l?u["$"+t]=a:0===l.indexOf("$event.")?u["$"+t]=e.__get_value(l.replace("$event.",""),a):u["$"+t]=e.__get_value(l):u["$"+t]=e:u["$"+t]=Je(e,l)}),u}function Ye(e){for(var l={},a=1;a<e.length;a++){var u=e[a];l[u[0]]=u[1]}return l}function Xe(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],t=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,v=!1;if(t&&(v=l.currentTarget&&l.currentTarget.dataset&&"wx"===l.currentTarget.dataset.comType,!a.length))return v?[l]:l.detail.__args__||l.detail;var r=Ke(e,u,l),b=[];return a.forEach(function(e){"$event"===e?"__set_model"!==n||t?t&&!v?b.push(l.detail.__args__[0]):b.push(l):b.push(l.target.value):Array.isArray(e)&&"o"===e[0]?b.push(Ye(e)):"string"===typeof e&&m(r,e)?b.push(r[e]):b.push(e)}),b}var Ze="~",Qe="^";function el(e,l){return e===l||"regionchange"===l&&("begin"===e||"end"===e)}function ll(e){var l=this;e=We(e);var a=(e.currentTarget||e.target).dataset;if(!a)return console.warn("事件信息不存在");var u=a.eventOpts||a["event-opts"];if(!u)return console.warn("事件信息不存在");var t=e.type;u.forEach(function(a){var u=a[0],n=a[1],v=u.charAt(0)===Qe;u=v?u.slice(1):u;var r=u.charAt(0)===Ze;u=r?u.slice(1):u,n&&el(t,u)&&n.forEach(function(a){var u=a[0];if(u){var t=l.$vm;t.$options.generic&&t.$parent&&t.$parent.$parent&&(t=t.$parent.$parent);var n=t[u];if(!h(n))throw new Error(" _vm.".concat(u," is not a function"));if(r){if(n.once)return;n.once=!0}n.apply(t,Xe(l.$vm,e,a[1],a[2],v,u))}})})}var al=["onShow","onHide","onError","onPageNotFound"];function ul(e,l){var a=l.mocks,t=l.initRefs;u.default.prototype.mpHost="app-plus",u.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=i({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(t(this),Te(this,a)))}});var n={onLaunch:function(l){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",l),this.$vm.__call_hook("onLaunch",l))}};return n.globalData=e.$options.globalData||{},Be(n,al),n}var tl=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function nl(e,l){var a=e.$children,u=a.find(function(e){return e.$scope._$vueId===l});if(u)return u;for(var t=a.length-1;t>=0;t--)if(u=nl(a[t],l),u)return u}function vl(e){return Behavior(e)}function rl(){return!!this.route}function bl(e){this.triggerEvent("__l",e)}function il(e){var l=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},a=l.selectAllComponents(".vue-ref");a.forEach(function(l){var a=l.dataset.ref;e[a]=l.$vm||l});var u=l.selectAllComponents(".vue-ref-in-for");return u.forEach(function(l){var a=l.dataset.ref;e[a]||(e[a]=[]),e[a].push(l.$vm||l)}),e}})}function ol(e){var l,a=e.detail||e.value,u=a.vuePid,t=a.vueOptions;u&&(l=nl(this.$vm,u)),l||(l=this.$vm),t.parent=l}function sl(e){return ul(e,{mocks:tl,initRefs:il})}var cl=["onUniNViewMessage"];function fl(e){var l=sl(e);return Be(l,cl),l}function pl(e){return App(fl(e)),e}function dl(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=l.isPage,t=l.initRelation,v=Re(u.default,e),r=n(v,2),b=r[0],i=r[1],o={options:{multipleSlots:!0,addGlobalClass:!0},data:Ve(i,u.default.prototype),behaviors:qe(i,vl),properties:He(i.props,!1,i.__file),lifetimes:{attached:function(){var e=this.properties,l={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:e};Le(e.vueId,this),t.call(this,{vuePid:this._$vuePid,vueOptions:l}),this.$vm=new b(l),Ue(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:ol,__e:ll}};return a?o:[o,b]}function hl(e){return dl(e,{isPage:rl,initRelation:bl})}function yl(e){var l=hl(e);return l.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},l}var gl=["onShow","onHide","onUnload"];function ml(e,l){var a=l.isPage,u=l.initRelation,t=yl(e,{isPage:a,initRelation:u});return Be(t.methods,gl,e),t.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},t}function _l(e){return ml(e,{isPage:rl,initRelation:bl})}gl.push.apply(gl,Ne);var wl=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function $l(e){var l=_l(e);return Be(l.methods,wl),l}function kl(e){return Component($l(e))}function Al(e){return Component(yl(e))}re.forEach(function(e){ve[e]=!1}),be.forEach(function(e){var l=ve[e]&&ve[e].name?ve[e].name:e;wx.canIUse(l)||(ve[e]=!1)});var xl={};Object.keys(ne).forEach(function(e){xl[e]=ne[e]}),Object.keys(ke).forEach(function(e){xl[e]=ke[e]}),Object.keys(Se).forEach(function(e){xl[e]=Y(e,Se[e])}),Object.keys(wx).forEach(function(e){(m(wx,e)||m(ve,e))&&(xl[e]=Y(e,fe(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=xl,e.UniEmitter=ke),wx.createApp=pl,wx.createPage=kl,wx.createComponent=Al;var Ol=xl,Sl=Ol;l.default=Sl}).call(this,a("c8ba"))},7083:function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("17f7"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},7285:function(e){e.exports={zh:{mytoolbarList:[{url:"../../integral/integral",text:"积分管理",img:"/static/img/user/choujiang.png"},{url:"../../user/coupon/coupon",text:"账号管理",img:"/static/img/user/quan.png"},{url:"",text:"我的竞标",img:"/static/img/user/renw.png"},{url:"",text:"我的需求",img:"/static/img/user/momey.png"},{url:"../../user/address/address",text:"我的产品",img:"/static/img/user/addr.png"},{url:"",text:"我的出售",img:"/static/img/user/security.png"},{url:"../../shop/check/check",text:"商铺管理",img:"/static/img/user/bank.png"},{url:"../../user/keep/keep",text:"收藏",img:"/static/img/user/point.png"}],toolbar:"我的工具栏",amount:{integral:"积分",brokerage:"佣金",remainingSum:"余额",Recharge:"充值"}},en:{mytoolbarList:[{url:"../../integral/integral",text:"PointManagement",img:"/static/img/user/choujiang.png"},{url:"../../user/coupon/coupon",text:"AccountManagement",img:"/static/img/user/quan.png"},{url:"",text:"I Bid",img:"/static/img/user/renw.png"},{url:"",text:"MyNeed",img:"/static/img/user/momey.png"},{url:"../../user/address/address",text:"MyProduct",img:"/static/img/user/addr.png"},{url:"",text:"I Sell",img:"/static/img/user/security.png"},{url:"../../shop/check/check",text:"ShopManagement",img:"/static/img/user/bank.png"},{url:"../../user/keep/keep",text:"Enshrine",img:"/static/img/user/point.png"}],toolbar:"Toolbar",amount:{integral:"Integral",brokerage:"Brokerage",remainingSum:"RemainingSum",Recharge:"Recharge"}}}},"7f94":function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */!function(){function t(e){if(e)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=l;else if(a){var u=new ArrayBuffer(68);this.buffer8=new Uint8Array(u),this.blocks=new Uint32Array(u)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="input is invalid type",e="object"==typeof window,i=e?window:{};i.JS_MD5_NO_WINDOW&&(e=!1);var s=!e&&"object"==typeof self,h=!i.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;h?i=global:s&&(i=self);var f=!i.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,o=__webpack_require__("3c35"),a=!i.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,n="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],y=[0,8,16,24],c=["hex","array","digest","buffer","arrayBuffer","base64"],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],l;if(a){var A=new ArrayBuffer(68);l=new Uint8Array(A),d=new Uint32Array(A)}!i.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!a||!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var b=function(e){return function(l){return new t(!0).update(l)[e]()}},v=function(){var e=b("hex");h&&(e=w(e)),e.create=function(){return new t},e.update=function(l){return e.create().update(l)};for(var l=0;l<c.length;++l){var a=c[l];e[a]=b(a)}return e},w=function w(t){var e=eval("require('crypto')"),i=eval("require('buffer').Buffer"),s=function(l){if("string"==typeof l)return e.createHash("md5").update(l,"utf8").digest("hex");if(null===l||void 0===l)throw r;return l.constructor===ArrayBuffer&&(l=new Uint8Array(l)),Array.isArray(l)||ArrayBuffer.isView(l)||l.constructor===i?e.createHash("md5").update(new i(l)).digest("hex"):t(l)};return s};t.prototype.update=function(e){if(!this.finalized){var l,u=typeof e;if("string"!==u){if("object"!==u)throw r;if(null===e)throw r;if(a&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||a&&ArrayBuffer.isView(e)))throw r;l=!0}for(var t,n,v=0,b=e.length,i=this.blocks,o=this.buffer8;v<b;){if(this.hashed&&(this.hashed=!1,i[0]=i[16],i[16]=i[1]=i[2]=i[3]=i[4]=i[5]=i[6]=i[7]=i[8]=i[9]=i[10]=i[11]=i[12]=i[13]=i[14]=i[15]=0),l)if(a)for(n=this.start;v<b&&n<64;++v)o[n++]=e[v];else for(n=this.start;v<b&&n<64;++v)i[n>>2]|=e[v]<<y[3&n++];else if(a)for(n=this.start;v<b&&n<64;++v)(t=e.charCodeAt(v))<128?o[n++]=t:t<2048?(o[n++]=192|t>>6,o[n++]=128|63&t):t<55296||t>=57344?(o[n++]=224|t>>12,o[n++]=128|t>>6&63,o[n++]=128|63&t):(t=65536+((1023&t)<<10|1023&e.charCodeAt(++v)),o[n++]=240|t>>18,o[n++]=128|t>>12&63,o[n++]=128|t>>6&63,o[n++]=128|63&t);else for(n=this.start;v<b&&n<64;++v)(t=e.charCodeAt(v))<128?i[n>>2]|=t<<y[3&n++]:t<2048?(i[n>>2]|=(192|t>>6)<<y[3&n++],i[n>>2]|=(128|63&t)<<y[3&n++]):t<55296||t>=57344?(i[n>>2]|=(224|t>>12)<<y[3&n++],i[n>>2]|=(128|t>>6&63)<<y[3&n++],i[n>>2]|=(128|63&t)<<y[3&n++]):(t=65536+((1023&t)<<10|1023&e.charCodeAt(++v)),i[n>>2]|=(240|t>>18)<<y[3&n++],i[n>>2]|=(128|t>>12&63)<<y[3&n++],i[n>>2]|=(128|t>>6&63)<<y[3&n++],i[n>>2]|=(128|63&t)<<y[3&n++]);this.lastByteIndex=n,this.bytes+=n-this.start,n>=64?(this.start=n-64,this.hash(),this.hashed=!0):this.start=n}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,l=this.lastByteIndex;e[l>>2]|=u[3&l],l>=56&&(this.hashed||this.hash(),e[0]=e[16],e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.bytes<<3,e[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var e,l,a,u,t,n,v=this.blocks;this.first?l=((l=((e=((e=v[0]-680876937)<<7|e>>>25)-271733879<<0)^(a=((a=(-271733879^(u=((u=(-1732584194^2004318071&e)+v[1]-117830708)<<12|u>>>20)+e<<0)&(-271733879^e))+v[2]-1126478375)<<17|a>>>15)+u<<0)&(u^e))+v[3]-1316259209)<<22|l>>>10)+a<<0:(e=this.h0,l=this.h1,a=this.h2,l=((l+=((e=((e+=((u=this.h3)^l&(a^u))+v[0]-680876936)<<7|e>>>25)+l<<0)^(a=((a+=(l^(u=((u+=(a^e&(l^a))+v[1]-389564586)<<12|u>>>20)+e<<0)&(e^l))+v[2]+606105819)<<17|a>>>15)+u<<0)&(u^e))+v[3]-1044525330)<<22|l>>>10)+a<<0),l=((l+=((e=((e+=(u^l&(a^u))+v[4]-176418897)<<7|e>>>25)+l<<0)^(a=((a+=(l^(u=((u+=(a^e&(l^a))+v[5]+1200080426)<<12|u>>>20)+e<<0)&(e^l))+v[6]-1473231341)<<17|a>>>15)+u<<0)&(u^e))+v[7]-45705983)<<22|l>>>10)+a<<0,l=((l+=((e=((e+=(u^l&(a^u))+v[8]+1770035416)<<7|e>>>25)+l<<0)^(a=((a+=(l^(u=((u+=(a^e&(l^a))+v[9]-1958414417)<<12|u>>>20)+e<<0)&(e^l))+v[10]-42063)<<17|a>>>15)+u<<0)&(u^e))+v[11]-1990404162)<<22|l>>>10)+a<<0,l=((l+=((e=((e+=(u^l&(a^u))+v[12]+1804603682)<<7|e>>>25)+l<<0)^(a=((a+=(l^(u=((u+=(a^e&(l^a))+v[13]-40341101)<<12|u>>>20)+e<<0)&(e^l))+v[14]-1502002290)<<17|a>>>15)+u<<0)&(u^e))+v[15]+1236535329)<<22|l>>>10)+a<<0,l=((l+=((u=((u+=(l^a&((e=((e+=(a^u&(l^a))+v[1]-165796510)<<5|e>>>27)+l<<0)^l))+v[6]-1069501632)<<9|u>>>23)+e<<0)^e&((a=((a+=(e^l&(u^e))+v[11]+643717713)<<14|a>>>18)+u<<0)^u))+v[0]-373897302)<<20|l>>>12)+a<<0,l=((l+=((u=((u+=(l^a&((e=((e+=(a^u&(l^a))+v[5]-701558691)<<5|e>>>27)+l<<0)^l))+v[10]+38016083)<<9|u>>>23)+e<<0)^e&((a=((a+=(e^l&(u^e))+v[15]-660478335)<<14|a>>>18)+u<<0)^u))+v[4]-405537848)<<20|l>>>12)+a<<0,l=((l+=((u=((u+=(l^a&((e=((e+=(a^u&(l^a))+v[9]+568446438)<<5|e>>>27)+l<<0)^l))+v[14]-1019803690)<<9|u>>>23)+e<<0)^e&((a=((a+=(e^l&(u^e))+v[3]-187363961)<<14|a>>>18)+u<<0)^u))+v[8]+1163531501)<<20|l>>>12)+a<<0,l=((l+=((u=((u+=(l^a&((e=((e+=(a^u&(l^a))+v[13]-1444681467)<<5|e>>>27)+l<<0)^l))+v[2]-51403784)<<9|u>>>23)+e<<0)^e&((a=((a+=(e^l&(u^e))+v[7]+1735328473)<<14|a>>>18)+u<<0)^u))+v[12]-1926607734)<<20|l>>>12)+a<<0,l=((l+=((n=(u=((u+=((t=l^a)^(e=((e+=(t^u)+v[5]-378558)<<4|e>>>28)+l<<0))+v[8]-2022574463)<<11|u>>>21)+e<<0)^e)^(a=((a+=(n^l)+v[11]+1839030562)<<16|a>>>16)+u<<0))+v[14]-35309556)<<23|l>>>9)+a<<0,l=((l+=((n=(u=((u+=((t=l^a)^(e=((e+=(t^u)+v[1]-1530992060)<<4|e>>>28)+l<<0))+v[4]+1272893353)<<11|u>>>21)+e<<0)^e)^(a=((a+=(n^l)+v[7]-155497632)<<16|a>>>16)+u<<0))+v[10]-1094730640)<<23|l>>>9)+a<<0,l=((l+=((n=(u=((u+=((t=l^a)^(e=((e+=(t^u)+v[13]+681279174)<<4|e>>>28)+l<<0))+v[0]-358537222)<<11|u>>>21)+e<<0)^e)^(a=((a+=(n^l)+v[3]-722521979)<<16|a>>>16)+u<<0))+v[6]+76029189)<<23|l>>>9)+a<<0,l=((l+=((n=(u=((u+=((t=l^a)^(e=((e+=(t^u)+v[9]-640364487)<<4|e>>>28)+l<<0))+v[12]-421815835)<<11|u>>>21)+e<<0)^e)^(a=((a+=(n^l)+v[15]+530742520)<<16|a>>>16)+u<<0))+v[2]-995338651)<<23|l>>>9)+a<<0,l=((l+=((u=((u+=(l^((e=((e+=(a^(l|~u))+v[0]-198630844)<<6|e>>>26)+l<<0)|~a))+v[7]+1126891415)<<10|u>>>22)+e<<0)^((a=((a+=(e^(u|~l))+v[14]-1416354905)<<15|a>>>17)+u<<0)|~e))+v[5]-57434055)<<21|l>>>11)+a<<0,l=((l+=((u=((u+=(l^((e=((e+=(a^(l|~u))+v[12]+1700485571)<<6|e>>>26)+l<<0)|~a))+v[3]-1894986606)<<10|u>>>22)+e<<0)^((a=((a+=(e^(u|~l))+v[10]-1051523)<<15|a>>>17)+u<<0)|~e))+v[1]-2054922799)<<21|l>>>11)+a<<0,l=((l+=((u=((u+=(l^((e=((e+=(a^(l|~u))+v[8]+1873313359)<<6|e>>>26)+l<<0)|~a))+v[15]-30611744)<<10|u>>>22)+e<<0)^((a=((a+=(e^(u|~l))+v[6]-1560198380)<<15|a>>>17)+u<<0)|~e))+v[13]+1309151649)<<21|l>>>11)+a<<0,l=((l+=((u=((u+=(l^((e=((e+=(a^(l|~u))+v[4]-145523070)<<6|e>>>26)+l<<0)|~a))+v[11]-1120210379)<<10|u>>>22)+e<<0)^((a=((a+=(e^(u|~l))+v[2]+718787259)<<15|a>>>17)+u<<0)|~e))+v[9]-343485551)<<21|l>>>11)+a<<0,this.first?(this.h0=e+1732584193<<0,this.h1=l-271733879<<0,this.h2=a-1732584194<<0,this.h3=u+271733878<<0,this.first=!1):(this.h0=this.h0+e<<0,this.h1=this.h1+l<<0,this.h2=this.h2+a<<0,this.h3=this.h3+u<<0)},t.prototype.hex=function(){this.finalize();var e=this.h0,l=this.h1,a=this.h2,u=this.h3;return n[e>>4&15]+n[15&e]+n[e>>12&15]+n[e>>8&15]+n[e>>20&15]+n[e>>16&15]+n[e>>28&15]+n[e>>24&15]+n[l>>4&15]+n[15&l]+n[l>>12&15]+n[l>>8&15]+n[l>>20&15]+n[l>>16&15]+n[l>>28&15]+n[l>>24&15]+n[a>>4&15]+n[15&a]+n[a>>12&15]+n[a>>8&15]+n[a>>20&15]+n[a>>16&15]+n[a>>28&15]+n[a>>24&15]+n[u>>4&15]+n[15&u]+n[u>>12&15]+n[u>>8&15]+n[u>>20&15]+n[u>>16&15]+n[u>>28&15]+n[u>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var e=this.h0,l=this.h1,a=this.h2,u=this.h3;return[255&e,e>>8&255,e>>16&255,e>>24&255,255&l,l>>8&255,l>>16&255,l>>24&255,255&a,a>>8&255,a>>16&255,a>>24&255,255&u,u>>8&255,u>>16&255,u>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(16),l=new Uint32Array(e);return l[0]=this.h0,l[1]=this.h1,l[2]=this.h2,l[3]=this.h3,e},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var e,l,a,u="",t=this.array(),n=0;n<15;)e=t[n++],l=t[n++],a=t[n++],u+=p[e>>>2]+p[63&(e<<4|l>>>4)]+p[63&(l<<2|a>>>6)]+p[63&a];return e=t[n],u+(p[e>>>2]+p[e<<4&63]+"==")};var _=v();f?module.exports=_:(i.md5=_,o&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return _}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},"836e":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("d74b"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"907b":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("891c"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"965c":function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("4745"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},9793:function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("dc74"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},9977:function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("44be"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},a420:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],t=u;l.default=t},afb0:function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("d449"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},c3c5:function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("b6ff"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},c8ba:function(e,l){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(u){"object"===typeof window&&(a=window)}e.exports=a},c91c:function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=n(a("66fd")),t=n(a("2f62"));function n(e){return e&&e.__esModule?e:{default:e}}function v(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},u=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),u.forEach(function(l){r(e,l,a[l])})}return e}function r(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}u.default.use(t.default);var b={userName:"",hasLogin:!1,hasSkip:!1,language:!1},i=e.getStorageSync("userInfo");i.hasLogin&&(b=i),i.hasSkip&&(b.hasSkip=!0);var o=e.getStorageSync("lang");o&&(b.language=!0);var s=new t.default.Store({state:v({},b),mutations:{login:function(l,a){l.userName=a.username,l.hasLogin=!0,l.mail=a.mail,l.phoneNumber=a.phoneNumber,l.face=a.face,e.setStorageSync("userInfo",v({},l))},logout:function(l){l.userName="",l.hasLogin=!1,e.clearStorageSync()},changeLogo:function(l,a){l.userImg=a,e.setStorageSync("userInfo",v({},l))},skipIndex:function(l){l.hasSkip=!0,e.setStorageSync("userInfo",v({},l))},langIndex:function(l){l.language=!0,e.setStorageSync("userInfo",v({},l))}}}),c=s;l.default=c}).call(this,a("6e42")["default"])},ce05:function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("0301"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},cf15:function(e){e.exports={zh:{title:"个性签名",placeholder:"请输入个性签名",btn:"保存"},en:{title:"Personalized Signature",placeholder:"Please enter your personal signature",btn:"Save"}}},d23a:function(e){e.exports={zh:{title:"账号安全",NickName:"昵称",ChangePassword:"修改密码",ModifyEmail:"ModifyEmail"},en:{title:"Nick Name",NickName:"NickName",ChangePassword:"ChangePassword",ModifyEmail:"ModifyEmail"}}},d734:function(e){e.exports={zh:{home:"首页",category:"分类",issue:"发布",cart:"消息",user:"我的"},en:{home:"Home",category:"Category",issue:"Publish",cart:"Message",user:"Me"}}},ddcc:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],t=u;l.default=t},df7c:function(e,l,a){(function(e){function a(e,l){for(var a=0,u=e.length-1;u>=0;u--){var t=e[u];"."===t?e.splice(u,1):".."===t?(e.splice(u,1),a++):a&&(e.splice(u,1),a--)}if(l)for(;a--;a)e.unshift("..");return e}var u=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,t=function(e){return u.exec(e).slice(1)};function n(e,l){if(e.filter)return e.filter(l);for(var a=[],u=0;u<e.length;u++)l(e[u],u,e)&&a.push(e[u]);return a}l.resolve=function(){for(var l="",u=!1,t=arguments.length-1;t>=-1&&!u;t--){var v=t>=0?arguments[t]:e.cwd();if("string"!==typeof v)throw new TypeError("Arguments to path.resolve must be strings");v&&(l=v+"/"+l,u="/"===v.charAt(0))}return l=a(n(l.split("/"),function(e){return!!e}),!u).join("/"),(u?"/":"")+l||"."},l.normalize=function(e){var u=l.isAbsolute(e),t="/"===v(e,-1);return e=a(n(e.split("/"),function(e){return!!e}),!u).join("/"),e||u||(e="."),e&&t&&(e+="/"),(u?"/":"")+e},l.isAbsolute=function(e){return"/"===e.charAt(0)},l.join=function(){var e=Array.prototype.slice.call(arguments,0);return l.normalize(n(e,function(e,l){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},l.relative=function(e,a){function u(e){for(var l=0;l<e.length;l++)if(""!==e[l])break;for(var a=e.length-1;a>=0;a--)if(""!==e[a])break;return l>a?[]:e.slice(l,a-l+1)}e=l.resolve(e).substr(1),a=l.resolve(a).substr(1);for(var t=u(e.split("/")),n=u(a.split("/")),v=Math.min(t.length,n.length),r=v,b=0;b<v;b++)if(t[b]!==n[b]){r=b;break}var i=[];for(b=r;b<t.length;b++)i.push("..");return i=i.concat(n.slice(r)),i.join("/")},l.sep="/",l.delimiter=":",l.dirname=function(e){var l=t(e),a=l[0],u=l[1];return a||u?(u&&(u=u.substr(0,u.length-1)),a+u):"."},l.basename=function(e,l){var a=t(e)[2];return l&&a.substr(-1*l.length)===l&&(a=a.substr(0,a.length-l.length)),a},l.extname=function(e){return t(e)[3]};var v="b"==="ab".substr(-1)?function(e,l,a){return e.substr(l,a)}:function(e,l,a){return l<0&&(l=e.length+l),e.substr(l,a)}}).call(this,a("4362"))},e103:function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("37b1"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},e24c:function(e){e.exports={zh:{title:"昵称",placeholder:"请输入昵称",btn:"保存"},en:{title:"Nick Name",placeholder:"Please enter nickname",btn:"Save"}}},f012:function(e,l,a){"use strict";(function(e){a("0633");u(a("66fd"));var l=u(a("0312"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/mpvue-citypicker/mpvueCityPicker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mpvue-citypicker/mpvueCityPicker.js';

define('components/mpvue-citypicker/mpvueCityPicker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mpvue-citypicker/mpvueCityPicker"], {
  "113b": function b(t, e, i) {
    "use strict";

    var a = i("66ed"),
        u = i.n(a);
    u.a;
  },
  "2c02": function c02(t, e, i) {
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
  "66ed": function ed(t, e, i) {},
  "6be8": function be8(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("e672"),
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
  e672: function e672(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = n(i("1b4b")),
        u = n(i("ddcc")),
        l = n(i("a420"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var c = {
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
    e.default = c;
  },
  fd85: function fd85(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("2c02"),
        u = i("6be8");

    for (var l in u) {
      "default" !== l && function (t) {
        i.d(e, t, function () {
          return u[t];
        });
      }(l);
    }

    i("113b");
    var n = i("2877"),
        c = Object(n["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mpvue-citypicker/mpvueCityPicker-create-component', {
  'components/mpvue-citypicker/mpvueCityPicker-create-component': function componentsMpvueCitypickerMpvueCityPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("fd85"));
  }
}, [['components/mpvue-citypicker/mpvueCityPicker-create-component']]]);
});
require('components/mpvue-citypicker/mpvueCityPicker.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1731:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t("2f62");function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.forEach(function(n){l(e,n,t[n])})}return e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u={data:function(){return{current:"",swiper:!0,imgs:["../../static/img/index/index_1.jpg","../../static/img/index/index_2.jpg","../../static/img/index/index_3.jpg"],list:[{id:"0",title:"中国",language:"zh"},{id:"1",title:"English",language:"en"},{id:"2",title:"日本語",language:"jp"},{id:"3",title:"한국어",language:"kor"},{id:"4",title:"Français",language:"fra"},{id:"5",title:"Español",language:"spa"},{id:"6",title:"ภาษาไทย",language:"th"},{id:"7",title:"عربي ،",language:"ara"},{id:"8",title:"русский язык",language:"ru"},{id:"9",title:"Português",language:"pt"},{id:"10",title:"Deutsch",language:"de"},{id:"11",title:"Italiano",language:"it"},{id:"12",title:"Ελληνικά",language:"el"},{id:"13",title:"Nederlands",language:"nl"},{id:"14",title:"Polski",language:"pl"},{id:"15",title:"Български",language:"bul"},{id:"16",title:"Eesti",language:"est"},{id:"17",title:"Dansk",language:"dan"},{id:"18",title:"Suomi",language:"fin"},{id:"19",title:"Česko",language:"cs"},{id:"20",title:"RomânăName",language:"rom"},{id:"21",title:"SlovenskoName",language:"slo"},{id:"22",title:"Svenska",language:"swe"},{id:"23",title:"MagyarName",language:"hu"},{id:"24",title:"ViệtName",language:"vie"}],num:0}},computed:(0,i.mapState)(["hasSkip","language"]),methods:a({},(0,i.mapMutations)(["skipIndex","langIndex"]),{bindSkip:function(){this.skipIndex(),this.swiper=!1,e.getSystemInfo({success:function(e){console.log(e.model," at pages\\index\\index.vue:85"),console.log(e.pixelRatio," at pages\\index\\index.vue:86"),console.log(e.windowWidth," at pages\\index\\index.vue:87"),console.log(e.windowHeight," at pages\\index\\index.vue:88"),console.log(e.language," at pages\\index\\index.vue:89"),console.log(e.version," at pages\\index\\index.vue:90"),console.log(e.platform," at pages\\index\\index.vue:91")}})},radioChange:function(e){this.current=e.detail.value},Confirm:function(){this.langIndex(),e.setStorageSync("lang",this.current),e.reLaunch({url:"../login/login"})},animationfinish:function(e){var n=e.detail.current,t=this.imgs.length-1;console.log(n,t," at pages\\index\\index.vue:111"),n==t&&(this.num++,2==this.num&&(this.swiper=!1,this.skipIndex()))}}),onLoad:function(){console.log(this," at pages\\index\\index.vue:122"),this.hasSkip&&(this.swiper=!1,this.language&&e.reLaunch({url:"../login/login"}))}};n.default=u}).call(this,t("6e42")["default"])},3872:function(e,n,t){"use strict";t.r(n);var i=t("1731"),a=t.n(i);for(var l in i)"default"!==l&&function(e){t.d(n,e,function(){return i[e]})}(l);n["default"]=a.a},"3efb":function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return i}),t.d(n,"b",function(){return a})},"5ee3":function(e,n,t){"use strict";var i=t("7a95"),a=t.n(i);a.a},"7a95":function(e,n,t){},d74b:function(e,n,t){"use strict";t.r(n);var i=t("3efb"),a=t("3872");for(var l in a)"default"!==l&&function(e){t.d(n,e,function(){return a[e]})}(l);t("5ee3");var u=t("2877"),o=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=o.exports}},[["836e","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/tabBar/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/home/home.js';

define('pages/tabBar/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/home/home"],{4745:function(t,o,n){"use strict";n.r(o);var e=n("b7ad"),i=n("e06f");for(var a in i)"default"!==a&&function(t){n.d(o,t,function(){return i[t]})}(a);n("7cc5");var s=n("2877"),c=Object(s["a"])(i["default"],e["a"],e["b"],!1,null,null,null);o["default"]=c.exports},"4b8c":function(t,o,n){},"7cc5":function(t,o,n){"use strict";var e=n("4b8c"),i=n.n(e);i.a},b7ad:function(t,o,n){"use strict";var e=function(){var t=this,o=t.$createElement;t._self._c},i=[];n.d(o,"a",function(){return e}),n.d(o,"b",function(){return i})},e06f:function(t,o,n){"use strict";n.r(o);var e=n("edcd"),i=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(o,t,function(){return e[t]})}(a);o["default"]=i.a},edcd:function(t,o,n){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=a(n("5370")),i=a(n("d734"));function a(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{showHeader:!0,afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,nVueTitle:null,city:"北京",currentSwiper:0,swiperList:[{id:1,src:"url1",img:"/static/img/1.jpg"},{id:2,src:"url2",img:"/static/img/2.jpg"},{id:3,src:"url3",img:"/static/img/3.jpg"}],categoryList:[{id:1,name:"办公",img:"/static/img/category/1.png"},{id:2,name:"家电",img:"/static/img/category/2.png"},{id:3,name:"服饰",img:"/static/img/category/3.png"},{id:4,name:"日用",img:"/static/img/category/4.png"},{id:5,name:"蔬果",img:"/static/img/category/5.png"},{id:6,name:"运动",img:"/static/img/category/6.png"},{id:7,name:"书籍",img:"/static/img/category/7.png"},{id:8,name:"文具",img:"/static/img/category/8.png"}],Promotion:[],productList:[{goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:1,img:"/static/img/goods/p2.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:2,img:"/static/img/goods/p3.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:3,img:"/static/img/goods/p4.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:4,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:5,img:"/static/img/goods/p6.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:6,img:"/static/img/goods/p7.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:7,img:"/static/img/goods/p8.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:8,img:"/static/img/goods/p9.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:9,img:"/static/img/goods/p10.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"}],loadingText:"正在加载..."}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onReachBottom:function(){t.showToast({title:"触发上拉加载"});var o=this.productList.length;if(o>=40)return this.loadingText="到底了",!1;for(var n=this.productList[o-1].goods_id,e=1;e<=10;e++){var i=n+e,a={goods_id:i,img:"/static/img/goods/p"+(i%10==0?10:i%10)+".jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"};this.productList.push(a)}},onLoad:function(){var o=this;t.getStorage({key:"lang",success:function(o){t.setTabBarItem({index:0,text:i.default[o.data].home}),t.setTabBarItem({index:1,text:i.default[o.data].category}),t.setTabBarItem({index:2,text:i.default[o.data].issue}),t.setTabBarItem({index:3,text:i.default[o.data].cart}),t.setTabBarItem({index:4,text:i.default[o.data].user})}}),this.nVueTitle=t.getSubNVueById("homeTitleNvue"),this.nVueTitle.onMessage(function(t){var n=t.data.type;"focus"==n&&o.toSearch()}),this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight(),this.amapPlugin=new e.default.AMapWX({key:"7c235a9ac4e25e482614c6b8eac6fd8e"}),this.amapPlugin.getRegeo({success:function(t){o.city=t[0].regeocodeData.addressComponent.city.replace(/市/g,""),o.nVueTitle.postMessage({type:"location",city:o.city})}}),this.Timer(),this.loadPromotion()},methods:{loadPromotion:function(){for(var t=new Date,o=t.getFullYear(),n=t.getMonth()+1,e=t.getDate(),i=o+"/"+n+"/"+e+" 23:59:59",a=[{title:"整点秒杀",ad:"整天秒杀专区",img:"/static/img/s1.jpg",countdown:!1},{title:"限时抢购",ad:"每天23点上线",img:"/static/img/s2.jpg",countdown:i}],s=0;s<a.length;s++){var c=a[s];if(c.countdown){var g="00",d="00",r="00",u=new Date,m=new Date(i);if(!(u>=m)){var l=parseInt((m.getTime()-u.getTime())/1e3);g=parseInt(l/3600),d=parseInt(l%3600/60),r=l%60,g=g<10?"0"+g:g,d=d<10?"0"+d:d,r=r<10?"0"+r:r}a[s].countdown={h:g,m:d,s:r}}}this.Promotion=a},Timer:function(){var t=this;setInterval(function(){if(t.Promotion.length>0)for(var o=0;o<t.Promotion.length;o++){var n=t.Promotion[o];n.countdown&&(0==n.countdown.h&&0==n.countdown.m&&0==n.countdown.s||(n.countdown.s>0?(n.countdown.s--,n.countdown.s=n.countdown.s<10?"0"+n.countdown.s:n.countdown.s):n.countdown.m>0?(n.countdown.m--,n.countdown.m=n.countdown.m<10?"0"+n.countdown.m:n.countdown.m,n.countdown.s=59):n.countdown.h>0&&(n.countdown.h--,n.countdown.h=n.countdown.h<10?"0"+n.countdown.h:n.countdown.h,n.countdown.m=59,n.countdown.s=59),t.Promotion[o].countdown=n.countdown))}},1e3)},toMsg:function(){t.navigateTo({url:"../../msg/msg"})},toSearch:function(){t.showToast({title:"建议跳转到新页面做搜索功能"})},toSwiper:function(o){t.showToast({title:o.src,icon:"none"})},toCategory:function(o){t.setStorageSync("catName",o.name),t.navigateTo({url:"../../goods/goods-list/goods-list?cid="+o.id+"&name="+o.name})},toPromotion:function(o){t.showToast({title:o.title,icon:"none"})},toGoods:function(o){t.showToast({title:"商品"+o.goods_id,icon:"none"}),t.navigateTo({url:"../../goods/goods"})},swiperChange:function(t){this.currentSwiper=t.detail.current}}};o.default=s}).call(this,n("6e42")["default"])}},[["965c","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/home/home.js');
__wxRoute = 'pages/tabBar/issue/issue';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/issue/issue.js';

define('pages/tabBar/issue/issue.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/issue/issue"],{"3b4f":function(n,t,e){"use strict";var u=e("b3a6"),a=e.n(u);a.a},"3ea7":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},"5c17":function(n,t,e){"use strict";e.r(t);var u=e("612a"),a=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=a.a},"612a":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}}};t.default=u},b3a6:function(n,t,e){},b6ff:function(n,t,e){"use strict";e.r(t);var u=e("3ea7"),a=e("5c17");for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);e("3b4f");var c=e("2877"),f=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=f.exports}},[["c3c5","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/issue/issue.js');
__wxRoute = 'pages/tabBar/cart/cart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/cart/cart.js';

define('pages/tabBar/cart/cart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/cart/cart"],{"0543":function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{sumPrice:"0.00",headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,selectedList:[],isAllselected:!1,goodsList:[{id:1,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:2,img:"/static/img/goods/p2.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:3,img:"/static/img/goods/p3.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:4,img:"/static/img/goods/p4.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:5,img:"/static/img/goods/p5.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1}],theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},methods:{joinGoods:function(t){for(var s=this.goodsList.length,e=!1,o=0;o<s;o++){var n=this.goodsList[o];if(n.id==t.id){this.goodsList[o].number++,e=!0;break}}e||this.goodsList[i].unshift(t)},touchStart:function(t,s){s.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[s.touches[0].pageX,s.touches[0].pageY])},touchMove:function(t,s){var e=this;if(s.touches.length>1)this.isStop=!0;else{var i=s.touches[0].pageX-this.initXY[0],o=s.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(i)<5||(Math.abs(o)>Math.abs(i)?this.isStop=!0:i<0?(this.theIndex=t,this.isStop=!0):i>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){e.oldIndex=null},150)))}},touchEnd:function(t,s){this.isStop=!1},toGoods:function(s){t.showToast({title:"商品"+s.id,icon:"none"}),t.navigateTo({url:"../../goods/goods"})},toConfirmation:function(){for(var s=[],e=this.goodsList.length,i=0;i<e;i++)this.goodsList[i].selected&&s.push(this.goodsList[i]);s.length<1?t.showToast({title:"请选择商品结算",icon:"none"}):t.setStorage({key:"buylist",data:s,success:function(){t.navigateTo({url:"../../order/confirmation"})}})},deleteGoods:function(t){for(var s=this.goodsList.length,e=0;e<s;e++)if(t==this.goodsList[e].id){this.goodsList.splice(e,1);break}this.selectedList.splice(this.selectedList.indexOf(t),1),this.sum(),this.oldIndex=null,this.theIndex=null},deleteList:function(){this.selectedList.length;while(this.selectedList.length>0)this.deleteGoods(this.selectedList[0]);this.selectedList=[],this.isAllselected=this.selectedList.length==this.goodsList.length&&this.goodsList.length>0,this.sum()},selected:function(t){this.goodsList[t].selected=!this.goodsList[t].selected;var s=this.selectedList.indexOf(this.goodsList[t].id);s>-1?this.selectedList.splice(s,1):this.selectedList.push(this.goodsList[t].id),this.isAllselected=this.selectedList.length==this.goodsList.length,this.sum()},allSelect:function(){for(var t=this.goodsList.length,s=[],e=0;e<t;e++)this.goodsList[e].selected=!this.isAllselected,s.push(this.goodsList[e].id);this.selectedList=this.isAllselected?[]:s,this.isAllselected=!this.isAllselected&&0!=this.goodsList.length,this.sum()},sub:function(t){this.goodsList[t].number<=1||(this.goodsList[t].number--,this.sum())},add:function(t){this.goodsList[t].number++,this.sum()},sum:function(t,s){this.sumPrice=0;for(var e=this.goodsList.length,i=0;i<e;i++)this.goodsList[i].selected&&(this.sumPrice=t&&i==s?this.sumPrice+t.detail.value*this.goodsList[i].price:this.sumPrice+this.goodsList[i].number*this.goodsList[i].price);this.sumPrice=this.sumPrice.toFixed(2)},discard:function(){}}};s.default=e}).call(this,e("6e42")["default"])},"3b0c":function(t,s,e){"use strict";e.r(s);var i=e("0543"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(s,t,function(){return i[t]})}(n);s["default"]=o.a},"781e":function(t,s,e){},a74c:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c},o=[];e.d(s,"a",function(){return i}),e.d(s,"b",function(){return o})},ca05:function(t,s,e){"use strict";var i=e("781e"),o=e.n(i);o.a},d449:function(t,s,e){"use strict";e.r(s);var i=e("a74c"),o=e("3b0c");for(var n in o)"default"!==n&&function(t){e.d(s,t,function(){return o[t]})}(n);e("ca05");var l=e("2877"),d=Object(l["a"])(o["default"],i["a"],i["b"],!1,null,null,null);s["default"]=d.exports}},[["afb0","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/cart/cart.js');
__wxRoute = 'pages/tabBar/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/user/user.js';

define('pages/tabBar/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/user/user"],{3887:function(t,e,n){},"3f7f":function(t,e,n){"use strict";n.r(e);var o=n("bf36"),a=n("61e5");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("d55e");var s=n("2877"),i=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},"61e5":function(t,e,n){"use strict";n.r(e);var o=n("eee1"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=a.a},bf36:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},d55e:function(t,e,n){"use strict";var o=n("3887"),a=n.n(o);a.a},eee1:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("7285"));function a(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{isfirst:!0,headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,jsonData:"",user:{username:"未登录",face:"/static/img/face.jpg",integral:0,balance:0,envelope:0},orderList:[{text:"待付款",icon:"fukuan"},{text:"待发货",icon:"fahuo"},{text:"待收货",icon:"shouhuo"},{text:"待评价",icon:"pingjia"},{text:"退换货",icon:"tuihuo"}],mytoolbarList:[{url:"",text:"积分管理",img:"/static/img/user/choujiang.png"},{url:"../../user/coupon/coupon",text:"账号管理",img:"/static/img/user/quan.png"},{url:"",text:"我的竞标",img:"/static/img/user/renw.png"},{url:"",text:"我的需求",img:"/static/img/user/momey.png"},{url:"../../user/address/address",text:"我的产品",img:"/static/img/user/addr.png"},{url:"",text:"我的出售",img:"/static/img/user/security.png"},{url:"../../shop/check/check",text:"商铺管理",img:"/static/img/user/bank.png"},{url:"../../user/keep/keep",text:"收藏",img:"/static/img/user/point.png"}]}},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onLoad:function(){this.statusHeight=0,this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},onReady:function(){t.setStorage({key:"UserInfo",data:!1,success:function(){},fail:function(t){}})},onShow:function(){var e=this;t.getStorage({key:"userInfo",success:function(n){console.log(n," at pages\\tabBar\\user\\user.vue:175"),n.data.hasLogin?(e.user=n.data,e.user.face="/static/img/face.jpg",e.user.integral=500,e.user.balance=500,e.user.envelope=500):(console.log(2," at pages\\tabBar\\user\\user.vue:184"),t.navigateTo({url:"../../login/login"}))},fail:function(){console.log(1," at pages\\tabBar\\user\\user.vue:191"),t.navigateTo({url:"../../login/login"})}}),t.getStorage({key:"lang",success:function(t){console.log(o.default," at pages\\tabBar\\user\\user.vue:201"),e.jsonData=o.default[t.data]},fail:function(){console.log(123," at pages\\tabBar\\user\\user.vue:204"),t.navigateTo({url:"../../user/language/language"})}})},methods:{toMsg:function(){t.navigateTo({url:"../../msg/msg"})},toOrderList:function(e){t.setStorageSync("tbIndex",e),t.navigateTo({url:"../../user/order_list/order_list?tbIndex="+e})},toSetting:function(){t.navigateTo({url:"../../user/setting/setting"})},toMyQR:function(){t.navigateTo({url:"../../user/myQR/myQR"})},toLogin:function(){t.showToast({title:"请登录",icon:"none"}),t.navigateTo({url:"../../login/login"}),this.isfirst=!1},isLogin:function(){var e=t.getStorageSync("UserInfo");return!!e},toDeposit:function(){t.navigateTo({url:"../../user/deposit/deposit"})},toPage:function(e){e?t.navigateTo({url:e}):t.showToast({title:"模板未包含此页面",icon:"none"})}}};e.default=u}).call(this,n("6e42")["default"])}},[["0279","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/user/user.js');
__wxRoute = 'pages/goods/goods';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/goods.js';

define('pages/goods/goods.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods"],{"2a0d":function(t,e,o){"use strict";var s=o("4db8"),i=o.n(s);i.a},"4db8":function(t,e,o){},"95ea":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},i=[];o.d(e,"a",function(){return s}),o.d(e,"b",function(){return i})},a737:function(t,e,o){"use strict";o.r(e);var s=o("aa38"),i=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);e["default"]=i.a},a768:function(t,e,o){"use strict";o.r(e);var s=o("95ea"),i=o("a737");for(var n in i)"default"!==n&&function(t){o.d(e,t,function(){return i[t]})}(n);o("2a0d");var a=o("2877"),c=Object(a["a"])(i["default"],s["a"],s["b"],!1,null,null,null);e["default"]=c.exports},aa38:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{beforeHeaderzIndex:11,afterHeaderzIndex:10,beforeHeaderOpacity:1,afterHeaderOpacity:0,showBack:!0,swiperList:[{id:1,img:"https://ae01.alicdn.com/kf/HTB1Mj7iTmzqK1RjSZFjq6zlCFXaP.jpg"},{id:2,img:"https://ae01.alicdn.com/kf/HTB1fbseTmzqK1RjSZFLq6An2XXaL.jpg"},{id:3,img:"https://ae01.alicdn.com/kf/HTB1dPUMThnaK1RjSZFtq6zC2VXa0.jpg"},{id:4,img:"https://ae01.alicdn.com/kf/HTB1OHZrTXzqK1RjSZFvq6AB7VXaw.jpg"}],currentSwiper:0,anchorlist:[],selectAnchor:0,serviceClass:"",specClass:"",shareClass:"",goodsData:{id:1,name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",price:"127.00",number:1,service:[{name:"正品保证",description:"此商品官方保证为正品"},{name:"极速退款",description:"此商品享受退货极速退款服务"},{name:"7天退换",description:"此商品享受7天无理由退换服务"}],spec:["XS","S","M","L","XL","XXL"],comment:{number:102,userface:"../../static/img/face.jpg",username:"大黑哥",content:"很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！"}},selectSpec:null,isKeep:!1,descriptionStr:'<div style="text-align:center;"><img width="100%" src="https://ae01.alicdn.com/kf/HTB1t0fUl_Zmx1VjSZFGq6yx2XXa5.jpg"/><img width="100%" src="https://ae01.alicdn.com/kf/HTB1LzkjThTpK1RjSZFKq6y2wXXaT.jpg"/><img width="100%" src="https://ae01.alicdn.com/kf/HTB18dkiTbvpK1RjSZPiq6zmwXXa8.jpg"/></div>'}},onLoad:function(t){console.log(t.cid," at pages\\goods\\goods.vue:248")},onReady:function(){this.calcAnchor()},onPageScroll:function(t){this.selectAnchor=t.scrollTop>=this.anchorlist[2].top?2:t.scrollTop>=this.anchorlist[1].top?1:0;var e=375;t.scrollTop=t.scrollTop>e?375:t.scrollTop,this.afterHeaderOpacity=t.scrollTop*(1/e),this.beforeHeaderOpacity=1-this.afterHeaderOpacity,this.beforeHeaderzIndex=t.scrollTop>0?10:11,this.afterHeaderzIndex=t.scrollTop>0?11:10},onReachBottom:function(){t.showToast({title:"触发上拉加载"})},mounted:function(){},methods:{swiperChange:function(t){this.currentSwiper=t.detail.current},toMsg:function(){t.navigateTo({url:"../msg/msg"})},toChat:function(){t.navigateTo({url:"../msg/chat/chat?name=客服008"})},share:function(){this.shareClass="show"},hideShare:function(){var t=this;this.shareClass="hide",setTimeout(function(){t.shareClass="none"},150)},keep:function(){this.isKeep=!this.isKeep},joinCart:function(){if(null==this.selectSpec)return this.showSpec(function(){t.showToast({title:"已加入购物车"})});t.showToast({title:"已加入购物车"})},buy:function(){var t=this;if(null==this.selectSpec)return this.showSpec(function(){t.toConfirmation()});this.toConfirmation()},toRatings:function(){t.navigateTo({url:"ratings/ratings"})},toConfirmation:function(){var e=[],o={id:this.goodsData.id,img:"../../static/img/goods/p1.jpg",name:this.goodsData.name,spec:"规格:"+this.goodsData.spec[this.selectSpec],price:this.goodsData.price,number:this.goodsData.number};e.push(o),t.setStorage({key:"buylist",data:e,success:function(){t.navigateTo({url:"../order/confirmation"})}})},showComments:function(t){},setSelectSpec:function(t){this.selectSpec=t},sub:function(){this.goodsData.number<=1||this.goodsData.number--},add:function(){this.goodsData.number++},toAnchor:function(e){this.selectAnchor=e,t.pageScrollTo({scrollTop:this.anchorlist[e].top,duration:200})},calcAnchor:function(){var e=this;this.anchorlist=[{name:"主图",top:0},{name:"评价",top:0},{name:"详情",top:0}];var o=t.createSelectorQuery().select("#comments");o.boundingClientRect(function(o){var s=0;s=plus.navigator.getStatusbarHeight();var i=t.upx2px(100);e.anchorlist[1].top=o.top-i-s,e.anchorlist[2].top=o.bottom-i-s}).exec()},back:function(){t.navigateBack()},showService:function(){console.log("show"," at pages\\goods\\goods.vue:392"),this.serviceClass="show"},hideService:function(){var t=this;this.serviceClass="hide",setTimeout(function(){t.serviceClass="none"},200)},showSpec:function(t){console.log("show"," at pages\\goods\\goods.vue:404"),this.specClass="show",this.specCallback=t},specCallback:function(){},hideSpec:function(){var t=this;this.specClass="hide",this.selectSpec&&this.specCallback&&this.specCallback(),this.specCallback=!1,setTimeout(function(){t.specClass="none"},200)},discard:function(){}}};e.default=o}).call(this,o("6e42")["default"])}},[["48c7","common/runtime","common/vendor"]]]);
});
require('pages/goods/goods.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"525f":function(e,n,o){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(o("7f94")),i=o("2f62");function a(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{},t=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(n){u(e,n,o[n])})}return e}function u(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var s={data:function(){return{phoneNumber:"",passwd:"",isShowOauth:!1,showProvider:{weixin:!1,qq:!1,sinaweibo:!1,xiaomi:!1}}},onShow:function(){},onBackPress:function(n){return console.log(n," at pages\\login\\login.vue:56"),e.reLaunch({url:"../tabBar/home/home"}),!0},onLoad:function(){this.isShowOauth=!0,this.getProvider(),this.hasLogin&&e.reLaunch({url:"../tabBar/home/home"})},computed:(0,i.mapState)(["hasLogin"]),methods:r({},(0,i.mapMutations)(["login"]),{oauthLogin:function(n){e.showLoading(),e.login({provider:n,success:function(o){console.log("success: "+JSON.stringify(o)," at pages\\login\\login.vue:87"),e.getUserInfo({provider:n,success:function(n){console.log("用户信息："+JSON.stringify(n.userInfo)," at pages\\login\\login.vue:92"),e.setStorage({key:"UserInfo",data:{username:n.userInfo.nickName,face:n.userInfo.avatarUrl,signature:"个性签名",integral:0,balance:0,envelope:0},success:function(){e.hideLoading(),e.showToast({title:"登录成功",icon:"success"}),setTimeout(function(){e.navigateBack()},300)}})}})},fail:function(e){console.log("fail: "+JSON.stringify(e)," at pages\\login\\login.vue:115")}})},getProvider:function(){var n=this;e.getProvider({service:"oauth",success:function(e){for(var o=e.provider.length,t=0;t<o;t++)n.showProvider[e.provider[t]]=!0;0==e.provider.length&&(n.isShowOauth=!1)}})},toPage:function(n){e.hideKeyboard(),e.navigateTo({url:n})},doLogin:function(){var n=this;if(e.hideKeyboard(),!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))return e.showToast({title:"请填写正确手机号码",icon:"none"}),!1;e.showLoading({title:"提交中..."}),setTimeout(function(){var o=(0,t.default)(n.passwd);e.getStorage({key:"UserList",success:function(t){for(var i in t.data){var a=t.data[i];a.phoneNumber==n.phoneNumber&&(e.hideLoading(),o==t.data[i].passwd?(e.showToast({title:"登录成功",icon:"success"}),n.login(t.data[i]),e.reLaunch({url:"../tabBar/home/home"})):e.showToast({title:"账号或密码不正确",icon:"none"}))}},fail:function(n){e.hideLoading(),e.showToast({title:"手机号码未注册",icon:"none"})}})},1e3)}})};n.default=s}).call(this,o("6e42")["default"])},"5de0":function(e,n,o){"use strict";var t=function(){var e=this,n=e.$createElement;e._self._c},i=[];o.d(n,"a",function(){return t}),o.d(n,"b",function(){return i})},"6f08":function(e,n,o){"use strict";o.r(n);var t=o("525f"),i=o.n(t);for(var a in t)"default"!==a&&function(e){o.d(n,e,function(){return t[e]})}(a);n["default"]=i.a},"90c4":function(e,n,o){"use strict";var t=o("c125"),i=o.n(t);i.a},"9e24":function(e,n,o){"use strict";o.r(n);var t=o("5de0"),i=o("6f08");for(var a in i)"default"!==a&&function(e){o.d(n,e,function(){return i[e]})}(a);o("90c4");var r=o("2877"),u=Object(r["a"])(i["default"],t["a"],t["b"],!1,null,null,null);n["default"]=u.exports},c125:function(e,n,o){}},[["6c63","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/login/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/register.js';

define('pages/login/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/register"],{"041f":function(e,t,n){"use strict";n.r(t);var o=n("3943"),i=n("9f98");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("051a");var s=n("2877"),r=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},"051a":function(e,t,n){"use strict";var o=n("06a5"),i=n.n(o);i.a},"06a5":function(e,t,n){},3943:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},"6b19":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("7f94"));function i(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{phoneNumber:"",mail:"",code:"",passwd:"",getCodeText:"获取验证码",getCodeBtnColor:"#ffffff",getCodeisWaiting:!1}},onLoad:function(){},methods:{Timer:function(){},getCode:function(){var t=this;if(e.hideKeyboard(),!this.getCodeisWaiting){if(!/^\w+@[a-z0-9]+\.[a-z]{2,4}$/.test(this.mail))return e.showToast({title:"请填写正确邮箱地址",icon:"none"}),!1;this.getCodeText="发送中...",this.getCodeisWaiting=!0,this.getCodeBtnColor="rgba(255,255,255,0.5)",setTimeout(function(){e.showToast({title:"验证码已发送",icon:"none"}),t.code=1234,t.setTimer()},1e3)}},setTimer:function(){var e=this,t=60;this.getCodeText="重新获取(60)",this.Timer=setInterval(function(){if(t<=0)return e.getCodeisWaiting=!1,e.getCodeBtnColor="#ffffff",e.getCodeText="获取验证码",void clearInterval(e.Timer);e.getCodeText="重新获取("+t+")",t--},1e3)},doReg:function(){var t=this;return e.hideKeyboard(),/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)?1234!=this.code?(e.showToast({title:"验证码不正确",icon:"none"}),!1):(e.showLoading({title:"提交中..."}),void setTimeout(function(){e.getStorage({key:"UserList",success:function(n){n.data.push({username:t.phoneNumber,phoneNumber:t.phoneNumber,passwd:(0,o.default)(t.passwd),mail:t.mail,face:"/static/img/face.jpg"}),e.setStorage({key:"UserList",data:n.data,success:function(){e.hideLoading(),e.showToast({title:"注册成功",icon:"success"}),setTimeout(function(){e.navigateBack()},1e3)}})},fail:function(n){e.hideLoading(),console.log("error"," at pages\\login\\register.vue:129"),e.setStorage({key:"UserList",data:[{username:t.phoneNumber,phoneNumber:t.phoneNumber,passwd:(0,o.default)(t.passwd),mail:t.mail,face:"/static/img/face.jpg"}],success:function(){e.hideLoading(),e.showToast({title:"注册成功",icon:"success"}),setTimeout(function(){e.navigateBack()},1e3)},fail:function(e){console.log("set error:"+JSON.stringify(e)," at pages\\login\\register.vue:147")}})}})},1e3)):(e.showToast({title:"请填写正确手机号码",icon:"none"}),!1)},toLogin:function(){e.hideKeyboard(),e.redirectTo({url:"login"}),e.navigateBack()}}};t.default=a}).call(this,n("6e42")["default"])},"9f98":function(e,t,n){"use strict";n.r(t);var o=n("6b19"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=i.a}},[["2fb8","common/runtime","common/vendor"]]]);
});
require('pages/login/register.js');
__wxRoute = 'pages/login/resetpasswd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/resetpasswd.js';

define('pages/login/resetpasswd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/resetpasswd"],{"44be":function(t,e,n){"use strict";n.r(e);var o=n("babe"),i=n("a2ab");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("8f89");var s=n("2877"),r=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},"8f89":function(t,e,n){"use strict";var o=n("d361"),i=n.n(o);i.a},a2ab:function(t,e,n){"use strict";n.r(e);var o=n("b445"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},b445:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("7f94"));function i(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{phoneNumber:"",code:"",passwd:"",getCodeText:"获取验证码",getCodeBtnColor:"#ffffff",getCodeisWaiting:!1}},onLoad:function(){},methods:{Timer:function(){},getCode:function(){var e=this;if(!this.getCodeisWaiting){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))return t.showToast({title:"请填写正确手机号码",icon:"none"}),!1;this.getCodeText="发送中...",this.getCodeisWaiting=!0,this.getCodeBtnColor="rgba(255,255,255,0.5)",setTimeout(function(){t.showToast({title:"验证码已发送",icon:"none"}),e.code=1234,e.setTimer()},1e3)}},setTimer:function(){var t=this,e=60;this.getCodeText="重新获取(60)",this.Timer=setInterval(function(){if(e<=0)return t.getCodeisWaiting=!1,t.getCodeBtnColor="#ffffff",t.getCodeText="获取验证码",void clearInterval(t.Timer);t.getCodeText="重新获取("+e+")",e--},1e3)},doReset:function(){var e=this;return t.hideKeyboard(),/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)?1234!=this.code?(t.showToast({title:"验证码不正确",icon:"none"}),!1):(t.showLoading({title:"提交中..."}),void setTimeout(function(){t.getStorage({key:"UserList",success:function(n){for(var i in t.hideLoading(),n.data){var a=n.data[i];if(a.username==e.phoneNumber)return n.data[i].passwd=(0,o.default)(e.passwd),void t.setStorage({key:"UserList",data:n.data,success:function(){t.showToast({title:"密码已重置",icon:"success"}),setTimeout(function(){t.navigateBack()},1e3)}})}t.showToast({title:"手机号码未注册",icon:"none"})},fail:function(e){t.hideLoading(),t.showToast({title:"手机号码未注册",icon:"none"})}})},1e3)):(t.showToast({title:"请填写正确手机号码",icon:"none"}),!1)}}};e.default=a}).call(this,n("6e42")["default"])},babe:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},d361:function(t,e,n){}},[["9977","common/runtime","common/vendor"]]]);
});
require('pages/login/resetpasswd.js');
__wxRoute = 'pages/order/confirmation';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/confirmation.js';

define('pages/order/confirmation.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/confirmation"],{"6c2f":function(e,t,i){"use strict";i.r(t);var n=i("e986"),o=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,function(){return n[e]})}(r);t["default"]=o.a},7490:function(e,t,i){"use strict";i.r(t);var n=i("98be"),o=i("6c2f");for(var r in o)"default"!==r&&function(e){i.d(t,e,function(){return o[e]})}(r);i("eee4");var s=i("2877"),u=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports},"98be":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=(e._self._c,e._f("toFixed")(e.deduction)),n=e._f("toFixed")(e.goodsPrice),o=e._f("toFixed")(e.freight),r=e._f("toFixed")(e.deduction),s=e._f("toFixed")(e.sumPrice);e.$mp.data=Object.assign({},{$root:{f0:i,f1:n,f2:o,f3:r,f4:s}})},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},cf2b:function(e,t,i){},e986:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{buylist:[],goodsPrice:0,sumPrice:0,freight:12,note:"",int:1200,deduction:0,recinfo:{id:1,name:"大黑哥",head:"大",tel:"18816881688",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!0}}},onShow:function(){var t=this;e.getStorage({key:"buylist",success:function(e){t.buylist=e.data,t.goodsPrice=0;for(var i=t.buylist.length,n=0;n<i;n++)t.goodsPrice=t.goodsPrice+t.buylist[n].number*t.buylist[n].price;t.deduction=t.int/100,t.sumPrice=t.goodsPrice-t.deduction+t.freight}}),e.getStorage({key:"selectAddress",success:function(i){t.recinfo=i.data,e.removeStorage({key:"selectAddress"})}})},onHide:function(){},onBackPress:function(){this.clearOrder()},filters:{toFixed:function(e){return parseFloat(e).toFixed(2)}},methods:{clearOrder:function(){var t=this;e.removeStorage({key:"buylist",success:function(e){t.buylist=[],console.log("remove buylist success"," at pages\\order\\confirmation.vue:160")}})},toPay:function(){for(var t=this,i=[],n=[],o=this.buylist.length,r=0;r<o;r++)i.push(this.buylist[r]),n.push(this.buylist[r].id);0!=i.length?(e.showLoading({title:"正在提交订单..."}),setTimeout(function(){e.setStorage({key:"paymentOrder",data:i,success:function(){e.hideLoading(),e.redirectTo({url:"../pay/payment/payment?amount="+t.sumPrice})}})},1e3)):e.showToast({title:"订单信息有误，请重新购买",icon:"none"})},selectAddress:function(){e.navigateTo({url:"../user/address/address?type=select"})}}};t.default=i}).call(this,i("6e42")["default"])},eee4:function(e,t,i){"use strict";var n=i("cf2b"),o=i.n(n);o.a}},[["44f1","common/runtime","common/vendor"]]]);
});
require('pages/order/confirmation.js');
__wxRoute = 'pages/user/setting/setting';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/setting/setting.js';

define('pages/user/setting/setting.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/setting/setting"],{"226b":function(e,t,n){"use strict";n.r(t);var a=n("8352"),o=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=o.a},"3be1":function(e,t,n){},"3e55":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},8352:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("102b"));function o(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{user:"",details:{}}},onLoad:function(){var t=this;e.getStorage({key:"lang",success:function(n){t.details=a.default[n.data],e.setNavigationBarTitle({title:a.default[n.data].title})}})},onShow:function(){var t=this;console.log(a.default.zh," at pages\\user\\setting\\setting.vue:93"),e.getStorage({key:"userInfo",success:function(e){console.log(e," at pages\\user\\setting\\setting.vue:98"),t.user=e.data,t.user.face="/static/img/face.jpg",t.user.signature="点击昵称跳转登录/注册页",t.user.integral=500,t.user.balance=500,t.user.envelope=500}})},methods:{showType:function(e){this.tabbarIndex=e,this.list=this.orderList[e]},toPage:function(t){t?e.navigateTo({url:t}):e.showToast({title:"模板未包含此页面",icon:"none"})},chooseImage:function(){e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){console.log(a.default.stringify(e.tempFilePaths)," at pages\\user\\setting\\setting.vue:128")}})},clear:function(){e.showModal({content:"确定要清除缓存吗？",confirmText:"确定",cancelText:"取消",success:function(t){t.confirm&&e.removeStorageSync("lang"),t.cancel}})},exit:function(){e.reLaunch({url:"../../login/login"})}}};t.default=u}).call(this,n("6e42")["default"])},df79:function(e,t,n){"use strict";var a=n("3be1"),o=n.n(a);o.a},f8cd:function(e,t,n){"use strict";n.r(t);var a=n("3e55"),o=n("226b");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("df79");var s=n("2877"),i=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=i.exports}},[["0d04","common/runtime","common/vendor"]]]);
});
require('pages/user/setting/setting.js');
__wxRoute = 'pages/user/myname/myname';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/myname/myname.js';

define('pages/user/myname/myname.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/myname/myname"],{"55b6":function(t,e,n){"use strict";var a=n("c245"),u=n.n(a);u.a},8078:function(t,e,n){"use strict";n.r(e);var a=n("83f1"),u=n("da88");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n("55b6");var s=n("2877"),r=Object(s["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"83f1":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},c245:function(t,e,n){},da88:function(t,e,n){"use strict";n.r(e);var a=n("ebf4"),u=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=u.a},ebf4:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("e24c"));function u(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{user:"",details:""}},onLoad:function(){var e=this;t.getStorage({key:"lang",success:function(n){e.details=a.default[n.data],t.setNavigationBarTitle({title:a.default[n.data].title})}}),t.getStorage({key:"userInfo",success:function(t){console.log(t," at pages\\user\\myname\\myname.vue:34"),e.user=t.data}})},methods:{btn:function(){t.showLoading({title:"提交中..."}),t.setStorage({key:"userInfo",data:this.user,success:function(){t.hideLoading(),t.showToast({title:"提交成功",icon:"success",duration:2e3})}})}}};e.default=o}).call(this,n("6e42")["default"])}},[["3215","common/runtime","common/vendor"]]]);
});
require('pages/user/myname/myname.js');
__wxRoute = 'pages/user/signature/signature';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/signature/signature.js';

define('pages/user/signature/signature.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/signature/signature"],{"0301":function(t,e,n){"use strict";n.r(e);var u=n("5456"),a=n("1344");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("91ee");var s=n("2877"),o=Object(s["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=o.exports},1344:function(t,e,n){"use strict";n.r(e);var u=n("b630"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=a.a},5456:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},"6ae1":function(t,e,n){},"91ee":function(t,e,n){"use strict";var u=n("6ae1"),a=n.n(u);a.a},b630:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=a(n("cf15"));function a(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{user:"",details:""}},onLoad:function(){var e=this;t.getStorage({key:"lang",success:function(n){e.details=u.default[n.data],t.setNavigationBarTitle({title:u.default[n.data].title})}}),t.getStorage({key:"userInfo",success:function(t){e.user=t.data}})},methods:{btn:function(){console.log(this.user," at pages\\user\\signature\\signature.vue:38"),t.setStorage({key:"userInfo",data:this.user,success:function(e){(e.errMsg="setStorage:ok")&&t.showToast({title:"保存",duration:2e3,icon:"success"})}})}}};e.default=r}).call(this,n("6e42")["default"])}},[["ce05","common/runtime","common/vendor"]]]);
});
require('pages/user/signature/signature.js');
__wxRoute = 'pages/integral/integral';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/integral/integral.js';

define('pages/integral/integral.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/integral/integral"],{4405:function(t,n,a){},"45a3":function(t,n,a){"use strict";a.r(n);var i=a("b426"),e=a.n(i);for(var u in i)"default"!==u&&function(t){a.d(n,t,function(){return i[t]})}(u);n["default"]=e.a},"7f99":function(t,n,a){"use strict";var i=a("4405"),e=a.n(i);e.a},b426:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e(a("04b6"));function e(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{tab:0,list:[{img:"/static/img/qiandao.png",title:"签到送积分",text:"每日签到获得2积分",url:"",btn:"前往"},{img:"/static/img/qiandao.png",title:"好任务，看不停",text:"每天查看5次任务，可以获得5积分",url:"",btn:"前往"},{img:"/static/img/qiandao.png",title:"分享送积分",text:"每次分享，可以获得30积分",url:"",btn:"前往"},{img:"/static/img/qiandao.png",title:"认证送积分",text:"完成手机，实名认证，可以获得100积分完成手机，实名认证，可以获得100积分",url:"",btn:"前往"},{img:"/static/img/qiandao.png",title:"交稿送积分",text:"每天交稿5次，可以获得10积分",url:"",btn:"前往"},{img:"/static/img/qiandao.png",title:"注册送积分",text:"完成注册，可以获得50积分",url:"",btn:"前往"},{img:"/static/img/qiandao.png",title:"设置送积分",text:"完成位置设置，可以获得50积分",url:"",btn:"前往"}]}},onLoad:function(){var n=this;console.log(i.default," at pages\\integral\\integral.vue:90"),t.getStorage({key:"lang",success:function(a){n.list=i.default[a.data],t.setNavigationBarTitle({title:i.default[a.data].title})}})}};n.default=u}).call(this,a("6e42")["default"])},ca1a:function(t,n,a){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){t.tab=t.item.id})},e=[];a.d(n,"a",function(){return i}),a.d(n,"b",function(){return e})},d0e2:function(t,n,a){"use strict";a.r(n);var i=a("ca1a"),e=a("45a3");for(var u in e)"default"!==u&&function(t){a.d(n,t,function(){return e[t]})}(u);a("7f99");var l=a("2877"),r=Object(l["a"])(e["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports}},[["005e","common/runtime","common/vendor"]]]);
});
require('pages/integral/integral.js');
__wxRoute = 'pages/user/security/security';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/security/security.js';

define('pages/user/security/security.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/security/security"],{"36c8":function(t,e,n){"use strict";var u=n("d9e7"),a=n.n(u);a.a},"400d":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},"4d7b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=a(n("d23a"));function a(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{user:"",details:""}},onShow:function(){var e=this;t.getStorage({key:"lang",success:function(n){e.details=u.default[n.data],t.setNavigationBarTitle({title:u.default[n.data].title})}}),t.getStorage({key:"userInfo",success:function(t){console.log(t," at pages\\user\\security\\security.vue:50"),e.user=t.data}})}};e.default=r}).call(this,n("6e42")["default"])},"97b8":function(t,e,n){"use strict";n.r(e);var u=n("4d7b"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=a.a},a88c:function(t,e,n){"use strict";n.r(e);var u=n("400d"),a=n("97b8");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("36c8");var c=n("2877"),o=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=o.exports},d9e7:function(t,e,n){}},[["0b53","common/runtime","common/vendor"]]]);
});
require('pages/user/security/security.js');
__wxRoute = 'pages/user/language/language';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/language/language.js';

define('pages/user/language/language.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/language/language"],{"15da":function(t,e,a){"use strict";var n=a("dd92"),i=a.n(n);i.a},"58ca":function(t,e,a){"use strict";a.r(e);var n=a("d9b6"),i=a("e01d");for(var l in i)"default"!==l&&function(t){a.d(e,t,function(){return i[t]})}(l);a("15da");var u=a("2877"),o=Object(u["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},b2a6:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("3cb9"));function i(t){return t&&t.__esModule?t:{default:t}}var l={data:function(){return{list:[{id:"0",title:"中国",language:"zh"},{id:"1",title:"English",language:"en"},{id:"2",title:"日本語",language:"jp"},{id:"3",title:"한국어",language:"kor"},{id:"4",title:"Français",language:"fra"},{id:"5",title:"Español",language:"spa"},{id:"6",title:"ภาษาไทย",language:"th"},{id:"7",title:"عربي ،",language:"ara"},{id:"8",title:"русский язык",language:"ru"},{id:"9",title:"Português",language:"pt"},{id:"10",title:"Deutsch",language:"de"},{id:"11",title:"Italiano",language:"it"},{id:"12",title:"Ελληνικά",language:"el"},{id:"13",title:"Nederlands",language:"nl"},{id:"14",title:"Polski",language:"pl"},{id:"15",title:"Български",language:"bul"},{id:"16",title:"Eesti",language:"est"},{id:"17",title:"Dansk",language:"dan"},{id:"18",title:"Suomi",language:"fin"},{id:"19",title:"Česko",language:"cs"},{id:"20",title:"RomânăName",language:"rom"},{id:"21",title:"SlovenskoName",language:"slo"},{id:"22",title:"Svenska",language:"swe"},{id:"23",title:"MagyarName",language:"hu"},{id:"24",title:"ViệtName",language:"vie"}],current:"",info:{title:"Select Language",btn:"confirm"},showHeader:!0,statusHeight:0,headerPosition:"fixed",headerTop:null,statusTop:null}},onLoad:function(){var e=this;this.statusHeight=0,this.statusHeight=plus.navigator.getStatusbarHeight(),t.getStorage({key:"lang",success:function(t){e.info=n.default[t.data]}})},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},methods:{exit:function(){t.navigateBack({delta:1})},showType:function(t){this.tabbarIndex=t,this.list=this.orderList[t]},radioChange:function(t){this.current=t.detail.value},Switch:function(e){var a=this;t.request({url:"http://127.0.0.1/tp5/public/index/index/lang",data:{lang:e},success:function(t){console.log(t," at pages\\user\\language\\language.vue:107"),a.text="request success"}})},primary:function(){t.setStorage({key:"lang",data:this.current,success:function(){t.reLaunch({url:"../../tabBar/home/home"})}})},toPage:function(e){e?t.navigateTo({url:e}):t.showToast({title:"模板未包含此页面",icon:"none"})},clear:function(){t.showModal({content:"确定要清除缓存吗？",confirmText:"确定",cancelText:"取消",success:function(e){console.log(e," at pages\\user\\language\\language.vue:140"),e.confirm&&t.clearStorage(),e.cancel}})}}};e.default=l}).call(this,a("6e42")["default"])},d9b6:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},dd92:function(t,e,a){},e01d:function(t,e,a){"use strict";a.r(e);var n=a("b2a6"),i=a.n(n);for(var l in n)"default"!==l&&function(t){a.d(e,t,function(){return n[t]})}(l);e["default"]=i.a}},[["417e","common/runtime","common/vendor"]]]);
});
require('pages/user/language/language.js');
__wxRoute = 'pages/user/myQR/myQR';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/myQR/myQR.js';

define('pages/user/myQR/myQR.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/myQR/myQR"],{"42b3":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})},5131:function(t,n,e){"use strict";e.r(n);var o=e("543b"),i=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=i.a},"543b":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{tis:"保存到相册",showBtn:!1}},onLoad:function(){this.showBtn=!0},methods:{printscreen:function(){this.tis="正在保存";var n=this.$mp.page.$getAppWebview(),e=new plus.nativeObj.Bitmap;this.showBtn=!1,this.$nextTick(function(){var o=this;setTimeout(function(){n.draw(e,function(n){o.showBtn=!0,console.log("bitmap绘制图片成功"," at pages\\user\\myQR\\myQR.vue:45"),console.log("e: "+JSON.stringify(n)," at pages\\user\\myQR\\myQR.vue:46"),e.save("_doc/Qr.jpg",{overwrite:!0,quality:100},function(n){plus.gallery.save(n.target,function(n){t.showToast({title:"保存成功"}),o.tis="保存到相册",e.clear()},function(t){e.clear()})},function(t){console.log("保存图片失败："+JSON.stringify(t)," at pages\\user\\myQR\\myQR.vue:61")})},function(t){console.log("bitmap绘制图片失败："+JSON.stringify(t)," at pages\\user\\myQR\\myQR.vue:64")})},200)})}}};n.default=e}).call(this,e("6e42")["default"])},"6c7c":function(t,n,e){},a950:function(t,n,e){"use strict";e.r(n);var o=e("42b3"),i=e("5131");for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);e("c59a");var a=e("2877"),s=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);n["default"]=s.exports},c59a:function(t,n,e){"use strict";var o=e("6c7c"),i=e.n(o);i.a}},[["4333","common/runtime","common/vendor"]]]);
});
require('pages/user/myQR/myQR.js');
__wxRoute = 'pages/msg/msg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/msg/msg.js';

define('pages/msg/msg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/msg"],{"12a0":function(e,i,t){"use strict";t.r(i);var a=t("f95d"),m=t("f50f");for(var c in m)"default"!==c&&function(e){t.d(i,e,function(){return m[e]})}(c);t("20d3");var u=t("2877"),s=Object(u["a"])(m["default"],a["a"],a["b"],!1,null,null,null);i["default"]=s.exports},"20d3":function(e,i,t){"use strict";var a=t("e4b7"),m=t.n(a);m.a},ba18:function(e,i,t){"use strict";(function(e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t={data:function(){return{chatList:[{uid:1,username:"鲜果蔬专营店",face:"/static/img/im/face/face_1.jpg",time:"13:08",msg:"亲，20点前下单都是当天送达的",tisNum:1},{uid:2,username:"官店大欺客旗舰店",face:"/static/img/im/face/face_2.jpg",time:"13:05",msg:"问那么多干什么？不想买就滚~",tisNum:0},{uid:3,username:"妙不可言",face:"/static/img/im/face/face_3.jpg",time:"12:15",msg:"推荐一个商品呗？",tisNum:0},{uid:4,username:"茶叶专卖",face:"/static/img/im/face/face_4.jpg",time:"12:11",msg:"现在卖的都是未过青的茶哦",tisNum:0},{uid:5,username:"likeKiss客服",face:"/static/img/im/face/face_5.jpg",time:"12:10",msg:"你好，发福建快递多久送到的？",tisNum:0},{uid:6,username:"白开水",face:"/static/img/im/face/face_6.jpg",time:"12:10",msg:"在吗？",tisNum:0},{uid:7,username:"衣帽间的叹息",face:"/static/img/im/face/face_7.jpg",time:"11:56",msg:"新品上市，欢迎选购",tisNum:0},{uid:8,username:"景萧疏",face:"/static/img/im/face/face_8.jpg",time:"11:56",msg:"商品七天无理由退换的",tisNum:0},{uid:9,username:"文宁先生",face:"/static/img/im/face/face_9.jpg",time:"12:15",msg:"星期天再发货的",tisNum:0},{uid:10,username:"高端Chieh",face:"/static/img/im/face/face_10.jpg",time:"12:36",msg:"建议你直接先测量好尺码在选购的。",tisNum:0},{uid:11,username:"mode旗舰店",face:"/static/img/im/face/face_11.jpg",time:"12:40",msg:"新品5折，还有大量优惠券。",tisNum:0},{uid:12,username:"敏萘客服",face:"/static/img/im/face/face_12.jpg",time:"12:36",msg:"还没有用，等我明天早上试一下",tisNum:0},{uid:13,username:"春天里的花",face:"/static/img/im/face/face_13.jpg",time:"12:36",msg:"适用于成年人的，小孩不适用的",tisNum:0},{uid:14,username:"电脑外设专业户",face:"/static/img/im/face/face_13.jpg",time:"12:36",msg:"把上面的螺丝拆下来，把铁片撬开就能看见了",tisNum:0},{uid:15,username:"至善汽车用品",face:"/static/img/im/face/face_15.jpg",time:"12:36",msg:"这个产品是原车配件，完美装上的",tisNum:0}]}},onPullDownRefresh:function(){setTimeout(function(){e.stopPullDownRefresh()},1e3)},onLoad:function(){},methods:{toChat:function(i){e.navigateTo({url:"chat/chat?name="+i.username})}}};i.default=t}).call(this,t("6e42")["default"])},e4b7:function(e,i,t){},f50f:function(e,i,t){"use strict";t.r(i);var a=t("ba18"),m=t.n(a);for(var c in a)"default"!==c&&function(e){t.d(i,e,function(){return a[e]})}(c);i["default"]=m.a},f95d:function(e,i,t){"use strict";var a=function(){var e=this,i=e.$createElement;e._self._c},m=[];t.d(i,"a",function(){return a}),t.d(i,"b",function(){return m})}},[["67be","common/runtime","common/vendor"]]]);
});
require('pages/msg/msg.js');
__wxRoute = 'pages/msg/chat/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/msg/chat/chat.js';

define('pages/msg/chat/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/chat/chat"],{5734:function(i,g,t){"use strict";(function(i){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var t={data:function(){return{textMsg:"",scrollAnimation:!1,scrollTop:0,scrollToView:"",msgList:[],msgImgList:[],myuid:0,RECORDER:i.getRecorderManager(),isVoice:!1,voiceTis:"按住 说话",recordTis:"手指上滑 取消发送",recording:!1,willStop:!1,initPoint:{identifier:0,Y:0},recordTimer:null,recordLength:0,AUDIO:i.createInnerAudioContext(),playMsgid:null,VoiceTimer:null,showEmji:"",emojiList:[[{url:"100.gif",alt:"[微笑]"},{url:"101.gif",alt:"[伤心]"},{url:"102.gif",alt:"[美女]"},{url:"103.gif",alt:"[发呆]"},{url:"104.gif",alt:"[墨镜]"},{url:"105.gif",alt:"[哭]"},{url:"106.gif",alt:"[羞]"},{url:"107.gif",alt:"[哑]"},{url:"108.gif",alt:"[睡]"},{url:"109.gif",alt:"[哭]"},{url:"110.gif",alt:"[囧]"},{url:"111.gif",alt:"[怒]"},{url:"112.gif",alt:"[调皮]"},{url:"113.gif",alt:"[笑]"},{url:"114.gif",alt:"[惊讶]"},{url:"115.gif",alt:"[难过]"},{url:"116.gif",alt:"[酷]"},{url:"117.gif",alt:"[汗]"},{url:"118.gif",alt:"[抓狂]"},{url:"119.gif",alt:"[吐]"},{url:"120.gif",alt:"[笑]"},{url:"121.gif",alt:"[快乐]"},{url:"122.gif",alt:"[奇]"},{url:"123.gif",alt:"[傲]"}],[{url:"124.gif",alt:"[饿]"},{url:"125.gif",alt:"[累]"},{url:"126.gif",alt:"[吓]"},{url:"127.gif",alt:"[汗]"},{url:"128.gif",alt:"[高兴]"},{url:"129.gif",alt:"[闲]"},{url:"130.gif",alt:"[努力]"},{url:"131.gif",alt:"[骂]"},{url:"132.gif",alt:"[疑问]"},{url:"133.gif",alt:"[秘密]"},{url:"134.gif",alt:"[乱]"},{url:"135.gif",alt:"[疯]"},{url:"136.gif",alt:"[哀]"},{url:"137.gif",alt:"[鬼]"},{url:"138.gif",alt:"[打击]"},{url:"139.gif",alt:"[bye]"},{url:"140.gif",alt:"[汗]"},{url:"141.gif",alt:"[抠]"},{url:"142.gif",alt:"[鼓掌]"},{url:"143.gif",alt:"[糟糕]"},{url:"144.gif",alt:"[恶搞]"},{url:"145.gif",alt:"[什么]"},{url:"146.gif",alt:"[什么]"},{url:"147.gif",alt:"[累]"}],[{url:"148.gif",alt:"[看]"},{url:"149.gif",alt:"[难过]"},{url:"150.gif",alt:"[难过]"},{url:"151.gif",alt:"[坏]"},{url:"152.gif",alt:"[亲]"},{url:"153.gif",alt:"[吓]"},{url:"154.gif",alt:"[可怜]"},{url:"155.gif",alt:"[刀]"},{url:"156.gif",alt:"[水果]"},{url:"157.gif",alt:"[酒]"},{url:"158.gif",alt:"[篮球]"},{url:"159.gif",alt:"[乒乓]"},{url:"160.gif",alt:"[咖啡]"},{url:"161.gif",alt:"[美食]"},{url:"162.gif",alt:"[动物]"},{url:"163.gif",alt:"[鲜花]"},{url:"164.gif",alt:"[枯]"},{url:"165.gif",alt:"[唇]"},{url:"166.gif",alt:"[爱]"},{url:"167.gif",alt:"[分手]"},{url:"168.gif",alt:"[生日]"},{url:"169.gif",alt:"[电]"},{url:"170.gif",alt:"[炸弹]"},{url:"171.gif",alt:"[刀子]"}],[{url:"172.gif",alt:"[足球]"},{url:"173.gif",alt:"[瓢虫]"},{url:"174.gif",alt:"[翔]"},{url:"175.gif",alt:"[月亮]"},{url:"176.gif",alt:"[太阳]"},{url:"177.gif",alt:"[礼物]"},{url:"178.gif",alt:"[抱抱]"},{url:"179.gif",alt:"[拇指]"},{url:"180.gif",alt:"[贬低]"},{url:"181.gif",alt:"[握手]"},{url:"182.gif",alt:"[剪刀手]"},{url:"183.gif",alt:"[抱拳]"},{url:"184.gif",alt:"[勾引]"},{url:"185.gif",alt:"[拳头]"},{url:"186.gif",alt:"[小拇指]"},{url:"187.gif",alt:"[拇指八]"},{url:"188.gif",alt:"[食指]"},{url:"189.gif",alt:"[ok]"},{url:"190.gif",alt:"[情侣]"},{url:"191.gif",alt:"[爱心]"},{url:"192.gif",alt:"[蹦哒]"},{url:"193.gif",alt:"[颤抖]"},{url:"194.gif",alt:"[怄气]"},{url:"195.gif",alt:"[跳舞]"}],[{url:"196.gif",alt:"[发呆]"},{url:"197.gif",alt:"[背着]"},{url:"198.gif",alt:"[伸手]"},{url:"199.gif",alt:"[耍帅]"},{url:"200.png",alt:"[微笑]"},{url:"201.png",alt:"[生病]"},{url:"202.png",alt:"[哭泣]"},{url:"203.png",alt:"[吐舌]"},{url:"204.png",alt:"[迷糊]"},{url:"205.png",alt:"[瞪眼]"},{url:"206.png",alt:"[恐怖]"},{url:"207.png",alt:"[忧愁]"},{url:"208.png",alt:"[眨眉]"},{url:"209.png",alt:"[闭眼]"},{url:"210.png",alt:"[鄙视]"},{url:"211.png",alt:"[阴暗]"},{url:"212.png",alt:"[小鬼]"},{url:"213.png",alt:"[礼物]"},{url:"214.png",alt:"[拜佛]"},{url:"215.png",alt:"[力量]"},{url:"216.png",alt:"[金钱]"},{url:"217.png",alt:"[蛋糕]"},{url:"218.png",alt:"[彩带]"},{url:"219.png",alt:"[礼物]"}]],onlineEmoji:{"100.gif":"AbNQgA.gif","101.gif":"AbN3ut.gif","102.gif":"AbNM3d.gif","103.gif":"AbN8DP.gif","104.gif":"AbNljI.gif","105.gif":"AbNtUS.gif","106.gif":"AbNGHf.gif","107.gif":"AbNYE8.gif","108.gif":"AbNaCQ.gif","109.gif":"AbNN4g.gif","110.gif":"AbN0vn.gif","111.gif":"AbNd3j.gif","112.gif":"AbNsbV.gif","113.gif":"AbNwgs.gif","114.gif":"AbNrD0.gif","115.gif":"AbNDuq.gif","116.gif":"AbNg5F.gif","117.gif":"AbN6ET.gif","118.gif":"AbNcUU.gif","119.gif":"AbNRC4.gif","120.gif":"AbNhvR.gif","121.gif":"AbNf29.gif","122.gif":"AbNW8J.gif","123.gif":"AbNob6.gif","124.gif":"AbN5K1.gif","125.gif":"AbNHUO.gif","126.gif":"AbNIDx.gif","127.gif":"AbN7VK.gif","128.gif":"AbNb5D.gif","129.gif":"AbNX2d.gif","130.gif":"AbNLPe.gif","131.gif":"AbNjxA.gif","132.gif":"AbNO8H.gif","133.gif":"AbNxKI.gif","134.gif":"AbNzrt.gif","135.gif":"AbU9Vf.gif","136.gif":"AbUSqP.gif","137.gif":"AbUCa8.gif","138.gif":"AbUkGQ.gif","139.gif":"AbUFPg.gif","140.gif":"AbUPIS.gif","141.gif":"AbUZMn.gif","142.gif":"AbUExs.gif","143.gif":"AbUA2j.gif","144.gif":"AbUMIU.gif","145.gif":"AbUerq.gif","146.gif":"AbUKaT.gif","147.gif":"AbUmq0.gif","148.gif":"AbUuZV.gif","149.gif":"AbUliF.gif","150.gif":"AbU1G4.gif","151.gif":"AbU8z9.gif","152.gif":"AbU3RJ.gif","153.gif":"AbUYs1.gif","154.gif":"AbUJMR.gif","155.gif":"AbUadK.gif","156.gif":"AbUtqx.gif","157.gif":"AbUUZ6.gif","158.gif":"AbUBJe.gif","159.gif":"AbUdIO.gif","160.gif":"AbU0iD.gif","161.gif":"AbUrzd.gif","162.gif":"AbUDRH.gif","163.gif":"AbUyQA.gif","164.gif":"AbUWo8.gif","165.gif":"AbU6sI.gif","166.gif":"AbU2eP.gif","167.gif":"AbUcLt.gif","168.gif":"AbU4Jg.gif","169.gif":"AbURdf.gif","170.gif":"AbUhFS.gif","171.gif":"AbU5WQ.gif","172.gif":"AbULwV.gif","173.gif":"AbUIzj.gif","174.gif":"AbUTQs.gif","175.gif":"AbU7yn.gif","176.gif":"AbUqe0.gif","177.gif":"AbUHLq.gif","178.gif":"AbUOoT.gif","179.gif":"AbUvYF.gif","180.gif":"AbUjFU.gif","181.gif":"AbaSSJ.gif","182.gif":"AbUxW4.gif","183.gif":"AbaCO1.gif","184.gif":"Abapl9.gif","185.gif":"Aba9yR.gif","186.gif":"AbaFw6.gif","187.gif":"Abaiex.gif","188.gif":"AbakTK.gif","189.gif":"AbaZfe.png","190.gif":"AbaEFO.gif","191.gif":"AbaVYD.gif","192.gif":"AbamSH.gif","193.gif":"AbaKOI.gif","194.gif":"Abanld.gif","195.gif":"Abau6A.gif","196.gif":"AbaQmt.gif","197.gif":"Abal0P.gif","198.gif":"AbatpQ.gif","199.gif":"Aba1Tf.gif","200.png":"Aba8k8.png","201.png":"AbaGtS.png","202.png":"AbaJfg.png","203.png":"AbaNlj.png","204.png":"Abawmq.png","205.png":"AbaU6s.png","206.png":"AbaaXn.png","207.png":"Aba000.png","208.png":"AbarkT.png","209.png":"AbastU.png","210.png":"AbaB7V.png","211.png":"Abafn1.png","212.png":"Abacp4.png","213.png":"AbayhF.png","214.png":"Abag1J.png","215.png":"Aba2c9.png","216.png":"AbaRXR.png","217.png":"Aba476.png","218.png":"Abah0x.png","219.png":"Abdg58.png"}}},onLoad:function(g){var t=this;i.setNavigationBarTitle({title:g.name}),this.getMsgList(),this.AUDIO.onEnded(function(i){t.playMsgid=null}),this.RECORDER.onStart(function(i){t.recordBegin(i)}),this.RECORDER.onStop(function(i){t.recordEnd(i)})},methods:{getMsgList:function(){for(var i=[{id:0,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:"12:56",type:"text",msg:{content:"为什么温度会相差那么大？"}},{id:1,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:57",type:"text",msg:{content:"这个是有偏差的，两个温度相差十几二十度是很正常的，如果相差五十度，那即是质量问题了。"}},{id:2,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:59",type:"voice",msg:{url:"/static/voice/3.aac",length:"00:06"}},{id:3,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:"13:05",type:"voice",msg:{url:"/static/voice/2.mp3",length:"00:06"}},{id:4,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:"13:05",type:"img",msg:{url:"/static/img/goods/p10.jpg",w:200,h:200}},{id:5,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:59",type:"img",msg:{url:"/static/img/q.jpg",w:1920,h:1080}}],g=0;g<i.length;g++)"img"==i[g].type&&(i[g]=this.setPicSize(i[g]),console.log("list[i]: "+JSON.stringify(i[g])," at pages\\msg\\chat\\chat.vue:183"),this.msgImgList.push(i[g].msg.url));this.msgList=i,this.$nextTick(function(){this.scrollTop=9999,this.scrollAnimation=!0})},setPicSize:function(g){var t=i.upx2px(350),f=i.upx2px(350);if(g.msg.w>t||g.msg.h>f){var l=g.msg.w/g.msg.h;g.msg.w>g.msg.h?(g.msg.w=t,g.msg.h=g.msg.w/l):(g.msg.h=f,g.msg.w=g.msg.h*l)}return g},screenMsg:function(g){switch(g.uid!=this.myuid&&i.vibrateLong(),g.type){case"text":this.addTextMsg(g);break;case"voice":this.addVoiceMsg(g);break;case"img":this.addImgMsg(g);break}this.$nextTick(function(){this.scrollToView="msg"+g.id})},chooseEmoji:function(){this.showEmji="showEmoji"==this.showEmji?"hideEmoji":"showEmoji"},hideEmoji:function(){this.showEmji="showEmoji"==this.showEmji?"hideEmoji":""},addEmoji:function(i){this.textMsg+=i.alt},sendText:function(){if(this.hideEmoji(),this.textMsg){var i=this.replaceEmoji(this.textMsg),g={content:i};this.sendMsg(g,"text"),this.textMsg=""}},replaceEmoji:function(i){var g=this,t=i.replace(/\[([^(\]|\[)]*)\]/g,function(i,t){console.log("item: "+i," at pages\\msg\\chat\\chat.vue:257");for(var f=0;f<g.emojiList.length;f++)for(var l=g.emojiList[f],a=0;a<l.length;a++){var e=l[a];if(e.alt==i){var s="https://s2.ax1x.com/2019/04/12/",n='<img src="'+s+g.onlineEmoji[e.url]+'">';return console.log("imgstr: "+n," at pages\\msg\\chat\\chat.vue:266"),n}}});return'<div style="display: flex;align-items: center;">'+t+"</div>"},chooseImage:function(){var g=this;this.hideEmoji(),i.chooseImage({sizeType:["original","compressed"],success:function(t){for(var f=function(f){i.getImageInfo({src:t.tempFilePaths[f],success:function(i){console.log(i.width," at pages\\msg\\chat\\chat.vue:284"),console.log(i.height," at pages\\msg\\chat\\chat.vue:285");var l={url:t.tempFilePaths[f],w:i.width,h:i.height};g.sendMsg(l,"img")}})},l=0;l<t.tempFilePaths.length;l++)f(l)}})},sendMsg:function(i,g){var t=this,f=new Date,l=this.msgList[this.msgList.length-1].id;l++;var a={id:l,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:f.getHours()+":"+f.getMinutes(),type:g,msg:i};this.screenMsg(a),setTimeout(function(){l=t.msgList[t.msgList.length-1].id,l++,a={id:l,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:f.getHours()+":"+f.getMinutes(),type:g,msg:i},t.screenMsg(a)},3e3)},addTextMsg:function(i){this.msgList.push(i)},addVoiceMsg:function(i){this.msgList.push(i)},addImgMsg:function(i){i=this.setPicSize(i),this.msgImgList.push(i.msg.url),this.msgList.push(i)},showPic:function(g){i.previewImage({indicator:"none",current:g.msg.url,urls:this.msgImgList})},playVoice:function(i){this.playMsgid=i.id,this.AUDIO.src=i.msg.url,console.log("msg.msg.url: "+i.msg.url," at pages\\msg\\chat\\chat.vue:337"),this.AUDIO.play()},voiceBegin:function(i){i.touches.length>1||(this.initPoint.Y=i.touches[0].clientY,this.initPoint.identifier=i.touches[0].identifier,this.RECORDER.start({format:"aac"}))},recordBegin:function(i){var g=this;this.recording=!0,this.voiceTis="松开 结束",this.recordLength=0,this.recordTimer=setInterval(function(){g.recordLength++},1e3)},voiceCancel:function(){this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.willStop=!0,this.RECORDER.stop()},voiceIng:function(g){if(this.recording){var t=g.touches[0];this.initPoint.Y-t.clientY>=i.upx2px(100)?(this.willStop=!0,this.recordTis="松开手指 取消发送"):(this.willStop=!1,this.recordTis="手指上滑 取消发送")}},voiceEnd:function(i){this.recording&&(this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.RECORDER.stop())},recordEnd:function(i){if(clearInterval(this.recordTimer),this.willStop)console.log("取消发送录音"," at pages\\msg\\chat\\chat.vue:416");else{plus.io.resolveLocalFileSystemURL(i.tempFilePath,function(i){i.file(function(i){console.log(i.size+"--"+i.name," at pages\\msg\\chat\\chat.vue:399")})},function(i){alert("Resolve file URL failed: "+i.message)}),console.log("e: "+JSON.stringify(i)," at pages\\msg\\chat\\chat.vue:404");var g={length:0,url:i.tempFilePath},t=parseInt(this.recordLength/60),f=this.recordLength%60;t=t<10?"0"+t:t,f=f<10?"0"+f:f,g.length=t+":"+f,this.sendMsg(g,"voice")}this.willStop=!1},switchVoice:function(){this.hideEmoji(),this.isVoice=!this.isVoice},discard:function(){}}};g.default=t}).call(this,t("6e42")["default"])},"791e":function(i,g,t){"use strict";t.r(g);var f=t("5734"),l=t.n(f);for(var a in f)"default"!==a&&function(i){t.d(g,i,function(){return f[i]})}(a);g["default"]=l.a},"79aa":function(i,g,t){},a4db:function(i,g,t){"use strict";var f=t("79aa"),l=t.n(f);l.a},c544:function(i,g,t){"use strict";var f=function(){var i=this,g=i.$createElement;i._self._c},l=[];t.d(g,"a",function(){return f}),t.d(g,"b",function(){return l})},dda4:function(i,g,t){"use strict";t.r(g);var f=t("c544"),l=t("791e");for(var a in l)"default"!==a&&function(i){t.d(g,i,function(){return l[i]})}(a);t("a4db");var e=t("2877"),s=Object(e["a"])(l["default"],f["a"],f["b"],!1,null,null,null);g["default"]=s.exports}},[["00bf","common/runtime","common/vendor"]]]);
});
require('pages/msg/chat/chat.js');
__wxRoute = 'pages/user/coupon/coupon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/coupon/coupon.js';

define('pages/user/coupon/coupon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/coupon/coupon"],{"0c2a":function(t,e,i){},6674:function(t,e,i){"use strict";var n=i("0c2a"),o=i.n(n);o.a},"66ec":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},"891c":function(t,e,i){"use strict";i.r(e);var n=i("66ec"),o=i("9191");for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);i("6674");var r=i("2877"),u=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},9191:function(t,e,i){"use strict";i.r(e);var n=i("b28b"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=o.a},b28b:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{couponValidList:[{id:1,title:"日常用品立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"满50使用"},{id:2,title:"家用电器立减100元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"100",criteria:"满500使用"},{id:3,title:"全场立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"无门槛"},{id:4,title:"全场立减50元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"50",criteria:"满1000使用"}],couponinvalidList:[{id:1,title:"日常用品立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"满50使用"},{id:2,title:"家用电器立减100元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"100",criteria:"满500使用"},{id:3,title:"全场立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"无门槛"},{id:4,title:"全场立减50元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"50",criteria:"满1000使用"}],headerTop:0,typeClass:"valid",subState:"",theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){},methods:{switchType:function(e){var i=this;this.typeClass!=e&&(t.pageScrollTo({scrollTop:0,duration:0}),this.typeClass=e,this.subState=""==this.typeClass?"":"show"+e,setTimeout(function(){i.oldIndex=null,i.theIndex=null,i.subState="valid"==i.typeClass?"":i.subState},200))},touchStart:function(t,e){e.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[e.touches[0].pageX,e.touches[0].pageY])},touchMove:function(t,e){var i=this;if(e.touches.length>1)this.isStop=!0;else{var n=e.touches[0].pageX-this.initXY[0],o=e.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(n)<5||(Math.abs(o)>Math.abs(n)?this.isStop=!0:n<0?(this.theIndex=t,this.isStop=!0):n>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){i.oldIndex=null},150)))}},touchEnd:function(t,e){this.isStop=!1},deleteCoupon:function(t,e){for(var i=e.length,n=0;n<i;n++)if(t==e[n].id){e.splice(n,1);break}this.oldIndex=null,this.theIndex=null},discard:function(){}}};e.default=i}).call(this,i("6e42")["default"])}},[["907b","common/runtime","common/vendor"]]]);
});
require('pages/user/coupon/coupon.js');
__wxRoute = 'pages/shop/shop';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shop/shop.js';

define('pages/shop/shop.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop/shop"],{"0d6d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0}},onLoad:function(){this.statusHeight=0,this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()}};e.default=u},2382:function(t,e,n){"use strict";n.r(e);var u=n("0d6d"),a=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);e["default"]=a.a},"2bfe":function(t,e,n){"use strict";var u=n("8ebe"),a=n.n(u);a.a},"31d2":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},"7b3e":function(t,e,n){"use strict";n.r(e);var u=n("31d2"),a=n("2382");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("2bfe");var r=n("2877"),i=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=i.exports},"8ebe":function(t,e,n){}},[["21fe","common/runtime","common/vendor"]]]);
});
require('pages/shop/shop.js');
__wxRoute = 'pages/user/keep/keep';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/keep/keep.js';

define('pages/user/keep/keep.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/keep/keep"],{"2e81":function(t,e,n){"use strict";n.r(e);var i=n("b58d"),s=n("71b1");for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);n("e46c");var u=n("2877"),c=Object(u["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},"3bc9":function(t,e,n){},"46c6":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{goodsList:[{id:1,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:2,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:3,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1}],shopList:[{id:1,name:"冰鲜专卖店",img:"/static/img/shop/1.jpg"},{id:2,name:"果蔬天下",img:"/static/img/shop/2.jpg"},{id:3,name:"办公耗材用品店",img:"/static/img/shop/3.jpg"},{id:4,name:"天天看好书",img:"/static/img/shop/4.jpg"}],headerTop:0,typeClass:"goods",subState:"",theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){},methods:{switchType:function(e){var n=this;this.typeClass!=e&&(t.pageScrollTo({scrollTop:0,duration:0}),this.typeClass=e,this.subState=""==this.typeClass?"":"show"+e,setTimeout(function(){n.oldIndex=null,n.theIndex=null,n.subState="goods"==n.typeClass?"":n.subState},200))},touchStart:function(t,e){e.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[e.touches[0].pageX,e.touches[0].pageY])},touchMove:function(t,e){var n=this;if(e.touches.length>1)this.isStop=!0;else{var i=e.touches[0].pageX-this.initXY[0],s=e.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(i)<5||(Math.abs(s)>Math.abs(i)?this.isStop=!0:i<0?(this.theIndex=t,this.isStop=!0):i>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){n.oldIndex=null},150)))}},touchEnd:function(t,e){this.isStop=!1},deleteCoupon:function(t,e){for(var n=e.length,i=0;i<n;i++)if(t==e[i].id){e.splice(i,1);break}this.oldIndex=null,this.theIndex=null},discard:function(){}}};e.default=n}).call(this,n("6e42")["default"])},"71b1":function(t,e,n){"use strict";n.r(e);var i=n("46c6"),s=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=s.a},b58d:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},e46c:function(t,e,n){"use strict";var i=n("3bc9"),s=n.n(i);s.a}},[["59bb","common/runtime","common/vendor"]]]);
});
require('pages/user/keep/keep.js');
__wxRoute = 'pages/user/address/address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/address/address.js';

define('pages/user/address/address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/address/address"],{"04e0":function(e,t,a){"use strict";a.r(t);var d=a("71b9"),s=a.n(d);for(var i in d)"default"!==i&&function(e){a.d(t,e,function(){return d[e]})}(i);t["default"]=s.a},"2ffe":function(e,t,a){},"418b":function(e,t,a){"use strict";var d=function(){var e=this,t=e.$createElement;e._self._c},s=[];a.d(t,"a",function(){return d}),a.d(t,"b",function(){return s})},"71b9":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{isSelect:!1,addressList:[{id:1,name:"大黑哥",head:"大",tel:"18816881688",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!0},{id:2,name:"大黑哥",head:"大",tel:"15812341234",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深北小道2222号有名公寓502"},isDefault:!1},{id:3,name:"老大哥",head:"老",tel:"18155467897",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!1},{id:4,name:"王小妹",head:"王",tel:"13425654895",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!1}]}},onShow:function(){var t=this;e.getStorage({key:"delAddress",success:function(a){var d=t.addressList.length;if(a.data.hasOwnProperty("id"))for(var s=0;s<d;s++)if(t.addressList[s].id==a.data.id){t.addressList.splice(s,1);break}e.removeStorage({key:"delAddress"})}}),e.getStorage({key:"saveAddress",success:function(a){var d=t.addressList.length;if(a.data.hasOwnProperty("id")){for(var s=0;s<d;s++)if(t.addressList[s].id==a.data.id){t.addressList.splice(s,1,a.data);break}}else{var i=t.addressList[d-1];i++,a.data.id=i,t.addressList.push(a.data)}e.removeStorage({key:"saveAddress"})}})},onLoad:function(e){"select"==e.type&&(this.isSelect=!0)},methods:{edit:function(t){e.setStorage({key:"address",data:t,success:function(){e.navigateTo({url:"edit/edit?type=edit"})}})},add:function(){e.navigateTo({url:"edit/edit?type=add"})},select:function(t){this.isSelect&&e.setStorage({key:"selectAddress",data:t,success:function(){e.navigateBack()}})}}};t.default=a}).call(this,a("6e42")["default"])},dbc0:function(e,t,a){"use strict";var d=a("2ffe"),s=a.n(d);s.a},dc74:function(e,t,a){"use strict";a.r(t);var d=a("418b"),s=a("04e0");for(var i in s)"default"!==i&&function(e){a.d(t,e,function(){return s[e]})}(i);a("dbc0");var n=a("2877"),r=Object(n["a"])(s["default"],d["a"],d["b"],!1,null,null,null);t["default"]=r.exports}},[["9793","common/runtime","common/vendor"]]]);
});
require('pages/user/address/address.js');
__wxRoute = 'pages/user/address/edit/edit';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/address/edit/edit.js';

define('pages/user/address/edit/edit.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/address/edit/edit"],{1971:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"76db":function(e,t,i){"use strict";var n=i("c935"),a=i.n(n);a.a},bc30:function(e,t,i){"use strict";i.r(t);var n=i("1971"),a=i("f6c2");for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);i("76db");var o=i("2877"),c=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=c.exports},c935:function(e,t,i){},f6c2:function(e,t,i){"use strict";i.r(t);var n=i("f76e"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=a.a},f76e:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){return Promise.all([i.e("common/vendor"),i.e("components/mpvue-citypicker/mpvueCityPicker")]).then(i.bind(null,"fd85"))},a={components:{mpvueCityPicker:n},data:function(){return{editType:"edit",id:"",name:"",tel:"",detailed:"",isDefault:!1,cityPickerValue:[0,0,1],themeColor:"#007AFF",region:{label:"请点击选择地址",value:[],cityCode:""}}},methods:{onCancel:function(e){console.log(e," at pages\\user\\address\\edit\\edit.vue:81")},chooseCity:function(){this.$refs.mpvueCityPicker.show()},onConfirm:function(e){this.region=e,this.cityPickerValue=e.value},isDefaultChange:function(e){this.isDefault=e.detail.value},del:function(){var t=this;e.showModal({title:"删除提示",content:"你将删除这个收货地址",success:function(i){i.confirm?e.setStorage({key:"delAddress",data:{id:t.id},success:function(){e.navigateBack()}}):i.cancel&&console.log("用户点击取消"," at pages\\user\\address\\edit\\edit.vue:107")}})},save:function(){var t={name:this.name,head:this.name.substr(0,1),tel:this.tel,address:{region:this.region,detailed:this.detailed},isDefault:this.isDefault};"edit"==this.editType&&(t.id=this.id),t.name?t.tel?t.address.detailed?0!=t.address.region.value.length?(e.showLoading({title:"正在提交"}),setTimeout(function(){e.setStorage({key:"saveAddress",data:t,success:function(){e.hideLoading(),e.navigateBack()}})},300)):e.showToast({title:"请选择收件地址",icon:"none"}):e.showToast({title:"请输入收件人详细地址",icon:"none"}):e.showToast({title:"请输入收件人电话号码",icon:"none"}):e.showToast({title:"请输入收件人姓名",icon:"none"})}},onLoad:function(t){var i=this;this.editType=t.type,"edit"==t.type&&e.getStorage({key:"address",success:function(e){i.id=e.data.id,i.name=e.data.name,i.tel=e.data.tel,i.detailed=e.data.address.detailed,i.isDefault=e.data.isDefault,i.cityPickerValue=e.data.address.region.value,i.region=e.data.address.region}})},onBackPress:function(){if(this.$refs.mpvueCityPicker.showPicker)return this.$refs.mpvueCityPicker.pickerCancel(),!0},onUnload:function(){this.$refs.mpvueCityPicker.showPicker&&this.$refs.mpvueCityPicker.pickerCancel()}};t.default=a}).call(this,i("6e42")["default"])}},[["06cf","common/runtime","common/vendor"]]]);
});
require('pages/user/address/edit/edit.js');
__wxRoute = 'pages/user/deposit/deposit';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/deposit/deposit.js';

define('pages/user/deposit/deposit.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/deposit/deposit"],{"23ec":function(t,n,o){"use strict";var e=o("44d2"),i=o.n(e);i.a},"44d2":function(t,n,o){},"58d2":function(t,n,o){"use strict";o.r(n);var e=o("850f"),i=o("9f46");for(var u in i)"default"!==u&&function(t){o.d(n,t,function(){return i[t]})}(u);o("23ec");var a=o("2877"),s=Object(a["a"])(i["default"],e["a"],e["b"],!1,null,null,null);n["default"]=s.exports},"850f":function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){t.paytype="alipay"},t.e1=function(n){t.paytype="wxpay"})},i=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return i})},"9f46":function(t,n,o){"use strict";o.r(n);var e=o("c900"),i=o.n(e);for(var u in e)"default"!==u&&function(t){o.d(n,t,function(){return e[t]})}(u);n["default"]=i.a},c900:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{inputAmount:"",amountList:[10,50,100],paytype:"alipay"}},methods:{select:function(t){this.inputAmount=t},doDeposit:function(){var n=this;"NaN"!=parseFloat(this.inputAmount).toString()?this.inputAmount<=0?t.showToast({title:"请输入大于0的金额",icon:"none"}):parseFloat(this.inputAmount).toFixed(2)==parseFloat(this.inputAmount)?(t.showLoading({title:"支付中..."}),setTimeout(function(){t.hideLoading(),t.showToast({title:"支付成功"}),setTimeout(function(){t.redirectTo({url:"../../pay/success/success?amount="+n.inputAmount})},300)},700)):t.showToast({title:"最多只能输入两位小数哦~",icon:"none"}):t.showToast({title:"请输入正确金额",icon:"none"})}},onLoad:function(){}};n.default=o}).call(this,o("6e42")["default"])}},[["08ac","common/runtime","common/vendor"]]]);
});
require('pages/user/deposit/deposit.js');
__wxRoute = 'pages/pay/payment/payment';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pay/payment/payment.js';

define('pages/pay/payment/payment.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pay/payment/payment"],{"0312":function(t,e,n){"use strict";n.r(e);var a=n("1673"),o=n("7919");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("90e4");var r=n("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},1673:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.paytype="alipay"},t.e1=function(e){t.paytype="wxpay"})},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},7919:function(t,e,n){"use strict";n.r(e);var a=n("8f9d"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},"8f9d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{amount:0,orderName:"",paytype:"alipay"}},onLoad:function(e){var n=this;this.amount=parseFloat(e.amount).toFixed(2),t.getStorage({key:"paymentOrder",success:function(e){e.data.length>1?n.orderName="多商品合并支付":n.orderName=e.data[0].name,t.removeStorage({key:"paymentOrder"})}})},methods:{doDeposit:function(){var e=this;t.showLoading({title:"支付中..."}),setTimeout(function(){t.hideLoading(),t.showToast({title:"支付成功"}),setTimeout(function(){t.redirectTo({url:"../../pay/success/success?amount="+e.amount})},300)},700)}}};e.default=n}).call(this,n("6e42")["default"])},"90e4":function(t,e,n){"use strict";var a=n("fba8"),o=n.n(a);o.a},fba8:function(t,e,n){}},[["f012","common/runtime","common/vendor"]]]);
});
require('pages/pay/payment/payment.js');
__wxRoute = 'pages/pay/success/success';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pay/success/success.js';

define('pages/pay/success/success.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pay/success/success"],{"0098":function(t,n,u){"use strict";u.r(n);var e=u("a6c5"),a=u.n(e);for(var o in e)"default"!==o&&function(t){u.d(n,t,function(){return e[t]})}(o);n["default"]=a.a},"17f7":function(t,n,u){"use strict";u.r(n);var e=u("ff93"),a=u("0098");for(var o in a)"default"!==o&&function(t){u.d(n,t,function(){return a[t]})}(o);u("c268");var c=u("2877"),r=Object(c["a"])(a["default"],e["a"],e["b"],!1,null,null,null);n["default"]=r.exports},"1e40":function(t,n,u){},a6c5:function(t,n,u){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{amount:0}},onLoad:function(t){this.amount=parseFloat(t.amount).toFixed(2)},methods:{toUser:function(){t.switchTab({url:"/pages/tabBar/user"})}}};n.default=u}).call(this,u("6e42")["default"])},c268:function(t,n,u){"use strict";var e=u("1e40"),a=u.n(e);a.a},ff93:function(t,n,u){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},a=[];u.d(n,"a",function(){return e}),u.d(n,"b",function(){return a})}},[["7083","common/runtime","common/vendor"]]]);
});
require('pages/pay/success/success.js');
__wxRoute = 'pages/goods/ratings/ratings';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/ratings/ratings.js';

define('pages/goods/ratings/ratings.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/ratings/ratings"],{"02f2":function(e,t,n){"use strict";n.r(t);var a=n("511b"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a},"095c":function(e,t,n){"use strict";var a=n("72f6"),i=n.n(a);i.a},"511b":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{labelList:[{name:"全部",number:25,type:"all"},{name:"好评",number:23,type:"good"},{name:"中评",number:1,type:"secondary"},{name:"差评",number:1,type:"poor"},{name:"有图",number:12,type:"img"},{name:"视频",number:2,type:"video"},{name:"追加",number:2,type:"append"}],labelIndex:0,ratingsList:[{id:1,username:"大黑哥",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"good",first:{content:"好看，可以，不愧是专业的，才拿到手上就研究了半天才装上",img:["https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg","https://ae01.alicdn.com/kf/HTB1sL7hTjDpK1RjSZFrq6y78VXaw.jpg","https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg","https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],video:[{img:"https://ae01.alicdn.com/kf/HTB1AMEBTcfpK1RjSZFOq6y6nFXaK.jpg",path:"https://mp4.vjshi.com/2018-12-28/1083f3db90334f86e3fc3586b4472914.mp4"}]},append:{date:65,content:"用了一段时间，质量很好，体验很流畅，推荐购买",img:["https://ae01.alicdn.com/kf/HTB1dKZtTgHqK1RjSZFEq6AGMXXaS.jpg","https://ae01.alicdn.com/kf/HTB18h3oTmzqK1RjSZFjq6zlCFXap.jpg"],video:[{img:"https://ae01.alicdn.com/kf/HTB1AMEBTcfpK1RjSZFOq6y6nFXaK.jpg",path:"https://mp4.vjshi.com/2017-06-17/ed1d63669bea39f5ef078c4e194291d6.mp4"}]}},{id:2,username:"小黑狗",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"secondary",first:{content:"好评，看图",img:["https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg","https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],video:[]}},{id:3,username:"小黑狗",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"poor",first:{content:"好评，看图",img:["https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg","https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],video:[]}},{id:3,username:"小黑狗",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"secondary",first:{content:"系统默认好评",img:[],video:[]}}],videoDirection:0,showFullscreenBtn:!0,showPlayBtn:!0,isPlayVideo:!0,videoSrc:""}},onReady:function(t){this.videoContext=e.createVideoContext("myVideo")},onPullDownRefresh:function(){setTimeout(function(){e.stopPullDownRefresh()},1e3)},onReachBottom:function(){e.showToast({title:"触发上拉加载"})},methods:{loadRatings:function(t){this.labelIndex=t,e.showToast({title:"切换评论列表"})},playVideo:function(e){this.videoSrc=e,this.$nextTick(function(){this.videoContext.requestFullScreen({direction:0})})},stopPlayVideo:function(){this.videoContext.pause()},videoPause:function(){this.videoSrc=""},viderFullscreen:function(e){e.detail.fullScreen?this.videoContext.play():this.stopPlayVideo()},showBigImg:function(t,n){e.previewImage({current:t,urls:n})}}};t.default=n}).call(this,n("6e42")["default"])},"72f6":function(e,t,n){},"8c09":function(e,t,n){"use strict";n.r(t);var a=n("dcb2"),i=n("02f2");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("095c");var c=n("2877"),s=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=s.exports},dcb2:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})}},[["4f47","common/runtime","common/vendor"]]]);
});
require('pages/goods/ratings/ratings.js');
__wxRoute = 'pages/shop/check/check';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shop/check/check.js';

define('pages/shop/check/check.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop/check/check"],{"02b3":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},s=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return s})},"37b1":function(e,t,a){"use strict";a.r(t);var n=a("02b3"),s=a("b1b6");for(var u in s)"default"!==u&&function(e){a.d(t,e,function(){return s[e]})}(u);a("4b40");var o=a("2877"),c=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);t["default"]=c.exports},"435c":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a("657d"));function s(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,index:"0",license:"",Assurface:"",national:"",handAssurface:"",nationArray:[],date:"",indate:"请选择"}},onLoad:function(){var t=this;console.log(n.default," at pages\\shop\\check\\check.vue:114"),e.redirectTo({url:"../shop"}),e.getStorage({key:"lang",success:function(e){t.nationArray=n.default[e.data]}}),this.statusHeight=0,this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},methods:{exit:function(){e.navigateBack({delta:1})},uploadImg:function(t){var a=this;console.log(t," at pages\\shop\\check\\check.vue:141"),e.chooseImage({sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){0==t&&(a.license=e.tempFilePaths[0]),1==t&&(a.Assurface=e.tempFilePaths[0]),2==t&&(a.national=e.tempFilePaths[0]),3==t&&(a.handAssurface=e.tempFilePaths[0])}})}}};t.default=u}).call(this,a("6e42")["default"])},"4b40":function(e,t,a){"use strict";var n=a("8796"),s=a.n(n);s.a},8796:function(e,t,a){},b1b6:function(e,t,a){"use strict";a.r(t);var n=a("435c"),s=a.n(n);for(var u in n)"default"!==u&&function(e){a.d(t,e,function(){return n[e]})}(u);t["default"]=s.a}},[["e103","common/runtime","common/vendor"]]]);
});
require('pages/shop/check/check.js');
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

