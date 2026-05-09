import { Email, GitHub, LinkedIn, Twitch, Twitter } from '~/components/svgs'

const iconProps = {
  width: 48,
  height: 48,
  strokeWidth: 0.75,
  className:
    'cursor-pointer text-white/80 transition-all duration-300 hover:text-white'
}

export const socials = [
  {
    icon: <GitHub {...iconProps} />,
    linkProps: { href: 'https://github.com/dorukozerr/', target: '_blank' }
  },
  {
    icon: <Twitch {...iconProps} />,
    linkProps: { href: 'https://www.twitch.tv/d0ruk0z3r', target: '_blank' }
  },
  {
    icon: <Twitter {...iconProps} />,
    linkProps: { href: 'https://x.com/dorukozerrr', target: '_blank' }
  },
  {
    icon: <LinkedIn {...iconProps} />,
    linkProps: {
      href: 'https://www.linkedin.com/in/dorukozer/',
      target: '_blank'
    }
  },
  {
    icon: <Email {...iconProps} />,
    linkProps: {
      href: 'mailto:dorukozer@protonmail.com?subject=Found your email from doruk.wtf'
    }
  }
]
