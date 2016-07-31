//使用说明,da得是字符串,用.toString()转换
function gettime(da){
	var date = new Date(parseInt(da.replace("/Date(", "").replace(")/", ""), 10));
	var year = date.getFullYear();
	var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
	console.log(month);
	var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
	console.log(day);
	return year+"-"+month+"-"+day;
}

function getalltime(da){
	var date = new Date(parseInt(da.replace("/Date(", "").replace(")/", ""), 10));
	var year = date.getFullYear();
	var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
	console.log(month);
	var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
	console.log(day); 
	var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
	
	var min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	
	var sec = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	return year+"-"+month+"-"+day+" "+hour+":"+min+":"+ sec; 
}