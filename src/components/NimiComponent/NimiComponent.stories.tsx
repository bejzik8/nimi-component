import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import { ThemeProvider } from '../../theme'
import { NimiComponent } from './NimiComponent'
import { Nimi, NimiImageType, NimiBlockchain, NimiLinkType, NimiWidgetType, NimiThemeType } from '../../types'

const nimi: Nimi = {
  displayName: 'NimiComponent',
  image: {
    type: NimiImageType.URL,
    url: 'https://ipfs.io/ipfs/bafkreigkp5o6b5pwgxfbcyt2iz7afvhmupacqxv2y2af7ufw52yvtni7bi'
  },
  addresses: [
    {
      address: '0xb492873D940dAc02B5021dFF82282d8374509582',
      blockchain: NimiBlockchain.ETHEREUM
    },
    {
      address: '0x26358E62C2eDEd350e311bfde51588b8383A9315',
      blockchain: NimiBlockchain.ETHEREUM
    }
  ],
  description:
    'Host your personal page on your ENS domain! Nimi 0.1.alpha live on EthereumMainnet:) #devconnect #ETHAmsterdam',
  ensAddress: '0x26358E62C2eDEd350e311bfde51588b8383A9315',
  widgets: [
    {
      type: NimiWidgetType.POAP,
      context: {
        tokenIds: ['5742834', '5740068', '5742199', '5733154', '5743494', '5769722']
      }
    }
  ],
  ensName: 'nimi.eth',
  links: [
    {
      type: NimiLinkType.GITHUB,
      title: 'Github',
      content: 'https://github.com/bejzik8'
    },
    {
      type: NimiLinkType.LINKEDIN,
      title: 'LinkedIn',
      content: 'https://www.linkedin.com/in/basic-mirko/'
    },
    { type: NimiLinkType.DISCORD, title: 'Discord', content: 'tmrk24#0963' },
    { type: NimiLinkType.KEYBASE, title: 'Keybase', content: 'bejzik8' },
    { type: NimiLinkType.TWITTER, title: 'Twitter', content: 'bejzik8' },
    {
      type: NimiLinkType.TELEGRAM,
      title: 'Telegram',
      content: 'https://t.me/bejzik8'
    },
    { type: NimiLinkType.EMAIL, title: 'Gmail', content: 'bejzik8@gmail.com' }
  ],
  theme: {
    type: 'RAAVE'
  }
}

export default {
  title: 'Nimi',
  component: NimiComponent,
  decorators: [
    Story => (
      <ThemeProvider theme={{ type: NimiThemeType.DEVCON }}>
        <Container>
          <Story />
        </Container>
      </ThemeProvider>
    )
  ]
} as ComponentMeta<typeof NimiComponent>

const Template: ComponentStory<typeof NimiComponent> = args => <NimiComponent {...args} />

export const Primary = Template.bind({})
Primary.args = {
  nimi
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  overflow: hidden;
`
