<template>
  <div>
    <layout-nav-bar :title="title" />
    <layout-tabs
      v-if="tabs"
      :tab-click="tabClick"
    >
      <slot name="tabs" />
    </layout-tabs>
    <layout-refresh
      :refresh="refresh"
      :class="['layout-view', {'layout-view-tab': tabs}]"
    >
      <layout-empty v-if="empty" />
      <div v-else>
        <slot />
        <div class="reach-end">
          <p class="reach-end-title">
            没有更多了
          </p>
        </div>
      </div>
    </layout-refresh>
  </div>
</template>

<script>
import LayoutNavBar from './LayoutNavBar.vue'
import LayoutRefresh from './LayoutRefresh.vue'
import LayoutTabs from './LayoutTabs.vue'
import LayoutEmpty from './LayoutEmpty.vue'

export default {
  name: 'LayoutView',
  components: { LayoutNavBar, LayoutRefresh, LayoutTabs, LayoutEmpty },
  props: {
    title: {
      type: String,
      required: true
    },
    refresh: {
      type: Function,
      required: true
    },
    empty: {
      type: Boolean,
      default: false
    },
    tabs: {
      type: Boolean,
      default: false
    },
    tabClick: {
      type: Function,
      default: () => undefined
    }
  }
}
</script>

<style scoped>
.layout-view {
  height: calc(100vh - 4vw - 48px);
  padding: 4vw 4vw 0 4vw;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #f4f4f4;
}

.layout-view-tab { height: calc(100vh - 4vw - 92px); }

::-webkit-scrollbar {
  display: none;
}

.reach-end {
  display: flex;
  align-items: center;
  justify-content: center;
}

.reach-end-title {
  padding: 2.66667vw;
  font-size: 2.93333vw;
  color: #b13a3d;
}
</style>
