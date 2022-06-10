import ExportWord from './components/export-word.vue'

export default {
  title: '组件库/导出/文档带图片',
  component: ExportWord
}

const Template = (args) => ({
  components: { ExportWord },
  setup() {
    return { args }
  },
  template: '<export-word v-bind="args" />'
})

export const Word = Template.bind({})