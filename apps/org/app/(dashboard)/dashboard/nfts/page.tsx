import dynamic from "next/dynamic"

// import { Heading } from "@/components/docs/heading"
import { UtitlityNfts } from "@/components/utilityNfts"
import { Web3Wrapper } from "@/components/web3-wrapper"

export default function NftsPage() {
  return (
    <div className="my-16 xl:max-w-none">
      {/* <Heading
        className="text-xl font-semibold text-slate-900 dark:text-slate-100"
        level={1}
        id="nfts"
        subHeader="X7 Finance has made a series of NFTs available for all types of users of Xchange and the protocol"
      >
        NFTs
      </Heading> */}

      <div className="not-prose border-t border-zinc-900/5 pt-10 dark:border-white/5">
        <Web3Wrapper>
          <UtitlityNfts />
        </Web3Wrapper>
      </div>
    </div>
  )
}
