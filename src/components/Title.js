import { Helmet } from 'react-helmet';

export default function Title(props) {
    return (
        <Helmet>
            <title>{props.title ? props.title + " | Frisco Pollution Hotspots" : "Frisco Pollution Hotspots"}</title>
        </Helmet>
    );
}
