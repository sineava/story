import TableConf from './components/table-conf.vue'

export default {
  title: '组件库/表格/基础表格',
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

export const Table = Template.bind({})
Table.args = {
  list: [{ id: 1, name: 'zs' }, { id: 2, name: 'ls' }],
  options: [{ k: 'name', v: '姓名' }]
}