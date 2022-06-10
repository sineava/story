import ExportWord from './components/export-word.vue'

export default {
  title: '组件库/wps',
  component: ExportWord
}

const Template = (args) => ({
  components: { ExportWord },
  setup() {
    return { args }
  },
  template: '<export-word v-bind="args" />'
})

export const 文档 = Template.bind({})