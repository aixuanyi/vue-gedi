import fetchJsonp  from 'fetch-jsonp'
var MyAjax = {
      jquery:function(url, callback){
        jQuery.ajax({
          type:"get",
          url:url,
          success:function(data){
            callback(data);
          }
        });
      },
      jqueryJsonp:function(url,data,callback){
        jQuery.ajax({
          type:"get",
          url:url,
          data:data,
          dataType:"jsonp",
          success:function(data){
            callback(data);
          }
        });
      },
      fetch(url, callback){
        fetch(url).then(function(response) {
          return response.json();
        }).then(function(data) {
          callback(data);
        }).catch(function(e) {
          console.log("Oops, error");
        });
      },
      fetchJsonp(url, callback){
        fetchJsonp(url).then(function(response) {
          return response.json();
        }).then(function(data) {
          callback(data);
        }).catch(function(e) {
          console.log("Oops, error");
        });
      }
    }

export default MyAjax;
