import {Col} from "react-bootstrap";


export const WidgetComposition = ({title,description, files}) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="widget__composition">
                {files}
            <div className="widget__composition__text">
            <h3>{title}</h3>
            <span>{description}</span>
            </div>

            </div>

        </Col>
    );
}