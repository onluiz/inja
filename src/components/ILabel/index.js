import ILabel from './ILabel'
import ILabelTitle from './ILabelTitle'

ILabel.install = (Vue) => {
  Vue.component(ILabel.name, ILabel)
  Vue.component(ILabelTitle.name, ILabelTitle)
}

export default ILabel