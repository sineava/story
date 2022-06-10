import TableConf from './components/table-conf.vue'

export default {
  title: '工具库/excel',
  component: TableConf,
  argTypes: {
    size: {
      options: ['large', 'default', 'small'],
      control: { type: 'inline-radio' }
    }
  }
}

const Template = (args) => ({
  components: { TableConf },
  setup() {
    return { args }
  },
  template: '<table-conf v-bind="args" />'
})

export const 基础表格 = Template.bind({})
基础表格.args = {
  list: [{ id: 1, name: 'zs' }, { id: 2, name: 'ls' }],
  options: [{ k: 'name', v: '姓名' }]
}