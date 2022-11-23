import {Col} from "react-bootstrap";

export const WidgetComposition = ({title,description, imgUrl}) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="widget__composition">
                <img src={imgUrl} />
            <div className="widget__composition__text">
            <h3>{title}</h3>
            <span>{description}</span>
            </div>

            </div>

        </Col>
    );
}