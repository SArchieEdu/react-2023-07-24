import {Review} from "../Review/component";

export const Reviews = ({ data }) => {
    return <div className="reviews">
        <h4 className="restaurant__title">Reviews:</h4>

        {
            data.map((item) => (
                <div key={item.id}>
                    <Review data={item}/>
                </div>
            ))
        }
    </div>;
};
