import axios from 'axios';

function searchGit(){
	return  axios.get('https://api.github.com/users/ZhaoShouLiang')
      .then((res) => ({
       		getdata:res.data
       }))
      .catch(function (error) {
        alert(error);
      });
}
export {searchGit};