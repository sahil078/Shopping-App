document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const searchResults = document.getElementById('search-results');
    const itemsList = document.getElementById('items-list');
    const itemDetails = document.getElementById('item-details');

    // Mock data for clothing items
    const clothingItems = [
        { id: 1, name: 'Casual T-Shirt', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQdDcraBxGrx1InZBOeW56kn8kty5o09ah40qlrzcPcigbLbUhT4QrPg5_ka6IJ04HT0tH5UBlVMcCAD8wsCQSIPgNBjXN3BAySmHGkFtrjFaraQ2Zp-oFt', price: '$20', description: 'A comfortable and casual T-shirt perfect for everyday wear.' },
        { id: 2, name: 'Casual T-Shirt', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSaCTFuq4vyQQChCWxjS140xtz2lsg_JJgqbcDxmDfM19WYcBB52Ya8mGl0c92-O9EPx6CUhC-PmcraMtpkRFEqZs_SutIAFXTca5g3JNpgo0-PUP_tSWfg', price: '$10', description: 'A comfortable and casual T-shirt perfect for everyday wear.' },
        { id: 3, name: 'Denim Jeans', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQIvt16rlr9rr_CY3pLJ_KxbBHAkR-YHSP0BJ1a4Kmm69jovvCMSjlU6sGgEaGaSBkAUBYfZwne-JM0lCsBcq1j7A8YBXoLcY4QpKKygg7jxPZ0bDugxz-aNA', price: '$40', description: 'Classic denim jeans that never go out of style.' },
        { id: 4, name: 'Leather Jacket', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSVJTen_qrVW6Vi5ZuMSEgeSI9O2hyK5DqF2NLUd1egxtHIQJSayLlwDaDmWKbTt4RBAID6KSYO67M-FtiZC-6wflQsafMGqmQ5xk-zbS3WKZOwGL35ajHqsw', price: '$150', description: 'A sleek leather jacket to add an edge to your outfit.' },
        { id: 4, name: 'Summer Dress', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTpi3kmgW1IZr2jhGIQRan2SnrobkNHuCMYj7LQ0G2ma-7CQHWrJNKm5CzFH9HkDOACqV0egIZ_2div3QZP9Icpf9bnnvJt', price: '$50', description: 'A light and airy summer dress for those warm days.' },
        { id: 5, name: 'Running Shoes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQJhfmj35W6m_z62NYeDvmQQJL0dSeSzTiA&s', price: '$70', description: 'High-performance running shoes for your daily runs.' },
    ];

    // Display all items initially
    displayItems(clothingItems);

    // Listen to input on search bar
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase().trim();

        if (query.length > 3) {
            const filteredItems = clothingItems.filter(item =>
                item.name.toLowerCase().includes(query)
            );

            displayResults(filteredItems);
        } else {
            searchResults.classList.add('hidden');
        }
    });

    // Display items in the item list
    function displayItems(items) {
        itemsList.innerHTML = '';

        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('p-4', 'bg-white', 'rounded-lg', 'shadow-lg', 'cursor-pointer');
            itemElement.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="w-full h-40 object-cover rounded-lg mb-4">
          <p class="font-bold">${item.name}</p>
          <p class="text-gray-600">${item.price}</p>
        `;

            // Add click event to display item details
            itemElement.addEventListener('click', () => {
                displayItemDetails(item);
            });

            itemsList.appendChild(itemElement);
        });
    }

    // Display search results
    function displayResults(items) {
        searchResults.innerHTML = '';

        if (items.length === 0) {
            searchResults.innerHTML = '<p class="p-4 text-center text-gray-500">No items found</p>';
            return;
        }

        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('p-4', 'border-b', 'border-gray-300', 'flex', 'items-center', 'cursor-pointer');

            itemElement.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-lg mr-4">
          <div>
            <p class="font-bold">${item.name}</p>
            <p class="text-gray-600">${item.price}</p>
          </div>
        `;

            // Add click event to display item details
            itemElement.addEventListener('click', () => {
                displayItemDetails(item);
            });

            searchResults.appendChild(itemElement);
        });

        searchResults.classList.remove('hidden');
    }

    // Display the details of the selected item
    function displayItemDetails(item) {
        itemDetails.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">${item.name}</h2>
        <img src="${item.image}" alt="${item.name}" class="w-full h-64 object-cover rounded-lg mb-4">
        <p class="text-gray-600 mb-4">${item.price}</p>
        <p class="text-gray-700">${item.description}</p>
      `;

        itemDetails.classList.remove('hidden');
    }
});
