// build time:Fri Mar 08 2019 16:11:26 GMT+0800 (中国标准时间)
var now=new Date;function createtime(){var n=new Date("12/30/2018 12:49:00");now.setTime(now.getTime()+250);days=(now-n)/1e3/60/60/24;dnum=Math.floor(days);hours=(now-n)/1e3/60/60-24*dnum;hnum=Math.floor(hours);if(String(hnum).length==1){hnum="0"+hnum}minutes=(now-n)/1e3/60-24*60*dnum-60*hnum;mnum=Math.floor(minutes);if(String(mnum).length==1){mnum="0"+mnum}seconds=(now-n)/1e3-24*60*60*dnum-60*60*hnum-60*mnum;snum=Math.round(seconds);if(String(snum).length==1){snum="0"+snum}document.getElementById("timeDate").innerHTML="网站已运行 "+dnum+" 天 ";document.getElementById("times").innerHTML=hnum+" 小时 "+mnum+" 分 "+snum+" 秒"}setInterval("createtime()",250);
//rebuild by neat 