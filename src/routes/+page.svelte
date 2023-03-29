<script>
	export let data;
	$: ({ getPosts } = data);
	$: console.log(getPosts);
</script>

<h1>Teste</h1>

<hr />

{#each getPosts as { fullName, rg, personId }, i}
	<div>
		<a href="/{personId}">{i + 1} : {fullName} - {rg}</a>
	</div>
{/each}