
const users = [
    {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    salesid: 123,
    name: 'Allstar John',
    email: 'johnisthebest@allstar.com',
    password: 'numberone',
    phone_number: '8005550505 ext 55'
    },

]

const clients = [
    {
        business_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
        clientid: 90000,
        business_name: 'Acme Innovations',
        client_name: 'John',
        email: 'orders@acmeinnovations.com',
        phone_number: '555-123-4567 ext 1023',
        notes: 'N/A'
    },
    {
        business_id: '4f8a22a0-1d2e-45a9-8f7a-b9c8d344f9b3',
        clientid: 90001,
        business_name: 'Bright Solutions LLC',
        client_name: 'Jane',
        email: 'orders@brightsolutions.com',
        phone_number: '555-234-5678 ext 2045',
        notes: 'N/A'
    },
    {
        business_id: '79c8d4f2-3f1e-44b9-a9c6-b7d8f3c9e4a6',
        clientid: 90002,
        business_name: 'Zenith Supplies',
        client_name: 'Robert',
        email: 'orders@zenithsupplies.com',
        phone_number: '555-345-6789 ext 3452',
        notes: 'N/A'
    },
    {
        business_id: '8a9c6d3e-1f2b-40a7-8c7f-e4b9a2d7f8a1',
        clientid: 90003,
        business_name: 'Optima Ventures',
        client_name: 'Alice',
        email: 'orders@optimaventures.com',
        phone_number: '555-456-7890 ext 1234',
        notes: 'N/A'
    },
    {
        business_id: 'f4c3e9d7-a2f8-44c1-b9a6-d7b3c8f9e1a0',
        clientid: 90004,
        business_name: 'Vertex Industries',
        client_name: 'Michael',
        email: 'orders@vertexindustries.com',
        phone_number: '555-567-8901 ext 2122',
        notes: 'N/A'
    },
    {
        business_id: '7d8c9e4b-2f3a-45b8-a9c6-d3e1f7a0c2b9',
        clientid: 90005,
        business_name: 'NexGen Services',
        client_name: 'Emily',
        email: 'orders@nexgenservices.com',
        phone_number: '555-678-9012 ext 3101',
        notes: 'N/A'
    },
    {
        business_id: 'e4a6c9b8-3f2e-4a7d-8f9a-b7c3e2d1a6f5',
        clientid: 90006,
        business_name: 'Metro Solutions',
        client_name: 'Chris',
        email: 'orders@metrosolutions.com',
        phone_number: '555-789-0123 ext 4567',
        notes: 'N/A'
    },
    {
        business_id: 'c9e4a7b6-8f1d-4f9a-a6c3-e2b3a1d8f0c2',
        clientid: 90007,
        business_name: 'Echo Designs',
        client_name: 'Sophia',
        email: 'orders@echodesigns.com',
        phone_number: '555-890-1234 ext 1056',
        notes: 'N/A'
    },
    {
        business_id: 'b8c9f7d2-3e4a-4c6a-9b2f-e4d3f1a8b9c0',
        clientid: 90008,
        business_name: 'Allied Networks',
        client_name: 'Daniel',
        email: 'orders@alliednetworks.com',
        phone_number: '555-901-2345 ext 2067',
        notes: 'N/A'
    },
    {
        business_id: 'a2c7e4f3-8d9b-4c1f-9a7d-b8e1c2f5a4f9',
        clientid: 90009,
        business_name: 'Apollo Electronics',
        client_name: 'Laura',
        email: 'orders@apolloelectronics.com',
        phone_number: '555-012-3456 ext 2073',
        notes: 'N/A'
    },   
];

const vendors = [
    {
        company_id: '3f97b9e3-d2ec-4567-bb09-59d1eaa8a1c0',
        vendorid: 123456,
        company_name: 'Creative Promotions Inc.',
        email: 'orders@creativepromotions.com',
        address: '101 Creative Way, Los Angeles, CA',
        phone_number: '555-101-0101 ext 1001',
        ask: 25.75,
        price_plan: 'Basic Promo Package - $199.99'
    },
    {
        company_id: 'f28e3a70-4bbf-4ec0-88d0-64c46af2ab32',
        vendorid: 234567,
        company_name: 'NextGen Marketing',
        email: 'orders@nextgenmarketing.com',
        address: '202 Future Blvd, San Francisco, CA',
        phone_number: '555-202-0202 ext 2002',
        ask: 30.50,
        price_plan: 'Standard Promo Package - $299.99'
    },
    {
        company_id: '8c01a7d8-7eec-4c3e-bd87-1c3e84c949b2',
        vendorid: 345678,
        company_name: 'Promotional Experts LLC',
        email: 'orders@promotionalexperts.com',
        address: '303 Promo St, New York, NY',
        phone_number: '555-303-0303 ext 3003',
        ask: 22.00,
        price_plan: 'Premium Promo Package - $399.99'
    },
    {
        company_id: 'df24e65f-d2a5-4bc5-9d6e-4d9b72e200d3',
        vendorid: 456789,
        company_name: 'Innovative Gifts Co.',
        email: 'orders@innovativegifts.com',
        address: '404 Gift Ave, Chicago, IL',
        phone_number: '555-404-0404 ext 4004',
        ask: 15.99,
        price_plan: 'Gift Bundle - $149.99'
    },
    {
        company_id: 'e97025f4-10f6-44c2-a4e8-ff2705c84163',
        vendorid: 567890,
        company_name: 'PromoPower',
        email: 'orders@promopower.com',
        address: '505 Power Lane, Miami, FL',
        phone_number: '555-505-0505 ext 5005',
        ask: 18.25,
        price_plan: 'Value Promo Package - $249.99'
    },
    {
        company_id: 'cf8e9e92-73f0-4cb5-90db-5ab5dc935205',
        vendorid: 678901,
        company_name: 'Dynamic Branding Solutions',
        email: 'orders@dynamicbranding.com',
        address: '606 Branding Blvd, Seattle, WA',
        phone_number: '555-606-0606 ext 6006',
        ask: 28.50,
        price_plan: 'Custom Branding Package - $399.99'
    },
    {
        company_id: 'ba512001-66ab-4b5c-94f9-9d457b5c57be',
        vendorid: 789012,
        company_name: 'Visionary Merchandising',
        email: 'orders@visionarymerchandising.com',
        address: '707 Vision St, Austin, TX',
        phone_number: '555-707-0707 ext 7007',
        ask: 35.75,
        price_plan: 'Elite Merchandising Package - $499.99'
    },
    {
        company_id: '9c234b51-df9b-4392-b8c4-2f0c77ac9e63',
        vendorid: 890123,
        company_name: 'SmartPromo Designs',
        email: 'orders@smartpromodesigns.com',
        address: '808 Smart Rd, Denver, CO',
        phone_number: '555-808-0808 ext 8008',
        ask: 20.00,
        price_plan: 'Design and Print Package - $349.99'
    },
    {
        company_id: 'a15f44f4-d88e-4b4e-b1c3-745ec14e4734',
        vendorid: 901234,
        company_name: 'Eco-Friendly Promotions',
        email: 'orders@ecofriendlypromotions.com',
        address: '909 Eco Ln, Portland, OR',
        phone_number: '555-909-0909 ext 9009',
        ask: 27.50,
        price_plan: 'Eco Promo Package - $279.99'
    },
    {
        company_id: '7c5012c2-7eb0-49ea-bc31-0a8ff7070a8a',
        vendorid: 012345,
        company_name: 'Distinctive Events',
        email: 'orders@distinctiveevents.com',
        address: '100 Event St, Boston, MA',
        phone_number: '555-010-1010 ext 1010',
        ask: 24.80,
        price_plan: 'Event Planning Package - $450.00'
    },
    {
        company_id: '2369e45d-4b9c-4815-bb9a-e7e4ec76ed73',
        vendorid: 123890,
        company_name: 'Global Merch Co.',
        email: 'orders@globalmerch.com',
        address: '201 Global Way, Orlando, FL',
        phone_number: '555-123-4567 ext 4567',
        ask: 19.99,
        price_plan: 'International Shipping Package - $389.99'
    },
    {
        company_id: '53d90866-8a3f-4b9e-8977-0517e1ef1d52',
        vendorid: 234901,
        company_name: 'Bright Ideas Agency',
        email: 'orders@brightideas.com',
        address: '302 Bright St, Philadelphia, PA',
        phone_number: '555-234-5678 ext 5678',
        ask: 23.50,
        price_plan: 'Creative Solutions Package - $375.00'
    },
    {
        company_id: 'd2d7e1b8-08e5-4b7d-97c4-4b155f4b1f75',
        vendorid: 345912,
        company_name: 'Champion Prints',
        email: 'orders@championprints.com',
        address: '403 Champion Blvd, San Diego, CA',
        phone_number: '555-345-6789 ext 6789',
        ask: 21.00,
        price_plan: 'Bulk Print Package - $299.99'
    },
    {
        company_id: '456ed4e1-2f85-4b3d-bfd8-d84729d8ff65',
        vendorid: 456023,
        company_name: 'Unique Gifting Solutions',
        email: 'orders@uniquegifting.com',
        address: '504 Unique Ave, Nashville, TN',
        phone_number: '555-456-7890 ext 7890',
        ask: 29.99,
        price_plan: 'Gift Solutions Package - $425.00'
    },
    {
        company_id: 'f6b93a54-6f36-4e37-9a93-d4573c1aab34',
        vendorid: 567134,
        company_name: 'Perfect Presentation',
        email: 'orders@perfectpresentation.com',
        address: '605 Presentation Rd, Charlotte, NC',
        phone_number: '555-567-8901 ext 8901',
        ask: 32.75,
        price_plan: 'Presentation Package - $550.00'
    },
];

const projects = [
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-456789',
        status: 'open',
        due_date: '2024-11-01',
        project_name: 'Alpha Project',
        clientid: 90001,
        vendorid: 123456
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-987654',
        status: 'closed',
        due_date: '2024-11-05',
        project_name: 'Beta Project',
        clientid: 90002,
        vendorid: 234567
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-321456',
        status: 'waiting for proof',
        due_date: '2024-11-10',
        project_name: 'Gamma Project',
        clientid: 90003,
        vendorid: 345678
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-654321',
        status: 'in production',
        due_date: '2024-11-15',
        project_name: 'Delta Project',
        clientid: 90004,
        vendorid: 456789
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-789123',
        status: 'ready to ship',
        due_date: '2024-11-20',
        project_name: 'Epsilon Project',
        clientid: 90005,
        vendorid: 567890
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-123456',
        status: 'open',
        due_date: '2024-11-01',
        project_name: 'Zeta Project',
        clientid: 90006,
        vendorid: 678901
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-654987',
        status: 'closed',
        due_date: '2024-11-05',
        project_name: 'Eta Project',
        clientid: 90007,
        vendorid: 789012
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-321789',
        status: 'waiting for proof',
        due_date: '2024-11-10',
        project_name: 'Theta Project',
        clientid: 90008,
        vendorid: 890123
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-987123',
        status: 'in production',
        due_date: '2024-11-15',
        project_name: 'Iota Project',
        clientid: 90009,
        vendorid: 901234
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-567890',
        status: 'ready to ship',
        due_date: '2024-11-20',
        project_name: 'Kappa Project',
        clientid: 90001,
        vendorid: 012345
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-234567',
        status: 'open',
        due_date: '2024-11-01',
        project_name: 'Lambda Project',
        clientid: 90002,
        vendorid: 123890
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-876543',
        status: 'closed',
        due_date: '2024-11-05',
        project_name: 'Mu Project',
        clientid: 90003,
        vendorid: 234901
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-567123',
        status: 'waiting for proof',
        due_date: '2024-11-10',
        project_name: 'Nu Project',
        clientid: 90004,
        vendorid: 345912
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-456123',
        status: 'in production',
        due_date: '2024-11-15',
        project_name: 'Xi Project',
        clientid: 90005,
        vendorid: 456023
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-789456',
        status: 'ready to ship',
        due_date: '2024-11-20',
        project_name: 'Omicron Project',
        clientid: 90006,
        vendorid: 567134
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-321654',
        status: 'open',
        due_date: '2024-11-01',
        project_name: 'Pi Project',
        clientid: 90007,
        vendorid: 678901
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-654321',
        status: 'closed',
        due_date: '2024-11-05',
        project_name: 'Rho Project',
        clientid: 90008,
        vendorid: 789012
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-987654',
        status: 'waiting for proof',
        due_date: '2024-11-10',
        project_name: 'Sigma Project',
        clientid: 90009,
        vendorid: 890123
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-123789',
        status: 'in production',
        due_date: '2024-11-15',
        project_name: 'Tau Project',
        clientid: 90001,
        vendorid: 901234
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-456987',
        status: 'ready to ship',
        due_date: '2024-11-20',
        project_name: 'Upsilon Project',
        clientid: 90002,
        vendorid: 012345
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-789321',
        status: 'open',
        due_date: '2024-11-01',
        project_name: 'Phi Project',
        clientid: 90003,
        vendorid: 123890
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-654789',
        status: 'closed',
        due_date: '2024-11-05',
        project_name: 'Chi Project',
        clientid: 90004,
        vendorid: 234901
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-321123',
        status: 'waiting for proof',
        due_date: '2024-11-10',
        project_name: 'Psi Project',
        clientid: 90005,
        vendorid: 345912
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-987321',
        status: 'in production',
        due_date: '2024-11-15',
        project_name: 'Omega Project',
        clientid: 90006,
        vendorid: 456023
    },
    {
        salesid: 123,
        name: 'Allstar John',
        po: '123-654123',
        status: 'ready to ship',
        due_date: '2024-11-20',
        project_name: 'Theta Project',
        clientid: 90007,
        vendorid: 567134
    }
];

export { users, vendors, projects, clients };
