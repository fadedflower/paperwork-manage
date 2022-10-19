<template>
  <layout-view-plain title="审批详情">
    <ApplyDetail
      :apply-id="$route.params.id"
      approval
    />
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
