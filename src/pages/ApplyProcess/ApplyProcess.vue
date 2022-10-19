<template>
  <layout-view-plain title="申请详情">
    <ApplyDetail :apply-id="$route.params.id" />
  </layout-view-plain>
</template>

<script>
import LayoutViewPlain from '@/layouts/LayoutViewPlain.vue'
import ApplyDetail from '@/pages/components/ApplyDetail.vue'

export default {
  name: 'ApplyProcess',
  components: { LayoutViewPlain, ApplyDetail }
}
</script>
