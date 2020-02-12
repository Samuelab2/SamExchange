<template>
  <div>
    <sx-assets-table :assets="assets" />
  </div>
</template>

<script>
import getAssets from '@/api'
import SxAssetsTable from '@/components/SxAssetsTable'

export default {
  name: 'home',
  components: { SxAssetsTable },

  data() {
    return {
      assets: []
    }
  },

  created() {
    getAssets().then(assets => (this.assets = assets))
  }
}
</script>
