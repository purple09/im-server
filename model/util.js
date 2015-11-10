/**
 * Created by guizhen on 2015/11/9.
 */
exports.wrapFn=function(fn){
  if(null!=fn && 'function' == typeof fn ){
      return fn;
  }else{
      return function(){};
  }
};