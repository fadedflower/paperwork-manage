<template>
  <div>
    <layout-nav-bar
      :title="title"
      :no-nav="noNav"
      @navBack="$emit('navBack')"
    />
    <div class="layout-view-plain">
      <slot />
    </div>
  </div>
</template>

<script>
import LayoutNavBar from './LayoutNavBar.vue'

export default {
  name: 'LayoutViewPlain',
  components: { LayoutNavBar },
  props: {
    title: {
      type: String,
      required: true
    },
    noNav: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.layout-view-plain {
  height: calc(100vh - 50px);
  overflow: scroll;
  background-color: #f4f4f4;
}

::-webkit-scrollbar {
  display: none;
}
</style>
