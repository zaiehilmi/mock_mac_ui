export interface MacBookProConsiderationText {
    image: string
    type: string
    briefIntroduction: string
    points: string[]
}

export var Consideration: MacBookProConsiderationText[] = [{
    image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-m3-icon-mac-202310?wid=72&hei=72&fmt=png-alpha&.v=1697482680961',
    type: 'Apple M3 Chip',
    briefIntroduction: 'M3 brings serious speed and capability to blaze through everyday activities, multitask across apps and video calls, and handle elaborate content in pro apps and games',
    points: [
        'Run multiple apps, speed through thousands of photos', 'Effortlessly edit 4K video',
        'Configure with up to 24GB unified memory',
        'Supports one external display',
    ]
}, {
    image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-m3-pro-icon-mac-202310?wid=72&hei=72&fmt=png-alpha&.v=1696970981318',
    type: "Apple M3 Pro Chip",
    briefIntroduction: 'Building on the M3 chip, M3 Pro provides even greater performance and additional unified memory for more demanding apps and workflows',
    points: [
        'Manipulate gigapixel panoramas, compile millions of lines of code',
        'Edit multiple streams of 8K video',
        'Configure with up to 36GB unified memory',
        'Supports up to two external displays',
    ]
}, {
    image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-m3-max-icon-mac-202310?wid=72&hei=72&fmt=png-alpha&.v=1696970981319',
    type: 'Apple M3 Mac chip',
    briefIntroduction: 'M3 Max powers the most extreme workflows with even more CPU and GPU cores, enormous unified memory and an advanced Media Engine',
    points: [
        'Render intricate 3D content, develop transformer models with billions of parameters',
        'Tackle post-production of 8K video and beyond',
        'Configure with up to 128GB unified memory',
        'Supports up to four external displays',
    ]

}, {
    image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/memory-icon-mac-202310?wid=90&hei=72&fmt=png-alpha&.v=1696970981318',
    type: 'Unified Memory',
    briefIntroduction: 'Faster and more efficient than traditional RAM, unified memory is integrated within the M3 family of chips so apps can quickly share data between the CPU, GPU and Neural Engine',
    points: [
        'Run multiple apps at once while performance remains fast and responsive',
        'Add memory to run more apps simultaneously for faster, more fluid multitasking',
        'With M3 Max, MacBook Pro can be configured with up to 128GB of memory',
    ]
}
]