export const load = async ({ params }) => {
	// console.log(params.slug);
	async function getData() {
		const response = await fetch(`http://pge-srv-062/Person/GetById?personId=${params.slug}`);
		const pageData = await response.json();
		return pageData;
	}

	return {
		getData: getData()
	};
};

export const actions = {
	editPessoa: async ({ request, params }) => {
		const response = await fetch(`http://pge-srv-062/Person/GetById?personId=${params.slug}`);
		const pageData = await response.json();

		const { endereco } = Object.fromEntries(await request.formData());
		console.log(endereco);

		try {
			await fetch(
				'http://pge-srv-062/Person/Update',
				{
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json'
					}
				},
				{ personId: pageData.personId, address: endereco }
			);
		} catch (err) {
			return fail(500, { message: 'Post não pode ser criado' });
		}
	}
};
