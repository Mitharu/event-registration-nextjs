import { classNames } from '../../utility/_joinClassNames'

export interface LinkInterface {
    name : string,
    href : string,
    current : boolean,
    type : 'register' | 'home',
}

export const LinkNavBar = ({
  href, current, type, name
} : LinkInterface) => {
    return(
      <a
        href={href}
        className={
          classNames(
            current ? `bg-[var(--cusNavSecondaryBgColor)] text-[var(--cusNavBarFontColor)]` 
            : `text-[var(--cusContentPrimaryFontColor)] hover:bg-[var(--cusNavBarFontColor)] hover:text-[var(--cusNavSecondaryBgColor)]`,
            'rounded-md px-3 py-2 text-base font-medium font-[family-name:var(--cusFontRegister)]', 
            type == 'register' ? 'ml-auto' : ''
          )
        }
        aria-current={current ? 'page' : undefined}
      >
        {name}
      </a>
    )
}