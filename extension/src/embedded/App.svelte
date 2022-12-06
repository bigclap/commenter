<script lang="ts">
  export let name: string;
</script>

<div id="5d21609b849ad62eacfaecb0c8142313">
    <h1>Hello {name}!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</div>

<style lang="scss">
  #5d21609b849ad62eacfaecb0c8142313 {
    display: block;
    position: absolute;
    top: 50px;
    left: 50px;
    background-color: white;
    width: 400px;
    height: 200px;

    main {
      text-align: center;
      padding: 1em;
      max-width: 240px;
      margin: 0 auto;
    }

    h1 {
      color: #ff3e00;
      text-transform: uppercase;
      font-size: 4em;
      font-weight: 100;
    }

    @media (min-width: 640px) {
      main {
        max-width: none;
      }
    }
  }
</style>
