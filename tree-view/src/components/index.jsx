
import menus from './data.js'
import MenuList from './menu-list'
import MenuItem from './menu-item'

export default function TreeView({menus = []}){

    return <div className="tree-view-container">
        <MenuList list={menus}/>
    </div>
}