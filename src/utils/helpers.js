import axios from 'axios';

function searchGit(){
	return  axios.get('https://api.github.com/users/ZhaoShouLiang')
      .then((res) => ({
       		data:res.data
       }))
      .catch(function (error) {
        alert(error);
      });
}
export {searchGit};