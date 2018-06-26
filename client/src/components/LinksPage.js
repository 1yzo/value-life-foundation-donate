import React from 'react';
import '../styles/page.css';
import '../styles/links.css';
import Scroll from 'react-scroll';

const LinksPage = (props, ref) => (
    <div className="page" id="temp">
        <div className="page__content page__content--left links" style={{ color: 'white' }}>
            <h1 className="page__content__header" onClick={() => {let scroll = Scroll.animateScroll; scroll.scrollTo(100)}}>  
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
                    href="http://ethics.acusd.edu/poverty.html"
                    target="_blank" rel="noopener noreferrer"
                >
                    Ethics Updates on Poverty and Welfare
                </a>
                <a 
                    href="http://www.ssc.wisc.edu/irp/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Institute for Research on Poverty
                </a>
                <a 
                    href="http://www1.umn.edu/irp/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Institute on Race and Poverty
                </a>
                <a 
                    href="http://www.jcpr.org/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Joint Center for Poverty Research
                </a>
                <a 
                    href="http://www.fordschool.umich.edu/npc/"
                    target="_blank" rel="noopener noreferrer"
                >
                    National Poverty Center
                </a>
                <a 
                    href="http://aspe.hhs.gov/poverty/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Poverty Guidelines, Research, and Measurement 
                </a>
                <a 
                    href="http://www.law.du.edu/povertylawresources/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Poverty Law Resources
                </a>
                <a 
                    href="http://www.worldbank.org/html/prdph/lsms/research/povline/plhome.html"
                    target="_blank" rel="noopener noreferrer"
                >
                    Poverty Lines
                </a>
                <a 
                    href="http://www.ukcpr.org/Index1.html"
                    target="_blank" rel="noopener noreferrer"
                >
                    Poverty Research Center
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
                    href="http://www.fordschool.umich.edu/poverty/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Program on Poverty and Social Welfare Policy
                </a>
                <a 
                    href="http://www.hhh.umn.edu/centers/wilkins"
                    target="_blank" rel="noopener noreferrer"
                >
                    Roy Wilkins Center for Human Relations and Social Justice
                </a>
                <a 
                    href="http://www.rprconline.org/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Rural Poverty Research Center
                </a>
                <a 
                    href="http://www.ruralsociology.org/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Rural Sociological Society
                </a>
                <a 
                    href="http://spiu.gcal.ac.uk/spiu"
                    target="_blank" rel="noopener noreferrer"
                >
                    Scottish Poverty Information Unit
                </a>
                <a 
                    href="http://www.abacon.com/sociology/soclinks/sclass.html"
                    target="_blank" rel="noopener noreferrer"
                >
                    Social Class and Poverty Links
                </a>
                <a 
                    href="http://www.caledoninst.org/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Caledon Institute of Social Policy
                </a>
                <a 
                    href="http://aspe.os.dhhs.gov/poverty/poverty.htm"
                    target="_blank" rel="noopener noreferrer"
                >
                    Federal Poverty Guidelines
                </a>
                <a 
                    href="http://www.ssc.wisc.edu/irp/"
                    target="_blank" rel="noopener noreferrer"
                >
                    Institute for Research on Poverty
                </a>
                <a 
                    href="http://cpmcnet.columbia.edu/dept/nccp/"
                    target="_blank" rel="noopener noreferrer"
                >
                    National Center for Children in Poverty
                </a>
                <a 
                    href="http://www.epn.org/tcf/xxblue.html"
                    target="_blank" rel="noopener noreferrer"
                >
                    Polarization of American Society
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