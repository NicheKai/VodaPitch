const templates = [
     {
        name: 'Trade in Pitch (Before Device)',
        description: `Get values from vodafone website trade in tool.`,
        fields: [
            { id: 'traddev', type: 'text', label: 'Trade in device' },
            { id: 'devval', type: 'text', label: 'Trade in value' },
            { id: 'newdev', type: 'text', label: 'Upgrade Device' },
            {
                id: 'bonustoggle',
                type: 'dropdown',
                label: 'Bonus',
                options: ['No bonus', 'With bonus'],
                valueMap: {
                    'No bonus': ' ',
                    'With bonus': 'You might be able to get a bonus of £'
                }
            },
            { id: 'bonus', type: 'text', label: 'Bonus Amount(£)' },
            { id: 'tradtotal', type: 'text', label: 'Total Trade in(£)' },
            { id: 'monthly', type: 'text', label: 'Monthly Value(£)' }

        ],
        baseText: `Whilst I am getting you a pitch for your device  I just want to make you aware your current [traddev] could be worth up to £[devval] when traded in. Since you are looking to purchase the [newdev]. [bonustoggle] [bonus] That's £[tradtotal] in total which works out to £[monthly] off your sim plan per month for 24 months.
Should I talk you through how to get a code?`
    },
    {
        name: 'Device Pitch',
        description: 'Evo Plans',
        fields: [
            { id: 'deviceModel', type: 'text', label: 'Device Model' },
            { id: 'storageSize', type: 'dropdown', label: 'Storage Size', options: ['128GB', '256GB', '512GB', '1TB', '2TB', '64GB'] },
            { id: 'deviceData', type: 'text', label: 'Total Data(GB)' },
            { id: 'totalMonthly', type: 'text', label: 'Total Cost(£)' },
            { id: 'upfrontCost', type: 'text', label: 'Upfront Cost(£)' },
            { id: 'deviceCost', type: 'text', label: 'Device Cost(£)' },
            { id: 'loanLength', type: 'dropdown', label: 'Loan Length', options: ['36 months', '24 months'] },
            { id: 'airtimeCost', type: 'text', label: 'Airtime Cost(£)' },
            { id: 'Roaming', type: 'dropdown', label: 'Roaming', options: ['', 'EU Roaming', 'Global Roaming'] },
            { id: 'Ent', type: 'dropdown', label: 'Entertainment', options: ['', 'Entertainment'] }

        ],
        baseText: `We can do the [deviceModel] [storageSize]
Unlimited calls, texts and [deviceData]GB data [Roaming] [Ent]
Total cost = £[totalMonthly] per month
There is an upfront cost of £[upfrontCost] plus a £6.99 delivery fee which can be either paid today or added to your next bill
The direct debit will be split into 2 with your device being £[deviceCost] per month over a [loanLength] loan agreement and the airtime plan being £[airtimeCost] per month on a 24-month contract  

If this cost is a little higher than youd like you can get your trade in code from the trade in toolkit on the Vodafone App and we can Trade In your current device to lower costs for the new one! 
Should we get this ordered for you?
`
    },
    {
        name: 'Accessories Pitches',
        description: `Accessories Pitches`,
        fields: [
            {
                id: 'accpitch',
                type: 'dropdown',
                label: 'Accessories',
                options: ['Plug pitch (Newer than iPhone 15)', 'Plug Pitch (Older than iPhone 15)', 'Case/Screen Protector £22'],
                valueMap: {
                    'Plug pitch (Newer than iPhone 15)': `This device does not come with a plug! It's a USB C connection too - for just £20 you can get a Belkin super fast charging plug with your new phone! Super fast charging  getting your phone from 0-50% in just 24 minutes.  Shall we get this added so you are set when the phone arrives?`,
                    'Plug Pitch (Older than iPhone 15)': `Before we proceed the phones don't come with a plug in the box anymore. I see you are on an older apple model and an  old Apple USB plug will not be compatible with the new type c port and cable included in the box. What we can do is  add the Belkin 30W plug for just £20 which we will add to the next bill so you can be confident you'll be able to charge your phone as soon as you have it. Shall we get this added for you?`,
                    'Case/Screen Protector £22': `As we move on in terms I have just found a bundle deal with your phone were I can add a case and screen protector for only £22 pound which we can add to your next bill, shall we get these added so you're protected as soon as you open the box?`
                }
            }
        ],
        baseText: `[accpitch]`
    },
    {
        name: 'Insurance Pitch',
        description: `Question 1 – Have you ever dropped your phone before?

Question 2- Have you ever broken your phone and had to pay to get it fixed?`,
        fields: [
            { id: 'damageCover', type: 'text', label: 'Damage Cover(£)' },
            { id: 'lossCover', type: 'text', label: 'Loss, theft and damage Cover(£)' },
            {
                id: 'screenToggle',
                type: 'dropdown',
                label: 'Screen Cover',
                options: ['No screen cover', 'Screen Damage'],
                valueMap: {
                    'No screen cover': ' ',
                    'Screen Damage': `Screen Damage – cracks fixed fast
Price £`
                }
            },
            { id: 'screenCost', type: 'text', label: 'Screen cost(£) - If applicable' }

        ],
        baseText: `Now you've chosen your phone, lets make sure you're protected!

Loss, Theft and Damage Cover – total peace of mind
Price Per Month £[lossCover]

Damage Cover – accidents happen, we’ve got you
Price Per Month £[damageCover]

[screenToggle][screenCost]

Plus enjoy:
✔ Next-day replacement
✔ Cancel anytime

Should we get one of these added for you so you're covered from the moment your phone arrives?`
    },
    {
        name: 'Broadband Pitch',
        description: 'HBB Plans',
        fields: [
            { id: 'custAddress', type: 'text', label: 'Address' },
            { id: 'hbbCost', type: 'text', label: 'Price(£)' },
            { id: 'hbbSpeed', type: 'text', label: 'Speed(mbps)' },

        ],
        baseText: `I can see you don't have vodafone broadband on the account, I just want to make you aware as you have a mobile you have exclusive discounts on broadband. We offer broadband at your address, [custAddress] and I can do £[hbbCost] for [hbbSpeed]mbps. Would you like to know more information around this after we complete your initial query?`
    },
     
    {
        name: 'Watch Pitch(New)',
        description: 'After credit watch pitch',
        fields: [
            { id: 'linecountcredit', type: 'text', label: 'Lines Passed' },
            { id: 'creditdevice', type: 'text', label: 'Upgrade Device' },
            { id: 'totalpricecredit', type: 'text', label: 'Watch Price(£)' },

        ],
        baseText: `Your credit check is complete and you have passed for [linecountcredit] lines! As you are a valued customer and taking out the [creditdevice] we can do a watch to pair with this for only £[totalpricecredit] monthly. Would you like to know more about this at the end of this phone upgrade?`
    },
   
    {
        name: 'Watch Pitch',
        description: `EVO Watch Pitch`,
        fields: [
            { id: 'watchdevice', type: 'text', label: 'Watch Model' },
            { id: 'watchprice', type: 'text', label: 'Total Cost(£)' },
            { id: 'upfrontammount', type: 'text', label: 'Upfront Cost(£)' },
            { id: 'watchmonthly', type: 'text', label: 'Device Cost(£)' },
            { id: 'monthlyterm', type: 'dropdown', label: 'Loan Length', options: ['36 monthly payments', '24 monthly payments'] },
            { id: 'watchairtime', type: 'text', label: 'Airtime Cost(£)' }

        ],
        baseText: `We can do the [watchdevice] for only £[watchprice] per month with £[upfrontammount] upfront!

This is [monthlyterm] of £[watchmonthly] for the device loan and 24 monthly payments of £[watchairtime] for the connectivity.

How does this sound?`
    },
    {
        name: 'Tablet Evo Pitch',
        description: 'Evo Plans',
        fields: [
            { id: 'evodeviceModel', type: 'text', label: 'Device Model' },
            { id: 'evostorageSize', type: 'dropdown', label: 'Storage Size', options: ['128GB', '256GB', '512GB', '1TB', '2TB', '64GB'] },
            { id: 'evodeviceData', type: 'text', label: 'Total Data(GB)' },
            { id: 'evototalMonthly', type: 'text', label: 'Total Cost(£)' },
            { id: 'evoupfrontCost', type: 'text', label: 'Upfront Cost(£)' },
            { id: 'evodeviceCost', type: 'text', label: 'Device Cost(£)' },
            { id: 'evoloanLength', type: 'dropdown', label: 'Loan Length', options: ['48 months', '36 months', '24 months'] },
            { id: 'evoairtimeCost', type: 'text', label: 'Airtime Cost(£)' },
            { id: 'evoRoaming', type: 'dropdown', label: 'Roaming', options: ['', 'EU Roaming', 'Global Roaming'] }

        ],
        baseText: `We can do the [evodeviceModel] [evostorageSize]
Including [evodeviceData]GB data [evoRoaming]
Total cost = £[evototalMonthly] per month
There is an upfront cost of £[evoupfrontCost] plus a £6.99 delivery fee which can be either paid today or added to your next bill
The direct debit will be split into 2 with your device being £[evodeviceCost] per month over a [evoloanLength] loan agreement and the airtime plan being £[evoairtimeCost] per month on a 24-month contract  
`
    },
    {
        name: 'Tablet Addlines',
        description: `Addline tablet pitches. Updated 20/10/2025`,
        fields: [
            {
                id: 'tabpitch',
                type: 'dropdown',
                label: 'Tablets',
                options: ['No tablet', 'Apple iPad A16', 'Samsung Galaxy Tab A9'],
                valueMap: {
                    'No tablet': '',
                    'Apple iPad A16': `Before we finish of your sim today we have an amazing offer on a  Apple iPad A16 you could take advantage of.

This is available for just £9.50 across 48 Month's on a interest free loan and a 1GB Data plan attached to this for just £8 meaning you can get all of this today for just £17.50 per month. 

Please note this comes with a £30 Upfront fee alongside a £6.99 Delivery

Would you like to proceed with this amazing offer?`,
                    'Samsung Galaxy Tab A9': `Before we finish of your sim today we  have an amazing offer on a Samsung Galaxy Tab A9 you could take advantage of.

This tablet is £6 across 36 Month's on A interest free loan and a 1GB Data plan attached to this for just £8 meaning you can get all of this today for just £14 per month. 
Would you like to proceed with this amazing offer?`
                }
            }
        ],
        baseText: `[tabpitch]`
    },
        {
        name: 'Watch Addlines',
        description: `Watch addline pitches for after a device upgrade. Updated 20/10/2025`,
        fields: [
            { id: 'linecount', type: 'text', label: 'No. of lines passed' },
            { id: 'devicename', type: 'text', label: 'Order device' },
            { id: 'addwatchname', type: 'text', label: 'Watch Name' },
            { id: 'deviceaddwatch', type: 'text', label: 'Device cost' },
            { id: 'watchaddairtime', type: 'text', label: 'Airtime Cost' },
            { id: 'watchaddtotal', type: 'text', label: 'Total Cost' },
            
            
        ],
        baseText: `So I have just seen you passed credit for [linecount] lines. As you are taking out the [devicename], I can do you the [addwatchname]. I can do the watch over a 36 month interest free loan at £[deviceaddwatch] and then a one number connectivity plan on a 24 month airtime contract at £[watchaddairtime] and so all together this would be £[watchaddtotal]. How does this sound to you?`
    },
     {
        name: 'After Watch Pitch',
        description: `Pitches for after a watch is declined by the customer`,
        fields: [
            {
                id: 'objectionhandle',
                type: 'dropdown',
                label: 'After Watch Pitching',
                options: ['After Watch'],
                valueMap: {
                    'After Watch': 'No problem at all. I thought I would also make you aware as you have an account with us you get exclusive discount on additional services such as SIM only plans, tablets, laptops and iPads that can be added directly to your account. Would you like me to go over any of these with you today?'
                }
            }
        ],
        baseText: `[objectionhandle]`
    },
    {
        name: 'Discount Term',
        description: `Sim Only Discount Term (Missing from basics terms.)`,
        fields: [
            { id: 'ammount12', type: 'text', label: 'Discount £ or %' },
            { id: 'discounttime', type: 'text', label: 'Discount Duration' },
            { id: 'afterdiscount', type: 'text', label: 'Price after discount' }

        ],
        baseText: `You will receive a discount of [ammount12] for [discounttime]

Your full monthly cost including your discount will be £[afterdiscount] Inc. VAT

We are not able to apply any further discounts to a plan that is already discounted.`
    },
    {
        name: 'Embed Links',
        description: `Hide your link in some text for nuance.`,
        fields: [
            { id: 'hreflink', type: 'text', label: 'Link' },
            { id: 'hreftext', type: 'text', label: 'Text' }
        ],
        baseText: `<a href="[hreflink]" target="_blank">[hreftext]</a> `
    },
    {
        name: 'Pitch Card (Not Working)',
        description: 'A new way to pitch devices, not ready for chats yet',
        fields: [
            {
                id: 'CBrand',
                type: 'dropdown',
                label: 'Brand',
                options: ['Apple', 'Samsung', 'Google'],
                valueMap: {}
            },
            {
                id: 'CDeviceImage',
                type: 'dropdown',
                label: 'Device Model',
                options: [],
                valueMap: {}
            },
            { id: 'CstorageSize', type: 'dropdown', label: 'Storage Size', options: ['128GB', '256GB', '512GB', '1TB', '2TB', '64GB'] },
            { id: 'CdeviceData', type: 'text', label: 'Total Data' },
            { id: 'CtotalMonthly', type: 'text', label: 'Total Cost(£)' },
            { id: 'CupfrontCost', type: 'text', label: 'Upfront Cost(£)' },
            { id: 'CdeviceCost', type: 'text', label: 'Device Cost(£)' },
            {
                id: 'Cloanlength',
                type: 'dropdown',
                label: 'Loan Length',
                options: ['36 months', '24 months'],
                valueMap: {
                    '36 months': '36m',
                    '24 months': '24m'
                }
            },
            { id: 'CairtimeCost', type: 'text', label: 'Airtime Cost(£)' },
            {
                id: 'Croaming',
                type: 'dropdown',
                label: 'Roaming',
                options: ['No Roaming', 'EU Roaming', 'Global Roaming'],
                valueMap: {
                    'No Roaming': ' ',
                    'EU Roaming': '<div style="text-align: center; margin: 5px 0; padding: 5px; background: linear-gradient(to right, #E60000, #FF2E2E); border-radius: 4px; font-size: 10px;"><span style="color: #ffffff; font-weight: 600;">Inclusive roaming to 51 Locations</span></div>',
                    'Global Roaming': '<div style="text-align: center; margin: 5px 0; padding: 5px; background: linear-gradient(to right, #E60000, #FF2E2E); border-radius: 4px; font-size: 10px;"><span style="color: #ffffff; font-weight: 600;">Inclusive roaming to 83 Locations</span></div>'
                }
            }
        ],
        baseText: `<div style="width: 200px; line-height: 1.3; margin: 0 auto; padding: 10px; background: #fff; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); font-family: 'Segoe UI', Arial, sans-serif; border: 1px solid #f0f0f0;">
<div style="text-align: center; margin-bottom: 8px;"><img style="width: 100%; max-height: 120px; object-fit: contain; border-radius: 8px;" src="[CDeviceImage]" alt="Phone" /></div>
<div style="text-align: center; color: #1a1a1a; font-weight: bold; font-size: 15px; margin-bottom: 4px; letter-spacing: -0.2px;">[CDeviceName]</div>
<div style="text-align: center; color: #d60000; font-size: 11px; margin-bottom: 6px; font-weight: 600;">[CstorageSize] &bull; [CdeviceData] Data</div>[Croaming]
<div style="text-align: center; margin: 6px 0; padding: 6px; background: linear-gradient(to bottom, #f9f9f9, #f0f0f0); border-radius: 4px; font-size: 11px; border: 1px solid #e8e8e8;"><span style="color: #000; font-weight: bold; font-size: 13px;">Only &pound;[CtotalMonthly] per month</span><br /><span style="font-size: 10px; color: #666;">&pound;[CupfrontCost] upfront &bull; &pound;6.99 Delivery</span></div>
<div style="text-align: center; margin: 6px 0; padding: 6px; background: linear-gradient(to right, #E60000, #CC0000); border-radius: 4px; font-size: 11px;"><span style="color: #ffffff; font-weight: bold;">Price breakdown:</span><br /><span style="font-size: 10px; color: #ffffff; display: inline-block; margin-top: 2px;">Device Loan &bull; [Cloanlength] &bull; &pound;[CdeviceCost]</span><br /><span style="font-size: 10px; color: #ffffff;">Airtime Plan &bull; 24m &bull; &pound;[CairtimeCost]</span></div>
<div style="text-align: center; margin: 6px 0 0 0; padding: 6px; background: #f8f8f8; border-radius: 4px; font-size: 10px; border-top: 1px solid #e8e8e8;"><span style="color: #333; font-weight: 500;">How does this sound?</span></div>
</div>`
    }
];

// Device database for Pitch Card
const deviceDatabase = {
    Apple: {
        'iPhone SE (2022)': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-se-2022-1.jpg',
        'iPhone 13': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-2.jpg',
        'iPhone 13 Mini': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-mini-2.jpg',
        'iPhone 13 Pro': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-2.jpg',
        'iPhone 13 Pro Max': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-2.jpg',
        'iPhone 14': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-2.jpg',
        'iPhone 14 Plus': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-plus-2.jpg',
        'iPhone 14 Pro': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-4.jpg',
        'iPhone 14 Pro Max': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-4.jpg',
        'iPhone 15': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-2.jpg',
        'iPhone 15 Plus': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-plus-2.jpg',
        'iPhone 15 Pro': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-2.jpg',
        'iPhone 15 Pro Max': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-2.jpg',
        'iPhone 16': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-2.jpg',
        'iPhone 16 Plus': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-plus-2.jpg',
        'iPhone 16e': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16e-2.jpg',
        'iPhone 16 Pro': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-2.jpg',
        'iPhone 16 Pro Max': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-max-2.jpg',
        'iPhone 17': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-17-2.jpg',
        'iPhone 17 Pro': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-17-pro-2.jpg',
        'iPhone 17 Pro Max': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-17-pro-max-2.jpg',
        'iPhone Air': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-air-2.jpg'
    },
    Samsung: {
        'Galaxy S21': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-5g-2.jpg',
        'Galaxy S21 Plus': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-plus-5g-2.jpg',
        'Galaxy S21 Ultra': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-2.jpg',
        'Galaxy S22': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-5g-3.jpg',
        'Galaxy S22 Plus': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-plus-5g-3.jpg',
        'Galaxy S22 Ultra': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-ultra-5g-4.jpg',
        'Galaxy S23': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-5g-2.jpg',
        'Galaxy S23 Plus': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-plus-5g-2.jpg',
        'Galaxy S23 Ultra': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-ultra-5g-3.jpg',
        'Galaxy S24': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-5g-sm-s921-2.jpg',
        'Galaxy S24 FE': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-fe-2.jpg',
        'Galaxy S24 Plus': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-edge-2.jpg',
        'Galaxy S24 Ultra': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-2.jpg',
        'Galaxy S25': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-sm-s931-2.jpg',
        'Galaxy S25 FE': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-fe-02.jpg',
        'Galaxy S25 Edge': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-edge-2.jpg',
        'Galaxy S25 Plus': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-plus-sm-s936-2.jpg',
        'Galaxy S25 Ultra': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-ultra-sm-s938-2.jpg',
        'Galaxy Z Fold6': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold6-3.jpg',
        'Galaxy Z Flip6': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-flip6-6.jpg',
        'Galaxy Z Fold7': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold7-3.jpg',
        'Galaxy Z Flip7': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-flip7-5.jpg',
        'Galaxy Z Flip7 FE': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-flip7-fe-2.jpg',
        'Galaxy A05s': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a05s-2.jpg',
        'Galaxy A16': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a16-5g-2.jpg',
        'Galaxy A17': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-13.jpg',
        'Galaxy A36': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-2.jpg',
        'Galaxy A56': 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-2.jpg'
    },
    Google: {
        'Pixel 9': 'https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-2.jpg',
        'Pixel 9a': 'https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9a-5.jpg',
        'Pixel 9 Pro': 'https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-pro-2.jpg',
        'Pixel 9 Pro Fold': 'https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-pro-fold-4.jpg',
        'Pixel 10': 'https://fdn2.gsmarena.com/vv/pics/google/google-pixel-10-12.jpg',
        'Pixel 10 Pro': 'https://fdn2.gsmarena.com/vv/pics/google/google-pixel-10-pro-12.jpg',
        'Pixel 10 Pro XL': 'https://fdn2.gsmarena.com/vv/pics/google/google-pixel-10-pro-xl-12.jpg',
        'Pixel 10 Pro Fold': 'https://fdn2.gsmarena.com/vv/pics/google/google-pixel-10-pro-fold-00.jpg'
    }
};

let currentTemplate = null;

const sidebar = document.querySelector('.sidebar');
const pitchForm = document.getElementById('pitch-form');
const templateTitle = document.getElementById('template-title');
const templateDescription = document.getElementById('template-description');
const copyButton = document.getElementById('copy-button');
const preview = document.getElementById('preview');

templates.forEach(template => {
    const link = document.createElement('a');
    link.textContent = template.name;
    link.href = '#';
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentTemplate = template;
        renderTemplate(template);
    });
    sidebar.appendChild(link);
});

function renderTemplate(template) {
    if (!template) return;

    document.getElementById('welcome-content').style.display = 'none';
    document.getElementById('knowledge-base-section').style.display = 'none';
    document.getElementById('template-content').style.display = 'block';

    templateTitle.textContent = template.name;
    templateDescription.textContent = template.description;
    pitchForm.innerHTML = '';

    templateTitle.textContent = template.name;
    templateDescription.textContent = template.description;
    pitchForm.innerHTML = '';

    if (template.name === 'Pitch Card (Not Working)') {
        const container = document.createElement('div');
        container.className = 'pitch-card-container';

        const formSection = document.createElement('div');
        formSection.className = 'pitch-card-form';

        const previewSection = document.createElement('div');
        previewSection.className = 'pitch-card-preview';
        previewSection.id = 'pitch-card-preview';

        template.fields.forEach(field => {
            const label = document.createElement('label');
            label.textContent = field.label;

            let inputElement;
            if (field.type === 'text') {
                inputElement = document.createElement('input');
                inputElement.type = 'text';
                inputElement.id = field.id;
                if (field.placeholder) inputElement.placeholder = field.placeholder;
                if (field.value) inputElement.value = field.value;
            } else if (field.type === 'dropdown') {
                inputElement = document.createElement('select');
                inputElement.id = field.id;
                field.options.forEach(option => {
                    const optionEl = document.createElement('option');
                    optionEl.value = option;
                    optionEl.textContent = option;
                    inputElement.appendChild(optionEl);
                });
            }

            inputElement.addEventListener('input', updatePreview);

            if (field.id === 'CBrand') {
                inputElement.addEventListener('change', updateDeviceOptions);
            }

            formSection.appendChild(label);
            formSection.appendChild(inputElement);
        });

        container.appendChild(formSection);
        container.appendChild(previewSection);
        pitchForm.appendChild(container);

        updateDeviceOptions();
    } else {
        template.fields.forEach(field => {
            const label = document.createElement('label');
            label.textContent = field.label;

            let inputElement;
            if (field.type === 'text') {
                inputElement = document.createElement('input');
                inputElement.type = 'text';
                inputElement.id = field.id;
            } else if (field.type === 'dropdown') {
                inputElement = document.createElement('select');
                inputElement.id = field.id;
                field.options.forEach(option => {
                    const optionEl = document.createElement('option');
                    optionEl.value = option;
                    optionEl.textContent = option;
                    inputElement.appendChild(optionEl);
                });

                if (field.valueMap) {
                    const description = document.createElement('div');
                    description.className = 'field-description';
                    description.textContent = ' ';
                    pitchForm.appendChild(description);
                }
            }

            inputElement.addEventListener('input', updatePreview);

            pitchForm.appendChild(label);
            pitchForm.appendChild(inputElement);
        });
    }

    updatePreview();
}

function updateDeviceOptions() {
    const brandSelect = document.getElementById('CBrand');
    const deviceSelect = document.getElementById('CDeviceImage');

    if (!brandSelect || !deviceSelect) return;

    const selectedBrand = brandSelect.value;
    const devices = deviceDatabase[selectedBrand];

    deviceSelect.innerHTML = '';

    if (devices) {
        Object.keys(devices).forEach(deviceName => {
            const optionEl = document.createElement('option');
            optionEl.value = devices[deviceName];
            optionEl.textContent = deviceName;
            deviceSelect.appendChild(optionEl);
        });
    }

    updatePreview();
}

function updatePreview() {
    if (!currentTemplate) return;

    let script = currentTemplate.baseText;
    currentTemplate.fields.forEach(field => {
        const placeholder = `[${field.id}]`;
        let value = document.getElementById(field.id)?.value || '';

        if (field.valueMap && field.valueMap[value]) {
            value = field.valueMap[value];
        }

        script = script.replace(placeholder, value);
    });

    if (currentTemplate.name === 'Pitch Card (Not Working)') {
        const deviceImageSelect = document.getElementById('CDeviceImage');
        if (deviceImageSelect) {
            const selectedText = deviceImageSelect.options[deviceImageSelect.selectedIndex].text;
            script = script.replace('[CDeviceName]', selectedText);
        }
    }

    if (currentTemplate.name === 'Pitch Card (Not Working)') {
        const previewSection = document.getElementById('pitch-card-preview');
        if (previewSection) {
            previewSection.innerHTML = script;
        }
        preview.textContent = script;
    } else {
        preview.textContent = script;
    }
}

// Copy
copyButton.addEventListener('click', () => {
    if (!currentTemplate) return;

    let script = currentTemplate.baseText;
    currentTemplate.fields.forEach(field => {
        const placeholder = `[${field.id}]`;
        let value = document.getElementById(field.id)?.value || '';

        if (field.valueMap && field.valueMap[value]) {
            value = field.valueMap[value];
        }

        script = script.replace(placeholder, value);
    });

    // Special handling for Pitch Card [CDeviceName]
    if (currentTemplate.name === 'Pitch Card (Not Working)') {
        const deviceImageSelect = document.getElementById('CDeviceImage');
        if (deviceImageSelect) {
            const selectedText = deviceImageSelect.options[deviceImageSelect.selectedIndex].text;
            script = script.replace('[CDeviceName]', selectedText);
        }
    }

    navigator.clipboard.writeText(script).then(() => {
        const originalText = copyButton.textContent;
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
            copyButton.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});











