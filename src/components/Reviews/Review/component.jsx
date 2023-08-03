export const Review = ({name, text}) => {
    return (
        <div>
            <p><b>{name}</b></p>
            <p><span>"</span>{text}<span>"</span></p>
            <hr />
        </div>
    );
};