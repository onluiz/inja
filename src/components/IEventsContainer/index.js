import IEventsContainer from './IEventsContainer'
import IEventCard from './IEventCard'

IEventsContainer.install = (Vue) => {
  Vue.component(IEventsContainer.name, IEventsContainer)
  Vue.component(IEventCard.name, IEventCard)
}

export default IEventsContainer