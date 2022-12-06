import { Col, Container, Row, Tab } from "react-bootstrap";
import { WidgetComposition } from "./WidgetComposition";
import './Widget.css';
import { IndexTranslate } from './GoogleTranslate/IndexTranslate';
import { IndexAirport } from "./Airport/IndexAirport";
import { IndexConvert } from "./Convert/IndexConvert";
import { IndexPicture } from "./Pictures/IndexPicture";
import { IndexMeteo } from "./Meteo/IndexMeteo";
import { IndexActiviter } from "./Activiter/indexActiviter";


export const Widget = () => {

    const widget = [
        {
            title: "",
            description: "",
            files: <IndexTranslate />,
        },
        {
            title: "",
            description: "",
            files: <IndexAirport />,

        },
        {
            title: "",
            description: "",
            files: <IndexConvert />,
        },
        {
            title: "",
            description: "",
            files: <IndexPicture />,
        },
        {
            title: "",
            description: "",
            files: <IndexMeteo />,
        },
        {
            title: "",
            description: "",
            files: <IndexActiviter />,
        }
    ];

    return (
        <section className="widget" id="widget">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Widget</h2>
                        <p>Here are some of the widgets that we have created for your travel</p>
                        <Tab.Container id="widget-tabs" defaultActiveKey="first">

                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            widget.map((widget, index) => {
                                                return (
                                                    <WidgetComposition
                                                        key={index}
                                                        {...widget}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}