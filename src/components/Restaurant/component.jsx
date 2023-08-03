import {Reviews} from "../Reviews/component";
import {Menu} from "../Menu/component.jsx";


export const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews } = restaurant;

    return (
        <div>
            <h2>{name}</h2>
            <div>

                <Menu menu={menu} />
                <Reviews reviews={reviews}/>
            </div>
        </div>
    );
};