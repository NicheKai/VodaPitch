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
There is an upfront cost of £[upfrontCost] plus a £6.99 delivery fee
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
                    'Case/Screen Protector £22': `As we move on in terms I have just found a bundle deal with your phone were I can add a case and screen protector for only £22 which we can add to your next bill, shall we get these added so you're protected as soon as you open the box?`
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
        name: 'Watch Pitch(After Credit)',
        description: 'After credit watch pitch',
        fields: [
            { id: 'linecountcredit', type: 'text', label: 'Lines Passed' },
            { id: 'creditdevice', type: 'text', label: 'Upgrade Device' },
            { id: 'totalpricecredit', type: 'text', label: 'Watch Price(£)' },

        ],
        baseText: `Your credit check is complete and you have passed for [linecountcredit] lines! As you are a valued customer and taking out the [creditdevice] we can do a watch to pair with this for only £[totalpricecredit] monthly. Would you like to know more about this at the end of this phone upgrade?`
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
        name: 'Watch Pitch(Evo)',
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
        name: 'Tablet Pitch(Evo)',
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
        name: 'Objection Handles',
        description: `objection handles`,
        fields: [
            {
                id: 'objhand',
                type: 'dropdown',
                label: 'Objections',
                options: ['We have loads of plugs. (Accessory Objection)', 'I want to keep it as a spare. (Trade-In Objection)'],
                valueMap: {
                    'We have loads of plugs. (Accessory Objection)': 'I see you are on an [objdevice], so can you confirm you have a USBC plug as this will be the only plug that will work with the type of cable you will get and I would hate to know that you wouldn’t be able to charge your phone!',
                    'I want to keep it as a spare. (Trade-In Objection)': 'This is completely your choice  but we have our experts in store and on chats if you do run into any issues with your phone and if you traded in you can save up to £[objprice] monthly on your airtime, would the discount be more beneficial for you than keeping it in a draw?'
                }
            },
            { id: 'objdevice', type: 'text', label: 'Old Device(Accessory Objection)' },
            { id: 'objprice', type: 'text', label: 'Monthly(Trade-In Objection)(£)' }

        ],
        baseText: `[objhand]`
    },
    {
        name: 'Useful Links (Forms)',
        description: `Sim Only Discount Term (Missing from basics terms.)`,
        fields: [
            {
                id: 'formlink',
                type: 'dropdown',
                label: 'Useful links',
                options: ['PAYG to PAYM', 'Security Reset(PIN)', 'HBB Equipment Return Form', 'Trade in link', 'CityFibre Checker', 'OpenReach Checker', 'Open Order Cancellation'],
                valueMap: {
                    'PAYG to PAYM': 'https://www.vodafone.co.uk/payg-to-paym-form/',
                    'Security Reset(PIN)': 'https://www.vodafone.co.uk/securityreset/',
                    'HBB Equipment Return Form': 'https://oneknowledge.internal.vodafone.com/iforms/equipment-return',
                    'Trade in link': 'https://www.vodafone.co.uk/mobile/vodafone-trade-in',
                    'CityFibre Checker': 'https://cityfibre.com/homes/installation',
                    'OpenReach Checker': 'https://www.openreach.com/fibre-checker/my-products',
                    'Open Order Cancellation': 'https://oneknowledge.vfl.vodafone/iforms/stuck-order-form'
                }
            },
        ],
        baseText: `[formlink]`
    },
    {
        name: 'Warning Messages(Are we connected)',
        description: `Non Responder`,
        fields: [
            {
                id: 'warningmes',
                type: 'dropdown',
                label: 'Non Responer',
                options: ['Non Responder 7 mins', 'Non Responder 10 mins', 'Non Resolved 7 mins', 'Non Resolved 10 mins', 'Complete Query 7 mins', 'Complete Query 10 mins'],
                valueMap: {
                    'Non Responder 7 mins': 'We haven’t heard from you yet. Would you like to carry on chatting with me?',
                    'Non Responder 10 mins': 'As I’ve not heard from you, Im closing this chat. Please feel free to connect with us again in case of any queries',
                    'Non Resolved 7 mins': 'I’m awaiting your response to help you with your query. Are we still connected?',
                    'Non Resolved 10 mins': 'As I haven’t heard from you, I’m closing this chat. Please feel free to connect with us again in case of any queries.',
                    'Complete Query 7 mins': 'I’m awaiting your response to help you with your query. Are we still connected?',
                    'Complete Query 10 mins': 'We’ve resolved your query, and since we’ve not heard from you, we’ve sent you a text message confirming the actions we’ve taken on your account today. Thank you for contacting Vodafone'
                }
            },
        ],
        baseText: `[warningmes]`
    },
    {
        name: 'Comm Tool',
        description: `Expanded comm tool`,
        fields: [
            { id: 'vul', type: 'dropdown', label: 'Vulnerability completed?', options: ['No', 'Yes'] },
            { id: 'cname', type: 'text', label: 'Customer Name' },
            { id: 'csec', type: 'dropdown', label: 'DPA', options: ['N/A', 'High Risk', 'OTAC', 'PIN', 'Memorable Word'] },
            { id: 'creason', type: 'text', label: 'What has the customer come on for?' },
            { id: 'discussed', type: 'text', label: 'What was discussed in the chat?  ( detailed )' },
            { id: 'anychanges', type: 'dropdown', label: 'Any changes made on the account?', options: ['No', 'Yes'] },
            { id: 'transferq', type: 'dropdown', label: 'Did you transfer the call or did the cx leave with  no further questions?', options: ['No', 'Yes'] },
            { id: 'team', type: 'text', label: 'what team did you transfer to and why' }
        ],
        baseText: `1.) Vulnerable Customer script completed today [Yes / No]
[vul]
2.) Who was the caller?
[cname]
3.) Passed/failed DPA checks
[csec]
4.) What has the customer come on for?
[creason]
5.) What was discussed in the chat?  ( detailed )
[discussed]
6.) Any changes made on the account?
[anychanges]
7.)  Did you transfer the call or did the cx leave with no further questions?
[transferq]
8.) what team did you transfer to and why?
[team]
`
    }
];


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

    {
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
            if (field.type === 'booltest') {
                inputElement = document.createElement('BUTTON');
                inputElement.id - field.id;
                
            } else

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











