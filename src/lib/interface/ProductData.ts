export interface ProductData {
    shortSpec: ShortSpec
    color: deviceColor[]
    chipsetImage: string
    moreDescription: string[]
    price: string
    installment: string
}

interface ShortSpec {
    cpu: string
    gpu: string
    ram: string
    rom: string
}

interface deviceColor {
    name: string
    image: string
}