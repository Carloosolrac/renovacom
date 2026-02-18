export interface PageModel {
    id: number;
    title: string;
    slug: string;
    created_at: string;
    updated_at: string;
    // Relations
    banner?: BannerModel;
    card_accordeons?: CardAccordeonModel[];
    card_slides?: CardSlideModel[];
    other_services?: OtherServiceModel[];
    card_statistics?: CardStatisticModel[];
    partner_logos?: PartnerLogoModel[];
}

export interface BannerModel {
    id: number;
    page_id: number;
    title: string;
    pretitle: string | null;
    background_video: string;
    button_link?: string;
    button_text?: string;
    has_overlay: boolean;
    has_animation: boolean;
    created_at: string;
    updated_at: string;
    // Relations
    page?: PageModel;
    characteristics: BannerCharacteristicModel[];
}

export interface BannerCharacteristicModel {
    id: number;
    banner_id: number;
    text: string;
    order: number;
    created_at: string;
    updated_at: string;
    // Relations
    banner?: BannerModel;
}

export interface CardAccordeonModel {
    id: number;
    page_id: number;
    background: string;
    icon: string;
    title: string;
    description: string;
    order: number;
    created_at: string;
    updated_at: string;
    // Relations
    page?: PageModel;
}

export interface ContactModel {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    service: string | null;
    message: string;
    created_at: string;
    updated_at: string;
}

export interface CardSlideModel {
    id: number;
    page_id: number;
    section_key: string | null;
    title: string;
    description: string;
    image: string;
    has_white_title: boolean;
    order: number;
    created_at: string;
    updated_at: string;
    // Relations
    page?: PageModel;
}

export interface OtherServiceModel {
    id: number;
    page_id: number;
    title: string;
    link: string | null;
    order: number;
    created_at: string;
    updated_at: string;
    // Relations
    page?: PageModel;
}

export interface CardStatisticModel {
    id: number;
    page_id: number;
    icon: string;
    title: string;
    description: string;
    order: number;
    created_at: string;
    updated_at: string;
    // Relations
    page?: PageModel;
}

export interface PartnerLogoModel {
    id: number;
    page_id: number;
    image: string;
    alt: string;
    order: number;
    created_at: string;
    updated_at: string;
    // Relations
    page?: PageModel;
}

export interface CardAccordeonDownModel {
    id: number;
    page_id: number;
    title: string;
    image: string;
    icon: string;
    order: number;
    created_at: string;
    updated_at: string;
    // Relations
    page?: PageModel;
    items: CardAccordeonDownListModel[];
}

export interface CardAccordeonDownListModel {
    id: number;
    card_accordeon_down_id: number;
    title: string;
    description: string;
    order: number;
    created_at: string;
    updated_at: string;
    // Relations
    card_accordeon_down?: CardAccordeonDownModel;
}
