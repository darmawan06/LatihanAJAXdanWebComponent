import dataSource from '../data/data-source.js';
const main = async () => {
	 await dataSource().then((e)=>{
	 	const listData = document.querySelector('.listData');
	 	e.data.forEach((data)=>{
	 		console.log(data);
	 		listData.innerHTML += `
	         
	          `;
	 	})
	 });
};

export default main;
