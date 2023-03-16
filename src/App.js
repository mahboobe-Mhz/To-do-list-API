import El from '@/library/El';
import { Container } from '@/layout';
import Navbar from './layout/component/Navbar';
import Table from './layout/component/Table/index';
import Modal from './layout/component/ShowModal/index';
import Pagination from './layout/component/pagination/index';
 import ModalFilter from './layout/component/ModalFilter';






const App=()=>{
    const app=El({
        element:"div",
        child:[Navbar(),Table(),Pagination(),Modal(),ModalFilter()]
        
    })
    return Container(app)
}
export default App
//response.headers.get('link') =>
//response.headers.get('X-Total-Count') =>
//http://localhost:3000/tasks?_page=1&_limit=all= کل اطلاعات اورده میشود.