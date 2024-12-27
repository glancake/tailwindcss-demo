/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import all icons, solid图标库的包名为fas、regular图标库的包名为far、brands图标库的包名为fab */
import { faWifi, faHouse, faHeart, faSearch, faFileLines } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faWifi, faHouse, faHeart, faSearch, faFileLines)

export default FontAwesomeIcon;