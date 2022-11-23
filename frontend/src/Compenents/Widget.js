import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {WidgetComposition} from "./WidgetComposition";
import widgetImg1 from "../stories/assets/img/widgetImg1.png";
import widgetImg2 from "../stories/assets/img/widgetImg2.png";
import './Widget.css';

export const Widget = () => {

    const widget = [
        { title: "Widget 1",
            description: "Conversion API",
            imgUrl: widgetImg1,
        },
        { title: "Widget 2",
            description: "Google Translate API",
            imgUrl: widgetImg2,
        },
        { title: "Widget 3",
            description: "Google flight API",
            imgUrl: widgetImg1,
        },
        { title: "Widget 4",
            description: "Search pictures API",
            imgUrl: widgetImg1,
        },
        { title: "Widget 5",
            description: "Booking API",
            imgUrl: widgetImg1,
        },
        { title: "Widget 6",
            description: "Google maps API",
            imgUrl: widgetImg1,
        },

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
                                            )})
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