window.addEventListener('message', function(event) {
    if (event.data.action === 'navigate') {
        const iframe = document.getElementById('product-iframe');
        iframe.src = event.data.page;
        setTimeout(() => {
            iframe.contentWindow.postMessage({
                action: 'loadProduct',
                product: event.data.product
            }, '*');
        }, 500);
    }
});
