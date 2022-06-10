<template>
  <el-table
    v-loading="loading"
    :data="list"
    :show-overflow-tooltip="showTooltip"
    :border="border"
    :element-loading-text="loadingText"
    :size="size"
    :stripe="stripe"
    @selection-change="change"
  >
    <el-table-column v-if="showCheckbox" type="selection" width="60" />
    <el-table-column v-if="showIndex" type="index" label="序号" align="center" width="60" />
    <template v-for="{ k, v, type, payload, format, showTooltip, sort }, i in options" :key="i">
      <el-table-column v-if="type === 'num'"
        :label="v" :show-overflow-tooltip="!!showTooltip" align="center">
        <template #default="{row}">
          {{ payload?.find(x => x.value === row[k])?.label }}
        </template>
      </el-table-column>
      <el-table-column v-else-if="type === 'tag'" :label="v" align="center" :show-overflow-tooltip="showTooltip || true">
        <template #default="{row}">
          <el-tag :type="payload?.find(x => x.value === row[k])?.tag">
            {{ payload?.find((x: any) => x.value === row[k])?.label }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column v-else :prop="k"
        :label="v"
        align="center"
        :show-overflow-tooltip="showTooltip || true"
        :sortable="sort ? 'custom' : false"
      />
    </template>
  </el-table>
</template>

<script lang="ts" setup>
import 'element-plus/dist/index.css'
import 'element-plus/es/components/message/style/css'
import { ElTable, ElTableColumn, ElTag, ElMessage } from 'element-plus'
import { withDefaults } from 'vue'
import { vLoading } from "element-plus/es/components/loading/src/directive"

const emit = defineEmits(['change'])
interface Props {
  list: any[]
  options: Array<{
    k: string
    v: string
    sort?: boolean
    type?: 'num' | 'tag' | 'date'
    payload?: any[]
    format?: string
    url?: string,
    showTooltip?: boolean
  }>
  loading?: boolean
  loadingText?: string
  showTooltip?: boolean
  showIndex?: boolean
  showCheckbox?: boolean
  border?: boolean
  size?: string
  stripe?: boolean
}
withDefaults(defineProps<Props>(), {
  list: () => [],
  showIndex: true,
  showTooltip: true,
  showCheckbox: false,
  loadingText: '正在加载...',
  border: false,
  loading: false,
  size: 'default',
  stripe: false
})

const change = (val = []) => {
  ElMessage.success(JSON.stringify(val))
}
</script>