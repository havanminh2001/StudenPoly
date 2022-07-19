import Homepage from '../components/page/home/HomePage'
import Folowing from '../components/page/folowing/Folowing'
import Infor from '../components/page/infoUser/Infor'
import Upload from '../components/page/upload/Upload'
import Search from '../components/page/search/Search'

/// layout only
import DefaultLayoutOnly from '../components/layouts/defaultLayoutOnly/DefaultLayoutOnly'

const RoutesPublic = [
  { path: '/', component: Homepage },
  { path: '/folowing', component: Folowing },
  { path: '/Infor', component: Infor },
  { path: '/Upload', component: Upload , Layout: DefaultLayoutOnly},
  { path: '/Search', component: Search, Layout: null },
]

const RoutesPirvate = []

export { RoutesPublic, RoutesPirvate }
