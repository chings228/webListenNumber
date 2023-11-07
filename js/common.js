export default class Commonjs {



    static htmlspecialencode(str){


        return str.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    
      }
    
    
     static htmlspecialdecode(str){
    
    
        return str.replace(/&amp;/g,"&" ).replace(/&gt;/g,">").replace(/&lt;/g, "<").replace(/&quot;/g, "\"");
    
      }



    static  api(param) {
		var url = '';
    var baseurl = '';
    
    baseurl = window.location.origin+'/'

    //console.log(window.location)
    //console.log(baseurl)

		var result;

		url = 'api/api.php';

    console.log(url);
		return new Promise((resolve, reject) => {
			$.post(url, param, (data) => {

				result = JSON.parse(data);

				resolve(result);
			}).fail((error) => {
        console.log(error)
				reject(error);
			});
		});
	}


 static getCookie(cname) {
		var name = cname + '=';
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return '';
	}

	static setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		var expires = 'expires=' + d.toUTCString();
		document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
	}



}