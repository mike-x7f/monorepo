import { SocialsEnum } from "common"
import { cn } from "utils"
import {
  Discord,
  MediaIcon,
  Medium,
  Megaphone,
  SnapshotLogo,
  Telegram,
  Twitter,
  X7Logo,
  YouTube,
} from "icons"

import { Metadata } from "next"
import Link from "next/link"

import { generateMetadataFromDoc } from "@/lib/generateMetadataFromDoc"
import { SiteContentContainer } from "@/components/site-content-container"
import { Heading } from "@/app/(marketing)/components/heading"

const metadata = {
  title: "Community",
  description:
    "Experience the Power of Community at X7 Finance: Our vibrant community is the heart of our DeFi ecosystem. Comprising of passionate crypto enthusiasts, innovative thinkers, and dedicated investors, the X7 Finance community actively contributes to our democratic DAO governance, shares insights, and supports each other in navigating the DeFi landscape. Join us and be part of a community that's shaping the future of decentralized finance.",
  slug: "/community",
  section: "default",
}

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataFromDoc(metadata)
}

export default function CommunityPage() {
  return (
    <div>
      <Heading
        id={"community"}
        title={"Community"}
        subHeader="One of the best communities in all of DeFi, come say hello"
      />
      <SiteContentContainer>
        <div className="grid grid-cols-1 gap-8 pt-10 mt-4 border-t not-prose border-zinc-900/5 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
          {socials.map((social) => (
            <Social key={social.href} social={social} />
          ))}
        </div>
      </SiteContentContainer>
    </div>
  )
}

function Social({ social }: any) {
  return (
    <div
      key={social.href}
      className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5  group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative px-4 pt-12 pb-4 rounded-2xl">
        <SocialIcon fill={social?.fill} icon={social.icon} />
        <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
          <Link
            target={"_blank"}
            referrerPolicy={"no-referrer"}
            href={social.href}
          >
            <span className="absolute inset-0 rounded-2xl" />
            {social.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {social.description}
        </p>
      </div>
    </div>
  )
}

function SocialIcon({ icon: Icon, fill }: any) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-violet-300/10 dark:group-hover:ring-violet-400">
      <Icon
        className={cn(
          !!fill
            ? fill
            : `dark:fill-white/10 dark:stroke-zinc-400 fill-zinc-700/10 stroke-zinc-700`,
          `transition-colors duration-300 h-7 w-7 group-hover:stroke-zinc-900 dark:group-hover:fill-violet-300/10 dark:group-hover:stroke-violet-400`
        )}
      />
    </div>
  )
}

const socials = [
  {
    href: SocialsEnum.telegram,
    fill: "text-[#0088cc] dark:stroke-white/40",
    name: "Telegram",
    description:
      "The main X7 Finance Telegram channel. Join our active, bold and fearless DeFi community!",
    icon: Telegram,
  },
  {
    href: SocialsEnum.website,
    fill: "fill-black dark:fill-white",
    name: "Main Website",
    description:
      "Main project website - engineered and maintained by the X7 Finance Founding Team.",
    icon: X7Logo,
  },
  {
    href: SocialsEnum.discord,
    name: "Discord",
    fill: "text-[#7289da]",
    description:
      "Join us on Discord for a more focused experience by topic. We have a dedicated channel for each topic of discussion.",
    icon: Discord,
  },
  {
    href: SocialsEnum.twitter,
    name: "Twitter",
    fill: "text-[#1da1f2]",
    description:
      "Follow us on Twitter and stay up to date with tweets about X7 Finance ecosystem including the latest updates, giveaways, and more.",
    icon: Twitter,
  },
  {
    href: SocialsEnum.youtube,
    name: "YouTube",
    fill: "text-[#ff0000]",
    description:
      "Check out our videos and some of our longer-form talks and content on YouTube. Subscribe to our channel to get notified when new videos are available.",
    icon: YouTube,
  },
  {
    href: SocialsEnum.announcements,
    name: "X7 Telegram Announcements",
    description:
      "A channel for official announcements from the X7 DAO team. Subscribe to get notified when new updates are available.",
    icon: Megaphone,
  },
  {
    href: SocialsEnum.media,
    name: "Media Channel",
    description:
      "Join us on Discord for a more focused experience by topic. We have a dedicated channel for each topic of discussion.",
    icon: MediaIcon,
  },
  {
    href: SocialsEnum.medium,
    name: "Medium",
    fill: "text-[#000000]",
    description:
      "On Medium you can find many articles detailing, educating and speculating about the past and future of the X7 Ecosystem.",
    icon: Medium,
  },
  {
    href: SocialsEnum.snapshot,
    name: "Snapshot.org",
    description:
      "Have your say on changes to the X7 Ecosystem, hold $X7DAO tokens to vote, or cast advisory proposals if you hold 500k $X7DAO tokens.",
    icon: SnapshotLogo,
  },
]
