<template>
  <button className="bg-purple-500 text-[12px] text-[#fff] px-4 py-2" @click="word">导出表格带图片</button>
</template>

<script lang="ts" setup>
import { renderDoc } from '../utils/dataUtils'

const word = () => {
  renderDoc({
    list: [
      { img: '/demo.png', name: '图片1' },
      { img: '/demo.png', name: '图片2' }
    ],
    url: '/doc-template.docx'
  })
}
</script>