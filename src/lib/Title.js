import { Helmet } from 'react-helmet';

export default function Title({title}) {
    return (
        <Helmet>
            <title>{title ? title + " | Frisco Pollution Hotspots" : "Frisco Pollution Hotspots"}</title>
        </Helmet>
    );
}
