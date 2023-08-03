import {Dish} from "../Dish/component";

export const Menu = ({ data }) => {
    return <div className="menu">
        <ul>
            <h4>Menu:</h4>
            {data.map(item => (
                <Dish key={item.id} data={item}/>
            ))}
        </ul>
    </div>;
};
