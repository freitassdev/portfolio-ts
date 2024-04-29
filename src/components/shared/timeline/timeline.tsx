import React from 'react';
import './timeline.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import saberLogo from "@/assets/images/saber-logo.png";
import { useTranslation } from 'react-i18next';
const Timeline: React.FC = () => {
    const { t } = useTranslation();
    return (
        <VerticalTimeline lineColor='hsl(var(--primary))'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'hsl(var(--primary))', boxShadow: '0 3px 0 hsl(var(--secondary))' }}
                contentArrowStyle={{ borderRight: '7px solid hsl(var(--primary))' }}
                date={t("components.timeline.items.etec.date")}
                iconStyle={{ background: 'hsl(var(--primary-foreground))', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                icon={<img width="40px" src="https://static.wixstatic.com/media/01601d_aa1ff15d320a40a794ce1a1437b53468~mv2.png/v1/fit/w_2500,h_1330,al_c/01601d_aa1ff15d320a40a794ce1a1437b53468~mv2.png" />}
            >
                <h3 className="vertical-timeline-element-title font-semibold">{t("components.timeline.items.etec.title")}</h3>
                <h4 className="vertical-timeline-element-subtitle text-sm text-muted-foreground">{t("components.timeline.items.etec.subtitle")}</h4>
                <p className='font-sans !font-light !leading-5'>
                    {t("components.timeline.items.etec.description")}
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'hsl(var(--primary))', boxShadow: '0 3px 0 hsl(var(--secondary))' }}
                contentArrowStyle={{ borderRight: '7px solid hsl(var(--primary))' }}
                date={t("components.timeline.items.saber.date")}
                iconStyle={{ background: 'hsl(var(--primary-foreground))', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                icon={<img width="45px" src={saberLogo} />}
            >
                <h3 className="vertical-timeline-element-title font-semibold">{t("components.timeline.items.saber.title")}</h3>
                <h4 className="vertical-timeline-element-subtitle text-sm text-muted-foreground">{t("components.timeline.items.saber.subtitle")}</h4>
                <p className='font-sans !font-light !leading-5'>
                    {t("components.timeline.items.saber.description")}
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
};

export default Timeline;