import ManageComponents from './manage-components'
import * as components from '../../components'

export default function Ingressotify(Vue, args) {
    Vue.use(ManageComponents, { components })
}