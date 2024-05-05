export interface ProductListingResponse {
    briefMoreDescription: string[];
    chipsetImageUrl: string;
    colors: DeviceColor[];
    id: number;
    installmentPlan: string;
    price: string;
    shortSpec: ShortSpec;
}

export interface ProductCustomizationResponse {
    id: number;
    imageUrl: string;
    keyboardLanguage: string[];
    memory: CustomizationOption[];
    moreDescription: string[];
    powerAdapter: CustomizationOption[];
    productName: string;
    storage: CustomizationOption[];
}
interface CustomizationOption {
    option: string;
    price: string;
}

interface ShortSpec {
    cpu: string
    gpu: string
    ram: string
    rom: string
}

interface DeviceColor {
    name: string
    image: string
}