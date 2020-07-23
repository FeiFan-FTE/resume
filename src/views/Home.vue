<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
	//_c -> src/compoents
import HelloWorld from '_c/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
