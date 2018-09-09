import React from 'react';

import '../styles/links.css';
import '../styles/page.css';

const LinksPage = ({ backgroundStyle }) => (
    <div className="page" id="temp">
        <div className="page__content links" style={{ color: 'white', ...backgroundStyle }}>
            <h1 className="page__content__header">
                Fighting poverty is targeted by VLF and
                accordingly we support poverty studies
                and research. Here are some important
                links in this regard:
            </h1>
            <div className="links-holder">
                <a
                    href="http://povertycenter.cwru.edu/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Center on Urban Poverty and Social Change
                </a>
                <a
                    href="http://www.clasp.org/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Center for Law and Social Policy
                </a>
                <a
                    href="http://www.crop.org/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Comparative Research Programme on Poverty
                </a>
                <a
                    href="http://www.ssc.wisc.edu/irp/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Institute for Research on Poverty
                </a>
                <a
                    href="http://www.jcpr.org/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Joint Center for Poverty Research
                </a>
                <a
                    href="http://aspe.hhs.gov/poverty/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Poverty Guidelines, Research, and Measurement
                </a>
                <a
                    href="http://www.northwestern.edu/ipr/research/jcpr.html"
                    target="_blank" rel="noopener noreferrer"
                >
                    Poverty, Race and Inequality Program
                </a>
                <a
                    href="http://www.worldbank.org/poverty/"
                    target="_blank" rel="noopener noreferrer"
                >
                    PovertyNet
                </a>
                <a
                    href="http://www.hhh.umn.edu/centers/wilkins"
                    target="_blank" rel="noopener noreferrer"
                >
                    Roy Wilkins Center for Human Relations and Social Justice
                </a>
                <a
                    href="http://www.ruralsociology.org/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Rural Sociological Society
                </a>
                <a
                    href="http://www.ssc.wisc.edu/irp/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Institute for Research on Poverty
                </a>
                <a
                    href="http://www.sprc.unsw.edu.au/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Social Policy Research Centre
                </a>
            </div>
        </div>
    </div>
);

export default LinksPage;
