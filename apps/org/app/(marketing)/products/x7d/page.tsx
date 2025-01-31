import { Metadata } from "next"

import { generateMetadataFromDoc } from "@/lib/generateMetadataFromDoc"
import { SiteContentContainer } from "@/components/site-content-container"
import { UnderConstruction } from "@/components/under-construction"
import { Heading } from "@/app/(marketing)/components/heading"

const metadata = {
  title: "X7D",
  description:
    "Discover X7D: The native token of X7 Finance, playing a pivotal role in our DeFi ecosystem. Learn how X7D is used in governance, incentivizing liquidity provision, and facilitating transactions within the platform. Understand the tokenomics, benefits, and potential returns of holding X7D. Experience the power of decentralized finance with X7D, the heartbeat of X7 Finance.",
  slug: "/products/x7d",
  section: "default",
}

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataFromDoc(metadata)
}

export default function X7D() {
  return (
    <div>
      <Heading
        id={"x7d"}
        title={"x7d"}
        subHeader="X7D is the deposit token for capital providers wishing to contribute to the lending pool."
      />
      <SiteContentContainer>
        <div className="pt-10 mt-4 border-t border-zinc-900/5 dark:border-white/5">
          <UnderConstruction />
        </div>
      </SiteContentContainer>
    </div>
  )
}
