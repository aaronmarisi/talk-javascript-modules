var app = app || {};
app.domain = app.domain || {};

app.domain.customer = { name: 'John' };
app.domain.product = { sku: 'SPARTAN117' };

console.log(app.domain.customer.name);
console.log(app.domain.product.sku);