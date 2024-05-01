export interface ProductData {
    shortSpec: ShortSpec
    color: DeviceColor[]
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

interface DeviceColor {
    name: string
    image: string
}