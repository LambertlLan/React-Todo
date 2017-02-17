/**
 * Created by Lambert.
 * User: landingyu@163.com
 * Date: 2017/2/17
 * Time: 13:14
 *
 */
function indexOf(val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == val){return i;}
    }
    return -1;
}
function remove(val){
    var index = indexOf(val);
    if(index > -1){arr.splice(index,1);}
}
export {remove}