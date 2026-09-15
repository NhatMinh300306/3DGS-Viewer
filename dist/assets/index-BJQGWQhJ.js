(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const lo="160",ii={ROTATE:0,DOLLY:1,PAN:2},si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pc=0,ko=1,Lc=2,Ol=1,Fc=2,En=3,mn=0,Ht=1,$t=2,Nn=0,zn=1,Go=2,Vo=3,Wo=4,Nl=5,jn=100,Bc=101,Uc=102,Xo=103,qo=104,Oc=200,Nc=201,zc=202,Hc=203,ts=204,ns=205,kc=206,Gc=207,Vc=208,Wc=209,Xc=210,qc=211,Qc=212,Yc=213,Kc=214,jc=0,Zc=1,Jc=2,qs=3,$c=4,ed=5,td=6,nd=7,zl=0,id=1,sd=2,Hn=0,rd=1,od=2,ad=3,ld=4,cd=5,dd=6,Hl=300,Li=301,Fi=302,Jr=303,$r=304,nr=306,eo=1e3,cn=1001,to=1002,bt=1003,Qo=1004,fr=1005,Zt=1006,ud=1007,is=1008,bn=1009,hd=1010,fd=1011,co=1012,kl=1013,qt=1014,hn=1015,Bi=1016,Gl=1017,Vl=1018,$n=1020,pd=1021,Nt=1023,md=1024,gd=1025,kn=1026,Ui=1027,Ad=1028,uo=1029,Sd=1030,Wl=1031,Yi=1033,pr=33776,mr=33777,gr=33778,Ar=33779,Yo=35840,Ko=35841,jo=35842,Zo=35843,Xl=36196,Jo=37492,$o=37496,ea=37808,ta=37809,na=37810,ia=37811,sa=37812,ra=37813,oa=37814,aa=37815,la=37816,ca=37817,da=37818,ua=37819,ha=37820,fa=37821,Sr=36492,pa=36494,ma=36495,xd=36283,ga=36284,Aa=36285,Sa=36286,ql=3e3,ei=3001,_d=3200,vd=3201,yd=0,Ed=1,en="",wt="srgb",wn="srgb-linear",ho="display-p3",ir="display-p3-linear",Qs="linear",rt="srgb",Ys="rec709",Ks="p3",ri=7680,xa=519,Md=512,Cd=513,Td=514,Ql=515,bd=516,wd=517,Rd=518,Id=519,_a=35044,Dd=35048,va="300 es",no=1035,Tn=2e3,js=2001;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ks=Math.PI/180,io=180/Math.PI;function as(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[r&255]+It[r>>8&255]+It[r>>16&255]+It[r>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Pt(r,e,t){return Math.max(e,Math.min(t,r))}function Pd(r,e){return(r%e+e)%e}function xr(r,e,t){return(1-t)*r+t*e}function ya(r){return(r&r-1)===0&&r!==0}function so(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Gi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function zt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Yl={DEG2RAD:ks};class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,i,s,a,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],A=n[8],g=i[0],m=i[3],p=i[6],S=i[1],x=i[4],v=i[7],E=i[2],M=i[5],_=i[8];return s[0]=a*g+o*S+l*E,s[3]=a*m+o*x+l*M,s[6]=a*p+o*v+l*_,s[1]=c*g+d*S+u*E,s[4]=c*m+d*x+u*M,s[7]=c*p+d*v+u*_,s[2]=h*g+f*S+A*E,s[5]=h*m+f*x+A*M,s[8]=h*p+f*v+A*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*s*d+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*s,f=c*s-a*l,A=t*u+n*h+i*f;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/A;return e[0]=u*g,e[1]=(i*c-d*n)*g,e[2]=(o*n-i*a)*g,e[3]=h*g,e[4]=(d*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_r.makeScale(e,t)),this}rotate(e){return this.premultiply(_r.makeRotation(-e)),this}translate(e,t){return this.premultiply(_r.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _r=new Be;function Kl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Zs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ld(){const r=Zs("canvas");return r.style.display="block",r}const Ea={};function Ki(r){r in Ea||(Ea[r]=!0,console.warn(r))}const Ma=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ca=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),us={[wn]:{transfer:Qs,primaries:Ys,toReference:r=>r,fromReference:r=>r},[wt]:{transfer:rt,primaries:Ys,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ir]:{transfer:Qs,primaries:Ks,toReference:r=>r.applyMatrix3(Ca),fromReference:r=>r.applyMatrix3(Ma)},[ho]:{transfer:rt,primaries:Ks,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ca),fromReference:r=>r.applyMatrix3(Ma).convertLinearToSRGB()}},Fd=new Set([wn,ir]),tt={enabled:!0,_workingColorSpace:wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Fd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=us[e].toReference,i=us[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return us[r].primaries},getTransfer:function(r){return r===en?Qs:us[r].transfer}};function wi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let oi;class jl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=Zs("canvas")),oi.width=e.width,oi.height=e.height;const n=oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=wi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bd=0;class Zl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=as(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(yr(i[a].image)):s.push(yr(i[a]))}else s=yr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function yr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ud=0;class kt extends ni{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=cn,i=cn,s=Zt,a=is,o=Nt,l=bn,c=kt.DEFAULT_ANISOTROPY,d=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=as(),this.name="",this.source=new Zl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===ei?wt:en),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eo:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case to:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eo:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case to:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===wt?ei:ql}set encoding(e){Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ei?wt:en}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Hl;kt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,i=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],A=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-g)<.01&&Math.abs(A-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+g)<.1&&Math.abs(A+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(f+1)/2,E=(p+1)/2,M=(d+h)/4,_=(u+g)/4,D=(A+m)/4;return x>v&&x>E?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=M/n,s=_/n):v>E?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=M/i,s=D/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=_/s,i=D/s),this.set(n,i,s,t),this}let S=Math.sqrt((m-A)*(m-A)+(u-g)*(u-g)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(m-A)/S,this.y=(u-g)/S,this.z=(h-d)/S,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Od extends ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ei?wt:en),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new kt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends Od{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jl extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nd extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ct{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],d=n[i+2],u=n[i+3];const h=s[a+0],f=s[a+1],A=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=A,e[t+3]=g;return}if(u!==g||l!==h||c!==f||d!==A){let m=1-o;const p=l*h+c*f+d*A+u*g,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),M=Math.atan2(E,p*S);m=Math.sin(m*M)/E,o=Math.sin(o*M)/E}const v=o*S;if(l=l*m+h*v,c=c*m+f*v,d=d*m+A*v,u=u*m+g*v,m===1-o){const E=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=E,c*=E,d*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],u=s[a],h=s[a+1],f=s[a+2],A=s[a+3];return e[t]=o*A+d*u+l*f-c*h,e[t+1]=l*A+d*h+c*u-o*f,e[t+2]=c*A+d*f+o*h-l*u,e[t+3]=d*A-o*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),u=o(s/2),h=l(n/2),f=l(i/2),A=l(s/2);switch(a){case"XYZ":this._x=h*d*u+c*f*A,this._y=c*f*u-h*d*A,this._z=c*d*A+h*f*u,this._w=c*d*u-h*f*A;break;case"YXZ":this._x=h*d*u+c*f*A,this._y=c*f*u-h*d*A,this._z=c*d*A-h*f*u,this._w=c*d*u+h*f*A;break;case"ZXY":this._x=h*d*u-c*f*A,this._y=c*f*u+h*d*A,this._z=c*d*A+h*f*u,this._w=c*d*u-h*f*A;break;case"ZYX":this._x=h*d*u-c*f*A,this._y=c*f*u+h*d*A,this._z=c*d*A-h*f*u,this._w=c*d*u+h*f*A;break;case"YZX":this._x=h*d*u+c*f*A,this._y=c*f*u+h*d*A,this._z=c*d*A-h*f*u,this._w=c*d*u-h*f*A;break;case"XZY":this._x=h*d*u-c*f*A,this._y=c*f*u-h*d*A,this._z=c*d*A+h*f*u,this._w=c*d*u+h*f*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+o+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(d-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+i*c-s*l,this._y=i*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-i*o,this._w=a*d-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=a*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ta.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ta.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),d=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*d,this.y=n+l*d+o*c-s*u,this.z=i+l*u+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Er.copy(this).projectOnVector(e),this.sub(Er)}reflect(e){return this.sub(Er.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Er=new I,Ta=new ct;class fn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(s,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hs.copy(n.boundingBox)),hs.applyMatrix4(e.matrixWorld),this.union(hs)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vi),fs.subVectors(this.max,Vi),ai.subVectors(e.a,Vi),li.subVectors(e.b,Vi),ci.subVectors(e.c,Vi),Rn.subVectors(li,ai),In.subVectors(ci,li),Xn.subVectors(ai,ci);let t=[0,-Rn.z,Rn.y,0,-In.z,In.y,0,-Xn.z,Xn.y,Rn.z,0,-Rn.x,In.z,0,-In.x,Xn.z,0,-Xn.x,-Rn.y,Rn.x,0,-In.y,In.x,0,-Xn.y,Xn.x,0];return!Mr(t,ai,li,ci,fs)||(t=[1,0,0,0,1,0,0,0,1],!Mr(t,ai,li,ci,fs))?!1:(ps.crossVectors(Rn,In),t=[ps.x,ps.y,ps.z],Mr(t,ai,li,ci,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const An=[new I,new I,new I,new I,new I,new I,new I,new I],rn=new I,hs=new fn,ai=new I,li=new I,ci=new I,Rn=new I,In=new I,Xn=new I,Vi=new I,fs=new I,ps=new I,qn=new I;function Mr(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){qn.fromArray(r,s);const o=i.x*Math.abs(qn.x)+i.y*Math.abs(qn.y)+i.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),d=n.dot(qn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const zd=new fn,Wi=new I,Cr=new I;class fo{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wi.subVectors(e,this.center);const t=Wi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Wi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wi.copy(e.center).add(Cr)),this.expandByPoint(Wi.copy(e.center).sub(Cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new I,Tr=new I,ms=new I,Dn=new I,br=new I,gs=new I,wr=new I;let $l=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Tr.copy(e).add(t).multiplyScalar(.5),ms.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(Tr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ms),o=Dn.dot(this.direction),l=-Dn.dot(ms),c=Dn.lengthSq(),d=Math.abs(1-a*a);let u,h,f,A;if(d>0)if(u=a*l-o,h=a*o-l,A=s*d,u>=0)if(h>=-A)if(h<=A){const g=1/d;u*=g,h*=g,f=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=s,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h<=-A?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c):h<=A?(u=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Tr).addScaledVector(ms,h),f}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,i,s){br.subVectors(t,e),gs.subVectors(n,e),wr.crossVectors(br,gs);let a=this.direction.dot(wr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,e);const l=o*this.direction.dot(gs.crossVectors(Dn,gs));if(l<0)return null;const c=o*this.direction.dot(br.cross(Dn));if(c<0||l+c>a)return null;const d=-o*Dn.dot(wr);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ue{constructor(e,t,n,i,s,a,o,l,c,d,u,h,f,A,g,m){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,d,u,h,f,A,g,m)}set(e,t,n,i,s,a,o,l,c,d,u,h,f,A,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=A,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/di.setFromMatrixColumn(e,0).length(),s=1/di.setFromMatrixColumn(e,1).length(),a=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=a*d,f=a*u,A=o*d,g=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+A*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=A+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,f=l*u,A=c*d,g=c*u;t[0]=h+g*o,t[4]=A*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=f*o-A,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,f=l*u,A=c*d,g=c*u;t[0]=h-g*o,t[4]=-a*u,t[8]=A+f*o,t[1]=f+A*o,t[5]=a*d,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,f=a*u,A=o*d,g=o*u;t[0]=l*d,t[4]=A*c-f,t[8]=h*c+g,t[1]=l*u,t[5]=g*c+h,t[9]=f*c-A,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,A=o*l,g=o*c;t[0]=l*d,t[4]=g-h*u,t[8]=A*u+f,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*u+A,t[10]=h-g*u}else if(e.order==="XZY"){const h=a*l,f=a*c,A=o*l,g=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+g,t[5]=a*d,t[9]=f*u-A,t[2]=A*u-f,t[6]=o*d,t[10]=g*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hd,e,kd)}lookAt(e,t,n){const i=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Pn.crossVectors(n,Vt),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Pn.crossVectors(n,Vt)),Pn.normalize(),As.crossVectors(Vt,Pn),i[0]=Pn.x,i[4]=As.x,i[8]=Vt.x,i[1]=Pn.y,i[5]=As.y,i[9]=Vt.y,i[2]=Pn.z,i[6]=As.z,i[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],A=n[2],g=n[6],m=n[10],p=n[14],S=n[3],x=n[7],v=n[11],E=n[15],M=i[0],_=i[4],D=i[8],y=i[12],C=i[1],P=i[5],F=i[9],N=i[13],R=i[2],L=i[6],O=i[10],V=i[14],X=i[3],H=i[7],q=i[11],J=i[15];return s[0]=a*M+o*C+l*R+c*X,s[4]=a*_+o*P+l*L+c*H,s[8]=a*D+o*F+l*O+c*q,s[12]=a*y+o*N+l*V+c*J,s[1]=d*M+u*C+h*R+f*X,s[5]=d*_+u*P+h*L+f*H,s[9]=d*D+u*F+h*O+f*q,s[13]=d*y+u*N+h*V+f*J,s[2]=A*M+g*C+m*R+p*X,s[6]=A*_+g*P+m*L+p*H,s[10]=A*D+g*F+m*O+p*q,s[14]=A*y+g*N+m*V+p*J,s[3]=S*M+x*C+v*R+E*X,s[7]=S*_+x*P+v*L+E*H,s[11]=S*D+x*F+v*O+E*q,s[15]=S*y+x*N+v*V+E*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],A=e[3],g=e[7],m=e[11],p=e[15];return A*(+s*l*u-i*c*u-s*o*h+n*c*h+i*o*f-n*l*f)+g*(+t*l*f-t*c*h+s*a*h-i*a*f+i*c*d-s*l*d)+m*(+t*c*u-t*o*f-s*a*u+n*a*f+s*o*d-n*c*d)+p*(-i*o*d-t*l*u+t*o*h+i*a*u-n*a*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],A=e[12],g=e[13],m=e[14],p=e[15],S=u*m*c-g*h*c+g*l*f-o*m*f-u*l*p+o*h*p,x=A*h*c-d*m*c-A*l*f+a*m*f+d*l*p-a*h*p,v=d*g*c-A*u*c+A*o*f-a*g*f-d*o*p+a*u*p,E=A*u*l-d*g*l-A*o*h+a*g*h+d*o*m-a*u*m,M=t*S+n*x+i*v+s*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const _=1/M;return e[0]=S*_,e[1]=(g*h*s-u*m*s-g*i*f+n*m*f+u*i*p-n*h*p)*_,e[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*_,e[3]=(u*l*s-o*h*s-u*i*c+n*h*c+o*i*f-n*l*f)*_,e[4]=x*_,e[5]=(d*m*s-A*h*s+A*i*f-t*m*f-d*i*p+t*h*p)*_,e[6]=(A*l*s-a*m*s-A*i*c+t*m*c+a*i*p-t*l*p)*_,e[7]=(a*h*s-d*l*s+d*i*c-t*h*c-a*i*f+t*l*f)*_,e[8]=v*_,e[9]=(A*u*s-d*g*s-A*n*f+t*g*f+d*n*p-t*u*p)*_,e[10]=(a*g*s-A*o*s+A*n*c-t*g*c-a*n*p+t*o*p)*_,e[11]=(d*o*s-a*u*s-d*n*c+t*u*c+a*n*f-t*o*f)*_,e[12]=E*_,e[13]=(d*g*i-A*u*i+A*n*h-t*g*h-d*n*m+t*u*m)*_,e[14]=(A*o*i-a*g*i-A*n*l+t*g*l+a*n*m-t*o*m)*_,e[15]=(a*u*i-d*o*i+d*n*l-t*u*l-a*n*h+t*o*h)*_,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*a,0,c*l-i*o,d*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,u=o+o,h=s*c,f=s*d,A=s*u,g=a*d,m=a*u,p=o*u,S=l*c,x=l*d,v=l*u,E=n.x,M=n.y,_=n.z;return i[0]=(1-(g+p))*E,i[1]=(f+v)*E,i[2]=(A-x)*E,i[3]=0,i[4]=(f-v)*M,i[5]=(1-(h+p))*M,i[6]=(m+S)*M,i[7]=0,i[8]=(A+x)*_,i[9]=(m-S)*_,i[10]=(1-(h+g))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=di.set(i[0],i[1],i[2]).length();const a=di.set(i[4],i[5],i[6]).length(),o=di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],on.copy(this);const c=1/s,d=1/a,u=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=d,on.elements[5]*=d,on.elements[6]*=d,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,t.setFromRotationMatrix(on),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Tn){const l=this.elements,c=2*s/(t-e),d=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i);let f,A;if(o===Tn)f=-(a+s)/(a-s),A=-2*a*s/(a-s);else if(o===js)f=-a/(a-s),A=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=A,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Tn){const l=this.elements,c=1/(t-e),d=1/(n-i),u=1/(a-s),h=(t+e)*c,f=(n+i)*d;let A,g;if(o===Tn)A=(a+s)*u,g=-2*u;else if(o===js)A=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-A,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const di=new I,on=new Ue,Hd=new I(0,0,0),kd=new I(1,1,1),Pn=new I,As=new I,Vt=new I,ba=new Ue,wa=new ct;class sr{constructor(e=0,t=0,n=0,i=sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],d=i[9],u=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ba.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ba,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wa.setFromEuler(this),this.setFromQuaternion(wa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sr.DEFAULT_ORDER="XYZ";class ec{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gd=0;const Ra=new I,ui=new ct,xn=new Ue,Ss=new I,Xi=new I,Vd=new I,Wd=new ct,Ia=new I(1,0,0),Da=new I(0,1,0),Pa=new I(0,0,1),Xd={type:"added"},qd={type:"removed"};class xt extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new I,t=new sr,n=new ct,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Be}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(Ia,e)}rotateY(e){return this.rotateOnAxis(Da,e)}rotateZ(e){return this.rotateOnAxis(Pa,e)}translateOnAxis(e,t){return Ra.copy(e).applyQuaternion(this.quaternion),this.position.add(Ra.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ia,e)}translateY(e){return this.translateOnAxis(Da,e)}translateZ(e){return this.translateOnAxis(Pa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ss.copy(e):Ss.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Xi,Ss,this.up):xn.lookAt(Ss,Xi,this.up),this.quaternion.setFromRotationMatrix(xn),i&&(xn.extractRotation(i.matrixWorld),ui.setFromRotationMatrix(xn),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,e,Vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,Wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),f=a(e.animations),A=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),A.length>0&&(n.nodes=A)}return n.object=i,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new I(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new I,_n=new I,Rr=new I,vn=new I,hi=new I,fi=new I,La=new I,Ir=new I,Dr=new I,Pr=new I;let xs=!1;class ln{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),an.subVectors(e,t),i.cross(an);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){an.subVectors(i,t),_n.subVectors(n,t),Rr.subVectors(e,t);const a=an.dot(an),o=an.dot(_n),l=an.dot(Rr),c=_n.dot(_n),d=_n.dot(Rr),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,f=(c*l-o*d)*h,A=(a*d-o*l)*h;return s.set(1-f-A,A,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getUV(e,t,n,i,s,a,o,l){return xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xs=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static isFrontFacing(e,t,n,i){return an.subVectors(n,t),_n.subVectors(e,t),an.cross(_n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),an.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xs=!0),ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;hi.subVectors(i,n),fi.subVectors(s,n),Ir.subVectors(e,n);const l=hi.dot(Ir),c=fi.dot(Ir);if(l<=0&&c<=0)return t.copy(n);Dr.subVectors(e,i);const d=hi.dot(Dr),u=fi.dot(Dr);if(d>=0&&u<=d)return t.copy(i);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(hi,a);Pr.subVectors(e,s);const f=hi.dot(Pr),A=fi.dot(Pr);if(A>=0&&f<=A)return t.copy(s);const g=f*c-l*A;if(g<=0&&c>=0&&A<=0)return o=c/(c-A),t.copy(n).addScaledVector(fi,o);const m=d*A-f*u;if(m<=0&&u-d>=0&&f-A>=0)return La.subVectors(s,i),o=(u-d)/(u-d+(f-A)),t.copy(i).addScaledVector(La,o);const p=1/(m+g+h);return a=g*p,o=h*p,t.copy(n).addScaledVector(hi,a).addScaledVector(fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Lr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=Pd(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Lr(a,s,e+1/3),this.g=Lr(a,s,e),this.b=Lr(a,s,e-1/3)}return tt.toWorkingColorSpace(this,i),this}setStyle(e,t=wt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const n=tc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return tt.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Pt(Dt.r*255,0,255))*65536+Math.round(Pt(Dt.g*255,0,255))*256+Math.round(Pt(Dt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Dt.copy(this),t);const n=Dt.r,i=Dt.g,s=Dt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=wt){tt.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,i=Dt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(_s);const n=xr(Ln.h,_s.h,t),i=xr(Ln.s,_s.s,t),s=xr(Ln.l,_s.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Ke;Ke.NAMES=tc;let Qd=0;class rr extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=as(),this.name="",this.type="Material",this.blending=zn,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ts,this.blendDst=ns,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zn&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ts&&(n.blendSrc=this.blendSrc),this.blendDst!==ns&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ti extends rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cn=Yd();function Yd(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;(c&8388608)===0;)c<<=1,d-=8388608;c&=-8388609,d+=947912704,s[l]=c|d}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Kd(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Pt(r,-65504,65504),Cn.floatView[0]=r;const e=Cn.uint32View[0],t=e>>23&511;return Cn.baseTable[t]+((e&8388607)>>Cn.shiftTable[t])}function jd(r){const e=r>>10;return Cn.uint32View[0]=Cn.mantissaTable[Cn.offsetTable[e]+(r&1023)]+Cn.exponentTable[e],Cn.floatView[0]}const ss={toHalfFloat:Kd,fromHalfFloat:jd},mt=new I,vs=new ye;class tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_a,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),i=zt(i,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_a&&(e.usage=this.usage),e}}class nc extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ic extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yt extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zd=0;const jt=new Ue,Fr=new xt,pi=new I,Wt=new fn,qi=new fn,Mt=new I;class sn extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kl(e)?ic:nc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return Fr.lookAt(e),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];qi.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Wt.min,qi.min),Wt.expandByPoint(Mt),Mt.addVectors(Wt.max,qi.max),Wt.expandByPoint(Mt)):(Wt.expandByPoint(qi.min),Wt.expandByPoint(qi.max))}Wt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Mt.fromBufferAttribute(o,c),l&&(pi.fromBufferAttribute(e,c),Mt.add(pi)),i=Math.max(i,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let C=0;C<o;C++)c[C]=new I,d[C]=new I;const u=new I,h=new I,f=new I,A=new ye,g=new ye,m=new ye,p=new I,S=new I;function x(C,P,F){u.fromArray(i,C*3),h.fromArray(i,P*3),f.fromArray(i,F*3),A.fromArray(a,C*2),g.fromArray(a,P*2),m.fromArray(a,F*2),h.sub(u),f.sub(u),g.sub(A),m.sub(A);const N=1/(g.x*m.y-m.x*g.y);isFinite(N)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(N),S.copy(f).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(N),c[C].add(p),c[P].add(p),c[F].add(p),d[C].add(S),d[P].add(S),d[F].add(S))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let C=0,P=v.length;C<P;++C){const F=v[C],N=F.start,R=F.count;for(let L=N,O=N+R;L<O;L+=3)x(n[L+0],n[L+1],n[L+2])}const E=new I,M=new I,_=new I,D=new I;function y(C){_.fromArray(s,C*3),D.copy(_);const P=c[C];E.copy(P),E.sub(_.multiplyScalar(_.dot(P))).normalize(),M.crossVectors(D,P);const N=M.dot(d[C])<0?-1:1;l[C*4]=E.x,l[C*4+1]=E.y,l[C*4+2]=E.z,l[C*4+3]=N}for(let C=0,P=v.length;C<P;++C){const F=v[C],N=F.start,R=F.count;for(let L=N,O=N+R;L<O;L+=3)y(n[L+0]),y(n[L+1]),y(n[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new I,s=new I,a=new I,o=new I,l=new I,c=new I,d=new I,u=new I;if(e)for(let h=0,f=e.count;h<f;h+=3){const A=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,A),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),d.subVectors(a,s),u.subVectors(i,s),d.cross(u),o.fromBufferAttribute(n,A),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(A,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,s),u.subVectors(i,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let f=0,A=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*d;for(let p=0;p<d;p++)h[A++]=c[f++]}return new tn(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],u=s[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fa=new Ue,Qn=new $l,ys=new fo,Ba=new I,mi=new I,gi=new I,Ai=new I,Br=new I,Es=new I,Ms=new ye,Cs=new ye,Ts=new ye,Ua=new I,Oa=new I,Na=new I,bs=new I,ws=new I;class gt extends xt{constructor(e=new sn,t=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Es.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],u=s[l];d!==0&&(Br.fromBufferAttribute(u,e),a?Es.addScaledVector(Br,d):Es.addScaledVector(Br.sub(t),d))}t.add(Es)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(s),Qn.copy(e.ray).recast(e.near),!(ys.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(ys,Ba)===null||Qn.origin.distanceToSquared(Ba)>(e.far-e.near)**2))&&(Fa.copy(s).invert(),Qn.copy(e.ray).applyMatrix4(Fa),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let A=0,g=h.length;A<g;A++){const m=h[A],p=a[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,E=x;v<E;v+=3){const M=o.getX(v),_=o.getX(v+1),D=o.getX(v+2);i=Rs(this,p,e,n,c,d,u,M,_,D),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const A=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=A,p=g;m<p;m+=3){const S=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);i=Rs(this,a,e,n,c,d,u,S,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let A=0,g=h.length;A<g;A++){const m=h[A],p=a[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,E=x;v<E;v+=3){const M=v,_=v+1,D=v+2;i=Rs(this,p,e,n,c,d,u,M,_,D),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const A=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=A,p=g;m<p;m+=3){const S=m,x=m+1,v=m+2;i=Rs(this,a,e,n,c,d,u,S,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Jd(r,e,t,n,i,s,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===mn,o),l===null)return null;ws.copy(o),ws.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ws);return c<t.near||c>t.far?null:{distance:c,point:ws.clone(),object:r}}function Rs(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,mi),r.getVertexPosition(l,gi),r.getVertexPosition(c,Ai);const d=Jd(r,e,t,n,mi,gi,Ai,bs);if(d){i&&(Ms.fromBufferAttribute(i,o),Cs.fromBufferAttribute(i,l),Ts.fromBufferAttribute(i,c),d.uv=ln.getInterpolation(bs,mi,gi,Ai,Ms,Cs,Ts,new ye)),s&&(Ms.fromBufferAttribute(s,o),Cs.fromBufferAttribute(s,l),Ts.fromBufferAttribute(s,c),d.uv1=ln.getInterpolation(bs,mi,gi,Ai,Ms,Cs,Ts,new ye),d.uv2=d.uv1),a&&(Ua.fromBufferAttribute(a,o),Oa.fromBufferAttribute(a,l),Na.fromBufferAttribute(a,c),d.normal=ln.getInterpolation(bs,mi,gi,Ai,Ua,Oa,Na,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new I,materialIndex:0};ln.getNormal(mi,gi,Ai,u.normal),d.face=u}return d}class zi extends sn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],u=[];let h=0,f=0;A("z","y","x",-1,-1,n,t,e,a,s,0),A("z","y","x",1,-1,n,t,-e,a,s,1),A("x","z","y",1,1,e,n,t,i,a,2),A("x","z","y",1,-1,e,n,-t,i,a,3),A("x","y","z",1,-1,e,t,n,i,s,4),A("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(u,2));function A(g,m,p,S,x,v,E,M,_,D,y){const C=v/_,P=E/D,F=v/2,N=E/2,R=M/2,L=_+1,O=D+1;let V=0,X=0;const H=new I;for(let q=0;q<O;q++){const J=q*P-N;for(let $=0;$<L;$++){const W=$*C-F;H[g]=W*S,H[m]=J*x,H[p]=R,c.push(H.x,H.y,H.z),H[g]=0,H[m]=0,H[p]=M>0?1:-1,d.push(H.x,H.y,H.z),u.push($/_),u.push(1-q/D),V+=1}}for(let q=0;q<D;q++)for(let J=0;J<_;J++){const $=h+J+L*q,W=h+J+L*(q+1),Z=h+(J+1)+L*(q+1),ie=h+(J+1)+L*q;l.push($,W,ie),l.push(W,Z,ie),X+=6}o.addGroup(f,X,y),f+=X,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(r){const e={};for(let t=0;t<r.length;t++){const n=Oi(r[t]);for(const i in n)e[i]=n[i]}return e}function $d(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function sc(r){return r.getRenderTarget()===null?r.outputColorSpace:tt.workingColorSpace}const eu={clone:Oi,merge:Bt};var tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tu,this.fragmentShader=nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=$d(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rc extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Jt extends rc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return io*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ks*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=-90,xi=1;class iu extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Jt(Si,xi,e,t);i.layers=this.layers,this.add(i);const s=new Jt(Si,xi,e,t);s.layers=this.layers,this.add(s);const a=new Jt(Si,xi,e,t);a.layers=this.layers,this.add(a);const o=new Jt(Si,xi,e,t);o.layers=this.layers,this.add(o);const l=new Jt(Si,xi,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Si,xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=A,n.texture.needsPMREMUpdate=!0}}class oc extends kt{constructor(e,t,n,i,s,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Li,super(e,t,n,i,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class su extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ei?wt:en),this.texture=new oc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new zi(5,5,5),s=new nn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Nn});s.uniforms.tEquirect.value=t;const a=new gt(i,s),o=t.minFilter;return t.minFilter===is&&(t.minFilter=Zt),new iu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Ur=new I,ru=new I,ou=new Be;class Un{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ur.subVectors(n,t).cross(ru.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ur),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ou.getNormalMatrix(e),i=this.coplanarPoint(Ur).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new fo,Is=new I;class ac{constructor(e=new Un,t=new Un,n=new Un,i=new Un,s=new Un,a=new Un){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],d=i[5],u=i[6],h=i[7],f=i[8],A=i[9],g=i[10],m=i[11],p=i[12],S=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-s,h-c,m-f,v-p).normalize(),n[1].setComponents(l+s,h+c,m+f,v+p).normalize(),n[2].setComponents(l+a,h+d,m+A,v+S).normalize(),n[3].setComponents(l-a,h-d,m-A,v-S).normalize(),n[4].setComponents(l-o,h-u,m-g,v-x).normalize(),t===Tn)n[5].setComponents(l+o,h+u,m+g,v+x).normalize();else if(t===js)n[5].setComponents(o,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(e){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Is.x=i.normal.x>0?e.max.x:e.min.x,Is.y=i.normal.y>0?e.max.y:e.min.y,Is.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lc(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function au(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,d){const u=c.array,h=c.usage,f=u.byteLength,A=r.createBuffer();r.bindBuffer(d,A),r.bufferData(d,u,h),c.onUploadCallback();let g;if(u instanceof Float32Array)g=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=r.SHORT;else if(u instanceof Uint32Array)g=r.UNSIGNED_INT;else if(u instanceof Int32Array)g=r.INT;else if(u instanceof Int8Array)g=r.BYTE;else if(u instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:A,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,d,u){const h=d.array,f=d._updateRange,A=d.updateRanges;if(r.bindBuffer(u,c),f.count===-1&&A.length===0&&r.bufferSubData(u,0,h),A.length!==0){for(let g=0,m=A.length;g<m;g++){const p=A[g];t?r.bufferSubData(u,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):r.bufferSubData(u,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}f.count!==-1&&(t?r.bufferSubData(u,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):r.bufferSubData(u,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(r.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,d));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,d),u.version=c.version}}return{get:a,remove:o,update:l}}class rs extends sn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,u=e/o,h=t/l,f=[],A=[],g=[],m=[];for(let p=0;p<d;p++){const S=p*h-a;for(let x=0;x<c;x++){const v=x*u-s;A.push(v,-S,0),g.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const x=S+c*p,v=S+c*(p+1),E=S+1+c*(p+1),M=S+1+c*p;f.push(x,v,M),f.push(v,E,M)}this.setIndex(f),this.setAttribute("position",new Yt(A,3)),this.setAttribute("normal",new Yt(g,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}var lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,du=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Au=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_u=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Du=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ou=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nu="gl_FragColor = linearToOutputTexel( gl_FragColor );",zu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Hu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ku=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ju=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ju=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$u=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,th=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ih=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ah=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ch=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ph=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ah=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_h=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Eh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Mh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ch=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Th=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ih=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ph=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Oh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Wh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$h=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ef=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ff=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Af=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ef=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,If=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Df=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:lu,alphahash_pars_fragment:cu,alphamap_fragment:du,alphamap_pars_fragment:uu,alphatest_fragment:hu,alphatest_pars_fragment:fu,aomap_fragment:pu,aomap_pars_fragment:mu,batching_pars_vertex:gu,batching_vertex:Au,begin_vertex:Su,beginnormal_vertex:xu,bsdfs:_u,iridescence_fragment:vu,bumpmap_pars_fragment:yu,clipping_planes_fragment:Eu,clipping_planes_pars_fragment:Mu,clipping_planes_pars_vertex:Cu,clipping_planes_vertex:Tu,color_fragment:bu,color_pars_fragment:wu,color_pars_vertex:Ru,color_vertex:Iu,common:Du,cube_uv_reflection_fragment:Pu,defaultnormal_vertex:Lu,displacementmap_pars_vertex:Fu,displacementmap_vertex:Bu,emissivemap_fragment:Uu,emissivemap_pars_fragment:Ou,colorspace_fragment:Nu,colorspace_pars_fragment:zu,envmap_fragment:Hu,envmap_common_pars_fragment:ku,envmap_pars_fragment:Gu,envmap_pars_vertex:Vu,envmap_physical_pars_fragment:th,envmap_vertex:Wu,fog_vertex:Xu,fog_pars_vertex:qu,fog_fragment:Qu,fog_pars_fragment:Yu,gradientmap_pars_fragment:Ku,lightmap_fragment:ju,lightmap_pars_fragment:Zu,lights_lambert_fragment:Ju,lights_lambert_pars_fragment:$u,lights_pars_begin:eh,lights_toon_fragment:nh,lights_toon_pars_fragment:ih,lights_phong_fragment:sh,lights_phong_pars_fragment:rh,lights_physical_fragment:oh,lights_physical_pars_fragment:ah,lights_fragment_begin:lh,lights_fragment_maps:ch,lights_fragment_end:dh,logdepthbuf_fragment:uh,logdepthbuf_pars_fragment:hh,logdepthbuf_pars_vertex:fh,logdepthbuf_vertex:ph,map_fragment:mh,map_pars_fragment:gh,map_particle_fragment:Ah,map_particle_pars_fragment:Sh,metalnessmap_fragment:xh,metalnessmap_pars_fragment:_h,morphcolor_vertex:vh,morphnormal_vertex:yh,morphtarget_pars_vertex:Eh,morphtarget_vertex:Mh,normal_fragment_begin:Ch,normal_fragment_maps:Th,normal_pars_fragment:bh,normal_pars_vertex:wh,normal_vertex:Rh,normalmap_pars_fragment:Ih,clearcoat_normal_fragment_begin:Dh,clearcoat_normal_fragment_maps:Ph,clearcoat_pars_fragment:Lh,iridescence_pars_fragment:Fh,opaque_fragment:Bh,packing:Uh,premultiplied_alpha_fragment:Oh,project_vertex:Nh,dithering_fragment:zh,dithering_pars_fragment:Hh,roughnessmap_fragment:kh,roughnessmap_pars_fragment:Gh,shadowmap_pars_fragment:Vh,shadowmap_pars_vertex:Wh,shadowmap_vertex:Xh,shadowmask_pars_fragment:qh,skinbase_vertex:Qh,skinning_pars_vertex:Yh,skinning_vertex:Kh,skinnormal_vertex:jh,specularmap_fragment:Zh,specularmap_pars_fragment:Jh,tonemapping_fragment:$h,tonemapping_pars_fragment:ef,transmission_fragment:tf,transmission_pars_fragment:nf,uv_pars_fragment:sf,uv_pars_vertex:rf,uv_vertex:of,worldpos_vertex:af,background_vert:lf,background_frag:cf,backgroundCube_vert:df,backgroundCube_frag:uf,cube_vert:hf,cube_frag:ff,depth_vert:pf,depth_frag:mf,distanceRGBA_vert:gf,distanceRGBA_frag:Af,equirect_vert:Sf,equirect_frag:xf,linedashed_vert:_f,linedashed_frag:vf,meshbasic_vert:yf,meshbasic_frag:Ef,meshlambert_vert:Mf,meshlambert_frag:Cf,meshmatcap_vert:Tf,meshmatcap_frag:bf,meshnormal_vert:wf,meshnormal_frag:Rf,meshphong_vert:If,meshphong_frag:Df,meshphysical_vert:Pf,meshphysical_frag:Lf,meshtoon_vert:Ff,meshtoon_frag:Bf,points_vert:Uf,points_frag:Of,shadow_vert:Nf,shadow_frag:zf,sprite_vert:Hf,sprite_frag:kf},he={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},un={basic:{uniforms:Bt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Bt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Bt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Bt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Bt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Bt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Bt([he.points,he.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Bt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Bt([he.common,he.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Bt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Bt([he.sprite,he.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Bt([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Bt([he.lights,he.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};un.physical={uniforms:Bt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Ds={r:0,b:0,g:0};function Gf(r,e,t,n,i,s,a){const o=new Ke(0);let l=s===!0?0:1,c,d,u=null,h=0,f=null;function A(m,p){let S=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),S=!0);const v=r.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===nr)?(d===void 0&&(d=new gt(new zi(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Oi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(E,M,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=tt.getTransfer(x.colorSpace)!==rt,(u!==x||h!==x.version||f!==r.toneMapping)&&(d.material.needsUpdate=!0,u=x,h=x.version,f=r.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new gt(new rs(2,2),new nn({name:"BackgroundMaterial",uniforms:Oi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=tt.getTransfer(x.colorSpace)!==rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Ds,sc(r)),n.buffers.color.setClear(Ds.r,Ds.g,Ds.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:A}}function Vf(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,d=!1;function u(R,L,O,V,X){let H=!1;if(a){const q=g(V,O,L);c!==q&&(c=q,f(c.object)),H=p(R,V,O,X),H&&S(R,V,O,X)}else{const q=L.wireframe===!0;(c.geometry!==V.id||c.program!==O.id||c.wireframe!==q)&&(c.geometry=V.id,c.program=O.id,c.wireframe=q,H=!0)}X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),(H||d)&&(d=!1,D(R,L,O,V),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function A(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function g(R,L,O){const V=O.wireframe===!0;let X=o[R.id];X===void 0&&(X={},o[R.id]=X);let H=X[L.id];H===void 0&&(H={},X[L.id]=H);let q=H[V];return q===void 0&&(q=m(h()),H[V]=q),q}function m(R){const L=[],O=[],V=[];for(let X=0;X<i;X++)L[X]=0,O[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:V,object:R,attributes:{},index:null}}function p(R,L,O,V){const X=c.attributes,H=L.attributes;let q=0;const J=O.getAttributes();for(const $ in J)if(J[$].location>=0){const Z=X[$];let ie=H[$];if(ie===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),Z===void 0||Z.attribute!==ie||ie&&Z.data!==ie.data)return!0;q++}return c.attributesNum!==q||c.index!==V}function S(R,L,O,V){const X={},H=L.attributes;let q=0;const J=O.getAttributes();for(const $ in J)if(J[$].location>=0){let Z=H[$];Z===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor));const ie={};ie.attribute=Z,Z&&Z.data&&(ie.data=Z.data),X[$]=ie,q++}c.attributes=X,c.attributesNum=q,c.index=V}function x(){const R=c.newAttributes;for(let L=0,O=R.length;L<O;L++)R[L]=0}function v(R){E(R,0)}function E(R,L){const O=c.newAttributes,V=c.enabledAttributes,X=c.attributeDivisors;O[R]=1,V[R]===0&&(r.enableVertexAttribArray(R),V[R]=1),X[R]!==L&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,L),X[R]=L)}function M(){const R=c.newAttributes,L=c.enabledAttributes;for(let O=0,V=L.length;O<V;O++)L[O]!==R[O]&&(r.disableVertexAttribArray(O),L[O]=0)}function _(R,L,O,V,X,H,q){q===!0?r.vertexAttribIPointer(R,L,O,X,H):r.vertexAttribPointer(R,L,O,V,X,H)}function D(R,L,O,V){if(n.isWebGL2===!1&&(R.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=V.attributes,H=O.getAttributes(),q=L.defaultAttributeValues;for(const J in H){const $=H[J];if($.location>=0){let W=X[J];if(W===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(W=R.instanceColor)),W!==void 0){const Z=W.normalized,ie=W.itemSize,oe=t.get(W);if(oe===void 0)continue;const le=oe.buffer,Ee=oe.type,Me=oe.bytesPerElement,ge=n.isWebGL2===!0&&(Ee===r.INT||Ee===r.UNSIGNED_INT||W.gpuType===kl);if(W.isInterleavedBufferAttribute){const De=W.data,k=De.stride,He=W.offset;if(De.isInstancedInterleavedBuffer){for(let Ae=0;Ae<$.locationSize;Ae++)E($.location+Ae,De.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Ae=0;Ae<$.locationSize;Ae++)v($.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,le);for(let Ae=0;Ae<$.locationSize;Ae++)_($.location+Ae,ie/$.locationSize,Ee,Z,k*Me,(He+ie/$.locationSize*Ae)*Me,ge)}else{if(W.isInstancedBufferAttribute){for(let De=0;De<$.locationSize;De++)E($.location+De,W.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let De=0;De<$.locationSize;De++)v($.location+De);r.bindBuffer(r.ARRAY_BUFFER,le);for(let De=0;De<$.locationSize;De++)_($.location+De,ie/$.locationSize,Ee,Z,ie*Me,ie/$.locationSize*De*Me,ge)}}else if(q!==void 0){const Z=q[J];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv($.location,Z);break;case 3:r.vertexAttrib3fv($.location,Z);break;case 4:r.vertexAttrib4fv($.location,Z);break;default:r.vertexAttrib1fv($.location,Z)}}}}M()}function y(){F();for(const R in o){const L=o[R];for(const O in L){const V=L[O];for(const X in V)A(V[X].object),delete V[X];delete L[O]}delete o[R]}}function C(R){if(o[R.id]===void 0)return;const L=o[R.id];for(const O in L){const V=L[O];for(const X in V)A(V[X].object),delete V[X];delete L[O]}delete o[R.id]}function P(R){for(const L in o){const O=o[L];if(O[R.id]===void 0)continue;const V=O[R.id];for(const X in V)A(V[X].object),delete V[X];delete O[R.id]}}function F(){N(),d=!0,c!==l&&(c=l,f(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:N,dispose:y,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:v,disableUnusedAttributes:M}}function Wf(r,e,t,n){const i=n.isWebGL2;let s;function a(d){s=d}function o(d,u){r.drawArrays(s,d,u),t.update(u,s,1)}function l(d,u,h){if(h===0)return;let f,A;if(i)f=r,A="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[A](s,d,u,h),t.update(u,s,h)}function c(d,u,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let A=0;A<h;A++)this.render(d[A],u[A]);else{f.multiDrawArraysWEBGL(s,d,0,u,0,h);let A=0;for(let g=0;g<h;g++)A+=u[g];t.update(A,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Xf(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),A=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,v=a||e.has("OES_texture_float"),E=x&&v,M=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:A,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:M}}function qf(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Un,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||n!==0||i;return i=h,n=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const A=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||A===null||A.length===0||s&&!m)s?d(null):c();else{const S=s?0:n,x=S*4;let v=p.clippingState||null;l.value=v,v=d(A,h,x,f);for(let E=0;E!==x;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,A){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,A!==!0||m===null){const p=f+g*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==g;++x,v+=4)a.copy(u[x]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Qf(r){let e=new WeakMap;function t(a,o){return o===Jr?a.mapping=Li:o===$r&&(a.mapping=Fi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Jr||o===$r)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new su(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class po extends rc{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ci=4,za=[.125,.215,.35,.446,.526,.582],Zn=20,Or=new po,Ha=new Ke;let Nr=null,zr=0,Hr=0;const Kn=(1+Math.sqrt(5))/2,_i=1/Kn,ka=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Kn,_i),new I(0,Kn,-_i),new I(_i,0,Kn),new I(-_i,0,Kn),new I(Kn,_i,0),new I(-Kn,_i,0)];class Ga{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Nr=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nr,zr,Hr),e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nr=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Bi,format:Nt,colorSpace:wn,depthBuffer:!1},i=Va(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Va(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yf(s)),this._blurMaterial=Kf(s,e,t)}return i}_compileMaterial(e){const t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,Or)}_sceneToCubeUV(e,t,n,i){const o=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(Ha),d.toneMapping=Hn,d.autoClear=!1;const f=new ti({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),A=new gt(new zi,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Ha),g=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Ps(i,S*x,p>2?x:0,x,x),d.setRenderTarget(i),g&&d.render(A,o),d.render(e,o)}A.geometry.dispose(),A.material.dispose(),d.toneMapping=h,d.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Li||e.mapping===Fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wa());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ps(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Or)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ka[(i-1)%ka.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new gt(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,A=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Zn-1),g=s/A,m=isFinite(s)?1+Math.floor(d*g):Zn;m>Zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zn}`);const p=[];let S=0;for(let _=0;_<Zn;++_){const D=_/g,y=Math.exp(-D*D/2);p.push(y),_===0?S+=y:_<m&&(S+=2*y)}for(let _=0;_<p.length;_++)p[_]=p[_]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=A,h.mipInt.value=x-n;const v=this._sizeLods[i],E=3*v*(i>x-Ci?i-x+Ci:0),M=4*(this._cubeSize-v);Ps(t,E,M,3*v,2*v),l.setRenderTarget(t),l.render(u,Or)}}function Yf(r){const e=[],t=[],n=[];let i=r;const s=r-Ci+1+za.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Ci?l=za[a-r+Ci-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,A=6,g=3,m=2,p=1,S=new Float32Array(g*A*f),x=new Float32Array(m*A*f),v=new Float32Array(p*A*f);for(let M=0;M<f;M++){const _=M%3*2/3-1,D=M>2?0:-1,y=[_,D,0,_+2/3,D,0,_+2/3,D+1,0,_,D,0,_+2/3,D+1,0,_,D+1,0];S.set(y,g*A*M),x.set(h,m*A*M);const C=[M,M,M,M,M,M];v.set(C,p*A*M)}const E=new sn;E.setAttribute("position",new tn(S,g)),E.setAttribute("uv",new tn(x,m)),E.setAttribute("faceIndex",new tn(v,p)),e.push(E),i>Ci&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Va(r,e,t){const n=new Gn(r,e,t);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Kf(r,e,t){const n=new Float32Array(Zn),i=new I(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Wa(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Xa(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function mo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jf(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Jr||l===$r,d=l===Li||l===Fi;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Ga(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||d&&u&&i(u)){t===null&&(t=new Ga(r));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Zf(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jf(r,e,t,n){const i={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const A in h.attributes)e.remove(h.attributes[A]);for(const A in h.morphAttributes){const g=h.morphAttributes[A];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}h.removeEventListener("dispose",a),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const A in h)e.update(h[A],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const A in f){const g=f[A];for(let m=0,p=g.length;m<p;m++)e.update(g[m],r.ARRAY_BUFFER)}}function c(u){const h=[],f=u.index,A=u.attributes.position;let g=0;if(f!==null){const S=f.array;g=f.version;for(let x=0,v=S.length;x<v;x+=3){const E=S[x+0],M=S[x+1],_=S[x+2];h.push(E,M,M,_,_,E)}}else if(A!==void 0){const S=A.array;g=A.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const E=x+0,M=x+1,_=x+2;h.push(E,M,M,_,_,E)}}else return;const m=new(Kl(h)?ic:nc)(h,1);m.version=g;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function d(u){const h=s.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function $f(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function d(f,A){r.drawElements(s,A,o,f*l),t.update(A,s,1)}function u(f,A,g){if(g===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,A,o,f*l,g),t.update(A,s,g)}function h(f,A,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<g;p++)this.render(f[p]/l,A[p]);else{m.multiDrawElementsWEBGL(s,A,0,o,f,0,g);let p=0;for(let S=0;S<g;S++)p+=A[S];t.update(p,s,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=u,this.renderMultiDraw=h}function ep(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function tp(r,e){return r[0]-e[0]}function np(r,e){return Math.abs(e[1])-Math.abs(r[1])}function ip(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new At,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,u){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const A=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=A!==void 0?A.length:0;let m=s.get(d);if(m===void 0||m.count!==g){let L=function(){N.dispose(),s.delete(d),d.removeEventListener("dispose",L)};var f=L;m!==void 0&&m.texture.dispose();const x=d.morphAttributes.position!==void 0,v=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],_=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let y=0;x===!0&&(y=1),v===!0&&(y=2),E===!0&&(y=3);let C=d.attributes.position.count*y,P=1;C>e.maxTextureSize&&(P=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const F=new Float32Array(C*P*4*g),N=new Jl(F,C,P,g);N.type=hn,N.needsUpdate=!0;const R=y*4;for(let O=0;O<g;O++){const V=M[O],X=_[O],H=D[O],q=C*P*4*O;for(let J=0;J<V.count;J++){const $=J*R;x===!0&&(a.fromBufferAttribute(V,J),F[q+$+0]=a.x,F[q+$+1]=a.y,F[q+$+2]=a.z,F[q+$+3]=0),v===!0&&(a.fromBufferAttribute(X,J),F[q+$+4]=a.x,F[q+$+5]=a.y,F[q+$+6]=a.z,F[q+$+7]=0),E===!0&&(a.fromBufferAttribute(H,J),F[q+$+8]=a.x,F[q+$+9]=a.y,F[q+$+10]=a.z,F[q+$+11]=H.itemSize===4?a.w:1)}}m={count:g,texture:N,size:new ye(C,P)},s.set(d,m),d.addEventListener("dispose",L)}let p=0;for(let x=0;x<h.length;x++)p+=h[x];const S=d.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",S),u.getUniforms().setValue(r,"morphTargetInfluences",h),u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const A=h===void 0?0:h.length;let g=n[d.id];if(g===void 0||g.length!==A){g=[];for(let v=0;v<A;v++)g[v]=[v,0];n[d.id]=g}for(let v=0;v<A;v++){const E=g[v];E[0]=v,E[1]=h[v]}g.sort(np);for(let v=0;v<8;v++)v<A&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(tp);const m=d.morphAttributes.position,p=d.morphAttributes.normal;let S=0;for(let v=0;v<8;v++){const E=o[v],M=E[0],_=E[1];M!==Number.MAX_SAFE_INTEGER&&_?(m&&d.getAttribute("morphTarget"+v)!==m[M]&&d.setAttribute("morphTarget"+v,m[M]),p&&d.getAttribute("morphNormal"+v)!==p[M]&&d.setAttribute("morphNormal"+v,p[M]),i[v]=_,S+=_):(m&&d.hasAttribute("morphTarget"+v)===!0&&d.deleteAttribute("morphTarget"+v),p&&d.hasAttribute("morphNormal"+v)===!0&&d.deleteAttribute("morphNormal"+v),i[v]=0)}const x=d.morphTargetsRelative?1:1-S;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function sp(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class go extends kt{constructor(e,t,n,i,s,a,o,l,c,d){if(d=d!==void 0?d:kn,d!==kn&&d!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===kn&&(n=qt),n===void 0&&d===Ui&&(n=$n),super(null,i,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const cc=new kt,dc=new go(1,1);dc.compareFunction=Ql;const uc=new Jl,hc=new Nd,fc=new oc,qa=[],Qa=[],Ya=new Float32Array(16),Ka=new Float32Array(9),ja=new Float32Array(4);function Hi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=qa[i];if(s===void 0&&(s=new Float32Array(i),qa[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function _t(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function vt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function or(r,e){let t=Qa[e];t===void 0&&(t=new Int32Array(e),Qa[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function rp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function op(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;r.uniform2fv(this.addr,e),vt(t,e)}}function ap(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;r.uniform3fv(this.addr,e),vt(t,e)}}function lp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;r.uniform4fv(this.addr,e),vt(t,e)}}function cp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;ja.set(n),r.uniformMatrix2fv(this.addr,!1,ja),vt(t,n)}}function dp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Ka.set(n),r.uniformMatrix3fv(this.addr,!1,Ka),vt(t,n)}}function up(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Ya.set(n),r.uniformMatrix4fv(this.addr,!1,Ya),vt(t,n)}}function hp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function fp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;r.uniform2iv(this.addr,e),vt(t,e)}}function pp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;r.uniform3iv(this.addr,e),vt(t,e)}}function mp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;r.uniform4iv(this.addr,e),vt(t,e)}}function gp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ap(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;r.uniform2uiv(this.addr,e),vt(t,e)}}function Sp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;r.uniform3uiv(this.addr,e),vt(t,e)}}function xp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;r.uniform4uiv(this.addr,e),vt(t,e)}}function _p(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?dc:cc;t.setTexture2D(e||s,i)}function vp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hc,i)}function yp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fc,i)}function Ep(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||uc,i)}function Mp(r){switch(r){case 5126:return rp;case 35664:return op;case 35665:return ap;case 35666:return lp;case 35674:return cp;case 35675:return dp;case 35676:return up;case 5124:case 35670:return hp;case 35667:case 35671:return fp;case 35668:case 35672:return pp;case 35669:case 35673:return mp;case 5125:return gp;case 36294:return Ap;case 36295:return Sp;case 36296:return xp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return yp;case 36289:case 36303:case 36311:case 36292:return Ep}}function Cp(r,e){r.uniform1fv(this.addr,e)}function Tp(r,e){const t=Hi(e,this.size,2);r.uniform2fv(this.addr,t)}function bp(r,e){const t=Hi(e,this.size,3);r.uniform3fv(this.addr,t)}function wp(r,e){const t=Hi(e,this.size,4);r.uniform4fv(this.addr,t)}function Rp(r,e){const t=Hi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ip(r,e){const t=Hi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Dp(r,e){const t=Hi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Pp(r,e){r.uniform1iv(this.addr,e)}function Lp(r,e){r.uniform2iv(this.addr,e)}function Fp(r,e){r.uniform3iv(this.addr,e)}function Bp(r,e){r.uniform4iv(this.addr,e)}function Up(r,e){r.uniform1uiv(this.addr,e)}function Op(r,e){r.uniform2uiv(this.addr,e)}function Np(r,e){r.uniform3uiv(this.addr,e)}function zp(r,e){r.uniform4uiv(this.addr,e)}function Hp(r,e,t){const n=this.cache,i=e.length,s=or(t,i);_t(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||cc,s[a])}function kp(r,e,t){const n=this.cache,i=e.length,s=or(t,i);_t(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||hc,s[a])}function Gp(r,e,t){const n=this.cache,i=e.length,s=or(t,i);_t(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||fc,s[a])}function Vp(r,e,t){const n=this.cache,i=e.length,s=or(t,i);_t(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||uc,s[a])}function Wp(r){switch(r){case 5126:return Cp;case 35664:return Tp;case 35665:return bp;case 35666:return wp;case 35674:return Rp;case 35675:return Ip;case 35676:return Dp;case 5124:case 35670:return Pp;case 35667:case 35671:return Lp;case 35668:case 35672:return Fp;case 35669:case 35673:return Bp;case 5125:return Up;case 36294:return Op;case 36295:return Np;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return Vp}}class Xp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mp(t.type)}}class qp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wp(t.type)}}class Qp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const kr=/(\w+)(\])?(\[|\.)?/g;function Za(r,e){r.seq.push(e),r.map[e.id]=e}function Yp(r,e,t){const n=r.name,i=n.length;for(kr.lastIndex=0;;){const s=kr.exec(n),a=kr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Za(t,c===void 0?new Xp(o,r,e):new qp(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Qp(o),Za(t,u)),t=u}}}class Gs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Yp(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ja(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Kp=37297;let jp=0;function Zp(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Jp(r){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(r);let n;switch(e===t?n="":e===Ks&&t===Ys?n="LinearDisplayP3ToLinearSRGB":e===Ys&&t===Ks&&(n="LinearSRGBToLinearDisplayP3"),r){case wn:case ir:return[n,"LinearTransferOETF"];case wt:case ho:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function $a(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Zp(r.getShaderSource(e),a)}else return i}function $p(r,e){const t=Jp(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function em(r,e){let t;switch(e){case rd:t="Linear";break;case od:t="Reinhard";break;case ad:t="OptimizedCineon";break;case ld:t="ACESFilmic";break;case dd:t="AgX";break;case cd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function tm(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ti).join(`
`)}function nm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ti).join(`
`)}function im(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sm(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ti(r){return r!==""}function el(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ro(r){return r.replace(rm,am)}const om=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function am(r,e){let t=ke[e];if(t===void 0){const n=om.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ro(t)}const lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(r){return r.replace(lm,cm)}function cm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function il(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Fc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function um(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Li:case Fi:e="ENVMAP_TYPE_CUBE";break;case nr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hm(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Fi&&(e="ENVMAP_MODE_REFRACTION"),e}function fm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case zl:e="ENVMAP_BLENDING_MULTIPLY";break;case id:e="ENVMAP_BLENDING_MIX";break;case sd:e="ENVMAP_BLENDING_ADD";break}return e}function pm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function mm(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=dm(t),c=um(t),d=hm(t),u=fm(t),h=pm(t),f=t.isWebGL2?"":tm(t),A=nm(t),g=im(s),m=i.createProgram();let p,S,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ti).join(`
`),p.length>0&&(p+=`
`),S=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ti).join(`
`),S.length>0&&(S+=`
`)):(p=[il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),S=[f,il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Hn?em("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,$p("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ti).join(`
`)),a=ro(a),a=el(a,t),a=tl(a,t),o=ro(o),o=el(o,t),o=tl(o,t),a=nl(a),o=nl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[A,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===va?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===va?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const v=x+p+a,E=x+S+o,M=Ja(i,i.VERTEX_SHADER,v),_=Ja(i,i.FRAGMENT_SHADER,E);i.attachShader(m,M),i.attachShader(m,_),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function D(F){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(m).trim(),R=i.getShaderInfoLog(M).trim(),L=i.getShaderInfoLog(_).trim();let O=!0,V=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,M,_);else{const X=$a(i,M,"vertex"),H=$a(i,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+X+`
`+H)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(R===""||L==="")&&(V=!1);V&&(F.diagnostics={runnable:O,programLog:N,vertexShader:{log:R,prefix:p},fragmentShader:{log:L,prefix:S}})}i.deleteShader(M),i.deleteShader(_),y=new Gs(i,m),C=sm(i,m)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let C;this.getAttributes=function(){return C===void 0&&D(this),C};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,Kp)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=_,this}let gm=0;class Am{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Sm(e),t.set(e,n)),n}}class Sm{constructor(e){this.id=gm++,this.code=e,this.usedTimes=0}}function xm(r,e,t,n,i,s,a){const o=new ec,l=new Am,c=[],d=i.isWebGL2,u=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function m(y,C,P,F,N){const R=F.fog,L=N.geometry,O=y.isMeshStandardMaterial?F.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||O),X=V&&V.mapping===nr?V.image.height:null,H=A[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,J=q!==void 0?q.length:0;let $=0;L.morphAttributes.position!==void 0&&($=1),L.morphAttributes.normal!==void 0&&($=2),L.morphAttributes.color!==void 0&&($=3);let W,Z,ie,oe;if(H){const Lt=un[H];W=Lt.vertexShader,Z=Lt.fragmentShader}else W=y.vertexShader,Z=y.fragmentShader,l.update(y),ie=l.getVertexShaderID(y),oe=l.getFragmentShaderID(y);const le=r.getRenderTarget(),Ee=N.isInstancedMesh===!0,Me=N.isBatchedMesh===!0,ge=!!y.map,De=!!y.matcap,k=!!V,He=!!y.aoMap,Ae=!!y.lightMap,Se=!!y.bumpMap,xe=!!y.normalMap,qe=!!y.displacementMap,Ce=!!y.emissiveMap,w=!!y.metalnessMap,T=!!y.roughnessMap,Q=y.anisotropy>0,re=y.clearcoat>0,ne=y.iridescence>0,se=y.sheen>0,Te=y.transmission>0,pe=Q&&!!y.anisotropyMap,ve=re&&!!y.clearcoatMap,Pe=re&&!!y.clearcoatNormalMap,Ne=re&&!!y.clearcoatRoughnessMap,te=ne&&!!y.iridescenceMap,Qe=ne&&!!y.iridescenceThicknessMap,U=se&&!!y.sheenColorMap,ee=se&&!!y.sheenRoughnessMap,me=!!y.specularMap,de=!!y.specularColorMap,Re=!!y.specularIntensityMap,Xe=Te&&!!y.transmissionMap,je=Te&&!!y.thicknessMap,Ge=!!y.gradientMap,ce=!!y.alphaMap,B=y.alphaTest>0,ae=!!y.alphaHash,fe=!!y.extensions,Ie=!!L.attributes.uv1,be=!!L.attributes.uv2,Ze=!!L.attributes.uv3;let it=Hn;return y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(it=r.toneMapping),{isWebGL2:d,shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:Z,defines:y.defines,customVertexShaderID:ie,customFragmentShaderID:oe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Me,instancing:Ee,instancingColor:Ee&&N.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:le===null?r.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:wn,map:ge,matcap:De,envMap:k,envMapMode:k&&V.mapping,envMapCubeUVHeight:X,aoMap:He,lightMap:Ae,bumpMap:Se,normalMap:xe,displacementMap:h&&qe,emissiveMap:Ce,normalMapObjectSpace:xe&&y.normalMapType===Ed,normalMapTangentSpace:xe&&y.normalMapType===yd,metalnessMap:w,roughnessMap:T,anisotropy:Q,anisotropyMap:pe,clearcoat:re,clearcoatMap:ve,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Ne,iridescence:ne,iridescenceMap:te,iridescenceThicknessMap:Qe,sheen:se,sheenColorMap:U,sheenRoughnessMap:ee,specularMap:me,specularColorMap:de,specularIntensityMap:Re,transmission:Te,transmissionMap:Xe,thicknessMap:je,gradientMap:Ge,opaque:y.transparent===!1&&y.blending===zn,alphaMap:ce,alphaTest:B,alphaHash:ae,combine:y.combine,mapUv:ge&&g(y.map.channel),aoMapUv:He&&g(y.aoMap.channel),lightMapUv:Ae&&g(y.lightMap.channel),bumpMapUv:Se&&g(y.bumpMap.channel),normalMapUv:xe&&g(y.normalMap.channel),displacementMapUv:qe&&g(y.displacementMap.channel),emissiveMapUv:Ce&&g(y.emissiveMap.channel),metalnessMapUv:w&&g(y.metalnessMap.channel),roughnessMapUv:T&&g(y.roughnessMap.channel),anisotropyMapUv:pe&&g(y.anisotropyMap.channel),clearcoatMapUv:ve&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:U&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:ee&&g(y.sheenRoughnessMap.channel),specularMapUv:me&&g(y.specularMap.channel),specularColorMapUv:de&&g(y.specularColorMap.channel),specularIntensityMapUv:Re&&g(y.specularIntensityMap.channel),transmissionMapUv:Xe&&g(y.transmissionMap.channel),thicknessMapUv:je&&g(y.thicknessMap.channel),alphaMapUv:ce&&g(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(xe||Q),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:be,vertexUv3s:Ze,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(ge||ce),fog:!!R,useFog:y.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:$,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:it,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ge&&y.map.isVideoTexture===!0&&tt.getTransfer(y.map.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===$t,flipSided:y.side===Ht,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:fe&&y.extensions.derivatives===!0,extensionFragDepth:fe&&y.extensions.fragDepth===!0,extensionDrawBuffers:fe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)C.push(P),C.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(S(C,y),x(C,y),C.push(r.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function S(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function x(y,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),y.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function v(y){const C=A[y.type];let P;if(C){const F=un[C];P=eu.clone(F.uniforms)}else P=y.uniforms;return P}function E(y,C){let P;for(let F=0,N=c.length;F<N;F++){const R=c[F];if(R.cacheKey===C){P=R,++P.usedTimes;break}}return P===void 0&&(P=new mm(r,C,y,s),c.push(P)),P}function M(y){if(--y.usedTimes===0){const C=c.indexOf(y);c[C]=c[c.length-1],c.pop(),y.destroy()}}function _(y){l.remove(y)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:M,releaseShaderCache:_,programs:c,dispose:D}}function _m(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function vm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function sl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function rl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,h,f,A,g,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:A,renderOrder:u.renderOrder,z:g,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=A,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function o(u,h,f,A,g,m){const p=a(u,h,f,A,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,h,f,A,g,m){const p=a(u,h,f,A,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,h){t.length>1&&t.sort(u||vm),n.length>1&&n.sort(h||sl),i.length>1&&i.sort(h||sl)}function d(){for(let u=e,h=r.length;u<h;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:d,sort:c}}function ym(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new rl,r.set(n,[a])):i>=s.length?(a=new rl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Em(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ke};break;case"SpotLight":t={position:new I,direction:new I,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function Mm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Cm=0;function Tm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bm(r,e){const t=new Em,n=Mm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new I);const s=new I,a=new Ue,o=new Ue;function l(d,u){let h=0,f=0,A=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let g=0,m=0,p=0,S=0,x=0,v=0,E=0,M=0,_=0,D=0,y=0;d.sort(Tm);const C=u===!0?Math.PI:1;for(let F=0,N=d.length;F<N;F++){const R=d[F],L=R.color,O=R.intensity,V=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=L.r*O*C,f+=L.g*O*C,A+=L.b*O*C;else if(R.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],O);y++}else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity*C),R.castShadow){const q=R.shadow,J=n.get(R);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=X,i.directionalShadowMatrix[g]=R.shadow.matrix,v++}i.directional[g]=H,g++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(L).multiplyScalar(O*C),H.distance=V,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[p]=H;const q=R.shadow;if(R.map&&(i.spotLightMap[_]=R.map,_++,q.updateMatrices(R),R.castShadow&&D++),i.spotLightMatrix[p]=q.matrix,R.castShadow){const J=n.get(R);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,i.spotShadow[p]=J,i.spotShadowMap[p]=X,M++}p++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(L).multiplyScalar(O),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[S]=H,S++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity*C),H.distance=R.distance,H.decay=R.decay,R.castShadow){const q=R.shadow,J=n.get(R);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,J.shadowCameraNear=q.camera.near,J.shadowCameraFar=q.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=R.shadow.matrix,E++}i.point[m]=H,m++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(O*C),H.groundColor.copy(R.groundColor).multiplyScalar(O*C),i.hemi[x]=H,x++}}S>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=A;const P=i.hash;(P.directionalLength!==g||P.pointLength!==m||P.spotLength!==p||P.rectAreaLength!==S||P.hemiLength!==x||P.numDirectionalShadows!==v||P.numPointShadows!==E||P.numSpotShadows!==M||P.numSpotMaps!==_||P.numLightProbes!==y)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=S,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+_-D,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=y,P.directionalLength=g,P.pointLength=m,P.spotLength=p,P.rectAreaLength=S,P.hemiLength=x,P.numDirectionalShadows=v,P.numPointShadows=E,P.numSpotShadows=M,P.numSpotMaps=_,P.numLightProbes=y,i.version=Cm++)}function c(d,u){let h=0,f=0,A=0,g=0,m=0;const p=u.matrixWorldInverse;for(let S=0,x=d.length;S<x;S++){const v=d[S];if(v.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(v.isSpotLight){const E=i.spot[A];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),A++}else if(v.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(v.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function ol(r,e){const t=new bm(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function wm(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new ol(r,e),t.set(s,[l])):a>=o.length?(l=new ol(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Rm extends rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Im extends rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lm(r,e,t){let n=new ac;const i=new ye,s=new ye,a=new At,o=new Rm({depthPacking:vd}),l=new Im,c={},d=t.maxTextureSize,u={[mn]:Ht,[Ht]:mn,[$t]:$t},h=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:Dm,fragmentShader:Pm}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const A=new sn;A.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new gt(A,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let p=this.type;this.render=function(M,_,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const y=r.getRenderTarget(),C=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Nn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=p!==En&&this.type===En,R=p===En&&this.type!==En;for(let L=0,O=M.length;L<O;L++){const V=M[L],X=V.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const H=X.getFrameExtents();if(i.multiply(H),s.copy(X.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/H.x),i.x=s.x*H.x,X.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/H.y),i.y=s.y*H.y,X.mapSize.y=s.y)),X.map===null||N===!0||R===!0){const J=this.type!==En?{minFilter:bt,magFilter:bt}:{};X.map!==null&&X.map.dispose(),X.map=new Gn(i.x,i.y,J),X.map.texture.name=V.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const q=X.getViewportCount();for(let J=0;J<q;J++){const $=X.getViewport(J);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),F.viewport(a),X.updateMatrices(V,J),n=X.getFrustum(),v(_,D,X.camera,V,this.type)}X.isPointLightShadow!==!0&&this.type===En&&S(X,D),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,C,P)};function S(M,_){const D=e.update(g);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Gn(i.x,i.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(_,null,D,h,g,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(_,null,D,f,g,null)}function x(M,_,D,y){let C=null;const P=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)C=P;else if(C=D.isPointLight===!0?l:o,r.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){const F=C.uuid,N=_.uuid;let R=c[F];R===void 0&&(R={},c[F]=R);let L=R[N];L===void 0&&(L=C.clone(),R[N]=L,_.addEventListener("dispose",E)),C=L}if(C.visible=_.visible,C.wireframe=_.wireframe,y===En?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:u[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,D.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=r.properties.get(C);F.light=D}return C}function v(M,_,D,y,C){if(M.visible===!1)return;if(M.layers.test(_.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===En)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);const N=e.update(M),R=M.material;if(Array.isArray(R)){const L=N.groups;for(let O=0,V=L.length;O<V;O++){const X=L[O],H=R[X.materialIndex];if(H&&H.visible){const q=x(M,H,y,C);M.onBeforeShadow(r,M,_,D,N,q,X),r.renderBufferDirect(D,null,N,q,M,X),M.onAfterShadow(r,M,_,D,N,q,X)}}}else if(R.visible){const L=x(M,R,y,C);M.onBeforeShadow(r,M,_,D,N,L,null),r.renderBufferDirect(D,null,N,L,M,null),M.onAfterShadow(r,M,_,D,N,L,null)}}const F=M.children;for(let N=0,R=F.length;N<R;N++)v(F[N],_,D,y,C)}function E(M){M.target.removeEventListener("dispose",E);for(const D in c){const y=c[D],C=M.target.uuid;C in y&&(y[C].dispose(),delete y[C])}}}function Fm(r,e,t){const n=t.isWebGL2;function i(){let B=!1;const ae=new At;let fe=null;const Ie=new At(0,0,0,0);return{setMask:function(be){fe!==be&&!B&&(r.colorMask(be,be,be,be),fe=be)},setLocked:function(be){B=be},setClear:function(be,Ze,it,yt,Lt){Lt===!0&&(be*=yt,Ze*=yt,it*=yt),ae.set(be,Ze,it,yt),Ie.equals(ae)===!1&&(r.clearColor(be,Ze,it,yt),Ie.copy(ae))},reset:function(){B=!1,fe=null,Ie.set(-1,0,0,0)}}}function s(){let B=!1,ae=null,fe=null,Ie=null;return{setTest:function(be){be?Me(r.DEPTH_TEST):ge(r.DEPTH_TEST)},setMask:function(be){ae!==be&&!B&&(r.depthMask(be),ae=be)},setFunc:function(be){if(fe!==be){switch(be){case jc:r.depthFunc(r.NEVER);break;case Zc:r.depthFunc(r.ALWAYS);break;case Jc:r.depthFunc(r.LESS);break;case qs:r.depthFunc(r.LEQUAL);break;case $c:r.depthFunc(r.EQUAL);break;case ed:r.depthFunc(r.GEQUAL);break;case td:r.depthFunc(r.GREATER);break;case nd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}fe=be}},setLocked:function(be){B=be},setClear:function(be){Ie!==be&&(r.clearDepth(be),Ie=be)},reset:function(){B=!1,ae=null,fe=null,Ie=null}}}function a(){let B=!1,ae=null,fe=null,Ie=null,be=null,Ze=null,it=null,yt=null,Lt=null;return{setTest:function(st){B||(st?Me(r.STENCIL_TEST):ge(r.STENCIL_TEST))},setMask:function(st){ae!==st&&!B&&(r.stencilMask(st),ae=st)},setFunc:function(st,Ft,dn){(fe!==st||Ie!==Ft||be!==dn)&&(r.stencilFunc(st,Ft,dn),fe=st,Ie=Ft,be=dn)},setOp:function(st,Ft,dn){(Ze!==st||it!==Ft||yt!==dn)&&(r.stencilOp(st,Ft,dn),Ze=st,it=Ft,yt=dn)},setLocked:function(st){B=st},setClear:function(st){Lt!==st&&(r.clearStencil(st),Lt=st)},reset:function(){B=!1,ae=null,fe=null,Ie=null,be=null,Ze=null,it=null,yt=null,Lt=null}}}const o=new i,l=new s,c=new a,d=new WeakMap,u=new WeakMap;let h={},f={},A=new WeakMap,g=[],m=null,p=!1,S=null,x=null,v=null,E=null,M=null,_=null,D=null,y=new Ke(0,0,0),C=0,P=!1,F=null,N=null,R=null,L=null,O=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,H=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=H>=1):q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=H>=2);let J=null,$={};const W=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),ie=new At().fromArray(W),oe=new At().fromArray(Z);function le(B,ae,fe,Ie){const be=new Uint8Array(4),Ze=r.createTexture();r.bindTexture(B,Ze),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let it=0;it<fe;it++)n&&(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)?r.texImage3D(ae,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,be):r.texImage2D(ae+it,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,be);return Ze}const Ee={};Ee[r.TEXTURE_2D]=le(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=le(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ee[r.TEXTURE_2D_ARRAY]=le(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=le(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(r.DEPTH_TEST),l.setFunc(qs),Ce(!1),w(ko),Me(r.CULL_FACE),xe(Nn);function Me(B){h[B]!==!0&&(r.enable(B),h[B]=!0)}function ge(B){h[B]!==!1&&(r.disable(B),h[B]=!1)}function De(B,ae){return f[B]!==ae?(r.bindFramebuffer(B,ae),f[B]=ae,n&&(B===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ae),B===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ae)),!0):!1}function k(B,ae){let fe=g,Ie=!1;if(B)if(fe=A.get(ae),fe===void 0&&(fe=[],A.set(ae,fe)),B.isWebGLMultipleRenderTargets){const be=B.texture;if(fe.length!==be.length||fe[0]!==r.COLOR_ATTACHMENT0){for(let Ze=0,it=be.length;Ze<it;Ze++)fe[Ze]=r.COLOR_ATTACHMENT0+Ze;fe.length=be.length,Ie=!0}}else fe[0]!==r.COLOR_ATTACHMENT0&&(fe[0]=r.COLOR_ATTACHMENT0,Ie=!0);else fe[0]!==r.BACK&&(fe[0]=r.BACK,Ie=!0);Ie&&(t.isWebGL2?r.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function He(B){return m!==B?(r.useProgram(B),m=B,!0):!1}const Ae={[jn]:r.FUNC_ADD,[Bc]:r.FUNC_SUBTRACT,[Uc]:r.FUNC_REVERSE_SUBTRACT};if(n)Ae[Xo]=r.MIN,Ae[qo]=r.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(Ae[Xo]=B.MIN_EXT,Ae[qo]=B.MAX_EXT)}const Se={[Oc]:r.ZERO,[Nc]:r.ONE,[zc]:r.SRC_COLOR,[ts]:r.SRC_ALPHA,[Xc]:r.SRC_ALPHA_SATURATE,[Vc]:r.DST_COLOR,[kc]:r.DST_ALPHA,[Hc]:r.ONE_MINUS_SRC_COLOR,[ns]:r.ONE_MINUS_SRC_ALPHA,[Wc]:r.ONE_MINUS_DST_COLOR,[Gc]:r.ONE_MINUS_DST_ALPHA,[qc]:r.CONSTANT_COLOR,[Qc]:r.ONE_MINUS_CONSTANT_COLOR,[Yc]:r.CONSTANT_ALPHA,[Kc]:r.ONE_MINUS_CONSTANT_ALPHA};function xe(B,ae,fe,Ie,be,Ze,it,yt,Lt,st){if(B===Nn){p===!0&&(ge(r.BLEND),p=!1);return}if(p===!1&&(Me(r.BLEND),p=!0),B!==Nl){if(B!==S||st!==P){if((x!==jn||M!==jn)&&(r.blendEquation(r.FUNC_ADD),x=jn,M=jn),st)switch(B){case zn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Go:r.blendFunc(r.ONE,r.ONE);break;case Vo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wo:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case zn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Go:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Vo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wo:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}v=null,E=null,_=null,D=null,y.set(0,0,0),C=0,S=B,P=st}return}be=be||ae,Ze=Ze||fe,it=it||Ie,(ae!==x||be!==M)&&(r.blendEquationSeparate(Ae[ae],Ae[be]),x=ae,M=be),(fe!==v||Ie!==E||Ze!==_||it!==D)&&(r.blendFuncSeparate(Se[fe],Se[Ie],Se[Ze],Se[it]),v=fe,E=Ie,_=Ze,D=it),(yt.equals(y)===!1||Lt!==C)&&(r.blendColor(yt.r,yt.g,yt.b,Lt),y.copy(yt),C=Lt),S=B,P=!1}function qe(B,ae){B.side===$t?ge(r.CULL_FACE):Me(r.CULL_FACE);let fe=B.side===Ht;ae&&(fe=!fe),Ce(fe),B.blending===zn&&B.transparent===!1?xe(Nn):xe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),o.setMask(B.colorWrite);const Ie=B.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Q(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Me(r.SAMPLE_ALPHA_TO_COVERAGE):ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(B){F!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),F=B)}function w(B){B!==Pc?(Me(r.CULL_FACE),B!==N&&(B===ko?r.cullFace(r.BACK):B===Lc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ge(r.CULL_FACE),N=B}function T(B){B!==R&&(X&&r.lineWidth(B),R=B)}function Q(B,ae,fe){B?(Me(r.POLYGON_OFFSET_FILL),(L!==ae||O!==fe)&&(r.polygonOffset(ae,fe),L=ae,O=fe)):ge(r.POLYGON_OFFSET_FILL)}function re(B){B?Me(r.SCISSOR_TEST):ge(r.SCISSOR_TEST)}function ne(B){B===void 0&&(B=r.TEXTURE0+V-1),J!==B&&(r.activeTexture(B),J=B)}function se(B,ae,fe){fe===void 0&&(J===null?fe=r.TEXTURE0+V-1:fe=J);let Ie=$[fe];Ie===void 0&&(Ie={type:void 0,texture:void 0},$[fe]=Ie),(Ie.type!==B||Ie.texture!==ae)&&(J!==fe&&(r.activeTexture(fe),J=fe),r.bindTexture(B,ae||Ee[B]),Ie.type=B,Ie.texture=ae)}function Te(){const B=$[J];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function pe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Qe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function U(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(B){ie.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),ie.copy(B))}function Xe(B){oe.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),oe.copy(B))}function je(B,ae){let fe=u.get(ae);fe===void 0&&(fe=new WeakMap,u.set(ae,fe));let Ie=fe.get(B);Ie===void 0&&(Ie=r.getUniformBlockIndex(ae,B.name),fe.set(B,Ie))}function Ge(B,ae){const Ie=u.get(ae).get(B);d.get(ae)!==Ie&&(r.uniformBlockBinding(ae,Ie,B.__bindingPointIndex),d.set(ae,Ie))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},J=null,$={},f={},A=new WeakMap,g=[],m=null,p=!1,S=null,x=null,v=null,E=null,M=null,_=null,D=null,y=new Ke(0,0,0),C=0,P=!1,F=null,N=null,R=null,L=null,O=null,ie.set(0,0,r.canvas.width,r.canvas.height),oe.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Me,disable:ge,bindFramebuffer:De,drawBuffers:k,useProgram:He,setBlending:xe,setMaterial:qe,setFlipSided:Ce,setCullFace:w,setLineWidth:T,setPolygonOffset:Q,setScissorTest:re,activeTexture:ne,bindTexture:se,unbindTexture:Te,compressedTexImage2D:pe,compressedTexImage3D:ve,texImage2D:me,texImage3D:de,updateUBOMapping:je,uniformBlockBinding:Ge,texStorage2D:U,texStorage3D:ee,texSubImage2D:Pe,texSubImage3D:Ne,compressedTexSubImage2D:te,compressedTexSubImage3D:Qe,scissor:Re,viewport:Xe,reset:ce}}function Bm(r,e,t,n,i,s,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(w,T){return f?new OffscreenCanvas(w,T):Zs("canvas")}function g(w,T,Q,re){let ne=1;if((w.width>re||w.height>re)&&(ne=re/Math.max(w.width,w.height)),ne<1||T===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const se=T?so:Math.floor,Te=se(ne*w.width),pe=se(ne*w.height);u===void 0&&(u=A(Te,pe));const ve=Q?A(Te,pe):u;return ve.width=Te,ve.height=pe,ve.getContext("2d").drawImage(w,0,0,Te,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Te+"x"+pe+")."),ve}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return ya(w.width)&&ya(w.height)}function p(w){return o?!1:w.wrapS!==cn||w.wrapT!==cn||w.minFilter!==bt&&w.minFilter!==Zt}function S(w,T){return w.generateMipmaps&&T&&w.minFilter!==bt&&w.minFilter!==Zt}function x(w){r.generateMipmap(w)}function v(w,T,Q,re,ne=!1){if(o===!1)return T;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let se=T;if(T===r.RED&&(Q===r.FLOAT&&(se=r.R32F),Q===r.HALF_FLOAT&&(se=r.R16F),Q===r.UNSIGNED_BYTE&&(se=r.R8)),T===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(se=r.R8UI),Q===r.UNSIGNED_SHORT&&(se=r.R16UI),Q===r.UNSIGNED_INT&&(se=r.R32UI),Q===r.BYTE&&(se=r.R8I),Q===r.SHORT&&(se=r.R16I),Q===r.INT&&(se=r.R32I)),T===r.RG&&(Q===r.FLOAT&&(se=r.RG32F),Q===r.HALF_FLOAT&&(se=r.RG16F),Q===r.UNSIGNED_BYTE&&(se=r.RG8)),T===r.RGBA){const Te=ne?Qs:tt.getTransfer(re);Q===r.FLOAT&&(se=r.RGBA32F),Q===r.HALF_FLOAT&&(se=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(se=Te===rt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(se=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(se=r.RGB5_A1)}return(se===r.R16F||se===r.R32F||se===r.RG16F||se===r.RG32F||se===r.RGBA16F||se===r.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function E(w,T,Q){return S(w,Q)===!0||w.isFramebufferTexture&&w.minFilter!==bt&&w.minFilter!==Zt?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function M(w){return w===bt||w===Qo||w===fr?r.NEAREST:r.LINEAR}function _(w){const T=w.target;T.removeEventListener("dispose",_),y(T),T.isVideoTexture&&d.delete(T)}function D(w){const T=w.target;T.removeEventListener("dispose",D),P(T)}function y(w){const T=n.get(w);if(T.__webglInit===void 0)return;const Q=w.source,re=h.get(Q);if(re){const ne=re[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&C(w),Object.keys(re).length===0&&h.delete(Q)}n.remove(w)}function C(w){const T=n.get(w);r.deleteTexture(T.__webglTexture);const Q=w.source,re=h.get(Q);delete re[T.__cacheKey],a.memory.textures--}function P(w){const T=w.texture,Q=n.get(w),re=n.get(T);if(re.__webglTexture!==void 0&&(r.deleteTexture(re.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(Q.__webglFramebuffer[ne]))for(let se=0;se<Q.__webglFramebuffer[ne].length;se++)r.deleteFramebuffer(Q.__webglFramebuffer[ne][se]);else r.deleteFramebuffer(Q.__webglFramebuffer[ne]);Q.__webglDepthbuffer&&r.deleteRenderbuffer(Q.__webglDepthbuffer[ne])}else{if(Array.isArray(Q.__webglFramebuffer))for(let ne=0;ne<Q.__webglFramebuffer.length;ne++)r.deleteFramebuffer(Q.__webglFramebuffer[ne]);else r.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&r.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let ne=0;ne<Q.__webglColorRenderbuffer.length;ne++)Q.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(Q.__webglColorRenderbuffer[ne]);Q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ne=0,se=T.length;ne<se;ne++){const Te=n.get(T[ne]);Te.__webglTexture&&(r.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(T[ne])}n.remove(T),n.remove(w)}let F=0;function N(){F=0}function R(){const w=F;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),F+=1,w}function L(w){const T=[];return T.push(w.wrapS),T.push(w.wrapT),T.push(w.wrapR||0),T.push(w.magFilter),T.push(w.minFilter),T.push(w.anisotropy),T.push(w.internalFormat),T.push(w.format),T.push(w.type),T.push(w.generateMipmaps),T.push(w.premultiplyAlpha),T.push(w.flipY),T.push(w.unpackAlignment),T.push(w.colorSpace),T.join()}function O(w,T){const Q=n.get(w);if(w.isVideoTexture&&qe(w),w.isRenderTargetTexture===!1&&w.version>0&&Q.__version!==w.version){const re=w.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(Q,w,T);return}}t.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+T)}function V(w,T){const Q=n.get(w);if(w.version>0&&Q.__version!==w.version){ie(Q,w,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+T)}function X(w,T){const Q=n.get(w);if(w.version>0&&Q.__version!==w.version){ie(Q,w,T);return}t.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+T)}function H(w,T){const Q=n.get(w);if(w.version>0&&Q.__version!==w.version){oe(Q,w,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+T)}const q={[eo]:r.REPEAT,[cn]:r.CLAMP_TO_EDGE,[to]:r.MIRRORED_REPEAT},J={[bt]:r.NEAREST,[Qo]:r.NEAREST_MIPMAP_NEAREST,[fr]:r.NEAREST_MIPMAP_LINEAR,[Zt]:r.LINEAR,[ud]:r.LINEAR_MIPMAP_NEAREST,[is]:r.LINEAR_MIPMAP_LINEAR},$={[Md]:r.NEVER,[Id]:r.ALWAYS,[Cd]:r.LESS,[Ql]:r.LEQUAL,[Td]:r.EQUAL,[Rd]:r.GEQUAL,[bd]:r.GREATER,[wd]:r.NOTEQUAL};function W(w,T,Q){if(Q?(r.texParameteri(w,r.TEXTURE_WRAP_S,q[T.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,q[T.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,q[T.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,J[T.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,J[T.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==cn||T.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,M(T.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,M(T.minFilter)),T.minFilter!==bt&&T.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===bt||T.minFilter!==fr&&T.minFilter!==is||T.type===hn&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===Bi&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(w,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function Z(w,T){let Q=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",_));const re=T.source;let ne=h.get(re);ne===void 0&&(ne={},h.set(re,ne));const se=L(T);if(se!==w.__cacheKey){ne[se]===void 0&&(ne[se]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),ne[se].usedTimes++;const Te=ne[w.__cacheKey];Te!==void 0&&(ne[w.__cacheKey].usedTimes--,Te.usedTimes===0&&C(T)),w.__cacheKey=se,w.__webglTexture=ne[se].texture}return Q}function ie(w,T,Q){let re=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(re=r.TEXTURE_3D);const ne=Z(w,T),se=T.source;t.bindTexture(re,w.__webglTexture,r.TEXTURE0+Q);const Te=n.get(se);if(se.version!==Te.__version||ne===!0){t.activeTexture(r.TEXTURE0+Q);const pe=tt.getPrimaries(tt.workingColorSpace),ve=T.colorSpace===en?null:tt.getPrimaries(T.colorSpace),Pe=T.colorSpace===en||pe===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ne=p(T)&&m(T.image)===!1;let te=g(T.image,Ne,!1,i.maxTextureSize);te=Ce(T,te);const Qe=m(te)||o,U=s.convert(T.format,T.colorSpace);let ee=s.convert(T.type),me=v(T.internalFormat,U,ee,T.colorSpace,T.isVideoTexture);W(re,T,Qe);let de;const Re=T.mipmaps,Xe=o&&T.isVideoTexture!==!0&&me!==Xl,je=Te.__version===void 0||ne===!0,Ge=E(T,te,Qe);if(T.isDepthTexture)me=r.DEPTH_COMPONENT,o?T.type===hn?me=r.DEPTH_COMPONENT32F:T.type===qt?me=r.DEPTH_COMPONENT24:T.type===$n?me=r.DEPTH24_STENCIL8:me=r.DEPTH_COMPONENT16:T.type===hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===kn&&me===r.DEPTH_COMPONENT&&T.type!==co&&T.type!==qt&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=qt,ee=s.convert(T.type)),T.format===Ui&&me===r.DEPTH_COMPONENT&&(me=r.DEPTH_STENCIL,T.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=$n,ee=s.convert(T.type))),je&&(Xe?t.texStorage2D(r.TEXTURE_2D,1,me,te.width,te.height):t.texImage2D(r.TEXTURE_2D,0,me,te.width,te.height,0,U,ee,null));else if(T.isDataTexture)if(Re.length>0&&Qe){Xe&&je&&t.texStorage2D(r.TEXTURE_2D,Ge,me,Re[0].width,Re[0].height);for(let ce=0,B=Re.length;ce<B;ce++)de=Re[ce],Xe?t.texSubImage2D(r.TEXTURE_2D,ce,0,0,de.width,de.height,U,ee,de.data):t.texImage2D(r.TEXTURE_2D,ce,me,de.width,de.height,0,U,ee,de.data);T.generateMipmaps=!1}else Xe?(je&&t.texStorage2D(r.TEXTURE_2D,Ge,me,te.width,te.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,te.width,te.height,U,ee,te.data)):t.texImage2D(r.TEXTURE_2D,0,me,te.width,te.height,0,U,ee,te.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Xe&&je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,me,Re[0].width,Re[0].height,te.depth);for(let ce=0,B=Re.length;ce<B;ce++)de=Re[ce],T.format!==Nt?U!==null?Xe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,de.width,de.height,te.depth,U,de.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ce,me,de.width,de.height,te.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,de.width,de.height,te.depth,U,ee,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ce,me,de.width,de.height,te.depth,0,U,ee,de.data)}else{Xe&&je&&t.texStorage2D(r.TEXTURE_2D,Ge,me,Re[0].width,Re[0].height);for(let ce=0,B=Re.length;ce<B;ce++)de=Re[ce],T.format!==Nt?U!==null?Xe?t.compressedTexSubImage2D(r.TEXTURE_2D,ce,0,0,de.width,de.height,U,de.data):t.compressedTexImage2D(r.TEXTURE_2D,ce,me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(r.TEXTURE_2D,ce,0,0,de.width,de.height,U,ee,de.data):t.texImage2D(r.TEXTURE_2D,ce,me,de.width,de.height,0,U,ee,de.data)}else if(T.isDataArrayTexture)Xe?(je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,me,te.width,te.height,te.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,U,ee,te.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,me,te.width,te.height,te.depth,0,U,ee,te.data);else if(T.isData3DTexture)Xe?(je&&t.texStorage3D(r.TEXTURE_3D,Ge,me,te.width,te.height,te.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,U,ee,te.data)):t.texImage3D(r.TEXTURE_3D,0,me,te.width,te.height,te.depth,0,U,ee,te.data);else if(T.isFramebufferTexture){if(je)if(Xe)t.texStorage2D(r.TEXTURE_2D,Ge,me,te.width,te.height);else{let ce=te.width,B=te.height;for(let ae=0;ae<Ge;ae++)t.texImage2D(r.TEXTURE_2D,ae,me,ce,B,0,U,ee,null),ce>>=1,B>>=1}}else if(Re.length>0&&Qe){Xe&&je&&t.texStorage2D(r.TEXTURE_2D,Ge,me,Re[0].width,Re[0].height);for(let ce=0,B=Re.length;ce<B;ce++)de=Re[ce],Xe?t.texSubImage2D(r.TEXTURE_2D,ce,0,0,U,ee,de):t.texImage2D(r.TEXTURE_2D,ce,me,U,ee,de);T.generateMipmaps=!1}else Xe?(je&&t.texStorage2D(r.TEXTURE_2D,Ge,me,te.width,te.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,U,ee,te)):t.texImage2D(r.TEXTURE_2D,0,me,U,ee,te);S(T,Qe)&&x(re),Te.__version=se.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function oe(w,T,Q){if(T.image.length!==6)return;const re=Z(w,T),ne=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+Q);const se=n.get(ne);if(ne.version!==se.__version||re===!0){t.activeTexture(r.TEXTURE0+Q);const Te=tt.getPrimaries(tt.workingColorSpace),pe=T.colorSpace===en?null:tt.getPrimaries(T.colorSpace),ve=T.colorSpace===en||Te===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Pe=T.isCompressedTexture||T.image[0].isCompressedTexture,Ne=T.image[0]&&T.image[0].isDataTexture,te=[];for(let ce=0;ce<6;ce++)!Pe&&!Ne?te[ce]=g(T.image[ce],!1,!0,i.maxCubemapSize):te[ce]=Ne?T.image[ce].image:T.image[ce],te[ce]=Ce(T,te[ce]);const Qe=te[0],U=m(Qe)||o,ee=s.convert(T.format,T.colorSpace),me=s.convert(T.type),de=v(T.internalFormat,ee,me,T.colorSpace),Re=o&&T.isVideoTexture!==!0,Xe=se.__version===void 0||re===!0;let je=E(T,Qe,U);W(r.TEXTURE_CUBE_MAP,T,U);let Ge;if(Pe){Re&&Xe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,je,de,Qe.width,Qe.height);for(let ce=0;ce<6;ce++){Ge=te[ce].mipmaps;for(let B=0;B<Ge.length;B++){const ae=Ge[B];T.format!==Nt?ee!==null?Re?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,B,0,0,ae.width,ae.height,ee,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,B,de,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,B,0,0,ae.width,ae.height,ee,me,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,B,de,ae.width,ae.height,0,ee,me,ae.data)}}}else{Ge=T.mipmaps,Re&&Xe&&(Ge.length>0&&je++,t.texStorage2D(r.TEXTURE_CUBE_MAP,je,de,te[0].width,te[0].height));for(let ce=0;ce<6;ce++)if(Ne){Re?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,te[ce].width,te[ce].height,ee,me,te[ce].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,te[ce].width,te[ce].height,0,ee,me,te[ce].data);for(let B=0;B<Ge.length;B++){const fe=Ge[B].image[ce].image;Re?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,B+1,0,0,fe.width,fe.height,ee,me,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,B+1,de,fe.width,fe.height,0,ee,me,fe.data)}}else{Re?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ee,me,te[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,ee,me,te[ce]);for(let B=0;B<Ge.length;B++){const ae=Ge[B];Re?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,B+1,0,0,ee,me,ae.image[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,B+1,de,ee,me,ae.image[ce])}}}S(T,U)&&x(r.TEXTURE_CUBE_MAP),se.__version=ne.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function le(w,T,Q,re,ne,se){const Te=s.convert(Q.format,Q.colorSpace),pe=s.convert(Q.type),ve=v(Q.internalFormat,Te,pe,Q.colorSpace);if(!n.get(T).__hasExternalTextures){const Ne=Math.max(1,T.width>>se),te=Math.max(1,T.height>>se);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,se,ve,Ne,te,T.depth,0,Te,pe,null):t.texImage2D(ne,se,ve,Ne,te,0,Te,pe,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),xe(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,ne,n.get(Q).__webglTexture,0,Se(T)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,ne,n.get(Q).__webglTexture,se),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(w,T,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,w),T.depthBuffer&&!T.stencilBuffer){let re=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(Q||xe(T)){const ne=T.depthTexture;ne&&ne.isDepthTexture&&(ne.type===hn?re=r.DEPTH_COMPONENT32F:ne.type===qt&&(re=r.DEPTH_COMPONENT24));const se=Se(T);xe(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,re,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,se,re,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,re,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(T.depthBuffer&&T.stencilBuffer){const re=Se(T);Q&&xe(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,T.width,T.height):xe(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{const re=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0;ne<re.length;ne++){const se=re[ne],Te=s.convert(se.format,se.colorSpace),pe=s.convert(se.type),ve=v(se.internalFormat,Te,pe,se.colorSpace),Pe=Se(T);Q&&xe(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,ve,T.width,T.height):xe(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pe,ve,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ve,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Me(w,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const re=n.get(T.depthTexture).__webglTexture,ne=Se(T);if(T.depthTexture.format===kn)xe(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0);else if(T.depthTexture.format===Ui)xe(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ge(w){const T=n.get(w),Q=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Me(T.__webglFramebuffer,w)}else if(Q){T.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[re]),T.__webglDepthbuffer[re]=r.createRenderbuffer(),Ee(T.__webglDepthbuffer[re],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),Ee(T.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(w,T,Q){const re=n.get(w);T!==void 0&&le(re.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&ge(w)}function k(w){const T=w.texture,Q=n.get(w),re=n.get(T);w.addEventListener("dispose",D),w.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=T.version,a.memory.textures++);const ne=w.isWebGLCubeRenderTarget===!0,se=w.isWebGLMultipleRenderTargets===!0,Te=m(w)||o;if(ne){Q.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(o&&T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[pe]=[];for(let ve=0;ve<T.mipmaps.length;ve++)Q.__webglFramebuffer[pe][ve]=r.createFramebuffer()}else Q.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let pe=0;pe<T.mipmaps.length;pe++)Q.__webglFramebuffer[pe]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(se)if(i.drawBuffers){const pe=w.texture;for(let ve=0,Pe=pe.length;ve<Pe;ve++){const Ne=n.get(pe[ve]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&xe(w)===!1){const pe=se?T:[T];Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ve=0;ve<pe.length;ve++){const Pe=pe[ve];Q.__webglColorRenderbuffer[ve]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[ve]);const Ne=s.convert(Pe.format,Pe.colorSpace),te=s.convert(Pe.type),Qe=v(Pe.internalFormat,Ne,te,Pe.colorSpace,w.isXRRenderTarget===!0),U=Se(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,U,Qe,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,Q.__webglColorRenderbuffer[ve])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Ee(Q.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ne){t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),W(r.TEXTURE_CUBE_MAP,T,Te);for(let pe=0;pe<6;pe++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)le(Q.__webglFramebuffer[pe][ve],w,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else le(Q.__webglFramebuffer[pe],w,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);S(T,Te)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const pe=w.texture;for(let ve=0,Pe=pe.length;ve<Pe;ve++){const Ne=pe[ve],te=n.get(Ne);t.bindTexture(r.TEXTURE_2D,te.__webglTexture),W(r.TEXTURE_2D,Ne,Te),le(Q.__webglFramebuffer,w,Ne,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,0),S(Ne,Te)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let pe=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?pe=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,re.__webglTexture),W(pe,T,Te),o&&T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)le(Q.__webglFramebuffer[ve],w,T,r.COLOR_ATTACHMENT0,pe,ve);else le(Q.__webglFramebuffer,w,T,r.COLOR_ATTACHMENT0,pe,0);S(T,Te)&&x(pe),t.unbindTexture()}w.depthBuffer&&ge(w)}function He(w){const T=m(w)||o,Q=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0,ne=Q.length;re<ne;re++){const se=Q[re];if(S(se,T)){const Te=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,pe=n.get(se).__webglTexture;t.bindTexture(Te,pe),x(Te),t.unbindTexture()}}}function Ae(w){if(o&&w.samples>0&&xe(w)===!1){const T=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],Q=w.width,re=w.height;let ne=r.COLOR_BUFFER_BIT;const se=[],Te=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=n.get(w),ve=w.isWebGLMultipleRenderTargets===!0;if(ve)for(let Pe=0;Pe<T.length;Pe++)t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Pe=0;Pe<T.length;Pe++){se.push(r.COLOR_ATTACHMENT0+Pe),w.depthBuffer&&se.push(Te);const Ne=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Ne===!1&&(w.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),ve&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,pe.__webglColorRenderbuffer[Pe]),Ne===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Te]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Te])),ve){const te=n.get(T[Pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,te,0)}r.blitFramebuffer(0,0,Q,re,0,0,Q,re,ne,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ve)for(let Pe=0;Pe<T.length;Pe++){t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,pe.__webglColorRenderbuffer[Pe]);const Ne=n.get(T[Pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,Ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Se(w){return Math.min(i.maxSamples,w.samples)}function xe(w){const T=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(w){const T=a.render.frame;d.get(w)!==T&&(d.set(w,T),w.update())}function Ce(w,T){const Q=w.colorSpace,re=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===no||Q!==wn&&Q!==en&&(tt.getTransfer(Q)===rt?o===!1?e.has("EXT_sRGB")===!0&&re===Nt?(w.format=no,w.minFilter=Zt,w.generateMipmaps=!1):T=jl.sRGBToLinear(T):(re!==Nt||ne!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),T}this.allocateTextureUnit=R,this.resetTextureUnits=N,this.setTexture2D=O,this.setTexture2DArray=V,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=De,this.setupRenderTarget=k,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=le,this.useMultisampledRTT=xe}function pc(r,e,t){const n=t.isWebGL2;function i(s,a=en){let o;const l=tt.getTransfer(a);if(s===bn)return r.UNSIGNED_BYTE;if(s===Gl)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Vl)return r.UNSIGNED_SHORT_5_5_5_1;if(s===hd)return r.BYTE;if(s===fd)return r.SHORT;if(s===co)return r.UNSIGNED_SHORT;if(s===kl)return r.INT;if(s===qt)return r.UNSIGNED_INT;if(s===hn)return r.FLOAT;if(s===Bi)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===pd)return r.ALPHA;if(s===Nt)return r.RGBA;if(s===md)return r.LUMINANCE;if(s===gd)return r.LUMINANCE_ALPHA;if(s===kn)return r.DEPTH_COMPONENT;if(s===Ui)return r.DEPTH_STENCIL;if(s===no)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Ad)return r.RED;if(s===uo)return r.RED_INTEGER;if(s===Sd)return r.RG;if(s===Wl)return r.RG_INTEGER;if(s===Yi)return r.RGBA_INTEGER;if(s===pr||s===mr||s===gr||s===Ar)if(l===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===pr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===pr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ar)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yo||s===Ko||s===jo||s===Zo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Yo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ko)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jo||s===$o)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Jo)return l===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===$o)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ea||s===ta||s===na||s===ia||s===sa||s===ra||s===oa||s===aa||s===la||s===ca||s===da||s===ua||s===ha||s===fa)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ea)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ta)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===na)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ia)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sa)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ra)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===oa)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===aa)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===la)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ca)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===da)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ua)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ha)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fa)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sr||s===pa||s===ma)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Sr)return l===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===pa)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ma)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===xd||s===ga||s===Aa||s===Sa)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Sr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===ga)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Aa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$n?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Um extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ls extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Om={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,A=.005;c.inputState.pinching&&h>f+A?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-A&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Om)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ls;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Nm extends ni{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,A=null;const g=t.getContextAttributes();let m=null,p=null;const S=[],x=[],v=new ye;let E=null;const M=new Jt;M.layers.enable(1),M.viewport=new At;const _=new Jt;_.layers.enable(2),_.viewport=new At;const D=[M,_],y=new Um;y.layers.enable(1),y.layers.enable(2);let C=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=S[W];return Z===void 0&&(Z=new Gr,S[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=S[W];return Z===void 0&&(Z=new Gr,S[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=S[W];return Z===void 0&&(Z=new Gr,S[W]=Z),Z.getHandSpace()};function F(W){const Z=x.indexOf(W.inputSource);if(Z===-1)return;const ie=S[Z];ie!==void 0&&(ie.update(W.inputSource,W.frame,c||a),ie.dispatchEvent({type:W.type,data:W.inputSource}))}function N(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",R);for(let W=0;W<S.length;W++){const Z=x[W];Z!==null&&(x[W]=null,S[W].disconnect(Z))}C=null,P=null,e.setRenderTarget(m),f=null,h=null,u=null,i=null,p=null,$.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return A},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",N),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(v),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Gn(f.framebufferWidth,f.framebufferHeight,{format:Nt,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,ie=null,oe=null;g.depth&&(oe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=g.stencil?Ui:kn,ie=g.stencil?$n:qt);const le={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(le),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),p=new Gn(h.textureWidth,h.textureHeight,{format:Nt,type:bn,depthTexture:new go(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ee=e.properties.get(p);Ee.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),$.setContext(i),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function R(W){for(let Z=0;Z<W.removed.length;Z++){const ie=W.removed[Z],oe=x.indexOf(ie);oe>=0&&(x[oe]=null,S[oe].disconnect(ie))}for(let Z=0;Z<W.added.length;Z++){const ie=W.added[Z];let oe=x.indexOf(ie);if(oe===-1){for(let Ee=0;Ee<S.length;Ee++)if(Ee>=x.length){x.push(ie),oe=Ee;break}else if(x[Ee]===null){x[Ee]=ie,oe=Ee;break}if(oe===-1)break}const le=S[oe];le&&le.connect(ie)}}const L=new I,O=new I;function V(W,Z,ie){L.setFromMatrixPosition(Z.matrixWorld),O.setFromMatrixPosition(ie.matrixWorld);const oe=L.distanceTo(O),le=Z.projectionMatrix.elements,Ee=ie.projectionMatrix.elements,Me=le[14]/(le[10]-1),ge=le[14]/(le[10]+1),De=(le[9]+1)/le[5],k=(le[9]-1)/le[5],He=(le[8]-1)/le[0],Ae=(Ee[8]+1)/Ee[0],Se=Me*He,xe=Me*Ae,qe=oe/(-He+Ae),Ce=qe*-He;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ce),W.translateZ(qe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const w=Me+qe,T=ge+qe,Q=Se-Ce,re=xe+(oe-Ce),ne=De*ge/T*w,se=k*ge/T*w;W.projectionMatrix.makePerspective(Q,re,ne,se,w,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function X(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;y.near=_.near=M.near=W.near,y.far=_.far=M.far=W.far,(C!==y.near||P!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,P=y.far);const Z=W.parent,ie=y.cameras;X(y,Z);for(let oe=0;oe<ie.length;oe++)X(ie[oe],Z);ie.length===2?V(y,M,_):y.projectionMatrix.copy(M.projectionMatrix),H(W,y,Z)};function H(W,Z,ie){ie===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(ie.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=io*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let q=null;function J(W,Z){if(d=Z.getViewerPose(c||a),A=Z,d!==null){const ie=d.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let oe=!1;ie.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let le=0;le<ie.length;le++){const Ee=ie[le];let Me=null;if(f!==null)Me=f.getViewport(Ee);else{const De=u.getViewSubImage(h,Ee);Me=De.viewport,le===0&&(e.setRenderTargetTextures(p,De.colorTexture,h.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(p))}let ge=D[le];ge===void 0&&(ge=new Jt,ge.layers.enable(le),ge.viewport=new At,D[le]=ge),ge.matrix.fromArray(Ee.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Ee.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Me.x,Me.y,Me.width,Me.height),le===0&&(y.matrix.copy(ge.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(ge)}}for(let ie=0;ie<S.length;ie++){const oe=x[ie],le=S[ie];oe!==null&&le!==void 0&&le.update(oe,Z,c||a)}q&&q(W,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),A=null}const $=new lc;$.setAnimationLoop(J),this.setAnimationLoop=function(W){q=W},this.dispose=function(){}}}function zm(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sc(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),A(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function A(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Hm(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,x){const v=x.program;n.uniformBlockBinding(S,v)}function c(S,x){let v=i[S.id];v===void 0&&(A(S),v=d(S),i[S.id]=v,S.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(S,E);const M=e.render.frame;s[S.id]!==M&&(h(S),s[S.id]=M)}function d(S){const x=u();S.__bindingPointIndex=x;const v=r.createBuffer(),E=S.__size,M=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,E,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const x=i[S.id],v=S.uniforms,E=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let M=0,_=v.length;M<_;M++){const D=Array.isArray(v[M])?v[M]:[v[M]];for(let y=0,C=D.length;y<C;y++){const P=D[y];if(f(P,M,y,E)===!0){const F=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let R=0;for(let L=0;L<N.length;L++){const O=N[L],V=g(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,F+R,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,R),R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(S,x,v,E){const M=S.value,_=x+"_"+v;if(E[_]===void 0)return typeof M=="number"||typeof M=="boolean"?E[_]=M:E[_]=M.clone(),!0;{const D=E[_];if(typeof M=="number"||typeof M=="boolean"){if(D!==M)return E[_]=M,!0}else if(D.equals(M)===!1)return D.copy(M),!0}return!1}function A(S){const x=S.uniforms;let v=0;const E=16;for(let _=0,D=x.length;_<D;_++){const y=Array.isArray(x[_])?x[_]:[x[_]];for(let C=0,P=y.length;C<P;C++){const F=y[C],N=Array.isArray(F.value)?F.value:[F.value];for(let R=0,L=N.length;R<L;R++){const O=N[R],V=g(O),X=v%E;X!==0&&E-X<V.boundary&&(v+=E-X),F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=V.storage}}}const M=v%E;return M>0&&(v+=E-M),S.__size=v,S.__cache={},this}function g(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class mc{constructor(e={}){const{canvas:t=Ld(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const f=new Uint32Array(4),A=new Int32Array(4);let g=null,m=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this._useLegacyLights=!1,this.toneMapping=Hn,this.toneMappingExposure=1;const x=this;let v=!1,E=0,M=0,_=null,D=-1,y=null;const C=new At,P=new At;let F=null;const N=new Ke(0);let R=0,L=t.width,O=t.height,V=1,X=null,H=null;const q=new At(0,0,L,O),J=new At(0,0,L,O);let $=!1;const W=new ac;let Z=!1,ie=!1,oe=null;const le=new Ue,Ee=new ye,Me=new I,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return _===null?V:1}let k=n;function He(b,G){for(let K=0;K<b.length;K++){const j=b[K],Y=t.getContext(j,G);if(Y!==null)return Y}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lo}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",ae,!1),k===null){const G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),k=He(G,b),k===null)throw He(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ae,Se,xe,qe,Ce,w,T,Q,re,ne,se,Te,pe,ve,Pe,Ne,te,Qe,U,ee,me,de,Re,Xe;function je(){Ae=new Zf(k),Se=new Xf(k,Ae,e),Ae.init(Se),de=new pc(k,Ae,Se),xe=new Fm(k,Ae,Se),qe=new ep(k),Ce=new _m,w=new Bm(k,Ae,xe,Ce,Se,de,qe),T=new Qf(x),Q=new jf(x),re=new au(k,Se),Re=new Vf(k,Ae,re,Se),ne=new Jf(k,re,qe,Re),se=new sp(k,ne,re,qe),U=new ip(k,Se,w),Ne=new qf(Ce),Te=new xm(x,T,Q,Ae,Se,Re,Ne),pe=new zm(x,Ce),ve=new ym,Pe=new wm(Ae,Se),Qe=new Gf(x,T,Q,xe,se,h,l),te=new Lm(x,se,Se),Xe=new Hm(k,qe,Se,xe),ee=new Wf(k,Ae,qe,Se),me=new $f(k,Ae,qe,Se),qe.programs=Te.programs,x.capabilities=Se,x.extensions=Ae,x.properties=Ce,x.renderLists=ve,x.shadowMap=te,x.state=xe,x.info=qe}je();const Ge=new Nm(x,k);this.xr=Ge,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=Ae.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ae.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(L,O,!1))},this.getSize=function(b){return b.set(L,O)},this.setSize=function(b,G,K=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=b,O=G,t.width=Math.floor(b*V),t.height=Math.floor(G*V),K===!0&&(t.style.width=b+"px",t.style.height=G+"px"),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(L*V,O*V).floor()},this.setDrawingBufferSize=function(b,G,K){L=b,O=G,V=K,t.width=Math.floor(b*K),t.height=Math.floor(G*K),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,G,K,j){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,G,K,j),xe.viewport(C.copy(q).multiplyScalar(V).floor())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,G,K,j){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,G,K,j),xe.scissor(P.copy(J).multiplyScalar(V).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(b){xe.setScissorTest($=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){H=b},this.getClearColor=function(b){return b.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(b=!0,G=!0,K=!0){let j=0;if(b){let Y=!1;if(_!==null){const _e=_.texture.format;Y=_e===Yi||_e===Wl||_e===uo}if(Y){const _e=_.texture.type,we=_e===bn||_e===qt||_e===co||_e===$n||_e===Gl||_e===Vl,Le=Qe.getClearColor(),Fe=Qe.getClearAlpha(),Ve=Le.r,Oe=Le.g,ze=Le.b;we?(f[0]=Ve,f[1]=Oe,f[2]=ze,f[3]=Fe,k.clearBufferuiv(k.COLOR,0,f)):(A[0]=Ve,A[1]=Oe,A[2]=ze,A[3]=Fe,k.clearBufferiv(k.COLOR,0,A))}else j|=k.COLOR_BUFFER_BIT}G&&(j|=k.DEPTH_BUFFER_BIT),K&&(j|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ve.dispose(),Pe.dispose(),Ce.dispose(),T.dispose(),Q.dispose(),se.dispose(),Re.dispose(),Xe.dispose(),Te.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Lt),Ge.removeEventListener("sessionend",st),oe&&(oe.dispose(),oe=null),Ft.stop()};function ce(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const b=qe.autoReset,G=te.enabled,K=te.autoUpdate,j=te.needsUpdate,Y=te.type;je(),qe.autoReset=b,te.enabled=G,te.autoUpdate=K,te.needsUpdate=j,te.type=Y}function ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function fe(b){const G=b.target;G.removeEventListener("dispose",fe),Ie(G)}function Ie(b){be(b),Ce.remove(b)}function be(b){const G=Ce.get(b).programs;G!==void 0&&(G.forEach(function(K){Te.releaseProgram(K)}),b.isShaderMaterial&&Te.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,K,j,Y,_e){G===null&&(G=ge);const we=Y.isMesh&&Y.matrixWorld.determinant()<0,Le=wc(b,G,K,j,Y);xe.setMaterial(j,we);let Fe=K.index,Ve=1;if(j.wireframe===!0){if(Fe=ne.getWireframeAttribute(K),Fe===void 0)return;Ve=2}const Oe=K.drawRange,ze=K.attributes.position;let ft=Oe.start*Ve,Gt=(Oe.start+Oe.count)*Ve;_e!==null&&(ft=Math.max(ft,_e.start*Ve),Gt=Math.min(Gt,(_e.start+_e.count)*Ve)),Fe!==null?(ft=Math.max(ft,0),Gt=Math.min(Gt,Fe.count)):ze!=null&&(ft=Math.max(ft,0),Gt=Math.min(Gt,ze.count));const Et=Gt-ft;if(Et<0||Et===1/0)return;Re.setup(Y,j,Le,K,Fe);let gn,dt=ee;if(Fe!==null&&(gn=re.get(Fe),dt=me,dt.setIndex(gn)),Y.isMesh)j.wireframe===!0?(xe.setLineWidth(j.wireframeLinewidth*De()),dt.setMode(k.LINES)):dt.setMode(k.TRIANGLES);else if(Y.isLine){let We=j.linewidth;We===void 0&&(We=1),xe.setLineWidth(We*De()),Y.isLineSegments?dt.setMode(k.LINES):Y.isLineLoop?dt.setMode(k.LINE_LOOP):dt.setMode(k.LINE_STRIP)}else Y.isPoints?dt.setMode(k.POINTS):Y.isSprite&&dt.setMode(k.TRIANGLES);if(Y.isBatchedMesh)dt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)dt.renderInstances(ft,Et,Y.count);else if(K.isInstancedBufferGeometry){const We=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,cr=Math.min(K.instanceCount,We);dt.renderInstances(ft,Et,cr)}else dt.render(ft,Et)};function Ze(b,G,K){b.transparent===!0&&b.side===$t&&b.forceSinglePass===!1?(b.side=Ht,b.needsUpdate=!0,ds(b,G,K),b.side=mn,b.needsUpdate=!0,ds(b,G,K),b.side=$t):ds(b,G,K)}this.compile=function(b,G,K=null){K===null&&(K=b),m=Pe.get(K),m.init(),S.push(m),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),b!==K&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(x._useLegacyLights);const j=new Set;return b.traverse(function(Y){const _e=Y.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){const Le=_e[we];Ze(Le,K,Y),j.add(Le)}else Ze(_e,K,Y),j.add(_e)}),S.pop(),m=null,j},this.compileAsync=function(b,G,K=null){const j=this.compile(b,G,K);return new Promise(Y=>{function _e(){if(j.forEach(function(we){Ce.get(we).currentProgram.isReady()&&j.delete(we)}),j.size===0){Y(b);return}setTimeout(_e,10)}Ae.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let it=null;function yt(b){it&&it(b)}function Lt(){Ft.stop()}function st(){Ft.start()}const Ft=new lc;Ft.setAnimationLoop(yt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(b){it=b,Ge.setAnimationLoop(b),b===null?Ft.stop():Ft.start()},Ge.addEventListener("sessionstart",Lt),Ge.addEventListener("sessionend",st),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(G),G=Ge.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,G,_),m=Pe.get(b,S.length),m.init(),S.push(m),le.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),W.setFromProjectionMatrix(le),ie=this.localClippingEnabled,Z=Ne.init(this.clippingPlanes,ie),g=ve.get(b,p.length),g.init(),p.push(g),dn(b,G,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(X,H),this.info.render.frame++,Z===!0&&Ne.beginShadows();const K=m.state.shadowsArray;if(te.render(K,b,G),Z===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(g,b),m.setupLights(x._useLegacyLights),G.isArrayCamera){const j=G.cameras;for(let Y=0,_e=j.length;Y<_e;Y++){const we=j[Y];Bo(g,b,we,we.viewport)}}else Bo(g,b,G);_!==null&&(w.updateMultisampleRenderTarget(_),w.updateRenderTargetMipmap(_)),b.isScene===!0&&b.onAfterRender(x,b,G),Re.resetDefaultState(),D=-1,y=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function dn(b,G,K,j){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||W.intersectsSprite(b)){j&&Me.setFromMatrixPosition(b.matrixWorld).applyMatrix4(le);const we=se.update(b),Le=b.material;Le.visible&&g.push(b,we,Le,K,Me.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||W.intersectsObject(b))){const we=se.update(b),Le=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Me.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Me.copy(we.boundingSphere.center)),Me.applyMatrix4(b.matrixWorld).applyMatrix4(le)),Array.isArray(Le)){const Fe=we.groups;for(let Ve=0,Oe=Fe.length;Ve<Oe;Ve++){const ze=Fe[Ve],ft=Le[ze.materialIndex];ft&&ft.visible&&g.push(b,we,ft,K,Me.z,ze)}}else Le.visible&&g.push(b,we,Le,K,Me.z,null)}}const _e=b.children;for(let we=0,Le=_e.length;we<Le;we++)dn(_e[we],G,K,j)}function Bo(b,G,K,j){const Y=b.opaque,_e=b.transmissive,we=b.transparent;m.setupLightsView(K),Z===!0&&Ne.setGlobalState(x.clippingPlanes,K),_e.length>0&&bc(Y,_e,G,K),j&&xe.viewport(C.copy(j)),Y.length>0&&cs(Y,G,K),_e.length>0&&cs(_e,G,K),we.length>0&&cs(we,G,K),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function bc(b,G,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const _e=Se.isWebGL2;oe===null&&(oe=new Gn(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?Bi:bn,minFilter:is,samples:_e?4:0})),x.getDrawingBufferSize(Ee),_e?oe.setSize(Ee.x,Ee.y):oe.setSize(so(Ee.x),so(Ee.y));const we=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(N),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear();const Le=x.toneMapping;x.toneMapping=Hn,cs(b,K,j),w.updateMultisampleRenderTarget(oe),w.updateRenderTargetMipmap(oe);let Fe=!1;for(let Ve=0,Oe=G.length;Ve<Oe;Ve++){const ze=G[Ve],ft=ze.object,Gt=ze.geometry,Et=ze.material,gn=ze.group;if(Et.side===$t&&ft.layers.test(j.layers)){const dt=Et.side;Et.side=Ht,Et.needsUpdate=!0,Uo(ft,K,j,Gt,Et,gn),Et.side=dt,Et.needsUpdate=!0,Fe=!0}}Fe===!0&&(w.updateMultisampleRenderTarget(oe),w.updateRenderTargetMipmap(oe)),x.setRenderTarget(we),x.setClearColor(N,R),x.toneMapping=Le}function cs(b,G,K){const j=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,_e=b.length;Y<_e;Y++){const we=b[Y],Le=we.object,Fe=we.geometry,Ve=j===null?we.material:j,Oe=we.group;Le.layers.test(K.layers)&&Uo(Le,G,K,Fe,Ve,Oe)}}function Uo(b,G,K,j,Y,_e){b.onBeforeRender(x,G,K,j,Y,_e),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(x,G,K,j,b,_e),Y.transparent===!0&&Y.side===$t&&Y.forceSinglePass===!1?(Y.side=Ht,Y.needsUpdate=!0,x.renderBufferDirect(K,G,j,Y,b,_e),Y.side=mn,Y.needsUpdate=!0,x.renderBufferDirect(K,G,j,Y,b,_e),Y.side=$t):x.renderBufferDirect(K,G,j,Y,b,_e),b.onAfterRender(x,G,K,j,Y,_e)}function ds(b,G,K){G.isScene!==!0&&(G=ge);const j=Ce.get(b),Y=m.state.lights,_e=m.state.shadowsArray,we=Y.state.version,Le=Te.getParameters(b,Y.state,_e,G,K),Fe=Te.getProgramCacheKey(Le);let Ve=j.programs;j.environment=b.isMeshStandardMaterial?G.environment:null,j.fog=G.fog,j.envMap=(b.isMeshStandardMaterial?Q:T).get(b.envMap||j.environment),Ve===void 0&&(b.addEventListener("dispose",fe),Ve=new Map,j.programs=Ve);let Oe=Ve.get(Fe);if(Oe!==void 0){if(j.currentProgram===Oe&&j.lightsStateVersion===we)return No(b,Le),Oe}else Le.uniforms=Te.getUniforms(b),b.onBuild(K,Le,x),b.onBeforeCompile(Le,x),Oe=Te.acquireProgram(Le,Fe),Ve.set(Fe,Oe),j.uniforms=Le.uniforms;const ze=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ze.clippingPlanes=Ne.uniform),No(b,Le),j.needsLights=Ic(b),j.lightsStateVersion=we,j.needsLights&&(ze.ambientLightColor.value=Y.state.ambient,ze.lightProbe.value=Y.state.probe,ze.directionalLights.value=Y.state.directional,ze.directionalLightShadows.value=Y.state.directionalShadow,ze.spotLights.value=Y.state.spot,ze.spotLightShadows.value=Y.state.spotShadow,ze.rectAreaLights.value=Y.state.rectArea,ze.ltc_1.value=Y.state.rectAreaLTC1,ze.ltc_2.value=Y.state.rectAreaLTC2,ze.pointLights.value=Y.state.point,ze.pointLightShadows.value=Y.state.pointShadow,ze.hemisphereLights.value=Y.state.hemi,ze.directionalShadowMap.value=Y.state.directionalShadowMap,ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ze.spotShadowMap.value=Y.state.spotShadowMap,ze.spotLightMatrix.value=Y.state.spotLightMatrix,ze.spotLightMap.value=Y.state.spotLightMap,ze.pointShadowMap.value=Y.state.pointShadowMap,ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),j.currentProgram=Oe,j.uniformsList=null,Oe}function Oo(b){if(b.uniformsList===null){const G=b.currentProgram.getUniforms();b.uniformsList=Gs.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function No(b,G){const K=Ce.get(b);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function wc(b,G,K,j,Y){G.isScene!==!0&&(G=ge),w.resetTextureUnits();const _e=G.fog,we=j.isMeshStandardMaterial?G.environment:null,Le=_===null?x.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:wn,Fe=(j.isMeshStandardMaterial?Q:T).get(j.envMap||we),Ve=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Oe=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ze=!!K.morphAttributes.position,ft=!!K.morphAttributes.normal,Gt=!!K.morphAttributes.color;let Et=Hn;j.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(Et=x.toneMapping);const gn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,dt=gn!==void 0?gn.length:0,We=Ce.get(j),cr=m.state.lights;if(Z===!0&&(ie===!0||b!==y)){const Kt=b===y&&j.id===D;Ne.setState(j,b,Kt)}let ht=!1;j.version===We.__version?(We.needsLights&&We.lightsStateVersion!==cr.state.version||We.outputColorSpace!==Le||Y.isBatchedMesh&&We.batching===!1||!Y.isBatchedMesh&&We.batching===!0||Y.isInstancedMesh&&We.instancing===!1||!Y.isInstancedMesh&&We.instancing===!0||Y.isSkinnedMesh&&We.skinning===!1||!Y.isSkinnedMesh&&We.skinning===!0||Y.isInstancedMesh&&We.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&We.instancingColor===!1&&Y.instanceColor!==null||We.envMap!==Fe||j.fog===!0&&We.fog!==_e||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ne.numPlanes||We.numIntersection!==Ne.numIntersection)||We.vertexAlphas!==Ve||We.vertexTangents!==Oe||We.morphTargets!==ze||We.morphNormals!==ft||We.morphColors!==Gt||We.toneMapping!==Et||Se.isWebGL2===!0&&We.morphTargetsCount!==dt)&&(ht=!0):(ht=!0,We.__version=j.version);let Vn=We.currentProgram;ht===!0&&(Vn=ds(j,G,Y));let zo=!1,ki=!1,dr=!1;const Rt=Vn.getUniforms(),Wn=We.uniforms;if(xe.useProgram(Vn.program)&&(zo=!0,ki=!0,dr=!0),j.id!==D&&(D=j.id,ki=!0),zo||y!==b){Rt.setValue(k,"projectionMatrix",b.projectionMatrix),Rt.setValue(k,"viewMatrix",b.matrixWorldInverse);const Kt=Rt.map.cameraPosition;Kt!==void 0&&Kt.setValue(k,Me.setFromMatrixPosition(b.matrixWorld)),Se.logarithmicDepthBuffer&&Rt.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Rt.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,ki=!0,dr=!0)}if(Y.isSkinnedMesh){Rt.setOptional(k,Y,"bindMatrix"),Rt.setOptional(k,Y,"bindMatrixInverse");const Kt=Y.skeleton;Kt&&(Se.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Rt.setValue(k,"boneTexture",Kt.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Rt.setOptional(k,Y,"batchingTexture"),Rt.setValue(k,"batchingTexture",Y._matricesTexture,w));const ur=K.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0&&Se.isWebGL2===!0)&&U.update(Y,K,Vn),(ki||We.receiveShadow!==Y.receiveShadow)&&(We.receiveShadow=Y.receiveShadow,Rt.setValue(k,"receiveShadow",Y.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Wn.envMap.value=Fe,Wn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ki&&(Rt.setValue(k,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&Rc(Wn,dr),_e&&j.fog===!0&&pe.refreshFogUniforms(Wn,_e),pe.refreshMaterialUniforms(Wn,j,V,O,oe),Gs.upload(k,Oo(We),Wn,w)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Gs.upload(k,Oo(We),Wn,w),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Rt.setValue(k,"center",Y.center),Rt.setValue(k,"modelViewMatrix",Y.modelViewMatrix),Rt.setValue(k,"normalMatrix",Y.normalMatrix),Rt.setValue(k,"modelMatrix",Y.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Kt=j.uniformsGroups;for(let hr=0,Dc=Kt.length;hr<Dc;hr++)if(Se.isWebGL2){const Ho=Kt[hr];Xe.update(Ho,Vn),Xe.bind(Ho,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function Rc(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function Ic(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(b,G,K){Ce.get(b.texture).__webglTexture=G,Ce.get(b.depthTexture).__webglTexture=K;const j=Ce.get(b);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=K===void 0,j.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,G){const K=Ce.get(b);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(b,G=0,K=0){_=b,E=G,M=K;let j=!0,Y=null,_e=!1,we=!1;if(b){const Fe=Ce.get(b);Fe.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(k.FRAMEBUFFER,null),j=!1):Fe.__webglFramebuffer===void 0?w.setupRenderTarget(b):Fe.__hasExternalTextures&&w.rebindTextures(b,Ce.get(b.texture).__webglTexture,Ce.get(b.depthTexture).__webglTexture);const Ve=b.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(we=!0);const Oe=Ce.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Oe[G])?Y=Oe[G][K]:Y=Oe[G],_e=!0):Se.isWebGL2&&b.samples>0&&w.useMultisampledRTT(b)===!1?Y=Ce.get(b).__webglMultisampledFramebuffer:Array.isArray(Oe)?Y=Oe[K]:Y=Oe,C.copy(b.viewport),P.copy(b.scissor),F=b.scissorTest}else C.copy(q).multiplyScalar(V).floor(),P.copy(J).multiplyScalar(V).floor(),F=$;if(xe.bindFramebuffer(k.FRAMEBUFFER,Y)&&Se.drawBuffers&&j&&xe.drawBuffers(b,Y),xe.viewport(C),xe.scissor(P),xe.setScissorTest(F),_e){const Fe=Ce.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+G,Fe.__webglTexture,K)}else if(we){const Fe=Ce.get(b.texture),Ve=G||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.__webglTexture,K||0,Ve)}D=-1},this.readRenderTargetPixels=function(b,G,K,j,Y,_e,we){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){xe.bindFramebuffer(k.FRAMEBUFFER,Le);try{const Fe=b.texture,Ve=Fe.format,Oe=Fe.type;if(Ve!==Nt&&de.convert(Ve)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Oe===Bi&&(Ae.has("EXT_color_buffer_half_float")||Se.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Oe!==bn&&de.convert(Oe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===hn&&(Se.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-j&&K>=0&&K<=b.height-Y&&k.readPixels(G,K,j,Y,de.convert(Ve),de.convert(Oe),_e)}finally{const Fe=_!==null?Ce.get(_).__webglFramebuffer:null;xe.bindFramebuffer(k.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(b,G,K=0){const j=Math.pow(2,-K),Y=Math.floor(G.image.width*j),_e=Math.floor(G.image.height*j);w.setTexture2D(G,0),k.copyTexSubImage2D(k.TEXTURE_2D,K,0,0,b.x,b.y,Y,_e),xe.unbindTexture()},this.copyTextureToTexture=function(b,G,K,j=0){const Y=G.image.width,_e=G.image.height,we=de.convert(K.format),Le=de.convert(K.type);w.setTexture2D(K,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment),G.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,j,b.x,b.y,Y,_e,we,Le,G.image.data):G.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,j,b.x,b.y,G.mipmaps[0].width,G.mipmaps[0].height,we,G.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,j,b.x,b.y,we,Le,G.image),j===0&&K.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(b,G,K,j,Y=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=b.max.x-b.min.x+1,we=b.max.y-b.min.y+1,Le=b.max.z-b.min.z+1,Fe=de.convert(j.format),Ve=de.convert(j.type);let Oe;if(j.isData3DTexture)w.setTexture3D(j,0),Oe=k.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)w.setTexture2DArray(j,0),Oe=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const ze=k.getParameter(k.UNPACK_ROW_LENGTH),ft=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Gt=k.getParameter(k.UNPACK_SKIP_PIXELS),Et=k.getParameter(k.UNPACK_SKIP_ROWS),gn=k.getParameter(k.UNPACK_SKIP_IMAGES),dt=K.isCompressedTexture?K.mipmaps[Y]:K.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,dt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,dt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,b.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,b.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,b.min.z),K.isDataTexture||K.isData3DTexture?k.texSubImage3D(Oe,Y,G.x,G.y,G.z,_e,we,Le,Fe,Ve,dt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Oe,Y,G.x,G.y,G.z,_e,we,Le,Fe,dt.data)):k.texSubImage3D(Oe,Y,G.x,G.y,G.z,_e,we,Le,Fe,Ve,dt),k.pixelStorei(k.UNPACK_ROW_LENGTH,ze),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ft),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Gt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Et),k.pixelStorei(k.UNPACK_SKIP_IMAGES,gn),Y===0&&j.generateMipmaps&&k.generateMipmap(Oe),xe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),xe.unbindTexture()},this.resetState=function(){E=0,M=0,_=null,xe.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ho?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===ir?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===wt?ei:ql}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ei?wt:wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class km extends mc{}km.prototype.isWebGL1Renderer=!0;class Gm extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Fn extends kt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=bt,d=bt,u,h){super(null,a,o,l,c,d,i,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vm extends tn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class os extends sn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const d=[],u=[],h=[],f=[];let A=0;const g=[],m=n/2;let p=0;S(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(f,2));function S(){const v=new I,E=new I;let M=0;const _=(t-e)/n;for(let D=0;D<=s;D++){const y=[],C=D/s,P=C*(t-e)+e;for(let F=0;F<=i;F++){const N=F/i,R=N*l+o,L=Math.sin(R),O=Math.cos(R);E.x=P*L,E.y=-C*n+m,E.z=P*O,u.push(E.x,E.y,E.z),v.set(L,_,O).normalize(),h.push(v.x,v.y,v.z),f.push(N,1-C),y.push(A++)}g.push(y)}for(let D=0;D<i;D++)for(let y=0;y<s;y++){const C=g[y][D],P=g[y+1][D],F=g[y+1][D+1],N=g[y][D+1];d.push(C,P,N),d.push(P,F,N),M+=6}c.addGroup(p,M,0),p+=M}function x(v){const E=A,M=new ye,_=new I;let D=0;const y=v===!0?e:t,C=v===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*C,0),h.push(0,C,0),f.push(.5,.5),A++;const P=A;for(let F=0;F<=i;F++){const R=F/i*l+o,L=Math.cos(R),O=Math.sin(R);_.x=y*O,_.y=m*C,_.z=y*L,u.push(_.x,_.y,_.z),h.push(0,C,0),M.x=L*.5+.5,M.y=O*.5*C+.5,f.push(M.x,M.y),A++}for(let F=0;F<i;F++){const N=E+F,R=P+F;v===!0?d.push(R,R+1,N):d.push(R+1,R,N),D+=3}c.addGroup(p,D,v===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ao extends os{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ao(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Js extends sn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],u=new I,h=new I,f=[],A=[],g=[],m=[];for(let p=0;p<=n;p++){const S=[],x=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const M=E/t;u.x=-e*Math.cos(i+M*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+M*s)*Math.sin(a+x*o),A.push(u.x,u.y,u.z),h.copy(u).normalize(),g.push(h.x,h.y,h.z),m.push(M+v,1-x),S.push(c++)}d.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const x=d[p][S+1],v=d[p][S],E=d[p+1][S],M=d[p+1][S+1];(p!==0||a>0)&&f.push(x,v,M),(p!==n-1||l<Math.PI)&&f.push(v,E,M)}this.setIndex(f),this.setAttribute("position",new Yt(A,3)),this.setAttribute("normal",new Yt(g,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wm extends sn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class al{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lo);class On{static idGen=0;constructor(e,t){let n,i;this.promise=new Promise((c,d)=>{n=c,i=d});const s=n.bind(this),a=i.bind(this),o=(...c)=>{s(...c)},l=c=>{a(c)};e(o.bind(this),l.bind(this)),this.abortHandler=t,this.id=On.idGen++}then(e){return new On((t,n)=>{this.promise=this.promise.then((...i)=>{const s=e(...i);s instanceof Promise||s instanceof On?s.then((...a)=>{t(...a)}):t(s)}).catch(i=>{n(i)})},this.abortHandler)}catch(e){return new On(t=>{this.promise=this.promise.then((...n)=>{t(...n)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}}class gc extends Error{constructor(e){super(e)}}(function(){const r=new Float32Array(1),e=new Int32Array(r.buffer);return function(t){r[0]=t;const n=e[0];let i=n>>16&32768,s=n>>12&2047;const a=n>>23&255;return a<103?i:a>142?(i|=31744,i|=(a==255?0:1)&&n&8388607,i):a<113?(s|=2048,i|=(s>>114-a)+(s>>113-a&1),i):(i|=a-112<<10|s>>1,i+=s&1,i)}})();const Vr=(function(){const r=new Float32Array(1),e=new Int32Array(r.buffer);return function(t){return r[0]=t,e[0]}})(),Xm=function(r,e){return r[e]+(r[e+1]<<8)+(r[e+2]<<16)+(r[e+3]<<24)},ar=function(r,e,t=!0,n){const i=new AbortController,s=i.signal;let a=!1;const o=d=>{i.abort(d),a=!0};let l=!1;const c=(d,u,h,f)=>{e&&!l&&(e(d,u,h,f),d===100&&(l=!0))};return new On((d,u)=>{const h={signal:s};n&&(h.headers=n),fetch(r,h).then(async f=>{if(!f.ok){const x=await f.text();u(new Error(`Fetch failed: ${f.status} ${f.statusText} ${x}`));return}const A=f.body.getReader();let g=0,m=f.headers.get("Content-Length"),p=m?parseInt(m):void 0;const S=[];for(;!a;)try{const{value:x,done:v}=await A.read();if(v){if(c(100,"100%",x,p),t){const _=new Blob(S).arrayBuffer();d(_)}else d();break}g+=x.length;let E,M;p!==void 0&&(E=g/p*100,M=`${E.toFixed(2)}%`),t&&S.push(x),c(E,M,x,p)}catch(x){u(x);return}}).catch(f=>{u(new gc(f))})},o)},lt=function(r,e,t){return Math.max(Math.min(r,t),e)},vi=function(){return performance.now()/1e3},Mi=r=>{if(r.geometry&&(r.geometry.dispose(),r.geometry=null),r.material&&(r.material.dispose(),r.material=null),r.children)for(let e of r.children)Mi(e)},Qt=(r,e)=>new Promise(t=>{window.setTimeout(()=>{t(r?r():void 0)},e?1:50)}),Ri=(r=0)=>{let e=0;if(r===1)e=9;else if(r===2)e=24;else if(r===3)e=45;else if(r>3)throw new Error("getSphericalHarmonicsComponentCountForDegree() -> Invalid spherical harmonics degree");return e},So=()=>{let r,e;return{promise:new Promise((n,i)=>{r=n,e=i}),resolve:r,reject:e}},Wr=r=>{let e,t;return r||(r=()=>{}),{promise:new On((i,s)=>{e=i,t=s},r),resolve:e,reject:t}};class qm{constructor(e,t,n){this.major=e,this.minor=t,this.patch=n}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function xo(){const r=navigator.userAgent;return r.indexOf("iPhone")>0||r.indexOf("iPad")>0}function Ac(){if(xo()){const r=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new qm(parseInt(r[1]||0,10),parseInt(r[2]||0,10),parseInt(r[3]||0,10))}else return null}const Qm=14;class ue{static OFFSET={X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37};constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=Ri(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+Qm,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){const t=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let n=Ri(e);for(let i=0;i<n;i++)t.push(0);return t}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){const e=ue.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,t,n,i,s,a,o,l,c,d,u,h,f,A,...g){const m=[e,t,n,i,s,a,o,l,c,d,u,h,f,A,...this.defaultSphericalHarmonics];for(let p=0;p<g.length&&p<this.sphericalHarmonicsCount;p++)m[p]=g[p];return this.addSplat(m),m}addSplatFromArray(e,t){const n=e.splats[t],i=ue.createSplat(this.sphericalHarmonicsDegree);for(let s=0;s<this.componentCount&&s<n.length;s++)i[s]=n[s];this.addSplat(i)}}class nt{static DefaultSplatSortDistanceMapPrecision=16;static MemoryPageSize=65536;static BytesPerFloat=4;static BytesPerInt=4;static MaxScenes=32;static ProgressiveLoadSectionSize=262144;static ProgressiveLoadSectionDelayDuration=15;static SphericalHarmonics8BitCompressionRange=3}const Ym=nt.SphericalHarmonics8BitCompressionRange,Bn=Ym/2,St=ss.toHalfFloat.bind(ss),_o=ss.fromHalfFloat.bind(ss),at=(r,e,t=!1,n,i)=>{if(e===0)return r;if(e===1||e===2&&!t)return ss.fromHalfFloat(r);if(e===2)return vo(r,n,i)},ji=(r,e,t)=>{r=lt(r,e,t);const n=t-e;return lt(Math.floor((r-e)/n*255),0,255)},vo=(r,e,t)=>{const n=t-e;return r/255*n+e},Sc=(r,e,t)=>ji(_o(r,e,t)),Km=(r,e,t)=>St(vo(r,e,t)),$e=(r,e,t,n=!1)=>t===0?r.getFloat32(e*4,!0):t===1||t===2&&!n?r.getUint16(e*2,!0):r.getUint8(e,!0),jm=(function(){const r=e=>e;return function(e,t,n,i=!1){if(t===n)return e;let s=r;return t===2&&i?n===1?s=Km:n==0&&(s=vo):t===2||t===1?n===0?s=_o:n==2&&(i?s=Sc:s=r):t===0&&(n===1?s=St:n==2&&(i?s=ji:s=St)),s(e)}})(),yi=(r,e,t,n,i=0)=>{const s=new Uint8Array(r,e),a=new Uint8Array(t,n);for(let o=0;o<i;o++)a[o]=s[o]};class z{static CurrentMajorVersion=0;static CurrentMinorVersion=1;static CenterComponentCount=3;static ScaleComponentCount=3;static RotationComponentCount=4;static ColorComponentCount=4;static CovarianceComponentCount=6;static SplatScaleOffsetFloat=3;static SplatRotationOffsetFloat=6;static CompressionLevels={0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}};static CovarianceSizeFloats=6;static HeaderSizeBytes=4096;static SectionHeaderSizeBytes=1024;static BucketStorageSizeBytes=12;static BucketStorageSizeFloats=3;static BucketBlockSize=5;static BucketSize=256;constructor(e,t=!0){this.constructFromBuffer(e,t)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let t=0;t<this.sections.length;t++){const n=this.sections[t];(t===0||n.sphericalHarmonicsDegree<e)&&(e=n.sphericalHarmonicsDegree)}return e}getBucketIndex(e,t){let n;const i=e.fullBucketCount*e.bucketSize;if(t<i)n=Math.floor(t/e.bucketSize);else{let s=i;n=e.fullBucketCount;let a=0;for(;s<e.splatCount;){let o=e.partiallyFilledBucketLengths[a];if(t>=s&&t<s+o)break;s+=o,n++,a++}}return n}getSplatCenter(e,t,n){const i=this.globalSplatIndexToSectionMap[e],s=this.sections[i],a=e-s.splatCountOffset,o=s.bytesPerSplat*a,l=new DataView(this.bufferData,s.dataBase+o),c=$e(l,0,this.compressionLevel),d=$e(l,1,this.compressionLevel),u=$e(l,2,this.compressionLevel);if(this.compressionLevel>=1){const f=this.getBucketIndex(s,a)*z.BucketStorageSizeFloats,A=s.compressionScaleFactor,g=s.compressionScaleRange;t.x=(c-g)*A+s.bucketArray[f],t.y=(d-g)*A+s.bucketArray[f+1],t.z=(u-g)*A+s.bucketArray[f+2]}else t.x=c,t.y=d,t.z=u;n&&t.applyMatrix4(n)}getSplatScaleAndRotation=(function(){const e=new Ue,t=new Ue,n=new Ue,i=new I,s=new I,a=new ct;return function(o,l,c,d,u){const h=this.globalSplatIndexToSectionMap[o],f=this.sections[h],A=o-f.splatCountOffset,g=f.bytesPerSplat*A+z.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,f.dataBase+g);s.set(at($e(m,0,this.compressionLevel),this.compressionLevel),at($e(m,1,this.compressionLevel),this.compressionLevel),at($e(m,2,this.compressionLevel),this.compressionLevel)),u&&(u.x!==void 0&&(s.x=u.x),u.y!==void 0&&(s.y=u.y),u.z!==void 0&&(s.z=u.z)),a.set(at($e(m,4,this.compressionLevel),this.compressionLevel),at($e(m,5,this.compressionLevel),this.compressionLevel),at($e(m,6,this.compressionLevel),this.compressionLevel),at($e(m,3,this.compressionLevel),this.compressionLevel)),d?(e.makeScale(s.x,s.y,s.z),t.makeRotationFromQuaternion(a),n.copy(e).multiply(t).multiply(d),n.decompose(i,c,l)):(l.copy(s),c.copy(a))}})();getSplatColor(e,t){const n=this.globalSplatIndexToSectionMap[e],i=this.sections[n],s=e-i.splatCountOffset,a=i.bytesPerSplat*s+z.CompressionLevels[this.compressionLevel].ColorOffsetBytes,o=new Uint8Array(this.bufferData,i.dataBase+a,4);t.set(o[0],o[1],o[2],o[3])}fillSplatCenterArray(e,t,n,i,s){const a=this.splatCount;n=n||0,i=i||a-1,s===void 0&&(s=n);const o=new I;for(let l=n;l<=i;l++){const c=this.globalSplatIndexToSectionMap[l],d=this.sections[c],u=l-d.splatCountOffset,h=(l-n+s)*z.CenterComponentCount,f=d.bytesPerSplat*u,A=new DataView(this.bufferData,d.dataBase+f),g=$e(A,0,this.compressionLevel),m=$e(A,1,this.compressionLevel),p=$e(A,2,this.compressionLevel);if(this.compressionLevel>=1){const x=this.getBucketIndex(d,u)*z.BucketStorageSizeFloats,v=d.compressionScaleFactor,E=d.compressionScaleRange;o.x=(g-E)*v+d.bucketArray[x],o.y=(m-E)*v+d.bucketArray[x+1],o.z=(p-E)*v+d.bucketArray[x+2]}else o.x=g,o.y=m,o.z=p;t&&o.applyMatrix4(t),e[h]=o.x,e[h+1]=o.y,e[h+2]=o.z}}fillSplatScaleRotationArray=(function(){const e=new Ue,t=new Ue,n=new Ue,i=new I,s=new ct,a=new I,o=l=>{const c=l.w<0?-1:1;l.x*=c,l.y*=c,l.z*=c,l.w*=c};return function(l,c,d,u,h,f,A,g){const m=this.splatCount;u=u||0,h=h||m-1,f===void 0&&(f=u);const p=(S,x)=>jm(S,x,A);for(let S=u;S<=h;S++){const x=this.globalSplatIndexToSectionMap[S],v=this.sections[x],E=S-v.splatCountOffset,M=v.bytesPerSplat*E+z.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,_=(S-u+f)*z.ScaleComponentCount,D=(S-u+f)*z.RotationComponentCount,y=new DataView(this.bufferData,v.dataBase+M),C=g&&g.x!==void 0?g.x:$e(y,0,this.compressionLevel),P=g&&g.y!==void 0?g.y:$e(y,1,this.compressionLevel),F=g&&g.z!==void 0?g.z:$e(y,2,this.compressionLevel),N=$e(y,3,this.compressionLevel),R=$e(y,4,this.compressionLevel),L=$e(y,5,this.compressionLevel),O=$e(y,6,this.compressionLevel);i.set(at(C,this.compressionLevel),at(P,this.compressionLevel),at(F,this.compressionLevel)),s.set(at(R,this.compressionLevel),at(L,this.compressionLevel),at(O,this.compressionLevel),at(N,this.compressionLevel)).normalize(),d&&(a.set(0,0,0),e.makeScale(i.x,i.y,i.z),t.makeRotationFromQuaternion(s),n.identity().premultiply(e).premultiply(t),n.premultiply(d),n.decompose(a,s,i),s.normalize()),o(s),l&&(l[_]=p(i.x,0),l[_+1]=p(i.y,0),l[_+2]=p(i.z,0)),c&&(c[D]=p(s.x,0),c[D+1]=p(s.y,0),c[D+2]=p(s.z,0),c[D+3]=p(s.w,0))}}})();static computeCovariance=(function(){const e=new Ue,t=new Be,n=new Be,i=new Be,s=new Be,a=new Be,o=new Be;return function(l,c,d,u,h=0,f){e.makeScale(l.x,l.y,l.z),t.setFromMatrix4(e),e.makeRotationFromQuaternion(c),n.setFromMatrix4(e),i.copy(n).multiply(t),s.copy(i).transpose().premultiply(i),d&&(a.setFromMatrix4(d),o.copy(a).transpose(),s.multiply(o),s.premultiply(a)),f>=1?(u[h]=St(s.elements[0]),u[h+1]=St(s.elements[3]),u[h+2]=St(s.elements[6]),u[h+3]=St(s.elements[4]),u[h+4]=St(s.elements[7]),u[h+5]=St(s.elements[8])):(u[h]=s.elements[0],u[h+1]=s.elements[3],u[h+2]=s.elements[6],u[h+3]=s.elements[4],u[h+4]=s.elements[7],u[h+5]=s.elements[8])}})();fillSplatCovarianceArray(e,t,n,i,s,a){const o=this.splatCount,l=new I,c=new ct;n=n||0,i=i||o-1,s===void 0&&(s=n);for(let d=n;d<=i;d++){const u=this.globalSplatIndexToSectionMap[d],h=this.sections[u],f=d-h.splatCountOffset,A=(d-n+s)*z.CovarianceComponentCount,g=h.bytesPerSplat*f+z.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,h.dataBase+g);l.set(at($e(m,0,this.compressionLevel),this.compressionLevel),at($e(m,1,this.compressionLevel),this.compressionLevel),at($e(m,2,this.compressionLevel),this.compressionLevel)),c.set(at($e(m,4,this.compressionLevel),this.compressionLevel),at($e(m,5,this.compressionLevel),this.compressionLevel),at($e(m,6,this.compressionLevel),this.compressionLevel),at($e(m,3,this.compressionLevel),this.compressionLevel)),z.computeCovariance(l,c,t,e,A,a)}}fillSplatColorArray(e,t,n,i,s){const a=this.splatCount;n=n||0,i=i||a-1,s===void 0&&(s=n);for(let o=n;o<=i;o++){const l=this.globalSplatIndexToSectionMap[o],c=this.sections[l],d=o-c.splatCountOffset,u=(o-n+s)*z.ColorComponentCount,h=c.bytesPerSplat*d+z.CompressionLevels[this.compressionLevel].ColorOffsetBytes,f=new Uint8Array(this.bufferData,c.dataBase+h);let A=f[3];A=A>=t?A:0,e[u]=f[0],e[u+1]=f[1],e[u+2]=f[2],e[u+3]=A}}fillSphericalHarmonicsArray=(function(){for(let R=0;R<15;R++)new I;const e=new Be,t=new Ue,n=new I,i=new I,s=new ct,a=[],o=[],l=[],c=[],d=[],u=[],h=[],f=[],A=[],g=[],m=[],p=[],S=[],x=[],v=[],E=[],M=[],_=[],D=R=>R,y=(R,L,O,V)=>{R[0]=L,R[1]=O,R[2]=V},C=(R,L,O,V,X)=>{R[0]=$e(L,V,X,!0),R[1]=$e(L,V+O,X,!0),R[2]=$e(L,V+O+O,X,!0)},P=(R,L)=>{L[0]=R[0],L[1]=R[1],L[2]=R[2]},F=(R,L,O,V)=>{L[O]=V(R[0]),L[O+1]=V(R[1]),L[O+2]=V(R[2])},N=(R,L,O,V,X)=>(L[0]=at(R[0],O,!0,V,X),L[1]=at(R[1],O,!0,V,X),L[2]=at(R[2],O,!0,V,X),L);return function(R,L,O,V,X,H,q){const J=this.splatCount;V=V||0,X=X||J-1,H===void 0&&(H=V),O&&L>=1&&(t.copy(O),t.decompose(n,s,i),s.normalize(),t.makeRotationFromQuaternion(s),e.setFromMatrix4(t),y(a,e.elements[4],-e.elements[7],e.elements[1]),y(o,-e.elements[5],e.elements[8],-e.elements[2]),y(l,e.elements[3],-e.elements[6],e.elements[0]));const $=Z=>Sc(Z,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),W=Z=>ji(Z,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let Z=V;Z<=X;Z++){const ie=this.globalSplatIndexToSectionMap[Z],oe=this.sections[ie];L=Math.min(L,oe.sphericalHarmonicsDegree);const le=Ri(L),Ee=Z-oe.splatCountOffset,Me=oe.bytesPerSplat*Ee+z.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,ge=new DataView(this.bufferData,oe.dataBase+Me),De=(Z-V+H)*le;let k=O?0:this.compressionLevel,He=D;k!==q&&(k===1?q===0?He=_o:q==2&&(He=$):k===0&&(q===1?He=St:q==2&&(He=W)));const Ae=this.minSphericalHarmonicsCoeff,Se=this.maxSphericalHarmonicsCoeff;L>=1&&(C(A,ge,3,0,this.compressionLevel),C(g,ge,3,1,this.compressionLevel),C(m,ge,3,2,this.compressionLevel),O?(N(A,A,this.compressionLevel,Ae,Se),N(g,g,this.compressionLevel,Ae,Se),N(m,m,this.compressionLevel,Ae,Se),z.rotateSphericalHarmonics3(A,g,m,a,o,l,x,v,E)):(P(A,x),P(g,v),P(m,E)),F(x,R,De,He),F(v,R,De+3,He),F(E,R,De+6,He),L>=2&&(C(A,ge,5,9,this.compressionLevel),C(g,ge,5,10,this.compressionLevel),C(m,ge,5,11,this.compressionLevel),C(p,ge,5,12,this.compressionLevel),C(S,ge,5,13,this.compressionLevel),O?(N(A,A,this.compressionLevel,Ae,Se),N(g,g,this.compressionLevel,Ae,Se),N(m,m,this.compressionLevel,Ae,Se),N(p,p,this.compressionLevel,Ae,Se),N(S,S,this.compressionLevel,Ae,Se),z.rotateSphericalHarmonics5(A,g,m,p,S,a,o,l,c,d,u,h,f,x,v,E,M,_)):(P(A,x),P(g,v),P(m,E),P(p,M),P(S,_)),F(x,R,De+9,He),F(v,R,De+12,He),F(E,R,De+15,He),F(M,R,De+18,He),F(_,R,De+21,He)))}}})();static dot3=(e,t,n,i,s)=>{s[0]=s[1]=s[2]=0;const a=i[0],o=i[1],l=i[2];z.addInto3(e[0]*a,e[1]*a,e[2]*a,s),z.addInto3(t[0]*o,t[1]*o,t[2]*o,s),z.addInto3(n[0]*l,n[1]*l,n[2]*l,s)};static addInto3=(e,t,n,i)=>{i[0]=i[0]+e,i[1]=i[1]+t,i[2]=i[2]+n};static dot5=(e,t,n,i,s,a,o)=>{o[0]=o[1]=o[2]=0;const l=a[0],c=a[1],d=a[2],u=a[3],h=a[4];z.addInto3(e[0]*l,e[1]*l,e[2]*l,o),z.addInto3(t[0]*c,t[1]*c,t[2]*c,o),z.addInto3(n[0]*d,n[1]*d,n[2]*d,o),z.addInto3(i[0]*u,i[1]*u,i[2]*u,o),z.addInto3(s[0]*h,s[1]*h,s[2]*h,o)};static rotateSphericalHarmonics3=(e,t,n,i,s,a,o,l,c)=>{z.dot3(e,t,n,i,o),z.dot3(e,t,n,s,l),z.dot3(e,t,n,a,c)};static rotateSphericalHarmonics5=(e,t,n,i,s,a,o,l,c,d,u,h,f,A,g,m,p,S)=>{const x=Math.sqrt(.25),v=Math.sqrt(3/4),E=Math.sqrt(1/3),M=Math.sqrt(4/3),_=Math.sqrt(1/12);c[0]=x*(l[2]*a[0]+l[0]*a[2]+(a[2]*l[0]+a[0]*l[2])),c[1]=l[1]*a[0]+a[1]*l[0],c[2]=v*(l[1]*a[1]+a[1]*l[1]),c[3]=l[1]*a[2]+a[1]*l[2],c[4]=x*(l[2]*a[2]-l[0]*a[0]+(a[2]*l[2]-a[0]*l[0])),z.dot5(e,t,n,i,s,c,A),d[0]=x*(o[2]*a[0]+o[0]*a[2]+(a[2]*o[0]+a[0]*o[2])),d[1]=o[1]*a[0]+a[1]*o[0],d[2]=v*(o[1]*a[1]+a[1]*o[1]),d[3]=o[1]*a[2]+a[1]*o[2],d[4]=x*(o[2]*a[2]-o[0]*a[0]+(a[2]*o[2]-a[0]*o[0])),z.dot5(e,t,n,i,s,d,g),u[0]=E*(o[2]*o[0]+o[0]*o[2])+-_*(l[2]*l[0]+l[0]*l[2]+(a[2]*a[0]+a[0]*a[2])),u[1]=M*o[1]*o[0]+-E*(l[1]*l[0]+a[1]*a[0]),u[2]=o[1]*o[1]+-x*(l[1]*l[1]+a[1]*a[1]),u[3]=M*o[1]*o[2]+-E*(l[1]*l[2]+a[1]*a[2]),u[4]=E*(o[2]*o[2]-o[0]*o[0])+-_*(l[2]*l[2]-l[0]*l[0]+(a[2]*a[2]-a[0]*a[0])),z.dot5(e,t,n,i,s,u,m),h[0]=x*(o[2]*l[0]+o[0]*l[2]+(l[2]*o[0]+l[0]*o[2])),h[1]=o[1]*l[0]+l[1]*o[0],h[2]=v*(o[1]*l[1]+l[1]*o[1]),h[3]=o[1]*l[2]+l[1]*o[2],h[4]=x*(o[2]*l[2]-o[0]*l[0]+(l[2]*o[2]-l[0]*o[0])),z.dot5(e,t,n,i,s,h,p),f[0]=x*(l[2]*l[0]+l[0]*l[2]-(a[2]*a[0]+a[0]*a[2])),f[1]=l[1]*l[0]-a[1]*a[0],f[2]=v*(l[1]*l[1]-a[1]*a[1]),f[3]=l[1]*l[2]-a[1]*a[2],f[4]=x*(l[2]*l[2]-l[0]*l[0]-(a[2]*a[2]-a[0]*a[0])),z.dot5(e,t,n,i,s,f,S)};static parseHeader(e){const t=new Uint8Array(e,0,z.HeaderSizeBytes),n=new Uint16Array(e,0,z.HeaderSizeBytes/2),i=new Uint32Array(e,0,z.HeaderSizeBytes/4),s=new Float32Array(e,0,z.HeaderSizeBytes/4),a=t[0],o=t[1],l=i[1],c=i[2],d=i[3],u=i[4],h=n[10],f=new I(s[6],s[7],s[8]),A=s[9]||-Bn,g=s[10]||Bn;return{versionMajor:a,versionMinor:o,maxSectionCount:l,sectionCount:c,maxSplatCount:d,splatCount:u,compressionLevel:h,sceneCenter:f,minSphericalHarmonicsCoeff:A,maxSphericalHarmonicsCoeff:g}}static writeHeaderCountsToBuffer(e,t,n){const i=new Uint32Array(n,0,z.HeaderSizeBytes/4);i[2]=e,i[4]=t}static writeHeaderToBuffer(e,t){const n=new Uint8Array(t,0,z.HeaderSizeBytes),i=new Uint16Array(t,0,z.HeaderSizeBytes/2),s=new Uint32Array(t,0,z.HeaderSizeBytes/4),a=new Float32Array(t,0,z.HeaderSizeBytes/4);n[0]=e.versionMajor,n[1]=e.versionMinor,n[2]=0,n[3]=0,s[1]=e.maxSectionCount,s[2]=e.sectionCount,s[3]=e.maxSplatCount,s[4]=e.splatCount,i[10]=e.compressionLevel,a[6]=e.sceneCenter.x,a[7]=e.sceneCenter.y,a[8]=e.sceneCenter.z,a[9]=e.minSphericalHarmonicsCoeff||-Bn,a[10]=e.maxSphericalHarmonicsCoeff||Bn}static parseSectionHeaders(e,t,n=0,i){const s=e.compressionLevel,a=e.maxSectionCount,o=new Uint16Array(t,n,a*z.SectionHeaderSizeBytes/2),l=new Uint32Array(t,n,a*z.SectionHeaderSizeBytes/4),c=new Float32Array(t,n,a*z.SectionHeaderSizeBytes/4),d=[];let u=0,h=u/2,f=u/4,A=z.HeaderSizeBytes+e.maxSectionCount*z.SectionHeaderSizeBytes,g=0;for(let m=0;m<a;m++){const p=l[f+1],S=l[f+2],x=l[f+3],v=c[f+4],E=v/2,M=o[h+10],_=l[f+6]||z.CompressionLevels[s].ScaleRange,D=l[f+8],y=l[f+9],C=y*4,P=M*x+C,F=o[h+20],{bytesPerSplat:N}=z.calculateComponentStorage(s,F),R=N*p,L=R+P,O={bytesPerSplat:N,splatCountOffset:g,splatCount:i?p:0,maxSplatCount:p,bucketSize:S,bucketCount:x,bucketBlockSize:v,halfBucketBlockSize:E,bucketStorageSizeBytes:M,bucketsStorageSizeBytes:P,splatDataStorageSizeBytes:R,storageSizeBytes:L,compressionScaleRange:_,compressionScaleFactor:E/_,base:A,bucketsBase:A+C,dataBase:A+P,fullBucketCount:D,partiallyFilledBucketCount:y,sphericalHarmonicsDegree:F};d[m]=O,A+=L,u+=z.SectionHeaderSizeBytes,h=u/2,f=u/4,g+=p}return d}static writeSectionHeaderToBuffer(e,t,n,i=0){const s=new Uint16Array(n,i,z.SectionHeaderSizeBytes/2),a=new Uint32Array(n,i,z.SectionHeaderSizeBytes/4),o=new Float32Array(n,i,z.SectionHeaderSizeBytes/4);a[0]=e.splatCount,a[1]=e.maxSplatCount,a[2]=t>=1?e.bucketSize:0,a[3]=t>=1?e.bucketCount:0,o[4]=t>=1?e.bucketBlockSize:0,s[10]=t>=1?z.BucketStorageSizeBytes:0,a[6]=t>=1?e.compressionScaleRange:0,a[7]=e.storageSizeBytes,a[8]=t>=1?e.fullBucketCount:0,a[9]=t>=1?e.partiallyFilledBucketCount:0,s[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,t,n=0){const i=new Uint32Array(t,n,z.SectionHeaderSizeBytes/4);i[0]=e}constructFromBuffer(e,t){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];const n=z.parseHeader(this.bufferData);this.versionMajor=n.versionMajor,this.versionMinor=n.versionMinor,this.maxSectionCount=n.maxSectionCount,this.sectionCount=t?n.maxSectionCount:0,this.maxSplatCount=n.maxSplatCount,this.splatCount=t?n.maxSplatCount:0,this.compressionLevel=n.compressionLevel,this.sceneCenter=new I().copy(n.sceneCenter),this.minSphericalHarmonicsCoeff=n.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=n.maxSphericalHarmonicsCoeff,this.sections=z.parseSectionHeaders(n,this.bufferData,z.HeaderSizeBytes,t),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,t){const n=z.CompressionLevels[e].BytesPerCenter,i=z.CompressionLevels[e].BytesPerScale,s=z.CompressionLevels[e].BytesPerRotation,a=z.CompressionLevels[e].BytesPerColor,o=Ri(t),l=z.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*o,c=n+i+s+a+l;return{bytesPerCenter:n,bytesPerScale:i,bytesPerRotation:s,bytesPerColor:a,sphericalHarmonicsComponentsPerSplat:o,sphericalHarmonicsBytesPerSplat:l,bytesPerSplat:c}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){const t=this.sections[e];t.bucketArray=new Float32Array(this.bufferData,t.bucketsBase,t.bucketCount*z.BucketStorageSizeFloats),t.partiallyFilledBucketCount>0&&(t.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,t.base,t.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let t=0;t<this.maxSectionCount;t++){const n=this.sections[t];for(let i=0;i<n.maxSplatCount;i++){const s=e+i;this.globalSplatIndexToLocalSplatIndexMap[s]=i,this.globalSplatIndexToSectionMap[s]=t}e+=n.maxSplatCount}}updateLoadedCounts(e,t){z.writeHeaderCountsToBuffer(e,t,this.bufferData),this.sectionCount=e,this.splatCount=t}updateSectionLoadedCounts(e,t){const n=z.HeaderSizeBytes+z.SectionHeaderSizeBytes*e;z.writeSectionHeaderSplatCountToBuffer(t,this.bufferData,n),this.sections[e].splatCount=t}static writeSplatDataToSectionBuffer=(function(){const e=new ArrayBuffer(12),t=new ArrayBuffer(12),n=new ArrayBuffer(16),i=new ArrayBuffer(4),s=new ArrayBuffer(256),a=new ct,o=new I,l=new I,{X:c,Y:d,Z:u,SCALE0:h,SCALE1:f,SCALE2:A,ROTATION0:g,ROTATION1:m,ROTATION2:p,ROTATION3:S,FDC0:x,FDC1:v,FDC2:E,OPACITY:M,FRC0:_,FRC9:D}=ue.OFFSET,y=(C,P,F)=>{const N=F*2+1;return C=Math.round(C*P)+F,lt(C,0,N)};return function(C,P,F,N,R,L,O,V,X=-Bn,H=Bn){const q=Ri(R),J=z.CompressionLevels[N].BytesPerCenter,$=z.CompressionLevels[N].BytesPerScale,W=z.CompressionLevels[N].BytesPerRotation,Z=z.CompressionLevels[N].BytesPerColor,ie=F,oe=ie+J,le=oe+$,Ee=le+W,Me=Ee+Z;if(C[g]!==void 0?(a.set(C[g],C[m],C[p],C[S]),a.normalize()):a.set(1,0,0,0),C[h]!==void 0?o.set(C[h]||0,C[f]||0,C[A]||0):o.set(0,0,0),N===0){const De=new Float32Array(P,ie,z.CenterComponentCount),k=new Float32Array(P,le,z.RotationComponentCount),He=new Float32Array(P,oe,z.ScaleComponentCount);if(k.set([a.x,a.y,a.z,a.w]),He.set([o.x,o.y,o.z]),De.set([C[c],C[d],C[u]]),R>0){const Ae=new Float32Array(P,Me,q);if(R>=1){for(let Se=0;Se<9;Se++)Ae[Se]=C[_+Se]||0;if(R>=2)for(let Se=0;Se<15;Se++)Ae[Se+9]=C[D+Se]||0}}}else{const De=new Uint16Array(e,0,z.CenterComponentCount),k=new Uint16Array(n,0,z.RotationComponentCount),He=new Uint16Array(t,0,z.ScaleComponentCount);if(k.set([St(a.x),St(a.y),St(a.z),St(a.w)]),He.set([St(o.x),St(o.y),St(o.z)]),l.set(C[c],C[d],C[u]).sub(L),l.x=y(l.x,O,V),l.y=y(l.y,O,V),l.z=y(l.z,O,V),De.set([l.x,l.y,l.z]),R>0){const Ae=N===1?Uint16Array:Uint8Array,Se=N===1?2:1,xe=new Ae(s,0,q);if(R>=1){for(let Ce=0;Ce<9;Ce++){const w=C[_+Ce]||0;xe[Ce]=N===1?St(w):ji(w,X,H)}const qe=9*Se;if(yi(xe.buffer,0,P,Me,qe),R>=2){for(let Ce=0;Ce<15;Ce++){const w=C[D+Ce]||0;xe[Ce+9]=N===1?St(w):ji(w,X,H)}yi(xe.buffer,qe,P,Me+qe,15*Se)}}}yi(De.buffer,0,P,ie,6),yi(He.buffer,0,P,oe,6),yi(k.buffer,0,P,le,8)}const ge=new Uint8ClampedArray(i,0,4);ge.set([C[x]||0,C[v]||0,C[E]||0]),ge[3]=C[M]||0,yi(ge.buffer,0,P,Ee,4)}})();static generateFromUncompressedSplatArrays(e,t,n,i,s,a,o=[]){let l=0;for(let E=0;E<e.length;E++){const M=e[E];l=Math.max(M.sphericalHarmonicsDegree,l)}let c,d;for(let E=0;E<e.length;E++){const M=e[E];for(let _=0;_<M.splats.length;_++){const D=M.splats[_];for(let y=ue.OFFSET.FRC0;y<ue.OFFSET.FRC23&&y<D.length;y++)(!c||D[y]<c)&&(c=D[y]),(!d||D[y]>d)&&(d=D[y])}}c=c||-Bn,d=d||Bn;const{bytesPerSplat:u}=z.calculateComponentStorage(n,l),h=z.CompressionLevels[n].ScaleRange,f=[],A=[];let g=0;for(let E=0;E<e.length;E++){const M=e[E],_=new ue(l);for(let ie=0;ie<M.splatCount;ie++){const oe=M.splats[ie];(oe[ue.OFFSET.OPACITY]||0)>=t&&_.addSplat(oe)}const D=o[E]||{},y=(D.blockSizeFactor||1)*(s||z.BucketBlockSize),C=Math.ceil((D.bucketSizeFactor||1)*(a||z.BucketSize)),P=z.computeBucketsForUncompressedSplatArray(_,y,C),F=P.fullBuckets.length,N=P.partiallyFullBuckets.map(ie=>ie.splats.length),R=N.length,L=[...P.fullBuckets,...P.partiallyFullBuckets],O=_.splats.length*u,V=R*4,X=n>=1?L.length*z.BucketStorageSizeBytes+V:0,H=O+X,q=new ArrayBuffer(H),J=h/(y*.5),$=new I;let W=0;for(let ie=0;ie<L.length;ie++){const oe=L[ie];$.fromArray(oe.center);for(let le=0;le<oe.splats.length;le++){let Ee=oe.splats[le];const Me=_.splats[Ee],ge=X+W*u;z.writeSplatDataToSectionBuffer(Me,q,ge,n,l,$,J,h,c,d),W++}}if(g+=W,n>=1){const ie=new Uint32Array(q,0,N.length*4);for(let le=0;le<N.length;le++)ie[le]=N[le];const oe=new Float32Array(q,V,L.length*z.BucketStorageSizeFloats);for(let le=0;le<L.length;le++){const Ee=L[le],Me=le*3;oe[Me]=Ee.center[0],oe[Me+1]=Ee.center[1],oe[Me+2]=Ee.center[2]}}f.push(q);const Z=new ArrayBuffer(z.SectionHeaderSizeBytes);z.writeSectionHeaderToBuffer({maxSplatCount:W,splatCount:W,bucketSize:C,bucketCount:L.length,bucketBlockSize:y,compressionScaleRange:h,storageSizeBytes:H,fullBucketCount:F,partiallyFilledBucketCount:R,sphericalHarmonicsDegree:l},n,Z,0),A.push(Z)}let m=0;for(let E of f)m+=E.byteLength;const p=z.HeaderSizeBytes+z.SectionHeaderSizeBytes*f.length+m,S=new ArrayBuffer(p);z.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:f.length,sectionCount:f.length,maxSplatCount:g,splatCount:g,compressionLevel:n,sceneCenter:i,minSphericalHarmonicsCoeff:c,maxSphericalHarmonicsCoeff:d},S);let x=z.HeaderSizeBytes;for(let E of A)new Uint8Array(S,x,z.SectionHeaderSizeBytes).set(new Uint8Array(E)),x+=z.SectionHeaderSizeBytes;for(let E of f)new Uint8Array(S,x,E.byteLength).set(new Uint8Array(E)),x+=E.byteLength;return new z(S)}static computeBucketsForUncompressedSplatArray(e,t,n){let i=e.splatCount;const s=t/2,a=new I,o=new I;for(let g=0;g<i;g++){const m=e.splats[g],p=[m[ue.OFFSET.X],m[ue.OFFSET.Y],m[ue.OFFSET.Z]];(g===0||p[0]<a.x)&&(a.x=p[0]),(g===0||p[0]>o.x)&&(o.x=p[0]),(g===0||p[1]<a.y)&&(a.y=p[1]),(g===0||p[1]>o.y)&&(o.y=p[1]),(g===0||p[2]<a.z)&&(a.z=p[2]),(g===0||p[2]>o.z)&&(o.z=p[2])}const l=new I().copy(o).sub(a),c=Math.ceil(l.y/t),d=Math.ceil(l.z/t),u=new I,h=[],f={};for(let g=0;g<i;g++){const m=e.splats[g],p=[m[ue.OFFSET.X],m[ue.OFFSET.Y],m[ue.OFFSET.Z]],S=Math.floor((p[0]-a.x)/t),x=Math.floor((p[1]-a.y)/t),v=Math.floor((p[2]-a.z)/t);u.x=S*t+a.x+s,u.y=x*t+a.y+s,u.z=v*t+a.z+s;const E=S*(c*d)+x*d+v;let M=f[E];M||(f[E]=M={splats:[],center:u.toArray()}),M.splats.push(g),M.splats.length>=n&&(h.push(M),f[E]=null)}const A=[];for(let g in f)if(f.hasOwnProperty(g)){const m=f[g];m&&A.push(m)}return{fullBuckets:h,partiallyFullBuckets:A}}static preallocateUncompressed(e,t){const n=z.CompressionLevels[0].SphericalHarmonicsDegrees[t],i=z.HeaderSizeBytes+z.SectionHeaderSizeBytes,s=i+n.BytesPerSplat*e,a=new ArrayBuffer(s);return z.writeHeaderToBuffer({versionMajor:z.CurrentMajorVersion,versionMinor:z.CurrentMinorVersion,maxSectionCount:1,sectionCount:1,maxSplatCount:e,splatCount:e,compressionLevel:0,sceneCenter:new I},a),z.writeSectionHeaderToBuffer({maxSplatCount:e,splatCount:e,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:t},0,a,z.HeaderSizeBytes),{splatBuffer:new z(a,!0),splatBufferDataOffsetBytes:i}}}const ll=new Uint8Array([112,108,121,10]),cl=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),Xr="end_header",qr=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),pn=(r,e)=>{const t=(1<<e)-1;return(r&t)/t},dl=(r,e)=>{r.x=pn(e>>>21,11),r.y=pn(e>>>11,10),r.z=pn(e,11)},Zm=(r,e)=>{r.x=pn(e>>>24,8),r.y=pn(e>>>16,8),r.z=pn(e>>>8,8),r.w=pn(e,8)},Jm=(r,e)=>{const t=1/(Math.sqrt(2)*.5),n=(pn(e>>>20,10)-.5)*t,i=(pn(e>>>10,10)-.5)*t,s=(pn(e,10)-.5)*t,a=Math.sqrt(1-(n*n+i*i+s*s));switch(e>>>30){case 0:r.set(a,n,i,s);break;case 1:r.set(n,a,i,s);break;case 2:r.set(n,i,a,s);break;case 3:r.set(n,i,s,a);break}},yn=(r,e,t)=>r*(1-t)+e*t,ut=(r,e)=>r.properties.find(t=>t.name===e&&t.storage)?.storage;class Ye{static decodeHeaderText(e){let t,n,i,s;const a=e.split(`
`).filter(u=>!u.startsWith("comment "));let o=0,l=!1;for(let u=1;u<a.length;++u){const h=a[u].split(" ");switch(h[0]){case"format":if(h[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":t={name:h[1],count:parseInt(h[2],10),properties:[],storageSizeBytes:0},t.name==="chunk"?n=t:t.name==="vertex"?i=t:t.name==="sh"&&(s=t);break;case"property":{if(!qr.has(h[1]))throw new Error(`Unrecognized property data type '${h[1]}' in ply header`);const f=qr.get(h[1]),A=f.BYTES_PER_ELEMENT*t.count;t.name==="vertex"&&(o+=f.BYTES_PER_ELEMENT),t.properties.push({type:h[1],name:h[2],storage:null,byteSize:f.BYTES_PER_ELEMENT,storageSizeByes:A}),t.storageSizeBytes+=A;break}case Xr:l=!0;break;default:throw new Error(`Unrecognized header value '${h[0]}' in ply header`)}if(l)break}let c=0,d=0;return s&&(d=s.properties.length,s.properties.length>=45?c=3:s.properties.length>=24?c=2:s.properties.length>=9&&(c=1)),{chunkElement:n,vertexElement:i,shElement:s,bytesPerSplat:o,headerSizeBytes:e.indexOf(Xr)+Xr.length+1,sphericalHarmonicsDegree:c,sphericalHarmonicsPerSplat:d}}static decodeHeader(e){const t=(f,A)=>{const g=f.length-A.length;let m,p;for(m=0;m<=g;++m){for(p=0;p<A.length&&f[m+p]===A[p];++p);if(p===A.length)return m}return-1},n=(f,A)=>{if(f.length<A.length)return!1;for(let g=0;g<A.length;++g)if(f[g]!==A[g])return!1;return!0};let i=new Uint8Array(e),s;if(i.length>=ll.length&&!n(i,ll))throw new Error("Invalid PLY header");if(s=t(i,cl),s===-1)throw new Error("End of PLY header not found");const a=new TextDecoder("ascii").decode(i.slice(0,s)),{chunkElement:o,vertexElement:l,shElement:c,sphericalHarmonicsDegree:d,sphericalHarmonicsPerSplat:u,bytesPerSplat:h}=Ye.decodeHeaderText(a);return{headerSizeBytes:s+cl.length,bytesPerSplat:h,chunkElement:o,vertexElement:l,shElement:c,sphericalHarmonicsDegree:d,sphericalHarmonicsPerSplat:u}}static readElementData(e,t,n,i,s,a=null){let o=t instanceof DataView?t:new DataView(t);i=i||0,s=s||e.count-1;for(let l=i;l<=s;++l)for(let c=0;c<e.properties.length;++c){const d=e.properties[c],u=qr.get(d.type),h=u.BYTES_PER_ELEMENT*e.count;if((!d.storage||d.storage.byteLength<h)&&(!a||a(d.name))&&(d.storage=new u(e.count)),d.storage)switch(d.type){case"char":d.storage[l]=o.getInt8(n);break;case"uchar":d.storage[l]=o.getUint8(n);break;case"short":d.storage[l]=o.getInt16(n,!0);break;case"ushort":d.storage[l]=o.getUint16(n,!0);break;case"int":d.storage[l]=o.getInt32(n,!0);break;case"uint":d.storage[l]=o.getUint32(n,!0);break;case"float":d.storage[l]=o.getFloat32(n,!0);break;case"double":d.storage[l]=o.getFloat64(n,!0);break}n+=d.byteSize}return n}static readPly(e,t=null){const n=Ye.decodeHeader(e);let i=Ye.readElementData(n.chunkElement,e,n.headerSizeBytes,null,null,t);return i=Ye.readElementData(n.vertexElement,e,i,null,null,t),Ye.readElementData(n.shElement,e,i,null,null,t),{chunkElement:n.chunkElement,vertexElement:n.vertexElement,shElement:n.shElement,sphericalHarmonicsDegree:n.sphericalHarmonicsDegree,sphericalHarmonicsPerSplat:n.sphericalHarmonicsPerSplat}}static getElementStorageArrays(e,t,n){const i={};if(t){const s=ut(e,"min_r"),a=ut(e,"min_g"),o=ut(e,"min_b"),l=ut(e,"max_r"),c=ut(e,"max_g"),d=ut(e,"max_b"),u=ut(e,"min_x"),h=ut(e,"min_y"),f=ut(e,"min_z"),A=ut(e,"max_x"),g=ut(e,"max_y"),m=ut(e,"max_z"),p=ut(e,"min_scale_x"),S=ut(e,"min_scale_y"),x=ut(e,"min_scale_z"),v=ut(e,"max_scale_x"),E=ut(e,"max_scale_y"),M=ut(e,"max_scale_z"),_=ut(t,"packed_position"),D=ut(t,"packed_rotation"),y=ut(t,"packed_scale"),C=ut(t,"packed_color");i.colorExtremes={minR:s,maxR:l,minG:a,maxG:c,minB:o,maxB:d},i.positionExtremes={minX:u,maxX:A,minY:h,maxY:g,minZ:f,maxZ:m},i.scaleExtremes={minScaleX:p,maxScaleX:v,minScaleY:S,maxScaleY:E,minScaleZ:x,maxScaleZ:M},i.position=_,i.rotation=D,i.scale=y,i.color=C}if(n){const s={};for(let a=0;a<45;a++){const o=`f_rest_${a}`,l=ut(n,o);if(l)s[o]=l;else break}i.sh=s}return i}static decompressBaseSplat=(function(){const e=new I,t=new ct,n=new I,i=new At,s=ue.OFFSET;return function(a,o,l,c,d,u,h,f,A,g){g=g||ue.createSplat();const m=Math.floor((o+a)/256);return dl(e,l[a]),Jm(t,h[a]),dl(n,d[a]),Zm(i,A[a]),g[s.X]=yn(c.minX[m],c.maxX[m],e.x),g[s.Y]=yn(c.minY[m],c.maxY[m],e.y),g[s.Z]=yn(c.minZ[m],c.maxZ[m],e.z),g[s.ROTATION0]=t.x,g[s.ROTATION1]=t.y,g[s.ROTATION2]=t.z,g[s.ROTATION3]=t.w,g[s.SCALE0]=Math.exp(yn(u.minScaleX[m],u.maxScaleX[m],n.x)),g[s.SCALE1]=Math.exp(yn(u.minScaleY[m],u.maxScaleY[m],n.y)),g[s.SCALE2]=Math.exp(yn(u.minScaleZ[m],u.maxScaleZ[m],n.z)),f.minR&&f.maxR?g[s.FDC0]=lt(Math.round(yn(f.minR[m],f.maxR[m],i.x)*255),0,255):g[s.FDC0]=lt(Math.floor(i.x*255),0,255),f.minG&&f.maxG?g[s.FDC1]=lt(Math.round(yn(f.minG[m],f.maxG[m],i.y)*255),0,255):g[s.FDC1]=lt(Math.floor(i.y*255),0,255),f.minB&&f.maxB?g[s.FDC2]=lt(Math.round(yn(f.minB[m],f.maxB[m],i.z)*255),0,255):g[s.FDC2]=lt(Math.floor(i.z*255),0,255),g[s.OPACITY]=lt(Math.floor(i.w*255),0,255),g}})();static decompressSphericalHarmonics=(function(){const e=[0,3,8,15],t=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(n,i,s,a,o){o=o||ue.createSplat();let l=e[s],c=e[a];for(let d=0;d<3;++d)for(let u=0;u<15;++u){const h=t[d*15+u];u<l&&u<c&&(o[ue.OFFSET.FRC0+h]=i[d*c+u][n]*(8/255)-4)}return o}})();static parseToUncompressedSplatBufferSection(e,t,n,i,s,a,o,l,c=null){Ye.readElementData(t,a,0,n,i,c);const d=z.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:u,scaleExtremes:h,colorExtremes:f,position:A,rotation:g,scale:m,color:p}=Ye.getElementStorageArrays(e,t),S=ue.createSplat();for(let x=n;x<=i;++x){Ye.decompressBaseSplat(x,s,A,u,m,h,g,f,p,S);const v=x*d+l;z.writeSplatDataToSectionBuffer(S,o,v,0,0)}}static parseToUncompressedSplatArraySection(e,t,n,i,s,a,o,l=null){Ye.readElementData(t,a,0,n,i,l);const{positionExtremes:c,scaleExtremes:d,colorExtremes:u,position:h,rotation:f,scale:A,color:g}=Ye.getElementStorageArrays(e,t);for(let m=n;m<=i;++m){const p=ue.createSplat();Ye.decompressBaseSplat(m,s,h,c,A,d,f,u,g,p),o.addSplat(p)}}static parseSphericalHarmonicsToUncompressedSplatArraySection(e,t,n,i,s,a,o,l,c,d=null){Ye.readElementData(t,s,a,n,i,d);const{sh:u}=Ye.getElementStorageArrays(e,void 0,t),h=Object.values(u);for(let f=n;f<=i;++f)Ye.decompressSphericalHarmonics(f,h,o,l,c.splats[f])}static parseToUncompressedSplatArray(e,t){const{chunkElement:n,vertexElement:i,shElement:s,sphericalHarmonicsDegree:a}=Ye.readPly(e);t=Math.min(t,a);const o=new ue(t),{positionExtremes:l,scaleExtremes:c,colorExtremes:d,position:u,rotation:h,scale:f,color:A}=Ye.getElementStorageArrays(n,i);let g;if(t>0){const{sh:m}=Ye.getElementStorageArrays(n,void 0,s);g=Object.values(m)}for(let m=0;m<i.count;++m){o.addDefaultSplat();const p=o.getSplat(o.splatCount-1);Ye.decompressBaseSplat(m,0,u,l,f,c,h,d,A,p),t>0&&Ye.decompressSphericalHarmonics(m,g,t,a,p)}return o}static parseToUncompressedSplatBuffer(e,t){const{chunkElement:n,vertexElement:i,shElement:s,sphericalHarmonicsDegree:a}=Ye.readPly(e);t=Math.min(t,a);const{splatBuffer:o,splatBufferDataOffsetBytes:l}=z.preallocateUncompressed(i.count,t),{positionExtremes:c,scaleExtremes:d,colorExtremes:u,position:h,rotation:f,scale:A,color:g}=Ye.getElementStorageArrays(n,i);let m;if(t>0){const{sh:x}=Ye.getElementStorageArrays(n,void 0,s);m=Object.values(x)}const p=z.CompressionLevels[0].SphericalHarmonicsDegrees[t].BytesPerSplat,S=ue.createSplat(t);for(let x=0;x<i.count;++x){Ye.decompressBaseSplat(x,0,h,c,A,d,f,u,g,S),t>0&&Ye.decompressSphericalHarmonics(x,m,t,a,S);const v=x*p+l;z.writeSplatDataToSectionBuffer(S,o.bufferData,v,0,t)}return o}}const Ot={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[xc,yo,Eo,Mo,Co,To,bo]=[0,1,2,3,4,5,6],ul={double:xc,int:yo,uint:Eo,float:Mo,short:Co,ushort:To,uchar:bo},$m={[xc]:8,[yo]:4,[Eo]:4,[Mo]:4,[Co]:2,[To]:2,[bo]:1};class Je{static HeaderEndToken="end_header";static decodeSectionHeader(e,t,n=0){const i=[];let s=!1,a=-1,o=0,l=!1,c=null;const d=[],u=[],h=[],f={};for(let p=n;p<e.length;p++){const S=e[p].trim();if(S.startsWith("element"))if(s){a--;break}else{s=!0,n=p,a=p;const x=S.split(" ");let v=0;for(let E of x){const M=E.trim();M.length>0&&(v++,v===2?c=M:v===3&&(o=parseInt(M)))}}else if(S.startsWith("property")){const x=S.match(/(\w+)\s+(\w+)\s+(\w+)/);if(x){const v=x[2],E=x[3];h.push(E);const M=t[E];f[E]=v;const _=ul[v];M!==void 0&&(d.push(M),u[M]=_)}}if(S===Je.HeaderEndToken){l=!0;break}s&&(i.push(S),a++)}const A=[];let g=0;for(let p of h){const S=f[p];if(f.hasOwnProperty(p)){const x=t[p];x!==void 0&&(A[x]=g)}g+=$m[ul[S]]}const m=Je.decodeSphericalHarmonicsFromSectionHeader(h,t);return{headerLines:i,headerStartLine:n,headerEndLine:a,fieldTypes:u,fieldIds:d,fieldOffsets:A,bytesPerVertex:g,vertexCount:o,dataSizeBytes:g*o,endOfHeader:l,sectionName:c,sphericalHarmonicsDegree:m.degree,sphericalHarmonicsCoefficientsPerChannel:m.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:m.degree1Fields,sphericalHarmonicsDegree2Fields:m.degree2Fields}}static decodeSphericalHarmonicsFromSectionHeader(e,t){let n=0,i=0;for(let l of e)l.startsWith("f_rest")&&n++;i=n/3;let s=0;i>=3&&(s=1),i>=8&&(s=2);let a=[],o=[];for(let l=0;l<3;l++){if(s>=1)for(let c=0;c<3;c++)a.push(t["f_rest_"+(c+i*l)]);if(s>=2)for(let c=0;c<5;c++)o.push(t["f_rest_"+(c+i*l+3)])}return{degree:s,coefficientsPerChannel:i,degree1Fields:a,degree2Fields:o}}static getHeaderSectionNames(e){const t=[];for(let n of e)if(n.startsWith("element")){const i=n.split(" ");let s=0;for(let a of i){const o=a.trim();o.length>0&&(s++,s===2&&t.push(o))}}return t}static checkTextForEndHeader(e){return!!e.includes(Je.HeaderEndToken)}static checkBufferForEndHeader(e,t,n,i){const s=new Uint8Array(e,Math.max(0,t-n),n),a=i.decode(s);return Je.checkTextForEndHeader(a)}static extractHeaderFromBufferToText(e){const t=new TextDecoder;let n=0,i="";const s=100;for(;;){if(n+s>=e.byteLength)throw new Error("End of file reached while searching for end of header");const a=new Uint8Array(e,n,s);if(i+=t.decode(a),n+=s,Je.checkBufferForEndHeader(e,n,s*2,t))break}return i}static readHeaderFromBuffer(e){const t=new TextDecoder;let n=0,i="";const s=100;for(;;){if(n+s>=e.byteLength)throw new Error("End of file reached while searching for end of header");const a=new Uint8Array(e,n,s);if(i+=t.decode(a),n+=s,Je.checkBufferForEndHeader(e,n,s*2,t))break}return i}static convertHeaderTextToLines(e){const t=e.split(`
`),n=[];for(let i=0;i<t.length;i++){const s=t[i].trim();if(n.push(s),s===Je.HeaderEndToken)break}return n}static determineHeaderFormatFromHeaderText(e){const t=Je.convertHeaderTextToLines(e);let n=Ot.INRIAV1;for(let i=0;i<t.length;i++){const s=t[i].trim();if(s.startsWith("element chunk")||s.match(/[A-Za-z]*packed_[A-Za-z]*/))n=Ot.PlayCanvasCompressed;else if(s.startsWith("element codebook_centers"))n=Ot.INRIAV2;else if(s===Je.HeaderEndToken)break}return n}static determineHeaderFormatFromPlyBuffer(e){const t=Je.extractHeaderFromBufferToText(e);return Je.determineHeaderFormatFromHeaderText(t)}static readVertex(e,t,n,i,s,a,o=!0){const l=n*t.bytesPerVertex+i,c=t.fieldOffsets,d=t.fieldTypes;for(let u of s){const h=d[u];h===Mo?a[u]=e.getFloat32(l+c[u],!0):h===Co?a[u]=e.getInt16(l+c[u],!0):h===To?a[u]=e.getUint16(l+c[u],!0):h===yo?a[u]=e.getInt32(l+c[u],!0):h===Eo?a[u]=e.getUint32(l+c[u],!0):h===bo&&(o?a[u]=e.getUint8(l+c[u])/255:a[u]=e.getUint8(l+c[u]))}}}const _c=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],eg=_c.map((r,e)=>e),[hl,tg,ng,ig,sg,rg,og,ag,lg,cg,fl,dg,ug,pl,ml,hg,fg,pg]=eg;class Tt{static decodeHeaderLines(e){let t=0;e.forEach(d=>{d.includes("f_rest_")&&t++});let n=0;t>=45?n=45:t>=24?n=24:t>=9&&(n=9);let s=Array.from(Array(Math.max(n-1,0))).map((d,u)=>`f_rest_${u+1}`);const a=[..._c,...s],o=a.map((d,u)=>u),l=o.reduce((d,u)=>(d[a[u]]=u,d),{}),c=Je.decodeSectionHeader(e,l,0);return c.splatCount=c.vertexCount,c.bytesPerSplat=c.bytesPerVertex,c.fieldsToReadIndexes=o,c}static decodeHeaderText(e){const t=Je.convertHeaderTextToLines(e),n=Tt.decodeHeaderLines(t);return n.headerText=e,n.headerSizeBytes=e.indexOf(Je.HeaderEndToken)+Je.HeaderEndToken.length+1,n}static decodeHeaderFromBuffer(e){const t=Je.readHeaderFromBuffer(e);return Tt.decodeHeaderText(t)}static findSplatData(e,t){return new DataView(e,t.headerSizeBytes)}static parseToUncompressedSplatBufferSection(e,t,n,i,s,a,o,l=0){l=Math.min(l,e.sphericalHarmonicsDegree);const c=z.CompressionLevels[0].SphericalHarmonicsDegrees[l].BytesPerSplat;for(let d=t;d<=n;d++){const u=Tt.parseToUncompressedSplat(i,d,e,s,l),h=d*c+o;z.writeSplatDataToSectionBuffer(u,a,h,0,l)}}static parseToUncompressedSplatArraySection(e,t,n,i,s,a,o=0){o=Math.min(o,e.sphericalHarmonicsDegree);for(let l=t;l<=n;l++){const c=Tt.parseToUncompressedSplat(i,l,e,s,o);a.addSplat(c)}}static decodeSectionSplatData(e,t,n,i,s=!0){if(i=Math.min(i,n.sphericalHarmonicsDegree),s){const a=new ue(i);for(let o=0;o<t;o++){const l=Tt.parseToUncompressedSplat(e,o,n,0,i);a.addSplat(l)}return a}else{const{splatBuffer:a,splatBufferDataOffsetBytes:o}=z.preallocateUncompressed(t,i);return Tt.parseToUncompressedSplatBufferSection(n,0,t-1,e,0,a.bufferData,o,i),a}}static parseToUncompressedSplat=(function(){let e=[];const t=new ct,n=ue.OFFSET.X,i=ue.OFFSET.Y,s=ue.OFFSET.Z,a=ue.OFFSET.SCALE0,o=ue.OFFSET.SCALE1,l=ue.OFFSET.SCALE2,c=ue.OFFSET.ROTATION0,d=ue.OFFSET.ROTATION1,u=ue.OFFSET.ROTATION2,h=ue.OFFSET.ROTATION3,f=ue.OFFSET.FDC0,A=ue.OFFSET.FDC1,g=ue.OFFSET.FDC2,m=ue.OFFSET.OPACITY,p=[];for(let S=0;S<45;S++)p[S]=ue.OFFSET.FRC0+S;return function(S,x,v,E=0,M=0){M=Math.min(M,v.sphericalHarmonicsDegree),Tt.readSplat(S,v,x,E,e);const _=ue.createSplat(M);if(e[hl]!==void 0?(_[a]=Math.exp(e[hl]),_[o]=Math.exp(e[tg]),_[l]=Math.exp(e[ng])):(_[a]=.01,_[o]=.01,_[l]=.01),e[fl]!==void 0){const D=.28209479177387814;_[f]=(.5+D*e[fl])*255,_[A]=(.5+D*e[dg])*255,_[g]=(.5+D*e[ug])*255}else e[ml]!==void 0?(_[f]=e[ml]*255,_[A]=e[hg]*255,_[g]=e[fg]*255):(_[f]=0,_[A]=0,_[g]=0);if(e[pl]!==void 0&&(_[m]=1/(1+Math.exp(-e[pl]))*255),_[f]=lt(Math.floor(_[f]),0,255),_[A]=lt(Math.floor(_[A]),0,255),_[g]=lt(Math.floor(_[g]),0,255),_[m]=lt(Math.floor(_[m]),0,255),M>=1&&e[pg]!==void 0){for(let D=0;D<9;D++)_[p[D]]=e[v.sphericalHarmonicsDegree1Fields[D]];if(M>=2)for(let D=0;D<15;D++)_[p[9+D]]=e[v.sphericalHarmonicsDegree2Fields[D]]}return t.set(e[ig],e[sg],e[rg],e[og]),t.normalize(),_[c]=t.x,_[d]=t.y,_[u]=t.z,_[h]=t.w,_[n]=e[ag],_[i]=e[lg],_[s]=e[cg],_}})();static readSplat(e,t,n,i,s){return Je.readVertex(e,t,n,i,t.fieldsToReadIndexes,s,!0)}static parseToUncompressedSplatArray(e,t=0){const{header:n,splatCount:i,splatData:s}=gl(e);return Tt.decodeSectionSplatData(s,i,n,t,!0)}static parseToUncompressedSplatBuffer(e,t=0){const{header:n,splatCount:i,splatData:s}=gl(e);return Tt.decodeSectionSplatData(s,i,n,t,!1)}}function gl(r){const e=Tt.decodeHeaderFromBuffer(r),t=e.splatCount,n=Tt.findSplatData(r,e);return{header:e,splatCount:t,splatData:n}}const vc=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],Fs=vc.map((r,e)=>e),[Bs,mg,gg,Al,Us,Ag,Qr]=[0,1,4,16,17,18,19],yc=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],oo=yc.map((r,e)=>e),[Sl,Sg,xg,_g,vg,yg,Eg,Mg,Cg,Tg,ao,Ec,Mc,xl]=oo,_l=ao,bg=Ec,wg=Mc,Os=r=>{const e=(31744&r)>>10,t=1023&r;return(r>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):t/1024*6103515625e-14)};class Xt{static decodeSectionHeadersFromHeaderLines(e){const t=oo.reduce((d,u)=>(d[yc[u]]=u,d),{}),n=Fs.reduce((d,u)=>(d[vc[u]]=u,d),{}),i=Je.getHeaderSectionNames(e);let s;for(let d=0;d<i.length;d++)i[d]==="codebook_centers"&&(s=d);let a=0,o=!1;const l=[];let c=0;for(;!o;){let d;c===s?d=Je.decodeSectionHeader(e,n,a):d=Je.decodeSectionHeader(e,t,a),o=d.endOfHeader,a=d.headerEndLine+1,o||(d.splatCount=d.vertexCount,d.bytesPerSplat=d.bytesPerVertex),l.push(d),c++}return l}static decodeSectionHeadersFromHeaderText(e){const t=Je.convertHeaderTextToLines(e);return Xt.decodeSectionHeadersFromHeaderLines(t)}static getSplatCountFromSectionHeaders(e){let t=0;for(let n of e)n.sectionName!=="codebook_centers"&&(t+=n.vertexCount);return t}static decodeHeaderFromHeaderText(e){const t=e.indexOf(Je.HeaderEndToken)+Je.HeaderEndToken.length+1,n=Xt.decodeSectionHeadersFromHeaderText(e),i=Xt.getSplatCountFromSectionHeaders(n);return{headerSizeBytes:t,sectionHeaders:n,splatCount:i}}static decodeHeaderFromBuffer(e){const t=Je.readHeaderFromBuffer(e);return Xt.decodeHeaderFromHeaderText(t)}static findVertexData(e,t,n){let i=t.headerSizeBytes;for(let s=0;s<n&&s<t.sectionHeaders.length;s++){const a=t.sectionHeaders[s];i+=a.dataSizeBytes}return new DataView(e,i,t.sectionHeaders[n].dataSizeBytes)}static decodeCodeBook(e,t){const n=[],i=[];for(let s=0;s<t.vertexCount;s++){Je.readVertex(e,t,s,0,Fs,n);for(let a of Fs){const o=Fs[a];let l=i[o];l||(i[o]=l=[]),l.push(n[a])}}for(let s=0;s<i.length;s++){const a=i[s],o=.28209479177387814;for(let l=0;l<a.length;l++){const c=Os(a[l]);s===Al?a[l]=Math.round(1/(1+Math.exp(-c))*255):s===Bs?a[l]=Math.round((.5+o*c)*255):s===Us?a[l]=Math.exp(c):a[l]=c}}return i}static decodeSectionSplatData(e,t,n,i,s){s=Math.min(s,n.sphericalHarmonicsDegree);const a=new ue(s);for(let o=0;o<t;o++){const l=Xt.parseToUncompressedSplat(e,o,n,i,0,s);a.addSplat(l)}return a}static parseToUncompressedSplat=(function(){let e=[];const t=new ct,n=ue.OFFSET.X,i=ue.OFFSET.Y,s=ue.OFFSET.Z,a=ue.OFFSET.SCALE0,o=ue.OFFSET.SCALE1,l=ue.OFFSET.SCALE2,c=ue.OFFSET.ROTATION0,d=ue.OFFSET.ROTATION1,u=ue.OFFSET.ROTATION2,h=ue.OFFSET.ROTATION3,f=ue.OFFSET.FDC0,A=ue.OFFSET.FDC1,g=ue.OFFSET.FDC2,m=ue.OFFSET.OPACITY,p=[];for(let S=0;S<45;S++)p[S]=ue.OFFSET.FRC0+S;return function(S,x,v,E,M=0,_=0){_=Math.min(_,v.sphericalHarmonicsDegree),Xt.readSplat(S,v,x,M,e);const D=ue.createSplat(_);if(e[Sl]!==void 0?(D[a]=E[Us][e[Sl]],D[o]=E[Us][e[Sg]],D[l]=E[Us][e[xg]]):(D[a]=.01,D[o]=.01,D[l]=.01),e[ao]!==void 0?(D[f]=E[Bs][e[ao]],D[A]=E[Bs][e[Ec]],D[g]=E[Bs][e[Mc]]):e[_l]!==void 0?(D[f]=e[_l]*255,D[A]=e[bg]*255,D[g]=e[wg]*255):(D[f]=0,D[A]=0,D[g]=0),e[xl]!==void 0&&(D[m]=E[Al][e[xl]]),D[f]=lt(Math.floor(D[f]),0,255),D[A]=lt(Math.floor(D[A]),0,255),D[g]=lt(Math.floor(D[g]),0,255),D[m]=lt(Math.floor(D[m]),0,255),_>=1&&v.sphericalHarmonicsDegree>=1){for(let N=0;N<9;N++){const R=E[mg+N%3];D[p[N]]=R[e[v.sphericalHarmonicsDegree1Fields[N]]]}if(_>=2&&v.sphericalHarmonicsDegree>=2)for(let N=0;N<15;N++){const R=E[gg+N%5];D[p[9+N]]=R[e[v.sphericalHarmonicsDegree2Fields[N]]]}}const y=E[Ag][e[_g]],C=E[Qr][e[vg]],P=E[Qr][e[yg]],F=E[Qr][e[Eg]];return t.set(y,C,P,F),t.normalize(),D[c]=t.x,D[d]=t.y,D[u]=t.z,D[h]=t.w,D[n]=Os(e[Mg]),D[i]=Os(e[Cg]),D[s]=Os(e[Tg]),D}})();static readSplat(e,t,n,i,s){return Je.readVertex(e,t,n,i,oo,s,!1)}static parseToUncompressedSplatArray(e,t=0){const n=[],i=Xt.decodeHeaderFromBuffer(e,t);let s;for(let o=0;o<i.sectionHeaders.length;o++){const l=i.sectionHeaders[o];if(l.sectionName==="codebook_centers"){const c=Xt.findVertexData(e,i,o);s=Xt.decodeCodeBook(c,l)}}for(let o=0;o<i.sectionHeaders.length;o++){const l=i.sectionHeaders[o];if(l.sectionName!=="codebook_centers"){const c=l.vertexCount,d=Xt.findVertexData(e,i,o),u=Xt.decodeSectionSplatData(d,c,l,s,t);n.push(u)}}const a=new ue(t);for(let o of n)for(let l of o.splats)a.addSplat(l);return a}}class vl{static parseToUncompressedSplatArray(e,t=0){const n=Je.determineHeaderFormatFromPlyBuffer(e);if(n===Ot.PlayCanvasCompressed)return Ye.parseToUncompressedSplatArray(e,t);if(n===Ot.INRIAV1)return Tt.parseToUncompressedSplatArray(e,t);if(n===Ot.INRIAV2)return Xt.parseToUncompressedSplatArray(e,t)}static parseToUncompressedSplatBuffer(e,t=0){const n=Je.determineHeaderFormatFromPlyBuffer(e);if(n===Ot.PlayCanvasCompressed)return Ye.parseToUncompressedSplatBuffer(e,t);if(n===Ot.INRIAV1)return Tt.parseToUncompressedSplatBuffer(e,t);if(n===Ot.INRIAV2)throw new Error("parseToUncompressedSplatBuffer() is not implemented for INRIA V2 PLY files")}}class wo{constructor(e,t,n,i){this.sectionCount=e,this.sectionFilters=t,this.groupingParameters=n,this.partitionGenerator=i}partitionUncompressedSplatArray(e){let t,n,i;if(this.partitionGenerator){const a=this.partitionGenerator(e);t=a.groupingParameters,n=a.sectionCount,i=a.sectionFilters}else t=this.groupingParameters,n=this.sectionCount,i=this.sectionFilters;const s=[];for(let a=0;a<n;a++){const o=new ue(e.sphericalHarmonicsDegree),l=i[a];for(let c=0;c<e.splatCount;c++)l(c)&&o.addSplat(e.splats[c]);s.push(o)}return{splatArrays:s,parameters:t}}static getStandardPartitioner(e=0,t=new I,n=z.BucketBlockSize,i=z.BucketSize){const s=a=>{const o=ue.OFFSET.X,l=ue.OFFSET.Y,c=ue.OFFSET.Z;e<=0&&(e=a.splatCount);const d=new I,u=.5,h=p=>{p.x=Math.floor(p.x/u)*u,p.y=Math.floor(p.y/u)*u,p.z=Math.floor(p.z/u)*u};a.splats.forEach(p=>{d.set(p[o],p[l],p[c]).sub(t),h(d),p.centerDist=d.lengthSq()}),a.splats.sort((p,S)=>{let x=p.centerDist,v=S.centerDist;return x>v?1:-1});const f=[],A=[];e=Math.min(a.splatCount,e);const g=Math.ceil(a.splatCount/e);let m=0;for(let p=0;p<g;p++){let S=m;f.push(x=>x>=S&&x<S+e),A.push({blocksSize:n,bucketSize:i}),m+=e}return{sectionCount:f.length,sectionFilters:f,groupingParameters:A}};return new wo(void 0,void 0,void 0,s)}}class ls{constructor(e,t,n,i,s,a,o){this.splatPartitioner=e,this.alphaRemovalThreshold=t,this.compressionLevel=n,this.sectionSize=i,this.sceneCenter=s?new I().copy(s):void 0,this.blockSize=a,this.bucketSize=o}generateFromUncompressedSplatArray(e){const t=this.splatPartitioner.partitionUncompressedSplatArray(e);return z.generateFromUncompressedSplatArrays(t.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,t.parameters)}static getStandardGenerator(e=1,t=1,n=0,i=new I,s=z.BucketBlockSize,a=z.BucketSize){const o=wo.getStandardPartitioner(n,i,s,a);return new ls(o,e,t,n,i,s,a)}}const pt={Downloading:0,Processing:1,Done:2};class $s extends Error{constructor(e){super(e)}}const ot={ProgressiveToSplatBuffer:0,ProgressiveToSplatArray:1,DownloadBeforeProcessing:2};function yl(r,e){let t=0;for(let i of r)t+=i.sizeBytes;(!e||e.byteLength<t)&&(e=new ArrayBuffer(t));let n=0;for(let i of r)new Uint8Array(e,n,i.sizeBytes).set(i.data),n+=i.sizeBytes;return e}function El(r,e,t,n,i,s,a,o){return e?ls.getStandardGenerator(t,n,i,s,a,o).generateFromUncompressedSplatArray(r):z.generateFromUncompressedSplatArrays([r],t,0,new I)}class Ro{static loadFromURL(e,t,n,i,s,a,o=!0,l=0,c,d,u,h,f){let A;!n&&!o?A=ot.DownloadBeforeProcessing:o?A=ot.ProgressiveToSplatArray:A=ot.ProgressiveToSplatBuffer;const g=nt.ProgressiveLoadSectionSize,m=z.HeaderSizeBytes+z.SectionHeaderSizeBytes,p=1;let S,x,v,E,M,_=0,D=0,y=0,C=!1,P=!1,F=!1;const N=So();let R=0,L=0,O=0,V=0,X="",H=null,q=[],J;const $=new TextDecoder,W=(Z,ie,oe)=>{const le=Z>=100;if(oe&&(q.push({data:oe,sizeBytes:oe.byteLength,startBytes:O,endBytes:O+oe.byteLength}),O+=oe.byteLength),A===ot.DownloadBeforeProcessing)le&&N.resolve(q);else{if(C){if(S===Ot.PlayCanvasCompressed&&!P){const Ee=H.headerSizeBytes+H.chunkElement.storageSizeBytes;M=yl(q,M),M.byteLength>=Ee&&(Ye.readElementData(H.chunkElement,M,H.headerSizeBytes),R=Ee,L=Ee,P=!0)}}else if(X+=$.decode(oe),Je.checkTextForEndHeader(X)){if(S=Je.determineHeaderFormatFromHeaderText(X),S===Ot.INRIAV1)H=Tt.decodeHeaderText(X),l=Math.min(l,H.sphericalHarmonicsDegree),_=H.splatCount,P=!0,V=H.headerSizeBytes+H.bytesPerSplat*_;else if(S===Ot.PlayCanvasCompressed){if(H=Ye.decodeHeaderText(X),l=Math.min(l,H.sphericalHarmonicsDegree),A===ot.ProgressiveToSplatBuffer&&l>0)throw new $s("PlyLoader.loadFromURL() -> Selected PLY format has spherical harmonics data that cannot be progressively loaded.");_=H.vertexElement.count,V=H.headerSizeBytes+H.bytesPerSplat*_+H.chunkElement.storageSizeBytes}else{if(A===ot.ProgressiveToSplatBuffer)throw new $s("PlyLoader.loadFromURL() -> Selected PLY format cannot be progressively loaded.");A=ot.DownloadBeforeProcessing;return}if(A===ot.ProgressiveToSplatBuffer){const Ee=z.CompressionLevels[0].SphericalHarmonicsDegrees[l],Me=m+Ee.BytesPerSplat*_;v=new ArrayBuffer(Me),z.writeHeaderToBuffer({versionMajor:z.CurrentMajorVersion,versionMinor:z.CurrentMinorVersion,maxSectionCount:p,sectionCount:p,maxSplatCount:_,splatCount:0,compressionLevel:0,sceneCenter:new I},v)}else J=new ue(l);R=H.headerSizeBytes,L=H.headerSizeBytes,C=!0}if(C&&P&&q.length>0&&(x=yl(q,x),O-R>g||O>=V&&!F||le)){const Me=F?H.sphericalHarmonicsPerSplat:H.bytesPerSplat,De=(F?O:Math.min(V,O))-L,k=Math.floor(De/Me),He=k*Me,Ae=O-L-He,Se=L-q[0].startBytes,xe=new DataView(x,Se,He);if(F)S===Ot.PlayCanvasCompressed&&A===ot.ProgressiveToSplatArray&&(Ye.parseSphericalHarmonicsToUncompressedSplatArraySection(H.chunkElement,H.shElement,y,y+k-1,xe,0,l,H.sphericalHarmonicsDegree,J),y+=k);else{if(A===ot.ProgressiveToSplatBuffer){const qe=z.CompressionLevels[0].SphericalHarmonicsDegrees[l],Ce=D*qe.BytesPerSplat+m;S===Ot.PlayCanvasCompressed?Ye.parseToUncompressedSplatBufferSection(H.chunkElement,H.vertexElement,0,k-1,D,xe,v,Ce):Tt.parseToUncompressedSplatBufferSection(H,0,k-1,xe,0,v,Ce,l)}else S===Ot.PlayCanvasCompressed?Ye.parseToUncompressedSplatArraySection(H.chunkElement,H.vertexElement,0,k-1,D,xe,J):Tt.parseToUncompressedSplatArraySection(H,0,k-1,xe,0,J,l);D+=k,A===ot.ProgressiveToSplatBuffer&&(E||(z.writeSectionHeaderToBuffer({maxSplatCount:_,splatCount:D,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:l},0,v,z.HeaderSizeBytes),E=new z(v,!1)),E.updateLoadedCounts(1,D)),O>=V&&(F=!0)}if(Ae===0)q=[];else{let qe=[],Ce=0;for(let w=q.length-1;w>=0;w--){const T=q[w];if(Ce+=T.sizeBytes,qe.unshift(T),Ce>=Ae)break}q=qe}R+=g,L+=He}i&&E&&i(E,le),le&&(A===ot.ProgressiveToSplatBuffer?N.resolve(E):N.resolve(J))}t&&t(Z,ie,pt.Downloading)};return t&&t(0,"0%",pt.Downloading),ar(e,W,!1,c).then(()=>(t&&t(0,"0%",pt.Processing),N.promise.then(Z=>{if(t&&t(100,"100%",pt.Done),A===ot.DownloadBeforeProcessing){const ie=q.map(oe=>oe.data);return new Blob(ie).arrayBuffer().then(oe=>Ro.loadFromFileData(oe,s,a,o,l,d,u,h,f))}else return A===ot.ProgressiveToSplatBuffer?Z:Qt(()=>El(Z,o,s,a,d,u,h,f))})))}static loadFromFileData(e,t,n,i,s=0,a,o,l,c){return i?Qt(()=>vl.parseToUncompressedSplatArray(e,s)).then(d=>El(d,i,t,n,a,o,l,c)):Qt(()=>vl.parseToUncompressedSplatBuffer(e,s))}}const Rg=r=>new ReadableStream({async start(e){e.enqueue(r),e.close()}});async function Ig(r){try{const e=Rg(r);if(!e)throw new Error("Failed to create stream from data");return await Dg(e)}catch(e){throw console.error("Error decompressing gzipped data:",e),e}}async function Dg(r){const e=r.pipeThrough(new DecompressionStream("gzip")),n=await new Response(e).arrayBuffer();return new Uint8Array(n)}const Pg=1347635022,Lg=1,Fg=.15;function Bg(r){const e=r>>15&1,t=r>>10&31,n=r&1023,i=e===1?-1:1;return t===0?i*Math.pow(2,-14)*n/1024:t===31?n!==0?NaN:i*(1/0):i*Math.pow(2,t-15)*(1+n/1024)}function Ug(r){return(r-128)/128}function Jn(r){switch(r){case 0:return 0;case 1:return 3;case 2:return 8;case 3:return 15;default:return console.error(`[SPZ: ERROR] Unsupported SH degree: ${r}`),0}}const Og=(function(){let r=[];const e=new ct,t=ue.OFFSET.X,n=ue.OFFSET.Y,i=ue.OFFSET.Z,s=ue.OFFSET.SCALE0,a=ue.OFFSET.SCALE1,o=ue.OFFSET.SCALE2,l=ue.OFFSET.ROTATION0,c=ue.OFFSET.ROTATION1,d=ue.OFFSET.ROTATION2,u=ue.OFFSET.ROTATION3,h=ue.OFFSET.FDC0,f=ue.OFFSET.FDC1,A=ue.OFFSET.FDC2,g=ue.OFFSET.OPACITY,m=[Jn(0),Jn(1),Jn(2),Jn(3)],p=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(S,x,v){v=Math.min(x,v);const E=ue.createSplat(v);S.scale[0]!==void 0?(E[s]=S.scale[0],E[a]=S.scale[1],E[o]=S.scale[2]):(E[s]=.01,E[a]=.01,E[o]=.01),S.color[0]!==void 0?(E[h]=S.color[0],E[f]=S.color[1],E[A]=S.color[2]):r[RED]!==void 0?(E[h]=r[RED]*255,E[f]=r[GREEN]*255,E[A]=r[BLUE]*255):(E[h]=0,E[f]=0,E[A]=0),S.alpha!==void 0&&(E[g]=S.alpha),E[h]=lt(Math.floor(E[h]),0,255),E[f]=lt(Math.floor(E[f]),0,255),E[A]=lt(Math.floor(E[A]),0,255),E[g]=lt(Math.floor(E[g]),0,255);let M=m[v],_=m[x];for(let D=0;D<3;++D)for(let y=0;y<15;++y){const C=p[D*15+y];y<M&&y<_&&(E[ue.OFFSET.FRC0+C]=S.sh[D*_+y])}return e.set(S.rotation[3],S.rotation[0],S.rotation[1],S.rotation[2]),e.normalize(),E[l]=e.x,E[c]=e.y,E[d]=e.z,E[u]=e.w,E[t]=S.position[0],E[n]=S.position[1],E[i]=S.position[2],E}})();function Ng(r,e,t,n){return!(r.positions.length!==e*3*(n?2:3)||r.scales.length!==e*3||r.rotations.length!==e*3||r.alphas.length!==e||r.colors.length!==e*3||r.sh.length!==e*t*3)}function Ml(r,e,t,n,i){e=Math.min(e,r.shDegree);const s=r.numPoints,a=Jn(r.shDegree),o=r.positions.length===s*3*2;if(!Ng(r,s,a,o))return null;const l={position:[],scale:[],rotation:[],alpha:void 0,color:[],sh:[]};let c;o&&(c=new Uint16Array(r.positions.buffer,r.positions.byteOffset,s*3));const d=1/(1<<r.fractionalBits),u=Jn(r.shDegree),h=.28209479177387814;for(let f=0;f<s;f++){if(o)for(let S=0;S<3;S++)l.position[S]=Bg(c[f*3+S]);else for(let S=0;S<3;S++){const x=f*9+S*3;let v=r.positions[x];v|=r.positions[x+1]<<8,v|=r.positions[x+2]<<16,v|=v&8388608?4278190080:0,l.position[S]=v*d}for(let S=0;S<3;S++)l.scale[S]=Math.exp(r.scales[f*3+S]/16-10);const A=r.rotations.subarray(f*3,f*3+3),g=[A[0]/127.5-1,A[1]/127.5-1,A[2]/127.5-1];l.rotation[0]=g[0],l.rotation[1]=g[1],l.rotation[2]=g[2];const m=g[0]*g[0]+g[1]*g[1]+g[2]*g[2];l.rotation[3]=Math.sqrt(Math.max(0,1-m)),l.alpha=Math.floor(r.alphas[f]);for(let S=0;S<3;S++)l.color[S]=Math.floor(((r.colors[f*3+S]/255-.5)/Fg*h+.5)*255);for(let S=0;S<3;S++)for(let x=0;x<u;x++)l.sh[S*u+x]=Ug(r.sh[u*3*f+x*3+S]);const p=Og(l,r.shDegree,e);if(t){const S=z.CompressionLevels[0].SphericalHarmonicsDegrees[e].BytesPerSplat,x=f*S+i;z.writeSplatDataToSectionBuffer(p,n,x,0,e)}else n.addSplat(p)}}const zg=16,Hg=1e7;function kg(r){const e=new DataView(r);let t=0;const n={magic:e.getUint32(t,!0),version:e.getUint32(t+4,!0),numPoints:e.getUint32(t+8,!0),shDegree:e.getUint8(t+12),fractionalBits:e.getUint8(t+13),flags:e.getUint8(t+14),reserved:e.getUint8(t+15)};if(t+=zg,n.magic!==Pg)return console.error("[SPZ ERROR] deserializePackedGaussians: header not found"),null;if(n.version<1||n.version>2)return console.error(`[SPZ ERROR] deserializePackedGaussians: version not supported: ${n.version}`),null;if(n.numPoints>Hg)return console.error(`[SPZ ERROR] deserializePackedGaussians: Too many points: ${n.numPoints}`),null;if(n.shDegree>3)return console.error(`[SPZ ERROR] deserializePackedGaussians: Unsupported SH degree: ${n.shDegree}`),null;const i=n.numPoints,s=Jn(n.shDegree),a=n.version===1,o={numPoints:i,shDegree:n.shDegree,fractionalBits:n.fractionalBits,antialiased:(n.flags&Lg)!==0,positions:new Uint8Array(i*3*(a?2:3)),scales:new Uint8Array(i*3),rotations:new Uint8Array(i*3),alphas:new Uint8Array(i),colors:new Uint8Array(i*3),sh:new Uint8Array(i*s*3)};try{const l=new Uint8Array(r);let c=o.positions.length,d=t;if(o.positions.set(l.slice(d,d+c)),d+=c,o.alphas.set(l.slice(d,d+o.alphas.length)),d+=o.alphas.length,o.colors.set(l.slice(d,d+o.colors.length)),d+=o.colors.length,o.scales.set(l.slice(d,d+o.scales.length)),d+=o.scales.length,o.rotations.set(l.slice(d,d+o.rotations.length)),d+=o.rotations.length,o.sh.set(l.slice(d,d+o.sh.length)),d+o.sh.length!==r.byteLength)return console.error("[SPZ ERROR] deserializePackedGaussians: incorrect buffer size"),null}catch(l){return console.error("[SPZ ERROR] deserializePackedGaussians: read error",l),null}return o}async function Gg(r){try{const e=await Ig(r);return kg(e.buffer)}catch(e){return console.error("[SPZ ERROR] loadSpzPacked: decompression error",e),null}}class Io{static loadFromURL(e,t,n,i,s=!0,a=0,o,l,c,d,u){return t&&t(0,"0%",pt.Downloading),ar(e,t,!0,o).then(h=>(t&&t(0,"0%",pt.Processing),Io.loadFromFileData(h,n,i,s,a,l,c,d,u)))}static async loadFromFileData(e,t,n,i,s=0,a,o,l,c){await Qt();const d=await Gg(e);s=Math.min(d.shDegree,s);const u=new ue(s);if(i)return Ml(d,s,!1,u,0),ls.getStandardGenerator(t,n,a,o,l,c).generateFromUncompressedSplatArray(u);{const{splatBuffer:h,splatBufferDataOffsetBytes:f}=z.preallocateUncompressed(d.numPoints,s);return Ml(d,s,!0,h.bufferData,f),h}}}class et{static RowSizeBytes=32;static CenterSizeBytes=12;static ScaleSizeBytes=12;static RotationSizeBytes=4;static ColorSizeBytes=4;static parseToUncompressedSplatBufferSection(e,t,n,i,s,a){const o=z.CompressionLevels[0].BytesPerCenter,l=z.CompressionLevels[0].BytesPerScale,c=z.CompressionLevels[0].BytesPerRotation,d=z.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let u=e;u<=t;u++){const h=u*et.RowSizeBytes+i,f=new Float32Array(n,h,3),A=new Float32Array(n,h+et.CenterSizeBytes,3),g=new Uint8Array(n,h+et.CenterSizeBytes+et.ScaleSizeBytes,4),m=new Uint8Array(n,h+et.CenterSizeBytes+et.ScaleSizeBytes+et.RotationSizeBytes,4),p=new ct((m[1]-128)/128,(m[2]-128)/128,(m[3]-128)/128,(m[0]-128)/128);p.normalize();const S=u*d+a,x=new Float32Array(s,S,3),v=new Float32Array(s,S+o,3),E=new Float32Array(s,S+o+l,4),M=new Uint8Array(s,S+o+l+c,4);x[0]=f[0],x[1]=f[1],x[2]=f[2],v[0]=A[0],v[1]=A[1],v[2]=A[2],E[0]=p.w,E[1]=p.x,E[2]=p.y,E[3]=p.z,M[0]=g[0],M[1]=g[1],M[2]=g[2],M[3]=g[3]}}static parseToUncompressedSplatArraySection(e,t,n,i,s){for(let a=e;a<=t;a++){const o=a*et.RowSizeBytes+i,l=new Float32Array(n,o,3),c=new Float32Array(n,o+et.CenterSizeBytes,3),d=new Uint8Array(n,o+et.CenterSizeBytes+et.ScaleSizeBytes,4),u=new Uint8Array(n,o+et.CenterSizeBytes+et.ScaleSizeBytes+et.RotationSizeBytes,4),h=new ct((u[1]-128)/128,(u[2]-128)/128,(u[3]-128)/128,(u[0]-128)/128);h.normalize(),s.addSplatFromComonents(l[0],l[1],l[2],c[0],c[1],c[2],h.w,h.x,h.y,h.z,d[0],d[1],d[2],d[3])}}static parseStandardSplatToUncompressedSplatArray(e){const t=e.byteLength/et.RowSizeBytes,n=new ue;for(let i=0;i<t;i++){const s=i*et.RowSizeBytes,a=new Float32Array(e,s,3),o=new Float32Array(e,s+et.CenterSizeBytes,3),l=new Uint8Array(e,s+et.CenterSizeBytes+et.ScaleSizeBytes,4),c=new Uint8Array(e,s+et.CenterSizeBytes+et.ScaleSizeBytes+et.ColorSizeBytes,4),d=new ct((c[1]-128)/128,(c[2]-128)/128,(c[3]-128)/128,(c[0]-128)/128);d.normalize(),n.addSplatFromComonents(a[0],a[1],a[2],o[0],o[1],o[2],d.w,d.x,d.y,d.z,l[0],l[1],l[2],l[3])}return n}}function Cl(r,e,t,n,i,s,a,o){return e?ls.getStandardGenerator(t,n,i,s,a,o).generateFromUncompressedSplatArray(r):z.generateFromUncompressedSplatArrays([r],t,0,new I)}class Do{static loadFromURL(e,t,n,i,s,a,o=!0,l,c,d,u,h){let f=n?ot.ProgressiveToSplatBuffer:ot.ProgressiveToSplatArray;o&&(f=ot.ProgressiveToSplatArray);const A=z.HeaderSizeBytes+z.SectionHeaderSizeBytes,g=nt.ProgressiveLoadSectionSize,m=1;let p,S,x,v=0,E=0,M;const _=So();let D=0,y=0,C=[];const P=(F,N,R,L)=>{const O=F>=100;if(R&&C.push(R),f===ot.DownloadBeforeProcessing){O&&_.resolve(C);return}if(!L){if(n)throw new $s("Cannon directly load .splat because no file size info is available.");f=ot.DownloadBeforeProcessing;return}if(!p){v=L/et.RowSizeBytes,p=new ArrayBuffer(L);const V=z.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,X=A+V*v;f===ot.ProgressiveToSplatBuffer?(S=new ArrayBuffer(X),z.writeHeaderToBuffer({versionMajor:z.CurrentMajorVersion,versionMinor:z.CurrentMinorVersion,maxSectionCount:m,sectionCount:m,maxSplatCount:v,splatCount:E,compressionLevel:0,sceneCenter:new I},S)):M=new ue(0)}if(R){new Uint8Array(p,y,R.byteLength).set(new Uint8Array(R)),y+=R.byteLength;const V=y-D;if(V>g||O){const H=(O?V:g)/et.RowSizeBytes,q=E+H;f===ot.ProgressiveToSplatBuffer?et.parseToUncompressedSplatBufferSection(E,q-1,p,0,S,A):et.parseToUncompressedSplatArraySection(E,q-1,p,0,M),E=q,f===ot.ProgressiveToSplatBuffer&&(x||(z.writeSectionHeaderToBuffer({maxSplatCount:v,splatCount:E,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,S,z.HeaderSizeBytes),x=new z(S,!1)),x.updateLoadedCounts(1,E),i&&i(x,O)),D+=g}}O&&(f===ot.ProgressiveToSplatBuffer?_.resolve(x):_.resolve(M)),t&&t(F,N,pt.Downloading)};return t&&t(0,"0%",pt.Downloading),ar(e,P,!1,l).then(()=>(t&&t(0,"0%",pt.Processing),_.promise.then(F=>(t&&t(100,"100%",pt.Done),f===ot.DownloadBeforeProcessing?new Blob(C).arrayBuffer().then(N=>Do.loadFromFileData(N,s,a,o,c,d,u,h)):f===ot.ProgressiveToSplatBuffer?F:Qt(()=>Cl(F,o,s,a,c,d,u,h))))))}static loadFromFileData(e,t,n,i,s,a,o,l){return Qt(()=>{const c=et.parseStandardSplatToUncompressedSplatArray(e);return Cl(c,i,t,n,s,a,o,l)})}}class Zi{static checkVersion(e){const t=z.CurrentMajorVersion,n=z.CurrentMinorVersion,i=z.parseHeader(e);if(i.versionMajor===t&&i.versionMinor>=n||i.versionMajor>t)return!0;throw new Error(`KSplat version not supported: v${i.versionMajor}.${i.versionMinor}. Minimum required: v${t}.${n}`)}static loadFromURL(e,t,n,i,s){let a,o,l,c,d=!1,u=!1,h,f=[],A=!1,g=!1,m=0,p=0,S=0,x=!1,v=!1,E=!1,M=[];const _=So(),D=()=>{!d&&!u&&m>=z.HeaderSizeBytes&&(u=!0,new Blob(M).arrayBuffer().then(L=>{l=new ArrayBuffer(z.HeaderSizeBytes),new Uint8Array(l).set(new Uint8Array(L,0,z.HeaderSizeBytes)),Zi.checkVersion(l),u=!1,d=!0,c=z.parseHeader(l),window.setTimeout(()=>{P()},1)}))};let y=0;const C=()=>{y===0&&(y++,window.setTimeout(()=>{y--,F()},1))},P=()=>{const R=()=>{g=!0,new Blob(M).arrayBuffer().then(O=>{g=!1,A=!0,h=new ArrayBuffer(c.maxSectionCount*z.SectionHeaderSizeBytes),new Uint8Array(h).set(new Uint8Array(O,z.HeaderSizeBytes,c.maxSectionCount*z.SectionHeaderSizeBytes)),f=z.parseSectionHeaders(c,h,0,!1);let V=0;for(let H=0;H<c.maxSectionCount;H++)V+=f[H].storageSizeBytes;const X=z.HeaderSizeBytes+c.maxSectionCount*z.SectionHeaderSizeBytes+V;if(!a){a=new ArrayBuffer(X);let H=0;for(let q=0;q<M.length;q++){const J=M[q];new Uint8Array(a,H,J.byteLength).set(new Uint8Array(J)),H+=J.byteLength}}S=z.HeaderSizeBytes+z.SectionHeaderSizeBytes*c.maxSectionCount;for(let H=0;H<=f.length&&H<c.maxSectionCount;H++)S+=f[H].storageSizeBytes;C()})};!g&&!A&&d&&m>=z.HeaderSizeBytes+z.SectionHeaderSizeBytes*c.maxSectionCount&&R()},F=()=>{if(E)return;E=!0;const R=()=>{if(E=!1,A){if(v)return;if(x=m>=S,m-p>nt.ProgressiveLoadSectionSize||x){p+=nt.ProgressiveLoadSectionSize,v=p>=S,o||(o=new z(a,!1));const O=z.HeaderSizeBytes+z.SectionHeaderSizeBytes*c.maxSectionCount;let V=0,X=0,H=0;for(let $=0;$<c.maxSectionCount;$++){const W=f[$],Z=V+W.partiallyFilledBucketCount*4+W.bucketStorageSizeBytes*W.bucketCount,ie=O+Z;if(p>=ie){X++;const oe=p-ie,Me=z.CompressionLevels[c.compressionLevel].SphericalHarmonicsDegrees[W.sphericalHarmonicsDegree].BytesPerSplat;let ge=Math.floor(oe/Me);ge=Math.min(ge,W.maxSplatCount),H+=ge,o.updateLoadedCounts(X,H),o.updateSectionLoadedCounts($,ge)}else break;V+=W.storageSizeBytes}i(o,v);const q=p/S*100,J=q.toFixed(2)+"%";t&&t(q,J,pt.Downloading),v?_.resolve(o):F()}}};window.setTimeout(R,nt.ProgressiveLoadSectionDelayDuration)};return ar(e,(R,L,O)=>{O&&(M.push(O),a&&new Uint8Array(a,m,O.byteLength).set(new Uint8Array(O)),m+=O.byteLength),n?(D(),P(),F()):t&&t(R,L,pt.Downloading)},!n,s).then(R=>(t&&t(0,"0%",pt.Processing),(n?_.promise:Zi.loadFromFileData(R)).then(O=>(t&&t(100,"100%",pt.Done),O))))}static loadFromFileData(e){return Qt(()=>(Zi.checkVersion(e),new z(e)))}static downloadFile=(function(){let e;return function(t,n){const i=new Blob([t.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=n,e.href=URL.createObjectURL(i),e.click()}})()}const Ut={Splat:0,KSplat:1,Ply:2,Spz:3},Tl=r=>r.endsWith(".ply")?Ut.Ply:r.endsWith(".splat")?Ut.Splat:r.endsWith(".ksplat")?Ut.KSplat:r.endsWith(".spz")?Ut.Spz:null,bl={type:"change"},Yr={type:"start"},wl={type:"end"},Ns=new $l,Rl=new Un,Vg=Math.cos(70*Yl.DEG2RAD);class zs extends ni{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:ii.ROTATE,MIDDLE:ii.DOLLY,RIGHT:ii.PAN},this.touches={ONE:si.ROTATE,TWO:si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",se),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",se),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,this.clearDampedRotation(),this.clearDampedPan(),n.object.updateProjectionMatrix(),n.dispatchEvent(bl),n.update(),s=i.NONE},this.clearDampedRotation=function(){l.theta=0,l.phi=0},this.clearDampedPan=function(){d.set(0,0,0)},this.update=(function(){const U=new I,ee=new ct().setFromUnitVectors(e.up,new I(0,1,0)),me=ee.clone().invert(),de=new I,Re=new ct,Xe=new I,je=2*Math.PI;return function(){ee.setFromUnitVectors(e.up,new I(0,1,0)),me.copy(ee).invert();const ce=n.object.position;U.copy(ce).sub(n.target),U.applyQuaternion(ee),o.setFromVector3(U),n.autoRotate&&s===i.NONE&&P(y()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let B=n.minAzimuthAngle,ae=n.maxAzimuthAngle;isFinite(B)&&isFinite(ae)&&(B<-Math.PI?B+=je:B>Math.PI&&(B-=je),ae<-Math.PI?ae+=je:ae>Math.PI&&(ae-=je),B<=ae?o.theta=Math.max(B,Math.min(ae,o.theta)):o.theta=o.theta>(B+ae)/2?Math.max(B,o.theta):Math.min(ae,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.zoomToCursor&&M||n.object.isOrthographicCamera?o.radius=H(o.radius):o.radius=H(o.radius*c),U.setFromSpherical(o),U.applyQuaternion(me),ce.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let fe=!1;if(n.zoomToCursor&&M){let Ie=null;if(n.object.isPerspectiveCamera){const be=U.length();Ie=H(be*c);const Ze=be-Ie;n.object.position.addScaledVector(v,Ze),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const be=new I(E.x,E.y,0);be.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),fe=!0;const Ze=new I(E.x,E.y,0);Ze.unproject(n.object),n.object.position.sub(Ze).add(be),n.object.updateMatrixWorld(),Ie=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ie!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ie).add(n.object.position):(Ns.origin.copy(n.object.position),Ns.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ns.direction))<Vg?e.lookAt(n.target):(Rl.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ns.intersectPlane(Rl,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),fe=!0);return c=1,M=!1,fe||de.distanceToSquared(n.object.position)>a||8*(1-Re.dot(n.object.quaternion))>a||Xe.distanceToSquared(n.target)>0?(n.dispatchEvent(bl),de.copy(n.object.position),Re.copy(n.object.quaternion),Xe.copy(n.target),fe=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ve),n.domElement.removeEventListener("pointerdown",Ce),n.domElement.removeEventListener("pointercancel",T),n.domElement.removeEventListener("wheel",ne),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",T),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",se),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new al,l=new al;let c=1;const d=new I,u=new ye,h=new ye,f=new ye,A=new ye,g=new ye,m=new ye,p=new ye,S=new ye,x=new ye,v=new I,E=new ye;let M=!1;const _=[],D={};function y(){return 2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.zoomSpeed)}function P(U){l.theta-=U}function F(U){l.phi-=U}const N=(function(){const U=new I;return function(me,de){U.setFromMatrixColumn(de,0),U.multiplyScalar(-me),d.add(U)}})(),R=(function(){const U=new I;return function(me,de){n.screenSpacePanning===!0?U.setFromMatrixColumn(de,1):(U.setFromMatrixColumn(de,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(me),d.add(U)}})(),L=(function(){const U=new I;return function(me,de){const Re=n.domElement;if(n.object.isPerspectiveCamera){const Xe=n.object.position;U.copy(Xe).sub(n.target);let je=U.length();je*=Math.tan(n.object.fov/2*Math.PI/180),N(2*me*je/Re.clientHeight,n.object.matrix),R(2*de*je/Re.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(me*(n.object.right-n.object.left)/n.object.zoom/Re.clientWidth,n.object.matrix),R(de*(n.object.top-n.object.bottom)/n.object.zoom/Re.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function O(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(U){if(!n.zoomToCursor)return;M=!0;const ee=n.domElement.getBoundingClientRect(),me=U.clientX-ee.left,de=U.clientY-ee.top,Re=ee.width,Xe=ee.height;E.x=me/Re*2-1,E.y=-(de/Xe)*2+1,v.set(E.x,E.y,1).unproject(e).sub(e.position).normalize()}function H(U){return Math.max(n.minDistance,Math.min(n.maxDistance,U))}function q(U){u.set(U.clientX,U.clientY)}function J(U){X(U),p.set(U.clientX,U.clientY)}function $(U){A.set(U.clientX,U.clientY)}function W(U){h.set(U.clientX,U.clientY),f.subVectors(h,u).multiplyScalar(n.rotateSpeed);const ee=n.domElement;P(2*Math.PI*f.x/ee.clientHeight),F(2*Math.PI*f.y/ee.clientHeight),u.copy(h),n.update()}function Z(U){S.set(U.clientX,U.clientY),x.subVectors(S,p),x.y>0?O(C()):x.y<0&&V(C()),p.copy(S),n.update()}function ie(U){g.set(U.clientX,U.clientY),m.subVectors(g,A).multiplyScalar(n.panSpeed),L(m.x,m.y),A.copy(g),n.update()}function oe(U){X(U),U.deltaY<0?V(C()):U.deltaY>0&&O(C()),n.update()}function le(U){let ee=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(0,n.keyPanSpeed),ee=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(0,-n.keyPanSpeed),ee=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(n.keyPanSpeed,0),ee=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(-n.keyPanSpeed,0),ee=!0;break}ee&&(U.preventDefault(),n.update())}function Ee(){if(_.length===1)u.set(_[0].pageX,_[0].pageY);else{const U=.5*(_[0].pageX+_[1].pageX),ee=.5*(_[0].pageY+_[1].pageY);u.set(U,ee)}}function Me(){if(_.length===1)A.set(_[0].pageX,_[0].pageY);else{const U=.5*(_[0].pageX+_[1].pageX),ee=.5*(_[0].pageY+_[1].pageY);A.set(U,ee)}}function ge(){const U=_[0].pageX-_[1].pageX,ee=_[0].pageY-_[1].pageY,me=Math.sqrt(U*U+ee*ee);p.set(0,me)}function De(){n.enableZoom&&ge(),n.enablePan&&Me()}function k(){n.enableZoom&&ge(),n.enableRotate&&Ee()}function He(U){if(_.length==1)h.set(U.pageX,U.pageY);else{const me=Qe(U),de=.5*(U.pageX+me.x),Re=.5*(U.pageY+me.y);h.set(de,Re)}f.subVectors(h,u).multiplyScalar(n.rotateSpeed);const ee=n.domElement;P(2*Math.PI*f.x/ee.clientHeight),F(2*Math.PI*f.y/ee.clientHeight),u.copy(h)}function Ae(U){if(_.length===1)g.set(U.pageX,U.pageY);else{const ee=Qe(U),me=.5*(U.pageX+ee.x),de=.5*(U.pageY+ee.y);g.set(me,de)}m.subVectors(g,A).multiplyScalar(n.panSpeed),L(m.x,m.y),A.copy(g)}function Se(U){const ee=Qe(U),me=U.pageX-ee.x,de=U.pageY-ee.y,Re=Math.sqrt(me*me+de*de);S.set(0,Re),x.set(0,Math.pow(S.y/p.y,n.zoomSpeed)),O(x.y),p.copy(S)}function xe(U){n.enableZoom&&Se(U),n.enablePan&&Ae(U)}function qe(U){n.enableZoom&&Se(U),n.enableRotate&&He(U)}function Ce(U){n.enabled!==!1&&(_.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",w),n.domElement.addEventListener("pointerup",T)),Pe(U),U.pointerType==="touch"?Te(U):Q(U))}function w(U){n.enabled!==!1&&(U.pointerType==="touch"?pe(U):re(U))}function T(U){Ne(U),_.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",T)),n.dispatchEvent(wl),s=i.NONE}function Q(U){let ee;switch(U.button){case 0:ee=n.mouseButtons.LEFT;break;case 1:ee=n.mouseButtons.MIDDLE;break;case 2:ee=n.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case ii.DOLLY:if(n.enableZoom===!1)return;J(U),s=i.DOLLY;break;case ii.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;$(U),s=i.PAN}else{if(n.enableRotate===!1)return;q(U),s=i.ROTATE}break;case ii.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;q(U),s=i.ROTATE}else{if(n.enablePan===!1)return;$(U),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Yr)}function re(U){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;W(U);break;case i.DOLLY:if(n.enableZoom===!1)return;Z(U);break;case i.PAN:if(n.enablePan===!1)return;ie(U);break}}function ne(U){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(U.preventDefault(),n.dispatchEvent(Yr),oe(U),n.dispatchEvent(wl))}function se(U){n.enabled===!1||n.enablePan===!1||le(U)}function Te(U){switch(te(U),_.length){case 1:switch(n.touches.ONE){case si.ROTATE:if(n.enableRotate===!1)return;Ee(),s=i.TOUCH_ROTATE;break;case si.PAN:if(n.enablePan===!1)return;Me(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case si.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;De(),s=i.TOUCH_DOLLY_PAN;break;case si.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;k(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Yr)}function pe(U){switch(te(U),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;He(U),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ae(U),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;xe(U),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;qe(U),n.update();break;default:s=i.NONE}}function ve(U){n.enabled!==!1&&U.preventDefault()}function Pe(U){_.push(U)}function Ne(U){delete D[U.pointerId];for(let ee=0;ee<_.length;ee++)if(_[ee].pointerId==U.pointerId){_.splice(ee,1);return}}function te(U){let ee=D[U.pointerId];ee===void 0&&(ee=new ye,D[U.pointerId]=ee),ee.set(U.pageX,U.pageY)}function Qe(U){const ee=U.pointerId===_[0].pointerId?_[1]:_[0];return D[ee.pointerId]}n.domElement.addEventListener("contextmenu",ve),n.domElement.addEventListener("pointerdown",Ce),n.domElement.addEventListener("pointercancel",T),n.domElement.addEventListener("wheel",ne,{passive:!1}),this.update()}}const Wg=(r,e,t,n,i)=>{const s=performance.now();let a=r.style.display==="none"?0:parseFloat(r.style.opacity);isNaN(a)&&(a=1);const o=window.setInterval(()=>{const c=performance.now()-s;let d=Math.min(c/n,1);d>.999&&(d=1);let u;e?(u=(1-d)*a,u<1e-4&&(u=0)):u=(1-a)*d+a,u>0?(r.style.display=t,r.style.opacity=u):r.style.display="none",d>=1&&(i&&i(),window.clearInterval(o))},16);return o},Xg=500;class Po{static elementIDGen=0;constructor(e,t){this.taskIDGen=0,this.elementID=Po.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=t||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);const n=document.createElement("style");n.innerHTML=`

            .spinnerOuterContainer${this.elementID} {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .messageContainer${this.elementID} {
                height: 20px;
                font-family: arial;
                font-size: 12pt;
                color: #ffffff;
                text-align: center;
                vertical-align: middle;
            }

            .spinner${this.elementID} {
                padding: 15px;
                background: #07e8d6;
                z-index:99999;
            
                aspect-ratio: 1;
                border-radius: 50%;
                --_m: 
                    conic-gradient(#0000,#000),
                    linear-gradient(#000 0 0) content-box;
                -webkit-mask: var(--_m);
                    mask: var(--_m);
                -webkit-mask-composite: source-out;
                    mask-composite: subtract;
                box-sizing: border-box;
                animation: load 1s linear infinite;
            }

            .spinnerContainerPrimary${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 10px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-80px, -80px);
                width: 180px;
                pointer-events: auto;
            }

            .spinnerPrimary${this.elementID} {
                width: 120px;
                margin-left: 30px;
            }

            .messageContainerPrimary${this.elementID} {
                padding-top: 15px;
            }

            .spinnerContainerMin${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                display: flex;
                flex-direction: left;
                pointer-events: auto;
                min-width: 250px;
            }

            .messageContainerMin${this.elementID} {
                margin-right: 15px;
            }

            .spinnerMin${this.elementID} {
                width: 50px;
                height: 50px;
                margin-left: 15px;
                margin-right: 25px;
            }

            .messageContainerMin${this.elementID} {
                padding-top: 15px;
            }
            
            @keyframes load {
                to{transform: rotate(1turn)}
            }

        `,this.spinnerContainerOuter.appendChild(n),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){const t={message:e,id:this.taskIDGen++};return this.tasks.push(t),this.update(),t.id}removeTask(e){let t=0;for(let n of this.tasks){if(n.id===e){this.tasks.splice(t,1);break}t++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,t){for(let n of this.tasks)if(n.id===e){n.message=t;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,t){const n=(i,s,a,o,l)=>{a?i.style.display=s?o:"none":this.fadeTransitions[l]=Wg(i,!s,o,Xg,()=>{this.fadeTransitions[l]=null})};n(this.spinnerContainerPrimary,!e,t,"block",0),n(this.spinnerContainerMin,e,t,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}}class qg{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);const t=document.createElement("style");t.innerHTML=`

            .progressBarOuterContainer {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .progressBarBox {
                z-index:99999;
                padding: 7px 9px 5px 7px;
                background-color: rgba(190, 190, 190, 0.75);
                border: #555555 1px solid;
                border-radius: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 180px;
                height: 30px;
                pointer-events: auto;
            }

            .progressBarBackground {
                width: 100%;
                height: 25px;
                border-radius:10px;
                background-color: rgba(128, 128, 128, 0.75);
                border: #444444 1px solid;
                box-shadow: inset 0 0 10px #333333;
            }

            .progressBar {
                height: 25px;
                width: 0px;
                border-radius:10px;
                background-color: rgba(0, 200, 0, 0.75);
                box-shadow: inset 0 0 10px #003300;
            }

        `,this.progressBarContainerOuter.appendChild(t),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}}class Qg{constructor(e){this.container=e||document.body,this.infoCells={};const t=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const n=document.createElement("style");n.innerHTML=`

            .infoPanel {
                width: 430px;
                padding: 10px;
                background-color: rgba(50, 50, 50, 0.85);
                border: #555555 2px solid;
                color: #dddddd;
                border-radius: 10px;
                z-index: 9999;
                font-family: arial;
                font-size: 11pt;
                text-align: left;
                margin: 0;
                top: 10px;
                left:10px;
                position: absolute;
                pointer-events: auto;
            }

            .info-panel-cell {
                margin-bottom: 5px;
                padding-bottom: 2px;
            }

            .label-cell {
                font-weight: bold;
                font-size: 12pt;
                width: 140px;
            }

        `,this.infoPanelContainer.append(n),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";const i=document.createElement("div");i.style.display="table";for(let s of t){const a=document.createElement("div");a.style.display="table-row",a.className="info-panel-row";const o=document.createElement("div");o.style.display="table-cell",o.innerHTML=`${s[0]}: `,o.classList.add("info-panel-cell","label-cell");const l=document.createElement("div");l.style.display="table-cell",l.style.width="10px",l.innerHTML=" ",l.className="info-panel-cell";const c=document.createElement("div");c.style.display="table-cell",c.innerHTML="",c.className="info-panel-cell",this.infoCells[s[1]]=c,a.appendChild(o),a.appendChild(l),a.appendChild(c),i.appendChild(a)}this.infoPanel.appendChild(i),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}update=function(e,t,n,i,s,a,o,l,c,d,u,h,f,A){const g=`${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==g&&(this.infoCells.cameraPosition.innerHTML=g),n){const p=n,S=`${p.x.toFixed(5)}, ${p.y.toFixed(5)}, ${p.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==S&&(this.infoCells.cameraLookAt.innerHTML=S)}const m=`${i.x.toFixed(5)}, ${i.y.toFixed(5)}, ${i.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==m&&(this.infoCells.cameraUp.innerHTML=m),this.infoCells.orthographicCamera.innerHTML=s?"Orthographic":"Perspective",a){const p=a,S=`${p.x.toFixed(5)}, ${p.y.toFixed(5)}, ${p.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=S}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=o,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${c} splats out of ${l} (${d.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${u.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${h.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${f.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${A}`};setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}}const Il=new I;class Yg extends xt{constructor(e=new I(0,0,1),t=new I(0,0,0),n=1,i=.1,s=16776960,a=n*.2,o=a*.2){super(),this.type="ArrowHelper";const l=new os(i,i,n,32);l.translate(0,n/2,0);const c=new os(0,o,a,32);c.translate(0,n,0),this.position.copy(t),this.line=new gt(l,new ti({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new gt(c,new ti({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Il.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Il,t)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Ji{constructor(e){this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,t){this.destroySplatRendertarget(),this.splatRenderTarget=new Gn(e,t,{format:Nt,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new go(e,t),this.splatRenderTarget.depthTexture.format=kn,this.splatRenderTarget.depthTexture.type=qt}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){const e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},t=new nn({vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4( position.xy, 0.0, 1.0 );    
                }
            `,fragmentShader:`
                #include <common>
                #include <packing>
                varying vec2 vUv;
                uniform sampler2D sourceColorTexture;
                uniform sampler2D sourceDepthTexture;
                void main() {
                    vec4 color = texture2D(sourceColorTexture, vUv);
                    float fragDepth = texture2D(sourceDepthTexture, vUv).x;
                    gl_FragDepth = fragDepth;
                    gl_FragColor = vec4(color.rgb, color.a * 2.0);
              }
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:Nl,blendSrc:ts,blendSrcAlpha:ts,blendDst:ns,blendDstAlpha:ns});t.extensions.fragDepth=!0,this.renderTargetCopyQuad=new gt(new rs(2,2),t),this.renderTargetCopyCamera=new po(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(Mi(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){const e=new Ao(.5,1.5,32),t=new ti({color:16777215}),n=new gt(e,t);n.rotation.set(0,0,Math.PI),n.position.set(0,1,0);const i=new gt(e,t);i.position.set(0,-1,0);const s=new gt(e,t);s.rotation.set(0,0,Math.PI/2),s.position.set(1,0,0);const a=new gt(e,t);a.rotation.set(0,0,-Math.PI/2),a.position.set(-1,0,0),this.meshCursor=new xt,this.meshCursor.add(n),this.meshCursor.add(i),this.meshCursor.add(s),this.meshCursor.add(a),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(Mi(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,t){this.meshCursor.position.copy(e),this.meshCursor.up.copy(t.up),this.meshCursor.lookAt(t.position)}setupFocusMarker(){if(!this.focusMarker){const e=new Js(.5,32,32),t=Ji.buildFocusMarkerMaterial();t.depthTest=!1,t.depthWrite=!1,t.transparent=!0,this.focusMarker=new gt(e,t)}}destroyFocusMarker(){this.focusMarker&&(Mi(this.focusMarker),this.focusMarker=null)}updateFocusMarker=(function(){const e=new I,t=new Ue,n=new I;return function(i,s,a){t.copy(s.matrixWorld).invert(),e.copy(i).applyMatrix4(t),e.normalize().multiplyScalar(10),e.applyMatrix4(s.matrixWorld),n.copy(s.position).sub(i);const o=n.length();this.focusMarker.position.copy(i),this.focusMarker.scale.set(o,o,o),this.focusMarker.material.uniforms.realFocusPosition.value.copy(i),this.focusMarker.material.uniforms.viewport.value.copy(a),this.focusMarker.material.uniformsNeedUpdate=!0}})();setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const e=new rs(1,1);e.rotateX(-Math.PI/2);const t=new ti({color:16777215});t.transparent=!0,t.opacity=.6,t.depthTest=!1,t.depthWrite=!1,t.side=$t;const n=new gt(e,t),i=new I(0,1,0);i.normalize();const s=new I(0,0,0),a=.5,o=.01,l=56576,c=new Yg(i,s,a,o,l,.1,.03);this.controlPlane=new xt,this.controlPlane.add(n),this.controlPlane.add(c)}}destroyControlPlane(){this.controlPlane&&(Mi(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}positionAndOrientControlPlane=(function(){const e=new ct,t=new I(0,1,0);return function(n,i){e.setFromUnitVectors(t,i),this.controlPlane.position.copy(n),this.controlPlane.quaternion.copy(e)}})();addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(Mi(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){const t=new Js(1,32,32),n=new xt,i=(s,a)=>{let o=new gt(t,Ji.buildDebugMaterial(s));o.renderOrder=e,n.add(o),o.position.fromArray(a)};return i(16711680,[-50,0,0]),i(16711680,[50,0,0]),i(65280,[0,0,-50]),i(65280,[0,0,50]),i(16755200,[5,0,5]),n}createSecondaryDebugMeshes(e){const t=new zi(3,3,3),n=new xt;let i=12303291;const s=o=>{let l=new gt(t,Ji.buildDebugMaterial(i));l.renderOrder=e,n.add(l),l.position.fromArray(o)};let a=10;return s([-a,0,-a]),s([-a,0,a]),s([a,0,-a]),s([a,0,a]),n}static buildDebugMaterial(e){const t=`
            #include <common>
            varying float ndcDepth;

            void main() {
                gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.xyz, 1.0);
                ndcDepth = gl_Position.z / gl_Position.w;
                gl_Position.x = gl_Position.x / gl_Position.w;
                gl_Position.y = gl_Position.y / gl_Position.w;
                gl_Position.z = 0.0;
                gl_Position.w = 1.0;
    
            }
        `,n=`
            #include <common>
            uniform vec3 color;
            varying float ndcDepth;
            void main() {
                gl_FragDepth = (ndcDepth + 1.0) / 2.0;
                gl_FragColor = vec4(color.rgb, 0.0);
            }
        `,i={color:{type:"v3",value:new Ke(e)}},s=new nn({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!1,depthTest:!0,depthWrite:!0,side:mn});return s.extensions.fragDepth=!0,s}static buildFocusMarkerMaterial(e){const t=`
            #include <common>

            uniform vec2 viewport;
            uniform vec3 realFocusPosition;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                float radius = 0.01;

                vec4 viewPosition = modelViewMatrix * vec4(position.xyz, 1.0);
                vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);

                vec4 viewFocusPosition = modelViewMatrix * vec4(realFocusPosition, 1.0);

                ndcPosition = projectionMatrix * viewPosition;
                ndcPosition = ndcPosition * vec4(1.0 / ndcPosition.w);
                ndcCenter = projectionMatrix * viewCenter;
                ndcCenter = ndcCenter * vec4(1.0 / ndcCenter.w);

                ndcFocusPosition = projectionMatrix * viewFocusPosition;
                ndcFocusPosition = ndcFocusPosition * vec4(1.0 / ndcFocusPosition.w);

                gl_Position = projectionMatrix * viewPosition;

            }
        `,n=`
            #include <common>
            uniform vec3 color;
            uniform vec2 viewport;
            uniform float opacity;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                vec2 screenPosition = vec2(ndcPosition) * viewport;
                vec2 screenCenter = vec2(ndcCenter) * viewport;

                vec2 screenVec = screenPosition - screenCenter;

                float projectedRadius = length(screenVec);

                float lineWidth = 0.0005 * viewport.y;
                float aaRange = 0.0025 * viewport.y;
                float radius = 0.06 * viewport.y;
                float radDiff = abs(projectedRadius - radius) - lineWidth;
                float alpha = 1.0 - clamp(radDiff / 5.0, 0.0, 1.0); 

                gl_FragColor = vec4(color.rgb, alpha * opacity);
            }
        `,i={color:{type:"v3",value:new Ke(e)},realFocusPosition:{type:"v3",value:new I},viewport:{type:"v2",value:new ye},opacity:{value:0}};return new nn({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!0,depthTest:!1,depthWrite:!1,side:mn})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}}const Kg=new I(1,0,0),jg=new I(0,1,0),Zg=new I(0,0,1);class Kr{constructor(e=new I,t=new I){this.origin=new I,this.direction=new I,this.setParameters(e,t)}setParameters(e,t){this.origin.copy(e),this.direction.copy(t).normalize()}boxContainsPoint(e,t,n){return!(t.x<e.min.x-n||t.x>e.max.x+n||t.y<e.min.y-n||t.y>e.max.y+n||t.z<e.min.z-n||t.z>e.max.z+n)}intersectBox=(function(){const e=new I,t=[],n=[],i=[];return function(s,a){if(n[0]=this.origin.x,n[1]=this.origin.y,n[2]=this.origin.z,i[0]=this.direction.x,i[1]=this.direction.y,i[2]=this.direction.z,this.boxContainsPoint(s,this.origin,1e-4))return a&&(a.origin.copy(this.origin),a.normal.set(0,0,0),a.distance=-1),!0;for(let o=0;o<3;o++){if(i[o]==0)continue;const l=o==0?Kg:o==1?jg:Zg,c=i[o]<0?s.max:s.min;let d=-Math.sign(i[o]);t[0]=o==0?c.x:o==1?c.y:c.z;let u=t[0]-n[o];if(u*d<0){const h=(o+1)%3,f=(o+2)%3;if(t[2]=i[h]/i[o]*u+n[h],t[1]=i[f]/i[o]*u+n[f],e.set(t[o],t[f],t[h]),this.boxContainsPoint(s,e,1e-4))return a&&(a.origin.copy(e),a.normal.copy(l).multiplyScalar(d),a.distance=e.sub(this.origin).length()),!0}}return!1}})();intersectSphere=(function(){const e=new I;return function(t,n,i){e.copy(t).sub(this.origin);const s=e.dot(this.direction),a=s*s,l=e.dot(e)-a,c=n*n;if(l>c)return!1;const d=Math.sqrt(c-l),u=s-d,h=s+d;if(h<0)return!1;let f=u<0?h:u;return i&&(i.origin.copy(this.origin).addScaledVector(this.direction,f),i.normal.copy(i.origin).sub(t).normalize(),i.distance=f),!0}})()}class Lo{constructor(){this.origin=new I,this.normal=new I,this.distance=0,this.splatIndex=0}set(e,t,n,i){this.origin.copy(e),this.normal.copy(t),this.distance=n,this.splatIndex=i}clone(){const e=new Lo;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}}const Mn={ThreeD:0,TwoD:1};class Jg{constructor(e,t,n=!1){this.ray=new Kr(e,t),this.raycastAgainstTrueSplatEllipsoid=n}setFromCameraAndScreenPosition=(function(){const e=new ye;return function(t,n,i){if(e.x=n.x/i.x*2-1,e.y=(i.y-n.y)/i.y*2-1,t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}})();intersectSplatMesh=(function(){const e=new Ue,t=new Ue,n=new Ue,i=new Kr,s=new I;return function(a,o=[]){const l=a.getSplatTree();if(l){for(let c=0;c<l.subTrees.length;c++){const d=l.subTrees[c];t.copy(a.matrixWorld),a.dynamicMode&&(a.getSceneTransform(c,n),t.multiply(n)),e.copy(t).invert(),i.origin.copy(this.ray.origin).applyMatrix4(e),i.direction.copy(this.ray.origin).add(this.ray.direction),i.direction.applyMatrix4(e).sub(i.origin).normalize();const u=[];d.rootNode&&this.castRayAtSplatTreeNode(i,l,d.rootNode,u),u.forEach(h=>{h.origin.applyMatrix4(t),h.normal.applyMatrix4(t).normalize(),h.distance=s.copy(h.origin).sub(this.ray.origin).length()}),o.push(...u)}return o.sort((c,d)=>c.distance>d.distance?1:-1),o}}})();castRayAtSplatTreeNode=(function(){const e=new At,t=new I,n=new I,i=new ct,s=new Lo,a=1e-7,o=new I(0,0,0),l=new Ue,c=new Ue,d=new Ue,u=new Ue,h=new Ue,f=new Kr;return function(A,g,m,p=[]){if(A.intersectBox(m.boundingBox)){if(m.data&&m.data.indexes&&m.data.indexes.length>0)for(let S=0;S<m.data.indexes.length;S++){const x=m.data.indexes[S],v=g.splatMesh.getSceneIndexForSplat(x);if(g.splatMesh.getScene(v).visible&&(g.splatMesh.getSplatColor(x,e),g.splatMesh.getSplatCenter(x,t),g.splatMesh.getSplatScaleAndRotation(x,n,i),!(n.x<=a||n.y<=a||g.splatMesh.splatRenderMode===Mn.ThreeD&&n.z<=a)))if(this.raycastAgainstTrueSplatEllipsoid){c.makeScale(n.x,n.y,n.z),d.makeRotationFromQuaternion(i);const M=Math.log10(e.w)*2;if(l.makeScale(M,M,M),h.copy(l).multiply(d).multiply(c),u.copy(h).invert(),f.origin.copy(A.origin).sub(t).applyMatrix4(u),f.direction.copy(A.origin).add(A.direction).sub(t),f.direction.applyMatrix4(u).sub(f.origin).normalize(),f.intersectSphere(o,1,s)){const _=s.clone();_.splatIndex=x,_.origin.applyMatrix4(h).add(t),p.push(_)}}else{let M=n.x+n.y,_=2;if(g.splatMesh.splatRenderMode===Mn.ThreeD&&(M+=n.z,_=3),M=M/_,A.intersectSphere(t,M,s)){const D=s.clone();D.splatIndex=x,p.push(D)}}}if(m.children&&m.children.length>0)for(let S of m.children)this.castRayAtSplatTreeNode(A,g,S,p);return p}}})()}class Ii{static buildVertexShaderBase(e=!1,t=!1,n=0,i=""){let s=`
        precision highp float;
        #include <common>

        attribute uint splatIndex;
        uniform highp usampler2D centersColorsTexture;
        uniform highp sampler2D sphericalHarmonicsTexture;
        uniform highp sampler2D sphericalHarmonicsTextureR;
        uniform highp sampler2D sphericalHarmonicsTextureG;
        uniform highp sampler2D sphericalHarmonicsTextureB;

        uniform highp usampler2D sceneIndexesTexture;
        uniform vec2 sceneIndexesTextureSize;
        uniform int sceneCount;
    `;return t&&(s+=`
            uniform float sceneOpacity[${nt.MaxScenes}];
            uniform int sceneVisibility[${nt.MaxScenes}];
        `),e&&(s+=`
            uniform highp mat4 transforms[${nt.MaxScenes}];
        `),s+=`
        ${i}
        uniform vec2 focal;
        uniform float orthoZoom;
        uniform int orthographicMode;
        uniform int pointCloudModeEnabled;
        uniform float inverseFocalAdjustment;
        uniform vec2 viewport;
        uniform vec2 basisViewport;
        uniform vec2 centersColorsTextureSize;
        uniform int sphericalHarmonicsDegree;
        uniform vec2 sphericalHarmonicsTextureSize;
        uniform int sphericalHarmonics8BitMode;
        uniform int sphericalHarmonicsMultiTextureMode;
        uniform float visibleRegionRadius;
        uniform float visibleRegionFadeStartRadius;
        uniform float firstRenderTime;
        uniform float currentTime;
        uniform int fadeInComplete;
        uniform vec3 sceneCenter;
        uniform float splatScale;
        uniform float sphericalHarmonics8BitCompressionRangeMin[${nt.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${nt.MaxScenes}];

        varying vec4 vColor;
        varying vec2 vUv;
        varying vec2 vPosition;

        mat3 quaternionToRotationMatrix(float x, float y, float z, float w) {
            float s = 1.0 / sqrt(w * w + x * x + y * y + z * z);
        
            return mat3(
                1. - 2. * (y * y + z * z),
                2. * (x * y + w * z),
                2. * (x * z - w * y),
                2. * (x * y - w * z),
                1. - 2. * (x * x + z * z),
                2. * (y * z + w * x),
                2. * (x * z + w * y),
                2. * (y * z - w * x),
                1. - 2. * (x * x + y * y)
            );
        }

        const float sqrt8 = sqrt(8.0);
        const float minAlpha = 1.0 / 255.0;

        const vec4 encodeNorm4 = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
        const uvec4 mask4 = uvec4(uint(0x000000FF), uint(0x0000FF00), uint(0x00FF0000), uint(0xFF000000));
        const uvec4 shift4 = uvec4(0, 8, 16, 24);
        vec4 uintToRGBAVec (uint u) {
           uvec4 urgba = mask4 & u;
           urgba = urgba >> shift4;
           vec4 rgba = vec4(urgba) * encodeNorm4;
           return rgba;
        }

        vec2 getDataUV(in int stride, in int offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(splatIndex * uint(stride) + uint(offset)) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        vec2 getDataUVF(in uint sIndex, in float stride, in uint offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(uint(float(sIndex) * stride) + offset) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        const float SH_C1 = 0.4886025119029199f;
        const float[5] SH_C2 = float[](1.0925484, -1.0925484, 0.3153916, -1.0925484, 0.5462742);

        void main () {

            uint oddOffset = splatIndex & uint(0x00000001);
            uint doubleOddOffset = oddOffset * uint(2);
            bool isEven = oddOffset == uint(0);
            uint nearestEvenIndex = splatIndex - oddOffset;
            float fOddOffset = float(oddOffset);

            uvec4 sampledCenterColor = texture(centersColorsTexture, getDataUV(1, 0, centersColorsTextureSize));
            vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));

            uint sceneIndex = uint(0);
            if (sceneCount > 1) {
                sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
            }
            `,t&&(s+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `),e?s+=`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = viewMatrix * transform;
            `:s+="mat4 transformModelViewMatrix = modelViewMatrix;",s+=`
            float sh8BitCompressionRangeMinForScene = sphericalHarmonics8BitCompressionRangeMin[sceneIndex];
            float sh8BitCompressionRangeMaxForScene = sphericalHarmonics8BitCompressionRangeMax[sceneIndex];
            float sh8BitCompressionRangeForScene = sh8BitCompressionRangeMaxForScene - sh8BitCompressionRangeMinForScene;
            float sh8BitCompressionHalfRangeForScene = sh8BitCompressionRangeForScene / 2.0;
            vec3 vec8BitSHShift = vec3(sh8BitCompressionRangeMinForScene);

            vec4 viewCenter = transformModelViewMatrix * vec4(splatCenter, 1.0);

            vec4 clipCenter = projectionMatrix * viewCenter;

            float clip = 1.2 * clipCenter.w;
            if (clipCenter.z < -clip || clipCenter.x < -clip || clipCenter.x > clip || clipCenter.y < -clip || clipCenter.y > clip) {
                gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                return;
            }

            vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

            vPosition = position.xy;
            vColor = uintToRGBAVec(sampledCenterColor.r);
        `,n>=1&&(s+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `,e?s+=`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `:s+=`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `,s+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `,n>=2&&(s+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `),n===1?s+=`
                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        vec2 shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset, sphericalHarmonicsTextureSize);
                        vec4 sampledSH0123 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(1), sphericalHarmonicsTextureSize);
                        vec4 sampledSH4567 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(2), sphericalHarmonicsTextureSize);
                        vec4 sampledSH891011 = texture(sphericalHarmonicsTexture, shUV);
                        sh1 = vec3(sampledSH0123.rgb) * (1.0 - fOddOffset) + vec3(sampledSH0123.ba, sampledSH4567.r) * fOddOffset;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg) * (1.0 - fOddOffset) + vec3(sampledSH4567.gba) * fOddOffset;
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r) * (1.0 - fOddOffset) + vec3(sampledSH891011.rgb) * fOddOffset;
                    } else {
                        vec2 sampledSH01R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        sh1 = vec3(sampledSH01R.rg, sampledSH23R.r);
                        sh2 = vec3(sampledSH01G.rg, sampledSH23G.r);
                        sh3 = vec3(sampledSH01B.rg, sampledSH23B.r);
                    }
                `:n===2&&(s+=`
                    vec4 sampledSH0123;
                    vec4 sampledSH4567;
                    vec4 sampledSH891011;

                    vec4 sampledSH0123R;
                    vec4 sampledSH0123G;
                    vec4 sampledSH0123B;

                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        sampledSH0123 = texture(sphericalHarmonicsTexture, getDataUV(6, 0, sphericalHarmonicsTextureSize));
                        sampledSH4567 = texture(sphericalHarmonicsTexture, getDataUV(6, 1, sphericalHarmonicsTextureSize));
                        sampledSH891011 = texture(sphericalHarmonicsTexture, getDataUV(6, 2, sphericalHarmonicsTextureSize));
                        sh1 = sampledSH0123.rgb;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg);
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r);
                    } else {
                        sampledSH0123R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sh1 = vec3(sampledSH0123R.rgb);
                        sh2 = vec3(sampledSH0123G.rgb);
                        sh3 = vec3(sampledSH0123B.rgb);
                    }
                `),s+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `,n>=2&&(s+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `,n===2&&(s+=`
                        if (sphericalHarmonicsMultiTextureMode == 0) {
                            vec4 sampledSH12131415 = texture(sphericalHarmonicsTexture, getDataUV(6, 3, sphericalHarmonicsTextureSize));
                            vec4 sampledSH16171819 = texture(sphericalHarmonicsTexture, getDataUV(6, 4, sphericalHarmonicsTextureSize));
                            vec4 sampledSH20212223 = texture(sphericalHarmonicsTexture, getDataUV(6, 5, sphericalHarmonicsTextureSize));
                            sh4 = sampledSH891011.gba;
                            sh5 = sampledSH12131415.rgb;
                            sh6 = vec3(sampledSH12131415.a, sampledSH16171819.rg);
                            sh7 = vec3(sampledSH16171819.ba, sampledSH20212223.r);
                            sh8 = sampledSH20212223.gba;
                        } else {
                            vec4 sampledSH4567R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            sh4 = vec3(sampledSH0123R.a, sampledSH4567R.rg);
                            sh5 = vec3(sampledSH4567R.ba, sampledSH0123G.a);
                            sh6 = vec3(sampledSH4567G.rgb);
                            sh7 = vec3(sampledSH4567G.a, sampledSH0123B.a, sampledSH4567B.r);
                            sh8 = vec3(sampledSH4567B.gba);
                        }
                    `),s+=`
                        if (sphericalHarmonics8BitMode == 1) {
                            sh4 = sh4 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh5 = sh5 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh6 = sh6 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh7 = sh7 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh8 = sh8 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        }

                        vColor.rgb +=
                            (SH_C2[0] * xy) * sh4 +
                            (SH_C2[1] * yz) * sh5 +
                            (SH_C2[2] * (2.0 * zz - xx - yy)) * sh6 +
                            (SH_C2[3] * xz) * sh7 +
                            (SH_C2[4] * (xx - yy)) * sh8;
                    }
                `),s+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `),s}static getVertexShaderFadeIn(){return`
            if (fadeInComplete == 0) {
                float opacityAdjust = 1.0;
                float centerDist = length(splatCenter - sceneCenter);
                float renderTime = max(currentTime - firstRenderTime, 0.0);

                float fadeDistance = 0.75;
                float distanceLoadFadeInFactor = step(visibleRegionFadeStartRadius, centerDist);
                distanceLoadFadeInFactor = (1.0 - distanceLoadFadeInFactor) +
                                        (1.0 - clamp((centerDist - visibleRegionFadeStartRadius) / fadeDistance, 0.0, 1.0)) *
                                        distanceLoadFadeInFactor;
                opacityAdjust *= distanceLoadFadeInFactor;
                vColor.a *= opacityAdjust;
            }
        `}static getUniforms(e=!1,t=!1,n=0,i=1,s=!1){const a={sceneCenter:{type:"v3",value:new I},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new ye},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new ye},basisViewport:{type:"v2",value:new ye},debugColor:{type:"v3",value:new Ke},centersColorsTextureSize:{type:"v2",value:new ye(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:n},sphericalHarmonicsTextureSize:{type:"v2",value:new ye(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:i},pointCloudModeEnabled:{type:"i",value:s?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new ye(1024,1024)},sceneCount:{type:"i",value:1}};for(let o=0;o<nt.MaxScenes;o++)a.sphericalHarmonics8BitCompressionRangeMin.value.push(-3/2),a.sphericalHarmonics8BitCompressionRangeMax.value.push(nt.SphericalHarmonics8BitCompressionRange/2);if(t){const o=[];for(let c=0;c<nt.MaxScenes;c++)o.push(1);a.sceneOpacity={type:"f",value:o};const l=[];for(let c=0;c<nt.MaxScenes;c++)l.push(1);a.sceneVisibility={type:"i",value:l}}if(e){const o=[];for(let l=0;l<nt.MaxScenes;l++)o.push(new Ue);a.transforms={type:"mat4",value:o}}return a}}class er{static build(e=!1,t=!1,n=!1,i=2048,s=1,a=!1,o=0,l=.3){let d=Ii.buildVertexShaderBase(e,t,o,`
            uniform vec2 covariancesTextureSize;
            uniform highp sampler2D covariancesTexture;
            uniform highp usampler2D covariancesTextureHalfFloat;
            uniform int covariancesAreHalfFloat;

            void fromCovarianceHalfFloatV4(uvec4 val, out vec4 first, out vec4 second) {
                vec2 r = unpackHalf2x16(val.r);
                vec2 g = unpackHalf2x16(val.g);
                vec2 b = unpackHalf2x16(val.b);

                first = vec4(r.x, r.y, g.x, g.y);
                second = vec4(b.x, b.y, 0.0, 0.0);
            }
        `);d+=er.buildVertexShaderProjection(n,t,i,l);const u=er.buildFragmentShader(),h=Ii.getUniforms(e,t,o,s,a);return h.covariancesTextureSize={type:"v2",value:new ye(1024,1024)},h.covariancesTexture={type:"t",value:null},h.covariancesTextureHalfFloat={type:"t",value:null},h.covariancesAreHalfFloat={type:"i",value:0},new nn({uniforms:h,vertexShader:d,fragmentShader:u,transparent:!0,alphaTest:1,blending:zn,depthTest:!0,depthWrite:!1,side:$t})}static buildVertexShaderProjection(e,t,n,i){let s=`

            vec4 sampledCovarianceA;
            vec4 sampledCovarianceB;
            vec3 cov3D_M11_M12_M13;
            vec3 cov3D_M22_M23_M33;
            if (covariancesAreHalfFloat == 0) {
                sampledCovarianceA = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset,
                                                                            covariancesTextureSize));
                sampledCovarianceB = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset + uint(1),
                                                                            covariancesTextureSize));

                cov3D_M11_M12_M13 = vec3(sampledCovarianceA.rgb) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceA.ba, sampledCovarianceB.r) * fOddOffset;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceB.gba) * fOddOffset;
            } else {
                uvec4 sampledCovarianceU = texture(covariancesTextureHalfFloat, getDataUV(1, 0, covariancesTextureSize));
                fromCovarianceHalfFloatV4(sampledCovarianceU, sampledCovarianceA, sampledCovarianceB);
                cov3D_M11_M12_M13 = sampledCovarianceA.rgb;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg);
            }
        
            // Construct the 3D covariance matrix
            mat3 Vrk = mat3(
                cov3D_M11_M12_M13.x, cov3D_M11_M12_M13.y, cov3D_M11_M12_M13.z,
                cov3D_M11_M12_M13.y, cov3D_M22_M23_M33.x, cov3D_M22_M23_M33.y,
                cov3D_M11_M12_M13.z, cov3D_M22_M23_M33.y, cov3D_M22_M23_M33.z
            );

            mat3 J;
            if (orthographicMode == 1) {
                // Since the projection is linear, we don't need an approximation
                J = transpose(mat3(orthoZoom, 0.0, 0.0,
                                0.0, orthoZoom, 0.0,
                                0.0, 0.0, 0.0));
            } else {
                // Construct the Jacobian of the affine approximation of the projection matrix. It will be used to transform the
                // 3D covariance matrix instead of using the actual projection matrix because that transformation would
                // require a non-linear component (perspective division) which would yield a non-gaussian result.
                float s = 1.0 / (viewCenter.z * viewCenter.z);
                J = mat3(
                    focal.x / viewCenter.z, 0., -(focal.x * viewCenter.x) * s,
                    0., focal.y / viewCenter.z, -(focal.y * viewCenter.y) * s,
                    0., 0., 0.
                );
            }

            // Concatenate the projection approximation with the model-view transformation
            mat3 W = transpose(mat3(transformModelViewMatrix));
            mat3 T = W * J;

            // Transform the 3D covariance matrix (Vrk) to compute the 2D covariance matrix
            mat3 cov2Dm = transpose(T) * Vrk * T;
            `;return e?s+=`
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            `:s+=`
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
            `,s+=`

            // We are interested in the upper-left 2x2 portion of the projected 3D covariance matrix because
            // we only care about the X and Y values. We want the X-diagonal, cov2Dm[0][0],
            // the Y-diagonal, cov2Dm[1][1], and the correlation between the two cov2Dm[0][1]. We don't
            // need cov2Dm[1][0] because it is a symetric matrix.
            vec3 cov2Dv = vec3(cov2Dm[0][0], cov2Dm[0][1], cov2Dm[1][1]);

            // We now need to solve for the eigen-values and eigen vectors of the 2D covariance matrix
            // so that we can determine the 2D basis for the splat. This is done using the method described
            // here: https://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
            // After calculating the eigen-values and eigen-vectors, we calculate the basis for rendering the splat
            // by normalizing the eigen-vectors and then multiplying them by (sqrt(8) * sqrt(eigen-value)), which is
            // equal to scaling them by sqrt(8) standard deviations.
            //
            // This is a different approach than in the original work at INRIA. In that work they compute the
            // max extents of the projected splat in screen space to form a screen-space aligned bounding rectangle
            // which forms the geometry that is actually rasterized. The dimensions of that bounding box are 3.0
            // times the square root of the maximum eigen-value, or 3 standard deviations. They then use the inverse
            // 2D covariance matrix (called 'conic') in the CUDA rendering thread to determine fragment opacity by
            // calculating the full gaussian: exp(-0.5 * (X - mean) * conic * (X - mean)) * splat opacity
            float a = cov2Dv.x;
            float d = cov2Dv.z;
            float b = cov2Dv.y;
            float D = a * d - b * b;
            float trace = a + d;
            float traceOver2 = 0.5 * trace;
            float term2 = sqrt(max(0.1f, traceOver2 * traceOver2 - D));
            float eigenValue1 = traceOver2 + term2;
            float eigenValue2 = traceOver2 - term2;

            if (pointCloudModeEnabled == 1) {
                eigenValue1 = eigenValue2 = 0.2;
            }

            if (eigenValue2 <= 0.0) return;

            vec2 eigenVector1 = normalize(vec2(b, eigenValue1 - a));
            // since the eigen vectors are orthogonal, we derive the second one from the first
            vec2 eigenVector2 = vec2(eigenVector1.y, -eigenVector1.x);

            // We use sqrt(8) standard deviations instead of 3 to eliminate more of the splat with a very low opacity.
            vec2 basisVector1 = eigenVector1 * splatScale * min(sqrt8 * sqrt(eigenValue1), ${parseInt(n)}.0);
            vec2 basisVector2 = eigenVector2 * splatScale * min(sqrt8 * sqrt(eigenValue2), ${parseInt(n)}.0);
            `,t&&(s+=`
                vColor.a *= splatOpacityFromScene;
            `),s+=`
            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *
                             basisViewport * 2.0 * inverseFocalAdjustment;

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            // Scale the position data we send to the fragment shader
            vPosition *= sqrt8;
        `,s+=Ii.getVertexShaderFadeIn(),s+="}",s}static buildFragmentShader(){let e=`
            precision highp float;
            #include <common>
 
            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
        `;return e+=`
            void main () {
                // Compute the positional squared distance from the center of the splat to the current fragment.
                float A = dot(vPosition, vPosition);
                // Since the positional data in vPosition has been scaled by sqrt(8), the squared result will be
                // scaled by a factor of 8. If the squared result is larger than 8, it means it is outside the ellipse
                // defined by the rectangle formed by vPosition. It also means it's farther
                // away than sqrt(8) standard deviations from the mean.
                if (A > 8.0) discard;
                vec3 color = vColor.rgb;

                // Since the rendered splat is scaled by sqrt(8), the inverse covariance matrix that is part of
                // the gaussian formula becomes the identity matrix. We're then left with (X - mean) * (X - mean),
                // and since 'mean' is zero, we have X * X, which is the same as A:
                float opacity = exp(-0.5 * A) * vColor.a;

                gl_FragColor = vec4(color.rgb, opacity);
            }
        `,e}}class tr{static build(e=!1,t=!1,n=1,i=!1,s=0){let o=Ii.buildVertexShaderBase(e,t,s,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);o+=tr.buildVertexShaderProjection();const l=tr.buildFragmentShader(),c=Ii.getUniforms(e,t,s,n,i);return c.scaleRotationsTexture={type:"t",value:null},c.scaleRotationsTextureSize={type:"v2",value:new ye(1024,1024)},new nn({uniforms:c,vertexShader:o,fragmentShader:l,transparent:!0,alphaTest:1,blending:zn,depthTest:!0,depthWrite:!1,side:$t})}static buildVertexShaderProjection(){let e=`

            vec4 scaleRotationA = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset, scaleRotationsTextureSize));
            vec4 scaleRotationB = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset + uint(1), scaleRotationsTextureSize));

            vec3 scaleRotation123 = vec3(scaleRotationA.rgb) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationA.ba, scaleRotationB.r) * fOddOffset;
            vec3 scaleRotation456 = vec3(scaleRotationA.a, scaleRotationB.rg) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationB.gba) * fOddOffset;

            float missingW = sqrt(1.0 - scaleRotation456.x * scaleRotation456.x - scaleRotation456.y *
                                    scaleRotation456.y - scaleRotation456.z * scaleRotation456.z);
            mat3 R = quaternionToRotationMatrix(scaleRotation456.r, scaleRotation456.g, scaleRotation456.b, missingW);
            mat3 S = mat3(scaleRotation123.r, 0.0, 0.0,
                            0.0, scaleRotation123.g, 0.0,
                            0.0, 0.0, scaleRotation123.b);
            
            mat3 L = R * S;

            mat3x4 splat2World = mat3x4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

            mat4 world2ndc = transpose(projectionMatrix * transformModelViewMatrix);

            mat3x4 ndc2pix = mat3x4(vec4(viewport.x / 2.0, 0.0, 0.0, (viewport.x - 1.0) / 2.0),
                                    vec4(0.0, viewport.y / 2.0, 0.0, (viewport.y - 1.0) / 2.0),
                                    vec4(0.0, 0.0, 0.0, 1.0));

            mat3 T = transpose(splat2World) * world2ndc * ndc2pix;
            vec3 normal = vec3(viewMatrix * vec4(L[0][2], L[1][2], L[2][2], 0.0));
        `;return e+=`

                mat4 splat2World4 = mat4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(L[2], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

                mat4 Tt = transpose(transpose(splat2World4) * world2ndc);

                vec4 tempPoint1 = Tt * vec4(1.0, 0.0, 0.0, 1.0);
                tempPoint1 /= tempPoint1.w;

                vec4 tempPoint2 = Tt * vec4(0.0, 1.0, 0.0, 1.0);
                tempPoint2 /= tempPoint2.w;

                vec4 center = Tt * vec4(0.0, 0.0, 0.0, 1.0);
                center /= center.w;

                vec2 basisVector1 = tempPoint1.xy - center.xy;
                vec2 basisVector2 = tempPoint2.xy - center.xy;

                vec2 basisVector1Screen = basisVector1 * 0.5 * viewport;
                vec2 basisVector2Screen = basisVector2 * 0.5 * viewport;

                const float minPix = 1.;
                if (length(basisVector1Screen) < minPix || length(basisVector2Screen) < minPix) {
                    
            vec3 T0 = vec3(T[0][0], T[0][1], T[0][2]);
            vec3 T1 = vec3(T[1][0], T[1][1], T[1][2]);
            vec3 T3 = vec3(T[2][0], T[2][1], T[2][2]);

            vec3 tempPoint = vec3(1.0, 1.0, -1.0);
            float distance = (T3.x * T3.x * tempPoint.x) + (T3.y * T3.y * tempPoint.y) + (T3.z * T3.z * tempPoint.z);
            vec3 f = (1.0 / distance) * tempPoint;
            if (abs(distance) < 0.00001) return;

            float pointImageX = (T0.x * T3.x * f.x) + (T0.y * T3.y * f.y) + (T0.z * T3.z * f.z);
            float pointImageY = (T1.x * T3.x * f.x) + (T1.y * T3.y * f.y) + (T1.z * T3.z * f.z);
            vec2 pointImage = vec2(pointImageX, pointImageY);

            float tempX = (T0.x * T0.x * f.x) + (T0.y * T0.y * f.y) + (T0.z * T0.z * f.z);
            float tempY = (T1.x * T1.x * f.x) + (T1.y * T1.y * f.y) + (T1.z * T1.z * f.z);
            vec2 temp = vec2(tempX, tempY);

            vec2 halfExtend = pointImage * pointImage - temp;
            vec2 extent = sqrt(max(vec2(0.0001), halfExtend));
            float radius = max(extent.x, extent.y);

            vec2 ndcOffset = ((position.xy * radius * 3.0) * basisViewport * 2.0);

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            vT = T;
            vQuadCenter = pointImage;
            vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
        
                } else {
                    vec2 ndcOffset = vec2(position.x * basisVector1 + position.y * basisVector2) * 3.0 * inverseFocalAdjustment;
                    vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
                    gl_Position = quadPos;

                    vT = T;
                    vQuadCenter = center.xy;
                    vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
                }
            `,e+=Ii.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
            precision highp float;
            #include <common>

            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;

            void main () {

                const float FilterInvSquare = 2.0;
                const float near_n = 0.2;
                const float T = 1.0;

                vec2 xy = vQuadCenter;
                vec3 Tu = vT[0];
                vec3 Tv = vT[1];
                vec3 Tw = vT[2];
                vec3 k = vFragCoord.x * Tw - Tu;
                vec3 l = vFragCoord.y * Tw - Tv;
                vec3 p = cross(k, l);
                if (p.z == 0.0) discard;
                vec2 s = vec2(p.x / p.z, p.y / p.z);
                float rho3d = (s.x * s.x + s.y * s.y); 
                vec2 d = vec2(xy.x - vFragCoord.x, xy.y - vFragCoord.y);
                float rho2d = FilterInvSquare * (d.x * d.x + d.y * d.y); 

                // compute intersection and depth
                float rho = min(rho3d, rho2d);
                float depth = (rho3d <= rho2d) ? (s.x * Tw.x + s.y * Tw.y) + Tw.z : Tw.z; 
                if (depth < near_n) discard;
                //  vec4 nor_o = collected_normal_opacity[j];
                //  float normal[3] = {nor_o.x, nor_o.y, nor_o.z};
                float opa = vColor.a;

                float power = -0.5f * rho;
                if (power > 0.0f) discard;

                // Eq. (2) from 3D Gaussian splatting paper.
                // Obtain alpha by multiplying with Gaussian opacity
                // and its exponential falloff from mean.
                // Avoid numerical instabilities (see paper appendix). 
                float alpha = min(0.99f, opa * exp(power));
                if (alpha < 1.0f / 255.0f) discard;
                float test_T = T * (1.0 - alpha);
                if (test_T < 0.0001)discard;

                float w = alpha * T;
                gl_FragColor = vec4(vColor.rgb, w);
            }
        `}}class $g{static build(e){const t=new sn;t.setIndex([0,1,2,0,2,3]);const n=new Float32Array(12),i=new tn(n,3);t.setAttribute("position",i),i.setXYZ(0,-1,-1,0),i.setXYZ(1,-1,1,0),i.setXYZ(2,1,1,0),i.setXYZ(3,1,-1,0),i.needsUpdate=!0;const s=new Wm().copy(t),a=new Uint32Array(e),o=new Vm(a,1,!1);return o.setUsage(Dd),s.setAttribute("splatIndex",o),s.instanceCount=0,s}}class e0 extends xt{constructor(e,t=new I,n=new ct,i=new I(1,1,1),s=1,a=1,o=!0){super(),this.splatBuffer=e,this.position.copy(t),this.quaternion.copy(n),this.scale.copy(i),this.transform=new Ue,this.minimumAlpha=s,this.opacity=a,this.visible=o}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}}class Fo{static idGen=0;constructor(e,t,n,i){this.min=new I().copy(e),this.max=new I().copy(t),this.boundingBox=new fn(this.min,this.max),this.center=new I().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=n,this.children=[],this.data=null,this.id=i||Fo.idGen++}}class $i{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.sceneDimensions=new I,this.sceneMin=new I,this.sceneMax=new I,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){const t=new I().fromArray(e.min),n=new I().fromArray(e.max),i=new Fo(t,n,e.depth,e.id);if(e.data.indexes){i.data={indexes:[]};for(let s of e.data.indexes)i.data.indexes.push(s)}if(e.children)for(let s of e.children)i.children.push($i.convertWorkerSubTreeNode(s));return i}static convertWorkerSubTree(e,t){const n=new $i(e.maxDepth,e.maxCentersPerNode);n.sceneMin=new I().fromArray(e.sceneMin),n.sceneMax=new I().fromArray(e.sceneMax),n.splatMesh=t,n.rootNode=$i.convertWorkerSubTreeNode(e.rootNode);const i=(s,a)=>{s.children.length===0&&a(s);for(let o of s.children)i(o,a)};return n.nodesWithIndexes=[],i(n.rootNode,s=>{s.data&&s.data.indexes&&s.data.indexes.length>0&&n.nodesWithIndexes.push(s)}),n}}function t0(r){let e=0;class t{constructor(l,c){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]]}containsPoint(l){return l[0]>=this.min[0]&&l[0]<=this.max[0]&&l[1]>=this.min[1]&&l[1]<=this.max[1]&&l[2]>=this.min[2]&&l[2]<=this.max[2]}}class n{constructor(l,c){this.maxDepth=l,this.maxCentersPerNode=c,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class i{constructor(l,c,d,u){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]],this.center=[(c[0]-l[0])*.5+l[0],(c[1]-l[1])*.5+l[1],(c[2]-l[2])*.5+l[2]],this.depth=d,this.children=[],this.data=null,this.id=u||e++}}processSplatTreeNode=function(o,l,c,d){const u=l.data.indexes.length;if(u<o.maxCentersPerNode||l.depth>o.maxDepth){const S=[];for(let x=0;x<l.data.indexes.length;x++)o.addedIndexes[l.data.indexes[x]]||(S.push(l.data.indexes[x]),o.addedIndexes[l.data.indexes[x]]=!0);l.data.indexes=S,l.data.indexes.sort((x,v)=>x>v?1:-1),o.nodesWithIndexes.push(l);return}const h=[l.max[0]-l.min[0],l.max[1]-l.min[1],l.max[2]-l.min[2]],f=[h[0]*.5,h[1]*.5,h[2]*.5],A=[l.min[0]+f[0],l.min[1]+f[1],l.min[2]+f[2]],g=[new t([A[0]-f[0],A[1],A[2]-f[2]],[A[0],A[1]+f[1],A[2]]),new t([A[0],A[1],A[2]-f[2]],[A[0]+f[0],A[1]+f[1],A[2]]),new t([A[0],A[1],A[2]],[A[0]+f[0],A[1]+f[1],A[2]+f[2]]),new t([A[0]-f[0],A[1],A[2]],[A[0],A[1]+f[1],A[2]+f[2]]),new t([A[0]-f[0],A[1]-f[1],A[2]-f[2]],[A[0],A[1],A[2]]),new t([A[0],A[1]-f[1],A[2]-f[2]],[A[0]+f[0],A[1],A[2]]),new t([A[0],A[1]-f[1],A[2]],[A[0]+f[0],A[1],A[2]+f[2]]),new t([A[0]-f[0],A[1]-f[1],A[2]],[A[0],A[1],A[2]+f[2]])],m=[];for(let S=0;S<g.length;S++)m[S]=[];const p=[0,0,0];for(let S=0;S<u;S++){const x=l.data.indexes[S],v=c[x];p[0]=d[v],p[1]=d[v+1],p[2]=d[v+2];for(let E=0;E<g.length;E++)g[E].containsPoint(p)&&m[E].push(x)}for(let S=0;S<g.length;S++){const x=new i(g[S].min,g[S].max,l.depth+1);x.data={indexes:m[S]},l.children.push(x)}l.data={};for(let S of l.children)processSplatTreeNode(o,S,c,d)};const s=(o,l,c)=>{const d=[0,0,0],u=[0,0,0],h=[],f=Math.floor(o.length/4);for(let g=0;g<f;g++){const m=g*4,p=o[m],S=o[m+1],x=o[m+2],v=Math.round(o[m+3]);(g===0||p<d[0])&&(d[0]=p),(g===0||p>u[0])&&(u[0]=p),(g===0||S<d[1])&&(d[1]=S),(g===0||S>u[1])&&(u[1]=S),(g===0||x<d[2])&&(d[2]=x),(g===0||x>u[2])&&(u[2]=x),h.push(v)}const A=new n(l,c);return A.sceneMin=d,A.sceneMax=u,A.rootNode=new i(A.sceneMin,A.sceneMax,0),A.rootNode.data={indexes:h},A};function a(o,l,c){const d=[];for(let h of o){const f=Math.floor(h.length/4);for(let A=0;A<f;A++){const g=A*4,m=Math.round(h[g+3]);d[m]=g}}const u=[];for(let h of o){const f=s(h,l,c);u.push(f),processSplatTreeNode(f,f.rootNode,d,h)}r.postMessage({subTrees:u})}r.onmessage=o=>{o.data.process&&a(o.data.process.centers,o.data.process.maxDepth,o.data.process.maxCentersPerNode)}}function n0(r,e,t,n,i){r.postMessage({process:{centers:e,maxDepth:n,maxCentersPerNode:i}},t)}function i0(){return new Worker(URL.createObjectURL(new Blob(["(",t0.toString(),")(self)"],{type:"application/javascript"})))}class s0{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}processSplatMesh=function(e,t=()=>!0,n,i){this.splatTreeWorker||(this.splatTreeWorker=i0()),this.splatMesh=e,this.subTrees=[];const s=new I,a=(o,l)=>{const c=new Float32Array(l*4);let d=0;for(let u=0;u<l;u++){const h=u+o;if(t(h)){e.getSplatCenter(h,s);const f=d*4;c[f]=s.x,c[f+1]=s.y,c[f+2]=s.z,c[f+3]=h,d++}}return c};return new Promise(o=>{const l=()=>this.disposed?(this.diposeSplatTreeWorker(),o(),!0):!1;n&&n(!1),Qt(()=>{if(l())return;const c=[];if(e.dynamicMode){let d=0;for(let u=0;u<e.scenes.length;u++){const f=e.getScene(u).splatBuffer.getSplatCount(),A=a(d,f);c.push(A),d+=f}}else{const d=a(0,e.getSplatCount());c.push(d)}this.splatTreeWorker.onmessage=d=>{l()||d.data.subTrees&&(i&&i(!1),Qt(()=>{if(!l()){for(let u of d.data.subTrees){const h=$i.convertWorkerSubTree(u,e);this.subTrees.push(h)}this.diposeSplatTreeWorker(),i&&i(!0),Qt(()=>{o()})}}))},Qt(()=>{if(l())return;n&&n(!0);const d=c.map(u=>u.buffer);n0(this.splatTreeWorker,c,d,this.maxDepth,this.maxCentersPerNode)})})})};countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){const t=(n,i)=>{n.children.length===0&&i(n);for(let s of n.children)t(s,i)};for(let n of this.subTrees)t(n.rootNode,e)}}function r0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function o0(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),A=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,v=a||e.has("OES_texture_float"),E=x&&v,M=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:A,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:M}}const Di={Default:0,Instant:2},Pi={None:0,Info:3},Dl=new sn,a0=new ti,Hs=6,l0=4,c0=4,d0=4,u0=6,h0=8,jr=4,Zr=4,Pl=1,f0=.012,p0=.003,Ll=1,Fl=16777216;class Ct extends gt{constructor(e=Mn.ThreeD,t=!1,n=!1,i=!1,s=1,a=!0,o=!1,l=!1,c=1024,d=Pi.None,u=0,h=1,f=.3){super(Dl,a0),this.renderer=void 0,this.splatRenderMode=e,this.dynamicMode=t,this.enableOptionalEffects=n,this.halfPrecisionCovariancesOnGPU=i,this.devicePixelRatio=s,this.enableDistancesComputationOnGPU=a,this.integerBasedDistancesComputation=o,this.antialiased=l,this.kernel2DSize=f,this.maxScreenSpaceSplatSize=c,this.logLevel=d,this.sphericalHarmonicsDegree=u,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=h,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new fn,this.calculatedSceneCenter=new I,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(e,t,n){const i=[];i.length=t.length;for(let s=0;s<t.length;s++){const a=t[s],o=n[s]||{};let l=o.position||[0,0,0],c=o.rotation||[0,0,0,1],d=o.scale||[1,1,1];const u=new I().fromArray(l),h=new ct().fromArray(c),f=new I().fromArray(d),A=Ct.createScene(a,u,h,f,o.splatAlphaRemovalThreshold||1,o.opacity,o.visible);e.add(A),i[s]=A}return i}static createScene(e,t,n,i,s,a=1,o=!0){return new e0(e,t,n,i,s,a,o)}static buildSplatIndexMaps(e){const t=[],n=[];let i=0;for(let s=0;s<e.length;s++){const o=e[s].getMaxSplatCount();for(let l=0;l<o;l++)t[i]=l,n[i]=s,i++}return{localSplatIndexMap:t,sceneIndexMap:n}}buildSplatTree=function(e=[],t,n){return new Promise(i=>{this.disposeSplatTree(),this.baseSplatTree=new s0(8,1e3);const s=performance.now(),a=new At;this.baseSplatTree.processSplatMesh(this,o=>{this.getSplatColor(o,a);const l=this.getSceneIndexForSplat(o),c=e[l]||1;return a.w>=c},t,n).then(()=>{const o=performance.now()-s;if(this.logLevel>=Pi.Info&&console.log("SplatTree build: "+o+" ms"),this.disposed)i();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let l=0,c=0,d=0;this.splatTree.visitLeaves(u=>{const h=u.data.indexes.length;h>0&&(c+=h,d++,l++)}),this.logLevel>=Pi.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${l}`),c=c/d,console.log(`Avg splat count per node: ${c}`),console.log(`Total splat count: ${this.getSplatCount()}`)),i()}})})};build(e,t,n=!0,i=!1,s,a,o=!0){this.sceneOptions=t,this.finalBuild=i;const l=Ct.getTotalMaxSplatCountForSplatBuffers(e),c=Ct.buildScenes(this,e,t);if(n)for(let g=0;g<this.scenes.length&&g<c.length;g++){const m=c[g],p=this.getScene(g);m.copyTransformData(p)}this.scenes=c;let d=3;for(let g of e){const m=g.getMinSphericalHarmonicsDegree();m<d&&(d=m)}this.minSphericalHarmonicsDegree=Math.min(d,this.sphericalHarmonicsDegree);let u=!1;if(e.length!==this.lastBuildScenes.length)u=!0;else for(let g=0;g<e.length;g++)if(e[g]!==this.lastBuildScenes[g].splatBuffer){u=!0;break}let h=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==l||u)&&(h=!1),!h){this.boundingBox=new fn,o||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=$g.build(l),this.splatRenderMode===Mn.ThreeD?this.material=er.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree,this.kernel2DSize):this.material=tr.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);const g=Ct.buildSplatIndexMaps(e);this.globalSplatIndexToLocalSplatIndexMap=g.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=g.sceneIndexMap}const f=this.getSplatCount(!0);this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();const A=this.refreshGPUDataFromSplatBuffers(h);for(let g=0;g<this.scenes.length;g++)this.lastBuildScenes[g]=this.scenes[g];return this.lastBuildSplatCount=f,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,i&&this.scenes.length>0&&this.buildSplatTree(t.map(g=>g.splatAlphaRemovalThreshold||1),s,a).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,A}freeIntermediateSplatData(){const e=t=>{delete t.source.data,delete t.image,t.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{e(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{e(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{e(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(t=>{t.needsUpdate=!0,t.onUpdate=()=>{e(t)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{e(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new fn,this.calculatedSceneCenter=new I,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==Dl&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let e in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(e)){const t=this.splatDataTextures[e];t.texture&&(t.texture.dispose(),t.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(e){this.onSplatTreeReadyCallback=e}getDataForDistancesComputation(e,t){const n=this.integerBasedDistancesComputation?this.getIntegerCenters(e,t,!0):this.getFloatCenters(e,t,!0),i=this.getSceneIndexes(e,t);return{centers:n,sceneIndexes:i}}refreshGPUDataFromSplatBuffers(e){const t=this.getSplatCount(!0);this.refreshDataTexturesFromSplatBuffers(e);const n=e?this.lastBuildSplatCount:0,{centers:i,sceneIndexes:s}=this.getDataForDistancesComputation(n,t-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(i,s,e),{from:n,to:t-1,count:t-n,centers:i,sceneIndexes:s}}refreshGPUBuffersForDistancesComputation(e,t,n=!1){const i=n?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(n,e,i),this.updateGPUTransformIndexesBufferForDistancesComputation(n,t,i)}refreshDataTexturesFromSplatBuffers(e){const t=this.getSplatCount(!0),n=this.lastBuildSplatCount,i=t-1;e?this.updateBaseDataFromSplatBuffers(n,i):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(n,i),this.updateVisibleRegion(e)}setupDataTextures(){const e=this.getMaxSplatCount(),t=this.getSplatCount(!0);this.disposeTextures();const n=(_,D)=>{const y=new ye(4096,1024);for(;y.x*y.y*_<e*D;)y.y*=2;return y},i=_=>_>=1?u0:c0,s=_=>{const D=i(_),y=n(D,6);return{elementsPerTexelStored:D,texSize:y}};let a=this.getTargetCovarianceCompressionLevel();const o=0,l=this.getTargetSphericalHarmonicsCompressionLevel();let c,d,u;if(this.splatRenderMode===Mn.ThreeD){const _=s(a);_.texSize.x*_.texSize.y>Fl&&a===0&&(a=1),c=new Float32Array(e*Hs)}else d=new Float32Array(e*3),u=new Float32Array(e*4);const h=new Float32Array(e*3),f=new Uint8Array(e*4);let A=Float32Array;l===1?A=Uint16Array:l===2&&(A=Uint8Array);const g=Ri(this.minSphericalHarmonicsDegree),m=this.minSphericalHarmonicsDegree?new A(e*g):void 0,p=n(Zr,4),S=new Uint32Array(p.x*p.y*Zr);Ct.updateCenterColorsPaddedData(0,t-1,h,f,S);const x=new Fn(S,p.x,p.y,Yi,qt);if(x.internalFormat="RGBA32UI",x.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=x,this.material.uniforms.centersColorsTextureSize.value.copy(p),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:c,scales:d,rotations:u,centers:h,colors:f,sphericalHarmonics:m},centerColors:{data:S,texture:x,size:p}},this.splatRenderMode===Mn.ThreeD){const _=s(a),D=_.elementsPerTexelStored,y=_.texSize;let C=a>=1?Uint32Array:Float32Array;const P=a>=1?h0:d0,F=new C(y.x*y.y*P);a===0?F.set(c):Ct.updatePaddedCompressedCovariancesTextureData(c,F,0,0,c.length);let N;if(a>=1)N=new Fn(F,y.x,y.y,Yi,qt),N.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=N;else{N=new Fn(F,y.x,y.y,Nt,hn),this.material.uniforms.covariancesTexture.value=N;const R=new Fn(new Uint32Array(32),2,2,Yi,qt);R.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=R,R.needsUpdate=!0}N.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=a>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(y),this.splatDataTextures.covariances={data:F,texture:N,size:y,compressionLevel:a,elementsPerTexelStored:D,elementsPerTexelAllocated:P}}else{const D=n(jr,6);let y=Float32Array,C=hn;const P=new y(D.x*D.y*jr);Ct.updateScaleRotationsPaddedData(0,t-1,d,u,P);const F=new Fn(P,D.x,D.y,Nt,C);F.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=F,this.material.uniforms.scaleRotationsTextureSize.value.copy(D),this.splatDataTextures.scaleRotations={data:P,texture:F,size:D,compressionLevel:o}}if(m){const _=l===2?bn:Bi;let D=g;D%2!==0&&D++;const y=4,C=Nt;let P=n(y,D);if(P.x*P.y<=Fl){const F=P.x*P.y*y,N=new A(F);for(let L=0;L<t;L++){const O=g*L,V=D*L;for(let X=0;X<g;X++)N[V+X]=m[O+X]}const R=new Fn(N,P.x,P.y,C,_);R.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=R,this.splatDataTextures.sphericalHarmonics={componentCount:g,paddedComponentCount:D,data:N,textureCount:1,texture:R,size:P,compressionLevel:l,elementsPerTexel:y}}else{const F=g/3;D=F,D%2!==0&&D++,P=n(y,D);const N=P.x*P.y*y,R=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],L=[],O=[];for(let V=0;V<3;V++){const X=new A(N);L.push(X);for(let q=0;q<t;q++){const J=g*q,$=D*q;if(F>=3){for(let W=0;W<3;W++)X[$+W]=m[J+V*3+W];if(F>=8)for(let W=0;W<5;W++)X[$+3+W]=m[J+9+V*5+W]}}const H=new Fn(X,P.x,P.y,C,_);O.push(H),H.needsUpdate=!0,R[V].value=H}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:g,componentCountPerChannel:F,paddedComponentCount:D,data:L,textureCount:3,textures:O,size:P,compressionLevel:l,elementsPerTexel:y}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(P),this.material.uniforms.sphericalHarmonics8BitMode.value=l===2?1:0;for(let F=0;F<this.scenes.length;F++){const N=this.scenes[F].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[F]=N.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[F]=N.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}const v=n(Pl,4),E=new Uint32Array(v.x*v.y*Pl);for(let _=0;_<t;_++)E[_]=this.globalSplatIndexToSceneIndexMap[_];const M=new Fn(E,v.x,v.y,uo,qt);M.internalFormat="R32UI",M.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=M,this.material.uniforms.sceneIndexesTextureSize.value.copy(v),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:E,texture:M,size:v},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(e,t){const n=this.splatDataTextures.covariances,i=n?n.compressionLevel:void 0,s=this.splatDataTextures.scaleRotations,a=s?s.compressionLevel:void 0,o=this.splatDataTextures.sphericalHarmonics,l=o?o.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,i,a,l,e,t,e)}updateDataTexturesFromBaseData(e,t){const n=this.splatDataTextures.covariances,i=n?n.compressionLevel:void 0,s=this.splatDataTextures.scaleRotations,a=s?s.compressionLevel:void 0,o=this.splatDataTextures.sphericalHarmonics,l=o?o.compressionLevel:0,c=this.splatDataTextures.centerColors,d=c.data,u=c.texture;Ct.updateCenterColorsPaddedData(e,t,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,d);const h=this.renderer?this.renderer.properties.get(u):null;if(!h||!h.__webglTexture?u.needsUpdate=!0:this.updateDataTexture(d,c.texture,c.size,h,Zr,l0,4,e,t),n){const S=n.texture,x=e*Hs,v=t*Hs;if(i===0)for(let M=x;M<=v;M++){const _=this.splatDataTextures.baseData.covariances[M];n.data[M]=_}else Ct.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,n.data,e*n.elementsPerTexelAllocated,x,v);const E=this.renderer?this.renderer.properties.get(S):null;!E||!E.__webglTexture?S.needsUpdate=!0:i===0?this.updateDataTexture(n.data,n.texture,n.size,E,n.elementsPerTexelStored,Hs,4,e,t):this.updateDataTexture(n.data,n.texture,n.size,E,n.elementsPerTexelAllocated,n.elementsPerTexelAllocated,2,e,t)}if(s){const S=s.data,x=s.texture,v=6,E=a===0?4:2;Ct.updateScaleRotationsPaddedData(e,t,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,S);const M=this.renderer?this.renderer.properties.get(x):null;!M||!M.__webglTexture?x.needsUpdate=!0:this.updateDataTexture(S,s.texture,s.size,M,jr,v,E,e,t)}const f=this.splatDataTextures.baseData.sphericalHarmonics;if(f){let S=4;l===1?S=2:l===2&&(S=1);const x=(M,_,D,y,C)=>{const P=this.renderer?this.renderer.properties.get(M):null;!P||!P.__webglTexture?M.needsUpdate=!0:this.updateDataTexture(y,M,_,P,D,C,S,e,t)},v=o.componentCount,E=o.paddedComponentCount;if(o.textureCount===1){const M=o.data;for(let _=e;_<=t;_++){const D=v*_,y=E*_;for(let C=0;C<v;C++)M[y+C]=f[D+C]}x(o.texture,o.size,o.elementsPerTexel,M,E)}else{const M=o.componentCountPerChannel;for(let _=0;_<3;_++){const D=o.data[_];for(let y=e;y<=t;y++){const C=v*y,P=E*y;if(M>=3){for(let F=0;F<3;F++)D[P+F]=f[C+_*3+F];if(M>=8)for(let F=0;F<5;F++)D[P+3+F]=f[C+9+_*5+F]}}x(o.textures[_],o.size,o.elementsPerTexel,D,E)}}}const A=this.splatDataTextures.sceneIndexes,g=A.data;for(let S=this.lastBuildSplatCount;S<=t;S++)g[S]=this.globalSplatIndexToSceneIndexMap[S];const m=A.texture,p=this.renderer?this.renderer.properties.get(m):null;!p||!p.__webglTexture?m.needsUpdate=!0:this.updateDataTexture(g,A.texture,A.size,p,1,1,1,this.lastBuildSplatCount,t)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let e;for(let t=0;t<this.scenes.length;t++){const i=this.getScene(t).splatBuffer;(t===0||i.compressionLevel>e)&&(e=i.compressionLevel)}return e}getMinimumSplatBufferCompressionLevel(){let e;for(let t=0;t<this.scenes.length;t++){const i=this.getScene(t).splatBuffer;(t===0||i.compressionLevel<e)&&(e=i.compressionLevel)}return e}static computeTextureUpdateRegion(e,t,n,i,s){const a=s/i,o=e*a,l=Math.floor(o/n),c=l*n*i,d=t*a,u=Math.floor(d/n),h=u*n*i+n*i;return{dataStart:c,dataEnd:h,startRow:l,endRow:u}}updateDataTexture(e,t,n,i,s,a,o,l,c){const d=this.renderer.getContext(),u=Ct.computeTextureUpdateRegion(l,c,n.x,s,a),h=u.dataEnd-u.dataStart,f=new e.constructor(e.buffer,u.dataStart*o,h),A=u.endRow-u.startRow+1,g=this.webGLUtils.convert(t.type),m=this.webGLUtils.convert(t.format,t.colorSpace),p=d.getParameter(d.TEXTURE_BINDING_2D);d.bindTexture(d.TEXTURE_2D,i.__webglTexture),d.texSubImage2D(d.TEXTURE_2D,0,0,u.startRow,n.x,A,m,g,f),d.bindTexture(d.TEXTURE_2D,p)}static updatePaddedCompressedCovariancesTextureData(e,t,n,i,s){let a=new DataView(t.buffer),o=n,l=0;for(let c=i;c<=s;c+=2)a.setUint16(o*2,e[c],!0),a.setUint16(o*2+2,e[c+1],!0),o+=2,l++,l>=3&&(o+=2,l=0)}static updateCenterColorsPaddedData(e,t,n,i,s){for(let a=e;a<=t;a++){const o=a*4,l=a*3,c=a*4;s[c]=Xm(i,o),s[c+1]=Vr(n[l]),s[c+2]=Vr(n[l+1]),s[c+3]=Vr(n[l+2])}}static updateScaleRotationsPaddedData(e,t,n,i,s){for(let o=e;o<=t;o++){const l=o*3,c=o*4,d=o*6;s[d]=n[l],s[d+1]=n[l+1],s[d+2]=n[l+2],s[d+3]=i[c],s[d+4]=i[c+1],s[d+5]=i[c+2]}}updateVisibleRegion(e){const t=this.getSplatCount(!0),n=new I;if(!e){const s=new I;this.scenes.forEach(a=>{s.add(a.splatBuffer.sceneCenter)}),s.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(s),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}const i=e?this.lastBuildSplatCount:0;for(let s=i;s<t;s++){this.getSplatCenter(s,n,!0);const a=n.sub(this.calculatedSceneCenter).length();a>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=a)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>Ll&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-Ll,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(e=Di.Default){const t=f0*this.sceneFadeInRateMultiplier,n=p0*this.sceneFadeInRateMultiplier,i=this.finalBuild?t:n,s=e===Di.Default?i:n;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*s+this.visibleRegionFadeStartRadius;const o=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,l=o||e===Di.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=l,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!o}updateRenderIndexes(e,t){const n=this.geometry;n.attributes.splatIndex.set(e),n.attributes.splatIndex.needsUpdate=!0,t>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),n.instanceCount=t,n.setDrawRange(0,t)}updateTransforms(){for(let e=0;e<this.scenes.length;e++)this.getScene(e).updateTransform(this.dynamicMode)}updateUniforms=(function(){const e=new ye;return function(t,n,i,s,a,o){if(this.getSplatCount()>0){if(e.set(t.x*this.devicePixelRatio,t.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(e),this.material.uniforms.basisViewport.value.set(1/e.x,1/e.y),this.material.uniforms.focal.value.set(n,i),this.material.uniforms.orthographicMode.value=s?1:0,this.material.uniforms.orthoZoom.value=a,this.material.uniforms.inverseFocalAdjustment.value=o,this.dynamicMode)for(let c=0;c<this.scenes.length;c++)this.material.uniforms.transforms.value[c].copy(this.getScene(c).transform);if(this.enableOptionalEffects)for(let c=0;c<this.scenes.length;c++)this.material.uniforms.sceneOpacity.value[c]=lt(this.getScene(c).opacity,0,1),this.material.uniforms.sceneVisibility.value[c]=this.getScene(c).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}})();setSplatScale(e=1){this.splatScale=e,this.material.uniforms.splatScale.value=e,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(e){this.pointCloudModeEnabled=e,this.material.uniforms.pointCloudModeEnabled.value=e?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(e=!1){return e?Ct.getTotalSplatCountForScenes(this.scenes):this.lastBuildSplatCount}static getTotalSplatCountForScenes(e){let t=0;for(let n of e)n&&n.splatBuffer&&(t+=n.splatBuffer.getSplatCount());return t}static getTotalSplatCountForSplatBuffers(e){let t=0;for(let n of e)t+=n.getSplatCount();return t}getMaxSplatCount(){return Ct.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(e){let t=0;for(let n of e)n&&n.splatBuffer&&(t+=n.splatBuffer.getMaxSplatCount());return t}static getTotalMaxSplatCountForSplatBuffers(e){let t=0;for(let n of e)t+=n.getMaxSplatCount();return t}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const e=this.renderer.getContext();this.distancesTransformFeedback.vao&&(e.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(e.deleteProgram(this.distancesTransformFeedback.program),e.deleteShader(this.distancesTransformFeedback.vertexShader),e.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(e.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const e=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,e.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(e.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(e){if(e!==this.renderer){this.renderer=e;const t=this.renderer.getContext(),n=new r0(t),i=new o0(t,n,{});if(n.init(i),this.webGLUtils=new pc(t,n,i),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:s,sceneIndexes:a}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(s,a)}}}setupDistancesComputationTransformFeedback=(function(){let e;return function(){const t=this.getMaxSplatCount();if(!this.renderer)return;const n=this.lastRenderer!==this.renderer,i=e!==t;if(!n&&!i)return;n?this.disposeDistancesComputationGPUResources():i&&this.disposeDistancesComputationGPUBufferResources();const s=this.renderer.getContext(),a=(h,f,A)=>{const g=h.createShader(f);if(!g)return console.error("Fatal error: gl could not create a shader object."),null;if(h.shaderSource(g,A),h.compileShader(g),!h.getShaderParameter(g,h.COMPILE_STATUS)){let p="unknown";f===h.VERTEX_SHADER?p="vertex shader":f===h.FRAGMENT_SHADER&&(p="fragement shader");const S=h.getShaderInfoLog(g);return console.error("Failed to compile "+p+" with these errors:"+S),h.deleteShader(g),null}return g};let o;this.integerBasedDistancesComputation?(o=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?o+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${nt.MaxScenes}];
                        void main(void) {
                            ivec4 transform = transforms[sceneIndex];
                            distance = center.x * transform.x + center.y * transform.y + center.z * transform.z + transform.w * center.w;
                        }
                    `:o+=`
                        uniform ivec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `):(o=`#version 300 es
                in vec4 center;
                flat out float distance;`,this.dynamicMode?o+=`
                        in uint sceneIndex;
                        uniform mat4 transforms[${nt.MaxScenes}];
                        void main(void) {
                            vec4 transformedCenter = transforms[sceneIndex] * vec4(center.xyz, 1.0);
                            distance = transformedCenter.z;
                        }
                    `:o+=`
                        uniform vec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `);const l=`#version 300 es
                precision lowp float;
                out vec4 fragColor;
                void main(){}
            `,c=s.getParameter(s.VERTEX_ARRAY_BINDING),d=s.getParameter(s.CURRENT_PROGRAM),u=d?s.getProgramParameter(d,s.DELETE_STATUS):!1;if(n&&(this.distancesTransformFeedback.vao=s.createVertexArray()),s.bindVertexArray(this.distancesTransformFeedback.vao),n){const h=s.createProgram(),f=a(s,s.VERTEX_SHADER,o),A=a(s,s.FRAGMENT_SHADER,l);if(!f||!A)throw new Error("Could not compile shaders for distances computation on GPU.");if(s.attachShader(h,f),s.attachShader(h,A),s.transformFeedbackVaryings(h,["distance"],s.SEPARATE_ATTRIBS),s.linkProgram(h),!s.getProgramParameter(h,s.LINK_STATUS)){const m=s.getProgramInfoLog(h);throw console.error("Fatal error: Failed to link program: "+m),s.deleteProgram(h),s.deleteShader(A),s.deleteShader(f),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=h,this.distancesTransformFeedback.vertexShader=f,this.distancesTransformFeedback.vertexShader=A}if(s.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=s.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=s.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let h=0;h<this.scenes.length;h++)this.distancesTransformFeedback.transformsLocs[h]=s.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${h}]`)}else this.distancesTransformFeedback.modelViewProjLoc=s.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(n||i)&&(this.distancesTransformFeedback.centersBuffer=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),s.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?s.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,s.INT,0,0):s.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,s.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),s.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),s.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,s.UNSIGNED_INT,0,0))),(n||i)&&(this.distancesTransformFeedback.outDistancesBuffer=s.createBuffer()),s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),s.bufferData(s.ARRAY_BUFFER,t*4,s.STATIC_READ),n&&(this.distancesTransformFeedback.id=s.createTransformFeedback()),s.bindTransformFeedback(s.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),s.bindBufferBase(s.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),d&&u!==!0&&s.useProgram(d),c&&s.bindVertexArray(c),this.lastRenderer=this.renderer,e=t}})();updateGPUCentersBufferForDistancesComputation(e,t,n){if(!this.renderer)return;const i=this.renderer.getContext(),s=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao);const a=this.integerBasedDistancesComputation?Uint32Array:Float32Array,o=16,l=n*o;if(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),e)i.bufferSubData(i.ARRAY_BUFFER,l,t);else{const c=new a(this.getMaxSplatCount()*o);c.set(t),i.bufferData(i.ARRAY_BUFFER,c,i.STATIC_DRAW)}i.bindBuffer(i.ARRAY_BUFFER,null),s&&i.bindVertexArray(s)}updateGPUTransformIndexesBufferForDistancesComputation(e,t,n){if(!this.renderer||!this.dynamicMode)return;const i=this.renderer.getContext(),s=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao);const a=n*4;if(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),e)i.bufferSubData(i.ARRAY_BUFFER,a,t);else{const o=new Uint32Array(this.getMaxSplatCount()*4);o.set(t),i.bufferData(i.ARRAY_BUFFER,o,i.STATIC_DRAW)}i.bindBuffer(i.ARRAY_BUFFER,null),s&&i.bindVertexArray(s)}getSceneIndexes(e,t){let n;const i=t-e+1;n=new Uint32Array(i);for(let s=e;s<=t;s++)n[s]=this.globalSplatIndexToSceneIndexMap[s];return n}fillTransformsArray=(function(){const e=[];return function(t){e.length!==t.length&&(e.length=t.length);for(let n=0;n<this.scenes.length;n++){const s=this.getScene(n).transform.elements;for(let a=0;a<16;a++)e[n*16+a]=s[a]}t.set(e)}})();computeDistancesOnGPU=(function(){const e=new Ue;return function(t,n){if(!this.renderer)return;const i=this.renderer.getContext(),s=i.getParameter(i.VERTEX_ARRAY_BINDING),a=i.getParameter(i.CURRENT_PROGRAM),o=a?i.getProgramParameter(a,i.DELETE_STATUS):!1;if(i.bindVertexArray(this.distancesTransformFeedback.vao),i.useProgram(this.distancesTransformFeedback.program),i.enable(i.RASTERIZER_DISCARD),this.dynamicMode)for(let d=0;d<this.scenes.length;d++)if(e.copy(this.getScene(d).transform),e.premultiply(t),this.integerBasedDistancesComputation){const u=Ct.getIntegerMatrixArray(e),h=[u[2],u[6],u[10],u[14]];i.uniform4i(this.distancesTransformFeedback.transformsLocs[d],h[0],h[1],h[2],h[3])}else i.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[d],!1,e.elements);else if(this.integerBasedDistancesComputation){const d=Ct.getIntegerMatrixArray(t),u=[d[2],d[6],d[10]];i.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,u[0],u[1],u[2])}else{const d=[t.elements[2],t.elements[6],t.elements[10]];i.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,d[0],d[1],d[2])}i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),i.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?i.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,i.INT,0,0):i.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,i.FLOAT,!1,0,0),this.dynamicMode&&(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),i.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),i.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,i.UNSIGNED_INT,0,0)),i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),i.beginTransformFeedback(i.POINTS),i.drawArrays(i.POINTS,0,this.getSplatCount()),i.endTransformFeedback(),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,null),i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,null),i.disable(i.RASTERIZER_DISCARD);const l=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);i.flush();const c=new Promise(d=>{const u=()=>{if(this.disposed)d();else switch(i.clientWaitSync(l,0,0)){case i.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(u),this.computeDistancesOnGPUSyncTimeout;case i.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,i.deleteSync(l);const g=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao),i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),i.getBufferSubData(i.ARRAY_BUFFER,0,n),i.bindBuffer(i.ARRAY_BUFFER,null),g&&i.bindVertexArray(g),d()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(u)});return a&&o!==!0&&i.useProgram(a),s&&i.bindVertexArray(s),c}})();getLocalSplatParameters(e,t,n){n==null&&(n=!this.dynamicMode),t.splatBuffer=this.getSplatBufferForSplat(e),t.localIndex=this.getSplatLocalIndex(e),t.sceneTransform=n?this.getSceneTransformForSplat(e):null}fillSplatDataArrays(e,t,n,i,s,a,o,l=0,c=0,d=1,u,h,f=0,A){const g=new I;g.x=void 0,g.y=void 0,this.splatRenderMode===Mn.ThreeD?g.z=void 0:g.z=1;const m=new Ue;let p=0,S=this.scenes.length-1;A!=null&&A>=0&&A<=this.scenes.length&&(p=A,S=A);for(let x=p;x<=S;x++){o==null&&(o=!this.dynamicMode);const v=this.getScene(x),E=v.splatBuffer;let M;if(o&&(this.getSceneTransform(x,m),M=m),e&&E.fillSplatCovarianceArray(e,M,u,h,f,l),t||n){if(!t||!n)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');E.fillSplatScaleRotationArray(t,n,M,u,h,f,c,g)}i&&E.fillSplatCenterArray(i,M,u,h,f),s&&E.fillSplatColorArray(s,v.minimumAlpha,u,h,f),a&&E.fillSphericalHarmonicsArray(a,this.minSphericalHarmonicsDegree,M,u,h,f,d),f+=E.getSplatCount()}}getIntegerCenters(e,t,n=!1){const i=t-e+1,s=new Float32Array(i*3);this.fillSplatDataArrays(null,null,null,s,null,null,void 0,void 0,void 0,void 0,e);let a,o=n?4:3;a=new Int32Array(i*o);for(let l=0;l<i;l++){for(let c=0;c<3;c++)a[l*o+c]=Math.round(s[l*3+c]*1e3);n&&(a[l*o+3]=1e3)}return a}getFloatCenters(e,t,n=!1){const i=t-e+1,s=new Float32Array(i*3);if(this.fillSplatDataArrays(null,null,null,s,null,null,void 0,void 0,void 0,void 0,e),!n)return s;let a=new Float32Array(i*4);for(let o=0;o<i;o++){for(let l=0;l<3;l++)a[o*4+l]=s[o*3+l];a[o*4+3]=1}return a}getSplatCenter=(function(){const e={};return function(t,n,i){this.getLocalSplatParameters(t,e,i),e.splatBuffer.getSplatCenter(e.localIndex,n,e.sceneTransform)}})();getSplatScaleAndRotation=(function(){const e={},t=new I;return function(n,i,s,a){this.getLocalSplatParameters(n,e,a),t.x=void 0,t.y=void 0,t.z=void 0,this.splatRenderMode===Mn.TwoD&&(t.z=0),e.splatBuffer.getSplatScaleAndRotation(e.localIndex,i,s,e.sceneTransform,t)}})();getSplatColor=(function(){const e={};return function(t,n){this.getLocalSplatParameters(t,e),e.splatBuffer.getSplatColor(e.localIndex,n)}})();getSceneTransform(e,t){const n=this.getScene(e);n.updateTransform(this.dynamicMode),t.copy(n.transform)}getScene(e){if(e<0||e>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[e]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(e){return this.getScene(this.globalSplatIndexToSceneIndexMap[e]).splatBuffer}getSceneIndexForSplat(e){return this.globalSplatIndexToSceneIndexMap[e]}getSceneTransformForSplat(e){return this.getScene(this.globalSplatIndexToSceneIndexMap[e]).transform}getSplatLocalIndex(e){return this.globalSplatIndexToLocalSplatIndexMap[e]}static getIntegerMatrixArray(e){const t=e.elements,n=[];for(let i=0;i<16;i++)n[i]=Math.round(t[i]*1e3);return n}computeBoundingBox(e=!1,t){let n=this.getSplatCount();if(t!=null){if(t<0||t>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");n=this.scenes[t].splatBuffer.getSplatCount()}const i=new Float32Array(n*3);this.fillSplatDataArrays(null,null,null,i,null,null,e,void 0,void 0,void 0,void 0,t);const s=new I,a=new I;for(let o=0;o<n;o++){const l=o*3,c=i[l],d=i[l+1],u=i[l+2];(o===0||c<s.x)&&(s.x=c),(o===0||d<s.y)&&(s.y=d),(o===0||u<s.z)&&(s.z=u),(o===0||c>a.x)&&(a.x=c),(o===0||d>a.y)&&(a.y=d),(o===0||u>a.z)&&(a.z=u)}return new fn(s,a)}}var m0="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",Bl="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",g0="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",A0="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function S0(r){let e,t,n,i,s,a,o,l,c,d,u,h,f,A,g,m,p,S,x,v;function E(M,_,D,y,C,P,F){const N=performance.now();if(!n&&(new Uint32Array(t,o,C.byteLength/v.BytesPerInt).set(C),new Float32Array(t,d,F.byteLength/v.BytesPerFloat).set(F),y)){let X;i?X=new Int32Array(t,u,P.byteLength/v.BytesPerInt):X=new Float32Array(t,u,P.byteLength/v.BytesPerFloat),X.set(P)}m||(m=new Uint32Array(S)),new Float32Array(t,g,16).set(D),new Uint32Array(t,f,S).set(m),e.exports.sortIndexes(o,A,u,h,f,g,l,c,d,S,M,_,a,y,i,s);const R={sortDone:!0,splatSortCount:M,splatRenderCount:_,sortTime:0};if(!n){const O=new Uint32Array(t,l,_);(!p||p.length<_)&&(p=new Uint32Array(_)),p.set(O),R.sortedIndexes=p}const L=performance.now();R.sortTime=L-N,r.postMessage(R)}r.onmessage=M=>{if(M.data.centers)centers=M.data.centers,sceneIndexes=M.data.sceneIndexes,i?new Int32Array(t,A+M.data.range.from*v.BytesPerInt*4,M.data.range.count*4).set(new Int32Array(centers)):new Float32Array(t,A+M.data.range.from*v.BytesPerFloat*4,M.data.range.count*4).set(new Float32Array(centers)),s&&new Uint32Array(t,c+M.data.range.from*4,M.data.range.count).set(new Uint32Array(sceneIndexes)),x=M.data.range.from+M.data.range.count;else if(M.data.sort){const _=Math.min(M.data.sort.splatRenderCount||0,x),D=Math.min(M.data.sort.splatSortCount||0,x),y=M.data.sort.usePrecomputedDistances;let C,P,F;n||(C=M.data.sort.indexesToSort,F=M.data.sort.transforms,y&&(P=M.data.sort.precomputedDistances)),E(D,_,M.data.sort.modelViewProj,y,C,P,F)}else if(M.data.init){v=M.data.init.Constants,a=M.data.init.splatCount,n=M.data.init.useSharedMemory,i=M.data.init.integerBasedSort,s=M.data.init.dynamicMode,S=M.data.init.distanceMapRange,x=0;const _=i?v.BytesPerInt*4:v.BytesPerFloat*4,D=new Uint8Array(M.data.init.sorterWasmBytes),y=16*v.BytesPerFloat,C=a*v.BytesPerInt,P=a*_,F=y,N=i?a*v.BytesPerInt:a*v.BytesPerFloat,R=a*v.BytesPerInt,L=a*v.BytesPerInt,O=i?S*v.BytesPerInt*2:S*v.BytesPerFloat*2,V=s?a*v.BytesPerInt:0,X=s?v.MaxScenes*y:0,H=v.MemoryPageSize*32,q=C+P+F+N+R+O+L+V+X+H,J=Math.floor(q/v.MemoryPageSize)+1,$={module:{},env:{memory:new WebAssembly.Memory({initial:J,maximum:J,shared:!0})}};WebAssembly.compile(D).then(W=>WebAssembly.instantiate(W,$)).then(W=>{e=W,o=0,A=o+C,g=A+P,u=g+F,h=u+N,f=h+R,l=f+O,c=l+L,d=c+V,t=$.env.memory.buffer,n?r.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:t,indexesToSortOffset:o,sortedIndexesBuffer:t,sortedIndexesOffset:l,precomputedDistancesBuffer:t,precomputedDistancesOffset:u,transformsBuffer:t,transformsOffset:d}):r.postMessage({sortSetupPhase1Complete:!0})})}}}function x0(r,e,t,n,i,s=nt.DefaultSplatSortDistanceMapPrecision){const a=new Worker(URL.createObjectURL(new Blob(["(",S0.toString(),")(self)"],{type:"application/javascript"})));let o=m0;const l=xo()?Ac():null;!t&&!e?(o=Bl,l&&l.major<=16&&l.minor<4&&(o=A0)):t?e||l&&l.major<=16&&l.minor<4&&(o=g0):o=Bl;const c=atob(o),d=new Uint8Array(c.length);for(let u=0;u<c.length;u++)d[u]=c.charCodeAt(u);return a.postMessage({init:{sorterWasmBytes:d.buffer,splatCount:r,useSharedMemory:e,integerBasedSort:n,dynamicMode:i,distanceMapRange:1<<s,Constants:{BytesPerFloat:nt.BytesPerFloat,BytesPerInt:nt.BytesPerInt,MemoryPageSize:nt.MemoryPageSize,MaxScenes:nt.MaxScenes}}}),a}const Ei={None:0,VR:1,AR:2};class Ni{static createButton(e,t={}){const n=document.createElement("button");function i(){let c=null;async function d(f){f.addEventListener("end",u),await e.xr.setSession(f),n.textContent="EXIT VR",c=f}function u(){c.removeEventListener("end",u),n.textContent="ENTER VR",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const h={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",h).then(d):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",h).then(d).catch(f=>{console.warn(f)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",h).then(d).catch(f=>{console.warn(f)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){s(),n.textContent="VR NOT SUPPORTED"}function o(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?i():a(),c&&Ni.xrSessionIsGranted&&n.click()}).catch(o),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Ni.xrSessionIsGranted=!0})}}}Ni.xrSessionIsGranted=!1;Ni.registerSessionGrantedListener();class _0{static createButton(e,t={}){const n=document.createElement("button");function i(){if(t.domOverlay===void 0){const h=document.createElement("div");h.style.display="none",document.body.appendChild(h);const f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("width",38),f.setAttribute("height",38),f.style.position="absolute",f.style.right="20px",f.style.top="20px",f.addEventListener("click",function(){c.end()}),h.appendChild(f);const A=document.createElementNS("http://www.w3.org/2000/svg","path");A.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),A.setAttribute("stroke","#fff"),A.setAttribute("stroke-width",2),f.appendChild(A),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:h}}let c=null;async function d(h){h.addEventListener("end",u),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(h),n.textContent="STOP AR",t.domOverlay.root.style.display="",c=h}function u(){c.removeEventListener("end",u),n.textContent="START AR",t.domOverlay.root.style.display="none",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(d):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(d).catch(h=>{console.warn(h)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(d).catch(h=>{console.warn(h)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){s(),n.textContent="AR NOT SUPPORTED"}function o(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?i():a()}).catch(o),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const Vs={Always:0,Never:2},v0=50,y0=.75,E0=15e5,M0=10,C0=2.5,T0=60;class bi{constructor(e={}){if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new I().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new I().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new I().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio||1,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.kernel2DSize=e.kernel2DSize===void 0?.3:e.kernel2DSize,this.webXRMode=e.webXRMode||Ei.None,this.webXRMode!==Ei.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||Vs.Always,this.sceneRevealMode=e.sceneRevealMode||Di.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||Pi.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,xo()){const n=Ac();n.major<17&&(this.enableSIMDInSort=!1),n.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=Mn.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||nt.DefaultSplatSortDistanceMapPrecision;const t=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=lt(this.splatSortDistanceMapPrecision,10,t),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortMessages=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new Jg,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new I,this.nextCameraTarget=new I,this.mousePosition=new ye,this.mouseDownPosition=new ye,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new Po(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new qg(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new Qg(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new Ct(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier,this.kernel2DSize),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new Gm,this.sceneHelper=new Ji(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){const e=new ye;this.getRenderDimensions(e),this.perspectiveCamera=new Jt(v0,e.x/e.y,.1,1e3),this.orthographicCamera=new po(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const e=new ye;this.getRenderDimensions(e),this.renderer=new mc({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new Ke(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===Ei.VR?this.rootElement.appendChild(Ni.createButton(this.renderer,e)):this.webXRMode===Ei.AR&&this.rootElement.appendChild(_0.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",t=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",t=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===Ei.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new zs(this.camera,this.renderer.domElement):this.perspectiveControls=new zs(this.camera,this.renderer.domElement):(this.perspectiveControls=new zs(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new zs(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===Ei.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onKeyDown=(function(){const e=new I,t=new Ue,n=new Ue;return function(i){switch(e.set(0,0,-1),e.transformDirection(this.camera.matrixWorld),t.makeRotationAxis(e,Math.PI/128),n.makeRotationAxis(e,-Math.PI/128),i.code){case"KeyG":this.focalAdjustment+=.02,this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=.02,this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(t);break;case"ArrowRight":this.camera.up.transformDirection(n);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo,this.showInfo?this.infoPanel.show():this.infoPanel.hide();break;case"KeyO":this.usingExternalCamera||this.setOrthographicMode(!this.camera.isOrthographicCamera);break;case"KeyP":this.usingExternalCamera||this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());break;case"Equal":this.usingExternalCamera||this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+.05);break;case"Minus":this.usingExternalCamera||this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-.05,0));break}}})();onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=vi()}onMouseUp=(function(){const e=new ye;return function(t){e.copy(this.mousePosition).sub(this.mouseDownPosition),vi()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(t)}})();onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY),this.checkForFocalPointChange()}checkForFocalPointChange=(function(){const e=new ye,t=new I,n=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),n.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,n),n.length>0)){const s=n[0].origin;t.copy(s).sub(this.camera.position),t.length()>y0&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(s),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=vi())}}})();getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;const t=this.camera,n=e?this.orthographicCamera:this.perspectiveCamera;if(n.position.copy(t.position),n.up.copy(t.up),n.rotation.copy(t.rotation),n.quaternion.copy(t.quaternion),n.matrix.copy(t.matrix),this.camera=n,this.controls){const i=o=>{o.saveState(),o.reset()},s=this.controls,a=e?this.orthographicControls:this.perspectiveControls;i(a),i(s),a.target.copy(s.target),e?bi.setCameraZoomFromPosition(n,t,s):bi.setCameraPositionFromZoom(n,t,a),this.controls=a,this.camera.lookAt(this.controls.target)}}static setCameraPositionFromZoom=(function(){const e=new I;return function(t,n,i){const s=1/(n.zoom*.001);e.copy(i.target).sub(t.position).normalize().multiplyScalar(s).negate(),t.position.copy(i.target).add(e)}})();static setCameraZoomFromPosition=(function(){const e=new I;return function(t,n,i){const s=e.copy(i.target).sub(n.position).length();t.zoom=1/(s*.001)}})();updateSplatMesh=(function(){const e=new ye;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);const n=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,i=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,s=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,a=this.focalAdjustment*s,o=1/a;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,n*a,i*a,this.camera.isOrthographicCamera,this.camera.zoom||1,o)}}})();adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){const n=this.renderer.xr.getCamera().projectionMatrix.elements[0],i=this.camera.projectionMatrix.elements[0];e.x*=i/n}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,t={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");t.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),t.progressiveLoad=!1);const n=t.format!==void 0&&t.format!==null?t.format:Tl(e),i=bi.isProgressivelyLoadable(n)&&t.progressiveLoad,s=t.showLoadingUI!==void 0&&t.showLoadingUI!==null?t.showLoadingUI:!0;let a=null;s&&(this.loadingSpinner.removeAllTasks(),a=this.loadingSpinner.addTask("Downloading..."));const o=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},l=(g,m,p)=>{if(s)if(p===pt.Downloading)if(g==100)this.loadingSpinner.setMessageForTask(a,"Download complete!");else if(i)this.loadingSpinner.setMessageForTask(a,"Downloading splats...");else{const S=m?`: ${m}`:"...";this.loadingSpinner.setMessageForTask(a,`Downloading${S}`)}else p===pt.Processing&&this.loadingSpinner.setMessageForTask(a,"Processing splats...")};let c=!1,d=0;const u=(g,m)=>{s&&((g&&i||m&&!i)&&(this.loadingSpinner.removeTask(a),!m&&!c&&this.loadingProgressBar.show()),i&&(m?(c=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(d)))},h=(g,m,p)=>{d=g,l(g,m,p),t.onProgress&&t.onProgress(g,m,p)},f=(g,m,p)=>{!i&&t.onProgress&&t.onProgress(0,"0%",pt.Processing);const S={rotation:t.rotation||t.orientation,position:t.position,scale:t.scale,splatAlphaRemovalThreshold:t.splatAlphaRemovalThreshold};return this.addSplatBuffers([g],[S],p,m&&s,s,i,i).then(()=>{!i&&t.onProgress&&t.onProgress(100,"100%",pt.Processing),u(m,p)})};return(i?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,n,t.splatAlphaRemovalThreshold,f.bind(this),h,o.bind(this),t.headers)}downloadAndBuildSingleSplatSceneStandardLoad(e,t,n,i,s,a,o){const l=this.downloadSplatSceneToSplatBuffer(e,n,s,!1,void 0,t,o),c=Wr(l.abortHandler);return l.then(d=>(this.removeSplatSceneDownloadPromise(l),i(d,!0,!0).then(()=>{c.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(d=>{a&&a(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(l),c.reject(this.updateError(d,`Viewer::addSplatScene -> Could not load file ${e}`))}),this.addSplatSceneDownloadPromise(l),this.setSplatSceneDownloadAndBuildPromise(c.promise),c.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,t,n,i,s,a,o){let l=0,c=!1;const d=[],u=()=>{if(d.length>0&&!c&&!this.isDisposingOrDisposed()){c=!0;const m=d.shift();i(m.splatBuffer,m.firstBuild,m.finalBuild).then(()=>{c=!1,m.firstBuild?A.resolve():m.finalBuild&&(g.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),d.length>0&&Qt(()=>u())})}},h=(m,p)=>{this.isDisposingOrDisposed()||(p||d.length===0||m.getSplatCount()>d[0].splatBuffer.getSplatCount())&&(d.push({splatBuffer:m,firstBuild:l===0,finalBuild:p}),l++,u())},f=this.downloadSplatSceneToSplatBuffer(e,n,s,!0,h,t,o),A=Wr(f.abortHandler),g=Wr();return this.addSplatSceneDownloadPromise(f),this.setSplatSceneDownloadAndBuildPromise(g.promise),f.then(()=>{this.removeSplatSceneDownloadPromise(f)}).catch(m=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(f);const p=this.updateError(m,"Viewer::addSplatScene -> Could not load one or more scenes");A.reject(p),a&&a(p)}),A.promise}addSplatScenes(e,t=!0,n=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");const i=e.length,s=[];let a;t&&(this.loadingSpinner.removeAllTasks(),a=this.loadingSpinner.addTask("Downloading..."));const o=(u,h,f,A)=>{s[u]=h;let g=0;for(let m=0;m<i;m++)g+=s[m]||0;g=g/i,f=`${g.toFixed(2)}%`,t&&A===pt.Downloading&&this.loadingSpinner.setMessageForTask(a,g==100?"Download complete!":`Downloading: ${f}`),n&&n(g,f,A)},l=[],c=[];for(let u=0;u<e.length;u++){const h=e[u],f=h.format!==void 0&&h.format!==null?h.format:Tl(h.path),A=this.downloadSplatSceneToSplatBuffer(h.path,h.splatAlphaRemovalThreshold,o.bind(this,u),!1,void 0,f,h.headers);l.push(A),c.push(A.promise)}const d=new On((u,h)=>{Promise.all(c).then(f=>{t&&this.loadingSpinner.removeTask(a),n&&n(0,"0%",pt.Processing),this.addSplatBuffers(f,e,!0,t,t,!1,!1).then(()=>{n&&n(100,"100%",pt.Processing),this.clearSplatSceneDownloadAndBuildPromise(),u()})}).catch(f=>{t&&this.loadingSpinner.removeTask(a),this.clearSplatSceneDownloadAndBuildPromise(),h(this.updateError(f,"Viewer::addSplatScenes -> Could not load one or more splat scenes."))}).finally(()=>{this.removeSplatSceneDownloadPromise(d)})},u=>{for(let h of l)h.abort(u)});return this.addSplatSceneDownloadPromise(d),this.setSplatSceneDownloadAndBuildPromise(d),d}downloadSplatSceneToSplatBuffer(e,t=1,n=void 0,i=!1,s=void 0,a,o){try{if(a===Ut.Splat||a===Ut.KSplat||a===Ut.Ply){const l=i?!1:this.optimizeSplatData;if(a===Ut.Splat)return Do.loadFromURL(e,n,i,s,t,this.inMemoryCompressionLevel,l,o);if(a===Ut.KSplat)return Zi.loadFromURL(e,n,i,s,o);if(a===Ut.Ply)return Ro.loadFromURL(e,n,i,s,t,this.inMemoryCompressionLevel,l,this.sphericalHarmonicsDegree,o)}else if(a===Ut.Spz)return Io.loadFromURL(e,n,t,this.inMemoryCompressionLevel,this.optimizeSplatData,this.sphericalHarmonicsDegree,o)}catch(l){throw this.updateError(l,null)}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===Ut.Splat||e===Ut.KSplat||e===Ut.Ply}addSplatBuffers=(function(){return function(e,t=[],n=!0,i=!0,s=!0,a=!1,o=!1,l=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let c=null;const d=()=>{c!==null&&(this.loadingSpinner.removeTask(c),c=null)};return this.splatRenderReady=!1,new Promise(u=>{i&&(c=this.loadingSpinner.addTask("Processing splats...")),Qt(()=>{if(this.isDisposingOrDisposed())u();else{const h=this.addSplatBuffersToMesh(e,t,n,s,a,l),f=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==f&&this.disposeSortWorker(),this.gpuAcceleratedSort||this.preSortMessages.push({centers:h.centers.buffer,sceneIndexes:h.sceneIndexes.buffer,range:{from:h.from,to:h.to,count:h.count}}),(!this.sortWorker&&f>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||this.runSplatSort(!0,!0).then(g=>{!this.sortWorker||!g?(this.splatRenderReady=!0,d(),u()):(o?this.splatRenderReady=!0:this.runAfterNextSort.push(()=>{this.splatRenderReady=!0}),this.runAfterNextSort.push(()=>{d(),u()}))})})}},!0)})}})();addSplatBuffersToMesh=(function(){let e;return function(t,n,i=!0,s=!1,a=!1,o=!0){if(this.isDisposingOrDisposed())return;let l=[],c=[];a||(l=this.splatMesh.scenes.map(f=>f.splatBuffer)||[],c=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(f=>f):[]),l.push(...t),c.push(...n),this.renderer&&this.splatMesh.setRenderer(this.renderer);const d=f=>{if(this.isDisposingOrDisposed())return;const A=this.splatMesh.getSplatCount();s&&A>=E0&&!f&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},u=f=>{this.isDisposingOrDisposed()||f&&e&&(this.loadingSpinner.removeTask(e),e=null)},h=this.splatMesh.build(l,c,!0,i,d,u,o);return i&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),h}})();setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(t=>{const n=this.integerBasedSort?Int32Array:Float32Array,i=e.getSplatCount(),s=e.getMaxSplatCount();this.sortWorker=x0(s,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=a=>{if(a.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,a.data.splatRenderCount);else{const o=new Uint32Array(a.data.sortedIndexes.buffer,0,a.data.splatRenderCount);this.splatMesh.updateRenderIndexes(o,a.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=a.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(o=>{o()}),this.runAfterNextSort.length=0)}else if(a.data.sortCanceled)this.sortRunning=!1;else if(a.data.sortSetupPhase1Complete){this.logLevel>=Pi.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(a.data.sortedIndexesBuffer,a.data.sortedIndexesOffset,s),this.sortWorkerIndexesToSort=new Uint32Array(a.data.indexesToSortBuffer,a.data.indexesToSortOffset,s),this.sortWorkerPrecomputedDistances=new n(a.data.precomputedDistancesBuffer,a.data.precomputedDistancesOffset,s),this.sortWorkerTransforms=new Float32Array(a.data.transformsBuffer,a.data.transformsOffset,nt.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(s),this.sortWorkerPrecomputedDistances=new n(s),this.sortWorkerTransforms=new Float32Array(nt.MaxScenes*16));for(let o=0;o<i;o++)this.sortWorkerIndexesToSort[o]=o;if(this.sortWorker.maxSplatCount=s,this.logLevel>=Pi.Info){console.log("Sorting web worker ready.");const o=this.splatMesh.getSplatDataTextures(),l=o.covariances.size,c=o.centerColors.size;console.log("Covariances texture size: "+l.x+" x "+l.y),console.log("Centers/colors texture size: "+c.x+" x "+c.y)}t()}}})}updateError(e,t){return e instanceof gc?e:e instanceof $s?new Error("File type or server does not support progressive loading."):t?new Error(t):e}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.preSortMessages=[],this.sortRunning=!1}removeSplatScene(e,t=!0){return this.removeSplatScenes([e],t)}removeSplatScenes(e,t=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let n;return this.splatSceneRemovalPromise=new Promise((i,s)=>{let a;t&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),a=this.loadingSpinner.addTask("Removing splat scene..."));const o=()=>{t&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(a))},l=d=>{o(),this.splatSceneRemovalPromise=null,d?s(d):i()},c=()=>this.isDisposingOrDisposed()?(l(),!0):!1;n=this.sortPromise||Promise.resolve(),n.then(()=>{if(c())return;const d=[],u=[],h=[];for(let f=0;f<this.splatMesh.scenes.length;f++){let A=!1;for(let g of e)if(g===f){A=!0;break}if(!A){const g=this.splatMesh.scenes[f];d.push(g.splatBuffer),u.push(this.splatMesh.sceneOptions[f]),h.push({position:g.position.clone(),quaternion:g.quaternion.clone(),scale:g.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=Di.Instant,this.createSplatMesh(),this.addSplatBuffers(d,u,!0,!1,!0).then(()=>{c()||(o(),this.splatMesh.scenes.forEach((f,A)=>{f.position.copy(h[A].position),f.quaternion.copy(h[A].quaternion),f.scale.copy(h[A].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(c()){this.splatRenderReady=!0;return}n=this.sortPromise||Promise.resolve(),n.then(()=>{this.splatRenderReady=!0,l()})}))}).catch(f=>{l(f)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],t=[];for(let n in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(n)){const i=this.splatSceneDownloadPromises[n];t.push(i),e.push(i.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),t.forEach(n=>{n.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}shouldRender=(function(){let e=0;const t=new I,n=new ct,i=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let s=!1,a=!1;if(this.camera){const o=this.camera.position,l=this.camera.quaternion;a=Math.abs(o.x-t.x)>i||Math.abs(o.y-t.y)>i||Math.abs(o.z-t.z)>i||Math.abs(l.x-n.x)>i||Math.abs(l.y-n.y)>i||Math.abs(l.z-n.z)>i||Math.abs(l.w-n.w)>i}return s=this.renderMode!==Vs.Never&&(e===0||this.splatMesh.visibleRegionChanging||a||this.renderMode===Vs.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(t.copy(this.camera.position),n.copy(this.camera.quaternion)),e++,s}})();render=(function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const e=n=>{for(let i of n.children)if(i.visible)return!0;return!1},t=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=t}})();update(e,t){this.dropInMode&&this.updateForDropInMode(e,t),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&bi.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,t){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=t,this.controls&&(this.controls.object=t),this.init()}updateFPS=(function(){let e=vi(),t=0;return function(){if(this.consecutiveRenderFrames>T0){const n=vi();n-e>=1?(this.currentFPS=t,t=0,e=n):t++}else this.currentFPS=null}})();updateForRendererSizeChanges=(function(){const e=new ye,t=new ye;let n;return function(){this.usingExternalCamera||(this.renderer.getSize(t),(n===void 0||n!==this.camera.isOrthographicCamera||t.x!==e.x||t.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-t.x/2,this.camera.right=t.x/2,this.camera.top=t.y/2,this.camera.bottom=-t.y/2):this.camera.aspect=t.x/t.y,this.camera.updateProjectionMatrix(),e.copy(t),n=this.camera.isOrthographicCamera))}})();timingSensitiveUpdates=(function(){let e;return function(){const t=vi();e||(e=t);const n=t-e;this.updateCameraTransition(t),this.updateFocusMarker(n),e=t}})();updateCameraTransition=(function(){let e=new I,t=new I,n=new I;return function(i){if(this.transitioningCameraTarget){t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),n.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const s=Math.acos(t.dot(n)),o=(s/(Math.PI/3)*.65+.3)/s*(i-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,o),this.camera.lookAt(e),this.controls.target.copy(e),o>=1&&(this.transitioningCameraTarget=!1)}}})();updateFocusMarker=(function(){const e=new ye;let t=!1;return function(n){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);const i=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let s=Math.min(i+M0*n,1);this.sceneHelper.setFocusMarkerOpacity(s),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),t=!0,this.forceRenderNextFrame()}else{let i;if(t?i=1:i=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),i>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let s=Math.max(i-C0*n,0);this.sceneHelper.setFocusMarkerOpacity(s),s===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}i>0&&this.forceRenderNextFrame(),t=!1}}})();updateMeshCursor=(function(){const e=[],t=new ye;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(t),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,t),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}})();updateInfoPanel=(function(){const e=new ye;return function(){if(!this.showInfo)return;const t=this.splatMesh.getSplatCount();this.getRenderDimensions(e);const n=this.controls?this.controls.target:null,i=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,s=t>0?this.splatRenderCount/t*100:0;this.infoPanel.update(e,this.camera.position,n,this.camera.up,this.camera.isOrthographicCamera,i,this.currentFPS||"N/A",t,this.splatRenderCount,s,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}})();updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}runSplatSort=(function(){const e=new Ue,t=[],n=new I(0,0,-1),i=new I(0,0,-1),s=new I,a=new I,o=[],l=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(c=!1,d=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let u=0,h=0,f=!1,A=!1;if(i.set(0,0,-1).applyQuaternion(this.camera.quaternion),u=i.dot(n),h=a.copy(this.camera.position).sub(s).length(),!c&&!this.splatMesh.dynamicMode&&o.length===0&&(u<=.99&&(f=!0),h>=1&&(A=!0),!f&&!A))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:g,shouldSortAll:m}=this.gatherSceneNodesForSort();m=m||d,this.splatRenderCount=g,e.copy(this.camera.matrixWorld).invert();const p=this.perspectiveCamera||this.camera;e.premultiply(p.projectionMatrix),this.splatMesh.dynamicMode||e.multiply(this.splatMesh.matrixWorld);let S=Promise.resolve(!0);return this.gpuAcceleratedSort&&(o.length<=1||o.length%2===0)&&(S=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),S.then(()=>{if(o.length===0)if(this.splatMesh.dynamicMode||m)o.push(this.splatRenderCount);else{for(let E of l)if(u<E.angleThreshold){for(let M of E.sortFractions)o.push(Math.floor(this.splatRenderCount*M));break}o.push(this.splatRenderCount)}let x=Math.min(o.shift(),this.splatRenderCount);this.splatSortCount=x,t[0]=this.camera.position.x,t[1]=this.camera.position.y,t[2]=this.camera.position.z;const v={modelViewProj:e.elements,cameraPosition:t,splatRenderCount:this.splatRenderCount,splatSortCount:x,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(v.indexesToSort=this.sortWorkerIndexesToSort,v.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(v.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(E=>{this.sortPromiseResolver=E}),this.preSortMessages.length>0&&(this.preSortMessages.forEach(E=>{this.sortWorker.postMessage(E)}),this.preSortMessages=[]),this.sortWorker.postMessage({sort:v}),o.length===0&&(s.copy(this.camera.position),n.copy(i)),!0}),S}})();gatherSceneNodesForSort=(function(){const e=[];let t=null;const n=new I,i=new I,s=new I,a=new Ue,o=new Ue,l=new Ue,c=new I,d=new I(0,0,-1),u=new I,h=f=>u.copy(f.max).sub(f.min).length();return function(f=!1){this.getRenderDimensions(c);const A=c.y/2/Math.tan(this.camera.fov/2*Yl.DEG2RAD),g=Math.atan(c.x/2/A),m=Math.atan(c.y/2/A),p=Math.cos(g),S=Math.cos(m),x=this.splatMesh.getSplatTree();if(x){o.copy(this.camera.matrixWorld).invert(),this.splatMesh.dynamicMode||o.multiply(this.splatMesh.matrixWorld);let v=0,E=0;for(let _=0;_<x.subTrees.length;_++){const D=x.subTrees[_];a.copy(o),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(_,l),a.multiply(l));const y=D.nodesWithIndexes.length;for(let C=0;C<y;C++){const P=D.nodesWithIndexes[C];if(!P.data||!P.data.indexes||P.data.indexes.length===0)continue;s.copy(P.center).applyMatrix4(a);const F=s.length();s.normalize(),n.copy(s).setX(0).normalize(),i.copy(s).setY(0).normalize();const N=d.dot(i),R=d.dot(n),L=h(P),O=R<S-.6,V=N<p-.6;!f&&(V||O)&&F>L||(E+=P.data.indexes.length,e[v]=P,P.data.distanceToNode=F,v++)}}e.length=v,e.sort((_,D)=>_.data.distanceToNode<D.data.distanceToNode?-1:1);let M=E*nt.BytesPerInt;for(let _=0;_<v;_++){const D=e[_],y=D.data.indexes.length,C=y*nt.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,M-C,y).set(D.data.indexes),M-=C}return{splatRenderCount:E,shouldSortAll:!1}}else{const v=this.splatMesh.getSplatCount();if(!t||t.length!==v){t=new Uint32Array(v);for(let E=0;E<v;E++)t[E]=E}return this.sortWorkerIndexesToSort.set(t),{splatRenderCount:v,shouldSortAll:!0}}}})();getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}}const lr=[{name:"Scene 1",file:"scene1.ksplat"},{name:"Scene 2",file:"scene2.ksplat"},{name:"Scene 3",file:"scene3.ksplat"},{name:"Scene 4",file:"scene4.ksplat"}],b0="/3DGS-Viewer/";lr.forEach(r=>{r.path=`${b0}scenes/${r.file}`});const w0=document.getElementById("viewer-container"),Qi=document.getElementById("loading"),Ws=document.getElementById("status"),Ul=document.querySelectorAll(".scene-button"),es=new bi({cameraUp:[0,1,0],initialCameraPosition:[0,0,5],initialCameraLookAt:[0,0,0],selfDrivenMode:!0,sharedMemoryForWorkers:!1,gpuAcceleratedSort:!1,halfPrecisionCovariancesOnGPU:!0,renderMode:Vs.Always,sceneRevealMode:Di.Instant});w0.appendChild(es.renderer.domElement);let Cc=0,Xs=!1;async function R0(r){const e=lr[r];try{console.log(`Preloading ${e.name}: ${e.path}`),await fetch(e.path,{cache:"force-cache"}),console.log(`${e.name} file is cached.`)}catch(t){console.warn(`Could not preload ${e.name}:`,t)}}async function Tc(r){if(Xs)return;Xs=!0;const e=lr[r];console.log(`Loading ${e.name}`),console.log(`File: ${e.path}`),Qi.style.display="flex",Qi.textContent=`Loading ${e.name}...`,Ws.textContent=`Loading ${e.name}...`;try{es.getSceneCount()>0&&await es.removeSplatScenes([0]),await es.addSplatScene(e.path,{format:Ut.KSplat,showLoadingUI:!1,splatAlphaRemovalThreshold:1,position:[0,0,0],rotation:[0,0,1,0],scale:[1,1,1],progressiveLoad:!1}),Cc=r,console.log(`${e.name} loaded successfully.`),Qi.style.display="none",Ws.textContent=`${e.name} ready`}catch(t){console.error(`Failed to load ${e.name}:`,t),Qi.style.display="flex",Qi.textContent=`Failed to load ${e.name}`,Ws.textContent="Load failed. Check Console."}finally{Xs=!1}}Ul.forEach(r=>{r.addEventListener("click",async()=>{const e=Number(r.dataset.scene);e!==Cc&&(Xs||(Ul.forEach(t=>{t.classList.remove("active")}),r.classList.add("active"),await Tc(e)))})});es.start();(async()=>{try{await Tc(0);for(let r=1;r<lr.length;r++)await R0(r);Ws.textContent="All scene files cached"}catch(r){console.error("Initial loading failed:",r)}})();
