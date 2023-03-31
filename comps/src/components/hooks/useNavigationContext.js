import { useContext } from "react";
import NavigationContext from '../Context/NavigationContext';
;


export default  function useNavigationContext() {
    return useContext(NavigationContext);
}

