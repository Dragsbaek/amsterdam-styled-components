import React from 'react'
import { action } from '@storybook/addon-actions'
import { css } from '@datapunt/asc-core'
import { ReactComponent as ChevronRight } from '@datapunt/asc-assets/lib/Icons/ChevronRight.svg'
import { ReactComponent as ChevronDown } from '@datapunt/asc-assets/lib/Icons/ChevronDown.svg'
import { ReactComponent as ExternalLink } from '@datapunt/asc-assets/lib/Icons/ExternalLink.svg'
import { ReactComponent as MenuIcon } from '@datapunt/asc-assets/lib/Icons/Menu.svg'
import { MenuItem, MenuLabel, Header, SubMenu, styles } from '../../../index'
import BoxWrapper from '../../../internals/Box/BoxWrapper'
import ContentFiller from '../../../internals/ContentFiller/ContentFiller'
import Menu, { Props } from '../../Menu/Menu'
import { breakpoint } from '../../../utils'
import HeaderSearchBar from '../HeaderSearchBar'

const outsideBackgoundColor = '#E6E6E6'
const contentBackgrountColor = '#ffffff'

console.log(styles)
const DataportaalHeaderWrapperStyle = css`
  ${styles.HeaderContentStyle} {
    justify-content: flex-end;
  }

  ${styles.SearchBarMenuStyle} {
    @media screen and ${breakpoint('min-width', 'tabletM')} {
      display: none;
    }
  }

  ${styles.HeaderNavigationStyle} > ${styles.SearchBarStyle} {
    @media screen and ${breakpoint('max-width', 'tabletM')} {
      display: none;
    }

    flex-grow: 1;

    ${styles.TextFieldStyle} {
      flex-grow: 0;
      width: 100%;
      max-width: 430px;
    }
  }

  ${styles.MenuBarStyle} {
    @media screen and ${breakpoint('max-width', 'tabletM')} {
      display: none;
    }
  }

  ${styles.MenuDropDownStyle} {
    @media screen and ${breakpoint('min-width', 'tabletM')} {
      display: none;
    }
  }
`

const MenuDefault = (props: Props) => (
  <Menu {...props}>
    <MenuItem onClick={action('click')}>One</MenuItem>
    <SubMenu arrowIcon={<ChevronDown />} label="Two">
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        One
      </MenuItem>
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        Two
      </MenuItem>
      <MenuLabel>Two</MenuLabel>
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        One
      </MenuItem>
      <MenuItem icon={<ChevronRight />} onClick={action('click')}>
        Two
      </MenuItem>
      <MenuItem icon={<ExternalLink />} onClick={action('click')}>
        Show more
      </MenuItem>
    </SubMenu>
    <MenuItem onClick={action('click')}>Three</MenuItem>
  </Menu>
)

const MenuMobile = () => <MenuDefault mobile icon={<MenuIcon />} />

const HeaderTallDataportaalStory: React.FC<{}> = () => {
  return (
    <BoxWrapper backgroundColor={outsideBackgoundColor}>
      <Header
        tall
        title="Data en informatie"
        homeLink="http://data.amsterdam.nl"
        fullWidth={false}
        css={DataportaalHeaderWrapperStyle}
        navigation={
          <>
            <HeaderSearchBar
              placeholder="Enter the search text"
              onChange={() => {
                action(`text changed`)
              }}
              onSubmit={() => {
                action(`button clicked`)
              }}
            />
            <MenuDefault />
            <MenuMobile />
          </>
        }
      />
      <ContentFiller
        backgroundColor={contentBackgrountColor}
        maxWidth="1800px"
        headerSize="tall"
      />
    </BoxWrapper>
  )
}

export default HeaderTallDataportaalStory
