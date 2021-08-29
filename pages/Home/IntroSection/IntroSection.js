import styled from "@emotion/styled";

import { Typography, mediaQuery, colors, flow } from "tokens";
import { ContentFlow } from "layouts";

const StyledWrapper = styled.div`
    background: ${colors.primary.dark};
    color: #ffffff;
    padding: var(--space-s-m);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: clamp(100px, 96vh, 40rem);
    /* ${flow(32)} */

    ${mediaQuery("sm")} {
        min-height: clamp(200px, 90vh, 60rem);
    }

    h1 {
        ${Typography("Headline", { isUI: false })}
    }

    h2 {
        ${Typography("TitleAlpha")}
    }

    h3 {
        ${Typography("Headline")}
        max-width: 20ch;
        text-align: center;
        margin-bottom: var(--space-s-l);
    }

    p {
        ${Typography("Body", { isUI: false })}
        max-width: 60ch;
    }
`;

export function IntroSection(props) {
    const { text } = props;
    return (
        <StyledWrapper>
            <h3>Curabitur blandit tempus ardua ridiculus sed magna.</h3>
            <ContentFlow gap={"m"}>
                <p>
                    Intro Section Contra legem facit qui id facit quod lex
                    prohibet. Idque Caesaris facere voluntate liceret: sese
                    habere. Tityre, tu patulae recubans sub tegmine fagi dolor.
                    Nihil hic munitissimus habendi senatus locus, nihil horum?
                    Curabitur est gravida et libero vitae dictum. Inmensae
                    subtilitatis, obscuris et malesuada fames.
                </p>
                <p>
                    Intro Section Contra legem facit qui id facit quod lex
                    prohibet. Idque Caesaris facere voluntate liceret: sese
                    habere. Tityre, tu patulae recubans sub tegmine fagi dolor.
                    Nihil hic munitissimus habendi senatus locus, nihil horum?
                    Curabitur est gravida et libero vitae dictum. Inmensae
                    subtilitatis, obscuris et malesuada fames.
                </p>
                <p>
                    Intro Section Contra legem facit qui id facit quod lex
                    prohibet. Idque Caesaris facere voluntate liceret: sese
                    habere. Tityre, tu patulae recubans sub tegmine fagi dolor.
                    Nihil hic munitissimus habendi senatus locus, nihil horum?
                    Curabitur est gravida et libero vitae dictum. Inmensae
                    subtilitatis, obscuris et malesuada fames.
                </p>
                <p>
                    Intro Section Contra legem facit qui id facit quod lex
                    prohibet. Idque Caesaris facere voluntate liceret: sese
                    habere. Tityre, tu patulae recubans sub tegmine fagi dolor.
                    Nihil hic munitissimus habendi senatus locus, nihil horum?
                    Curabitur est gravida et libero vitae dictum. Inmensae
                    subtilitatis, obscuris et malesuada fames.
                </p>
                <p>
                    Intro Section Contra legem facit qui id facit quod lex
                    prohibet. Idque Caesaris facere voluntate liceret: sese
                    habere. Tityre, tu patulae recubans sub tegmine fagi dolor.
                    Nihil hic munitissimus habendi senatus locus, nihil horum?
                    Curabitur est gravida et libero vitae dictum. Inmensae
                    subtilitatis, obscuris et malesuada fames.
                </p>
                <p>
                    Intro Section Contra legem facit qui id facit quod lex
                    prohibet. Idque Caesaris facere voluntate liceret: sese
                    habere. Tityre, tu patulae recubans sub tegmine fagi dolor.
                    Nihil hic munitissimus habendi senatus locus, nihil horum?
                    Curabitur est gravida et libero vitae dictum. Inmensae
                    subtilitatis, obscuris et malesuada fames.
                </p>
                <p>
                    Intro Section Contra legem facit qui id facit quod lex
                    prohibet. Idque Caesaris facere voluntate liceret: sese
                    habere. Tityre, tu patulae recubans sub tegmine fagi dolor.
                    Nihil hic munitissimus habendi senatus locus, nihil horum?
                    Curabitur est gravida et libero vitae dictum. Inmensae
                    subtilitatis, obscuris et malesuada fames.
                </p>
            </ContentFlow>
        </StyledWrapper>
    );
}
