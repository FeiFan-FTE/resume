<template>
  <div class="home">
    <!-- <HelloWorld /> -->
    <FileExplorer></FileExplorer>
  </div>
</template>

<script>
  //_c -> src/compoents
import FileExplorer from '../fileExplorer/FileExplorer.vue'
export default {
  name: 'Home',
  components: {
    FileExplorer
  }
}
</script>
