export const load = async ({ fetch }) => {

	async function getPosts() {
		const response = await fetch('http://pge-srv-062/Person/GetAll');
		const posts = await response.json();
		return posts;
	}

	return {
		getPosts: getPosts()
	};
};
