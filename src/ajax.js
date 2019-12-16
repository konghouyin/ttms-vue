export default function(obj) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var status = xhr.status;
      if (status >= 200 && status < 300) {
        obj.success(JSON.parse(xhr.responseText))
      } else {
        console.log(xhr)
        alert("错误")
      }
    }
  }
  if(obj.type.toLowerCase()==='post'){
    xhr.open("post", obj.url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify(obj.data));
  }else{
    xhr.open("GET",obj.url + "/" + JSON.stringify(obj.data),true);
    xhr.send(null)
  }
}
