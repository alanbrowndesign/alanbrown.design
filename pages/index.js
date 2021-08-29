import Link from "next/link";
import { PageWrapper } from "layouts";
import { Button } from "components";

import { IntroSection } from "pages/Home";

export default function Home() {
    return (
        <PageWrapper>
            <IntroSection />
        </PageWrapper>
    );
}
