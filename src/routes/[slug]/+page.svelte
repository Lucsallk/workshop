<script>
	export let data;
	$: ({ getData } = data);
	// $: console.log(getData);
</script>

<div>
    <form action="?/editPessoa" method="POST">
        <label for="endereco">Endereço</label> <br>
        <input type="text" name="endereco" id="endereco" value="{getData.address}">
        <button type="submit">Editar</button>
    </form>
</div>

