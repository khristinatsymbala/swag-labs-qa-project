import { InventoryIteam } from "./inventoryItemType";

//id - header-container
export const expectedLogoText = 'Swag Labs'//id = app_logo
export const expectedShoppingCartImg = '/cart3x.3669d74ad0f420aa005c.svg'; // id - shopping-cart-link

//id burger menu -  open-menu 
export const expectedBurgerMenuIcon = '/static/media/menu3x.52cc17a327296e6394f33e8c20abc62c.svg' //srcset = ''
//bm-item-list
export const expectedAllIteamsButtonInSideMenuText = 'All Items' // inventory-sidebar-link
export const expectedAboutButtonInSideMenuText = 'About' // about-sidebar-link
export const expectedLogOutsButtonInSideMenuText = 'Logout' // logout-sidebar-link
export const expectedResetAppStateButtonInSideMenuText = 'Reset App State' // reset-sidebar-link

export const expectedAllIteamsButtonInSideMenuUrl = '#' // inventory-sidebar-link href=
export const expectedAboutButtonInSideMenuUrl = 'https://saucelabs.com/' // about-sidebar-link href=
export const expectedLogOutsButtonInSideMenuUrl = '#' // logout-sidebar-link href=
export const expectedResetAppStateButtonInSideMenuUrl = '#' // reset-sidebar-link href=

//id - secondary-header
export const expectedTitleTextSubHeader = 'Product' // testId - title

//Sorting - test id - product-sort-container
//Option 1 - value="az" 
export const expectedSortOptionOneAZ = 'Name (A to Z)'
//Option 2 - value="za" 
export const expectedSortOptionOneZA = 'Name (Z to A)'
//Option 3 - value="lohi" 
export const expectedSortOptionOneLohi = 'Price (low to high)'
//Option 4 - value="hilo" 
export const expectedSortOptionOneHilo = 'Price (high to low)'

//Inventory iteams
export const expectedInventoryIteams: InventoryIteam[] = [
    {
        inventory_item_img: {
            dataTest: 'item-4-img-link',
            alt: 'Sauce Labs Backpack', src: '/static/media/sauce-backpack-1200x1500.0a0b85a385945026062b.jpg',
        },
        inventory_item_description: {
            dataTestHref: 'item-4-title-link',
            name: 'Sauce Labs Backpack',
            descriptionText: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
        },
        price: '29.99'

    },
    {
        inventory_item_img: {
            dataTest: 'item-0-img-link',
            alt: 'Sauce Labs Bike Light', src: '/static/media/bike-light-1200x1500.37c843b09a7d77409d63.jpg',
        },
        inventory_item_description: {
            dataTestHref: 'item-0-title-link',
            name: 'Sauce Labs Bike Light',
            descriptionText: `'A red light isn't the desired state in testing but it sure helps when riding your bike at night.Water - resistant with 3 lighting modes, 1 AAA battery included.'`,
        },
        price: '9.99'
    },
    {
        inventory_item_img: {
            dataTest: 'item-1-img-link',
            alt: 'Sauce Labs Bolt T-Shirt', src: '/static/media/bolt-shirt-1200x1500.c2599ac5f0a35ed5931e.jpg',
        },
        inventory_item_description: {
            dataTestHref: 'item-0-title-link',
            name: 'Sauce Labs Bolt T-Shirt',
            descriptionText: 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.',
        },
        price: '15.99'
    },
    {
        inventory_item_img: {
            dataTest: 'item-5-img-link',
            alt: 'Sauce Labs Fleece Jacket', src: '/static/media/sauce-pullover-1200x1500.51d7ffaf301e698772c8.jpg',
        },
        inventory_item_description: {
            dataTestHref: 'item-5-title-link',
            name: 'Sauce Labs Fleece Jacket',
            descriptionText: `'It's not every day that you come across a midweight quarter- zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.'`,
        },
        price: '49.99'
    },
    {
        inventory_item_img: {
            dataTest: 'item-2-img-link',
            alt: 'Sauce Labs Onesie', src: '/static/media/red-onesie-1200x1500.2ec615b271ef4c3bc430.jpg',
        },
        inventory_item_description: {
            dataTestHref: 'item-2-title-link',
            name: 'Sauce Labs Onesie',
            descriptionText: `'Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.'`,
        },
        price: '7.99'
    },
    {
        inventory_item_img: {
            dataTest: 'item-3-img-link',
            alt: 'Test.allTheThings() T-Shirt (Red)', src: '/static/media/red-tatt-1200x1500.30dadef477804e54fc7b.jpg',
        },
        inventory_item_description: {
            dataTestHref: 'item-3-title-link',
            name: 'Test.allTheThings() T-Shirt (Red)',
            descriptionText: `'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.'`,
        },
        price: '15.99'
    }
]
export const indexItem = 3
//Footer
//Url for socials
export const expectededTwitterUrl = 'https://twitter.com/saucelabs' // social-twitter
export const expectededFacebookUrl = 'https://www.facebook.com/saucelabs' //social-facebook
export const expectededLinkedInUrl = 'https://www.linkedin.com/company/sauce-labs/' //social-linkedin

//footer-copyrights
export const expectedCopyrightsText = '© 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy' //footer-copy