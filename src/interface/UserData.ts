export interface User {
  country: string,
    display_name: string,
    email: string,
    explicit_content: {
      filter_enabled: boolean,
      filter_locked: boolean
    },
    external_urls: {
      spotify: string
    },
    followers: {
      href: string | null,
      total: number
    },
    href: string,
    id: string,
    images: UserImages[],
    product: string,
    type: string,
    uri: string
  }

  export interface UserImages {
    height: number,
    url: string
    width: number
  }