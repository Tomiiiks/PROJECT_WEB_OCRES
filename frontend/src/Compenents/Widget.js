import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {WidgetComposition} from "./WidgetComposition";
import widgetImg1 from "../stories/assets/img/widgetImg1.png";
import widgetImg2 from "../stories/assets/img/widgetImg2.png";
import './Widget.css';
import {indexTranslate} from './GoogleTranslate/indexTranslate';


export const Widget = () => {

    const widget = [
        { title: "",
            description: "",
            files: <indexTranslate />,
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