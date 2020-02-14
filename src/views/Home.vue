<template>
  <div>
    <bounce-loader
      :loading="isLoading"
      :color="'#68d391'"
      :size="100"
    ></bounce-loader>
    <sx-assets-table v-if="isLoading === false" :assets="assets" />
  </div>
</template>

<script>
import { getAssets } from '@/api'
import SxAssetsTable from '@/components/SxAssetsTable'

export default {
  name: 'home',
  components: { SxAssetsTable },

  data() {
    return {
      isLoading: false,
      assets: []
    }
  },

  created() {
    this.isLoading = true
    getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false))
  }
}
</script>
