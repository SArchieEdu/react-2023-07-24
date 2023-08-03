import {Menu} from "../Menu/component";
import {Reviews} from "../Reviews/component";

export const Restaurant = ({ data }) => {
    return <article className="restaurant">
        <header>
            <h3 className="restaurant__title">{data.name}</h3>
        </header>
        <div className="restaurant__info">
            <div className="restaurant__info-menu">
                <Menu data={data.menu}/>
            </div>
            <div className="restaurant__info-reviews">
                <Reviews data={data.reviews}/>
            </div>
        </div>
    </article>
};
