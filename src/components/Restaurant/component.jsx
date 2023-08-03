import {restaurants} from "../../constants/constants";
import {Menu} from "../Menu/component";
import {Reviews} from "../Reviews/component";

export const Restaurant = ({children, active}) => {

    return (
        <div>
            <div><h1>{restaurants[active].name}</h1></div>

            <div><Menu active={active}></Menu></div>

            <div><Reviews active={active}></Reviews></div>
        </div>
        );
};