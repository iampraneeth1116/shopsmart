import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Seeding database...');

    // Clear existing data
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();

    // Create Categories
    const men = await prisma.category.create({
        data: { name: 'Men', description: 'Elevated essentials for the modern man.' },
    });
    const women = await prisma.category.create({
        data: { name: 'Women', description: 'Timeless pieces for the contemporary woman.' },
    });
    const accessories = await prisma.category.create({
        data: { name: 'Accessories', description: 'The finishing touches that define your look.' },
    });

    console.log('✅ Categories created.');

    // Create Products
    await prisma.product.createMany({
        data: [
            {
                name: 'Minimalist Linen Shirt',
                description: 'A breathable, relaxed-fit linen shirt in a soft ivory tone. Perfect for warm-weather layering.',
                price: 89.00,
                images: ['/images/product_linen_shirt.png'],
                stock: 50,
                categoryId: men.id,
            },
            {
                name: 'Tailored Wool Trousers',
                description: 'Slim-fit trousers crafted from Italian merino wool. A wardrobe staple.',
                price: 165.00,
                images: ['/images/hero_1.png'],
                stock: 35,
                categoryId: men.id,
            },
            {
                name: 'Cashmere Crewneck Sweater',
                description: 'Ultra-soft cashmere knit with a clean crewneck silhouette.',
                price: 245.00,
                images: ['/images/hero_1.png'],
                stock: 25,
                categoryId: men.id,
            },
            {
                name: 'Everyday Oxford Shirt',
                description: 'Classic button-down collar Oxford shirt in light blue.',
                price: 75.00,
                images: ['/images/product_linen_shirt.png'],
                stock: 80,
                categoryId: men.id,
            },
            {
                name: 'Selvedge Denim Jeans',
                description: 'Straight-leg raw Japanese selvedge denim built to last.',
                price: 185.00,
                images: ['/images/hero_2.png'],
                stock: 45,
                categoryId: men.id,
            },
            {
                name: 'Heavyweight Cotton Tee',
                description: 'Boxy-fit premium combed cotton t-shirt in vintage wash.',
                price: 45.00,
                images: ['/images/hero_1.png'],
                stock: 120,
                categoryId: men.id,
            },
            {
                name: 'Water-Resistant Trench',
                description: 'Modern longline trench coat with weather-resistant finishing.',
                price: 320.00,
                images: ['/images/hero_2.png'],
                stock: 15,
                categoryId: men.id,
            },
            {
                name: 'Leather Chelsea Boots',
                description: 'Hand-welted suede Chelsea boots with a slim profile.',
                price: 240.00,
                images: ['/images/hero_1.png'],
                stock: 30,
                categoryId: men.id,
            },
            {
                name: 'Silk Slip Dress',
                description: 'Flowing midi-length slip dress in luxurious mulberry silk.',
                price: 145.00,
                images: ['/images/hero_1.png'],
                stock: 40,
                categoryId: women.id,
            },
            {
                name: 'Classic Tailored Blazer',
                description: 'A structured double-breasted blazer in soft beige wool blend.',
                price: 280.00,
                images: ['/images/hero_1.png'],
                stock: 20,
                categoryId: women.id,
            },
            {
                name: 'Organic Cotton Wrap Top',
                description: 'A flattering wrap silhouette in certified organic cotton.',
                price: 78.00,
                images: ['/images/hero_1.png'],
                stock: 60,
                categoryId: women.id,
            },
            {
                name: 'High-Rise Wide Leg Trousers',
                description: 'Flowy pleated trousers ideal for office to evening transition.',
                price: 135.00,
                images: ['/images/hero_2.png'],
                stock: 40,
                categoryId: women.id,
            },
            {
                name: 'Ribbed Knit Midi Dress',
                description: 'Form-fitting ribbed dress with a subtle side slit.',
                price: 115.00,
                images: ['/images/hero_1.png'],
                stock: 55,
                categoryId: women.id,
            },
            {
                name: 'Oversized Poplin Shirt',
                description: 'Borrowed-from-the-boys oversized fit in crisp white poplin.',
                price: 85.00,
                images: ['/images/product_linen_shirt.png'],
                stock: 75,
                categoryId: women.id,
            },
            {
                name: 'Belted Wool Coat',
                description: 'Dramatically long wool-blend wrap coat in camel.',
                price: 380.00,
                images: ['/images/hero_2.png'],
                stock: 10,
                categoryId: women.id,
            },
            {
                name: 'Satin Camisole',
                description: 'V-neck bias cut camisole top with adjustable spaghetti straps.',
                price: 65.00,
                images: ['/images/hero_1.png'],
                stock: 90,
                categoryId: women.id,
            },
            {
                name: 'Leather Crossbody Bag',
                description: 'Full-grain leather crossbody with adjustable strap and minimal hardware.',
                price: 195.00,
                images: ['/images/hero_2.png'],
                stock: 30,
                categoryId: accessories.id,
            },
            {
                name: 'Silk Scarf',
                description: 'Hand-rolled Italian silk scarf in a subtle geometric print.',
                price: 95.00,
                images: ['/images/hero_2.png'],
                stock: 45,
                categoryId: accessories.id,
            },
            {
                name: 'Classic Leather Belt',
                description: 'Minimalist full-grain leather belt with a matte black buckle.',
                price: 65.00,
                images: ['/images/hero_1.png'],
                stock: 60,
                categoryId: accessories.id,
            },
            {
                name: 'Polarized Sunglasses',
                description: 'Vintage-inspired acetate frames with polarized lenses for everyday wear.',
                price: 125.00,
                images: ['/images/hero_2.png'],
                stock: 25,
                categoryId: accessories.id,
            },
            {
                name: 'Cashmere Beanie',
                description: 'Rib-knit cashmere beanie perfect for the colder months.',
                price: 85.00,
                images: ['/images/hero_1.png'],
                stock: 50,
                categoryId: accessories.id,
            },
            {
                name: 'Minimalist Cardholder',
                description: 'Slim leather card tight enough for 4 cards and folded cash.',
                price: 45.00,
                images: ['/images/hero_2.png'],
                stock: 80,
                categoryId: accessories.id,
            },
            {
                name: 'Woven Fedora Hat',
                description: 'A structured woven fedora ideal for sunny getaways.',
                price: 115.00,
                images: ['/images/hero_1.png'],
                stock: 15,
                categoryId: accessories.id,
            },
            {
                name: 'Canvas Tote Bag',
                description: 'Heavyweight organic cotton canvas tote for your daily essentials.',
                price: 55.00,
                images: ['/images/hero_2.png'],
                stock: 100,
                categoryId: accessories.id,
            },
            {
                name: 'Sterling Silver Cuff',
                description: 'Hand-polished solid 925 sterling silver minimal cuff bracelet.',
                price: 150.00,
                images: ['/images/hero_1.png'],
                stock: 20,
                categoryId: accessories.id,
            }
        ],
    });

    console.log('✅ Products created.');
    console.log('🎉 Seeding complete!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
