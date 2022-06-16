const dataSource = async ()=>{
	return $.get(`https://api-mobilespecs.azharimm.site/v2/brands`,(data)=>{
		return data;
	})
}
export default dataSource;