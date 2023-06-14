/** TiM Component - copyright by https://thisismoba.blogspot.com **/
function ucWords(txt){var str=txt.toLowerCase().replace(/\b[a-z]/g, function(letter){return letter.toUpperCase();});return str;}
function fixString(txt){return txt.replaceAll('_',' ');}
function SortByName(x,y) {return ((x.title.$t == y.title.$t) ? 0 : ((x.title.$t > y.title.$t) ? 1 : -1 ))}
function getParam(name){var results = new RegExp('[\?&]'+name+'=([^&#]*)').exec(window.location.href);if(results==null){return null} return decodeURI(results[1]) || 0;}
function last_path(url){var rmvparam = url.split('?')[0]; var path = rmvparam.substring(rmvparam.lastIndexOf('/') + 1); return path;}
function fetchCallback(data) {return $.ajax({type:'GET',url:'https://www.blogger.com/feeds/6626927129280871799/posts/default/-/'+encodeURIComponent(data)+'?alt=json&max-results=999999',cache:false,dataType:'json',success:function(resp){}});}
function shuffleArray(arr){var i=arr.length,j,temp;if(i===0)return false;while(--i){j=Math.floor(Math.random()*(i+1));temp=arr[i];arr[i]=arr[j];arr[j]=temp}return arr}
function filterdumplicate(entry){var new_entry=[]; $.each(entry, function(k1,v1){var same = false; $.each(new_entry, function(k2,v2) { if(v1.title.$t == v2.title.$t){same=true};}); if(same == false && v1.title.$t != ''){new_entry.push(v1);}}); return new_entry;}
function fixdate(date){const month=['January','February','March','April','May','June','July','August','September','October','November','December'];const d=new Date(date); return month[d.getMonth()]+', '+d.getFullYear();}