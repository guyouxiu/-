import store from "@/store/index.js"
class Http{
	static appid ='bd9d01ecc75dbbaaefce'
	static baseUrl = 'http://demonuxtapi.dishait.cn'
	static request(options={}){
		// console.log(options);
		return new Promise((resolve,reject)=>{
			uni.request({
				
			    url: Http.baseUrl + options.url, 
			    data:options.data || {},
				method:options.method || 'GET',
			    header: {
					appid:Http.appid,
			        ...options.header,
					token:store.state.token,
			    },
			    success: (res) => {
			        // console.log(res);
			        resolve(res)
			    },
				fail:(err)=>{
					console.log(err);
					reject(err)
				}
			});
		})
		
	}
}

export default Http